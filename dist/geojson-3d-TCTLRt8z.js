const L = /* @__PURE__ */ new Set();
let D = !1;
function fe(e, t, n = 2) {
  const r = t && t.length, o = r ? t[0] * n : e.length;
  L.size && L.clear();
  let i = ne(e, 0, o, n, !0);
  const s = [];
  if (!i || i.next === i.prev) return s;
  let c = 0, f = 0, x = 0;
  if (r && (i = ye(e, t, i, n)), e.length > 80 * n) {
    c = e[0], f = e[1];
    let l = c, a = f;
    for (let y = n; y < o; y += n) {
      const u = e[y], h = e[y + 1];
      u < c && (c = u), h < f && (f = h), u > l && (l = u), h > a && (a = h);
    }
    x = Math.max(l - c, a - f), x = x !== 0 ? 32767 / x : 0;
  }
  return Y(i, s, c, f, x), s;
}
function ne(e, t, n, r, o) {
  let i = null;
  if (o === Oe(e, t, n, r) > 0)
    for (let s = t; s < n; s += r) i = q(s / r | 0, e[s], e[s + 1], i);
  else
    for (let s = n - r; s >= t; s -= r) i = q(s / r | 0, e[s], e[s + 1], i);
  return i && B(i, i.next) && (Z(i), i = i.next), i;
}
function P(e, t = e) {
  const n = t === e;
  let r = e, o;
  do
    o = !1, r !== r.next && (L.size === 0 || !L.has(r)) && (B(r, r.next) || m(r.prev, r, r.next) === 0) ? ((n || r === t) && (t = r.prev), D = !0, Z(r), r = r.prev, o = !0) : (n || r !== t) && (r = r.next, o = !n);
  while (o || r !== t);
  return t;
}
function Y(e, t, n, r, o) {
  o && ve(e, n, r, o);
  let i = e, s = !1;
  for (; e.prev !== e.next; ) {
    const c = e.prev, f = e.next;
    if (m(c, e, f) < 0 && (o ? le(e, n, r, o) : xe(e))) {
      t.push(c.i, e.i, f.i), Z(e), e = f, i = f;
      continue;
    }
    if (e = f, e === i) {
      if (D = !1, e = P(e), D) {
        i = e;
        continue;
      }
      if (!s) {
        e = ue(e, t), i = e, s = !0;
        continue;
      }
      he(e, t, n, r, o);
      break;
    }
  }
}
function xe(e) {
  const t = e.prev, n = e, r = e.next, o = t.x, i = n.x, s = r.x, c = t.y, f = n.y, x = r.y, l = Math.min(o, i, s), a = Math.min(c, f, x), y = Math.max(o, i, s), u = Math.max(c, f, x);
  let h = r.next;
  for (; h !== t; ) {
    if (h.x >= l && h.x <= y && h.y >= a && h.y <= u && !(o === h.x && c === h.y) && G(o, c, i, f, s, x, h.x, h.y) && m(h.prev, h, h.next) >= 0) return !1;
    h = h.next;
  }
  return !0;
}
function le(e, t, n, r) {
  const o = e.prev, i = e, s = e.next, c = o.x, f = i.x, x = s.x, l = o.y, a = i.y, y = s.y, u = Math.min(c, f, x), h = Math.min(l, a, y), w = Math.max(c, f, x), g = Math.max(l, a, y), U = J(u, h, t, n, r), V = J(w, g, t, n, r);
  let M = e.prevZ;
  for (; M && M.z >= U; ) {
    if (M.x >= u && M.x <= w && M.y >= h && M.y <= g && M !== s && !(c === M.x && l === M.y) && G(c, l, f, a, x, y, M.x, M.y) && m(M.prev, M, M.next) >= 0) return !1;
    M = M.prevZ;
  }
  let v = e.nextZ;
  for (; v && v.z <= V; ) {
    if (v.x >= u && v.x <= w && v.y >= h && v.y <= g && v !== s && !(c === v.x && l === v.y) && G(c, l, f, a, x, y, v.x, v.y) && m(v.prev, v, v.next) >= 0) return !1;
    v = v.nextZ;
  }
  return !0;
}
function ue(e, t) {
  let n = e, r = !1;
  do {
    const o = n.prev, i = n.next.next;
    ie(o, n, n.next, i, !1) && I(o, i) && I(i, o) && (t.push(o.i, n.i, i.i), Z(n), Z(n.next), n = e = i, r = !0), n = n.next;
  } while (n !== e);
  return r ? P(n) : n;
}
function he(e, t, n, r, o) {
  let i = e;
  do {
    let s = i.next.next;
    for (; s !== i.prev; ) {
      if (i.i !== s.i && Pe(i, s)) {
        let c = se(i, s);
        i = P(i, i.next), c = P(c, c.next), Y(i, t, n, r, o), Y(c, t, n, r, o);
        return;
      }
      s = s.next;
    }
    i = i.next;
  } while (i !== e);
}
let d = !1;
function ye(e, t, n, r) {
  const o = [];
  for (let i = 0, s = t.length; i < s; i++) {
    const c = t[i] * r, f = i < s - 1 ? t[i + 1] * r : e.length, x = (
      /** @type {Node} */
      ne(e, c, f, r, !1)
    );
    x === x.next && L.add(x), o.push(Fe(x));
  }
  o.sort(ae), me(e.length / r, t.length), re(n, n), d = !0;
  for (let i = 0; i < o.length; i++)
    n = pe(o[i], n);
  return d = !1, P(n);
}
function ae(e, t) {
  return e.x - t.x || e.y - t.y || (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x);
}
function pe(e, t) {
  const n = we(e, t);
  if (!n)
    return t;
  const r = se(n, e), o = r.next;
  return re(n, o.next), P(r, r.next), P(n, n.next);
}
const oe = 16;
let p = new Float64Array(0), _ = 0;
const X = [], K = [];
function me(e, t) {
  const n = Math.ceil((e + 2 * t) / oe) + t + 2;
  p.length < n * 4 && (p = new Float64Array(n * 4)), _ = 0;
}
function re(e, t) {
  let n = e;
  do {
    const r = _++;
    X[r] = n;
    let o = 1 / 0, i = 1 / 0, s = -1 / 0, c = -1 / 0, f = 0;
    do {
      const l = n.next;
      n.z = r, n.x < o && (o = n.x), n.x > s && (s = n.x), n.y < i && (i = n.y), n.y > c && (c = n.y), l.x < o && (o = l.x), l.x > s && (s = l.x), l.y < i && (i = l.y), l.y > c && (c = l.y), n = l;
    } while (++f < oe && n !== t);
    K[r] = n;
    const x = r * 4;
    p[x] = o, p[x + 1] = i, p[x + 2] = s, p[x + 3] = c;
  } while (n !== t);
}
function Me(e, t) {
  const n = e.z * 4;
  t.x < p[n] && (p[n] = t.x), t.y < p[n + 1] && (p[n + 1] = t.y), t.x > p[n + 2] && (p[n + 2] = t.x), t.y > p[n + 3] && (p[n + 3] = t.y);
}
function $(e) {
  let t = K[e];
  for (; t.prev.next !== t; ) t = t.next;
  return K[e] = t, t;
}
function T(e) {
  let t = X[e];
  for (; t.prev.next !== t; ) t = t.next;
  return X[e] = t, t;
}
function we(e, t) {
  let n = t;
  const r = e.x, o = e.y;
  let i = -1 / 0, s;
  if (B(e, n)) return n;
  for (let y = 0, u = 0; y < _; y++, u += 4) {
    if (o < p[u + 1] || o > p[u + 3] || p[u] > r || p[u + 2] <= i) continue;
    const h = $(y);
    n = T(y);
    do {
      if (n.prev.next === n) {
        if (B(e, n.next)) return n.next;
        if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
          const w = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
          if (w <= r && w > i && (i = w, s = n.x < n.next.x ? n : n.next, w === r))
            return s;
        }
      }
      n = n.next;
    } while (n !== h);
  }
  if (!s) return null;
  const c = s.x, f = s.y, x = Math.min(o, f), l = Math.max(o, f);
  let a = 1 / 0;
  for (let y = 0, u = 0; y < _; y++, u += 4) {
    if (p[u + 2] < c || p[u] > r || p[u + 3] < x || p[u + 1] > l) continue;
    const h = $(y);
    n = T(y);
    do {
      if (n.prev.next === n && r >= n.x && n.x >= c && r !== n.x && // skip dead nodes
      G(o < f ? r : i, o, c, f, o < f ? i : r, o, n.x, n.y)) {
        const w = Math.abs(o - n.y) / (r - n.x);
        (I(n, e) || n.y === o && n.next.y === o && n.next.x > r) && (w < a || w === a && (n.x > s.x || n.x === s.x && ge(s, n))) && (s = n, a = w);
      }
      n = n.next;
    } while (n !== h);
  }
  return s;
}
function ge(e, t) {
  return m(e.prev, e, t.prev) < 0 && m(t.next, e, e.next) < 0;
}
const k = [];
let A = [], F = new Uint32Array(0), b = new Uint32Array(0);
const O = new Uint32Array(256);
function ve(e, t, n, r) {
  let o = e, i = 0;
  do
    o.z = J(o.x, o.y, t, n, r), k[i++] = o, o = o.next;
  while (o !== e);
  ke(i);
  let s = null;
  for (let c = 0; c < i; c++) {
    const f = k[c];
    f.prevZ = s, s && (s.nextZ = f), s = f;
  }
  s.nextZ = null;
}
function ke(e) {
  if (e <= 32) {
    for (let t = 1; t < e; t++) {
      const n = k[t], r = n.z;
      let o = t - 1;
      for (; o >= 0 && k[o].z > r; )
        k[o + 1] = k[o], o--;
      k[o + 1] = n;
    }
    return;
  }
  F.length < e && (F = new Uint32Array(e), b = new Uint32Array(e), A = new Array(e));
  for (let t = 0; t < e; t++) F[t] = k[t].z;
  j(e, k, F, A, b, 0), j(e, A, b, k, F, 8), j(e, k, F, A, b, 16), j(e, A, b, k, F, 24);
}
function j(e, t, n, r, o, i) {
  O.fill(0);
  for (let c = 0; c < e; c++) O[n[c] >>> i & 255]++;
  let s = 0;
  for (let c = 0; c < 256; c++) {
    const f = O[c];
    O[c] = s, s += f;
  }
  for (let c = 0; c < e; c++) {
    const f = n[c], x = O[f >>> i & 255]++;
    r[x] = t[c], o[x] = f;
  }
}
function J(e, t, n, r, o) {
  return e = (e - n) * o | 0, t = (t - r) * o | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function Fe(e) {
  let t = e, n = e;
  do
    (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
  while (t !== e);
  return n;
}
function G(e, t, n, r, o, i, s, c) {
  return (o - s) * (t - c) >= (e - s) * (i - c) && (e - s) * (r - c) >= (n - s) * (t - c) && (n - s) * (i - c) >= (o - s) * (r - c);
}
function Pe(e, t) {
  const n = B(e, t) && m(e.prev, e, e.next) > 0 && m(t.prev, t, t.next) > 0;
  return e.next.i !== t.i && (n || I(e, t) && I(t, e) && // // locally visible
  (m(e.prev, e, t.prev) !== 0 || m(e, t.prev, t) !== 0)) && // no opposite-facing sectors
  !Ae(e, t) && (n || be(e, t));
}
function m(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function B(e, t) {
  return e.x === t.x && e.y === t.y;
}
function ie(e, t, n, r, o = !0) {
  const i = m(e, t, n), s = m(e, t, r), c = m(n, r, e), f = m(n, r, t);
  return (i > 0 && s < 0 || i < 0 && s > 0) && (c > 0 && f < 0 || c < 0 && f > 0) ? !0 : o ? !!(i === 0 && z(e, n, t) || s === 0 && z(e, r, t) || c === 0 && z(n, e, r) || f === 0 && z(n, t, r)) : !1;
}
function z(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function Ae(e, t) {
  const n = Math.min(e.x, t.x), r = Math.max(e.x, t.x), o = Math.min(e.y, t.y), i = Math.max(e.y, t.y);
  let s = e;
  do {
    const c = s.next;
    if (s.x > r && c.x > r || s.x < n && c.x < n || s.y > i && c.y > i || s.y < o && c.y < o) {
      s = c;
      continue;
    }
    if (s.i !== e.i && c.i !== e.i && s.i !== t.i && c.i !== t.i && ie(s, c, e, t)) return !0;
    s = c;
  } while (s !== e);
  return !1;
}
function I(e, t) {
  return m(e.prev, e, e.next) < 0 ? m(e, t, e.next) >= 0 && m(e, e.prev, t) >= 0 : m(e, t, e.prev) < 0 || m(e, e.next, t) < 0;
}
function be(e, t) {
  let n = e, r = !1;
  const o = (e.x + t.x) / 2, i = (e.y + t.y) / 2;
  do {
    const s = n.next;
    n.y > i != s.y > i && o < (s.x - n.x) * (i - n.y) / (s.y - n.y) + n.x && (r = !r), n = s;
  } while (n !== e);
  return r;
}
function se(e, t) {
  const n = Q(e.i, e.x, e.y), r = Q(t.i, t.x, t.y), o = e.next, i = t.prev;
  return e.next = t, t.prev = e, n.next = o, o.prev = n, r.next = n, n.prev = r, i.next = r, r.prev = i, r;
}
function q(e, t, n, r) {
  const o = Q(e, t, n);
  return r ? (o.next = r.next, o.prev = r, r.next.prev = o, r.next = o) : (o.prev = o, o.next = o), o;
}
function Z(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), d && Me(e.prev, e.next);
}
function Q(e, t, n) {
  return (
    /** @type {Node} */
    /** @type {unknown} */
    {
      i: e,
      // vertex index in coordinates array
      x: t,
      y: n,
      // vertex coordinates
      prev: null,
      // previous and next vertex nodes in a polygon ring
      next: null,
      z: 0,
      // z-order curve value; doubles as owning block in the hole-bridge index during eliminateHoles
      prevZ: null,
      // previous and next nodes in z-order
      nextZ: null
    }
  );
}
function Oe(e, t, n, r) {
  let o = 0;
  for (let i = t, s = n - r; i < n; i += r)
    o += (e[s] - e[i]) * (e[i + 1] + e[s + 1]), s = i;
  return o;
}
const ce = "position", W = 3, Se = 30, Le = 1, Be = 1, R = 8, Ie = 0.02, Ze = 16777215, E = [
  3377407,
  16746547,
  3407752,
  16724872,
  8926207,
  3407871,
  16777011,
  16724991,
  8978227,
  3377322
];
function C(e, t) {
  var n, r, o, i, s;
  if (!(!e || typeof e != "object"))
    switch (e.type) {
      case "Feature":
        C(e.geometry, t);
        break;
      case "FeatureCollection":
        (n = e.features) == null || n.forEach((c) => C(c, t));
        break;
      case "GeometryCollection":
        (r = e.geometries) == null || r.forEach((c) => C(c, t));
        break;
      case "Point":
        t.push(S(e.coordinates));
        break;
      case "MultiPoint":
      case "LineString":
        (o = e.coordinates) == null || o.forEach((c) => t.push(S(c)));
        break;
      case "MultiLineString":
      case "Polygon":
        (i = e.coordinates) == null || i.forEach((c) => c.forEach((f) => t.push(S(f))));
        break;
      case "MultiPolygon":
        (s = e.coordinates) == null || s.forEach((c) => c.forEach((f) => f.forEach((x) => t.push(S(x)))));
        break;
    }
}
function S(e) {
  return [e[0], e[1], e[2] ?? 0];
}
function je(e) {
  const t = [0, 0, 0];
  return e.forEach((n) => {
    t[0] += n[0], t[1] += n[1], t[2] += n[2];
  }), t.map((n) => n / e.length);
}
function ze(e) {
  if (e.length < 2) return e;
  const t = e[0], n = e[e.length - 1];
  return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] ? e.slice(0, -1) : e;
}
function Ce(e) {
  return e.every((t) => t[0] >= -180 && t[0] <= 180 && t[1] >= -90 && t[1] <= 90);
}
function Ne(e) {
  const t = e[1] * Math.PI / 180, n = 111320 * Math.cos(t), r = 111320;
  return (o) => [
    (o[0] - e[0]) * n,
    (o[1] - e[1]) * r,
    o[2] - e[2]
  ];
}
function _e(e) {
  return (t) => [t[0] - e[0], t[1] - e[1], t[2] - e[2]];
}
function Ge(e) {
  let t = 0, n = 0, r = 0;
  for (let i = 0; i < e.length; i++) {
    const s = e[i], c = e[(i + 1) % e.length];
    t += (s[1] - c[1]) * (s[2] + c[2]), n += (s[2] - c[2]) * (s[0] + c[0]), r += (s[0] - c[0]) * (s[1] + c[1]);
  }
  const o = Math.sqrt(t * t + n * n + r * r);
  return o > 0 ? [t / o, n / o, r / o] : [0, 0, 1];
}
function Ue(e, t) {
  const n = new t.Vector3(...e).normalize(), r = Math.abs(n.x) < 0.9 ? new t.Vector3(1, 0, 0) : new t.Vector3(0, 1, 0), o = new t.Vector3().crossVectors(r, n).normalize();
  return { axisU: o, axisV: new t.Vector3().crossVectors(n, o) };
}
function H(e, t, n) {
  const r = e.map(ze).filter((g) => g.length >= 3);
  if (!r.length) return null;
  const o = Ge(r[0]), { axisU: i, axisV: s } = Ue(o, n), c = new n.Vector3(...r[0][0]), f = r.flatMap((g) => g), x = [], l = [];
  let a = 0;
  r.forEach((g, U) => {
    U > 0 && l.push(a), g.forEach((V) => {
      const M = new n.Vector3(...V).sub(c);
      x.push(M.dot(i), M.dot(s));
    }), a += g.length;
  });
  const y = fe(x, l.length ? l : null);
  if (!y.length) return null;
  const u = [], h = [];
  for (let g = 0; g < y.length; g += 3)
    u.push(...f[y[g]], ...f[y[g + 1]], ...f[y[g + 2]]), h.push(...o, ...o, ...o);
  const w = new n.BufferGeometry();
  return w.setAttribute(ce, new n.BufferAttribute(new Float32Array(u), W)), w.setAttribute("normal", new n.BufferAttribute(new Float32Array(h), W)), new n.Mesh(w, new n.MeshPhongMaterial({
    color: t,
    side: n.DoubleSide,
    shininess: Se,
    polygonOffset: !0,
    polygonOffsetFactor: Le,
    polygonOffsetUnits: Be
  }));
}
function ee(e, t) {
  const n = e.flatMap((o) => o), r = new t.BufferGeometry();
  return r.setAttribute(ce, new t.BufferAttribute(new Float32Array(n), W)), new t.Line(r, new t.LineBasicMaterial({ color: Ze }));
}
function te(e, t, n) {
  const r = new n.SphereGeometry(t, R, R), o = new n.MeshBasicMaterial({ color: 16776960 }), i = new n.Mesh(r, o);
  return i.position.set(...e), i;
}
function N(e, t, n, r, o, i) {
  var f;
  if (!e) return;
  const s = E[n % E.length], c = (x) => t(S(x));
  switch (e.type) {
    case "Point": {
      const x = te(c(e.coordinates), r, i);
      o.points.push(x), o.objects.push(x);
      break;
    }
    case "MultiPoint":
      e.coordinates.forEach((x) => {
        const l = te(c(x), r, i);
        o.points.push(l), o.objects.push(l);
      });
      break;
    case "LineString": {
      const x = ee(e.coordinates.map(c), i);
      o.lines.push(x), o.objects.push(x);
      break;
    }
    case "MultiLineString":
      e.coordinates.forEach((x) => {
        const l = ee(x.map(c), i);
        o.lines.push(l), o.objects.push(l);
      });
      break;
    case "Polygon": {
      const x = H(e.coordinates.map((l) => l.map(c)), s, i);
      x && (o.meshes.push(x), o.objects.push(x));
      break;
    }
    case "MultiPolygon":
      e.coordinates.forEach((x) => {
        const l = H(x.map((a) => a.map(c)), s, i);
        l && (o.meshes.push(l), o.objects.push(l));
      });
      break;
    case "GeometryCollection":
      (f = e.geometries) == null || f.forEach((x, l) => N(x, t, n + l, r, o, i));
      break;
  }
}
function Ve(e, t) {
  var y;
  const n = [];
  if (C(e, n), !n.length) return { objects: [], meshes: [], lines: [], points: [] };
  const r = je(n), o = Ce(n) ? Ne(r) : _e(r), i = n.map(o), s = i.map((u) => u[0]), c = i.map((u) => u[1]), f = i.map((u) => u[2]), l = Math.max(
    Math.max(...s) - Math.min(...s),
    Math.max(...c) - Math.min(...c),
    Math.max(...f) - Math.min(...f),
    1e-6
  ) * Ie, a = { objects: [], meshes: [], lines: [], points: [] };
  return e.type === "FeatureCollection" ? (y = e.features) == null || y.forEach((u, h) => N(u.geometry, o, h, l, a, t)) : e.type === "Feature" ? N(e.geometry, o, 0, l, a, t) : N(e, o, 0, l, a, t), a;
}
export {
  Ve as buildGeoJson3DObjects
};
