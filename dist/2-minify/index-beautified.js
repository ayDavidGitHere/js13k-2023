let j = 0,
  nt = 0,
  O = 0,
  R = 0,
  A = 0,
  P = 0,
  S = 0,
  e = 0,
  ot = 0,
  ct = 0,
  x = 0,
  y = 0,
  q = 0,
  L = 0,
  W = 0,
  z = 0,
  X = 0,
  N = .066,
  C = 1,
  w = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  E = [],
  U = [],
  K = [],
  V = [],
  G = { x: 0, y: 0, z: 0 },
  J = Math.PI / 180,
  _ = new DOMMatrix(),
  l = new Float32Array(16),
  r = new Float32Array(624),
  Z = (t, a) => a < t ? t : a,
  it = t => t < 0 ? -t : t,
  $ = t => t < 0 ? 0 : 1 < t ? 1 : t,
  i = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
  ht = t => Math.atan2(Math.sin(t *= J), Math.cos(t)) / J,
  ft = (t, a, e) =>
    ((t *= J) + (2 * (a = (a * J - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / J,
  mt = (t, a, e, l) => {
    let r = a - t;
    return (t += (a - t < 0 ? -1 : 1) * Z(0, (r < 0 ? -r : r) ** .9 - e) * l * 2) + (a - t) * $(l / 7);
  },
  tt = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  u = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  k = ({ x: t, y: a, z: e }) => Math.hypot(t - G.x, a - G.y, e - G.z),
  Y = t => {
    let a = 0, e = 0, l = 0, r, s = t.at(-1);
    for (r of t) a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
  },
  at = (
    t,
    a = l,
    e = 0,
  ) => (e *= 16,
    a[e++] = t.m11,
    a[e++] = t.m12,
    a[e++] = t.m13,
    a[e++] = t.m14,
    a[e++] = t.m21,
    a[e++] = t.m22,
    a[e++] = t.m23,
    a[e++] = t.m24,
    a[e++] = t.m31,
    a[e++] = t.m32,
    a[e++] = t.m33,
    a[e++] = t.m34,
    a[e++] = t.m41,
    a[e++] = t.m42,
    a[e++] = t.m43,
    a[e] = t.m44,
    a),
  ut = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  F = (t, a, e) => (t.D = e, t.A = a, t),
  T = (t, l, a = t.A) =>
    F(
      t.map(t => {
        let a, e;
        return { x: t, y: a, z: e } = t,
          { x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }),
          { x: t, y: a, z: e };
      }),
      a,
      t.D,
    ),
  h = (t, a, e) => t.map(t => T(t, a, e)),
  D = (e, l = 0) =>
    tt(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  H = (l, r, s) => l.map((t, a, { length: e }) => F([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.A, s)),
  f = (
    t,
    a,
    e = 0,
    l,
  ) => (t = t ? D(t, l) : w,
    l = T(t, _.translate(0, 1).scale3d(0 < e ? e : 1)),
    t = T(t, _.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
    [...H(t, l, a), l, t]),
  Q = (
    l,
    r = l,
    s = (
      t,
      a,
    ) => (a *= Math.PI / r,
      { x: Math.cos(t *= 2 * Math.PI / l) * Math.sin(a), y: Math.cos(a), z: Math.sin(t) * Math.sin(a) }),
  ) => {
    let n = [];
    for (let e = 0; l > e; e++) {
      for (let a = 0; r > a; a++) {
        let t = F([], 0, 1);
        n.push(t),
          t.push(s(e, a, t)),
          a && t.push(s((e + 1) % l, a, t)),
          r - 1 > a && t.push(s((e + 1) % l, a + 1 % r, t)),
          t.push(s(e, a + 1 % r, t));
      }
    }
    return n;
  },
  c = (l, r) => {
    let s, n, o, c = r.C;
    for (let t = 0; c.length > t; ++t) {
      if ((s = u(l, c[t]) - l.w) < -8e-5 ? o = r : 8e-5 < s && (n = r), o && n) {
        n = [], o = [], c = r.C, t = r.B;
        let a = c.at(-1), e = u(l, a) - l.w;
        for (let t of c) {
          s = u(l, t) - l.w,
            e < 8e-5 && o.push(a),
            -8e-5 < e && n.push(a),
            (8e-5 < e && s < -8e-5 || e < -8e-5 && 8e-5 < s)
            && (e /= s - e,
              a = { x: a.x + (a.x - t.x) * e, y: a.y + (a.y - t.y) * e, z: a.z + (a.z - t.z) * e },
              n.push(a),
              o.push(a)),
            a = t,
            e = s;
        }
        return {
          o: 2 < n.length && { C: F(n, c.A, c.D), B: t, u: r },
          m: 2 < o.length && { C: F(o, c.A, c.D), B: t, u: r },
        };
      }
    }
    return { o: n, m: o };
  },
  n = (t, a, e = Y(a.C)) => {
    let l, r, s;
    return t
      ? ({ o: l, m: r } = c(t, a), l || r || t.s.push(a), l && (t.o = n(t.o, l, e)), r && (t.m = n(t.m, r, e)))
      : ({ x: l, y: r, z: e, w: s } = e, t = { x: l, y: r, z: e, w: s, s: [a], o: 0, m: 0 }),
      t;
  },
  s = (a, r, s) => {
    let n = [],
      o = (t, a) => {
        let { o: e, m: l } = c(t, a);
        e || l || (0 < s * u(t, r) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
      };
    for (let t of r.s) o(a, t);
    return n;
  },
  o = (t, a) => t && (a(t), o(t.o, a), o(t.m, a)),
  B = t => t.length ? t.reduce((t, a) => n(t, { C: a, B: 0, u: 0 }), 0) : t,
  xt = t => (o(t, a => {
    let t = a.m;
    a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.s) t.B = !t.B;
  }),
    t),
  m = (...t) =>
    t.reduce((l, a) => {
      let r = [];
      if (l = B(l), a) {
        a = B(a), o(l, t => t.s = s(a, t, 1)), o(a, t => r.push([t, s(l, t, -1)]));
        for (let [a, e] of r) for (let t of e) n(l, t, a);
      }
      return l;
    }),
  g = (t, ...a) => xt(m(xt(B(t)), ...a)),
  M = t => {
    let e = new Map(),
      l = new Map(),
      r = t => {
        let a;
        return t.u && ((a = e.get(t.u)) ? (l.delete(a), t = r(t.u)) : e.set(t.u, t)), t;
      };
    return o(t, a => {
      for (let t of a.s) l.set(r(t), t.B);
    }),
      Array.from(l, ([{ C: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return F(a ? e.reverse() : e, t.A, t.D);
      });
  },
  et = (t, a, e) => t + (a - t) * $(1 - Math.exp(-e * N)),
  yt = () => {
    C && O > C && (C = 0, h4.innerHTML = "");
    let t = i(U[12].h, U[13].h), a = et(S, 0, 1);
    S = a + (ht(S + 60 * N) - a) * $(U[5].h - U[6].i),
      a = et(A, 0, 5),
      A = a + (ht(A + 56 * N) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
      a = et(P, 0, 4),
      P = a + (ht(P + 48 * N) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
      t = 2 * U[9].i - 1,
      ct = et(ct, U[9].i, .2 + .3 * (t < 0 ? -t : t)),
      ot = et(ot, e ? ot + (-9 - ot) * $(1.5 * N) : $(O / 3), 1),
      U[0].j && .8 < U[0].h && (j < 13
        ? (1 / 0 > C && (C = O + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), U[0].j = 0)
        : e
          || (1 / 0 > C && (C = O + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            e = 1));
    for (let t of E) t.g && (t.l = t.g(t));
    for (let t of U) t.g();
    for (let t of K) t.g();
  },
  gt = () => {
    h3.innerHTML = [
      "0",
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
    ][j = K.reduce((t, { j: a }) => t + a, 0)];
  },
  Mt = () => {
    localStorage.DanteSP22 = JSON.stringify([U.map(({ j: t }) => t), K.map(({ j: t }) => t), R, O, ct]);
  },
  v = (t, a = 1) => {
    let e = At;
    return E.push(At = a = { l: _, H: E.length, G: a, s: [] }), t(a), At = e, a;
  },
  p = (t, a = _, e) => At.s.push(...h(t, a, e)),
  d = r => {
    let s = At,
      n = U.length,
      o = {
        j: 0,
        h: 0,
        i: 0,
        u: s,
        g() {
          let t = o.j, a = o.h, e = o.i, l = s.l.multiply(r);
          o.I = l,
            k(l.transformPoint()) < 2.9 && V[5] && (a < .3 || .7 < a)
            && (o.j = t ? 0 : 1, n && 1 / 0 > C && (C = O + 1, h4.innerHTML = "* click *"), R = n, Mt()),
            o.h = et(a, t, 4),
            o.i = et(e, t, 1),
            o.l = l.rotate(60 * o.h - 30, 0).translateSelf(0, 1);
        },
      };
    U.push(o),
      p(f(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), I(.4, .5, .5)),
      p(f(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), I(.4, .5, .5)),
      p(f(), r.translate(0, -.4).scale(.5, .1, .5), I(.5, .5, .4));
  },
  b = (f, ...t) => {
    let m = -1,
      u = 0,
      g = 0,
      M = 0,
      v = 0,
      p = 0,
      d = 1,
      b = 3,
      I = {
        j: 0,
        g() {
          if (!I.j) {
            let r = 1, s = 1 / 0, t, a, e, l, n, o, c;
            for (let l of A) {
              let { x: t, z: a, w: e } = l;
              a = (t = Math.hypot(S - t, z - a)) - e, c ||= t < e, 0 < a && s > a && (s = a, P = l);
              var i = t / e;
              r = i > r ? r : i;
            }
            c
            || ({ x: t, z: a, w: e } = P,
              l = S - t,
              n = z - a,
              o = Math.hypot(l, n),
              h = Math.atan2(-n, l),
              d && (g = (Math.random() - .5) * Math.PI / 2, b = Z(1, b / (1 + Math.random()))),
              m = -Math.cos(h += g),
              u = Math.sin(h),
              .1 < o && (o = (o < e ? o : e) / (o || 1), S = l * o + t, z = n * o + a)),
              d = c,
              b = et(b, 3 + 6 * (1 - r), 3 + r),
              Y = et(Y, S = et(S, S + m, b), b),
              w = et(w, z = et(z, z + u, b), b),
              M = ft(M, Math.atan2(Y - v, w - p) / J - 180, 3 * N),
              v = Y,
              p = w;
            var h = (I.l = x.l.multiply(f.translate(Y, 0, w).rotateSelf(0, M, 7 * Math.sin(1.7 * O)))).transformPoint();
            k(h) < 1.5
              && (I.j = 1,
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
                ][j] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > C && (C = O + (j && j < 12 ? 5 : 7), h4.innerHTML = i),
                gt(),
                Mt());
          }
          I.j
            && (i = y % 4 - 2,
              I.l = E[2].l.translate(
                y % 4 * 1.2 - 1.7 + Math.sin(O + y) / 7,
                -2,
                1.7 * (y / 4 | 0) - 5.5 + (i < 0 ? -i : i) + Math.cos(O / 1.5 + y) / 6,
              ));
        },
      },
      x = At,
      y = K.length,
      A = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
      P = A[0],
      { x: S, z } = P,
      Y = S,
      w = z;
    K.push(I);
  },
  vt = (t, a, e, l) => {
    let r = 0,
      s = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (e - a),
      x = new DOMMatrix(ut(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return a = tt(
      8,
      t => (t = x.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        r -= t.x = (u * t.x | 0) / u / t.w,
        s -= t.y = (u * t.y | 0) / u / t.w,
        n -= t.z = (u * t.z | 0) / u / t.w,
        t),
    ),
      e = _.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      T(a, e).map(({ x: t, y: a, z: e }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = a > i ? i : a,
          h = h > a ? h : a,
          f = e > f ? f : e,
          m = m > e ? m : e;
      }),
      f *= f < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      _.scale(2 / (c - o), 2 / (h - i), 2 / (f - m)).translateSelf((c + o) / -2, (h + i) / -2, (f + m) / 2)
        .multiplySelf(e);
  },
  zt = (t, a = 35633) => (a = st.c6x(a), st.s3c(a, t), st.c6a(a), a),
  pt = (t, a) => {
    let e = {}, l = st.c1h();
    return st.abz(l, t), st.abz(l, zt(a, 35632)), st.l8l(l), t => t ? e[t] || (e[t] = st.gan(l, t)) : st.u7y(l);
  },
  dt = (t, e, a) => {
    if (a = E[a ? 41 : 42], lt) {
      for (var l of (a = _.rotate(0, 40 * Math.sin(nt) - 70), [37, 38, 39])) at(a, r, l - 1);
      st.uae(t, !1, r), st.d97(4, E[39].F - E[37].v, 5123, 2 * E[37].v);
    } else {
      for (l = 0; E.length > l; ++l) {
        let { G: t, H: a, l: e } = E[l];
        t && at(e, r, a - 1);
      }
      for (st.uae(t, !1, r), st.d97(4, (e ? E[39].F : E[37].v) - 3, 5123, 6), e = 0; U.length > e; ++e) {
        let { l: t, h: a } = U[e];
        at(t, r, e), r[16 * e + 15] = 1 - a;
      }
      for (st.uae(t, !1, r), st.das(4, E[40].F - E[40].v, 5123, 2 * E[40].v, U.length), e = 0; e < 13; ++e) {
        at(
          K[e].l,
          r,
          e,
        );
      }
      st.uae(t, !1, r), st.das(4, a.F - a.v, 5123, 2 * a.v, 13);
    }
  },
  bt = t => {
    h4.innerHTML += ".", setTimeout(t);
  },
  wt = t => Math.sin(t * Math.PI * 2),
  I = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  lt,
  It,
  At,
  rt,
  a = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Pt = new AudioContext(),
  St = Pt.createBufferSource(),
  st = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let t in st) st[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = st[t];
bt(() => {
  let t = 0,
    u = () => {
      if (2 == ++t) {
        let i = 0,
          h = 0,
          f = 0,
          m = 0,
          u = 0,
          g = 1,
          M = !1,
          v = { x: 0, y: 0, z: 0 },
          p = new Int32Array(256),
          d = new Uint8Array(65536),
          e = () => {
            var { u: t, I: a } = U[R], { x: a, y: e, z: l } = a.transformPoint({ x: 0, y: 8, z: -3 });
            G.x = v.x = a,
              G.y = v.y = w = e,
              G.z = v.z = l,
              I =
                Y =
                S =
                A =
                P =
                  0,
              g = 1,
              i = h = t?.H || 1;
          },
          l = t => {
            requestAnimationFrame(l),
              a = (t - (It || t)) / 1e3,
              lt ? (N = 0, V[5] = 0) : N = .066 < a ? .066 : a,
              O += N,
              nt += a,
              It = t,
              0 < N
              && (st.b6o(36160, s),
                st.fa7(),
                st.r9r(0, 0, 128, 128, 6408, 5121, d),
                st.iay(36009, [36064, 36096]),
                st.iay(36008, [36064, 36096]),
                (() => {
                  j = C = 0,
                    (() => {
                      let s = 0, n = 0, a = 0, e = 0, o = 0;
                      p.fill(0);
                      for (let t = 0; t < 31; ++t) {
                        let l = 0, r = 512 * t;
                        for (let e = 0; e < 128; e++) {
                          let t = r + 4 * e, a = (d[t] + d[1 + t]) / 255;
                          t = d[2 + t],
                            14 < e && e < 114 && (l += a),
                            t && a && (a = p[t] + 1, p[t] = a, s > a || (s = a, n = t));
                        }
                        l < 3 && 5 < t && (e += t / 32), 3 < l && (7 < t && (a += t / 15), o = 1);
                      }
                      n && (o = 1),
                        g ? n && (g = 0, h = n) : h = n || i,
                        i = n,
                        I = o,
                        A = et(A, o ? 6.5 : 8, 4),
                        v.y += a / 41 - (o ? 1 : A) * e / 41 * A * N;
                    })(),
                    (() => {
                      for (let t = 32; t < 128; t += 2) {
                        let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                        for (let s = 1 & t; s < 128; s += 2) {
                          let t = h + 4 * s,
                            a = h + 4 * (127 - s),
                            e = d[t] / 255,
                            l = d[1 + a] / 255,
                            r = s / 63.5 - 1;
                          r = 1 - (r < 0 ? -r : r),
                            10 < s && s < 118
                            && (n = Z(n, Z(e * r, e * d[a] / 127.5)), o = Z(o, Z(l * r, l * d[1 + t] / 255))),
                            (s < 54 || 74 < s) && .001 < (a = (1 - r) * (l < e ? e : l) / 3)
                            && (s < 64 && a > c ? c = a : 64 < s && a > i && (i = a));
                        }
                        c = i - c,
                          n = o - n,
                          (c < 0 ? -c : c) > (C < 0 ? -C : C) && (C = c),
                          (n < 0 ? -n : n) > (j < 0 ? -j : j) && (j = n);
                      }
                    })();
                  let t = x + (V[0] ? 1 : 0) + (V[2] ? -1 : 0), e = y + (V[1] ? 1 : 0) + (V[3] ? -1 : 0);
                  if (r = navigator.getGamepads()[0]) {
                    let a = r.buttons;
                    var l = r.axes;
                    (r = (s = t => a[t]?.pressed || 0 < a[t]?.value)(1) || s(3) || s(2) || s(0)) !== M && (M = r)
                    && (V[5] = 1),
                      t += (.2 < it(-l[0]) ? -l[0] : 0) + (s(14) ? 1 : 0) + (s(15) ? -1 : 0),
                      e += (.2 < it(-l[1]) ? -l[1] : 0) + (s(12) ? 1 : 0) + (s(13) ? -1 : 0),
                      rt && (.3 < it(l[2]) && (X += 80 * l[2] * N), .3 < it(l[3]) && (z += 80 * l[3] * N));
                  }
                  (e < 0 ? -e : e) < .05 && (e = 0), (t < 0 ? -t : t) < .05 && (t = 0);
                  var r = Math.atan2(e, t),
                    s = $(Math.hypot(e, t)),
                    a =
                      (t = s * Math.cos(r),
                        e = s * Math.sin(r),
                        l = $(1 - 5 * Z(C < 0 ? -C : C, j < 0 ? -j : j)),
                        h || (C += S * l * N, j += Y * l * N),
                        S = et(S, 0, I ? 8 : 4),
                        Y = et(Y, 0, I ? 8 : 4),
                        P = et(P, I ? (t || e ? I ? 7 : 4 : 0) * l : 0, I ? .1 < l ? 10 : t || e ? 5 : 7 : 1),
                        Math.sin(l = rt ? X * J : Math.PI) * P * N),
                    n =
                      (C -= t * (l = Math.cos(l) * P * N) - e * a,
                        j -= t * a + e * l,
                        (l = (a = 1 === E[h].G && E[h].l || _).inverse()).m41 = 0,
                        l.m42 = 0,
                        l.m43 = 0,
                        { x: C, z: j } = l.transformPoint({ x: C, z: j, w: 0 }),
                        v.x += C,
                        v.z += j,
                        h !== b
                        && (b = h, { x: l, y: n, z: o } = a.inverse().transformPoint(G), v.x = l, v.y = n, v.z = o),
                        l = G.x,
                        G.z),
                    { x: o, y: a, z: c } = a.transformPoint(v);
                  G.x = o,
                    G.y = a,
                    G.z = c,
                    o = it(w - a),
                    w = et(w, a + .1, 50 * o + 5),
                    h && (S = (G.x - l) / N, Y = (G.z - n) / N),
                    (t || e) && (f = 90 - r / J),
                    m = ft(m, f, 8 * N),
                    u += (s - u) * $(10 * N),
                    k = mt(k, G.x, .5, N),
                    F = mt(F, G.y, 2, N),
                    T = mt(T, G.z, .5, N),
                    rt
                      ? (q = et(q, G.x, 18 + (c = 200 * g)),
                        L = et(L, G.y + 1.5, 15 + c),
                        W = et(W, G.z, 18 + c),
                        z = Z(z < 87 ? z : 87, -87))
                      : (q = mt(q, k, 1, 2 * N),
                        L = mt(L, F + 13 + 15 * g, 4, 2 * N),
                        1 < ((a = (W = mt(W, T + -18, 1, 2 * N)) - T) < 0 ? -a : a)
                        && (l = L - F,
                          X = 270 + Math.atan2(a, o = q - k) / J,
                          z = 90 - Math.atan2(Math.hypot(a, o), l) / J)),
                    X = ht(X);
                })(),
                yt(),
                (G.x < -25 || G.z < 109 ? -25 : -9) > G.y && e(),
                1 === h && (U[9].j = G.x < -15 && G.z < 0 ? 1 : 0),
                V[5] = 0);
            var a = lt
              ? _.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + $(hC.clientWidth / 1e3))
              : _.rotate(-z, -X, -0).invertSelf().translateSelf(-q, -L, -W);
            0 < N
            && (D(),
              st.b6o(36160, s),
              st.v5y(0, 0, 128, 128),
              st.c4s(16640),
              st.cbf(!0, !1, !0, !1),
              st.uae(D("b"), !1, at(_.rotate(0, 180).invertSelf().translateSelf(-G.x, -G.y, .3 - G.z))),
              dt(D("c"), 0, 1),
              st.c4s(256),
              st.cbf(!1, !0, !0, !1),
              st.uae(D("b"), !1, at(_.translate(-G.x, -G.y, -G.z - .3))),
              dt(D("c"), 0, 1),
              st.f1s()),
              o(),
              st.b6o(36160, r),
              st.v5y(0, 0, 2048, 2048),
              Q[0](vt(a, .3, 55, 10)),
              Q[1](vt(a, 55, 177, 11)),
              H(),
              st.b6o(36160, null),
              st.v5y(0, 0, st.drawingBufferWidth, st.drawingBufferHeight),
              st.cbf(!0, !0, !0, !0),
              st.c4s(16640),
              Q[0](),
              Q[1](),
              st.uae(H("a"), !1, ut(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              st.uae(H("b"), !1, at(a)),
              st.ubu(H("k"), q, L, W),
              dt(H("c"), !rt, 0),
              c(),
              st.ubu(c("j"), st.drawingBufferWidth, st.drawingBufferHeight, nt),
              lt ? st.ubu(c("k"), 0, 0, 0) : st.ubu(c("k"), q, L, W),
              st.uae(c("b"), !1, at(a.inverse())),
              st.d97(4, 3, 5123, 0),
              st.b6o(36160, s),
              st.f1s();
          },
          b,
          I,
          A,
          P,
          S,
          Y,
          w,
          C,
          j,
          k,
          F,
          T;
        try {
          let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
          U.map((t, a) => t.h = t.i = t.j = a ? 0 | e[a] : 0), K.map((t, a) => t.j = 0 | l[a]), R = t, O = a, ct = r;
        } catch {}
        ot = R < 0 ? 0 : 1 < R ? 1 : R, gt();
        let r = st.c5w(),
          s = st.c5w(),
          t = st.c3z(),
          a = st.c25(),
          n = zt(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          o = pt(
            zt(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          c = pt(
            zt("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          D = pt(
            n,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          H = pt(
            n,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          Q =
            (D(),
              st.uae(D("a"), !1, ut(1.4, .59, 1e-4, 1)),
              c(),
              st.ubh(c("q"), 3),
              H(),
              st.ubh(H("q"), 3),
              tt(2, t => {
                let a = new Float32Array(16), e = st.c25(), l = H(t ? "j" : "i");
                return st.b6o(36160, r),
                  st.d45([0]),
                  st.r9l(0),
                  st.ubh(H(t ? "h" : "g"), t),
                  st.a4v(33984 + t),
                  st.b9j(3553, e),
                  st.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                  st.t2z(3553, 10241, 9729),
                  st.t2z(3553, 10240, 9729),
                  st.t2z(3553, 34893, 515),
                  st.t2z(3553, 34892, 34894),
                  st.t2z(3553, 10243, 33071),
                  st.t2z(3553, 10242, 33071),
                  t => {
                    t
                      ? (at(t, a),
                        st.uae(o("b"), !1, a),
                        st.fas(36160, 36096, 3553, e, 0),
                        st.c4s(256),
                        dt(o("c"), !rt, 0))
                      : st.uae(l, !1, a);
                  };
              }));
        st.e8z(2929),
          st.e8z(2884),
          st.c70(1),
          st.c7a(1029),
          st.d4n(515),
          st.c5t(0, 0, 0, 1),
          st.b6o(36160, s),
          st.bb1(36161, t),
          st.r4v(36161, 33189, 128, 128),
          st.f8w(36160, 36096, 36161, t),
          st.a4v(33987),
          st.b9j(3553, a),
          st.fas(36160, 36064, 3553, a, 0),
          st.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          st.a4v(33987),
          st.b9j(3553, st.c25()),
          st.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, B),
          st.gbn(3553),
          st.t2z(3553, 10241, 9987),
          st.t2z(3553, 10240, 9729),
          E[37].g = () => _.translate(G.x, w, G.z).rotateSelf(0, m),
          [38, 39].map((t, a) => {
            E[t].g = () =>
              E[37].l.translate(0, u * $(.45 * Math.sin(9.1 * O + Math.PI * (a - 1) - Math.PI / 2))).rotateSelf(
                u * Math.sin(9.1 * O + Math.PI * (a - 1)) * .25 / J,
                0,
              );
          }),
          yt(),
          e(),
          q = k = G.x,
          L = (F = G.y) + 13,
          W = (T = G.z) + -18,
          requestAnimationFrame(l),
          (() => {
            let t = !0,
              a = () => {
                lt || !t ? St.disconnect() : St.connect(Pt.destination), b4.innerHTML = "Music: " + t;
              },
              r = (t = !1) => {
                if (lt !== t) {
                  lt = t;
                  try {
                    t ? document.exitPointerLock() : St.start();
                  } catch {}
                  rt = 0, document.body.className = t ? "l m" : "l", a();
                }
              },
              l,
              n,
              o,
              c,
              i,
              h,
              f,
              m,
              u,
              g,
              M,
              s;
            b3.onclick = () => {
              confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
            },
              b1.onclick = () => r(),
              b2.onclick = () => {
                r(), rt = 1;
              },
              b4.onclick = () => {
                t = !t, a();
              },
              b5.onclick = () => r(!0),
              onclick = t => {
                s = 1, lt || (t.target === hC && (V[5] = !0), rt && hC.requestPointerLock());
              },
              onkeyup = onkeydown = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((l = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && lt)
                  ? lt && !s || r(!lt)
                  : 5
                      === (e = {
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
                      }[t])
                  ? l && (V[e] = 1)
                  : V[e] = l);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                rt && (t || a) && (X += .1 * t, z += .1 * a);
              },
              oncontextmenu = () => !1,
              hC.ontouchstart = x => {
                if (!lt) {
                  for (let { pageX: t, pageY: a, identifier: e } of x.changedTouches) {
                    rt && t > hC.clientWidth / 2
                      ? void 0 === m && (m = e, h = t, f = a, u = 0, g = X, M = z)
                      : void 0 === c && (c = e, n = t, o = a, i = 0);
                  }
                  l = nt;
                }
              },
              hC.ontouchmove = ({ changedTouches: l }) => {
                if (!lt) {
                  for (let { pageX: t, pageY: a, identifier: e } of l) {
                    var r, s;
                    m === e && (X = g + (t - h) / 3, z = M + (a - f) / 3, u = 1),
                      c === e
                      && (.4 < (s = (r = (e = (n - t) / 20) < 0 ? -1 : 1) * e)
                        && (i = 1, x = r * s ** 1.5, 1.5 < s && (n = t + 20 * r)),
                        .4 < (s = (r = (e = (o - a) / 20) < 0 ? -1 : 1) * e)
                        && (i = 1, y = r * s ** 1.5, 1.5 < s && (o = a + 20 * r)));
                  }
                }
              },
              hC.ontouchend = a => {
                let e;
                a.preventDefault();
                for (let t of a.changedTouches) {
                  t.identifier === m
                    ? (m = void 0, u || (e = 1), u = 0)
                    : t.identifier === c
                    ? (c = void 0, y = x = 0, i || (e = 1), i = 0)
                    : e = 1;
                }
                e && a.target === hC && l && .06 < (a = nt - l) && a < .7 && (V[5] = !0);
              },
              (document.onvisibilitychange = onblur = onresize = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  V.length = x = y = 0,
                  c = m = void 0,
                  document.hidden && r(!0);
              })(),
              r(!0);
          })();
      }
    },
    B = new Image();
  B.onload = B.onerror = u,
    B.src = a,
    (t => {
      let Q = 0,
        B = new Int32Array(10725888),
        e = () => {
          let l = Pt.createBuffer(2, 5362944, 44100);
          for (let e = 0; e < 2; e++) {
            for (let t = e, a = l.getChannelData(e); t < 10725888; t += 2) {
              a[t >> 1] = B[t] / 65536;
            }
          }
          St.buffer = l, St.loop = !0, bt(t);
        },
        l = () => {
          let f = 0,
            M,
            [v, p, d, b, I, A, P, S, x, y, Y, , C, z, j, k, t, w, a, F, T] =
              [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, [
                "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
                "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
                "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
                "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
                "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
                "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
              ]], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, [
                ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
                "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
                ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
                "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
                "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
                "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
              ]], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, [
                "9(((9(((9(((9(((9(((9(((9(((9",
                "9(((Q(((Q(((Q",
              ]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, [
                "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
                "9(9(9(9(9(999(9(((((Q",
              ]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, [
                "((((Q(((((((Q(((((((Q(((((((Q",
                "Q((Q((Q((Q((Q((Q((((Q",
              ]]][Q];
          y = y * y * 4;
          for (let g of [5513, 4562, 3891]) {
            let r = 0,
              s = 0,
              m = [],
              u,
              n,
              o,
              c = new Int32Array(768 * g),
              i = Math.PI * 2 ** (t - 8) / g,
              h = a * g & -2;
            for (let l = 0; l <= 11; ++l) {
              for (
                let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * Q + l];
                t < 32;
                ++t
              ) {
                let e = (32 * l + t) * g;
                for (var D, H = 0; H < 4; ++H) {
                  if (u = 0, a && (u = T[a - 1].charCodeAt(t + 32 * H) - 40, u += 0 < u ? 106 : 0), u) {
                    if (!(D = m[u])) {
                      let l = 0,
                        r = 0,
                        s,
                        n,
                        o = (D = u, g),
                        c = u,
                        i = Q < 2
                          ? t => t % 1 * 2 - 1
                          : wt,
                        h = Q < 2
                          ? Q < 1
                            ? t => t % 1 < .5 ? 1 : -1
                            : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                          : wt,
                        f = new Int32Array(S + x + y);
                      for (let a = 0, e = 0; S + x + y > a; ++a, ++e) {
                        let t = 1;
                        S > a ? t = a / S : S + x > a || (t = (1 - (t = (a - S - x) / y)) * 3 ** (-Y / 16 * t)),
                          e < 0
                          || (e -= 4 * o,
                            n = .00396 * 2 ** ((c + p - 256) / 12),
                            s = .00396 * 2 ** ((c + I - 256) / 12) * (1 + (Q ? 0 : .0072))),
                          f[a] = 80
                              * (i(l += n * t ** (d / 32)) * v + h(r += s * t ** (A / 32)) * b
                                + (P ? (2 * Math.random() - 1) * P : 0))
                              * t | 0;
                      }
                      D = m[D] = f;
                    }
                    for (let t = 0, a = 2 * e; D.length > t; ++t, a += 2) c[a] += D[t];
                  }
                }
                for (let t, a = 0; g > a; ++a) {
                  H = 0,
                    ((t = c[D = 2 * (e + a)]) || o)
                    && (n = .00308 * C,
                      1 !== Q && 4 !== Q || (n *= Math.sin(2 ** (t - 9) / g * D * Math.PI * 2) * F / 512 + .5),
                      n = 1.5 * Math.sin(n),
                      r += n * s,
                      M = (1 - z / 255) * (t - s) - r,
                      s += n * M,
                      t = 4 === Q ? s : 3 === Q ? M : r,
                      Q || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                      t *= j / 32,
                      o = 1e-5 < t * t,
                      M = Math.sin(i * D) * k / 512 + .5,
                      H = t * (1 - M),
                      t *= M),
                    D < h || (H += c[1 + D - h] * w / 255, t += c[D - h] * w / 255),
                    B[f + D] += c[D] = H,
                    ++D,
                    B[f + D] += c[D] = t;
                }
              }
            }
            f += c.length;
          }
          bt(++Q < 5 ? l : e);
        };
      bt(l);
    })(() => {
      let e = (t, a, e) =>
          _.translate(t + Math.sin(O + 2) / 5, a + Math.sin(.8 * O) / 3, e).rotateSelf(
            2 * Math.sin(O),
            Math.sin(.7 * O),
            Math.sin(.9 * O),
          ),
        s,
        n = (bt(() => {
          let a = 0,
            l = [],
            s = [],
            n = [],
            o = [],
            c = new Map(),
            i = new Int32Array(8),
            r = t => {
              let { x: a, y: e, z: l } = h[t], r = (m[0] = a, m[1] = e, m[2] = l, c.get(t = "" + (h.D ? f : i)));
              return void 0 !== r
                ? (a = 3 * r, o[a] = (o[a++] + i[5]) / 2, o[a] = (o[a++] + i[6]) / 2, o[a] = (o[a] + i[7]) / 2)
                : (c.set(t, r = c.size), s.push(a, e, l, m[3]), n.push(i[4]), o.push(i[5], i[6], i[7])),
                r;
            },
            h,
            f = new Int32Array(i.buffer, 0, 5),
            m = new Float32Array(i.buffer);
          for (let t of E) {
            for (h of (m[3] = t.G && t.H, t.s)) {
              let { x: t, y: a, z: e } = Y(h);
              i[4] = 0 | h.A, i[5] = 32767 * t, i[6] = 32767 * a, i[7] = 32767 * e;
              for (let t = 2, a = r(0), e = r(1); h.length > t; ++t) l.push(a, e, e = r(t));
            }
            t.s = null, t.v = a, t.F = a = l.length;
          }
          st.b11(34962, st.c1b()),
            st.b2v(34962, new Float32Array(s), 35044),
            st.v7s(0, 4, 5126, !1, 0, 0),
            st.b11(34962, st.c1b()),
            st.b2v(34962, new Int16Array(o), 35044),
            st.v7s(1, 3, 5122, !0, 0, 0),
            st.b11(34962, st.c1b()),
            st.b2v(34962, new Uint32Array(n), 35044),
            st.v7s(2, 4, 5121, !0, 0, 0),
            st.b11(34963, st.c1b()),
            st.b2v(34963, new Uint16Array(l), 35044),
            st.e3x(0),
            st.e3x(1),
            st.e3x(2),
            bt(u);
        }),
          (() => {
            let a = tt(
                11,
                t => _.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
              ),
              e = D(18);
            return tt(10, t => H(T(e, a[t]).reverse(), T(e, a[t + 1]), 1)).flat();
          })()),
        o = M(
          g(
            h(f(20, 1, 1.15, 1), _.translate(0, -3).scale(3.5, 1, 3.5), I(.7, .4, .25, .7)),
            h(f(20, 1, 1.3, 1), _.translate(0, -2.5).scale(2.6, 1, 3), I(.7, .4, .25, .2)),
            h(f(), _.translate(4, -1.2).scale3d(2), I(.7, .4, .25, .3)),
          ),
        ),
        c = M(
          g(
            h(f(), _.translate(0, -8).scale(6, 15, 2.2)),
            h(f(), _.translate(0, -14.1).scale(4, 13, 4)),
            h(f(20, 1), _.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
          ),
        );
      v(() => {
        p([w.slice(1)], _.translate(-2).scale3d(3).rotate(90, 0));
      }, 0),
        v(() => {
          let t = (a, e, l) =>
              v(t => {
                t.g = () => _.translate(r() * Math.sin(3 * a + O * a) * e),
                  w.map(({ x: t, z: a }) => {
                    p(f(11, 1), _.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), I(.5, .3, .7, .6)),
                      p(f(), _.translate(4 * t, 7, l + 4 * a).scale(1, .3), I(.5, .5, .5, .3));
                  }),
                  p(M(g(
                    h(f(), _.translate(0, 0, l).scale(5, 1, 5), I(.8, .8, .8, .3)),
                    ...[-1, 1].map(t =>
                      h(f(), _.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), I(.8, .8, .8, .3))
                    ),
                  ))),
                  p(f(), _.translate(0, -3, l).scale(8, 2, 8), I(.4, .4, .4, .3));
              }),
            r = () => {
              let t = U[2].i, a = 1 - U[4].i;
              return t < a ? t : a;
            },
            l = (v(t => {
              t.g = () => e(-12, 4.2, 40 * ot - 66), p(o), d(_.translate(0, -3, 4));
            }),
              tt(7, t => h(f(6, 1), _.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), I(.3, .3, .38))).flat()),
            x = (b(_.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              b(
                _.translate(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...D(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
              ),
              p(f(), _.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), I(.8, .8, .8, .2)),
              w.map(({ x: t, z: a }) => p(f(6), _.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), I(.6, .3, .3, .4))),
              [-23, 22].map(t => p(f(), _.translate(0, 0, t).scale(3, 1, 8), I(.9, .9, .9, .2))),
              [-15, 15].map((a, e) => {
                p(f(), _.translate(0, 6.3, a).scale(4, .3, 1), I(.3, .3, .3, .4)),
                  p(f(), _.translate(0, 1, a).scale(3, .2, .35), I(.5, .5, .5, .3)),
                  v(t => {
                    t.g = () => _.translate(0, 4.7 * -U[e + 1].h, a), p(l);
                  });
              }),
              tt(5, a =>
                tt(2, t =>
                  p(
                    n,
                    _.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                    I(1, 1, .8, .2),
                  ))),
              p(f(), _.translate(3, 1.5, -20).scale(.5, 2, 5), I(.7, .7, .7, .2)),
              p(f(), _.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), I(.75, .75, .75, .2)),
              p(f(5), _.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), I(.6, .3, .3, .4)),
              d(_.translate(-5.4, 1.5, -19).rotate(0, -90)),
              p(
                f(),
                _.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5),
                I(.8, .2, .2, .5),
              ),
              p(M(
                g(
                  m(
                    h(f(6, 0, 0, .3), _.translate(8, -3, -4).scale(13, 1, 13), I(.7, .7, .7, .2)),
                    h(f(6), _.translate(0, -8).scale(9, 8, 8), I(.4, .2, .5, .5)),
                    h(f(6, 0, 0, .3), _.translate(0, -.92).scale(13, 2, 13), I(.8, .8, .8, .2)),
                  ),
                  h(f(5), _.scale(5, 30, 5), I(.4, .2, .6, .5)),
                  h(f(5, 0, 1.5), _.translate(0, 1).scale(4.5, .3, 4.5), I(.7, .5, .9, .2)),
                  h(f(), _.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), I(.5, .5, .5, .5)),
                  h(f(6), _.translate(15, -1.5, 4).scale(3.5, 1, 3.5), I(.5, .5, .5, .5)),
                ),
              )),
              v(t => {
                t.g = () =>
                  _.translate(
                    0,
                    .01 < U[3].h ? (5 * Math.cos(1.5 * O) + 2) * U[3].i * (1 - U[2].h) + -15 * (1 - U[3].h) : -500,
                    0,
                  ),
                  d(_.translate(0, 1.2)),
                  p(f(5), _.translate(0, -.2).scale(5, 1, 5), I(.6, .65, .7, .3));
              }),
              d(_.translate(15, -2, 4)),
              t(.7, 12, 35),
              t(1, 8.2, 55),
              v(t => {
                t.g = () => _.translate(r() * Math.sin(O / 1.5 + 2) * 12),
                  p(
                    M(g(
                      m(
                        h(f(), _.scale(1.5, 1, 5), I(.9, .9, .9, .2)),
                        h(f(6), _.scale(4, 1, 5), I(.9, .9, .9, .2)),
                        h(f(), _.translate(0, -2).scale(2, 3.2, 1.9), I(.3, .8, .5, .5)),
                        h(f(16, 1, 0, 4), _.scale(1, 1, 1.5).rotate(0, 90), I(.9, .9, .9, .2)),
                      ),
                      h(f(), _.scale(1.3, 10, 1.3), I(.2, .7, .4, .6)),
                    )),
                    _.translate(0, 0, 45),
                  ),
                  b(_.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              v(t => {
                t.g = () => _.translate(9.8 * (1 - r())),
                  p(f(3), _.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), I(.3, .6, .6, .2)),
                  p(f(8), _.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), I(.8, .8, .8, .2)),
                  p(f(), _.translate(-23, -3, 55).scale(5.2, 1.7, 3), I(.5, .5, .5, .3)),
                  p(f(), _.translate(-23, -2.2, 62).scale(3, 1, 4), I(.5, .5, .5, .3)),
                  d(_.translate(-23, -.5, 66.5));
              }),
              p(f(), _.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), I(.9, .9, .9, .2)),
              v(t => {
                t.g = () => _.translate(0, $(1 - 5 * r()) * i(U[4].h, U[5].h) * Math.sin(1.35 * O) * 4),
                  p(f(), _.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), I(.7, .7, .7, .2)),
                  p(
                    M(g(h(f(), _.scale(3, 1.4, 2.7)), h(f(), _.scale(1.2, 8, 1.2)))),
                    _.translate(-33, -3, 55),
                    I(.7, .7, .7, .2),
                  );
              }),
              v(t => {
                t.g = () => _.translate(0, 0, $(1 - 5 * r()) * i(U[4].h, U[5].h) * Math.sin(.9 * O) * 8),
                  p(M(
                    g(
                      h(f(), _.translate(-27, -3, 55).scale(3, 1.4, 2.7), I(.9, .9, .9, .2)),
                      h(f(), _.translate(-27, -3, 55).scale(1, 3), I(.9, .9, .9, .2)),
                    ),
                  )),
                  p(f(), _.translate(-39, -3, 55).scale(3, 1.4, 2.7), I(.9, .9, .9, .2));
              }),
              v(t => {
                t.g = () => _.translate(0, -6.5 * U[4].i),
                  p(
                    f(6),
                    _.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9),
                    I(.7, .7, .7, .4),
                  );
              }),
              [...h(
                M(m(
                  h(f(), _.translate(0, -3).scale(11, 1.4, 3), I(.9, .9, .9, .2)),
                  g(
                    h(f(6), _.rotate(0, 0, 90).scale(6, 8, 6), I(.3, .6, .6, .3)),
                    h(f(4, 0, .01), _.translate(0, 6).scale(12, 2, .75).rotate(0, 45), I(.3, .6, .6, .3)),
                    h(f(6), _.rotate(0, 0, 90).scale(5, 12, 5), I(.3, .6, .6, .3)),
                    ...[5, 0, -5].map(t =>
                      h(f(5), _.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), I(.3, .6, .6, .3))
                    ),
                  ),
                )),
                _,
              )]),
            y =
              (p(x, _.translate(-53, 0, 55)),
                p(f(6), _.translate(-61.3, -2.4, 49).scale(3, 1, 5), I(.4, .6, .6, .3)),
                p(f(7), _.translate(-57, -2.6, 46).scale(4, 1, 4), I(.8, .8, .8, .3)),
                d(_.translate(-55, -1.1, 46).rotate(0, 90)),
                v(t => {
                  t.g = () => _.translate(-75, (1 - U[5].i) * (1 - U[6].h) * 3, 55).rotate(180 * (1 - U[5].i) + S, 0),
                    p(x);
                }, 2),
                p(f(), _.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), I(.7, .7, .7, .2)),
                p(f(3, 0, -.5), _.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), I(.8, .8, .8, .2)),
                p(
                  M(g(
                    m(
                      h(f(), _.translate(-100, -2.5, 55).scale(8, 1, 8), I(.8, .8, .8, .2)),
                      h(f(), _.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), I(.8, .8, .8, .2)),
                      h(f(), _.translate(-100, -2.6, 70).scale(3, 1.1, 7), I(.8, .8, .8, .2)),
                      h(f(), _.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), I(.8, .8, .8, .2)),
                      h(f(6), _.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), I(.6, .6, .6, .3)),
                      h(f(), _.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), I(.8, .8, .8, .2)),
                      h(f(), _.translate(-100, .42, 92).scale(3, 1.1, 4.1), I(.8, .8, .8, .2)),
                    ),
                    h(f(8), _.translate(-100, -1, 55).scale(7, .9, 7), I(.3, .3, .3, .4)),
                    h(f(8), _.translate(-100, -2, 55).scale(4, .3, 4), I(.4, .4, .4, .5)),
                    h(f(8), _.translate(-100, -3, 55).scale(.6, 1, .6), I(.4, .4, .4, .5)),
                  )),
                  _,
                ),
                b(_.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
                b(_.translate(-89, .2, 80), [0, 0, 6]),
                p(M(
                  g(
                    h(f(), _.translate(-100, 1, 63).scale(7.5, 4), I(.5, .5, .5, .4)),
                    h(f(), _.translate(-100, 0, 70).scale(2, 2, 10), I(.5, .5, .5, .4)),
                    h(f(20, 1), _.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), I(.5, .5, .5, .4)),
                  ),
                )),
                v(t => {
                  t.g = () => _.translate(-99.7, 5.3 * -U[6].h - 2, 63.5), p(l);
                }),
                w.map(({ x: a, z: e }) => {
                  p(f(6), _.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), I(.6, .15, .15, .8)),
                    [4, -.4].map(t =>
                      p(f(6), _.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), I(.4, .2, .2, .8))
                    );
                }),
                tt(7, t => {
                  p(
                    f((23 * t + 1) % 5 + 5, 0, .55),
                    _.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                      5 + t / 2,
                      1 + t / 6,
                      5 + t / 3,
                    ),
                    I(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                  );
                }),
                p(f(), _.translate(-87, -9.5, 24).scale(7, 1, 3), I(.4, .5, .6, .4)),
                p(f(4), _.translate(-86, -9.2, 27).scale(5, 1, 5), I(.5, .6, .7, .3)),
                p(f(12, 1), _.translate(-86, -9, 31).scale(1.5, 1, 1.5), I(.3, .3, .4, .1)),
                d(_.translate(-86, -7.5, 31)),
                v(t => {
                  t.g = () => _.translate(0, 3.5 * (1 - Z(U[6].h, U[7].h)) + i(U[7].i, U[6].i) * Math.sin(O) * 5),
                    [0, 12, 24].map(t =>
                      p(f(), _.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), I(.2, .5, .6, .2))
                    );
                }),
                v(t => {
                  t.g = () => {
                    let t = i(U[7].i, U[6].i);
                    return _.translate(0, t * Math.sin(O + 3) * 6, 6 * Math.sin(.6 * O + t) * t);
                  },
                    [6, 18].map(t =>
                      p(f(), _.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), I(.1, .4, .5, .2))
                    );
                }),
                p(
                  M(g(
                    m(
                      h(f(), _.scale(11, 1, 13), I(.3, .4, .6, .3)),
                      h(f(5), _.translate(0, 0, -7).scale(2, 1.2, 2), I(.2, .4, .7, .3)),
                      h(f(5), _.scale(9, 1.2, 9), I(0, .2, .3, .5)),
                    ),
                    h(f(5), _.scale(5.4, 5, 5.4), I(0, .2, .3, .5)),
                  )),
                  _.translate(-38.9, -11.3, 17),
                ),
                d(_.translate(-38.9, -9.6, 10)),
                v(t => {
                  t.g = () => _.translate(0, -7.3 * U[7].i),
                    p(
                      M(g(
                        m(
                          h(f(5), _.translate(0, 2).scale(5, 7, 5).skewY(8), I(.2, .4, .5, .5)),
                          h(f(5), _.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), I(.25, .35, .5, .5)),
                          h(f(5), _.translate(0, 9).scale(.6, 7, .6).skewY(8), I(.35, .3, .5, .5)),
                        ),
                        h(f(5), _.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), I(.2, .4, .5, .5)),
                      )),
                      _.translate(-38.9, -11.3, 17),
                    ),
                    b(
                      _.translate(-39.1, -.3, 17).rotate(0, 0, 10),
                      ...D(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.2]),
                    );
                }),
                w.map(({ x: t, z: a }) => {
                  s = _.translate(9 * t - 38.9, -7.3, 11 * a + 17),
                    p(f(14, 1), s.scale(1, 4), I(.25, .25, .25, 1)),
                    [1.5, 8].map(t => p(f(17, 1), s.translate(0, t - 4).scale(1.5, .5, 1.5), I(.6, .6, .6, .3)));
                }),
                p(
                  M(g(
                    m(
                      h(f(6), _.translate(0, 0, -36).scale(15, 1.2, 15), I(.7, .7, .7, .3)),
                      h(f(), _.translate(0, 0, -18).scale(4, 1.2, 6), I(.45, .4, .6, .3)),
                    ),
                    ...tt(6, a =>
                      tt(6, t =>
                        h(
                          f(6),
                          _.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                          I(.7, .7, .7, .3),
                        ))).flat(),
                  )),
                  _.translate(-38.9, -11.3, 17),
                ),
                b(_.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
                p(f(5), _.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), I(.8, .1, .25, .4)),
                d(_.translate(-84, -.5, 85).rotate(0, 45)),
                v(t => {
                  t.g = () => e(-123, 1.4, 55 + -65 * ct), d(_.translate(0, -3, -4).rotate(0, 180)), p(o);
                }),
                b(_.translate(-115, .2, -12), [0, 0, 3.5]),
                M(g(
                  h(f(), _.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), I(.25, .25, .35, .3)),
                  h(f(3), _.translate(0, 0, -5.5).scale(3, 2), I(.6, .3, .4, .3)),
                  ...[-1.2, 1.2].map(t => h(f(), _.translate(t, -.5, 1).scale(.14, .3, 6.5), I(.7, .2, 0, .3))),
                ))),
            a = (v(t => {
              t.g = () => {
                let t = Math.sin(1.1 * O);
                return _.translate.call(_, 0, -2, i(U[10].h, U[11].h) * (t < 0 ? -t : t) * -8.5 + 10);
              }, tt(2, t => p(y, _.translate(9 * t - 110 + (1 & t), 1.7, -12)));
            }),
              v(t => {
                t.g = () => {
                  let t = Math.sin(2.1 * O);
                  return _.translate.call(_, 0, -2, i(U[10].h, U[11].h) * (t < 0 ? -t : t) * -8.5 + 10);
                }, tt(2, t => p(y, _.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
              }),
              v(t => {
                t.g = () => {
                  let t = Math.sin(1.5 * O);
                  return _.translate.call(
                    _,
                    0,
                    -2,
                    -8.5 * Z((1 - U[10].h) * (1 - i(U[10].h, U[11].h)), i(U[10].h, U[11].h) * (t < 0 ? -t : t)) + 10,
                  );
                }, tt(3, t => p(y, _.translate(9 * t - 106, 1.7, -12)));
              }),
              p(
                M(g(
                  m(
                    h(f(), _.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                    h(f(), _.translate(26.5, -.6, 10).scale(17, 2, .5)),
                  ),
                  ...tt(4, t => h(f(), _.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                  ...tt(3, t => h(f(), _.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
                )),
                _.translate(-123, 0, -12),
                I(.5, .5, .6, .2),
              ),
              p(f(5), _.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), I(.25, .25, .35, 1)),
              p(f(), _.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), I(.8, .8, .8, .2)),
              p(f(6), _.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), I(.6, .5, .7, .2)),
              d(_.translate(-116, -1.4, -18).rotate(0, 180)),
              tt(3, t => {
                p(c, _.translate(12 * t - 109, -9, -12), I(.6, .6, .6, .3)),
                  p(c, _.translate(-77, -9, -12 * t - 20).rotate(0, 90), I(.6, .6, .6, .3));
              }),
              p(M(
                g(
                  h(f(12), _.translate(-77, -13.9, -12).scale(4, 18.2, 4), I(.7, .7, .7, .2)),
                  h(f(), _.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), I(.4, .5, .6, .2)),
                  h(f(), _.translate(-77, 0, -14).scale(1.5, 2.2, 2), I(.4, .5, .6, .2)),
                  h(f(12), _.translate(-77, 2.8, -12).scale(3, 5, 3), I(.4, .5, .6, .2)),
                ),
              )),
              p(f(), _.translate(-115.5, -17, -12).scale(.5, 15, 2.2), I(.6, .6, .6, .3)),
              p(f(), _.translate(-77, -17, -50.5).scale(2.2, 15, .5), I(.6, .6, .6, .3)),
              p(f(), _.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), I(.6, .6, .6, .3)),
              p(M(
                g(
                  h(f(), _.translate(-93, -5.8, -40).scale(9, 1, 5), I(.8, .8, .8, .1)),
                  h(f(9), _.translate(-98, -5.8, -40).scale(3, 8, 3), I(.7, .7, .7, .2)),
                ),
              )),
              p(f(9), _.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), I(.5, .5, .5, .3)),
              d(_.translate(-98, -4.4, -40).rotate(0, 90)),
              b(_.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
              p(M(
                g(
                  m(
                    h(f(6, 0, 0, .6), _.translate(-100, .7, 105.5).scale(8, 1, 11), I(.7, .7, .7, .2)),
                    h(f(), _.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), I(.7, .7, .7, .2)),
                    h(f(), _.translate(-91.2, .7, 107).scale(3, 1, 3.3), I(.7, .7, .7, .2)),
                  ),
                  h(f(5), _.translate(-100, .7, 113).scale(4, 3, 4), I(.7, .7, .7, .2)),
                ),
              )),
              tt(4, a =>
                v(t => {
                  t.g = () => {
                    let t = i(U[8].i, U[12].i);
                    return _.translate(
                      (2 < a ? 2 * (1 - t) + t : 0) - 100,
                      t * Math.sin(1.3 * O + 1.7 * a) * (3 + a / 3) + .7,
                      115 + (1 & a ? -1 : 1) * (1 - U[8].i) * (1 - U[12].i) * -7
                        + (t < .05 ? .05 : t) * Math.cos(1.3 * O + 7 * a) * (4 - 2 * (1 - a / 3)),
                    );
                  },
                    p(
                      f(6),
                      _.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                      I(.5 - a / 8, a / 12 + .5, .7, .3),
                    );
                })),
              v(t => {
                t.g = () => {
                  let t = i(U[8].i, U[12].i);
                  return _.translate(2.5 * (1 - t) - 139.7, -3 * (1 - U[8].h) + t * Math.sin(.8 * O) * -1 - 1.8, 93.5)
                    .rotateSelf(Math.cos(1.3 * O) * (3 * t + 3), 0);
                },
                  p(M(
                    g(h(f(10), _.scale(6, 2, 6), I(.1, .6, .5, .3)), h(f(10), _.scale(3.3, 6, 3.3), I(.1, .6, .5, .5))),
                  )),
                  s = _.translate(-7.5).rotate(0, 90),
                  p(f(15, 1), s.scale(3, 2.3, 3), I(.4, .4, .4, .3)),
                  p(f(10), s.scale(2, 2.5, 2), I(.3, .8, .7, .3)),
                  p(f(5), s.scale(1, 3), I(.5, .5, .5, .5)),
                  d(s.translate(0, 3.4).rotate(0, 180)),
                  [-1, 1].map(t =>
                    p(
                      n,
                      _.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3),
                      I(1, 1, .8, .2),
                    )
                  ),
                  b(_.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
              }),
              [-1, 1].map(a => {
                p(f(12, 1), _.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), I(.6, .24, .2, .5)),
                  [7.2, 1.5].map(t =>
                    p(f(15, 1), _.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), I(.5, .24, .2, .4))
                  ),
                  p(n, _.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), I(1, 1, .8)),
                  p(
                    M(g(
                      h(f(), _.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), I(.5, .5, .5, .4)),
                      h(f(), _.scale(3, 3, 10), I(.6, .24, .2, .5)),
                      h(f(28, 1), _.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), I(.6, .24, .2, .5)),
                      h(f(5), _.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), I(.6, .24, .2, .5)),
                      h(f(5), _.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), I(.6, .24, .2, .5)),
                    )),
                    _.translate(a - 100, .7, 97),
                  );
              }),
              v(t => {
                t.g = () => _.translate(-100, .6 - 6 * U[12].h, 96.5).scale(.88, 1.2), p(l);
              }),
              [
                ...h(f(25, 1), _.scale(8, 1, 8), I(.45, .45, .45, .2)),
                ...h(f(5), _.translate(0, 1).scale(1, .2), I(.3, .3, .3, .2)),
              ]);
          v(t => {
            t.g = () => _.translate(-80, 1, 106).rotate(0, 40 + A),
              p(M(
                g(
                  h(f(25, 1), _.scale(8, 1, 8), I(.45, .45, .45, .2)),
                  h(f(), _.translate(0, 0, -5.5).scale(1.5, 3, 2.5), I(.45, .45, .45, .2)),
                ),
              )),
              p(f(8), _.translate(0, 2).scale(3, 1.5, 3), I(.7, .7, .7, .1)),
              p(f(5), _.translate(0, 2).scale(1, 2), I(.3, .3, .3, .2)),
              b(_.translate(0, 3), ...D(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5]));
          }),
            v(t => {
              t.g = () => _.translate(-64, 1, 106).rotate(0, P),
                p(M(
                  g(
                    h(f(25, 1), _.translate(0, 2).scale(8, 1, 8), I(.35, 0, 0, .3)),
                    h(f(), _.scale(9, 5, 2), I(.3, 0, 0, .3)),
                  ),
                )),
                p(a),
                [-1, 1].map(t =>
                  p(
                    n,
                    _.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90),
                    I(1, 1, .8),
                  )
                );
            }),
            v(t => {
              t.g = () => _.translate(-48, 1, 106).rotate(0, 180 - P),
                p(M(
                  g(
                    h(f(25, 1), _.translate(0, 2).scale(8, 1, 8), I(.35, 0, 0, .3)),
                    h(f(), _.translate(7).scale(9, 5, 2), I(.3, 0, 0, .3)),
                    h(f(), _.translate(0, 0, 7).scale(2, 5, 9), I(.3, 0, 0, .3)),
                  ),
                )),
                p(a);
            }),
            v(t => {
              t.g = () => _.translate(-48, 1, 90).rotate(0, 270 + P),
                p(M(
                  g(
                    h(f(25, 1), _.translate(0, 2).scale(8, 1, 8), I(.35, 0, 0, .3)),
                    h(f(), _.translate(7).scale(9, 5, 2), I(.3, 0, 0, .3)),
                    h(f(), _.translate(0, 0, -7).scale(2, 5, 9), I(.3, 0, 0, .3)),
                  ),
                )),
                p(a);
            }),
            p(f(), _.translate(-56, 1, 106).scale(.7, .8, 2.5), I(.7, .7, .7, .2)),
            p(f(), _.translate(-48, 1, 98).scale(2.5, .8, .7), I(.7, .7, .7, .2)),
            p(f(), _.translate(-39, .4, 90).scale(2, 1, 2), I(.7, .7, .7, .3)),
            p(f(), _.translate(-34.2, .4, 90).scale(3, 1, 3), I(.7, .7, .7, .3)),
            d(_.translate(-34, 2.7, 96).rotate(-12, 0)),
            p(f(5), _.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), I(.2, .5, .5, .6)),
            [I(.1, .55, .45, .2), I(.2, .5, .5, .3), I(.3, .45, .55, .4)].map((a, e) =>
              v(t => {
                t.g = () =>
                  _.translate(
                    0,
                    (1 - U[13].i) * (1 - U[14].i) * (e ? 0 : 3) + i(U[13].i, U[14].i) * Math.sin(1.5 * O + 1.5 * e) * 4,
                  ),
                  p(f(), _.translate(-23.5, .5, 90 + 6.8 * e).scale(1 === e ? 2 : 3.3, 1, 3.3), a),
                  2 === e && p(f(), _.translate(-29.1, .4, 90).scale(2.1, 1, 3), I(.7, .7, .7, .3)),
                  1 === e
                  && p(
                    f(),
                    _.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1),
                    I(.6, .6, .7, .3),
                  );
              })
            ),
            p(M(
              g(
                h(f(6, 0, 0, .3), _.translate(0, -.92, 95).scale(14, 2, 14), I(.8, .8, .8, .2)),
                h(f(5), _.translate(0, 0, 95).scale3d(6), I(.3, .3, .3, .5)),
              ),
            )),
            [8, -6.1].map((a, e) =>
              tt(
                3,
                t =>
                  p(
                    c,
                    _.translate(6 * t - 6, a - (1 & t), 111 - .2 * (1 & t) - e),
                    1 & t ? I(.5, .5, .5, .3) : I(.35, .35, .35, .5),
                  ),
              )
            ),
            [-1, 1].map(t => p(n, _.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), I(1, 1, .8))),
            d(_.translate(0, 1.7, 82).rotate(0, 180)),
            p(f(5), _.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), I(.5, .3, .3, .4)),
            p(M(
              g(
                m(
                  h(f(), _.translate(0, 16, 110.5).scale(12, 1, 3), I(.5, .3, .3, .4)),
                  h(f(), _.translate(0, 16, 111).scale(3, 1, 3.8), I(.5, .3, .3, .4)),
                ),
                h(f(5), _.translate(0, 16, 103.5).scale(5.5, 5, 5.5), I(.5, .3, .3, .4)),
              ),
            )),
            v(t => {
              t.g = () => {
                let t = Math.sin(O);
                return _.translate(-2 * t).rotate(0, 0, 25 * t);
              },
                p(f(3), _.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), I(.5, .3, .3, .4)),
                [22, 30].map(t => {
                  p(f(6), _.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), I(.7, .7, .7, .4)),
                    p(f(), _.translate(0, 6.2, t + 95).scale(.5, 11, .5), I(.5, .3, .3, .4));
                });
            }),
            p(f(6), _.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), I(.5, .6, .7, .3)),
            p(f(), _.translate(0, 16, 129).scale(1.5, 1, 2), I(.5, .6, .7, .3)),
            p(f(7), _.translate(0, 16.2, 133).scale(5, 1, 5), I(.4, .5, .6, .4)),
            v(t => {
              t.g = () => {
                let t = i(i((U[14].h + U[14].i) / 2, U[13].i), (U[15].h + U[15].i) / 2);
                return _.translate(0, 16 * t, 8.5 * $(2 * t - 1) + 95);
              },
                p(f(5), _.scale(5, 1.1, 5), I(.5, .3, .3, .4)),
                p(f(5), _.scale(5.5, .9, 5.5), I(.25, .25, .25, .4)),
                d(_.translate(0, 1.5, -1).rotate(0, 180));
            }),
            b(_.translate(0, 3, 95), ...D(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
            b(_.translate(0, 19, 134), [0, 0, 3.5]);
        }),
        v(() => {
          [0, 180].map(t => p(n, _.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), I(1, 1, .8))),
            p(Q(20), _.translate(0, 1).scale(.5, .5, .5), I(1, .3, .4));
          let a = h(
            M(g(f(15, 1), h(f(), _.translate(0, 0, 1).scale(2, 2, .5)))),
            _.rotate(-90, 0).scale(.1, .05, .1),
            I(.3, .3, .3),
          );
          [-1, 1].map(t => p(a, _.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
            p(f(), _.translate(0, .9, .45).scale(.15, .02, .06), I(.3, .3, .3)),
            p(Q(20), _.scale(.7, .8, .55), I(1, .3, .4));
        }),
        [-1, 1].map(t =>
          v(() => {
            p(f(10, 1), _.translate(.3 * t, -.8).scale(.2, .7, .24), I(1, .3, .4));
          })
        ),
        v(() => {
          p(f(6, 1), _.scale(.13, 1.4, .13), I(.3, .3, .5, .1)),
            p(f(8, 1), _.translate(0, 1).scale(.21, .3, .21), I(1, .5, .2)),
            p(f(3), _.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), I(.2, .2, .2, .1));
        }, 0),
        v(() => {
          p(f(6).slice(0, -1), _.scale(.77, 1, .77), I(1, .3, .5));
        }, 0),
        v(() => {
          p(
            Q(30, 24, (t, a, e) => {
              let l = a / 24, r = t * Math.PI * 2 / 30, s = l ** .6 * Math.PI / 2;
              return t = l * l * Math.sin(t * Math.PI * 14 / 30) / 4,
                23 === a
                  ? { x: e.D = 0, y: -.5, z: 0 }
                  : {
                    x: Math.cos(r) * Math.sin(s),
                    y: Math.cos(l * Math.PI) - l - t,
                    z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
                  };
            }),
            _.scale3d(.7),
            I(1, 1, 1),
          ), [-1, 1].map(t => p(Q(12), _.translate(.16 * t, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
