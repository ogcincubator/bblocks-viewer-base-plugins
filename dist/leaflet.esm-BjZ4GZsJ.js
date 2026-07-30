var Ir = {}, fi = {}, Hn;
function Do() {
  if (Hn) return fi;
  Hn = 1, fi.byteLength = a, fi.toByteArray = h, fi.fromByteArray = _;
  for (var e = [], t = [], i = typeof Uint8Array < "u" ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0, s = r.length; n < s; ++n)
    e[n] = r[n], t[r.charCodeAt(n)] = n;
  t[45] = 62, t[95] = 63;
  function o(m) {
    var y = m.length;
    if (y % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var w = m.indexOf("=");
    w === -1 && (w = y);
    var b = w === y ? 0 : 4 - w % 4;
    return [w, b];
  }
  function a(m) {
    var y = o(m), w = y[0], b = y[1];
    return (w + b) * 3 / 4 - b;
  }
  function l(m, y, w) {
    return (y + w) * 3 / 4 - w;
  }
  function h(m) {
    var y, w = o(m), b = w[0], g = w[1], v = new i(l(m, b, g)), E = 0, N = g > 0 ? b - 4 : b, M;
    for (M = 0; M < N; M += 4)
      y = t[m.charCodeAt(M)] << 18 | t[m.charCodeAt(M + 1)] << 12 | t[m.charCodeAt(M + 2)] << 6 | t[m.charCodeAt(M + 3)], v[E++] = y >> 16 & 255, v[E++] = y >> 8 & 255, v[E++] = y & 255;
    return g === 2 && (y = t[m.charCodeAt(M)] << 2 | t[m.charCodeAt(M + 1)] >> 4, v[E++] = y & 255), g === 1 && (y = t[m.charCodeAt(M)] << 10 | t[m.charCodeAt(M + 1)] << 4 | t[m.charCodeAt(M + 2)] >> 2, v[E++] = y >> 8 & 255, v[E++] = y & 255), v;
  }
  function d(m) {
    return e[m >> 18 & 63] + e[m >> 12 & 63] + e[m >> 6 & 63] + e[m & 63];
  }
  function f(m, y, w) {
    for (var b, g = [], v = y; v < w; v += 3)
      b = (m[v] << 16 & 16711680) + (m[v + 1] << 8 & 65280) + (m[v + 2] & 255), g.push(d(b));
    return g.join("");
  }
  function _(m) {
    for (var y, w = m.length, b = w % 3, g = [], v = 16383, E = 0, N = w - b; E < N; E += v)
      g.push(f(m, E, E + v > N ? N : E + v));
    return b === 1 ? (y = m[w - 1], g.push(
      e[y >> 2] + e[y << 4 & 63] + "=="
    )) : b === 2 && (y = (m[w - 2] << 8) + m[w - 1], g.push(
      e[y >> 10] + e[y >> 4 & 63] + e[y << 2 & 63] + "="
    )), g.join("");
  }
  return fi;
}
var Ji = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var zn;
function Oo() {
  return zn || (zn = 1, Ji.read = function(e, t, i, r, n) {
    var s, o, a = n * 8 - r - 1, l = (1 << a) - 1, h = l >> 1, d = -7, f = i ? n - 1 : 0, _ = i ? -1 : 1, m = e[t + f];
    for (f += _, s = m & (1 << -d) - 1, m >>= -d, d += a; d > 0; s = s * 256 + e[t + f], f += _, d -= 8)
      ;
    for (o = s & (1 << -d) - 1, s >>= -d, d += r; d > 0; o = o * 256 + e[t + f], f += _, d -= 8)
      ;
    if (s === 0)
      s = 1 - h;
    else {
      if (s === l)
        return o ? NaN : (m ? -1 : 1) * (1 / 0);
      o = o + Math.pow(2, r), s = s - h;
    }
    return (m ? -1 : 1) * o * Math.pow(2, s - r);
  }, Ji.write = function(e, t, i, r, n, s) {
    var o, a, l, h = s * 8 - n - 1, d = (1 << h) - 1, f = d >> 1, _ = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = r ? 0 : s - 1, y = r ? 1 : -1, w = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = d) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), o + f >= 1 ? t += _ / l : t += _ * Math.pow(2, 1 - f), t * l >= 2 && (o++, l /= 2), o + f >= d ? (a = 0, o = d) : o + f >= 1 ? (a = (t * l - 1) * Math.pow(2, n), o = o + f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, n), o = 0)); n >= 8; e[i + m] = a & 255, m += y, a /= 256, n -= 8)
      ;
    for (o = o << n | a, h += n; h > 0; e[i + m] = o & 255, m += y, o /= 256, h -= 8)
      ;
    e[i + m - y] |= w * 128;
  }), Ji;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Qn;
function be() {
  return Qn || (Qn = 1, (function(e) {
    const t = Do(), i = Oo(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    e.Buffer = a, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50;
    const n = 2147483647;
    e.kMaxLength = n, a.TYPED_ARRAY_SUPPORT = s(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function s() {
      try {
        const p = new Uint8Array(1), u = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(p, u), p.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(a.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (a.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(a.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (a.isBuffer(this))
          return this.byteOffset;
      }
    });
    function o(p) {
      if (p > n)
        throw new RangeError('The value "' + p + '" is invalid for option "size"');
      const u = new Uint8Array(p);
      return Object.setPrototypeOf(u, a.prototype), u;
    }
    function a(p, u, c) {
      if (typeof p == "number") {
        if (typeof u == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return f(p);
      }
      return l(p, u, c);
    }
    a.poolSize = 8192;
    function l(p, u, c) {
      if (typeof p == "string")
        return _(p, u);
      if (ArrayBuffer.isView(p))
        return y(p);
      if (p == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p
        );
      if (z(p, ArrayBuffer) || p && z(p.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (z(p, SharedArrayBuffer) || p && z(p.buffer, SharedArrayBuffer)))
        return w(p, u, c);
      if (typeof p == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const S = p.valueOf && p.valueOf();
      if (S != null && S !== p)
        return a.from(S, u, c);
      const I = b(p);
      if (I) return I;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function")
        return a.from(p[Symbol.toPrimitive]("string"), u, c);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p
      );
    }
    a.from = function(p, u, c) {
      return l(p, u, c);
    }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
    function h(p) {
      if (typeof p != "number")
        throw new TypeError('"size" argument must be of type number');
      if (p < 0)
        throw new RangeError('The value "' + p + '" is invalid for option "size"');
    }
    function d(p, u, c) {
      return h(p), p <= 0 ? o(p) : u !== void 0 ? typeof c == "string" ? o(p).fill(u, c) : o(p).fill(u) : o(p);
    }
    a.alloc = function(p, u, c) {
      return d(p, u, c);
    };
    function f(p) {
      return h(p), o(p < 0 ? 0 : g(p) | 0);
    }
    a.allocUnsafe = function(p) {
      return f(p);
    }, a.allocUnsafeSlow = function(p) {
      return f(p);
    };
    function _(p, u) {
      if ((typeof u != "string" || u === "") && (u = "utf8"), !a.isEncoding(u))
        throw new TypeError("Unknown encoding: " + u);
      const c = E(p, u) | 0;
      let S = o(c);
      const I = S.write(p, u);
      return I !== c && (S = S.slice(0, I)), S;
    }
    function m(p) {
      const u = p.length < 0 ? 0 : g(p.length) | 0, c = o(u);
      for (let S = 0; S < u; S += 1)
        c[S] = p[S] & 255;
      return c;
    }
    function y(p) {
      if (z(p, Uint8Array)) {
        const u = new Uint8Array(p);
        return w(u.buffer, u.byteOffset, u.byteLength);
      }
      return m(p);
    }
    function w(p, u, c) {
      if (u < 0 || p.byteLength < u)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (p.byteLength < u + (c || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let S;
      return u === void 0 && c === void 0 ? S = new Uint8Array(p) : c === void 0 ? S = new Uint8Array(p, u) : S = new Uint8Array(p, u, c), Object.setPrototypeOf(S, a.prototype), S;
    }
    function b(p) {
      if (a.isBuffer(p)) {
        const u = g(p.length) | 0, c = o(u);
        return c.length === 0 || p.copy(c, 0, 0, u), c;
      }
      if (p.length !== void 0)
        return typeof p.length != "number" || Pt(p.length) ? o(0) : m(p);
      if (p.type === "Buffer" && Array.isArray(p.data))
        return m(p.data);
    }
    function g(p) {
      if (p >= n)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
      return p | 0;
    }
    function v(p) {
      return +p != p && (p = 0), a.alloc(+p);
    }
    a.isBuffer = function(u) {
      return u != null && u._isBuffer === !0 && u !== a.prototype;
    }, a.compare = function(u, c) {
      if (z(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), z(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)), !a.isBuffer(u) || !a.isBuffer(c))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (u === c) return 0;
      let S = u.length, I = c.length;
      for (let B = 0, K = Math.min(S, I); B < K; ++B)
        if (u[B] !== c[B]) {
          S = u[B], I = c[B];
          break;
        }
      return S < I ? -1 : I < S ? 1 : 0;
    }, a.isEncoding = function(u) {
      switch (String(u).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, a.concat = function(u, c) {
      if (!Array.isArray(u))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (u.length === 0)
        return a.alloc(0);
      let S;
      if (c === void 0)
        for (c = 0, S = 0; S < u.length; ++S)
          c += u[S].length;
      const I = a.allocUnsafe(c);
      let B = 0;
      for (S = 0; S < u.length; ++S) {
        let K = u[S];
        if (z(K, Uint8Array))
          B + K.length > I.length ? (a.isBuffer(K) || (K = a.from(K)), K.copy(I, B)) : Uint8Array.prototype.set.call(
            I,
            K,
            B
          );
        else if (a.isBuffer(K))
          K.copy(I, B);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        B += K.length;
      }
      return I;
    };
    function E(p, u) {
      if (a.isBuffer(p))
        return p.length;
      if (ArrayBuffer.isView(p) || z(p, ArrayBuffer))
        return p.byteLength;
      if (typeof p != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof p
        );
      const c = p.length, S = arguments.length > 2 && arguments[2] === !0;
      if (!S && c === 0) return 0;
      let I = !1;
      for (; ; )
        switch (u) {
          case "ascii":
          case "latin1":
          case "binary":
            return c;
          case "utf8":
          case "utf-8":
            return nt(p).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return c * 2;
          case "hex":
            return c >>> 1;
          case "base64":
            return J(p).length;
          default:
            if (I)
              return S ? -1 : nt(p).length;
            u = ("" + u).toLowerCase(), I = !0;
        }
    }
    a.byteLength = E;
    function N(p, u, c) {
      let S = !1;
      if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((c === void 0 || c > this.length) && (c = this.length), c <= 0) || (c >>>= 0, u >>>= 0, c <= u))
        return "";
      for (p || (p = "utf8"); ; )
        switch (p) {
          case "hex":
            return pt(this, u, c);
          case "utf8":
          case "utf-8":
            return ht(this, u, c);
          case "ascii":
            return vt(this, u, c);
          case "latin1":
          case "binary":
            return V(this, u, c);
          case "base64":
            return D(this, u, c);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return R(this, u, c);
          default:
            if (S) throw new TypeError("Unknown encoding: " + p);
            p = (p + "").toLowerCase(), S = !0;
        }
    }
    a.prototype._isBuffer = !0;
    function M(p, u, c) {
      const S = p[u];
      p[u] = p[c], p[c] = S;
    }
    a.prototype.swap16 = function() {
      const u = this.length;
      if (u % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let c = 0; c < u; c += 2)
        M(this, c, c + 1);
      return this;
    }, a.prototype.swap32 = function() {
      const u = this.length;
      if (u % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let c = 0; c < u; c += 4)
        M(this, c, c + 3), M(this, c + 1, c + 2);
      return this;
    }, a.prototype.swap64 = function() {
      const u = this.length;
      if (u % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let c = 0; c < u; c += 8)
        M(this, c, c + 7), M(this, c + 1, c + 6), M(this, c + 2, c + 5), M(this, c + 3, c + 4);
      return this;
    }, a.prototype.toString = function() {
      const u = this.length;
      return u === 0 ? "" : arguments.length === 0 ? ht(this, 0, u) : N.apply(this, arguments);
    }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(u) {
      if (!a.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
      return this === u ? !0 : a.compare(this, u) === 0;
    }, a.prototype.inspect = function() {
      let u = "";
      const c = e.INSPECT_MAX_BYTES;
      return u = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(), this.length > c && (u += " ... "), "<Buffer " + u + ">";
    }, r && (a.prototype[r] = a.prototype.inspect), a.prototype.compare = function(u, c, S, I, B) {
      if (z(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(u))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
        );
      if (c === void 0 && (c = 0), S === void 0 && (S = u ? u.length : 0), I === void 0 && (I = 0), B === void 0 && (B = this.length), c < 0 || S > u.length || I < 0 || B > this.length)
        throw new RangeError("out of range index");
      if (I >= B && c >= S)
        return 0;
      if (I >= B)
        return -1;
      if (c >= S)
        return 1;
      if (c >>>= 0, S >>>= 0, I >>>= 0, B >>>= 0, this === u) return 0;
      let K = B - I, xt = S - c;
      const Gt = Math.min(K, xt), Rt = this.slice(I, B), Ct = u.slice(c, S);
      for (let Nt = 0; Nt < Gt; ++Nt)
        if (Rt[Nt] !== Ct[Nt]) {
          K = Rt[Nt], xt = Ct[Nt];
          break;
        }
      return K < xt ? -1 : xt < K ? 1 : 0;
    };
    function j(p, u, c, S, I) {
      if (p.length === 0) return -1;
      if (typeof c == "string" ? (S = c, c = 0) : c > 2147483647 ? c = 2147483647 : c < -2147483648 && (c = -2147483648), c = +c, Pt(c) && (c = I ? 0 : p.length - 1), c < 0 && (c = p.length + c), c >= p.length) {
        if (I) return -1;
        c = p.length - 1;
      } else if (c < 0)
        if (I) c = 0;
        else return -1;
      if (typeof u == "string" && (u = a.from(u, S)), a.isBuffer(u))
        return u.length === 0 ? -1 : U(p, u, c, S, I);
      if (typeof u == "number")
        return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? I ? Uint8Array.prototype.indexOf.call(p, u, c) : Uint8Array.prototype.lastIndexOf.call(p, u, c) : U(p, [u], c, S, I);
      throw new TypeError("val must be string, number or Buffer");
    }
    function U(p, u, c, S, I) {
      let B = 1, K = p.length, xt = u.length;
      if (S !== void 0 && (S = String(S).toLowerCase(), S === "ucs2" || S === "ucs-2" || S === "utf16le" || S === "utf-16le")) {
        if (p.length < 2 || u.length < 2)
          return -1;
        B = 2, K /= 2, xt /= 2, c /= 2;
      }
      function Gt(Ct, Nt) {
        return B === 1 ? Ct[Nt] : Ct.readUInt16BE(Nt * B);
      }
      let Rt;
      if (I) {
        let Ct = -1;
        for (Rt = c; Rt < K; Rt++)
          if (Gt(p, Rt) === Gt(u, Ct === -1 ? 0 : Rt - Ct)) {
            if (Ct === -1 && (Ct = Rt), Rt - Ct + 1 === xt) return Ct * B;
          } else
            Ct !== -1 && (Rt -= Rt - Ct), Ct = -1;
      } else
        for (c + xt > K && (c = K - xt), Rt = c; Rt >= 0; Rt--) {
          let Ct = !0;
          for (let Nt = 0; Nt < xt; Nt++)
            if (Gt(p, Rt + Nt) !== Gt(u, Nt)) {
              Ct = !1;
              break;
            }
          if (Ct) return Rt;
        }
      return -1;
    }
    a.prototype.includes = function(u, c, S) {
      return this.indexOf(u, c, S) !== -1;
    }, a.prototype.indexOf = function(u, c, S) {
      return j(this, u, c, S, !0);
    }, a.prototype.lastIndexOf = function(u, c, S) {
      return j(this, u, c, S, !1);
    };
    function k(p, u, c, S) {
      c = Number(c) || 0;
      const I = p.length - c;
      S ? (S = Number(S), S > I && (S = I)) : S = I;
      const B = u.length;
      S > B / 2 && (S = B / 2);
      let K;
      for (K = 0; K < S; ++K) {
        const xt = parseInt(u.substr(K * 2, 2), 16);
        if (Pt(xt)) return K;
        p[c + K] = xt;
      }
      return K;
    }
    function lt(p, u, c, S) {
      return et(nt(u, p.length - c), p, c, S);
    }
    function G(p, u, c, S) {
      return et(it(u), p, c, S);
    }
    function L(p, u, c, S) {
      return et(J(u), p, c, S);
    }
    function Y(p, u, c, S) {
      return et(T(u, p.length - c), p, c, S);
    }
    a.prototype.write = function(u, c, S, I) {
      if (c === void 0)
        I = "utf8", S = this.length, c = 0;
      else if (S === void 0 && typeof c == "string")
        I = c, S = this.length, c = 0;
      else if (isFinite(c))
        c = c >>> 0, isFinite(S) ? (S = S >>> 0, I === void 0 && (I = "utf8")) : (I = S, S = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const B = this.length - c;
      if ((S === void 0 || S > B) && (S = B), u.length > 0 && (S < 0 || c < 0) || c > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      I || (I = "utf8");
      let K = !1;
      for (; ; )
        switch (I) {
          case "hex":
            return k(this, u, c, S);
          case "utf8":
          case "utf-8":
            return lt(this, u, c, S);
          case "ascii":
          case "latin1":
          case "binary":
            return G(this, u, c, S);
          case "base64":
            return L(this, u, c, S);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Y(this, u, c, S);
          default:
            if (K) throw new TypeError("Unknown encoding: " + I);
            I = ("" + I).toLowerCase(), K = !0;
        }
    }, a.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function D(p, u, c) {
      return u === 0 && c === p.length ? t.fromByteArray(p) : t.fromByteArray(p.slice(u, c));
    }
    function ht(p, u, c) {
      c = Math.min(p.length, c);
      const S = [];
      let I = u;
      for (; I < c; ) {
        const B = p[I];
        let K = null, xt = B > 239 ? 4 : B > 223 ? 3 : B > 191 ? 2 : 1;
        if (I + xt <= c) {
          let Gt, Rt, Ct, Nt;
          switch (xt) {
            case 1:
              B < 128 && (K = B);
              break;
            case 2:
              Gt = p[I + 1], (Gt & 192) === 128 && (Nt = (B & 31) << 6 | Gt & 63, Nt > 127 && (K = Nt));
              break;
            case 3:
              Gt = p[I + 1], Rt = p[I + 2], (Gt & 192) === 128 && (Rt & 192) === 128 && (Nt = (B & 15) << 12 | (Gt & 63) << 6 | Rt & 63, Nt > 2047 && (Nt < 55296 || Nt > 57343) && (K = Nt));
              break;
            case 4:
              Gt = p[I + 1], Rt = p[I + 2], Ct = p[I + 3], (Gt & 192) === 128 && (Rt & 192) === 128 && (Ct & 192) === 128 && (Nt = (B & 15) << 18 | (Gt & 63) << 12 | (Rt & 63) << 6 | Ct & 63, Nt > 65535 && Nt < 1114112 && (K = Nt));
          }
        }
        K === null ? (K = 65533, xt = 1) : K > 65535 && (K -= 65536, S.push(K >>> 10 & 1023 | 55296), K = 56320 | K & 1023), S.push(K), I += xt;
      }
      return ft(S);
    }
    const dt = 4096;
    function ft(p) {
      const u = p.length;
      if (u <= dt)
        return String.fromCharCode.apply(String, p);
      let c = "", S = 0;
      for (; S < u; )
        c += String.fromCharCode.apply(
          String,
          p.slice(S, S += dt)
        );
      return c;
    }
    function vt(p, u, c) {
      let S = "";
      c = Math.min(p.length, c);
      for (let I = u; I < c; ++I)
        S += String.fromCharCode(p[I] & 127);
      return S;
    }
    function V(p, u, c) {
      let S = "";
      c = Math.min(p.length, c);
      for (let I = u; I < c; ++I)
        S += String.fromCharCode(p[I]);
      return S;
    }
    function pt(p, u, c) {
      const S = p.length;
      (!u || u < 0) && (u = 0), (!c || c < 0 || c > S) && (c = S);
      let I = "";
      for (let B = u; B < c; ++B)
        I += Ut[p[B]];
      return I;
    }
    function R(p, u, c) {
      const S = p.slice(u, c);
      let I = "";
      for (let B = 0; B < S.length - 1; B += 2)
        I += String.fromCharCode(S[B] + S[B + 1] * 256);
      return I;
    }
    a.prototype.slice = function(u, c) {
      const S = this.length;
      u = ~~u, c = c === void 0 ? S : ~~c, u < 0 ? (u += S, u < 0 && (u = 0)) : u > S && (u = S), c < 0 ? (c += S, c < 0 && (c = 0)) : c > S && (c = S), c < u && (c = u);
      const I = this.subarray(u, c);
      return Object.setPrototypeOf(I, a.prototype), I;
    };
    function W(p, u, c) {
      if (p % 1 !== 0 || p < 0) throw new RangeError("offset is not uint");
      if (p + u > c) throw new RangeError("Trying to access beyond buffer length");
    }
    a.prototype.readUintLE = a.prototype.readUIntLE = function(u, c, S) {
      u = u >>> 0, c = c >>> 0, S || W(u, c, this.length);
      let I = this[u], B = 1, K = 0;
      for (; ++K < c && (B *= 256); )
        I += this[u + K] * B;
      return I;
    }, a.prototype.readUintBE = a.prototype.readUIntBE = function(u, c, S) {
      u = u >>> 0, c = c >>> 0, S || W(u, c, this.length);
      let I = this[u + --c], B = 1;
      for (; c > 0 && (B *= 256); )
        I += this[u + --c] * B;
      return I;
    }, a.prototype.readUint8 = a.prototype.readUInt8 = function(u, c) {
      return u = u >>> 0, c || W(u, 1, this.length), this[u];
    }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(u, c) {
      return u = u >>> 0, c || W(u, 2, this.length), this[u] | this[u + 1] << 8;
    }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(u, c) {
      return u = u >>> 0, c || W(u, 2, this.length), this[u] << 8 | this[u + 1];
    }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(u, c) {
      return u = u >>> 0, c || W(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
    }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(u, c) {
      return u = u >>> 0, c || W(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
    }, a.prototype.readBigUInt64LE = St(function(u) {
      u = u >>> 0, C(u, "offset");
      const c = this[u], S = this[u + 7];
      (c === void 0 || S === void 0) && F(u, this.length - 8);
      const I = c + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, B = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + S * 2 ** 24;
      return BigInt(I) + (BigInt(B) << BigInt(32));
    }), a.prototype.readBigUInt64BE = St(function(u) {
      u = u >>> 0, C(u, "offset");
      const c = this[u], S = this[u + 7];
      (c === void 0 || S === void 0) && F(u, this.length - 8);
      const I = c * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], B = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + S;
      return (BigInt(I) << BigInt(32)) + BigInt(B);
    }), a.prototype.readIntLE = function(u, c, S) {
      u = u >>> 0, c = c >>> 0, S || W(u, c, this.length);
      let I = this[u], B = 1, K = 0;
      for (; ++K < c && (B *= 256); )
        I += this[u + K] * B;
      return B *= 128, I >= B && (I -= Math.pow(2, 8 * c)), I;
    }, a.prototype.readIntBE = function(u, c, S) {
      u = u >>> 0, c = c >>> 0, S || W(u, c, this.length);
      let I = c, B = 1, K = this[u + --I];
      for (; I > 0 && (B *= 256); )
        K += this[u + --I] * B;
      return B *= 128, K >= B && (K -= Math.pow(2, 8 * c)), K;
    }, a.prototype.readInt8 = function(u, c) {
      return u = u >>> 0, c || W(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
    }, a.prototype.readInt16LE = function(u, c) {
      u = u >>> 0, c || W(u, 2, this.length);
      const S = this[u] | this[u + 1] << 8;
      return S & 32768 ? S | 4294901760 : S;
    }, a.prototype.readInt16BE = function(u, c) {
      u = u >>> 0, c || W(u, 2, this.length);
      const S = this[u + 1] | this[u] << 8;
      return S & 32768 ? S | 4294901760 : S;
    }, a.prototype.readInt32LE = function(u, c) {
      return u = u >>> 0, c || W(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
    }, a.prototype.readInt32BE = function(u, c) {
      return u = u >>> 0, c || W(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
    }, a.prototype.readBigInt64LE = St(function(u) {
      u = u >>> 0, C(u, "offset");
      const c = this[u], S = this[u + 7];
      (c === void 0 || S === void 0) && F(u, this.length - 8);
      const I = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (S << 24);
      return (BigInt(I) << BigInt(32)) + BigInt(c + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
    }), a.prototype.readBigInt64BE = St(function(u) {
      u = u >>> 0, C(u, "offset");
      const c = this[u], S = this[u + 7];
      (c === void 0 || S === void 0) && F(u, this.length - 8);
      const I = (c << 24) + // Overflow
      this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
      return (BigInt(I) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + S);
    }), a.prototype.readFloatLE = function(u, c) {
      return u = u >>> 0, c || W(u, 4, this.length), i.read(this, u, !0, 23, 4);
    }, a.prototype.readFloatBE = function(u, c) {
      return u = u >>> 0, c || W(u, 4, this.length), i.read(this, u, !1, 23, 4);
    }, a.prototype.readDoubleLE = function(u, c) {
      return u = u >>> 0, c || W(u, 8, this.length), i.read(this, u, !0, 52, 8);
    }, a.prototype.readDoubleBE = function(u, c) {
      return u = u >>> 0, c || W(u, 8, this.length), i.read(this, u, !1, 52, 8);
    };
    function rt(p, u, c, S, I, B) {
      if (!a.isBuffer(p)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (u > I || u < B) throw new RangeError('"value" argument is out of bounds');
      if (c + S > p.length) throw new RangeError("Index out of range");
    }
    a.prototype.writeUintLE = a.prototype.writeUIntLE = function(u, c, S, I) {
      if (u = +u, c = c >>> 0, S = S >>> 0, !I) {
        const xt = Math.pow(2, 8 * S) - 1;
        rt(this, u, c, S, xt, 0);
      }
      let B = 1, K = 0;
      for (this[c] = u & 255; ++K < S && (B *= 256); )
        this[c + K] = u / B & 255;
      return c + S;
    }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(u, c, S, I) {
      if (u = +u, c = c >>> 0, S = S >>> 0, !I) {
        const xt = Math.pow(2, 8 * S) - 1;
        rt(this, u, c, S, xt, 0);
      }
      let B = S - 1, K = 1;
      for (this[c + B] = u & 255; --B >= 0 && (K *= 256); )
        this[c + B] = u / K & 255;
      return c + S;
    }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(u, c, S) {
      return u = +u, c = c >>> 0, S || rt(this, u, c, 1, 255, 0), this[c] = u & 255, c + 1;
    }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(u, c, S) {
      return u = +u, c = c >>> 0, S || rt(this, u, c, 2, 65535, 0), this[c] = u & 255, this[c + 1] = u >>> 8, c + 2;
    }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(u, c, S) {
      return u = +u, c = c >>> 0, S || rt(this, u, c, 2, 65535, 0), this[c] = u >>> 8, this[c + 1] = u & 255, c + 2;
    }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(u, c, S) {
      return u = +u, c = c >>> 0, S || rt(this, u, c, 4, 4294967295, 0), this[c + 3] = u >>> 24, this[c + 2] = u >>> 16, this[c + 1] = u >>> 8, this[c] = u & 255, c + 4;
    }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(u, c, S) {
      return u = +u, c = c >>> 0, S || rt(this, u, c, 4, 4294967295, 0), this[c] = u >>> 24, this[c + 1] = u >>> 16, this[c + 2] = u >>> 8, this[c + 3] = u & 255, c + 4;
    };
    function Q(p, u, c, S, I) {
      mt(u, S, I, p, c, 7);
      let B = Number(u & BigInt(4294967295));
      p[c++] = B, B = B >> 8, p[c++] = B, B = B >> 8, p[c++] = B, B = B >> 8, p[c++] = B;
      let K = Number(u >> BigInt(32) & BigInt(4294967295));
      return p[c++] = K, K = K >> 8, p[c++] = K, K = K >> 8, p[c++] = K, K = K >> 8, p[c++] = K, c;
    }
    function _t(p, u, c, S, I) {
      mt(u, S, I, p, c, 7);
      let B = Number(u & BigInt(4294967295));
      p[c + 7] = B, B = B >> 8, p[c + 6] = B, B = B >> 8, p[c + 5] = B, B = B >> 8, p[c + 4] = B;
      let K = Number(u >> BigInt(32) & BigInt(4294967295));
      return p[c + 3] = K, K = K >> 8, p[c + 2] = K, K = K >> 8, p[c + 1] = K, K = K >> 8, p[c] = K, c + 8;
    }
    a.prototype.writeBigUInt64LE = St(function(u, c = 0) {
      return Q(this, u, c, BigInt(0), BigInt("0xffffffffffffffff"));
    }), a.prototype.writeBigUInt64BE = St(function(u, c = 0) {
      return _t(this, u, c, BigInt(0), BigInt("0xffffffffffffffff"));
    }), a.prototype.writeIntLE = function(u, c, S, I) {
      if (u = +u, c = c >>> 0, !I) {
        const Gt = Math.pow(2, 8 * S - 1);
        rt(this, u, c, S, Gt - 1, -Gt);
      }
      let B = 0, K = 1, xt = 0;
      for (this[c] = u & 255; ++B < S && (K *= 256); )
        u < 0 && xt === 0 && this[c + B - 1] !== 0 && (xt = 1), this[c + B] = (u / K >> 0) - xt & 255;
      return c + S;
    }, a.prototype.writeIntBE = function(u, c, S, I) {
      if (u = +u, c = c >>> 0, !I) {
        const Gt = Math.pow(2, 8 * S - 1);
        rt(this, u, c, S, Gt - 1, -Gt);
      }
      let B = S - 1, K = 1, xt = 0;
      for (this[c + B] = u & 255; --B >= 0 && (K *= 256); )
        u < 0 && xt === 0 && this[c + B + 1] !== 0 && (xt = 1), this[c + B] = (u / K >> 0) - xt & 255;
      return c + S;
    }, a.prototype.writeInt8 = function(u, c, S) {
      return u = +u, c = c >>> 0, S || rt(this, u, c, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[c] = u & 255, c + 1;
    }, a.prototype.writeInt16LE = function(u, c, S) {
      return u = +u, c = c >>> 0, S || rt(this, u, c, 2, 32767, -32768), this[c] = u & 255, this[c + 1] = u >>> 8, c + 2;
    }, a.prototype.writeInt16BE = function(u, c, S) {
      return u = +u, c = c >>> 0, S || rt(this, u, c, 2, 32767, -32768), this[c] = u >>> 8, this[c + 1] = u & 255, c + 2;
    }, a.prototype.writeInt32LE = function(u, c, S) {
      return u = +u, c = c >>> 0, S || rt(this, u, c, 4, 2147483647, -2147483648), this[c] = u & 255, this[c + 1] = u >>> 8, this[c + 2] = u >>> 16, this[c + 3] = u >>> 24, c + 4;
    }, a.prototype.writeInt32BE = function(u, c, S) {
      return u = +u, c = c >>> 0, S || rt(this, u, c, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[c] = u >>> 24, this[c + 1] = u >>> 16, this[c + 2] = u >>> 8, this[c + 3] = u & 255, c + 4;
    }, a.prototype.writeBigInt64LE = St(function(u, c = 0) {
      return Q(this, u, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), a.prototype.writeBigInt64BE = St(function(u, c = 0) {
      return _t(this, u, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function bt(p, u, c, S, I, B) {
      if (c + S > p.length) throw new RangeError("Index out of range");
      if (c < 0) throw new RangeError("Index out of range");
    }
    function Mt(p, u, c, S, I) {
      return u = +u, c = c >>> 0, I || bt(p, u, c, 4), i.write(p, u, c, S, 23, 4), c + 4;
    }
    a.prototype.writeFloatLE = function(u, c, S) {
      return Mt(this, u, c, !0, S);
    }, a.prototype.writeFloatBE = function(u, c, S) {
      return Mt(this, u, c, !1, S);
    };
    function Et(p, u, c, S, I) {
      return u = +u, c = c >>> 0, I || bt(p, u, c, 8), i.write(p, u, c, S, 52, 8), c + 8;
    }
    a.prototype.writeDoubleLE = function(u, c, S) {
      return Et(this, u, c, !0, S);
    }, a.prototype.writeDoubleBE = function(u, c, S) {
      return Et(this, u, c, !1, S);
    }, a.prototype.copy = function(u, c, S, I) {
      if (!a.isBuffer(u)) throw new TypeError("argument should be a Buffer");
      if (S || (S = 0), !I && I !== 0 && (I = this.length), c >= u.length && (c = u.length), c || (c = 0), I > 0 && I < S && (I = S), I === S || u.length === 0 || this.length === 0) return 0;
      if (c < 0)
        throw new RangeError("targetStart out of bounds");
      if (S < 0 || S >= this.length) throw new RangeError("Index out of range");
      if (I < 0) throw new RangeError("sourceEnd out of bounds");
      I > this.length && (I = this.length), u.length - c < I - S && (I = u.length - c + S);
      const B = I - S;
      return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(c, S, I) : Uint8Array.prototype.set.call(
        u,
        this.subarray(S, I),
        c
      ), B;
    }, a.prototype.fill = function(u, c, S, I) {
      if (typeof u == "string") {
        if (typeof c == "string" ? (I = c, c = 0, S = this.length) : typeof S == "string" && (I = S, S = this.length), I !== void 0 && typeof I != "string")
          throw new TypeError("encoding must be a string");
        if (typeof I == "string" && !a.isEncoding(I))
          throw new TypeError("Unknown encoding: " + I);
        if (u.length === 1) {
          const K = u.charCodeAt(0);
          (I === "utf8" && K < 128 || I === "latin1") && (u = K);
        }
      } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
      if (c < 0 || this.length < c || this.length < S)
        throw new RangeError("Out of range index");
      if (S <= c)
        return this;
      c = c >>> 0, S = S === void 0 ? this.length : S >>> 0, u || (u = 0);
      let B;
      if (typeof u == "number")
        for (B = c; B < S; ++B)
          this[B] = u;
      else {
        const K = a.isBuffer(u) ? u : a.from(u, I), xt = K.length;
        if (xt === 0)
          throw new TypeError('The value "' + u + '" is invalid for argument "value"');
        for (B = 0; B < S - c; ++B)
          this[B + c] = K[B % xt];
      }
      return this;
    };
    const H = {};
    function X(p, u, c) {
      H[p] = class extends c {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: u.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${p}]`, this.stack, delete this.name;
        }
        get code() {
          return p;
        }
        set code(I) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${p}]: ${this.message}`;
        }
      };
    }
    X(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(p) {
        return p ? `${p} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), X(
      "ERR_INVALID_ARG_TYPE",
      function(p, u) {
        return `The "${p}" argument must be of type number. Received type ${typeof u}`;
      },
      TypeError
    ), X(
      "ERR_OUT_OF_RANGE",
      function(p, u, c) {
        let S = `The value of "${p}" is out of range.`, I = c;
        return Number.isInteger(c) && Math.abs(c) > 2 ** 32 ? I = ct(String(c)) : typeof c == "bigint" && (I = String(c), (c > BigInt(2) ** BigInt(32) || c < -(BigInt(2) ** BigInt(32))) && (I = ct(I)), I += "n"), S += ` It must be ${u}. Received ${I}`, S;
      },
      RangeError
    );
    function ct(p) {
      let u = "", c = p.length;
      const S = p[0] === "-" ? 1 : 0;
      for (; c >= S + 4; c -= 3)
        u = `_${p.slice(c - 3, c)}${u}`;
      return `${p.slice(0, c)}${u}`;
    }
    function wt(p, u, c) {
      C(u, "offset"), (p[u] === void 0 || p[u + c] === void 0) && F(u, p.length - (c + 1));
    }
    function mt(p, u, c, S, I, B) {
      if (p > c || p < u) {
        const K = typeof u == "bigint" ? "n" : "";
        let xt;
        throw u === 0 || u === BigInt(0) ? xt = `>= 0${K} and < 2${K} ** ${(B + 1) * 8}${K}` : xt = `>= -(2${K} ** ${(B + 1) * 8 - 1}${K}) and < 2 ** ${(B + 1) * 8 - 1}${K}`, new H.ERR_OUT_OF_RANGE("value", xt, p);
      }
      wt(S, I, B);
    }
    function C(p, u) {
      if (typeof p != "number")
        throw new H.ERR_INVALID_ARG_TYPE(u, "number", p);
    }
    function F(p, u, c) {
      throw Math.floor(p) !== p ? (C(p, c), new H.ERR_OUT_OF_RANGE("offset", "an integer", p)) : u < 0 ? new H.ERR_BUFFER_OUT_OF_BOUNDS() : new H.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${u}`,
        p
      );
    }
    const q = /[^+/0-9A-Za-z-_]/g;
    function tt(p) {
      if (p = p.split("=")[0], p = p.trim().replace(q, ""), p.length < 2) return "";
      for (; p.length % 4 !== 0; )
        p = p + "=";
      return p;
    }
    function nt(p, u) {
      u = u || 1 / 0;
      let c;
      const S = p.length;
      let I = null;
      const B = [];
      for (let K = 0; K < S; ++K) {
        if (c = p.charCodeAt(K), c > 55295 && c < 57344) {
          if (!I) {
            if (c > 56319) {
              (u -= 3) > -1 && B.push(239, 191, 189);
              continue;
            } else if (K + 1 === S) {
              (u -= 3) > -1 && B.push(239, 191, 189);
              continue;
            }
            I = c;
            continue;
          }
          if (c < 56320) {
            (u -= 3) > -1 && B.push(239, 191, 189), I = c;
            continue;
          }
          c = (I - 55296 << 10 | c - 56320) + 65536;
        } else I && (u -= 3) > -1 && B.push(239, 191, 189);
        if (I = null, c < 128) {
          if ((u -= 1) < 0) break;
          B.push(c);
        } else if (c < 2048) {
          if ((u -= 2) < 0) break;
          B.push(
            c >> 6 | 192,
            c & 63 | 128
          );
        } else if (c < 65536) {
          if ((u -= 3) < 0) break;
          B.push(
            c >> 12 | 224,
            c >> 6 & 63 | 128,
            c & 63 | 128
          );
        } else if (c < 1114112) {
          if ((u -= 4) < 0) break;
          B.push(
            c >> 18 | 240,
            c >> 12 & 63 | 128,
            c >> 6 & 63 | 128,
            c & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return B;
    }
    function it(p) {
      const u = [];
      for (let c = 0; c < p.length; ++c)
        u.push(p.charCodeAt(c) & 255);
      return u;
    }
    function T(p, u) {
      let c, S, I;
      const B = [];
      for (let K = 0; K < p.length && !((u -= 2) < 0); ++K)
        c = p.charCodeAt(K), S = c >> 8, I = c % 256, B.push(I), B.push(S);
      return B;
    }
    function J(p) {
      return t.toByteArray(tt(p));
    }
    function et(p, u, c, S) {
      let I;
      for (I = 0; I < S && !(I + c >= u.length || I >= p.length); ++I)
        u[I + c] = p[I];
      return I;
    }
    function z(p, u) {
      return p instanceof u || p != null && p.constructor != null && p.constructor.name != null && p.constructor.name === u.name;
    }
    function Pt(p) {
      return p !== p;
    }
    const Ut = (function() {
      const p = "0123456789abcdef", u = new Array(256);
      for (let c = 0; c < 16; ++c) {
        const S = c * 16;
        for (let I = 0; I < 16; ++I)
          u[S + I] = p[c] + p[I];
      }
      return u;
    })();
    function St(p) {
      return typeof BigInt > "u" ? Ht : p;
    }
    function Ht() {
      throw new Error("BigInt not supported");
    }
  })(Ir)), Ir;
}
var Lo = be();
const ci = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", di = "http://www.w3.org/2001/XMLSchema#", Yi = "http://www.w3.org/2000/10/swap/", Qt = {
  xsd: {
    decimal: `${di}decimal`,
    boolean: `${di}boolean`,
    double: `${di}double`,
    integer: `${di}integer`,
    string: `${di}string`
  },
  rdf: {
    type: `${ci}type`,
    nil: `${ci}nil`,
    first: `${ci}first`,
    rest: `${ci}rest`,
    langString: `${ci}langString`
  },
  owl: {
    sameAs: "http://www.w3.org/2002/07/owl#sameAs"
  },
  r: {
    forSome: `${Yi}reify#forSome`,
    forAll: `${Yi}reify#forAll`
  },
  log: {
    implies: `${Yi}log#implies`,
    isImpliedBy: `${Yi}log#isImpliedBy`
  }
}, { xsd: Zi } = Qt, $o = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\([^])/g, Vn = {
  "\\": "\\",
  "'": "'",
  '"': '"',
  n: `
`,
  r: "\r",
  t: "	",
  f: "\f",
  b: "\b",
  _: "_",
  "~": "~",
  ".": ".",
  "-": "-",
  "!": "!",
  $: "$",
  "&": "&",
  "(": "(",
  ")": ")",
  "*": "*",
  "+": "+",
  ",": ",",
  ";": ";",
  "=": "=",
  "/": "/",
  "?": "?",
  "#": "#",
  "@": "@",
  "%": "%"
}, jo = /[\x00-\x20<>\\"\{\}\|\^\`]/, Bo = {
  _iri: !0,
  _unescapedIri: !0,
  _simpleQuotedString: !0,
  _langcode: !0,
  _blank: !0,
  _newline: !0,
  _comment: !0,
  _whitespace: !0,
  _endOfFile: !0
}, ko = /$0^/;
class qo {
  constructor(t) {
    if (this._iri = /^<((?:[^ <>{}\\]|\\[uU])+)>[ \t]*/, this._unescapedIri = /^<([^\x00-\x20<>\\"\{\}\|\^\`]*)>[ \t]*/, this._simpleQuotedString = /^"([^"\\\r\n]*)"(?=[^"])/, this._simpleApostropheString = /^'([^'\\\r\n]*)'(?=[^'])/, this._langcode = /^@([a-z]+(?:-[a-z0-9]+)*)(?=[^a-z0-9\-])/i, this._prefix = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:(?=[#\s<])/, this._prefixed = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:((?:(?:[0-:A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])(?:(?:[\.\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])*(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~]))?)?)(?:[ \t]+|(?=\.?[,;!\^\s#()\[\]\{\}"'<>]))/, this._variable = /^\?(?:(?:[A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?=[.,;!\^\s#()\[\]\{\}"'<>])/, this._blank = /^_:((?:[0-9A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?:[ \t]+|(?=\.?[,;:\s#()\[\]\{\}"'<>]))/, this._number = /^[\-+]?(?:(\d+\.\d*|\.?\d+)[eE][\-+]?|\d*(\.)?)\d+(?=\.?[,;:\s#()\[\]\{\}"'<>])/, this._boolean = /^(?:true|false)(?=[.,;\s#()\[\]\{\}"'<>])/, this._keyword = /^@[a-z]+(?=[\s#<:])/i, this._sparqlKeyword = /^(?:PREFIX|BASE|GRAPH)(?=[\s#<])/i, this._shortPredicates = /^a(?=[\s#()\[\]\{\}"'<>])/, this._newline = /^[ \t]*(?:#[^\n\r]*)?(?:\r\n|\n|\r)[ \t]*/, this._comment = /#([^\n\r]*)/, this._whitespace = /^[ \t]+/, this._endOfFile = /^(?:#[^\n\r]*)?$/, t = t || {}, this._isImpliedBy = t.isImpliedBy, this._lineMode = !!t.lineMode) {
      this._n3Mode = !1;
      for (const i in this)
        !(i in Bo) && this[i] instanceof RegExp && (this[i] = ko);
    } else
      this._n3Mode = t.n3 !== !1;
    this.comments = !!t.comments, this._literalClosingPos = 0;
  }
  // ## Private methods
  // ### `_tokenizeToEnd` tokenizes as for as possible, emitting tokens through the callback
  _tokenizeToEnd(t, i) {
    let r = this._input, n = r.length;
    for (; ; ) {
      let a, l;
      for (; a = this._newline.exec(r); )
        this.comments && (l = this._comment.exec(a[0])) && s("comment", l[1], "", this._line, a[0].length), r = r.substr(a[0].length, r.length), n = r.length, this._line++;
      if (!a && (a = this._whitespace.exec(r)) && (r = r.substr(a[0].length, r.length)), this._endOfFile.test(r))
        return i && (this.comments && (l = this._comment.exec(r)) && s("comment", l[1], "", this._line, r.length), r = null, s("eof", "", "", this._line, 0)), this._input = r;
      const h = this._line, d = r[0];
      let f = "", _ = "", m = "", y = null, w = 0, b = !1;
      switch (d) {
        case "^":
          if (r.length < 3)
            break;
          if (r[1] === "^") {
            if (this._previousMarker = "^^", r = r.substr(2), r[0] !== "<") {
              b = !0;
              break;
            }
          } else {
            this._n3Mode && (w = 1, f = "^");
            break;
          }
        // Fall through in case the type is an IRI
        case "<":
          if (y = this._unescapedIri.exec(r))
            f = "IRI", _ = y[1];
          else if (y = this._iri.exec(r)) {
            if (_ = this._unescape(y[1]), _ === null || jo.test(_))
              return o(this);
            f = "IRI";
          } else r.length > 1 && r[1] === "<" ? (f = "<<", w = 2) : this._n3Mode && r.length > 1 && r[1] === "=" && (w = 2, this._isImpliedBy ? (f = "abbreviation", _ = "<") : (f = "inverse", _ = ">"));
          break;
        case ">":
          r.length > 1 && r[1] === ">" && (f = ">>", w = 2);
          break;
        case "_":
          ((y = this._blank.exec(r)) || i && (y = this._blank.exec(`${r} `))) && (f = "blank", m = "_", _ = y[1]);
          break;
        case '"':
          if (y = this._simpleQuotedString.exec(r))
            _ = y[1];
          else if ({ value: _, matchLength: w } = this._parseLiteral(r), _ === null)
            return o(this);
          (y !== null || w !== 0) && (f = "literal", this._literalClosingPos = 0);
          break;
        case "'":
          if (!this._lineMode) {
            if (y = this._simpleApostropheString.exec(r))
              _ = y[1];
            else if ({ value: _, matchLength: w } = this._parseLiteral(r), _ === null)
              return o(this);
            (y !== null || w !== 0) && (f = "literal", this._literalClosingPos = 0);
          }
          break;
        case "?":
          this._n3Mode && (y = this._variable.exec(r)) && (f = "var", _ = y[0]);
          break;
        case "@":
          this._previousMarker === "literal" && (y = this._langcode.exec(r)) ? (f = "langcode", _ = y[1]) : (y = this._keyword.exec(r)) && (f = y[0]);
          break;
        case ".":
          if (r.length === 1 ? i : r[1] < "0" || r[1] > "9") {
            f = ".", w = 1;
            break;
          }
        // Fall through to numerical case (could be a decimal dot)
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "+":
        case "-":
          (y = this._number.exec(r) || i && (y = this._number.exec(`${r} `))) && (f = "literal", _ = y[0], m = typeof y[1] == "string" ? Zi.double : typeof y[2] == "string" ? Zi.decimal : Zi.integer);
          break;
        case "B":
        case "b":
        case "p":
        case "P":
        case "G":
        case "g":
          (y = this._sparqlKeyword.exec(r)) ? f = y[0].toUpperCase() : b = !0;
          break;
        case "f":
        case "t":
          (y = this._boolean.exec(r)) ? (f = "literal", _ = y[0], m = Zi.boolean) : b = !0;
          break;
        case "a":
          (y = this._shortPredicates.exec(r)) ? (f = "abbreviation", _ = "a") : b = !0;
          break;
        case "=":
          this._n3Mode && r.length > 1 && (f = "abbreviation", r[1] !== ">" ? (w = 1, _ = "=") : (w = 2, _ = ">"));
          break;
        case "!":
          if (!this._n3Mode)
            break;
        case ",":
        case ";":
        case "[":
        case "]":
        case "(":
        case ")":
        case "}":
          this._lineMode || (w = 1, f = d);
          break;
        case "{":
          !this._lineMode && r.length >= 2 && (r[1] === "|" ? (f = "{|", w = 2) : (f = d, w = 1));
          break;
        case "|":
          r.length >= 2 && r[1] === "}" && (f = "|}", w = 2);
          break;
        default:
          b = !0;
      }
      if (b && ((this._previousMarker === "@prefix" || this._previousMarker === "PREFIX") && (y = this._prefix.exec(r)) ? (f = "prefix", _ = y[1] || "") : ((y = this._prefixed.exec(r)) || i && (y = this._prefixed.exec(`${r} `))) && (f = "prefixed", m = y[1] || "", _ = this._unescape(y[2]))), this._previousMarker === "^^")
        switch (f) {
          case "prefixed":
            f = "type";
            break;
          case "IRI":
            f = "typeIRI";
            break;
          default:
            f = "";
        }
      if (!f)
        return i || !/^'''|^"""/.test(r) && /\n|\r/.test(r) ? o(this) : this._input = r;
      const g = w || y[0].length, v = s(f, _, m, h, g);
      this.previousToken = v, this._previousMarker = f, r = r.substr(g, r.length);
    }
    function s(a, l, h, d, f) {
      const _ = r ? n - r.length : n, m = _ + f, y = { type: a, value: l, prefix: h, line: d, start: _, end: m };
      return t(null, y), y;
    }
    function o(a) {
      t(a._syntaxError(/^\S*/.exec(r)[0]));
    }
  }
  // ### `_unescape` replaces N3 escape codes by their corresponding characters
  _unescape(t) {
    let i = !1;
    const r = t.replace($o, (n, s, o, a) => {
      if (typeof s == "string")
        return String.fromCharCode(Number.parseInt(s, 16));
      if (typeof o == "string") {
        let l = Number.parseInt(o, 16);
        return l <= 65535 ? String.fromCharCode(Number.parseInt(o, 16)) : String.fromCharCode(55296 + ((l -= 65536) >> 10), 56320 + (l & 1023));
      }
      return a in Vn ? Vn[a] : (i = !0, "");
    });
    return i ? null : r;
  }
  // ### `_parseLiteral` parses a literal into an unescaped value
  _parseLiteral(t) {
    if (t.length >= 3) {
      const i = t.match(/^(?:"""|"|'''|'|)/)[0], r = i.length;
      let n = Math.max(this._literalClosingPos, r);
      for (; (n = t.indexOf(i, n)) > 0; ) {
        let s = 0;
        for (; t[n - s - 1] === "\\"; )
          s++;
        if (s % 2 === 0) {
          const o = t.substring(r, n), a = o.split(/\r\n|\r|\n/).length - 1, l = n + r;
          if (r === 1 && a !== 0 || r === 3 && this._lineMode)
            break;
          return this._line += a, { value: this._unescape(o), matchLength: l };
        }
        n++;
      }
      this._literalClosingPos = t.length - r + 1;
    }
    return { value: "", matchLength: 0 };
  }
  // ### `_syntaxError` creates a syntax error for the given issue
  _syntaxError(t) {
    this._input = null;
    const i = new Error(`Unexpected "${t}" on line ${this._line}.`);
    return i.context = {
      token: void 0,
      line: this._line,
      previousToken: this.previousToken
    }, i;
  }
  // ### Strips off any starting UTF BOM mark.
  _readStartingBom(t) {
    return t.startsWith("\uFEFF") ? t.substr(1) : t;
  }
  // ## Public methods
  // ### `tokenize` starts the transformation of an N3 document into an array of tokens.
  // The input can be a string or a stream.
  tokenize(t, i) {
    if (this._line = 1, typeof t == "string")
      if (this._input = this._readStartingBom(t), typeof i == "function")
        queueMicrotask(() => this._tokenizeToEnd(i, !0));
      else {
        const r = [];
        let n;
        if (this._tokenizeToEnd((s, o) => s ? n = s : r.push(o), !0), n) throw n;
        return r;
      }
    else
      this._pendingBuffer = null, typeof t.setEncoding == "function" && t.setEncoding("utf8"), t.on("data", (r) => {
        this._input !== null && r.length !== 0 && (this._pendingBuffer && (r = Lo.Buffer.concat([this._pendingBuffer, r]), this._pendingBuffer = null), r[r.length - 1] & 128 ? this._pendingBuffer = r : (typeof this._input > "u" ? this._input = this._readStartingBom(typeof r == "string" ? r : r.toString()) : this._input += r, this._tokenizeToEnd(i, !1)));
      }), t.on("end", () => {
        typeof this._input == "string" && this._tokenizeToEnd(i, !0);
      }), t.on("error", i);
  }
}
const { rdf: Uo, xsd: $e } = Qt;
let ri, Wo = 0;
const Me = {
  namedNode: Pa,
  blankNode: Aa,
  variable: Ra,
  literal: Na,
  defaultGraph: Vo,
  quad: yn,
  triple: yn,
  fromTerm: Ai,
  fromQuad: Ia
};
class ue {
  constructor(t) {
    this.id = t;
  }
  // ### The value of this term
  get value() {
    return this.id;
  }
  // ### Returns whether this object represents the same term as the other
  equals(t) {
    return t instanceof ue ? this.id === t.id : !!t && this.termType === t.termType && this.value === t.value;
  }
  // ### Implement hashCode for Immutable.js, since we implement `equals`
  // https://immutable-js.com/docs/v4.0.0/ValueObject/#hashCode()
  hashCode() {
    return 0;
  }
  // ### Returns a plain object representation of this term
  toJSON() {
    return {
      termType: this.termType,
      value: this.value
    };
  }
}
let xa = class extends ue {
  // ### The term type of this term
  get termType() {
    return "NamedNode";
  }
}, ur = class Sa extends ue {
  // ### The term type of this term
  get termType() {
    return "Literal";
  }
  // ### The text value of this literal
  get value() {
    return this.id.substring(1, this.id.lastIndexOf('"'));
  }
  // ### The language of this literal
  get language() {
    const t = this.id;
    let i = t.lastIndexOf('"') + 1;
    return i < t.length && t[i++] === "@" ? t.substr(i).toLowerCase() : "";
  }
  // ### The datatype IRI of this literal
  get datatype() {
    return new xa(this.datatypeString);
  }
  // ### The datatype string of this literal
  get datatypeString() {
    const t = this.id, i = t.lastIndexOf('"') + 1, r = i < t.length ? t[i] : "";
    return r === "^" ? t.substr(i + 2) : (
      // If "@" follows, return rdf:langString; xsd:string otherwise
      r !== "@" ? $e.string : Uo.langString
    );
  }
  // ### Returns whether this object represents the same term as the other
  equals(t) {
    return t instanceof Sa ? this.id === t.id : !!t && !!t.datatype && this.termType === t.termType && this.value === t.value && this.language === t.language && this.datatype.value === t.datatype.value;
  }
  toJSON() {
    return {
      termType: this.termType,
      value: this.value,
      language: this.language,
      datatype: { termType: "NamedNode", value: this.datatypeString }
    };
  }
}, Ho = class extends ue {
  constructor(t) {
    super(`_:${t}`);
  }
  // ### The term type of this term
  get termType() {
    return "BlankNode";
  }
  // ### The name of this blank node
  get value() {
    return this.id.substr(2);
  }
}, zo = class extends ue {
  constructor(t) {
    super(`?${t}`);
  }
  // ### The term type of this term
  get termType() {
    return "Variable";
  }
  // ### The name of this variable
  get value() {
    return this.id.substr(1);
  }
}, Qo = class extends ue {
  constructor() {
    return super(""), ri || this;
  }
  // ### The term type of this term
  get termType() {
    return "DefaultGraph";
  }
  // ### Returns whether this object represents the same term as the other
  equals(t) {
    return this === t || !!t && this.termType === t.termType;
  }
};
ri = new Qo();
function Pi(e, t, i) {
  if (t = t || Me, !e)
    return t.defaultGraph();
  switch (e[0]) {
    case "?":
      return t.variable(e.substr(1));
    case "_":
      return t.blankNode(e.substr(2));
    case '"':
      if (t === Me)
        return new ur(e);
      if (e[e.length - 1] === '"')
        return t.literal(e.substr(1, e.length - 2));
      const r = e.lastIndexOf('"', e.length - 1);
      return t.literal(
        e.substr(1, r - 1),
        e[r + 1] === "@" ? e.substr(r + 2) : t.namedNode(e.substr(r + 3))
      );
    case "[":
      e = JSON.parse(e);
      break;
    default:
      if (!i || !Array.isArray(e))
        return t.namedNode(e);
  }
  return t.quad(
    Pi(e[0], t, !0),
    Pi(e[1], t, !0),
    Pi(e[2], t, !0),
    e[3] && Pi(e[3], t, !0)
  );
}
function Xe(e, t) {
  if (typeof e == "string")
    return e;
  if (e instanceof ue && e.termType !== "Quad")
    return e.id;
  if (!e)
    return ri.id;
  switch (e.termType) {
    case "NamedNode":
      return e.value;
    case "BlankNode":
      return `_:${e.value}`;
    case "Variable":
      return `?${e.value}`;
    case "DefaultGraph":
      return "";
    case "Literal":
      return `"${e.value}"${e.language ? `@${e.language}` : e.datatype && e.datatype.value !== $e.string ? `^^${e.datatype.value}` : ""}`;
    case "Quad":
      const i = [
        Xe(e.subject, !0),
        Xe(e.predicate, !0),
        Xe(e.object, !0)
      ];
      return e.graph && e.graph.termType !== "DefaultGraph" && i.push(Xe(e.graph, !0)), t ? i : JSON.stringify(i);
    default:
      throw new Error(`Unexpected termType: ${e.termType}`);
  }
}
let Ma = class extends ue {
  constructor(t, i, r, n) {
    super(""), this._subject = t, this._predicate = i, this._object = r, this._graph = n || ri;
  }
  // ### The term type of this term
  get termType() {
    return "Quad";
  }
  get subject() {
    return this._subject;
  }
  get predicate() {
    return this._predicate;
  }
  get object() {
    return this._object;
  }
  get graph() {
    return this._graph;
  }
  // ### Returns a plain object representation of this quad
  toJSON() {
    return {
      termType: this.termType,
      subject: this._subject.toJSON(),
      predicate: this._predicate.toJSON(),
      object: this._object.toJSON(),
      graph: this._graph.toJSON()
    };
  }
  // ### Returns whether this object represents the same quad as the other
  equals(t) {
    return !!t && this._subject.equals(t.subject) && this._predicate.equals(t.predicate) && this._object.equals(t.object) && this._graph.equals(t.graph);
  }
};
function Pa(e) {
  return new xa(e);
}
function Aa(e) {
  return new Ho(e || `n3-${Wo++}`);
}
function Na(e, t) {
  if (typeof t == "string")
    return new ur(`"${e}"@${t.toLowerCase()}`);
  let i = t ? t.value : "";
  return i === "" && (typeof e == "boolean" ? i = $e.boolean : typeof e == "number" && (Number.isFinite(e) ? i = Number.isInteger(e) ? $e.integer : $e.double : (i = $e.double, Number.isNaN(e) || (e = e > 0 ? "INF" : "-INF")))), i === "" || i === $e.string ? new ur(`"${e}"`) : new ur(`"${e}"^^${i}`);
}
function Ra(e) {
  return new zo(e);
}
function Vo() {
  return ri;
}
function yn(e, t, i, r) {
  return new Ma(e, t, i, r);
}
function Ai(e) {
  if (e instanceof ue)
    return e;
  switch (e.termType) {
    case "NamedNode":
      return Pa(e.value);
    case "BlankNode":
      return Aa(e.value);
    case "Variable":
      return Ra(e.value);
    case "DefaultGraph":
      return ri;
    case "Literal":
      return Na(e.value, e.language || e.datatype);
    case "Quad":
      return Ia(e);
    default:
      throw new Error(`Unexpected termType: ${e.termType}`);
  }
}
function Ia(e) {
  if (e instanceof Ma)
    return e;
  if (e.termType !== "Quad")
    throw new Error(`Unexpected termType: ${e.termType}`);
  return yn(Ai(e.subject), Ai(e.predicate), Ai(e.object), Ai(e.graph));
}
let Xn = 0;
class Ta {
  constructor(t) {
    this._contextStack = [], this._graph = null, t = t || {}, this._setBase(t.baseIRI), t.factory && Ca(this, t.factory);
    const i = typeof t.format == "string" ? t.format.match(/\w*$/)[0].toLowerCase() : "", r = /turtle/.test(i), n = /trig/.test(i), s = /triple/.test(i), o = /quad/.test(i), a = this._n3Mode = /n3/.test(i), l = s || o;
    (this._supportsNamedGraphs = !(r || a)) || (this._readPredicateOrNamedGraph = this._readPredicate), this._supportsQuads = !(r || n || s || a), this._isImpliedBy = t.isImpliedBy, this._supportsRDFStar = i === "" || /star|\*$/.test(i), l && (this._resolveRelativeIRI = (h) => null), this._blankNodePrefix = typeof t.blankNodePrefix != "string" ? "" : t.blankNodePrefix.replace(/^(?!_:)/, "_:"), this._lexer = t.lexer || new qo({ lineMode: l, n3: a, isImpliedBy: this._isImpliedBy }), this._explicitQuantifiers = !!t.explicitQuantifiers;
  }
  // ## Static class methods
  // ### `_resetBlankNodePrefix` restarts blank node prefix identification
  static _resetBlankNodePrefix() {
    Xn = 0;
  }
  // ## Private methods
  // ### `_setBase` sets the base IRI to resolve relative IRIs
  _setBase(t) {
    if (!t)
      this._base = "", this._basePath = "";
    else {
      const i = t.indexOf("#");
      i >= 0 && (t = t.substr(0, i)), this._base = t, this._basePath = t.indexOf("/") < 0 ? t : t.replace(/[^\/?]*(?:\?.*)?$/, ""), t = t.match(/^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i), this._baseRoot = t[0], this._baseScheme = t[1];
    }
  }
  // ### `_saveContext` stores the current parsing context
  // when entering a new scope (list, blank node, formula)
  _saveContext(t, i, r, n, s) {
    const o = this._n3Mode;
    this._contextStack.push({
      type: t,
      subject: r,
      predicate: n,
      object: s,
      graph: i,
      inverse: o ? this._inversePredicate : !1,
      blankPrefix: o ? this._prefixes._ : "",
      quantified: o ? this._quantified : null
    }), o && (this._inversePredicate = !1, this._prefixes._ = this._graph ? `${this._graph.value}.` : ".", this._quantified = Object.create(this._quantified));
  }
  // ### `_restoreContext` restores the parent context
  // when leaving a scope (list, blank node, formula)
  _restoreContext(t, i) {
    const r = this._contextStack.pop();
    if (!r || r.type !== t)
      return this._error(`Unexpected ${i.type}`, i);
    this._subject = r.subject, this._predicate = r.predicate, this._object = r.object, this._graph = r.graph, this._n3Mode && (this._inversePredicate = r.inverse, this._prefixes._ = r.blankPrefix, this._quantified = r.quantified);
  }
  // ### `_readInTopContext` reads a token when in the top context
  _readInTopContext(t) {
    switch (t.type) {
      // If an EOF token arrives in the top context, signal that we're done
      case "eof":
        return this._graph !== null ? this._error("Unclosed graph", t) : (delete this._prefixes._, this._callback(null, null, this._prefixes));
      // It could be a prefix declaration
      case "PREFIX":
        this._sparqlStyle = !0;
      case "@prefix":
        return this._readPrefix;
      // It could be a base declaration
      case "BASE":
        this._sparqlStyle = !0;
      case "@base":
        return this._readBaseIRI;
      // It could be a graph
      case "{":
        if (this._supportsNamedGraphs)
          return this._graph = "", this._subject = null, this._readSubject;
      case "GRAPH":
        if (this._supportsNamedGraphs)
          return this._readNamedGraphLabel;
      // Otherwise, the next token must be a subject
      default:
        return this._readSubject(t);
    }
  }
  // ### `_readEntity` reads an IRI, prefixed name, blank node, or variable
  _readEntity(t, i) {
    let r;
    switch (t.type) {
      // Read a relative or absolute IRI
      case "IRI":
      case "typeIRI":
        const n = this._resolveIRI(t.value);
        if (n === null)
          return this._error("Invalid IRI", t);
        r = this._factory.namedNode(n);
        break;
      // Read a prefixed name
      case "type":
      case "prefixed":
        const s = this._prefixes[t.prefix];
        if (s === void 0)
          return this._error(`Undefined prefix "${t.prefix}:"`, t);
        r = this._factory.namedNode(s + t.value);
        break;
      // Read a blank node
      case "blank":
        r = this._factory.blankNode(this._prefixes[t.prefix] + t.value);
        break;
      // Read a variable
      case "var":
        r = this._factory.variable(t.value.substr(1));
        break;
      // Everything else is not an entity
      default:
        return this._error(`Expected entity but got ${t.type}`, t);
    }
    return !i && this._n3Mode && r.id in this._quantified && (r = this._quantified[r.id]), r;
  }
  // ### `_readSubject` reads a quad's subject
  _readSubject(t) {
    switch (this._predicate = null, t.type) {
      case "[":
        return this._saveContext(
          "blank",
          this._graph,
          this._subject = this._factory.blankNode(),
          null,
          null
        ), this._readBlankNodeHead;
      case "(":
        return this._saveContext("list", this._graph, this.RDF_NIL, null, null), this._subject = null, this._readListItem;
      case "{":
        return this._n3Mode ? (this._saveContext(
          "formula",
          this._graph,
          this._graph = this._factory.blankNode(),
          null,
          null
        ), this._readSubject) : this._error("Unexpected graph", t);
      case "}":
        return this._readPunctuation(t);
      case "@forSome":
        return this._n3Mode ? (this._subject = null, this._predicate = this.N3_FORSOME, this._quantifier = "blankNode", this._readQuantifierList) : this._error('Unexpected "@forSome"', t);
      case "@forAll":
        return this._n3Mode ? (this._subject = null, this._predicate = this.N3_FORALL, this._quantifier = "variable", this._readQuantifierList) : this._error('Unexpected "@forAll"', t);
      case "literal":
        if (!this._n3Mode)
          return this._error("Unexpected literal", t);
        if (t.prefix.length === 0)
          return this._literalValue = t.value, this._completeSubjectLiteral;
        this._subject = this._factory.literal(t.value, this._factory.namedNode(t.prefix));
        break;
      case "<<":
        return this._supportsRDFStar ? (this._saveContext("<<", this._graph, null, null, null), this._graph = null, this._readSubject) : this._error("Unexpected RDF-star syntax", t);
      default:
        if ((this._subject = this._readEntity(t)) === void 0)
          return;
        if (this._n3Mode)
          return this._getPathReader(this._readPredicateOrNamedGraph);
    }
    return this._readPredicateOrNamedGraph;
  }
  // ### `_readPredicate` reads a quad's predicate
  _readPredicate(t) {
    const i = t.type;
    switch (i) {
      case "inverse":
        this._inversePredicate = !0;
      case "abbreviation":
        this._predicate = this.ABBREVIATIONS[t.value];
        break;
      case ".":
      case "]":
      case "}":
        return this._predicate === null ? this._error(`Unexpected ${i}`, t) : (this._subject = null, i === "]" ? this._readBlankNodeTail(t) : this._readPunctuation(t));
      case ";":
        return this._predicate !== null ? this._readPredicate : this._error("Expected predicate but got ;", t);
      case "[":
        if (this._n3Mode)
          return this._saveContext(
            "blank",
            this._graph,
            this._subject,
            this._subject = this._factory.blankNode(),
            null
          ), this._readBlankNodeHead;
      case "blank":
        if (!this._n3Mode)
          return this._error("Disallowed blank node as predicate", t);
      default:
        if ((this._predicate = this._readEntity(t)) === void 0)
          return;
    }
    return this._readObject;
  }
  // ### `_readObject` reads a quad's object
  _readObject(t) {
    switch (t.type) {
      case "literal":
        if (t.prefix.length === 0)
          return this._literalValue = t.value, this._readDataTypeOrLang;
        this._object = this._factory.literal(t.value, this._factory.namedNode(t.prefix));
        break;
      case "[":
        return this._saveContext(
          "blank",
          this._graph,
          this._subject,
          this._predicate,
          this._subject = this._factory.blankNode()
        ), this._readBlankNodeHead;
      case "(":
        return this._saveContext("list", this._graph, this._subject, this._predicate, this.RDF_NIL), this._subject = null, this._readListItem;
      case "{":
        return this._n3Mode ? (this._saveContext(
          "formula",
          this._graph,
          this._subject,
          this._predicate,
          this._graph = this._factory.blankNode()
        ), this._readSubject) : this._error("Unexpected graph", t);
      case "<<":
        return this._supportsRDFStar ? (this._saveContext("<<", this._graph, this._subject, this._predicate, null), this._graph = null, this._readSubject) : this._error("Unexpected RDF-star syntax", t);
      default:
        if ((this._object = this._readEntity(t)) === void 0)
          return;
        if (this._n3Mode)
          return this._getPathReader(this._getContextEndReader());
    }
    return this._getContextEndReader();
  }
  // ### `_readPredicateOrNamedGraph` reads a quad's predicate, or a named graph
  _readPredicateOrNamedGraph(t) {
    return t.type === "{" ? this._readGraph(t) : this._readPredicate(t);
  }
  // ### `_readGraph` reads a graph
  _readGraph(t) {
    return t.type !== "{" ? this._error(`Expected graph but got ${t.type}`, t) : (this._graph = this._subject, this._subject = null, this._readSubject);
  }
  // ### `_readBlankNodeHead` reads the head of a blank node
  _readBlankNodeHead(t) {
    return t.type === "]" ? (this._subject = null, this._readBlankNodeTail(t)) : (this._predicate = null, this._readPredicate(t));
  }
  // ### `_readBlankNodeTail` reads the end of a blank node
  _readBlankNodeTail(t) {
    if (t.type !== "]")
      return this._readBlankNodePunctuation(t);
    this._subject !== null && this._emit(this._subject, this._predicate, this._object, this._graph);
    const i = this._predicate === null;
    return this._restoreContext("blank", t), this._object !== null ? this._getContextEndReader() : this._predicate !== null ? this._readObject : i ? this._readPredicateOrNamedGraph : this._readPredicateAfterBlank;
  }
  // ### `_readPredicateAfterBlank` reads a predicate after an anonymous blank node
  _readPredicateAfterBlank(t) {
    switch (t.type) {
      case ".":
      case "}":
        return this._subject = null, this._readPunctuation(t);
      default:
        return this._readPredicate(t);
    }
  }
  // ### `_readListItem` reads items from a list
  _readListItem(t) {
    let i = null, r = null, n = this._readListItem;
    const s = this._subject, o = this._contextStack, a = o[o.length - 1];
    switch (t.type) {
      case "[":
        this._saveContext(
          "blank",
          this._graph,
          r = this._factory.blankNode(),
          this.RDF_FIRST,
          this._subject = i = this._factory.blankNode()
        ), n = this._readBlankNodeHead;
        break;
      case "(":
        this._saveContext(
          "list",
          this._graph,
          r = this._factory.blankNode(),
          this.RDF_FIRST,
          this.RDF_NIL
        ), this._subject = null;
        break;
      case ")":
        if (this._restoreContext("list", t), o.length !== 0 && o[o.length - 1].type === "list" && this._emit(this._subject, this._predicate, this._object, this._graph), this._predicate === null) {
          if (n = this._readPredicate, this._subject === this.RDF_NIL)
            return n;
        } else if (n = this._getContextEndReader(), this._object === this.RDF_NIL)
          return n;
        r = this.RDF_NIL;
        break;
      case "literal":
        t.prefix.length === 0 ? (this._literalValue = t.value, n = this._readListItemDataTypeOrLang) : (i = this._factory.literal(t.value, this._factory.namedNode(t.prefix)), n = this._getContextEndReader());
        break;
      case "{":
        return this._n3Mode ? (this._saveContext(
          "formula",
          this._graph,
          this._subject,
          this._predicate,
          this._graph = this._factory.blankNode()
        ), this._readSubject) : this._error("Unexpected graph", t);
      default:
        if ((i = this._readEntity(t)) === void 0)
          return;
    }
    if (r === null && (this._subject = r = this._factory.blankNode()), s === null ? a.predicate === null ? a.subject = r : a.object = r : this._emit(s, this.RDF_REST, r, this._graph), i !== null) {
      if (this._n3Mode && (t.type === "IRI" || t.type === "prefixed"))
        return this._saveContext("item", this._graph, r, this.RDF_FIRST, i), this._subject = i, this._predicate = null, this._getPathReader(this._readListItem);
      this._emit(r, this.RDF_FIRST, i, this._graph);
    }
    return n;
  }
  // ### `_readDataTypeOrLang` reads an _optional_ datatype or language
  _readDataTypeOrLang(t) {
    return this._completeObjectLiteral(t, !1);
  }
  // ### `_readListItemDataTypeOrLang` reads an _optional_ datatype or language in a list
  _readListItemDataTypeOrLang(t) {
    return this._completeObjectLiteral(t, !0);
  }
  // ### `_completeLiteral` completes a literal with an optional datatype or language
  _completeLiteral(t) {
    let i = this._factory.literal(this._literalValue);
    switch (t.type) {
      // Create a datatyped literal
      case "type":
      case "typeIRI":
        const r = this._readEntity(t);
        if (r === void 0) return;
        i = this._factory.literal(this._literalValue, r), t = null;
        break;
      // Create a language-tagged string
      case "langcode":
        i = this._factory.literal(this._literalValue, t.value), t = null;
        break;
    }
    return { token: t, literal: i };
  }
  // Completes a literal in subject position
  _completeSubjectLiteral(t) {
    return this._subject = this._completeLiteral(t).literal, this._readPredicateOrNamedGraph;
  }
  // Completes a literal in object position
  _completeObjectLiteral(t, i) {
    const r = this._completeLiteral(t);
    if (r)
      return this._object = r.literal, i && this._emit(this._subject, this.RDF_FIRST, this._object, this._graph), r.token === null ? this._getContextEndReader() : (this._readCallback = this._getContextEndReader(), this._readCallback(r.token));
  }
  // ### `_readFormulaTail` reads the end of a formula
  _readFormulaTail(t) {
    return t.type !== "}" ? this._readPunctuation(t) : (this._subject !== null && this._emit(this._subject, this._predicate, this._object, this._graph), this._restoreContext("formula", t), this._object === null ? this._readPredicate : this._getContextEndReader());
  }
  // ### `_readPunctuation` reads punctuation between quads or quad parts
  _readPunctuation(t) {
    let i, r = this._graph;
    const n = this._subject, s = this._inversePredicate;
    switch (t.type) {
      // A closing brace ends a graph
      case "}":
        if (this._graph === null)
          return this._error("Unexpected graph closing", t);
        if (this._n3Mode)
          return this._readFormulaTail(t);
        this._graph = null;
      // A dot just ends the statement, without sharing anything with the next
      case ".":
        this._subject = null, i = this._contextStack.length ? this._readSubject : this._readInTopContext, s && (this._inversePredicate = !1);
        break;
      // Semicolon means the subject is shared; predicate and object are different
      case ";":
        i = this._readPredicate;
        break;
      // Comma means both the subject and predicate are shared; the object is different
      case ",":
        i = this._readObject;
        break;
      // {| means that the current triple is annotated with predicate-object pairs.
      case "{|":
        if (!this._supportsRDFStar)
          return this._error("Unexpected RDF-star syntax", t);
        const o = this._predicate, a = this._object;
        this._subject = this._factory.quad(n, o, a, this.DEFAULTGRAPH), i = this._readPredicate;
        break;
      // |} means that the current quoted triple in annotation syntax is finalized.
      case "|}":
        if (this._subject.termType !== "Quad")
          return this._error("Unexpected asserted triple closing", t);
        this._subject = null, i = this._readPunctuation;
        break;
      default:
        if (this._supportsQuads && this._graph === null && (r = this._readEntity(t)) !== void 0) {
          i = this._readQuadPunctuation;
          break;
        }
        return this._error(`Expected punctuation to follow "${this._object.id}"`, t);
    }
    if (n !== null) {
      const o = this._predicate, a = this._object;
      s ? this._emit(a, o, n, r) : this._emit(n, o, a, r);
    }
    return i;
  }
  // ### `_readBlankNodePunctuation` reads punctuation in a blank node
  _readBlankNodePunctuation(t) {
    let i;
    switch (t.type) {
      // Semicolon means the subject is shared; predicate and object are different
      case ";":
        i = this._readPredicate;
        break;
      // Comma means both the subject and predicate are shared; the object is different
      case ",":
        i = this._readObject;
        break;
      default:
        return this._error(`Expected punctuation to follow "${this._object.id}"`, t);
    }
    return this._emit(this._subject, this._predicate, this._object, this._graph), i;
  }
  // ### `_readQuadPunctuation` reads punctuation after a quad
  _readQuadPunctuation(t) {
    return t.type !== "." ? this._error("Expected dot to follow quad", t) : this._readInTopContext;
  }
  // ### `_readPrefix` reads the prefix of a prefix declaration
  _readPrefix(t) {
    return t.type !== "prefix" ? this._error("Expected prefix to follow @prefix", t) : (this._prefix = t.value, this._readPrefixIRI);
  }
  // ### `_readPrefixIRI` reads the IRI of a prefix declaration
  _readPrefixIRI(t) {
    if (t.type !== "IRI")
      return this._error(`Expected IRI to follow prefix "${this._prefix}:"`, t);
    const i = this._readEntity(t);
    return this._prefixes[this._prefix] = i.value, this._prefixCallback(this._prefix, i), this._readDeclarationPunctuation;
  }
  // ### `_readBaseIRI` reads the IRI of a base declaration
  _readBaseIRI(t) {
    const i = t.type === "IRI" && this._resolveIRI(t.value);
    return i ? (this._setBase(i), this._readDeclarationPunctuation) : this._error("Expected valid IRI to follow base declaration", t);
  }
  // ### `_readNamedGraphLabel` reads the label of a named graph
  _readNamedGraphLabel(t) {
    switch (t.type) {
      case "IRI":
      case "blank":
      case "prefixed":
        return this._readSubject(t), this._readGraph;
      case "[":
        return this._readNamedGraphBlankLabel;
      default:
        return this._error("Invalid graph label", t);
    }
  }
  // ### `_readNamedGraphLabel` reads a blank node label of a named graph
  _readNamedGraphBlankLabel(t) {
    return t.type !== "]" ? this._error("Invalid graph label", t) : (this._subject = this._factory.blankNode(), this._readGraph);
  }
  // ### `_readDeclarationPunctuation` reads the punctuation of a declaration
  _readDeclarationPunctuation(t) {
    return this._sparqlStyle ? (this._sparqlStyle = !1, this._readInTopContext(t)) : t.type !== "." ? this._error("Expected declaration to end with a dot", t) : this._readInTopContext;
  }
  // Reads a list of quantified symbols from a @forSome or @forAll statement
  _readQuantifierList(t) {
    let i;
    switch (t.type) {
      case "IRI":
      case "prefixed":
        if ((i = this._readEntity(t, !0)) !== void 0)
          break;
      default:
        return this._error(`Unexpected ${t.type}`, t);
    }
    return this._explicitQuantifiers ? (this._subject === null ? this._emit(
      this._graph || this.DEFAULTGRAPH,
      this._predicate,
      this._subject = this._factory.blankNode(),
      this.QUANTIFIERS_GRAPH
    ) : this._emit(
      this._subject,
      this.RDF_REST,
      this._subject = this._factory.blankNode(),
      this.QUANTIFIERS_GRAPH
    ), this._emit(this._subject, this.RDF_FIRST, i, this.QUANTIFIERS_GRAPH)) : this._quantified[i.id] = this._factory[this._quantifier](this._factory.blankNode().value), this._readQuantifierPunctuation;
  }
  // Reads punctuation from a @forSome or @forAll statement
  _readQuantifierPunctuation(t) {
    return t.type === "," ? this._readQuantifierList : (this._explicitQuantifiers && (this._emit(this._subject, this.RDF_REST, this.RDF_NIL, this.QUANTIFIERS_GRAPH), this._subject = null), this._readCallback = this._getContextEndReader(), this._readCallback(t));
  }
  // ### `_getPathReader` reads a potential path and then resumes with the given function
  _getPathReader(t) {
    return this._afterPath = t, this._readPath;
  }
  // ### `_readPath` reads a potential path
  _readPath(t) {
    switch (t.type) {
      // Forward path
      case "!":
        return this._readForwardPath;
      // Backward path
      case "^":
        return this._readBackwardPath;
      // Not a path; resume reading where we left off
      default:
        const i = this._contextStack, r = i.length && i[i.length - 1];
        if (r && r.type === "item") {
          const n = this._subject;
          this._restoreContext("item", t), this._emit(this._subject, this.RDF_FIRST, n, this._graph);
        }
        return this._afterPath(t);
    }
  }
  // ### `_readForwardPath` reads a '!' path
  _readForwardPath(t) {
    let i, r;
    const n = this._factory.blankNode();
    if ((r = this._readEntity(t)) !== void 0)
      return this._predicate === null ? (i = this._subject, this._subject = n) : (i = this._object, this._object = n), this._emit(i, r, n, this._graph), this._readPath;
  }
  // ### `_readBackwardPath` reads a '^' path
  _readBackwardPath(t) {
    const i = this._factory.blankNode();
    let r, n;
    if ((r = this._readEntity(t)) !== void 0)
      return this._predicate === null ? (n = this._subject, this._subject = i) : (n = this._object, this._object = i), this._emit(i, r, n, this._graph), this._readPath;
  }
  // ### `_readRDFStarTailOrGraph` reads the graph of a nested RDF-star quad or the end of a nested RDF-star triple
  _readRDFStarTailOrGraph(t) {
    return t.type !== ">>" ? this._supportsQuads && this._graph === null && (this._graph = this._readEntity(t)) !== void 0 ? this._readRDFStarTail : this._error(`Expected >> to follow "${this._object.id}"`, t) : this._readRDFStarTail(t);
  }
  // ### `_readRDFStarTail` reads the end of a nested RDF-star triple
  _readRDFStarTail(t) {
    if (t.type !== ">>")
      return this._error(`Expected >> but got ${t.type}`, t);
    const i = this._factory.quad(
      this._subject,
      this._predicate,
      this._object,
      this._graph || this.DEFAULTGRAPH
    );
    return this._restoreContext("<<", t), this._subject === null ? (this._subject = i, this._readPredicate) : (this._object = i, this._getContextEndReader());
  }
  // ### `_getContextEndReader` gets the next reader function at the end of a context
  _getContextEndReader() {
    const t = this._contextStack;
    if (!t.length)
      return this._readPunctuation;
    switch (t[t.length - 1].type) {
      case "blank":
        return this._readBlankNodeTail;
      case "list":
        return this._readListItem;
      case "formula":
        return this._readFormulaTail;
      case "<<":
        return this._readRDFStarTailOrGraph;
    }
  }
  // ### `_emit` sends a quad through the callback
  _emit(t, i, r, n) {
    this._callback(null, this._factory.quad(t, i, r, n || this.DEFAULTGRAPH));
  }
  // ### `_error` emits an error message through the callback
  _error(t, i) {
    const r = new Error(`${t} on line ${i.line}.`);
    r.context = {
      token: i,
      line: i.line,
      previousToken: this._lexer.previousToken
    }, this._callback(r), this._callback = tr;
  }
  // ### `_resolveIRI` resolves an IRI against the base path
  _resolveIRI(t) {
    return /^[a-z][a-z0-9+.-]*:/i.test(t) ? t : this._resolveRelativeIRI(t);
  }
  // ### `_resolveRelativeIRI` resolves an IRI against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative
  _resolveRelativeIRI(t) {
    if (!t.length)
      return this._base;
    switch (t[0]) {
      // Resolve relative fragment IRIs against the base IRI
      case "#":
        return this._base + t;
      // Resolve relative query string IRIs by replacing the query string
      case "?":
        return this._base.replace(/(?:\?.*)?$/, t);
      // Resolve root-relative IRIs at the root of the base IRI
      case "/":
        return (t[1] === "/" ? this._baseScheme : this._baseRoot) + this._removeDotSegments(t);
      // Resolve all other IRIs at the base IRI's path
      default:
        return /^[^/:]*:/.test(t) ? null : this._removeDotSegments(this._basePath + t);
    }
  }
  // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986
  _removeDotSegments(t) {
    if (!/(^|\/)\.\.?($|[/#?])/.test(t))
      return t;
    const i = t.length;
    let r = "", n = -1, s = -1, o = 0, a = "/";
    for (; n < i; ) {
      switch (a) {
        // The path starts with the first slash after the authority
        case ":":
          if (s < 0 && t[++n] === "/" && t[++n] === "/")
            for (; (s = n + 1) < i && t[s] !== "/"; )
              n = s;
          break;
        // Don't modify a query string or fragment
        case "?":
        case "#":
          n = i;
          break;
        // Handle '/.' or '/..' path segments
        case "/":
          if (t[n + 1] === ".")
            switch (a = t[++n + 1], a) {
              // Remove a '/.' segment
              case "/":
                r += t.substring(o, n - 1), o = n + 1;
                break;
              // Remove a trailing '/.' segment
              case void 0:
              case "?":
              case "#":
                return r + t.substring(o, n) + t.substr(n + 1);
              // Remove a '/..' segment
              case ".":
                if (a = t[++n + 1], a === void 0 || a === "/" || a === "?" || a === "#") {
                  if (r += t.substring(o, n - 2), (o = r.lastIndexOf("/")) >= s && (r = r.substr(0, o)), a !== "/")
                    return `${r}/${t.substr(n + 1)}`;
                  o = n + 1;
                }
            }
      }
      a = t[++n];
    }
    return r + t.substring(o);
  }
  // ## Public methods
  // ### `parse` parses the N3 input and emits each parsed quad through the onQuad callback.
  parse(t, i, r) {
    let n, s, o;
    if (i && (i.onQuad || i.onPrefix || i.onComment) ? (n = i.onQuad, s = i.onPrefix, o = i.onComment) : (n = i, s = r), this._readCallback = this._readInTopContext, this._sparqlStyle = !1, this._prefixes = /* @__PURE__ */ Object.create(null), this._prefixes._ = this._blankNodePrefix ? this._blankNodePrefix.substr(2) : `b${Xn++}_`, this._prefixCallback = s || tr, this._inversePredicate = !1, this._quantified = /* @__PURE__ */ Object.create(null), !n) {
      const l = [];
      let h;
      if (this._callback = (d, f) => {
        d ? h = d : f && l.push(f);
      }, this._lexer.tokenize(t).every((d) => this._readCallback = this._readCallback(d)), h) throw h;
      return l;
    }
    let a = (l, h) => {
      l !== null ? (this._callback(l), this._callback = tr) : this._readCallback && (this._readCallback = this._readCallback(h));
    };
    o && (this._lexer.comments = !0, a = (l, h) => {
      l !== null ? (this._callback(l), this._callback = tr) : this._readCallback && (h.type === "comment" ? o(h.value) : this._readCallback = this._readCallback(h));
    }), this._callback = n, this._lexer.tokenize(t, a);
  }
}
function tr() {
}
function Ca(e, t) {
  e._factory = t, e.DEFAULTGRAPH = t.defaultGraph(), e.RDF_FIRST = t.namedNode(Qt.rdf.first), e.RDF_REST = t.namedNode(Qt.rdf.rest), e.RDF_NIL = t.namedNode(Qt.rdf.nil), e.N3_FORALL = t.namedNode(Qt.r.forAll), e.N3_FORSOME = t.namedNode(Qt.r.forSome), e.ABBREVIATIONS = {
    a: t.namedNode(Qt.rdf.type),
    "=": t.namedNode(Qt.owl.sameAs),
    ">": t.namedNode(Qt.log.implies),
    "<": t.namedNode(Qt.log.isImpliedBy)
  }, e.QUANTIFIERS_GRAPH = t.namedNode("urn:n3:quantifiers");
}
Ca(Ta.prototype, Me);
function bn(e) {
  return !!e && e.termType === "DefaultGraph";
}
function fr(e) {
  return e.replace(/[\]\/\(\)\*\+\?\.\\\$]/g, "\\$&");
}
const Xo = /^:?[^:?#]*(?:[?#]|$)|^file:|^[^:]*:\/*[^?#]+?\/(?:\.\.?(?:\/|$)|\/)/i, Ko = /^(?:(?:[^/?#]{3,}|\.?[^/?#.]\.?)(?:\/[^/?#]{3,}|\.?[^/?#.]\.?)*\/?)?(?:[?#]|$)/, Kn = "./", Jo = "../", Tr = "?", Jn = "#";
class Rn {
  constructor(t) {
    this.base = t, this._baseLength = 0, this._baseMatcher = null, this._pathReplacements = new Array(t.length + 1);
  }
  static supports(t) {
    return !Xo.test(t);
  }
  _getBaseMatcher() {
    if (this._baseMatcher)
      return this._baseMatcher;
    if (!Rn.supports(this.base))
      return this._baseMatcher = /.^/;
    const t = /^[^:]*:\/*/.exec(this.base)[0], i = ["^", fr(t)], r = [], n = [], s = /[^/?#]*([/?#])/y;
    let o, a = 0, l = 0, h = s.lastIndex = t.length;
    for (; !a && !l && (o = s.exec(this.base)); )
      o[1] === Jn ? l = s.lastIndex - 1 : (i.push(fr(o[0]), "(?:"), r.push(")?"), o[1] !== Tr ? n.push(h = s.lastIndex) : (a = h = s.lastIndex, l = this.base.indexOf(Jn, a), this._pathReplacements[a] = Tr));
    for (let d = 0; d < n.length; d++)
      this._pathReplacements[n[d]] = Jo.repeat(n.length - d - 1);
    return this._pathReplacements[n[n.length - 1]] = Kn, this._baseLength = l > 0 ? l : this.base.length, i.push(
      fr(this.base.substring(h, this._baseLength)),
      a ? "(?:#|$)" : "(?:[?#]|$)"
    ), this._baseMatcher = new RegExp([...i, ...r].join(""));
  }
  toRelative(t) {
    const i = this._getBaseMatcher().exec(t);
    if (!i)
      return t;
    const r = i[0].length;
    if (r === this._baseLength && r === t.length)
      return "";
    const n = this._pathReplacements[r];
    if (n) {
      const s = t.substring(r);
      return n !== Tr && !Ko.test(s) ? t : n === Kn && /^[^?#]/.test(s) ? s : n + s;
    }
    return t.substring(r - 1);
  }
}
const _i = Me.defaultGraph(), { rdf: Yo, xsd: Qe } = Qt, Yn = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/, Zn = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g, Zo = {
  "\\": "\\\\",
  '"': '\\"',
  "	": "\\t",
  "\n": "\\n",
  "\r": "\\r",
  "\b": "\\b",
  "\f": "\\f"
};
class gi extends ue {
  // Pretty-printed nodes are not equal to any other node
  // (e.g., [] does not equal [])
  equals(t) {
    return t === this;
  }
}
class Fa {
  constructor(t, i) {
    if (this._prefixRegex = /$0^/, t && typeof t.write != "function" && (i = t, t = null), i = i || {}, this._lists = i.lists, t)
      this._outputStream = t, this._endStream = i.end === void 0 ? !0 : !!i.end;
    else {
      let r = "";
      this._outputStream = {
        write(n, s, o) {
          r += n, o && o();
        },
        end: (n) => {
          n && n(null, r);
        }
      }, this._endStream = !0;
    }
    this._subject = null, /triple|quad/i.test(i.format) ? (this._lineMode = !0, this._writeQuad = this._writeQuadLine) : (this._lineMode = !1, this._graph = _i, this._prefixIRIs = /* @__PURE__ */ Object.create(null), i.prefixes && this.addPrefixes(i.prefixes), i.baseIRI && (this._baseIri = new Rn(i.baseIRI)));
  }
  // ## Private methods
  // ### Whether the current graph is the default graph
  get _inDefaultGraph() {
    return _i.equals(this._graph);
  }
  // ### `_write` writes the argument to the output stream
  _write(t, i) {
    this._outputStream.write(t, "utf8", i);
  }
  // ### `_writeQuad` writes the quad to the output stream
  _writeQuad(t, i, r, n, s) {
    try {
      n.equals(this._graph) || (this._write((this._subject === null ? "" : this._inDefaultGraph ? `.
` : `
}
`) + (_i.equals(n) ? "" : `${this._encodeIriOrBlank(n)} {
`)), this._graph = n, this._subject = null), t.equals(this._subject) ? i.equals(this._predicate) ? this._write(`, ${this._encodeObject(r)}`, s) : this._write(`;
    ${this._encodePredicate(this._predicate = i)} ${this._encodeObject(r)}`, s) : this._write(`${(this._subject === null ? "" : `.
`) + this._encodeSubject(this._subject = t)} ${this._encodePredicate(this._predicate = i)} ${this._encodeObject(r)}`, s);
    } catch (o) {
      s && s(o);
    }
  }
  // ### `_writeQuadLine` writes the quad to the output stream as a single line
  _writeQuadLine(t, i, r, n, s) {
    delete this._prefixMatch, this._write(this.quadToString(t, i, r, n), s);
  }
  // ### `quadToString` serializes a quad as a string
  quadToString(t, i, r, n) {
    return `${this._encodeSubject(t)} ${this._encodeIriOrBlank(i)} ${this._encodeObject(r)}${n && n.value ? ` ${this._encodeIriOrBlank(n)} .
` : ` .
`}`;
  }
  // ### `quadsToString` serializes an array of quads as a string
  quadsToString(t) {
    let i = "";
    for (const r of t)
      i += this.quadToString(r.subject, r.predicate, r.object, r.graph);
    return i;
  }
  // ### `_encodeSubject` represents a subject
  _encodeSubject(t) {
    return t.termType === "Quad" ? this._encodeQuad(t) : this._encodeIriOrBlank(t);
  }
  // ### `_encodeIriOrBlank` represents an IRI or blank node
  _encodeIriOrBlank(t) {
    if (t.termType !== "NamedNode")
      return this._lists && t.value in this._lists && (t = this.list(this._lists[t.value])), "id" in t ? t.id : `_:${t.value}`;
    let i = t.value;
    this._baseIri && (i = this._baseIri.toRelative(i)), Yn.test(i) && (i = i.replace(Zn, ts));
    const r = this._prefixRegex.exec(i);
    return r ? r[1] ? this._prefixIRIs[r[1]] + r[2] : i : `<${i}>`;
  }
  // ### `_encodeLiteral` represents a literal
  _encodeLiteral(t) {
    let i = t.value;
    if (Yn.test(i) && (i = i.replace(Zn, ts)), t.language)
      return `"${i}"@${t.language}`;
    if (this._lineMode) {
      if (t.datatype.value === Qe.string)
        return `"${i}"`;
    } else
      switch (t.datatype.value) {
        case Qe.string:
          return `"${i}"`;
        case Qe.boolean:
          if (i === "true" || i === "false")
            return i;
          break;
        case Qe.integer:
          if (/^[+-]?\d+$/.test(i))
            return i;
          break;
        case Qe.decimal:
          if (/^[+-]?\d*\.\d+$/.test(i))
            return i;
          break;
        case Qe.double:
          if (/^[+-]?(?:\d+\.\d*|\.?\d+)[eE][+-]?\d+$/.test(i))
            return i;
          break;
      }
    return `"${i}"^^${this._encodeIriOrBlank(t.datatype)}`;
  }
  // ### `_encodePredicate` represents a predicate
  _encodePredicate(t) {
    return t.value === Yo.type ? "a" : this._encodeIriOrBlank(t);
  }
  // ### `_encodeObject` represents an object
  _encodeObject(t) {
    switch (t.termType) {
      case "Quad":
        return this._encodeQuad(t);
      case "Literal":
        return this._encodeLiteral(t);
      default:
        return this._encodeIriOrBlank(t);
    }
  }
  // ### `_encodeQuad` encodes an RDF-star quad
  _encodeQuad({ subject: t, predicate: i, object: r, graph: n }) {
    return `<<${this._encodeSubject(t)} ${this._encodePredicate(i)} ${this._encodeObject(r)}${bn(n) ? "" : ` ${this._encodeIriOrBlank(n)}`}>>`;
  }
  // ### `_blockedWrite` replaces `_write` after the writer has been closed
  _blockedWrite() {
    throw new Error("Cannot write because the writer has been closed.");
  }
  // ### `addQuad` adds the quad to the output stream
  addQuad(t, i, r, n, s) {
    r === void 0 ? this._writeQuad(t.subject, t.predicate, t.object, t.graph, i) : typeof n == "function" ? this._writeQuad(t, i, r, _i, n) : this._writeQuad(t, i, r, n || _i, s);
  }
  // ### `addQuads` adds the quads to the output stream
  addQuads(t) {
    for (let i = 0; i < t.length; i++)
      this.addQuad(t[i]);
  }
  // ### `addPrefix` adds the prefix to the output stream
  addPrefix(t, i, r) {
    const n = {};
    n[t] = i, this.addPrefixes(n, r);
  }
  // ### `addPrefixes` adds the prefixes to the output stream
  addPrefixes(t, i) {
    if (!this._prefixIRIs)
      return i && i();
    let r = !1;
    for (let n in t) {
      let s = t[n];
      typeof s != "string" && (s = s.value), r = !0, this._subject !== null && (this._write(this._inDefaultGraph ? `.
` : `
}
`), this._subject = null, this._graph = ""), this._prefixIRIs[s] = n += ":", this._write(`@prefix ${n} <${s}>.
`);
    }
    if (r) {
      let n = "", s = "";
      for (const o in this._prefixIRIs)
        n += n ? `|${o}` : o, s += (s ? "|" : "") + this._prefixIRIs[o];
      n = fr(n), this._prefixRegex = new RegExp(`^(?:${s})[^/]*$|^(${n})([_a-zA-Z0-9][\\-_a-zA-Z0-9]*)$`);
    }
    this._write(r ? `
` : "", i);
  }
  // ### `blank` creates a blank node with the given content
  blank(t, i) {
    let r = t, n, s;
    switch (t === void 0 ? r = [] : t.termType ? r = [{ predicate: t, object: i }] : "length" in t || (r = [t]), s = r.length) {
      // Generate an empty blank node
      case 0:
        return new gi("[]");
      // Generate a non-nested one-triple blank node
      case 1:
        if (n = r[0], !(n.object instanceof gi))
          return new gi(`[ ${this._encodePredicate(n.predicate)} ${this._encodeObject(n.object)} ]`);
      // Generate a multi-triple or nested blank node
      default:
        let o = "[";
        for (let a = 0; a < s; a++)
          n = r[a], n.predicate.equals(t) ? o += `, ${this._encodeObject(n.object)}` : (o += `${(a ? `;
  ` : `
  `) + this._encodePredicate(n.predicate)} ${this._encodeObject(n.object)}`, t = n.predicate);
        return new gi(`${o}
]`);
    }
  }
  // ### `list` creates a list node with the given content
  list(t) {
    const i = t && t.length || 0, r = new Array(i);
    for (let n = 0; n < i; n++)
      r[n] = this._encodeObject(t[n]);
    return new gi(`(${r.join(" ")})`);
  }
  // ### `end` signals the end of the output stream
  end(t) {
    this._subject !== null && (this._write(this._inDefaultGraph ? `.
` : `
}
`), this._subject = null), this._write = this._blockedWrite;
    let i = t && ((r, n) => {
      i = null, t(r, n);
    });
    if (this._endStream)
      try {
        return this._outputStream.end(i);
      } catch {
      }
    i && i();
  }
}
function ts(e) {
  let t = Zo[e];
  return t === void 0 && (e.length === 1 ? (t = e.charCodeAt(0).toString(16), t = "\\u0000".substr(0, 6 - t.length) + t) : (t = ((e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) + 9216).toString(16), t = "\\U00000000".substr(0, 10 - t.length) + t)), t;
}
var Cr = { exports: {} }, Fr = { exports: {} }, Gr, es;
function Lt() {
  if (es) return Gr;
  es = 1;
  class e extends Error {
    constructor(i) {
      if (!Array.isArray(i))
        throw new TypeError(`Expected input to be an Array, got ${typeof i}`);
      let r = "";
      for (let n = 0; n < i.length; n++)
        r += `    ${i[n].stack}
`;
      super(r), this.name = "AggregateError", this.errors = i;
    }
  }
  return Gr = {
    AggregateError: e,
    ArrayIsArray(t) {
      return Array.isArray(t);
    },
    ArrayPrototypeIncludes(t, i) {
      return t.includes(i);
    },
    ArrayPrototypeIndexOf(t, i) {
      return t.indexOf(i);
    },
    ArrayPrototypeJoin(t, i) {
      return t.join(i);
    },
    ArrayPrototypeMap(t, i) {
      return t.map(i);
    },
    ArrayPrototypePop(t, i) {
      return t.pop(i);
    },
    ArrayPrototypePush(t, i) {
      return t.push(i);
    },
    ArrayPrototypeSlice(t, i, r) {
      return t.slice(i, r);
    },
    Error,
    FunctionPrototypeCall(t, i, ...r) {
      return t.call(i, ...r);
    },
    FunctionPrototypeSymbolHasInstance(t, i) {
      return Function.prototype[Symbol.hasInstance].call(t, i);
    },
    MathFloor: Math.floor,
    Number,
    NumberIsInteger: Number.isInteger,
    NumberIsNaN: Number.isNaN,
    NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
    NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
    NumberParseInt: Number.parseInt,
    ObjectDefineProperties(t, i) {
      return Object.defineProperties(t, i);
    },
    ObjectDefineProperty(t, i, r) {
      return Object.defineProperty(t, i, r);
    },
    ObjectGetOwnPropertyDescriptor(t, i) {
      return Object.getOwnPropertyDescriptor(t, i);
    },
    ObjectKeys(t) {
      return Object.keys(t);
    },
    ObjectSetPrototypeOf(t, i) {
      return Object.setPrototypeOf(t, i);
    },
    Promise,
    PromisePrototypeCatch(t, i) {
      return t.catch(i);
    },
    PromisePrototypeThen(t, i, r) {
      return t.then(i, r);
    },
    PromiseReject(t) {
      return Promise.reject(t);
    },
    PromiseResolve(t) {
      return Promise.resolve(t);
    },
    ReflectApply: Reflect.apply,
    RegExpPrototypeTest(t, i) {
      return t.test(i);
    },
    SafeSet: Set,
    String,
    StringPrototypeSlice(t, i, r) {
      return t.slice(i, r);
    },
    StringPrototypeToLowerCase(t) {
      return t.toLowerCase();
    },
    StringPrototypeToUpperCase(t) {
      return t.toUpperCase();
    },
    StringPrototypeTrim(t) {
      return t.trim();
    },
    Symbol,
    SymbolFor: Symbol.for,
    SymbolAsyncIterator: Symbol.asyncIterator,
    SymbolHasInstance: Symbol.hasInstance,
    SymbolIterator: Symbol.iterator,
    SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
    SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
    TypedArrayPrototypeSet(t, i, r) {
      return t.set(i, r);
    },
    Boolean,
    Uint8Array
  }, Gr;
}
var Dr = { exports: {} }, Or, is;
function Ga() {
  return is || (is = 1, Or = {
    format(e, ...t) {
      return e.replace(/%([sdifj])/g, function(...[i, r]) {
        const n = t.shift();
        return r === "f" ? n.toFixed(6) : r === "j" ? JSON.stringify(n) : r === "s" && typeof n == "object" ? `${n.constructor !== Object ? n.constructor.name : ""} {}`.trim() : n.toString();
      });
    },
    inspect(e) {
      switch (typeof e) {
        case "string":
          if (e.includes("'"))
            if (e.includes('"')) {
              if (!e.includes("`") && !e.includes("${"))
                return `\`${e}\``;
            } else return `"${e}"`;
          return `'${e}'`;
        case "number":
          return isNaN(e) ? "NaN" : Object.is(e, -0) ? String(e) : e;
        case "bigint":
          return `${String(e)}n`;
        case "boolean":
        case "undefined":
          return String(e);
        case "object":
          return "{}";
      }
    }
  }), Or;
}
var Lr, rs;
function Zt() {
  if (rs) return Lr;
  rs = 1;
  const { format: e, inspect: t } = Ga(), { AggregateError: i } = Lt(), r = globalThis.AggregateError || i, n = Symbol("kIsNodeError"), s = [
    "string",
    "function",
    "number",
    "object",
    // Accept 'Function' and 'Object' as alternative to the lower cased version.
    "Function",
    "Object",
    "boolean",
    "bigint",
    "symbol"
  ], o = /^([A-Z][a-z0-9]*)+$/, a = "__node_internal_", l = {};
  function h(b, g) {
    if (!b)
      throw new l.ERR_INTERNAL_ASSERTION(g);
  }
  function d(b) {
    let g = "", v = b.length;
    const E = b[0] === "-" ? 1 : 0;
    for (; v >= E + 4; v -= 3)
      g = `_${b.slice(v - 3, v)}${g}`;
    return `${b.slice(0, v)}${g}`;
  }
  function f(b, g, v) {
    if (typeof g == "function")
      return h(
        g.length <= v.length,
        // Default options do not count.
        `Code: ${b}; The provided arguments length (${v.length}) does not match the required ones (${g.length}).`
      ), g(...v);
    const E = (g.match(/%[dfijoOs]/g) || []).length;
    return h(
      E === v.length,
      `Code: ${b}; The provided arguments length (${v.length}) does not match the required ones (${E}).`
    ), v.length === 0 ? g : e(g, ...v);
  }
  function _(b, g, v) {
    v || (v = Error);
    class E extends v {
      constructor(...M) {
        super(f(b, g, M));
      }
      toString() {
        return `${this.name} [${b}]: ${this.message}`;
      }
    }
    Object.defineProperties(E.prototype, {
      name: {
        value: v.name,
        writable: !0,
        enumerable: !1,
        configurable: !0
      },
      toString: {
        value() {
          return `${this.name} [${b}]: ${this.message}`;
        },
        writable: !0,
        enumerable: !1,
        configurable: !0
      }
    }), E.prototype.code = b, E.prototype[n] = !0, l[b] = E;
  }
  function m(b) {
    const g = a + b.name;
    return Object.defineProperty(b, "name", {
      value: g
    }), b;
  }
  function y(b, g) {
    if (b && g && b !== g) {
      if (Array.isArray(g.errors))
        return g.errors.push(b), g;
      const v = new r([g, b], g.message);
      return v.code = g.code, v;
    }
    return b || g;
  }
  class w extends Error {
    constructor(g = "The operation was aborted", v = void 0) {
      if (v !== void 0 && typeof v != "object")
        throw new l.ERR_INVALID_ARG_TYPE("options", "Object", v);
      super(g, v), this.code = "ABORT_ERR", this.name = "AbortError";
    }
  }
  return _("ERR_ASSERTION", "%s", Error), _(
    "ERR_INVALID_ARG_TYPE",
    (b, g, v) => {
      h(typeof b == "string", "'name' must be a string"), Array.isArray(g) || (g = [g]);
      let E = "The ";
      b.endsWith(" argument") ? E += `${b} ` : E += `"${b}" ${b.includes(".") ? "property" : "argument"} `, E += "must be ";
      const N = [], M = [], j = [];
      for (const k of g)
        h(typeof k == "string", "All expected entries have to be of type string"), s.includes(k) ? N.push(k.toLowerCase()) : o.test(k) ? M.push(k) : (h(k !== "object", 'The value "object" should be written as "Object"'), j.push(k));
      if (M.length > 0) {
        const k = N.indexOf("object");
        k !== -1 && (N.splice(N, k, 1), M.push("Object"));
      }
      if (N.length > 0) {
        switch (N.length) {
          case 1:
            E += `of type ${N[0]}`;
            break;
          case 2:
            E += `one of type ${N[0]} or ${N[1]}`;
            break;
          default: {
            const k = N.pop();
            E += `one of type ${N.join(", ")}, or ${k}`;
          }
        }
        (M.length > 0 || j.length > 0) && (E += " or ");
      }
      if (M.length > 0) {
        switch (M.length) {
          case 1:
            E += `an instance of ${M[0]}`;
            break;
          case 2:
            E += `an instance of ${M[0]} or ${M[1]}`;
            break;
          default: {
            const k = M.pop();
            E += `an instance of ${M.join(", ")}, or ${k}`;
          }
        }
        j.length > 0 && (E += " or ");
      }
      switch (j.length) {
        case 0:
          break;
        case 1:
          j[0].toLowerCase() !== j[0] && (E += "an "), E += `${j[0]}`;
          break;
        case 2:
          E += `one of ${j[0]} or ${j[1]}`;
          break;
        default: {
          const k = j.pop();
          E += `one of ${j.join(", ")}, or ${k}`;
        }
      }
      if (v == null)
        E += `. Received ${v}`;
      else if (typeof v == "function" && v.name)
        E += `. Received function ${v.name}`;
      else if (typeof v == "object") {
        var U;
        if ((U = v.constructor) !== null && U !== void 0 && U.name)
          E += `. Received an instance of ${v.constructor.name}`;
        else {
          const k = t(v, {
            depth: -1
          });
          E += `. Received ${k}`;
        }
      } else {
        let k = t(v, {
          colors: !1
        });
        k.length > 25 && (k = `${k.slice(0, 25)}...`), E += `. Received type ${typeof v} (${k})`;
      }
      return E;
    },
    TypeError
  ), _(
    "ERR_INVALID_ARG_VALUE",
    (b, g, v = "is invalid") => {
      let E = t(g);
      return E.length > 128 && (E = E.slice(0, 128) + "..."), `The ${b.includes(".") ? "property" : "argument"} '${b}' ${v}. Received ${E}`;
    },
    TypeError
  ), _(
    "ERR_INVALID_RETURN_VALUE",
    (b, g, v) => {
      var E;
      const N = v != null && (E = v.constructor) !== null && E !== void 0 && E.name ? `instance of ${v.constructor.name}` : `type ${typeof v}`;
      return `Expected ${b} to be returned from the "${g}" function but got ${N}.`;
    },
    TypeError
  ), _(
    "ERR_MISSING_ARGS",
    (...b) => {
      h(b.length > 0, "At least one arg needs to be specified");
      let g;
      const v = b.length;
      switch (b = (Array.isArray(b) ? b : [b]).map((E) => `"${E}"`).join(" or "), v) {
        case 1:
          g += `The ${b[0]} argument`;
          break;
        case 2:
          g += `The ${b[0]} and ${b[1]} arguments`;
          break;
        default:
          {
            const E = b.pop();
            g += `The ${b.join(", ")}, and ${E} arguments`;
          }
          break;
      }
      return `${g} must be specified`;
    },
    TypeError
  ), _(
    "ERR_OUT_OF_RANGE",
    (b, g, v) => {
      h(g, 'Missing "range" argument');
      let E;
      if (Number.isInteger(v) && Math.abs(v) > 2 ** 32)
        E = d(String(v));
      else if (typeof v == "bigint") {
        E = String(v);
        const N = BigInt(2) ** BigInt(32);
        (v > N || v < -N) && (E = d(E)), E += "n";
      } else
        E = t(v);
      return `The value of "${b}" is out of range. It must be ${g}. Received ${E}`;
    },
    RangeError
  ), _("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error), _("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error), _("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error), _("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error), _("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error), _("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), _("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error), _("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error), _("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error), _("ERR_STREAM_WRITE_AFTER_END", "write after end", Error), _("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError), Lr = {
    AbortError: w,
    aggregateTwoErrors: m(y),
    hideStackFrames: m,
    codes: l
  }, Lr;
}
var pi = { exports: {} }, ns;
function Li() {
  if (ns) return pi.exports;
  ns = 1;
  const { AbortController: e, AbortSignal: t } = typeof self < "u" ? self : typeof window < "u" ? window : (
    /* otherwise */
    void 0
  );
  return pi.exports = e, pi.exports.AbortSignal = t, pi.exports.default = e, pi.exports;
}
var er = { exports: {} }, ss;
function Mr() {
  if (ss) return er.exports;
  ss = 1;
  var e = typeof Reflect == "object" ? Reflect : null, t = e && typeof e.apply == "function" ? e.apply : function(M, j, U) {
    return Function.prototype.apply.call(M, j, U);
  }, i;
  e && typeof e.ownKeys == "function" ? i = e.ownKeys : Object.getOwnPropertySymbols ? i = function(M) {
    return Object.getOwnPropertyNames(M).concat(Object.getOwnPropertySymbols(M));
  } : i = function(M) {
    return Object.getOwnPropertyNames(M);
  };
  function r(N) {
    console && console.warn && console.warn(N);
  }
  var n = Number.isNaN || function(M) {
    return M !== M;
  };
  function s() {
    s.init.call(this);
  }
  er.exports = s, er.exports.once = g, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
  var o = 10;
  function a(N) {
    if (typeof N != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof N);
  }
  Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return o;
    },
    set: function(N) {
      if (typeof N != "number" || N < 0 || n(N))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + N + ".");
      o = N;
    }
  }), s.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, s.prototype.setMaxListeners = function(M) {
    if (typeof M != "number" || M < 0 || n(M))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + M + ".");
    return this._maxListeners = M, this;
  };
  function l(N) {
    return N._maxListeners === void 0 ? s.defaultMaxListeners : N._maxListeners;
  }
  s.prototype.getMaxListeners = function() {
    return l(this);
  }, s.prototype.emit = function(M) {
    for (var j = [], U = 1; U < arguments.length; U++) j.push(arguments[U]);
    var k = M === "error", lt = this._events;
    if (lt !== void 0)
      k = k && lt.error === void 0;
    else if (!k)
      return !1;
    if (k) {
      var G;
      if (j.length > 0 && (G = j[0]), G instanceof Error)
        throw G;
      var L = new Error("Unhandled error." + (G ? " (" + G.message + ")" : ""));
      throw L.context = G, L;
    }
    var Y = lt[M];
    if (Y === void 0)
      return !1;
    if (typeof Y == "function")
      t(Y, this, j);
    else
      for (var D = Y.length, ht = y(Y, D), U = 0; U < D; ++U)
        t(ht[U], this, j);
    return !0;
  };
  function h(N, M, j, U) {
    var k, lt, G;
    if (a(j), lt = N._events, lt === void 0 ? (lt = N._events = /* @__PURE__ */ Object.create(null), N._eventsCount = 0) : (lt.newListener !== void 0 && (N.emit(
      "newListener",
      M,
      j.listener ? j.listener : j
    ), lt = N._events), G = lt[M]), G === void 0)
      G = lt[M] = j, ++N._eventsCount;
    else if (typeof G == "function" ? G = lt[M] = U ? [j, G] : [G, j] : U ? G.unshift(j) : G.push(j), k = l(N), k > 0 && G.length > k && !G.warned) {
      G.warned = !0;
      var L = new Error("Possible EventEmitter memory leak detected. " + G.length + " " + String(M) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      L.name = "MaxListenersExceededWarning", L.emitter = N, L.type = M, L.count = G.length, r(L);
    }
    return N;
  }
  s.prototype.addListener = function(M, j) {
    return h(this, M, j, !1);
  }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(M, j) {
    return h(this, M, j, !0);
  };
  function d() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function f(N, M, j) {
    var U = { fired: !1, wrapFn: void 0, target: N, type: M, listener: j }, k = d.bind(U);
    return k.listener = j, U.wrapFn = k, k;
  }
  s.prototype.once = function(M, j) {
    return a(j), this.on(M, f(this, M, j)), this;
  }, s.prototype.prependOnceListener = function(M, j) {
    return a(j), this.prependListener(M, f(this, M, j)), this;
  }, s.prototype.removeListener = function(M, j) {
    var U, k, lt, G, L;
    if (a(j), k = this._events, k === void 0)
      return this;
    if (U = k[M], U === void 0)
      return this;
    if (U === j || U.listener === j)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete k[M], k.removeListener && this.emit("removeListener", M, U.listener || j));
    else if (typeof U != "function") {
      for (lt = -1, G = U.length - 1; G >= 0; G--)
        if (U[G] === j || U[G].listener === j) {
          L = U[G].listener, lt = G;
          break;
        }
      if (lt < 0)
        return this;
      lt === 0 ? U.shift() : w(U, lt), U.length === 1 && (k[M] = U[0]), k.removeListener !== void 0 && this.emit("removeListener", M, L || j);
    }
    return this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(M) {
    var j, U, k;
    if (U = this._events, U === void 0)
      return this;
    if (U.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : U[M] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete U[M]), this;
    if (arguments.length === 0) {
      var lt = Object.keys(U), G;
      for (k = 0; k < lt.length; ++k)
        G = lt[k], G !== "removeListener" && this.removeAllListeners(G);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (j = U[M], typeof j == "function")
      this.removeListener(M, j);
    else if (j !== void 0)
      for (k = j.length - 1; k >= 0; k--)
        this.removeListener(M, j[k]);
    return this;
  };
  function _(N, M, j) {
    var U = N._events;
    if (U === void 0)
      return [];
    var k = U[M];
    return k === void 0 ? [] : typeof k == "function" ? j ? [k.listener || k] : [k] : j ? b(k) : y(k, k.length);
  }
  s.prototype.listeners = function(M) {
    return _(this, M, !0);
  }, s.prototype.rawListeners = function(M) {
    return _(this, M, !1);
  }, s.listenerCount = function(N, M) {
    return typeof N.listenerCount == "function" ? N.listenerCount(M) : m.call(N, M);
  }, s.prototype.listenerCount = m;
  function m(N) {
    var M = this._events;
    if (M !== void 0) {
      var j = M[N];
      if (typeof j == "function")
        return 1;
      if (j !== void 0)
        return j.length;
    }
    return 0;
  }
  s.prototype.eventNames = function() {
    return this._eventsCount > 0 ? i(this._events) : [];
  };
  function y(N, M) {
    for (var j = new Array(M), U = 0; U < M; ++U)
      j[U] = N[U];
    return j;
  }
  function w(N, M) {
    for (; M + 1 < N.length; M++)
      N[M] = N[M + 1];
    N.pop();
  }
  function b(N) {
    for (var M = new Array(N.length), j = 0; j < M.length; ++j)
      M[j] = N[j].listener || N[j];
    return M;
  }
  function g(N, M) {
    return new Promise(function(j, U) {
      function k(G) {
        N.removeListener(M, lt), U(G);
      }
      function lt() {
        typeof N.removeListener == "function" && N.removeListener("error", k), j([].slice.call(arguments));
      }
      E(N, M, lt, { once: !0 }), M !== "error" && v(N, k, { once: !0 });
    });
  }
  function v(N, M, j) {
    typeof N.on == "function" && E(N, "error", M, j);
  }
  function E(N, M, j, U) {
    if (typeof N.on == "function")
      U.once ? N.once(M, j) : N.on(M, j);
    else if (typeof N.addEventListener == "function")
      N.addEventListener(M, function k(lt) {
        U.once && N.removeEventListener(M, k), j(lt);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof N);
  }
  return er.exports;
}
var as;
function re() {
  return as || (as = 1, (function(e) {
    const t = be(), { format: i, inspect: r } = Ga(), {
      codes: { ERR_INVALID_ARG_TYPE: n }
    } = Zt(), { kResistStopPropagation: s, AggregateError: o, SymbolDispose: a } = Lt(), l = globalThis.AbortSignal || Li().AbortSignal, h = globalThis.AbortController || Li().AbortController, d = Object.getPrototypeOf(async function() {
    }).constructor, f = globalThis.Blob || t.Blob, _ = typeof f < "u" ? function(b) {
      return b instanceof f;
    } : function(b) {
      return !1;
    }, m = (w, b) => {
      if (w !== void 0 && (w === null || typeof w != "object" || !("aborted" in w)))
        throw new n(b, "AbortSignal", w);
    }, y = (w, b) => {
      if (typeof w != "function")
        throw new n(b, "Function", w);
    };
    e.exports = {
      AggregateError: o,
      kEmptyObject: Object.freeze({}),
      once(w) {
        let b = !1;
        return function(...g) {
          b || (b = !0, w.apply(this, g));
        };
      },
      createDeferredPromise: function() {
        let w, b;
        return {
          promise: new Promise((v, E) => {
            w = v, b = E;
          }),
          resolve: w,
          reject: b
        };
      },
      promisify(w) {
        return new Promise((b, g) => {
          w((v, ...E) => v ? g(v) : b(...E));
        });
      },
      debuglog() {
        return function() {
        };
      },
      format: i,
      inspect: r,
      types: {
        isAsyncFunction(w) {
          return w instanceof d;
        },
        isArrayBufferView(w) {
          return ArrayBuffer.isView(w);
        }
      },
      isBlob: _,
      deprecate(w, b) {
        return w;
      },
      addAbortListener: Mr().addAbortListener || function(b, g) {
        if (b === void 0)
          throw new n("signal", "AbortSignal", b);
        m(b, "signal"), y(g, "listener");
        let v;
        return b.aborted ? queueMicrotask(() => g()) : (b.addEventListener("abort", g, {
          __proto__: null,
          once: !0,
          [s]: !0
        }), v = () => {
          b.removeEventListener("abort", g);
        }), {
          __proto__: null,
          [a]() {
            var E;
            (E = v) === null || E === void 0 || E();
          }
        };
      },
      AbortSignalAny: l.any || function(b) {
        if (b.length === 1)
          return b[0];
        const g = new h(), v = () => g.abort();
        return b.forEach((E) => {
          m(E, "signals"), E.addEventListener("abort", v, {
            once: !0
          });
        }), g.signal.addEventListener(
          "abort",
          () => {
            b.forEach((E) => E.removeEventListener("abort", v));
          },
          {
            once: !0
          }
        ), g.signal;
      }
    }, e.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
  })(Dr)), Dr.exports;
}
var ir = {}, $r, os;
function qi() {
  if (os) return $r;
  os = 1;
  const {
    ArrayIsArray: e,
    ArrayPrototypeIncludes: t,
    ArrayPrototypeJoin: i,
    ArrayPrototypeMap: r,
    NumberIsInteger: n,
    NumberIsNaN: s,
    NumberMAX_SAFE_INTEGER: o,
    NumberMIN_SAFE_INTEGER: a,
    NumberParseInt: l,
    ObjectPrototypeHasOwnProperty: h,
    RegExpPrototypeExec: d,
    String: f,
    StringPrototypeToUpperCase: _,
    StringPrototypeTrim: m
  } = Lt(), {
    hideStackFrames: y,
    codes: { ERR_SOCKET_BAD_PORT: w, ERR_INVALID_ARG_TYPE: b, ERR_INVALID_ARG_VALUE: g, ERR_OUT_OF_RANGE: v, ERR_UNKNOWN_SIGNAL: E }
  } = Zt(), { normalizeEncoding: N } = re(), { isAsyncFunction: M, isArrayBufferView: j } = re().types, U = {};
  function k(T) {
    return T === (T | 0);
  }
  function lt(T) {
    return T === T >>> 0;
  }
  const G = /^[0-7]+$/, L = "must be a 32-bit unsigned integer or an octal string";
  function Y(T, J, et) {
    if (typeof T > "u" && (T = et), typeof T == "string") {
      if (d(G, T) === null)
        throw new g(J, T, L);
      T = l(T, 8);
    }
    return dt(T, J), T;
  }
  const D = y((T, J, et = a, z = o) => {
    if (typeof T != "number") throw new b(J, "number", T);
    if (!n(T)) throw new v(J, "an integer", T);
    if (T < et || T > z) throw new v(J, `>= ${et} && <= ${z}`, T);
  }), ht = y((T, J, et = -2147483648, z = 2147483647) => {
    if (typeof T != "number")
      throw new b(J, "number", T);
    if (!n(T))
      throw new v(J, "an integer", T);
    if (T < et || T > z)
      throw new v(J, `>= ${et} && <= ${z}`, T);
  }), dt = y((T, J, et = !1) => {
    if (typeof T != "number")
      throw new b(J, "number", T);
    if (!n(T))
      throw new v(J, "an integer", T);
    const z = et ? 1 : 0, Pt = 4294967295;
    if (T < z || T > Pt)
      throw new v(J, `>= ${z} && <= ${Pt}`, T);
  });
  function ft(T, J) {
    if (typeof T != "string") throw new b(J, "string", T);
  }
  function vt(T, J, et = void 0, z) {
    if (typeof T != "number") throw new b(J, "number", T);
    if (et != null && T < et || z != null && T > z || (et != null || z != null) && s(T))
      throw new v(
        J,
        `${et != null ? `>= ${et}` : ""}${et != null && z != null ? " && " : ""}${z != null ? `<= ${z}` : ""}`,
        T
      );
  }
  const V = y((T, J, et) => {
    if (!t(et, T)) {
      const Pt = "must be one of: " + i(
        r(et, (Ut) => typeof Ut == "string" ? `'${Ut}'` : f(Ut)),
        ", "
      );
      throw new g(J, T, Pt);
    }
  });
  function pt(T, J) {
    if (typeof T != "boolean") throw new b(J, "boolean", T);
  }
  function R(T, J, et) {
    return T == null || !h(T, J) ? et : T[J];
  }
  const W = y((T, J, et = null) => {
    const z = R(et, "allowArray", !1), Pt = R(et, "allowFunction", !1);
    if (!R(et, "nullable", !1) && T === null || !z && e(T) || typeof T != "object" && (!Pt || typeof T != "function"))
      throw new b(J, "Object", T);
  }), rt = y((T, J) => {
    if (T != null && typeof T != "object" && typeof T != "function")
      throw new b(J, "a dictionary", T);
  }), Q = y((T, J, et = 0) => {
    if (!e(T))
      throw new b(J, "Array", T);
    if (T.length < et) {
      const z = `must be longer than ${et}`;
      throw new g(J, T, z);
    }
  });
  function _t(T, J) {
    Q(T, J);
    for (let et = 0; et < T.length; et++)
      ft(T[et], `${J}[${et}]`);
  }
  function bt(T, J) {
    Q(T, J);
    for (let et = 0; et < T.length; et++)
      pt(T[et], `${J}[${et}]`);
  }
  function Mt(T, J) {
    Q(T, J);
    for (let et = 0; et < T.length; et++) {
      const z = T[et], Pt = `${J}[${et}]`;
      if (z == null)
        throw new b(Pt, "AbortSignal", z);
      wt(z, Pt);
    }
  }
  function Et(T, J = "signal") {
    if (ft(T, J), U[T] === void 0)
      throw U[_(T)] !== void 0 ? new E(T + " (signals must use all capital letters)") : new E(T);
  }
  const H = y((T, J = "buffer") => {
    if (!j(T))
      throw new b(J, ["Buffer", "TypedArray", "DataView"], T);
  });
  function X(T, J) {
    const et = N(J), z = T.length;
    if (et === "hex" && z % 2 !== 0)
      throw new g("encoding", J, `is invalid for data of length ${z}`);
  }
  function ct(T, J = "Port", et = !0) {
    if (typeof T != "number" && typeof T != "string" || typeof T == "string" && m(T).length === 0 || +T !== +T >>> 0 || T > 65535 || T === 0 && !et)
      throw new w(J, T, et);
    return T | 0;
  }
  const wt = y((T, J) => {
    if (T !== void 0 && (T === null || typeof T != "object" || !("aborted" in T)))
      throw new b(J, "AbortSignal", T);
  }), mt = y((T, J) => {
    if (typeof T != "function") throw new b(J, "Function", T);
  }), C = y((T, J) => {
    if (typeof T != "function" || M(T)) throw new b(J, "Function", T);
  }), F = y((T, J) => {
    if (T !== void 0) throw new b(J, "undefined", T);
  });
  function q(T, J, et) {
    if (!t(et, T))
      throw new b(J, `('${i(et, "|")}')`, T);
  }
  const tt = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
  function nt(T, J) {
    if (typeof T > "u" || !d(tt, T))
      throw new g(
        J,
        T,
        'must be an array or string of format "</styles.css>; rel=preload; as=style"'
      );
  }
  function it(T) {
    if (typeof T == "string")
      return nt(T, "hints"), T;
    if (e(T)) {
      const J = T.length;
      let et = "";
      if (J === 0)
        return et;
      for (let z = 0; z < J; z++) {
        const Pt = T[z];
        nt(Pt, "hints"), et += Pt, z !== J - 1 && (et += ", ");
      }
      return et;
    }
    throw new g(
      "hints",
      T,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
  }
  return $r = {
    isInt32: k,
    isUint32: lt,
    parseFileMode: Y,
    validateArray: Q,
    validateStringArray: _t,
    validateBooleanArray: bt,
    validateAbortSignalArray: Mt,
    validateBoolean: pt,
    validateBuffer: H,
    validateDictionary: rt,
    validateEncoding: X,
    validateFunction: mt,
    validateInt32: ht,
    validateInteger: D,
    validateNumber: vt,
    validateObject: W,
    validateOneOf: V,
    validatePlainFunction: C,
    validatePort: ct,
    validateSignalName: Et,
    validateString: ft,
    validateUint32: dt,
    validateUndefined: F,
    validateUnion: q,
    validateAbortSignal: wt,
    validateLinkHeaderValue: it
  }, $r;
}
var rr = { exports: {} }, jr = { exports: {} }, hs;
function ke() {
  if (hs) return jr.exports;
  hs = 1;
  var e = jr.exports = {}, t, i;
  function r() {
    throw new Error("setTimeout has not been defined");
  }
  function n() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? t = setTimeout : t = r;
    } catch {
      t = r;
    }
    try {
      typeof clearTimeout == "function" ? i = clearTimeout : i = n;
    } catch {
      i = n;
    }
  })();
  function s(w) {
    if (t === setTimeout)
      return setTimeout(w, 0);
    if ((t === r || !t) && setTimeout)
      return t = setTimeout, setTimeout(w, 0);
    try {
      return t(w, 0);
    } catch {
      try {
        return t.call(null, w, 0);
      } catch {
        return t.call(this, w, 0);
      }
    }
  }
  function o(w) {
    if (i === clearTimeout)
      return clearTimeout(w);
    if ((i === n || !i) && clearTimeout)
      return i = clearTimeout, clearTimeout(w);
    try {
      return i(w);
    } catch {
      try {
        return i.call(null, w);
      } catch {
        return i.call(this, w);
      }
    }
  }
  var a = [], l = !1, h, d = -1;
  function f() {
    !l || !h || (l = !1, h.length ? a = h.concat(a) : d = -1, a.length && _());
  }
  function _() {
    if (!l) {
      var w = s(f);
      l = !0;
      for (var b = a.length; b; ) {
        for (h = a, a = []; ++d < b; )
          h && h[d].run();
        d = -1, b = a.length;
      }
      h = null, l = !1, o(w);
    }
  }
  e.nextTick = function(w) {
    var b = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var g = 1; g < arguments.length; g++)
        b[g - 1] = arguments[g];
    a.push(new m(w, b)), a.length === 1 && !l && s(_);
  };
  function m(w, b) {
    this.fun = w, this.array = b;
  }
  m.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", e.versions = {};
  function y() {
  }
  return e.on = y, e.addListener = y, e.once = y, e.off = y, e.removeListener = y, e.removeAllListeners = y, e.emit = y, e.prependListener = y, e.prependOnceListener = y, e.listeners = function(w) {
    return [];
  }, e.binding = function(w) {
    throw new Error("process.binding is not supported");
  }, e.cwd = function() {
    return "/";
  }, e.chdir = function(w) {
    throw new Error("process.chdir is not supported");
  }, e.umask = function() {
    return 0;
  }, jr.exports;
}
var Br, ls;
function me() {
  if (ls) return Br;
  ls = 1;
  const { SymbolAsyncIterator: e, SymbolIterator: t, SymbolFor: i } = Lt(), r = i("nodejs.stream.destroyed"), n = i("nodejs.stream.errored"), s = i("nodejs.stream.readable"), o = i("nodejs.stream.writable"), a = i("nodejs.stream.disturbed"), l = i("nodejs.webstream.isClosedPromise"), h = i("nodejs.webstream.controllerErrorFunction");
  function d(R, W = !1) {
    var rt;
    return !!(R && typeof R.pipe == "function" && typeof R.on == "function" && (!W || typeof R.pause == "function" && typeof R.resume == "function") && (!R._writableState || ((rt = R._readableState) === null || rt === void 0 ? void 0 : rt.readable) !== !1) && // Duplex
    (!R._writableState || R._readableState));
  }
  function f(R) {
    var W;
    return !!(R && typeof R.write == "function" && typeof R.on == "function" && (!R._readableState || ((W = R._writableState) === null || W === void 0 ? void 0 : W.writable) !== !1));
  }
  function _(R) {
    return !!(R && typeof R.pipe == "function" && R._readableState && typeof R.on == "function" && typeof R.write == "function");
  }
  function m(R) {
    return R && (R._readableState || R._writableState || typeof R.write == "function" && typeof R.on == "function" || typeof R.pipe == "function" && typeof R.on == "function");
  }
  function y(R) {
    return !!(R && !m(R) && typeof R.pipeThrough == "function" && typeof R.getReader == "function" && typeof R.cancel == "function");
  }
  function w(R) {
    return !!(R && !m(R) && typeof R.getWriter == "function" && typeof R.abort == "function");
  }
  function b(R) {
    return !!(R && !m(R) && typeof R.readable == "object" && typeof R.writable == "object");
  }
  function g(R) {
    return y(R) || w(R) || b(R);
  }
  function v(R, W) {
    return R == null ? !1 : W === !0 ? typeof R[e] == "function" : W === !1 ? typeof R[t] == "function" : typeof R[e] == "function" || typeof R[t] == "function";
  }
  function E(R) {
    if (!m(R)) return null;
    const W = R._writableState, rt = R._readableState, Q = W || rt;
    return !!(R.destroyed || R[r] || Q != null && Q.destroyed);
  }
  function N(R) {
    if (!f(R)) return null;
    if (R.writableEnded === !0) return !0;
    const W = R._writableState;
    return W != null && W.errored ? !1 : typeof (W == null ? void 0 : W.ended) != "boolean" ? null : W.ended;
  }
  function M(R, W) {
    if (!f(R)) return null;
    if (R.writableFinished === !0) return !0;
    const rt = R._writableState;
    return rt != null && rt.errored ? !1 : typeof (rt == null ? void 0 : rt.finished) != "boolean" ? null : !!(rt.finished || W === !1 && rt.ended === !0 && rt.length === 0);
  }
  function j(R) {
    if (!d(R)) return null;
    if (R.readableEnded === !0) return !0;
    const W = R._readableState;
    return !W || W.errored ? !1 : typeof (W == null ? void 0 : W.ended) != "boolean" ? null : W.ended;
  }
  function U(R, W) {
    if (!d(R)) return null;
    const rt = R._readableState;
    return rt != null && rt.errored ? !1 : typeof (rt == null ? void 0 : rt.endEmitted) != "boolean" ? null : !!(rt.endEmitted || W === !1 && rt.ended === !0 && rt.length === 0);
  }
  function k(R) {
    return R && R[s] != null ? R[s] : typeof (R == null ? void 0 : R.readable) != "boolean" ? null : E(R) ? !1 : d(R) && R.readable && !U(R);
  }
  function lt(R) {
    return R && R[o] != null ? R[o] : typeof (R == null ? void 0 : R.writable) != "boolean" ? null : E(R) ? !1 : f(R) && R.writable && !N(R);
  }
  function G(R, W) {
    return m(R) ? E(R) ? !0 : !((W == null ? void 0 : W.readable) !== !1 && k(R) || (W == null ? void 0 : W.writable) !== !1 && lt(R)) : null;
  }
  function L(R) {
    var W, rt;
    return m(R) ? R.writableErrored ? R.writableErrored : (W = (rt = R._writableState) === null || rt === void 0 ? void 0 : rt.errored) !== null && W !== void 0 ? W : null : null;
  }
  function Y(R) {
    var W, rt;
    return m(R) ? R.readableErrored ? R.readableErrored : (W = (rt = R._readableState) === null || rt === void 0 ? void 0 : rt.errored) !== null && W !== void 0 ? W : null : null;
  }
  function D(R) {
    if (!m(R))
      return null;
    if (typeof R.closed == "boolean")
      return R.closed;
    const W = R._writableState, rt = R._readableState;
    return typeof (W == null ? void 0 : W.closed) == "boolean" || typeof (rt == null ? void 0 : rt.closed) == "boolean" ? (W == null ? void 0 : W.closed) || (rt == null ? void 0 : rt.closed) : typeof R._closed == "boolean" && ht(R) ? R._closed : null;
  }
  function ht(R) {
    return typeof R._closed == "boolean" && typeof R._defaultKeepAlive == "boolean" && typeof R._removedConnection == "boolean" && typeof R._removedContLen == "boolean";
  }
  function dt(R) {
    return typeof R._sent100 == "boolean" && ht(R);
  }
  function ft(R) {
    var W;
    return typeof R._consuming == "boolean" && typeof R._dumped == "boolean" && ((W = R.req) === null || W === void 0 ? void 0 : W.upgradeOrConnect) === void 0;
  }
  function vt(R) {
    if (!m(R)) return null;
    const W = R._writableState, rt = R._readableState, Q = W || rt;
    return !Q && dt(R) || !!(Q && Q.autoDestroy && Q.emitClose && Q.closed === !1);
  }
  function V(R) {
    var W;
    return !!(R && ((W = R[a]) !== null && W !== void 0 ? W : R.readableDidRead || R.readableAborted));
  }
  function pt(R) {
    var W, rt, Q, _t, bt, Mt, Et, H, X, ct;
    return !!(R && ((W = (rt = (Q = (_t = (bt = (Mt = R[n]) !== null && Mt !== void 0 ? Mt : R.readableErrored) !== null && bt !== void 0 ? bt : R.writableErrored) !== null && _t !== void 0 ? _t : (Et = R._readableState) === null || Et === void 0 ? void 0 : Et.errorEmitted) !== null && Q !== void 0 ? Q : (H = R._writableState) === null || H === void 0 ? void 0 : H.errorEmitted) !== null && rt !== void 0 ? rt : (X = R._readableState) === null || X === void 0 ? void 0 : X.errored) !== null && W !== void 0 ? W : !((ct = R._writableState) === null || ct === void 0) && ct.errored));
  }
  return Br = {
    isDestroyed: E,
    kIsDestroyed: r,
    isDisturbed: V,
    kIsDisturbed: a,
    isErrored: pt,
    kIsErrored: n,
    isReadable: k,
    kIsReadable: s,
    kIsClosedPromise: l,
    kControllerErrorFunction: h,
    kIsWritable: o,
    isClosed: D,
    isDuplexNodeStream: _,
    isFinished: G,
    isIterable: v,
    isReadableNodeStream: d,
    isReadableStream: y,
    isReadableEnded: j,
    isReadableFinished: U,
    isReadableErrored: Y,
    isNodeStream: m,
    isWebStream: g,
    isWritable: lt,
    isWritableNodeStream: f,
    isWritableStream: w,
    isWritableEnded: N,
    isWritableFinished: M,
    isWritableErrored: L,
    isServerRequest: ft,
    isServerResponse: dt,
    willEmitClose: vt,
    isTransformStream: b
  }, Br;
}
var us;
function Ne() {
  if (us) return rr.exports;
  us = 1;
  const e = ke(), { AbortError: t, codes: i } = Zt(), { ERR_INVALID_ARG_TYPE: r, ERR_STREAM_PREMATURE_CLOSE: n } = i, { kEmptyObject: s, once: o } = re(), { validateAbortSignal: a, validateFunction: l, validateObject: h, validateBoolean: d } = qi(), { Promise: f, PromisePrototypeThen: _, SymbolDispose: m } = Lt(), {
    isClosed: y,
    isReadable: w,
    isReadableNodeStream: b,
    isReadableStream: g,
    isReadableFinished: v,
    isReadableErrored: E,
    isWritable: N,
    isWritableNodeStream: M,
    isWritableStream: j,
    isWritableFinished: U,
    isWritableErrored: k,
    isNodeStream: lt,
    willEmitClose: G,
    kIsClosedPromise: L
  } = me();
  let Y;
  function D(V) {
    return V.setHeader && typeof V.abort == "function";
  }
  const ht = () => {
  };
  function dt(V, pt, R) {
    var W, rt;
    if (arguments.length === 2 ? (R = pt, pt = s) : pt == null ? pt = s : h(pt, "options"), l(R, "callback"), a(pt.signal, "options.signal"), R = o(R), g(V) || j(V))
      return ft(V, pt, R);
    if (!lt(V))
      throw new r("stream", ["ReadableStream", "WritableStream", "Stream"], V);
    const Q = (W = pt.readable) !== null && W !== void 0 ? W : b(V), _t = (rt = pt.writable) !== null && rt !== void 0 ? rt : M(V), bt = V._writableState, Mt = V._readableState, Et = () => {
      V.writable || ct();
    };
    let H = G(V) && b(V) === Q && M(V) === _t, X = U(V, !1);
    const ct = () => {
      X = !0, V.destroyed && (H = !1), !(H && (!V.readable || Q)) && (!Q || wt) && R.call(V);
    };
    let wt = v(V, !1);
    const mt = () => {
      wt = !0, V.destroyed && (H = !1), !(H && (!V.writable || _t)) && (!_t || X) && R.call(V);
    }, C = (T) => {
      R.call(V, T);
    };
    let F = y(V);
    const q = () => {
      F = !0;
      const T = k(V) || E(V);
      if (T && typeof T != "boolean")
        return R.call(V, T);
      if (Q && !wt && b(V, !0) && !v(V, !1))
        return R.call(V, new n());
      if (_t && !X && !U(V, !1))
        return R.call(V, new n());
      R.call(V);
    }, tt = () => {
      F = !0;
      const T = k(V) || E(V);
      if (T && typeof T != "boolean")
        return R.call(V, T);
      R.call(V);
    }, nt = () => {
      V.req.on("finish", ct);
    };
    D(V) ? (V.on("complete", ct), H || V.on("abort", q), V.req ? nt() : V.on("request", nt)) : _t && !bt && (V.on("end", Et), V.on("close", Et)), !H && typeof V.aborted == "boolean" && V.on("aborted", q), V.on("end", mt), V.on("finish", ct), pt.error !== !1 && V.on("error", C), V.on("close", q), F ? e.nextTick(q) : bt != null && bt.errorEmitted || Mt != null && Mt.errorEmitted ? H || e.nextTick(tt) : (!Q && (!H || w(V)) && (X || N(V) === !1) || !_t && (!H || N(V)) && (wt || w(V) === !1) || Mt && V.req && V.aborted) && e.nextTick(tt);
    const it = () => {
      R = ht, V.removeListener("aborted", q), V.removeListener("complete", ct), V.removeListener("abort", q), V.removeListener("request", nt), V.req && V.req.removeListener("finish", ct), V.removeListener("end", Et), V.removeListener("close", Et), V.removeListener("finish", ct), V.removeListener("end", mt), V.removeListener("error", C), V.removeListener("close", q);
    };
    if (pt.signal && !F) {
      const T = () => {
        const J = R;
        it(), J.call(
          V,
          new t(void 0, {
            cause: pt.signal.reason
          })
        );
      };
      if (pt.signal.aborted)
        e.nextTick(T);
      else {
        Y = Y || re().addAbortListener;
        const J = Y(pt.signal, T), et = R;
        R = o((...z) => {
          J[m](), et.apply(V, z);
        });
      }
    }
    return it;
  }
  function ft(V, pt, R) {
    let W = !1, rt = ht;
    if (pt.signal)
      if (rt = () => {
        W = !0, R.call(
          V,
          new t(void 0, {
            cause: pt.signal.reason
          })
        );
      }, pt.signal.aborted)
        e.nextTick(rt);
      else {
        Y = Y || re().addAbortListener;
        const _t = Y(pt.signal, rt), bt = R;
        R = o((...Mt) => {
          _t[m](), bt.apply(V, Mt);
        });
      }
    const Q = (..._t) => {
      W || e.nextTick(() => R.apply(V, _t));
    };
    return _(V[L].promise, Q, Q), ht;
  }
  function vt(V, pt) {
    var R;
    let W = !1;
    return pt === null && (pt = s), (R = pt) !== null && R !== void 0 && R.cleanup && (d(pt.cleanup, "cleanup"), W = pt.cleanup), new f((rt, Q) => {
      const _t = dt(V, pt, (bt) => {
        W && _t(), bt ? Q(bt) : rt();
      });
    });
  }
  return rr.exports = dt, rr.exports.finished = vt, rr.exports;
}
var kr, fs;
function ni() {
  if (fs) return kr;
  fs = 1;
  const e = ke(), {
    aggregateTwoErrors: t,
    codes: { ERR_MULTIPLE_CALLBACK: i },
    AbortError: r
  } = Zt(), { Symbol: n } = Lt(), { kIsDestroyed: s, isDestroyed: o, isFinished: a, isServerRequest: l } = me(), h = n("kDestroy"), d = n("kConstruct");
  function f(G, L, Y) {
    G && (G.stack, L && !L.errored && (L.errored = G), Y && !Y.errored && (Y.errored = G));
  }
  function _(G, L) {
    const Y = this._readableState, D = this._writableState, ht = D || Y;
    return D != null && D.destroyed || Y != null && Y.destroyed ? (typeof L == "function" && L(), this) : (f(G, D, Y), D && (D.destroyed = !0), Y && (Y.destroyed = !0), ht.constructed ? m(this, G, L) : this.once(h, function(dt) {
      m(this, t(dt, G), L);
    }), this);
  }
  function m(G, L, Y) {
    let D = !1;
    function ht(dt) {
      if (D)
        return;
      D = !0;
      const ft = G._readableState, vt = G._writableState;
      f(dt, vt, ft), vt && (vt.closed = !0), ft && (ft.closed = !0), typeof Y == "function" && Y(dt), dt ? e.nextTick(y, G, dt) : e.nextTick(w, G);
    }
    try {
      G._destroy(L || null, ht);
    } catch (dt) {
      ht(dt);
    }
  }
  function y(G, L) {
    b(G, L), w(G);
  }
  function w(G) {
    const L = G._readableState, Y = G._writableState;
    Y && (Y.closeEmitted = !0), L && (L.closeEmitted = !0), (Y != null && Y.emitClose || L != null && L.emitClose) && G.emit("close");
  }
  function b(G, L) {
    const Y = G._readableState, D = G._writableState;
    D != null && D.errorEmitted || Y != null && Y.errorEmitted || (D && (D.errorEmitted = !0), Y && (Y.errorEmitted = !0), G.emit("error", L));
  }
  function g() {
    const G = this._readableState, L = this._writableState;
    G && (G.constructed = !0, G.closed = !1, G.closeEmitted = !1, G.destroyed = !1, G.errored = null, G.errorEmitted = !1, G.reading = !1, G.ended = G.readable === !1, G.endEmitted = G.readable === !1), L && (L.constructed = !0, L.destroyed = !1, L.closed = !1, L.closeEmitted = !1, L.errored = null, L.errorEmitted = !1, L.finalCalled = !1, L.prefinished = !1, L.ended = L.writable === !1, L.ending = L.writable === !1, L.finished = L.writable === !1);
  }
  function v(G, L, Y) {
    const D = G._readableState, ht = G._writableState;
    if (ht != null && ht.destroyed || D != null && D.destroyed)
      return this;
    D != null && D.autoDestroy || ht != null && ht.autoDestroy ? G.destroy(L) : L && (L.stack, ht && !ht.errored && (ht.errored = L), D && !D.errored && (D.errored = L), Y ? e.nextTick(b, G, L) : b(G, L));
  }
  function E(G, L) {
    if (typeof G._construct != "function")
      return;
    const Y = G._readableState, D = G._writableState;
    Y && (Y.constructed = !1), D && (D.constructed = !1), G.once(d, L), !(G.listenerCount(d) > 1) && e.nextTick(N, G);
  }
  function N(G) {
    let L = !1;
    function Y(D) {
      if (L) {
        v(G, D ?? new i());
        return;
      }
      L = !0;
      const ht = G._readableState, dt = G._writableState, ft = dt || ht;
      ht && (ht.constructed = !0), dt && (dt.constructed = !0), ft.destroyed ? G.emit(h, D) : D ? v(G, D, !0) : e.nextTick(M, G);
    }
    try {
      G._construct((D) => {
        e.nextTick(Y, D);
      });
    } catch (D) {
      e.nextTick(Y, D);
    }
  }
  function M(G) {
    G.emit(d);
  }
  function j(G) {
    return (G == null ? void 0 : G.setHeader) && typeof G.abort == "function";
  }
  function U(G) {
    G.emit("close");
  }
  function k(G, L) {
    G.emit("error", L), e.nextTick(U, G);
  }
  function lt(G, L) {
    !G || o(G) || (!L && !a(G) && (L = new r()), l(G) ? (G.socket = null, G.destroy(L)) : j(G) ? G.abort() : j(G.req) ? G.req.abort() : typeof G.destroy == "function" ? G.destroy(L) : typeof G.close == "function" ? G.close() : L ? e.nextTick(k, G, L) : e.nextTick(U, G), G.destroyed || (G[s] = !0));
  }
  return kr = {
    construct: E,
    destroyer: lt,
    destroy: _,
    undestroy: g,
    errorOrDestroy: v
  }, kr;
}
var qr, cs;
function In() {
  if (cs) return qr;
  cs = 1;
  const { ArrayIsArray: e, ObjectSetPrototypeOf: t } = Lt(), { EventEmitter: i } = Mr();
  function r(s) {
    i.call(this, s);
  }
  t(r.prototype, i.prototype), t(r, i), r.prototype.pipe = function(s, o) {
    const a = this;
    function l(w) {
      s.writable && s.write(w) === !1 && a.pause && a.pause();
    }
    a.on("data", l);
    function h() {
      a.readable && a.resume && a.resume();
    }
    s.on("drain", h), !s._isStdio && (!o || o.end !== !1) && (a.on("end", f), a.on("close", _));
    let d = !1;
    function f() {
      d || (d = !0, s.end());
    }
    function _() {
      d || (d = !0, typeof s.destroy == "function" && s.destroy());
    }
    function m(w) {
      y(), i.listenerCount(this, "error") === 0 && this.emit("error", w);
    }
    n(a, "error", m), n(s, "error", m);
    function y() {
      a.removeListener("data", l), s.removeListener("drain", h), a.removeListener("end", f), a.removeListener("close", _), a.removeListener("error", m), s.removeListener("error", m), a.removeListener("end", y), a.removeListener("close", y), s.removeListener("close", y);
    }
    return a.on("end", y), a.on("close", y), s.on("close", y), s.emit("pipe", a), s;
  };
  function n(s, o, a) {
    if (typeof s.prependListener == "function") return s.prependListener(o, a);
    !s._events || !s._events[o] ? s.on(o, a) : e(s._events[o]) ? s._events[o].unshift(a) : s._events[o] = [a, s._events[o]];
  }
  return qr = {
    Stream: r,
    prependListener: n
  }, qr;
}
var Ur = { exports: {} }, ds;
function Pr() {
  return ds || (ds = 1, (function(e) {
    const { SymbolDispose: t } = Lt(), { AbortError: i, codes: r } = Zt(), { isNodeStream: n, isWebStream: s, kControllerErrorFunction: o } = me(), a = Ne(), { ERR_INVALID_ARG_TYPE: l } = r;
    let h;
    const d = (f, _) => {
      if (typeof f != "object" || !("aborted" in f))
        throw new l(_, "AbortSignal", f);
    };
    e.exports.addAbortSignal = function(_, m) {
      if (d(_, "signal"), !n(m) && !s(m))
        throw new l("stream", ["ReadableStream", "WritableStream", "Stream"], m);
      return e.exports.addAbortSignalNoValidate(_, m);
    }, e.exports.addAbortSignalNoValidate = function(f, _) {
      if (typeof f != "object" || !("aborted" in f))
        return _;
      const m = n(_) ? () => {
        _.destroy(
          new i(void 0, {
            cause: f.reason
          })
        );
      } : () => {
        _[o](
          new i(void 0, {
            cause: f.reason
          })
        );
      };
      if (f.aborted)
        m();
      else {
        h = h || re().addAbortListener;
        const y = h(f, m);
        a(_, y[t]);
      }
      return _;
    };
  })(Ur)), Ur.exports;
}
var Wr, _s;
function th() {
  if (_s) return Wr;
  _s = 1;
  const { StringPrototypeSlice: e, SymbolIterator: t, TypedArrayPrototypeSet: i, Uint8Array: r } = Lt(), { Buffer: n } = be(), { inspect: s } = re();
  return Wr = class {
    constructor() {
      this.head = null, this.tail = null, this.length = 0;
    }
    push(a) {
      const l = {
        data: a,
        next: null
      };
      this.length > 0 ? this.tail.next = l : this.head = l, this.tail = l, ++this.length;
    }
    unshift(a) {
      const l = {
        data: a,
        next: this.head
      };
      this.length === 0 && (this.tail = l), this.head = l, ++this.length;
    }
    shift() {
      if (this.length === 0) return;
      const a = this.head.data;
      return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, a;
    }
    clear() {
      this.head = this.tail = null, this.length = 0;
    }
    join(a) {
      if (this.length === 0) return "";
      let l = this.head, h = "" + l.data;
      for (; (l = l.next) !== null; ) h += a + l.data;
      return h;
    }
    concat(a) {
      if (this.length === 0) return n.alloc(0);
      const l = n.allocUnsafe(a >>> 0);
      let h = this.head, d = 0;
      for (; h; )
        i(l, h.data, d), d += h.data.length, h = h.next;
      return l;
    }
    // Consumes a specified amount of bytes or characters from the buffered data.
    consume(a, l) {
      const h = this.head.data;
      if (a < h.length) {
        const d = h.slice(0, a);
        return this.head.data = h.slice(a), d;
      }
      return a === h.length ? this.shift() : l ? this._getString(a) : this._getBuffer(a);
    }
    first() {
      return this.head.data;
    }
    *[t]() {
      for (let a = this.head; a; a = a.next)
        yield a.data;
    }
    // Consumes a specified amount of characters from the buffered data.
    _getString(a) {
      let l = "", h = this.head, d = 0;
      do {
        const f = h.data;
        if (a > f.length)
          l += f, a -= f.length;
        else {
          a === f.length ? (l += f, ++d, h.next ? this.head = h.next : this.head = this.tail = null) : (l += e(f, 0, a), this.head = h, h.data = e(f, a));
          break;
        }
        ++d;
      } while ((h = h.next) !== null);
      return this.length -= d, l;
    }
    // Consumes a specified amount of bytes from the buffered data.
    _getBuffer(a) {
      const l = n.allocUnsafe(a), h = a;
      let d = this.head, f = 0;
      do {
        const _ = d.data;
        if (a > _.length)
          i(l, _, h - a), a -= _.length;
        else {
          a === _.length ? (i(l, _, h - a), ++f, d.next ? this.head = d.next : this.head = this.tail = null) : (i(l, new r(_.buffer, _.byteOffset, a), h - a), this.head = d, d.data = _.slice(a));
          break;
        }
        ++f;
      } while ((d = d.next) !== null);
      return this.length -= f, l;
    }
    // Make sure the linked list only shows the minimal necessary information.
    [Symbol.for("nodejs.util.inspect.custom")](a, l) {
      return s(this, {
        ...l,
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: !1
      });
    }
  }, Wr;
}
var Hr, gs;
function Ar() {
  if (gs) return Hr;
  gs = 1;
  const { MathFloor: e, NumberIsInteger: t } = Lt(), { validateInteger: i } = qi(), { ERR_INVALID_ARG_VALUE: r } = Zt().codes;
  let n = 16 * 1024, s = 16;
  function o(d, f, _) {
    return d.highWaterMark != null ? d.highWaterMark : f ? d[_] : null;
  }
  function a(d) {
    return d ? s : n;
  }
  function l(d, f) {
    i(f, "value", 0), d ? s = f : n = f;
  }
  function h(d, f, _, m) {
    const y = o(f, m, _);
    if (y != null) {
      if (!t(y) || y < 0) {
        const w = m ? `options.${_}` : "options.highWaterMark";
        throw new r(w, y);
      }
      return e(y);
    }
    return a(d.objectMode);
  }
  return Hr = {
    getHighWaterMark: h,
    getDefaultHighWaterMark: a,
    setDefaultHighWaterMark: l
  }, Hr;
}
var zr = {}, nr = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var ps;
function eh() {
  return ps || (ps = 1, (function(e, t) {
    var i = be(), r = i.Buffer;
    function n(o, a) {
      for (var l in o)
        a[l] = o[l];
    }
    r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? e.exports = i : (n(i, t), t.Buffer = s);
    function s(o, a, l) {
      return r(o, a, l);
    }
    s.prototype = Object.create(r.prototype), n(r, s), s.from = function(o, a, l) {
      if (typeof o == "number")
        throw new TypeError("Argument must not be a number");
      return r(o, a, l);
    }, s.alloc = function(o, a, l) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      var h = r(o);
      return a !== void 0 ? typeof l == "string" ? h.fill(a, l) : h.fill(a) : h.fill(0), h;
    }, s.allocUnsafe = function(o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return r(o);
    }, s.allocUnsafeSlow = function(o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return i.SlowBuffer(o);
    };
  })(nr, nr.exports)), nr.exports;
}
var ys;
function ih() {
  if (ys) return zr;
  ys = 1;
  var e = eh().Buffer, t = e.isEncoding || function(g) {
    switch (g = "" + g, g && g.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function i(g) {
    if (!g) return "utf8";
    for (var v; ; )
      switch (g) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return g;
        default:
          if (v) return;
          g = ("" + g).toLowerCase(), v = !0;
      }
  }
  function r(g) {
    var v = i(g);
    if (typeof v != "string" && (e.isEncoding === t || !t(g))) throw new Error("Unknown encoding: " + g);
    return v || g;
  }
  zr.StringDecoder = n;
  function n(g) {
    this.encoding = r(g);
    var v;
    switch (this.encoding) {
      case "utf16le":
        this.text = f, this.end = _, v = 4;
        break;
      case "utf8":
        this.fillLast = l, v = 4;
        break;
      case "base64":
        this.text = m, this.end = y, v = 3;
        break;
      default:
        this.write = w, this.end = b;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(v);
  }
  n.prototype.write = function(g) {
    if (g.length === 0) return "";
    var v, E;
    if (this.lastNeed) {
      if (v = this.fillLast(g), v === void 0) return "";
      E = this.lastNeed, this.lastNeed = 0;
    } else
      E = 0;
    return E < g.length ? v ? v + this.text(g, E) : this.text(g, E) : v || "";
  }, n.prototype.end = d, n.prototype.text = h, n.prototype.fillLast = function(g) {
    if (this.lastNeed <= g.length)
      return g.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    g.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, g.length), this.lastNeed -= g.length;
  };
  function s(g) {
    return g <= 127 ? 0 : g >> 5 === 6 ? 2 : g >> 4 === 14 ? 3 : g >> 3 === 30 ? 4 : g >> 6 === 2 ? -1 : -2;
  }
  function o(g, v, E) {
    var N = v.length - 1;
    if (N < E) return 0;
    var M = s(v[N]);
    return M >= 0 ? (M > 0 && (g.lastNeed = M - 1), M) : --N < E || M === -2 ? 0 : (M = s(v[N]), M >= 0 ? (M > 0 && (g.lastNeed = M - 2), M) : --N < E || M === -2 ? 0 : (M = s(v[N]), M >= 0 ? (M > 0 && (M === 2 ? M = 0 : g.lastNeed = M - 3), M) : 0));
  }
  function a(g, v, E) {
    if ((v[0] & 192) !== 128)
      return g.lastNeed = 0, "�";
    if (g.lastNeed > 1 && v.length > 1) {
      if ((v[1] & 192) !== 128)
        return g.lastNeed = 1, "�";
      if (g.lastNeed > 2 && v.length > 2 && (v[2] & 192) !== 128)
        return g.lastNeed = 2, "�";
    }
  }
  function l(g) {
    var v = this.lastTotal - this.lastNeed, E = a(this, g);
    if (E !== void 0) return E;
    if (this.lastNeed <= g.length)
      return g.copy(this.lastChar, v, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    g.copy(this.lastChar, v, 0, g.length), this.lastNeed -= g.length;
  }
  function h(g, v) {
    var E = o(this, g, v);
    if (!this.lastNeed) return g.toString("utf8", v);
    this.lastTotal = E;
    var N = g.length - (E - this.lastNeed);
    return g.copy(this.lastChar, 0, N), g.toString("utf8", v, N);
  }
  function d(g) {
    var v = g && g.length ? this.write(g) : "";
    return this.lastNeed ? v + "�" : v;
  }
  function f(g, v) {
    if ((g.length - v) % 2 === 0) {
      var E = g.toString("utf16le", v);
      if (E) {
        var N = E.charCodeAt(E.length - 1);
        if (N >= 55296 && N <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = g[g.length - 2], this.lastChar[1] = g[g.length - 1], E.slice(0, -1);
      }
      return E;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = g[g.length - 1], g.toString("utf16le", v, g.length - 1);
  }
  function _(g) {
    var v = g && g.length ? this.write(g) : "";
    if (this.lastNeed) {
      var E = this.lastTotal - this.lastNeed;
      return v + this.lastChar.toString("utf16le", 0, E);
    }
    return v;
  }
  function m(g, v) {
    var E = (g.length - v) % 3;
    return E === 0 ? g.toString("base64", v) : (this.lastNeed = 3 - E, this.lastTotal = 3, E === 1 ? this.lastChar[0] = g[g.length - 1] : (this.lastChar[0] = g[g.length - 2], this.lastChar[1] = g[g.length - 1]), g.toString("base64", v, g.length - E));
  }
  function y(g) {
    var v = g && g.length ? this.write(g) : "";
    return this.lastNeed ? v + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : v;
  }
  function w(g) {
    return g.toString(this.encoding);
  }
  function b(g) {
    return g && g.length ? this.write(g) : "";
  }
  return zr;
}
var Qr, bs;
function Da() {
  if (bs) return Qr;
  bs = 1;
  const e = ke(), { PromisePrototypeThen: t, SymbolAsyncIterator: i, SymbolIterator: r } = Lt(), { Buffer: n } = be(), { ERR_INVALID_ARG_TYPE: s, ERR_STREAM_NULL_VALUES: o } = Zt().codes;
  function a(l, h, d) {
    let f;
    if (typeof h == "string" || h instanceof n)
      return new l({
        objectMode: !0,
        ...d,
        read() {
          this.push(h), this.push(null);
        }
      });
    let _;
    if (h && h[i])
      _ = !0, f = h[i]();
    else if (h && h[r])
      _ = !1, f = h[r]();
    else
      throw new s("iterable", ["Iterable"], h);
    const m = new l({
      objectMode: !0,
      highWaterMark: 1,
      // TODO(ronag): What options should be allowed?
      ...d
    });
    let y = !1;
    m._read = function() {
      y || (y = !0, b());
    }, m._destroy = function(g, v) {
      t(
        w(g),
        () => e.nextTick(v, g),
        // nextTick is here in case cb throws
        (E) => e.nextTick(v, E || g)
      );
    };
    async function w(g) {
      const v = g != null, E = typeof f.throw == "function";
      if (v && E) {
        const { value: N, done: M } = await f.throw(g);
        if (await N, M)
          return;
      }
      if (typeof f.return == "function") {
        const { value: N } = await f.return();
        await N;
      }
    }
    async function b() {
      for (; ; ) {
        try {
          const { value: g, done: v } = _ ? await f.next() : f.next();
          if (v)
            m.push(null);
          else {
            const E = g && typeof g.then == "function" ? await g : g;
            if (E === null)
              throw y = !1, new o();
            if (m.push(E))
              continue;
            y = !1;
          }
        } catch (g) {
          m.destroy(g);
        }
        break;
      }
    }
    return m;
  }
  return Qr = a, Qr;
}
var Vr, ms;
function Nr() {
  if (ms) return Vr;
  ms = 1;
  const e = ke(), {
    ArrayPrototypeIndexOf: t,
    NumberIsInteger: i,
    NumberIsNaN: r,
    NumberParseInt: n,
    ObjectDefineProperties: s,
    ObjectKeys: o,
    ObjectSetPrototypeOf: a,
    Promise: l,
    SafeSet: h,
    SymbolAsyncDispose: d,
    SymbolAsyncIterator: f,
    Symbol: _
  } = Lt();
  Vr = z, z.ReadableState = et;
  const { EventEmitter: m } = Mr(), { Stream: y, prependListener: w } = In(), { Buffer: b } = be(), { addAbortSignal: g } = Pr(), v = Ne();
  let E = re().debuglog("stream", (x) => {
    E = x;
  });
  const N = th(), M = ni(), { getHighWaterMark: j, getDefaultHighWaterMark: U } = Ar(), {
    aggregateTwoErrors: k,
    codes: {
      ERR_INVALID_ARG_TYPE: lt,
      ERR_METHOD_NOT_IMPLEMENTED: G,
      ERR_OUT_OF_RANGE: L,
      ERR_STREAM_PUSH_AFTER_EOF: Y,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: D
    },
    AbortError: ht
  } = Zt(), { validateObject: dt } = qi(), ft = _("kPaused"), { StringDecoder: vt } = ih(), V = Da();
  a(z.prototype, y.prototype), a(z, y);
  const pt = () => {
  }, { errorOrDestroy: R } = M, W = 1, rt = 2, Q = 4, _t = 8, bt = 16, Mt = 32, Et = 64, H = 128, X = 256, ct = 512, wt = 1024, mt = 2048, C = 4096, F = 8192, q = 16384, tt = 32768, nt = 65536, it = 1 << 17, T = 1 << 18;
  function J(x) {
    return {
      enumerable: !1,
      get() {
        return (this.state & x) !== 0;
      },
      set(A) {
        A ? this.state |= x : this.state &= ~x;
      }
    };
  }
  s(et.prototype, {
    objectMode: J(W),
    ended: J(rt),
    endEmitted: J(Q),
    reading: J(_t),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: J(bt),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: J(Mt),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: J(Et),
    emittedReadable: J(H),
    readableListening: J(X),
    resumeScheduled: J(ct),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: J(wt),
    emitClose: J(mt),
    autoDestroy: J(C),
    // Has it been destroyed.
    destroyed: J(F),
    // Indicates whether the stream has finished destroying.
    closed: J(q),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: J(tt),
    multiAwaitDrain: J(nt),
    // If true, a maybeReadMore has been scheduled.
    readingMore: J(it),
    dataEmitted: J(T)
  });
  function et(x, A, st) {
    typeof st != "boolean" && (st = A instanceof ye()), this.state = mt | C | bt | Mt, x && x.objectMode && (this.state |= W), st && x && x.readableObjectMode && (this.state |= W), this.highWaterMark = x ? j(this, x, "readableHighWaterMark", st) : U(!1), this.buffer = new N(), this.length = 0, this.pipes = [], this.flowing = null, this[ft] = null, x && x.emitClose === !1 && (this.state &= ~mt), x && x.autoDestroy === !1 && (this.state &= ~C), this.errored = null, this.defaultEncoding = x && x.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, x && x.encoding && (this.decoder = new vt(x.encoding), this.encoding = x.encoding);
  }
  function z(x) {
    if (!(this instanceof z)) return new z(x);
    const A = this instanceof ye();
    this._readableState = new et(x, this, A), x && (typeof x.read == "function" && (this._read = x.read), typeof x.destroy == "function" && (this._destroy = x.destroy), typeof x.construct == "function" && (this._construct = x.construct), x.signal && !A && g(x.signal, this)), y.call(this, x), M.construct(this, () => {
      this._readableState.needReadable && I(this, this._readableState);
    });
  }
  z.prototype.destroy = M.destroy, z.prototype._undestroy = M.undestroy, z.prototype._destroy = function(x, A) {
    A(x);
  }, z.prototype[m.captureRejectionSymbol] = function(x) {
    this.destroy(x);
  }, z.prototype[d] = function() {
    let x;
    return this.destroyed || (x = this.readableEnded ? null : new ht(), this.destroy(x)), new l((A, st) => v(this, (at) => at && at !== x ? st(at) : A(null)));
  }, z.prototype.push = function(x, A) {
    return Pt(this, x, A, !1);
  }, z.prototype.unshift = function(x, A) {
    return Pt(this, x, A, !0);
  };
  function Pt(x, A, st, at) {
    E("readableAddChunk", A);
    const yt = x._readableState;
    let Wt;
    if ((yt.state & W) === 0 && (typeof A == "string" ? (st = st || yt.defaultEncoding, yt.encoding !== st && (at && yt.encoding ? A = b.from(A, st).toString(yt.encoding) : (A = b.from(A, st), st = ""))) : A instanceof b ? st = "" : y._isUint8Array(A) ? (A = y._uint8ArrayToBuffer(A), st = "") : A != null && (Wt = new lt("chunk", ["string", "Buffer", "Uint8Array"], A))), Wt)
      R(x, Wt);
    else if (A === null)
      yt.state &= ~_t, u(x, yt);
    else if ((yt.state & W) !== 0 || A && A.length > 0)
      if (at)
        if ((yt.state & Q) !== 0) R(x, new D());
        else {
          if (yt.destroyed || yt.errored) return !1;
          Ut(x, yt, A, !0);
        }
      else if (yt.ended)
        R(x, new Y());
      else {
        if (yt.destroyed || yt.errored)
          return !1;
        yt.state &= ~_t, yt.decoder && !st ? (A = yt.decoder.write(A), yt.objectMode || A.length !== 0 ? Ut(x, yt, A, !1) : I(x, yt)) : Ut(x, yt, A, !1);
      }
    else at || (yt.state &= ~_t, I(x, yt));
    return !yt.ended && (yt.length < yt.highWaterMark || yt.length === 0);
  }
  function Ut(x, A, st, at) {
    A.flowing && A.length === 0 && !A.sync && x.listenerCount("data") > 0 ? ((A.state & nt) !== 0 ? A.awaitDrainWriters.clear() : A.awaitDrainWriters = null, A.dataEmitted = !0, x.emit("data", st)) : (A.length += A.objectMode ? 1 : st.length, at ? A.buffer.unshift(st) : A.buffer.push(st), (A.state & Et) !== 0 && c(x)), I(x, A);
  }
  z.prototype.isPaused = function() {
    const x = this._readableState;
    return x[ft] === !0 || x.flowing === !1;
  }, z.prototype.setEncoding = function(x) {
    const A = new vt(x);
    this._readableState.decoder = A, this._readableState.encoding = this._readableState.decoder.encoding;
    const st = this._readableState.buffer;
    let at = "";
    for (const yt of st)
      at += A.write(yt);
    return st.clear(), at !== "" && st.push(at), this._readableState.length = at.length, this;
  };
  const St = 1073741824;
  function Ht(x) {
    if (x > St)
      throw new L("size", "<= 1GiB", x);
    return x--, x |= x >>> 1, x |= x >>> 2, x |= x >>> 4, x |= x >>> 8, x |= x >>> 16, x++, x;
  }
  function p(x, A) {
    return x <= 0 || A.length === 0 && A.ended ? 0 : (A.state & W) !== 0 ? 1 : r(x) ? A.flowing && A.length ? A.buffer.first().length : A.length : x <= A.length ? x : A.ended ? A.length : 0;
  }
  z.prototype.read = function(x) {
    E("read", x), x === void 0 ? x = NaN : i(x) || (x = n(x, 10));
    const A = this._readableState, st = x;
    if (x > A.highWaterMark && (A.highWaterMark = Ht(x)), x !== 0 && (A.state &= ~H), x === 0 && A.needReadable && ((A.highWaterMark !== 0 ? A.length >= A.highWaterMark : A.length > 0) || A.ended))
      return E("read: emitReadable", A.length, A.ended), A.length === 0 && A.ended ? Bt(this) : c(this), null;
    if (x = p(x, A), x === 0 && A.ended)
      return A.length === 0 && Bt(this), null;
    let at = (A.state & Et) !== 0;
    if (E("need readable", at), (A.length === 0 || A.length - x < A.highWaterMark) && (at = !0, E("length less than watermark", at)), A.ended || A.reading || A.destroyed || A.errored || !A.constructed)
      at = !1, E("reading, ended or constructing", at);
    else if (at) {
      E("do read"), A.state |= _t | Mt, A.length === 0 && (A.state |= Et);
      try {
        this._read(A.highWaterMark);
      } catch (Wt) {
        R(this, Wt);
      }
      A.state &= ~Mt, A.reading || (x = p(st, A));
    }
    let yt;
    return x > 0 ? yt = $t(x, A) : yt = null, yt === null ? (A.needReadable = A.length <= A.highWaterMark, x = 0) : (A.length -= x, A.multiAwaitDrain ? A.awaitDrainWriters.clear() : A.awaitDrainWriters = null), A.length === 0 && (A.ended || (A.needReadable = !0), st !== x && A.ended && Bt(this)), yt !== null && !A.errorEmitted && !A.closeEmitted && (A.dataEmitted = !0, this.emit("data", yt)), yt;
  };
  function u(x, A) {
    if (E("onEofChunk"), !A.ended) {
      if (A.decoder) {
        const st = A.decoder.end();
        st && st.length && (A.buffer.push(st), A.length += A.objectMode ? 1 : st.length);
      }
      A.ended = !0, A.sync ? c(x) : (A.needReadable = !1, A.emittedReadable = !0, S(x));
    }
  }
  function c(x) {
    const A = x._readableState;
    E("emitReadable", A.needReadable, A.emittedReadable), A.needReadable = !1, A.emittedReadable || (E("emitReadable", A.flowing), A.emittedReadable = !0, e.nextTick(S, x));
  }
  function S(x) {
    const A = x._readableState;
    E("emitReadable_", A.destroyed, A.length, A.ended), !A.destroyed && !A.errored && (A.length || A.ended) && (x.emit("readable"), A.emittedReadable = !1), A.needReadable = !A.flowing && !A.ended && A.length <= A.highWaterMark, Nt(x);
  }
  function I(x, A) {
    !A.readingMore && A.constructed && (A.readingMore = !0, e.nextTick(B, x, A));
  }
  function B(x, A) {
    for (; !A.reading && !A.ended && (A.length < A.highWaterMark || A.flowing && A.length === 0); ) {
      const st = A.length;
      if (E("maybeReadMore read 0"), x.read(0), st === A.length)
        break;
    }
    A.readingMore = !1;
  }
  z.prototype._read = function(x) {
    throw new G("_read()");
  }, z.prototype.pipe = function(x, A) {
    const st = this, at = this._readableState;
    at.pipes.length === 1 && (at.multiAwaitDrain || (at.multiAwaitDrain = !0, at.awaitDrainWriters = new h(at.awaitDrainWriters ? [at.awaitDrainWriters] : []))), at.pipes.push(x), E("pipe count=%d opts=%j", at.pipes.length, A);
    const Wt = (!A || A.end !== !1) && x !== e.stdout && x !== e.stderr ? Xi : P;
    at.endEmitted ? e.nextTick(Wt) : st.once("end", Wt), x.on("unpipe", Vt);
    function Vt(O, $) {
      E("onunpipe"), O === st && $ && $.hasUnpiped === !1 && ($.hasUnpiped = !0, ge());
    }
    function Xi() {
      E("onend"), x.end();
    }
    let _e, Ki = !1;
    function ge() {
      E("cleanup"), x.removeListener("close", li), x.removeListener("finish", qt), _e && x.removeListener("drain", _e), x.removeListener("error", We), x.removeListener("unpipe", Vt), st.removeListener("end", Xi), st.removeListener("end", P), st.removeListener("data", Ue), Ki = !0, _e && at.awaitDrainWriters && (!x._writableState || x._writableState.needDrain) && _e();
    }
    function hi() {
      Ki || (at.pipes.length === 1 && at.pipes[0] === x ? (E("false write response, pause", 0), at.awaitDrainWriters = x, at.multiAwaitDrain = !1) : at.pipes.length > 1 && at.pipes.includes(x) && (E("false write response, pause", at.awaitDrainWriters.size), at.awaitDrainWriters.add(x)), st.pause()), _e || (_e = K(st, x), x.on("drain", _e));
    }
    st.on("data", Ue);
    function Ue(O) {
      E("ondata");
      const $ = x.write(O);
      E("dest.write", $), $ === !1 && hi();
    }
    function We(O) {
      if (E("onerror", O), P(), x.removeListener("error", We), x.listenerCount("error") === 0) {
        const $ = x._writableState || x._readableState;
        $ && !$.errorEmitted ? R(x, O) : x.emit("error", O);
      }
    }
    w(x, "error", We);
    function li() {
      x.removeListener("finish", qt), P();
    }
    x.once("close", li);
    function qt() {
      E("onfinish"), x.removeListener("close", li), P();
    }
    x.once("finish", qt);
    function P() {
      E("unpipe"), st.unpipe(x);
    }
    return x.emit("pipe", st), x.writableNeedDrain === !0 ? hi() : at.flowing || (E("pipe resume"), st.resume()), x;
  };
  function K(x, A) {
    return function() {
      const at = x._readableState;
      at.awaitDrainWriters === A ? (E("pipeOnDrain", 1), at.awaitDrainWriters = null) : at.multiAwaitDrain && (E("pipeOnDrain", at.awaitDrainWriters.size), at.awaitDrainWriters.delete(A)), (!at.awaitDrainWriters || at.awaitDrainWriters.size === 0) && x.listenerCount("data") && x.resume();
    };
  }
  z.prototype.unpipe = function(x) {
    const A = this._readableState, st = {
      hasUnpiped: !1
    };
    if (A.pipes.length === 0) return this;
    if (!x) {
      const yt = A.pipes;
      A.pipes = [], this.pause();
      for (let Wt = 0; Wt < yt.length; Wt++)
        yt[Wt].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const at = t(A.pipes, x);
    return at === -1 ? this : (A.pipes.splice(at, 1), A.pipes.length === 0 && this.pause(), x.emit("unpipe", this, st), this);
  }, z.prototype.on = function(x, A) {
    const st = y.prototype.on.call(this, x, A), at = this._readableState;
    return x === "data" ? (at.readableListening = this.listenerCount("readable") > 0, at.flowing !== !1 && this.resume()) : x === "readable" && !at.endEmitted && !at.readableListening && (at.readableListening = at.needReadable = !0, at.flowing = !1, at.emittedReadable = !1, E("on readable", at.length, at.reading), at.length ? c(this) : at.reading || e.nextTick(Gt, this)), st;
  }, z.prototype.addListener = z.prototype.on, z.prototype.removeListener = function(x, A) {
    const st = y.prototype.removeListener.call(this, x, A);
    return x === "readable" && e.nextTick(xt, this), st;
  }, z.prototype.off = z.prototype.removeListener, z.prototype.removeAllListeners = function(x) {
    const A = y.prototype.removeAllListeners.apply(this, arguments);
    return (x === "readable" || x === void 0) && e.nextTick(xt, this), A;
  };
  function xt(x) {
    const A = x._readableState;
    A.readableListening = x.listenerCount("readable") > 0, A.resumeScheduled && A[ft] === !1 ? A.flowing = !0 : x.listenerCount("data") > 0 ? x.resume() : A.readableListening || (A.flowing = null);
  }
  function Gt(x) {
    E("readable nexttick read 0"), x.read(0);
  }
  z.prototype.resume = function() {
    const x = this._readableState;
    return x.flowing || (E("resume"), x.flowing = !x.readableListening, Rt(this, x)), x[ft] = !1, this;
  };
  function Rt(x, A) {
    A.resumeScheduled || (A.resumeScheduled = !0, e.nextTick(Ct, x, A));
  }
  function Ct(x, A) {
    E("resume", A.reading), A.reading || x.read(0), A.resumeScheduled = !1, x.emit("resume"), Nt(x), A.flowing && !A.reading && x.read(0);
  }
  z.prototype.pause = function() {
    return E("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (E("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[ft] = !0, this;
  };
  function Nt(x) {
    const A = x._readableState;
    for (E("flow", A.flowing); A.flowing && x.read() !== null; ) ;
  }
  z.prototype.wrap = function(x) {
    let A = !1;
    x.on("data", (at) => {
      !this.push(at) && x.pause && (A = !0, x.pause());
    }), x.on("end", () => {
      this.push(null);
    }), x.on("error", (at) => {
      R(this, at);
    }), x.on("close", () => {
      this.destroy();
    }), x.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      A && x.resume && (A = !1, x.resume());
    };
    const st = o(x);
    for (let at = 1; at < st.length; at++) {
      const yt = st[at];
      this[yt] === void 0 && typeof x[yt] == "function" && (this[yt] = x[yt].bind(x));
    }
    return this;
  }, z.prototype[f] = function() {
    return he(this);
  }, z.prototype.iterator = function(x) {
    return x !== void 0 && dt(x, "options"), he(this, x);
  };
  function he(x, A) {
    typeof x.read != "function" && (x = z.wrap(x, {
      objectMode: !0
    }));
    const st = Ee(x, A);
    return st.stream = x, st;
  }
  async function* Ee(x, A) {
    let st = pt;
    function at(Vt) {
      this === x ? (st(), st = pt) : st = Vt;
    }
    x.on("readable", at);
    let yt;
    const Wt = v(
      x,
      {
        writable: !1
      },
      (Vt) => {
        yt = Vt ? k(yt, Vt) : null, st(), st = pt;
      }
    );
    try {
      for (; ; ) {
        const Vt = x.destroyed ? null : x.read();
        if (Vt !== null)
          yield Vt;
        else {
          if (yt)
            throw yt;
          if (yt === null)
            return;
          await new l(at);
        }
      }
    } catch (Vt) {
      throw yt = k(yt, Vt), yt;
    } finally {
      (yt || (A == null ? void 0 : A.destroyOnReturn) !== !1) && (yt === void 0 || x._readableState.autoDestroy) ? M.destroyer(x, null) : (x.off("readable", at), Wt());
    }
  }
  s(z.prototype, {
    readable: {
      __proto__: null,
      get() {
        const x = this._readableState;
        return !!x && x.readable !== !1 && !x.destroyed && !x.errorEmitted && !x.endEmitted;
      },
      set(x) {
        this._readableState && (this._readableState.readable = !!x);
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(x) {
        this._readableState && (this._readableState.flowing = x);
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.objectMode : !1;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.destroyed : !1;
      },
      set(x) {
        this._readableState && (this._readableState.destroyed = x);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), s(et.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return this.pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return this[ft] !== !1;
      },
      set(x) {
        this[ft] = !!x;
      }
    }
  }), z._fromList = $t;
  function $t(x, A) {
    if (A.length === 0) return null;
    let st;
    return A.objectMode ? st = A.buffer.shift() : !x || x >= A.length ? (A.decoder ? st = A.buffer.join("") : A.buffer.length === 1 ? st = A.buffer.first() : st = A.buffer.concat(A.length), A.buffer.clear()) : st = A.buffer.consume(x, A.decoder), st;
  }
  function Bt(x) {
    const A = x._readableState;
    E("endReadable", A.endEmitted), A.endEmitted || (A.ended = !0, e.nextTick(Vi, A, x));
  }
  function Vi(x, A) {
    if (E("endReadableNT", x.endEmitted, x.length), !x.errored && !x.closeEmitted && !x.endEmitted && x.length === 0) {
      if (x.endEmitted = !0, A.emit("end"), A.writable && A.allowHalfOpen === !1)
        e.nextTick(ve, A);
      else if (x.autoDestroy) {
        const st = A._writableState;
        (!st || st.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (st.finished || st.writable === !1)) && A.destroy();
      }
    }
  }
  function ve(x) {
    x.writable && !x.writableEnded && !x.destroyed && x.end();
  }
  z.from = function(x, A) {
    return V(z, x, A);
  };
  let qe;
  function oi() {
    return qe === void 0 && (qe = {}), qe;
  }
  return z.fromWeb = function(x, A) {
    return oi().newStreamReadableFromReadableStream(x, A);
  }, z.toWeb = function(x, A) {
    return oi().newReadableStreamFromStreamReadable(x, A);
  }, z.wrap = function(x, A) {
    var st, at;
    return new z({
      objectMode: (st = (at = x.readableObjectMode) !== null && at !== void 0 ? at : x.objectMode) !== null && st !== void 0 ? st : !0,
      ...A,
      destroy(yt, Wt) {
        M.destroyer(x, yt), Wt(yt);
      }
    }).wrap(x);
  }, Vr;
}
var Xr, ws;
function Tn() {
  if (ws) return Xr;
  ws = 1;
  const e = ke(), {
    ArrayPrototypeSlice: t,
    Error: i,
    FunctionPrototypeSymbolHasInstance: r,
    ObjectDefineProperty: n,
    ObjectDefineProperties: s,
    ObjectSetPrototypeOf: o,
    StringPrototypeToLowerCase: a,
    Symbol: l,
    SymbolHasInstance: h
  } = Lt();
  Xr = dt, dt.WritableState = D;
  const { EventEmitter: d } = Mr(), f = In().Stream, { Buffer: _ } = be(), m = ni(), { addAbortSignal: y } = Pr(), { getHighWaterMark: w, getDefaultHighWaterMark: b } = Ar(), {
    ERR_INVALID_ARG_TYPE: g,
    ERR_METHOD_NOT_IMPLEMENTED: v,
    ERR_MULTIPLE_CALLBACK: E,
    ERR_STREAM_CANNOT_PIPE: N,
    ERR_STREAM_DESTROYED: M,
    ERR_STREAM_ALREADY_FINISHED: j,
    ERR_STREAM_NULL_VALUES: U,
    ERR_STREAM_WRITE_AFTER_END: k,
    ERR_UNKNOWN_ENCODING: lt
  } = Zt().codes, { errorOrDestroy: G } = m;
  o(dt.prototype, f.prototype), o(dt, f);
  function L() {
  }
  const Y = l("kOnFinished");
  function D(C, F, q) {
    typeof q != "boolean" && (q = F instanceof ye()), this.objectMode = !!(C && C.objectMode), q && (this.objectMode = this.objectMode || !!(C && C.writableObjectMode)), this.highWaterMark = C ? w(this, C, "writableHighWaterMark", q) : b(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const tt = !!(C && C.decodeStrings === !1);
    this.decodeStrings = !tt, this.defaultEncoding = C && C.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = R.bind(void 0, F), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, ht(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !C || C.emitClose !== !1, this.autoDestroy = !C || C.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[Y] = [];
  }
  function ht(C) {
    C.buffered = [], C.bufferedIndex = 0, C.allBuffers = !0, C.allNoop = !0;
  }
  D.prototype.getBuffer = function() {
    return t(this.buffered, this.bufferedIndex);
  }, n(D.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function dt(C) {
    const F = this instanceof ye();
    if (!F && !r(dt, this)) return new dt(C);
    this._writableState = new D(C, this, F), C && (typeof C.write == "function" && (this._write = C.write), typeof C.writev == "function" && (this._writev = C.writev), typeof C.destroy == "function" && (this._destroy = C.destroy), typeof C.final == "function" && (this._final = C.final), typeof C.construct == "function" && (this._construct = C.construct), C.signal && y(C.signal, this)), f.call(this, C), m.construct(this, () => {
      const q = this._writableState;
      q.writing || _t(this, q), H(this, q);
    });
  }
  n(dt, h, {
    __proto__: null,
    value: function(C) {
      return r(this, C) ? !0 : this !== dt ? !1 : C && C._writableState instanceof D;
    }
  }), dt.prototype.pipe = function() {
    G(this, new N());
  };
  function ft(C, F, q, tt) {
    const nt = C._writableState;
    if (typeof q == "function")
      tt = q, q = nt.defaultEncoding;
    else {
      if (!q) q = nt.defaultEncoding;
      else if (q !== "buffer" && !_.isEncoding(q)) throw new lt(q);
      typeof tt != "function" && (tt = L);
    }
    if (F === null)
      throw new U();
    if (!nt.objectMode)
      if (typeof F == "string")
        nt.decodeStrings !== !1 && (F = _.from(F, q), q = "buffer");
      else if (F instanceof _)
        q = "buffer";
      else if (f._isUint8Array(F))
        F = f._uint8ArrayToBuffer(F), q = "buffer";
      else
        throw new g("chunk", ["string", "Buffer", "Uint8Array"], F);
    let it;
    return nt.ending ? it = new k() : nt.destroyed && (it = new M("write")), it ? (e.nextTick(tt, it), G(C, it, !0), it) : (nt.pendingcb++, vt(C, nt, F, q, tt));
  }
  dt.prototype.write = function(C, F, q) {
    return ft(this, C, F, q) === !0;
  }, dt.prototype.cork = function() {
    this._writableState.corked++;
  }, dt.prototype.uncork = function() {
    const C = this._writableState;
    C.corked && (C.corked--, C.writing || _t(this, C));
  }, dt.prototype.setDefaultEncoding = function(F) {
    if (typeof F == "string" && (F = a(F)), !_.isEncoding(F)) throw new lt(F);
    return this._writableState.defaultEncoding = F, this;
  };
  function vt(C, F, q, tt, nt) {
    const it = F.objectMode ? 1 : q.length;
    F.length += it;
    const T = F.length < F.highWaterMark;
    return T || (F.needDrain = !0), F.writing || F.corked || F.errored || !F.constructed ? (F.buffered.push({
      chunk: q,
      encoding: tt,
      callback: nt
    }), F.allBuffers && tt !== "buffer" && (F.allBuffers = !1), F.allNoop && nt !== L && (F.allNoop = !1)) : (F.writelen = it, F.writecb = nt, F.writing = !0, F.sync = !0, C._write(q, tt, F.onwrite), F.sync = !1), T && !F.errored && !F.destroyed;
  }
  function V(C, F, q, tt, nt, it, T) {
    F.writelen = tt, F.writecb = T, F.writing = !0, F.sync = !0, F.destroyed ? F.onwrite(new M("write")) : q ? C._writev(nt, F.onwrite) : C._write(nt, it, F.onwrite), F.sync = !1;
  }
  function pt(C, F, q, tt) {
    --F.pendingcb, tt(q), Q(F), G(C, q);
  }
  function R(C, F) {
    const q = C._writableState, tt = q.sync, nt = q.writecb;
    if (typeof nt != "function") {
      G(C, new E());
      return;
    }
    q.writing = !1, q.writecb = null, q.length -= q.writelen, q.writelen = 0, F ? (F.stack, q.errored || (q.errored = F), C._readableState && !C._readableState.errored && (C._readableState.errored = F), tt ? e.nextTick(pt, C, q, F, nt) : pt(C, q, F, nt)) : (q.buffered.length > q.bufferedIndex && _t(C, q), tt ? q.afterWriteTickInfo !== null && q.afterWriteTickInfo.cb === nt ? q.afterWriteTickInfo.count++ : (q.afterWriteTickInfo = {
      count: 1,
      cb: nt,
      stream: C,
      state: q
    }, e.nextTick(W, q.afterWriteTickInfo)) : rt(C, q, 1, nt));
  }
  function W({ stream: C, state: F, count: q, cb: tt }) {
    return F.afterWriteTickInfo = null, rt(C, F, q, tt);
  }
  function rt(C, F, q, tt) {
    for (!F.ending && !C.destroyed && F.length === 0 && F.needDrain && (F.needDrain = !1, C.emit("drain")); q-- > 0; )
      F.pendingcb--, tt();
    F.destroyed && Q(F), H(C, F);
  }
  function Q(C) {
    if (C.writing)
      return;
    for (let nt = C.bufferedIndex; nt < C.buffered.length; ++nt) {
      var F;
      const { chunk: it, callback: T } = C.buffered[nt], J = C.objectMode ? 1 : it.length;
      C.length -= J, T(
        (F = C.errored) !== null && F !== void 0 ? F : new M("write")
      );
    }
    const q = C[Y].splice(0);
    for (let nt = 0; nt < q.length; nt++) {
      var tt;
      q[nt](
        (tt = C.errored) !== null && tt !== void 0 ? tt : new M("end")
      );
    }
    ht(C);
  }
  function _t(C, F) {
    if (F.corked || F.bufferProcessing || F.destroyed || !F.constructed)
      return;
    const { buffered: q, bufferedIndex: tt, objectMode: nt } = F, it = q.length - tt;
    if (!it)
      return;
    let T = tt;
    if (F.bufferProcessing = !0, it > 1 && C._writev) {
      F.pendingcb -= it - 1;
      const J = F.allNoop ? L : (z) => {
        for (let Pt = T; Pt < q.length; ++Pt)
          q[Pt].callback(z);
      }, et = F.allNoop && T === 0 ? q : t(q, T);
      et.allBuffers = F.allBuffers, V(C, F, !0, F.length, et, "", J), ht(F);
    } else {
      do {
        const { chunk: J, encoding: et, callback: z } = q[T];
        q[T++] = null;
        const Pt = nt ? 1 : J.length;
        V(C, F, !1, Pt, J, et, z);
      } while (T < q.length && !F.writing);
      T === q.length ? ht(F) : T > 256 ? (q.splice(0, T), F.bufferedIndex = 0) : F.bufferedIndex = T;
    }
    F.bufferProcessing = !1;
  }
  dt.prototype._write = function(C, F, q) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: C,
            encoding: F
          }
        ],
        q
      );
    else
      throw new v("_write()");
  }, dt.prototype._writev = null, dt.prototype.end = function(C, F, q) {
    const tt = this._writableState;
    typeof C == "function" ? (q = C, C = null, F = null) : typeof F == "function" && (q = F, F = null);
    let nt;
    if (C != null) {
      const it = ft(this, C, F);
      it instanceof i && (nt = it);
    }
    return tt.corked && (tt.corked = 1, this.uncork()), nt || (!tt.errored && !tt.ending ? (tt.ending = !0, H(this, tt, !0), tt.ended = !0) : tt.finished ? nt = new j("end") : tt.destroyed && (nt = new M("end"))), typeof q == "function" && (nt || tt.finished ? e.nextTick(q, nt) : tt[Y].push(q)), this;
  };
  function bt(C) {
    return C.ending && !C.destroyed && C.constructed && C.length === 0 && !C.errored && C.buffered.length === 0 && !C.finished && !C.writing && !C.errorEmitted && !C.closeEmitted;
  }
  function Mt(C, F) {
    let q = !1;
    function tt(nt) {
      if (q) {
        G(C, nt ?? E());
        return;
      }
      if (q = !0, F.pendingcb--, nt) {
        const it = F[Y].splice(0);
        for (let T = 0; T < it.length; T++)
          it[T](nt);
        G(C, nt, F.sync);
      } else bt(F) && (F.prefinished = !0, C.emit("prefinish"), F.pendingcb++, e.nextTick(X, C, F));
    }
    F.sync = !0, F.pendingcb++;
    try {
      C._final(tt);
    } catch (nt) {
      tt(nt);
    }
    F.sync = !1;
  }
  function Et(C, F) {
    !F.prefinished && !F.finalCalled && (typeof C._final == "function" && !F.destroyed ? (F.finalCalled = !0, Mt(C, F)) : (F.prefinished = !0, C.emit("prefinish")));
  }
  function H(C, F, q) {
    bt(F) && (Et(C, F), F.pendingcb === 0 && (q ? (F.pendingcb++, e.nextTick(
      (tt, nt) => {
        bt(nt) ? X(tt, nt) : nt.pendingcb--;
      },
      C,
      F
    )) : bt(F) && (F.pendingcb++, X(C, F))));
  }
  function X(C, F) {
    F.pendingcb--, F.finished = !0;
    const q = F[Y].splice(0);
    for (let tt = 0; tt < q.length; tt++)
      q[tt]();
    if (C.emit("finish"), F.autoDestroy) {
      const tt = C._readableState;
      (!tt || tt.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (tt.endEmitted || tt.readable === !1)) && C.destroy();
    }
  }
  s(dt.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : !1;
      },
      set(C) {
        this._writableState && (this._writableState.destroyed = C);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const C = this._writableState;
        return !!C && C.writable !== !1 && !C.destroyed && !C.errored && !C.ending && !C.ended;
      },
      set(C) {
        this._writableState && (this._writableState.writable = !!C);
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : !1;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : !1;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : !1;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const C = this._writableState;
        return C ? !C.destroyed && !C.ending && C.needDrain : !1;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._writableState ? this._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      }
    }
  });
  const ct = m.destroy;
  dt.prototype.destroy = function(C, F) {
    const q = this._writableState;
    return !q.destroyed && (q.bufferedIndex < q.buffered.length || q[Y].length) && e.nextTick(Q, q), ct.call(this, C, F), this;
  }, dt.prototype._undestroy = m.undestroy, dt.prototype._destroy = function(C, F) {
    F(C);
  }, dt.prototype[d.captureRejectionSymbol] = function(C) {
    this.destroy(C);
  };
  let wt;
  function mt() {
    return wt === void 0 && (wt = {}), wt;
  }
  return dt.fromWeb = function(C, F) {
    return mt().newStreamWritableFromWritableStream(C, F);
  }, dt.toWeb = function(C) {
    return mt().newWritableStreamFromStreamWritable(C);
  }, Xr;
}
var Kr, Es;
function rh() {
  if (Es) return Kr;
  Es = 1;
  const e = ke(), t = be(), {
    isReadable: i,
    isWritable: r,
    isIterable: n,
    isNodeStream: s,
    isReadableNodeStream: o,
    isWritableNodeStream: a,
    isDuplexNodeStream: l,
    isReadableStream: h,
    isWritableStream: d
  } = me(), f = Ne(), {
    AbortError: _,
    codes: { ERR_INVALID_ARG_TYPE: m, ERR_INVALID_RETURN_VALUE: y }
  } = Zt(), { destroyer: w } = ni(), b = ye(), g = Nr(), v = Tn(), { createDeferredPromise: E } = re(), N = Da(), M = globalThis.Blob || t.Blob, j = typeof M < "u" ? function(D) {
    return D instanceof M;
  } : function(D) {
    return !1;
  }, U = globalThis.AbortController || Li().AbortController, { FunctionPrototypeCall: k } = Lt();
  class lt extends b {
    constructor(D) {
      super(D), (D == null ? void 0 : D.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (D == null ? void 0 : D.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  Kr = function Y(D, ht) {
    if (l(D))
      return D;
    if (o(D))
      return L({
        readable: D
      });
    if (a(D))
      return L({
        writable: D
      });
    if (s(D))
      return L({
        writable: !1,
        readable: !1
      });
    if (h(D))
      return L({
        readable: g.fromWeb(D)
      });
    if (d(D))
      return L({
        writable: v.fromWeb(D)
      });
    if (typeof D == "function") {
      const { value: ft, write: vt, final: V, destroy: pt } = G(D);
      if (n(ft))
        return N(lt, ft, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: vt,
          final: V,
          destroy: pt
        });
      const R = ft == null ? void 0 : ft.then;
      if (typeof R == "function") {
        let W;
        const rt = k(
          R,
          ft,
          (Q) => {
            if (Q != null)
              throw new y("nully", "body", Q);
          },
          (Q) => {
            w(W, Q);
          }
        );
        return W = new lt({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: vt,
          final(Q) {
            V(async () => {
              try {
                await rt, e.nextTick(Q, null);
              } catch (_t) {
                e.nextTick(Q, _t);
              }
            });
          },
          destroy: pt
        });
      }
      throw new y("Iterable, AsyncIterable or AsyncFunction", ht, ft);
    }
    if (j(D))
      return Y(D.arrayBuffer());
    if (n(D))
      return N(lt, D, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (h(D == null ? void 0 : D.readable) && d(D == null ? void 0 : D.writable))
      return lt.fromWeb(D);
    if (typeof (D == null ? void 0 : D.writable) == "object" || typeof (D == null ? void 0 : D.readable) == "object") {
      const ft = D != null && D.readable ? o(D == null ? void 0 : D.readable) ? D == null ? void 0 : D.readable : Y(D.readable) : void 0, vt = D != null && D.writable ? a(D == null ? void 0 : D.writable) ? D == null ? void 0 : D.writable : Y(D.writable) : void 0;
      return L({
        readable: ft,
        writable: vt
      });
    }
    const dt = D == null ? void 0 : D.then;
    if (typeof dt == "function") {
      let ft;
      return k(
        dt,
        D,
        (vt) => {
          vt != null && ft.push(vt), ft.push(null);
        },
        (vt) => {
          w(ft, vt);
        }
      ), ft = new lt({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new m(
      ht,
      [
        "Blob",
        "ReadableStream",
        "WritableStream",
        "Stream",
        "Iterable",
        "AsyncIterable",
        "Function",
        "{ readable, writable } pair",
        "Promise"
      ],
      D
    );
  };
  function G(Y) {
    let { promise: D, resolve: ht } = E();
    const dt = new U(), ft = dt.signal;
    return {
      value: Y(
        (async function* () {
          for (; ; ) {
            const V = D;
            D = null;
            const { chunk: pt, done: R, cb: W } = await V;
            if (e.nextTick(W), R) return;
            if (ft.aborted)
              throw new _(void 0, {
                cause: ft.reason
              });
            ({ promise: D, resolve: ht } = E()), yield pt;
          }
        })(),
        {
          signal: ft
        }
      ),
      write(V, pt, R) {
        const W = ht;
        ht = null, W({
          chunk: V,
          done: !1,
          cb: R
        });
      },
      final(V) {
        const pt = ht;
        ht = null, pt({
          done: !0,
          cb: V
        });
      },
      destroy(V, pt) {
        dt.abort(), pt(V);
      }
    };
  }
  function L(Y) {
    const D = Y.readable && typeof Y.readable.read != "function" ? g.wrap(Y.readable) : Y.readable, ht = Y.writable;
    let dt = !!i(D), ft = !!r(ht), vt, V, pt, R, W;
    function rt(Q) {
      const _t = R;
      R = null, _t ? _t(Q) : Q && W.destroy(Q);
    }
    return W = new lt({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(D != null && D.readableObjectMode),
      writableObjectMode: !!(ht != null && ht.writableObjectMode),
      readable: dt,
      writable: ft
    }), ft && (f(ht, (Q) => {
      ft = !1, Q && w(D, Q), rt(Q);
    }), W._write = function(Q, _t, bt) {
      ht.write(Q, _t) ? bt() : vt = bt;
    }, W._final = function(Q) {
      ht.end(), V = Q;
    }, ht.on("drain", function() {
      if (vt) {
        const Q = vt;
        vt = null, Q();
      }
    }), ht.on("finish", function() {
      if (V) {
        const Q = V;
        V = null, Q();
      }
    })), dt && (f(D, (Q) => {
      dt = !1, Q && w(D, Q), rt(Q);
    }), D.on("readable", function() {
      if (pt) {
        const Q = pt;
        pt = null, Q();
      }
    }), D.on("end", function() {
      W.push(null);
    }), W._read = function() {
      for (; ; ) {
        const Q = D.read();
        if (Q === null) {
          pt = W._read;
          return;
        }
        if (!W.push(Q))
          return;
      }
    }), W._destroy = function(Q, _t) {
      !Q && R !== null && (Q = new _()), pt = null, vt = null, V = null, R === null ? _t(Q) : (R = _t, w(ht, Q), w(D, Q));
    }, W;
  }
  return Kr;
}
var Jr, vs;
function ye() {
  if (vs) return Jr;
  vs = 1;
  const {
    ObjectDefineProperties: e,
    ObjectGetOwnPropertyDescriptor: t,
    ObjectKeys: i,
    ObjectSetPrototypeOf: r
  } = Lt();
  Jr = o;
  const n = Nr(), s = Tn();
  r(o.prototype, n.prototype), r(o, n);
  {
    const d = i(s.prototype);
    for (let f = 0; f < d.length; f++) {
      const _ = d[f];
      o.prototype[_] || (o.prototype[_] = s.prototype[_]);
    }
  }
  function o(d) {
    if (!(this instanceof o)) return new o(d);
    n.call(this, d), s.call(this, d), d ? (this.allowHalfOpen = d.allowHalfOpen !== !1, d.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), d.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  e(o.prototype, {
    writable: {
      __proto__: null,
      ...t(s.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...t(s.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...t(s.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...t(s.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...t(s.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...t(s.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...t(s.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...t(s.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...t(s.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(d) {
        this._readableState && this._writableState && (this._readableState.destroyed = d, this._writableState.destroyed = d);
      }
    }
  });
  let a;
  function l() {
    return a === void 0 && (a = {}), a;
  }
  o.fromWeb = function(d, f) {
    return l().newStreamDuplexFromReadableWritablePair(d, f);
  }, o.toWeb = function(d) {
    return l().newReadableWritablePairFromDuplex(d);
  };
  let h;
  return o.from = function(d) {
    return h || (h = rh()), h(d, "body");
  }, Jr;
}
var Yr, xs;
function Oa() {
  if (xs) return Yr;
  xs = 1;
  const { ObjectSetPrototypeOf: e, Symbol: t } = Lt();
  Yr = o;
  const { ERR_METHOD_NOT_IMPLEMENTED: i } = Zt().codes, r = ye(), { getHighWaterMark: n } = Ar();
  e(o.prototype, r.prototype), e(o, r);
  const s = t("kCallback");
  function o(h) {
    if (!(this instanceof o)) return new o(h);
    const d = h ? n(this, h, "readableHighWaterMark", !0) : null;
    d === 0 && (h = {
      ...h,
      highWaterMark: null,
      readableHighWaterMark: d,
      // TODO (ronag): 0 is not optimal since we have
      // a "bug" where we check needDrain before calling _write and not after.
      // Refs: https://github.com/nodejs/node/pull/32887
      // Refs: https://github.com/nodejs/node/pull/35941
      writableHighWaterMark: h.writableHighWaterMark || 0
    }), r.call(this, h), this._readableState.sync = !1, this[s] = null, h && (typeof h.transform == "function" && (this._transform = h.transform), typeof h.flush == "function" && (this._flush = h.flush)), this.on("prefinish", l);
  }
  function a(h) {
    typeof this._flush == "function" && !this.destroyed ? this._flush((d, f) => {
      if (d) {
        h ? h(d) : this.destroy(d);
        return;
      }
      f != null && this.push(f), this.push(null), h && h();
    }) : (this.push(null), h && h());
  }
  function l() {
    this._final !== a && a.call(this);
  }
  return o.prototype._final = a, o.prototype._transform = function(h, d, f) {
    throw new i("_transform()");
  }, o.prototype._write = function(h, d, f) {
    const _ = this._readableState, m = this._writableState, y = _.length;
    this._transform(h, d, (w, b) => {
      if (w) {
        f(w);
        return;
      }
      b != null && this.push(b), m.ended || // Backwards compat.
      y === _.length || // Backwards compat.
      _.length < _.highWaterMark ? f() : this[s] = f;
    });
  }, o.prototype._read = function() {
    if (this[s]) {
      const h = this[s];
      this[s] = null, h();
    }
  }, Yr;
}
var Zr, Ss;
function La() {
  if (Ss) return Zr;
  Ss = 1;
  const { ObjectSetPrototypeOf: e } = Lt();
  Zr = i;
  const t = Oa();
  e(i.prototype, t.prototype), e(i, t);
  function i(r) {
    if (!(this instanceof i)) return new i(r);
    t.call(this, r);
  }
  return i.prototype._transform = function(r, n, s) {
    s(null, r);
  }, Zr;
}
var tn, Ms;
function Cn() {
  if (Ms) return tn;
  Ms = 1;
  const e = ke(), { ArrayIsArray: t, Promise: i, SymbolAsyncIterator: r, SymbolDispose: n } = Lt(), s = Ne(), { once: o } = re(), a = ni(), l = ye(), {
    aggregateTwoErrors: h,
    codes: {
      ERR_INVALID_ARG_TYPE: d,
      ERR_INVALID_RETURN_VALUE: f,
      ERR_MISSING_ARGS: _,
      ERR_STREAM_DESTROYED: m,
      ERR_STREAM_PREMATURE_CLOSE: y
    },
    AbortError: w
  } = Zt(), { validateFunction: b, validateAbortSignal: g } = qi(), {
    isIterable: v,
    isReadable: E,
    isReadableNodeStream: N,
    isNodeStream: M,
    isTransformStream: j,
    isWebStream: U,
    isReadableStream: k,
    isReadableFinished: lt
  } = me(), G = globalThis.AbortController || Li().AbortController;
  let L, Y, D;
  function ht(Q, _t, bt) {
    let Mt = !1;
    Q.on("close", () => {
      Mt = !0;
    });
    const Et = s(
      Q,
      {
        readable: _t,
        writable: bt
      },
      (H) => {
        Mt = !H;
      }
    );
    return {
      destroy: (H) => {
        Mt || (Mt = !0, a.destroyer(Q, H || new m("pipe")));
      },
      cleanup: Et
    };
  }
  function dt(Q) {
    return b(Q[Q.length - 1], "streams[stream.length - 1]"), Q.pop();
  }
  function ft(Q) {
    if (v(Q))
      return Q;
    if (N(Q))
      return vt(Q);
    throw new d("val", ["Readable", "Iterable", "AsyncIterable"], Q);
  }
  async function* vt(Q) {
    Y || (Y = Nr()), yield* Y.prototype[r].call(Q);
  }
  async function V(Q, _t, bt, { end: Mt }) {
    let Et, H = null;
    const X = (mt) => {
      if (mt && (Et = mt), H) {
        const C = H;
        H = null, C();
      }
    }, ct = () => new i((mt, C) => {
      Et ? C(Et) : H = () => {
        Et ? C(Et) : mt();
      };
    });
    _t.on("drain", X);
    const wt = s(
      _t,
      {
        readable: !1
      },
      X
    );
    try {
      _t.writableNeedDrain && await ct();
      for await (const mt of Q)
        _t.write(mt) || await ct();
      Mt && (_t.end(), await ct()), bt();
    } catch (mt) {
      bt(Et !== mt ? h(Et, mt) : mt);
    } finally {
      wt(), _t.off("drain", X);
    }
  }
  async function pt(Q, _t, bt, { end: Mt }) {
    j(_t) && (_t = _t.writable);
    const Et = _t.getWriter();
    try {
      for await (const H of Q)
        await Et.ready, Et.write(H).catch(() => {
        });
      await Et.ready, Mt && await Et.close(), bt();
    } catch (H) {
      try {
        await Et.abort(H), bt(H);
      } catch (X) {
        bt(X);
      }
    }
  }
  function R(...Q) {
    return W(Q, o(dt(Q)));
  }
  function W(Q, _t, bt) {
    if (Q.length === 1 && t(Q[0]) && (Q = Q[0]), Q.length < 2)
      throw new _("streams");
    const Mt = new G(), Et = Mt.signal, H = bt == null ? void 0 : bt.signal, X = [];
    g(H, "options.signal");
    function ct() {
      nt(new w());
    }
    D = D || re().addAbortListener;
    let wt;
    H && (wt = D(H, ct));
    let mt, C;
    const F = [];
    let q = 0;
    function tt(et) {
      nt(et, --q === 0);
    }
    function nt(et, z) {
      var Pt;
      if (et && (!mt || mt.code === "ERR_STREAM_PREMATURE_CLOSE") && (mt = et), !(!mt && !z)) {
        for (; F.length; )
          F.shift()(mt);
        (Pt = wt) === null || Pt === void 0 || Pt[n](), Mt.abort(), z && (mt || X.forEach((Ut) => Ut()), e.nextTick(_t, mt, C));
      }
    }
    let it;
    for (let et = 0; et < Q.length; et++) {
      const z = Q[et], Pt = et < Q.length - 1, Ut = et > 0, St = Pt || (bt == null ? void 0 : bt.end) !== !1, Ht = et === Q.length - 1;
      if (M(z)) {
        let p = function(u) {
          u && u.name !== "AbortError" && u.code !== "ERR_STREAM_PREMATURE_CLOSE" && tt(u);
        };
        if (St) {
          const { destroy: u, cleanup: c } = ht(z, Pt, Ut);
          F.push(u), E(z) && Ht && X.push(c);
        }
        z.on("error", p), E(z) && Ht && X.push(() => {
          z.removeListener("error", p);
        });
      }
      if (et === 0)
        if (typeof z == "function") {
          if (it = z({
            signal: Et
          }), !v(it))
            throw new f("Iterable, AsyncIterable or Stream", "source", it);
        } else v(z) || N(z) || j(z) ? it = z : it = l.from(z);
      else if (typeof z == "function") {
        if (j(it)) {
          var T;
          it = ft((T = it) === null || T === void 0 ? void 0 : T.readable);
        } else
          it = ft(it);
        if (it = z(it, {
          signal: Et
        }), Pt) {
          if (!v(it, !0))
            throw new f("AsyncIterable", `transform[${et - 1}]`, it);
        } else {
          var J;
          L || (L = La());
          const p = new L({
            objectMode: !0
          }), u = (J = it) === null || J === void 0 ? void 0 : J.then;
          if (typeof u == "function")
            q++, u.call(
              it,
              (I) => {
                C = I, I != null && p.write(I), St && p.end(), e.nextTick(tt);
              },
              (I) => {
                p.destroy(I), e.nextTick(tt, I);
              }
            );
          else if (v(it, !0))
            q++, V(it, p, tt, {
              end: St
            });
          else if (k(it) || j(it)) {
            const I = it.readable || it;
            q++, V(I, p, tt, {
              end: St
            });
          } else
            throw new f("AsyncIterable or Promise", "destination", it);
          it = p;
          const { destroy: c, cleanup: S } = ht(it, !1, !0);
          F.push(c), Ht && X.push(S);
        }
      } else if (M(z)) {
        if (N(it)) {
          q += 2;
          const p = rt(it, z, tt, {
            end: St
          });
          E(z) && Ht && X.push(p);
        } else if (j(it) || k(it)) {
          const p = it.readable || it;
          q++, V(p, z, tt, {
            end: St
          });
        } else if (v(it))
          q++, V(it, z, tt, {
            end: St
          });
        else
          throw new d(
            "val",
            ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
            it
          );
        it = z;
      } else if (U(z)) {
        if (N(it))
          q++, pt(ft(it), z, tt, {
            end: St
          });
        else if (k(it) || v(it))
          q++, pt(it, z, tt, {
            end: St
          });
        else if (j(it))
          q++, pt(it.readable, z, tt, {
            end: St
          });
        else
          throw new d(
            "val",
            ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
            it
          );
        it = z;
      } else
        it = l.from(z);
    }
    return (Et != null && Et.aborted || H != null && H.aborted) && e.nextTick(ct), it;
  }
  function rt(Q, _t, bt, { end: Mt }) {
    let Et = !1;
    if (_t.on("close", () => {
      Et || bt(new y());
    }), Q.pipe(_t, {
      end: !1
    }), Mt) {
      let H = function() {
        Et = !0, _t.end();
      };
      lt(Q) ? e.nextTick(H) : Q.once("end", H);
    } else
      bt();
    return s(
      Q,
      {
        readable: !0,
        writable: !1
      },
      (H) => {
        const X = Q._readableState;
        H && H.code === "ERR_STREAM_PREMATURE_CLOSE" && X && X.ended && !X.errored && !X.errorEmitted ? Q.once("end", bt).once("error", bt) : bt(H);
      }
    ), s(
      _t,
      {
        readable: !1,
        writable: !0
      },
      bt
    );
  }
  return tn = {
    pipelineImpl: W,
    pipeline: R
  }, tn;
}
var en, Ps;
function $a() {
  if (Ps) return en;
  Ps = 1;
  const { pipeline: e } = Cn(), t = ye(), { destroyer: i } = ni(), {
    isNodeStream: r,
    isReadable: n,
    isWritable: s,
    isWebStream: o,
    isTransformStream: a,
    isWritableStream: l,
    isReadableStream: h
  } = me(), {
    AbortError: d,
    codes: { ERR_INVALID_ARG_VALUE: f, ERR_MISSING_ARGS: _ }
  } = Zt(), m = Ne();
  return en = function(...w) {
    if (w.length === 0)
      throw new _("streams");
    if (w.length === 1)
      return t.from(w[0]);
    const b = [...w];
    if (typeof w[0] == "function" && (w[0] = t.from(w[0])), typeof w[w.length - 1] == "function") {
      const L = w.length - 1;
      w[L] = t.from(w[L]);
    }
    for (let L = 0; L < w.length; ++L)
      if (!(!r(w[L]) && !o(w[L]))) {
        if (L < w.length - 1 && !(n(w[L]) || h(w[L]) || a(w[L])))
          throw new f(`streams[${L}]`, b[L], "must be readable");
        if (L > 0 && !(s(w[L]) || l(w[L]) || a(w[L])))
          throw new f(`streams[${L}]`, b[L], "must be writable");
      }
    let g, v, E, N, M;
    function j(L) {
      const Y = N;
      N = null, Y ? Y(L) : L ? M.destroy(L) : !G && !lt && M.destroy();
    }
    const U = w[0], k = e(w, j), lt = !!(s(U) || l(U) || a(U)), G = !!(n(k) || h(k) || a(k));
    if (M = new t({
      // TODO (ronag): highWaterMark?
      writableObjectMode: !!(U != null && U.writableObjectMode),
      readableObjectMode: !!(k != null && k.readableObjectMode),
      writable: lt,
      readable: G
    }), lt) {
      if (r(U))
        M._write = function(Y, D, ht) {
          U.write(Y, D) ? ht() : g = ht;
        }, M._final = function(Y) {
          U.end(), v = Y;
        }, U.on("drain", function() {
          if (g) {
            const Y = g;
            g = null, Y();
          }
        });
      else if (o(U)) {
        const D = (a(U) ? U.writable : U).getWriter();
        M._write = async function(ht, dt, ft) {
          try {
            await D.ready, D.write(ht).catch(() => {
            }), ft();
          } catch (vt) {
            ft(vt);
          }
        }, M._final = async function(ht) {
          try {
            await D.ready, D.close().catch(() => {
            }), v = ht;
          } catch (dt) {
            ht(dt);
          }
        };
      }
      const L = a(k) ? k.readable : k;
      m(L, () => {
        if (v) {
          const Y = v;
          v = null, Y();
        }
      });
    }
    if (G) {
      if (r(k))
        k.on("readable", function() {
          if (E) {
            const L = E;
            E = null, L();
          }
        }), k.on("end", function() {
          M.push(null);
        }), M._read = function() {
          for (; ; ) {
            const L = k.read();
            if (L === null) {
              E = M._read;
              return;
            }
            if (!M.push(L))
              return;
          }
        };
      else if (o(k)) {
        const Y = (a(k) ? k.readable : k).getReader();
        M._read = async function() {
          for (; ; )
            try {
              const { value: D, done: ht } = await Y.read();
              if (!M.push(D))
                return;
              if (ht) {
                M.push(null);
                return;
              }
            } catch {
              return;
            }
        };
      }
    }
    return M._destroy = function(L, Y) {
      !L && N !== null && (L = new d()), E = null, g = null, v = null, N === null ? Y(L) : (N = Y, r(k) && i(k, L));
    }, M;
  }, en;
}
var As;
function nh() {
  if (As) return ir;
  As = 1;
  const e = globalThis.AbortController || Li().AbortController, {
    codes: { ERR_INVALID_ARG_VALUE: t, ERR_INVALID_ARG_TYPE: i, ERR_MISSING_ARGS: r, ERR_OUT_OF_RANGE: n },
    AbortError: s
  } = Zt(), { validateAbortSignal: o, validateInteger: a, validateObject: l } = qi(), h = Lt().Symbol("kWeak"), d = Lt().Symbol("kResistStopPropagation"), { finished: f } = Ne(), _ = $a(), { addAbortSignalNoValidate: m } = Pr(), { isWritable: y, isNodeStream: w } = me(), { deprecate: b } = re(), {
    ArrayPrototypePush: g,
    Boolean: v,
    MathFloor: E,
    Number: N,
    NumberIsNaN: M,
    Promise: j,
    PromiseReject: U,
    PromiseResolve: k,
    PromisePrototypeThen: lt,
    Symbol: G
  } = Lt(), L = G("kEmpty"), Y = G("kEof");
  function D(H, X) {
    if (X != null && l(X, "options"), (X == null ? void 0 : X.signal) != null && o(X.signal, "options.signal"), w(H) && !y(H))
      throw new t("stream", H, "must be writable");
    const ct = _(this, H);
    return X != null && X.signal && m(X.signal, ct), ct;
  }
  function ht(H, X) {
    if (typeof H != "function")
      throw new i("fn", ["Function", "AsyncFunction"], H);
    X != null && l(X, "options"), (X == null ? void 0 : X.signal) != null && o(X.signal, "options.signal");
    let ct = 1;
    (X == null ? void 0 : X.concurrency) != null && (ct = E(X.concurrency));
    let wt = ct - 1;
    return (X == null ? void 0 : X.highWaterMark) != null && (wt = E(X.highWaterMark)), a(ct, "options.concurrency", 1), a(wt, "options.highWaterMark", 0), wt += ct, (async function* () {
      const C = re().AbortSignalAny(
        [X == null ? void 0 : X.signal].filter(v)
      ), F = this, q = [], tt = {
        signal: C
      };
      let nt, it, T = !1, J = 0;
      function et() {
        T = !0, z();
      }
      function z() {
        J -= 1, Pt();
      }
      function Pt() {
        it && !T && J < ct && q.length < wt && (it(), it = null);
      }
      async function Ut() {
        try {
          for await (let St of F) {
            if (T)
              return;
            if (C.aborted)
              throw new s();
            try {
              if (St = H(St, tt), St === L)
                continue;
              St = k(St);
            } catch (Ht) {
              St = U(Ht);
            }
            J += 1, lt(St, z, et), q.push(St), nt && (nt(), nt = null), !T && (q.length >= wt || J >= ct) && await new j((Ht) => {
              it = Ht;
            });
          }
          q.push(Y);
        } catch (St) {
          const Ht = U(St);
          lt(Ht, z, et), q.push(Ht);
        } finally {
          T = !0, nt && (nt(), nt = null);
        }
      }
      Ut();
      try {
        for (; ; ) {
          for (; q.length > 0; ) {
            const St = await q[0];
            if (St === Y)
              return;
            if (C.aborted)
              throw new s();
            St !== L && (yield St), q.shift(), Pt();
          }
          await new j((St) => {
            nt = St;
          });
        }
      } finally {
        T = !0, it && (it(), it = null);
      }
    }).call(this);
  }
  function dt(H = void 0) {
    return H != null && l(H, "options"), (H == null ? void 0 : H.signal) != null && o(H.signal, "options.signal"), (async function* () {
      let ct = 0;
      for await (const mt of this) {
        var wt;
        if (H != null && (wt = H.signal) !== null && wt !== void 0 && wt.aborted)
          throw new s({
            cause: H.signal.reason
          });
        yield [ct++, mt];
      }
    }).call(this);
  }
  async function ft(H, X = void 0) {
    for await (const ct of R.call(this, H, X))
      return !0;
    return !1;
  }
  async function vt(H, X = void 0) {
    if (typeof H != "function")
      throw new i("fn", ["Function", "AsyncFunction"], H);
    return !await ft.call(
      this,
      async (...ct) => !await H(...ct),
      X
    );
  }
  async function V(H, X) {
    for await (const ct of R.call(this, H, X))
      return ct;
  }
  async function pt(H, X) {
    if (typeof H != "function")
      throw new i("fn", ["Function", "AsyncFunction"], H);
    async function ct(wt, mt) {
      return await H(wt, mt), L;
    }
    for await (const wt of ht.call(this, ct, X)) ;
  }
  function R(H, X) {
    if (typeof H != "function")
      throw new i("fn", ["Function", "AsyncFunction"], H);
    async function ct(wt, mt) {
      return await H(wt, mt) ? wt : L;
    }
    return ht.call(this, ct, X);
  }
  class W extends r {
    constructor() {
      super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
    }
  }
  async function rt(H, X, ct) {
    var wt;
    if (typeof H != "function")
      throw new i("reducer", ["Function", "AsyncFunction"], H);
    ct != null && l(ct, "options"), (ct == null ? void 0 : ct.signal) != null && o(ct.signal, "options.signal");
    let mt = arguments.length > 1;
    if (ct != null && (wt = ct.signal) !== null && wt !== void 0 && wt.aborted) {
      const nt = new s(void 0, {
        cause: ct.signal.reason
      });
      throw this.once("error", () => {
      }), await f(this.destroy(nt)), nt;
    }
    const C = new e(), F = C.signal;
    if (ct != null && ct.signal) {
      const nt = {
        once: !0,
        [h]: this,
        [d]: !0
      };
      ct.signal.addEventListener("abort", () => C.abort(), nt);
    }
    let q = !1;
    try {
      for await (const nt of this) {
        var tt;
        if (q = !0, ct != null && (tt = ct.signal) !== null && tt !== void 0 && tt.aborted)
          throw new s();
        mt ? X = await H(X, nt, {
          signal: F
        }) : (X = nt, mt = !0);
      }
      if (!q && !mt)
        throw new W();
    } finally {
      C.abort();
    }
    return X;
  }
  async function Q(H) {
    H != null && l(H, "options"), (H == null ? void 0 : H.signal) != null && o(H.signal, "options.signal");
    const X = [];
    for await (const wt of this) {
      var ct;
      if (H != null && (ct = H.signal) !== null && ct !== void 0 && ct.aborted)
        throw new s(void 0, {
          cause: H.signal.reason
        });
      g(X, wt);
    }
    return X;
  }
  function _t(H, X) {
    const ct = ht.call(this, H, X);
    return (async function* () {
      for await (const mt of ct)
        yield* mt;
    }).call(this);
  }
  function bt(H) {
    if (H = N(H), M(H))
      return 0;
    if (H < 0)
      throw new n("number", ">= 0", H);
    return H;
  }
  function Mt(H, X = void 0) {
    return X != null && l(X, "options"), (X == null ? void 0 : X.signal) != null && o(X.signal, "options.signal"), H = bt(H), (async function* () {
      var wt;
      if (X != null && (wt = X.signal) !== null && wt !== void 0 && wt.aborted)
        throw new s();
      for await (const C of this) {
        var mt;
        if (X != null && (mt = X.signal) !== null && mt !== void 0 && mt.aborted)
          throw new s();
        H-- <= 0 && (yield C);
      }
    }).call(this);
  }
  function Et(H, X = void 0) {
    return X != null && l(X, "options"), (X == null ? void 0 : X.signal) != null && o(X.signal, "options.signal"), H = bt(H), (async function* () {
      var wt;
      if (X != null && (wt = X.signal) !== null && wt !== void 0 && wt.aborted)
        throw new s();
      for await (const C of this) {
        var mt;
        if (X != null && (mt = X.signal) !== null && mt !== void 0 && mt.aborted)
          throw new s();
        if (H-- > 0 && (yield C), H <= 0)
          return;
      }
    }).call(this);
  }
  return ir.streamReturningOperators = {
    asIndexedPairs: b(dt, "readable.asIndexedPairs will be removed in a future version."),
    drop: Mt,
    filter: R,
    flatMap: _t,
    map: ht,
    take: Et,
    compose: D
  }, ir.promiseReturningOperators = {
    every: vt,
    forEach: pt,
    reduce: rt,
    toArray: Q,
    some: ft,
    find: V
  }, ir;
}
var rn, Ns;
function ja() {
  if (Ns) return rn;
  Ns = 1;
  const { ArrayPrototypePop: e, Promise: t } = Lt(), { isIterable: i, isNodeStream: r, isWebStream: n } = me(), { pipelineImpl: s } = Cn(), { finished: o } = Ne();
  Ba();
  function a(...l) {
    return new t((h, d) => {
      let f, _;
      const m = l[l.length - 1];
      if (m && typeof m == "object" && !r(m) && !i(m) && !n(m)) {
        const y = e(l);
        f = y.signal, _ = y.end;
      }
      s(
        l,
        (y, w) => {
          y ? d(y) : h(w);
        },
        {
          signal: f,
          end: _
        }
      );
    });
  }
  return rn = {
    finished: o,
    pipeline: a
  }, rn;
}
var Rs;
function Ba() {
  if (Rs) return Fr.exports;
  Rs = 1;
  const { Buffer: e } = be(), { ObjectDefineProperty: t, ObjectKeys: i, ReflectApply: r } = Lt(), {
    promisify: { custom: n }
  } = re(), { streamReturningOperators: s, promiseReturningOperators: o } = nh(), {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: a }
  } = Zt(), l = $a(), { setDefaultHighWaterMark: h, getDefaultHighWaterMark: d } = Ar(), { pipeline: f } = Cn(), { destroyer: _ } = ni(), m = Ne(), y = ja(), w = me(), b = Fr.exports = In().Stream;
  b.isDestroyed = w.isDestroyed, b.isDisturbed = w.isDisturbed, b.isErrored = w.isErrored, b.isReadable = w.isReadable, b.isWritable = w.isWritable, b.Readable = Nr();
  for (const v of i(s)) {
    let N = function(...M) {
      if (new.target)
        throw a();
      return b.Readable.from(r(E, this, M));
    };
    const E = s[v];
    t(N, "name", {
      __proto__: null,
      value: E.name
    }), t(N, "length", {
      __proto__: null,
      value: E.length
    }), t(b.Readable.prototype, v, {
      __proto__: null,
      value: N,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const v of i(o)) {
    let N = function(...M) {
      if (new.target)
        throw a();
      return r(E, this, M);
    };
    const E = o[v];
    t(N, "name", {
      __proto__: null,
      value: E.name
    }), t(N, "length", {
      __proto__: null,
      value: E.length
    }), t(b.Readable.prototype, v, {
      __proto__: null,
      value: N,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  b.Writable = Tn(), b.Duplex = ye(), b.Transform = Oa(), b.PassThrough = La(), b.pipeline = f;
  const { addAbortSignal: g } = Pr();
  return b.addAbortSignal = g, b.finished = m, b.destroy = _, b.compose = l, b.setDefaultHighWaterMark = h, b.getDefaultHighWaterMark = d, t(b, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return y;
    }
  }), t(f, n, {
    __proto__: null,
    enumerable: !0,
    get() {
      return y.pipeline;
    }
  }), t(m, n, {
    __proto__: null,
    enumerable: !0,
    get() {
      return y.finished;
    }
  }), b.Stream = b, b._isUint8Array = function(E) {
    return E instanceof Uint8Array;
  }, b._uint8ArrayToBuffer = function(E) {
    return e.from(E.buffer, E.byteOffset, E.byteLength);
  }, Fr.exports;
}
var Is;
function ka() {
  return Is || (Is = 1, (function(e) {
    const t = Ba(), i = ja(), r = t.Readable.destroy;
    e.exports = t.Readable, e.exports._uint8ArrayToBuffer = t._uint8ArrayToBuffer, e.exports._isUint8Array = t._isUint8Array, e.exports.isDisturbed = t.isDisturbed, e.exports.isErrored = t.isErrored, e.exports.isReadable = t.isReadable, e.exports.Readable = t.Readable, e.exports.Writable = t.Writable, e.exports.Duplex = t.Duplex, e.exports.Transform = t.Transform, e.exports.PassThrough = t.PassThrough, e.exports.addAbortSignal = t.addAbortSignal, e.exports.finished = t.finished, e.exports.destroy = t.destroy, e.exports.destroy = r, e.exports.pipeline = t.pipeline, e.exports.compose = t.compose, Object.defineProperty(t, "promises", {
      configurable: !0,
      enumerable: !0,
      get() {
        return i;
      }
    }), e.exports.Stream = t.Stream, e.exports.default = e.exports;
  })(Cr)), Cr.exports;
}
var qa = ka();
const nn = Symbol("iter");
function Ti(e, t, i = 4) {
  if (i === 0)
    return Object.assign(e, t);
  for (const r in t)
    e[r] = Ti(e[r] || /* @__PURE__ */ Object.create(null), t[r], i - 1);
  return e;
}
function Ua(e, t, i = 4) {
  let r = !1;
  for (const n in e)
    if (n in t) {
      const s = i === 0 ? null : Ua(e[n], t[n], i - 1);
      if (s !== !1)
        r = r || /* @__PURE__ */ Object.create(null), r[n] = s;
      else if (i === 3)
        return !1;
    }
  return r;
}
function Wa(e, t, i = 4) {
  let r = !1;
  for (const n in e)
    if (!(n in t))
      r = r || /* @__PURE__ */ Object.create(null), r[n] = i === 0 ? null : Ti({}, e[n], i - 1);
    else if (i !== 0) {
      const s = Wa(e[n], t[n], i - 1);
      if (s !== !1)
        r = r || /* @__PURE__ */ Object.create(null), r[n] = s;
      else if (i === 3)
        return !1;
    }
  return r;
}
class sh {
  constructor(t = {}) {
    this._id = 1, this._ids = /* @__PURE__ */ Object.create(null), this._ids[""] = 1, this._entities = /* @__PURE__ */ Object.create(null), this._entities[1] = "", this._blankNodeIndex = 0, this._factory = t.factory || Me;
  }
  _termFromId(t) {
    if (t[0] === ".") {
      const i = this._entities, r = t.split(".");
      return this._factory.quad(
        this._termFromId(i[r[1]]),
        this._termFromId(i[r[2]]),
        this._termFromId(i[r[3]]),
        r[4] && this._termFromId(i[r[4]])
      );
    }
    return Pi(t, this._factory);
  }
  _termToNumericId(t) {
    if (t.termType === "Quad") {
      const i = this._termToNumericId(t.subject), r = this._termToNumericId(t.predicate), n = this._termToNumericId(t.object);
      let s;
      return i && r && n && (bn(t.graph) || (s = this._termToNumericId(t.graph))) && this._ids[s ? `.${i}.${r}.${n}.${s}` : `.${i}.${r}.${n}`];
    }
    return this._ids[Xe(t)];
  }
  _termToNewNumericId(t) {
    const i = t && t.termType === "Quad" ? `.${this._termToNewNumericId(t.subject)}.${this._termToNewNumericId(t.predicate)}.${this._termToNewNumericId(t.object)}${bn(t.graph) ? "" : `.${this._termToNewNumericId(t.graph)}`}` : Xe(t);
    return this._ids[i] || (this._ids[this._entities[++this._id] = i] = this._id);
  }
  createBlankNode(t) {
    let i, r;
    if (t)
      for (i = t = `_:${t}`, r = 1; this._ids[i]; )
        i = t + r++;
    else
      do
        i = `_:b${this._blankNodeIndex++}`;
      while (this._ids[i]);
    return this._ids[i] = ++this._id, this._entities[this._id] = i, this._factory.blankNode(i.substr(2));
  }
}
class Jt {
  constructor(t, i) {
    this._size = 0, this._graphs = /* @__PURE__ */ Object.create(null), !i && t && !t[0] && typeof t.match != "function" && (i = t, t = null), i = i || {}, this._factory = i.factory || Me, this._entityIndex = i.entityIndex || new sh({ factory: this._factory }), this._entities = this._entityIndex._entities, this._termFromId = this._entityIndex._termFromId.bind(this._entityIndex), this._termToNumericId = this._entityIndex._termToNumericId.bind(this._entityIndex), this._termToNewNumericId = this._entityIndex._termToNewNumericId.bind(this._entityIndex), t && this.addAll(t);
  }
  // ## Public properties
  // ### `size` returns the number of quads in the store
  get size() {
    let t = this._size;
    if (t !== null)
      return t;
    t = 0;
    const i = this._graphs;
    let r, n;
    for (const s in i)
      for (const o in r = i[s].subjects)
        for (const a in n = r[o])
          t += Object.keys(n[a]).length;
    return this._size = t;
  }
  // ## Private methods
  // ### `_addToIndex` adds a quad to a three-layered index.
  // Returns if the index has changed, if the entry did not already exist.
  _addToIndex(t, i, r, n) {
    const s = t[i] || (t[i] = {}), o = s[r] || (s[r] = {}), a = n in o;
    return a || (o[n] = null), !a;
  }
  // ### `_removeFromIndex` removes a quad from a three-layered index
  _removeFromIndex(t, i, r, n) {
    const s = t[i], o = s[r];
    delete o[n];
    for (const a in o) return;
    delete s[r];
    for (const a in s) return;
    delete t[i];
  }
  // ### `_findInIndex` finds a set of quads in a three-layered index.
  // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
  // Any of these keys can be undefined, which is interpreted as a wildcard.
  // `name0`, `name1`, and `name2` are the names of the keys at each level,
  // used when reconstructing the resulting quad
  // (for instance: _subject_, _predicate_, and _object_).
  // Finally, `graphId` will be the graph of the created quads.
  *_findInIndex(t, i, r, n, s, o, a, l) {
    let h, d, f;
    const _ = this._entities, m = this._termFromId(_[l]), y = { subject: null, predicate: null, object: null };
    i && ((h = t, t = {})[i] = h[i]);
    for (const w in t)
      if (d = t[w]) {
        y[s] = this._termFromId(_[w]), r && ((h = d, d = {})[r] = h[r]);
        for (const b in d)
          if (f = d[b]) {
            y[o] = this._termFromId(_[b]);
            const g = n ? n in f ? [n] : [] : Object.keys(f);
            for (let v = 0; v < g.length; v++)
              y[a] = this._termFromId(_[g[v]]), yield this._factory.quad(y.subject, y.predicate, y.object, m);
          }
      }
  }
  // ### `_loop` executes the callback on all keys of index 0
  _loop(t, i) {
    for (const r in t)
      i(r);
  }
  // ### `_loopByKey0` executes the callback on all keys of a certain entry in index 0
  _loopByKey0(t, i, r) {
    let n, s;
    if (n = t[i])
      for (s in n)
        r(s);
  }
  // ### `_loopByKey1` executes the callback on given keys of all entries in index 0
  _loopByKey1(t, i, r) {
    let n, s;
    for (n in t)
      s = t[n], s[i] && r(n);
  }
  // ### `_loopBy2Keys` executes the callback on given keys of certain entries in index 2
  _loopBy2Keys(t, i, r, n) {
    let s, o, a;
    if ((s = t[i]) && (o = s[r]))
      for (a in o)
        n(a);
  }
  // ### `_countInIndex` counts matching quads in a three-layered index.
  // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
  // Any of these keys can be undefined, which is interpreted as a wildcard.
  _countInIndex(t, i, r, n) {
    let s = 0, o, a, l;
    i && ((o = t, t = {})[i] = o[i]);
    for (const h in t)
      if (a = t[h]) {
        r && ((o = a, a = {})[r] = o[r]);
        for (const d in a)
          (l = a[d]) && (n ? n in l && s++ : s += Object.keys(l).length);
      }
    return s;
  }
  // ### `_getGraphs` returns an array with the given graph,
  // or all graphs if the argument is null or undefined.
  _getGraphs(t) {
    return t = t === "" ? 1 : t && (this._termToNumericId(t) || -1), typeof t != "number" ? this._graphs : { [t]: this._graphs[t] };
  }
  // ### `_uniqueEntities` returns a function that accepts an entity ID
  // and passes the corresponding entity to callback if it hasn't occurred before.
  _uniqueEntities(t) {
    const i = /* @__PURE__ */ Object.create(null);
    return (r) => {
      r in i || (i[r] = !0, t(this._termFromId(this._entities[r], this._factory)));
    };
  }
  // ## Public methods
  // ### `add` adds the specified quad to the dataset.
  // Returns the dataset instance it was called on.
  // Existing quads, as defined in Quad.equals, will be ignored.
  add(t) {
    return this.addQuad(t), this;
  }
  // ### `addQuad` adds a new quad to the store.
  // Returns if the quad index has changed, if the quad did not already exist.
  addQuad(t, i, r, n) {
    i || (n = t.graph, r = t.object, i = t.predicate, t = t.subject), n = n ? this._termToNewNumericId(n) : 1;
    let s = this._graphs[n];
    return s || (s = this._graphs[n] = { subjects: {}, predicates: {}, objects: {} }, Object.freeze(s)), t = this._termToNewNumericId(t), i = this._termToNewNumericId(i), r = this._termToNewNumericId(r), this._addToIndex(s.subjects, t, i, r) ? (this._addToIndex(s.predicates, i, r, t), this._addToIndex(s.objects, r, t, i), this._size = null, !0) : !1;
  }
  // ### `addQuads` adds multiple quads to the store
  addQuads(t) {
    for (let i = 0; i < t.length; i++)
      this.addQuad(t[i]);
  }
  // ### `delete` removes the specified quad from the dataset.
  // Returns the dataset instance it was called on.
  delete(t) {
    return this.removeQuad(t), this;
  }
  // ### `has` determines whether a dataset includes a certain quad or quad pattern.
  has(t, i, r, n) {
    return t && t.subject && ({ subject: t, predicate: i, object: r, graph: n } = t), !this.readQuads(t, i, r, n).next().done;
  }
  // ### `import` adds a stream of quads to the store
  import(t) {
    return t.on("data", (i) => {
      this.addQuad(i);
    }), t;
  }
  // ### `removeQuad` removes a quad from the store if it exists
  removeQuad(t, i, r, n) {
    i || ({ subject: t, predicate: i, object: r, graph: n } = t), n = n ? this._termToNumericId(n) : 1;
    const s = this._graphs;
    let o, a, l;
    if (!(t = t && this._termToNumericId(t)) || !(i = i && this._termToNumericId(i)) || !(r = r && this._termToNumericId(r)) || !(o = s[n]) || !(a = o.subjects[t]) || !(l = a[i]) || !(r in l))
      return !1;
    this._removeFromIndex(o.subjects, t, i, r), this._removeFromIndex(o.predicates, i, r, t), this._removeFromIndex(o.objects, r, t, i), this._size !== null && this._size--;
    for (t in o.subjects) return !0;
    return delete s[n], !0;
  }
  // ### `removeQuads` removes multiple quads from the store
  removeQuads(t) {
    for (let i = 0; i < t.length; i++)
      this.removeQuad(t[i]);
  }
  // ### `remove` removes a stream of quads from the store
  remove(t) {
    return t.on("data", (i) => {
      this.removeQuad(i);
    }), t;
  }
  // ### `removeMatches` removes all matching quads from the store
  // Setting any field to `undefined` or `null` indicates a wildcard.
  removeMatches(t, i, r, n) {
    const s = new qa.Readable({ objectMode: !0 }), o = this.readQuads(t, i, r, n);
    return s._read = (a) => {
      for (; --a >= 0; ) {
        const { done: l, value: h } = o.next();
        if (l) {
          s.push(null);
          return;
        }
        s.push(h);
      }
    }, this.remove(s);
  }
  // ### `deleteGraph` removes all triples with the given graph from the store
  deleteGraph(t) {
    return this.removeMatches(null, null, null, t);
  }
  // ### `getQuads` returns an array of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getQuads(t, i, r, n) {
    return [...this.readQuads(t, i, r, n)];
  }
  /**
   * `readQuads` returns a generator of quads matching a pattern.
   * Setting any field to `undefined` or `null` indicates a wildcard.
   * @deprecated Use `match` instead.
   */
  *readQuads(t, i, r, n) {
    const s = this._getGraphs(n);
    let o, a, l, h;
    if (!(t && !(a = this._termToNumericId(t)) || i && !(l = this._termToNumericId(i)) || r && !(h = this._termToNumericId(r))))
      for (const d in s)
        (o = s[d]) && (a ? h ? yield* this._findInIndex(
          o.objects,
          h,
          a,
          l,
          "object",
          "subject",
          "predicate",
          d
        ) : yield* this._findInIndex(
          o.subjects,
          a,
          l,
          null,
          "subject",
          "predicate",
          "object",
          d
        ) : l ? yield* this._findInIndex(
          o.predicates,
          l,
          h,
          null,
          "predicate",
          "object",
          "subject",
          d
        ) : h ? yield* this._findInIndex(
          o.objects,
          h,
          null,
          null,
          "object",
          "subject",
          "predicate",
          d
        ) : yield* this._findInIndex(
          o.subjects,
          null,
          null,
          null,
          "subject",
          "predicate",
          "object",
          d
        ));
  }
  // ### `match` returns a new dataset that is comprised of all quads in the current instance matching the given arguments.
  // The logic described in Quad Matching is applied for each quad in this dataset to check if it should be included in the output dataset.
  // Note: This method always returns a new DatasetCore, even if that dataset contains no quads.
  // Note: Since a DatasetCore is an unordered set, the order of the quads within the returned sequence is arbitrary.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  // For backwards compatibility, the object return also implements the Readable stream interface.
  match(t, i, r, n) {
    return new xe(this, t, i, r, n, { entityIndex: this._entityIndex });
  }
  // ### `countQuads` returns the number of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  countQuads(t, i, r, n) {
    const s = this._getGraphs(n);
    let o = 0, a, l, h, d;
    if (t && !(l = this._termToNumericId(t)) || i && !(h = this._termToNumericId(i)) || r && !(d = this._termToNumericId(r)))
      return 0;
    for (const f in s)
      (a = s[f]) && (t ? r ? o += this._countInIndex(a.objects, d, l, h) : o += this._countInIndex(a.subjects, l, h, d) : i ? o += this._countInIndex(a.predicates, h, d, l) : o += this._countInIndex(a.objects, d, l, h));
    return o;
  }
  // ### `forEach` executes the callback on all quads.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forEach(t, i, r, n, s) {
    this.some((o) => (t(o, this), !1), i, r, n, s);
  }
  // ### `every` executes the callback on all quads,
  // and returns `true` if it returns truthy for all them.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  every(t, i, r, n, s) {
    return !this.some((o) => !t(o, this), i, r, n, s);
  }
  // ### `some` executes the callback on all quads,
  // and returns `true` if it returns truthy for any of them.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  some(t, i, r, n, s) {
    for (const o of this.readQuads(i, r, n, s))
      if (t(o, this))
        return !0;
    return !1;
  }
  // ### `getSubjects` returns all subjects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getSubjects(t, i, r) {
    const n = [];
    return this.forSubjects((s) => {
      n.push(s);
    }, t, i, r), n;
  }
  // ### `forSubjects` executes the callback on all subjects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forSubjects(t, i, r, n) {
    const s = this._getGraphs(n);
    let o, a, l;
    if (t = this._uniqueEntities(t), !(i && !(a = this._termToNumericId(i)) || r && !(l = this._termToNumericId(r))))
      for (n in s)
        (o = s[n]) && (a ? l ? this._loopBy2Keys(o.predicates, a, l, t) : this._loopByKey1(o.subjects, a, t) : l ? this._loopByKey0(o.objects, l, t) : this._loop(o.subjects, t));
  }
  // ### `getPredicates` returns all predicates that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getPredicates(t, i, r) {
    const n = [];
    return this.forPredicates((s) => {
      n.push(s);
    }, t, i, r), n;
  }
  // ### `forPredicates` executes the callback on all predicates that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forPredicates(t, i, r, n) {
    const s = this._getGraphs(n);
    let o, a, l;
    if (t = this._uniqueEntities(t), !(i && !(a = this._termToNumericId(i)) || r && !(l = this._termToNumericId(r))))
      for (n in s)
        (o = s[n]) && (a ? l ? this._loopBy2Keys(o.objects, l, a, t) : this._loopByKey0(o.subjects, a, t) : l ? this._loopByKey1(o.predicates, l, t) : this._loop(o.predicates, t));
  }
  // ### `getObjects` returns all objects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getObjects(t, i, r) {
    const n = [];
    return this.forObjects((s) => {
      n.push(s);
    }, t, i, r), n;
  }
  // ### `forObjects` executes the callback on all objects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forObjects(t, i, r, n) {
    const s = this._getGraphs(n);
    let o, a, l;
    if (t = this._uniqueEntities(t), !(i && !(a = this._termToNumericId(i)) || r && !(l = this._termToNumericId(r))))
      for (n in s)
        (o = s[n]) && (a ? l ? this._loopBy2Keys(o.subjects, a, l, t) : this._loopByKey1(o.objects, a, t) : l ? this._loopByKey0(o.predicates, l, t) : this._loop(o.objects, t));
  }
  // ### `getGraphs` returns all graphs that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getGraphs(t, i, r) {
    const n = [];
    return this.forGraphs((s) => {
      n.push(s);
    }, t, i, r), n;
  }
  // ### `forGraphs` executes the callback on all graphs that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forGraphs(t, i, r, n) {
    for (const s in this._graphs)
      this.some((o) => (t(o.graph), !0), i, r, n, this._termFromId(this._entities[s]));
  }
  // ### `createBlankNode` creates a new blank node, returning its name
  createBlankNode(t) {
    return this._entityIndex.createBlankNode(t);
  }
  // ### `extractLists` finds and removes all list triples
  // and returns the items per list.
  extractLists({ remove: t = !1, ignoreErrors: i = !1 } = {}) {
    const r = {}, n = i ? (() => !0) : ((a, l) => {
      throw new Error(`${a.value} ${l}`);
    }), s = this.getQuads(null, Qt.rdf.rest, Qt.rdf.nil, null), o = t ? [...s] : [];
    return s.forEach((a) => {
      const l = [];
      let h = !1, d, f;
      const _ = a.graph;
      let m = a.subject;
      for (; m && !h; ) {
        const y = this.getQuads(null, null, m, null), w = this.getQuads(m, null, null, null);
        let b, g = null, v = null, E = null;
        for (let N = 0; N < w.length && !h; N++)
          b = w[N], b.graph.equals(_) ? d ? h = n(m, "has non-list arcs out") : b.predicate.value === Qt.rdf.first ? g ? h = n(m, "has multiple rdf:first arcs") : o.push(g = b) : b.predicate.value === Qt.rdf.rest ? v ? h = n(m, "has multiple rdf:rest arcs") : o.push(v = b) : y.length ? h = n(m, "can't be subject and object") : (d = b, f = "subject") : h = n(m, "not confined to single graph");
        for (let N = 0; N < y.length && !h; ++N)
          b = y[N], d ? h = n(m, "can't have coreferences") : b.predicate.value === Qt.rdf.rest ? E ? h = n(m, "has incoming rdf:rest arcs") : E = b : (d = b, f = "object");
        g ? l.unshift(g.object) : h = n(m, "has no list head"), m = E && E.subject;
      }
      h ? t = !1 : d && (r[d[f].value] = l);
    }), t && this.removeQuads(o), r;
  }
  /**
   * Returns `true` if the current dataset is a superset of the given dataset; in other words, returns `true` if
   * the given dataset is a subset of, i.e., is contained within, the current dataset.
   *
   * Blank Nodes will be normalized.
   */
  addAll(t) {
    if (t instanceof xe && (t = t.filtered), Array.isArray(t))
      this.addQuads(t);
    else if (t instanceof Jt && t._entityIndex === this._entityIndex)
      t._size !== 0 && (this._graphs = Ti(this._graphs, t._graphs), this._size = null);
    else
      for (const i of t)
        this.add(i);
    return this;
  }
  /**
   * Returns `true` if the current dataset is a superset of the given dataset; in other words, returns `true` if
   * the given dataset is a subset of, i.e., is contained within, the current dataset.
   *
   * Blank Nodes will be normalized.
   */
  contains(t) {
    if (t instanceof xe && (t = t.filtered), t === this)
      return !0;
    if (!(t instanceof Jt) || this._entityIndex !== t._entityIndex)
      return t.every((h) => this.has(h));
    const i = this._graphs, r = t._graphs;
    let n, s, o, a, l;
    for (const h in r) {
      if (!(n = i[h])) return !1;
      n = n.subjects;
      for (const d in s = r[h].subjects) {
        if (!(o = n[d])) return !1;
        for (const f in a = s[d]) {
          if (!(l = o[f])) return !1;
          for (const _ in a[f])
            if (!(_ in l)) return !1;
        }
      }
    }
    return !0;
  }
  /**
   * This method removes the quads in the current dataset that match the given arguments.
   *
   * The logic described in {@link https://rdf.js.org/dataset-spec/#quad-matching|Quad Matching} is applied for each
   * quad in this dataset, to select the quads which will be deleted.
   *
   * @param subject   The optional exact subject to match.
   * @param predicate The optional exact predicate to match.
   * @param object    The optional exact object to match.
   * @param graph     The optional exact graph to match.
   */
  deleteMatches(t, i, r, n) {
    for (const s of this.match(t, i, r, n))
      this.removeQuad(s);
    return this;
  }
  /**
   * Returns a new dataset that contains all quads from the current dataset that are not included in the given dataset.
   */
  difference(t) {
    if (t && t instanceof xe && (t = t.filtered), t === this)
      return new Jt({ entityIndex: this._entityIndex });
    if (t instanceof Jt && t._entityIndex === this._entityIndex) {
      const i = new Jt({ entityIndex: this._entityIndex }), r = Wa(this._graphs, t._graphs);
      return r && (i._graphs = r, i._size = null), i;
    }
    return this.filter((i) => !t.has(i));
  }
  /**
   * Returns true if the current dataset contains the same graph structure as the given dataset.
   *
   * Blank Nodes will be normalized.
   */
  equals(t) {
    return t instanceof xe && (t = t.filtered), t === this || this.size === t.size && this.contains(t);
  }
  /**
   * Creates a new dataset with all the quads that pass the test implemented by the provided `iteratee`.
   *
   * This method is aligned with Array.prototype.filter() in ECMAScript-262.
   */
  filter(t) {
    const i = new Jt({ entityIndex: this._entityIndex });
    for (const r of this)
      t(r, this) && i.add(r);
    return i;
  }
  /**
   * Returns a new dataset containing all quads from the current dataset that are also included in the given dataset.
   */
  intersection(t) {
    if (t instanceof xe && (t = t.filtered), t === this) {
      const i = new Jt({ entityIndex: this._entityIndex });
      return i._graphs = Ti(/* @__PURE__ */ Object.create(null), this._graphs), i._size = this._size, i;
    } else if (t instanceof Jt && this._entityIndex === t._entityIndex) {
      const i = new Jt({ entityIndex: this._entityIndex }), r = Ua(t._graphs, this._graphs);
      return r && (i._graphs = r, i._size = null), i;
    }
    return this.filter((i) => t.has(i));
  }
  /**
   * Returns a new dataset containing all quads returned by applying `iteratee` to each quad in the current dataset.
   */
  map(t) {
    const i = new Jt({ entityIndex: this._entityIndex });
    for (const r of this)
      i.add(t(r, this));
    return i;
  }
  /**
   * This method calls the `iteratee` method on each `quad` of the `Dataset`. The first time the `iteratee` method
   * is called, the `accumulator` value is the `initialValue`, or, if not given, equals the first quad of the `Dataset`.
   * The return value of each call to the `iteratee` method is used as the `accumulator` value for the next call.
   *
   * This method returns the return value of the last `iteratee` call.
   *
   * This method is aligned with `Array.prototype.reduce()` in ECMAScript-262.
   */
  reduce(t, i) {
    const r = this.readQuads();
    let n = i === void 0 ? r.next().value : i;
    for (const s of r)
      n = t(n, s, this);
    return n;
  }
  /**
   * Returns the set of quads within the dataset as a host-language-native sequence, for example an `Array` in
   * ECMAScript-262.
   *
   * Since a `Dataset` is an unordered set, the order of the quads within the returned sequence is arbitrary.
   */
  toArray() {
    return this.getQuads();
  }
  /**
   * Returns an N-Quads string representation of the dataset, preprocessed with the
   * {@link https://json-ld.github.io/normalization/spec/|RDF Dataset Normalization} algorithm.
   */
  toCanonical() {
    throw new Error("not implemented");
  }
  /**
   * Returns a stream that contains all quads of the dataset.
   */
  toStream() {
    return this.match();
  }
  /**
   * Returns an N-Quads string representation of the dataset.
   *
   * No prior normalization is required, therefore the results for the same quads may vary depending on the `Dataset`
   * implementation.
   */
  toString() {
    return new Fa().quadsToString(this);
  }
  /**
   * Returns a new `Dataset` that is a concatenation of this dataset and the quads given as an argument.
   */
  union(t) {
    const i = new Jt({ entityIndex: this._entityIndex });
    return i._graphs = Ti(/* @__PURE__ */ Object.create(null), this._graphs), i._size = this._size, i.addAll(t), i;
  }
  // ### Store is an iterable.
  // Can be used where iterables are expected: for...of loops, array spread operator,
  // `yield*`, and destructuring assignment (order is not guaranteed).
  *[Symbol.iterator]() {
    yield* this.readQuads();
  }
}
function fe(e, t, i = 0) {
  const r = t[i];
  if (r && !(r in e))
    return !1;
  let n = !1;
  for (const s in r ? { [r]: e[r] } : e) {
    const o = i === 2 ? null : fe(e[s], t, i + 1);
    o !== !1 && (n = n || /* @__PURE__ */ Object.create(null), n[s] = o);
  }
  return n;
}
class xe extends qa.Readable {
  constructor(t, i, r, n, s, o) {
    super({ objectMode: !0 }), Object.assign(this, { n3Store: t, subject: i, predicate: r, object: n, graph: s, options: o });
  }
  get filtered() {
    if (!this._filtered) {
      const { n3Store: t, graph: i, object: r, predicate: n, subject: s } = this, o = this._filtered = new Jt({ factory: t._factory, entityIndex: this.options.entityIndex });
      let a, l, h;
      if (s && !(a = o._termToNumericId(s)) || n && !(l = o._termToNumericId(n)) || r && !(h = o._termToNumericId(r)))
        return o;
      const d = t._getGraphs(i);
      for (const f in d) {
        let _, m, y, w;
        (w = d[f]) && (!a && l ? (m = fe(w.predicates, [l, h, a])) && (_ = fe(w.subjects, [a, l, h]), y = fe(w.objects, [h, a, l])) : h ? (y = fe(w.objects, [h, a, l])) && (_ = fe(w.subjects, [a, l, h]), m = fe(w.predicates, [l, h, a])) : (_ = fe(w.subjects, [a, l, h])) && (m = fe(w.predicates, [l, h, a]), y = fe(w.objects, [h, a, l])), _ && (o._graphs[f] = { subjects: _, predicates: m, objects: y }));
      }
      o._size = null;
    }
    return this._filtered;
  }
  get size() {
    return this.filtered.size;
  }
  _read(t) {
    t > 0 && !this[nn] && (this[nn] = this[Symbol.iterator]());
    const i = this[nn];
    for (; --t >= 0; ) {
      const { done: r, value: n } = i.next();
      if (r) {
        this.push(null);
        return;
      }
      this.push(n);
    }
  }
  addAll(t) {
    return this.filtered.addAll(t);
  }
  contains(t) {
    return this.filtered.contains(t);
  }
  deleteMatches(t, i, r, n) {
    return this.filtered.deleteMatches(t, i, r, n);
  }
  difference(t) {
    return this.filtered.difference(t);
  }
  equals(t) {
    return this.filtered.equals(t);
  }
  every(t, i, r, n, s) {
    return this.filtered.every(t, i, r, n, s);
  }
  filter(t) {
    return this.filtered.filter(t);
  }
  forEach(t, i, r, n, s) {
    return this.filtered.forEach(t, i, r, n, s);
  }
  import(t) {
    return this.filtered.import(t);
  }
  intersection(t) {
    return this.filtered.intersection(t);
  }
  map(t) {
    return this.filtered.map(t);
  }
  some(t, i, r, n, s) {
    return this.filtered.some(t, i, r, n, s);
  }
  toCanonical() {
    return this.filtered.toCanonical();
  }
  toStream() {
    return this._filtered ? this._filtered.toStream() : this.n3Store.match(this.subject, this.predicate, this.object, this.graph);
  }
  union(t) {
    return this._filtered ? this._filtered.union(t) : this.n3Store.match(this.subject, this.predicate, this.object, this.graph).addAll(t);
  }
  toArray() {
    return this._filtered ? this._filtered.toArray() : this.n3Store.getQuads(this.subject, this.predicate, this.object, this.graph);
  }
  reduce(t, i) {
    return this.filtered.reduce(t, i);
  }
  toString() {
    return new Fa().quadsToString(this);
  }
  add(t) {
    return this.filtered.add(t);
  }
  delete(t) {
    return this.filtered.delete(t);
  }
  has(t) {
    return this.filtered.has(t);
  }
  match(t, i, r, n) {
    return new xe(this.filtered, t, i, r, n, this.options);
  }
  *[Symbol.iterator]() {
    yield* this._filtered || this.n3Store.readQuads(this.subject, this.predicate, this.object, this.graph);
  }
}
var Ie = {}, Te = {}, Ce = {}, pe = {}, Ts;
function ah() {
  if (Ts) return pe;
  Ts = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.removeDotSegmentsOfPath = pe.removeDotSegments = pe.resolve = void 0;
  function e(n, s) {
    s = s || "";
    const o = s.indexOf("#");
    if (o > 0 && (s = s.substr(0, o)), !n.length) {
      if (s.indexOf(":") < 0)
        throw new Error(`Found invalid baseIRI '${s}' for value '${n}'`);
      return s;
    }
    if (n.startsWith("?")) {
      const m = s.indexOf("?");
      return m > 0 && (s = s.substr(0, m)), s + n;
    }
    if (n.startsWith("#"))
      return s + n;
    if (!s.length) {
      const m = n.indexOf(":");
      if (m < 0)
        throw new Error(`Found invalid relative IRI '${n}' for a missing baseIRI`);
      return i(n, m);
    }
    const a = n.indexOf(":");
    if (a >= 0) {
      const m = n.indexOf("/");
      if (m < 0 || a < m)
        return i(n, a);
    }
    const l = s.indexOf(":");
    if (l < 0)
      throw new Error(`Found invalid baseIRI '${s}' for value '${n}'`);
    const h = s.substr(0, l + 1);
    if (n.indexOf("//") === 0)
      return h + i(n, a);
    let d;
    if (s.indexOf("//", l) === l + 1) {
      if (d = s.indexOf("/", l + 3), d < 0)
        return s.length > l + 3 ? s + "/" + i(n, a) : h + i(n, a);
    } else if (d = s.indexOf("/", l + 1), d < 0)
      return h + i(n, a);
    if (n.indexOf("/") === 0)
      return s.substr(0, d) + t(n);
    let f = s.substr(d);
    const _ = f.lastIndexOf("/");
    return _ >= 0 && _ < f.length - 1 && (f = f.substr(0, _ + 1), n[0] === "." && n[1] !== "." && n[1] !== "/" && n[2] && (n = n.substr(1))), n = f + n, n = t(n), s.substr(0, d) + n;
  }
  pe.resolve = e;
  function t(n) {
    const s = [];
    let o = 0;
    for (; o < n.length; )
      switch (n[o]) {
        case "/":
          if (n[o + 1] === ".")
            if (n[o + 2] === ".") {
              if (!r(n[o + 3])) {
                s.push([]), o++;
                break;
              }
              s.pop(), n[o + 3] || s.push([]), o += 3;
            } else {
              if (!r(n[o + 2])) {
                s.push([]), o++;
                break;
              }
              n[o + 2] || s.push([]), o += 2;
            }
          else
            s.push([]), o++;
          break;
        case "#":
        case "?":
          s.length || s.push([]), s[s.length - 1].push(n.substr(o)), o = n.length;
          break;
        default:
          s.length || s.push([]), s[s.length - 1].push(n[o]), o++;
          break;
      }
    return "/" + s.map((a) => a.join("")).join("/");
  }
  pe.removeDotSegments = t;
  function i(n, s) {
    let o = s + 1;
    s >= 0 ? n[s + 1] === "/" && n[s + 2] === "/" && (o = s + 3) : n[0] === "/" && n[1] === "/" && (o = 2);
    const a = n.indexOf("/", o);
    if (a < 0)
      return n;
    const l = n.substr(0, a), h = n.substr(a);
    return l + t(h);
  }
  pe.removeDotSegmentsOfPath = i;
  function r(n) {
    return !n || n === "#" || n === "?" || n === "/";
  }
  return pe;
}
var Cs;
function oh() {
  return Cs || (Cs = 1, (function(e) {
    var t = Ce && Ce.__createBinding || (Object.create ? (function(r, n, s, o) {
      o === void 0 && (o = s);
      var a = Object.getOwnPropertyDescriptor(n, s);
      (!a || ("get" in a ? !n.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
        return n[s];
      } }), Object.defineProperty(r, o, a);
    }) : (function(r, n, s, o) {
      o === void 0 && (o = s), r[o] = n[s];
    })), i = Ce && Ce.__exportStar || function(r, n) {
      for (var s in r) s !== "default" && !Object.prototype.hasOwnProperty.call(n, s) && t(n, r, s);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), i(ah(), e);
  })(Ce)), Ce;
}
var Fe = {}, sn = {}, Fs;
function hh() {
  return Fs || (Fs = 1, (function(e) {
    /**
     * Character classes and associated utilities for the 5th edition of XML 1.0.
     *
     * @author Louis-Dominique Dubeau
     * @license MIT
     * @copyright Louis-Dominique Dubeau
     */
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHAR = `	
\r -퟿-�𐀀-􏿿`, e.S = ` 	\r
`, e.NAME_START_CHAR = ":A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿", e.NAME_CHAR = "-" + e.NAME_START_CHAR + ".0-9·̀-ͯ‿-⁀", e.CHAR_RE = new RegExp("^[" + e.CHAR + "]$", "u"), e.S_RE = new RegExp("^[" + e.S + "]+$", "u"), e.NAME_START_CHAR_RE = new RegExp("^[" + e.NAME_START_CHAR + "]$", "u"), e.NAME_CHAR_RE = new RegExp("^[" + e.NAME_CHAR + "]$", "u"), e.NAME_RE = new RegExp("^[" + e.NAME_START_CHAR + "][" + e.NAME_CHAR + "]*$", "u"), e.NMTOKEN_RE = new RegExp("^[" + e.NAME_CHAR + "]+$", "u");
    var t = 9, i = 10, r = 13, n = 32;
    e.S_LIST = [n, i, r, t];
    function s(h) {
      return h >= n && h <= 55295 || h === i || h === r || h === t || h >= 57344 && h <= 65533 || h >= 65536 && h <= 1114111;
    }
    e.isChar = s;
    function o(h) {
      return h === n || h === i || h === r || h === t;
    }
    e.isS = o;
    function a(h) {
      return h >= 65 && h <= 90 || h >= 97 && h <= 122 || h === 58 || h === 95 || h === 8204 || h === 8205 || h >= 192 && h <= 214 || h >= 216 && h <= 246 || h >= 248 && h <= 767 || h >= 880 && h <= 893 || h >= 895 && h <= 8191 || h >= 8304 && h <= 8591 || h >= 11264 && h <= 12271 || h >= 12289 && h <= 55295 || h >= 63744 && h <= 64975 || h >= 65008 && h <= 65533 || h >= 65536 && h <= 983039;
    }
    e.isNameStartChar = a;
    function l(h) {
      return a(h) || h >= 48 && h <= 57 || h === 45 || h === 46 || h === 183 || h >= 768 && h <= 879 || h >= 8255 && h <= 8256;
    }
    e.isNameChar = l;
  })(sn)), sn;
}
var an = {}, Gs;
function lh() {
  return Gs || (Gs = 1, (function(e) {
    /**
     * Character classes and associated utilities for the 2nd edition of XML 1.1.
     *
     * @author Louis-Dominique Dubeau
     * @license MIT
     * @copyright Louis-Dominique Dubeau
     */
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CHAR = "-퟿-�𐀀-􏿿", e.RESTRICTED_CHAR = "-\b\v\f---", e.S = ` 	\r
`, e.NAME_START_CHAR = ":A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿", e.NAME_CHAR = "-" + e.NAME_START_CHAR + ".0-9·̀-ͯ‿-⁀", e.CHAR_RE = new RegExp("^[" + e.CHAR + "]$", "u"), e.RESTRICTED_CHAR_RE = new RegExp("^[" + e.RESTRICTED_CHAR + "]$", "u"), e.S_RE = new RegExp("^[" + e.S + "]+$", "u"), e.NAME_START_CHAR_RE = new RegExp("^[" + e.NAME_START_CHAR + "]$", "u"), e.NAME_CHAR_RE = new RegExp("^[" + e.NAME_CHAR + "]$", "u"), e.NAME_RE = new RegExp("^[" + e.NAME_START_CHAR + "][" + e.NAME_CHAR + "]*$", "u"), e.NMTOKEN_RE = new RegExp("^[" + e.NAME_CHAR + "]+$", "u");
    var t = 9, i = 10, r = 13, n = 32;
    e.S_LIST = [n, i, r, t];
    function s(f) {
      return f >= 1 && f <= 55295 || f >= 57344 && f <= 65533 || f >= 65536 && f <= 1114111;
    }
    e.isChar = s;
    function o(f) {
      return f >= 1 && f <= 8 || f === 11 || f === 12 || f >= 14 && f <= 31 || f >= 127 && f <= 132 || f >= 134 && f <= 159;
    }
    e.isRestrictedChar = o;
    function a(f) {
      return f === 9 || f === 10 || f === 13 || f > 31 && f < 127 || f === 133 || f > 159 && f <= 55295 || f >= 57344 && f <= 65533 || f >= 65536 && f <= 1114111;
    }
    e.isCharAndNotRestricted = a;
    function l(f) {
      return f === n || f === i || f === r || f === t;
    }
    e.isS = l;
    function h(f) {
      return f >= 65 && f <= 90 || f >= 97 && f <= 122 || f === 58 || f === 95 || f === 8204 || f === 8205 || f >= 192 && f <= 214 || f >= 216 && f <= 246 || f >= 248 && f <= 767 || f >= 880 && f <= 893 || f >= 895 && f <= 8191 || f >= 8304 && f <= 8591 || f >= 11264 && f <= 12271 || f >= 12289 && f <= 55295 || f >= 63744 && f <= 64975 || f >= 65008 && f <= 65533 || f >= 65536 && f <= 983039;
    }
    e.isNameStartChar = h;
    function d(f) {
      return h(f) || f >= 48 && f <= 57 || f === 45 || f === 46 || f === 183 || f >= 768 && f <= 879 || f >= 8255 && f <= 8256;
    }
    e.isNameChar = d;
  })(an)), an;
}
var on = {}, Ds;
function uh() {
  return Ds || (Ds = 1, (function(e) {
    /**
     * Character class utilities for XML NS 1.0 edition 3.
     *
     * @author Louis-Dominique Dubeau
     * @license MIT
     * @copyright Louis-Dominique Dubeau
     */
    Object.defineProperty(e, "__esModule", { value: !0 }), e.NC_NAME_START_CHAR = "A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿", e.NC_NAME_CHAR = "-" + e.NC_NAME_START_CHAR + ".0-9·̀-ͯ‿-⁀", e.NC_NAME_START_CHAR_RE = new RegExp("^[" + e.NC_NAME_START_CHAR + "]$", "u"), e.NC_NAME_CHAR_RE = new RegExp("^[" + e.NC_NAME_CHAR + "]$", "u"), e.NC_NAME_RE = new RegExp("^[" + e.NC_NAME_START_CHAR + "][" + e.NC_NAME_CHAR + "]*$", "u");
    function t(r) {
      return r >= 65 && r <= 90 || r === 95 || r >= 97 && r <= 122 || r >= 192 && r <= 214 || r >= 216 && r <= 246 || r >= 248 && r <= 767 || r >= 880 && r <= 893 || r >= 895 && r <= 8191 || r >= 8204 && r <= 8205 || r >= 8304 && r <= 8591 || r >= 11264 && r <= 12271 || r >= 12289 && r <= 55295 || r >= 63744 && r <= 64975 || r >= 65008 && r <= 65533 || r >= 65536 && r <= 983039;
    }
    e.isNCNameStartChar = t;
    function i(r) {
      return t(r) || r === 45 || r === 46 || r >= 48 && r <= 57 || r === 183 || r >= 768 && r <= 879 || r >= 8255 && r <= 8256;
    }
    e.isNCNameChar = i;
  })(on)), on;
}
var Os;
function fh() {
  if (Os) return Fe;
  Os = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.SaxesParser = Fe.EVENTS = void 0;
  const e = hh(), t = lh(), i = uh();
  var r = e.isS, n = e.isChar, s = e.isNameStartChar, o = e.isNameChar, a = e.S_LIST, l = e.NAME_RE, h = t.isChar, d = i.isNCNameStartChar, f = i.isNCNameChar, _ = i.NC_NAME_RE;
  const m = "http://www.w3.org/XML/1998/namespace", y = "http://www.w3.org/2000/xmlns/", w = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
    __proto__: null,
    xml: m,
    xmlns: y
  }, b = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
    __proto__: null,
    amp: "&",
    gt: ">",
    lt: "<",
    quot: '"',
    apos: "'"
  }, g = -1, v = -2, E = 0, N = 1, M = 2, j = 3, U = 4, k = 5, lt = 6, G = 7, L = 8, Y = 9, D = 10, ht = 11, dt = 12, ft = 13, vt = 14, V = 15, pt = 16, R = 17, W = 18, rt = 19, Q = 20, _t = 21, bt = 22, Mt = 23, Et = 24, H = 25, X = 26, ct = 27, wt = 28, mt = 29, C = 30, F = 31, q = 32, tt = 33, nt = 34, it = 35, T = 36, J = 37, et = 38, z = 39, Pt = 40, Ut = 41, St = 42, Ht = 43, p = 44, u = 9, c = 10, S = 13, I = 32, B = 33, K = 34, xt = 38, Gt = 39, Rt = 45, Ct = 47, Nt = 59, he = 60, Ee = 61, $t = 62, Bt = 63, Vi = 91, ve = 93, qe = 133, oi = 8232, x = (qt) => qt === K || qt === Gt, A = [K, Gt], st = [...A, Vi, $t], at = [...A, he, ve], yt = [Ee, Bt, ...a], Wt = [...a, $t, xt, he];
  function Vt(qt, P, O) {
    switch (P) {
      case "xml":
        O !== m && qt.fail(`xml prefix must be bound to ${m}.`);
        break;
      case "xmlns":
        O !== y && qt.fail(`xmlns prefix must be bound to ${y}.`);
        break;
    }
    switch (O) {
      case y:
        qt.fail(P === "" ? `the default namespace may not be set to ${O}.` : `may not assign a prefix (even "xmlns") to the URI ${y}.`);
        break;
      case m:
        switch (P) {
          case "xml":
            break;
          case "":
            qt.fail(`the default namespace may not be set to ${O}.`);
            break;
          default:
            qt.fail("may not assign the xml namespace to another prefix.");
        }
        break;
    }
  }
  function Xi(qt, P) {
    for (const O of Object.keys(P))
      Vt(qt, O, P[O]);
  }
  const _e = (qt) => _.test(qt), Ki = (qt) => l.test(qt), ge = 0, hi = 1, Ue = 2;
  Fe.EVENTS = [
    "xmldecl",
    "text",
    "processinginstruction",
    "doctype",
    "comment",
    "opentagstart",
    "attribute",
    "opentag",
    "closetag",
    "cdata",
    "error",
    "end",
    "ready"
  ];
  const We = {
    xmldecl: "xmldeclHandler",
    text: "textHandler",
    processinginstruction: "piHandler",
    doctype: "doctypeHandler",
    comment: "commentHandler",
    opentagstart: "openTagStartHandler",
    attribute: "attributeHandler",
    opentag: "openTagHandler",
    closetag: "closeTagHandler",
    cdata: "cdataHandler",
    error: "errorHandler",
    end: "endHandler",
    ready: "readyHandler"
  };
  class li {
    /**
     * Indicates whether or not the parser is closed. If ``true``, wait for
     * the ``ready`` event to write again.
     */
    get closed() {
      return this._closed;
    }
    /**
     * @param opt The parser options.
     */
    constructor(P) {
      this.opt = P ?? {}, this.fragmentOpt = !!this.opt.fragment;
      const O = this.xmlnsOpt = !!this.opt.xmlns;
      if (this.trackPosition = this.opt.position !== !1, this.fileName = this.opt.fileName, O) {
        this.nameStartCheck = d, this.nameCheck = f, this.isName = _e, this.processAttribs = this.processAttribsNS, this.pushAttrib = this.pushAttribNS, this.ns = Object.assign({ __proto__: null }, w);
        const $ = this.opt.additionalNamespaces;
        $ != null && (Xi(this, $), Object.assign(this.ns, $));
      } else
        this.nameStartCheck = s, this.nameCheck = o, this.isName = Ki, this.processAttribs = this.processAttribsPlain, this.pushAttrib = this.pushAttribPlain;
      this.stateTable = [
        /* eslint-disable @typescript-eslint/unbound-method */
        this.sBegin,
        this.sBeginWhitespace,
        this.sDoctype,
        this.sDoctypeQuote,
        this.sDTD,
        this.sDTDQuoted,
        this.sDTDOpenWaka,
        this.sDTDOpenWakaBang,
        this.sDTDComment,
        this.sDTDCommentEnding,
        this.sDTDCommentEnded,
        this.sDTDPI,
        this.sDTDPIEnding,
        this.sText,
        this.sEntity,
        this.sOpenWaka,
        this.sOpenWakaBang,
        this.sComment,
        this.sCommentEnding,
        this.sCommentEnded,
        this.sCData,
        this.sCDataEnding,
        this.sCDataEnding2,
        this.sPIFirstChar,
        this.sPIRest,
        this.sPIBody,
        this.sPIEnding,
        this.sXMLDeclNameStart,
        this.sXMLDeclName,
        this.sXMLDeclEq,
        this.sXMLDeclValueStart,
        this.sXMLDeclValue,
        this.sXMLDeclSeparator,
        this.sXMLDeclEnding,
        this.sOpenTag,
        this.sOpenTagSlash,
        this.sAttrib,
        this.sAttribName,
        this.sAttribNameSawWhite,
        this.sAttribValue,
        this.sAttribValueQuoted,
        this.sAttribValueClosed,
        this.sAttribValueUnquoted,
        this.sCloseTag,
        this.sCloseTagSawWhite
        /* eslint-enable @typescript-eslint/unbound-method */
      ], this._init();
    }
    _init() {
      var P;
      this.openWakaBang = "", this.text = "", this.name = "", this.piTarget = "", this.entity = "", this.q = null, this.tags = [], this.tag = null, this.topNS = null, this.chunk = "", this.chunkPosition = 0, this.i = 0, this.prevI = 0, this.carriedFromPrevious = void 0, this.forbiddenState = ge, this.attribList = [];
      const { fragmentOpt: O } = this;
      this.state = O ? ft : E, this.reportedTextBeforeRoot = this.reportedTextAfterRoot = this.closedRoot = this.sawRoot = O, this.xmlDeclPossible = !O, this.xmlDeclExpects = ["version"], this.entityReturnState = void 0;
      let { defaultXMLVersion: $ } = this.opt;
      if ($ === void 0) {
        if (this.opt.forceXMLVersion === !0)
          throw new Error("forceXMLVersion set but defaultXMLVersion is not set");
        $ = "1.0";
      }
      this.setXMLVersion($), this.positionAtNewLine = 0, this.doctype = !1, this._closed = !1, this.xmlDecl = {
        version: void 0,
        encoding: void 0,
        standalone: void 0
      }, this.line = 1, this.column = 0, this.ENTITIES = Object.create(b), (P = this.readyHandler) === null || P === void 0 || P.call(this);
    }
    /**
     * The stream position the parser is currently looking at. This field is
     * zero-based.
     *
     * This field is not based on counting Unicode characters but is to be
     * interpreted as a plain index into a JavaScript string.
     */
    get position() {
      return this.chunkPosition + this.i;
    }
    /**
     * The column number of the next character to be read by the parser.  *
     * This field is zero-based. (The first column in a line is 0.)
     *
     * This field reports the index at which the next character would be in the
     * line if the line were represented as a JavaScript string.  Note that this
     * *can* be different to a count based on the number of *Unicode characters*
     * due to how JavaScript handles astral plane characters.
     *
     * See [[column]] for a number that corresponds to a count of Unicode
     * characters.
     */
    get columnIndex() {
      return this.position - this.positionAtNewLine;
    }
    /**
     * Set an event listener on an event. The parser supports one handler per
     * event type. If you try to set an event handler over an existing handler,
     * the old handler is silently overwritten.
     *
     * @param name The event to listen to.
     *
     * @param handler The handler to set.
     */
    on(P, O) {
      this[We[P]] = O;
    }
    /**
     * Unset an event handler.
     *
     * @parma name The event to stop listening to.
     */
    off(P) {
      this[We[P]] = void 0;
    }
    /**
     * Make an error object. The error object will have a message that contains
     * the ``fileName`` option passed at the creation of the parser. If position
     * tracking was turned on, it will also have line and column number
     * information.
     *
     * @param message The message describing the error to report.
     *
     * @returns An error object with a properly formatted message.
     */
    makeError(P) {
      var O;
      let $ = (O = this.fileName) !== null && O !== void 0 ? O : "";
      return this.trackPosition && ($.length > 0 && ($ += ":"), $ += `${this.line}:${this.column}`), $.length > 0 && ($ += ": "), new Error($ + P);
    }
    /**
     * Report a parsing error. This method is made public so that client code may
     * check for issues that are outside the scope of this project and can report
     * errors.
     *
     * @param message The error to report.
     *
     * @returns this
     */
    fail(P) {
      const O = this.makeError(P), $ = this.errorHandler;
      if ($ === void 0)
        throw O;
      return $(O), this;
    }
    /**
     * Write a XML data to the parser.
     *
     * @param chunk The XML data to write.
     *
     * @returns this
     */
    // We do need object for the type here. Yes, it often causes problems
    // but not in this case.
    write(P) {
      if (this.closed)
        return this.fail("cannot write after close; assign an onready handler.");
      let O = !1;
      P === null ? (O = !0, P = "") : typeof P == "object" && (P = P.toString()), this.carriedFromPrevious !== void 0 && (P = `${this.carriedFromPrevious}${P}`, this.carriedFromPrevious = void 0);
      let $ = P.length;
      const gt = P.charCodeAt($ - 1);
      !O && // A trailing CR or surrogate must be carried over to the next
      // chunk.
      (gt === S || gt >= 55296 && gt <= 56319) && (this.carriedFromPrevious = P[$ - 1], $--, P = P.slice(0, $));
      const { stateTable: At } = this;
      for (this.chunk = P, this.i = 0; this.i < $; )
        At[this.state].call(this);
      return this.chunkPosition += $, O ? this.end() : this;
    }
    /**
     * Close the current stream. Perform final well-formedness checks and reset
     * the parser tstate.
     *
     * @returns this
     */
    close() {
      return this.write(null);
    }
    /**
     * Get a single code point out of the current chunk. This updates the current
     * position if we do position tracking.
     *
     * This is the algorithm to use for XML 1.0.
     *
     * @returns The character read.
     */
    getCode10() {
      const { chunk: P, i: O } = this;
      if (this.prevI = O, this.i = O + 1, O >= P.length)
        return g;
      const $ = P.charCodeAt(O);
      if (this.column++, $ < 55296) {
        if ($ >= I || $ === u)
          return $;
        switch ($) {
          case c:
            return this.line++, this.column = 0, this.positionAtNewLine = this.position, c;
          case S:
            return P.charCodeAt(O + 1) === c && (this.i = O + 2), this.line++, this.column = 0, this.positionAtNewLine = this.position, v;
          default:
            return this.fail("disallowed character."), $;
        }
      }
      if ($ > 56319)
        return $ >= 57344 && $ <= 65533 || this.fail("disallowed character."), $;
      const gt = 65536 + ($ - 55296) * 1024 + (P.charCodeAt(O + 1) - 56320);
      return this.i = O + 2, gt > 1114111 && this.fail("disallowed character."), gt;
    }
    /**
     * Get a single code point out of the current chunk. This updates the current
     * position if we do position tracking.
     *
     * This is the algorithm to use for XML 1.1.
     *
     * @returns {number} The character read.
     */
    getCode11() {
      const { chunk: P, i: O } = this;
      if (this.prevI = O, this.i = O + 1, O >= P.length)
        return g;
      const $ = P.charCodeAt(O);
      if (this.column++, $ < 55296) {
        if ($ > 31 && $ < 127 || $ > 159 && $ !== oi || $ === u)
          return $;
        switch ($) {
          case c:
            return this.line++, this.column = 0, this.positionAtNewLine = this.position, c;
          case S: {
            const At = P.charCodeAt(O + 1);
            (At === c || At === qe) && (this.i = O + 2);
          }
          /* yes, fall through */
          case qe:
          // 0x85
          case oi:
            return this.line++, this.column = 0, this.positionAtNewLine = this.position, v;
          default:
            return this.fail("disallowed character."), $;
        }
      }
      if ($ > 56319)
        return $ >= 57344 && $ <= 65533 || this.fail("disallowed character."), $;
      const gt = 65536 + ($ - 55296) * 1024 + (P.charCodeAt(O + 1) - 56320);
      return this.i = O + 2, gt > 1114111 && this.fail("disallowed character."), gt;
    }
    /**
     * Like ``getCode`` but with the return value normalized so that ``NL`` is
     * returned for ``NL_LIKE``.
     */
    getCodeNorm() {
      const P = this.getCode();
      return P === v ? c : P;
    }
    unget() {
      this.i = this.prevI, this.column--;
    }
    /**
     * Capture characters into a buffer until encountering one of a set of
     * characters.
     *
     * @param chars An array of codepoints. Encountering a character in the array
     * ends the capture. (``chars`` may safely contain ``NL``.)
     *
     * @return The character code that made the capture end, or ``EOC`` if we hit
     * the end of the chunk. The return value cannot be NL_LIKE: NL is returned
     * instead.
     */
    captureTo(P) {
      let { i: O } = this;
      const { chunk: $ } = this;
      for (; ; ) {
        const gt = this.getCode(), At = gt === v, Ft = At ? c : gt;
        if (Ft === g || P.includes(Ft))
          return this.text += $.slice(O, this.prevI), Ft;
        At && (this.text += `${$.slice(O, this.prevI)}
`, O = this.i);
      }
    }
    /**
     * Capture characters into a buffer until encountering a character.
     *
     * @param char The codepoint that ends the capture. **NOTE ``char`` MAY NOT
     * CONTAIN ``NL``.** Passing ``NL`` will result in buggy behavior.
     *
     * @return ``true`` if we ran into the character. Otherwise, we ran into the
     * end of the current chunk.
     */
    captureToChar(P) {
      let { i: O } = this;
      const { chunk: $ } = this;
      for (; ; ) {
        let gt = this.getCode();
        switch (gt) {
          case v:
            this.text += `${$.slice(O, this.prevI)}
`, O = this.i, gt = c;
            break;
          case g:
            return this.text += $.slice(O), !1;
        }
        if (gt === P)
          return this.text += $.slice(O, this.prevI), !0;
      }
    }
    /**
     * Capture characters that satisfy ``isNameChar`` into the ``name`` field of
     * this parser.
     *
     * @return The character code that made the test fail, or ``EOC`` if we hit
     * the end of the chunk. The return value cannot be NL_LIKE: NL is returned
     * instead.
     */
    captureNameChars() {
      const { chunk: P, i: O } = this;
      for (; ; ) {
        const $ = this.getCode();
        if ($ === g)
          return this.name += P.slice(O), g;
        if (!o($))
          return this.name += P.slice(O, this.prevI), $ === v ? c : $;
      }
    }
    /**
     * Skip white spaces.
     *
     * @return The character that ended the skip, or ``EOC`` if we hit
     * the end of the chunk. The return value cannot be NL_LIKE: NL is returned
     * instead.
     */
    skipSpaces() {
      for (; ; ) {
        const P = this.getCodeNorm();
        if (P === g || !r(P))
          return P;
      }
    }
    setXMLVersion(P) {
      this.currentXMLVersion = P, P === "1.0" ? (this.isChar = n, this.getCode = this.getCode10) : (this.isChar = h, this.getCode = this.getCode11);
    }
    // STATE ENGINE METHODS
    // This needs to be a state separate from S_BEGIN_WHITESPACE because we want
    // to be sure never to come back to this state later.
    sBegin() {
      this.chunk.charCodeAt(0) === 65279 && (this.i++, this.column++), this.state = N;
    }
    sBeginWhitespace() {
      const P = this.i, O = this.skipSpaces();
      switch (this.prevI !== P && (this.xmlDeclPossible = !1), O) {
        case he:
          if (this.state = V, this.text.length !== 0)
            throw new Error("no-empty text at start");
          break;
        case g:
          break;
        default:
          this.unget(), this.state = ft, this.xmlDeclPossible = !1;
      }
    }
    sDoctype() {
      var P;
      const O = this.captureTo(st);
      switch (O) {
        case $t: {
          (P = this.doctypeHandler) === null || P === void 0 || P.call(this, this.text), this.text = "", this.state = ft, this.doctype = !0;
          break;
        }
        case g:
          break;
        default:
          this.text += String.fromCodePoint(O), O === Vi ? this.state = U : x(O) && (this.state = j, this.q = O);
      }
    }
    sDoctypeQuote() {
      const P = this.q;
      this.captureToChar(P) && (this.text += String.fromCodePoint(P), this.q = null, this.state = M);
    }
    sDTD() {
      const P = this.captureTo(at);
      P !== g && (this.text += String.fromCodePoint(P), P === ve ? this.state = M : P === he ? this.state = lt : x(P) && (this.state = k, this.q = P));
    }
    sDTDQuoted() {
      const P = this.q;
      this.captureToChar(P) && (this.text += String.fromCodePoint(P), this.state = U, this.q = null);
    }
    sDTDOpenWaka() {
      const P = this.getCodeNorm();
      switch (this.text += String.fromCodePoint(P), P) {
        case B:
          this.state = G, this.openWakaBang = "";
          break;
        case Bt:
          this.state = ht;
          break;
        default:
          this.state = U;
      }
    }
    sDTDOpenWakaBang() {
      const P = String.fromCodePoint(this.getCodeNorm()), O = this.openWakaBang += P;
      this.text += P, O !== "-" && (this.state = O === "--" ? L : U, this.openWakaBang = "");
    }
    sDTDComment() {
      this.captureToChar(Rt) && (this.text += "-", this.state = Y);
    }
    sDTDCommentEnding() {
      const P = this.getCodeNorm();
      this.text += String.fromCodePoint(P), this.state = P === Rt ? D : L;
    }
    sDTDCommentEnded() {
      const P = this.getCodeNorm();
      this.text += String.fromCodePoint(P), P === $t ? this.state = U : (this.fail("malformed comment."), this.state = L);
    }
    sDTDPI() {
      this.captureToChar(Bt) && (this.text += "?", this.state = dt);
    }
    sDTDPIEnding() {
      const P = this.getCodeNorm();
      this.text += String.fromCodePoint(P), P === $t && (this.state = U);
    }
    sText() {
      this.tags.length !== 0 ? this.handleTextInRoot() : this.handleTextOutsideRoot();
    }
    sEntity() {
      let { i: P } = this;
      const { chunk: O } = this;
      t:
        for (; ; )
          switch (this.getCode()) {
            case v:
              this.entity += `${O.slice(P, this.prevI)}
`, P = this.i;
              break;
            case Nt: {
              const { entityReturnState: $ } = this, gt = this.entity + O.slice(P, this.prevI);
              this.state = $;
              let At;
              gt === "" ? (this.fail("empty entity name."), At = "&;") : (At = this.parseEntity(gt), this.entity = ""), ($ !== ft || this.textHandler !== void 0) && (this.text += At);
              break t;
            }
            case g:
              this.entity += O.slice(P);
              break t;
          }
    }
    sOpenWaka() {
      const P = this.getCode();
      if (s(P))
        this.state = nt, this.unget(), this.xmlDeclPossible = !1;
      else
        switch (P) {
          case Ct:
            this.state = Ht, this.xmlDeclPossible = !1;
            break;
          case B:
            this.state = pt, this.openWakaBang = "", this.xmlDeclPossible = !1;
            break;
          case Bt:
            this.state = Mt;
            break;
          default:
            this.fail("disallowed character in tag name"), this.state = ft, this.xmlDeclPossible = !1;
        }
    }
    sOpenWakaBang() {
      switch (this.openWakaBang += String.fromCodePoint(this.getCodeNorm()), this.openWakaBang) {
        case "[CDATA[":
          !this.sawRoot && !this.reportedTextBeforeRoot && (this.fail("text data outside of root node."), this.reportedTextBeforeRoot = !0), this.closedRoot && !this.reportedTextAfterRoot && (this.fail("text data outside of root node."), this.reportedTextAfterRoot = !0), this.state = Q, this.openWakaBang = "";
          break;
        case "--":
          this.state = R, this.openWakaBang = "";
          break;
        case "DOCTYPE":
          this.state = M, (this.doctype || this.sawRoot) && this.fail("inappropriately located doctype declaration."), this.openWakaBang = "";
          break;
        default:
          this.openWakaBang.length >= 7 && this.fail("incorrect syntax.");
      }
    }
    sComment() {
      this.captureToChar(Rt) && (this.state = W);
    }
    sCommentEnding() {
      var P;
      const O = this.getCodeNorm();
      O === Rt ? (this.state = rt, (P = this.commentHandler) === null || P === void 0 || P.call(this, this.text), this.text = "") : (this.text += `-${String.fromCodePoint(O)}`, this.state = R);
    }
    sCommentEnded() {
      const P = this.getCodeNorm();
      P !== $t ? (this.fail("malformed comment."), this.text += `--${String.fromCodePoint(P)}`, this.state = R) : this.state = ft;
    }
    sCData() {
      this.captureToChar(ve) && (this.state = _t);
    }
    sCDataEnding() {
      const P = this.getCodeNorm();
      P === ve ? this.state = bt : (this.text += `]${String.fromCodePoint(P)}`, this.state = Q);
    }
    sCDataEnding2() {
      var P;
      const O = this.getCodeNorm();
      switch (O) {
        case $t: {
          (P = this.cdataHandler) === null || P === void 0 || P.call(this, this.text), this.text = "", this.state = ft;
          break;
        }
        case ve:
          this.text += "]";
          break;
        default:
          this.text += `]]${String.fromCodePoint(O)}`, this.state = Q;
      }
    }
    // We need this separate state to check the first character fo the pi target
    // with this.nameStartCheck which allows less characters than this.nameCheck.
    sPIFirstChar() {
      const P = this.getCodeNorm();
      this.nameStartCheck(P) ? (this.piTarget += String.fromCodePoint(P), this.state = Et) : P === Bt || r(P) ? (this.fail("processing instruction without a target."), this.state = P === Bt ? X : H) : (this.fail("disallowed character in processing instruction name."), this.piTarget += String.fromCodePoint(P), this.state = Et);
    }
    sPIRest() {
      const { chunk: P, i: O } = this;
      for (; ; ) {
        const $ = this.getCodeNorm();
        if ($ === g) {
          this.piTarget += P.slice(O);
          return;
        }
        if (!this.nameCheck($)) {
          this.piTarget += P.slice(O, this.prevI);
          const gt = $ === Bt;
          gt || r($) ? this.piTarget === "xml" ? (this.xmlDeclPossible || this.fail("an XML declaration must be at the start of the document."), this.state = gt ? tt : ct) : this.state = gt ? X : H : (this.fail("disallowed character in processing instruction name."), this.piTarget += String.fromCodePoint($));
          break;
        }
      }
    }
    sPIBody() {
      if (this.text.length === 0) {
        const P = this.getCodeNorm();
        P === Bt ? this.state = X : r(P) || (this.text = String.fromCodePoint(P));
      } else this.captureToChar(Bt) && (this.state = X);
    }
    sPIEnding() {
      var P;
      const O = this.getCodeNorm();
      if (O === $t) {
        const { piTarget: $ } = this;
        $.toLowerCase() === "xml" && this.fail("the XML declaration must appear at the start of the document."), (P = this.piHandler) === null || P === void 0 || P.call(this, {
          target: $,
          body: this.text
        }), this.piTarget = this.text = "", this.state = ft;
      } else O === Bt ? this.text += "?" : (this.text += `?${String.fromCodePoint(O)}`, this.state = H);
      this.xmlDeclPossible = !1;
    }
    sXMLDeclNameStart() {
      const P = this.skipSpaces();
      if (P === Bt) {
        this.state = tt;
        return;
      }
      P !== g && (this.state = wt, this.name = String.fromCodePoint(P));
    }
    sXMLDeclName() {
      const P = this.captureTo(yt);
      if (P === Bt) {
        this.state = tt, this.name += this.text, this.text = "", this.fail("XML declaration is incomplete.");
        return;
      }
      if (r(P) || P === Ee) {
        if (this.name += this.text, this.text = "", !this.xmlDeclExpects.includes(this.name))
          switch (this.name.length) {
            case 0:
              this.fail("did not expect any more name/value pairs.");
              break;
            case 1:
              this.fail(`expected the name ${this.xmlDeclExpects[0]}.`);
              break;
            default:
              this.fail(`expected one of ${this.xmlDeclExpects.join(", ")}`);
          }
        this.state = P === Ee ? C : mt;
      }
    }
    sXMLDeclEq() {
      const P = this.getCodeNorm();
      if (P === Bt) {
        this.state = tt, this.fail("XML declaration is incomplete.");
        return;
      }
      r(P) || (P !== Ee && this.fail("value required."), this.state = C);
    }
    sXMLDeclValueStart() {
      const P = this.getCodeNorm();
      if (P === Bt) {
        this.state = tt, this.fail("XML declaration is incomplete.");
        return;
      }
      r(P) || (x(P) ? this.q = P : (this.fail("value must be quoted."), this.q = I), this.state = F);
    }
    sXMLDeclValue() {
      const P = this.captureTo([this.q, Bt]);
      if (P === Bt) {
        this.state = tt, this.text = "", this.fail("XML declaration is incomplete.");
        return;
      }
      if (P === g)
        return;
      const O = this.text;
      switch (this.text = "", this.name) {
        case "version": {
          this.xmlDeclExpects = ["encoding", "standalone"];
          const $ = O;
          this.xmlDecl.version = $, /^1\.[0-9]+$/.test($) ? this.opt.forceXMLVersion || this.setXMLVersion($) : this.fail("version number must match /^1\\.[0-9]+$/.");
          break;
        }
        case "encoding":
          /^[A-Za-z][A-Za-z0-9._-]*$/.test(O) || this.fail("encoding value must match 	/^[A-Za-z0-9][A-Za-z0-9._-]*$/."), this.xmlDeclExpects = ["standalone"], this.xmlDecl.encoding = O;
          break;
        case "standalone":
          O !== "yes" && O !== "no" && this.fail('standalone value must match "yes" or "no".'), this.xmlDeclExpects = [], this.xmlDecl.standalone = O;
          break;
      }
      this.name = "", this.state = q;
    }
    sXMLDeclSeparator() {
      const P = this.getCodeNorm();
      if (P === Bt) {
        this.state = tt;
        return;
      }
      r(P) || (this.fail("whitespace required."), this.unget()), this.state = ct;
    }
    sXMLDeclEnding() {
      var P;
      this.getCodeNorm() === $t ? (this.piTarget !== "xml" ? this.fail("processing instructions are not allowed before root.") : this.name !== "version" && this.xmlDeclExpects.includes("version") && this.fail("XML declaration must contain a version."), (P = this.xmldeclHandler) === null || P === void 0 || P.call(this, this.xmlDecl), this.name = "", this.piTarget = this.text = "", this.state = ft) : this.fail("The character ? is disallowed anywhere in XML declarations."), this.xmlDeclPossible = !1;
    }
    sOpenTag() {
      var P;
      const O = this.captureNameChars();
      if (O === g)
        return;
      const $ = this.tag = {
        name: this.name,
        attributes: /* @__PURE__ */ Object.create(null)
      };
      switch (this.name = "", this.xmlnsOpt && (this.topNS = $.ns = /* @__PURE__ */ Object.create(null)), (P = this.openTagStartHandler) === null || P === void 0 || P.call(this, $), this.sawRoot = !0, !this.fragmentOpt && this.closedRoot && this.fail("documents may contain only one root."), O) {
        case $t:
          this.openTag();
          break;
        case Ct:
          this.state = it;
          break;
        default:
          r(O) || this.fail("disallowed character in tag name."), this.state = T;
      }
    }
    sOpenTagSlash() {
      this.getCode() === $t ? this.openSelfClosingTag() : (this.fail("forward-slash in opening tag not followed by >."), this.state = T);
    }
    sAttrib() {
      const P = this.skipSpaces();
      P !== g && (s(P) ? (this.unget(), this.state = J) : P === $t ? this.openTag() : P === Ct ? this.state = it : this.fail("disallowed character in attribute name."));
    }
    sAttribName() {
      const P = this.captureNameChars();
      P === Ee ? this.state = z : r(P) ? this.state = et : P === $t ? (this.fail("attribute without value."), this.pushAttrib(this.name, this.name), this.name = this.text = "", this.openTag()) : P !== g && this.fail("disallowed character in attribute name.");
    }
    sAttribNameSawWhite() {
      const P = this.skipSpaces();
      switch (P) {
        case g:
          return;
        case Ee:
          this.state = z;
          break;
        default:
          this.fail("attribute without value."), this.text = "", this.name = "", P === $t ? this.openTag() : s(P) ? (this.unget(), this.state = J) : (this.fail("disallowed character in attribute name."), this.state = T);
      }
    }
    sAttribValue() {
      const P = this.getCodeNorm();
      x(P) ? (this.q = P, this.state = Pt) : r(P) || (this.fail("unquoted attribute value."), this.state = St, this.unget());
    }
    sAttribValueQuoted() {
      const { q: P, chunk: O } = this;
      let { i: $ } = this;
      for (; ; )
        switch (this.getCode()) {
          case P:
            this.pushAttrib(this.name, this.text + O.slice($, this.prevI)), this.name = this.text = "", this.q = null, this.state = Ut;
            return;
          case xt:
            this.text += O.slice($, this.prevI), this.state = vt, this.entityReturnState = Pt;
            return;
          case c:
          case v:
          case u:
            this.text += `${O.slice($, this.prevI)} `, $ = this.i;
            break;
          case he:
            this.text += O.slice($, this.prevI), this.fail("disallowed character.");
            return;
          case g:
            this.text += O.slice($);
            return;
        }
    }
    sAttribValueClosed() {
      const P = this.getCodeNorm();
      r(P) ? this.state = T : P === $t ? this.openTag() : P === Ct ? this.state = it : s(P) ? (this.fail("no whitespace between attributes."), this.unget(), this.state = J) : this.fail("disallowed character in attribute name.");
    }
    sAttribValueUnquoted() {
      const P = this.captureTo(Wt);
      switch (P) {
        case xt:
          this.state = vt, this.entityReturnState = St;
          break;
        case he:
          this.fail("disallowed character.");
          break;
        case g:
          break;
        default:
          this.text.includes("]]>") && this.fail('the string "]]>" is disallowed in char data.'), this.pushAttrib(this.name, this.text), this.name = this.text = "", P === $t ? this.openTag() : this.state = T;
      }
    }
    sCloseTag() {
      const P = this.captureNameChars();
      P === $t ? this.closeTag() : r(P) ? this.state = p : P !== g && this.fail("disallowed character in closing tag.");
    }
    sCloseTagSawWhite() {
      switch (this.skipSpaces()) {
        case $t:
          this.closeTag();
          break;
        case g:
          break;
        default:
          this.fail("disallowed character in closing tag.");
      }
    }
    // END OF STATE ENGINE METHODS
    handleTextInRoot() {
      let { i: P, forbiddenState: O } = this;
      const { chunk: $, textHandler: gt } = this;
      t:
        for (; ; )
          switch (this.getCode()) {
            case he: {
              if (this.state = V, gt !== void 0) {
                const { text: At } = this, Ft = $.slice(P, this.prevI);
                At.length !== 0 ? (gt(At + Ft), this.text = "") : Ft.length !== 0 && gt(Ft);
              }
              O = ge;
              break t;
            }
            case xt:
              this.state = vt, this.entityReturnState = ft, gt !== void 0 && (this.text += $.slice(P, this.prevI)), O = ge;
              break t;
            case ve:
              switch (O) {
                case ge:
                  O = hi;
                  break;
                case hi:
                  O = Ue;
                  break;
                case Ue:
                  break;
                default:
                  throw new Error("impossible state");
              }
              break;
            case $t:
              O === Ue && this.fail('the string "]]>" is disallowed in char data.'), O = ge;
              break;
            case v:
              gt !== void 0 && (this.text += `${$.slice(P, this.prevI)}
`), P = this.i, O = ge;
              break;
            case g:
              gt !== void 0 && (this.text += $.slice(P));
              break t;
            default:
              O = ge;
          }
      this.forbiddenState = O;
    }
    handleTextOutsideRoot() {
      let { i: P } = this;
      const { chunk: O, textHandler: $ } = this;
      let gt = !1;
      t:
        for (; ; ) {
          const At = this.getCode();
          switch (At) {
            case he: {
              if (this.state = V, $ !== void 0) {
                const { text: Ft } = this, Xt = O.slice(P, this.prevI);
                Ft.length !== 0 ? ($(Ft + Xt), this.text = "") : Xt.length !== 0 && $(Xt);
              }
              break t;
            }
            case xt:
              this.state = vt, this.entityReturnState = ft, $ !== void 0 && (this.text += O.slice(P, this.prevI)), gt = !0;
              break t;
            case v:
              $ !== void 0 && (this.text += `${O.slice(P, this.prevI)}
`), P = this.i;
              break;
            case g:
              $ !== void 0 && (this.text += O.slice(P));
              break t;
            default:
              r(At) || (gt = !0);
          }
        }
      gt && (!this.sawRoot && !this.reportedTextBeforeRoot && (this.fail("text data outside of root node."), this.reportedTextBeforeRoot = !0), this.closedRoot && !this.reportedTextAfterRoot && (this.fail("text data outside of root node."), this.reportedTextAfterRoot = !0));
    }
    pushAttribNS(P, O) {
      var $;
      const { prefix: gt, local: At } = this.qname(P), Ft = { name: P, prefix: gt, local: At, value: O };
      if (this.attribList.push(Ft), ($ = this.attributeHandler) === null || $ === void 0 || $.call(this, Ft), gt === "xmlns") {
        const Xt = O.trim();
        this.currentXMLVersion === "1.0" && Xt === "" && this.fail("invalid attempt to undefine prefix in XML 1.0"), this.topNS[At] = Xt, Vt(this, At, Xt);
      } else if (P === "xmlns") {
        const Xt = O.trim();
        this.topNS[""] = Xt, Vt(this, "", Xt);
      }
    }
    pushAttribPlain(P, O) {
      var $;
      const gt = { name: P, value: O };
      this.attribList.push(gt), ($ = this.attributeHandler) === null || $ === void 0 || $.call(this, gt);
    }
    /**
     * End parsing. This performs final well-formedness checks and resets the
     * parser to a clean state.
     *
     * @returns this
     */
    end() {
      var P, O;
      this.sawRoot || this.fail("document must contain a root element.");
      const { tags: $ } = this;
      for (; $.length > 0; ) {
        const At = $.pop();
        this.fail(`unclosed tag: ${At.name}`);
      }
      this.state !== E && this.state !== ft && this.fail("unexpected end.");
      const { text: gt } = this;
      return gt.length !== 0 && ((P = this.textHandler) === null || P === void 0 || P.call(this, gt), this.text = ""), this._closed = !0, (O = this.endHandler) === null || O === void 0 || O.call(this), this._init(), this;
    }
    /**
     * Resolve a namespace prefix.
     *
     * @param prefix The prefix to resolve.
     *
     * @returns The namespace URI or ``undefined`` if the prefix is not defined.
     */
    resolve(P) {
      var O, $;
      let gt = this.topNS[P];
      if (gt !== void 0)
        return gt;
      const { tags: At } = this;
      for (let Ft = At.length - 1; Ft >= 0; Ft--)
        if (gt = At[Ft].ns[P], gt !== void 0)
          return gt;
      return gt = this.ns[P], gt !== void 0 ? gt : ($ = (O = this.opt).resolvePrefix) === null || $ === void 0 ? void 0 : $.call(O, P);
    }
    /**
     * Parse a qname into its prefix and local name parts.
     *
     * @param name The name to parse
     *
     * @returns
     */
    qname(P) {
      const O = P.indexOf(":");
      if (O === -1)
        return { prefix: "", local: P };
      const $ = P.slice(O + 1), gt = P.slice(0, O);
      return (gt === "" || $ === "" || $.includes(":")) && this.fail(`malformed name: ${P}.`), { prefix: gt, local: $ };
    }
    processAttribsNS() {
      var P;
      const { attribList: O } = this, $ = this.tag;
      {
        const { prefix: Ft, local: Xt } = this.qname($.name);
        $.prefix = Ft, $.local = Xt;
        const He = $.uri = (P = this.resolve(Ft)) !== null && P !== void 0 ? P : "";
        Ft !== "" && (Ft === "xmlns" && this.fail('tags may not have "xmlns" as prefix.'), He === "" && (this.fail(`unbound namespace prefix: ${JSON.stringify(Ft)}.`), $.uri = Ft));
      }
      if (O.length === 0)
        return;
      const { attributes: gt } = $, At = /* @__PURE__ */ new Set();
      for (const Ft of O) {
        const { name: Xt, prefix: He, local: Go } = Ft;
        let ze, ui;
        He === "" ? (ze = Xt === "xmlns" ? y : "", ui = Xt) : (ze = this.resolve(He), ze === void 0 && (this.fail(`unbound namespace prefix: ${JSON.stringify(He)}.`), ze = He), ui = `{${ze}}${Go}`), At.has(ui) && this.fail(`duplicate attribute: ${ui}.`), At.add(ui), Ft.uri = ze, gt[Xt] = Ft;
      }
      this.attribList = [];
    }
    processAttribsPlain() {
      const { attribList: P } = this, O = this.tag.attributes;
      for (const { name: $, value: gt } of P)
        O[$] !== void 0 && this.fail(`duplicate attribute: ${$}.`), O[$] = gt;
      this.attribList = [];
    }
    /**
     * Handle a complete open tag. This parser code calls this once it has seen
     * the whole tag. This method checks for well-formeness and then emits
     * ``onopentag``.
     */
    openTag() {
      var P;
      this.processAttribs();
      const { tags: O } = this, $ = this.tag;
      $.isSelfClosing = !1, (P = this.openTagHandler) === null || P === void 0 || P.call(this, $), O.push($), this.state = ft, this.name = "";
    }
    /**
     * Handle a complete self-closing tag. This parser code calls this once it has
     * seen the whole tag. This method checks for well-formeness and then emits
     * ``onopentag`` and ``onclosetag``.
     */
    openSelfClosingTag() {
      var P, O, $;
      this.processAttribs();
      const { tags: gt } = this, At = this.tag;
      At.isSelfClosing = !0, (P = this.openTagHandler) === null || P === void 0 || P.call(this, At), (O = this.closeTagHandler) === null || O === void 0 || O.call(this, At), (this.tag = ($ = gt[gt.length - 1]) !== null && $ !== void 0 ? $ : null) === null && (this.closedRoot = !0), this.state = ft, this.name = "";
    }
    /**
     * Handle a complete close tag. This parser code calls this once it has seen
     * the whole tag. This method checks for well-formeness and then emits
     * ``onclosetag``.
     */
    closeTag() {
      const { tags: P, name: O } = this;
      if (this.state = ft, this.name = "", O === "") {
        this.fail("weird empty close tag."), this.text += "</>";
        return;
      }
      const $ = this.closeTagHandler;
      let gt = P.length;
      for (; gt-- > 0; ) {
        const At = this.tag = P.pop();
        if (this.topNS = At.ns, $ == null || $(At), At.name === O)
          break;
        this.fail("unexpected close tag.");
      }
      gt === 0 ? this.closedRoot = !0 : gt < 0 && (this.fail(`unmatched closing tag: ${O}.`), this.text += `</${O}>`);
    }
    /**
     * Resolves an entity. Makes any necessary well-formedness checks.
     *
     * @param entity The entity to resolve.
     *
     * @returns The parsed entity.
     */
    parseEntity(P) {
      if (P[0] !== "#") {
        const $ = this.ENTITIES[P];
        return $ !== void 0 ? $ : (this.fail(this.isName(P) ? "undefined entity." : "disallowed character in entity name."), `&${P};`);
      }
      let O = NaN;
      return P[1] === "x" && /^#x[0-9a-f]+$/i.test(P) ? O = parseInt(P.slice(2), 16) : /^#[0-9]+$/.test(P) && (O = parseInt(P.slice(1), 10)), this.isChar(O) ? String.fromCodePoint(O) : (this.fail("malformed character entity."), `&${P};`);
    }
  }
  return Fe.SaxesParser = li, Fe;
}
var yi = {}, Ls;
function ch() {
  if (Ls) return yi;
  Ls = 1, Object.defineProperty(yi, "__esModule", { value: !0 }), yi.ParseError = void 0;
  let e = class extends Error {
    constructor(i, r) {
      const n = i.saxParser;
      super(i.trackPosition ? `Line ${n.line} column ${n.column + 1}: ${r}` : r);
    }
  };
  return yi.ParseError = e, yi;
}
var Ge = {}, bi = {}, $s;
function Ha() {
  if ($s) return bi;
  $s = 1, Object.defineProperty(bi, "__esModule", { value: !0 }), bi.BlankNode = void 0;
  let e = class {
    constructor(i) {
      this.termType = "BlankNode", this.value = i;
    }
    equals(i) {
      return !!i && i.termType === "BlankNode" && i.value === this.value;
    }
  };
  return bi.BlankNode = e, bi;
}
var mi = {}, wi = {}, js;
function za() {
  if (js) return wi;
  js = 1, Object.defineProperty(wi, "__esModule", { value: !0 }), wi.DefaultGraph = void 0;
  let e = class {
    constructor() {
      this.termType = "DefaultGraph", this.value = "";
    }
    equals(i) {
      return !!i && i.termType === "DefaultGraph";
    }
  };
  return wi.DefaultGraph = e, e.INSTANCE = new e(), wi;
}
var Ei = {}, vi = {}, Bs;
function Fn() {
  if (Bs) return vi;
  Bs = 1, Object.defineProperty(vi, "__esModule", { value: !0 }), vi.NamedNode = void 0;
  let e = class {
    constructor(i) {
      this.termType = "NamedNode", this.value = i;
    }
    equals(i) {
      return !!i && i.termType === "NamedNode" && i.value === this.value;
    }
  };
  return vi.NamedNode = e, vi;
}
var ks;
function Qa() {
  if (ks) return Ei;
  ks = 1, Object.defineProperty(Ei, "__esModule", { value: !0 }), Ei.Literal = void 0;
  const e = Fn();
  let t = class mn {
    constructor(r, n) {
      this.termType = "Literal", this.value = r, typeof n == "string" ? (this.language = n, this.datatype = mn.RDF_LANGUAGE_STRING) : n ? (this.language = "", this.datatype = n) : (this.language = "", this.datatype = mn.XSD_STRING);
    }
    equals(r) {
      return !!r && r.termType === "Literal" && r.value === this.value && r.language === this.language && this.datatype.equals(r.datatype);
    }
  };
  return Ei.Literal = t, t.RDF_LANGUAGE_STRING = new e.NamedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"), t.XSD_STRING = new e.NamedNode("http://www.w3.org/2001/XMLSchema#string"), Ei;
}
var xi = {}, qs;
function Va() {
  if (qs) return xi;
  qs = 1, Object.defineProperty(xi, "__esModule", { value: !0 }), xi.Quad = void 0;
  let e = class {
    constructor(i, r, n, s) {
      this.termType = "Quad", this.value = "", this.subject = i, this.predicate = r, this.object = n, this.graph = s;
    }
    equals(i) {
      return !!i && (i.termType === "Quad" || !i.termType) && this.subject.equals(i.subject) && this.predicate.equals(i.predicate) && this.object.equals(i.object) && this.graph.equals(i.graph);
    }
  };
  return xi.Quad = e, xi;
}
var Si = {}, Us;
function Xa() {
  if (Us) return Si;
  Us = 1, Object.defineProperty(Si, "__esModule", { value: !0 }), Si.Variable = void 0;
  let e = class {
    constructor(i) {
      this.termType = "Variable", this.value = i;
    }
    equals(i) {
      return !!i && i.termType === "Variable" && i.value === this.value;
    }
  };
  return Si.Variable = e, Si;
}
var Ws;
function dh() {
  if (Ws) return mi;
  Ws = 1, Object.defineProperty(mi, "__esModule", { value: !0 }), mi.DataFactory = void 0;
  const e = Ha(), t = za(), i = Qa(), r = Fn(), n = Va(), s = Xa();
  let o = 0, a = class {
    constructor(h) {
      this.blankNodeCounter = 0, h = h || {}, this.blankNodePrefix = h.blankNodePrefix || `df_${o++}_`;
    }
    /**
     * @param value The IRI for the named node.
     * @return A new instance of NamedNode.
     * @see NamedNode
     */
    namedNode(h) {
      return new r.NamedNode(h);
    }
    /**
     * @param value The optional blank node identifier.
     * @return A new instance of BlankNode.
     *         If the `value` parameter is undefined a new identifier
     *         for the blank node is generated for each call.
     * @see BlankNode
     */
    blankNode(h) {
      return new e.BlankNode(h || `${this.blankNodePrefix}${this.blankNodeCounter++}`);
    }
    /**
     * @param value              The literal value.
     * @param languageOrDatatype The optional language or datatype.
     *                           If `languageOrDatatype` is a NamedNode,
     *                           then it is used for the value of `NamedNode.datatype`.
     *                           Otherwise `languageOrDatatype` is used for the value
     *                           of `NamedNode.language`.
     * @return A new instance of Literal.
     * @see Literal
     */
    literal(h, d) {
      return new i.Literal(h, d);
    }
    /**
     * This method is optional.
     * @param value The variable name
     * @return A new instance of Variable.
     * @see Variable
     */
    variable(h) {
      return new s.Variable(h);
    }
    /**
     * @return An instance of DefaultGraph.
     */
    defaultGraph() {
      return t.DefaultGraph.INSTANCE;
    }
    /**
     * @param subject   The quad subject term.
     * @param predicate The quad predicate term.
     * @param object    The quad object term.
     * @param graph     The quad graph term.
     * @return A new instance of Quad.
     * @see Quad
     */
    quad(h, d, f, _) {
      return new n.Quad(h, d, f, _ || this.defaultGraph());
    }
    /**
     * Create a deep copy of the given term using this data factory.
     * @param original An RDF term.
     * @return A deep copy of the given term.
     */
    fromTerm(h) {
      switch (h.termType) {
        case "NamedNode":
          return this.namedNode(h.value);
        case "BlankNode":
          return this.blankNode(h.value);
        case "Literal":
          return h.language ? this.literal(h.value, h.language) : h.datatype.equals(i.Literal.XSD_STRING) ? this.literal(h.value) : this.literal(h.value, this.fromTerm(h.datatype));
        case "Variable":
          return this.variable(h.value);
        case "DefaultGraph":
          return this.defaultGraph();
        case "Quad":
          return this.quad(this.fromTerm(h.subject), this.fromTerm(h.predicate), this.fromTerm(h.object), this.fromTerm(h.graph));
      }
    }
    /**
     * Create a deep copy of the given quad using this data factory.
     * @param original An RDF quad.
     * @return A deep copy of the given quad.
     */
    fromQuad(h) {
      return this.fromTerm(h);
    }
    /**
     * Reset the internal blank node counter.
     */
    resetBlankNodeCounter() {
      this.blankNodeCounter = 0;
    }
  };
  return mi.DataFactory = a, mi;
}
var Hs;
function _h() {
  return Hs || (Hs = 1, (function(e) {
    var t = Ge && Ge.__createBinding || (Object.create ? (function(r, n, s, o) {
      o === void 0 && (o = s);
      var a = Object.getOwnPropertyDescriptor(n, s);
      (!a || ("get" in a ? !n.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
        return n[s];
      } }), Object.defineProperty(r, o, a);
    }) : (function(r, n, s, o) {
      o === void 0 && (o = s), r[o] = n[s];
    })), i = Ge && Ge.__exportStar || function(r, n) {
      for (var s in r) s !== "default" && !Object.prototype.hasOwnProperty.call(n, s) && t(n, r, s);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), i(Ha(), e), i(dh(), e), i(za(), e), i(Qa(), e), i(Fn(), e), i(Va(), e), i(Xa(), e);
  })(Ge)), Ge;
}
var De = {}, hn = {}, zs;
function gh() {
  return zs || (zs = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateIri = e.IriValidationStrategy = void 0;
    function t() {
      const a = "[!$&'()*+,;=]", l = "%[a-fA-F0-9]{2}", h = "([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", d = `${h}\\.${h}\\.${h}\\.${h}`, f = "[a-fA-F0-9]{1,4}", _ = `(${f}:${f}|${d})`, m = `((${f}:){6}${_}|::(${f}:){5}${_}|(${f})?::(${f}:){4}${_}|((${f}:){0,1}${f})?::(${f}:){3}${_}|((${f}:){0,2}${f})?::(${f}:){2}${_}|((${f}:){0,3}${f})?::${f}:${_}|((${f}:){0,4}${f})?::${_}|((${f}:){0,5}${f})?::${f}|((${f}:){0,6}${f})?::)`, y = `v[a-fA-F0-9]+\\.(${a}|${a}|":)+`, w = `\\[(${m}|${y})\\]`, b = "[0-9]*", g = "[a-zA-Z][a-zA-Z0-9+\\-.]*", E = "[-󰀀-󿿽􀀀-􏿽]", j = "[a-zA-Z0-9\\-._~ -퟿豈-﷏ﷰ-￯𐀀-🿽𠀀-𯿽𰀀-𿿽񀀀-񏿽񐀀-񟿽񠀀-񯿽񰀀-񿿽򀀀-򏿽򐀀-򟿽򠀀-򯿽򰀀-򿿽󀀀-󏿽󐀀-󟿽󡀀-󯿽]", U = `(${j}|${l}|${a}|[:@])*`, k = `(${U}|[\\/?])*`, lt = `(${U}|${E}|[\\/?])*`, G = `(${U})+`, L = `(${U})*`, Y = "", D = `${G}(\\/${L})*`, ht = `\\/(${G}(\\/${L})*)?`, dt = `(\\/${L})*`, ft = `(${j}|${l}|${a})*`, vt = `(${w}|${d}|${ft})`, R = `(\\/\\/${`(${`(${j}|${l}|${a}|:)*`}@)?${vt}(:${b})?`}${dt}|${ht}|${D}|${Y})`, W = `^${g}:${R}(\\?${lt})?(#${k})?$`;
      return new RegExp(W, "u");
    }
    const i = t(), r = /^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u;
    var n;
    (function(o) {
      o.Strict = "strict", o.Pragmatic = "pragmatic", o.None = "none";
    })(n = e.IriValidationStrategy || (e.IriValidationStrategy = {}));
    function s(o, a = n.Strict) {
      switch (a) {
        case n.Strict:
          return i.test(o) ? void 0 : new Error(`Invalid IRI according to RFC 3987: '${o}'`);
        case n.Pragmatic:
          return r.test(o) ? void 0 : new Error(`Invalid IRI according to RDF Turtle: '${o}'`);
        case n.None:
          return;
        default:
          return new Error(`Not supported validation strategy "${a}"`);
      }
    }
    e.validateIri = s;
  })(hn)), hn;
}
var Qs;
function ph() {
  return Qs || (Qs = 1, (function(e) {
    var t = De && De.__createBinding || (Object.create ? (function(r, n, s, o) {
      o === void 0 && (o = s);
      var a = Object.getOwnPropertyDescriptor(n, s);
      (!a || ("get" in a ? !n.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
        return n[s];
      } }), Object.defineProperty(r, o, a);
    }) : (function(r, n, s, o) {
      o === void 0 && (o = s), r[o] = n[s];
    })), i = De && De.__exportStar || function(r, n) {
      for (var s in r) s !== "default" && !Object.prototype.hasOwnProperty.call(n, s) && t(n, r, s);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), i(gh(), e);
  })(De)), De;
}
var Vs;
function yh() {
  if (Vs) return Te;
  Vs = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.ParseType = Te.RdfXmlParser = void 0;
  const e = oh(), t = fh(), i = ka(), r = /* @__PURE__ */ ch(), n = _h(), s = ph();
  let o = class Dt extends i.Transform {
    constructor(h) {
      super({ readableObjectMode: !0 }), this.activeTagStack = [], this.nodeIds = {}, h && (Object.assign(this, h), this.options = h), this.dataFactory || (this.dataFactory = new n.DataFactory()), this.baseIRI || (this.baseIRI = ""), this.defaultGraph || (this.defaultGraph = this.dataFactory.defaultGraph()), this.validateUri !== !1 && (this.validateUri = !0), this.iriValidationStrategy || (this.iriValidationStrategy = this.validateUri ? s.IriValidationStrategy.Pragmatic : s.IriValidationStrategy.None), this.saxParser = new t.SaxesParser({ xmlns: !0, position: this.trackPosition }), this.attachSaxListeners();
    }
    /**
     * Parses the given text stream into a quad stream.
     * @param {NodeJS.EventEmitter} stream A text stream.
     * @return {RDF.Stream} A quad stream.
     */
    import(h) {
      const d = new i.PassThrough({ readableObjectMode: !0 });
      h.on("error", (_) => f.emit("error", _)), h.on("data", (_) => d.push(_)), h.on("end", () => d.push(null));
      const f = d.pipe(new Dt(this.options));
      return f;
    }
    _transform(h, d, f) {
      try {
        this.saxParser.write(h);
      } catch (_) {
        return f(_);
      }
      f();
    }
    /**
     * Create a new parse error instance.
     * @param {string} message An error message.
     * @return {Error} An error instance.
     */
    newParseError(h) {
      return new r.ParseError(this, h);
    }
    /**
     * Convert the given value to a IRI by taking into account the baseIRI.
     *
     * This will follow the RDF/XML spec for converting values with baseIRIs to a IRI.
     *
     * @param {string} value The value to convert to an IRI.
     * @param {IActiveTag} activeTag The active tag.
     * @return {NamedNode} an IRI.
     */
    valueToUri(h, d) {
      return this.uriToNamedNode((0, e.resolve)(h, d.baseIRI));
    }
    /**
     * Convert the given value URI string to a named node.
     *
     * This throw an error if the URI is invalid.
     *
     * @param {string} uri A URI string.
     * @return {NamedNode} a named node.
     */
    uriToNamedNode(h) {
      const d = (0, s.validateIri)(h, this.iriValidationStrategy);
      if (d instanceof Error)
        throw this.newParseError(d.message);
      return this.dataFactory.namedNode(h);
    }
    /**
     * Validate the given value as an NCName: https://www.w3.org/TR/xml-names/#NT-NCName
     * If it is invalid, an error will thrown emitted.
     * @param {string} value A value.
     */
    validateNcname(h) {
      if (!Dt.NCNAME_MATCHER.test(h))
        throw this.newParseError(`Not a valid NCName: ${h}`);
    }
    attachSaxListeners() {
      this.saxParser.on("error", (h) => this.emit("error", h)), this.saxParser.on("opentag", this.onTag.bind(this)), this.saxParser.on("text", this.onText.bind(this)), this.saxParser.on("cdata", this.onText.bind(this)), this.saxParser.on("closetag", this.onCloseTag.bind(this)), this.saxParser.on("doctype", this.onDoctype.bind(this));
    }
    /**
     * Handle the given tag.
     * @param {SaxesTagNS} tag A SAX tag.
     */
    onTag(h) {
      const d = this.activeTagStack.length ? this.activeTagStack[this.activeTagStack.length - 1] : null;
      let f = a.RESOURCE;
      if (d && (d.hadChildren = !0, f = d.childrenParseType), d && d.childrenStringTags) {
        const m = h.name;
        let y = "";
        for (const v in h.attributes)
          y += ` ${v}="${h.attributes[v].value}"`;
        const b = `<${`${m}${y}`}>`;
        d.childrenStringTags.push(b);
        const g = { childrenStringTags: d.childrenStringTags };
        g.childrenStringEmitClosingTag = `</${m}>`, this.activeTagStack.push(g);
        return;
      }
      const _ = {};
      d ? (_.language = d.language, _.baseIRI = d.baseIRI) : _.baseIRI = this.baseIRI, this.activeTagStack.push(_), f === a.RESOURCE ? this.onTagResource(h, _, d, !d) : this.onTagProperty(h, _, d);
    }
    /**
     * Handle the given node element in resource-mode.
     * @param {SaxesTagNS} tag A SAX tag.
     * @param {IActiveTag} activeTag The currently active tag.
     * @param {IActiveTag} parentTag The parent tag or null.
     * @param {boolean} rootTag If we are currently processing the root tag.
     */
    onTagResource(h, d, f, _) {
      d.childrenParseType = a.PROPERTY;
      let m = !0;
      if (h.uri === Dt.RDF) {
        if (!_ && Dt.FORBIDDEN_NODE_ELEMENTS.indexOf(h.local) >= 0)
          throw this.newParseError(`Illegal node element name: ${h.local}`);
        switch (h.local) {
          case "RDF":
            d.childrenParseType = a.RESOURCE;
          case "Description":
            m = !1;
        }
      }
      const y = [], w = [];
      let b = null, g = !1, v = !1, E = null;
      for (const N in h.attributes) {
        const M = h.attributes[N];
        if (f && M.uri === Dt.RDF)
          switch (M.local) {
            case "about":
              if (b)
                throw this.newParseError(`Only one of rdf:about, rdf:nodeID and rdf:ID can be present, while ${M.value} and ${b} where found.`);
              b = M.value;
              continue;
            case "ID":
              if (b)
                throw this.newParseError(`Only one of rdf:about, rdf:nodeID and rdf:ID can be present, while ${M.value} and ${b} where found.`);
              this.validateNcname(M.value), b = "#" + M.value, g = !0;
              continue;
            case "nodeID":
              if (b)
                throw this.newParseError(`Only one of rdf:about, rdf:nodeID and rdf:ID can be present, while ${M.value} and ${b} where found.`);
              this.validateNcname(M.value), b = M.value, v = !0;
              continue;
            case "bagID":
              throw this.newParseError("rdf:bagID is not supported.");
            case "type":
              E = M.value;
              continue;
            case "aboutEach":
              throw this.newParseError("rdf:aboutEach is not supported.");
            case "aboutEachPrefix":
              throw this.newParseError("rdf:aboutEachPrefix is not supported.");
            case "li":
              throw this.newParseError("rdf:li on node elements are not supported.");
          }
        else if (M.uri === Dt.XML) {
          if (M.local === "lang") {
            d.language = M.value === "" ? null : M.value.toLowerCase();
            continue;
          } else if (M.local === "base") {
            d.baseIRI = (0, e.resolve)(M.value, d.baseIRI);
            continue;
          }
        }
        M.prefix !== "xml" && M.prefix !== "xmlns" && (M.prefix !== "" || M.local !== "xmlns") && M.uri && (y.push(this.uriToNamedNode(M.uri + M.local)), w.push(M.value));
      }
      if (b !== null && (d.subject = v ? this.dataFactory.blankNode(b) : this.valueToUri(b, d), g && this.claimNodeId(d.subject)), d.subject || (d.subject = this.dataFactory.blankNode()), m) {
        const N = this.uriToNamedNode(h.uri + h.local);
        this.emitTriple(d.subject, this.dataFactory.namedNode(Dt.RDF + "type"), N, f ? f.reifiedStatementId : null);
      }
      if (f) {
        if (f.predicate)
          if (f.childrenCollectionSubject) {
            const N = this.dataFactory.blankNode();
            this.emitTriple(f.childrenCollectionSubject, f.childrenCollectionPredicate, N, f.reifiedStatementId), this.emitTriple(N, this.dataFactory.namedNode(Dt.RDF + "first"), d.subject, d.reifiedStatementId), f.childrenCollectionSubject = N, f.childrenCollectionPredicate = this.dataFactory.namedNode(Dt.RDF + "rest");
          } else {
            this.emitTriple(f.subject, f.predicate, d.subject, f.reifiedStatementId);
            for (let N = 0; N < f.predicateSubPredicates.length; N++)
              this.emitTriple(d.subject, f.predicateSubPredicates[N], f.predicateSubObjects[N], null);
            f.predicateSubPredicates = [], f.predicateSubObjects = [], f.predicateEmitted = !0;
          }
        for (let N = 0; N < y.length; N++) {
          const M = this.dataFactory.literal(w[N], d.datatype || d.language);
          this.emitTriple(d.subject, y[N], M, f.reifiedStatementId);
        }
        E && this.emitTriple(d.subject, this.dataFactory.namedNode(Dt.RDF + "type"), this.uriToNamedNode(E), null);
      }
    }
    /**
     * Handle the given property element in property-mode.
     * @param {SaxesTagNS} tag A SAX tag.
     * @param {IActiveTag} activeTag The currently active tag.
     * @param {IActiveTag} parentTag The parent tag or null.
     */
    onTagProperty(h, d, f) {
      if (d.childrenParseType = a.RESOURCE, d.subject = f.subject, h.uri === Dt.RDF && h.local === "li" ? (f.listItemCounter || (f.listItemCounter = 1), d.predicate = this.uriToNamedNode(h.uri + "_" + f.listItemCounter++)) : d.predicate = this.uriToNamedNode(h.uri + h.local), h.uri === Dt.RDF && Dt.FORBIDDEN_PROPERTY_ELEMENTS.indexOf(h.local) >= 0)
        throw this.newParseError(`Illegal property element name: ${h.local}`);
      d.predicateSubPredicates = [], d.predicateSubObjects = [];
      let _ = !1, m = !1, y = null, w = !0;
      const b = [], g = [];
      for (const v in h.attributes) {
        const E = h.attributes[v];
        if (E.uri === Dt.RDF)
          switch (E.local) {
            case "resource":
              if (y)
                throw this.newParseError(`Found both rdf:resource (${E.value}) and rdf:nodeID (${y}).`);
              if (_)
                throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:resource (${E.value})`);
              d.hadChildren = !0, y = E.value, w = !1;
              continue;
            case "datatype":
              if (m)
                throw this.newParseError(`Found both non-rdf:* property attributes and rdf:datatype (${E.value}).`);
              if (_)
                throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:datatype (${E.value})`);
              d.datatype = this.valueToUri(E.value, d);
              continue;
            case "nodeID":
              if (m)
                throw this.newParseError(`Found both non-rdf:* property attributes and rdf:nodeID (${E.value}).`);
              if (d.hadChildren)
                throw this.newParseError(`Found both rdf:resource and rdf:nodeID (${E.value}).`);
              if (_)
                throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:nodeID (${E.value})`);
              this.validateNcname(E.value), d.hadChildren = !0, y = E.value, w = !0;
              continue;
            case "bagID":
              throw this.newParseError("rdf:bagID is not supported.");
            case "parseType":
              if (m)
                throw this.newParseError("rdf:parseType is not allowed when non-rdf:* property attributes are present");
              if (d.datatype)
                throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:datatype (${d.datatype.value})`);
              if (y)
                throw this.newParseError(`rdf:parseType is not allowed on property elements with rdf:nodeID or rdf:resource (${y})`);
              if (E.value === "Resource") {
                _ = !0, d.childrenParseType = a.PROPERTY;
                const N = this.dataFactory.blankNode();
                this.emitTriple(d.subject, d.predicate, N, d.reifiedStatementId), d.subject = N, d.predicate = null;
              } else E.value === "Collection" ? (_ = !0, d.hadChildren = !0, d.childrenCollectionSubject = d.subject, d.childrenCollectionPredicate = d.predicate, w = !1) : E.value === "Literal" && (_ = !0, d.childrenTagsToString = !0, d.childrenStringTags = []);
              continue;
            case "ID":
              this.validateNcname(E.value), d.reifiedStatementId = this.valueToUri("#" + E.value, d), this.claimNodeId(d.reifiedStatementId);
              continue;
          }
        else if (E.uri === Dt.XML && E.local === "lang") {
          d.language = E.value === "" ? null : E.value.toLowerCase();
          continue;
        }
        if (E.prefix !== "xml" && E.prefix !== "xmlns" && (E.prefix !== "" || E.local !== "xmlns") && E.uri) {
          if (_ || d.datatype)
            throw this.newParseError(`Found illegal rdf:* properties on property element with attribute: ${E.value}`);
          d.hadChildren = !0, m = !0, b.push(this.uriToNamedNode(E.uri + E.local)), g.push(this.dataFactory.literal(E.value, d.datatype || d.language));
        }
      }
      if (y !== null) {
        const v = d.subject;
        d.subject = w ? this.dataFactory.blankNode(y) : this.valueToUri(y, d), this.emitTriple(v, d.predicate, d.subject, d.reifiedStatementId);
        for (let E = 0; E < b.length; E++)
          this.emitTriple(d.subject, b[E], g[E], null);
        d.predicateEmitted = !0;
      } else w && (d.predicateSubPredicates = b, d.predicateSubObjects = g, d.predicateEmitted = !1);
    }
    /**
     * Emit the given triple to the stream.
     * @param {Term} subject A subject term.
     * @param {Term} predicate A predicate term.
     * @param {Term} object An object term.
     * @param {Term} statementId An optional resource that identifies the triple.
     *                           If truthy, then the given triple will also be emitted reified.
     */
    emitTriple(h, d, f, _) {
      this.push(this.dataFactory.quad(h, d, f, this.defaultGraph)), _ && (this.push(this.dataFactory.quad(_, this.dataFactory.namedNode(Dt.RDF + "type"), this.dataFactory.namedNode(Dt.RDF + "Statement"), this.defaultGraph)), this.push(this.dataFactory.quad(_, this.dataFactory.namedNode(Dt.RDF + "subject"), h, this.defaultGraph)), this.push(this.dataFactory.quad(_, this.dataFactory.namedNode(Dt.RDF + "predicate"), d, this.defaultGraph)), this.push(this.dataFactory.quad(_, this.dataFactory.namedNode(Dt.RDF + "object"), f, this.defaultGraph)));
    }
    /**
     * Register the given term as a node ID.
     * If one was already registered, this will emit an error.
     *
     * This is used to check duplicate occurrences of rdf:ID in scope of the baseIRI.
     * @param {Term} term An RDF term.
     */
    claimNodeId(h) {
      if (!this.allowDuplicateRdfIds) {
        if (this.nodeIds[h.value])
          throw this.newParseError(`Found multiple occurrences of rdf:ID='${h.value}'.`);
        this.nodeIds[h.value] = !0;
      }
    }
    /**
     * Handle the given text string.
     * @param {string} text A parsed text string.
     */
    onText(h) {
      const d = this.activeTagStack.length ? this.activeTagStack[this.activeTagStack.length - 1] : null;
      d && (d.childrenStringTags ? d.childrenStringTags.push(h) : d.predicate && (d.text = h));
    }
    /**
     * Handle the closing of the last tag.
     */
    onCloseTag() {
      const h = this.activeTagStack.pop();
      if (h.childrenStringEmitClosingTag && h.childrenStringTags.push(h.childrenStringEmitClosingTag), h.childrenTagsToString && (h.datatype = this.dataFactory.namedNode(Dt.RDF + "XMLLiteral"), h.text = h.childrenStringTags.join(""), h.hadChildren = !1), h.childrenCollectionSubject)
        this.emitTriple(h.childrenCollectionSubject, h.childrenCollectionPredicate, this.dataFactory.namedNode(Dt.RDF + "nil"), h.reifiedStatementId);
      else if (h.predicate) {
        if (!h.hadChildren && h.childrenParseType !== a.PROPERTY)
          this.emitTriple(h.subject, h.predicate, this.dataFactory.literal(h.text || "", h.datatype || h.language), h.reifiedStatementId);
        else if (!h.predicateEmitted) {
          const d = this.dataFactory.blankNode();
          this.emitTriple(h.subject, h.predicate, d, h.reifiedStatementId);
          for (let f = 0; f < h.predicateSubPredicates.length; f++)
            this.emitTriple(d, h.predicateSubPredicates[f], h.predicateSubObjects[f], null);
        }
      }
    }
    /**
     * Fetch local DOCTYPE ENTITY's and make the parser recognise them.
     * @param {string} doctype The read doctype.
     */
    onDoctype(h) {
      h.replace(/<!ENTITY\s+([^\s]+)\s+["']([^"']+)["']\s*>/g, (d, f, _) => (this.saxParser.ENTITIES[f] = _, ""));
    }
  };
  Te.RdfXmlParser = o, o.MIME_TYPE = "application/rdf+xml", o.RDF = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", o.XML = "http://www.w3.org/XML/1998/namespace", o.FORBIDDEN_NODE_ELEMENTS = [
    "RDF",
    "ID",
    "about",
    "bagID",
    "parseType",
    "resource",
    "nodeID",
    "li",
    "aboutEach",
    "aboutEachPrefix"
  ], o.FORBIDDEN_PROPERTY_ELEMENTS = [
    "Description",
    "RDF",
    "ID",
    "about",
    "bagID",
    "parseType",
    "resource",
    "nodeID",
    "aboutEach",
    "aboutEachPrefix"
  ], o.NCNAME_MATCHER = /^([A-Za-z\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}_])([A-Za-z\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}_\-.0-9#xB7\u{0300}-\u{036F}\u{203F}-\u{2040}])*$/u;
  var a;
  return (function(l) {
    l[l.RESOURCE = 0] = "RESOURCE", l[l.PROPERTY = 1] = "PROPERTY";
  })(a || (Te.ParseType = a = {})), Te;
}
var Xs;
function bh() {
  return Xs || (Xs = 1, (function(e) {
    var t = Ie && Ie.__createBinding || (Object.create ? (function(r, n, s, o) {
      o === void 0 && (o = s);
      var a = Object.getOwnPropertyDescriptor(n, s);
      (!a || ("get" in a ? !n.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
        return n[s];
      } }), Object.defineProperty(r, o, a);
    }) : (function(r, n, s, o) {
      o === void 0 && (o = s), r[o] = n[s];
    })), i = Ie && Ie.__exportStar || function(r, n) {
      for (var s in r) s !== "default" && !Object.prototype.hasOwnProperty.call(n, s) && t(n, r, s);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), i(/* @__PURE__ */ yh(), e);
  })(Ie)), Ie;
}
var mh = /* @__PURE__ */ bh();
function wh(e) {
  e("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), e("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), e("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");
  for (var t = 1; t <= 60; ++t)
    e("EPSG:" + (32600 + t), "+proj=utm +zone=" + t + " +datum=WGS84 +units=m"), e("EPSG:" + (32700 + t), "+proj=utm +zone=" + t + " +south +datum=WGS84 +units=m");
  e("EPSG:5041", "+title=WGS 84 / UPS North (E,N) +proj=stere +lat_0=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"), e("EPSG:5042", "+title=WGS 84 / UPS South (E,N) +proj=stere +lat_0=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"), e.WGS84 = e["EPSG:4326"], e["EPSG:3785"] = e["EPSG:3857"], e.GOOGLE = e["EPSG:3857"], e["EPSG:900913"] = e["EPSG:3857"], e["EPSG:102113"] = e["EPSG:3857"];
}
var je = 1, Be = 2, ti = 3, Eh = 4, wn = 5, Ks = 6378137, vh = 6356752314e-3, Js = 0.0066943799901413165, Ci = 484813681109536e-20, Z = Math.PI / 2, xh = 0.16666666666666666, Sh = 0.04722222222222222, Mh = 0.022156084656084655, ot = 1e-10, jt = 0.017453292519943295, ie = 57.29577951308232, It = Math.PI / 4, $i = Math.PI * 2, kt = 3.14159265359, ne = {};
ne.greenwich = 0;
ne.lisbon = -9.131906111111;
ne.paris = 2.337229166667;
ne.bogota = -74.080916666667;
ne.madrid = -3.687938888889;
ne.rome = 12.452333333333;
ne.bern = 7.439583333333;
ne.jakarta = 106.807719444444;
ne.ferro = -17.666666666667;
ne.brussels = 4.367975;
ne.stockholm = 18.058277777778;
ne.athens = 23.7163375;
ne.oslo = 10.722916666667;
const Ph = {
  mm: { to_meter: 1e-3 },
  cm: { to_meter: 0.01 },
  ft: { to_meter: 0.3048 },
  "us-ft": { to_meter: 1200 / 3937 },
  fath: { to_meter: 1.8288 },
  kmi: { to_meter: 1852 },
  "us-ch": { to_meter: 20.1168402336805 },
  "us-mi": { to_meter: 1609.34721869444 },
  km: { to_meter: 1e3 },
  "ind-ft": { to_meter: 0.30479841 },
  "ind-yd": { to_meter: 0.91439523 },
  mi: { to_meter: 1609.344 },
  yd: { to_meter: 0.9144 },
  ch: { to_meter: 20.1168 },
  link: { to_meter: 0.201168 },
  dm: { to_meter: 0.1 },
  in: { to_meter: 0.0254 },
  "ind-ch": { to_meter: 20.11669506 },
  "us-in": { to_meter: 0.025400050800101 },
  "us-yd": { to_meter: 0.914401828803658 }
};
var Ys = /[\s_\-\/\(\)]/g;
function Pe(e, t) {
  if (e[t])
    return e[t];
  for (var i = Object.keys(e), r = t.toLowerCase().replace(Ys, ""), n = -1, s, o; ++n < i.length; )
    if (s = i[n], o = s.toLowerCase().replace(Ys, ""), o === r)
      return e[s];
}
function En(e) {
  var t = {}, i = e.split("+").map(function(a) {
    return a.trim();
  }).filter(function(a) {
    return a;
  }).reduce(function(a, l) {
    var h = l.split("=");
    return h.push(!0), a[h[0].toLowerCase()] = h[1], a;
  }, {}), r, n, s, o = {
    proj: "projName",
    datum: "datumCode",
    rf: function(a) {
      t.rf = parseFloat(a);
    },
    lat_0: function(a) {
      t.lat0 = a * jt;
    },
    lat_1: function(a) {
      t.lat1 = a * jt;
    },
    lat_2: function(a) {
      t.lat2 = a * jt;
    },
    lat_ts: function(a) {
      t.lat_ts = a * jt;
    },
    lon_0: function(a) {
      t.long0 = a * jt;
    },
    lon_1: function(a) {
      t.long1 = a * jt;
    },
    lon_2: function(a) {
      t.long2 = a * jt;
    },
    alpha: function(a) {
      t.alpha = parseFloat(a) * jt;
    },
    gamma: function(a) {
      t.rectified_grid_angle = parseFloat(a) * jt;
    },
    lonc: function(a) {
      t.longc = a * jt;
    },
    x_0: function(a) {
      t.x0 = parseFloat(a);
    },
    y_0: function(a) {
      t.y0 = parseFloat(a);
    },
    k_0: function(a) {
      t.k0 = parseFloat(a);
    },
    k: function(a) {
      t.k0 = parseFloat(a);
    },
    a: function(a) {
      t.a = parseFloat(a);
    },
    b: function(a) {
      t.b = parseFloat(a);
    },
    r: function(a) {
      t.a = t.b = parseFloat(a);
    },
    r_a: function() {
      t.R_A = !0;
    },
    zone: function(a) {
      t.zone = parseInt(a, 10);
    },
    south: function() {
      t.utmSouth = !0;
    },
    towgs84: function(a) {
      t.datum_params = a.split(",").map(function(l) {
        return parseFloat(l);
      });
    },
    to_meter: function(a) {
      t.to_meter = parseFloat(a);
    },
    units: function(a) {
      t.units = a;
      var l = Pe(Ph, a);
      l && (t.to_meter = l.to_meter);
    },
    from_greenwich: function(a) {
      t.from_greenwich = a * jt;
    },
    pm: function(a) {
      var l = Pe(ne, a);
      t.from_greenwich = (l || parseFloat(a)) * jt;
    },
    nadgrids: function(a) {
      a === "@null" ? t.datumCode = "none" : t.nadgrids = a;
    },
    axis: function(a) {
      var l = "ewnsud";
      a.length === 3 && l.indexOf(a.substr(0, 1)) !== -1 && l.indexOf(a.substr(1, 1)) !== -1 && l.indexOf(a.substr(2, 1)) !== -1 && (t.axis = a);
    },
    approx: function() {
      t.approx = !0;
    },
    over: function() {
      t.over = !0;
    }
  };
  for (r in i)
    n = i[r], r in o ? (s = o[r], typeof s == "function" ? s(n) : t[s] = n) : t[r] = n;
  return typeof t.datumCode == "string" && t.datumCode !== "WGS84" && (t.datumCode = t.datumCode.toLowerCase()), t.projStr = e, t;
}
class Ka {
  static getId(t) {
    const i = t.find((r) => Array.isArray(r) && r[0] === "ID");
    return i && i.length >= 3 ? {
      authority: i[1],
      code: parseInt(i[2], 10)
    } : null;
  }
  static convertUnit(t, i = "unit") {
    if (!t || t.length < 3)
      return { type: i, name: "unknown", conversion_factor: null };
    const r = t[1], n = parseFloat(t[2]) || null, s = t.find((a) => Array.isArray(a) && a[0] === "ID"), o = s ? {
      authority: s[1],
      code: parseInt(s[2], 10)
    } : null;
    return {
      type: i,
      name: r,
      conversion_factor: n,
      id: o
    };
  }
  static convertAxis(t) {
    const i = t[1] || "Unknown";
    let r;
    const n = i.match(/^\((.)\)$/);
    if (n) {
      const h = n[1].toUpperCase();
      if (h === "E") r = "east";
      else if (h === "N") r = "north";
      else if (h === "U") r = "up";
      else if (t[2]) r = t[2];
      else throw new Error(`Unknown axis abbreviation: ${h}`);
    } else
      r = t[2] || "unknown";
    const s = t.find((h) => Array.isArray(h) && h[0] === "ORDER"), o = s ? parseInt(s[1], 10) : null, a = t.find(
      (h) => Array.isArray(h) && (h[0] === "LENGTHUNIT" || h[0] === "ANGLEUNIT" || h[0] === "SCALEUNIT")
    ), l = this.convertUnit(a);
    return {
      name: i,
      direction: r,
      // Use the valid PROJJSON direction value
      unit: l,
      order: o
    };
  }
  static extractAxes(t) {
    return t.filter((i) => Array.isArray(i) && i[0] === "AXIS").map((i) => this.convertAxis(i)).sort((i, r) => (i.order || 0) - (r.order || 0));
  }
  static convert(t, i = {}) {
    switch (t[0]) {
      case "PROJCRS":
        i.type = "ProjectedCRS", i.name = t[1], i.base_crs = t.find((_) => Array.isArray(_) && _[0] === "BASEGEOGCRS") ? this.convert(t.find((_) => Array.isArray(_) && _[0] === "BASEGEOGCRS")) : null, i.conversion = t.find((_) => Array.isArray(_) && _[0] === "CONVERSION") ? this.convert(t.find((_) => Array.isArray(_) && _[0] === "CONVERSION")) : null;
        const r = t.find((_) => Array.isArray(_) && _[0] === "CS");
        r && (i.coordinate_system = {
          type: r[1],
          axis: this.extractAxes(t)
        });
        const n = t.find((_) => Array.isArray(_) && _[0] === "LENGTHUNIT");
        if (n) {
          const _ = this.convertUnit(n);
          i.coordinate_system.unit = _;
        }
        i.id = this.getId(t);
        break;
      case "BASEGEOGCRS":
      case "GEOGCRS":
      case "GEODCRS":
        i.type = t[0] === "GEODCRS" ? "GeodeticCRS" : "GeographicCRS", i.name = t[1];
        const s = t.find(
          (_) => Array.isArray(_) && (_[0] === "DATUM" || _[0] === "ENSEMBLE")
        );
        if (s) {
          const _ = this.convert(s);
          s[0] === "ENSEMBLE" ? i.datum_ensemble = _ : i.datum = _;
          const m = t.find((y) => Array.isArray(y) && y[0] === "PRIMEM");
          m && m[1] !== "Greenwich" && (_.prime_meridian = {
            name: m[1],
            longitude: parseFloat(m[2])
          });
        }
        i.coordinate_system = {
          type: "ellipsoidal",
          axis: this.extractAxes(t)
        }, i.id = this.getId(t);
        break;
      case "DATUM":
        i.type = "GeodeticReferenceFrame", i.name = t[1], i.ellipsoid = t.find((_) => Array.isArray(_) && _[0] === "ELLIPSOID") ? this.convert(t.find((_) => Array.isArray(_) && _[0] === "ELLIPSOID")) : null;
        break;
      case "ENSEMBLE":
        i.type = "DatumEnsemble", i.name = t[1], i.members = t.filter((_) => Array.isArray(_) && _[0] === "MEMBER").map((_) => ({
          type: "DatumEnsembleMember",
          name: _[1],
          id: this.getId(_)
          // Extract ID as { authority, code }
        }));
        const o = t.find((_) => Array.isArray(_) && _[0] === "ENSEMBLEACCURACY");
        o && (i.accuracy = parseFloat(o[1]));
        const a = t.find((_) => Array.isArray(_) && _[0] === "ELLIPSOID");
        a && (i.ellipsoid = this.convert(a)), i.id = this.getId(t);
        break;
      case "ELLIPSOID":
        i.type = "Ellipsoid", i.name = t[1], i.semi_major_axis = parseFloat(t[2]), i.inverse_flattening = parseFloat(t[3]), t.find((_) => Array.isArray(_) && _[0] === "LENGTHUNIT") && this.convert(t.find((_) => Array.isArray(_) && _[0] === "LENGTHUNIT"), i);
        break;
      case "CONVERSION":
        i.type = "Conversion", i.name = t[1], i.method = t.find((_) => Array.isArray(_) && _[0] === "METHOD") ? this.convert(t.find((_) => Array.isArray(_) && _[0] === "METHOD")) : null, i.parameters = t.filter((_) => Array.isArray(_) && _[0] === "PARAMETER").map((_) => this.convert(_));
        break;
      case "METHOD":
        i.type = "Method", i.name = t[1], i.id = this.getId(t);
        break;
      case "PARAMETER":
        i.type = "Parameter", i.name = t[1], i.value = parseFloat(t[2]), i.unit = this.convertUnit(
          t.find(
            (_) => Array.isArray(_) && (_[0] === "LENGTHUNIT" || _[0] === "ANGLEUNIT" || _[0] === "SCALEUNIT")
          )
        ), i.id = this.getId(t);
        break;
      case "BOUNDCRS":
        i.type = "BoundCRS";
        const l = t.find((_) => Array.isArray(_) && _[0] === "SOURCECRS");
        if (l) {
          const _ = l.find((m) => Array.isArray(m));
          i.source_crs = _ ? this.convert(_) : null;
        }
        const h = t.find((_) => Array.isArray(_) && _[0] === "TARGETCRS");
        if (h) {
          const _ = h.find((m) => Array.isArray(m));
          i.target_crs = _ ? this.convert(_) : null;
        }
        const d = t.find((_) => Array.isArray(_) && _[0] === "ABRIDGEDTRANSFORMATION");
        d ? i.transformation = this.convert(d) : i.transformation = null;
        break;
      case "ABRIDGEDTRANSFORMATION":
        if (i.type = "Transformation", i.name = t[1], i.method = t.find((_) => Array.isArray(_) && _[0] === "METHOD") ? this.convert(t.find((_) => Array.isArray(_) && _[0] === "METHOD")) : null, i.parameters = t.filter((_) => Array.isArray(_) && (_[0] === "PARAMETER" || _[0] === "PARAMETERFILE")).map((_) => {
          if (_[0] === "PARAMETER")
            return this.convert(_);
          if (_[0] === "PARAMETERFILE")
            return {
              name: _[1],
              value: _[2],
              id: {
                authority: "EPSG",
                code: 8656
              }
            };
        }), i.parameters.length === 7) {
          const _ = i.parameters[6];
          _.name === "Scale difference" && (_.value = Math.round((_.value - 1) * 1e12) / 1e6);
        }
        i.id = this.getId(t);
        break;
      case "AXIS":
        i.coordinate_system || (i.coordinate_system = { type: "unspecified", axis: [] }), i.coordinate_system.axis.push(this.convertAxis(t));
        break;
      case "LENGTHUNIT":
        const f = this.convertUnit(t, "LinearUnit");
        i.coordinate_system && i.coordinate_system.axis && i.coordinate_system.axis.forEach((_) => {
          _.unit || (_.unit = f);
        }), f.conversion_factor && f.conversion_factor !== 1 && i.semi_major_axis && (i.semi_major_axis = {
          value: i.semi_major_axis,
          unit: f
        });
        break;
      default:
        i.keyword = t[0];
        break;
    }
    return i;
  }
}
class Ah extends Ka {
  static convert(t, i = {}) {
    return super.convert(t, i), i.coordinate_system && i.coordinate_system.subtype === "Cartesian" && delete i.coordinate_system, i.usage && delete i.usage, i;
  }
}
class Nh extends Ka {
  static convert(t, i = {}) {
    super.convert(t, i);
    const r = t.find((s) => Array.isArray(s) && s[0] === "CS");
    r && (i.coordinate_system = {
      subtype: r[1],
      axis: this.extractAxes(t)
    });
    const n = t.find((s) => Array.isArray(s) && s[0] === "USAGE");
    if (n) {
      const s = n.find((l) => Array.isArray(l) && l[0] === "SCOPE"), o = n.find((l) => Array.isArray(l) && l[0] === "AREA"), a = n.find((l) => Array.isArray(l) && l[0] === "BBOX");
      i.usage = {}, s && (i.usage.scope = s[1]), o && (i.usage.area = o[1]), a && (i.usage.bbox = a.slice(1));
    }
    return i;
  }
}
function Rh(e) {
  return e.find((t) => Array.isArray(t) && t[0] === "USAGE") ? "2019" : (e.find((t) => Array.isArray(t) && t[0] === "CS") || e[0] === "BOUNDCRS" || e[0] === "PROJCRS" || e[0] === "GEOGCRS", "2015");
}
function Ih(e) {
  return (Rh(e) === "2019" ? Nh : Ah).convert(e);
}
function Th(e) {
  const t = e.toUpperCase();
  return t.includes("PROJCRS") || t.includes("GEOGCRS") || t.includes("BOUNDCRS") || t.includes("VERTCRS") || t.includes("LENGTHUNIT") || t.includes("ANGLEUNIT") || t.includes("SCALEUNIT") ? "WKT2" : (t.includes("PROJCS") || t.includes("GEOGCS") || t.includes("LOCAL_CS") || t.includes("VERT_CS") || t.includes("UNIT"), "WKT1");
}
var ji = 1, Ja = 2, Ya = 3, pr = 4, Za = 5, Gn = -1, Ch = /\s/, Fh = /[A-Za-z]/, Gh = /[A-Za-z84_]/, Rr = /[,\]]/, to = /[\d\.E\-\+]/;
function we(e) {
  if (typeof e != "string")
    throw new Error("not a string");
  this.text = e.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = ji;
}
we.prototype.readCharicter = function() {
  var e = this.text[this.place++];
  if (this.state !== pr)
    for (; Ch.test(e); ) {
      if (this.place >= this.text.length)
        return;
      e = this.text[this.place++];
    }
  switch (this.state) {
    case ji:
      return this.neutral(e);
    case Ja:
      return this.keyword(e);
    case pr:
      return this.quoted(e);
    case Za:
      return this.afterquote(e);
    case Ya:
      return this.number(e);
    case Gn:
      return;
  }
};
we.prototype.afterquote = function(e) {
  if (e === '"') {
    this.word += '"', this.state = pr;
    return;
  }
  if (Rr.test(e)) {
    this.word = this.word.trim(), this.afterItem(e);
    return;
  }
  throw new Error(`havn't handled "` + e + '" in afterquote yet, index ' + this.place);
};
we.prototype.afterItem = function(e) {
  if (e === ",") {
    this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = ji;
    return;
  }
  if (e === "]") {
    this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = ji, this.currentObject = this.stack.pop(), this.currentObject || (this.state = Gn);
    return;
  }
};
we.prototype.number = function(e) {
  if (to.test(e)) {
    this.word += e;
    return;
  }
  if (Rr.test(e)) {
    this.word = parseFloat(this.word), this.afterItem(e);
    return;
  }
  throw new Error(`havn't handled "` + e + '" in number yet, index ' + this.place);
};
we.prototype.quoted = function(e) {
  if (e === '"') {
    this.state = Za;
    return;
  }
  this.word += e;
};
we.prototype.keyword = function(e) {
  if (Gh.test(e)) {
    this.word += e;
    return;
  }
  if (e === "[") {
    var t = [];
    t.push(this.word), this.level++, this.root === null ? this.root = t : this.currentObject.push(t), this.stack.push(this.currentObject), this.currentObject = t, this.state = ji;
    return;
  }
  if (Rr.test(e)) {
    this.afterItem(e);
    return;
  }
  throw new Error(`havn't handled "` + e + '" in keyword yet, index ' + this.place);
};
we.prototype.neutral = function(e) {
  if (Fh.test(e)) {
    this.word = e, this.state = Ja;
    return;
  }
  if (e === '"') {
    this.word = "", this.state = pr;
    return;
  }
  if (to.test(e)) {
    this.word = e, this.state = Ya;
    return;
  }
  if (Rr.test(e)) {
    this.afterItem(e);
    return;
  }
  throw new Error(`havn't handled "` + e + '" in neutral yet, index ' + this.place);
};
we.prototype.output = function() {
  for (; this.place < this.text.length; )
    this.readCharicter();
  if (this.state === Gn)
    return this.root;
  throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
};
function Dh(e) {
  var t = new we(e);
  return t.output();
}
function ln(e, t, i) {
  Array.isArray(t) && (i.unshift(t), t = null);
  var r = t ? {} : e, n = i.reduce(function(s, o) {
    return Ke(o, s), s;
  }, r);
  t && (e[t] = n);
}
function Ke(e, t) {
  if (!Array.isArray(e)) {
    t[e] = !0;
    return;
  }
  var i = e.shift();
  if (i === "PARAMETER" && (i = e.shift()), e.length === 1) {
    if (Array.isArray(e[0])) {
      t[i] = {}, Ke(e[0], t[i]);
      return;
    }
    t[i] = e[0];
    return;
  }
  if (!e.length) {
    t[i] = !0;
    return;
  }
  if (i === "TOWGS84") {
    t[i] = e;
    return;
  }
  if (i === "AXIS") {
    i in t || (t[i] = []), t[i].push(e);
    return;
  }
  Array.isArray(i) || (t[i] = {});
  var r;
  switch (i) {
    case "UNIT":
    case "PRIMEM":
    case "VERT_DATUM":
      t[i] = {
        name: e[0].toLowerCase(),
        convert: e[1]
      }, e.length === 3 && Ke(e[2], t[i]);
      return;
    case "SPHEROID":
    case "ELLIPSOID":
      t[i] = {
        name: e[0],
        a: e[1],
        rf: e[2]
      }, e.length === 4 && Ke(e[3], t[i]);
      return;
    case "EDATUM":
    case "ENGINEERINGDATUM":
    case "LOCAL_DATUM":
    case "DATUM":
    case "VERT_CS":
    case "VERTCRS":
    case "VERTICALCRS":
      e[0] = ["name", e[0]], ln(t, i, e);
      return;
    case "COMPD_CS":
    case "COMPOUNDCRS":
    case "FITTED_CS":
    // the followings are the crs defined in
    // https://github.com/proj4js/proj4js/blob/1da4ed0b865d0fcb51c136090569210cdcc9019e/lib/parseCode.js#L11
    case "PROJECTEDCRS":
    case "PROJCRS":
    case "GEOGCS":
    case "GEOCCS":
    case "PROJCS":
    case "LOCAL_CS":
    case "GEODCRS":
    case "GEODETICCRS":
    case "GEODETICDATUM":
    case "ENGCRS":
    case "ENGINEERINGCRS":
      e[0] = ["name", e[0]], ln(t, i, e), t[i].type = i;
      return;
    default:
      for (r = -1; ++r < e.length; )
        if (!Array.isArray(e[r]))
          return Ke(e, t[i]);
      return ln(t, i, e);
  }
}
var Oh = 0.017453292519943295;
function se(e) {
  return e * Oh;
}
function eo(e) {
  const t = (e.projName || "").toLowerCase().replace(/_/g, " ");
  e.long0 === void 0 && e.longc !== void 0 && (e.long0 = e.longc), !e.lat_ts && e.lat1 && (t === "stereographic south pole" || t === "polar stereographic (variant b)") ? (e.lat0 = se(e.lat1 > 0 ? 90 : -90), e.lat_ts = e.lat1, delete e.lat1) : !e.lat_ts && e.lat0 && (t === "polar stereographic" || t === "polar stereographic (variant a)") && (e.lat_ts = e.lat0, e.lat0 = se(e.lat0 > 0 ? 90 : -90), delete e.lat1);
}
function Zs(e) {
  let t = { units: null, to_meter: void 0 };
  return typeof e == "string" ? (t.units = e.toLowerCase(), t.units === "metre" && (t.units = "meter"), t.units === "meter" && (t.to_meter = 1)) : e && e.name && (t.units = e.name.toLowerCase(), t.units === "metre" && (t.units = "meter"), t.to_meter = e.conversion_factor), t;
}
function ta(e) {
  return typeof e == "object" ? e.value * e.unit.conversion_factor : e;
}
function ea(e, t) {
  e.ellipsoid.radius ? (t.a = e.ellipsoid.radius, t.rf = 0) : (t.a = ta(e.ellipsoid.semi_major_axis), e.ellipsoid.inverse_flattening !== void 0 ? t.rf = e.ellipsoid.inverse_flattening : e.ellipsoid.semi_major_axis !== void 0 && e.ellipsoid.semi_minor_axis !== void 0 && (t.rf = t.a / (t.a - ta(e.ellipsoid.semi_minor_axis))));
}
function yr(e, t = {}) {
  return !e || typeof e != "object" ? e : e.type === "BoundCRS" ? (yr(e.source_crs, t), e.transformation && (e.transformation.method && e.transformation.method.name === "NTv2" ? t.nadgrids = e.transformation.parameters[0].value : t.datum_params = e.transformation.parameters.map((i) => i.value)), t) : (Object.keys(e).forEach((i) => {
    const r = e[i];
    if (r !== null)
      switch (i) {
        case "name":
          if (t.srsCode)
            break;
          t.name = r, t.srsCode = r;
          break;
        case "type":
          r === "GeographicCRS" ? t.projName = "longlat" : r === "GeodeticCRS" ? e.coordinate_system && e.coordinate_system.subtype === "Cartesian" ? t.projName = "geocent" : t.projName = "longlat" : r === "ProjectedCRS" && e.conversion && e.conversion.method && (t.projName = e.conversion.method.name);
          break;
        case "datum":
        case "datum_ensemble":
          r.ellipsoid && (t.ellps = r.ellipsoid.name, ea(r, t)), r.prime_meridian && (t.from_greenwich = r.prime_meridian.longitude * Math.PI / 180);
          break;
        case "ellipsoid":
          t.ellps = r.name, ea(r, t);
          break;
        case "prime_meridian":
          t.long0 = (r.longitude || 0) * Math.PI / 180;
          break;
        case "coordinate_system":
          if (r.axis) {
            const n = {
              east: "e",
              north: "n",
              west: "w",
              south: "s",
              up: "u",
              down: "d",
              geocentricx: "e",
              geocentricy: "n",
              geocentricz: "u"
            }, s = r.axis.map((o) => n[o.direction.toLowerCase()]);
            if (s.every(Boolean) && (t.axis = s.join(""), t.axis.length === 2 && (t.axis += "u")), r.unit) {
              const { units: o, to_meter: a } = Zs(r.unit);
              t.units = o, t.to_meter = a;
            } else if (r.axis[0] && r.axis[0].unit) {
              const { units: o, to_meter: a } = Zs(r.axis[0].unit);
              t.units = o, t.to_meter = a;
            }
          }
          break;
        case "id":
          r.authority && r.code && (t.title = r.authority + ":" + r.code);
          break;
        case "conversion":
          r.method && r.method.name && (t.projName = r.method.name), r.parameters && r.parameters.forEach((n) => {
            const s = n.name.toLowerCase().replace(/\s+/g, "_"), o = n.value;
            n.unit && n.unit.conversion_factor ? t[s] = o * n.unit.conversion_factor : n.unit === "degree" ? t[s] = o * Math.PI / 180 : t[s] = o;
          });
          break;
        case "unit":
          r.name && (t.units = r.name.toLowerCase(), t.units === "metre" && (t.units = "meter")), r.conversion_factor && (t.to_meter = r.conversion_factor);
          break;
        case "base_crs":
          yr(r, t), t.datumCode = r.id ? r.id.authority + "_" + r.id.code : r.name;
          break;
      }
  }), t.latitude_of_false_origin !== void 0 && (t.lat0 = t.latitude_of_false_origin), t.longitude_of_false_origin !== void 0 && (t.long0 = t.longitude_of_false_origin), t.latitude_of_standard_parallel !== void 0 && (t.lat0 = t.latitude_of_standard_parallel, t.lat1 = t.latitude_of_standard_parallel), t.latitude_of_1st_standard_parallel !== void 0 && (t.lat1 = t.latitude_of_1st_standard_parallel), t.latitude_of_2nd_standard_parallel !== void 0 && (t.lat2 = t.latitude_of_2nd_standard_parallel), t.latitude_of_projection_centre !== void 0 && (t.lat0 = t.latitude_of_projection_centre), t.longitude_of_projection_centre !== void 0 && (t.longc = t.longitude_of_projection_centre), t.easting_at_false_origin !== void 0 && (t.x0 = t.easting_at_false_origin), t.northing_at_false_origin !== void 0 && (t.y0 = t.northing_at_false_origin), t.latitude_of_natural_origin !== void 0 && (t.lat0 = t.latitude_of_natural_origin), t.longitude_of_natural_origin !== void 0 && (t.long0 = t.longitude_of_natural_origin), t.longitude_of_origin !== void 0 && (t.long0 = t.longitude_of_origin), t.false_easting !== void 0 && (t.x0 = t.false_easting), t.easting_at_projection_centre && (t.x0 = t.easting_at_projection_centre), t.false_northing !== void 0 && (t.y0 = t.false_northing), t.northing_at_projection_centre && (t.y0 = t.northing_at_projection_centre), t.standard_parallel_1 !== void 0 && (t.lat1 = t.standard_parallel_1), t.standard_parallel_2 !== void 0 && (t.lat2 = t.standard_parallel_2), t.scale_factor_at_natural_origin !== void 0 && (t.k0 = t.scale_factor_at_natural_origin), t.scale_factor_at_projection_centre !== void 0 && (t.k0 = t.scale_factor_at_projection_centre), t.scale_factor_on_pseudo_standard_parallel !== void 0 && (t.k0 = t.scale_factor_on_pseudo_standard_parallel), t.azimuth !== void 0 && (t.alpha = t.azimuth), t.azimuth_at_projection_centre !== void 0 && (t.alpha = t.azimuth_at_projection_centre), t.angle_from_rectified_to_skew_grid && (t.rectified_grid_angle = t.angle_from_rectified_to_skew_grid), eo(t), t);
}
var Lh = [
  "PROJECTEDCRS",
  "PROJCRS",
  "GEOGCS",
  "GEOCCS",
  "PROJCS",
  "LOCAL_CS",
  "GEODCRS",
  "GEODETICCRS",
  "GEODETICDATUM",
  "ENGCRS",
  "ENGINEERINGCRS"
];
function $h(e, t) {
  var i = t[0], r = t[1];
  !(i in e) && r in e && (e[i] = e[r], t.length === 3 && (e[i] = t[2](e[i])));
}
function io(e) {
  for (var t = Object.keys(e), i = 0, r = t.length; i < r; ++i) {
    var n = t[i];
    Lh.indexOf(n) !== -1 && jh(e[n]), typeof e[n] == "object" && io(e[n]);
  }
}
function jh(e) {
  if (e.AUTHORITY) {
    var t = Object.keys(e.AUTHORITY)[0];
    t && t in e.AUTHORITY && (e.title = t + ":" + e.AUTHORITY[t]);
  }
  if (e.type === "GEOGCS" ? e.projName = "longlat" : e.type === "LOCAL_CS" ? (e.projName = "identity", e.local = !0) : typeof e.PROJECTION == "object" ? e.projName = Object.keys(e.PROJECTION)[0] : e.projName = e.PROJECTION, e.AXIS) {
    for (var i = "", r = 0, n = e.AXIS.length; r < n; ++r) {
      var s = [e.AXIS[r][0].toLowerCase(), e.AXIS[r][1].toLowerCase()];
      s[0].indexOf("north") !== -1 || (s[0] === "y" || s[0] === "lat") && s[1] === "north" ? i += "n" : s[0].indexOf("south") !== -1 || (s[0] === "y" || s[0] === "lat") && s[1] === "south" ? i += "s" : s[0].indexOf("east") !== -1 || (s[0] === "x" || s[0] === "lon") && s[1] === "east" ? i += "e" : (s[0].indexOf("west") !== -1 || (s[0] === "x" || s[0] === "lon") && s[1] === "west") && (i += "w");
    }
    i.length === 2 && (i += "u"), i.length === 3 && (e.axis = i);
  }
  e.UNIT && (e.units = e.UNIT.name.toLowerCase(), e.units === "metre" && (e.units = "meter"), e.UNIT.convert && (e.type === "GEOGCS" ? e.DATUM && e.DATUM.SPHEROID && (e.to_meter = e.UNIT.convert * e.DATUM.SPHEROID.a) : e.to_meter = e.UNIT.convert));
  var o = e.GEOGCS;
  e.type === "GEOGCS" && (o = e), o && (o.PRIMEM && o.PRIMEM.convert && (e.from_greenwich = se(o.PRIMEM.convert)), o.DATUM ? e.datumCode = o.DATUM.name.toLowerCase() : e.datumCode = o.name.toLowerCase(), e.datumCode.slice(0, 2) === "d_" && (e.datumCode = e.datumCode.slice(2)), e.datumCode === "new_zealand_1949" && (e.datumCode = "nzgd49"), (e.datumCode === "wgs_1984" || e.datumCode === "world_geodetic_system_1984") && (e.PROJECTION === "Mercator_Auxiliary_Sphere" && (e.sphere = !0), e.datumCode = "wgs84"), e.datumCode === "belge_1972" && (e.datumCode = "rnb72"), o.DATUM && o.DATUM.SPHEROID && (e.ellps = o.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), e.ellps.toLowerCase().slice(0, 13) === "international" && (e.ellps = "intl"), e.a = o.DATUM.SPHEROID.a, e.rf = parseFloat(o.DATUM.SPHEROID.rf)), o.DATUM && o.DATUM.TOWGS84 && (e.datum_params = o.DATUM.TOWGS84), ~e.datumCode.indexOf("osgb_1936") && (e.datumCode = "osgb36"), ~e.datumCode.indexOf("osni_1952") && (e.datumCode = "osni52"), (~e.datumCode.indexOf("tm65") || ~e.datumCode.indexOf("geodetic_datum_of_1965")) && (e.datumCode = "ire65"), e.datumCode === "ch1903+" && (e.datumCode = "ch1903"), ~e.datumCode.indexOf("israel") && (e.datumCode = "isr93")), e.b && !isFinite(e.b) && (e.b = e.a), e.rectified_grid_angle && (e.rectified_grid_angle = se(e.rectified_grid_angle));
  function a(d) {
    var f = e.to_meter || 1;
    return d * f;
  }
  var l = function(d) {
    return $h(e, d);
  }, h = [
    ["standard_parallel_1", "Standard_Parallel_1"],
    ["standard_parallel_1", "Latitude of 1st standard parallel"],
    ["standard_parallel_2", "Standard_Parallel_2"],
    ["standard_parallel_2", "Latitude of 2nd standard parallel"],
    ["false_easting", "False_Easting"],
    ["false_easting", "False easting"],
    ["false-easting", "Easting at false origin"],
    ["false_northing", "False_Northing"],
    ["false_northing", "False northing"],
    ["false_northing", "Northing at false origin"],
    ["central_meridian", "Central_Meridian"],
    ["central_meridian", "Longitude of natural origin"],
    ["central_meridian", "Longitude of false origin"],
    ["latitude_of_origin", "Latitude_Of_Origin"],
    ["latitude_of_origin", "Central_Parallel"],
    ["latitude_of_origin", "Latitude of natural origin"],
    ["latitude_of_origin", "Latitude of false origin"],
    ["scale_factor", "Scale_Factor"],
    ["k0", "scale_factor"],
    ["latitude_of_center", "Latitude_Of_Center"],
    ["latitude_of_center", "Latitude_of_center"],
    ["lat0", "latitude_of_center", se],
    ["longitude_of_center", "Longitude_Of_Center"],
    ["longitude_of_center", "Longitude_of_center"],
    ["longc", "longitude_of_center", se],
    ["x0", "false_easting", a],
    ["y0", "false_northing", a],
    ["long0", "central_meridian", se],
    ["lat0", "latitude_of_origin", se],
    ["lat0", "standard_parallel_1", se],
    ["lat1", "standard_parallel_1", se],
    ["lat2", "standard_parallel_2", se],
    ["azimuth", "Azimuth"],
    ["alpha", "azimuth", se],
    ["srsCode", "name"]
  ];
  h.forEach(l), eo(e);
}
function br(e) {
  if (typeof e == "object")
    return yr(e);
  const t = Th(e);
  var i = Dh(e);
  if (t === "WKT2") {
    const s = Ih(i);
    return yr(s);
  }
  var r = i[0], n = {};
  return Ke(i, n), io(n), n[r];
}
function zt(e) {
  var t = this;
  if (arguments.length === 2) {
    var i = arguments[1];
    typeof i == "string" ? i.charAt(0) === "+" ? zt[
      /** @type {string} */
      e
    ] = En(arguments[1]) : zt[
      /** @type {string} */
      e
    ] = br(arguments[1]) : i && typeof i == "object" && !("projName" in i) ? zt[
      /** @type {string} */
      e
    ] = br(arguments[1]) : (zt[
      /** @type {string} */
      e
    ] = i, i || delete zt[
      /** @type {string} */
      e
    ]);
  } else if (arguments.length === 1) {
    if (Array.isArray(e))
      return e.map(function(r) {
        return Array.isArray(r) ? zt.apply(t, r) : zt(r);
      });
    if (typeof e == "string") {
      if (e in zt)
        return zt[e];
    } else "EPSG" in e ? zt["EPSG:" + e.EPSG] = e : "ESRI" in e ? zt["ESRI:" + e.ESRI] = e : "IAU2000" in e ? zt["IAU2000:" + e.IAU2000] = e : console.log(e);
    return;
  }
}
wh(zt);
function Bh(e) {
  return typeof e == "string";
}
function kh(e) {
  return e in zt;
}
function qh(e) {
  return e.indexOf("+") !== 0 && e.indexOf("[") !== -1 || typeof e == "object" && !("srsCode" in e);
}
var ia = ["3857", "900913", "3785", "102113"];
function Uh(e) {
  if (e.title)
    return e.title.toLowerCase().indexOf("epsg:") === 0 && ia.indexOf(e.title.substr(5)) > -1;
  var t = Pe(e, "authority");
  if (t) {
    var i = Pe(t, "epsg");
    return i && ia.indexOf(i) > -1;
  }
}
function Wh(e) {
  var t = Pe(e, "extension");
  if (t)
    return Pe(t, "proj4");
}
function Hh(e) {
  return e[0] === "+";
}
function zh(e) {
  let t;
  if (Bh(e))
    if (kh(e))
      t = zt[e];
    else if (qh(e)) {
      t = br(e);
      var i = Wh(t);
      i && (t = En(i));
    } else Hh(e) && (t = En(e));
  else "projName" in e ? t = e : t = br(e);
  return t && Uh(t) ? zt["EPSG:3857"] : t;
}
function ra(e, t) {
  e = e || {};
  var i, r;
  if (!t)
    return e;
  for (r in t)
    i = t[r], i !== void 0 && (e[r] = i);
  return e;
}
function de(e, t, i) {
  var r = e * t;
  return i / Math.sqrt(1 - r * r);
}
function Ui(e) {
  return e < 0 ? -1 : 1;
}
function ut(e, t) {
  return t || Math.abs(e) <= kt ? e : e - Ui(e) * $i;
}
function le(e, t, i) {
  var r = e * i, n = 0.5 * e;
  return r = Math.pow((1 - r) / (1 + r), n), Math.tan(0.5 * (Z - t)) / r;
}
function Bi(e, t) {
  for (var i = 0.5 * e, r, n, s = Z - 2 * Math.atan(t), o = 0; o <= 15; o++)
    if (r = e * Math.sin(s), n = Z - 2 * Math.atan(t * Math.pow((1 - r) / (1 + r), i)) - s, s += n, Math.abs(n) <= 1e-10)
      return s;
  return -9999;
}
function Qh() {
  var e = this.b / this.a;
  this.es = 1 - e * e, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = de(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
}
function Vh(e) {
  var t = e.x, i = e.y;
  if (i * ie > 90 && i * ie < -90 && t * ie > 180 && t * ie < -180)
    return null;
  var r, n;
  if (Math.abs(Math.abs(i) - Z) <= ot)
    return null;
  if (this.sphere)
    r = this.x0 + this.a * this.k0 * ut(t - this.long0, this.over), n = this.y0 + this.a * this.k0 * Math.log(Math.tan(It + 0.5 * i));
  else {
    var s = Math.sin(i), o = le(this.e, i, s);
    r = this.x0 + this.a * this.k0 * ut(t - this.long0, this.over), n = this.y0 - this.a * this.k0 * Math.log(o);
  }
  return e.x = r, e.y = n, e;
}
function Xh(e) {
  var t = e.x - this.x0, i = e.y - this.y0, r, n;
  if (this.sphere)
    n = Z - 2 * Math.atan(Math.exp(-i / (this.a * this.k0)));
  else {
    var s = Math.exp(-i / (this.a * this.k0));
    if (n = Bi(this.e, s), n === -9999)
      return null;
  }
  return r = ut(this.long0 + t / (this.a * this.k0), this.over), e.x = r, e.y = n, e;
}
var Kh = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "Mercator_Variant_A", "merc"];
const Jh = {
  init: Qh,
  forward: Vh,
  inverse: Xh,
  names: Kh
};
function Yh() {
}
function na(e) {
  return e;
}
var ro = ["longlat", "identity"];
const Zh = {
  init: Yh,
  forward: na,
  inverse: na,
  names: ro
};
var tl = [Jh, Zh], Oe = {}, Je = [];
function no(e, t) {
  var i = Je.length;
  return e.names ? (Je[i] = e, e.names.forEach(function(r) {
    Oe[r.toLowerCase()] = i;
  }), this) : (console.log(t), !0);
}
function so(e) {
  return e.replace(/[-\(\)\s]+/g, " ").trim().replace(/ /g, "_");
}
function el(e) {
  if (!e)
    return !1;
  var t = e.toLowerCase();
  if (typeof Oe[t] < "u" && Je[Oe[t]] || (t = so(t), t in Oe && Je[Oe[t]]))
    return Je[Oe[t]];
}
function il() {
  tl.forEach(no);
}
const rl = {
  start: il,
  add: no,
  get: el
};
var ao = {
  MERIT: {
    a: 6378137,
    rf: 298.257,
    ellipseName: "MERIT 1983"
  },
  SGS85: {
    a: 6378136,
    rf: 298.257,
    ellipseName: "Soviet Geodetic System 85"
  },
  GRS80: {
    a: 6378137,
    rf: 298.257222101,
    ellipseName: "GRS 1980(IUGG, 1980)"
  },
  IAU76: {
    a: 6378140,
    rf: 298.257,
    ellipseName: "IAU 1976"
  },
  airy: {
    a: 6377563396e-3,
    b: 635625691e-2,
    ellipseName: "Airy 1830"
  },
  APL4: {
    a: 6378137,
    rf: 298.25,
    ellipseName: "Appl. Physics. 1965"
  },
  NWL9D: {
    a: 6378145,
    rf: 298.25,
    ellipseName: "Naval Weapons Lab., 1965"
  },
  mod_airy: {
    a: 6377340189e-3,
    b: 6356034446e-3,
    ellipseName: "Modified Airy"
  },
  andrae: {
    a: 637710443e-2,
    rf: 300,
    ellipseName: "Andrae 1876 (Den., Iclnd.)"
  },
  aust_SA: {
    a: 6378160,
    rf: 298.25,
    ellipseName: "Australian Natl & S. Amer. 1969"
  },
  GRS67: {
    a: 6378160,
    rf: 298.247167427,
    ellipseName: "GRS 67(IUGG 1967)"
  },
  bessel: {
    a: 6377397155e-3,
    rf: 299.1528128,
    ellipseName: "Bessel 1841"
  },
  bess_nam: {
    a: 6377483865e-3,
    rf: 299.1528128,
    ellipseName: "Bessel 1841 (Namibia)"
  },
  clrk66: {
    a: 63782064e-1,
    b: 63565838e-1,
    ellipseName: "Clarke 1866"
  },
  clrk80: {
    a: 6378249145e-3,
    rf: 293.4663,
    ellipseName: "Clarke 1880 mod."
  },
  clrk80ign: {
    a: 63782492e-1,
    b: 6356515,
    rf: 293.4660213,
    ellipseName: "Clarke 1880 (IGN)"
  },
  clrk58: {
    a: 6378293645208759e-9,
    rf: 294.2606763692654,
    ellipseName: "Clarke 1858"
  },
  CPM: {
    a: 63757387e-1,
    rf: 334.29,
    ellipseName: "Comm. des Poids et Mesures 1799"
  },
  delmbr: {
    a: 6376428,
    rf: 311.5,
    ellipseName: "Delambre 1810 (Belgium)"
  },
  engelis: {
    a: 637813605e-2,
    rf: 298.2566,
    ellipseName: "Engelis 1985"
  },
  evrst30: {
    a: 6377276345e-3,
    rf: 300.8017,
    ellipseName: "Everest 1830"
  },
  evrst48: {
    a: 6377304063e-3,
    rf: 300.8017,
    ellipseName: "Everest 1948"
  },
  evrst56: {
    a: 6377301243e-3,
    rf: 300.8017,
    ellipseName: "Everest 1956"
  },
  evrst69: {
    a: 6377295664e-3,
    rf: 300.8017,
    ellipseName: "Everest 1969"
  },
  evrstSS: {
    a: 6377298556e-3,
    rf: 300.8017,
    ellipseName: "Everest (Sabah & Sarawak)"
  },
  fschr60: {
    a: 6378166,
    rf: 298.3,
    ellipseName: "Fischer (Mercury Datum) 1960"
  },
  fschr60m: {
    a: 6378155,
    rf: 298.3,
    ellipseName: "Fischer 1960"
  },
  fschr68: {
    a: 6378150,
    rf: 298.3,
    ellipseName: "Fischer 1968"
  },
  helmert: {
    a: 6378200,
    rf: 298.3,
    ellipseName: "Helmert 1906"
  },
  hough: {
    a: 6378270,
    rf: 297,
    ellipseName: "Hough"
  },
  intl: {
    a: 6378388,
    rf: 297,
    ellipseName: "International 1909 (Hayford)"
  },
  kaula: {
    a: 6378163,
    rf: 298.24,
    ellipseName: "Kaula 1961"
  },
  lerch: {
    a: 6378139,
    rf: 298.257,
    ellipseName: "Lerch 1979"
  },
  mprts: {
    a: 6397300,
    rf: 191,
    ellipseName: "Maupertius 1738"
  },
  new_intl: {
    a: 63781575e-1,
    b: 63567722e-1,
    ellipseName: "New International 1967"
  },
  plessis: {
    a: 6376523,
    rf: 6355863,
    ellipseName: "Plessis 1817 (France)"
  },
  krass: {
    a: 6378245,
    rf: 298.3,
    ellipseName: "Krassovsky, 1942"
  },
  SEasia: {
    a: 6378155,
    b: 63567733205e-4,
    ellipseName: "Southeast Asia"
  },
  walbeck: {
    a: 6376896,
    b: 63558348467e-4,
    ellipseName: "Walbeck"
  },
  WGS60: {
    a: 6378165,
    rf: 298.3,
    ellipseName: "WGS 60"
  },
  WGS66: {
    a: 6378145,
    rf: 298.25,
    ellipseName: "WGS 66"
  },
  WGS7: {
    a: 6378135,
    rf: 298.26,
    ellipseName: "WGS 72"
  },
  WGS84: {
    a: 6378137,
    rf: 298.257223563,
    ellipseName: "WGS 84"
  },
  sphere: {
    a: 6370997,
    b: 6370997,
    ellipseName: "Normal Sphere (r=6370997)"
  }
};
const nl = ao.WGS84;
function sl(e, t, i, r) {
  var n = e * e, s = t * t, o = (n - s) / n, a = 0;
  r ? (e *= 1 - o * (xh + o * (Sh + o * Mh)), n = e * e, o = 0) : a = Math.sqrt(o);
  var l = (n - s) / s;
  return {
    es: o,
    e: a,
    ep2: l
  };
}
function al(e, t, i, r, n) {
  if (!e) {
    var s = Pe(ao, r);
    s || (s = nl), e = s.a, t = s.b, i = s.rf;
  }
  return i && !t && (t = (1 - 1 / i) * e), (i === 0 || Math.abs(e - t) < ot) && (n = !0, t = e), {
    a: e,
    b: t,
    rf: i,
    sphere: n
  };
}
var cr = {
  wgs84: {
    towgs84: "0,0,0",
    ellipse: "WGS84",
    datumName: "WGS84"
  },
  ch1903: {
    towgs84: "674.374,15.056,405.346",
    ellipse: "bessel",
    datumName: "swiss"
  },
  ggrs87: {
    towgs84: "-199.87,74.79,246.62",
    ellipse: "GRS80",
    datumName: "Greek_Geodetic_Reference_System_1987"
  },
  nad83: {
    towgs84: "0,0,0",
    ellipse: "GRS80",
    datumName: "North_American_Datum_1983"
  },
  nad27: {
    nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
    ellipse: "clrk66",
    datumName: "North_American_Datum_1927"
  },
  potsdam: {
    towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7",
    ellipse: "bessel",
    datumName: "Potsdam Rauenberg 1950 DHDN"
  },
  carthage: {
    towgs84: "-263.0,6.0,431.0",
    ellipse: "clark80",
    datumName: "Carthage 1934 Tunisia"
  },
  hermannskogel: {
    towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
    ellipse: "bessel",
    datumName: "Hermannskogel"
  },
  mgi: {
    towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
    ellipse: "bessel",
    datumName: "Militar-Geographische Institut"
  },
  osni52: {
    towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
    ellipse: "airy",
    datumName: "Irish National"
  },
  ire65: {
    towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
    ellipse: "mod_airy",
    datumName: "Ireland 1965"
  },
  rassadiran: {
    towgs84: "-133.63,-157.5,-158.62",
    ellipse: "intl",
    datumName: "Rassadiran"
  },
  nzgd49: {
    towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
    ellipse: "intl",
    datumName: "New Zealand Geodetic Datum 1949"
  },
  osgb36: {
    towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
    ellipse: "airy",
    datumName: "Ordnance Survey of Great Britain 1936"
  },
  s_jtsk: {
    towgs84: "589,76,480",
    ellipse: "bessel",
    datumName: "S-JTSK (Ferro)"
  },
  beduaram: {
    towgs84: "-106,-87,188",
    ellipse: "clrk80",
    datumName: "Beduaram"
  },
  gunung_segara: {
    towgs84: "-403,684,41",
    ellipse: "bessel",
    datumName: "Gunung Segara Jakarta"
  },
  rnb72: {
    towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
    ellipse: "intl",
    datumName: "Reseau National Belge 1972"
  },
  EPSG_5451: {
    towgs84: "6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649"
  },
  IGNF_LURESG: {
    towgs84: "-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43"
  },
  EPSG_4614: {
    towgs84: "-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065"
  },
  EPSG_4615: {
    towgs84: "-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748"
  },
  ESRI_37241: {
    towgs84: "-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031"
  },
  ESRI_37249: {
    towgs84: "-440.296,58.548,296.265,1.128,10.202,4.559,-0.438"
  },
  ESRI_37245: {
    towgs84: "-511.151,-181.269,139.609,1.05,2.703,1.798,3.071"
  },
  EPSG_4178: {
    towgs84: "24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01"
  },
  EPSG_4622: {
    towgs84: "-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984"
  },
  EPSG_4625: {
    towgs84: "126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227"
  },
  EPSG_5252: {
    towgs84: "0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439"
  },
  EPSG_4314: {
    towgs84: "597.1,71.4,412.1,0.894,0.068,-1.563,7.58"
  },
  EPSG_4282: {
    towgs84: "-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166"
  },
  EPSG_4231: {
    towgs84: "-83.11,-97.38,-117.22,0.005693,-0.044698,0.044285,0.1218"
  },
  EPSG_4274: {
    towgs84: "-230.994,102.591,25.199,0.633,-0.239,0.9,1.95"
  },
  EPSG_4134: {
    towgs84: "-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006"
  },
  EPSG_4254: {
    towgs84: "18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013"
  },
  EPSG_4159: {
    towgs84: "-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175"
  },
  EPSG_4687: {
    towgs84: "0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093"
  },
  EPSG_4227: {
    towgs84: "-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225"
  },
  EPSG_4746: {
    towgs84: "599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46"
  },
  EPSG_4745: {
    towgs84: "612.4,77,440.2,-0.054,0.057,-2.797,2.55"
  },
  EPSG_6311: {
    towgs84: "8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926"
  },
  EPSG_4289: {
    towgs84: "565.7381,50.4018,465.2904,-0.395026,0.330772,-1.876073,4.07244"
  },
  EPSG_4230: {
    towgs84: "-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4"
  },
  EPSG_4154: {
    towgs84: "-123.02,-158.95,-168.47"
  },
  EPSG_4156: {
    towgs84: "570.8,85.7,462.8,4.998,1.587,5.261,3.56"
  },
  EPSG_4299: {
    towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"
  },
  EPSG_4179: {
    towgs84: "33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84"
  },
  EPSG_4313: {
    towgs84: "-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747"
  },
  EPSG_4194: {
    towgs84: "163.511,127.533,-159.789"
  },
  EPSG_4195: {
    towgs84: "105,326,-102.5"
  },
  EPSG_4196: {
    towgs84: "-45,417,-3.5"
  },
  EPSG_4611: {
    towgs84: "-162.619,-276.959,-161.764,0.067753,-2.243648,-1.158828,-1.094246"
  },
  EPSG_4633: {
    towgs84: "137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824"
  },
  EPSG_4641: {
    towgs84: "-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993"
  },
  EPSG_4643: {
    towgs84: "-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002"
  },
  EPSG_4300: {
    towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"
  },
  EPSG_4188: {
    towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"
  },
  EPSG_4660: {
    towgs84: "982.6087,552.753,-540.873,6.681627,-31.611492,-19.848161,16.805"
  },
  EPSG_4662: {
    towgs84: "97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259"
  },
  EPSG_3906: {
    towgs84: "577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664"
  },
  EPSG_4307: {
    towgs84: "-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547"
  },
  EPSG_6892: {
    towgs84: "-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686"
  },
  EPSG_4690: {
    towgs84: "221.597,152.441,176.523,2.403,1.3893,0.884,11.4648"
  },
  EPSG_4691: {
    towgs84: "218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817"
  },
  EPSG_4629: {
    towgs84: "72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653"
  },
  EPSG_4630: {
    towgs84: "165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111"
  },
  EPSG_4692: {
    towgs84: "217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093"
  },
  EPSG_9333: {
    towgs84: "0,0,0,-0.008393,0.000749,-0.010276,0"
  },
  EPSG_9059: {
    towgs84: "0,0,0"
  },
  EPSG_4312: {
    towgs84: "601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887"
  },
  EPSG_4123: {
    towgs84: "-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496"
  },
  EPSG_4309: {
    towgs84: "-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365"
  },
  ESRI_104106: {
    towgs84: "-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058"
  },
  EPSG_4281: {
    towgs84: "-219.247,-73.802,269.529"
  },
  EPSG_4322: {
    towgs84: "0,0,4.5"
  },
  EPSG_4324: {
    towgs84: "0,0,1.9"
  },
  EPSG_4284: {
    towgs84: "43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549"
  },
  EPSG_4277: {
    towgs84: "446.448,-125.157,542.06,0.15,0.247,0.842,-20.489"
  },
  EPSG_4207: {
    towgs84: "-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46"
  },
  EPSG_4688: {
    towgs84: "347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647"
  },
  EPSG_4689: {
    towgs84: "410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218"
  },
  EPSG_4720: {
    towgs84: "0,0,4.5"
  },
  EPSG_4273: {
    towgs84: "278.3,93,474.5,7.889,0.05,-6.61,6.21"
  },
  EPSG_4240: {
    towgs84: "204.64,834.74,293.8"
  },
  EPSG_4817: {
    towgs84: "278.3,93,474.5,7.889,0.05,-6.61,6.21"
  },
  ESRI_104131: {
    towgs84: "426.62,142.62,460.09,4.98,4.49,-12.42,-17.1"
  },
  EPSG_4265: {
    towgs84: "-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68"
  },
  EPSG_4263: {
    towgs84: "-111.92,-87.85,114.5,1.875,0.202,0.219,0.032"
  },
  EPSG_4298: {
    towgs84: "-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536"
  },
  EPSG_4270: {
    towgs84: "-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424"
  },
  EPSG_4229: {
    towgs84: "-121.8,98.1,-10.7"
  },
  EPSG_4220: {
    towgs84: "-55.5,-348,-229.2"
  },
  EPSG_4214: {
    towgs84: "12.646,-155.176,-80.863"
  },
  EPSG_4232: {
    towgs84: "-345,3,223"
  },
  EPSG_4238: {
    towgs84: "-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037"
  },
  EPSG_4168: {
    towgs84: "-170,33,326"
  },
  EPSG_4131: {
    towgs84: "199,931,318.9"
  },
  EPSG_4152: {
    towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"
  },
  EPSG_5228: {
    towgs84: "572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378"
  },
  EPSG_8351: {
    towgs84: "485.021,169.465,483.839,7.786342,4.397554,4.102655,0"
  },
  EPSG_4683: {
    towgs84: "-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06"
  },
  EPSG_4133: {
    towgs84: "0,0,0"
  },
  EPSG_7373: {
    towgs84: "0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693"
  },
  EPSG_9075: {
    towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"
  },
  EPSG_9072: {
    towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"
  },
  EPSG_9294: {
    towgs84: "1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388"
  },
  EPSG_4212: {
    towgs84: "-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492"
  },
  EPSG_4191: {
    towgs84: "-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703"
  },
  EPSG_4237: {
    towgs84: "52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191"
  },
  EPSG_4740: {
    towgs84: "-1.08,-0.27,-0.9"
  },
  EPSG_4124: {
    towgs84: "419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496"
  },
  EPSG_5681: {
    towgs84: "584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922"
  },
  EPSG_4141: {
    towgs84: "23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262"
  },
  EPSG_4204: {
    towgs84: "-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194"
  },
  EPSG_4319: {
    towgs84: "226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798"
  },
  EPSG_4200: {
    towgs84: "24.82,-131.21,-82.66"
  },
  EPSG_4130: {
    towgs84: "0,0,0"
  },
  EPSG_4127: {
    towgs84: "-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359"
  },
  EPSG_4149: {
    towgs84: "674.374,15.056,405.346"
  },
  EPSG_4617: {
    towgs84: "-0.991,1.9072,0.5129,0.02579,0.00965,0.01166,0"
  },
  EPSG_4663: {
    towgs84: "-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485"
  },
  EPSG_4664: {
    towgs84: "-211.939,137.626,58.3,-0.089,0.251,0.079,0.384"
  },
  EPSG_4665: {
    towgs84: "-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048"
  },
  EPSG_4666: {
    towgs84: "631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"
  },
  EPSG_4756: {
    towgs84: "-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188"
  },
  EPSG_4723: {
    towgs84: "-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925"
  },
  EPSG_4726: {
    towgs84: "8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081"
  },
  EPSG_4267: {
    towgs84: "-8.0,160.0,176.0"
  },
  EPSG_5365: {
    towgs84: "-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693"
  },
  EPSG_4218: {
    towgs84: "304.5,306.5,-318.1"
  },
  EPSG_4242: {
    towgs84: "-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95"
  },
  EPSG_4216: {
    towgs84: "-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289"
  },
  ESRI_104105: {
    towgs84: "631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"
  },
  ESRI_104129: {
    towgs84: "0,0,0"
  },
  EPSG_4673: {
    towgs84: "174.05,-25.49,112.57"
  },
  EPSG_4202: {
    towgs84: "-124,-60,154"
  },
  EPSG_4203: {
    towgs84: "-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191"
  },
  EPSG_3819: {
    towgs84: "595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408"
  },
  EPSG_8694: {
    towgs84: "-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169"
  },
  EPSG_4145: {
    towgs84: "275.57,676.78,229.6"
  },
  EPSG_4283: {
    towgs84: "0.06155,-0.01087,-0.04019,0.039492,0.032722,0.032898,-0.009994"
  },
  EPSG_4317: {
    towgs84: "2.3287,-147.0425,-92.0802,-0.309248,0.324822,0.497299,5.689063"
  },
  EPSG_4272: {
    towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993"
  },
  EPSG_4248: {
    towgs84: "-307.7,265.3,-363.5"
  },
  EPSG_5561: {
    towgs84: "24,-121,-76"
  },
  EPSG_5233: {
    towgs84: "-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338"
  },
  ESRI_104130: {
    towgs84: "-86,-98,-119"
  },
  ESRI_104102: {
    towgs84: "682,-203,480"
  },
  ESRI_37207: {
    towgs84: "7,-10,-26"
  },
  EPSG_4675: {
    towgs84: "59.935,118.4,-10.871"
  },
  ESRI_104109: {
    towgs84: "-89.121,-348.182,260.871"
  },
  ESRI_104112: {
    towgs84: "-185.583,-230.096,281.361"
  },
  ESRI_104113: {
    towgs84: "25.1,-275.6,222.6"
  },
  IGNF_WGS72G: {
    towgs84: "0,12,6"
  },
  IGNF_NTFG: {
    towgs84: "-168,-60,320"
  },
  IGNF_EFATE57G: {
    towgs84: "-127,-769,472"
  },
  IGNF_PGP50G: {
    towgs84: "324.8,153.6,172.1"
  },
  IGNF_REUN47G: {
    towgs84: "94,-948,-1262"
  },
  IGNF_CSG67G: {
    towgs84: "-186,230,110"
  },
  IGNF_GUAD48G: {
    towgs84: "-467,-16,-300"
  },
  IGNF_TAHI51G: {
    towgs84: "162,117,154"
  },
  IGNF_TAHAAG: {
    towgs84: "65,342,77"
  },
  IGNF_NUKU72G: {
    towgs84: "84,274,65"
  },
  IGNF_PETRELS72G: {
    towgs84: "365,194,166"
  },
  IGNF_WALL78G: {
    towgs84: "253,-133,-127"
  },
  IGNF_MAYO50G: {
    towgs84: "-382,-59,-262"
  },
  IGNF_TANNAG: {
    towgs84: "-139,-967,436"
  },
  IGNF_IGN72G: {
    towgs84: "-13,-348,292"
  },
  IGNF_ATIGG: {
    towgs84: "1118,23,66"
  },
  IGNF_FANGA84G: {
    towgs84: "150.57,158.33,118.32"
  },
  IGNF_RUSAT84G: {
    towgs84: "202.13,174.6,-15.74"
  },
  IGNF_KAUE70G: {
    towgs84: "126.74,300.1,-75.49"
  },
  IGNF_MOP90G: {
    towgs84: "-10.8,-1.8,12.77"
  },
  IGNF_MHPF67G: {
    towgs84: "338.08,212.58,-296.17"
  },
  IGNF_TAHI79G: {
    towgs84: "160.61,116.05,153.69"
  },
  IGNF_ANAA92G: {
    towgs84: "1.5,3.84,4.81"
  },
  IGNF_MARQUI72G: {
    towgs84: "330.91,-13.92,58.56"
  },
  IGNF_APAT86G: {
    towgs84: "143.6,197.82,74.05"
  },
  IGNF_TUBU69G: {
    towgs84: "237.17,171.61,-77.84"
  },
  IGNF_STPM50G: {
    towgs84: "11.363,424.148,373.13"
  },
  EPSG_4150: {
    towgs84: "674.374,15.056,405.346"
  },
  EPSG_4754: {
    towgs84: "-208.4058,-109.8777,-2.5764"
  },
  ESRI_104101: {
    towgs84: "372.87,149.23,585.29"
  },
  EPSG_4693: {
    towgs84: "0,-0.15,0.68"
  },
  EPSG_6207: {
    towgs84: "293.17,726.18,245.36"
  },
  EPSG_4153: {
    towgs84: "-133.63,-157.5,-158.62"
  },
  EPSG_4132: {
    towgs84: "-241.54,-163.64,396.06"
  },
  EPSG_4221: {
    towgs84: "-154.5,150.7,100.4"
  },
  EPSG_4266: {
    towgs84: "-80.7,-132.5,41.1"
  },
  EPSG_4193: {
    towgs84: "-70.9,-151.8,-41.4"
  },
  EPSG_5340: {
    towgs84: "-0.41,0.46,-0.35"
  },
  EPSG_4246: {
    towgs84: "-294.7,-200.1,525.5"
  },
  EPSG_4318: {
    towgs84: "-3.2,-5.7,2.8"
  },
  EPSG_4121: {
    towgs84: "-199.87,74.79,246.62"
  },
  EPSG_4223: {
    towgs84: "-260.1,5.5,432.2"
  },
  EPSG_4158: {
    towgs84: "-0.465,372.095,171.736"
  },
  EPSG_4285: {
    towgs84: "-128.16,-282.42,21.93"
  },
  EPSG_4613: {
    towgs84: "-404.78,685.68,45.47"
  },
  EPSG_4607: {
    towgs84: "195.671,332.517,274.607"
  },
  EPSG_4475: {
    towgs84: "-381.788,-57.501,-256.673"
  },
  EPSG_4208: {
    towgs84: "-157.84,308.54,-146.6"
  },
  EPSG_4743: {
    towgs84: "70.995,-335.916,262.898"
  },
  EPSG_4710: {
    towgs84: "-323.65,551.39,-491.22"
  },
  EPSG_7881: {
    towgs84: "-0.077,0.079,0.086"
  },
  EPSG_4682: {
    towgs84: "283.729,735.942,261.143"
  },
  EPSG_4739: {
    towgs84: "-156,-271,-189"
  },
  EPSG_4679: {
    towgs84: "-80.01,253.26,291.19"
  },
  EPSG_4750: {
    towgs84: "-56.263,16.136,-22.856"
  },
  EPSG_4644: {
    towgs84: "-10.18,-350.43,291.37"
  },
  EPSG_4695: {
    towgs84: "-103.746,-9.614,-255.95"
  },
  EPSG_4292: {
    towgs84: "-355,21,72"
  },
  EPSG_4302: {
    towgs84: "-61.702,284.488,472.052"
  },
  EPSG_4143: {
    towgs84: "-124.76,53,466.79"
  },
  EPSG_4606: {
    towgs84: "-153,153,307"
  },
  EPSG_4699: {
    towgs84: "-770.1,158.4,-498.2"
  },
  EPSG_4247: {
    towgs84: "-273.5,110.6,-357.9"
  },
  EPSG_4160: {
    towgs84: "8.88,184.86,106.69"
  },
  EPSG_4161: {
    towgs84: "-233.43,6.65,173.64"
  },
  EPSG_9251: {
    towgs84: "-9.5,122.9,138.2"
  },
  EPSG_9253: {
    towgs84: "-78.1,101.6,133.3"
  },
  EPSG_4297: {
    towgs84: "-198.383,-240.517,-107.909"
  },
  EPSG_4269: {
    towgs84: "0,0,0"
  },
  EPSG_4301: {
    towgs84: "-147,506,687"
  },
  EPSG_4618: {
    towgs84: "-59,-11,-52"
  },
  EPSG_4612: {
    towgs84: "0,0,0"
  },
  EPSG_4678: {
    towgs84: "44.585,-131.212,-39.544"
  },
  EPSG_4250: {
    towgs84: "-130,29,364"
  },
  EPSG_4144: {
    towgs84: "214,804,268"
  },
  EPSG_4147: {
    towgs84: "-17.51,-108.32,-62.39"
  },
  EPSG_4259: {
    towgs84: "-254.1,-5.36,-100.29"
  },
  EPSG_4164: {
    towgs84: "-76,-138,67"
  },
  EPSG_4211: {
    towgs84: "-378.873,676.002,-46.255"
  },
  EPSG_4182: {
    towgs84: "-422.651,-172.995,84.02"
  },
  EPSG_4224: {
    towgs84: "-143.87,243.37,-33.52"
  },
  EPSG_4225: {
    towgs84: "-205.57,168.77,-4.12"
  },
  EPSG_5527: {
    towgs84: "-67.35,3.88,-38.22"
  },
  EPSG_4752: {
    towgs84: "98,390,-22"
  },
  EPSG_4310: {
    towgs84: "-30,190,89"
  },
  EPSG_9248: {
    towgs84: "-192.26,65.72,132.08"
  },
  EPSG_4680: {
    towgs84: "124.5,-63.5,-281"
  },
  EPSG_4701: {
    towgs84: "-79.9,-158,-168.9"
  },
  EPSG_4706: {
    towgs84: "-146.21,112.63,4.05"
  },
  EPSG_4805: {
    towgs84: "682,-203,480"
  },
  EPSG_4201: {
    towgs84: "-165,-11,206"
  },
  EPSG_4210: {
    towgs84: "-157,-2,-299"
  },
  EPSG_4183: {
    towgs84: "-104,167,-38"
  },
  EPSG_4139: {
    towgs84: "11,72,-101"
  },
  EPSG_4668: {
    towgs84: "-86,-98,-119"
  },
  EPSG_4717: {
    towgs84: "-2,151,181"
  },
  EPSG_4732: {
    towgs84: "102,52,-38"
  },
  EPSG_4280: {
    towgs84: "-377,681,-50"
  },
  EPSG_4209: {
    towgs84: "-138,-105,-289"
  },
  EPSG_4261: {
    towgs84: "31,146,47"
  },
  EPSG_4658: {
    towgs84: "-73,46,-86"
  },
  EPSG_4721: {
    towgs84: "265.025,384.929,-194.046"
  },
  EPSG_4222: {
    towgs84: "-136,-108,-292"
  },
  EPSG_4601: {
    towgs84: "-255,-15,71"
  },
  EPSG_4602: {
    towgs84: "725,685,536"
  },
  EPSG_4603: {
    towgs84: "72,213.7,93"
  },
  EPSG_4605: {
    towgs84: "9,183,236"
  },
  EPSG_4621: {
    towgs84: "137,248,-430"
  },
  EPSG_4657: {
    towgs84: "-28,199,5"
  },
  EPSG_4316: {
    towgs84: "103.25,-100.4,-307.19"
  },
  EPSG_4642: {
    towgs84: "-13,-348,292"
  },
  EPSG_4698: {
    towgs84: "145,-187,103"
  },
  EPSG_4192: {
    towgs84: "-206.1,-174.7,-87.7"
  },
  EPSG_4311: {
    towgs84: "-265,120,-358"
  },
  EPSG_4135: {
    towgs84: "58,-283,-182"
  },
  ESRI_104138: {
    towgs84: "198,-226,-347"
  },
  EPSG_4245: {
    towgs84: "-11,851,5"
  },
  EPSG_4142: {
    towgs84: "-125,53,467"
  },
  EPSG_4213: {
    towgs84: "-106,-87,188"
  },
  EPSG_4253: {
    towgs84: "-133,-77,-51"
  },
  EPSG_4129: {
    towgs84: "-132,-110,-335"
  },
  EPSG_4713: {
    towgs84: "-77,-128,142"
  },
  EPSG_4239: {
    towgs84: "217,823,299"
  },
  EPSG_4146: {
    towgs84: "295,736,257"
  },
  EPSG_4155: {
    towgs84: "-83,37,124"
  },
  EPSG_4165: {
    towgs84: "-173,253,27"
  },
  EPSG_4672: {
    towgs84: "175,-38,113"
  },
  EPSG_4236: {
    towgs84: "-637,-549,-203"
  },
  EPSG_4251: {
    towgs84: "-90,40,88"
  },
  EPSG_4271: {
    towgs84: "-2,374,172"
  },
  EPSG_4175: {
    towgs84: "-88,4,101"
  },
  EPSG_4716: {
    towgs84: "298,-304,-375"
  },
  EPSG_4315: {
    towgs84: "-23,259,-9"
  },
  EPSG_4744: {
    towgs84: "-242.2,-144.9,370.3"
  },
  EPSG_4244: {
    towgs84: "-97,787,86"
  },
  EPSG_4293: {
    towgs84: "616,97,-251"
  },
  EPSG_4714: {
    towgs84: "-127,-769,472"
  },
  EPSG_4736: {
    towgs84: "260,12,-147"
  },
  EPSG_6883: {
    towgs84: "-235,-110,393"
  },
  EPSG_6894: {
    towgs84: "-63,176,185"
  },
  EPSG_4205: {
    towgs84: "-43,-163,45"
  },
  EPSG_4256: {
    towgs84: "41,-220,-134"
  },
  EPSG_4262: {
    towgs84: "639,405,60"
  },
  EPSG_4604: {
    towgs84: "174,359,365"
  },
  EPSG_4169: {
    towgs84: "-115,118,426"
  },
  EPSG_4620: {
    towgs84: "-106,-129,165"
  },
  EPSG_4184: {
    towgs84: "-203,141,53"
  },
  EPSG_4616: {
    towgs84: "-289,-124,60"
  },
  EPSG_9403: {
    towgs84: "-307,-92,127"
  },
  EPSG_4684: {
    towgs84: "-133,-321,50"
  },
  EPSG_4708: {
    towgs84: "-491,-22,435"
  },
  EPSG_4707: {
    towgs84: "114,-116,-333"
  },
  EPSG_4709: {
    towgs84: "145,75,-272"
  },
  EPSG_4712: {
    towgs84: "-205,107,53"
  },
  EPSG_4711: {
    towgs84: "124,-234,-25"
  },
  EPSG_4718: {
    towgs84: "230,-199,-752"
  },
  EPSG_4719: {
    towgs84: "211,147,111"
  },
  EPSG_4724: {
    towgs84: "208,-435,-229"
  },
  EPSG_4725: {
    towgs84: "189,-79,-202"
  },
  EPSG_4735: {
    towgs84: "647,1777,-1124"
  },
  EPSG_4722: {
    towgs84: "-794,119,-298"
  },
  EPSG_4728: {
    towgs84: "-307,-92,127"
  },
  EPSG_4734: {
    towgs84: "-632,438,-609"
  },
  EPSG_4727: {
    towgs84: "912,-58,1227"
  },
  EPSG_4729: {
    towgs84: "185,165,42"
  },
  EPSG_4730: {
    towgs84: "170,42,84"
  },
  EPSG_4733: {
    towgs84: "276,-57,149"
  },
  ESRI_37218: {
    towgs84: "230,-199,-752"
  },
  ESRI_37240: {
    towgs84: "-7,215,225"
  },
  ESRI_37221: {
    towgs84: "252,-209,-751"
  },
  ESRI_4305: {
    towgs84: "-123,-206,219"
  },
  ESRI_104139: {
    towgs84: "-73,-247,227"
  },
  EPSG_4748: {
    towgs84: "51,391,-36"
  },
  EPSG_4219: {
    towgs84: "-384,664,-48"
  },
  EPSG_4255: {
    towgs84: "-333,-222,114"
  },
  EPSG_4257: {
    towgs84: "-587.8,519.75,145.76"
  },
  EPSG_4646: {
    towgs84: "-963,510,-359"
  },
  EPSG_6881: {
    towgs84: "-24,-203,268"
  },
  EPSG_6882: {
    towgs84: "-183,-15,273"
  },
  EPSG_4715: {
    towgs84: "-104,-129,239"
  },
  IGNF_RGF93GDD: {
    towgs84: "0,0,0"
  },
  IGNF_RGM04GDD: {
    towgs84: "0,0,0"
  },
  IGNF_RGSPM06GDD: {
    towgs84: "0,0,0"
  },
  IGNF_RGTAAF07GDD: {
    towgs84: "0,0,0"
  },
  IGNF_RGFG95GDD: {
    towgs84: "0,0,0"
  },
  IGNF_RGNCG: {
    towgs84: "0,0,0"
  },
  IGNF_RGPFGDD: {
    towgs84: "0,0,0"
  },
  IGNF_ETRS89G: {
    towgs84: "0,0,0"
  },
  IGNF_RGR92GDD: {
    towgs84: "0,0,0"
  },
  EPSG_4173: {
    towgs84: "0,0,0"
  },
  EPSG_4180: {
    towgs84: "0,0,0"
  },
  EPSG_4619: {
    towgs84: "0,0,0"
  },
  EPSG_4667: {
    towgs84: "0,0,0"
  },
  EPSG_4075: {
    towgs84: "0,0,0"
  },
  EPSG_6706: {
    towgs84: "0,0,0"
  },
  EPSG_7798: {
    towgs84: "0,0,0"
  },
  EPSG_4661: {
    towgs84: "0,0,0"
  },
  EPSG_4669: {
    towgs84: "0,0,0"
  },
  EPSG_8685: {
    towgs84: "0,0,0"
  },
  EPSG_4151: {
    towgs84: "0,0,0"
  },
  EPSG_9702: {
    towgs84: "0,0,0"
  },
  EPSG_4758: {
    towgs84: "0,0,0"
  },
  EPSG_4761: {
    towgs84: "0,0,0"
  },
  EPSG_4765: {
    towgs84: "0,0,0"
  },
  EPSG_8997: {
    towgs84: "0,0,0"
  },
  EPSG_4023: {
    towgs84: "0,0,0"
  },
  EPSG_4670: {
    towgs84: "0,0,0"
  },
  EPSG_4694: {
    towgs84: "0,0,0"
  },
  EPSG_4148: {
    towgs84: "0,0,0"
  },
  EPSG_4163: {
    towgs84: "0,0,0"
  },
  EPSG_4167: {
    towgs84: "0,0,0"
  },
  EPSG_4189: {
    towgs84: "0,0,0"
  },
  EPSG_4190: {
    towgs84: "0,0,0"
  },
  EPSG_4176: {
    towgs84: "0,0,0"
  },
  EPSG_4659: {
    towgs84: "0,0,0"
  },
  EPSG_3824: {
    towgs84: "0,0,0"
  },
  EPSG_3889: {
    towgs84: "0,0,0"
  },
  EPSG_4046: {
    towgs84: "0,0,0"
  },
  EPSG_4081: {
    towgs84: "0,0,0"
  },
  EPSG_4558: {
    towgs84: "0,0,0"
  },
  EPSG_4483: {
    towgs84: "0,0,0"
  },
  EPSG_5013: {
    towgs84: "0,0,0"
  },
  EPSG_5264: {
    towgs84: "0,0,0"
  },
  EPSG_5324: {
    towgs84: "0,0,0"
  },
  EPSG_5354: {
    towgs84: "0,0,0"
  },
  EPSG_5371: {
    towgs84: "0,0,0"
  },
  EPSG_5373: {
    towgs84: "0,0,0"
  },
  EPSG_5381: {
    towgs84: "0,0,0"
  },
  EPSG_5393: {
    towgs84: "0,0,0"
  },
  EPSG_5489: {
    towgs84: "0,0,0"
  },
  EPSG_5593: {
    towgs84: "0,0,0"
  },
  EPSG_6135: {
    towgs84: "0,0,0"
  },
  EPSG_6365: {
    towgs84: "0,0,0"
  },
  EPSG_5246: {
    towgs84: "0,0,0"
  },
  EPSG_7886: {
    towgs84: "0,0,0"
  },
  EPSG_8431: {
    towgs84: "0,0,0"
  },
  EPSG_8427: {
    towgs84: "0,0,0"
  },
  EPSG_8699: {
    towgs84: "0,0,0"
  },
  EPSG_8818: {
    towgs84: "0,0,0"
  },
  EPSG_4757: {
    towgs84: "0,0,0"
  },
  EPSG_9140: {
    towgs84: "0,0,0"
  },
  EPSG_8086: {
    towgs84: "0,0,0"
  },
  EPSG_4686: {
    towgs84: "0,0,0"
  },
  EPSG_4737: {
    towgs84: "0,0,0"
  },
  EPSG_4702: {
    towgs84: "0,0,0"
  },
  EPSG_4747: {
    towgs84: "0,0,0"
  },
  EPSG_4749: {
    towgs84: "0,0,0"
  },
  EPSG_4674: {
    towgs84: "0,0,0"
  },
  EPSG_4755: {
    towgs84: "0,0,0"
  },
  EPSG_4759: {
    towgs84: "0,0,0"
  },
  EPSG_4762: {
    towgs84: "0,0,0"
  },
  EPSG_4763: {
    towgs84: "0,0,0"
  },
  EPSG_4764: {
    towgs84: "0,0,0"
  },
  EPSG_4166: {
    towgs84: "0,0,0"
  },
  EPSG_4170: {
    towgs84: "0,0,0"
  },
  EPSG_5546: {
    towgs84: "0,0,0"
  },
  EPSG_7844: {
    towgs84: "0,0,0"
  },
  EPSG_4818: {
    towgs84: "589,76,480"
  },
  EPSG_10328: {
    towgs84: "0,0,0"
  },
  EPSG_9782: {
    towgs84: "0,0,0"
  },
  EPSG_9777: {
    towgs84: "0,0,0"
  },
  EPSG_10690: {
    towgs84: "0,0,0"
  },
  EPSG_10639: {
    towgs84: "0,0,0"
  },
  EPSG_10739: {
    towgs84: "0,0,0"
  },
  EPSG_7686: {
    towgs84: "0,0,0"
  },
  EPSG_8900: {
    towgs84: "0,0,0"
  },
  EPSG_5886: {
    towgs84: "0,0,0"
  },
  EPSG_7683: {
    towgs84: "0,0,0"
  },
  EPSG_6668: {
    towgs84: "0,0,0"
  },
  EPSG_20046: {
    towgs84: "0,0,0"
  },
  EPSG_10299: {
    towgs84: "0,0,0"
  },
  EPSG_10310: {
    towgs84: "0,0,0"
  },
  EPSG_10475: {
    towgs84: "0,0,0"
  },
  EPSG_4742: {
    towgs84: "0,0,0"
  },
  EPSG_10671: {
    towgs84: "0,0,0"
  },
  EPSG_10762: {
    towgs84: "0,0,0"
  },
  EPSG_10725: {
    towgs84: "0,0,0"
  },
  EPSG_10791: {
    towgs84: "0,0,0"
  },
  EPSG_10800: {
    towgs84: "0,0,0"
  },
  EPSG_10305: {
    towgs84: "0,0,0"
  },
  EPSG_10941: {
    towgs84: "0,0,0"
  },
  EPSG_10968: {
    towgs84: "0,0,0"
  },
  EPSG_10875: {
    towgs84: "0,0,0"
  },
  EPSG_6318: {
    towgs84: "0,0,0"
  },
  EPSG_10910: {
    towgs84: "0,0,0"
  }
};
for (var ol in cr) {
  var un = cr[ol];
  un.datumName && (cr[un.datumName] = un);
}
function hl(e, t, i, r, n, s, o) {
  var a = {};
  return a.datum_type = wn, t && (a.datum_type = Eh, a.datum_params = t.map(parseFloat), (a.datum_params[0] !== 0 || a.datum_params[1] !== 0 || a.datum_params[2] !== 0) && (a.datum_type = je), a.datum_params.length > 3 && (a.datum_params[3] !== 0 || a.datum_params[4] !== 0 || a.datum_params[5] !== 0 || a.datum_params[6] !== 0) && (a.datum_type = Be, a.datum_params[3] *= Ci, a.datum_params[4] *= Ci, a.datum_params[5] *= Ci, a.datum_params[6] = a.datum_params[6] / 1e6 + 1)), o && (a.datum_type = ti, a.grids = o), a.a = i, a.b = r, a.es = n, a.ep2 = s, a;
}
var Dn = {};
function ll(e, t, i) {
  return t instanceof ArrayBuffer ? ul(e, t, i) : { ready: fl(e, t) };
}
function ul(e, t, i) {
  var r = !0;
  i !== void 0 && i.includeErrorFields === !1 && (r = !1);
  var n = new DataView(t), s = _l(n), o = gl(n, s), a = pl(n, o, s, r), l = { header: o, subgrids: a };
  return Dn[e] = l, l;
}
async function fl(e, t) {
  for (var i = [], r = await t.getImageCount(), n = r - 1; n >= 0; n--) {
    var s = await t.getImage(n), o = await s.readRasters(), a = o, l = [s.getWidth(), s.getHeight()], h = s.getBoundingBox().map(sa), d = typeof s.fileDirectory.getValue == "function" ? s.fileDirectory.getValue("ModelPixelScale") : (
      /** @type {any} */
      s.fileDirectory.ModelPixelScale
    ), f = [d[0], d[1]].map(sa), _ = h[0] + (l[0] - 1) * f[0], m = h[3] - (l[1] - 1) * f[1], y = a[0], w = a[1], b = [];
    for (let E = l[1] - 1; E >= 0; E--)
      for (let N = l[0] - 1; N >= 0; N--) {
        var g = E * l[0] + N;
        b.push([-Se(w[g]), Se(y[g])]);
      }
    i.push({
      del: f,
      lim: l,
      ll: [-_, m],
      cvs: b
    });
  }
  var v = {
    header: {
      nSubgrids: r
    },
    subgrids: i
  };
  return Dn[e] = v, v;
}
function cl(e) {
  if (e === void 0)
    return null;
  var t = e.split(",");
  return t.map(dl);
}
function dl(e) {
  if (e.length === 0)
    return null;
  var t = e[0] === "@";
  return t && (e = e.slice(1)), e === "null" ? { name: "null", mandatory: !t, grid: null, isNull: !0 } : {
    name: e,
    mandatory: !t,
    grid: Dn[e] || null,
    isNull: !1
  };
}
function sa(e) {
  return e * Math.PI / 180;
}
function Se(e) {
  return e / 3600 * Math.PI / 180;
}
function _l(e) {
  var t = e.getInt32(8, !1);
  return t === 11 ? !1 : (t = e.getInt32(8, !0), t !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
}
function gl(e, t) {
  return {
    nFields: e.getInt32(8, t),
    nSubgridFields: e.getInt32(24, t),
    nSubgrids: e.getInt32(40, t),
    shiftType: vn(e, 56, 64).trim(),
    fromSemiMajorAxis: e.getFloat64(120, t),
    fromSemiMinorAxis: e.getFloat64(136, t),
    toSemiMajorAxis: e.getFloat64(152, t),
    toSemiMinorAxis: e.getFloat64(168, t)
  };
}
function vn(e, t, i) {
  return String.fromCharCode.apply(null, new Uint8Array(e.buffer.slice(t, i)));
}
function pl(e, t, i, r) {
  for (var n = 176, s = [], o = 0; o < t.nSubgrids; o++) {
    var a = bl(e, n, i), l = ml(e, n, a, i, r), h = Math.round(
      1 + (a.upperLongitude - a.lowerLongitude) / a.longitudeInterval
    ), d = Math.round(
      1 + (a.upperLatitude - a.lowerLatitude) / a.latitudeInterval
    );
    s.push({
      ll: [Se(a.lowerLongitude), Se(a.lowerLatitude)],
      del: [Se(a.longitudeInterval), Se(a.latitudeInterval)],
      lim: [h, d],
      count: a.gridNodeCount,
      cvs: yl(l)
    });
    var f = 16;
    r === !1 && (f = 8), n += 176 + a.gridNodeCount * f;
  }
  return s;
}
function yl(e) {
  return e.map(function(t) {
    return [Se(t.longitudeShift), Se(t.latitudeShift)];
  });
}
function bl(e, t, i) {
  return {
    name: vn(e, t + 8, t + 16).trim(),
    parent: vn(e, t + 24, t + 24 + 8).trim(),
    lowerLatitude: e.getFloat64(t + 72, i),
    upperLatitude: e.getFloat64(t + 88, i),
    lowerLongitude: e.getFloat64(t + 104, i),
    upperLongitude: e.getFloat64(t + 120, i),
    latitudeInterval: e.getFloat64(t + 136, i),
    longitudeInterval: e.getFloat64(t + 152, i),
    gridNodeCount: e.getInt32(t + 168, i)
  };
}
function ml(e, t, i, r, n) {
  var s = t + 176, o = 16;
  n === !1 && (o = 8);
  for (var a = [], l = 0; l < i.gridNodeCount; l++) {
    var h = {
      latitudeShift: e.getFloat32(s + l * o, r),
      longitudeShift: e.getFloat32(s + l * o + 4, r)
    };
    n !== !1 && (h.latitudeAccuracy = e.getFloat32(s + l * o + 8, r), h.longitudeAccuracy = e.getFloat32(s + l * o + 12, r)), a.push(h);
  }
  return a;
}
function oe(e, t) {
  if (!(this instanceof oe))
    return new oe(e);
  this.forward = null, this.inverse = null, this.init = null, this.name, this.axis, this.names = null, this.title, t = t || function(h) {
    if (h)
      throw h;
  };
  var i = zh(e);
  if (typeof i != "object") {
    t("Could not parse to valid json: " + e);
    return;
  }
  var r = oe.projections.get(i.projName);
  if (!r) {
    t("Could not get projection name from: " + e);
    return;
  }
  if (i.datumCode && i.datumCode !== "none") {
    var n = Pe(cr, i.datumCode);
    n && (i.datum_params = i.datum_params || (n.towgs84 ? n.towgs84.split(",") : null), i.ellps = n.ellipse, i.datumName = n.datumName ? n.datumName : i.datumCode);
  }
  i.k0 = i.k0 || 1, i.axis = i.axis || "enu", i.ellps = i.ellps || "wgs84", i.lat1 = i.lat1 || i.lat0;
  var s = al(i.a, i.b, i.rf, i.ellps, i.sphere), o = sl(s.a, s.b, s.rf, i.R_A), a = cl(i.nadgrids), l = i.datum || hl(
    i.datumCode,
    i.datum_params,
    s.a,
    s.b,
    o.es,
    o.ep2,
    a
  );
  ra(this, i), ra(this, r), this.a = s.a, this.b = s.b, this.rf = s.rf, this.sphere = s.sphere, this.es = o.es, this.e = o.e, this.ep2 = o.ep2, this.datum = l, "init" in this && typeof this.init == "function" && this.init(), t(null, this);
}
oe.projections = rl;
oe.projections.start();
function wl(e, t) {
  return e.datum_type !== t.datum_type || e.a !== t.a || Math.abs(e.es - t.es) > 5e-11 ? !1 : e.datum_type === je ? e.datum_params[0] === t.datum_params[0] && e.datum_params[1] === t.datum_params[1] && e.datum_params[2] === t.datum_params[2] : e.datum_type === Be ? e.datum_params[0] === t.datum_params[0] && e.datum_params[1] === t.datum_params[1] && e.datum_params[2] === t.datum_params[2] && e.datum_params[3] === t.datum_params[3] && e.datum_params[4] === t.datum_params[4] && e.datum_params[5] === t.datum_params[5] && e.datum_params[6] === t.datum_params[6] : !0;
}
function oo(e, t, i) {
  var r = e.x, n = e.y, s = e.z ? e.z : 0, o, a, l, h;
  if (n < -Z && n > -1.001 * Z)
    n = -Z;
  else if (n > Z && n < 1.001 * Z)
    n = Z;
  else {
    if (n < -Z)
      return { x: -1 / 0, y: -1 / 0, z: e.z };
    if (n > Z)
      return { x: 1 / 0, y: 1 / 0, z: e.z };
  }
  return r > Math.PI && (r -= 2 * Math.PI), a = Math.sin(n), h = Math.cos(n), l = a * a, o = i / Math.sqrt(1 - t * l), {
    x: (o + s) * h * Math.cos(r),
    y: (o + s) * h * Math.sin(r),
    z: (o * (1 - t) + s) * a
  };
}
function ho(e, t, i, r) {
  var n = 1e-12, s = n * n, o = 30, a, l, h, d, f, _, m, y, w, b, g, v, E, N = e.x, M = e.y, j = e.z ? e.z : 0, U, k, lt;
  if (a = Math.sqrt(N * N + M * M), l = Math.sqrt(N * N + M * M + j * j), a / i < n) {
    if (U = 0, l / i < n)
      return k = Z, lt = -r, {
        x: e.x,
        y: e.y,
        z: e.z
      };
  } else
    U = Math.atan2(M, N);
  h = j / l, d = a / l, f = 1 / Math.sqrt(1 - t * (2 - t) * d * d), y = d * (1 - t) * f, w = h * f, E = 0;
  do
    E++, m = i / Math.sqrt(1 - t * w * w), lt = a * y + j * w - m * (1 - t * w * w), _ = t * m / (m + lt), f = 1 / Math.sqrt(1 - _ * (2 - _) * d * d), b = d * (1 - _) * f, g = h * f, v = g * y - b * w, y = b, w = g;
  while (v * v > s && E < o);
  return k = Math.atan(g / Math.abs(b)), {
    x: U,
    y: k,
    z: lt
  };
}
function El(e, t, i) {
  if (t === je)
    return {
      x: e.x + i[0],
      y: e.y + i[1],
      z: e.z + i[2]
    };
  if (t === Be) {
    var r = i[0], n = i[1], s = i[2], o = i[3], a = i[4], l = i[5], h = i[6];
    return {
      x: h * (e.x - l * e.y + a * e.z) + r,
      y: h * (l * e.x + e.y - o * e.z) + n,
      z: h * (-a * e.x + o * e.y + e.z) + s
    };
  }
}
function vl(e, t, i) {
  if (t === je)
    return {
      x: e.x - i[0],
      y: e.y - i[1],
      z: e.z - i[2]
    };
  if (t === Be) {
    var r = i[0], n = i[1], s = i[2], o = i[3], a = i[4], l = i[5], h = i[6], d = (e.x - r) / h, f = (e.y - n) / h, _ = (e.z - s) / h;
    return {
      x: d + l * f - a * _,
      y: -l * d + f + o * _,
      z: a * d - o * f + _
    };
  }
}
function sr(e) {
  return e === je || e === Be;
}
function xl(e, t, i) {
  if (wl(e, t) || e.datum_type === wn || t.datum_type === wn)
    return i;
  var r = e.a, n = e.es;
  if (e.datum_type === ti) {
    var s = aa(e, !1, i);
    if (s !== 0)
      return;
    r = Ks, n = Js;
  }
  var o = t.a, a = t.b, l = t.es;
  if (t.datum_type === ti && (o = Ks, a = vh, l = Js), n === l && r === o && !sr(e.datum_type) && !sr(t.datum_type))
    return i;
  if (i = oo(i, n, r), sr(e.datum_type) && (i = El(i, e.datum_type, e.datum_params)), sr(t.datum_type) && (i = vl(i, t.datum_type, t.datum_params)), i = ho(i, l, o, a), t.datum_type === ti) {
    var h = aa(t, !0, i);
    if (h !== 0)
      return;
  }
  return i;
}
function aa(e, t, i) {
  if (e.grids === null || e.grids.length === 0)
    return console.log("Grid shift grids not found"), -1;
  var r = { x: -i.x, y: i.y }, n = { x: Number.NaN, y: Number.NaN }, s = [];
  t:
    for (var o = 0; o < e.grids.length; o++) {
      var a = e.grids[o];
      if (s.push(a.name), a.isNull) {
        n = r;
        break;
      }
      if (a.grid === null) {
        if (a.mandatory)
          return console.log("Unable to find mandatory grid '" + a.name + "'"), -1;
        continue;
      }
      for (var l = a.grid.subgrids, h = 0, d = l.length; h < d; h++) {
        var f = l[h], _ = (Math.abs(f.del[1]) + Math.abs(f.del[0])) / 1e4, m = f.ll[0] - _, y = f.ll[1] - _, w = f.ll[0] + (f.lim[0] - 1) * f.del[0] + _, b = f.ll[1] + (f.lim[1] - 1) * f.del[1] + _;
        if (!(y > r.y || m > r.x || b < r.y || w < r.x) && (n = Sl(r, t, f), !isNaN(n.x)))
          break t;
      }
    }
  return isNaN(n.x) ? (console.log("Failed to find a grid shift table for location '" + -r.x * ie + " " + r.y * ie + " tried: '" + s + "'"), -1) : (i.x = -n.x, i.y = n.y, 0);
}
function Sl(e, t, i) {
  var r = { x: Number.NaN, y: Number.NaN };
  if (isNaN(e.x))
    return r;
  var n = { x: e.x, y: e.y };
  n.x -= i.ll[0], n.y -= i.ll[1], n.x = ut(n.x - Math.PI) + Math.PI;
  var s = oa(n, i);
  if (t) {
    if (isNaN(s.x))
      return r;
    s.x = n.x - s.x, s.y = n.y - s.y;
    var o = 9, a = 1e-12, l, h;
    do {
      if (h = oa(s, i), isNaN(h.x)) {
        console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
        break;
      }
      l = { x: n.x - (h.x + s.x), y: n.y - (h.y + s.y) }, s.x += l.x, s.y += l.y;
    } while (o-- && Math.abs(l.x) > a && Math.abs(l.y) > a);
    if (o < 0)
      return console.log("Inverse grid shift iterator failed to converge."), r;
    r.x = ut(s.x + i.ll[0]), r.y = s.y + i.ll[1];
  } else
    isNaN(s.x) || (r.x = e.x + s.x, r.y = e.y + s.y);
  return r;
}
function oa(e, t) {
  var i = { x: e.x / t.del[0], y: e.y / t.del[1] }, r = { x: Math.floor(i.x), y: Math.floor(i.y) }, n = { x: i.x - 1 * r.x, y: i.y - 1 * r.y }, s = { x: Number.NaN, y: Number.NaN }, o;
  if (r.x < 0 || r.x >= t.lim[0] || r.y < 0 || r.y >= t.lim[1])
    return s;
  o = r.y * t.lim[0] + r.x;
  var a = { x: t.cvs[o][0], y: t.cvs[o][1] };
  o++;
  var l = { x: t.cvs[o][0], y: t.cvs[o][1] };
  o += t.lim[0];
  var h = { x: t.cvs[o][0], y: t.cvs[o][1] };
  o--;
  var d = { x: t.cvs[o][0], y: t.cvs[o][1] }, f = n.x * n.y, _ = n.x * (1 - n.y), m = (1 - n.x) * (1 - n.y), y = (1 - n.x) * n.y;
  return s.x = m * a.x + _ * l.x + y * d.x + f * h.x, s.y = m * a.y + _ * l.y + y * d.y + f * h.y, s;
}
var Le = ["x", "y", "z"];
function Ml(e, t) {
  const i = {};
  for (let r = 0, n = e.axis.length; r < n; r++) {
    if (r === 2 && t.z === void 0)
      continue;
    let s = t[Le[r]];
    switch (e.axis[r]) {
      case "e":
        i.x = s;
        break;
      case "w":
        i.x = -s;
        break;
      case "n":
        i.y = s;
        break;
      case "s":
        i.y = -s;
        break;
      case "u":
        i.z = s;
        break;
      case "d":
        i.z = -s;
        break;
      default:
        return null;
    }
  }
  return i;
}
function Pl(e, t) {
  const i = (
    /** @type {import("./core").InterfaceCoordinates} */
    {}
  );
  for (let r = 0, n = e.axis.length; r < n; r++)
    if (!(r === 2 && t.z === void 0))
      switch (e.axis[r]) {
        case "e":
          i[Le[r]] = t.x;
          break;
        case "w":
          i[Le[r]] = -t.x;
          break;
        case "n":
          i[Le[r]] = t.y;
          break;
        case "s":
          i[Le[r]] = -t.y;
          break;
        case "u":
          i[Le[r]] = t.z;
          break;
        case "d":
          i[Le[r]] = -t.z;
          break;
        default:
          return null;
      }
  return i;
}
function On(e) {
  var t = {
    x: e[0],
    y: e[1]
  };
  return e.length > 2 && (t.z = e[2]), e.length > 3 && (t.m = e[3]), t;
}
function Al(e) {
  ha(e.x), ha(e.y);
}
function ha(e) {
  if (typeof Number.isFinite == "function") {
    if (Number.isFinite(e))
      return;
    throw new TypeError("coordinates must be finite numbers");
  }
  if (typeof e != "number" || e !== e || !isFinite(e))
    throw new TypeError("coordinates must be finite numbers");
}
function Nl(e, t) {
  return (e.datum.datum_type === je || e.datum.datum_type === Be || e.datum.datum_type === ti) && t.datumCode !== "WGS84" || (t.datum.datum_type === je || t.datum.datum_type === Be || t.datum.datum_type === ti) && e.datumCode !== "WGS84";
}
function mr(e, t, i, r) {
  var n, s = i.z !== void 0;
  if (Al(i), e.datum && t.datum && Nl(e, t) && (n = new oe("WGS84"), i = mr(e, n, i, r), e = n), r && e.axis !== "enu" && (i = Ml(e, i)), e.projName === "longlat")
    i = {
      x: i.x * jt,
      y: i.y * jt,
      z: i.z || 0
    };
  else if (e.to_meter && (i = {
    x: i.x * e.to_meter,
    y: i.y * e.to_meter,
    z: i.z || 0
  }), i = e.inverse(i), !i)
    return;
  if (e.from_greenwich && (i.x += e.from_greenwich), i = xl(e.datum, t.datum, i), !!i)
    return i = /** @type {import('./core').InterfaceCoordinates} */
    i, t.from_greenwich && (i = {
      x: i.x - t.from_greenwich,
      y: i.y,
      z: i.z || 0
    }), t.projName === "longlat" ? i = {
      x: i.x * ie,
      y: i.y * ie,
      z: i.z || 0
    } : (i = t.forward(i), t.to_meter && (i = {
      x: i.x / t.to_meter,
      y: i.y / t.to_meter,
      z: i.z || 0
    })), r && t.axis !== "enu" ? Pl(t, i) : (i && !s && t.projName !== "geocent" && delete i.z, i);
}
function Rl(e, t, i, r) {
  var n;
  return Array.isArray(i) ? n = On(i) : n = { x: i.x, y: i.y, z: i.z, m: i.m }, mr(e, t, n, r);
}
var la = oe("WGS84");
function fn(e, t, i, r) {
  var n, s, o;
  return Array.isArray(i) ? (n = mr(e, t, On(i), r) || { x: NaN, y: NaN }, i.length > 2 ? (s = typeof e.name < "u" && e.name === "geocent" || typeof t.name < "u" && t.name === "geocent", s ? typeof n.z == "number" ? (
    /** @type {T} */
    [n.x, n.y, n.z].concat(i.slice(3))
  ) : (
    /** @type {T} */
    [n.x, n.y, i[2]].concat(i.slice(3))
  ) : r && typeof n.z == "number" ? (
    /** @type {T} */
    [n.x, n.y, n.z].concat(i.slice(3))
  ) : (
    /** @type {T} */
    [n.x, n.y].concat(i.slice(2))
  )) : (
    /** @type {T} */
    [n.x, n.y]
  )) : (n = mr(e, t, { x: i.x, y: i.y, z: i.z, m: i.m }, r) || { x: NaN, y: NaN }, o = Object.keys(i), o.length === 2 || (s = typeof e.name < "u" && e.name === "geocent" || typeof t.name < "u" && t.name === "geocent", o.forEach(function(a) {
    a === "x" || a === "y" || a === "z" && (s || r) || (n[a] = i[a]);
  })), /** @type {T} */
  n);
}
function ar(e) {
  return e instanceof oe ? e : typeof e == "object" && "oProj" in e ? e.oProj : oe(
    /** @type {string | PROJJSONDefinition} */
    e
  );
}
function Il(e, t, i) {
  var r, n, s = !1, o;
  return typeof t > "u" ? (n = ar(e), r = la, s = !0) : (typeof /** @type {?} */
  t.x < "u" || Array.isArray(t)) && (i = /** @type {T} */
  /** @type {?} */
  t, n = ar(e), r = la, s = !0), r || (r = ar(e)), n || (n = ar(
    /** @type {string | PROJJSONDefinition | proj } */
    t
  )), i ? fn(r, n, i) : (o = {
    /**
     * @template {TemplateCoordinates} T
     * @param {T} coords
     * @param {boolean=} enforceAxis
     * @returns {T}
     */
    forward: function(a, l) {
      return fn(r, n, a, l);
    },
    /**
     * @template {TemplateCoordinates} T
     * @param {T} coords
     * @param {boolean=} enforceAxis
     * @returns {T}
     */
    inverse: function(a, l) {
      return fn(n, r, a, l);
    }
  }, s && (o.oProj = n), o);
}
var ua = 6, lo = "AJSAJS", uo = "AFAFAF", Ye = 65, te = 73, ae = 79, Ni = 86, Ri = 90;
const Tl = {
  forward: fo,
  inverse: Cl,
  toPoint: co
};
function fo(e, t) {
  return t = t || 5, Dl(Fl({
    lat: e[1],
    lon: e[0]
  }), t);
}
function Cl(e) {
  var t = Ln(go(e.toUpperCase()));
  return t.lat && t.lon ? [t.lon, t.lat, t.lon, t.lat] : [t.left, t.bottom, t.right, t.top];
}
function co(e) {
  var t = Ln(go(e.toUpperCase()));
  return t.lat && t.lon ? [t.lon, t.lat] : [(t.left + t.right) / 2, (t.top + t.bottom) / 2];
}
function cn(e) {
  return e * (Math.PI / 180);
}
function fa(e) {
  return 180 * (e / Math.PI);
}
function Fl(e) {
  var t = e.lat, i = e.lon, r = 6378137, n = 669438e-8, s = 0.9996, o, a, l, h, d, f, _, m = cn(t), y = cn(i), w, b;
  b = Math.floor((i + 180) / 6) + 1, i === 180 && (b = 60), t >= 56 && t < 64 && i >= 3 && i < 12 && (b = 32), t >= 72 && t < 84 && (i >= 0 && i < 9 ? b = 31 : i >= 9 && i < 21 ? b = 33 : i >= 21 && i < 33 ? b = 35 : i >= 33 && i < 42 && (b = 37)), o = (b - 1) * 6 - 180 + 3, w = cn(o), a = n / (1 - n), l = r / Math.sqrt(1 - n * Math.sin(m) * Math.sin(m)), h = Math.tan(m) * Math.tan(m), d = a * Math.cos(m) * Math.cos(m), f = Math.cos(m) * (y - w), _ = r * ((1 - n / 4 - 3 * n * n / 64 - 5 * n * n * n / 256) * m - (3 * n / 8 + 3 * n * n / 32 + 45 * n * n * n / 1024) * Math.sin(2 * m) + (15 * n * n / 256 + 45 * n * n * n / 1024) * Math.sin(4 * m) - 35 * n * n * n / 3072 * Math.sin(6 * m));
  var g = s * l * (f + (1 - h + d) * f * f * f / 6 + (5 - 18 * h + h * h + 72 * d - 58 * a) * f * f * f * f * f / 120) + 5e5, v = s * (_ + l * Math.tan(m) * (f * f / 2 + (5 - h + 9 * d + 4 * d * d) * f * f * f * f / 24 + (61 - 58 * h + h * h + 600 * d - 330 * a) * f * f * f * f * f * f / 720));
  return t < 0 && (v += 1e7), {
    northing: Math.round(v),
    easting: Math.round(g),
    zoneNumber: b,
    zoneLetter: Gl(t)
  };
}
function Ln(e) {
  var t = e.northing, i = e.easting, r = e.zoneLetter, n = e.zoneNumber;
  if (n < 0 || n > 60)
    return null;
  var s = 0.9996, o = 6378137, a = 669438e-8, l, h = (1 - Math.sqrt(1 - a)) / (1 + Math.sqrt(1 - a)), d, f, _, m, y, w, b, g, v, E = i - 5e5, N = t;
  r < "N" && (N -= 1e7), b = (n - 1) * 6 - 180 + 3, l = a / (1 - a), w = N / s, g = w / (o * (1 - a / 4 - 3 * a * a / 64 - 5 * a * a * a / 256)), v = g + (3 * h / 2 - 27 * h * h * h / 32) * Math.sin(2 * g) + (21 * h * h / 16 - 55 * h * h * h * h / 32) * Math.sin(4 * g) + 151 * h * h * h / 96 * Math.sin(6 * g), d = o / Math.sqrt(1 - a * Math.sin(v) * Math.sin(v)), f = Math.tan(v) * Math.tan(v), _ = l * Math.cos(v) * Math.cos(v), m = o * (1 - a) / Math.pow(1 - a * Math.sin(v) * Math.sin(v), 1.5), y = E / (d * s);
  var M = v - d * Math.tan(v) / m * (y * y / 2 - (5 + 3 * f + 10 * _ - 4 * _ * _ - 9 * l) * y * y * y * y / 24 + (61 + 90 * f + 298 * _ + 45 * f * f - 252 * l - 3 * _ * _) * y * y * y * y * y * y / 720);
  M = fa(M);
  var j = (y - (1 + 2 * f + _) * y * y * y / 6 + (5 - 2 * _ + 28 * f - 3 * _ * _ + 8 * l + 24 * f * f) * y * y * y * y * y / 120) / Math.cos(v);
  j = b + fa(j);
  var U;
  if (e.accuracy) {
    var k = Ln({
      northing: e.northing + e.accuracy,
      easting: e.easting + e.accuracy,
      zoneLetter: e.zoneLetter,
      zoneNumber: e.zoneNumber
    });
    U = {
      top: k.lat,
      right: k.lon,
      bottom: M,
      left: j
    };
  } else
    U = {
      lat: M,
      lon: j
    };
  return U;
}
function Gl(e) {
  var t = "Z";
  return 84 >= e && e >= 72 ? t = "X" : 72 > e && e >= 64 ? t = "W" : 64 > e && e >= 56 ? t = "V" : 56 > e && e >= 48 ? t = "U" : 48 > e && e >= 40 ? t = "T" : 40 > e && e >= 32 ? t = "S" : 32 > e && e >= 24 ? t = "R" : 24 > e && e >= 16 ? t = "Q" : 16 > e && e >= 8 ? t = "P" : 8 > e && e >= 0 ? t = "N" : 0 > e && e >= -8 ? t = "M" : -8 > e && e >= -16 ? t = "L" : -16 > e && e >= -24 ? t = "K" : -24 > e && e >= -32 ? t = "J" : -32 > e && e >= -40 ? t = "H" : -40 > e && e >= -48 ? t = "G" : -48 > e && e >= -56 ? t = "F" : -56 > e && e >= -64 ? t = "E" : -64 > e && e >= -72 ? t = "D" : -72 > e && e >= -80 && (t = "C"), t;
}
function Dl(e, t) {
  var i = "00000" + e.easting, r = "00000" + e.northing;
  return e.zoneNumber + e.zoneLetter + Ol(e.easting, e.northing, e.zoneNumber) + i.substr(i.length - 5, t) + r.substr(r.length - 5, t);
}
function Ol(e, t, i) {
  var r = _o(i), n = Math.floor(e / 1e5), s = Math.floor(t / 1e5) % 20;
  return Ll(n, s, r);
}
function _o(e) {
  var t = e % ua;
  return t === 0 && (t = ua), t;
}
function Ll(e, t, i) {
  var r = i - 1, n = lo.charCodeAt(r), s = uo.charCodeAt(r), o = n + e - 1, a = s + t, l = !1;
  o > Ri && (o = o - Ri + Ye - 1, l = !0), (o === te || n < te && o > te || (o > te || n < te) && l) && o++, (o === ae || n < ae && o > ae || (o > ae || n < ae) && l) && (o++, o === te && o++), o > Ri && (o = o - Ri + Ye - 1), a > Ni ? (a = a - Ni + Ye - 1, l = !0) : l = !1, (a === te || s < te && a > te || (a > te || s < te) && l) && a++, (a === ae || s < ae && a > ae || (a > ae || s < ae) && l) && (a++, a === te && a++), a > Ni && (a = a - Ni + Ye - 1);
  var h = String.fromCharCode(o) + String.fromCharCode(a);
  return h;
}
function go(e) {
  if (e && e.length === 0)
    throw "MGRSPoint coverting from nothing";
  for (var t = e.length, i = null, r = "", n, s = 0; !/[A-Z]/.test(n = e.charAt(s)); ) {
    if (s >= 2)
      throw "MGRSPoint bad conversion from: " + e;
    r += n, s++;
  }
  var o = parseInt(r, 10);
  if (s === 0 || s + 3 > t)
    throw "MGRSPoint bad conversion from: " + e;
  var a = e.charAt(s++);
  if (a <= "A" || a === "B" || a === "Y" || a >= "Z" || a === "I" || a === "O")
    throw "MGRSPoint zone letter " + a + " not handled: " + e;
  i = e.substring(s, s += 2);
  for (var l = _o(o), h = $l(i.charAt(0), l), d = jl(i.charAt(1), l); d < Bl(a); )
    d += 2e6;
  var f = t - s;
  if (f % 2 !== 0)
    throw `MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters` + e;
  var _ = f / 2, m = 0, y = 0, w, b, g, v, E;
  return _ > 0 && (w = 1e5 / Math.pow(10, _), b = e.substring(s, s + _), m = parseFloat(b) * w, g = e.substring(s + _), y = parseFloat(g) * w), v = m + h, E = y + d, {
    easting: v,
    northing: E,
    zoneLetter: a,
    zoneNumber: o,
    accuracy: w
  };
}
function $l(e, t) {
  for (var i = lo.charCodeAt(t - 1), r = 1e5, n = !1; i !== e.charCodeAt(0); ) {
    if (i++, i === te && i++, i === ae && i++, i > Ri) {
      if (n)
        throw "Bad character: " + e;
      i = Ye, n = !0;
    }
    r += 1e5;
  }
  return r;
}
function jl(e, t) {
  if (e > "V")
    throw "MGRSPoint given invalid Northing " + e;
  for (var i = uo.charCodeAt(t - 1), r = 0, n = !1; i !== e.charCodeAt(0); ) {
    if (i++, i === te && i++, i === ae && i++, i > Ni) {
      if (n)
        throw "Bad character: " + e;
      i = Ye, n = !0;
    }
    r += 1e5;
  }
  return r;
}
function Bl(e) {
  var t;
  switch (e) {
    case "C":
      t = 11e5;
      break;
    case "D":
      t = 2e6;
      break;
    case "E":
      t = 28e5;
      break;
    case "F":
      t = 37e5;
      break;
    case "G":
      t = 46e5;
      break;
    case "H":
      t = 55e5;
      break;
    case "J":
      t = 64e5;
      break;
    case "K":
      t = 73e5;
      break;
    case "L":
      t = 82e5;
      break;
    case "M":
      t = 91e5;
      break;
    case "N":
      t = 0;
      break;
    case "P":
      t = 8e5;
      break;
    case "Q":
      t = 17e5;
      break;
    case "R":
      t = 26e5;
      break;
    case "S":
      t = 35e5;
      break;
    case "T":
      t = 44e5;
      break;
    case "U":
      t = 53e5;
      break;
    case "V":
      t = 62e5;
      break;
    case "W":
      t = 7e6;
      break;
    case "X":
      t = 79e5;
      break;
    default:
      t = -1;
  }
  if (t >= 0)
    return t;
  throw "Invalid zone letter: " + e;
}
function ii(e, t, i) {
  if (!(this instanceof ii))
    return new ii(e, t, i);
  if (Array.isArray(e))
    this.x = e[0], this.y = e[1], this.z = e[2] || 0;
  else if (typeof e == "object")
    this.x = e.x, this.y = e.y, this.z = e.z || 0;
  else if (typeof e == "string" && typeof t > "u") {
    var r = e.split(",");
    this.x = parseFloat(r[0]), this.y = parseFloat(r[1]), this.z = parseFloat(r[2]) || 0;
  } else
    this.x = e, this.y = t, this.z = i || 0;
  console.warn("proj4.Point will be removed in version 3, use proj4.toPoint");
}
ii.fromMGRS = function(e) {
  return new ii(co(e));
};
ii.prototype.toMGRS = function(e) {
  return fo([this.x, this.y], e);
};
var kl = 1, ql = 0.25, ca = 0.046875, da = 0.01953125, _a = 0.01068115234375, Ul = 0.75, Wl = 0.46875, Hl = 0.013020833333333334, zl = 0.007120768229166667, Ql = 0.3645833333333333, Vl = 0.005696614583333333, Xl = 0.3076171875;
function $n(e) {
  var t = [];
  t[0] = kl - e * (ql + e * (ca + e * (da + e * _a))), t[1] = e * (Ul - e * (ca + e * (da + e * _a)));
  var i = e * e;
  return t[2] = i * (Wl - e * (Hl + e * zl)), i *= e, t[3] = i * (Ql - e * Vl), t[4] = i * e * Xl, t;
}
function si(e, t, i, r) {
  return i *= t, t *= t, r[0] * e - i * (r[1] + t * (r[2] + t * (r[3] + t * r[4])));
}
var Kl = 20;
function jn(e, t, i) {
  for (var r = 1 / (1 - t), n = e, s = Kl; s; --s) {
    var o = Math.sin(n), a = 1 - t * o * o;
    if (a = (si(n, o, Math.cos(n), i) - e) * (a * Math.sqrt(a)) * r, n -= a, Math.abs(a) < ot)
      return n;
  }
  return n;
}
function Jl() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = $n(this.es), this.ml0 = si(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
}
function Yl(e) {
  var t = e.x, i = e.y, r = ut(t - this.long0, this.over), n, s, o, a = Math.sin(i), l = Math.cos(i);
  if (this.es) {
    var d = l * r, f = Math.pow(d, 2), _ = this.ep2 * Math.pow(l, 2), m = Math.pow(_, 2), y = Math.abs(l) > ot ? Math.tan(i) : 0, w = Math.pow(y, 2), b = Math.pow(w, 2);
    n = 1 - this.es * Math.pow(a, 2), d = d / Math.sqrt(n);
    var g = si(i, a, l, this.en);
    s = this.a * (this.k0 * d * (1 + f / 6 * (1 - w + _ + f / 20 * (5 - 18 * w + b + 14 * _ - 58 * w * _ + f / 42 * (61 + 179 * b - b * w - 479 * w))))) + this.x0, o = this.a * (this.k0 * (g - this.ml0 + a * r * d / 2 * (1 + f / 12 * (5 - w + 9 * _ + 4 * m + f / 30 * (61 + b - 58 * w + 270 * _ - 330 * w * _ + f / 56 * (1385 + 543 * b - b * w - 3111 * w)))))) + this.y0;
  } else {
    var h = l * Math.sin(r);
    if (Math.abs(Math.abs(h) - 1) < ot)
      return 93;
    if (s = 0.5 * this.a * this.k0 * Math.log((1 + h) / (1 - h)) + this.x0, o = l * Math.cos(r) / Math.sqrt(1 - Math.pow(h, 2)), h = Math.abs(o), h >= 1) {
      if (h - 1 > ot)
        return 93;
      o = 0;
    } else
      o = Math.acos(o);
    i < 0 && (o = -o), o = this.a * this.k0 * (o - this.lat0) + this.y0;
  }
  return e.x = s, e.y = o, e;
}
function Zl(e) {
  var t, i, r, n, s = (e.x - this.x0) * (1 / this.a), o = (e.y - this.y0) * (1 / this.a);
  if (this.es)
    if (t = this.ml0 + o / this.k0, i = jn(t, this.es, this.en), Math.abs(i) < Z) {
      var f = Math.sin(i), _ = Math.cos(i), m = Math.abs(_) > ot ? Math.tan(i) : 0, y = this.ep2 * Math.pow(_, 2), w = Math.pow(y, 2), b = Math.pow(m, 2), g = Math.pow(b, 2);
      t = 1 - this.es * Math.pow(f, 2);
      var v = s * Math.sqrt(t) / this.k0, E = Math.pow(v, 2);
      t = t * m, r = i - t * E / (1 - this.es) * 0.5 * (1 - E / 12 * (5 + 3 * b - 9 * y * b + y - 4 * w - E / 30 * (61 + 90 * b - 252 * y * b + 45 * g + 46 * y - E / 56 * (1385 + 3633 * b + 4095 * g + 1574 * g * b)))), n = ut(this.long0 + v * (1 - E / 6 * (1 + 2 * b + y - E / 20 * (5 + 28 * b + 24 * g + 8 * y * b + 6 * y - E / 42 * (61 + 662 * b + 1320 * g + 720 * g * b)))) / _, this.over);
    } else
      r = Z * Ui(o), n = 0;
  else {
    var a = Math.exp(s / this.k0), l = 0.5 * (a - 1 / a), h = this.lat0 + o / this.k0, d = Math.cos(h);
    t = Math.sqrt((1 - Math.pow(d, 2)) / (1 + Math.pow(l, 2))), r = Math.asin(t), o < 0 && (r = -r), l === 0 && d === 0 ? n = 0 : n = ut(Math.atan2(l, d) + this.long0, this.over);
  }
  return e.x = n, e.y = r, e;
}
var tu = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
const dr = {
  init: Jl,
  forward: Yl,
  inverse: Zl,
  names: tu
};
function po(e) {
  var t = Math.exp(e);
  return t = (t - 1 / t) / 2, t;
}
function ee(e, t) {
  e = Math.abs(e), t = Math.abs(t);
  var i = Math.max(e, t), r = Math.min(e, t) / (i || 1);
  return i * Math.sqrt(1 + Math.pow(r, 2));
}
function eu(e) {
  var t = 1 + e, i = t - 1;
  return i === 0 ? e : e * Math.log(t) / i;
}
function iu(e) {
  var t = Math.abs(e);
  return t = eu(t * (1 + t / (ee(1, t) + 1))), e < 0 ? -t : t;
}
function Bn(e, t) {
  for (var i = 2 * Math.cos(2 * t), r = e.length - 1, n = e[r], s = 0, o; --r >= 0; )
    o = -s + i * n + e[r], s = n, n = o;
  return t + o * Math.sin(2 * t);
}
function ru(e, t) {
  for (var i = 2 * Math.cos(t), r = e.length - 1, n = e[r], s = 0, o; --r >= 0; )
    o = -s + i * n + e[r], s = n, n = o;
  return Math.sin(t) * o;
}
function nu(e) {
  var t = Math.exp(e);
  return t = (t + 1 / t) / 2, t;
}
function yo(e, t, i) {
  for (var r = Math.sin(t), n = Math.cos(t), s = po(i), o = nu(i), a = 2 * n * o, l = -2 * r * s, h = e.length - 1, d = e[h], f = 0, _ = 0, m = 0, y, w; --h >= 0; )
    y = _, w = f, _ = d, f = m, d = -y + a * _ - l * f + e[h], m = -w + l * _ + a * f;
  return a = r * o, l = n * s, [a * d - l * m, a * m + l * d];
}
function su() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0))
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  this.approx && (dr.init.apply(this), this.forward = dr.forward, this.inverse = dr.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
  var e = this.es / (1 + Math.sqrt(1 - this.es)), t = e / (2 - e), i = t;
  this.cgb[0] = t * (2 + t * (-2 / 3 + t * (-2 + t * (116 / 45 + t * (26 / 45 + t * (-2854 / 675)))))), this.cbg[0] = t * (-2 + t * (2 / 3 + t * (4 / 3 + t * (-82 / 45 + t * (32 / 45 + t * (4642 / 4725)))))), i = i * t, this.cgb[1] = i * (7 / 3 + t * (-8 / 5 + t * (-227 / 45 + t * (2704 / 315 + t * (2323 / 945))))), this.cbg[1] = i * (5 / 3 + t * (-16 / 15 + t * (-13 / 9 + t * (904 / 315 + t * (-1522 / 945))))), i = i * t, this.cgb[2] = i * (56 / 15 + t * (-136 / 35 + t * (-1262 / 105 + t * (73814 / 2835)))), this.cbg[2] = i * (-26 / 15 + t * (34 / 21 + t * (8 / 5 + t * (-12686 / 2835)))), i = i * t, this.cgb[3] = i * (4279 / 630 + t * (-332 / 35 + t * (-399572 / 14175))), this.cbg[3] = i * (1237 / 630 + t * (-12 / 5 + t * (-24832 / 14175))), i = i * t, this.cgb[4] = i * (4174 / 315 + t * (-144838 / 6237)), this.cbg[4] = i * (-734 / 315 + t * (109598 / 31185)), i = i * t, this.cgb[5] = i * (601676 / 22275), this.cbg[5] = i * (444337 / 155925), i = Math.pow(t, 2), this.Qn = this.k0 / (1 + t) * (1 + i * (1 / 4 + i * (1 / 64 + i / 256))), this.utg[0] = t * (-0.5 + t * (2 / 3 + t * (-37 / 96 + t * (1 / 360 + t * (81 / 512 + t * (-96199 / 604800)))))), this.gtu[0] = t * (0.5 + t * (-2 / 3 + t * (5 / 16 + t * (41 / 180 + t * (-127 / 288 + t * (7891 / 37800)))))), this.utg[1] = i * (-1 / 48 + t * (-1 / 15 + t * (437 / 1440 + t * (-46 / 105 + t * (1118711 / 3870720))))), this.gtu[1] = i * (13 / 48 + t * (-3 / 5 + t * (557 / 1440 + t * (281 / 630 + t * (-1983433 / 1935360))))), i = i * t, this.utg[2] = i * (-17 / 480 + t * (37 / 840 + t * (209 / 4480 + t * (-5569 / 90720)))), this.gtu[2] = i * (61 / 240 + t * (-103 / 140 + t * (15061 / 26880 + t * (167603 / 181440)))), i = i * t, this.utg[3] = i * (-4397 / 161280 + t * (11 / 504 + t * (830251 / 7257600))), this.gtu[3] = i * (49561 / 161280 + t * (-179 / 168 + t * (6601661 / 7257600))), i = i * t, this.utg[4] = i * (-4583 / 161280 + t * (108847 / 3991680)), this.gtu[4] = i * (34729 / 80640 + t * (-3418889 / 1995840)), i = i * t, this.utg[5] = i * (-20648693 / 638668800), this.gtu[5] = i * (212378941 / 319334400);
  var r = Bn(this.cbg, this.lat0);
  this.Zb = -this.Qn * (r + ru(this.gtu, 2 * r));
}
function au(e) {
  var t = ut(e.x - this.long0, this.over), i = e.y;
  i = Bn(this.cbg, i);
  var r = Math.sin(i), n = Math.cos(i), s = Math.sin(t), o = Math.cos(t);
  i = Math.atan2(r, o * n), t = Math.atan2(s * n, ee(r, n * o)), t = iu(Math.tan(t));
  var a = yo(this.gtu, 2 * i, 2 * t);
  i = i + a[0], t = t + a[1];
  var l, h;
  return Math.abs(t) <= 2.623395162778 ? (l = this.a * (this.Qn * t) + this.x0, h = this.a * (this.Qn * i + this.Zb) + this.y0) : (l = 1 / 0, h = 1 / 0), e.x = l, e.y = h, e;
}
function ou(e) {
  var t = (e.x - this.x0) * (1 / this.a), i = (e.y - this.y0) * (1 / this.a);
  i = (i - this.Zb) / this.Qn, t = t / this.Qn;
  var r, n;
  if (Math.abs(t) <= 2.623395162778) {
    var s = yo(this.utg, 2 * i, 2 * t);
    i = i + s[0], t = t + s[1], t = Math.atan(po(t));
    var o = Math.sin(i), a = Math.cos(i), l = Math.sin(t), h = Math.cos(t);
    i = Math.atan2(o * h, ee(l, h * a)), t = Math.atan2(l, h * a), r = ut(t + this.long0, this.over), n = Bn(this.cgb, i);
  } else
    r = 1 / 0, n = 1 / 0;
  return e.x = r, e.y = n, e;
}
var hu = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"];
const _r = {
  init: su,
  forward: au,
  inverse: ou,
  names: hu
};
function lu(e, t) {
  if (e === void 0) {
    if (e = Math.floor((ut(t) + Math.PI) * 30 / Math.PI) + 1, e < 0)
      return 0;
    if (e > 60)
      return 60;
  }
  return e;
}
var uu = "etmerc";
function fu() {
  var e = lu(this.zone, this.long0);
  if (e === void 0)
    throw new Error("unknown utm zone");
  this.lat0 = 0, this.long0 = (6 * Math.abs(e) - 183) * jt, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, _r.init.apply(this), this.forward = _r.forward, this.inverse = _r.inverse;
}
var cu = ["Universal Transverse Mercator System", "utm"];
const du = {
  init: fu,
  names: cu,
  dependsOn: uu
};
function kn(e, t) {
  return Math.pow((1 - e) / (1 + e), t);
}
var _u = 20;
function gu() {
  var e = Math.sin(this.lat0), t = Math.cos(this.lat0);
  t *= t, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * e * e), this.C = Math.sqrt(1 + this.es * t * t / (1 - this.es)), this.phic0 = Math.asin(e / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + It) / (Math.pow(Math.tan(0.5 * this.lat0 + It), this.C) * kn(this.e * e, this.ratexp));
}
function pu(e) {
  var t = e.x, i = e.y;
  return e.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * i + It), this.C) * kn(this.e * Math.sin(i), this.ratexp)) - Z, e.x = this.C * t, e;
}
function yu(e) {
  for (var t = 1e-14, i = e.x / this.C, r = e.y, n = Math.pow(Math.tan(0.5 * r + It) / this.K, 1 / this.C), s = _u; s > 0 && (r = 2 * Math.atan(n * kn(this.e * Math.sin(e.y), -0.5 * this.e)) - Z, !(Math.abs(r - e.y) < t)); --s)
    e.y = r;
  return s ? (e.x = i, e.y = r, e) : null;
}
const qn = {
  init: gu,
  forward: pu,
  inverse: yu
};
function bu() {
  qn.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
}
function mu(e) {
  var t, i, r, n;
  return e.x = ut(e.x - this.long0, this.over), qn.forward.apply(this, [e]), t = Math.sin(e.y), i = Math.cos(e.y), r = Math.cos(e.x), n = this.k0 * this.R2 / (1 + this.sinc0 * t + this.cosc0 * i * r), e.x = n * i * Math.sin(e.x), e.y = n * (this.cosc0 * t - this.sinc0 * i * r), e.x = this.a * e.x + this.x0, e.y = this.a * e.y + this.y0, e;
}
function wu(e) {
  var t, i, r, n, s;
  if (e.x = (e.x - this.x0) / this.a, e.y = (e.y - this.y0) / this.a, e.x /= this.k0, e.y /= this.k0, s = ee(e.x, e.y)) {
    var o = 2 * Math.atan2(s, this.R2);
    t = Math.sin(o), i = Math.cos(o), n = Math.asin(i * this.sinc0 + e.y * t * this.cosc0 / s), r = Math.atan2(e.x * t, s * this.cosc0 * i - e.y * this.sinc0 * t);
  } else
    n = this.phic0, r = 0;
  return e.x = r, e.y = n, qn.inverse.apply(this, [e]), e.x = ut(e.x + this.long0, this.over), e;
}
var Eu = ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
const vu = {
  init: bu,
  forward: mu,
  inverse: wu,
  names: Eu
};
function Un(e, t, i) {
  return t *= i, Math.tan(0.5 * (Z + e)) * Math.pow((1 - t) / (1 + t), 0.5 * i);
}
function xu() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= ot && (this.k0 = 0.5 * (1 + Ui(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= ot && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= ot && Math.abs(Math.cos(this.lat_ts)) > ot && (this.k0 = 0.5 * this.cons * de(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / le(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = de(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(Un(this.lat0, this.sinlat0, this.e)) - Z, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
}
function Su(e) {
  var t = e.x, i = e.y, r = Math.sin(i), n = Math.cos(i), s, o, a, l, h, d, f = ut(t - this.long0, this.over);
  return Math.abs(Math.abs(t - this.long0) - Math.PI) <= ot && Math.abs(i + this.lat0) <= ot ? (e.x = NaN, e.y = NaN, e) : this.sphere ? (s = 2 * this.k0 / (1 + this.sinlat0 * r + this.coslat0 * n * Math.cos(f)), e.x = this.a * s * n * Math.sin(f) + this.x0, e.y = this.a * s * (this.coslat0 * r - this.sinlat0 * n * Math.cos(f)) + this.y0, e) : (o = 2 * Math.atan(Un(i, r, this.e)) - Z, l = Math.cos(o), a = Math.sin(o), Math.abs(this.coslat0) <= ot ? (h = le(this.e, i * this.con, this.con * r), d = 2 * this.a * this.k0 * h / this.cons, e.x = this.x0 + d * Math.sin(t - this.long0), e.y = this.y0 - this.con * d * Math.cos(t - this.long0), e) : (Math.abs(this.sinlat0) < ot ? (s = 2 * this.a * this.k0 / (1 + l * Math.cos(f)), e.y = s * a) : (s = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * a + this.cosX0 * l * Math.cos(f))), e.y = s * (this.cosX0 * a - this.sinX0 * l * Math.cos(f)) + this.y0), e.x = s * l * Math.sin(f) + this.x0, e));
}
function Mu(e) {
  e.x -= this.x0, e.y -= this.y0;
  var t, i, r, n, s, o = Math.sqrt(e.x * e.x + e.y * e.y);
  if (this.sphere) {
    var a = 2 * Math.atan(o / (2 * this.a * this.k0));
    return t = this.long0, i = this.lat0, o <= ot ? (e.x = t, e.y = i, e) : (i = Math.asin(Math.cos(a) * this.sinlat0 + e.y * Math.sin(a) * this.coslat0 / o), Math.abs(this.coslat0) < ot ? this.lat0 > 0 ? t = ut(this.long0 + Math.atan2(e.x, -1 * e.y), this.over) : t = ut(this.long0 + Math.atan2(e.x, e.y), this.over) : t = ut(this.long0 + Math.atan2(e.x * Math.sin(a), o * this.coslat0 * Math.cos(a) - e.y * this.sinlat0 * Math.sin(a)), this.over), e.x = t, e.y = i, e);
  } else if (Math.abs(this.coslat0) <= ot) {
    if (o <= ot)
      return i = this.lat0, t = this.long0, e.x = t, e.y = i, e;
    e.x *= this.con, e.y *= this.con, r = o * this.cons / (2 * this.a * this.k0), i = this.con * Bi(this.e, r), t = this.con * ut(this.con * this.long0 + Math.atan2(e.x, -1 * e.y), this.over);
  } else
    n = 2 * Math.atan(o * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), t = this.long0, o <= ot ? s = this.X0 : (s = Math.asin(Math.cos(n) * this.sinX0 + e.y * Math.sin(n) * this.cosX0 / o), t = ut(this.long0 + Math.atan2(e.x * Math.sin(n), o * this.cosX0 * Math.cos(n) - e.y * this.sinX0 * Math.sin(n)), this.over)), i = -1 * Bi(this.e, Math.tan(0.5 * (Z + s)));
  return e.x = t, e.y = i, e;
}
var Pu = ["stere", "Stereographic_South_Pole", "Polar_Stereographic_variant_A", "Polar_Stereographic_variant_B", "Polar_Stereographic"];
const Au = {
  init: xu,
  forward: Su,
  inverse: Mu,
  names: Pu,
  ssfn_: Un
};
function Nu() {
  var e = this.lat0;
  this.lambda0 = this.long0;
  var t = Math.sin(e), i = this.a, r = this.rf, n = 1 / r, s = 2 * n - Math.pow(n, 2), o = this.e = Math.sqrt(s);
  this.R = this.k0 * i * Math.sqrt(1 - s) / (1 - s * Math.pow(t, 2)), this.alpha = Math.sqrt(1 + s / (1 - s) * Math.pow(Math.cos(e), 4)), this.b0 = Math.asin(t / this.alpha);
  var a = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), l = Math.log(Math.tan(Math.PI / 4 + e / 2)), h = Math.log((1 + o * t) / (1 - o * t));
  this.K = a - this.alpha * l + this.alpha * o / 2 * h;
}
function Ru(e) {
  var t = Math.log(Math.tan(Math.PI / 4 - e.y / 2)), i = this.e / 2 * Math.log((1 + this.e * Math.sin(e.y)) / (1 - this.e * Math.sin(e.y))), r = -this.alpha * (t + i) + this.K, n = 2 * (Math.atan(Math.exp(r)) - Math.PI / 4), s = this.alpha * (e.x - this.lambda0), o = Math.atan(Math.sin(s) / (Math.sin(this.b0) * Math.tan(n) + Math.cos(this.b0) * Math.cos(s))), a = Math.asin(Math.cos(this.b0) * Math.sin(n) - Math.sin(this.b0) * Math.cos(n) * Math.cos(s));
  return e.y = this.R / 2 * Math.log((1 + Math.sin(a)) / (1 - Math.sin(a))) + this.y0, e.x = this.R * o + this.x0, e;
}
function Iu(e) {
  for (var t = e.x - this.x0, i = e.y - this.y0, r = t / this.R, n = 2 * (Math.atan(Math.exp(i / this.R)) - Math.PI / 4), s = Math.asin(Math.cos(this.b0) * Math.sin(n) + Math.sin(this.b0) * Math.cos(n) * Math.cos(r)), o = Math.atan(Math.sin(r) / (Math.cos(this.b0) * Math.cos(r) - Math.sin(this.b0) * Math.tan(n))), a = this.lambda0 + o / this.alpha, l = 0, h = s, d = -1e3, f = 0; Math.abs(h - d) > 1e-7; ) {
    if (++f > 20)
      return;
    l = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + s / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(h)) / 2)), d = h, h = 2 * Math.atan(Math.exp(l)) - Math.PI / 2;
  }
  return e.x = a, e.y = h, e;
}
var Tu = ["somerc"];
const Cu = {
  init: Nu,
  forward: Ru,
  inverse: Iu,
  names: Tu
};
var Ve = 1e-7;
function Fu(e) {
  var t = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_variant_A", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], i = typeof e.projName == "object" ? Object.keys(e.projName)[0] : e.projName;
  return "no_uoff" in e || "no_off" in e || t.indexOf(i) !== -1 || t.indexOf(so(i)) !== -1;
}
function Gu() {
  var e, t, i, r, n, s, o, a, l, h, d = 0, f, _ = 0, m = 0, y = 0, w = 0, b = 0, g = 0;
  this.no_off = Fu(this), this.no_rot = "no_rot" in this;
  var v = !1;
  "alpha" in this && (v = !0);
  var E = !1;
  if ("rectified_grid_angle" in this && (E = !0), v && (g = this.alpha), E && (d = this.rectified_grid_angle, v || (g = 0, v = !0)), v || E)
    _ = this.longc;
  else if (m = this.long1, w = this.lat1, y = this.long2, b = this.lat2, Math.abs(w - b) <= Ve || (e = Math.abs(w)) <= Ve || Math.abs(e - Z) <= Ve || Math.abs(Math.abs(this.lat0) - Z) <= Ve || Math.abs(Math.abs(b) - Z) <= Ve)
    throw new Error();
  var N = 1 - this.es;
  t = Math.sqrt(N), Math.abs(this.lat0) > ot ? (a = Math.sin(this.lat0), i = Math.cos(this.lat0), e = 1 - this.es * a * a, this.B = i * i, this.B = Math.sqrt(1 + this.es * this.B * this.B / N), this.A = this.B * this.k0 * t / e, r = this.B * t / (i * Math.sqrt(e)), n = r * r - 1, n <= 0 ? n = 0 : (n = Math.sqrt(n), this.lat0 < 0 && (n = -n)), this.E = n += r, this.E *= Math.pow(le(this.e, this.lat0, a), this.B)) : (this.B = 1 / t, this.A = this.k0, this.E = r = n = 1), v || E ? (v ? (f = Math.asin(Math.sin(g) / r), E || (d = g)) : (f = d, g = Math.asin(r * Math.sin(f))), this.lam0 = _ - Math.asin(0.5 * (n - 1 / n) * Math.tan(f)) / this.B) : (s = Math.pow(le(this.e, w, Math.sin(w)), this.B), o = Math.pow(le(this.e, b, Math.sin(b)), this.B), n = this.E / s, l = (o - s) / (o + s), h = this.E * this.E, h = (h - o * s) / (h + o * s), e = m - y, e < -Math.PI ? y -= $i : e > Math.PI && (y += $i), this.lam0 = ut(0.5 * (m + y) - Math.atan(h * Math.tan(0.5 * this.B * (m - y)) / l) / this.B, this.over), f = Math.atan(2 * Math.sin(this.B * ut(m - this.lam0, this.over)) / (n - 1 / n)), d = g = Math.asin(r * Math.sin(f))), this.singam = Math.sin(f), this.cosgam = Math.cos(f), this.sinrot = Math.sin(d), this.cosrot = Math.cos(d), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(r * r - 1) / Math.cos(g))), this.lat0 < 0 && (this.u_0 = -this.u_0)), n = 0.5 * f, this.v_pole_n = this.ArB * Math.log(Math.tan(It - n)), this.v_pole_s = this.ArB * Math.log(Math.tan(It + n));
}
function Du(e) {
  var t = {}, i, r, n, s, o, a, l, h;
  if (e.x = e.x - this.lam0, Math.abs(Math.abs(e.y) - Z) > ot) {
    if (o = this.E / Math.pow(le(this.e, e.y, Math.sin(e.y)), this.B), a = 1 / o, i = 0.5 * (o - a), r = 0.5 * (o + a), s = Math.sin(this.B * e.x), n = (i * this.singam - s * this.cosgam) / r, Math.abs(Math.abs(n) - 1) < ot)
      throw new Error();
    h = 0.5 * this.ArB * Math.log((1 - n) / (1 + n)), a = Math.cos(this.B * e.x), Math.abs(a) < Ve ? l = this.A * e.x : l = this.ArB * Math.atan2(i * this.cosgam + s * this.singam, a);
  } else
    h = e.y > 0 ? this.v_pole_n : this.v_pole_s, l = this.ArB * e.y;
  return this.no_rot ? (t.x = l, t.y = h) : (l -= this.u_0, t.x = h * this.cosrot + l * this.sinrot, t.y = l * this.cosrot - h * this.sinrot), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function Ou(e) {
  var t, i, r, n, s, o, a, l = {};
  if (e.x = (e.x - this.x0) * (1 / this.a), e.y = (e.y - this.y0) * (1 / this.a), this.no_rot ? (i = e.y, t = e.x) : (i = e.x * this.cosrot - e.y * this.sinrot, t = e.y * this.cosrot + e.x * this.sinrot + this.u_0), r = Math.exp(-this.BrA * i), n = 0.5 * (r - 1 / r), s = 0.5 * (r + 1 / r), o = Math.sin(this.BrA * t), a = (o * this.cosgam + n * this.singam) / s, Math.abs(Math.abs(a) - 1) < ot)
    l.x = 0, l.y = a < 0 ? -Z : Z;
  else {
    if (l.y = this.E / Math.sqrt((1 + a) / (1 - a)), l.y = Bi(this.e, Math.pow(l.y, 1 / this.B)), l.y === 1 / 0)
      throw new Error();
    l.x = -this.rB * Math.atan2(n * this.cosgam - o * this.singam, Math.cos(this.BrA * t));
  }
  return l.x += this.lam0, l;
}
var Lu = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_variant_A", "Hotine_Oblique_Mercator_Variant_B", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
const $u = {
  init: Gu,
  forward: Du,
  inverse: Ou,
  names: Lu
};
function ju() {
  if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < ot)) {
    var e = this.b / this.a;
    this.e = Math.sqrt(1 - e * e);
    var t = Math.sin(this.lat1), i = Math.cos(this.lat1), r = de(this.e, t, i), n = le(this.e, this.lat1, t), s = Math.sin(this.lat2), o = Math.cos(this.lat2), a = de(this.e, s, o), l = le(this.e, this.lat2, s), h = Math.abs(Math.abs(this.lat0) - Z) < ot ? 0 : le(this.e, this.lat0, Math.sin(this.lat0));
    Math.abs(this.lat1 - this.lat2) > ot ? this.ns = Math.log(r / a) / Math.log(n / l) : this.ns = t, isNaN(this.ns) && (this.ns = t), this.f0 = r / (this.ns * Math.pow(n, this.ns)), this.rh = this.a * this.f0 * Math.pow(h, this.ns), this.title || (this.title = "Lambert Conformal Conic");
  }
}
function Bu(e) {
  var t = e.x, i = e.y;
  Math.abs(2 * Math.abs(i) - Math.PI) <= ot && (i = Ui(i) * (Z - 2 * ot));
  var r = Math.abs(Math.abs(i) - Z), n, s;
  if (r > ot)
    n = le(this.e, i, Math.sin(i)), s = this.a * this.f0 * Math.pow(n, this.ns);
  else {
    if (r = i * this.ns, r <= 0)
      return null;
    s = 0;
  }
  var o = this.ns * ut(t - this.long0, this.over);
  return e.x = this.k0 * (s * Math.sin(o)) + this.x0, e.y = this.k0 * (this.rh - s * Math.cos(o)) + this.y0, e;
}
function ku(e) {
  var t, i, r, n, s, o = (e.x - this.x0) / this.k0, a = this.rh - (e.y - this.y0) / this.k0;
  this.ns > 0 ? (t = Math.sqrt(o * o + a * a), i = 1) : (t = -Math.sqrt(o * o + a * a), i = -1);
  var l = 0;
  if (t !== 0 && (l = Math.atan2(i * o, i * a)), t !== 0 || this.ns > 0) {
    if (i = 1 / this.ns, r = Math.pow(t / (this.a * this.f0), i), n = Bi(this.e, r), n === -9999)
      return null;
  } else
    n = -Z;
  return s = ut(l / this.ns + this.long0, this.over), e.x = s, e.y = n, e;
}
var qu = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc",
  "Lambert Conic Conformal (1SP)",
  "Lambert Conic Conformal (2SP)"
];
const Uu = {
  init: ju,
  forward: Bu,
  inverse: ku,
  names: qu
};
function Wu() {
  this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
}
function Hu(e) {
  var t, i, r, n, s, o, a, l = e.x, h = e.y, d = ut(l - this.long0, this.over);
  return t = Math.pow((1 + this.e * Math.sin(h)) / (1 - this.e * Math.sin(h)), this.alfa * this.e / 2), i = 2 * (Math.atan(this.k * Math.pow(Math.tan(h / 2 + this.s45), this.alfa) / t) - this.s45), r = -d * this.alfa, n = Math.asin(Math.cos(this.ad) * Math.sin(i) + Math.sin(this.ad) * Math.cos(i) * Math.cos(r)), s = Math.asin(Math.cos(i) * Math.sin(r) / Math.cos(n)), o = this.n * s, a = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(n / 2 + this.s45), this.n), e.y = a * Math.cos(o) / 1, e.x = a * Math.sin(o) / 1, this.czech || (e.y *= -1, e.x *= -1), e;
}
function zu(e) {
  var t, i, r, n, s, o, a, l, h = e.x;
  e.x = e.y, e.y = h, this.czech || (e.y *= -1, e.x *= -1), o = Math.sqrt(e.x * e.x + e.y * e.y), s = Math.atan2(e.y, e.x), n = s / Math.sin(this.s0), r = 2 * (Math.atan(Math.pow(this.ro0 / o, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), t = Math.asin(Math.cos(this.ad) * Math.sin(r) - Math.sin(this.ad) * Math.cos(r) * Math.cos(n)), i = Math.asin(Math.cos(r) * Math.sin(n) / Math.cos(t)), e.x = this.long0 - i / this.alfa, a = t, l = 0;
  var d = 0;
  do
    e.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(t / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(a)) / (1 - this.e * Math.sin(a)), this.e / 2)) - this.s45), Math.abs(a - e.y) < 1e-10 && (l = 1), a = e.y, d += 1;
  while (l === 0 && d < 15);
  return d >= 15 ? null : e;
}
var Qu = ["Krovak", "Krovak Modified", "Krovak (North Orientated)", "Krovak Modified (North Orientated)", "krovak"];
const Vu = {
  init: Wu,
  forward: Hu,
  inverse: zu,
  names: Qu
};
function Yt(e, t, i, r, n) {
  return e * n - t * Math.sin(2 * n) + i * Math.sin(4 * n) - r * Math.sin(6 * n);
}
function Wi(e) {
  return 1 - 0.25 * e * (1 + e / 16 * (3 + 1.25 * e));
}
function Hi(e) {
  return 0.375 * e * (1 + 0.25 * e * (1 + 0.46875 * e));
}
function zi(e) {
  return 0.05859375 * e * e * (1 + 0.75 * e);
}
function Qi(e) {
  return e * e * e * (35 / 3072);
}
function Wn(e, t, i) {
  var r = t * i;
  return e / Math.sqrt(1 - r * r);
}
function Re(e) {
  return Math.abs(e) < Z ? e : e - Ui(e) * Math.PI;
}
function wr(e, t, i, r, n) {
  var s, o;
  s = e / t;
  for (var a = 0; a < 15; a++)
    if (o = (e - (t * s - i * Math.sin(2 * s) + r * Math.sin(4 * s) - n * Math.sin(6 * s))) / (t - 2 * i * Math.cos(2 * s) + 4 * r * Math.cos(4 * s) - 6 * n * Math.cos(6 * s)), s += o, Math.abs(o) <= 1e-10)
      return s;
  return NaN;
}
function Xu() {
  this.sphere || (this.e0 = Wi(this.es), this.e1 = Hi(this.es), this.e2 = zi(this.es), this.e3 = Qi(this.es), this.ml0 = this.a * Yt(this.e0, this.e1, this.e2, this.e3, this.lat0));
}
function Ku(e) {
  var t, i, r = e.x, n = e.y;
  if (r = ut(r - this.long0, this.over), this.sphere)
    t = this.a * Math.asin(Math.cos(n) * Math.sin(r)), i = this.a * (Math.atan2(Math.tan(n), Math.cos(r)) - this.lat0);
  else {
    var s = Math.sin(n), o = Math.cos(n), a = Wn(this.a, this.e, s), l = Math.tan(n) * Math.tan(n), h = r * Math.cos(n), d = h * h, f = this.es * o * o / (1 - this.es), _ = this.a * Yt(this.e0, this.e1, this.e2, this.e3, n);
    t = a * h * (1 - d * l * (1 / 6 - (8 - l + 8 * f) * d / 120)), i = _ - this.ml0 + a * s / o * d * (0.5 + (5 - l + 6 * f) * d / 24);
  }
  return e.x = t + this.x0, e.y = i + this.y0, e;
}
function Ju(e) {
  e.x -= this.x0, e.y -= this.y0;
  var t = e.x / this.a, i = e.y / this.a, r, n;
  if (this.sphere) {
    var s = i + this.lat0;
    r = Math.asin(Math.sin(s) * Math.cos(t)), n = Math.atan2(Math.tan(t), Math.cos(s));
  } else {
    var o = this.ml0 / this.a + i, a = wr(o, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(a) - Z) <= ot)
      return e.x = this.long0, e.y = Z, i < 0 && (e.y *= -1), e;
    var l = Wn(this.a, this.e, Math.sin(a)), h = l * l * l / this.a / this.a * (1 - this.es), d = Math.pow(Math.tan(a), 2), f = t * this.a / l, _ = f * f;
    r = a - l * Math.tan(a) / h * f * f * (0.5 - (1 + 3 * d) * f * f / 24), n = f * (1 - _ * (d / 3 + (1 + 3 * d) * d * _ / 15)) / Math.cos(a);
  }
  return e.x = ut(n + this.long0, this.over), e.y = Re(r), e;
}
var Yu = ["Cassini", "Cassini_Soldner", "cass"];
const Zu = {
  init: Xu,
  forward: Ku,
  inverse: Ju,
  names: Yu
};
function ce(e, t) {
  var i;
  return e > 1e-7 ? (i = e * t, (1 - e * e) * (t / (1 - i * i) - 0.5 / e * Math.log((1 - i) / (1 + i)))) : 2 * t;
}
var tf = 0.3333333333333333, ef = 0.17222222222222222, rf = 0.10257936507936508, nf = 0.06388888888888888, sf = 0.0664021164021164, af = 0.016415012942191543;
function bo(e) {
  var t, i = [];
  return i[0] = e * tf, t = e * e, i[0] += t * ef, i[1] = t * nf, t *= e, i[0] += t * rf, i[1] += t * sf, i[2] = t * af, i;
}
function mo(e, t) {
  var i = e + e;
  return e + t[0] * Math.sin(i) + t[1] * Math.sin(i + i) + t[2] * Math.sin(i + i + i);
}
var xn = 1, Sn = 2, Mn = 3, gr = 4;
function of() {
  var e = Math.abs(this.lat0);
  if (Math.abs(e - Z) < ot ? this.mode = this.lat0 < 0 ? xn : Sn : Math.abs(e) < ot ? this.mode = Mn : this.mode = gr, this.es > 0) {
    var t;
    switch (this.qp = ce(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = bo(this.es), this.mode) {
      case Sn:
        this.dd = 1;
        break;
      case xn:
        this.dd = 1;
        break;
      case Mn:
        this.rq = Math.sqrt(0.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = 0.5 * this.qp;
        break;
      case gr:
        this.rq = Math.sqrt(0.5 * this.qp), t = Math.sin(this.lat0), this.sinb1 = ce(this.e, t) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * t * t) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
        break;
    }
  } else
    this.mode === gr && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
}
function hf(e) {
  var t, i, r, n, s, o, a, l, h, d, f = e.x, _ = e.y;
  if (f = ut(f - this.long0, this.over), this.sphere) {
    if (s = Math.sin(_), d = Math.cos(_), r = Math.cos(f), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (i = this.mode === this.EQUIT ? 1 + d * r : 1 + this.sinph0 * s + this.cosph0 * d * r, i <= ot)
        return null;
      i = Math.sqrt(2 / i), t = i * d * Math.sin(f), i *= this.mode === this.EQUIT ? s : this.cosph0 * s - this.sinph0 * d * r;
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (r = -r), Math.abs(_ + this.lat0) < ot)
        return null;
      i = It - _ * 0.5, i = 2 * (this.mode === this.S_POLE ? Math.cos(i) : Math.sin(i)), t = i * Math.sin(f), i *= r;
    }
  } else {
    switch (a = 0, l = 0, h = 0, r = Math.cos(f), n = Math.sin(f), s = Math.sin(_), o = ce(this.e, s), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (a = o / this.qp, l = Math.sqrt(1 - a * a)), this.mode) {
      case this.OBLIQ:
        h = 1 + this.sinb1 * a + this.cosb1 * l * r;
        break;
      case this.EQUIT:
        h = 1 + l * r;
        break;
      case this.N_POLE:
        h = Z + _, o = this.qp - o;
        break;
      case this.S_POLE:
        h = _ - Z, o = this.qp + o;
        break;
    }
    if (Math.abs(h) < ot)
      return null;
    switch (this.mode) {
      case this.OBLIQ:
      case this.EQUIT:
        h = Math.sqrt(2 / h), this.mode === this.OBLIQ ? i = this.ymf * h * (this.cosb1 * a - this.sinb1 * l * r) : i = (h = Math.sqrt(2 / (1 + l * r))) * a * this.ymf, t = this.xmf * h * l * n;
        break;
      case this.N_POLE:
      case this.S_POLE:
        o >= 0 ? (t = (h = Math.sqrt(o)) * n, i = r * (this.mode === this.S_POLE ? h : -h)) : t = i = 0;
        break;
    }
  }
  return e.x = this.a * t + this.x0, e.y = this.a * i + this.y0, e;
}
function lf(e) {
  e.x -= this.x0, e.y -= this.y0;
  var t = e.x / this.a, i = e.y / this.a, r, n, s, o, a, l, h;
  if (this.sphere) {
    var d = 0, f, _ = 0;
    if (f = Math.sqrt(t * t + i * i), n = f * 0.5, n > 1)
      return null;
    switch (n = 2 * Math.asin(n), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (_ = Math.sin(n), d = Math.cos(n)), this.mode) {
      case this.EQUIT:
        n = Math.abs(f) <= ot ? 0 : Math.asin(i * _ / f), t *= _, i = d * f;
        break;
      case this.OBLIQ:
        n = Math.abs(f) <= ot ? this.lat0 : Math.asin(d * this.sinph0 + i * _ * this.cosph0 / f), t *= _ * this.cosph0, i = (d - Math.sin(n) * this.sinph0) * f;
        break;
      case this.N_POLE:
        i = -i, n = Z - n;
        break;
      case this.S_POLE:
        n -= Z;
        break;
    }
    r = i === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(t, i);
  } else {
    if (h = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (t /= this.dd, i *= this.dd, l = Math.sqrt(t * t + i * i), l < ot)
        return e.x = this.long0, e.y = this.lat0, e;
      o = 2 * Math.asin(0.5 * l / this.rq), s = Math.cos(o), t *= o = Math.sin(o), this.mode === this.OBLIQ ? (h = s * this.sinb1 + i * o * this.cosb1 / l, a = this.qp * h, i = l * this.cosb1 * s - i * this.sinb1 * o) : (h = i * o / l, a = this.qp * h, i = l * s);
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (i = -i), a = t * t + i * i, !a)
        return e.x = this.long0, e.y = this.lat0, e;
      h = 1 - a / this.qp, this.mode === this.S_POLE && (h = -h);
    }
    r = Math.atan2(t, i), n = mo(Math.asin(h), this.apa);
  }
  return e.x = ut(this.long0 + r, this.over), e.y = n, e;
}
var uf = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
const ff = {
  init: of,
  forward: hf,
  inverse: lf,
  names: uf,
  S_POLE: xn,
  N_POLE: Sn,
  EQUIT: Mn,
  OBLIQ: gr
};
function Ae(e) {
  return Math.abs(e) > 1 && (e = e > 1 ? 1 : -1), Math.asin(e);
}
function cf() {
  Math.abs(this.lat1 + this.lat2) < ot || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = de(this.e3, this.sin_po, this.cos_po), this.qs1 = ce(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = de(this.e3, this.sin_po, this.cos_po), this.qs2 = ce(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = ce(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > ot ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
}
function df(e) {
  var t = e.x, i = e.y;
  this.sin_phi = Math.sin(i), this.cos_phi = Math.cos(i);
  var r = ce(this.e3, this.sin_phi), n = this.a * Math.sqrt(this.c - this.ns0 * r) / this.ns0, s = this.ns0 * ut(t - this.long0, this.over), o = n * Math.sin(s) + this.x0, a = this.rh - n * Math.cos(s) + this.y0;
  return e.x = o, e.y = a, e;
}
function _f(e) {
  var t, i, r, n, s, o;
  return e.x -= this.x0, e.y = this.rh - e.y + this.y0, this.ns0 >= 0 ? (t = Math.sqrt(e.x * e.x + e.y * e.y), r = 1) : (t = -Math.sqrt(e.x * e.x + e.y * e.y), r = -1), n = 0, t !== 0 && (n = Math.atan2(r * e.x, r * e.y)), r = t * this.ns0 / this.a, this.sphere ? o = Math.asin((this.c - r * r) / (2 * this.ns0)) : (i = (this.c - r * r) / this.ns0, o = this.phi1z(this.e3, i)), s = ut(n / this.ns0 + this.long0, this.over), e.x = s, e.y = o, e;
}
function gf(e, t) {
  var i, r, n, s, o, a = Ae(0.5 * t);
  if (e < ot)
    return a;
  for (var l = e * e, h = 1; h <= 25; h++)
    if (i = Math.sin(a), r = Math.cos(a), n = e * i, s = 1 - n * n, o = 0.5 * s * s / r * (t / (1 - l) - i / s + 0.5 / e * Math.log((1 - n) / (1 + n))), a = a + o, Math.abs(o) <= 1e-7)
      return a;
  return null;
}
var pf = ["Albers_Conic_Equal_Area", "Albers_Equal_Area", "Albers", "aea"];
const yf = {
  init: cf,
  forward: df,
  inverse: _f,
  names: pf,
  phi1z: gf
};
function bf() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
}
function mf(e) {
  var t, i, r, n, s, o, a, l, h = e.x, d = e.y;
  return r = ut(h - this.long0, this.over), t = Math.sin(d), i = Math.cos(d), n = Math.cos(r), o = this.sin_p14 * t + this.cos_p14 * i * n, s = 1, o > 0 || Math.abs(o) <= ot ? (a = this.x0 + this.a * s * i * Math.sin(r) / o, l = this.y0 + this.a * s * (this.cos_p14 * t - this.sin_p14 * i * n) / o) : (a = this.x0 + this.infinity_dist * i * Math.sin(r), l = this.y0 + this.infinity_dist * (this.cos_p14 * t - this.sin_p14 * i * n)), e.x = a, e.y = l, e;
}
function wf(e) {
  var t, i, r, n, s, o;
  return e.x = (e.x - this.x0) / this.a, e.y = (e.y - this.y0) / this.a, e.x /= this.k0, e.y /= this.k0, (t = Math.sqrt(e.x * e.x + e.y * e.y)) ? (n = Math.atan2(t, this.rc), i = Math.sin(n), r = Math.cos(n), o = Ae(r * this.sin_p14 + e.y * i * this.cos_p14 / t), s = Math.atan2(e.x * i, t * this.cos_p14 * r - e.y * this.sin_p14 * i), s = ut(this.long0 + s, this.over)) : (o = this.phic0, s = 0), e.x = s, e.y = o, e;
}
var Ef = ["gnom"];
const vf = {
  init: bf,
  forward: mf,
  inverse: wf,
  names: Ef
};
function xf(e, t) {
  var i = 1 - (1 - e * e) / (2 * e) * Math.log((1 - e) / (1 + e));
  if (Math.abs(Math.abs(t) - i) < 1e-6)
    return t < 0 ? -1 * Z : Z;
  for (var r = Math.asin(0.5 * t), n, s, o, a, l = 0; l < 30; l++)
    if (s = Math.sin(r), o = Math.cos(r), a = e * s, n = Math.pow(1 - a * a, 2) / (2 * o) * (t / (1 - e * e) - s / (1 - a * a) + 0.5 / e * Math.log((1 - a) / (1 + a))), r += n, Math.abs(n) <= 1e-10)
      return r;
  return NaN;
}
function Sf() {
  this.sphere || (this.k0 = de(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
}
function Mf(e) {
  var t = e.x, i = e.y, r, n, s = ut(t - this.long0, this.over);
  if (this.sphere)
    r = this.x0 + this.a * s * Math.cos(this.lat_ts), n = this.y0 + this.a * Math.sin(i) / Math.cos(this.lat_ts);
  else {
    var o = ce(this.e, Math.sin(i));
    r = this.x0 + this.a * this.k0 * s, n = this.y0 + this.a * o * 0.5 / this.k0;
  }
  return e.x = r, e.y = n, e;
}
function Pf(e) {
  e.x -= this.x0, e.y -= this.y0;
  var t, i;
  return this.sphere ? (t = ut(this.long0 + e.x / this.a / Math.cos(this.lat_ts), this.over), i = Math.asin(e.y / this.a * Math.cos(this.lat_ts))) : (i = xf(this.e, 2 * e.y * this.k0 / this.a), t = ut(this.long0 + e.x / (this.a * this.k0), this.over)), e.x = t, e.y = i, e;
}
var Af = ["cea"];
const Nf = {
  init: Sf,
  forward: Mf,
  inverse: Pf,
  names: Af
};
function Rf() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
}
function If(e) {
  var t = e.x, i = e.y, r = ut(t - this.long0, this.over), n = Re(i - this.lat0);
  return e.x = this.x0 + this.a * r * this.rc, e.y = this.y0 + this.a * n, e;
}
function Tf(e) {
  var t = e.x, i = e.y;
  return e.x = ut(this.long0 + (t - this.x0) / (this.a * this.rc), this.over), e.y = Re(this.lat0 + (i - this.y0) / this.a), e;
}
var Cf = ["Equirectangular", "Equidistant_Cylindrical", "Equidistant_Cylindrical_Spherical", "eqc"];
const Ff = {
  init: Rf,
  forward: If,
  inverse: Tf,
  names: Cf
};
var ga = 20;
function Gf() {
  this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Wi(this.es), this.e1 = Hi(this.es), this.e2 = zi(this.es), this.e3 = Qi(this.es), this.ml0 = this.a * Yt(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function Df(e) {
  var t = e.x, i = e.y, r, n, s, o = ut(t - this.long0, this.over);
  if (s = o * Math.sin(i), this.sphere)
    Math.abs(i) <= ot ? (r = this.a * o, n = -1 * this.a * this.lat0) : (r = this.a * Math.sin(s) / Math.tan(i), n = this.a * (Re(i - this.lat0) + (1 - Math.cos(s)) / Math.tan(i)));
  else if (Math.abs(i) <= ot)
    r = this.a * o, n = -1 * this.ml0;
  else {
    var a = Wn(this.a, this.e, Math.sin(i)) / Math.tan(i);
    r = a * Math.sin(s), n = this.a * Yt(this.e0, this.e1, this.e2, this.e3, i) - this.ml0 + a * (1 - Math.cos(s));
  }
  return e.x = r + this.x0, e.y = n + this.y0, e;
}
function Of(e) {
  var t, i, r, n, s, o, a, l, h;
  if (r = e.x - this.x0, n = e.y - this.y0, this.sphere)
    if (Math.abs(n + this.a * this.lat0) <= ot)
      t = ut(r / this.a + this.long0, this.over), i = 0;
    else {
      o = this.lat0 + n / this.a, a = r * r / this.a / this.a + o * o, l = o;
      var d;
      for (s = ga; s; --s)
        if (d = Math.tan(l), h = -1 * (o * (l * d + 1) - l - 0.5 * (l * l + a) * d) / ((l - o) / d - 1), l += h, Math.abs(h) <= ot) {
          i = l;
          break;
        }
      t = ut(this.long0 + Math.asin(r * Math.tan(l) / this.a) / Math.sin(i), this.over);
    }
  else if (Math.abs(n + this.ml0) <= ot)
    i = 0, t = ut(this.long0 + r / this.a, this.over);
  else {
    o = (this.ml0 + n) / this.a, a = r * r / this.a / this.a + o * o, l = o;
    var f, _, m, y, w;
    for (s = ga; s; --s)
      if (w = this.e * Math.sin(l), f = Math.sqrt(1 - w * w) * Math.tan(l), _ = this.a * Yt(this.e0, this.e1, this.e2, this.e3, l), m = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), y = _ / this.a, h = (o * (f * y + 1) - y - 0.5 * f * (y * y + a)) / (this.es * Math.sin(2 * l) * (y * y + a - 2 * o * y) / (4 * f) + (o - y) * (f * m - 2 / Math.sin(2 * l)) - m), l -= h, Math.abs(h) <= ot) {
        i = l;
        break;
      }
    f = Math.sqrt(1 - this.es * Math.pow(Math.sin(i), 2)) * Math.tan(i), t = ut(this.long0 + Math.asin(r * f / this.a) / Math.sin(i), this.over);
  }
  return e.x = t, e.y = i, e;
}
var Lf = ["Polyconic", "American_Polyconic", "poly"];
const $f = {
  init: Gf,
  forward: Df,
  inverse: Of,
  names: Lf
};
function jf() {
  this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
}
function Bf(e) {
  var t, i = e.x, r = e.y, n = r - this.lat0, s = i - this.long0, o = n / Ci * 1e-5, a = s, l = 1, h = 0;
  for (t = 1; t <= 10; t++)
    l = l * o, h = h + this.A[t] * l;
  var d = h, f = a, _ = 1, m = 0, y, w, b = 0, g = 0;
  for (t = 1; t <= 6; t++)
    y = _ * d - m * f, w = m * d + _ * f, _ = y, m = w, b = b + this.B_re[t] * _ - this.B_im[t] * m, g = g + this.B_im[t] * _ + this.B_re[t] * m;
  return e.x = g * this.a + this.x0, e.y = b * this.a + this.y0, e;
}
function kf(e) {
  var t, i = e.x, r = e.y, n = i - this.x0, s = r - this.y0, o = s / this.a, a = n / this.a, l = 1, h = 0, d, f, _ = 0, m = 0;
  for (t = 1; t <= 6; t++)
    d = l * o - h * a, f = h * o + l * a, l = d, h = f, _ = _ + this.C_re[t] * l - this.C_im[t] * h, m = m + this.C_im[t] * l + this.C_re[t] * h;
  for (var y = 0; y < this.iterations; y++) {
    var w = _, b = m, g, v, E = o, N = a;
    for (t = 2; t <= 6; t++)
      g = w * _ - b * m, v = b * _ + w * m, w = g, b = v, E = E + (t - 1) * (this.B_re[t] * w - this.B_im[t] * b), N = N + (t - 1) * (this.B_im[t] * w + this.B_re[t] * b);
    w = 1, b = 0;
    var M = this.B_re[1], j = this.B_im[1];
    for (t = 2; t <= 6; t++)
      g = w * _ - b * m, v = b * _ + w * m, w = g, b = v, M = M + t * (this.B_re[t] * w - this.B_im[t] * b), j = j + t * (this.B_im[t] * w + this.B_re[t] * b);
    var U = M * M + j * j;
    _ = (E * M + N * j) / U, m = (N * M - E * j) / U;
  }
  var k = _, lt = m, G = 1, L = 0;
  for (t = 1; t <= 9; t++)
    G = G * k, L = L + this.D[t] * G;
  var Y = this.lat0 + L * Ci * 1e5, D = this.long0 + lt;
  return e.x = D, e.y = Y, e;
}
var qf = ["New_Zealand_Map_Grid", "nzmg"];
const Uf = {
  init: jf,
  forward: Bf,
  inverse: kf,
  names: qf
};
function Wf() {
}
function Hf(e) {
  var t = e.x, i = e.y, r = ut(t - this.long0, this.over), n = this.x0 + this.a * r, s = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + i / 2.5)) * 1.25;
  return e.x = n, e.y = s, e;
}
function zf(e) {
  e.x -= this.x0, e.y -= this.y0;
  var t = ut(this.long0 + e.x / this.a, this.over), i = 2.5 * (Math.atan(Math.exp(0.8 * e.y / this.a)) - Math.PI / 4);
  return e.x = t, e.y = i, e;
}
var Qf = ["Miller_Cylindrical", "mill"];
const Vf = {
  init: Wf,
  forward: Hf,
  inverse: zf,
  names: Qf
};
var Xf = 20;
function Kf() {
  this.long0 = this.long0 || 0, this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = $n(this.es);
}
function wo(e) {
  var t, i, r = e.x, n = e.y;
  if (r = ut(r - this.long0, this.over), this.sphere) {
    if (!this.m)
      n = this.n !== 1 ? Math.asin(this.n * Math.sin(n)) : n;
    else
      for (var s = this.n * Math.sin(n), o = Xf; o; --o) {
        var a = (this.m * n + Math.sin(n) - s) / (this.m + Math.cos(n));
        if (n -= a, Math.abs(a) < ot)
          break;
      }
    t = this.a * this.C_x * r * (this.m + Math.cos(n)), i = this.a * this.C_y * n;
  } else {
    var l = Math.sin(n), h = Math.cos(n);
    i = this.a * si(n, l, h, this.en), t = this.a * r * h / Math.sqrt(1 - this.es * l * l);
  }
  return e.x = t, e.y = i, e;
}
function Eo(e) {
  var t, i, r, n;
  return e.x -= this.x0, r = e.x / this.a, e.y -= this.y0, t = e.y / this.a, this.sphere ? (t /= this.C_y, r = r / (this.C_x * (this.m + Math.cos(t))), this.m ? t = Ae((this.m * t + Math.sin(t)) / this.n) : this.n !== 1 && (t = Ae(Math.sin(t) / this.n)), r = ut(r + this.long0, this.over), t = Re(t)) : (t = jn(e.y / this.a, this.es, this.en), n = Math.abs(t), n < Z ? (n = Math.sin(t), i = this.long0 + e.x * Math.sqrt(1 - this.es * n * n) / (this.a * Math.cos(t)), r = ut(i, this.over)) : n - ot < Z && (r = this.long0)), e.x = r, e.y = t, e;
}
var Jf = ["Sinusoidal", "sinu"];
const Yf = {
  init: Kf,
  forward: wo,
  inverse: Eo,
  names: Jf
};
function Zf() {
  this.sphere = !0, this.b = this.a, this.m = 1, this.n = 2.5707963267948966, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1);
}
var tc = wo, ec = Eo, ic = ["Eckert_VI", "eck6"];
const rc = {
  init: Zf,
  forward: tc,
  inverse: ec,
  names: ic
};
function nc() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0;
}
function sc(e) {
  for (var t = e.x, i = e.y, r = ut(t - this.long0, this.over), n = i, s = Math.PI * Math.sin(i); ; ) {
    var o = -(n + Math.sin(n) - s) / (1 + Math.cos(n));
    if (n += o, Math.abs(o) < ot)
      break;
  }
  n /= 2, Math.PI / 2 - Math.abs(i) < ot && (r = 0);
  var a = 0.900316316158 * this.a * r * Math.cos(n) + this.x0, l = 1.4142135623731 * this.a * Math.sin(n) + this.y0;
  return e.x = a, e.y = l, e;
}
function ac(e) {
  var t, i;
  e.x -= this.x0, e.y -= this.y0, i = e.y / (1.4142135623731 * this.a), Math.abs(i) > 0.999999999999 && (i = 0.999999999999), t = Math.asin(i);
  var r = ut(this.long0 + e.x / (0.900316316158 * this.a * Math.cos(t)), this.over);
  r < -Math.PI && (r = -Math.PI), r > Math.PI && (r = Math.PI), i = (2 * t + Math.sin(2 * t)) / Math.PI, Math.abs(i) > 1 && (i = 1);
  var n = Math.asin(i);
  return e.x = r, e.y = n, e;
}
var oc = ["Mollweide", "moll"];
const hc = {
  init: nc,
  forward: sc,
  inverse: ac,
  names: oc
};
function lc() {
  Math.abs(this.lat1 + this.lat2) < ot || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = Wi(this.es), this.e1 = Hi(this.es), this.e2 = zi(this.es), this.e3 = Qi(this.es), this.sin_phi = Math.sin(this.lat1), this.cos_phi = Math.cos(this.lat1), this.ms1 = de(this.e, this.sin_phi, this.cos_phi), this.ml1 = Yt(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < ot ? this.ns = this.sin_phi : (this.sin_phi = Math.sin(this.lat2), this.cos_phi = Math.cos(this.lat2), this.ms2 = de(this.e, this.sin_phi, this.cos_phi), this.ml2 = Yt(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = Yt(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
}
function uc(e) {
  var t = e.x, i = e.y, r;
  if (this.sphere)
    r = this.a * (this.g - i);
  else {
    var n = Yt(this.e0, this.e1, this.e2, this.e3, i);
    r = this.a * (this.g - n);
  }
  var s = this.ns * ut(t - this.long0, this.over), o = this.x0 + r * Math.sin(s), a = this.y0 + this.rh - r * Math.cos(s);
  return e.x = o, e.y = a, e;
}
function fc(e) {
  e.x -= this.x0, e.y = this.rh - e.y + this.y0;
  var t, i, r, n;
  this.ns >= 0 ? (i = Math.sqrt(e.x * e.x + e.y * e.y), t = 1) : (i = -Math.sqrt(e.x * e.x + e.y * e.y), t = -1);
  var s = 0;
  if (i !== 0 && (s = Math.atan2(t * e.x, t * e.y)), this.sphere)
    return n = ut(this.long0 + s / this.ns, this.over), r = Re(this.g - i / this.a), e.x = n, e.y = r, e;
  var o = this.g - i / this.a;
  return r = wr(o, this.e0, this.e1, this.e2, this.e3), n = ut(this.long0 + s / this.ns, this.over), e.x = n, e.y = r, e;
}
var cc = ["Equidistant_Conic", "eqdc"];
const dc = {
  init: lc,
  forward: uc,
  inverse: fc,
  names: cc
};
function _c() {
  this.R = this.a;
}
function gc(e) {
  var t = e.x, i = e.y, r = ut(t - this.long0, this.over), n, s;
  Math.abs(i) <= ot && (n = this.x0 + this.R * r, s = this.y0);
  var o = Ae(2 * Math.abs(i / Math.PI));
  (Math.abs(r) <= ot || Math.abs(Math.abs(i) - Z) <= ot) && (n = this.x0, i >= 0 ? s = this.y0 + Math.PI * this.R * Math.tan(0.5 * o) : s = this.y0 + Math.PI * this.R * -Math.tan(0.5 * o));
  var a = 0.5 * Math.abs(Math.PI / r - r / Math.PI), l = a * a, h = Math.sin(o), d = Math.cos(o), f = d / (h + d - 1), _ = f * f, m = f * (2 / h - 1), y = m * m, w = Math.PI * this.R * (a * (f - y) + Math.sqrt(l * (f - y) * (f - y) - (y + l) * (_ - y))) / (y + l);
  r < 0 && (w = -w), n = this.x0 + w;
  var b = l + f;
  return w = Math.PI * this.R * (m * b - a * Math.sqrt((y + l) * (l + 1) - b * b)) / (y + l), i >= 0 ? s = this.y0 + w : s = this.y0 - w, e.x = n, e.y = s, e;
}
function pc(e) {
  var t, i, r, n, s, o, a, l, h, d, f, _, m;
  return e.x -= this.x0, e.y -= this.y0, f = Math.PI * this.R, r = e.x / f, n = e.y / f, s = r * r + n * n, o = -Math.abs(n) * (1 + s), a = o - 2 * n * n + r * r, l = -2 * o + 1 + 2 * n * n + s * s, m = n * n / l + (2 * a * a * a / l / l / l - 9 * o * a / l / l) / 27, h = (o - a * a / 3 / l) / l, d = 2 * Math.sqrt(-h / 3), f = 3 * m / h / d, Math.abs(f) > 1 && (f >= 0 ? f = 1 : f = -1), _ = Math.acos(f) / 3, e.y >= 0 ? i = (-d * Math.cos(_ + Math.PI / 3) - a / 3 / l) * Math.PI : i = -(-d * Math.cos(_ + Math.PI / 3) - a / 3 / l) * Math.PI, Math.abs(r) < ot ? t = this.long0 : t = ut(this.long0 + Math.PI * (s - 1 + Math.sqrt(1 + 2 * (r * r - n * n) + s * s)) / 2 / r, this.over), e.x = t, e.y = i, e;
}
var yc = ["Van_der_Grinten_I", "VanDerGrinten", "Van_der_Grinten", "vandg"];
const bc = {
  init: _c,
  forward: gc,
  inverse: pc,
  names: yc
};
function mc(e, t, i, r, n, s) {
  const o = r - t, a = Math.atan((1 - s) * Math.tan(e)), l = Math.atan((1 - s) * Math.tan(i)), h = Math.sin(a), d = Math.cos(a), f = Math.sin(l), _ = Math.cos(l);
  let m = o, y, w = 100, b, g, v, E, N, M, j, U, k, lt, G, L, Y, D;
  do {
    if (b = Math.sin(m), g = Math.cos(m), v = Math.sqrt(
      _ * b * (_ * b) + (d * f - h * _ * g) * (d * f - h * _ * g)
    ), v === 0)
      return { azi1: 0, s12: 0 };
    E = h * f + d * _ * g, N = Math.atan2(v, E), M = d * _ * b / v, j = 1 - M * M, U = j !== 0 ? E - 2 * h * f / j : 0, k = s / 16 * j * (4 + s * (4 - 3 * j)), y = m, m = o + (1 - k) * s * M * (N + k * v * (U + k * E * (-1 + 2 * U * U)));
  } while (Math.abs(m - y) > 1e-12 && --w > 0);
  return w === 0 ? { azi1: NaN, s12: NaN } : (lt = j * (n * n - n * (1 - s) * (n * (1 - s))) / (n * (1 - s) * (n * (1 - s))), G = 1 + lt / 16384 * (4096 + lt * (-768 + lt * (320 - 175 * lt))), L = lt / 1024 * (256 + lt * (-128 + lt * (74 - 47 * lt))), Y = L * v * (U + L / 4 * (E * (-1 + 2 * U * U) - L / 6 * U * (-3 + 4 * v * v) * (-3 + 4 * U * U))), D = n * (1 - s) * G * (N - Y), { azi1: Math.atan2(_ * b, d * f - h * _ * g), s12: D });
}
function wc(e, t, i, r, n, s) {
  const o = Math.atan((1 - s) * Math.tan(e)), a = Math.sin(o), l = Math.cos(o), h = Math.sin(i), d = Math.cos(i), f = Math.atan2(a, l * d), _ = l * h, m = 1 - _ * _, y = m * (n * n - n * (1 - s) * (n * (1 - s))) / (n * (1 - s) * (n * (1 - s))), w = 1 + y / 16384 * (4096 + y * (-768 + y * (320 - 175 * y))), b = y / 1024 * (256 + y * (-128 + y * (74 - 47 * y)));
  let g = r / (n * (1 - s) * w), v, E = 100, N, M, j, U;
  do
    N = Math.cos(2 * f + g), M = Math.sin(g), j = Math.cos(g), U = b * M * (N + b / 4 * (j * (-1 + 2 * N * N) - b / 6 * N * (-3 + 4 * M * M) * (-3 + 4 * N * N))), v = g, g = r / (n * (1 - s) * w) + U;
  while (Math.abs(g - v) > 1e-12 && --E > 0);
  if (E === 0)
    return { lat2: NaN, lon2: NaN };
  const k = a * M - l * j * d, lt = Math.atan2(
    a * j + l * M * d,
    (1 - s) * Math.sqrt(_ * _ + k * k)
  ), G = Math.atan2(
    M * h,
    l * j - a * M * d
  ), L = s / 16 * m * (4 + s * (4 - 3 * m)), Y = G - (1 - L) * s * _ * (g + L * M * (N + L * j * (-1 + 2 * N * N))), D = t + Y;
  return { lat2: lt, lon2: D };
}
function Ec() {
  this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0), this.f = this.es / (1 + Math.sqrt(1 - this.es));
}
function vc(e) {
  var t = e.x, i = e.y, r = Math.sin(e.y), n = Math.cos(e.y), s = ut(t - this.long0, this.over), o, a, l, h, d, f, _, m, y, w, b;
  return this.sphere ? Math.abs(this.sin_p12 - 1) <= ot ? (e.x = this.x0 + this.a * (Z - i) * Math.sin(s), e.y = this.y0 - this.a * (Z - i) * Math.cos(s), e) : Math.abs(this.sin_p12 + 1) <= ot ? (e.x = this.x0 + this.a * (Z + i) * Math.sin(s), e.y = this.y0 + this.a * (Z + i) * Math.cos(s), e) : (y = this.sin_p12 * r + this.cos_p12 * n * Math.cos(s), _ = Math.acos(y), m = _ ? _ / Math.sin(_) : 1, e.x = this.x0 + this.a * m * n * Math.sin(s), e.y = this.y0 + this.a * m * (this.cos_p12 * r - this.sin_p12 * n * Math.cos(s)), e) : (o = Wi(this.es), a = Hi(this.es), l = zi(this.es), h = Qi(this.es), Math.abs(this.sin_p12 - 1) <= ot ? (d = this.a * Yt(o, a, l, h, Z), f = this.a * Yt(o, a, l, h, i), e.x = this.x0 + (d - f) * Math.sin(s), e.y = this.y0 - (d - f) * Math.cos(s), e) : Math.abs(this.sin_p12 + 1) <= ot ? (d = this.a * Yt(o, a, l, h, Z), f = this.a * Yt(o, a, l, h, i), e.x = this.x0 + (d + f) * Math.sin(s), e.y = this.y0 + (d + f) * Math.cos(s), e) : Math.abs(t) < ot && Math.abs(i - this.lat0) < ot ? (e.x = e.y = 0, e) : (w = mc(this.lat0, this.long0, i, t, this.a, this.f), b = w.azi1, e.x = w.s12 * Math.sin(b), e.y = w.s12 * Math.cos(b), e));
}
function xc(e) {
  e.x -= this.x0, e.y -= this.y0;
  var t, i, r, n, s, o, a, l, h, d, f, _, m, y, w, b;
  return this.sphere ? (t = Math.sqrt(e.x * e.x + e.y * e.y), t > 2 * Z * this.a ? void 0 : (i = t / this.a, r = Math.sin(i), n = Math.cos(i), s = this.long0, Math.abs(t) <= ot ? o = this.lat0 : (o = Ae(n * this.sin_p12 + e.y * r * this.cos_p12 / t), a = Math.abs(this.lat0) - Z, Math.abs(a) <= ot ? this.lat0 >= 0 ? s = ut(this.long0 + Math.atan2(e.x, -e.y), this.over) : s = ut(this.long0 - Math.atan2(-e.x, e.y), this.over) : s = ut(this.long0 + Math.atan2(e.x * r, t * this.cos_p12 * n - e.y * this.sin_p12 * r), this.over)), e.x = s, e.y = o, e)) : (l = Wi(this.es), h = Hi(this.es), d = zi(this.es), f = Qi(this.es), Math.abs(this.sin_p12 - 1) <= ot ? (_ = this.a * Yt(l, h, d, f, Z), t = Math.sqrt(e.x * e.x + e.y * e.y), m = _ - t, o = wr(m / this.a, l, h, d, f), s = ut(this.long0 + Math.atan2(e.x, -1 * e.y), this.over), e.x = s, e.y = o, e) : Math.abs(this.sin_p12 + 1) <= ot ? (_ = this.a * Yt(l, h, d, f, Z), t = Math.sqrt(e.x * e.x + e.y * e.y), m = t - _, o = wr(m / this.a, l, h, d, f), s = ut(this.long0 + Math.atan2(e.x, e.y), this.over), e.x = s, e.y = o, e) : (y = Math.atan2(e.x, e.y), w = Math.sqrt(e.x * e.x + e.y * e.y), b = wc(this.lat0, this.long0, y, w, this.a, this.f), e.x = b.lon2, e.y = b.lat2, e));
}
var Sc = ["Azimuthal_Equidistant", "aeqd"];
const Mc = {
  init: Ec,
  forward: vc,
  inverse: xc,
  names: Sc
};
function Pc() {
  this.sin_p14 = Math.sin(this.lat0 || 0), this.cos_p14 = Math.cos(this.lat0 || 0);
}
function Ac(e) {
  var t, i, r, n, s, o, a, l, h = e.x, d = e.y;
  return r = ut(h - (this.long0 || 0), this.over), t = Math.sin(d), i = Math.cos(d), n = Math.cos(r), o = this.sin_p14 * t + this.cos_p14 * i * n, s = 1, (o > 0 || Math.abs(o) <= ot) && (a = this.a * s * i * Math.sin(r), l = (this.y0 || 0) + this.a * s * (this.cos_p14 * t - this.sin_p14 * i * n)), e.x = a, e.y = l, e;
}
function Nc(e) {
  var t, i, r, n, s, o, a, l, h;
  return e.x -= this.x0 || 0, e.y -= this.y0 || 0, t = Math.sqrt(e.x * e.x + e.y * e.y), i = Ae(t / this.a), r = Math.sin(i), n = Math.cos(i), l = this.long0 || 0, h = this.lat0 || 0, o = l, Math.abs(t) <= ot ? (a = h, e.x = o, e.y = a, e) : (a = Ae(n * this.sin_p14 + e.y * r * this.cos_p14 / t), s = Math.abs(h) - Z, Math.abs(s) <= ot ? (h >= 0 ? o = ut(l + Math.atan2(e.x, -e.y), this.over) : o = ut(l - Math.atan2(-e.x, e.y), this.over), e.x = o, e.y = a, e) : (o = ut(l + Math.atan2(e.x * r, t * this.cos_p14 * n - e.y * this.sin_p14 * r), this.over), e.x = o, e.y = a, e));
}
var Rc = ["ortho"];
const Ic = {
  init: Pc,
  forward: Ac,
  inverse: Nc,
  names: Rc
};
var Ot = {
  FRONT: 1,
  RIGHT: 2,
  BACK: 3,
  LEFT: 4,
  TOP: 5,
  BOTTOM: 6
}, Tt = {
  AREA_0: 1,
  AREA_1: 2,
  AREA_2: 3,
  AREA_3: 4
};
function Tc() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= Z - It / 2 ? this.face = Ot.TOP : this.lat0 <= -(Z - It / 2) ? this.face = Ot.BOTTOM : Math.abs(this.long0) <= It ? this.face = Ot.FRONT : Math.abs(this.long0) <= Z + It ? this.face = this.long0 > 0 ? Ot.RIGHT : Ot.LEFT : this.face = Ot.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
}
function Cc(e) {
  var t = { x: 0, y: 0 }, i, r, n, s, o, a, l = { value: 0 };
  if (e.x -= this.long0, this.es !== 0 ? i = Math.atan(this.one_minus_f_squared * Math.tan(e.y)) : i = e.y, r = e.x, this.face === Ot.TOP)
    s = Z - i, r >= It && r <= Z + It ? (l.value = Tt.AREA_0, n = r - Z) : r > Z + It || r <= -(Z + It) ? (l.value = Tt.AREA_1, n = r > 0 ? r - kt : r + kt) : r > -(Z + It) && r <= -It ? (l.value = Tt.AREA_2, n = r + Z) : (l.value = Tt.AREA_3, n = r);
  else if (this.face === Ot.BOTTOM)
    s = Z + i, r >= It && r <= Z + It ? (l.value = Tt.AREA_0, n = -r + Z) : r < It && r >= -It ? (l.value = Tt.AREA_1, n = -r) : r < -It && r >= -(Z + It) ? (l.value = Tt.AREA_2, n = -r - Z) : (l.value = Tt.AREA_3, n = r > 0 ? -r + kt : -r - kt);
  else {
    var h, d, f, _, m, y, w;
    this.face === Ot.RIGHT ? r = ei(r, +Z) : this.face === Ot.BACK ? r = ei(r, +kt) : this.face === Ot.LEFT && (r = ei(r, -Z)), _ = Math.sin(i), m = Math.cos(i), y = Math.sin(r), w = Math.cos(r), h = m * w, d = m * y, f = _, this.face === Ot.FRONT ? (s = Math.acos(h), n = or(s, f, d, l)) : this.face === Ot.RIGHT ? (s = Math.acos(d), n = or(s, f, -h, l)) : this.face === Ot.BACK ? (s = Math.acos(-h), n = or(s, f, -d, l)) : this.face === Ot.LEFT ? (s = Math.acos(-d), n = or(s, f, h, l)) : (s = n = 0, l.value = Tt.AREA_0);
  }
  return a = Math.atan(12 / kt * (n + Math.acos(Math.sin(n) * Math.cos(It)) - Z)), o = Math.sqrt((1 - Math.cos(s)) / (Math.cos(a) * Math.cos(a)) / (1 - Math.cos(Math.atan(1 / Math.cos(n))))), l.value === Tt.AREA_1 ? a += Z : l.value === Tt.AREA_2 ? a += kt : l.value === Tt.AREA_3 && (a += 1.5 * kt), t.x = o * Math.cos(a), t.y = o * Math.sin(a), t.x = t.x * this.a + this.x0, t.y = t.y * this.a + this.y0, e.x = t.x, e.y = t.y, e;
}
function Fc(e) {
  var t = { lam: 0, phi: 0 }, i, r, n, s, o, a, l, h, d, f = { value: 0 };
  if (e.x = (e.x - this.x0) / this.a, e.y = (e.y - this.y0) / this.a, r = Math.atan(Math.sqrt(e.x * e.x + e.y * e.y)), i = Math.atan2(e.y, e.x), e.x >= 0 && e.x >= Math.abs(e.y) ? f.value = Tt.AREA_0 : e.y >= 0 && e.y >= Math.abs(e.x) ? (f.value = Tt.AREA_1, i -= Z) : e.x < 0 && -e.x >= Math.abs(e.y) ? (f.value = Tt.AREA_2, i = i < 0 ? i + kt : i - kt) : (f.value = Tt.AREA_3, i += Z), d = kt / 12 * Math.tan(i), o = Math.sin(d) / (Math.cos(d) - 1 / Math.sqrt(2)), a = Math.atan(o), n = Math.cos(i), s = Math.tan(r), l = 1 - n * n * s * s * (1 - Math.cos(Math.atan(1 / Math.cos(a)))), l < -1 ? l = -1 : l > 1 && (l = 1), this.face === Ot.TOP)
    h = Math.acos(l), t.phi = Z - h, f.value === Tt.AREA_0 ? t.lam = a + Z : f.value === Tt.AREA_1 ? t.lam = a < 0 ? a + kt : a - kt : f.value === Tt.AREA_2 ? t.lam = a - Z : t.lam = a;
  else if (this.face === Ot.BOTTOM)
    h = Math.acos(l), t.phi = h - Z, f.value === Tt.AREA_0 ? t.lam = -a + Z : f.value === Tt.AREA_1 ? t.lam = -a : f.value === Tt.AREA_2 ? t.lam = -a - Z : t.lam = a < 0 ? -a - kt : -a + kt;
  else {
    var _, m, y;
    _ = l, d = _ * _, d >= 1 ? y = 0 : y = Math.sqrt(1 - d) * Math.sin(a), d += y * y, d >= 1 ? m = 0 : m = Math.sqrt(1 - d), f.value === Tt.AREA_1 ? (d = m, m = -y, y = d) : f.value === Tt.AREA_2 ? (m = -m, y = -y) : f.value === Tt.AREA_3 && (d = m, m = y, y = -d), this.face === Ot.RIGHT ? (d = _, _ = -m, m = d) : this.face === Ot.BACK ? (_ = -_, m = -m) : this.face === Ot.LEFT && (d = _, _ = m, m = -d), t.phi = Math.acos(-y) - Z, t.lam = Math.atan2(m, _), this.face === Ot.RIGHT ? t.lam = ei(t.lam, -Z) : this.face === Ot.BACK ? t.lam = ei(t.lam, -kt) : this.face === Ot.LEFT && (t.lam = ei(t.lam, +Z));
  }
  if (this.es !== 0) {
    var w, b, g;
    w = t.phi < 0 ? 1 : 0, b = Math.tan(t.phi), g = this.b / Math.sqrt(b * b + this.one_minus_f_squared), t.phi = Math.atan(Math.sqrt(this.a * this.a - g * g) / (this.one_minus_f * g)), w && (t.phi = -t.phi);
  }
  return t.lam += this.long0, e.x = t.lam, e.y = t.phi, e;
}
function or(e, t, i, r) {
  var n;
  return e < ot ? (r.value = Tt.AREA_0, n = 0) : (n = Math.atan2(t, i), Math.abs(n) <= It ? r.value = Tt.AREA_0 : n > It && n <= Z + It ? (r.value = Tt.AREA_1, n -= Z) : n > Z + It || n <= -(Z + It) ? (r.value = Tt.AREA_2, n = n >= 0 ? n - kt : n + kt) : (r.value = Tt.AREA_3, n += Z)), n;
}
function ei(e, t) {
  var i = e + t;
  return i < -kt ? i += $i : i > +kt && (i -= $i), i;
}
var Gc = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
const Dc = {
  init: Tc,
  forward: Cc,
  inverse: Fc,
  names: Gc
};
var Pn = [
  [1, 22199e-21, -715515e-10, 31103e-10],
  [0.9986, -482243e-9, -24897e-9, -13309e-10],
  [0.9954, -83103e-8, -448605e-10, -986701e-12],
  [0.99, -135364e-8, -59661e-9, 36777e-10],
  [0.9822, -167442e-8, -449547e-11, -572411e-11],
  [0.973, -214868e-8, -903571e-10, 18736e-12],
  [0.96, -305085e-8, -900761e-10, 164917e-11],
  [0.9427, -382792e-8, -653386e-10, -26154e-10],
  [0.9216, -467746e-8, -10457e-8, 481243e-11],
  [0.8962, -536223e-8, -323831e-10, -543432e-11],
  [0.8679, -609363e-8, -113898e-9, 332484e-11],
  [0.835, -698325e-8, -640253e-10, 934959e-12],
  [0.7986, -755338e-8, -500009e-10, 935324e-12],
  [0.7597, -798324e-8, -35971e-9, -227626e-11],
  [0.7186, -851367e-8, -701149e-10, -86303e-10],
  [0.6732, -986209e-8, -199569e-9, 191974e-10],
  [0.6213, -0.010418, 883923e-10, 624051e-11],
  [0.5722, -906601e-8, 182e-6, 624051e-11],
  [0.5322, -677797e-8, 275608e-9, 624051e-11]
], Ii = [
  [-520417e-23, 0.0124, 121431e-23, -845284e-16],
  [0.062, 0.0124, -126793e-14, 422642e-15],
  [0.124, 0.0124, 507171e-14, -160604e-14],
  [0.186, 0.0123999, -190189e-13, 600152e-14],
  [0.248, 0.0124002, 710039e-13, -224e-10],
  [0.31, 0.0123992, -264997e-12, 835986e-13],
  [0.372, 0.0124029, 988983e-12, -311994e-12],
  [0.434, 0.0123893, -369093e-11, -435621e-12],
  [0.4958, 0.0123198, -102252e-10, -345523e-12],
  [0.5571, 0.0121916, -154081e-10, -582288e-12],
  [0.6176, 0.0119938, -241424e-10, -525327e-12],
  [0.6769, 0.011713, -320223e-10, -516405e-12],
  [0.7346, 0.0113541, -397684e-10, -609052e-12],
  [0.7903, 0.0109107, -489042e-10, -104739e-11],
  [0.8435, 0.0103431, -64615e-9, -140374e-14],
  [0.8936, 969686e-8, -64636e-9, -8547e-9],
  [0.9394, 840947e-8, -192841e-9, -42106e-10],
  [0.9761, 616527e-8, -256e-6, -42106e-10],
  [1, 328947e-8, -319159e-9, -42106e-10]
], vo = 0.8487, xo = 1.3523, So = ie / 5, Oc = 1 / So, Ze = 18, Er = function(e, t) {
  return e[0] + t * (e[1] + t * (e[2] + t * e[3]));
}, Lc = function(e, t) {
  return e[1] + t * (2 * e[2] + t * 3 * e[3]);
};
function $c(e, t, i, r) {
  for (var n = t; r; --r) {
    var s = e(n);
    if (n -= s, Math.abs(s) < i)
      break;
  }
  return n;
}
function jc() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
}
function Bc(e) {
  var t = ut(e.x - this.long0, this.over), i = Math.abs(e.y), r = Math.floor(i * So);
  r < 0 ? r = 0 : r >= Ze && (r = Ze - 1), i = ie * (i - Oc * r);
  var n = {
    x: Er(Pn[r], i) * t,
    y: Er(Ii[r], i)
  };
  return e.y < 0 && (n.y = -n.y), n.x = n.x * this.a * vo + this.x0, n.y = n.y * this.a * xo + this.y0, n;
}
function kc(e) {
  var t = {
    x: (e.x - this.x0) / (this.a * vo),
    y: Math.abs(e.y - this.y0) / (this.a * xo)
  };
  if (t.y >= 1)
    t.x /= Pn[Ze][0], t.y = e.y < 0 ? -Z : Z;
  else {
    var i = Math.floor(t.y * Ze);
    for (i < 0 ? i = 0 : i >= Ze && (i = Ze - 1); ; )
      if (Ii[i][0] > t.y)
        --i;
      else if (Ii[i + 1][0] <= t.y)
        ++i;
      else
        break;
    var r = Ii[i], n = 5 * (t.y - r[0]) / (Ii[i + 1][0] - r[0]);
    n = $c(function(s) {
      return (Er(r, s) - t.y) / Lc(r, s);
    }, n, ot, 100), t.x /= Er(Pn[i], n), t.y = (5 * i + n) * jt, e.y < 0 && (t.y = -t.y);
  }
  return t.x = ut(t.x + this.long0, this.over), t;
}
var qc = ["Robinson", "robin"];
const Uc = {
  init: jc,
  forward: Bc,
  inverse: kc,
  names: qc
};
function Wc() {
  this.name = "geocent";
}
function Hc(e) {
  var t = oo(e, this.es, this.a);
  return t;
}
function zc(e) {
  var t = ho(e, this.es, this.a, this.b);
  return t;
}
var Qc = ["Geocentric", "geocentric", "geocent", "Geocent"];
const Vc = {
  init: Wc,
  forward: Hc,
  inverse: zc,
  names: Qc
};
var Kt = {
  N_POLE: 0,
  S_POLE: 1,
  EQUIT: 2,
  OBLIQ: 3
}, Mi = {
  h: { def: 1e5, num: !0 },
  // default is Karman line, no default in PROJ.7
  azi: { def: 0, num: !0, degrees: !0 },
  // default is North
  tilt: { def: 0, num: !0, degrees: !0 },
  // default is Nadir
  long0: { def: 0, num: !0 },
  // default is Greenwich, conversion to rad is automatic
  lat0: { def: 0, num: !0 }
  // default is Equator, conversion to rad is automatic
};
function Xc() {
  if (Object.keys(Mi).forEach((function(i) {
    if (typeof this[i] > "u")
      this[i] = Mi[i].def;
    else {
      if (Mi[i].num && isNaN(this[i]))
        throw new Error("Invalid parameter value, must be numeric " + i + " = " + this[i]);
      Mi[i].num && (this[i] = parseFloat(this[i]));
    }
    Mi[i].degrees && (this[i] = this[i] * jt);
  }).bind(this)), Math.abs(Math.abs(this.lat0) - Z) < ot ? this.mode = this.lat0 < 0 ? Kt.S_POLE : Kt.N_POLE : Math.abs(this.lat0) < ot ? this.mode = Kt.EQUIT : (this.mode = Kt.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
    throw new Error("Invalid height");
  this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
  var e = this.tilt, t = this.azi;
  this.cg = Math.cos(t), this.sg = Math.sin(t), this.cw = Math.cos(e), this.sw = Math.sin(e);
}
function Kc(e) {
  e.x -= this.long0;
  var t = Math.sin(e.y), i = Math.cos(e.y), r = Math.cos(e.x), n, s;
  switch (this.mode) {
    case Kt.OBLIQ:
      s = this.sinph0 * t + this.cosph0 * i * r;
      break;
    case Kt.EQUIT:
      s = i * r;
      break;
    case Kt.S_POLE:
      s = -t;
      break;
    case Kt.N_POLE:
      s = t;
      break;
  }
  switch (s = this.pn1 / (this.p - s), n = s * i * Math.sin(e.x), this.mode) {
    case Kt.OBLIQ:
      s *= this.cosph0 * t - this.sinph0 * i * r;
      break;
    case Kt.EQUIT:
      s *= t;
      break;
    case Kt.N_POLE:
      s *= -(i * r);
      break;
    case Kt.S_POLE:
      s *= i * r;
      break;
  }
  var o, a;
  return o = s * this.cg + n * this.sg, a = 1 / (o * this.sw * this.h1 + this.cw), n = (n * this.cg - s * this.sg) * this.cw * a, s = o * a, e.x = n * this.a, e.y = s * this.a, e;
}
function Jc(e) {
  e.x /= this.a, e.y /= this.a;
  var t = { x: e.x, y: e.y }, i, r, n;
  n = 1 / (this.pn1 - e.y * this.sw), i = this.pn1 * e.x * n, r = this.pn1 * e.y * this.cw * n, e.x = i * this.cg + r * this.sg, e.y = r * this.cg - i * this.sg;
  var s = ee(e.x, e.y);
  if (Math.abs(s) < ot)
    t.x = 0, t.y = e.y;
  else {
    var o, a;
    switch (a = 1 - s * s * this.pfact, a = (this.p - Math.sqrt(a)) / (this.pn1 / s + s / this.pn1), o = Math.sqrt(1 - a * a), this.mode) {
      case Kt.OBLIQ:
        t.y = Math.asin(o * this.sinph0 + e.y * a * this.cosph0 / s), e.y = (o - this.sinph0 * Math.sin(t.y)) * s, e.x *= a * this.cosph0;
        break;
      case Kt.EQUIT:
        t.y = Math.asin(e.y * a / s), e.y = o * s, e.x *= a;
        break;
      case Kt.N_POLE:
        t.y = Math.asin(o), e.y = -e.y;
        break;
      case Kt.S_POLE:
        t.y = -Math.asin(o);
        break;
    }
    t.x = Math.atan2(e.x, e.y);
  }
  return e.x = t.x + this.long0, e.y = t.y, e;
}
var Yc = ["Tilted_Perspective", "tpers"];
const Zc = {
  init: Xc,
  forward: Kc,
  inverse: Jc,
  names: Yc
};
function td() {
  if (this.flip_axis = this.sweep === "x" ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10)
    throw new Error();
  if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, this.es !== 0) {
    var e = 1 - this.es, t = 1 / e;
    this.radius_p = Math.sqrt(e), this.radius_p2 = e, this.radius_p_inv2 = t, this.shape = "ellipse";
  } else
    this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
  this.title || (this.title = "Geostationary Satellite View");
}
function ed(e) {
  var t = e.x, i = e.y, r, n, s, o;
  if (t = t - this.long0, this.shape === "ellipse") {
    i = Math.atan(this.radius_p2 * Math.tan(i));
    var a = this.radius_p / ee(this.radius_p * Math.cos(i), Math.sin(i));
    if (n = a * Math.cos(t) * Math.cos(i), s = a * Math.sin(t) * Math.cos(i), o = a * Math.sin(i), (this.radius_g - n) * n - s * s - o * o * this.radius_p_inv2 < 0)
      return e.x = Number.NaN, e.y = Number.NaN, e;
    r = this.radius_g - n, this.flip_axis ? (e.x = this.radius_g_1 * Math.atan(s / ee(o, r)), e.y = this.radius_g_1 * Math.atan(o / r)) : (e.x = this.radius_g_1 * Math.atan(s / r), e.y = this.radius_g_1 * Math.atan(o / ee(s, r)));
  } else this.shape === "sphere" && (r = Math.cos(i), n = Math.cos(t) * r, s = Math.sin(t) * r, o = Math.sin(i), r = this.radius_g - n, this.flip_axis ? (e.x = this.radius_g_1 * Math.atan(s / ee(o, r)), e.y = this.radius_g_1 * Math.atan(o / r)) : (e.x = this.radius_g_1 * Math.atan(s / r), e.y = this.radius_g_1 * Math.atan(o / ee(s, r))));
  return e.x = e.x * this.a, e.y = e.y * this.a, e;
}
function id(e) {
  var t = -1, i = 0, r = 0, n, s, o, a;
  if (e.x = e.x / this.a, e.y = e.y / this.a, this.shape === "ellipse") {
    this.flip_axis ? (r = Math.tan(e.y / this.radius_g_1), i = Math.tan(e.x / this.radius_g_1) * ee(1, r)) : (i = Math.tan(e.x / this.radius_g_1), r = Math.tan(e.y / this.radius_g_1) * ee(1, i));
    var l = r / this.radius_p;
    if (n = i * i + l * l + t * t, s = 2 * this.radius_g * t, o = s * s - 4 * n * this.C, o < 0)
      return e.x = Number.NaN, e.y = Number.NaN, e;
    a = (-s - Math.sqrt(o)) / (2 * n), t = this.radius_g + a * t, i *= a, r *= a, e.x = Math.atan2(i, t), e.y = Math.atan(r * Math.cos(e.x) / t), e.y = Math.atan(this.radius_p_inv2 * Math.tan(e.y));
  } else if (this.shape === "sphere") {
    if (this.flip_axis ? (r = Math.tan(e.y / this.radius_g_1), i = Math.tan(e.x / this.radius_g_1) * Math.sqrt(1 + r * r)) : (i = Math.tan(e.x / this.radius_g_1), r = Math.tan(e.y / this.radius_g_1) * Math.sqrt(1 + i * i)), n = i * i + r * r + t * t, s = 2 * this.radius_g * t, o = s * s - 4 * n * this.C, o < 0)
      return e.x = Number.NaN, e.y = Number.NaN, e;
    a = (-s - Math.sqrt(o)) / (2 * n), t = this.radius_g + a * t, i *= a, r *= a, e.x = Math.atan2(i, t), e.y = Math.atan(r * Math.cos(e.x) / t);
  }
  return e.x = e.x + this.long0, e;
}
var rd = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
const nd = {
  init: td,
  forward: ed,
  inverse: id,
  names: rd
};
var Fi = 1.340264, Gi = -0.081106, Di = 893e-6, Oi = 3796e-6, vr = Math.sqrt(3) / 2;
function sd() {
  this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.es !== 0 && (this.apa = bo(this.es), this.qp = ce(this.e, 1), this.rqda = Math.sqrt(0.5 * this.qp));
}
function ad(e) {
  var t = ut(e.x - this.long0, this.over), i = e.y, r = Math.sin(i);
  this.es !== 0 && (r = ce(this.e, r) / this.qp);
  var n = Math.asin(vr * r), s = n * n, o = s * s * s;
  return e.x = t * Math.cos(n) / (vr * (Fi + 3 * Gi * s + o * (7 * Di + 9 * Oi * s))), e.y = n * (Fi + Gi * s + o * (Di + Oi * s)), this.es !== 0 && (e.x *= this.rqda, e.y *= this.rqda), e.x = this.a * e.x + this.x0, e.y = this.a * e.y + this.y0, e;
}
function od(e) {
  e.x = (e.x - this.x0) / this.a, e.y = (e.y - this.y0) / this.a, this.es !== 0 && (e.x /= this.rqda, e.y /= this.rqda);
  var t = 1e-9, i = 12, r = e.y, n, s, o, a, l, h;
  for (h = 0; h < i && (n = r * r, s = n * n * n, o = r * (Fi + Gi * n + s * (Di + Oi * n)) - e.y, a = Fi + 3 * Gi * n + s * (7 * Di + 9 * Oi * n), r -= l = o / a, !(Math.abs(l) < t)); ++h)
    ;
  return n = r * r, s = n * n * n, e.x = vr * e.x * (Fi + 3 * Gi * n + s * (7 * Di + 9 * Oi * n)) / Math.cos(r), e.y = Math.asin(Math.sin(r) / vr), this.es !== 0 && (e.y = mo(e.y, this.apa)), e.x = ut(e.x + this.long0, this.over), e;
}
var hd = ["eqearth", "Equal Earth", "Equal_Earth"];
const ld = {
  init: sd,
  forward: ad,
  inverse: od,
  names: hd
};
var ki = 1e-10;
function ud() {
  var e;
  if (this.phi1 = this.lat1, Math.abs(this.phi1) < ki)
    throw new Error();
  this.es ? (this.en = $n(this.es), this.m1 = si(
    this.phi1,
    this.am1 = Math.sin(this.phi1),
    e = Math.cos(this.phi1),
    this.en
  ), this.am1 = e / (Math.sqrt(1 - this.es * this.am1 * this.am1) * this.am1), this.inverse = cd, this.forward = fd) : (Math.abs(this.phi1) + ki >= Z ? this.cphi1 = 0 : this.cphi1 = 1 / Math.tan(this.phi1), this.inverse = _d, this.forward = dd);
}
function fd(e) {
  var t = ut(e.x - (this.long0 || 0), this.over), i = e.y, r, n, s;
  return r = this.am1 + this.m1 - si(i, n = Math.sin(i), s = Math.cos(i), this.en), n = s * t / (r * Math.sqrt(1 - this.es * n * n)), e.x = r * Math.sin(n), e.y = this.am1 - r * Math.cos(n), e.x = this.a * e.x + (this.x0 || 0), e.y = this.a * e.y + (this.y0 || 0), e;
}
function cd(e) {
  e.x = (e.x - (this.x0 || 0)) / this.a, e.y = (e.y - (this.y0 || 0)) / this.a;
  var t, i, r, n;
  if (i = ee(e.x, e.y = this.am1 - e.y), n = jn(this.am1 + this.m1 - i, this.es, this.en), (t = Math.abs(n)) < Z)
    t = Math.sin(n), r = i * Math.atan2(e.x, e.y) * Math.sqrt(1 - this.es * t * t) / Math.cos(n);
  else if (Math.abs(t - Z) <= ki)
    r = 0;
  else
    throw new Error();
  return e.x = ut(r + (this.long0 || 0), this.over), e.y = Re(n), e;
}
function dd(e) {
  var t = ut(e.x - (this.long0 || 0), this.over), i = e.y, r, n;
  return n = this.cphi1 + this.phi1 - i, Math.abs(n) > ki ? (e.x = n * Math.sin(r = t * Math.cos(i) / n), e.y = this.cphi1 - n * Math.cos(r)) : e.x = e.y = 0, e.x = this.a * e.x + (this.x0 || 0), e.y = this.a * e.y + (this.y0 || 0), e;
}
function _d(e) {
  e.x = (e.x - (this.x0 || 0)) / this.a, e.y = (e.y - (this.y0 || 0)) / this.a;
  var t, i, r = ee(e.x, e.y = this.cphi1 - e.y);
  if (i = this.cphi1 + this.phi1 - r, Math.abs(i) > Z)
    throw new Error();
  return Math.abs(Math.abs(i) - Z) <= ki ? t = 0 : t = r * Math.atan2(e.x, e.y) / Math.cos(i), e.x = ut(t + (this.long0 || 0), this.over), e.y = Re(i), e;
}
var gd = ["bonne", "Bonne (Werner lat_1=90)"];
const pd = {
  init: ud,
  names: gd
}, pa = {
  OBLIQUE: {
    forward: Ed,
    inverse: xd
  },
  TRANSVERSE: {
    forward: vd,
    inverse: Sd
  }
}, xr = {
  ROTATE: {
    o_alpha: "oAlpha",
    o_lon_c: "oLongC",
    o_lat_c: "oLatC"
  },
  NEW_POLE: {
    o_lat_p: "oLatP",
    o_lon_p: "oLongP"
  },
  NEW_EQUATOR: {
    o_lon_1: "oLong1",
    o_lat_1: "oLat1",
    o_lon_2: "oLong2",
    o_lat_2: "oLat2"
  }
};
function yd() {
  if (this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.title = this.title || "General Oblique Transformation", this.isIdentity = ro.includes(this.o_proj), !this.o_proj)
    throw new Error("Missing parameter: o_proj");
  if (this.o_proj === "ob_tran")
    throw new Error("Invalid value for o_proj: " + this.o_proj);
  const e = this.projStr.replace("+proj=ob_tran", "").replace("+o_proj=", "+proj=").trim(), t = oe(e);
  if (!t)
    throw new Error("Invalid parameter: o_proj. Unknown projection " + this.o_proj);
  t.long0 = 0, this.obliqueProjection = t;
  let i;
  const r = Object.keys(xr), n = (a) => {
    if (typeof this[a] > "u")
      return;
    const l = parseFloat(this[a]) * jt;
    if (isNaN(l))
      throw new Error("Invalid value for " + a + ": " + this[a]);
    return l;
  };
  for (let a = 0; a < r.length; a++) {
    const l = r[a], h = xr[l], d = Object.entries(h);
    if (d.some(
      ([_]) => typeof this[_] < "u"
    )) {
      i = h;
      for (let _ = 0; _ < d.length; _++) {
        const [m, y] = d[_], w = n(m);
        if (typeof w > "u")
          throw new Error("Missing parameter: " + m + ".");
        this[y] = w;
      }
      break;
    }
  }
  if (!i)
    throw new Error("No valid parameters provided for ob_tran projection.");
  const { lamp: s, phip: o } = wd(this, i);
  this.lamp = s, Math.abs(o) > ot ? (this.cphip = Math.cos(o), this.sphip = Math.sin(o), this.projectionType = pa.OBLIQUE) : this.projectionType = pa.TRANSVERSE;
}
function bd(e) {
  return this.projectionType.forward(this, e);
}
function md(e) {
  return this.projectionType.inverse(this, e);
}
function wd(e, t) {
  let i, r;
  if (t === xr.ROTATE) {
    let n = e.oLongC, s = e.oLatC, o = e.oAlpha;
    if (Math.abs(Math.abs(s) - Z) <= ot)
      throw new Error("Invalid value for o_lat_c: " + e.o_lat_c + " should be < 90°");
    r = n + Math.atan2(-1 * Math.cos(o), -1 * Math.sin(o) * Math.sin(s)), i = Math.asin(Math.cos(s) * Math.sin(o));
  } else if (t === xr.NEW_POLE)
    r = e.oLongP, i = e.oLatP;
  else {
    let n = e.oLong1, s = e.oLat1, o = e.oLong2, a = e.oLat2, l = Math.abs(s);
    if (Math.abs(s) > Z - ot)
      throw new Error("Invalid value for o_lat_1: " + e.o_lat_1 + " should be < 90°");
    if (Math.abs(a) > Z - ot)
      throw new Error("Invalid value for o_lat_2: " + e.o_lat_2 + " should be < 90°");
    if (Math.abs(s - a) < ot)
      throw new Error("Invalid value for o_lat_1 and o_lat_2: o_lat_1 should be different from o_lat_2");
    if (l < ot)
      throw new Error("Invalid value for o_lat_1: o_lat_1 should be different from zero");
    r = Math.atan2(
      Math.cos(s) * Math.sin(a) * Math.cos(n) - Math.sin(s) * Math.cos(a) * Math.cos(o),
      Math.sin(s) * Math.cos(a) * Math.sin(o) - Math.cos(s) * Math.sin(a) * Math.sin(n)
    ), i = Math.atan(-1 * Math.cos(r - n) / Math.tan(s));
  }
  return { lamp: r, phip: i };
}
function Ed(e, t) {
  let { x: i, y: r } = t;
  i = ut(i - e.long0, e.over);
  const n = Math.cos(i), s = Math.sin(r), o = Math.cos(r);
  t.x = ut(
    Math.atan2(
      o * Math.sin(i),
      e.sphip * o * n + e.cphip * s
    ) + e.lamp
  ), t.y = Math.asin(
    e.sphip * s - e.cphip * o * n
  );
  const a = e.obliqueProjection.forward(t);
  return e.isIdentity && (a.x *= ie, a.y *= ie), a;
}
function vd(e, t) {
  let { x: i, y: r } = t;
  i = ut(i - e.long0, e.over);
  const n = Math.cos(r), s = Math.cos(i);
  t.x = ut(
    Math.atan2(
      n * Math.sin(i),
      Math.sin(r)
    ) + e.lamp
  ), t.y = Math.asin(-1 * n * s);
  const o = e.obliqueProjection.forward(t);
  return e.isIdentity && (o.x *= ie, o.y *= ie), o;
}
function xd(e, t) {
  e.isIdentity && (t.x *= jt, t.y *= jt);
  const i = e.obliqueProjection.inverse(t);
  let { x: r, y: n } = i;
  if (r < Number.MAX_VALUE) {
    r -= e.lamp;
    const s = Math.cos(r), o = Math.sin(n), a = Math.cos(n);
    t.x = Math.atan2(
      a * Math.sin(r),
      e.sphip * a * s - e.cphip * o
    ), t.y = Math.asin(
      e.sphip * o + e.cphip * a * s
    );
  }
  return t.x = ut(t.x + e.long0), t;
}
function Sd(e, t) {
  e.isIdentity && (t.x *= jt, t.y *= jt);
  const i = e.obliqueProjection.inverse(t);
  let { x: r, y: n } = i;
  if (r < Number.MAX_VALUE) {
    const s = Math.cos(n);
    r -= e.lamp, t.x = Math.atan2(
      s * Math.sin(r),
      -1 * Math.sin(n)
    ), t.y = Math.asin(
      s * Math.cos(r)
    );
  }
  return t.x = ut(t.x + e.long0), t;
}
var Md = ["General Oblique Transformation", "General_Oblique_Transformation", "ob_tran"];
const Pd = {
  init: yd,
  forward: bd,
  inverse: md,
  names: Md
};
function Ad(e) {
  e.Proj.projections.add(dr), e.Proj.projections.add(_r), e.Proj.projections.add(du), e.Proj.projections.add(vu), e.Proj.projections.add(Au), e.Proj.projections.add(Cu), e.Proj.projections.add($u), e.Proj.projections.add(Uu), e.Proj.projections.add(Vu), e.Proj.projections.add(Zu), e.Proj.projections.add(ff), e.Proj.projections.add(yf), e.Proj.projections.add(vf), e.Proj.projections.add(Nf), e.Proj.projections.add(Ff), e.Proj.projections.add($f), e.Proj.projections.add(Uf), e.Proj.projections.add(Vf), e.Proj.projections.add(Yf), e.Proj.projections.add(rc), e.Proj.projections.add(hc), e.Proj.projections.add(dc), e.Proj.projections.add(bc), e.Proj.projections.add(Mc), e.Proj.projections.add(Ic), e.Proj.projections.add(Dc), e.Proj.projections.add(Uc), e.Proj.projections.add(Vc), e.Proj.projections.add(Zc), e.Proj.projections.add(nd), e.Proj.projections.add(ld), e.Proj.projections.add(pd), e.Proj.projections.add(Pd);
}
const Mo = Object.assign(Il, {
  defaultDatum: "WGS84",
  Proj: oe,
  WGS84: new oe("WGS84"),
  Point: ii,
  toPoint: On,
  defs: zt,
  nadgrid: ll,
  transform: Rl,
  mgrs: Tl,
  version: "__VERSION__"
});
Ad(Mo);
const Nd = async (e) => await (await fetch(e, {
  headers: { Accept: "application/json" }
})).json(), Rd = (e) => {
  const t = (r, n) => {
    if (!r || !Object.keys(r).length)
      return n;
    const s = { ...r };
    for (const [o, a] of Object.entries(n))
      s[o] = a;
    return s;
  };
  if (!e.length)
    return {};
  if (e.length === 1)
    return e[0];
  let i = e[0];
  for (let r = 1; r < e.length; r++)
    i = t(i, e[r]);
  return i;
}, dn = /* @__PURE__ */ new Map();
async function Id(e) {
  const t = async (r, n) => {
    for (const [s, o] of Object.entries(r))
      s === "@context" ? r[s] = await i(o, n) : typeof o == "object" && o !== null && await t(o, n);
  }, i = async (r, n) => {
    if (r === null || typeof r > "u")
      return {};
    if (Array.isArray(r)) {
      const s = await Promise.all(r.map((o) => i(o, n)));
      return Rd(s);
    } else {
      if (typeof r == "object")
        return await t(r, n), r;
      {
        if (n != null && n.includes(r))
          throw new Error("Circular dependencies found: " + n.join(" -> ") + " -> " + r);
        const s = Array.isArray(n) ? n == null ? void 0 : n.slice() : [];
        return s.push(r), dn.has(r) || dn.set(r, Nd(r).then((o) => i(o["@context"], s))), dn.get(r);
      }
    }
  };
  return typeof e == "object" && e !== null && "@context" in e ? i(e["@context"]) : i(e);
}
const ai = (e) => (t) => `${e}${t}`, Po = ai("http://www.w3.org/2004/02/skos/core#"), Ao = ai("http://www.w3.org/2000/01/rdf-schema#"), No = ai("http://purl.org/dc/terms/"), Ro = ai("http://purl.org/dc/elements/1.1/"), Td = ai("https://schema.org/"), Cd = ai("http://xmlns.com/foaf/0.1/"), Fd = [
  Po("prefLabel"),
  No("title"),
  Ro("title"),
  Td("name"),
  Cd("name"),
  Ao("label")
], Gd = [
  Po("definition"),
  No("description"),
  Ro("description"),
  Ao("comment")
], Io = {
  labelPredicates: Fd,
  descriptionPredicates: Gd
}, _n = {}, gn = {}, Dd = /* @__PURE__ */ new Set([
  "text/turtle",
  "text/n3",
  "application/n-triples",
  "application/n-quads",
  "application/trig",
  "text/anot+turtle"
]), ya = [
  "text/turtle",
  "application/n-triples",
  "application/n-quads",
  "application/trig",
  "application/ld+json",
  "application/rdf+xml"
].join(", ");
function Od() {
  var e;
  if (typeof navigator < "u" && (!((e = navigator.languages) === null || e === void 0) && e.length))
    return Array.from(navigator.languages);
  try {
    return [Intl.DateTimeFormat().resolvedOptions().locale];
  } catch {
    return [];
  }
}
function ba(e, t, i, r = Od()) {
  const n = Me.namedNode(t);
  for (const s of i) {
    const o = e.getQuads(n, Me.namedNode(s), null, null).filter((h) => h.object.termType === "Literal");
    if (!o.length)
      continue;
    for (const h of r) {
      const d = h.split("-")[0].toLowerCase(), f = o.find((_) => {
        var m;
        const y = (m = _.object.language) === null || m === void 0 ? void 0 : m.toLowerCase();
        return y === h.toLowerCase() || (y == null ? void 0 : y.split("-")[0]) === d;
      });
      if (f)
        return f.object.value;
    }
    const a = o.find((h) => !h.object.language);
    if (a)
      return a.object.value;
    const l = o.find((h) => {
      var d;
      return ((d = h.object.language) === null || d === void 0 ? void 0 : d.toLowerCase()) === "en";
    });
    return (l ?? o[0]).object.value;
  }
  return null;
}
function To(e, t, i) {
  const r = new Jt(), n = i === "text/anot+turtle" ? "text/turtle" : i, s = new Ta({ baseIRI: t, format: n });
  return new Promise((o, a) => {
    s.parse(e, (l, h) => {
      if (l)
        return a(l);
      h ? r.addQuad(h) : o(r);
    });
  });
}
async function Ld(e, t) {
  const i = await import("./jsonld-ui-utils-CMYq8l3H.js");
  if (!i)
    throw new Error("jsonld peer dependency is not available");
  const r = JSON.parse(e), n = await i.toRDF(r, { format: "application/n-quads", base: t });
  return To(n, t, "application/n-quads");
}
async function $d(e, t) {
  const i = new Jt();
  return new Promise((r, n) => {
    const s = new mh.RdfXmlParser({ baseIRI: t });
    s.on("data", (o) => i.addQuad(o)), s.on("error", n), s.on("end", () => r(i)), s.write(e), s.end();
  });
}
const hr = (e) => e ? Array.isArray(e) ? e : [e] : [], jd = (e) => `DESCRIBE <${e}>`, Co = async (e, t) => {
  var i;
  let r;
  try {
    if (r = await e(), !r.ok)
      return null;
  } catch {
    return null;
  }
  const n = ((i = r.headers.get("content-type")) === null || i === void 0 ? void 0 : i.split(";")[0].trim()) || "text/turtle", s = await r.text();
  try {
    if (Dd.has(n))
      return To(s, t, n);
    if (n === "application/ld+json")
      return Ld(s, t);
    if (n === "application/rdf+xml")
      return $d(s, t);
  } catch {
  }
  return null;
}, ma = (e, t) => (e in gn || (gn[e] = Co(t, e)), gn[e]), pn = async (e, t, i) => {
  const r = await e;
  if (!r)
    return null;
  const n = ba(r, t, i.labelPredicates);
  return n ? { uri: t, label: n, description: ba(r, t, i.descriptionPredicates) } : null;
}, Bd = async (e, t) => {
  const i = e.includes("#") ? e.split("#")[0] : e;
  let r = await pn(ma(i, () => fetch(i, { headers: { Accept: ya } })), e, t);
  const n = e.includes("#");
  for (const s of [...hr(t.fallbackRainbowInstances), ...hr(t.fallbackRainbowInstance)]) {
    if (r || n)
      break;
    const o = new URL(s);
    o.searchParams.set("uri", e);
    const a = o.toString();
    r = await pn(ma(a, () => fetch(a, { headers: { Accept: ya } })), e, t);
  }
  for (const s of [...hr(t.fallbackSparqlEndpoints), ...hr(t.fallbackSparqlEndpoint)]) {
    if (r)
      break;
    const o = new URLSearchParams({ query: jd(e) });
    r = await pn(Co(() => fetch(s, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "text/turtle, application/n-triples" },
      body: o.toString()
    }), e), e, t);
  }
  if (!r)
    throw new Error(`No label data found for <${e}>`);
  return r;
};
async function kd(e, t = {}) {
  const i = { ...Io, ...t };
  return e in _n || (_n[e] = Bd(e, i)), _n[e];
}
const qd = {
  replaceElements: !0,
  ...Io
};
function Ud(e, t, i = {
  propertiesField: "properties"
}) {
  const r = (s, o, a = !1) => {
    if (Array.isArray(o)) {
      for (const l of o)
        r(s, l).classList.add("array-entry");
      return s;
    } else if (o === null || typeof o > "u" || typeof o != "object") {
      const l = document.createElement("span");
      return l.classList.add("literal-value"), l.textContent = "" + o, s.appendChild(l), l;
    } else {
      const l = document.createElement("table");
      l.classList.add("object-table"), a && (l.innerHTML = "<thead><tr><th>Property</th><th>Value</th></tr></thead>");
      const h = document.createElement("tbody");
      return Object.entries(o).forEach(([d, f]) => {
        const _ = document.createElement("tr"), m = document.createElement("td");
        m.classList.add("object-property"), m.setAttribute("data-property", d), m.textContent = d, _.appendChild(m);
        const y = document.createElement("td");
        y.classList.add("object-value"), r(y, f), _.appendChild(y), h.appendChild(_);
      }), l.appendChild(h), s.appendChild(l), l;
    }
  }, n = document.createElement("div");
  n.classList.add("object-properties"), t.appendChild(n), i.propertiesField ? r(n, e[i.propertiesField], !0) : r(n, e, !0);
}
async function Wd(e, t, i = {}) {
  const r = { ...qd, ...i }, n = (h, d, f = !0, _ = !1) => {
    if (h.indexOf("://") !== -1)
      return { "@id": h };
    let m = null, y = null;
    for (let w = d.length - 1; w >= 0; w--) {
      if (h in d[w]) {
        let b = d[w][h], g;
        if (b === null || typeof b > "u" || typeof b == "boolean" || Array.isArray(b))
          continue;
        if (typeof b == "string") {
          if (b === "@type")
            return { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" };
          g = b, b = { "@id": b };
        } else if (typeof b == "object" && "@id" in b && typeof b["@id"] == "string")
          g = b["@id"];
        else
          continue;
        const v = g.indexOf(":");
        if (v > -1) {
          const E = g.substring(0, v), N = g.substring(v + 1);
          if (N.startsWith("//"))
            return b;
          const M = n(E, d);
          return M !== null && "@id" in M && typeof M["@id"] == "string" && (b["@id"] = `${M["@id"]}${N}`), b;
        }
      }
      m === null && d[w]["@vocab"] && (m = d[w]["@vocab"]), y === null && d[w]["@base"] && (y = d[w]["@base"]);
    }
    if (h.indexOf(":") === -1) {
      if (f && m)
        return { "@id": `${m}${h}` };
      if (_ && y)
        return { "@id": `${y}${h}` };
    } else {
      const w = h.indexOf(":"), b = h.substring(0, w), g = h.substring(w + 1);
      if (!g.startsWith("//")) {
        const v = n(b, d);
        if (v !== null && "@id" in v && typeof v["@id"] == "string")
          return { "@id": `${v["@id"]}${g}` };
      }
    }
    return null;
  }, s = (h) => {
    const d = document.createTreeWalker(h, NodeFilter.SHOW_ELEMENT, {
      acceptNode(m) {
        const y = m;
        return m !== h && y.classList.contains("object-value") ? NodeFilter.FILTER_REJECT : y.classList.contains("object-property") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }), f = [];
    let _;
    for (; _ = d.nextNode(); )
      f.push(_);
    return f;
  }, o = (h) => {
    const d = [], f = document.createTreeWalker(h, NodeFilter.SHOW_ELEMENT, {
      acceptNode(_) {
        const m = _;
        return m.classList.contains("object-property") || m.classList.contains("object-value") ? NodeFilter.FILTER_REJECT : m.classList.contains("literal-value") ? (d.push(m), NodeFilter.FILTER_REJECT) : NodeFilter.FILTER_SKIP;
      }
    });
    for (; f.nextNode(); )
      ;
    return d;
  }, a = (h, d, f = !0) => {
    if (h.setAttribute("data-uri", d), h.classList.add("resource-loading"), kd(d, r).then((_) => {
      let m = h.querySelector(".resource-link") || h;
      _.label && (h.setAttribute("data-label", _.label), r.replaceElements && (m.textContent = _.label)), _.description && (h.setAttribute("data-description", _.description), r.replaceElements && (m.title = _.description)), h.classList.add("resource-resolved");
    }).catch((_) => {
      console.error(`Error resolving URI ${d}: ${_}`, { cause: _ }), h.classList.add("resource-error");
    }).finally(() => {
      h.classList.remove("resource-loading");
    }), f) {
      const _ = document.createElement("a");
      for (_.href = d, _.target = "_blank", _.classList.add("resource-link"); h.firstChild; )
        _.appendChild(h.firstChild);
      h.appendChild(_);
    }
  }, l = (h, d) => {
    var f;
    const _ = s(h);
    for (const m of _) {
      let y = null;
      y = m.getAttribute("data-property"), y || (y = m.textContent.trim());
      const w = n(y, d);
      let b = d;
      const g = (f = m.parentElement) === null || f === void 0 ? void 0 : f.querySelector(".object-value");
      if (w && "@id" in w && typeof w["@id"] == "string") {
        const v = w["@id"];
        a(m, v, r.replaceElements), "@context" in w && (b = [...d, w["@context"]]), w["@type"] === "@id" && g && o(g).forEach((N) => {
          const M = n(N.textContent.trim(), b, !1, !0);
          if (M && "@id" in M && typeof M["@id"] == "string") {
            const j = M["@id"];
            a(N, j, r.replaceElements);
          }
        });
      }
      g && l(g, b);
    }
  };
  l(e, [t]);
}
const Hd = /* @__PURE__ */ new Set([4326, 4979]), wa = /* @__PURE__ */ new Map();
function Sr(e) {
  let t = e.match(/\/crs\/EPSG\/[^/]+\/(\d+)$/i);
  return t || (t = e.match(/urn:ogc:def:crs:EPSG::(\d+)$/i), t) || (t = e.match(/^EPSG:(\d+)$/), t) ? parseInt(t[1], 10) : null;
}
function An(e) {
  const t = Sr(e);
  return t !== null ? Hd.has(t) : /\/OGC\/[^/]+\/CRS84h?$/i.test(e) || /urn:ogc:def:crs:OGC:[^:]*:CRS84h?$/i.test(e);
}
function Ea(e) {
  if (typeof e == "string") {
    if (An(e))
      return null;
    const t = Sr(e);
    return t !== null ? { epsgCode: t } : null;
  }
  if (e !== null && typeof e == "object") {
    const t = e;
    if (t.type === "Reference" && typeof t.href == "string") {
      if (An(t.href))
        return null;
      const i = Sr(t.href);
      return i === null ? null : {
        epsgCode: i,
        epoch: typeof t.epoch == "number" ? t.epoch : void 0
      };
    }
  }
  return null;
}
function zd(e) {
  if (Array.isArray(e)) {
    for (const t of e) {
      const i = Ea(t);
      if (i !== null)
        return i;
    }
    return null;
  }
  return Ea(e);
}
function Qd(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e;
  if (t.type !== "name")
    return null;
  const i = t.properties;
  if (!i || typeof i != "object")
    return null;
  const r = i.name;
  if (typeof r != "string" || An(r))
    return null;
  const n = Sr(r);
  return n !== null ? { epsgCode: n } : null;
}
function Nn(e) {
  if (!e || typeof e != "object")
    return null;
  const t = e;
  if ("coordRefSys" in t) {
    const i = zd(t.coordRefSys);
    if (i !== null)
      return i;
  }
  if ("crs" in t) {
    const i = Qd(t.crs);
    if (i !== null)
      return i;
  }
  return null;
}
async function va(e, t) {
  const i = `EPSG:${e.epsgCode}`;
  if (e.epoch !== void 0 && console.warn(`CRS epoch ${e.epoch} ignored — proj4js does not support coordinate epochs.`), !t.defs(i)) {
    let r = wa.get(e.epsgCode);
    if (!r) {
      const n = await fetch(`https://epsg.io/${e.epsgCode}.proj4`);
      if (!n.ok)
        throw new Error(`Unknown CRS EPSG:${e.epsgCode} — could not retrieve a definition from epsg.io (HTTP ${n.status})`);
      if (r = (await n.text()).trim(), !r)
        throw new Error(`Unknown CRS EPSG:${e.epsgCode} — epsg.io returned an empty definition`);
      wa.set(e.epsgCode, r);
    }
    t.defs(i, r);
  }
  return t(i, "WGS84");
}
function lr(e, t) {
  const i = t.forward(e.slice(0, 2));
  return e.length > 2 ? [i[0], i[1], e[2]] : [i[0], i[1]];
}
function Fo(e, t) {
  if (!e)
    return e;
  switch (e.type) {
    case "Point":
      return { ...e, coordinates: lr(e.coordinates, t) };
    case "MultiPoint":
    case "LineString":
      return {
        ...e,
        coordinates: e.coordinates.map((i) => lr(i, t))
      };
    case "MultiLineString":
    case "Polygon":
      return {
        ...e,
        coordinates: e.coordinates.map((i) => i.map((r) => lr(r, t)))
      };
    case "MultiPolygon":
      return {
        ...e,
        coordinates: e.coordinates.map((i) => i.map((r) => r.map((n) => lr(n, t))))
      };
    case "GeometryCollection":
      return {
        ...e,
        geometries: e.geometries.map((i) => Fo(i, t))
      };
    default:
      return e;
  }
}
async function Vd(e, t, i) {
  var r;
  const n = await va(t, i), s = async (o) => {
    const a = Nn(o);
    let l = n;
    return a !== null && a.epsgCode !== t.epsgCode && (l = await va(a, i)), { ...o, geometry: Fo(o.geometry, l) };
  };
  return e.type === "FeatureCollection" ? { ...e, features: await Promise.all(((r = e.features) !== null && r !== void 0 ? r : []).map(s)) } : e.type === "Feature" ? s(e) : e;
}
async function l0(e, t, i = {}) {
  const { ldContext: r, popupOptions: n = { maxWidth: 400 }, augmentOptions: s = {}, onEachFeature: o, coordRefSys: a, proj4: l, crsAttribution: h = !0, ...d } = i;
  let f = t;
  const _ = Nn(a ? { coordRefSys: a } : t);
  if (_ !== null) {
    const w = l ?? Mo;
    if (!w)
      throw new Error('proj4js is required for CRS transformation — include it via <script src="..."> or install it as a dependency');
    f = await Vd(t, _, w);
  }
  const m = h && _ !== null ? `Original CRS: EPSG:${_.epsgCode}` : null, y = [d.attribution, m].filter(Boolean).join(" | ") || void 0;
  return e.geoJSON(f, {
    ...d,
    ...y !== void 0 ? { attribution: y } : {},
    onEachFeature(w, b) {
      if (o && o(w, b), w.id != null && b.bindTooltip(String(w.id), { permanent: !1 }), !w.properties || Object.keys(w.properties).length === 0)
        return;
      const g = document.createElement("div");
      Ud(w, g), b.bindPopup(g, n);
      const E = [t != null && typeof t == "object" && "@context" in t ? t["@context"] : null, r].filter((N) => N != null);
      if (E.length > 0) {
        const N = E.length === 1 ? E[0] : E;
        Id(N).then((M) => {
          Wd(g, M, s);
        });
      }
    }
  });
}
export {
  l0 as createJsonLDGeoJSONLayer
};
