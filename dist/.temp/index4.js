let D,
  T,
  O,
  I,
  j,
  Y,
  C,
  k,
  B,
  F,
  G,
  Z,
  $,
  e1,
  a1,
  t1,
  s,
  l1,
  r1,
  s1,
  x,
  c1,
  y,
  Q = 0,
  o1 = 0,
  R = 0,
  i1 = 0,
  n1 = 0,
  f1 = 0,
  m1 = 0,
  h1 = 0,
  u1 = 0,
  X = 0,
  q = 0,
  H = 0,
  v1 = 14,
  g1 = 180,
  x1 = .1,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  y1 = [],
  N = [],
  L = [],
  d = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  { PI: W, atan2: d1, sin: w, cos: z, exp: a, random: p1 } = Math,
  E = e => e < 0 ? -e : e,
  w1 = (e, a) => e < a ? e : a,
  z1 = (e, a) => a < e ? e : a,
  S1 = (e, a) => E(e) > a ? e : 0,
  U = (e, a = 0, t = 1) => e < a ? a : t < e ? t : e,
  A1 = e => d1(w(e * Z1), z(e * Z1)) / Z1,
  M1 = (e, a, t) => e + (2 * (a = (a - e) % 360) % 360 - a) * U(t) || 0,
  I1 = (e, a, t) => (0 < t ? t < 1 ? e + (a - e) * t : a : e) || 0,
  j1 = (e, a) => (e = U(e), I1(e, 1 - e, a)),
  Y1 = (e, a, t = 0) => (e * e + a * a + t * t) ** .5,
  K = (e = 0, a = 0, t = 0, l = 1) => {
    D = b.m11 * e + b.m21 * a + b.m31 * t + b.m41 * l,
      T = b.m12 * e + b.m22 * a + b.m32 * t + b.m42 * l,
      O = b.m13 * e + b.m23 * a + b.m33 * t + b.m43 * l,
      I = b.m14 * e + b.m24 * a + b.m34 * t + b.m44 * l;
  },
  p = (
    e,
    a = l,
    t = 0,
  ) => (t *= 16,
    a[t++] = e.m11,
    a[t++] = e.m12,
    a[t++] = e.m13,
    a[t++] = e.m14,
    a[t++] = e.m21,
    a[t++] = e.m22,
    a[t++] = e.m23,
    a[t++] = e.m24,
    a[t++] = e.m31,
    a[t++] = e.m32,
    a[t++] = e.m33,
    a[t++] = e.m34,
    a[t++] = e.m41,
    a[t++] = e.m42,
    a[t++] = e.m43,
    a[t] = e.m44,
    a),
  P = (
    e = S,
    a = b,
  ) => (a.m11 = e.m11,
    a.m12 = e.m12,
    a.m13 = e.m13,
    a.m14 = e.m14,
    a.m21 = e.m21,
    a.m22 = e.m22,
    a.m23 = e.m23,
    a.m24 = e.m24,
    a.m31 = e.m31,
    a.m32 = e.m32,
    a.m33 = e.m33,
    a.m34 = e.m34,
    a.m41 = e.m41,
    a.m42 = e.m42,
    a.m43 = e.m43,
    a.m44 = e.m44,
    a),
  c = (e, a, t) => S.translate(e, a, t),
  n = (e, t) => Array.from(Array(e), (e, a) => t(a)),
  v = (e, a, t) => (e.C = t, e.u = a, e),
  C1 = (e, a, t = e.u) => (P(a), v(e.map(({ x: e, y: a, z: t }) => (K(e, a, t), { x: D, y: T, z: O })), t, e.C)),
  o = (e, a, t) => e.map(e => C1(e, a, t)),
  k1 = (t, l = 0) =>
    n(t, e => {
      let a = z(2 * W * e / t);
      return { x: w(2 * W * e / t), y: 0, z: E(a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  F1 = (l, r, s) =>
    l.map((e, a, { length: t }) => v([e, r[t - a - 1], r[t - (a + 1) % t - 1], l[(a + 1) % t]], l.u, s)),
  i = (
    e,
    a,
    t = 0,
    l,
  ) => (e = e ? k1(e, l) : d,
    l = C1(e, c(0, 1).scale3d(0 < t ? t : 1)),
    e = C1(e, c(0, -1).scale3d(t < 0 ? -t : 1)).reverse(),
    [...F1(e, l, a), l, e]),
  D1 = (l, r = l, s = (e, a) => (a *= W / r, { x: z(e *= 2 * W / l) * w(a), y: z(a), z: w(e) * w(a) })) => {
    let c = [];
    for (let t = 0; l > t; t++) {
      for (let a = 0; r > a; a++) {
        let e = v([], 0, 1);
        c.push(e),
          e.push(s(t, a, e)),
          a && e.push(s((t + 1) % l, a, e)),
          r - 1 > a && e.push(s((t + 1) % l, a + 1 % r, e)),
          e.push(s(t, a + 1 % r, e));
      }
    }
    return c;
  },
  T1 = e => 1 - a(-R * e),
  V = (e, a, t) => I1(e, a, T1(t)),
  O1 = (e, a, t, l) =>
    new DOMMatrix([t, 0, 0, 0, 0, l, 0, 0, 0, 0, (a + e) / (e - a), -1, 0, 0, 2 * a * e / (e - a), 0]),
  B1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  Q1 = e => w(e * W * 2),
  R1 = (e, a) => {
    1 / 0 > x1 && (x1 = Q + a, h4.innerHTML = e);
  },
  X1 = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        $ = y1.reduce((e, a) => e + a.i, 0)
      ] + " / XIII";
  },
  q1 = () => {
    localStorage.F = JSON.stringify([N.map(e => e.i), y1.map(e => e.i), v1, t1, Q]);
  },
  f = (e, a, t, l = 0) => 255 * l << 24 | 255 * t << 16 | 255 * a << 8 | 255 * e,
  m = () => {
    let l = [];
    s = (e, a = new DOMMatrix(), t) => l.push(...o(e, a, t)), L.push({ m: new DOMMatrix(), o: l });
  },
  h = e => {
    let a = () => {
        a.g = V(a.g, a.i, 4),
          a.h = V(a.h, a.i, 1),
          P(t).multiplySelf(e),
          k && (K(), Y1(X - D, q - T, H - O) < 3)
            ? a.i
              ? .7 < a.g && (a.i = 0, v1 = l, R1("* click *", 1), q1())
              : a.g < .3 && (a.i = 1, v1 = l, R1("* click *", 1), q1())
            : a.i && .8 < a.g && 14 === l && (a.i = 0,
              $ < 13
                ? R1("Not leaving now, there are souls to catch!", 3)
                : e1 || (R1("Well done. They will be punished.<br>Thanks for playing", 1 / 0), e1 = 1)),
          b.rotateSelf(50 * a.g - 25, 0).translateSelf(0, 1).m44 = a.g;
      },
      t = L.at(-1).m,
      l = N.length;
    a.m = t,
      a.G = e,
      N.push(a),
      s(i(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), f(.4, .5, .5)),
      s(i(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), f(.4, .5, .5)),
      s(i(), e.translate(0, -.4).scale(.5, .1, .5), f(.5, .5, .4));
  },
  u = (o, ...i) => {
    let n,
      f,
      m,
      h,
      u = 0,
      v = 0,
      g = 1,
      d = -1,
      p = () => {
        if (!p.i) {
          let l, e, a, t, r, s = 1, c = 1 / 0;
          for (let t = 0; i.length > t; t++) {
            let e = i[t], a = Y1(S - e[0], A - e[1]);
            s = w1(s, a / e[2]), (a -= e[2]) < 0 ? l = 1 : c > a && (c = a, b = e);
          }
          l
          || (e = S - b[0],
            a = A - b[1],
            t = Y1(e, a),
            r = d1(-a, e),
            g && (h = U(h / (1 + p1())), v = (p1() - .5) * W / 2),
            r += v,
            d = -z(r),
            u = w(r),
            .1 < t && (t = w1(t, b[2]) / t, S = e * t + b[0], A = a * t + b[1])),
            g = l,
            h = V(h, 3 + 6 * (1 - s), 3 + s),
            M = V(M, S = V(S, S + d, h), h),
            I = V(I, A = V(A, A + u, h), h),
            n = M1(n, d1(M - f, I - m) / Z1 - 180, T1(3)),
            P(j).multiplySelf(o).translateSelf(f = M, 0, m = I).rotateSelf(0, n, 7 * w(1.7 * Q)),
            K(),
            Y1(X - D, q - T, H - O) < 1.6
            && (p.i = 1,
              R1(
                [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  "Giorgia Meloni<br>fascist",
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
                ][$] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                6,
              ),
              X1(),
              q1());
        }
        p.i
          && P(L[35].m).translateSelf(
            e % 4 * 1.2 - 1.7 + w(Q + e) / 7,
            -2,
            1.7 * (e / 4 | 0) - 5.5 + E(e % 4 - 2) + z(Q / 1.5 + e) / 6,
          );
      },
      b = i[0],
      [S, A] = b,
      [M, I] = b,
      j = L.at(-1).m,
      e = y1.length;
    y1.push(p);
  },
  H1 = ({ x: e, y: a, z: t }, l) => e * l.x + a * l.y + t * l.z,
  N1 = e => {
    let a, t = 0, l = 0, r = 0, s = e.at(-1);
    for (a of e) t += (s.y - a.y) * (s.z + a.z), l += (s.z - a.z) * (s.x + a.x), r += (s.x - a.x) * (s.y + a.y), s = a;
    return a = Y1(t, l, r), t /= a, l /= a, r /= a, { x: t, y: l, z: r, w: t * s.x + l * s.y + r * s.z };
  },
  L1 = (l, r) => {
    let s, c, o, i = r.B;
    for (let t = 0; i.length > t; ++t) {
      if ((o = H1(l, i[t]) - l.w) < -8e-5 ? c = r : 8e-5 < o && (s = r), c && s) {
        c = [], o = [];
        let { B: a, v: e } = r;
        i = a.at(-1), t = H1(l, i) - l.w;
        for (let e of a) {
          s = H1(l, e) - l.w,
            t < 8e-5 && o.push(i),
            -8e-5 < t && c.push(i),
            (8e-5 < t && s < -8e-5 || t < -8e-5 && 8e-5 < s)
            && (t /= s - t,
              i = { x: i.x + (i.x - e.x) * t, y: i.y + (i.y - e.y) * t, z: i.z + (i.z - e.z) * t },
              c.push(i),
              o.push(i)),
            i = e,
            t = s;
        }
        return {
          l: 2 < c.length && { B: v(c, a.u, a.C), v: e, A: r },
          j: 2 < o.length && { B: v(o, a.u, a.C), v: e, A: r },
        };
      }
    }
    return { l: s, j: c };
  },
  E1 = (e, a, t = N1(a.B)) => {
    let l, r;
    return e
      ? ({ l, j: r } = L1(e, a), l || r || e.o.push(a), l && (e.l = E1(e.l, l, t)), r && (e.j = E1(e.j, r, t)))
      : e = { x: t.x, y: t.y, z: t.z, w: t.w, o: [a], l: 0, j: 0 },
      e;
  },
  U1 = (a, r, s) => {
    let c = [],
      o = (e, a) => {
        let { l: t, j: l } = L1(e, a);
        t || l || (0 < s * H1(e, r) ? t = a : l = a), t && (e.l ? o(e.l, t) : c.push(t)), l && e.j && o(e.j, l);
      };
    for (let e of r.o) o(a, e);
    return c;
  },
  W1 = (e, a) => e && (a(e), W1(e.l, a), W1(e.j, a)),
  K1 = e => (W1(e, a => {
    let e = a.j;
    a.j = a.l, a.l = e, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let e of a.o) e.v = !e.v;
  }),
    e),
  P1 = e => e.length ? e.reduce((e, a) => E1(e, { B: a, v: 0, A: 0 }), 0) : e,
  V1 = (...e) =>
    e.reduce((l, a) => {
      let r = [];
      if (l = P1(l), a) {
        a = P1(a), W1(l, e => e.o = U1(a, e, 1)), W1(a, e => r.push([e, U1(l, e, -1)]));
        for (let [a, t] of r) for (let e of t) E1(l, e, a);
      }
      return l;
    }),
  g = (e, ...a) => {
    let t = e => {
        let a;
        return e.A && ((a = l.get(e.A)) ? (r.delete(a), e = t(e.A)) : l.set(e.A, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = K1(V1(K1(P1(e)), ...a)),
      W1(e, a => {
        for (let e of a.o) r.set(t(e), e.v);
      }),
      Array.from(r, ([{ B: e }, a]) => {
        let t = e.map(({ x: e, y: a, z: t }) => ({ x: e, y: a, z: t }));
        return v(a ? t.reverse() : t, e.u, e.C);
      });
  },
  _ = (e, a = 0, t = 0) => {
    let l = L[++l1].m;
    return P(S, l), l.m41 = e, l.m42 = a, l.m43 = t, l;
  },
  _1 = (e, a) => {
    let t;
    Y
      ? 1100 < hC.width && e.d97(4, L[39].D - L[37].s, 5123, 2 * L[37].s)
      : (t = void 0 === a ? 41 : 42,
        e.das(4, L[t].D - L[t].s, 5123, 2 * L[t].s, y1.length),
        e.das(4, L[40].D - L[40].s, 5123, 2 * L[40].s, N.length),
        e.d97(4, (a ? L[39].D : L[37].s) - 3, 5123, 6));
  },
  J1 = (t, e, a) => {
    let l = {}, r = (e, a = 35633) => (a = t.c6x(a), t.s3c(a, e), t.c6a(a), a), s = t.c1h();
    return t.abz(s, r(e, 35633)), t.abz(s, r(a, 35632)), t.l8l(s), e => e ? l[e] || (l[e] = t.gan(s, e)) : t.u7y(s);
  },
  b = new DOMMatrix(),
  S = new DOMMatrix(),
  l = new Float32Array(16),
  A = new Float32Array(760),
  G1 = new Uint8Array(65536),
  Z1 = W / 180,
  M = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  J = hD.getContext("webgl2", { powerPreference: "high-performance", preserveDrawingBuffer: !0, antialias: !1 });
for (let a in J) {
  [M, J].map(e => e[a[0] + [...a].reduce((e, a, t) => (e * t + a.charCodeAt(0)) % 434, 0).toString(36)] = e[a]);
}
B1(() => {
  let e = 0,
    v = () => {
      if (2 == ++e) {
        let l = a => {
            requestAnimationFrame(l);
            let e = (a - (j || a)) / 1e3;
            if (o1 += e, Q += R = Y ? 0 : w1(.055, e), j = a, 0 < R) {
              e = (e, a, t) => _(e + w(Q + 2) / 5, a + w(.8 * Q) / 5, t).rotateSelf(2 * w(Q), w(.7 * Q), w(.9 * Q)),
                x1 && Q > x1 && (x1 = 0, h4.innerHTML = ""),
                t1 = V(t1, N[15].h, .2 + .3 * E(2 * N[15].h - 1)),
                a1 = e1 ? (B = 0, V(a1, -9, .015)) : V(a1, U(Q / 3), 1),
                Z(),
                l1 = 1,
                s1 = j1(N[13].g, N[8].g),
                y = I1(V(y, 0, 1), A1(y + 60 * R), N[2].g - N[3].h),
                x = I1(V(x, 0, 5), A1(x + 56 * R), s1),
                c1 = I1(V(c1, 0, 4), A1(c1 + 48 * R), s1),
                _(0, 270 * (N[1].g - 1) + (2 + 5 * z(1.5 * Q)) * (1 - N[10].g)),
                a = w1(1 - N[11].h, N[10].h),
                _(a * w(.6 * Q + 1.2) * 12, 0, 35),
                _(a * w(.6 * Q - 1.2) * 8.2, 0, 55),
                _(a * w(.6 * Q) * 12, 0, 45),
                _(9.8 * (1 - a)),
                a = U(1 - 5 * a) * j1(N[11].g, N[2].g),
                _(0, a * w(1.35 * Q) * 4),
                _(0, 0, a * w(.9 * Q) * 8),
                _(0, -6.5 * N[11].h),
                a = j1(N[4].h, N[3].h),
                _(0, a * w(Q) * 5 + 3.5 * (1 - z1(N[3].g, N[4].g))),
                _(0, a * w(Q + 3) * 6, a * w(.6 * Q + 1) * 6),
                _(0, -7.3 * N[4].h),
                a = j1(N[6].g, N[7].g),
                _(0, -2, 10 - 8.5 * a * E(w(1.1 * Q))),
                _(0, -2, 10 - 8.5 * a * E(w(2.1 * Q))),
                _(0, -2, 10 - 8.5 * z1(a * E(w(1.5 * Q)), (1 - N[6].g) * (1 - a)));
              var t = j1(N[5].h, N[13].h);
              for (a = 0; a < 4; a++) {
                _(
                  (2 < a ? 2 * (1 - t) + t : 0) - 100,
                  t * w(1.3 * Q + 1.7 * a) * (3 + a / 3) + .7,
                  115 - 7 * (1 - N[5].h) * (1 - N[13].h) * (1 & a ? -1 : 1)
                    + z1(.05, t) * z(1.3 * Q + 7 * a) * (4 - 2 * (1 - a / 3)),
                );
              }
              a = j1(N[8].h, N[9].h);
              for (let e = 0; e < 3; ++e) {
                _(0, a * w(1.5 * Q + 1.5 * e) * 4 + (e ? 0 : 3 * (1 - N[8].h) * (1 - N[9].h)));
              }
              for (
                a = j1(j1((N[9].g + N[9].h) / 2, N[8].h), (N[12].g + N[12].h) / 2),
                  _(0, 16 * a, 95 + 8.5 * U(2 * a - 1)),
                  _(0, -4.7 * N[0].g, -15),
                  _(0, -4.7 * N[10].g, 15),
                  _(-99.7, -1.9 - 5.5 * N[3].g, 63.5),
                  _(-100, .6 - 5.8 * N[13].g, 96.5),
                  _(-75, 3 * (1 - N[2].h) * (1 - N[3].g), 55).rotateSelf(180 * (1 - N[2].h) + y, 0),
                  _(2.5 * (1 - t) - 139.7, -3 * (1 - N[5].g) - t * w(.8 * Q) - 1.8, 93.5).rotateSelf(
                    z(1.3 * Q) * (3 + 3 * t),
                    0,
                  ),
                  _(-2 * w(Q)).rotateSelf(25 * w(Q)),
                  _(-81, .6, 106).rotateSelf(0, 40 + x),
                  _(-65.8, .8, 106).rotateSelf(0, c1),
                  _(-50.7, .8, 106).rotateSelf(0, 180 - c1),
                  _(-50.7, .8, 91).rotateSelf(0, 270 + c1),
                  e(-12, 4.2, 40 * a1 - 66),
                  e(-123, 1.4, 55 - 65 * t1),
                  e = 0;
                e < 13;
                ++e
              ) {
                y1[e](), p(b, A, 12 + e);
              }
              for (e = 0; e < 16; ++e) N[e](), p(b, A, 25 + e);
              for (let e, a = 0, t = 656; a < 26; ++a, ++t) {
                e = L[2 + a].m, A[t++] = e.m41, A[t++] = e.m42, A[t++] = e.m43;
              }
              for (r1(), e = 0; e < 12; ++e) {
                p(L[28 + e].m, A, e);
              }
              J.cbf(!0, !0, !0, !0),
                J.c4s(16640),
                J.u3a(r("j"), A),
                J.cbf(!0, !1, !0, !1),
                J.uae(r("b"), !1, p(P().rotateSelf(0, 180).invertSelf().translateSelf(-X, -q, .3 - H))),
                _1(J),
                J.c4s(256),
                J.cbf(!1, !0, !1, !0),
                J.uae(r("b"), !1, p(P().translateSelf(-X, -q, -H - .3))),
                _1(J),
                J.f1s(),
                k = 0;
            }
            e = f1,
              t = m1,
              a = h1,
              Y
                ? (P(F).invertSelf(),
                  K(3.6, 3.5),
                  e = D,
                  t = T,
                  a = 5,
                  P(S, u).rotateSelf(-20, 0).invertSelf().translateSelf(-e, -t, -a).rotateSelf(0, 99),
                  P().rotateSelf(0, 40 * w(o1) - 80, -8),
                  p(b, A, 9),
                  p(b, A, 10),
                  p(b, A, 11))
                : P(S, u).rotateSelf(-u1, -g1).invertSelf().translateSelf(-e, -t, -a),
              d(),
              M.u3a(d("j"), A),
              M.ubu(d("k"), e, t, a),
              M.uae(d("a"), !1, p(S)),
              M.ubh(d("g"), 3),
              M.ubh(d("h"), 3),
              M.b6o(36160, i),
              M.v5y(0, 0, 2048, 2048),
              c(54.7),
              _1(M, !B),
              o(126),
              _1(M, !B),
              M.b6o(36160, null),
              M.v5y(0, 0, M.drawingBufferWidth, M.drawingBufferHeight),
              M.cbf(!0, !0, !0, !0),
              M.c4s(16640),
              M.uae(d("b"), !1, p(u)),
              M.uae(d("a"), !1, p(F)),
              M.uae(d("i"), !1, v),
              M.ubh(d("g"), 0),
              M.ubh(d("h"), 1),
              _1(M, !B),
              s(),
              M.uae(s("b"), !1, p(P(u).invertSelf())),
              M.ubu(s("j"), M.drawingBufferWidth, M.drawingBufferHeight, o1),
              M.d97(4, 3, 5123, 0);
          },
          h = new DOMMatrix(),
          u = new DOMMatrix(),
          v = new Float32Array(32),
          e = a,
          g = n(8, () => ({})),
          r = J1(
            J,
            `#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}`,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}`,
          ),
          d = J1(
            M,
            `#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}`,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          s = J1(
            M,
            `#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`,
            `#version 300 es
precision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}`,
          ),
          [c, o] = n(2, e => {
            let a = M.c25();
            return M.a4v(33984 + e),
              M.b9j(3553, a),
              M.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              M.t2z(3553, 10241, 9729),
              M.t2z(3553, 10240, 9729),
              M.t2z(3553, 34893, 515),
              M.t2z(3553, 34892, 34894),
              M.t2z(3553, 10243, 33071),
              M.t2z(3553, 10242, 33071),
              l => {
                let t = 0, r = 0, s = 0, c = 1 / 0, o = 1 / 0, i = 1 / 0, n = -1 / 0, f = -1 / 0, m = -1 / 0;
                M.fas(36160, 36096, 3553, a, 0),
                  M.c4s(256),
                  P().scale3dSelf(l *= 1.1).multiplySelf(P(G[e], h).multiplySelf(u).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = g[a];
                  K(4 & a ? 1 : -1, 2 & a ? 1 : -1, 1 & a ? 1 : -1),
                    t -= e.x = (0 | D) / l / I,
                    r -= e.y = (0 | T) / l / I,
                    s -= e.z = (0 | O) / l / I;
                }
                for (P().rotateSelf(298, 139).translateSelf(t / 8, r / 8, s / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: a, z: t } = g[l];
                  K(e, a, t), c = w1(c, D), n = z1(n, D), o = w1(o, T), f = z1(f, T), i = w1(i, O), m = z1(m, O);
                }
                l = 10 + e,
                  i *= i < 0 ? l : 1 / l,
                  m *= 0 < m ? l : 1 / l,
                  M.uae(
                    d("b"),
                    !1,
                    p(
                      P(S, h).scaleSelf(2 / (n - c), 2 / (f - o), 2 / (i - m)).translateSelf(
                        (n + c) / -2,
                        (f + o) / -2,
                        (i + m) / 2,
                      ).multiplySelf(b),
                      v,
                      e,
                    ),
                    16 * e,
                    16,
                  );
              };
          }),
          i = M.c5w();
        d(),
          M.ubh(d("q"), 2),
          s(),
          M.ubh(s("q"), 2),
          r(),
          J.uae(r("a"), !1, p(O1(1e-4, 2, 1.2, .4))),
          J.c5t(0, 0, 0, 0),
          J.v5y(0, 0, 128, 128),
          J.e8z(2929),
          J.e8z(2884),
          M.b6o(36160, i),
          M.d45([0]),
          M.r9l(0),
          M.a4v(33986),
          M.b9j(3553, M.c25()),
          M.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          M.t2z(3553, 10241, 9987),
          M.t2z(3553, 10240, 9729),
          M.gbn(3553),
          M.c5t(0, 0, 0, 1),
          M.e8z(2929),
          M.e8z(2884),
          M.d4n(515),
          (() => {
            let e,
              i,
              n,
              f,
              m,
              h,
              u,
              v,
              g,
              d,
              p,
              b,
              S,
              a,
              t,
              l,
              r = !0,
              s = [],
              c = () => {
                b4.innerHTML = "Music: " + r, l && (Y || !r ? l.disconnect() : l.connect(t.destination));
              },
              o = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                G = [O1(.3, 55, e, 1.732051), O1(55, 181, e, 1.732051)],
                  F = O1(.3, 181, e, 1.732051),
                  f = v = void 0,
                  s.length =
                    k =
                    a =
                    b =
                    S =
                    i1 =
                    n1 =
                      0,
                  document.hidden && A(!0);
              },
              A = e => {
                if (Y !== e) {
                  if (Y = e, o(), document.body.className = e ? "l m" : "l", e) {
                    try {
                      document.exitFullscreen().catch(() => 0), document.exitPointerLock();
                    } catch {}
                  }
                  c();
                }
              },
              M = e => {
                try {
                  t || (t = new AudioContext(), (l = t.createBufferSource()).buffer = C, l.loop = !0, l.start()),
                    document.body.requestFullscreen().catch(() => 0);
                } catch {}
                A(!1), B = e;
              },
              I = (e, a) => e.buttons[a]?.pressed || 0 < e.buttons[a]?.value ? 1 : 0;
            oncontextmenu = () => !1,
              b1.onclick = () => {
                M();
              },
              b2.onclick = () => {
                M(1);
              },
              b5.onclick = () => A(!0),
              b4.onclick = () => {
                r = !r, c();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.F = "", location.reload());
              },
              onclick = e => {
                if (!Y && (e.target === hC && (k = 1), B)) {
                  try {
                    hC.requestPointerLock();
                  } catch {}
                }
              },
              onkeyup = onkeydown = e => {
                let a;
                e.repeat
                  || (a = {
                    KeyE: 0,
                    Space: 0,
                    Enter: 0,
                    Escape: 1,
                    KeyA: 2,
                    ArrowLeft: 2,
                    KeyD: 3,
                    ArrowRight: 3,
                    KeyW: 4,
                    ArrowUp: 4,
                    KeyS: 5,
                    ArrowDown: 5,
                  }[e.code],
                    (s[a] = !!e.type[5] && !0) && (0 === a && (k = 1), 1 === a && A(!0)));
              },
              onmousemove = ({ movementX: e, movementY: a }) => {
                B && (e || a) && (g1 += .1 * e, u1 += .1 * a);
              },
              hC.ontouchstart = l => {
                if (!Y) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    B && e > hC.clientWidth / 2
                      ? void 0 === v && (g = 0, h = e, u = a, v = t, p = u1, d = g1)
                      : void 0 === f && (m = 0, i = e, n = a, f = t);
                  }
                  e = o1;
                }
              },
              hC.ontouchmove = l => {
                if (!Y) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    var r, s, c, o;
                    v === t && (u1 = p + (a - u) / 2.3, g1 = d + (e - h) / 2.3, g = 1),
                      f === t
                      && (t = (i - e) / 19,
                        r = E(t),
                        c = E(s = (n - a) / 19),
                        (o = .3 < z1(r, c)) && (m = 1),
                        b = (o && .2 < r) * U(t, -1),
                        S = (o && .2 < c) * U(s, -1),
                        2 < r && (i = 19 * (t < 0 ? -1 : 1) + e),
                        2 < c && (n = 19 * (s < 0 ? -1 : 1) + a));
                  }
                }
              },
              hC.ontouchend = a => {
                let t;
                document.activeElement === document.body && a.preventDefault();
                for (let e of a.changedTouches) {
                  e.identifier === v
                    ? (v = void 0, g || (t = 1), g = 0)
                    : e.identifier === f
                    ? (f = void 0, S = b = 0, m || (t = 1), m = 0)
                    : t = 1;
                }
                a.target === hC && t && e && .02 < (a = o1 - e) && a < .7 && (k = 1);
              },
              Z = () => {
                i1 = S + (s[4] ? 1 : 0) - (s[5] ? 1 : 0), n1 = b + (s[2] ? 1 : 0) - (s[3] ? 1 : 0);
                let e = navigator.getGamepads()[0];
                e
                  && (B && (u1 += R * S1(e.axes[3], .3) * 80, g1 += R * S1(e.axes[2], .3) * 80),
                    i1 += I(e, 12) - I(e, 13) - S1(e.axes[1], .2),
                    n1 += I(e, 14) - I(e, 15) - S1(e.axes[0], .2),
                    I(e, 9) && A(!0),
                    (e = I(e, 3) || I(e, 2) || I(e, 1) || I(e, 0)) && !a && (k = 1),
                    a = e);
              },
              document.onvisibilitychange = onblur = onresize = o,
              A(!0);
          })(),
          (() => {
            let s,
              c,
              o,
              i,
              n,
              f,
              m,
              h,
              u,
              v,
              g,
              d,
              p,
              b = 0,
              S = 0,
              A = 0,
              M = 0,
              I = 1,
              j = 2,
              Y = 15,
              C = () => P((j ? N[v1] : L[28 !== b ? b : 0]).m),
              k = e => {
                1 < j ? (P(N[v1].m).multiplySelf(N[v1].G), K(0, .9 < a1 ? 15 : 1, -2.4)) : (C(), K(S, A, M)),
                  e && (n = (D - X) / R, f = (O - H) / R),
                  X = D,
                  q = T,
                  H = O;
              },
              F = (e, a, t, l) => I1(e, a, I || (U(E(a - e) ** .5 - t) + 1 / 7) * T1(1.5 * l));
            r1 = () => {
              let e, a, t, l, r;
              for (
                k(v),
                  J.r9r(0, 0, 128, 128, 6408, 5121, G1),
                  (() => {
                    let a, t, l, r, s, c = 0, o = 0, i = 0, n = 0, e = 0, f = 0, m = -1;
                    for (a = 0; a < 36; ++a) {
                      for (t = 512 * a, l = 96; l < 416; l += 4) {
                        for (r = 0; r < 2; ++r) {
                          let e = G1[t + l + r + 2];
                          (s = G1[t + l + r]) > n && (n = s),
                            s + e && (m < 0 || m === a) && (m = a, e === v ? ++c : o && o !== e || (o = e, ++i));
                        }
                      }
                    }
                    for (v = m < 0 ? 0 : i > 2 * c ? o : v, c = 36; c < 128; ++c) {
                      for (
                        a =
                          m =
                          i =
                          o =
                            0,
                          t = 512 * c,
                          l = 0;
                        l < 128;
                        ++l
                      ) {
                        s = G1[r = t + 4 * l],
                          l < 64 ? s > o && (o = s) : s > i && (i = s),
                          (s = G1[2 + r]) > m && (m = s),
                          s = G1[1 + r],
                          64 < l ? s > o && (o = s) : s > i && (i = s),
                          (s = G1[3 + r]) > a && (a = s);
                      }
                      (i -= o) * i > e * e && (e = i), (a -= m) * a > f * f && (f = a);
                    }
                    e *= .7,
                      h = U(1 - .01 * z1(E(e), E(f)), .3),
                      e /= 255,
                      n /= 255,
                      f /= 255,
                      C().invertSelf(),
                      K(e, n, f, 0),
                      S += D,
                      A += n,
                      M += O,
                      k();
                  })(),
                  !j && v === b || (b = v, C().invertSelf(), K(X, q, H), S = D, A = T, M = O, j = j && (v ? 0 : 1)),
                  (X < -20 || H < 109 ? -25 : -9) > q && (j = 2),
                  1 === v && (N[15].i = X < -15 && H < 0 ? 1 : 0),
                  i = V(i, s1 * (30 < v && v < 35), 2),
                  g = F(g, X, .5, 1),
                  d = F(d, u = I1(V(u, q, 2), q, j || 8 * E(u - q)), 2, 1),
                  p = F(p, H, .5, 1),
                  B
                    ? (e = j + T1(18), f1 = I1(f1, X, e), h1 = I1(h1, H, e), m1 = I1(m1, 1.6 + u, e), g1 = A1(g1))
                    : (f1 = F(f1, g, 1, 2 + i),
                      h1 = F(h1, p + -18 + 5 * i, 1, 2 + i),
                      m1 = F(m1, z1(d + U((-60 - H) / 8, 0, 20) + 13 + 9 * i, 6), 4, 2),
                      e = w1(-6, -E(p - h1)),
                      g1 = M1(g1, 90 - A1(d1(e, a = g - f1) / Z1), I + T1(10)),
                      u1 = M1(u1, 90 - d1(Y1(e, a), m1 - d) / Z1, I + T1(10))),
                  u1 = U(u1, -87, 87),
                  I = 0,
                  e = U(i1, -1),
                  a = U(n1, -1),
                  t = S1(Y1(e, a) ** .5, .1),
                  l = d1(e, a),
                  t && (s = 90 - l / Z1),
                  c = M1(c, s, T1(8)),
                  o = V(o, t, 10),
                  _(X, .06 * h * o * z(18.2 * Q) + u, H).rotateSelf(0, c),
                  r = 0;
                r < 2;
                ++r
              ) {
                let e = 9.1 * Q - W * r;
                P(L[37].m, _(0)).translateSelf(0, o * U(.45 * w(e - W / 2))).rotateSelf(o * w(e) * .25 / Z1, 0);
              }
              Y = v ? 5 : V(Y, j ? 13 : 19 - 2 * w1(0, q + 10), 2.2),
                n = v || j ? 0 : V(n, 0, 3),
                f = v || j ? 0 : V(f, 0, 3),
                e = (m = j ? 0 : V(m, v ? 7 * U(2 * t) * h : 0, v ? 9 : 1)) * t * E(e) * w(l),
                a = m * t * E(a) * z(l),
                t = R * (n + (a * z(l = B ? (180 + g1) * Z1 : 0) - w(l) * e)),
                r = R * -Y,
                e = R * (f + (a * w(l) + z(l) * e)),
                C().invertSelf(),
                K(t, r, e, 0),
                S += D,
                A += r,
                M += O,
                k();
            };
          })(),
          requestAnimationFrame(l);
      }
    },
    a = new Image();
  a.onload = a.onerror = v,
    a.src = t,
    (r => {
      let L = 0,
        s = () => {
          let b = 0,
            e = m => {
              let r,
                h,
                s,
                u,
                c,
                o,
                i = 0,
                n = 0,
                v = [],
                f = new Int32Array(768 * m),
                g = 2 ** (t - 9) / m,
                d = W * 2 ** (l - 8) / m,
                p = q * m & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * L + l];
                  e < 32;
                  ++e
                ) {
                  let t = (32 * l + e) * m;
                  for (r = 0; r < 4; ++r) {
                    if (u = 0, a && (u = S[a - 1].charCodeAt(e + 32 * r) - 40, u += 0 < u ? 106 : 0), u) {
                      if (!(h = v[u])) {
                        let l,
                          r,
                          s = 0,
                          c = 0,
                          o = h = u,
                          i = L < 2
                            ? e => e % 1 * 2 - 1
                            : Q1,
                          n = L < 2
                            ? L < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : Q1,
                          f = new Int32Array(F + D + N);
                        for (let a = 0, t = 0; F + D + N > a; ++a, ++t) {
                          let e = 1;
                          F > a ? e = a / F : F + D > a || (e = (1 - (e = (a - F - D) / N)) * 3 ** (-T / 16 * e)),
                            t < 0
                            || (t -= 4 * m,
                              r = .00396 * 2 ** ((o + M - 256) / 12),
                              l = .00396 * 2 ** ((o + Y - 256) / 12) * (1 + (L ? 0 : .0072))),
                            f[a] = 80
                                * (i(s += r * e ** (I / 32)) * A + n(c += l * e ** (C / 32)) * j
                                  + (k ? (2 * p1() - 1) * k : 0))
                                * e | 0;
                        }
                        h = v[h] = f;
                      }
                      for (let e = 0, a = 2 * t; h.length > e; ++e, a += 2) f[a] += h[e];
                    }
                  }
                  for (let e, a = 0; m > a; ++a) {
                    h = 0,
                      ((e = f[r = 2 * (t + a)]) || o)
                      && (c = .00308 * O,
                        1 !== L && 4 !== L || (c *= w(g * r * W * 2) * H / 512 + .5),
                        c = 1.5 * w(c),
                        i += c * n,
                        n += c * (s = (1 - B / 255) * (e - n) - i),
                        e = 4 === L ? n : 3 === L ? s : i,
                        L || (e = (e *= 22e-5) < 1 ? -1 < e ? w(e / 4 * W * 2) : -1 : 1, e /= 22e-5),
                        e *= Q / 32,
                        o = 1e-5 < e * e,
                        h = e * (1 - (s = w(d * r) * R / 512 + .5)),
                        e *= s),
                      r < p || (h += f[1 + r - p] * X / 255, e += f[r - p] * X / 255),
                      E[s = b + r >> 1] += (f[r] = h) / 65536,
                      U[s] += (f[++r] = e) / 65536;
                  }
                }
              }
              b += 768 * m;
            },
            S = [
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
            [A, M, I, j, Y, C, k, F, D, a, T, t, O, B, Q, R, l, X, q, H] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][L],
            N = 4 * a ** 2;
          e(5513), e(4562), e(3891), B1(++L < 5 ? s : r);
        },
        E = (C = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
        U = C.getChannelData(1);
      B1(s);
    })(() => {
      let a = e => c(w((e /= 11) * W), e).rotateSelf(10 * e).scaleSelf(1.002 - e, 1, 1.002 - e),
        t = e =>
          g(
            o(i(), c(0, -e / 2).scale(6, e - 1, 2.2)),
            o(i(), c(0, -e / 2 - 6).scale(4, e - 3, 4)),
            o(i(28, 1), c(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        l = (B1(() => {
          let t = 0,
            s = [],
            c = [],
            r = [],
            o = [],
            i = [],
            n = [],
            f = new Int32Array(8),
            m = new Map(),
            h = new Int32Array(f.buffer, 0, 5),
            u = new Float32Array(f.buffer);
          L.map((e, a) => {
            let s,
              l = e => {
                let { x: a, y: t, z: l } = s[e], r = (u[0] = a, u[1] = t, u[2] = l, m.get(e = "" + (s.C ? h : f)));
                return void 0 !== r
                  ? (a = 3 * r, n[a] = (n[a++] + f[5]) / 2, n[a] = (n[a++] + f[6]) / 2, n[a] = (n[a] + f[7]) / 2)
                  : (m.set(e, r = m.size), o.push(a, t, l, u[3]), i.push(f[4]), n.push(f[5], f[6], f[7])),
                  r;
              };
            for (s of (u[3] = 40 < a ? -12 : 39 < a ? -25 : a, e.o)) {
              let { x: e, y: a, z: t } = N1(s);
              f[4] = 0 | s.u, f[5] = 32767 * e, f[6] = 32767 * a, f[7] = 32767 * t;
              for (let e = 2, a = l(0), t = l(1); s.length > e; ++e) r.push(a, t, t = l(e));
            }
            e.o = 0, e.s = t, e.D = t = r.length;
          }),
            [M, J].map(e => {
              e.b11(34962, e.c1b()),
                e.b2v(34962, new Float32Array(o), 35044),
                e.v7s(0, 4, 5126, !1, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Int16Array(n), 35044),
                e.v7s(1, 3, 5122, !0, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Uint32Array(i), 35044),
                e.v7s(2, 4, 5121, !0, 0, 0),
                e.b11(34963, e.c1b()),
                e.b2v(34963, new Uint16Array(r), 35044),
                e.e3x(0),
                e.e3x(1),
                e.e3x(2);
            });
          try {
            let [e, a, t, l, r] = JSON.parse(localStorage.F);
            s = e, c = a, v1 = t, t1 = l, Q = r;
          } catch {}
          N.map((e, a) => e.g = e.h = e.i = 14 !== a && s[a] ? 1 : 0),
            y1.map((e, a) => e.i = c[a] ? 1 : 0),
            X1(),
            a1 = $ || 14 !== v1 ? 1 : 0,
            B1(v);
        }),
          n(11, e => F1(C1(k1(16), a(e), f(1, 1, .8, .2)).reverse(), C1(k1(16), a(e + 1), f(1, 1, .8, .2)), 1)).flat()),
        e = [
          ...o(i(), c(0, -3).scale(11, 1.4, 3), f(.9, .9, .9, .2)),
          ...o(i(), c(0, -2.2).scale(7.7, .5, 4), f(.5, .5, .5, .2)),
          ...n(12, e => o(i(), S.translate(e - 5.5, 4.4).scale(.1, .1, 2), f(.6, .5, .3, .2))).flat(),
          ...g(
            o(i(6), S.rotate(90).scale(6, 8, 6), f(.3, .6, .6, .3)),
            o(i(4, 0, .01), c(0, 6).scale(12, 2, .75).rotate(0, 45), f(.3, .6, .6, .3)),
            o(i(6), S.rotate(90).scale(5, 12, 5), f(.3, .6, .6, .3)),
            ...[-5, 0, 5].map(e => o(i(5), c(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), f(.3, .6, .6, .3))),
          ),
        ],
        r = g(
          o(i(), c(0, -.5, 1).scale(1.15, 1.2, 6.5), f(.25, .25, .35, .3)),
          g(
            o(i(3), c(0, 0, -5.5).scale(3, 2), f(.6, .3, .4, .3)),
            o(i(), c(0, 0, -3.65).scale(2.5, 3), f(.6, .3, .4, .3)),
          ),
          ...[-1, 1].map(e => o(i(), c(1.2 * e, -.5, 1).scale(.14, .3, 6.5), f(.7, .2, 0, .3))),
        );
      m(),
        s([d.slice(1)], c(-2).scale3d(3).rotate(90, 0)),
        m(),
        h(c(-5.4, 1.5, -19).rotate(0, -90)),
        [-15, 15].map((e, a) => {
          s(i(), c(0, 0, a ? 22 : -23).scale(3, 1, 8), f(.9, .9, .9, .2)),
            s(i(), c(0, 6.3, e).scale(4, .3, 1), f(.3, .3, .3, .4)),
            s(i(), c(0, 1, e).scale(3, .2, .35), f(.5, .5, .5, .3));
        }),
        s(i(), c(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), f(.8, .8, .8, .2)),
        s(i(), c(3, 1.5, -20).scale(.5, 2, 5), f(.7, .7, .7, .2)),
        s(i(), c(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), f(.75, .75, .75, .2)),
        s(i(5), c(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), f(.6, .3, .3, .4)),
        s(g(
          V1(
            o(i(6, 0, 0, .3), c(8, -3, -4).scale(13, 1, 13), f(.7, .7, .7, .2)),
            g(
              o(i(6, 0, 0, .3), c(0, -.92).scale(13, 2, 13), f(.8, .8, .8, .2)),
              o(i(), S.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), f(.5, .5, .5, .5)),
            ),
            o(
              i(),
              S.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
              f(.8, .2, .2, .5),
            ),
            o(i(6), c(0, -8).scale(9, 8, 7), f(.2, .1, .4, .5)),
          ),
          o(i(5), S.scale(5, 30, 5), f(.4, .2, .6, .5)),
          o(i(5, 0, 1.5), c(0, 1).scale(4.5, .3, 4.5), f(.7, .5, .9, .2)),
          o(i(6), c(15, -1.5, 4).scale(3.5, 1, 3.5), f(.5, .5, .5, .5)),
        )),
        h(c(15, -2, 4)),
        s(i(), c(-18.65, -3, 55).scale(2.45, 1.4, 2.7), f(.9, .9, .9, .2)),
        h(c(-55, -1.1, 46).rotate(0, 90)),
        s(i(7), c(-57, -2.6, 46).scale(4, 1, 4), f(.8, .8, .8, .3)),
        s(i(6), c(-61.3, -2.4, 49).scale(3, 1, 5), f(.4, .6, .6, .3)),
        s(e, c(-53, 0, 55)),
        s(i(), c(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), f(.7, .7, .7, .2)),
        s(i(3, 0, -.5), c(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), f(.8, .8, .8, .2)),
        s(g(
          V1(
            o(i(), c(-100, -2.4, 55).scale(8, .9, 8), f(.8, .8, .8, .2)),
            o(i(), c(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), f(.8, .8, .8, .2)),
            o(i(), c(-100, -2.6, 70).scale(3, 1.1, 7), f(.8, .8, .8, .2)),
            o(i(), c(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), f(.8, .8, .8, .2)),
            o(i(6), c(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), f(.6, .6, .6, .3)),
            o(i(), c(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), f(.8, .8, .8, .2)),
            o(i(), c(-100, .42, 92).scale(3, 1.1, 4.1), f(.8, .8, .8, .2)),
          ),
          o(i(8), c(-100, -1, 55).scale(7, .9, 7), f(.3, .3, .3, .4)),
          o(i(8), c(-100, -2, 55).scale(4, .3, 4), f(.4, .4, .4, .5)),
          o(i(8, 0, -3.1), c(-100, -3, 55).scale(.4, 1, .4), f(.4, .4, .4, .5)),
        )),
        s(g(
          o(i(), c(-100, 1, 63).scale(7.5, 4), f(.5, .5, .5, .4)),
          o(i(), c(-100, 0, 70).scale(2, 2, 10), f(.5, .5, .5, .4)),
          o(i(20, 1), c(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), f(.5, .5, .5, .4)),
        )),
        d.map(({ x: a, z: t }) => {
          s(i(6), c(3 * a, 3, 15 * t).scale(.7, 4, .7), f(.6, .3, .3, .4)),
            s(i(6), c(7 * a - 100, -3, 7 * t + 55).scale(1, 8.1), f(.6, .15, .15, .8)),
            [4, -.4].map(e => s(i(6), c(7 * a - 100, e, 7 * t + 55).scale(1.3, .5, 1.3), f(.4, .2, .2, .8))),
            s(i(14, 1), c(9 * a - 38.9, -7.3, 11 * t + 17).scale(1, 4), f(.25, .25, .25, 1)),
            [1.5, 8].map(e =>
              s(i(17, 1), c(9 * a - 38.9, e - 11.3, 11 * t + 17).scale(1.5, .5, 1.5), f(.6, .6, .6, .3))
            );
        }),
        n(7, e => {
          s(
            i((23 * e + 1) % 5 + 5, 0, .5),
            c(5 * w(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
            f(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
          );
        }),
        s(i(), c(-87, -9.5, 24).scale(7, 1, 3), f(.4, .5, .6, .4)),
        s(i(4), c(-86, -9.2, 27).scale(5, 1, 5), f(.5, .6, .7, .3)),
        s(i(12, 1), c(-86, -9, 31).scale(1.5, 1, 1.5), f(.3, .3, .4, .1)),
        h(c(-86, -7.5, 31)),
        s(
          g(
            V1(
              o(i(5), c(0, 0, -7).scale(2, 1.2, 2), f(.2, .4, .7, .3)),
              o(i(5), S.scale(9, 1.2, 9), f(0, .2, .3, .5)),
              o(i(), S.scale(11, 1, 13), f(.3, .4, .6, .3)),
            ),
            o(i(5), S.scale(5.4, 5, 5.4), f(0, .2, .3, .5)),
          ),
          c(-38.9, -11.3, 17),
        ),
        h(c(-38.9, -9.6, 10)),
        s(
          g(
            V1(
              o(i(6), c(0, 0, -18).scale(15, 1.2, 15), f(.7, .7, .7, .3)),
              o(i(), S.scale(4, 1.2, 6), f(.45, .4, .6, .3)),
            ),
            ...n(6, a =>
              n(
                6,
                e =>
                  o(
                    i(6),
                    c(4.6 * e - 12 + 2 * (1 & a), 0, 4.6 * a + 2 * w(4 * e) - 32).scale(2, 5, 2),
                    f(.7, .7, .7, .3),
                  ),
              )).flat(),
          ),
          c(-38.9, -11.3, -1),
        ),
        s(i(5), c(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), f(.8, .1, .25, .4)),
        h(c(-84, -.7, 85).rotate(0, 45)),
        s(
          g(
            V1(o(i(), c(26.5, -1.6, 10).scale(20, 2.08, 3)), o(i(), c(26.5, -.5, 10).scale(19, 2, .5))),
            ...n(4, e => o(i(), c(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
            ...n(3, e => o(i(), c(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
          ),
          c(-123, .2, -12),
          f(.5, .5, .6, .2),
        ),
        h(c(-116, -1.4, -18).rotate(0, 180)),
        s(i(6), c(-116, -2.6, -16.5).scale(3.2, .8, 3), f(.6, .5, .7, .2)),
        s(i(), c(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), f(.8, .8, .8, .2)),
        s(i(), c(-115.5, -17, -12).scale(.5, 15, 2.2), f(.6, .6, .6, .3)),
        s(i(8), c(-114, -17, -2).scale(2, 15, 2), f(.6, .6, .6, .3)),
        s(i(8), c(-79, -17, -2).scale(2, 15, 2), f(1, 1, 1, .3)),
        s(i(), c(-77, -17, -50.5).scale(2.2, 15, .5), f(.6, .6, .6, .3)),
        s(g(
          o(i(12), c(-77, -14.5, -12).scale(4, 17.5, 4), f(.7, .7, .7, .2)),
          o(i(12), c(-77, 3.1, -12).scale(3, 5, 3), f(.4, .5, .6, .2)),
          o(i(), c(-79, .1, -12).scale(3.5, 2, 1.3), f(.4, .5, .6, .2)),
          o(i(), c(-77, .1, -14).scale(1.5, 2, 2), f(.4, .5, .6, .2)),
        )),
        s(g(
          o(i(), c(-93, -5.8, -40).scale(9, 1, 5), f(.8, .8, .8, .1)),
          o(i(9), c(-98, -5.8, -40).scale(3, 8, 3), f(.7, .7, .7, .2)),
        )),
        s(i(), c(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), f(.6, .6, .6, .3)),
        s(i(9), c(-98, -18.4, -40).scale(2.5, 13.5, 2.5), f(.5, .5, .5, .3)),
        h(c(-98, -4.4, -40).rotate(0, 90)),
        [-1, 1].map((a, t) => {
          s(
            g(
              o(i(), c(-4 * a, 3.5, -.5).scale(4, 4, .7), f(.5, .5, .5, .4)),
              o(i(), S.scale(3, 3, 10), f(.6, .24, .2, .5)),
              o(i(32, 1), c(0, 3, -5).scale(3, 4, 10).rotate(90, 0), f(.6, .24, .2, .5)),
              o(i(5), c(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), f(.6, .24, .2, .5)),
              o(i(5), c(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), f(.6, .24, .2, .5)),
            ),
            c(a - 100, .7, 97),
          ),
            s(i(12, 1), c(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), f(.6, .24, .2, .5)),
            [7.2, 1.5].map(e => s(i(15, 1), c(-7.5 * a - 100, e + .7, 96).scale(1.1, .5, 1.1), f(.5, .24, .2, .4))),
            s(l, c(-8 * a, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * a + 90)),
            s(l, c(-5 * a - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90)),
            n(5, e => s(l, c(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2)));
        }),
        s(g(
          o(i(), c(-82.07, .8, 106).scale(11, .9, 2.2), f(.7, .7, .7, .1)),
          o(i(45, 1), c(-81, .7, 106).scale3d(7.7), f(.7, .7, .7, .1)),
        )),
        s(i(), c(-58, 1, 106).scale(2, .65, 2), f(.7, .7, .7, .2)),
        s(i(), c(-50.7, 1, 99).scale(2, .65, 1), f(.7, .7, .7, .2)),
        s(i(), c(-42, .4, 91).scale(5, 1, 2.5), f(.7, .7, .7, .3)),
        s(i(), c(-34.2, .4, 91).scale(3, 1, 3), f(.7, .7, .7, .3)),
        s(i(5), c(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), f(.2, .5, .5, .6)),
        h(c(-34, 2.7, 96).rotate(-12, 0)),
        s(g(
          V1(
            o(i(6, 0, 0, .6), c(-100, .7, 105.5).scale(8, 1, 11), f(.7, .7, .7, .2)),
            o(i(), c(-101.5, .7, 93.5).scale(10.5, 1, 2), f(.7, .7, .7, .2)),
          ),
          o(i(5), c(-100, .7, 113).scale(4, 3, 4), f(.7, .7, .7, .2)),
        )),
        n(3, e => {
          s(t(16), c(-77, -9, -12 * e - 20).rotate(0, 90), f(.6, .6, .6, .3)),
            s(t(16), c(12 * e - 109, -9, -12), f(.6, .6, .6, .3)),
            s(
              t(24.7 - .7 * (1 & e)),
              c(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
              1 & e ? f(.5, .5, .5, .3) : f(.35, .35, .35, .5),
            );
        }),
        s(g(
          o(i(6, 0, 0, .3), c(0, -.92, 95).scale(14, 2, 14), f(.8, .8, .8, .2)),
          o(i(5), c(0, 0, 95).scale3d(6), f(.3, .3, .3, .5)),
        )),
        h(c(0, 1.7, 82).rotate(0, 180)),
        s(i(5), c(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), f(.5, .3, .3, .4)),
        s(i(6), c(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), f(.5, .6, .7, .3)),
        s(i(), c(0, 16, 127.8).scale(1.5, 1, .7), f(.5, .6, .7, .3)),
        s(i(7), c(0, 15.1, 133).scale(5, 2, 5), f(.4, .5, .6, .4)),
        s(g(
          V1(
            o(i(), c(0, 16, 110.5).scale(12, 1, 3), f(.5, .3, .3, .4)),
            o(i(), c(0, 16, 111).scale(3, 1, 3.8), f(.5, .3, .3, .4)),
          ),
          o(i(5), c(0, 16, 103.5).scale(5.5, 5, 5.5), f(.5, .3, .3, .4)),
        )),
        u(c(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
        u(c(0, 2.8), [5, 10, 3], [-5, 10, 3], ...k1(18).map(({ x: e, z: a }) => [7 * e, 10 * a, 4.5 - 2 * E(e)])),
        u(c(0, 3, 95), ...k1(9).map(({ x: e, z: a }) => [9 * e, 9 * a, 4])),
        u(c(0, 19, 134), [0, 0, 3.5]),
        u(c(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
        u(c(-89, .2, 80), [0, 0, 6]),
        u(c(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
        u(c(-115, .2, -12), [0, 0, 3.5]),
        u(c(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
        m(),
        s(i(5), c(0, -.2).scale(5, 1, 5), f(.6, .65, .7, .3)),
        h(c(0, 1.2)),
        n(2, () => {
          m(),
            d.map(({ x: e, z: a }) => {
              s(i(11, 1), c(4 * e, 4, 4 * a).scale(.8, 3, .8), f(.5, .3, .7, .6)),
                s(i(), c(4 * e, 7, 4 * a).scale(1, .3), f(.5, .5, .5, .3));
            }),
            s(g(
              o(i(), S.scale(5, 1, 5), f(.8, .8, .8, .3)),
              ...[-1, 1].map(e => o(i(25, 1), c(5 * e, .2).rotate(-30 * e).scale(4, 1, 3), f(.8, .8, .8, .3))),
            )),
            s(i(), c(0, -3).scale(8, 2, 8), f(.4, .4, .4, .3));
        }),
        m(),
        s(g(
          V1(
            o(i(), S.scale(1.5, 1, 5), f(.9, .9, .9, .2)),
            o(i(6), S.scale(4, 1, 5), f(.9, .9, .9, .2)),
            o(i(), c(0, -2).scale(2, 3.2, 1.9), f(.3, .8, .5, .5)),
            o(i(16, 1, 0, 4), S.scale(1, 1, 1.5).rotate(0, 90), f(.9, .9, .9, .2)),
          ),
          o(i(), S.scale(1.3, 10, 1.3), f(.2, .7, .4, .6)),
        )),
        u(c(0, 2.8), [0, 0, 4.5]),
        m(),
        s(i(3), c(-23, -1.7, 55.8).scale(5, .7, 8.3), f(.3, .6, .6, .2)),
        s(i(8), c(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), f(.8, .8, .8, .2)),
        s(i(), c(-23, -3, 55).scale(5.2, 1.7, 3), f(.5, .5, .5, .3)),
        s(i(), c(-23, -2.2, 62).scale(3, 1, 4), f(.5, .5, .5, .3)),
        h(c(-23, -.5, 66.5)),
        m(),
        s(i(), c(-22.55, -3, 55).scale(1.45, 1.4, 2.7), f(.7, .7, .7, .2)),
        s(g(o(i(), S.scale(3, 1.4, 2.7)), o(i(), S.scale(1.2, 8, 1.2))), c(-33, -3, 55), f(.7, .7, .7, .2)),
        m(),
        s(g(
          o(i(), c(-27, -3, 55).scale(3, 1.4, 2.7), f(.9, .9, .9, .2)),
          o(i(), c(-27, -3, 55).scale(1, 3), f(.9, .9, .9, .2)),
        )),
        s(i(), c(-39, -3, 55).scale(3, 1.4, 2.7), f(.9, .9, .9, .2)),
        m(),
        s(i(6), c(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), f(.7, .7, .7, .4)),
        m(),
        [0, 12, 24].map(e =>
          s(i(), c(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), f(.2, .5, .6, .2))
        ),
        m(),
        [6, 18].map(e =>
          s(i(), c(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), f(.1, .4, .5, .2))
        ),
        m(),
        s(
          g(
            V1(
              o(i(5), c(0, 2).scale(5, 7, 5).skewY(8), f(.2, .4, .5, .5)),
              o(i(5), c(0, 6).scale(1.1, 7, 1.1).skewY(-8), f(.25, .35, .5, .5)),
              o(i(5), c(0, 9).scale(.6, 7, .6).skewY(8), f(.35, .3, .5, .5)),
            ),
            o(i(5), S.scale(4, 8, 4), f(.2, .4, .5, .5)),
            o(i(5), c(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), f(.2, .4, .5, .5)),
          ),
          c(-38.9, -11.3, 17),
        ),
        u(c(-39.1, -.6, 17).rotate(11), ...k1(15).map(({ x: e, z: a }) => [3 * e, 3 * a, 1.2])),
        m(),
        n(2, e => s(r, c(9 * e - 110 + (1 & e), 1.9, -12))),
        m(),
        n(2, e => s(r, c(9 * (e + 2) - 110 + (1 & e), 1.9, -12))),
        m(),
        n(3, e => s(r, c(9 * e - 106, 1.9, -12))),
        n(4, e => {
          m(),
            s(
              i(6),
              c(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                2.6,
                1,
                2.5,
              ),
              f(.5 - e / 8, e / 12 + .5, .7, .3),
            );
        }),
        [f(.1, .55, .45, .2), f(.2, .5, .5, .3), f(.3, .45, .55, .4)].map((e, a) => {
          m(),
            s(i(), c(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
            2 === a && s(i(), c(-29.1, .4, 91).scale(2.1, 1, 3), f(.7, .7, .7, .3)),
            1 === a && s(i(), c(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), f(.6, .6, .7, .3));
        }),
        m(),
        s(i(5), S.scale(5, 1.1, 5), f(.5, .3, .3, .4)),
        s(i(5), S.scale(5.5, .9, 5.5), f(.25, .25, .25, .4)),
        h(c(0, 1.5, -1).rotate(0, 180)),
        n(4, a => {
          m(),
            n(
              7,
              e => s(o(i(9, 1), c((2 < a ? 3.5 : 4) * (e / 6 - .5), 3).scale(.2, 2 < a ? 4 : 3, .2), f(.3, .3, .38))),
            );
        }),
        m(),
        s(e),
        m(),
        s(i(15, 1), c(-7.5).rotate(0, 90).scale(3, 2.3, 3), f(.4, .4, .4, .3)),
        s(i(10), c(-7.5).rotate(0, 90).scale(2, 2.5, 2), f(.3, .8, .7, .3)),
        s(i(5), c(-7.5).rotate(0, 90).scale(1, 3), f(.5, .5, .5, .5)),
        h(c(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
        [-1, 1].map(e => s(l, S.rotate(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3))),
        s(g(o(i(10), S.scale(6, 2, 6), f(.1, .6, .5, .3)), o(i(10), S.scale(3.3, 6, 3.3), f(.1, .6, .5, .5)))),
        u(c(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
        m(),
        s(i(3), c(0, -3, 118.8).scale(.8, .8, 8).rotate(90, 0, 60), f(.5, .3, .3, .4)),
        [22, 30].map(e => {
          s(i(6), c(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), f(.7, .7, .7, .4)),
            s(i(), c(0, 6.2, e + 95).scale(.5, 11, .5), f(.5, .3, .3, .4));
        }),
        m(),
        s(g(
          o(i(45, 1), S.scale(7.5, 1, 7.5), f(.45, .45, .45, .2)),
          o(i(), c(0, 0, -5.5).scale(1.5, 3, 2.7), f(.45, .45, .45, .2)),
        )),
        s(i(8), c(0, 2).scale(3, 1.5, 3).rotate(0, 22), f(.7, .7, .7, .1)),
        s(i(5), c(0, 2).scale(1, 2), f(.3, .3, .3, .2)),
        u(c(0, 3), ...k1(14).map(({ x: e, z: a }) => [5.6 * e, 5.6 * a, 2])),
        m(),
        [-1, 1].map(e => s(l, S.rotate(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90))),
        s(g(o(i(28, 1), c(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)), o(i(), S.scale(9, 5, 2), f(.3, 0, 0, .3)))),
        s(o(i(28, 1), S.scale(7.5, 1, 7.5), f(.45, .45, .45, .2))),
        s(o(i(5), c(0, 1).scale(1, .2), f(.3, .3, .3, .2))),
        m(),
        s(g(
          o(i(28, 1), c(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)),
          o(i(), c(7).scale(9, 5, 2), f(.3, 0, 0, .3)),
          o(i(), c(0, 0, 7).scale(2, 5, 9), f(.3, 0, 0, .3)),
        )),
        s(o(i(28, 1), S.scale(7.5, 1, 7.5), f(.45, .45, .45, .2))),
        s(o(i(5), c(0, 1).scale(1, .2), f(.3, .3, .3, .2))),
        m(),
        s(g(
          o(i(28, 1), c(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)),
          o(i(), c(7).scale(9, 5, 2), f(.3, 0, 0, .3)),
          o(i(), c(0, 0, -7).scale(2, 5, 9), f(.3, 0, 0, .3)),
        )),
        s(o(i(28, 1), S.scale(7.5, 1, 7.5), f(.45, .45, .45, .2))),
        s(o(i(5), c(0, 1).scale(1, .2), f(.3, .3, .3, .2))),
        n(2, () => {
          m(),
            s(g(
              o(i(30, 1, 1.15, 1), c(0, -3).scale(3.5, 1, 3.5), f(.7, .4, .25, .7)),
              o(i(30, 1, 1.3, 1), c(0, -2.5).scale(2.6, 1, 3), f(.7, .4, .25, .2)),
              o(i(), c(4, -1.2).scale3d(2), f(.7, .4, .25, .3)),
            )),
            h(c(0, -3, 4));
        }),
        m(),
        s(D1(20), c(0, 1).scale3d(.5), f(1, .3, .4)),
        s(D1(30), S.scale(.65, .8, .55), f(1, .3, .4)),
        s(i(), c(0, .9, .45).scale(.15, .02, .06), f(.3, .3, .3)),
        [-1, 1].map(e => {
          s(l, S.rotate(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), f(1, 1, .8)),
            s(
              o(g(i(15, 1), o(i(), c(0, 0, 1).scale(2, 2, .5))), S.rotate(-90, 0).scale(.1, .05, .1), f(.3, .3, .3)),
              c(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
            );
        }),
        [-1, 1].map(e => {
          m(), s(i(20, 1), c(.3 * e, -.8).scale(.2, .7, .24), f(1, .3, .4));
        }),
        m(),
        s(i(6, 1), S.scale(.12, 1.2, .12), f(.3, .3, .5, .1)),
        s(i(9, 1), c(0, .8).scale(.2, .3, .2), f(1, .5, .2)),
        s(i(3), c(0, -1).rotate(90, 90).scale(.3, .4, .3), f(.2, .2, .2, .1)),
        m(),
        s(i(6).slice(0, -1), S.scale(.77, 1, .77), f(1, .3, .5)),
        m(),
        s(
          D1(30, 24, (e, a, t) => {
            let l = a / 24, r = e * W * 2 / 30, s = w(l ** .6 * W / 2);
            return e = l * l * w(e * W * 14 / 30) / 4,
              23 < a
                ? { x: t.C = 0, y: -.5, z: 0 }
                : { x: z(r) * s, y: z(l * W) - l - e, z: w(r) * s + w(e * W * 2) / 4 };
          }),
          S.scale(.7, .7, .7),
          f(1, 1, 1),
        ),
        [-1, 1].map(e => s(D1(12), c(.16 * e, .4, -.36).scale3d(.09)));
    });
});
