let Z = 0,
  Y = 0,
  T = 0,
  $ = 0,
  C = 0,
  F = 0,
  j = 0,
  t = 0,
  e1 = 0,
  x = 0,
  y = 0,
  t1 = 0,
  z = 0,
  D = .066,
  H = 1,
  Q = 180,
  k = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  w = [],
  B = [],
  a1 = [],
  q = [],
  O = { x: 0, y: 0, z: 0 },
  P = { x: 0, y: 0, z: 0 },
  l1 = { x: 0, y: 0, z: 0 },
  R = new DOMMatrix(),
  l = new Float32Array(16),
  s = new Float32Array(624),
  v = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  L = (e, t) => t < e ? e : t,
  X = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  r1 = (e, t) => t < U(e) ? e : 0,
  W = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  i = (e, t) => (e = X(e), W(e, 1 - e, t)),
  s1 = e => j1(K(e *= G), J(e)) / G,
  n1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * X(a),
  o1 = ({ x: e, y: t, z: a }) => k1(e - O.x, t - O.y, a - O.z),
  S = ({ x: e, y: t, z: a }, l) => e * l.x + t * l.y + a * l.z,
  c1 = e => {
    let t = 0, a = 0, l = 0, r, s = e.at(-1);
    for (r of e) t += (s.y - r.y) * (s.z + r.z), a += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = k1(t, a, l), t /= r, a /= r, l /= r, { x: t, y: a, z: l, w: t * s.x + a * s.y + l * s.z };
  },
  d = (
    e,
    t = l,
    a = 0,
  ) => (a *= 16,
    t[a++] = e.m11,
    t[a++] = e.m12,
    t[a++] = e.m13,
    t[a++] = e.m14,
    t[a++] = e.m21,
    t[a++] = e.m22,
    t[a++] = e.m23,
    t[a++] = e.m24,
    t[a++] = e.m31,
    t[a++] = e.m32,
    t[a++] = e.m33,
    t[a++] = e.m34,
    t[a++] = e.m41,
    t[a++] = e.m42,
    t[a++] = e.m43,
    t[a] = e.m44,
    t),
  i1 = (e, t, a, l) => [e, 0, 0, 0, 0, t, 0, 0, 0, 0, (l + a) / (a - l), -1, 0, 0, 2 * l * a / (a - l), 0],
  f1 = (e, t, a) => (e.D = a, e.A = t, e),
  h1 = (e, l, t = e.A) =>
    f1(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.D,
    ),
  f = (e, t, a) => e.map(e => h1(e, t, a)),
  m1 = (a, l = 0) =>
    v(a, e => {
      let t = J(2 * E * e / a);
      return { x: K(2 * E * e / a), y: 0, z: U(t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  r = (l, r, s) =>
    l.map((e, t, { length: a }) => f1([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.A, s)),
  h = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? m1(e, l) : k,
    l = h1(e, R.translate(0, 1).scale3d(0 < a ? a : 1)),
    e = h1(e, R.translate(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...r(e, l, t), l, e]),
  n = (l, r = l, s = (e, t) => (t *= E / r, { x: J(e *= 2 * E / l) * K(t), y: J(t), z: K(e) * K(t) })) => {
    let n = [];
    for (let a = 0; l > a; a++) {
      for (let t = 0; r > t; t++) {
        let e = f1([], 0, 1);
        n.push(e),
          e.push(s(a, t, e)),
          t && e.push(s((a + 1) % l, t, e)),
          r - 1 > t && e.push(s((a + 1) % l, t + 1 % r, e)),
          e.push(s(a, t + 1 % r, e));
      }
    }
    return n;
  },
  c = (l, r) => {
    let s, n, o, c = r.C;
    for (let e = 0; c.length > e; ++e) {
      if ((s = S(l, c[e]) - l.w) < -8e-5 ? o = r : 8e-5 < s && (n = r), o && n) {
        n = [], o = [], c = r.C, e = r.B;
        let t = c.at(-1), a = S(l, t) - l.w;
        for (let e of c) {
          s = S(l, e) - l.w,
            a < 8e-5 && o.push(t),
            -8e-5 < a && n.push(t),
            (8e-5 < a && s < -8e-5 || a < -8e-5 && 8e-5 < s)
            && (a /= s - a,
              t = { x: t.x + (t.x - e.x) * a, y: t.y + (t.y - e.y) * a, z: t.z + (t.z - e.z) * a },
              n.push(t),
              o.push(t)),
            t = e,
            a = s;
        }
        return {
          o: 2 < n.length && { C: f1(n, c.A, c.D), B: e, u: r },
          m: 2 < o.length && { C: f1(o, c.A, c.D), B: e, u: r },
        };
      }
    }
    return { o: n, m: o };
  },
  o = (e, t, a = c1(t.C)) => {
    let l, r, s;
    return e
      ? ({ o: l, m: r } = c(e, t), l || r || e.s.push(t), l && (e.o = o(e.o, l, a)), r && (e.m = o(e.m, r, a)))
      : ({ x: l, y: r, z: a, w: s } = a, e = { x: l, y: r, z: a, w: s, s: [t], o: 0, m: 0 }),
      e;
  },
  a = (t, r, s) => {
    let n = [],
      o = (e, t) => {
        let { o: a, m: l } = c(e, t);
        a || l || (0 < s * S(e, r) ? a = t : l = t), a && (e.o ? o(e.o, a) : n.push(a)), l && e.m && o(e.m, l);
      };
    for (let e of r.s) o(t, e);
    return n;
  },
  u1 = (e, t) => e && (t(e), u1(e.o, t), u1(e.m, t)),
  x1 = e => e.length ? e.reduce((e, t) => o(e, { C: t, B: 0, u: 0 }), 0) : e,
  y1 = e => (u1(e, t => {
    let e = t.m;
    t.m = t.o, t.o = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.s) e.B = !e.B;
  }),
    e),
  m = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = x1(l), t) {
        t = x1(t), u1(l, e => e.s = a(t, e, 1)), u1(t, e => r.push([e, a(l, e, -1)]));
        for (let [t, a] of r) for (let e of a) o(l, e, t);
      }
      return l;
    }),
  u = (...e) => {
    let a = new Map(),
      l = new Map(),
      r = e => {
        let t;
        return e.u && ((t = a.get(e.u)) ? (l.delete(t), e = r(e.u)) : a.set(e.u, e)), e;
      },
      t;
    return [e, ...t] = [...e],
      e = y1(m(y1(x1(e)), ...t)),
      u1(e, t => {
        for (let e of t.s) l.set(r(e), e.B);
      }),
      Array.from(l, ([{ C: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return f1(t ? a.reverse() : a, e.A, e.D);
      });
  },
  g1 = () => {
    let e = i(B[12].g, B[13].g);
    j = W(W(j, 0, 1 - V(-1 * D)), s1(j + 60 * D), B[5].g - B[6].i),
      C = W(W(C, 0, 1 - V(-5 * D)), s1(C + 56 * D), e),
      F = W(W(F, 0, 1 - V(-4 * D)), s1(F + 48 * D), e),
      x = W(x, B[9].i, 1 - V(-(.2 + .3 * U(2 * B[9].i - 1)) * D)),
      e1 = W(e1, t ? W(e1, -9, 1 - V(-1.5 * D)) : X(T / 3), 1 - V(-1 * D)),
      H && T > H && (H = 0, h4.innerHTML = ""),
      B[0].l && .8 < B[0].g && (Z < 13
        ? (1 / 0 > H && (H = T + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), B[0].l = 0)
        : t
          || (1 / 0 > H && (H = T + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            t = 1));
    for (let e of w) e.h && (e.j = e.h());
    for (let e of B) e.h();
    for (let e of a1) e.h();
  },
  z1 = () => {
    h3.innerHTML = "Souls: "
      + [
        0,
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
        "XIII",
      ][Z = a1.reduce((e, { l: t }) => e + t, 0)] + " / XIII";
  },
  v1 = () => {
    localStorage.I = JSON.stringify([B.map(({ l: e }) => e), a1.map(({ l: e }) => e), $, T, x]);
  },
  g = (e, t = 1) => {
    let a = C1;
    return w.push(C1 = t = { j: R, H: w.length, G: t, s: [] }), e(t), C1 = a, t;
  },
  p = (e, t = R, a) => C1.s.push(...f(e, t, a)),
  b = r => {
    let s = C1,
      n = B.length,
      o = {
        l: 0,
        g: 0,
        i: 0,
        u: s,
        h() {
          let e = o.l, t = o.g, a = o.i, l = s.j.multiply(r);
          o.J = l,
            o1(l.transformPoint()) < 3 && q[5] && (t < .3 || .7 < t)
            && (o.l = e ? 0 : 1, n && 1 / 0 > H && (H = T + 1, h4.innerHTML = "* click *"), $ = n, v1()),
            o.g = W(t, e, 1 - V(-4 * D)),
            o.i = W(a, e, 1 - V(-1 * D)),
            o.j = l.rotate(60 * o.g - 30, 0).translateSelf(0, 1);
        },
      };
    B.push(o),
      p(h(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), I(.4, .5, .5)),
      p(h(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), I(.4, .5, .5)),
      p(h(), r.translate(0, -.4).scale(.5, .1, .5), I(.5, .5, .4));
  },
  A = (h, ...e) => {
    let m = -1,
      u = 0,
      g = 0,
      v = 0,
      d = 0,
      p = 0,
      b = 1,
      A = 3,
      I = {
        l: 0,
        h() {
          let i, f;
          if (!I.l) {
            let r = 1, s = 1 / 0, e, t, a, l, n, o, c;
            for (let l of Y) {
              let { x: e, z: t, w: a } = l;
              t = (e = k1(F - e, j - t)) - a,
                c ||= e < a,
                0 < t && s > t && (s = t, C = l),
                r = (i = e / a) > r ? r : i;
            }
            c
            || ({ x: e, z: t, w: a } = C,
              l = F - e,
              n = j - t,
              o = k1(l, n),
              f = j1(-n, l),
              b && (g = (S1() - .5) * E / 2, A = X(A / (1 + S1()))),
              m = -J(f += g),
              u = K(f),
              .1 < o && (o = (o < a ? o : a) / (o || 1), F = l * o + e, j = n * o + t)),
              b = c,
              A = W(A, 6 * (1 - r) + 3, 1 - V(-(r + 3) * D)),
              i = F = W(F, F + m, 1 - V(-A * D)),
              k = W(k, i, 1 - V(-A * D)),
              i = j = W(j, j + u, 1 - V(-A * D)),
              S = W(S, i, 1 - V(-A * D)),
              v = n1(v, j1(k - d, S - p) / G - 180, 3 * D),
              d = k,
              p = S,
              f = (I.j = M.j.multiply(h.translate(k, 0, S).rotateSelf(0, v, 7 * K(1.7 * T)))).transformPoint(),
              o1(f) < 1.55
              && (I.l = 1,
                i = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  ,
                  "Andrzej Mazur<br>for the js13k competition",
                  "Donald Trump<br>lies",
                  "Kim Jong-un<br>Dictator, liked pineapple on pizza",
                  "Maxime Euziere<br>forced me to finish this game",
                  "She traded NFTs apes",
                  ,
                  "Vladimir Putin<br>evil war",
                  "He was not a good person",
                  ,
                  "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
                ][Z] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > H && (H = T + (Z && Z < 12 ? 5 : 7), h4.innerHTML = i),
                z1(),
                v1());
          }
          I.l
            && (I.j = w[2].j.translate(
              t % 4 * 1.2 - 1.7 + K(T + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + U(t % 4 - 2) + J(T / 1.5 + t) / 6,
            ));
        },
      },
      M = C1,
      t = a1.length,
      Y = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      C = Y[0],
      { x: F, z: j } = C,
      k = F,
      S = j;
    a1.push(I);
  },
  d1 = (e, t, a, l) => {
    let r = 0,
      s = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      f = -1 / 0,
      h = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (a - t),
      g = new DOMMatrix(i1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, t, a)).multiplySelf(e).invertSelf();
    return t = v(
      8,
      e => (e = g.transformPoint({ x: 4 & e ? 1 : -1, y: 2 & e ? 1 : -1, z: 1 & e ? 1 : -1 }),
        r -= e.x = (u * e.x | 0) / u / e.w,
        s -= e.y = (u * e.y | 0) / u / e.w,
        n -= e.z = (u * e.z | 0) / u / e.w,
        e),
    ),
      a = R.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      h1(t, a).map(({ x: e, y: t, z: a }) => {
        o = e > o ? o : e,
          c = c > e ? c : e,
          i = t > i ? i : t,
          f = f > t ? f : t,
          h = a > h ? h : a,
          m = m > a ? m : a;
      }),
      h *= h < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      R.scale(2 / (c - o), 2 / (f - i), 2 / (h - m)).translateSelf((c + o) / -2, (f + i) / -2, (h + m) / 2)
        .multiplySelf(a);
  },
  p1 = (e, t = 35633) => (t = _.c6x(t), _.s3c(t, e), _.c6a(t), t),
  w1 = (e, t) => {
    let a = {}, l = _.c1h();
    return _.abz(l, e), _.abz(l, p1(t, 35632)), _.l8l(l), e => e ? a[e] || (a[e] = _.gan(l, e)) : _.u7y(l);
  },
  A1 = (e, t, a, l) => {
    if (M) {
      for (var r of (a = R.rotate(0, 40 * K(Y) - 70), [37, 38, 39])) d(a, s, r - 1);
      _.uae(e, !1, s), _.d97(4, w[39].F - w[37].v, 5123, 2 * w[37].v);
    } else {
      for (r = 0; w.length > r; ++r) w[r].G && d(w[r].j, s, r - 1);
      for (_.uae(e, !1, s), _.d97(4, (t ? w[39].F : w[37].v) - 3, 5123, 6), t = 0; t < 13; ++t) d(a1[t].j, s, t);
      for (t = 0; B.length > t; ++t) d(B[t].j, s, t + 13), l || (s[16 * (t + 13) + 15] = 1 - B[t].g);
      _.uae(e, !1, s),
        _.das(4, w[a].F - w[a].v, 5123, 2 * w[a].v, 13),
        _.das(4, w[40].F - w[40].v, 5123, 2 * w[40].v, B.length);
    }
  },
  I1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  M1 = e => K(e * E * 2),
  I = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  M,
  Y1,
  C1,
  N,
  F1,
  { PI: E, abs: U, atan2: j1, sin: K, cos: J, hypot: k1, exp: V, random: S1, sign: T1 } = Math,
  G = E / 180,
  D1 = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  H1 = new AudioContext(),
  Q1 = H1.createBufferSource(),
  _ = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in _) _[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = _[e];
I1(() => {
  let e = 0,
    a = () => {
      if (2 == ++e) {
        let o = e => {
            let t,
              a,
              { x: l, y: r, z: s } =
                (_.f1s(),
                  requestAnimationFrame(o),
                  n = (e - (Y1 || e)) / 1e3,
                  M ? (D = 0, q[5] = 0) : D = .066 < n ? .066 : n,
                  T += D,
                  Y += n,
                  Y1 = e,
                  0 < D && (g1(), F1(), q[5] = 0),
                  P);
            M && (l = -4.5, r = 2, s = 3.2 - X(hC.clientWidth / 1e3));
            var n = (M ? R.rotate(-20, -90) : R.rotate(-z, -Q)).invertSelf().translateSelf(-l, -r, -s);
            0 < D
            && ({ x: e, y: t, z: a } = O,
              f(),
              _.b6o(36160, g),
              _.v5y(0, 0, 128, 128),
              _.c4s(16640),
              _.cbf(!0, !1, !0, !1),
              _.uae(f("b"), !1, d(R.rotate(0, 180).invertSelf().translateSelf(-e, -t, .3 - a))),
              A1(f("c"), 0, 41, 0),
              _.c4s(256),
              _.cbf(!1, !0, !0, !1),
              _.uae(f("b"), !1, d(R.translate(-e, -t, -a - .3))),
              A1(f("c"), 0, 41, 0),
              _.f1s()),
              c(),
              _.b6o(36160, u),
              _.v5y(0, 0, 2048, 2048),
              m[0](d1(n, .3, 55, 10)),
              m[1](d1(n, 55, 186, 11)),
              h(),
              _.b6o(36160, null),
              _.v5y(0, 0, _.drawingBufferWidth, _.drawingBufferHeight),
              _.cbf(!0, !0, !0, !0),
              _.c4s(16640),
              m[0](),
              m[1](),
              _.uae(h("a"), !1, i1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 186)),
              _.uae(h("b"), !1, d(n)),
              _.ubu(h("k"), l, r, s),
              A1(h("c"), !N, 42, 0),
              i(),
              _.ubu(i("j"), _.drawingBufferWidth, _.drawingBufferHeight, Y),
              _.ubu(i("k"), l, r, s),
              _.uae(i("b"), !1, d(n.inverse())),
              _.d97(4, 3, 5123, 0),
              _.b6o(36160, g),
              _.f1s();
          },
          e = l,
          t = p1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          c = w1(
            p1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          i = w1(
            p1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          f = w1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          h = w1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          m = v(2, t => {
            let a = new Float32Array(16), l = _.c25();
            return _.a4v(33984 + t),
              _.b9j(3553, l),
              _.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              _.t2z(3553, 10241, 9729),
              _.t2z(3553, 10240, 9729),
              _.t2z(3553, 34893, 515),
              _.t2z(3553, 34892, 34894),
              _.t2z(3553, 10243, 33071),
              _.t2z(3553, 10242, 33071),
              e => {
                e
                  ? (d(e, a), _.uae(c("b"), !1, a), _.fas(36160, 36096, 3553, l, 0), _.c4s(256), A1(c("c"), !N, 42, 1))
                  : _.uae(h(t ? "j" : "i"), !1, a);
              };
          }),
          u = _.c5w(),
          g = (t = _.c3z(), _.c5w()),
          a = _.c25();
        f(),
          _.uae(f("a"), !1, i1(1.4, .59, 1e-4, 1)),
          h(),
          _.ubh(h("q"), 2),
          _.ubh(h("h"), 1),
          _.ubh(h("g"), 0),
          i(),
          _.ubh(i("q"), 2),
          _.b6o(36160, u),
          _.d45([0]),
          _.r9l(0),
          _.b6o(36160, g),
          _.bb1(36161, t),
          _.r4v(36161, 33189, 128, 128),
          _.f8w(36160, 36096, 36161, t),
          _.a4v(33986),
          _.b9j(3553, a),
          _.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          _.fas(36160, 36064, 3553, a, 0),
          _.b9j(3553, _.c25()),
          _.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          _.gbn(3553),
          _.t2z(3553, 10241, 9987),
          _.t2z(3553, 10240, 9729),
          _.e8z(2929),
          _.e8z(2884),
          _.c70(1),
          _.c7a(1029),
          _.d4n(515),
          _.c5t(0, 0, 0, 1),
          g1(),
          (() => {
            let o = 1,
              e = 2,
              c = 2,
              i = new Int32Array(256),
              h = new Uint8Array(65536),
              f = (e, t, a) => o ? t : W(e + T1(t - e) * L(0, U(t - e) ** .9 - a) * D * 2, t, D / 7),
              m = () => c ? B[$].u.j : v && 1 === w[v].G && w[v].j || R,
              n,
              u,
              g,
              v,
              t,
              d,
              p,
              b,
              A,
              I,
              M,
              Y,
              C,
              F,
              j,
              k,
              S;
            F1 = () => {
              let a, l, r = t1 + (q[1] ? 1 : 0) - (q[3] ? 1 : 0), s = y + (q[0] ? 1 : 0) - (q[2] ? 1 : 0);
              if (l = navigator.getGamepads()[0]) {
                let t = l.buttons, e = l.axes;
                l = (a = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0)(3) || a(2) || a(1) || a(0),
                  r += a(12) - a(13) - r1(e[1], .2),
                  s += a(14) - a(15) - r1(e[0], .2),
                  N && (z += 80 * r1(e[3], .3) * D, Q += 80 * r1(e[2], .3) * D),
                  l && !n && (q[5] = 1),
                  n = l;
              }
              a = j1(r, s),
                l = r1(X(k1(r, s)), .05),
                _.fa7(),
                _.r9r(0, 0, 128, 128, 6408, 5121, h),
                _.iay(36008, [36064, 36096]),
                _.iay(36009, [36064, 36096]),
                (() => {
                  F = C = 0;
                  for (let e = 32; e < 128; e += 2) {
                    let n = 0, o = 0, c = 0, i = 0, f = 512 * e;
                    for (let s = 1 & e; s < 128; s += 2) {
                      let e = f + 4 * s,
                        t = f + 4 * (127 - s),
                        a = h[e] / 255,
                        l = h[1 + t] / 255,
                        r = 1 - U(s / 63.5 - 1);
                      10 < s && s < 118 && (n = L(L(a * r, a * h[t] / 255), n), o = L(L(l * r, l * h[1 + e] / 255), o)),
                        (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < a ? a : l) / 3)
                        && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                    }
                    U(i - c) > U(C) && (C = i - c), U(o - n) > U(F) && (F = o - n);
                  }
                })(),
                (() => {
                  let s = 0, n = 0, t = 0, a = 0;
                  p = 0, i.fill(0);
                  for (let r, e = 0; e < 31; ++e) {
                    for (let a = r = 0, l = 512 * e; a < 128; a++) {
                      let e = l + 4 * a, t = (h[e] + h[1 + e]) / 255;
                      e = h[2 + e],
                        14 < a && a < 114 && (r += t),
                        e && t && (t = i[e] + 1, i[e] = t, s > t || (s = t, n = e));
                    }
                    r < 3 && 5 < e && (t += e / 32), 3 < r && (7 < e && (a += e / 15), p = 1);
                  }
                  n && (p = 1),
                    u = n || g,
                    g = n,
                    e = W(e, p ? 6.5 : 8, 1 - V(-4 * D)),
                    l1.y += a / 41 - (p || e) * t / 41 * e * D;
                })(),
                r = X(1 - 5 * L(U(C), U(F))),
                s = N ? Q * G : E,
                b = W(b, l, 1 - V(-10 * D)),
                l && (t = 90 - a / G),
                d = n1(d, t, 8 * D),
                A = W(A, p * r * X(2 * l) * 7, 1 - V(-(p ? .1 < r ? 10 : 5 + 2 * l : 1) * D)),
                I = W(I, 0, 1 - V(-(p ? 8 : 4) * D)),
                C += D * ((u ? 0 : r * I) - J(a + s) * l * A),
                M = W(M, 0, 1 - V(-(p ? 8 : 4) * D)),
                F += D * ((u ? 0 : r * M) - K(a + s) * l * A),
                (() => {
                  let t = m();
                  var { x: e, y: a, z: l } = 1 < c
                    ? B[$].J.transformPoint({ x: 0, y: $ || .9 < e1 ? 15 : 1, z: -2.4 })
                    : ((e = (l = t).inverse()).m41 = e.m42 = e.m43 = 0,
                      a = e.transformPoint({ x: C, z: F, w: 0 }),
                      l1.x += a.x,
                      l1.z += a.z,
                      l.transformPoint(l1));
                  let r = e - O.x, s = l - O.z;
                  if (c = c && (p && u ? 0 : 1), O.x = e, O.y = a, O.z = l, c || u !== v) {
                    v = u;
                    let e = (t = m()).inverse().transformPoint(O);
                    l1.x = e.x, l1.y = e.y, l1.z = e.z;
                  }
                  a < (e < -25 || l < 109 ? -25 : -9) && (c = 2),
                    u && (I = r / D, M = s / D),
                    1 === u && (B[9].l = e < -15 && l < 0 ? 1 : 0),
                    Y = W(W(Y, a, 1 - V(-2 * D)), a, c || 8 * U(Y - a)),
                    k = f(k, Y, 3),
                    j = f(j, e, 2),
                    S = f(S, l, 2),
                    Q = N
                      ? (t = c + (1 - V(-18 * D)),
                        P.x = W(P.x, e, t),
                        P.y = W(P.y, Y + 1.5, t),
                        P.z = W(P.z, l, t),
                        s1(Q))
                      : (r = o + (1 - V(-2 * D)),
                        P.x = W(P.x, j, r),
                        P.y = W(P.y, L(k + X((-60 - l) / 8, 0, 20) + 13, 6), r),
                        P.z = W(P.z, S + -18, r),
                        s = j - P.x,
                        a = -U(S - P.z),
                        t = o + (1 - V(-4 * D)),
                        z = n1(z, 90 - j1(k1(a, s), P.y - k) / G, t),
                        n1(Q, 90 - s1(j1(a, s) / G), t)),
                    z = X(z, -87, 87);
                  let n = w[37].j = R.translate(e, Y, l).rotateSelf(0, d);
                  [38, 39].map((e, t) => {
                    w[e].j = n.translate(0, b * X(.45 * K(9.1 * T + E * (t - 1) - E / 2))).rotateSelf(
                      b * K(9.1 * T + E * (t - 1)) * .25 / G,
                      0,
                    );
                  }), o = 0;
                })();
            };
          })(),
          (() => {
            let e = !0,
              t = () => {
                M || !e ? Q1.disconnect() : Q1.connect(H1.destination), b4.innerHTML = "Music: " + e;
              },
              r = (e = !1) => {
                if (M !== e) {
                  M = e;
                  try {
                    e ? (document.exitFullscreen().catch(() => {}), document.exitPointerLock()) : Q1.start();
                  } catch {}
                  N = 0, document.body.className = e ? "l m" : "l", t(), z1();
                }
              },
              s,
              i,
              f,
              h,
              m,
              u,
              g,
              v,
              d,
              p,
              b,
              n;
            oncontextmenu = () => !1,
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.I = "", location.reload());
              },
              b1.onclick = () => {
                document.body.requestFullscreen(), r();
              },
              b2.onclick = () => {
                document.body.requestFullscreen(), r(), N = 1;
              },
              b4.onclick = () => {
                e = !e, t();
              },
              b5.onclick = () => r(!0),
              onclick = e => {
                n = 1, M || (e.target === hC && (q[5] = !0), N && hC.requestPointerLock());
              },
              onkeyup = onkeydown = ({ code: e, target: t, type: a, repeat: l }) => {
                l || ((l = !!a[5] && t === document.body) && ("Escape" === e || "Enter" === e && M)
                  ? M && !n || r(!M)
                  : 5
                      === (a = {
                        KeyA: 0,
                        ArrowLeft: 0,
                        KeyW: 1,
                        ArrowUp: 1,
                        KeyD: 2,
                        ArrowRight: 2,
                        KeyS: 3,
                        ArrowDown: 3,
                        KeyE: 5,
                        Space: 5,
                        Enter: 5,
                      }[e])
                  ? l && (q[a] = 1)
                  : q[a] = l);
              },
              onmousemove = ({ movementX: e, movementY: t }) => {
                N && (e || t) && (Q += .1 * e, z += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!M) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    N && e > hC.clientWidth / 2
                      ? void 0 === v && (d = 0, u = e, g = t, v = a, p = Q, b = z)
                      : void 0 === h && (m = 0, i = e, f = t, h = a);
                  }
                  s = Y;
                }
              },
              hC.ontouchmove = l => {
                let r, s, n, o, c;
                if (!M) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    v === a && (Q = p + (e - u) / 2.3, z = b + (t - g) / 2.3, d = 1),
                      h === a
                      && (a = (i - e) / 20,
                        r = (f - t) / 20,
                        s = U(a),
                        n = U(r),
                        o = j1(r, a),
                        c = X(k1(r, a) - .5),
                        y = .2 < s ? J(o) * c : 0,
                        t1 = .2 < n ? K(o) * c : 0,
                        (y || t1) && (m = 1),
                        2 < s && (i = e + 20 * T1(a)),
                        2 < n && (f = t + 20 * T1(r)));
                  }
                }
              },
              hC.ontouchend = t => {
                let a;
                t.preventDefault();
                for (let e of t.changedTouches) {
                  e.identifier === v
                    ? (v = void 0, d || (a = 1), d = 0)
                    : e.identifier === h
                    ? (h = void 0, t1 = y = 0, m || (a = 1), m = 0)
                    : a = 1;
                }
                a && t.target === hC && s && .02 < (t = Y - s) && t < .7 && (q[5] = !0);
              },
              (document.onvisibilitychange = onblur = onresize = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  q.length = y = t1 = 0,
                  h = v = void 0,
                  document.hidden && r(!0);
              })(),
              r(!0);
          })(),
          requestAnimationFrame(o);
      }
    },
    l = new Image();
  l.onload = l.onerror = a,
    l.src = D1,
    (e => {
      let L = 0,
        X = new Int32Array(10725888),
        s = () => {
          let l = H1.createBuffer(2, 5362944, 44100);
          for (let a = 0; a < 2; a++) {
            for (let e = a, t = l.getChannelData(a); e < 10725888; e += 2) {
              t[e >> 1] = X[e] / 65536;
            }
          }
          Q1.buffer = l, Q1.loop = !0, I1(e);
        },
        n = () => {
          let b = 0,
            e = h => {
              let s = 0,
                n = 0,
                m = [],
                o,
                u,
                c,
                i,
                f = new Int32Array(768 * h),
                g = 2 ** (a - 9) / h,
                v = E * 2 ** (r - 8) / h,
                d = O * h & -2;
              for (let e = 0; e <= 11; ++e) {
                for (
                  let t = 0,
                    a = +"000001234556112341234556011111111112011111111112000001111112"[12 * L + e],
                    r = (32 * e + t) * h;
                  t < 32;
                  ++t
                ) {
                  for (let e = 0; e < 4; ++e) {
                    if (u = 0, a && (u = l[a - 1].charCodeAt(t + 32 * e) - 40, u += 0 < u ? 106 : 0), u) {
                      var p;
                      if (!(p = m[u])) {
                        let l = 0,
                          r = 0,
                          s,
                          n,
                          o = p = u,
                          c = L < 2
                            ? e => e % 1 * 2 - 1
                            : M1,
                          i = L < 2
                            ? L < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : M1,
                          f = new Int32Array(k + S + R);
                        for (let t = 0, a = 0; k + S + R > t; ++t, ++a) {
                          let e = 1;
                          k > t ? e = t / k : k + S > t || (e = (1 - (e = (t - k - S) / R)) * 3 ** (T / -16 * e)),
                            a < 0
                            || (n = .00396 * 2 ** ((o + I - 256) / 12),
                              s = .00396 * 2 ** ((o + C - 256) / 12) * (L ? 1 : 1.0072),
                              a -= 4 * h),
                            f[t] = 80
                              * (c(l += n * e ** (M / 32)) * A + i(r += s * e ** (F / 32)) * Y
                                + (j ? (2 * S1() - 1) * j : 0))
                              * e;
                        }
                        p = m[p] = f;
                      }
                      for (let e = 0, t = 2 * r; p.length > e; ++e, t += 2) f[t] += p[e];
                    }
                  }
                  for (let e, t, a, l = 0; h > l; ++l) {
                    a = 2 * (r + l),
                      e = 0,
                      ((t = f[a]) || i)
                      && (c = .00308 * D,
                        1 !== L && 4 !== L || (c *= K(g * a * E * 2) * P / 512 + .5),
                        c = 1.5 * K(c),
                        s += c * n,
                        o = (1 - H / 255) * (t - n) - s,
                        n += c * o,
                        t = 4 === L ? n : 3 === L ? o : s,
                        L || (t = (t *= 22e-5) < 1 ? -1 < t ? K(t / 4 * E * 2) : -1 : 1, t /= 22e-5),
                        t *= Q / 32,
                        i = 1e-5 < t * t,
                        o = K(v * a) * B / 512 + .5,
                        e = t * (1 - o),
                        t *= o),
                      a < d || (e += f[1 + a - d] * q / 255, t += f[a - d] * q / 255),
                      X[b + a] += f[a] = e,
                      ++a,
                      X[b + a] += f[a] = t;
                  }
                }
              }
              b += 768 * h;
            },
            l = [
              [
                "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
                "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
                "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
                "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
                "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
                "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
              ],
              [
                ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
                "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
                ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
                "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
                "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
                "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
              ],
              ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
              ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
              ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
            ][L],
            [A, I, M, Y, C, F, j, k, S, t, T, a, D, H, Q, B, r, q, O, P] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][L],
            R = 4 * t ** 2;
          e(5513), e(4562), e(3891), I1(++L < 5 ? n : s);
        };
      I1(n);
    })(() => {
      I1(() => {
        let t = 0,
          l = [],
          s = [],
          n = [],
          o = [],
          c = new Int32Array(8),
          i = new Map(),
          r = e => {
            let { x: t, y: a, z: l } = f[e], r = (m[0] = t, m[1] = a, m[2] = l, i.get(e = "" + (f.D ? h : c)));
            return void 0 !== r
              ? (t = 3 * r, o[t] = (o[t++] + c[5]) / 2, o[t] = (o[t++] + c[6]) / 2, o[t] = (o[t] + c[7]) / 2)
              : (i.set(e, r = i.size), s.push(t, a, l, m[3]), n.push(c[4]), o.push(c[5], c[6], c[7])),
              r;
          },
          f,
          h = new Int32Array(c.buffer, 0, 5),
          m = new Float32Array(c.buffer);
        for (let e of w) {
          for (f of (m[3] = 40 === e.H ? -14 : e.G && e.H, e.s)) {
            let { x: e, y: t, z: a } = c1(f);
            c[4] = 0 | f.A, c[5] = 32767 * e, c[6] = 32767 * t, c[7] = 32767 * a;
            for (let e = 2, t = r(0), a = r(1); f.length > e; ++e) l.push(t, a, a = r(e));
          }
          e.s = null, e.v = t, e.F = t = l.length;
        }
        _.b11(34962, _.c1b()),
          _.b2v(34962, new Float32Array(s), 35044),
          _.v7s(0, 4, 5126, !1, 0, 0),
          _.b11(34962, _.c1b()),
          _.b2v(34962, new Int16Array(o), 35044),
          _.v7s(1, 3, 5122, !0, 0, 0),
          _.b11(34962, _.c1b()),
          _.b2v(34962, new Uint32Array(n), 35044),
          _.v7s(2, 4, 5121, !0, 0, 0),
          _.b11(34963, _.c1b()),
          _.b2v(34963, new Uint16Array(l), 35044),
          _.e3x(0),
          _.e3x(1),
          _.e3x(2),
          I1(a);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.I);
          B.map((e, t) => e.g = e.i = e.l = t ? 0 | a[t] : 0), a1.map((e, t) => e.l = 0 | l[t]), $ = e, T = t, x = r;
        } catch {}
        e1 = X($);
      });
      let t = v(11, e => R.translate(K(e / 10 * E), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        c = v(10, e => r(h1(m1(18), t[e]).reverse(), h1(m1(18), t[e + 1]), 1)).flat();
      g(() => p([k.slice(1)], R.translate(-2).scale3d(3).rotate(90, 0)), 0),
        g(() => {
          let e = (t, a, l) =>
              g(e => {
                e.h = () => R.translate(r() * K(3 * t + T * t) * a),
                  k.map(({ x: e, z: t }) => {
                    p(h(11, 1), R.translate(4 * e, 4, l + 4 * t).scale(.8, 3, .8), I(.5, .3, .7, .6)),
                      p(h(), R.translate(4 * e, 7, l + 4 * t).scale(1, .3), I(.5, .5, .5, .3));
                  }),
                  p(u(
                    f(h(), R.translate(0, 0, l).scale(5, 1, 5), I(.8, .8, .8, .3)),
                    ...[-1, 1].map(e =>
                      f(h(), R.translate(5 * e, .2, l).rotate(-30 * e).scale(4, 1, 2), I(.8, .8, .8, .3))
                    ),
                  )),
                  p(h(), R.translate(0, -3, l).scale(8, 2, 8), I(.4, .4, .4, .3));
              }),
            t = (e, t, a) =>
              R.translate(e + K(T + 2) / 5, t + K(.8 * T) / 3, a).rotateSelf(2 * K(T), K(.7 * T), K(.9 * T)),
            a = e =>
              u(
                f(h(), R.translate(0, -e / 2).scale(6, e - 1, 2.2)),
                f(h(), R.translate(0, -e / 2 - 6).scale(4, e - 3, 4)),
                f(h(32, 1), R.translate(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            r = () => {
              let e = B[2].i, t = 1 - B[4].i;
              return e < t ? e : t;
            },
            l = u(
              f(h(20, 1, 1.15, 1), R.translate(0, -3).scale(3.5, 1, 3.5), I(.7, .4, .25, .7)),
              f(h(20, 1, 1.3, 1), R.translate(0, -2.5).scale(2.6, 1, 3), I(.7, .4, .25, .2)),
              f(h(), R.translate(4, -1.2).scale3d(2), I(.7, .4, .25, .3)),
            ),
            s = v(7, e => f(h(6, 1), R.translate(4 * (e / 6 - .5), 3).scale(.2, 3, .2), I(.3, .3, .38))).flat(),
            n = (g(e => {
              e.h = () => t(-12, 4.2, 40 * e1 - 66), p(l), b(R.translate(0, -3, 4));
            }),
              b(R.translate(-5.4, 1.5, -19).rotate(0, -90)),
              A(R.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              A(
                R.translate(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...m1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * U(e)]),
              ),
              p(h(), R.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), I(.8, .8, .8, .2)),
              k.map(({ x: e, z: t }) => p(h(6), R.translate(3 * e, 3, 15 * t).scale(.7, 4, .7), I(.6, .3, .3, .4))),
              [-23, 22].map(e => p(h(), R.translate(0, 0, e).scale(3, 1, 8), I(.9, .9, .9, .2))),
              [-15, 15].map((t, a) => {
                p(h(), R.translate(0, 6.3, t).scale(4, .3, 1), I(.3, .3, .3, .4)),
                  p(h(), R.translate(0, 1, t).scale(3, .2, .35), I(.5, .5, .5, .3)),
                  g(e => {
                    e.h = () => R.translate(0, 0, t).scale(1, X(1.22 - B[a + 1].g), 1), p(s);
                  });
              }),
              v(5, t =>
                v(2, e =>
                  p(
                    c,
                    R.translate(18.5 * (e - .5), 0, 4.8 * t - 9.5).rotate(0, 180 - 180 * e).scale(1.2, 10, 1.2),
                    I(1, 1, .8, .2),
                  ))),
              p(h(), R.translate(3, 1.5, -20).scale(.5, 2, 5), I(.7, .7, .7, .2)),
              p(h(), R.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), I(.75, .75, .75, .2)),
              p(h(5), R.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), I(.6, .3, .3, .4)),
              p(h(), R.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), I(.8, .2, .2, .5)),
              p(u(
                m(
                  f(h(6, 0, 0, .3), R.translate(8, -3, -4).scale(13, 1, 13), I(.7, .7, .7, .2)),
                  f(h(6), R.translate(0, -8).scale(9, 8, 8), I(.4, .2, .5, .5)),
                  f(h(6, 0, 0, .3), R.translate(0, -.92).scale(13, 2, 13), I(.8, .8, .8, .2)),
                ),
                f(h(5), R.scale(5, 30, 5), I(.4, .2, .6, .5)),
                f(h(5, 0, 1.5), R.translate(0, 1).scale(4.5, .3, 4.5), I(.7, .5, .9, .2)),
                f(h(), R.rotate(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), I(.5, .5, .5, .5)),
                f(h(6), R.translate(15, -1.5, 4).scale(3.5, 1, 3.5), I(.5, .5, .5, .5)),
              )),
              g(e => {
                e.h = () =>
                  R.translate(
                    0,
                    .01 < B[3].g ? (5 * J(1.5 * T) + 2) * B[3].i * (1 - B[2].g) + -15 * (1 - B[3].g) : -500,
                    0,
                  ),
                  p(h(5), R.translate(0, -.2).scale(5, 1, 5), I(.6, .65, .7, .3)),
                  b(R.translate(0, 1.2));
              }),
              b(R.translate(15, -2, 4)),
              e(.7, 12, 35),
              e(1, 8.2, 55),
              g(e => {
                e.h = () => R.translate(r() * K(T / 1.5 + 2) * 12),
                  p(
                    u(
                      m(
                        f(h(), R.scale(1.5, 1, 5), I(.9, .9, .9, .2)),
                        f(h(6), R.scale(4, 1, 5), I(.9, .9, .9, .2)),
                        f(h(), R.translate(0, -2).scale(2, 3.2, 1.9), I(.3, .8, .5, .5)),
                        f(h(16, 1, 0, 4), R.scale(1, 1, 1.5).rotate(0, 90), I(.9, .9, .9, .2)),
                      ),
                      f(h(), R.scale(1.3, 10, 1.3), I(.2, .7, .4, .6)),
                    ),
                    R.translate(0, 0, 45),
                  ),
                  A(R.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              p(h(), R.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), I(.9, .9, .9, .2)),
              g(e => {
                e.h = () => R.translate(9.8 * (1 - r())),
                  p(h(3), R.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), I(.3, .6, .6, .2)),
                  p(h(8), R.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), I(.8, .8, .8, .2)),
                  p(h(), R.translate(-23, -3, 55).scale(5.2, 1.7, 3), I(.5, .5, .5, .3)),
                  p(h(), R.translate(-23, -2.2, 62).scale(3, 1, 4), I(.5, .5, .5, .3)),
                  b(R.translate(-23, -.5, 66.5));
              }),
              g(e => {
                e.h = () => R.translate(0, X(1 - 5 * r()) * i(B[4].g, B[5].g) * K(1.35 * T) * 4),
                  p(h(), R.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), I(.7, .7, .7, .2)),
                  p(
                    u(f(h(), R.scale(3, 1.4, 2.7)), f(h(), R.scale(1.2, 8, 1.2))),
                    R.translate(-33, -3, 55),
                    I(.7, .7, .7, .2),
                  );
              }),
              g(e => {
                e.h = () => R.translate(0, 0, X(1 - 5 * r()) * i(B[4].g, B[5].g) * K(.9 * T) * 8),
                  p(u(
                    f(h(), R.translate(-27, -3, 55).scale(3, 1.4, 2.7), I(.9, .9, .9, .2)),
                    f(h(), R.translate(-27, -3, 55).scale(1, 3), I(.9, .9, .9, .2)),
                  )),
                  p(h(), R.translate(-39, -3, 55).scale(3, 1.4, 2.7), I(.9, .9, .9, .2));
              }),
              g(e => {
                e.h = () => R.translate(0, -6.5 * B[4].i),
                  p(
                    h(6),
                    R.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9),
                    I(.7, .7, .7, .4),
                  );
              }),
              b(R.translate(-55, -1.1, 46).rotate(0, 90)),
              p(h(6), R.translate(-61.3, -2.4, 49).scale(3, 1, 5), I(.4, .6, .6, .3)),
              p(h(7), R.translate(-57, -2.6, 46).scale(4, 1, 4), I(.8, .8, .8, .3)),
              [
                ...f(h(), R.translate(0, -3).scale(11, 1.4, 3), I(.9, .9, .9, .2)),
                ...u(
                  f(h(6), R.rotate(90).scale(6, 8, 6), I(.3, .6, .6, .3)),
                  f(h(4, 0, .01), R.translate(0, 6).scale(12, 2, .75).rotate(0, 45), I(.3, .6, .6, .3)),
                  f(h(6), R.rotate(90).scale(5, 12, 5), I(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e =>
                    f(h(5), R.translate(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), I(.3, .6, .6, .3))
                  ),
                ),
              ]),
            o = (p(n, R.translate(-53, 0, 55)),
              g(e => {
                e.h = () => R.translate(-75, (1 - B[5].i) * (1 - B[6].g) * 3, 55).rotate(180 * (1 - B[5].i) + j, 0),
                  p(n);
              }, 2),
              p(h(), R.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), I(.7, .7, .7, .2)),
              p(h(3, 0, -.5), R.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), I(.8, .8, .8, .2)),
              p(u(
                m(
                  f(h(), R.translate(-100, -2.5, 55).scale(8, 1, 8), I(.8, .8, .8, .2)),
                  f(h(), R.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), I(.8, .8, .8, .2)),
                  f(h(), R.translate(-100, -2.6, 70).scale(3, 1.1, 7), I(.8, .8, .8, .2)),
                  f(h(), R.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), I(.8, .8, .8, .2)),
                  f(h(6), R.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), I(.6, .6, .6, .3)),
                  f(h(), R.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), I(.8, .8, .8, .2)),
                  f(h(), R.translate(-100, .42, 92).scale(3, 1.1, 4.1), I(.8, .8, .8, .2)),
                ),
                f(h(8), R.translate(-100, -1, 55).scale(7, .9, 7), I(.3, .3, .3, .4)),
                f(h(8), R.translate(-100, -2, 55).scale(4, .3, 4), I(.4, .4, .4, .5)),
                f(h(8), R.translate(-100, -3, 55).scale(.6, 1, .6), I(.4, .4, .4, .5)),
              )),
              A(R.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              A(R.translate(-89, .2, 80), [0, 0, 6]),
              p(u(
                f(h(), R.translate(-100, 1, 63).scale(7.5, 4), I(.5, .5, .5, .4)),
                f(h(), R.translate(-100, 0, 70).scale(2, 2, 10), I(.5, .5, .5, .4)),
                f(h(20, 1), R.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), I(.5, .5, .5, .4)),
              )),
              g(e => {
                e.h = () => R.translate(-99.7, -1.9, 63.5).scale(1, X(1.1 - B[6].g), 1), p(s);
              }),
              k.map(({ x: t, z: a }) => {
                p(h(6), R.translate(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), I(.6, .15, .15, .8)),
                  [4, -.4].map(e =>
                    p(h(6), R.translate(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), I(.4, .2, .2, .8))
                  );
              }),
              v(7, e => {
                p(
                  h((23 * e + 1) % 5 + 5, 0, .55),
                  R.translate(5 * K(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  I(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              p(h(), R.translate(-87, -9.5, 24).scale(7, 1, 3), I(.4, .5, .6, .4)),
              p(h(4), R.translate(-86, -9.2, 27).scale(5, 1, 5), I(.5, .6, .7, .3)),
              p(h(12, 1), R.translate(-86, -9, 31).scale(1.5, 1, 1.5), I(.3, .3, .4, .1)),
              b(R.translate(-86, -7.5, 31)),
              g(e => {
                e.h = () => R.translate(0, 3.5 * (1 - L(B[6].g, B[7].g)) + i(B[7].i, B[6].i) * K(T) * 5),
                  [0, 12, 24].map(e =>
                    p(h(), R.translate(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), I(.2, .5, .6, .2))
                  );
              }),
              g(e => {
                e.h = () => R.translate(0, i(B[7].i, B[6].i) * K(T + 3) * 6, 6 * K(.6 * T + 1) * i(B[7].i, B[6].i)),
                  [6, 18].map(e =>
                    p(h(), R.translate(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), I(.1, .4, .5, .2))
                  );
              }),
              p(
                u(
                  m(
                    f(h(5), R.translate(0, 0, -7).scale(2, 1.2, 2), I(.2, .4, .7, .3)),
                    f(h(5), R.scale(9, 1.2, 9), I(0, .2, .3, .5)),
                    f(h(), R.scale(11, 1, 13), I(.3, .4, .6, .3)),
                  ),
                  f(h(5), R.scale(5.4, 5, 5.4), I(0, .2, .3, .5)),
                ),
                R.translate(-38.9, -11.3, 17),
              ),
              b(R.translate(-38.9, -9.6, 10)),
              g(e => {
                e.h = () => R.translate(0, -7.3 * B[7].i),
                  p(
                    u(
                      m(
                        f(h(5), R.translate(0, 2).scale(5, 7, 5).skewY(8), I(.2, .4, .5, .5)),
                        f(h(5), R.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), I(.25, .35, .5, .5)),
                        f(h(5), R.translate(0, 9).scale(.6, 7, .6).skewY(8), I(.35, .3, .5, .5)),
                      ),
                      f(h(5), R.scale(4, 8, 4), I(.2, .4, .5, .5)),
                      f(h(5), R.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), I(.2, .4, .5, .5)),
                    ),
                    R.translate(-38.9, -11.3, 17),
                  ),
                  A(R.translate(-39.1, -.6, 17).rotate(11), ...m1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              k.map(({ x: t, z: a }) => {
                p(h(14, 1), R.translate(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), I(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    p(
                      h(17, 1),
                      R.translate(9 * t - 38.9, -7.3, 11 * a + 17).translate(0, e - 4).scale(1.5, .5, 1.5),
                      I(.6, .6, .6, .3),
                    )
                  );
              }),
              p(
                u(
                  m(
                    f(h(6), R.translate(0, 0, -36).scale(15, 1.2, 15), I(.7, .7, .7, .3)),
                    f(h(), R.translate(0, 0, -18).scale(4, 1.2, 6), I(.45, .4, .6, .3)),
                  ),
                  ...v(6, t =>
                    v(6, e =>
                      f(
                        h(6),
                        R.translate(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * K(4 * e)).scale(2, 5, 2),
                        I(.7, .7, .7, .3),
                      ))).flat(),
                ),
                R.translate(-38.9, -11.3, 17),
              ),
              A(R.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              p(h(5), R.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), I(.8, .1, .25, .4)),
              b(R.translate(-84, -.5, 85).rotate(0, 45)),
              g(e => {
                e.h = () => t(-123, 1.4, 55 + -65 * x), p(l), b(R.translate(0, -3, -4).rotate(0, 180));
              }),
              u(
                f(h(), R.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), I(.25, .25, .35, .3)),
                f(h(3), R.translate(0, 0, -5.5).scale(3, 2), I(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(e => f(h(), R.translate(e, -.5, 1).scale(.14, .3, 6.5), I(.7, .2, 0, .3))),
              ));
          g(e => {
            e.h = () => R.translate(0, -2, i(B[10].g, B[11].g) * U(K(1.1 * T)) * -8.5 + 10),
              v(2, e => p(o, R.translate(9 * e - 110 + (1 & e), 1.7, -12)));
          }),
            g(e => {
              e.h = () => R.translate(0, -2, i(B[10].g, B[11].g) * U(K(2.1 * T)) * -8.5 + 10),
                v(2, e => p(o, R.translate(9 * (e + 2) - 110 + (1 & e), 1.7, -12)));
            }),
            g(e => {
              e.h = () =>
                R.translate(
                  0,
                  -2,
                  -8.5 * L((1 - B[10].g) * (1 - i(B[10].g, B[11].g)), i(B[10].g, B[11].g) * U(K(1.5 * T))) + 10,
                ), v(3, e => p(o, R.translate(9 * e - 106, 1.7, -12)));
            }),
            p(
              u(
                m(
                  f(h(), R.translate(26.5, -1.6, 10).scale(20, 2.08, 3)),
                  f(h(), R.translate(26.5, -.6, 10).scale(19, 2, .5)),
                ),
                ...v(4, e => f(h(), R.translate(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...v(3, e => f(h(), R.translate(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              R.translate(-123, 0, -12),
              I(.5, .5, .6, .2),
            ),
            b(R.translate(-116, -1.4, -18).rotate(0, 180)),
            p(h(), R.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), I(.8, .8, .8, .2)),
            p(h(6), R.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), I(.6, .5, .7, .2)),
            p(h(), R.translate(-115.5, -17, -12).scale(.5, 15, 2.2), I(.6, .6, .6, .3)),
            p(h(8), R.translate(-114, -17, -2).scale(2, 15, 2), I(.6, .6, .6, .3)),
            p(h(8), R.translate(-79, -17, -2).scale(2, 15, 2), I(1, 1, 1, .3)),
            p(h(), R.translate(-77, -17, -50.5).scale(2.2, 15, .5), I(.6, .6, .6, .3)),
            v(3, e => {
              p(a(16), R.translate(12 * e - 109, -9, -12), I(.6, .6, .6, .3)),
                p(a(16), R.translate(-77, -9, -12 * e - 20).rotate(0, 90), I(.6, .6, .6, .3));
            }),
            p(u(
              f(h(12), R.translate(-77, -14.5, -12).scale(4, 17.5, 4), I(.7, .7, .7, .2)),
              f(h(), R.translate(-79, .1, -12).scale(3.5, 2, 1.3), I(.4, .5, .6, .2)),
              f(h(), R.translate(-77, .1, -14).scale(1.5, 2, 2), I(.4, .5, .6, .2)),
              f(h(12), R.translate(-77, 3.1, -12).scale(3, 5, 3), I(.4, .5, .6, .2)),
            )),
            p(h(), R.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), I(.6, .6, .6, .3)),
            p(h(9), R.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), I(.5, .5, .5, .3)),
            p(u(
              f(h(), R.translate(-93, -5.8, -40).scale(9, 1, 5), I(.8, .8, .8, .1)),
              f(h(9), R.translate(-98, -5.8, -40).scale(3, 8, 3), I(.7, .7, .7, .2)),
            )),
            b(R.translate(-98, -4.4, -40).rotate(0, 90)),
            A(R.translate(-115, .2, -12), [0, 0, 3.5]),
            A(R.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            p(u(
              m(
                f(h(6, 0, 0, .6), R.translate(-100, .7, 105.5).scale(8, 1, 11), I(.7, .7, .7, .2)),
                f(h(), R.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), I(.7, .7, .7, .2)),
              ),
              f(h(5), R.translate(-100, .7, 113).scale(4, 3, 4), I(.7, .7, .7, .2)),
            )),
            v(4, t =>
              g(e => {
                e.h = () => {
                  let e = i(B[8].i, B[12].i);
                  return R.translate(
                    (2 < t ? 2 * (1 - e) + e : 0) - 100,
                    e * K(1.3 * T + 1.7 * t) * (3 + t / 3) + .7,
                    115 + (1 & t ? -1 : 1) * (1 - B[8].i) * (1 - B[12].i) * -7
                      + (.05 < e ? e : .05) * J(1.3 * T + 7 * t) * (4 - 2 * (1 - t / 3)),
                  );
                },
                  p(
                    h(6),
                    R.translate(-14.6 - 4.8 * t - (2 < t ? 2 : 0), -t / 2.3, -21.5).scale(2.6, 1, 2.5),
                    I(.5 - t / 8, t / 12 + .5, .7, .3),
                  );
              })),
            g(e => {
              e.h = () => {
                let e = i(B[8].i, B[12].i);
                return R.translate(2.5 * (1 - e) - 139.7, -3 * (1 - B[8].g) + e * K(.8 * T) * -1 - 1.8, 93.5)
                  .rotateSelf(J(1.3 * T) * (3 * e + 3), 0);
              },
                p(u(f(h(10), R.scale(6, 2, 6), I(.1, .6, .5, .3)), f(h(10), R.scale(3.3, 6, 3.3), I(.1, .6, .5, .5)))),
                p(h(15, 1), R.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), I(.4, .4, .4, .3)),
                p(h(10), R.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), I(.3, .8, .7, .3)),
                p(h(5), R.translate(-7.5).rotate(0, 90).scale(1, 3), I(.5, .5, .5, .5)),
                b(R.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  p(c, R.rotate(90 * -e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), I(1, 1, .8, .2))
                ),
                A(R.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(t => {
              p(h(12, 1), R.translate(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), I(.6, .24, .2, .5)),
                [7.2, 1.5].map(e =>
                  p(h(15, 1), R.translate(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), I(.5, .24, .2, .4))
                ),
                p(c, R.translate(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), I(1, 1, .8)),
                p(
                  u(
                    f(h(), R.translate(-4 * t, 3.5, -.5).scale(4, 4, .7), I(.5, .5, .5, .4)),
                    f(h(), R.scale(3, 3, 10), I(.6, .24, .2, .5)),
                    f(h(28, 1), R.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), I(.6, .24, .2, .5)),
                    f(h(5), R.translate(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), I(.6, .24, .2, .5)),
                    f(h(5), R.translate(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), I(.6, .24, .2, .5)),
                  ),
                  R.translate(t - 100, .7, 97),
                );
            }),
            g(e => {
              e.h = () => R.translate(-100, .6, 96.5).scale(.88, 1.2 - B[12].g), p(s);
            }),
            p(u(
              f(h(), R.translate(-82.07, .8, 106).scale(11, .9, 2.2), I(.7, .7, .7, .1)),
              f(h(45, 1), R.translate(-81, .7, 106).scale3d(7.7), I(.7, .7, .7, .1)),
            )),
            g(e => {
              e.h = () => R.translate(-81, .6, 106).rotate(0, 40 + C),
                p(u(
                  f(h(45, 1), R.scale(7.5, 1, 7.5), I(.45, .45, .45, .2)),
                  f(h(), R.translate(0, 0, -5.5).scale(1.5, 3, 2.7), I(.45, .45, .45, .2)),
                )),
                p(h(8), R.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), I(.7, .7, .7, .1)),
                p(h(5), R.translate(0, 2).scale(1, 2), I(.3, .3, .3, .2)),
                A(R.translate(0, 3), ...m1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            g(e => {
              e.h = () => R.translate(-65.8, .8, 106).rotate(0, F),
                [-1, 1].map(e =>
                  p(
                    c,
                    R.rotate(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90),
                    I(1, 1, .8),
                  )
                ),
                p(u(
                  f(h(28, 1), R.translate(0, 2).scale(7.5, 1, 7.5), I(.35, 0, 0, .3)),
                  f(h(), R.scale(9, 5, 2), I(.3, 0, 0, .3)),
                )),
                p(f(h(28, 1), R.scale(7.5, 1, 7.5), I(.45, .45, .45, .2))),
                p(f(h(5), R.translate(0, 1).scale(1, .2), I(.3, .3, .3, .2)));
            }),
            g(e => {
              e.h = () => R.translate(-50.7, .8, 106).rotate(0, 180 - F),
                p(u(
                  f(h(28, 1), R.translate(0, 2).scale(7.5, 1, 7.5), I(.35, 0, 0, .3)),
                  f(h(), R.translate(7).scale(9, 5, 2), I(.3, 0, 0, .3)),
                  f(h(), R.translate(0, 0, 7).scale(2, 5, 9), I(.3, 0, 0, .3)),
                )),
                p(f(h(28, 1), R.scale(7.5, 1, 7.5), I(.45, .45, .45, .2))),
                p(f(h(5), R.translate(0, 1).scale(1, .2), I(.3, .3, .3, .2)));
            }),
            g(e => {
              e.h = () => R.translate(-50.7, .8, 91).rotate(0, 270 + F),
                p(u(
                  f(h(28, 1), R.translate(0, 2).scale(7.5, 1, 7.5), I(.35, 0, 0, .3)),
                  f(h(), R.translate(7).scale(9, 5, 2), I(.3, 0, 0, .3)),
                  f(h(), R.translate(0, 0, -7).scale(2, 5, 9), I(.3, 0, 0, .3)),
                )),
                p(f(h(28, 1), R.scale(7.5, 1, 7.5), I(.45, .45, .45, .2))),
                p(f(h(5), R.translate(0, 1).scale(1, .2), I(.3, .3, .3, .2)));
            }),
            p(h(), R.translate(-58, 1, 106).scale(2, .65, 2), I(.7, .7, .7, .2)),
            p(h(), R.translate(-50.7, 1, 99).scale(2, .65, 1), I(.7, .7, .7, .2)),
            p(h(), R.translate(-42, .4, 91).scale(5, 1, 2.5), I(.7, .7, .7, .3)),
            p(h(), R.translate(-34.2, .4, 91).scale(3, 1, 3), I(.7, .7, .7, .3)),
            b(R.translate(-34, 2.7, 96).rotate(-12, 0)),
            p(h(5), R.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), I(.2, .5, .5, .6)),
            [I(.1, .55, .45, .2), I(.2, .5, .5, .3), I(.3, .45, .55, .4)].map((t, a) =>
              g(e => {
                e.h = () =>
                  R.translate(
                    0,
                    (1 - B[13].i) * (1 - B[14].i) * (a ? 0 : 3) + i(B[13].i, B[14].i) * K(1.5 * T + 1.5 * a) * 4,
                  ),
                  p(h(), R.translate(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), t),
                  2 === a && p(h(), R.translate(-29.1, .4, 91).scale(2.1, 1, 3), I(.7, .7, .7, .3)),
                  1 === a
                  && p(h(), R.translate(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), I(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => p(c, R.translate(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), I(1, 1, .8))),
            v(3, e =>
              p(
                a(24.7 - .7 * (1 & e)),
                R.translate(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? I(.5, .5, .5, .3) : I(.35, .35, .35, .5),
              )),
            p(u(
              f(h(6, 0, 0, .3), R.translate(0, -.92, 95).scale(14, 2, 14), I(.8, .8, .8, .2)),
              f(h(5), R.translate(0, 0, 95).scale3d(6), I(.3, .3, .3, .5)),
            )),
            b(R.translate(0, 1.7, 82).rotate(0, 180)),
            p(h(5), R.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), I(.5, .3, .3, .4)),
            p(h(6), R.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), I(.5, .6, .7, .3)),
            p(h(), R.translate(0, 16, 129).scale(1.5, 1, 2), I(.5, .6, .7, .3)),
            p(h(7), R.translate(0, 16.2, 133).scale(5, 1, 5), I(.4, .5, .6, .4)),
            p(u(
              m(
                f(h(), R.translate(0, 16, 110.5).scale(12, 1, 3), I(.5, .3, .3, .4)),
                f(h(), R.translate(0, 16, 111).scale(3, 1, 3.8), I(.5, .3, .3, .4)),
              ),
              f(h(5), R.translate(0, 16, 103.5).scale(5.5, 5, 5.5), I(.5, .3, .3, .4)),
            )),
            g(e => {
              e.h = () => {
                let e = K(T);
                return R.translate(-2 * e).rotate(25 * e);
              },
                p(h(3), R.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), I(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  p(h(6), R.translate(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), I(.7, .7, .7, .4)),
                    p(h(), R.translate(0, 6.2, e + 95).scale(.5, 11, .5), I(.5, .3, .3, .4));
                });
            }),
            g(e => {
              e.h = () => {
                let e = i(i((B[14].g + B[14].i) / 2, B[13].i), (B[15].g + B[15].i) / 2);
                return R.translate(0, 16 * e, 8.5 * X(2 * e - 1) + 95);
              },
                p(h(5), R.scale(5, 1.1, 5), I(.5, .3, .3, .4)),
                p(h(5), R.scale(5.5, .9, 5.5), I(.25, .25, .25, .4)),
                b(R.translate(0, 1.5, -1).rotate(0, 180));
            }),
            A(R.translate(0, 3, 95), ...m1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            A(R.translate(0, 19, 134), [0, 0, 3.5]);
        }),
        g(() => {
          [0, 180].map(e => p(c, R.rotate(0, e).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), I(1, 1, .8))),
            p(n(20), R.translate(0, 1).scale(.5, .5, .5), I(1, .3, .4));
          let t = f(
            u(h(15, 1), f(h(), R.translate(0, 0, 1).scale(2, 2, .5))),
            R.rotate(-90, 0).scale(.1, .05, .1),
            I(.3, .3, .3),
          );
          [-1, 1].map(e => p(t, R.translate(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e))),
            p(h(), R.translate(0, .9, .45).scale(.15, .02, .06), I(.3, .3, .3)),
            p(n(20), R.scale(.7, .8, .55), I(1, .3, .4));
        }),
        [-1, 1].map(e =>
          g(() => {
            p(h(10, 1), R.translate(.3 * e, -.8).scale(.2, .7, .24), I(1, .3, .4));
          })
        ),
        g(() => {
          p(h(6, 1), R.scale(.13, 1.4, .13), I(.3, .3, .5, .1)),
            p(h(10), R.translate(0, 1).scale(.21, .3, .21), I(1, .5, .2)),
            p(h(3), R.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), I(.2, .2, .2, .1));
        }, 0),
        g(() => {
          p(h(6).slice(0, -1), R.scale(.77, 1, .77), I(1, .3, .5));
        }, 0),
        g(() => {
          p(
            n(30, 24, (e, t, a) => {
              let l = t / 24, r = e * E * 2 / 30, s = l ** .6 * E / 2;
              return e = l * l * K(e * E * 14 / 30) / 4,
                23 === t
                  ? { x: a.D = 0, y: -.5, z: 0 }
                  : { x: J(r) * K(s), y: J(l * E) - l - e, z: K(r) * K(s) + K(e * E * 2) / 4 };
            }),
            R.scale3d(.7),
            I(1, 1, 1),
          ), [-1, 1].map(e => p(n(12), R.translate(.16 * e, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
