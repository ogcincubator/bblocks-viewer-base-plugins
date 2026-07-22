import { mimeTypeMatches } from './utils/mime-type-match.js';
import { hasAny3DContent, isTopoFeatureMultiCollection } from './utils/detect-3d.js';

const SUPPORTED_TYPES = ['application/geo+json', 'application/json', 'application/ld+json'];

const BUTTON_STYLE = 'width: 26px; height: 26px; border: none; border-radius: 4px; cursor: pointer; '
  + 'display: flex; align-items: center; justify-content: center; padding: 0; '
  + 'box-shadow: 0 1px 3px rgba(0,0,0,0.4);';

function buttonColors(active) {
  return active ? 'background: #1976d2; color: #fff;' : 'background: #fff; color: #333;';
}

// No Vuetify/mdi available (this plugin is plain DOM, no host framework dependency) — small
// self-contained inline SVGs instead, sized/colored via `currentColor` so buttonColors' `color`
// above drives their fill/stroke automatically.
const ICONS = {
  reset: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"/><path d="M20 9V4h-5"/><path d="M4 15v5h5"/><path d="M20 15v5h-5"/></svg>',
  grid: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
  wireframe: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5"/><path d="M12 12v10"/></svg>',
  edges: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="5" cy="19" r="2" fill="currentColor" stroke="none"/><circle cx="19" cy="5" r="2" fill="currentColor" stroke="none"/><line x1="6.5" y1="17.5" x2="17.5" y2="6.5"/></svg>',
  vertices: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" stroke="none"><circle cx="5" cy="5" r="1.6"/><circle cx="12" cy="5" r="1.6"/><circle cx="19" cy="5" r="1.6"/><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/><circle cx="5" cy="19" r="1.6"/><circle cx="12" cy="19" r="1.6"/><circle cx="19" cy="19" r="1.6"/></svg>',
};

// One instance per matched example/transform-output (see host `matchPlugins()`), so all of this
// state is naturally scoped per-candidate-set rather than needing to be re-derived on render.
export default class ThreeDPlugin {
  static supportedTypes = SUPPORTED_TYPES;
  static viewName = '3D view';
  static icon = 'mdi-cube-outline';

  constructor(candidates) {
    this.candidates = candidates;
    this._candidate = undefined;
    this._el = null;
    this._THREE = null;
    this._renderer = null;
    this._camera = null;
    this._controls = null;
    this._gridHelper = null;
    this._resizeObserver = null;
    this._animating = false;
    this._animFrameId = null;
    this._solidMeshes = [];
    this._solidEdges = [];
    this._solidVertices = [];
    this._initialCameraPosition = null;
    this._initialCameraTarget = null;
    this._isTopoFormat = false;
    this._wireframe = false;
    this._showGrid = false;
    this._showEdges = true;
    this._showVertices = false;
  }

  matches() {
    return !!this._pickCandidate();
  }

  _pickCandidate() {
    if (this._candidate !== undefined) return this._candidate;
    const candidate = this.candidates.find(c => {
      if (!c.type || !c.content) return false;
      if (!SUPPORTED_TYPES.some(t => mimeTypeMatches(t, c.type))) return false;
      try {
        return hasAny3DContent(JSON.parse(c.content));
      } catch {
        return false;
      }
    });
    this._candidate = candidate ?? null;
    return this._candidate;
  }

  render(el) {
    this._el = el;
    // Don't overwrite el's own size — see the identical note in geojson-map-plugin.js. Only add
    // `position: relative` (needed so the absolute-positioned control bar anchors to el, not some
    // further-out ancestor), additively rather than via cssText, so el's host-set height survives.
    el.style.position = 'relative';
    this._mount(el).catch(e => console.error('ThreeDPlugin: init failed', e));
  }

  async _mount(el) {
    const candidate = this._pickCandidate();
    if (!candidate) return;
    const data = JSON.parse(candidate.content);

    const [THREE, { OrbitControls }] = await Promise.all([
      import('three'),
      import('three/addons/controls/OrbitControls.js'),
    ]);
    if (this._el !== el) return; // torn down before deps resolved
    this._THREE = THREE;

    const canvasContainer = document.createElement('div');
    canvasContainer.style.cssText = 'height: 100%; width: 100%;';
    el.appendChild(canvasContainer);

    this._isTopoFormat = isTopoFeatureMultiCollection(data);

    const width = canvasContainer.clientWidth || 600;
    const height = canvasContainer.clientHeight || 400;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xadb1b1);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.001, 10000);
    camera.up.set(0, 0, 1);
    this._camera = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    canvasContainer.appendChild(renderer.domElement);
    this._renderer = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    this._controls = controls;

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const d1 = new THREE.DirectionalLight(0xffffff, 0.8);
    d1.position.set(100, 100, 100);
    scene.add(d1);
    const d2 = new THREE.DirectionalLight(0xffffff, 0.3);
    d2.position.set(-100, -100, -100);
    scene.add(d2);
    const d3 = new THREE.DirectionalLight(0xffffff, 0.3);
    d3.position.set(0, -100, 0);
    scene.add(d3);

    this._gridHelper = new THREE.GridHelper(100, 20, 0x444444, 0x222222);
    this._gridHelper.rotation.x = Math.PI / 2;
    this._gridHelper.visible = this._showGrid;
    scene.add(this._gridHelper);

    scene.add(new THREE.AxesHelper(1));

    if (this._isTopoFormat) {
      await this._buildTopoScene(scene, THREE, data);
    } else {
      await this._buildGeoJsonScene(scene, data);
    }
    if (this._el !== el) return; // torn down while scene was building

    this._fitCamera(THREE);
    this._buildControls(el);

    this._resizeObserver = new ResizeObserver(() => {
      if (!this._renderer || !canvasContainer.isConnected) return;
      const w = canvasContainer.clientWidth;
      const h = canvasContainer.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    this._resizeObserver.observe(canvasContainer);

    this._animating = true;
    const animate = () => {
      if (!this._animating) return;
      this._animFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }

  async _buildTopoScene(scene, THREE, data) {
    const {
      buildMaps, buildSolidGeometry, buildSolidEdgeLines,
      createSolidMesh, createVertexMarkers, getFeatures, needsTransparency,
    } = await import('./utils/topo-geometry.js');

    const maps = buildMaps(data);
    const solids = getFeatures(data.solids || []);
    const opacity = needsTransparency(data) ? 0.85 : 1.0;

    solids.forEach((solid, i) => {
      const { geometry } = buildSolidGeometry(solid, maps.shellMap, maps.faceMap, maps.ringMap, maps.edgeMap, maps.pointMap);
      const mesh = createSolidMesh(solid, i, geometry, opacity);
      const edges = buildSolidEdgeLines(solid, maps.shellMap, maps.faceMap, maps.ringMap, maps.edgeMap, maps.pointMap);
      const vertices = createVertexMarkers(geometry);

      mesh.material.wireframe = this._wireframe;
      edges.visible = this._showEdges;
      vertices.visible = this._showVertices;

      scene.add(mesh, edges, vertices);
      this._solidMeshes.push(mesh);
      this._solidEdges.push(edges);
      this._solidVertices.push(vertices);
    });
  }

  async _buildGeoJsonScene(scene, data) {
    const { buildGeoJson3DObjects } = await import('./utils/geojson-3d.js');
    const result = buildGeoJson3DObjects(data);
    result.meshes.forEach(m => { m.material.wireframe = this._wireframe; this._solidMeshes.push(m); });
    result.lines.forEach(l => this._solidEdges.push(l));
    result.points.forEach(p => this._solidVertices.push(p));
    result.objects.forEach(o => scene.add(o));
  }

  _fitCamera(THREE) {
    const allObjects = [...this._solidMeshes, ...this._solidEdges, ...this._solidVertices];
    if (!allObjects.length) return;
    const box = new THREE.Box3();
    allObjects.forEach(o => box.expandByObject(o));
    if (box.isEmpty()) return;

    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const dist = maxDim * 2;

    this._camera.position.set(center.x - dist * 0.7, center.y - dist * 0.7, center.z + dist * 0.7);
    this._camera.near = dist * 0.001;
    this._camera.far = dist * 100;
    this._camera.updateProjectionMatrix();
    this._controls.target.copy(center);
    this._controls.update();

    this._initialCameraPosition = this._camera.position.clone();
    this._initialCameraTarget = this._controls.target.clone();
  }

  _buildControls(el) {
    const bar = document.createElement('div');
    bar.style.cssText = 'position: absolute; bottom: 8px; left: 8px; display: flex; '
      + 'flex-direction: column; gap: 4px; z-index: 10;';

    const addButton = (icon, title, onClick, isActive) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.title = title;
      btn.innerHTML = ICONS[icon];
      btn.style.cssText = BUTTON_STYLE + buttonColors(isActive?.());
      btn.addEventListener('click', () => {
        onClick();
        btn.style.cssText = BUTTON_STYLE + buttonColors(isActive?.());
      });
      bar.appendChild(btn);
      return btn;
    };

    addButton('reset', 'Reset camera', () => this._resetCamera());
    addButton('grid', 'Toggle grid', () => { this._showGrid = !this._showGrid; this._gridHelper.visible = this._showGrid; }, () => this._showGrid);
    addButton('wireframe', 'Toggle wireframe', () => {
      this._wireframe = !this._wireframe;
      this._solidMeshes.forEach(m => { m.material.wireframe = this._wireframe; });
    }, () => this._wireframe);

    if (this._isTopoFormat) {
      addButton('edges', 'Toggle edges', () => {
        this._showEdges = !this._showEdges;
        this._solidEdges.forEach(edge => { edge.visible = this._showEdges; });
      }, () => this._showEdges);
      addButton('vertices', 'Toggle vertices', () => {
        this._showVertices = !this._showVertices;
        this._solidVertices.forEach(v => { v.visible = this._showVertices; });
      }, () => this._showVertices);
    }

    el.appendChild(bar);
    this._controlsEl = bar;
  }

  _resetCamera() {
    if (!this._initialCameraPosition || !this._camera || !this._controls) return;
    this._camera.position.copy(this._initialCameraPosition);
    this._controls.target.copy(this._initialCameraTarget);
    this._controls.update();
  }

  destroy(el) {
    this._animating = false;
    if (this._animFrameId) cancelAnimationFrame(this._animFrameId);
    this._animFrameId = null;
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    if (this._renderer) {
      this._renderer.dispose();
      this._renderer.domElement.remove();
      this._renderer = null;
    }
    this._solidMeshes.forEach(m => { m.geometry?.dispose(); m.material?.dispose(); });
    this._solidEdges.forEach(e => { e.geometry?.dispose(); e.material?.dispose(); });
    this._solidVertices.forEach(g => { g.children?.forEach(c => { c.geometry?.dispose(); c.material?.dispose(); }); });
    this._solidMeshes = [];
    this._solidEdges = [];
    this._solidVertices = [];
    this._camera = null;
    this._controls = null;
    this._gridHelper = null;
    this._THREE = null;
    if (this._el === el) this._el = null;
    el.innerHTML = '';
  }
}
