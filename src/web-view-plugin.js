import { mimeTypeMatches } from './utils/mime-type-match.js';

// No generic XML here (`application/xml`/`text/xml`) — plain XML has no meaningful "webpage"
// rendering in an iframe (no XSLT association, generally) and the code viewer tab already shows
// it with syntax highlighting, so a web-view tab for it would just be a redundant, unstyled dump.
const SUPPORTED_TYPES = ['text/html', 'application/xhtml+xml'];
const ABSOLUTE_HTTP_URL = /^https?:\/\//;

// Mirrors bblocks-viewer's SandboxedIframe.vue: points an iframe at a remote URL rather than
// injecting raw HTML text, and only matches a candidate that both looks like HTML *and* has
// an absolute http(s) url to point the iframe at (a candidate with only inline `content` has
// nothing to load into src).
//
// @implements {import('@ogc/bblocks-viewer-plugin-types').ViewPluginClass}
export default class WebViewPlugin {
  static supportedTypes = SUPPORTED_TYPES;
  static viewName = 'Web view';
  static icon = 'mdi-web';

  /** @param {import('@ogc/bblocks-viewer-plugin-types').ViewPluginCandidate[]} candidates */
  constructor(candidates) {
    this.candidates = candidates;
    this._candidate = undefined;
    this._el = null;
    this._iframe = null;
    this._onLoad = null;
  }

  matches() {
    return !!this._pickCandidate();
  }

  _pickCandidate() {
    if (this._candidate !== undefined) return this._candidate;
    const candidate = this.candidates.find(c =>
      c.type && c.url
      && SUPPORTED_TYPES.some(t => mimeTypeMatches(t, c.type))
      && ABSOLUTE_HTTP_URL.test(c.url)
    );
    this._candidate = candidate ?? null;
    return this._candidate;
  }

  render(el) {
    this._el = el;
    const candidate = this._pickCandidate();
    if (!candidate) return;

    // Don't overwrite el's own size — see the identical note in geojson-map-plugin.js. `overflow`
    // is set additively so el's host-set height survives.
    el.style.overflow = 'auto';

    const iframe = document.createElement('iframe');
    iframe.src = candidate.url;
    iframe.setAttribute('sandbox', 'allow-same-origin');
    iframe.style.cssText = 'width: 100%; height: 100%; min-height: 300px; border: none; display: block;';

    this._onLoad = () => {
      try {
        const doc = iframe.contentDocument;
        const h = doc?.documentElement?.scrollHeight || doc?.body?.scrollHeight;
        if (h) iframe.style.height = `${h}px`;
      } catch {
        // cross-origin — keep the container's own height
      }
    };
    iframe.addEventListener('load', this._onLoad);

    el.appendChild(iframe);
    this._iframe = iframe;
  }

  destroy(el) {
    if (this._iframe) {
      if (this._onLoad) this._iframe.removeEventListener('load', this._onLoad);
      this._iframe.remove();
      this._iframe = null;
      this._onLoad = null;
    }
    if (this._el === el) this._el = null;
    el.innerHTML = '';
  }
}
