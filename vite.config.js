import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// Library build producing dist/index.js (named exports: GeoJsonMapPlugin, ThreeDPlugin,
// WebViewPlugin) plus on-demand chunk files for their heavy dependencies (leaflet, three,
// jsonld-ui-utils). Deliberately leaves Rollup's default code-splitting in place — each plugin
// only reaches for its real dependency inside its own lazy `import()` call at render() time (see
// e.g. geojson-map-plugin.js's loadDeps()), so declaring one plugin shouldn't pull the full
// weight of all three onto the page immediately. The host only ever needs one entry url
// (dist/index.js); the browser resolves chunk `import()`s relative to it, so the whole dist/
// directory just needs to be deployed together.
export default defineConfig({
  build: {
    minify: 'esbuild',
    assetsInlineLimit: Infinity,
    lib: {
      entry: fileURLToPath(new URL('src/index.js', import.meta.url)),
      formats: ['es'],
      fileName: () => 'index.js',
    },
  },
});