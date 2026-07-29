# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

First-party view plugins for [bblocks-viewer](https://github.com/opengeospatial/bblocks-viewer)'s
view-plugin mechanism, reimplementing the viewer's built-in map/3D/web views against the exact same
plugin class contract external authors would use. This package has **no runtime dependency on
bblocks-viewer itself** — only on the candidate shape (`{ type, content, url, label }`) and the
plugin interface (`static supportedTypes`, optional `static viewName`/`static icon`,
`constructor(candidates, context)`, optional `matches()`, `render(el)`, optional `destroy(el)`)
that any host defines. `context` (`{ bblock, viewerConfig, depResolver }`) is always passed by the
host regardless of whether a plugin was statically bundled or loaded from a register-declared url —
a plugin never needs to know which consumption mode it's running under. `context.bblock` may be
`null`; the `context` argument itself is never missing. `context.depResolver` (optional to *use*,
always supplied) lets a plugin share a runtime instance of a heavy CDN-loaded dependency with
another, independently-versioned plugin instead of always fetching its own copy — see
`ThreeDPlugin`'s use of it below and bblocks-viewer's
`.claude/shared-dependency-resolver-design.md` for the full mechanism.

This code was extracted from bblocks-viewer's built-in `GeoJsonMapViewer.vue`/`ThreeDViewer.vue`/
`SandboxedIframe.vue` and `utils/{detect-3d,geojson-3d,topo-geometry}.js` (deleted there in commit
"Migrate built-in map/3D/web views to the view-plugin mechanism") so the viewer's own map/3D/web
tabs are dogfooding the exact same plugin interface external, register-declared plugins use,
instead of a separate hardcoded code path. In the host, these three classes are imported statically
from `@ogc/bblocks-viewer-base-plugins` and merged into plugin matching with `weight: Infinity`, so
they keep sorting before any network-declared plugin — see bblocks-viewer's
`src/composables/view-plugins.js` for the host-side matching/loading logic and
`src/components/bblock/ViewPluginRenderer.vue` for how `render()`/`destroy()` get mounted. That
repo also pulls this package's `master` unpinned (re-resolved in CI via `yarn upgrade`, not the
committed lockfile) since both repos are developed in parallel — a change here is live for the
host on the next build, not on a release cadence.

## Commands

```bash
npm install
npm run build   # vite build -> dist/index.js + on-demand chunks
```

There is no test suite, lint config, or dev server in this package.

## Architecture

- `src/index.js` — barrel export of the three plugin classes (`GeoJsonMapPlugin`, `ThreeDPlugin`,
  `WebViewPlugin`). This is both the npm package's `main`/`exports` entry and the source fed to
  Vite's library build.
- Each plugin file (`src/*-plugin.js`) is fully self-contained: it owns its `supportedTypes`
  matching, its own `matches()`/candidate-picking logic, and its `render()`/`destroy()` DOM
  lifecycle. There is no shared base class — the contract is duck-typed by the host.
- This package is plain JS with no `tsc`/typecheck step, but each plugin class still carries a
  JSDoc `@implements {import('@ogc/bblocks-viewer-plugin-types').ViewPluginClass}` comment for editor
  autocomplete/hover.
  [`bblocks-viewer-plugin-types`](https://github.com/ogcincubator/bblocks-viewer-plugin-types) is
  added as a `github:ogcincubator/bblocks-viewer-plugin-types` devDependency (types only, never a
  runtime dependency) purely so that import resolves — it's a dependency-free single-file package
  holding the single canonical copy of the view-plugin contract (previously duplicated per-repo,
  and briefly a subpath export of `bblocks-viewer` itself before that made every plugin repo's
  `npm install` clone the whole app just for its types), also depended on the same way by
  `bblocks-viewer-topo-feature-plugin` and `bblocks-view-plugin-starter`. Don't reintroduce a local
  `view-plugin.d.ts` copy here, and don't point back at `bblocks-viewer` for types.
- **Lazy heavy deps**: every plugin's real dependency (leaflet, `@opengeospatial/jsonld-ui-utils`)
  is pulled in via a `import()` call inside `render()`/`_mount()`, not at module top level (see
  `loadDeps()` in `geojson-map-plugin.js`). This means declaring only one plugin in a host config
  doesn't cost the other plugins' dependency weight — Rollup's default code-splitting (deliberately
  left untouched in `vite.config.js`) turns each into its own on-demand chunk. Keep new heavy
  imports lazy the same way; don't hoist them to the top of a plugin file.
- **`three` is CDN-loaded, not bundled**: `ThreeDPlugin` fetches `three`/`OrbitControls` from
  `esm.sh` at a pinned version (`THREE_VERSION` in `three-d-plugin.js`), optionally through
  `context.depResolver` so it can share the module instance with `TopoFeaturePlugin`
  (bblocks-viewer-topo-feature-plugin) rather than each loading its own copy — see
  `resolveThree()`/`loadOrbitControls()` and bblocks-viewer's
  `.claude/shared-dependency-resolver-design.md`. `three` is therefore a `devDependency` here
  (types/tooling only, never shipped in `dist/`), not a `dependency`; `scripts/check-three-version.mjs`
  (run as `prebuild`) fails the build if that devDependency version and `THREE_VERSION` drift apart.
  `src/utils/geojson-3d.js` takes `THREE` as a parameter rather than importing it itself, so its
  mesh-building runs against the exact CDN-resolved module instance the scene uses — never
  reintroduce a top-level `import ... from 'three'` there or in any file it's used from, or Vite
  will bundle a second, separate copy of three from the local devDependency.
- `src/utils/mime-type-match.js` is a deliberate **duplicate** of bblocks-viewer's own
  `mime-type-match.js` (the host uses its copy to decide whether to instantiate a plugin at all;
  this copy is used internally by a plugin's own `matches()` to pick candidates). Keep the two
  behaviorally identical if you touch matching logic here.
- `src/utils/detect-3d.js` — `isGeoJson3D`, used by `ThreeDPlugin` to decide whether GeoJSON
  content has Z coordinates worth rendering. Detection for topo-feature's CityJSON-like topology
  format (`points`/`edges`/`rings`/`faces`/`shells`/`solids`) used to live here too — that
  detection function (`isTopoFeatureMultiCollection`) plus `src/utils/topo-geometry.js` and
  `ThreeDPlugin`'s topo-specific solid-mesh-building branch were extracted into the sibling
  [bblocks-viewer-topo-feature-plugin](https://github.com/opengeospatial/bblocks-viewer-topo-feature-plugin)
  repo (`TopoFeaturePlugin`) so that still-actively-tested format can iterate on its own release
  cycle. That repo intentionally **duplicates** this package's generic Three.js scene scaffolding
  (renderer/camera/lights/grid/orbit-controls/resize/animate loop, *and* the wireframe/edges/vertices
  control-bar buttons) rather than sharing it — see its own CLAUDE.md/README for why. The
  edges/vertices toggles themselves are **not** topo-specific — `ThreeDPlugin` still exposes them
  for plain GeoJSON's `LineString`/`Point` geometries (`geojson-3d.js`'s `result.lines`/
  `result.points`), just defaulted to visible rather than topo's default-hidden vertices, since a
  line/point-only GeoJSON document has no mesh to fall back on if hidden (see bblocks-viewer commit
  "Fix GeoJSON 3D rendering bugs"). If you're adding a new detection branch to `ThreeDPlugin`, ask
  whether it belongs here or as its own sibling plugin repo instead, following that precedent —
  but don't assume every topo-gated piece of the old code was topo-specific in concept.
- `src/utils/geojson-3d.js` — the Three.js scene builder `ThreeDPlugin._buildGeoJsonScene` uses,
  loaded via lazy `import()` from inside `three-d-plugin.js`.
- Plugins render as **plain DOM** — no Vuetify/mdi, since those are host-only. `ThreeDPlugin`'s
  control bar icons are hand-rolled inline SVGs using `currentColor` instead.
- Plugins must not overwrite the size of the `el` passed to `render()` — the host already sizes it
  (inline height or a fullscreen dialog's definite-height chain). Only add CSS properties
  additively (e.g. `position`, `overflow`), never via `el.style.cssText = ...` wholesale, or the
  host-set height is lost. See the repeated comment to this effect in each plugin's `render()`.

## Build output contract

`npm run build` produces `dist/index.js` (named exports `GeoJsonMapPlugin`, `ThreeDPlugin`,
`WebViewPlugin`) plus separate chunk files for leaflet and `@opengeospatial/jsonld-ui-utils` (`three`
is no longer one of them — it's fetched from `esm.sh` at runtime instead of bundled). The chunk
files are fetched relative to `index.js`, so the whole `dist/` directory must be deployed
together — never move or reference `index.js` alone.

## Declaring in a register

```yaml
# bblocks-config.yaml
viewer:
  view-plugins:
    - url: https://example.org/bblocks-viewer-base-plugins/index.js
      export: [GeoJsonMapPlugin, ThreeDPlugin, WebViewPlugin]
```

`export` may be a single name, an array of names, or omitted/`null`/`""`/`[]` to take the module's
default export.