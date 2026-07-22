import { mimeTypeMatches } from './utils/mime-type-match.js';
// Static (not dynamic) import: a dynamic `import('...?raw')` issued at runtime from inside a
// package listed in the host's optimizeDeps got served by Vite's dev server with
// Content-Type: text/css instead of being transformed into a JS module — the browser then refuses
// it as a module script (strict MIME-type checking on import()). A static top-level import always
// goes through Vite's normal transform pipeline, avoiding that. Trade-off: leaflet.css's text (not
// the leaflet *library*, which stays lazy below) is now part of this plugin's eagerly-loaded code
// — an acceptable cost, it's a small string next to leaflet/three's actual weight.
import leafletCssRaw from 'leaflet/dist/leaflet.css?raw';

const SUPPORTED_TYPES = ['application/geo+json', 'application/json', 'application/ld+json'];

// Styles the object table jsonld-ui-utils' popup renderer produces inside each marker/feature
// popup (`.object-table`/`.object-property`/`.object-value`, plain classes it emits itself — not
// part of leaflet.css). Carried over from the old GeoJsonMapViewer.vue's global <style> block,
// which had no scoping equivalent to replicate here other than injecting it the same way as
// leaflet.css itself.
const POPUP_TABLE_CSS = `
.leaflet-popup-content .object-table {
  border-collapse: collapse;
  font-size: 0.75rem;
  width: 100%;
}
.leaflet-popup-content .object-table th {
  text-align: left;
  padding: 4px 8px;
  border-bottom: 2px solid #ccc;
  white-space: nowrap;
}
.leaflet-popup-content .object-property,
.leaflet-popup-content .object-value {
  padding: 3px 8px;
  vertical-align: top;
}
.leaflet-popup-content .object-value {
  max-width: 260px;
  overflow-wrap: break-word;
  word-break: break-all;
}
.leaflet-popup-content .object-property {
  font-weight: 500;
  color: #555;
}
.leaflet-popup-content tr:nth-child(odd) > td {
  background-color: rgba(0, 0, 0, 0.05);
}
`;

let depsPromise = null;
let cssInjected = false;

function injectCss(css) {
  if (cssInjected) return;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  cssInjected = true;
}

// Lazy, memoized within a session — mirrors bblocks-viewer's GeoJsonMapViewer.vue loadDeps().
function loadDeps() {
  if (!depsPromise) {
    injectCss(leafletCssRaw + POPUP_TABLE_CSS);
    depsPromise = Promise.all([
      import('leaflet'),
      import('@opengeospatial/jsonld-ui-utils/leaflet'),
      import('leaflet/dist/images/marker-icon.png'),
      import('leaflet/dist/images/marker-icon-2x.png'),
      import('leaflet/dist/images/marker-shadow.png'),
    ]).then(([{ default: L }, { createJsonLDGeoJSONLayer }, markerIcon, markerIcon2x, markerShadow]) => {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: markerIcon.default,
        iconRetinaUrl: markerIcon2x.default,
        shadowUrl: markerShadow.default,
      });
      return { L, createJsonLDGeoJSONLayer };
    });
  }
  return depsPromise;
}

function isValidGeoJson(parsed) {
  if (!parsed || typeof parsed !== 'object') return false;
  if (parsed.type === 'Feature') return !!parsed.geometry;
  if (parsed.type === 'FeatureCollection') {
    return Array.isArray(parsed.features) && parsed.features.some(f => f?.geometry != null);
  }
  return false;
}

// `context` (second constructor arg, optional — see .claude/view-plugins-design.md "Plugin
// interface" in bblocks-viewer) carries host information beyond the candidates themselves:
// `context.bblock` (for bblock.ldContext, used for semantic popups) and `context.viewerConfig`
// (the fallback Rainbow/SPARQL endpoints a register may declare — mirrors what the old
// GeoJsonMapViewer.vue read from configService.config directly). Both optional; a plugin host that
// doesn't supply them just gets popups scoped to whatever @context the GeoJSON carries inline.
export default class GeoJsonMapPlugin {
  static supportedTypes = SUPPORTED_TYPES;
  static viewName = 'Map view';
  static icon = 'mdi-map';

  constructor(candidates, context = {}) {
    this.candidates = candidates;
    this.bblock = context.bblock ?? null;
    this.viewerConfig = context.viewerConfig ?? {};
    this._map = null;
    this._layer = null;
    this._el = null;
  }

  matches() {
    return !!this._pickCandidate();
  }

  _pickCandidate() {
    if (this._candidate) return this._candidate;
    const candidate = this.candidates.find(c => {
      if (!c.type || !c.content) return false;
      if (!SUPPORTED_TYPES.some(t => mimeTypeMatches(t, c.type))) return false;
      try {
        return isValidGeoJson(JSON.parse(c.content));
      } catch {
        return false;
      }
    });
    this._candidate = candidate ?? null;
    return this._candidate;
  }

  render(el) {
    this._el = el;
    // Don't touch el's own size — the host (ViewPluginRenderer) already gives it a real height
    // (inline 300px, or 100% inside the fullscreen dialog's own definite-height chain).
    this._mount(el);
  }

  async _mount(el) {
    const candidate = this._pickCandidate();
    if (!candidate) return;
    const geojson = JSON.parse(candidate.content);
    const { L, createJsonLDGeoJSONLayer } = await loadDeps();
    if (this._el !== el) return; // torn down before deps resolved

    const map = L.map(el, { attributionControl: false, maxZoom: 22 });
    const attControl = L.control.attribution().addTo(map);
    attControl.setPrefix(
      '<a href="https://leafletjs.com/">Leaflet</a> | Semantic map rendering by '
      + '<a href="https://ogcincubator.github.io/jsonld-ui-utils/#leaflet-plugin">OGC Leaflet-LD</a>'
    );
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 22,
      maxNativeZoom: 19,
    }).addTo(map);

    this._map = map;

    const ldContext = this.bblock?.ldContext || undefined;
    const { bblocksFallbackRainbowInstances, bblocksFallbackSparqlEndpoints } = this.viewerConfig;
    const augmentOptions = {};
    if (bblocksFallbackRainbowInstances) augmentOptions.fallbackRainbowInstances = bblocksFallbackRainbowInstances;
    if (bblocksFallbackSparqlEndpoints) augmentOptions.fallbackSparqlEndpoints = bblocksFallbackSparqlEndpoints;

    try {
      const layer = (await createJsonLDGeoJSONLayer(L, geojson, {
        ldContext,
        augmentOptions,
        popupOptions: { maxWidth: 400, maxHeight: 300 },
      })).addTo(map);
      this._layer = layer;
      const bounds = layer.getBounds();
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [20, 20] });
      } else {
        map.setView([0, 0], 2);
      }
    } catch (e) {
      console.warn('GeoJsonMapPlugin: error building layer', e);
      map.setView([0, 0], 2);
    }
  }

  destroy(el) {
    if (this._map) {
      this._map.remove();
      this._map = null;
      this._layer = null;
    }
    if (this._el === el) this._el = null;
  }
}
