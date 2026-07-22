# bblocks-viewer-base-plugins

First-party view plugins for [bblocks-viewer](https://github.com/opengeospatial/bblocks-viewer)'s
view-plugin mechanism, reimplementing the viewer's built-in map/3D/web views against the exact
same plugin class contract external authors would use. This is a standalone package — it has no
runtime dependency on bblocks-viewer itself, only on the candidate shape
(`{ type, content, url, label }`) and plugin interface (`static supportedTypes`, optional
`static viewName`, `constructor(candidates, context)`, optional `matches()`, `render(el)`,
optional `destroy(el)`) the host defines. `context` (`{ bblock, viewerConfig }`) is always built
and passed by the host — any bblocks-viewer instance does this regardless of whether a plugin was
statically bundled in or loaded from a register-declared url, so a plugin doesn't need to know
which consumption mode it's running under. Declaring/using that second constructor parameter is
what's optional on the plugin's side — `bblock` itself may be `null` if no bblock context applies,
but the `context` argument is never missing.

## Plugins

| Export | Matches | Notes |
|---|---|---|
| `GeoJsonMapPlugin` | `application/geo+json`, `application/json`, `application/ld+json` whose content parses as a GeoJSON `Feature`/`FeatureCollection` with geometry | Leaflet + `@opengeospatial/jsonld-ui-utils` for JSON-LD-aware popups, using `context.bblock.ldContext` and `context.viewerConfig`'s fallback Rainbow/SPARQL endpoints when supplied (falls back to whatever `@context` the GeoJSON carries inline if the host doesn't pass a `context`). |
| `ThreeDPlugin` | Same types, content containing any 3D geometry (`detect-3d.js`'s `hasAny3DContent`) — either raw GeoJSON with Z coordinates or a CityJSON-like topology (`points`/`edges`/`rings`/`faces`/`shells`/`solids`) | Three.js scene with orbit controls, grid/wireframe/edges/vertices toggles and a reset-camera button, rendered as plain DOM (no Vuetify/mdi — those are host-only). |
| `WebViewPlugin` | `text/html`, `application/xml`, `text/xml` whose candidate has an absolute `http(s)://` url | Points a sandboxed iframe at the url; does not render inline HTML text. |

## Build

```bash
npm install
npm run build
```

Produces `dist/index.js` (exports `GeoJsonMapPlugin`, `ThreeDPlugin`, `WebViewPlugin`) plus
on-demand chunk files for the heavy per-plugin dependencies (leaflet, three,
`@opengeospatial/jsonld-ui-utils`). Each plugin only reaches for its real dependency lazily,
inside its own `import()` call at `render()` time — so declaring only one of the three plugins
doesn't cost the other two's dependency weight. Deploy the whole `dist/` directory together (the
chunk files are fetched relative to `index.js`); don't move `index.js` alone.

## Declaring in a register

```yaml
# bblocks-config.yaml
viewer:
  view-plugins:
    - url: https://example.org/bblocks-viewer-base-plugins/index.js
      export: [GeoJsonMapPlugin, ThreeDPlugin, WebViewPlugin]
```

`export` may be a single name, an array of names (one entry per named export of the module — all
sharing that entry's `weight`), or omitted/`null`/`""`/`[]` to take the module's default export.
This lets one config entry / one `url` pull in every plugin this package ships, since the browser's
module cache dedupes the actual fetch regardless of how many config entries point at it.