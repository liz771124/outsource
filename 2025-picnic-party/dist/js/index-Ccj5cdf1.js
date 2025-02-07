import {
  d as vf,
  r as Le,
  o as qt,
  a as Xc,
  b as _s,
  c as J,
  e as ee,
  f as d,
  g as pi,
  n as ei,
  h as G,
  w as De,
  F as Et,
  i as Tt,
  u as le,
  j as bf,
  k as ta,
  t as _t,
  l as wf,
  v as yf,
  m as $a,
  p as xf,
  q as Cf,
  s as Gc,
  x as Zc,
  y as kf,
  z as Kc,
  A as Xt,
  B as Ef,
  C as Tf,
  D as Sf,
  E as Of,
  G as Af,
  H as Pf,
  I as Mf,
  J as Lf
} from './vendor-BerhiETi.js'
import { d as Df, S as Rf, g as ko } from './swiper-L3Wg9sED.js'
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n)
  new MutationObserver((n) => {
    for (const s of n)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(n) {
    const s = {}
    return (
      n.integrity && (s.integrity = n.integrity),
      n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : n.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    )
  }
  function i(n) {
    if (n.ep) return
    n.ep = !0
    const s = t(n)
    fetch(n.href, s)
  }
})()
const $f = '' + new URL('../img/fixed-buy-02.svg', import.meta.url).href,
  zf = '' + new URL('../img/gotop.svg', import.meta.url).href
function Ri(r) {
  if (r === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return r
}
function Qc(r, e) {
  ;(r.prototype = Object.create(e.prototype)),
    (r.prototype.constructor = r),
    (r.__proto__ = e)
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var jt = {
    autoSleep: 120,
    force3D: 'auto',
    nullTargetWarn: 1,
    units: { lineHeight: '' }
  },
  ar = { duration: 0.5, overwrite: !1, delay: 0 },
  za,
  ct,
  be,
  Kt = 1e8,
  pe = 1 / Kt,
  ia = Math.PI * 2,
  If = ia / 4,
  Bf = 0,
  Jc = Math.sqrt,
  Nf = Math.cos,
  jf = Math.sin,
  Ge = function (e) {
    return typeof e == 'string'
  },
  Ae = function (e) {
    return typeof e == 'function'
  },
  ji = function (e) {
    return typeof e == 'number'
  },
  Ia = function (e) {
    return typeof e > 'u'
  },
  Pi = function (e) {
    return typeof e == 'object'
  },
  St = function (e) {
    return e !== !1
  },
  Ba = function () {
    return typeof window < 'u'
  },
  ks = function (e) {
    return Ae(e) || Ge(e)
  },
  eu =
    (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
  ut = Array.isArray,
  na = /(?:-?\.?\d|\.)+/gi,
  tu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Gn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Eo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  iu = /[+-]=-?[.\d]+/,
  nu = /[^,'"\[\]\s]+/gi,
  Ff = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ke,
  xi,
  ra,
  Na,
  Ft = {},
  Zs = {},
  ru,
  su = function (e) {
    return (Zs = On(e, Ft)) && Mt
  },
  ja = function (e, t) {
    return console.warn(
      'Invalid property',
      e,
      'set to',
      t,
      'Missing plugin? gsap.registerPlugin()'
    )
  },
  as = function (e, t) {
    return !t && console.warn(e)
  },
  ou = function (e, t) {
    return (e && (Ft[e] = t) && Zs && (Zs[e] = t)) || Ft
  },
  ls = function () {
    return 0
  },
  Uf = { suppressEvents: !0, isStart: !0, kill: !1 },
  js = { suppressEvents: !0, kill: !1 },
  Hf = { suppressEvents: !0 },
  Fa = {},
  Qi = [],
  sa = {},
  au,
  zt = {},
  To = {},
  xl = 30,
  Fs = [],
  Ua = '',
  Ha = function (e) {
    var t = e[0],
      i,
      n
    if ((Pi(t) || Ae(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (n = Fs.length; n-- && !Fs[n].targetTest(t); );
      i = Fs[n]
    }
    for (n = e.length; n--; )
      (e[n] && (e[n]._gsap || (e[n]._gsap = new Mu(e[n], i)))) || e.splice(n, 1)
    return e
  },
  wn = function (e) {
    return e._gsap || Ha(Qt(e))[0]._gsap
  },
  lu = function (e, t, i) {
    return (i = e[t]) && Ae(i)
      ? e[t]()
      : (Ia(i) && e.getAttribute && e.getAttribute(t)) || i
  },
  Ot = function (e, t) {
    return (e = e.split(',')).forEach(t) || e
  },
  Re = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  Xe = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0
  },
  er = function (e, t) {
    var i = t.charAt(0),
      n = parseFloat(t.substr(2))
    return (
      (e = parseFloat(e)),
      i === '+' ? e + n : i === '-' ? e - n : i === '*' ? e * n : e / n
    )
  },
  Vf = function (e, t) {
    for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; );
    return n < i
  },
  Ks = function () {
    var e = Qi.length,
      t = Qi.slice(0),
      i,
      n
    for (sa = {}, Qi.length = 0, i = 0; i < e; i++)
      (n = t[i]),
        n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0)
  },
  cu = function (e, t, i, n) {
    Qi.length && !ct && Ks(),
      e.render(t, i, ct && t < 0 && (e._initted || e._startAt)),
      Qi.length && !ct && Ks()
  },
  uu = function (e) {
    var t = parseFloat(e)
    return (t || t === 0) && (e + '').match(nu).length < 2
      ? t
      : Ge(e)
        ? e.trim()
        : e
  },
  du = function (e) {
    return e
  },
  ni = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i])
    return e
  },
  qf = function (e) {
    return function (t, i) {
      for (var n in i)
        n in t || (n === 'duration' && e) || n === 'ease' || (t[n] = i[n])
    }
  },
  On = function (e, t) {
    for (var i in t) e[i] = t[i]
    return e
  },
  Cl = function r(e, t) {
    for (var i in t)
      i !== '__proto__' &&
        i !== 'constructor' &&
        i !== 'prototype' &&
        (e[i] = Pi(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i])
    return e
  },
  Qs = function (e, t) {
    var i = {},
      n
    for (n in e) n in t || (i[n] = e[n])
    return i
  },
  qr = function (e) {
    var t = e.parent || ke,
      i = e.keyframes ? qf(ut(e.keyframes)) : ni
    if (St(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp)
    return e
  },
  Wf = function (e, t) {
    for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i]; );
    return i < 0
  },
  fu = function (e, t, i, n, s) {
    var o = e[n],
      a
    if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[i]), (e[i] = t)),
      t._next ? (t._next._prev = t) : (e[n] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    )
  },
  co = function (e, t, i, n) {
    i === void 0 && (i = '_first'), n === void 0 && (n = '_last')
    var s = t._prev,
      o = t._next
    s ? (s._next = o) : e[i] === t && (e[i] = o),
      o ? (o._prev = s) : e[n] === t && (e[n] = s),
      (t._next = t._prev = t.parent = null)
  },
  tn = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0)
  },
  yn = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent)
    return e
  },
  Yf = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent)
    return e
  },
  oa = function (e, t, i, n) {
    return (
      e._startAt &&
      (ct
        ? e._startAt.revert(js)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, n))
    )
  },
  Xf = function r(e) {
    return !e || (e._ts && r(e.parent))
  },
  kl = function (e) {
    return e._repeat ? lr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0
  },
  lr = function (e, t) {
    var i = Math.floor((e /= t))
    return e && i === e ? i - 1 : i
  },
  Js = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    )
  },
  uo = function (e) {
    return (e._end = Xe(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || pe) || 0)
    ))
  },
  fo = function (e, t) {
    var i = e._dp
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = Xe(
          i._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        uo(e),
        i._dirty || yn(i, e)),
      e
    )
  },
  pu = function (e, t) {
    var i
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((i = Js(e.rawTime(), t)),
        (!t._dur || vs(0, t.totalDuration(), i) - t._tTime > pe) &&
          t.render(i, !0)),
      yn(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp)
      e._zTime = -pe
    }
  },
  ki = function (e, t, i, n) {
    return (
      t.parent && tn(t),
      (t._start = Xe(
        (ji(i) ? i : i || e !== ke ? Yt(e, i, t) : e._time) + t._delay
      )),
      (t._end = Xe(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      fu(e, t, '_first', '_last', e._sort ? '_start' : 0),
      aa(t) || (e._recent = t),
      n || pu(e, t),
      e._ts < 0 && fo(e, e._tTime),
      e
    )
  },
  hu = function (e, t) {
    return (
      (Ft.ScrollTrigger || ja('scrollTrigger', t)) &&
      Ft.ScrollTrigger.create(t, e)
    )
  },
  gu = function (e, t, i, n, s) {
    if ((qa(e, t, s), !e._initted)) return 1
    if (
      !i &&
      e._pt &&
      !ct &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      au !== It.frame
    )
      return Qi.push(e), (e._lazy = [s, n]), 1
  },
  Gf = function r(e) {
    var t = e.parent
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t))
  },
  aa = function (e) {
    var t = e.data
    return t === 'isFromStart' || t === 'isStart'
  },
  Zf = function (e, t, i, n) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && Gf(e) && !(!e._initted && aa(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !aa(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      c,
      u,
      p
    if (
      (a &&
        e._repeat &&
        ((l = vs(0, e._tDur, t)),
        (u = lr(l, a)),
        e._yoyo && u & 1 && (o = 1 - o),
        u !== lr(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || ct || n || e._zTime === pe || (!t && e._zTime))
    ) {
      if (!e._initted && gu(e, t, n, i, l)) return
      for (
        p = e._zTime,
          e._zTime = t || (i ? pe : 0),
          i || (i = t && !p),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;

      )
        c.r(o, c.d), (c = c._next)
      t < 0 && oa(e, t, i, !0),
        e._onUpdate && !i && Nt(e, 'onUpdate'),
        l && e._repeat && !i && e.parent && Nt(e, 'onRepeat'),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && tn(e, 1),
          !i &&
            !ct &&
            (Nt(e, o ? 'onComplete' : 'onReverseComplete', !0),
            e._prom && e._prom()))
    } else e._zTime || (e._zTime = t)
  },
  Kf = function (e, t, i) {
    var n
    if (i > t)
      for (n = e._first; n && n._start <= i; ) {
        if (n.data === 'isPause' && n._start > t) return n
        n = n._next
      }
    else
      for (n = e._last; n && n._start >= i; ) {
        if (n.data === 'isPause' && n._start < t) return n
        n = n._prev
      }
  },
  cr = function (e, t, i, n) {
    var s = e._repeat,
      o = Xe(t) || 0,
      a = e._tTime / e._tDur
    return (
      a && !n && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : Xe(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !n && fo(e, (e._tTime = e._tDur * a)),
      e.parent && uo(e),
      i || yn(e.parent, e),
      e
    )
  },
  El = function (e) {
    return e instanceof vt ? yn(e) : cr(e, e._dur)
  },
  Qf = { _start: 0, endTime: ls, totalDuration: ls },
  Yt = function r(e, t, i) {
    var n = e.labels,
      s = e._recent || Qf,
      o = e.duration() >= Kt ? s.endTime(!1) : e._dur,
      a,
      l,
      c
    return Ge(t) && (isNaN(t) || t in n)
      ? ((l = t.charAt(0)),
        (c = t.substr(-1) === '%'),
        (a = t.indexOf('=')),
        l === '<' || l === '>'
          ? (a >= 0 && (t = t.replace(/=/, '')),
            (l === '<' ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (c ? (a < 0 ? s : i).totalDuration() / 100 : 1))
          : a < 0
            ? (t in n || (n[t] = o), n[t])
            : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
              c && i && (l = (l / 100) * (ut(i) ? i[0] : i).totalDuration()),
              a > 1 ? r(e, t.substr(0, a - 1), i) + l : o + l))
      : t == null
        ? o
        : +t
  },
  Wr = function (e, t, i) {
    var n = ji(t[1]),
      s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      a,
      l
    if ((n && (o.duration = t[1]), (o.parent = i), e)) {
      for (a = o, l = i; l && !('immediateRender' in a); )
        (a = l.vars.defaults || {}), (l = St(l.vars.inherit) && l.parent)
      ;(o.immediateRender = St(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1])
    }
    return new Ne(t[0], o, t[s + 1])
  },
  on = function (e, t) {
    return e || e === 0 ? t(e) : t
  },
  vs = function (e, t, i) {
    return i < e ? e : i > t ? t : i
  },
  lt = function (e, t) {
    return !Ge(e) || !(t = Ff.exec(e)) ? '' : t[1]
  },
  Jf = function (e, t, i) {
    return on(i, function (n) {
      return vs(e, t, n)
    })
  },
  la = [].slice,
  mu = function (e, t) {
    return (
      e &&
      Pi(e) &&
      'length' in e &&
      ((!t && !e.length) || (e.length - 1 in e && Pi(e[0]))) &&
      !e.nodeType &&
      e !== xi
    )
  },
  ep = function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (n) {
        var s
        return (Ge(n) && !t) || mu(n, 1)
          ? (s = i).push.apply(s, Qt(n))
          : i.push(n)
      }) || i
    )
  },
  Qt = function (e, t, i) {
    return be && !t && be.selector
      ? be.selector(e)
      : Ge(e) && !i && (ra || !ur())
        ? la.call((t || Na).querySelectorAll(e), 0)
        : ut(e)
          ? ep(e, i)
          : mu(e)
            ? la.call(e, 0)
            : e
              ? [e]
              : []
  },
  ca = function (e) {
    return (
      (e = Qt(e)[0] || as('Invalid scope') || {}),
      function (t) {
        var i = e.current || e.nativeElement || e
        return Qt(
          t,
          i.querySelectorAll
            ? i
            : i === e
              ? as('Invalid scope') || Na.createElement('div')
              : e
        )
      }
    )
  },
  _u = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random()
    })
  },
  vu = function (e) {
    if (Ae(e)) return e
    var t = Pi(e) ? e : { each: e },
      i = xn(t.ease),
      n = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      a = n > 0 && n < 1,
      l = isNaN(n) || a,
      c = t.axis,
      u = n,
      p = n
    return (
      Ge(n)
        ? (u = p = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
        : !a && l && ((u = n[0]), (p = n[1])),
      function (h, f, m) {
        var g = (m || t).length,
          _ = o[g],
          k,
          T,
          x,
          v,
          y,
          E,
          C,
          S,
          b
        if (!_) {
          if (((b = t.grid === 'auto' ? 0 : (t.grid || [1, Kt])[1]), !b)) {
            for (
              C = -Kt;
              C < (C = m[b++].getBoundingClientRect().left) && b < g;

            );
            b < g && b--
          }
          for (
            _ = o[g] = [],
              k = l ? Math.min(b, g) * u - 0.5 : n % b,
              T = b === Kt ? 0 : l ? (g * p) / b - 0.5 : (n / b) | 0,
              C = 0,
              S = Kt,
              E = 0;
            E < g;
            E++
          )
            (x = (E % b) - k),
              (v = T - ((E / b) | 0)),
              (_[E] = y = c ? Math.abs(c === 'y' ? v : x) : Jc(x * x + v * v)),
              y > C && (C = y),
              y < S && (S = y)
          n === 'random' && _u(_),
            (_.max = C - S),
            (_.min = S),
            (_.v = g =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (b > g
                    ? g - 1
                    : c
                      ? c === 'y'
                        ? g / b
                        : b
                      : Math.max(b, g / b)) ||
                0) * (n === 'edges' ? -1 : 1)),
            (_.b = g < 0 ? s - g : s),
            (_.u = lt(t.amount || t.each) || 0),
            (i = i && g < 0 ? Ou(i) : i)
        }
        return (
          (g = (_[h] - _.min) / _.max || 0),
          Xe(_.b + (i ? i(g) : g) * _.v) + _.u
        )
      }
    )
  },
  ua = function (e) {
    var t = Math.pow(10, ((e + '').split('.')[1] || '').length)
    return function (i) {
      var n = Xe(Math.round(parseFloat(i) / e) * e * t)
      return (n - (n % 1)) / t + (ji(i) ? 0 : lt(i))
    }
  },
  bu = function (e, t) {
    var i = ut(e),
      n,
      s
    return (
      !i &&
        Pi(e) &&
        ((n = i = e.radius || Kt),
        e.values
          ? ((e = Qt(e.values)), (s = !ji(e[0])) && (n *= n))
          : (e = ua(e.increment))),
      on(
        t,
        i
          ? Ae(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= n ? s : o
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    c = Kt,
                    u = 0,
                    p = e.length,
                    h,
                    f;
                  p--;

                )
                  s
                    ? ((h = e[p].x - a), (f = e[p].y - l), (h = h * h + f * f))
                    : (h = Math.abs(e[p] - a)),
                    h < c && ((c = h), (u = p))
                return (
                  (u = !n || c <= n ? e[u] : o),
                  s || u === o || ji(o) ? u : u + lt(o)
                )
              }
          : ua(e)
      )
    )
  },
  wu = function (e, t, i, n) {
    return on(ut(e) ? !t : i === !0 ? !!(i = 0) : !n, function () {
      return ut(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (n = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
            Math.floor(
              Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) *
                i *
                n
            ) / n
    })
  },
  tp = function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i]
    return function (n) {
      return t.reduce(function (s, o) {
        return o(s)
      }, n)
    }
  },
  ip = function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || lt(i))
    }
  },
  np = function (e, t, i) {
    return xu(e, t, 0, 1, i)
  },
  yu = function (e, t, i) {
    return on(i, function (n) {
      return e[~~t(n)]
    })
  },
  rp = function r(e, t, i) {
    var n = t - e
    return ut(e)
      ? yu(e, r(0, e.length), t)
      : on(i, function (s) {
          return ((n + ((s - e) % n)) % n) + e
        })
  },
  sp = function r(e, t, i) {
    var n = t - e,
      s = n * 2
    return ut(e)
      ? yu(e, r(0, e.length - 1), t)
      : on(i, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > n ? s - o : o)
        })
  },
  cs = function (e) {
    for (var t = 0, i = '', n, s, o, a; ~(n = e.indexOf('random(', t)); )
      (o = e.indexOf(')', n)),
        (a = e.charAt(n + 7) === '['),
        (s = e.substr(n + 7, o - n - 7).match(a ? nu : na)),
        (i +=
          e.substr(t, n - t) + wu(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1)
    return i + e.substr(t, e.length - t)
  },
  xu = function (e, t, i, n, s) {
    var o = t - e,
      a = n - i
    return on(s, function (l) {
      return i + (((l - e) / o) * a || 0)
    })
  },
  op = function r(e, t, i, n) {
    var s = isNaN(e + t)
      ? 0
      : function (f) {
          return (1 - f) * e + f * t
        }
    if (!s) {
      var o = Ge(e),
        a = {},
        l,
        c,
        u,
        p,
        h
      if ((i === !0 && (n = 1) && (i = null), o)) (e = { p: e }), (t = { p: t })
      else if (ut(e) && !ut(t)) {
        for (u = [], p = e.length, h = p - 2, c = 1; c < p; c++)
          u.push(r(e[c - 1], e[c]))
        p--,
          (s = function (m) {
            m *= p
            var g = Math.min(h, ~~m)
            return u[g](m - g)
          }),
          (i = t)
      } else n || (e = On(ut(e) ? [] : {}, e))
      if (!u) {
        for (l in t) Va.call(a, e, l, 'get', t[l])
        s = function (m) {
          return Xa(m, a) || (o ? e.p : e)
        }
      }
    }
    return on(i, s)
  },
  Tl = function (e, t, i) {
    var n = e.labels,
      s = Kt,
      o,
      a,
      l
    for (o in n)
      (a = n[o] - t),
        a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a))
    return l
  },
  Nt = function (e, t, i) {
    var n = e.vars,
      s = n[t],
      o = be,
      a = e._ctx,
      l,
      c,
      u
    if (s)
      return (
        (l = n[t + 'Params']),
        (c = n.callbackScope || e),
        i && Qi.length && Ks(),
        a && (be = a),
        (u = l ? s.apply(c, l) : s.call(c)),
        (be = o),
        u
      )
  },
  Br = function (e) {
    return (
      tn(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!ct),
      e.progress() < 1 && Nt(e, 'onInterrupt'),
      e
    )
  },
  Zn,
  Cu = [],
  ku = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Ba() || e.headless)) {
        var t = e.name,
          i = Ae(e),
          n =
            t && !i && e.init
              ? function () {
                  this._props = []
                }
              : e,
          s = {
            init: ls,
            render: Xa,
            add: Va,
            kill: xp,
            modifier: yp,
            rawVars: 0
          },
          o = { targetTest: 0, get: 0, getSetter: Ya, aliases: {}, register: 0 }
        if ((ur(), e !== n)) {
          if (zt[t]) return
          ni(n, ni(Qs(e, s), o)),
            On(n.prototype, On(s, Qs(e, o))),
            (zt[(n.prop = t)] = n),
            e.targetTest && (Fs.push(n), (Fa[t] = 1)),
            (t =
              (t === 'css' ? 'CSS' : t.charAt(0).toUpperCase() + t.substr(1)) +
              'Plugin')
        }
        ou(t, n), e.register && e.register(Mt, n, At)
      } else Cu.push(e)
  },
  de = 255,
  Nr = {
    aqua: [0, de, de],
    lime: [0, de, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, de],
    navy: [0, 0, 128],
    white: [de, de, de],
    olive: [128, 128, 0],
    yellow: [de, de, 0],
    orange: [de, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [de, 0, 0],
    pink: [de, 192, 203],
    cyan: [0, de, de],
    transparent: [de, de, de, 0]
  },
  So = function (e, t, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (i - t) * e * 6
        : e < 0.5
          ? i
          : e * 3 < 2
            ? t + (i - t) * (2 / 3 - e) * 6
            : t) *
        de +
        0.5) |
        0
    )
  },
  Eu = function (e, t, i) {
    var n = e ? (ji(e) ? [e >> 16, (e >> 8) & de, e & de] : 0) : Nr.black,
      s,
      o,
      a,
      l,
      c,
      u,
      p,
      h,
      f,
      m
    if (!n) {
      if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), Nr[e]))
        n = Nr[e]
      else if (e.charAt(0) === '#') {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              '#' +
              s +
              s +
              o +
              o +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
          e.length === 9)
        )
          return (
            (n = parseInt(e.substr(1, 6), 16)),
            [n >> 16, (n >> 8) & de, n & de, parseInt(e.substr(7), 16) / 255]
          )
        ;(e = parseInt(e.substr(1), 16)), (n = [e >> 16, (e >> 8) & de, e & de])
      } else if (e.substr(0, 3) === 'hsl') {
        if (((n = m = e.match(na)), !t))
          (l = (+n[0] % 360) / 360),
            (c = +n[1] / 100),
            (u = +n[2] / 100),
            (o = u <= 0.5 ? u * (c + 1) : u + c - u * c),
            (s = u * 2 - o),
            n.length > 3 && (n[3] *= 1),
            (n[0] = So(l + 1 / 3, s, o)),
            (n[1] = So(l, s, o)),
            (n[2] = So(l - 1 / 3, s, o))
        else if (~e.indexOf('='))
          return (n = e.match(tu)), i && n.length < 4 && (n[3] = 1), n
      } else n = e.match(na) || Nr.transparent
      n = n.map(Number)
    }
    return (
      t &&
        !m &&
        ((s = n[0] / de),
        (o = n[1] / de),
        (a = n[2] / de),
        (p = Math.max(s, o, a)),
        (h = Math.min(s, o, a)),
        (u = (p + h) / 2),
        p === h
          ? (l = c = 0)
          : ((f = p - h),
            (c = u > 0.5 ? f / (2 - p - h) : f / (p + h)),
            (l =
              p === s
                ? (o - a) / f + (o < a ? 6 : 0)
                : p === o
                  ? (a - s) / f + 2
                  : (s - o) / f + 4),
            (l *= 60)),
        (n[0] = ~~(l + 0.5)),
        (n[1] = ~~(c * 100 + 0.5)),
        (n[2] = ~~(u * 100 + 0.5))),
      i && n.length < 4 && (n[3] = 1),
      n
    )
  },
  Tu = function (e) {
    var t = [],
      i = [],
      n = -1
    return (
      e.split(Ji).forEach(function (s) {
        var o = s.match(Gn) || []
        t.push.apply(t, o), i.push((n += o.length + 1))
      }),
      (t.c = i),
      t
    )
  },
  Sl = function (e, t, i) {
    var n = '',
      s = (e + n).match(Ji),
      o = t ? 'hsla(' : 'rgba(',
      a = 0,
      l,
      c,
      u,
      p
    if (!s) return e
    if (
      ((s = s.map(function (h) {
        return (
          (h = Eu(h, t, 1)) &&
          o +
            (t ? h[0] + ',' + h[1] + '%,' + h[2] + '%,' + h[3] : h.join(',')) +
            ')'
        )
      })),
      i && ((u = Tu(e)), (l = i.c), l.join(n) !== u.c.join(n)))
    )
      for (c = e.replace(Ji, '1').split(Gn), p = c.length - 1; a < p; a++)
        n +=
          c[a] +
          (~l.indexOf(a)
            ? s.shift() || o + '0,0,0,0)'
            : (u.length ? u : s.length ? s : i).shift())
    if (!c) for (c = e.split(Ji), p = c.length - 1; a < p; a++) n += c[a] + s[a]
    return n + c[p]
  },
  Ji = (function () {
    var r =
        '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
      e
    for (e in Nr) r += '|' + e + '\\b'
    return new RegExp(r + ')', 'gi')
  })(),
  ap = /hsl[a]?\(/,
  Su = function (e) {
    var t = e.join(' '),
      i
    if (((Ji.lastIndex = 0), Ji.test(t)))
      return (
        (i = ap.test(t)),
        (e[1] = Sl(e[1], i)),
        (e[0] = Sl(e[0], i, Tu(e[1]))),
        !0
      )
  },
  us,
  It = (function () {
    var r = Date.now,
      e = 500,
      t = 33,
      i = r(),
      n = i,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      c,
      u,
      p,
      h,
      f,
      m = function g(_) {
        var k = r() - n,
          T = _ === !0,
          x,
          v,
          y,
          E
        if (
          ((k > e || k < 0) && (i += k - t),
          (n += k),
          (y = n - i),
          (x = y - o),
          (x > 0 || T) &&
            ((E = ++p.frame),
            (h = y - p.time * 1e3),
            (p.time = y = y / 1e3),
            (o += x + (x >= s ? 4 : s - x)),
            (v = 1)),
          T || (l = c(g)),
          v)
        )
          for (f = 0; f < a.length; f++) a[f](y, h, E, _)
      }
    return (
      (p = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0)
        },
        deltaRatio: function (_) {
          return h / (1e3 / (_ || 60))
        },
        wake: function () {
          ru &&
            (!ra &&
              Ba() &&
              ((xi = ra = window),
              (Na = xi.document || {}),
              (Ft.gsap = Mt),
              (xi.gsapVersions || (xi.gsapVersions = [])).push(Mt.version),
              su(Zs || xi.GreenSockGlobals || (!xi.gsap && xi) || {}),
              Cu.forEach(ku)),
            (u = typeof requestAnimationFrame < 'u' && requestAnimationFrame),
            l && p.sleep(),
            (c =
              u ||
              function (_) {
                return setTimeout(_, (o - p.time * 1e3 + 1) | 0)
              }),
            (us = 1),
            m(2))
        },
        sleep: function () {
          ;(u ? cancelAnimationFrame : clearTimeout)(l), (us = 0), (c = ls)
        },
        lagSmoothing: function (_, k) {
          ;(e = _ || 1 / 0), (t = Math.min(k || 33, e))
        },
        fps: function (_) {
          ;(s = 1e3 / (_ || 240)), (o = p.time * 1e3 + s)
        },
        add: function (_, k, T) {
          var x = k
            ? function (v, y, E, C) {
                _(v, y, E, C), p.remove(x)
              }
            : _
          return p.remove(_), a[T ? 'unshift' : 'push'](x), ur(), x
        },
        remove: function (_, k) {
          ~(k = a.indexOf(_)) && a.splice(k, 1) && f >= k && f--
        },
        _listeners: a
      }),
      p
    )
  })(),
  ur = function () {
    return !us && It.wake()
  },
  se = {},
  lp = /^[\d.\-M][\d.\-,\s]/,
  cp = /["']/g,
  up = function (e) {
    for (
      var t = {},
        i = e.substr(1, e.length - 3).split(':'),
        n = i[0],
        s = 1,
        o = i.length,
        a,
        l,
        c;
      s < o;
      s++
    )
      (l = i[s]),
        (a = s !== o - 1 ? l.lastIndexOf(',') : l.length),
        (c = l.substr(0, a)),
        (t[n] = isNaN(c) ? c.replace(cp, '').trim() : +c),
        (n = l.substr(a + 1).trim())
    return t
  },
  dp = function (e) {
    var t = e.indexOf('(') + 1,
      i = e.indexOf(')'),
      n = e.indexOf('(', t)
    return e.substring(t, ~n && n < i ? e.indexOf(')', i + 1) : i)
  },
  fp = function (e) {
    var t = (e + '').split('('),
      i = se[t[0]]
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf('{') ? [up(t[1])] : dp(e).split(',').map(uu)
        )
      : se._CE && lp.test(e)
        ? se._CE('', e)
        : i
  },
  Ou = function (e) {
    return function (t) {
      return 1 - e(1 - t)
    }
  },
  Au = function r(e, t) {
    for (var i = e._first, n; i; )
      i instanceof vt
        ? r(i, t)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== t &&
          (i.timeline
            ? r(i.timeline, t)
            : ((n = i._ease),
              (i._ease = i._yEase),
              (i._yEase = n),
              (i._yoyo = t))),
        (i = i._next)
  },
  xn = function (e, t) {
    return (e && (Ae(e) ? e : se[e] || fp(e))) || t
  },
  In = function (e, t, i, n) {
    i === void 0 &&
      (i = function (l) {
        return 1 - t(1 - l)
      }),
      n === void 0 &&
        (n = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
        })
    var s = { easeIn: t, easeOut: i, easeInOut: n },
      o
    return (
      Ot(e, function (a) {
        ;(se[a] = Ft[a] = s), (se[(o = a.toLowerCase())] = i)
        for (var l in s)
          se[
            o + (l === 'easeIn' ? '.in' : l === 'easeOut' ? '.out' : '.inOut')
          ] = se[a + '.' + l] = s[l]
      }),
      s
    )
  },
  Pu = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2
    }
  },
  Oo = function r(e, t, i) {
    var n = t >= 1 ? t : 1,
      s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / ia) * (Math.asin(1 / n) || 0),
      a = function (u) {
        return u === 1 ? 1 : n * Math.pow(2, -10 * u) * jf((u - o) * s) + 1
      },
      l =
        e === 'out'
          ? a
          : e === 'in'
            ? function (c) {
                return 1 - a(1 - c)
              }
            : Pu(a)
    return (
      (s = ia / s),
      (l.config = function (c, u) {
        return r(e, c, u)
      }),
      l
    )
  },
  Ao = function r(e, t) {
    t === void 0 && (t = 1.70158)
    var i = function (o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0
      },
      n =
        e === 'out'
          ? i
          : e === 'in'
            ? function (s) {
                return 1 - i(1 - s)
              }
            : Pu(i)
    return (
      (n.config = function (s) {
        return r(e, s)
      }),
      n
    )
  }
Ot('Linear,Quad,Cubic,Quart,Quint,Strong', function (r, e) {
  var t = e < 5 ? e + 1 : e
  In(
    r + ',Power' + (t - 1),
    e
      ? function (i) {
          return Math.pow(i, t)
        }
      : function (i) {
          return i
        },
    function (i) {
      return 1 - Math.pow(1 - i, t)
    },
    function (i) {
      return i < 0.5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
    }
  )
})
se.Linear.easeNone = se.none = se.Linear.easeIn
In('Elastic', Oo('in'), Oo('out'), Oo())
;(function (r, e) {
  var t = 1 / e,
    i = 2 * t,
    n = 2.5 * t,
    s = function (a) {
      return a < t
        ? r * a * a
        : a < i
          ? r * Math.pow(a - 1.5 / e, 2) + 0.75
          : a < n
            ? r * (a -= 2.25 / e) * a + 0.9375
            : r * Math.pow(a - 2.625 / e, 2) + 0.984375
    }
  In(
    'Bounce',
    function (o) {
      return 1 - s(1 - o)
    },
    s
  )
})(7.5625, 2.75)
In('Expo', function (r) {
  return r ? Math.pow(2, 10 * (r - 1)) : 0
})
In('Circ', function (r) {
  return -(Jc(1 - r * r) - 1)
})
In('Sine', function (r) {
  return r === 1 ? 1 : -Nf(r * If) + 1
})
In('Back', Ao('in'), Ao('out'), Ao())
se.SteppedEase =
  se.steps =
  Ft.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1)
        var i = 1 / e,
          n = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - pe
        return function (a) {
          return (((n * vs(0, o, a)) | 0) + s) * i
        }
      }
    }
ar.ease = se['quad.out']
Ot(
  'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
  function (r) {
    return (Ua += r + ',' + r + 'Params,')
  }
)
var Mu = function (e, t) {
    ;(this.id = Bf++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : lu),
      (this.set = t ? t.getSetter : Ya)
  },
  ds = (function () {
    function r(t) {
      ;(this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        cr(this, +t.duration, 1, 1),
        (this.data = t.data),
        be && ((this._ctx = be), be.data.push(this)),
        us || It.wake()
    }
    var e = r.prototype
    return (
      (e.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay
      }),
      (e.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur
      }),
      (e.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            cr(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur
      }),
      (e.totalTime = function (i, n) {
        if ((ur(), !arguments.length)) return this._tTime
        var s = this._dp
        if (s && s.smoothChildTiming && this._ts) {
          for (fo(this, i), !s._dp || s.parent || pu(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent)
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            ki(this._dp, this, this._start - this._delay)
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !n) ||
            (this._initted && Math.abs(this._zTime) === pe) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), cu(this, i, n)),
          this
        )
      }),
      (e.time = function (i, n) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + kl(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              n
            )
          : this._time
      }),
      (e.totalProgress = function (i, n) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, n)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() > 0
              ? 1
              : 0
      }),
      (e.progress = function (i, n) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                kl(this),
              n
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0
      }),
      (e.iteration = function (i, n) {
        var s = this.duration() + this._rDelay
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * s, n)
          : this._repeat
            ? lr(this._tTime, s) + 1
            : 1
      }),
      (e.timeScale = function (i, n) {
        if (!arguments.length) return this._rts === -pe ? 0 : this._rts
        if (this._rts === i) return this
        var s =
          this.parent && this._ts ? Js(this.parent._time, this) : this._tTime
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -pe ? 0 : this._rts),
          this.totalTime(vs(-Math.abs(this._delay), this._tDur, s), n !== !1),
          uo(this),
          Yf(this)
        )
      }),
      (e.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (ur(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== pe &&
                      (this._tTime -= pe)
                  ))),
            this)
          : this._ps
      }),
      (e.startTime = function (i) {
        if (arguments.length) {
          this._start = i
          var n = this.parent || this._dp
          return (
            n && (n._sort || !this.parent) && ki(n, this, i - this._delay), this
          )
        }
        return this._start
      }),
      (e.endTime = function (i) {
        return (
          this._start +
          (St(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        )
      }),
      (e.rawTime = function (i) {
        var n = this.parent || this._dp
        return n
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Js(n.rawTime(i), this)
              : this._tTime
          : this._tTime
      }),
      (e.revert = function (i) {
        i === void 0 && (i = Hf)
        var n = ct
        return (
          (ct = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== 'nested' && i.kill !== !1 && this.kill(),
          (ct = n),
          this
        )
      }),
      (e.globalTime = function (i) {
        for (var n = this, s = arguments.length ? i : n.rawTime(); n; )
          (s = n._start + s / (Math.abs(n._ts) || 1)), (n = n._dp)
        return !this.parent && this._sat ? this._sat.globalTime(i) : s
      }),
      (e.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), El(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat
      }),
      (e.repeatDelay = function (i) {
        if (arguments.length) {
          var n = this._time
          return (this._rDelay = i), El(this), n ? this.time(n) : this
        }
        return this._rDelay
      }),
      (e.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo
      }),
      (e.seek = function (i, n) {
        return this.totalTime(Yt(this, i), St(n))
      }),
      (e.restart = function (i, n) {
        return this.play().totalTime(i ? -this._delay : 0, St(n))
      }),
      (e.play = function (i, n) {
        return i != null && this.seek(i, n), this.reversed(!1).paused(!1)
      }),
      (e.reverse = function (i, n) {
        return (
          i != null && this.seek(i || this.totalDuration(), n),
          this.reversed(!0).paused(!1)
        )
      }),
      (e.pause = function (i, n) {
        return i != null && this.seek(i, n), this.paused(!0)
      }),
      (e.resume = function () {
        return this.paused(!1)
      }),
      (e.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -pe : 0)),
            this)
          : this._rts < 0
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -pe), this
      }),
      (e.isActive = function () {
        var i = this.parent || this._dp,
          n = this._start,
          s
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (s = i.rawTime(!0)) >= n &&
            s < this.endTime(!0) - pe)
        )
      }),
      (e.eventCallback = function (i, n, s) {
        var o = this.vars
        return arguments.length > 1
          ? (n
              ? ((o[i] = n),
                s && (o[i + 'Params'] = s),
                i === 'onUpdate' && (this._onUpdate = n))
              : delete o[i],
            this)
          : o[i]
      }),
      (e.then = function (i) {
        var n = this
        return new Promise(function (s) {
          var o = Ae(i) ? i : du,
            a = function () {
              var c = n.then
              ;(n.then = null),
                Ae(o) && (o = o(n)) && (o.then || o === n) && (n.then = c),
                s(o),
                (n.then = c)
            }
          ;(n._initted && n.totalProgress() === 1 && n._ts >= 0) ||
          (!n._tTime && n._ts < 0)
            ? a()
            : (n._prom = a)
        })
      }),
      (e.kill = function () {
        Br(this)
      }),
      r
    )
  })()
ni(ds.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -pe,
  _prom: 0,
  _ps: !1,
  _rts: 1
})
var vt = (function (r) {
  Qc(e, r)
  function e(i, n) {
    var s
    return (
      i === void 0 && (i = {}),
      (s = r.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = St(i.sortChildren)),
      ke && ki(i.parent || ke, Ri(s), n),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && hu(Ri(s), i.scrollTrigger),
      s
    )
  }
  var t = e.prototype
  return (
    (t.to = function (n, s, o) {
      return Wr(0, arguments, this), this
    }),
    (t.from = function (n, s, o) {
      return Wr(1, arguments, this), this
    }),
    (t.fromTo = function (n, s, o, a) {
      return Wr(2, arguments, this), this
    }),
    (t.set = function (n, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        qr(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Ne(n, s, Yt(this, o), 1),
        this
      )
    }),
    (t.call = function (n, s, o) {
      return ki(this, Ne.delayedCall(0, n, s), o)
    }),
    (t.staggerTo = function (n, s, o, a, l, c, u) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = c),
        (o.onCompleteParams = u),
        (o.parent = this),
        new Ne(n, o, Yt(this, l)),
        this
      )
    }),
    (t.staggerFrom = function (n, s, o, a, l, c, u) {
      return (
        (o.runBackwards = 1),
        (qr(o).immediateRender = St(o.immediateRender)),
        this.staggerTo(n, s, o, a, l, c, u)
      )
    }),
    (t.staggerFromTo = function (n, s, o, a, l, c, u, p) {
      return (
        (a.startAt = o),
        (qr(a).immediateRender = St(a.immediateRender)),
        this.staggerTo(n, s, a, l, c, u, p)
      )
    }),
    (t.render = function (n, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        u = n <= 0 ? 0 : Xe(n),
        p = this._zTime < 0 != n < 0 && (this._initted || !c),
        h,
        f,
        m,
        g,
        _,
        k,
        T,
        x,
        v,
        y,
        E,
        C
      if (
        (this !== ke && u > l && n >= 0 && (u = l), u !== this._tTime || o || p)
      ) {
        if (
          (a !== this._time &&
            c &&
            ((u += this._time - a), (n += this._time - a)),
          (h = u),
          (v = this._start),
          (x = this._ts),
          (k = !x),
          p && (c || (a = this._zTime), (n || !s) && (this._zTime = n)),
          this._repeat)
        ) {
          if (
            ((E = this._yoyo),
            (_ = c + this._rDelay),
            this._repeat < -1 && n < 0)
          )
            return this.totalTime(_ * 100 + n, s, o)
          if (
            ((h = Xe(u % _)),
            u === l
              ? ((g = this._repeat), (h = c))
              : ((g = ~~(u / _)),
                g && g === u / _ && ((h = c), g--),
                h > c && (h = c)),
            (y = lr(this._tTime, _)),
            !a &&
              this._tTime &&
              y !== g &&
              this._tTime - y * _ - this._dur <= 0 &&
              (y = g),
            E && g & 1 && ((h = c - h), (C = 1)),
            g !== y && !this._lock)
          ) {
            var S = E && y & 1,
              b = S === (E && g & 1)
            if (
              (g < y && (S = !S),
              (a = S ? 0 : u % c ? c : u),
              (this._lock = 1),
              (this.render(a || (C ? 0 : Xe(g * _)), s, !c)._lock = 0),
              (this._tTime = u),
              !s && this.parent && Nt(this, 'onRepeat'),
              this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                k !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this
            if (
              ((c = this._dur),
              (l = this._tDur),
              b &&
                ((this._lock = 2),
                (a = S ? c : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !C && this.invalidate()),
              (this._lock = 0),
              !this._ts && !k)
            )
              return this
            Au(this, C)
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((T = Kf(this, Xe(a), Xe(h))), T && (u -= h - (h = T._start))),
          (this._tTime = u),
          (this._time = h),
          (this._act = !x),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = n),
            (a = 0)),
          !a && h && !s && !g && (Nt(this, 'onStart'), this._tTime !== u))
        )
          return this
        if (h >= a && n >= 0)
          for (f = this._first; f; ) {
            if (
              ((m = f._next), (f._act || h >= f._start) && f._ts && T !== f)
            ) {
              if (f.parent !== this) return this.render(n, s, o)
              if (
                (f.render(
                  f._ts > 0
                    ? (h - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (h - f._start) * f._ts,
                  s,
                  o
                ),
                h !== this._time || (!this._ts && !k))
              ) {
                ;(T = 0), m && (u += this._zTime = -pe)
                break
              }
            }
            f = m
          }
        else {
          f = this._last
          for (var O = n < 0 ? n : h; f; ) {
            if (((m = f._prev), (f._act || O <= f._end) && f._ts && T !== f)) {
              if (f.parent !== this) return this.render(n, s, o)
              if (
                (f.render(
                  f._ts > 0
                    ? (O - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (O - f._start) * f._ts,
                  s,
                  o || (ct && (f._initted || f._startAt))
                ),
                h !== this._time || (!this._ts && !k))
              ) {
                ;(T = 0), m && (u += this._zTime = O ? -pe : pe)
                break
              }
            }
            f = m
          }
        }
        if (
          T &&
          !s &&
          (this.pause(),
          (T.render(h >= a ? 0 : -pe)._zTime = h >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = v), uo(this), this.render(n, s, o)
        this._onUpdate && !s && Nt(this, 'onUpdate', !0),
          ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) &&
            (v === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((n || !c) &&
                ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                tn(this, 1),
              !s &&
                !(n < 0 && !a) &&
                (u || a || !l) &&
                (Nt(
                  this,
                  u === l && n >= 0 ? 'onComplete' : 'onReverseComplete',
                  !0
                ),
                this._prom &&
                  !(u < l && this.timeScale() > 0) &&
                  this._prom())))
      }
      return this
    }),
    (t.add = function (n, s) {
      var o = this
      if ((ji(s) || (s = Yt(this, s, n)), !(n instanceof ds))) {
        if (ut(n))
          return (
            n.forEach(function (a) {
              return o.add(a, s)
            }),
            this
          )
        if (Ge(n)) return this.addLabel(n, s)
        if (Ae(n)) n = Ne.delayedCall(0, n)
        else return this
      }
      return this !== n ? ki(this, n, s) : this
    }),
    (t.getChildren = function (n, s, o, a) {
      n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -Kt)
      for (var l = [], c = this._first; c; )
        c._start >= a &&
          (c instanceof Ne
            ? s && l.push(c)
            : (o && l.push(c), n && l.push.apply(l, c.getChildren(!0, s, o)))),
          (c = c._next)
      return l
    }),
    (t.getById = function (n) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === n) return s[o]
    }),
    (t.remove = function (n) {
      return Ge(n)
        ? this.removeLabel(n)
        : Ae(n)
          ? this.killTweensOf(n)
          : (co(this, n),
            n === this._recent && (this._recent = this._last),
            yn(this))
    }),
    (t.totalTime = function (n, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Xe(
              It.time -
                (this._ts > 0
                  ? n / this._ts
                  : (this.totalDuration() - n) / -this._ts)
            )),
          r.prototype.totalTime.call(this, n, s),
          (this._forcing = 0),
          this)
        : this._tTime
    }),
    (t.addLabel = function (n, s) {
      return (this.labels[n] = Yt(this, s)), this
    }),
    (t.removeLabel = function (n) {
      return delete this.labels[n], this
    }),
    (t.addPause = function (n, s, o) {
      var a = Ne.delayedCall(0, s || ls, o)
      return (
        (a.data = 'isPause'), (this._hasPause = 1), ki(this, a, Yt(this, n))
      )
    }),
    (t.removePause = function (n) {
      var s = this._first
      for (n = Yt(this, n); s; )
        s._start === n && s.data === 'isPause' && tn(s), (s = s._next)
    }),
    (t.killTweensOf = function (n, s, o) {
      for (var a = this.getTweensOf(n, o), l = a.length; l--; )
        Yi !== a[l] && a[l].kill(n, s)
      return this
    }),
    (t.getTweensOf = function (n, s) {
      for (var o = [], a = Qt(n), l = this._first, c = ji(s), u; l; )
        l instanceof Ne
          ? Vf(l._targets, a) &&
            (c
              ? (!Yi || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u),
          (l = l._next)
      return o
    }),
    (t.tweenTo = function (n, s) {
      s = s || {}
      var o = this,
        a = Yt(o, n),
        l = s,
        c = l.startAt,
        u = l.onStart,
        p = l.onStartParams,
        h = l.immediateRender,
        f,
        m = Ne.to(
          o,
          ni(
            {
              ease: s.ease || 'none',
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: 'auto',
              duration:
                s.duration ||
                Math.abs(
                  (a - (c && 'time' in c ? c.time : o._time)) / o.timeScale()
                ) ||
                pe,
              onStart: function () {
                if ((o.pause(), !f)) {
                  var _ =
                    s.duration ||
                    Math.abs(
                      (a - (c && 'time' in c ? c.time : o._time)) /
                        o.timeScale()
                    )
                  m._dur !== _ && cr(m, _, 0, 1).render(m._time, !0, !0),
                    (f = 1)
                }
                u && u.apply(m, p || [])
              }
            },
            s
          )
        )
      return h ? m.render(0) : m
    }),
    (t.tweenFromTo = function (n, s, o) {
      return this.tweenTo(s, ni({ startAt: { time: Yt(this, n) } }, o))
    }),
    (t.recent = function () {
      return this._recent
    }),
    (t.nextLabel = function (n) {
      return n === void 0 && (n = this._time), Tl(this, Yt(this, n))
    }),
    (t.previousLabel = function (n) {
      return n === void 0 && (n = this._time), Tl(this, Yt(this, n), 1)
    }),
    (t.currentLabel = function (n) {
      return arguments.length
        ? this.seek(n, !0)
        : this.previousLabel(this._time + pe)
    }),
    (t.shiftChildren = function (n, s, o) {
      o === void 0 && (o = 0)
      for (var a = this._first, l = this.labels, c; a; )
        a._start >= o && ((a._start += n), (a._end += n)), (a = a._next)
      if (s) for (c in l) l[c] >= o && (l[c] += n)
      return yn(this)
    }),
    (t.invalidate = function (n) {
      var s = this._first
      for (this._lock = 0; s; ) s.invalidate(n), (s = s._next)
      return r.prototype.invalidate.call(this, n)
    }),
    (t.clear = function (n) {
      n === void 0 && (n = !0)
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o)
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        n && (this.labels = {}),
        yn(this)
      )
    }),
    (t.totalDuration = function (n) {
      var s = 0,
        o = this,
        a = o._last,
        l = Kt,
        c,
        u,
        p
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -n : n)
        )
      if (o._dirty) {
        for (p = o.parent; a; )
          (c = a._prev),
            a._dirty && a.totalDuration(),
            (u = a._start),
            u > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (ki(o, a, u - a._delay, 1)._lock = 0))
              : (l = u),
            u < 0 &&
              a._ts &&
              ((s -= u),
              ((!p && !o._dp) || (p && p.smoothChildTiming)) &&
                ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)),
              o.shiftChildren(-u, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = c)
        cr(o, o === ke && o._time > s ? o._time : s, 1, 1), (o._dirty = 0)
      }
      return o._tDur
    }),
    (e.updateRoot = function (n) {
      if ((ke._ts && (cu(ke, Js(n, ke)), (au = It.frame)), It.frame >= xl)) {
        xl += jt.autoSleep || 120
        var s = ke._first
        if ((!s || !s._ts) && jt.autoSleep && It._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next
          s || It.sleep()
        }
      }
    }),
    e
  )
})(ds)
ni(vt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
var pp = function (e, t, i, n, s, o, a) {
    var l = new At(this._pt, e, t, 0, 1, Iu, null, s),
      c = 0,
      u = 0,
      p,
      h,
      f,
      m,
      g,
      _,
      k,
      T
    for (
      l.b = i,
        l.e = n,
        i += '',
        n += '',
        (k = ~n.indexOf('random(')) && (n = cs(n)),
        o && ((T = [i, n]), o(T, e, t), (i = T[0]), (n = T[1])),
        h = i.match(Eo) || [];
      (p = Eo.exec(n));

    )
      (m = p[0]),
        (g = n.substring(c, p.index)),
        f ? (f = (f + 1) % 5) : g.substr(-5) === 'rgba(' && (f = 1),
        m !== h[u++] &&
          ((_ = parseFloat(h[u - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: g || u === 1 ? g : ',',
            s: _,
            c: m.charAt(1) === '=' ? er(_, m) - _ : parseFloat(m) - _,
            m: f && f < 4 ? Math.round : 0
          }),
          (c = Eo.lastIndex))
    return (
      (l.c = c < n.length ? n.substring(c, n.length) : ''),
      (l.fp = a),
      (iu.test(n) || k) && (l.e = 0),
      (this._pt = l),
      l
    )
  },
  Va = function (e, t, i, n, s, o, a, l, c, u) {
    Ae(n) && (n = n(s || 0, e, o))
    var p = e[t],
      h =
        i !== 'get'
          ? i
          : Ae(p)
            ? c
              ? e[
                  t.indexOf('set') || !Ae(e['get' + t.substr(3)])
                    ? t
                    : 'get' + t.substr(3)
                ](c)
              : e[t]()
            : p,
      f = Ae(p) ? (c ? vp : $u) : Wa,
      m
    if (
      (Ge(n) &&
        (~n.indexOf('random(') && (n = cs(n)),
        n.charAt(1) === '=' &&
          ((m = er(h, n) + (lt(h) || 0)), (m || m === 0) && (n = m))),
      !u || h !== n || da)
    )
      return !isNaN(h * n) && n !== ''
        ? ((m = new At(
            this._pt,
            e,
            t,
            +h || 0,
            n - (h || 0),
            typeof p == 'boolean' ? wp : zu,
            0,
            f
          )),
          c && (m.fp = c),
          a && m.modifier(a, this, e),
          (this._pt = m))
        : (!p && !(t in e) && ja(t, n),
          pp.call(this, e, t, h, n, f, l || jt.stringFilter, c))
  },
  hp = function (e, t, i, n, s) {
    if (
      (Ae(e) && (e = Yr(e, s, t, i, n)),
      !Pi(e) || (e.style && e.nodeType) || ut(e) || eu(e))
    )
      return Ge(e) ? Yr(e, s, t, i, n) : e
    var o = {},
      a
    for (a in e) o[a] = Yr(e[a], s, t, i, n)
    return o
  },
  Lu = function (e, t, i, n, s, o) {
    var a, l, c, u
    if (
      zt[e] &&
      (a = new zt[e]()).init(
        s,
        a.rawVars ? t[e] : hp(t[e], n, s, o, i),
        i,
        n,
        o
      ) !== !1 &&
      ((i._pt = l = new At(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      i !== Zn)
    )
      for (c = i._ptLookup[i._targets.indexOf(s)], u = a._props.length; u--; )
        c[a._props[u]] = l
    return a
  },
  Yi,
  da,
  qa = function r(e, t, i) {
    var n = e.vars,
      s = n.ease,
      o = n.startAt,
      a = n.immediateRender,
      l = n.lazy,
      c = n.onUpdate,
      u = n.runBackwards,
      p = n.yoyoEase,
      h = n.keyframes,
      f = n.autoRevert,
      m = e._dur,
      g = e._startAt,
      _ = e._targets,
      k = e.parent,
      T = k && k.data === 'nested' ? k.vars.targets : _,
      x = e._overwrite === 'auto' && !za,
      v = e.timeline,
      y,
      E,
      C,
      S,
      b,
      O,
      M,
      P,
      z,
      F,
      H,
      B,
      $
    if (
      (v && (!h || !s) && (s = 'none'),
      (e._ease = xn(s, ar.ease)),
      (e._yEase = p ? Ou(xn(p === !0 ? s : p, ar.ease)) : 0),
      p &&
        e._yoyo &&
        !e._repeat &&
        ((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
      (e._from = !v && !!n.runBackwards),
      !v || (h && !n.stagger))
    ) {
      if (
        ((P = _[0] ? wn(_[0]).harness : 0),
        (B = P && n[P.prop]),
        (y = Qs(n, Fa)),
        g &&
          (g._zTime < 0 && g.progress(1),
          t < 0 && u && a && !f ? g.render(-1, !0) : g.revert(u && m ? js : Uf),
          (g._lazy = 0)),
        o)
      ) {
        if (
          (tn(
            (e._startAt = Ne.set(
              _,
              ni(
                {
                  data: 'isStart',
                  overwrite: !1,
                  parent: k,
                  immediateRender: !0,
                  lazy: !g && St(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    c &&
                    function () {
                      return Nt(e, 'onUpdate')
                    },
                  stagger: 0
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (ct || (!a && !f)) && e._startAt.revert(js),
          a && m && t <= 0 && i <= 0)
        ) {
          t && (e._zTime = t)
          return
        }
      } else if (u && m && !g) {
        if (
          (t && (a = !1),
          (C = ni(
            {
              overwrite: !1,
              data: 'isFromStart',
              lazy: a && !g && St(l),
              immediateRender: a,
              stagger: 0,
              parent: k
            },
            y
          )),
          B && (C[P.prop] = B),
          tn((e._startAt = Ne.set(_, C))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (ct ? e._startAt.revert(js) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          r(e._startAt, pe, pe)
        else if (!t) return
      }
      for (
        e._pt = e._ptCache = 0, l = (m && St(l)) || (l && !m), E = 0;
        E < _.length;
        E++
      ) {
        if (
          ((b = _[E]),
          (M = b._gsap || Ha(_)[E]._gsap),
          (e._ptLookup[E] = F = {}),
          sa[M.id] && Qi.length && Ks(),
          (H = T === _ ? E : T.indexOf(b)),
          P &&
            (z = new P()).init(b, B || y, e, H, T) !== !1 &&
            ((e._pt = S =
              new At(e._pt, b, z.name, 0, 1, z.render, z, 0, z.priority)),
            z._props.forEach(function (D) {
              F[D] = S
            }),
            z.priority && (O = 1)),
          !P || B)
        )
          for (C in y)
            zt[C] && (z = Lu(C, y, e, H, b, T))
              ? z.priority && (O = 1)
              : (F[C] = S =
                  Va.call(e, b, C, 'get', y[C], H, T, 0, n.stringFilter))
        e._op && e._op[E] && e.kill(b, e._op[E]),
          x &&
            e._pt &&
            ((Yi = e),
            ke.killTweensOf(b, F, e.globalTime(t)),
            ($ = !e.parent),
            (Yi = 0)),
          e._pt && l && (sa[M.id] = 1)
      }
      O && Bu(e), e._onInit && e._onInit(e)
    }
    ;(e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !$),
      h && t <= 0 && v.render(Kt, !0, !0)
  },
  gp = function (e, t, i, n, s, o, a, l) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      u,
      p,
      h,
      f
    if (!c)
      for (
        c = e._ptCache[t] = [], h = e._ptLookup, f = e._targets.length;
        f--;

      ) {
        if (((u = h[f][t]), u && u.d && u.d._pt))
          for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next
        if (!u)
          return (
            (da = 1),
            (e.vars[t] = '+=0'),
            qa(e, a),
            (da = 0),
            l ? as(t + ' not eligible for reset') : 1
          )
        c.push(u)
      }
    for (f = c.length; f--; )
      (p = c[f]),
        (u = p._pt || p),
        (u.s = (n || n === 0) && !s ? n : u.s + (n || 0) + o * u.c),
        (u.c = i - u.s),
        p.e && (p.e = Re(i) + lt(p.e)),
        p.b && (p.b = u.s + lt(p.b))
  },
  mp = function (e, t) {
    var i = e[0] ? wn(e[0]).harness : 0,
      n = i && i.aliases,
      s,
      o,
      a,
      l
    if (!n) return t
    s = On({}, t)
    for (o in n)
      if (o in s) for (l = n[o].split(','), a = l.length; a--; ) s[l[a]] = s[o]
    return s
  },
  _p = function (e, t, i, n) {
    var s = t.ease || n || 'power1.inOut',
      o,
      a
    if (ut(t))
      (a = i[e] || (i[e] = [])),
        t.forEach(function (l, c) {
          return a.push({ t: (c / (t.length - 1)) * 100, v: l, e: s })
        })
    else
      for (o in t)
        (a = i[o] || (i[o] = [])),
          o === 'ease' || a.push({ t: parseFloat(e), v: t[o], e: s })
  },
  Yr = function (e, t, i, n, s) {
    return Ae(e)
      ? e.call(t, i, n, s)
      : Ge(e) && ~e.indexOf('random(')
        ? cs(e)
        : e
  },
  Du = Ua + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
  Ru = {}
Ot(Du + ',id,stagger,delay,duration,paused,scrollTrigger', function (r) {
  return (Ru[r] = 1)
})
var Ne = (function (r) {
  Qc(e, r)
  function e(i, n, s, o) {
    var a
    typeof n == 'number' && ((s.duration = n), (n = s), (s = null)),
      (a = r.call(this, o ? n : qr(n)) || this)
    var l = a.vars,
      c = l.duration,
      u = l.delay,
      p = l.immediateRender,
      h = l.stagger,
      f = l.overwrite,
      m = l.keyframes,
      g = l.defaults,
      _ = l.scrollTrigger,
      k = l.yoyoEase,
      T = n.parent || ke,
      x = (ut(i) || eu(i) ? ji(i[0]) : 'length' in n) ? [i] : Qt(i),
      v,
      y,
      E,
      C,
      S,
      b,
      O,
      M
    if (
      ((a._targets = x.length
        ? Ha(x)
        : as(
            'GSAP target ' + i + ' not found. https://gsap.com',
            !jt.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = f),
      m || h || ks(c) || ks(u))
    ) {
      if (
        ((n = a.vars),
        (v = a.timeline =
          new vt({
            data: 'nested',
            defaults: g || {},
            targets: T && T.data === 'nested' ? T.vars.targets : x
          })),
        v.kill(),
        (v.parent = v._dp = Ri(a)),
        (v._start = 0),
        h || ks(c) || ks(u))
      ) {
        if (((C = x.length), (O = h && vu(h)), Pi(h)))
          for (S in h) ~Du.indexOf(S) && (M || (M = {}), (M[S] = h[S]))
        for (y = 0; y < C; y++)
          (E = Qs(n, Ru)),
            (E.stagger = 0),
            k && (E.yoyoEase = k),
            M && On(E, M),
            (b = x[y]),
            (E.duration = +Yr(c, Ri(a), y, b, x)),
            (E.delay = (+Yr(u, Ri(a), y, b, x) || 0) - a._delay),
            !h &&
              C === 1 &&
              E.delay &&
              ((a._delay = u = E.delay), (a._start += u), (E.delay = 0)),
            v.to(b, E, O ? O(y, b, x) : 0),
            (v._ease = se.none)
        v.duration() ? (c = u = 0) : (a.timeline = 0)
      } else if (m) {
        qr(ni(v.vars.defaults, { ease: 'none' })),
          (v._ease = xn(m.ease || n.ease || 'none'))
        var P = 0,
          z,
          F,
          H
        if (ut(m))
          m.forEach(function (B) {
            return v.to(x, B, '>')
          }),
            v.duration()
        else {
          E = {}
          for (S in m)
            S === 'ease' || S === 'easeEach' || _p(S, m[S], E, m.easeEach)
          for (S in E)
            for (
              z = E[S].sort(function (B, $) {
                return B.t - $.t
              }),
                P = 0,
                y = 0;
              y < z.length;
              y++
            )
              (F = z[y]),
                (H = {
                  ease: F.e,
                  duration: ((F.t - (y ? z[y - 1].t : 0)) / 100) * c
                }),
                (H[S] = F.v),
                v.to(x, H, P),
                (P += H.duration)
          v.duration() < c && v.to({}, { duration: c - v.duration() })
        }
      }
      c || a.duration((c = v.duration()))
    } else a.timeline = 0
    return (
      f === !0 && !za && ((Yi = Ri(a)), ke.killTweensOf(x), (Yi = 0)),
      ki(T, Ri(a), s),
      n.reversed && a.reverse(),
      n.paused && a.paused(!0),
      (p ||
        (!c &&
          !m &&
          a._start === Xe(T._time) &&
          St(p) &&
          Xf(Ri(a)) &&
          T.data !== 'nested')) &&
        ((a._tTime = -pe), a.render(Math.max(0, -u) || 0)),
      _ && hu(Ri(a), _),
      a
    )
  }
  var t = e.prototype
  return (
    (t.render = function (n, s, o) {
      var a = this._time,
        l = this._tDur,
        c = this._dur,
        u = n < 0,
        p = n > l - pe && !u ? l : n < pe ? 0 : n,
        h,
        f,
        m,
        g,
        _,
        k,
        T,
        x,
        v
      if (!c) Zf(this, n, s, o)
      else if (
        p !== this._tTime ||
        !n ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u)
      ) {
        if (((h = p), (x = this.timeline), this._repeat)) {
          if (((g = c + this._rDelay), this._repeat < -1 && u))
            return this.totalTime(g * 100 + n, s, o)
          if (
            ((h = Xe(p % g)),
            p === l
              ? ((m = this._repeat), (h = c))
              : ((m = ~~(p / g)),
                m && m === Xe(p / g) && ((h = c), m--),
                h > c && (h = c)),
            (k = this._yoyo && m & 1),
            k && ((v = this._yEase), (h = c - h)),
            (_ = lr(this._tTime, g)),
            h === a && !o && this._initted && m === _)
          )
            return (this._tTime = p), this
          m !== _ &&
            (x && this._yEase && Au(x, k),
            this.vars.repeatRefresh &&
              !k &&
              !this._lock &&
              this._time !== g &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(Xe(g * m), !0).invalidate()._lock = 0)))
        }
        if (!this._initted) {
          if (gu(this, u ? n : h, o, s, p)) return (this._tTime = 0), this
          if (a !== this._time && !(o && this.vars.repeatRefresh && m !== _))
            return this
          if (c !== this._dur) return this.render(n, s, o)
        }
        if (
          ((this._tTime = p),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = T = (v || this._ease)(h / c)),
          this._from && (this.ratio = T = 1 - T),
          h && !a && !s && !m && (Nt(this, 'onStart'), this._tTime !== p))
        )
          return this
        for (f = this._pt; f; ) f.r(T, f.d), (f = f._next)
        ;(x && x.render(n < 0 ? n : x._dur * x._ease(h / this._dur), s, o)) ||
          (this._startAt && (this._zTime = n)),
          this._onUpdate &&
            !s &&
            (u && oa(this, n, s, o), Nt(this, 'onUpdate')),
          this._repeat &&
            m !== _ &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            Nt(this, 'onRepeat'),
          (p === this._tDur || !p) &&
            this._tTime === p &&
            (u && !this._onUpdate && oa(this, n, !0, !0),
            (n || !c) &&
              ((p === this._tDur && this._ts > 0) || (!p && this._ts < 0)) &&
              tn(this, 1),
            !s &&
              !(u && !a) &&
              (p || a || k) &&
              (Nt(this, p === l ? 'onComplete' : 'onReverseComplete', !0),
              this._prom && !(p < l && this.timeScale() > 0) && this._prom()))
      }
      return this
    }),
    (t.targets = function () {
      return this._targets
    }),
    (t.invalidate = function (n) {
      return (
        (!n || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(n),
        r.prototype.invalidate.call(this, n)
      )
    }),
    (t.resetTo = function (n, s, o, a, l) {
      us || It.wake(), this._ts || this.play()
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u
      return (
        this._initted || qa(this, c),
        (u = this._ease(c / this._dur)),
        gp(this, n, s, o, a, u, c, l)
          ? this.resetTo(n, s, o, a, 1)
          : (fo(this, 0),
            this.parent ||
              fu(
                this._dp,
                this,
                '_first',
                '_last',
                this._dp._sort ? '_start' : 0
              ),
            this.render(0))
      )
    }),
    (t.kill = function (n, s) {
      if ((s === void 0 && (s = 'all'), !n && (!s || s === 'all')))
        return (this._lazy = this._pt = 0), this.parent ? Br(this) : this
      if (this.timeline) {
        var o = this.timeline.totalDuration()
        return (
          this.timeline.killTweensOf(n, s, Yi && Yi.vars.overwrite !== !0)
            ._first || Br(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            cr(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        )
      }
      var a = this._targets,
        l = n ? Qt(n) : a,
        c = this._ptLookup,
        u = this._pt,
        p,
        h,
        f,
        m,
        g,
        _,
        k
      if ((!s || s === 'all') && Wf(a, l))
        return s === 'all' && (this._pt = 0), Br(this)
      for (
        p = this._op = this._op || [],
          s !== 'all' &&
            (Ge(s) &&
              ((g = {}),
              Ot(s, function (T) {
                return (g[T] = 1)
              }),
              (s = g)),
            (s = mp(a, s))),
          k = a.length;
        k--;

      )
        if (~l.indexOf(a[k])) {
          ;(h = c[k]),
            s === 'all'
              ? ((p[k] = s), (m = h), (f = {}))
              : ((f = p[k] = p[k] || {}), (m = s))
          for (g in m)
            (_ = h && h[g]),
              _ &&
                ((!('kill' in _.d) || _.d.kill(g) === !0) && co(this, _, '_pt'),
                delete h[g]),
              f !== 'all' && (f[g] = 1)
        }
      return this._initted && !this._pt && u && Br(this), this
    }),
    (e.to = function (n, s) {
      return new e(n, s, arguments[2])
    }),
    (e.from = function (n, s) {
      return Wr(1, arguments)
    }),
    (e.delayedCall = function (n, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: n,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a
      })
    }),
    (e.fromTo = function (n, s, o) {
      return Wr(2, arguments)
    }),
    (e.set = function (n, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(n, s)
    }),
    (e.killTweensOf = function (n, s, o) {
      return ke.killTweensOf(n, s, o)
    }),
    e
  )
})(ds)
ni(Ne.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 })
Ot('staggerTo,staggerFrom,staggerFromTo', function (r) {
  Ne[r] = function () {
    var e = new vt(),
      t = la.call(arguments, 0)
    return t.splice(r === 'staggerFromTo' ? 5 : 4, 0, 0), e[r].apply(e, t)
  }
})
var Wa = function (e, t, i) {
    return (e[t] = i)
  },
  $u = function (e, t, i) {
    return e[t](i)
  },
  vp = function (e, t, i, n) {
    return e[t](n.fp, i)
  },
  bp = function (e, t, i) {
    return e.setAttribute(t, i)
  },
  Ya = function (e, t) {
    return Ae(e[t]) ? $u : Ia(e[t]) && e.setAttribute ? bp : Wa
  },
  zu = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
  },
  wp = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
  },
  Iu = function (e, t) {
    var i = t._pt,
      n = ''
    if (!e && t.b) n = t.b
    else if (e === 1 && t.e) n = t.e
    else {
      for (; i; )
        (n =
          i.p +
          (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
          n),
          (i = i._next)
      n += t.c
    }
    t.set(t.t, t.p, n, t)
  },
  Xa = function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next)
  },
  yp = function (e, t, i, n) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === n && s.modifier(e, t, i), (s = o)
  },
  xp = function (e) {
    for (var t = this._pt, i, n; t; )
      (n = t._next),
        (t.p === e && !t.op) || t.op === e
          ? co(this, t, '_pt')
          : t.dep || (i = 1),
        (t = n)
    return !i
  },
  Cp = function (e, t, i, n) {
    n.mSet(e, t, n.m.call(n.tween, i, n.mt), n)
  },
  Bu = function (e) {
    for (var t = e._pt, i, n, s, o; t; ) {
      for (i = t._next, n = s; n && n.pr > t.pr; ) n = n._next
      ;(t._prev = n ? n._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = n) ? (n._prev = t) : (o = t),
        (t = i)
    }
    e._pt = s
  },
  At = (function () {
    function r(t, i, n, s, o, a, l, c, u) {
      ;(this.t = i),
        (this.s = s),
        (this.c = o),
        (this.p = n),
        (this.r = a || zu),
        (this.d = l || this),
        (this.set = c || Wa),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this)
    }
    var e = r.prototype
    return (
      (e.modifier = function (i, n, s) {
        ;(this.mSet = this.mSet || this.set),
          (this.set = Cp),
          (this.m = i),
          (this.mt = s),
          (this.tween = n)
      }),
      r
    )
  })()
Ot(
  Ua +
    'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
  function (r) {
    return (Fa[r] = 1)
  }
)
Ft.TweenMax = Ft.TweenLite = Ne
Ft.TimelineLite = Ft.TimelineMax = vt
ke = new vt({
  sortChildren: !1,
  defaults: ar,
  autoRemoveChildren: !0,
  id: 'root',
  smoothChildTiming: !0
})
jt.stringFilter = Su
var Cn = [],
  Us = {},
  kp = [],
  Ol = 0,
  Ep = 0,
  Po = function (e) {
    return (Us[e] || kp).map(function (t) {
      return t()
    })
  },
  fa = function () {
    var e = Date.now(),
      t = []
    e - Ol > 2 &&
      (Po('matchMediaInit'),
      Cn.forEach(function (i) {
        var n = i.queries,
          s = i.conditions,
          o,
          a,
          l,
          c
        for (a in n)
          (o = xi.matchMedia(n[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (c = 1))
        c && (i.revert(), l && t.push(i))
      }),
      Po('matchMediaRevert'),
      t.forEach(function (i) {
        return i.onMatch(i, function (n) {
          return i.add(null, n)
        })
      }),
      (Ol = e),
      Po('matchMedia'))
  },
  Nu = (function () {
    function r(t, i) {
      ;(this.selector = i && ca(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Ep++),
        t && this.add(t)
    }
    var e = r.prototype
    return (
      (e.add = function (i, n, s) {
        Ae(i) && ((s = n), (n = i), (i = Ae))
        var o = this,
          a = function () {
            var c = be,
              u = o.selector,
              p
            return (
              c && c !== o && c.data.push(o),
              s && (o.selector = ca(s)),
              (be = o),
              (p = n.apply(o, arguments)),
              Ae(p) && o._r.push(p),
              (be = c),
              (o.selector = u),
              (o.isReverted = !1),
              p
            )
          }
        return (
          (o.last = a),
          i === Ae
            ? a(o, function (l) {
                return o.add(null, l)
              })
            : i
              ? (o[i] = a)
              : a
        )
      }),
      (e.ignore = function (i) {
        var n = be
        ;(be = null), i(this), (be = n)
      }),
      (e.getTweens = function () {
        var i = []
        return (
          this.data.forEach(function (n) {
            return n instanceof r
              ? i.push.apply(i, n.getTweens())
              : n instanceof Ne &&
                  !(n.parent && n.parent.data === 'nested') &&
                  i.push(n)
          }),
          i
        )
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0
      }),
      (e.kill = function (i, n) {
        var s = this
        if (
          (i
            ? (function () {
                for (var a = s.getTweens(), l = s.data.length, c; l--; )
                  (c = s.data[l]),
                    c.data === 'isFlip' &&
                      (c.revert(),
                      c.getChildren(!0, !0, !1).forEach(function (u) {
                        return a.splice(a.indexOf(u), 1)
                      }))
                for (
                  a
                    .map(function (u) {
                      return {
                        g:
                          u._dur ||
                          u._delay ||
                          (u._sat && !u._sat.vars.immediateRender)
                            ? u.globalTime(0)
                            : -1 / 0,
                        t: u
                      }
                    })
                    .sort(function (u, p) {
                      return p.g - u.g || -1 / 0
                    })
                    .forEach(function (u) {
                      return u.t.revert(i)
                    }),
                    l = s.data.length;
                  l--;

                )
                  (c = s.data[l]),
                    c instanceof vt
                      ? c.data !== 'nested' &&
                        (c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
                      : !(c instanceof Ne) && c.revert && c.revert(i)
                s._r.forEach(function (u) {
                  return u(i, s)
                }),
                  (s.isReverted = !0)
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill()
              }),
          this.clear(),
          n)
        )
          for (var o = Cn.length; o--; ) Cn[o].id === this.id && Cn.splice(o, 1)
      }),
      (e.revert = function (i) {
        this.kill(i || {})
      }),
      r
    )
  })(),
  Tp = (function () {
    function r(t) {
      ;(this.contexts = []), (this.scope = t), be && be.data.push(this)
    }
    var e = r.prototype
    return (
      (e.add = function (i, n, s) {
        Pi(i) || (i = { matches: i })
        var o = new Nu(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          c,
          u
        be && !o.selector && (o.selector = be.selector),
          this.contexts.push(o),
          (n = o.add('onMatch', n)),
          (o.queries = i)
        for (c in i)
          c === 'all'
            ? (u = 1)
            : ((l = xi.matchMedia(i[c])),
              l &&
                (Cn.indexOf(o) < 0 && Cn.push(o),
                (a[c] = l.matches) && (u = 1),
                l.addListener
                  ? l.addListener(fa)
                  : l.addEventListener('change', fa)))
        return (
          u &&
            n(o, function (p) {
              return o.add(null, p)
            }),
          this
        )
      }),
      (e.revert = function (i) {
        this.kill(i || {})
      }),
      (e.kill = function (i) {
        this.contexts.forEach(function (n) {
          return n.kill(i, !0)
        })
      }),
      r
    )
  })(),
  eo = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i]
      t.forEach(function (n) {
        return ku(n)
      })
    },
    timeline: function (e) {
      return new vt(e)
    },
    getTweensOf: function (e, t) {
      return ke.getTweensOf(e, t)
    },
    getProperty: function (e, t, i, n) {
      Ge(e) && (e = Qt(e)[0])
      var s = wn(e || {}).get,
        o = i ? du : uu
      return (
        i === 'native' && (i = ''),
        e &&
          (t
            ? o(((zt[t] && zt[t].get) || s)(e, t, i, n))
            : function (a, l, c) {
                return o(((zt[a] && zt[a].get) || s)(e, a, l, c))
              })
      )
    },
    quickSetter: function (e, t, i) {
      if (((e = Qt(e)), e.length > 1)) {
        var n = e.map(function (u) {
            return Mt.quickSetter(u, t, i)
          }),
          s = n.length
        return function (u) {
          for (var p = s; p--; ) n[p](u)
        }
      }
      e = e[0] || {}
      var o = zt[t],
        a = wn(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        c = o
          ? function (u) {
              var p = new o()
              ;(Zn._pt = 0),
                p.init(e, i ? u + i : u, Zn, 0, [e]),
                p.render(1, p),
                Zn._pt && Xa(1, Zn)
            }
          : a.set(e, l)
      return o
        ? c
        : function (u) {
            return c(e, l, i ? u + i : u, a, 1)
          }
    },
    quickTo: function (e, t, i) {
      var n,
        s = Mt.to(
          e,
          On(((n = {}), (n[t] = '+=0.1'), (n.paused = !0), n), i || {})
        ),
        o = function (l, c, u) {
          return s.resetTo(t, l, c, u)
        }
      return (o.tween = s), o
    },
    isTweening: function (e) {
      return ke.getTweensOf(e, !0).length > 0
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = xn(e.ease, ar.ease)), Cl(ar, e || {})
    },
    config: function (e) {
      return Cl(jt, e || {})
    },
    registerEffect: function (e) {
      var t = e.name,
        i = e.effect,
        n = e.plugins,
        s = e.defaults,
        o = e.extendTimeline
      ;(n || '').split(',').forEach(function (a) {
        return (
          a && !zt[a] && !Ft[a] && as(t + ' effect requires ' + a + ' plugin.')
        )
      }),
        (To[t] = function (a, l, c) {
          return i(Qt(a), ni(l || {}, s), c)
        }),
        o &&
          (vt.prototype[t] = function (a, l, c) {
            return this.add(To[t](a, Pi(l) ? l : (c = l) && {}, this), c)
          })
    },
    registerEase: function (e, t) {
      se[e] = xn(t)
    },
    parseEase: function (e, t) {
      return arguments.length ? xn(e, t) : se
    },
    getById: function (e) {
      return ke.getById(e)
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {})
      var i = new vt(e),
        n,
        s
      for (
        i.smoothChildTiming = St(e.smoothChildTiming),
          ke.remove(i),
          i._dp = 0,
          i._time = i._tTime = ke._time,
          n = ke._first;
        n;

      )
        (s = n._next),
          (t ||
            !(
              !n._dur &&
              n instanceof Ne &&
              n.vars.onComplete === n._targets[0]
            )) &&
            ki(i, n, n._start - n._delay),
          (n = s)
      return ki(ke, i, 0), i
    },
    context: function (e, t) {
      return e ? new Nu(e, t) : be
    },
    matchMedia: function (e) {
      return new Tp(e)
    },
    matchMediaRefresh: function () {
      return (
        Cn.forEach(function (e) {
          var t = e.conditions,
            i,
            n
          for (n in t) t[n] && ((t[n] = !1), (i = 1))
          i && e.revert()
        }) || fa()
      )
    },
    addEventListener: function (e, t) {
      var i = Us[e] || (Us[e] = [])
      ~i.indexOf(t) || i.push(t)
    },
    removeEventListener: function (e, t) {
      var i = Us[e],
        n = i && i.indexOf(t)
      n >= 0 && i.splice(n, 1)
    },
    utils: {
      wrap: rp,
      wrapYoyo: sp,
      distribute: vu,
      random: wu,
      snap: bu,
      normalize: np,
      getUnit: lt,
      clamp: Jf,
      splitColor: Eu,
      toArray: Qt,
      selector: ca,
      mapRange: xu,
      pipe: tp,
      unitize: ip,
      interpolate: op,
      shuffle: _u
    },
    install: su,
    effects: To,
    ticker: It,
    updateRoot: vt.updateRoot,
    plugins: zt,
    globalTimeline: ke,
    core: {
      PropTween: At,
      globals: ou,
      Tween: Ne,
      Timeline: vt,
      Animation: ds,
      getCache: wn,
      _removeLinkedListItem: co,
      reverting: function () {
        return ct
      },
      context: function (e) {
        return e && be && (be.data.push(e), (e._ctx = be)), be
      },
      suppressOverwrites: function (e) {
        return (za = e)
      }
    }
  }
Ot('to,from,fromTo,delayedCall,set,killTweensOf', function (r) {
  return (eo[r] = Ne[r])
})
It.add(vt.updateRoot)
Zn = eo.to({}, { duration: 0 })
var Sp = function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next
    return i
  },
  Op = function (e, t) {
    var i = e._targets,
      n,
      s,
      o
    for (n in t)
      for (s = i.length; s--; )
        (o = e._ptLookup[s][n]),
          o &&
            (o = o.d) &&
            (o._pt && (o = Sp(o, n)),
            o && o.modifier && o.modifier(t[n], e, i[s], n))
  },
  Mo = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (n, s, o) {
        o._onInit = function (a) {
          var l, c
          if (
            (Ge(s) &&
              ((l = {}),
              Ot(s, function (u) {
                return (l[u] = 1)
              }),
              (s = l)),
            t)
          ) {
            l = {}
            for (c in s) l[c] = t(s[c])
            s = l
          }
          Op(a, s)
        }
      }
    }
  },
  Mt =
    eo.registerPlugin(
      {
        name: 'attr',
        init: function (e, t, i, n, s) {
          var o, a, l
          this.tween = i
          for (o in t)
            (l = e.getAttribute(o) || ''),
              (a = this.add(
                e,
                'setAttribute',
                (l || 0) + '',
                t[o],
                n,
                s,
                0,
                0,
                o
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o)
        },
        render: function (e, t) {
          for (var i = t._pt; i; )
            ct ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next)
        }
      },
      {
        name: 'endArray',
        init: function (e, t) {
          for (var i = t.length; i--; )
            this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
        }
      },
      Mo('roundProps', ua),
      Mo('modifiers'),
      Mo('snap', bu)
    ) || eo
Ne.version = vt.version = Mt.version = '3.12.5'
ru = 1
Ba() && ur()
se.Power0
se.Power1
se.Power2
se.Power3
se.Power4
se.Linear
se.Quad
se.Cubic
se.Quart
se.Quint
se.Strong
se.Elastic
se.Back
se.SteppedEase
se.Bounce
se.Sine
se.Expo
se.Circ
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Al,
  Xi,
  tr,
  Ga,
  vn,
  Pl,
  Za,
  Ap = function () {
    return typeof window < 'u'
  },
  Fi = {},
  hn = 180 / Math.PI,
  ir = Math.PI / 180,
  Fn = Math.atan2,
  Ml = 1e8,
  Ka = /([A-Z])/g,
  Pp = /(left|right|width|margin|padding|x)/i,
  Mp = /[\s,\(]\S/,
  Ei = {
    autoAlpha: 'opacity,visibility',
    scale: 'scaleX,scaleY',
    alpha: 'opacity'
  },
  pa = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
  },
  Lp = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    )
  },
  Dp = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    )
  },
  Rp = function (e, t) {
    var i = t.s + t.c * e
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t)
  },
  ju = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
  },
  Fu = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
  },
  $p = function (e, t, i) {
    return (e.style[t] = i)
  },
  zp = function (e, t, i) {
    return e.style.setProperty(t, i)
  },
  Ip = function (e, t, i) {
    return (e._gsap[t] = i)
  },
  Bp = function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i)
  },
  Np = function (e, t, i, n, s) {
    var o = e._gsap
    ;(o.scaleX = o.scaleY = i), o.renderTransform(s, o)
  },
  jp = function (e, t, i, n, s) {
    var o = e._gsap
    ;(o[t] = i), o.renderTransform(s, o)
  },
  Ee = 'transform',
  Pt = Ee + 'Origin',
  Fp = function r(e, t) {
    var i = this,
      n = this.target,
      s = n.style,
      o = n._gsap
    if (e in Fi && s) {
      if (((this.tfm = this.tfm || {}), e !== 'transform'))
        (e = Ei[e] || e),
          ~e.indexOf(',')
            ? e.split(',').forEach(function (a) {
                return (i.tfm[a] = $i(n, a))
              })
            : (this.tfm[e] = o.x ? o[e] : $i(n, e)),
          e === Pt && (this.tfm.zOrigin = o.zOrigin)
      else
        return Ei.transform.split(',').forEach(function (a) {
          return r.call(i, a, t)
        })
      if (this.props.indexOf(Ee) >= 0) return
      o.svg &&
        ((this.svgo = n.getAttribute('data-svg-origin')),
        this.props.push(Pt, t, '')),
        (e = Ee)
    }
    ;(s || t) && this.props.push(e, t, s[e])
  },
  Uu = function (e) {
    e.translate &&
      (e.removeProperty('translate'),
      e.removeProperty('scale'),
      e.removeProperty('rotate'))
  },
  Up = function () {
    var e = this.props,
      t = this.target,
      i = t.style,
      n = t._gsap,
      s,
      o
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (t[e[s]] = e[s + 2])
        : e[s + 2]
          ? (i[e[s]] = e[s + 2])
          : i.removeProperty(
              e[s].substr(0, 2) === '--'
                ? e[s]
                : e[s].replace(Ka, '-$1').toLowerCase()
            )
    if (this.tfm) {
      for (o in this.tfm) n[o] = this.tfm[o]
      n.svg &&
        (n.renderTransform(),
        t.setAttribute('data-svg-origin', this.svgo || '')),
        (s = Za()),
        (!s || !s.isStart) &&
          !i[Ee] &&
          (Uu(i),
          n.zOrigin &&
            i[Pt] &&
            ((i[Pt] += ' ' + n.zOrigin + 'px'),
            (n.zOrigin = 0),
            n.renderTransform()),
          (n.uncache = 1))
    }
  },
  Hu = function (e, t) {
    var i = { target: e, props: [], revert: Up, save: Fp }
    return (
      e._gsap || Mt.core.getCache(e),
      t &&
        t.split(',').forEach(function (n) {
          return i.save(n)
        }),
      i
    )
  },
  Vu,
  ha = function (e, t) {
    var i = Xi.createElementNS
      ? Xi.createElementNS(
          (t || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
          e
        )
      : Xi.createElement(e)
    return i && i.style ? i : Xi.createElement(e)
  },
  Si = function r(e, t, i) {
    var n = getComputedStyle(e)
    return (
      n[t] ||
      n.getPropertyValue(t.replace(Ka, '-$1').toLowerCase()) ||
      n.getPropertyValue(t) ||
      (!i && r(e, dr(t) || t, 1)) ||
      ''
    )
  },
  Ll = 'O,Moz,ms,Ms,Webkit'.split(','),
  dr = function (e, t, i) {
    var n = t || vn,
      s = n.style,
      o = 5
    if (e in s && !i) return e
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Ll[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? 'ms' : o >= 0 ? Ll[o] : '') + e
  },
  ga = function () {
    Ap() &&
      window.document &&
      ((Al = window),
      (Xi = Al.document),
      (tr = Xi.documentElement),
      (vn = ha('div') || { style: {} }),
      ha('div'),
      (Ee = dr(Ee)),
      (Pt = Ee + 'Origin'),
      (vn.style.cssText =
        'border-width:0;line-height:0;position:absolute;padding:0'),
      (Vu = !!dr('perspective')),
      (Za = Mt.core.reverting),
      (Ga = 1))
  },
  Lo = function r(e) {
    var t = ha(
        'svg',
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
          'http://www.w3.org/2000/svg'
      ),
      i = this.parentNode,
      n = this.nextSibling,
      s = this.style.cssText,
      o
    if (
      (tr.appendChild(t),
      t.appendChild(this),
      (this.style.display = 'block'),
      e)
    )
      try {
        ;(o = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = r)
      } catch {}
    else this._gsapBBox && (o = this._gsapBBox())
    return (
      i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      tr.removeChild(t),
      (this.style.cssText = s),
      o
    )
  },
  Dl = function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i])
  },
  qu = function (e) {
    var t
    try {
      t = e.getBBox()
    } catch {
      t = Lo.call(e, !0)
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === Lo || (t = Lo.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Dl(e, ['x', 'cx', 'x1']) || 0,
            y: +Dl(e, ['y', 'cy', 'y1']) || 0,
            width: 0,
            height: 0
          }
        : t
    )
  },
  Wu = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && qu(e))
  },
  An = function (e, t) {
    if (t) {
      var i = e.style,
        n
      t in Fi && t !== Pt && (t = Ee),
        i.removeProperty
          ? ((n = t.substr(0, 2)),
            (n === 'ms' || t.substr(0, 6) === 'webkit') && (t = '-' + t),
            i.removeProperty(
              n === '--' ? t : t.replace(Ka, '-$1').toLowerCase()
            ))
          : i.removeAttribute(t)
    }
  },
  Gi = function (e, t, i, n, s, o) {
    var a = new At(e._pt, t, i, 0, 1, o ? Fu : ju)
    return (e._pt = a), (a.b = n), (a.e = s), e._props.push(i), a
  },
  Rl = { deg: 1, rad: 1, turn: 1 },
  Hp = { grid: 1, flex: 1 },
  nn = function r(e, t, i, n) {
    var s = parseFloat(i) || 0,
      o = (i + '').trim().substr((s + '').length) || 'px',
      a = vn.style,
      l = Pp.test(t),
      c = e.tagName.toLowerCase() === 'svg',
      u = (c ? 'client' : 'offset') + (l ? 'Width' : 'Height'),
      p = 100,
      h = n === 'px',
      f = n === '%',
      m,
      g,
      _,
      k
    if (n === o || !s || Rl[n] || Rl[o]) return s
    if (
      (o !== 'px' && !h && (s = r(e, t, i, 'px')),
      (k = e.getCTM && Wu(e)),
      (f || o === '%') && (Fi[t] || ~t.indexOf('adius')))
    )
      return (
        (m = k ? e.getBBox()[l ? 'width' : 'height'] : e[u]),
        Re(f ? (s / m) * p : (s / 100) * m)
      )
    if (
      ((a[l ? 'width' : 'height'] = p + (h ? o : n)),
      (g =
        ~t.indexOf('adius') || (n === 'em' && e.appendChild && !c)
          ? e
          : e.parentNode),
      k && (g = (e.ownerSVGElement || {}).parentNode),
      (!g || g === Xi || !g.appendChild) && (g = Xi.body),
      (_ = g._gsap),
      _ && f && _.width && l && _.time === It.time && !_.uncache)
    )
      return Re((s / _.width) * p)
    if (f && (t === 'height' || t === 'width')) {
      var T = e.style[t]
      ;(e.style[t] = p + n), (m = e[u]), T ? (e.style[t] = T) : An(e, t)
    } else
      (f || o === '%') &&
        !Hp[Si(g, 'display')] &&
        (a.position = Si(e, 'position')),
        g === e && (a.position = 'static'),
        g.appendChild(vn),
        (m = vn[u]),
        g.removeChild(vn),
        (a.position = 'absolute')
    return (
      l && f && ((_ = wn(g)), (_.time = It.time), (_.width = g[u])),
      Re(h ? (m * s) / p : m && s ? (p / m) * s : 0)
    )
  },
  $i = function (e, t, i, n) {
    var s
    return (
      Ga || ga(),
      t in Ei &&
        t !== 'transform' &&
        ((t = Ei[t]), ~t.indexOf(',') && (t = t.split(',')[0])),
      Fi[t] && t !== 'transform'
        ? ((s = ps(e, n)),
          (s =
            t !== 'transformOrigin'
              ? s[t]
              : s.svg
                ? s.origin
                : io(Si(e, Pt)) + ' ' + s.zOrigin + 'px'))
        : ((s = e.style[t]),
          (!s || s === 'auto' || n || ~(s + '').indexOf('calc(')) &&
            (s =
              (to[t] && to[t](e, t, i)) ||
              Si(e, t) ||
              lu(e, t) ||
              (t === 'opacity' ? 1 : 0))),
      i && !~(s + '').trim().indexOf(' ') ? nn(e, t, s, i) + i : s
    )
  },
  Vp = function (e, t, i, n) {
    if (!i || i === 'none') {
      var s = dr(t, e, 1),
        o = s && Si(e, s, 1)
      o && o !== i
        ? ((t = s), (i = o))
        : t === 'borderColor' && (i = Si(e, 'borderTopColor'))
    }
    var a = new At(this._pt, e.style, t, 0, 1, Iu),
      l = 0,
      c = 0,
      u,
      p,
      h,
      f,
      m,
      g,
      _,
      k,
      T,
      x,
      v,
      y
    if (
      ((a.b = i),
      (a.e = n),
      (i += ''),
      (n += ''),
      n === 'auto' &&
        ((g = e.style[t]),
        (e.style[t] = n),
        (n = Si(e, t) || n),
        g ? (e.style[t] = g) : An(e, t)),
      (u = [i, n]),
      Su(u),
      (i = u[0]),
      (n = u[1]),
      (h = i.match(Gn) || []),
      (y = n.match(Gn) || []),
      y.length)
    ) {
      for (; (p = Gn.exec(n)); )
        (_ = p[0]),
          (T = n.substring(l, p.index)),
          m
            ? (m = (m + 1) % 5)
            : (T.substr(-5) === 'rgba(' || T.substr(-5) === 'hsla(') && (m = 1),
          _ !== (g = h[c++] || '') &&
            ((f = parseFloat(g) || 0),
            (v = g.substr((f + '').length)),
            _.charAt(1) === '=' && (_ = er(f, _) + v),
            (k = parseFloat(_)),
            (x = _.substr((k + '').length)),
            (l = Gn.lastIndex - x.length),
            x ||
              ((x = x || jt.units[t] || v),
              l === n.length && ((n += x), (a.e += x))),
            v !== x && (f = nn(e, t, g, x) || 0),
            (a._pt = {
              _next: a._pt,
              p: T || c === 1 ? T : ',',
              s: f,
              c: k - f,
              m: (m && m < 4) || t === 'zIndex' ? Math.round : 0
            }))
      a.c = l < n.length ? n.substring(l, n.length) : ''
    } else a.r = t === 'display' && n === 'none' ? Fu : ju
    return iu.test(n) && (a.e = 0), (this._pt = a), a
  },
  $l = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
  qp = function (e) {
    var t = e.split(' '),
      i = t[0],
      n = t[1] || '50%'
    return (
      (i === 'top' || i === 'bottom' || n === 'left' || n === 'right') &&
        ((e = i), (i = n), (n = e)),
      (t[0] = $l[i] || i),
      (t[1] = $l[n] || n),
      t.join(' ')
    )
  },
  Wp = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var i = t.t,
        n = i.style,
        s = t.u,
        o = i._gsap,
        a,
        l,
        c
      if (s === 'all' || s === !0) (n.cssText = ''), (l = 1)
      else
        for (s = s.split(','), c = s.length; --c > -1; )
          (a = s[c]),
            Fi[a] && ((l = 1), (a = a === 'transformOrigin' ? Pt : Ee)),
            An(i, a)
      l &&
        (An(i, Ee),
        o &&
          (o.svg && i.removeAttribute('transform'),
          ps(i, 1),
          (o.uncache = 1),
          Uu(n)))
    }
  },
  to = {
    clearProps: function (e, t, i, n, s) {
      if (s.data !== 'isFromStart') {
        var o = (e._pt = new At(e._pt, t, i, 0, 0, Wp))
        return (o.u = n), (o.pr = -10), (o.tween = s), e._props.push(i), 1
      }
    }
  },
  fs = [1, 0, 0, 1, 0, 0],
  Yu = {},
  Xu = function (e) {
    return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e
  },
  zl = function (e) {
    var t = Si(e, Ee)
    return Xu(t) ? fs : t.substr(7).match(tu).map(Re)
  },
  Qa = function (e, t) {
    var i = e._gsap || wn(e),
      n = e.style,
      s = zl(e),
      o,
      a,
      l,
      c
    return i.svg && e.getAttribute('transform')
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(',') === '1,0,0,1,0,0' ? fs : s)
      : (s === fs &&
          !e.offsetParent &&
          e !== tr &&
          !i.svg &&
          ((l = n.display),
          (n.display = 'block'),
          (o = e.parentNode),
          (!o || !e.offsetParent) &&
            ((c = 1), (a = e.nextElementSibling), tr.appendChild(e)),
          (s = zl(e)),
          l ? (n.display = l) : An(e, 'display'),
          c &&
            (a
              ? o.insertBefore(e, a)
              : o
                ? o.appendChild(e)
                : tr.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
  },
  ma = function (e, t, i, n, s, o) {
    var a = e._gsap,
      l = s || Qa(e, !0),
      c = a.xOrigin || 0,
      u = a.yOrigin || 0,
      p = a.xOffset || 0,
      h = a.yOffset || 0,
      f = l[0],
      m = l[1],
      g = l[2],
      _ = l[3],
      k = l[4],
      T = l[5],
      x = t.split(' '),
      v = parseFloat(x[0]) || 0,
      y = parseFloat(x[1]) || 0,
      E,
      C,
      S,
      b
    i
      ? l !== fs &&
        (C = f * _ - m * g) &&
        ((S = v * (_ / C) + y * (-g / C) + (g * T - _ * k) / C),
        (b = v * (-m / C) + y * (f / C) - (f * T - m * k) / C),
        (v = S),
        (y = b))
      : ((E = qu(e)),
        (v = E.x + (~x[0].indexOf('%') ? (v / 100) * E.width : v)),
        (y = E.y + (~(x[1] || x[0]).indexOf('%') ? (y / 100) * E.height : y))),
      n || (n !== !1 && a.smooth)
        ? ((k = v - c),
          (T = y - u),
          (a.xOffset = p + (k * f + T * g) - k),
          (a.yOffset = h + (k * m + T * _) - T))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = v),
      (a.yOrigin = y),
      (a.smooth = !!n),
      (a.origin = t),
      (a.originIsAbsolute = !!i),
      (e.style[Pt] = '0px 0px'),
      o &&
        (Gi(o, a, 'xOrigin', c, v),
        Gi(o, a, 'yOrigin', u, y),
        Gi(o, a, 'xOffset', p, a.xOffset),
        Gi(o, a, 'yOffset', h, a.yOffset)),
      e.setAttribute('data-svg-origin', v + ' ' + y)
  },
  ps = function (e, t) {
    var i = e._gsap || new Mu(e)
    if ('x' in i && !t && !i.uncache) return i
    var n = e.style,
      s = i.scaleX < 0,
      o = 'px',
      a = 'deg',
      l = getComputedStyle(e),
      c = Si(e, Pt) || '0',
      u,
      p,
      h,
      f,
      m,
      g,
      _,
      k,
      T,
      x,
      v,
      y,
      E,
      C,
      S,
      b,
      O,
      M,
      P,
      z,
      F,
      H,
      B,
      $,
      D,
      V,
      w,
      te,
      me,
      Je,
      ae,
      ce
    return (
      (u = p = h = g = _ = k = T = x = v = 0),
      (f = m = 1),
      (i.svg = !!(e.getCTM && Wu(e))),
      l.translate &&
        ((l.translate !== 'none' ||
          l.scale !== 'none' ||
          l.rotate !== 'none') &&
          (n[Ee] =
            (l.translate !== 'none'
              ? 'translate3d(' +
                (l.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                ') '
              : '') +
            (l.rotate !== 'none' ? 'rotate(' + l.rotate + ') ' : '') +
            (l.scale !== 'none'
              ? 'scale(' + l.scale.split(' ').join(',') + ') '
              : '') +
            (l[Ee] !== 'none' ? l[Ee] : '')),
        (n.scale = n.rotate = n.translate = 'none')),
      (C = Qa(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((D = e.getBBox()),
            (c = i.xOrigin - D.x + 'px ' + (i.yOrigin - D.y) + 'px'),
            ($ = ''))
          : ($ = !t && e.getAttribute('data-svg-origin')),
        ma(e, $ || c, !!$ || i.originIsAbsolute, i.smooth !== !1, C)),
      (y = i.xOrigin || 0),
      (E = i.yOrigin || 0),
      C !== fs &&
        ((M = C[0]),
        (P = C[1]),
        (z = C[2]),
        (F = C[3]),
        (u = H = C[4]),
        (p = B = C[5]),
        C.length === 6
          ? ((f = Math.sqrt(M * M + P * P)),
            (m = Math.sqrt(F * F + z * z)),
            (g = M || P ? Fn(P, M) * hn : 0),
            (T = z || F ? Fn(z, F) * hn + g : 0),
            T && (m *= Math.abs(Math.cos(T * ir))),
            i.svg && ((u -= y - (y * M + E * z)), (p -= E - (y * P + E * F))))
          : ((ce = C[6]),
            (Je = C[7]),
            (w = C[8]),
            (te = C[9]),
            (me = C[10]),
            (ae = C[11]),
            (u = C[12]),
            (p = C[13]),
            (h = C[14]),
            (S = Fn(ce, me)),
            (_ = S * hn),
            S &&
              ((b = Math.cos(-S)),
              (O = Math.sin(-S)),
              ($ = H * b + w * O),
              (D = B * b + te * O),
              (V = ce * b + me * O),
              (w = H * -O + w * b),
              (te = B * -O + te * b),
              (me = ce * -O + me * b),
              (ae = Je * -O + ae * b),
              (H = $),
              (B = D),
              (ce = V)),
            (S = Fn(-z, me)),
            (k = S * hn),
            S &&
              ((b = Math.cos(-S)),
              (O = Math.sin(-S)),
              ($ = M * b - w * O),
              (D = P * b - te * O),
              (V = z * b - me * O),
              (ae = F * O + ae * b),
              (M = $),
              (P = D),
              (z = V)),
            (S = Fn(P, M)),
            (g = S * hn),
            S &&
              ((b = Math.cos(S)),
              (O = Math.sin(S)),
              ($ = M * b + P * O),
              (D = H * b + B * O),
              (P = P * b - M * O),
              (B = B * b - H * O),
              (M = $),
              (H = D)),
            _ &&
              Math.abs(_) + Math.abs(g) > 359.9 &&
              ((_ = g = 0), (k = 180 - k)),
            (f = Re(Math.sqrt(M * M + P * P + z * z))),
            (m = Re(Math.sqrt(B * B + ce * ce))),
            (S = Fn(H, B)),
            (T = Math.abs(S) > 2e-4 ? S * hn : 0),
            (v = ae ? 1 / (ae < 0 ? -ae : ae) : 0)),
        i.svg &&
          (($ = e.getAttribute('transform')),
          (i.forceCSS = e.setAttribute('transform', '') || !Xu(Si(e, Ee))),
          $ && e.setAttribute('transform', $))),
      Math.abs(T) > 90 &&
        Math.abs(T) < 270 &&
        (s
          ? ((f *= -1), (T += g <= 0 ? 180 : -180), (g += g <= 0 ? 180 : -180))
          : ((m *= -1), (T += T <= 0 ? 180 : -180))),
      (t = t || i.uncache),
      (i.x =
        u -
        ((i.xPercent =
          u &&
          ((!t && i.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * i.xPercent) / 100
          : 0) +
        o),
      (i.y =
        p -
        ((i.yPercent =
          p &&
          ((!t && i.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0)))
          ? (e.offsetHeight * i.yPercent) / 100
          : 0) +
        o),
      (i.z = h + o),
      (i.scaleX = Re(f)),
      (i.scaleY = Re(m)),
      (i.rotation = Re(g) + a),
      (i.rotationX = Re(_) + a),
      (i.rotationY = Re(k) + a),
      (i.skewX = T + a),
      (i.skewY = x + a),
      (i.transformPerspective = v + o),
      (i.zOrigin = parseFloat(c.split(' ')[2]) || (!t && i.zOrigin) || 0) &&
        (n[Pt] = io(c)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = jt.force3D),
      (i.renderTransform = i.svg ? Xp : Vu ? Gu : Yp),
      (i.uncache = 0),
      i
    )
  },
  io = function (e) {
    return (e = e.split(' '))[0] + ' ' + e[1]
  },
  Do = function (e, t, i) {
    var n = lt(t)
    return Re(parseFloat(t) + parseFloat(nn(e, 'x', i + 'px', n))) + n
  },
  Yp = function (e, t) {
    ;(t.z = '0px'),
      (t.rotationY = t.rotationX = '0deg'),
      (t.force3D = 0),
      Gu(e, t)
  },
  fn = '0deg',
  Mr = '0px',
  pn = ') ',
  Gu = function (e, t) {
    var i = t || this,
      n = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.z,
      c = i.rotation,
      u = i.rotationY,
      p = i.rotationX,
      h = i.skewX,
      f = i.skewY,
      m = i.scaleX,
      g = i.scaleY,
      _ = i.transformPerspective,
      k = i.force3D,
      T = i.target,
      x = i.zOrigin,
      v = '',
      y = (k === 'auto' && e && e !== 1) || k === !0
    if (x && (p !== fn || u !== fn)) {
      var E = parseFloat(u) * ir,
        C = Math.sin(E),
        S = Math.cos(E),
        b
      ;(E = parseFloat(p) * ir),
        (b = Math.cos(E)),
        (o = Do(T, o, C * b * -x)),
        (a = Do(T, a, -Math.sin(E) * -x)),
        (l = Do(T, l, S * b * -x + x))
    }
    _ !== Mr && (v += 'perspective(' + _ + pn),
      (n || s) && (v += 'translate(' + n + '%, ' + s + '%) '),
      (y || o !== Mr || a !== Mr || l !== Mr) &&
        (v +=
          l !== Mr || y
            ? 'translate3d(' + o + ', ' + a + ', ' + l + ') '
            : 'translate(' + o + ', ' + a + pn),
      c !== fn && (v += 'rotate(' + c + pn),
      u !== fn && (v += 'rotateY(' + u + pn),
      p !== fn && (v += 'rotateX(' + p + pn),
      (h !== fn || f !== fn) && (v += 'skew(' + h + ', ' + f + pn),
      (m !== 1 || g !== 1) && (v += 'scale(' + m + ', ' + g + pn),
      (T.style[Ee] = v || 'translate(0, 0)')
  },
  Xp = function (e, t) {
    var i = t || this,
      n = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.rotation,
      c = i.skewX,
      u = i.skewY,
      p = i.scaleX,
      h = i.scaleY,
      f = i.target,
      m = i.xOrigin,
      g = i.yOrigin,
      _ = i.xOffset,
      k = i.yOffset,
      T = i.forceCSS,
      x = parseFloat(o),
      v = parseFloat(a),
      y,
      E,
      C,
      S,
      b
    ;(l = parseFloat(l)),
      (c = parseFloat(c)),
      (u = parseFloat(u)),
      u && ((u = parseFloat(u)), (c += u), (l += u)),
      l || c
        ? ((l *= ir),
          (c *= ir),
          (y = Math.cos(l) * p),
          (E = Math.sin(l) * p),
          (C = Math.sin(l - c) * -h),
          (S = Math.cos(l - c) * h),
          c &&
            ((u *= ir),
            (b = Math.tan(c - u)),
            (b = Math.sqrt(1 + b * b)),
            (C *= b),
            (S *= b),
            u &&
              ((b = Math.tan(u)),
              (b = Math.sqrt(1 + b * b)),
              (y *= b),
              (E *= b))),
          (y = Re(y)),
          (E = Re(E)),
          (C = Re(C)),
          (S = Re(S)))
        : ((y = p), (S = h), (E = C = 0)),
      ((x && !~(o + '').indexOf('px')) || (v && !~(a + '').indexOf('px'))) &&
        ((x = nn(f, 'x', o, 'px')), (v = nn(f, 'y', a, 'px'))),
      (m || g || _ || k) &&
        ((x = Re(x + m - (m * y + g * C) + _)),
        (v = Re(v + g - (m * E + g * S) + k))),
      (n || s) &&
        ((b = f.getBBox()),
        (x = Re(x + (n / 100) * b.width)),
        (v = Re(v + (s / 100) * b.height))),
      (b =
        'matrix(' + y + ',' + E + ',' + C + ',' + S + ',' + x + ',' + v + ')'),
      f.setAttribute('transform', b),
      T && (f.style[Ee] = b)
  },
  Gp = function (e, t, i, n, s) {
    var o = 360,
      a = Ge(s),
      l = parseFloat(s) * (a && ~s.indexOf('rad') ? hn : 1),
      c = l - n,
      u = n + c + 'deg',
      p,
      h
    return (
      a &&
        ((p = s.split('_')[1]),
        p === 'short' && ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -o)),
        p === 'cw' && c < 0
          ? (c = ((c + o * Ml) % o) - ~~(c / o) * o)
          : p === 'ccw' && c > 0 && (c = ((c - o * Ml) % o) - ~~(c / o) * o)),
      (e._pt = h = new At(e._pt, t, i, n, c, Lp)),
      (h.e = u),
      (h.u = 'deg'),
      e._props.push(i),
      h
    )
  },
  Il = function (e, t) {
    for (var i in t) e[i] = t[i]
    return e
  },
  Zp = function (e, t, i) {
    var n = Il({}, i._gsap),
      s = 'perspective,force3D,transformOrigin,svgOrigin',
      o = i.style,
      a,
      l,
      c,
      u,
      p,
      h,
      f,
      m
    n.svg
      ? ((c = i.getAttribute('transform')),
        i.setAttribute('transform', ''),
        (o[Ee] = t),
        (a = ps(i, 1)),
        An(i, Ee),
        i.setAttribute('transform', c))
      : ((c = getComputedStyle(i)[Ee]),
        (o[Ee] = t),
        (a = ps(i, 1)),
        (o[Ee] = c))
    for (l in Fi)
      (c = n[l]),
        (u = a[l]),
        c !== u &&
          s.indexOf(l) < 0 &&
          ((f = lt(c)),
          (m = lt(u)),
          (p = f !== m ? nn(i, l, c, m) : parseFloat(c)),
          (h = parseFloat(u)),
          (e._pt = new At(e._pt, a, l, p, h - p, pa)),
          (e._pt.u = m || 0),
          e._props.push(l))
    Il(a, n)
  }
Ot('padding,margin,Width,Radius', function (r, e) {
  var t = 'Top',
    i = 'Right',
    n = 'Bottom',
    s = 'Left',
    o = (e < 3 ? [t, i, n, s] : [t + s, t + i, n + i, n + s]).map(function (a) {
      return e < 2 ? r + a : 'border' + a + r
    })
  to[e > 1 ? 'border' + r : r] = function (a, l, c, u, p) {
    var h, f
    if (arguments.length < 4)
      return (
        (h = o.map(function (m) {
          return $i(a, m, c)
        })),
        (f = h.join(' ')),
        f.split(h[0]).length === 5 ? h[0] : f
      )
    ;(h = (u + '').split(' ')),
      (f = {}),
      o.forEach(function (m, g) {
        return (f[m] = h[g] = h[g] || h[((g - 1) / 2) | 0])
      }),
      a.init(l, f, p)
  }
})
var Zu = {
  name: 'css',
  register: ga,
  targetTest: function (e) {
    return e.style && e.nodeType
  },
  init: function (e, t, i, n, s) {
    var o = this._props,
      a = e.style,
      l = i.vars.startAt,
      c,
      u,
      p,
      h,
      f,
      m,
      g,
      _,
      k,
      T,
      x,
      v,
      y,
      E,
      C,
      S
    Ga || ga(),
      (this.styles = this.styles || Hu(e)),
      (S = this.styles.props),
      (this.tween = i)
    for (g in t)
      if (g !== 'autoRound' && ((u = t[g]), !(zt[g] && Lu(g, t, i, n, e, s)))) {
        if (
          ((f = typeof u),
          (m = to[g]),
          f === 'function' && ((u = u.call(i, n, e, s)), (f = typeof u)),
          f === 'string' && ~u.indexOf('random(') && (u = cs(u)),
          m)
        )
          m(this, e, g, u, i) && (C = 1)
        else if (g.substr(0, 2) === '--')
          (c = (getComputedStyle(e).getPropertyValue(g) + '').trim()),
            (u += ''),
            (Ji.lastIndex = 0),
            Ji.test(c) || ((_ = lt(c)), (k = lt(u))),
            k ? _ !== k && (c = nn(e, g, c, k) + k) : _ && (u += _),
            this.add(a, 'setProperty', c, u, n, s, 0, 0, g),
            o.push(g),
            S.push(g, 0, a[g])
        else if (f !== 'undefined') {
          if (
            (l && g in l
              ? ((c = typeof l[g] == 'function' ? l[g].call(i, n, e, s) : l[g]),
                Ge(c) && ~c.indexOf('random(') && (c = cs(c)),
                lt(c + '') ||
                  c === 'auto' ||
                  (c += jt.units[g] || lt($i(e, g)) || ''),
                (c + '').charAt(1) === '=' && (c = $i(e, g)))
              : (c = $i(e, g)),
            (h = parseFloat(c)),
            (T = f === 'string' && u.charAt(1) === '=' && u.substr(0, 2)),
            T && (u = u.substr(2)),
            (p = parseFloat(u)),
            g in Ei &&
              (g === 'autoAlpha' &&
                (h === 1 && $i(e, 'visibility') === 'hidden' && p && (h = 0),
                S.push('visibility', 0, a.visibility),
                Gi(
                  this,
                  a,
                  'visibility',
                  h ? 'inherit' : 'hidden',
                  p ? 'inherit' : 'hidden',
                  !p
                )),
              g !== 'scale' &&
                g !== 'transform' &&
                ((g = Ei[g]), ~g.indexOf(',') && (g = g.split(',')[0]))),
            (x = g in Fi),
            x)
          ) {
            if (
              (this.styles.save(g),
              v ||
                ((y = e._gsap),
                (y.renderTransform && !t.parseTransform) ||
                  ps(e, t.parseTransform),
                (E = t.smoothOrigin !== !1 && y.smooth),
                (v = this._pt =
                  new At(this._pt, a, Ee, 0, 1, y.renderTransform, y, 0, -1)),
                (v.dep = 1)),
              g === 'scale')
            )
              (this._pt = new At(
                this._pt,
                y,
                'scaleY',
                y.scaleY,
                (T ? er(y.scaleY, T + p) : p) - y.scaleY || 0,
                pa
              )),
                (this._pt.u = 0),
                o.push('scaleY', g),
                (g += 'X')
            else if (g === 'transformOrigin') {
              S.push(Pt, 0, a[Pt]),
                (u = qp(u)),
                y.svg
                  ? ma(e, u, 0, E, 0, this)
                  : ((k = parseFloat(u.split(' ')[2]) || 0),
                    k !== y.zOrigin && Gi(this, y, 'zOrigin', y.zOrigin, k),
                    Gi(this, a, g, io(c), io(u)))
              continue
            } else if (g === 'svgOrigin') {
              ma(e, u, 1, E, 0, this)
              continue
            } else if (g in Yu) {
              Gp(this, y, g, h, T ? er(h, T + u) : u)
              continue
            } else if (g === 'smoothOrigin') {
              Gi(this, y, 'smooth', y.smooth, u)
              continue
            } else if (g === 'force3D') {
              y[g] = u
              continue
            } else if (g === 'transform') {
              Zp(this, u, e)
              continue
            }
          } else g in a || (g = dr(g) || g)
          if (x || ((p || p === 0) && (h || h === 0) && !Mp.test(u) && g in a))
            (_ = (c + '').substr((h + '').length)),
              p || (p = 0),
              (k = lt(u) || (g in jt.units ? jt.units[g] : _)),
              _ !== k && (h = nn(e, g, c, k)),
              (this._pt = new At(
                this._pt,
                x ? y : a,
                g,
                h,
                (T ? er(h, T + p) : p) - h,
                !x && (k === 'px' || g === 'zIndex') && t.autoRound !== !1
                  ? Rp
                  : pa
              )),
              (this._pt.u = k || 0),
              _ !== k && k !== '%' && ((this._pt.b = c), (this._pt.r = Dp))
          else if (g in a) Vp.call(this, e, g, c, T ? T + u : u)
          else if (g in e) this.add(e, g, c || e[g], T ? T + u : u, n, s)
          else if (g !== 'parseTransform') {
            ja(g, u)
            continue
          }
          x || (g in a ? S.push(g, 0, a[g]) : S.push(g, 1, c || e[g])),
            o.push(g)
        }
      }
    C && Bu(this)
  },
  render: function (e, t) {
    if (t.tween._time || !Za())
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next)
    else t.styles.revert()
  },
  get: $i,
  aliases: Ei,
  getSetter: function (e, t, i) {
    var n = Ei[t]
    return (
      n && n.indexOf(',') < 0 && (t = n),
      t in Fi && t !== Pt && (e._gsap.x || $i(e, 'x'))
        ? i && Pl === i
          ? t === 'scale'
            ? Bp
            : Ip
          : (Pl = i || {}) && (t === 'scale' ? Np : jp)
        : e.style && !Ia(e.style[t])
          ? $p
          : ~t.indexOf('-')
            ? zp
            : Ya(e, t)
    )
  },
  core: { _removeProperty: An, _getMatrix: Qa }
}
Mt.utils.checkPrefix = dr
Mt.core.getStyleSaver = Hu
;(function (r, e, t, i) {
  var n = Ot(r + ',' + e + ',' + t, function (s) {
    Fi[s] = 1
  })
  Ot(e, function (s) {
    ;(jt.units[s] = 'deg'), (Yu[s] = 1)
  }),
    (Ei[n[13]] = r + ',' + e),
    Ot(i, function (s) {
      var o = s.split(':')
      Ei[o[1]] = n[o[0]]
    })
})(
  'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
  'rotation,rotationX,rotationY,skewX,skewY',
  'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
  '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
)
Ot(
  'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
  function (r) {
    jt.units[r] = 'px'
  }
)
Mt.registerPlugin(Zu)
var Z = Mt.registerPlugin(Zu) || Mt
Z.core.Tween
const Kp = { class: 'bg-primary-500 text-white' },
  Qp = { class: 'container' },
  Jp = { class: 'py-4' },
  eh = vf({
    __name: 'Footer',
    setup(r) {
      const e = Le(!1)
      let t = 0,
        i = null
      const n = () => {
          i ||
            (i = requestAnimationFrame(() => {
              const a = window.scrollY || window.pageYOffset
              ;(e.value = a > t + 200), (i = null)
            }))
        },
        s = () => {
          const a = document.querySelector('.header')
          t = a ? a.offsetHeight : 0
        },
        o = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      return (
        qt(() => {
          s(),
            window.addEventListener('scroll', n, { passive: !0 }),
            window.addEventListener('resize', s),
            Z.to('.scale-bounce', {
              scale: 1.08,
              repeat: -1,
              yoyo: !0,
              ease: 'elastic.inOut(.2, 0.5)',
              duration: 1.2
            })
        }),
        Xc(() => {
          window.removeEventListener('scroll', n),
            window.removeEventListener('resize', s)
        }),
        (a, l) => {
          const c = _s('router-link')
          return (
            J(),
            ee('footer', Kp, [
              d('div', Qp, [
                d('div', Jp, [
                  l[2] ||
                    (l[2] = pi(
                      '<div class="text-center"><div class="text-sm"><ul class="flex flex-wrap justify-center gap-y-1 divide-x text-center md:mx-0 md:flex-nowrap md:text-start"><li class="px-2"><a href="https://futureparenting.cwgv.com.tw/" title="未來親子學習平台" target="_blank">未來親子</a></li><li class="px-2"><a href="https://futureparenting.cwgv.com.tw/kids" title="小天下．未來出版" target="_blank">小天下．未來出版</a></li><li class="px-2"><a href="https://futureparenting.cwgv.com.tw/junior" title="未來兒童" target="_blank">未來兒童 </a></li><li class="px-2"><a href="https://futureparenting.cwgv.com.tw/youth" title="未來少年" target="_blank">未來少年</a></li><li class="px-2"><a href="https://futureacademy.cwgv.com.tw/" title="線上學院" target="_blank">線上學院</a></li></ul><div class="mt-3"> 服務專線：(02)2662-0012 服務時間：週一~週五 9:00~12:30 13:30~17:00 </div><div> Copyright© 1999~2025 遠見天下文化出版股份有限公司. All rights </div><ul class="mt-5 flex items-center justify-center gap-5"><li class="text-white transition hover:text-[#fdfdac]"><a href="https://www.facebook.com/globalfuturefamily" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM16.5635 15.6589V23.8197H13.1869V15.6592H11.5V12.8469H13.1869V11.1585C13.1869 8.86425 14.1395 7.5 16.8457 7.5H19.0988V10.3126H17.6905C16.637 10.3126 16.5673 10.7056 16.5673 11.4391L16.5635 12.8466H19.1147L18.8162 15.6589H16.5635Z" fill="currentColor"></path></svg></a></li><li class="text-white transition hover:text-[#fdfdac]"><a href="https://www.instagram.com/futureparenting/" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM11.702 7.04833C12.5554 7.0095 12.8281 7 15.0007 7H14.9983C17.1716 7 17.4433 7.0095 18.2966 7.04833C19.1483 7.08733 19.73 7.22217 20.24 7.42C20.7666 7.62417 21.2116 7.89751 21.6567 8.34251C22.1017 8.78719 22.375 9.23352 22.58 9.7597C22.7767 10.2684 22.9117 10.8497 22.9517 11.7014C22.99 12.5547 23 12.8274 23 15.0001C23 17.1728 22.99 17.4448 22.9517 18.2981C22.9117 19.1495 22.7767 19.731 22.58 20.2398C22.375 20.7658 22.1017 21.2121 21.6567 21.6568C21.2121 22.1018 20.7665 22.3758 20.2405 22.5802C19.7315 22.778 19.1495 22.9128 18.2978 22.9518C17.4444 22.9907 17.1726 23.0002 14.9998 23.0002C12.8272 23.0002 12.5547 22.9907 11.7014 22.9518C10.8499 22.9128 10.2684 22.778 9.75936 22.5802C9.23352 22.3758 8.78719 22.1018 8.34268 21.6568C7.89784 21.2121 7.62451 20.7658 7.42 20.2396C7.22234 19.731 7.0875 19.1496 7.04833 18.298C7.00967 17.4446 7 17.1728 7 15.0001C7 12.8274 7.01 12.5546 7.04817 11.7012C7.0865 10.8499 7.2215 10.2684 7.41984 9.75953C7.62484 9.23352 7.89818 8.78719 8.34318 8.34251C8.78785 7.89768 9.23419 7.62434 9.76036 7.42C10.269 7.22217 10.8504 7.08733 11.702 7.04833Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.283 8.44145C14.4224 8.44124 14.5723 8.4413 14.7341 8.44137L15.0007 8.44145C17.1367 8.44145 17.3899 8.44912 18.2334 8.48745C19.0134 8.52312 19.4368 8.65346 19.7188 8.76296C20.0921 8.90796 20.3583 9.08129 20.6381 9.3613C20.9181 9.6413 21.0915 9.90797 21.2368 10.2813C21.3463 10.563 21.4768 10.9863 21.5123 11.7663C21.5506 12.6097 21.559 12.863 21.559 14.998C21.559 17.133 21.5506 17.3864 21.5123 18.2297C21.4766 19.0097 21.3463 19.4331 21.2368 19.7147C21.0918 20.0881 20.9181 20.3539 20.6381 20.6337C20.3581 20.9137 20.0923 21.0871 19.7188 21.2321C19.4371 21.3421 19.0134 21.4721 18.2334 21.5078C17.3901 21.5461 17.1367 21.5544 15.0007 21.5544C12.8645 21.5544 12.6114 21.5461 11.768 21.5078C10.988 21.4718 10.5647 21.3414 10.2825 21.2319C9.90917 21.0869 9.6425 20.9136 9.3625 20.6336C9.0825 20.3536 8.90916 20.0876 8.76383 19.7141C8.65432 19.4324 8.52382 19.0091 8.48832 18.2291C8.44999 17.3857 8.44232 17.1324 8.44232 14.996C8.44232 12.8597 8.44999 12.6077 8.48832 11.7643C8.52399 10.9843 8.65432 10.561 8.76383 10.279C8.90883 9.90563 9.0825 9.63897 9.3625 9.35896C9.6425 9.07896 9.90917 8.90562 10.2825 8.76029C10.5645 8.65029 10.988 8.52029 11.768 8.48445C12.506 8.45112 12.792 8.44112 14.283 8.43945V8.44145ZM19.2711 9.7698C18.7411 9.7698 18.3111 10.1993 18.3111 10.7295C18.3111 11.2595 18.7411 11.6895 19.2711 11.6895C19.8011 11.6895 20.2311 11.2595 20.2311 10.7295C20.2311 10.1995 19.8011 9.76947 19.2711 9.76947V9.7698ZM10.8923 14.9999C10.8923 12.7311 12.7318 10.8916 15.0006 10.8915C17.2694 10.8915 19.1084 12.731 19.1084 14.9999C19.1084 17.2687 17.2696 19.1074 15.0007 19.1074C12.7319 19.1074 10.8923 17.2687 10.8923 14.9999Z" fill="currentColor"></path><path d="M15.0007 12.3335C16.4734 12.3335 17.6674 13.5273 17.6674 15.0002C17.6674 16.4729 16.4734 17.6669 15.0007 17.6669C13.5279 17.6669 12.334 16.4729 12.334 15.0002C12.334 13.5273 13.5279 12.3335 15.0007 12.3335Z" fill="currentColor"></path></svg></a></li><li class="text-white transition hover:text-[#fdfdac]"><a href="https://page.line.me/vuh1823r?openQrModal=true" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM15.2499 7C20.3506 7 24.5 10.3431 24.5 14.4523C24.5 16.097 23.8579 17.578 22.5173 19.0374H22.5177C20.5771 21.2551 16.2372 23.9561 15.2499 24.3691C14.2905 24.7706 14.4013 24.1432 14.4452 23.8945C14.4464 23.8874 14.4476 23.8806 14.4488 23.8741C14.4722 23.7361 14.5807 23.0881 14.5807 23.0881C14.6119 22.8536 14.6442 22.4899 14.5509 22.2577C14.4472 22.002 14.0372 21.8693 13.7359 21.8049C9.29077 21.2214 6 18.1363 6 14.4523C6 10.3431 10.1499 7 15.2499 7Z" fill="currentColor"></path><path d="M13.3215 12.5H12.6787C12.5801 12.5 12.5 12.5827 12.5 12.6843V16.8157C12.5 16.9175 12.5801 17 12.6787 17H13.3215C13.4201 17 13.5 16.9175 13.5 16.8157V12.6843C13.5 12.5827 13.4201 12.5 13.3215 12.5Z" fill="currentColor"></path><path d="M17.8121 12.5H17.1354C17.0316 12.5 16.9475 12.5827 16.9475 12.6843V15.1388L15.0211 12.582C15.0166 12.5754 15.0117 12.5693 15.0065 12.5633L15.0052 12.5622C15.0015 12.558 14.9978 12.5543 14.9939 12.5507C14.9928 12.5496 14.9917 12.5487 14.9904 12.5476C14.9872 12.5447 14.9839 12.542 14.9804 12.5394C14.9789 12.538 14.9773 12.5369 14.9756 12.5356C14.9723 12.5334 14.9691 12.5311 14.9658 12.5291C14.9639 12.5278 14.9621 12.5267 14.9601 12.5258C14.9567 12.5238 14.9534 12.5218 14.9501 12.5202C14.948 12.5193 14.9462 12.5182 14.9441 12.5174C14.9406 12.5158 14.9371 12.5142 14.9334 12.5129C14.9312 12.5122 14.9294 12.5115 14.9273 12.5107C14.9236 12.5095 14.9199 12.5082 14.916 12.5073C14.914 12.5065 14.9118 12.5062 14.9096 12.5055C14.9059 12.5047 14.9023 12.5038 14.8988 12.5031C14.8962 12.5027 14.8935 12.5024 14.8909 12.5022C14.8876 12.5015 14.8842 12.5013 14.8809 12.5009C14.8778 12.5005 14.8746 12.5005 14.8713 12.5004C14.8689 12.5004 14.867 12.5 14.8646 12.5H14.1881C14.0843 12.5 14 12.5827 14 12.6843V16.8157C14 16.9175 14.0843 17 14.1881 17H14.8646C14.9686 17 15.0527 16.9175 15.0527 16.8157V14.3619L16.9815 16.922C16.9948 16.9406 17.0113 16.9557 17.0292 16.9676C17.0298 16.968 17.0305 16.9686 17.0311 16.9691C17.035 16.9715 17.0388 16.9738 17.0427 16.976C17.0446 16.9771 17.0462 16.9778 17.0481 16.9787C17.0509 16.9804 17.054 16.9818 17.057 16.9831C17.0601 16.9844 17.0629 16.9856 17.0662 16.9869C17.0681 16.9876 17.0699 16.9884 17.0718 16.9889C17.0762 16.9905 17.0803 16.9918 17.0845 16.9931C17.0854 16.9931 17.0864 16.9935 17.0873 16.9936C17.1026 16.9976 17.1187 17 17.1354 17H17.8121C17.916 17 18 16.9175 18 16.8157V12.6843C18 12.5827 17.916 12.5 17.8121 12.5Z" fill="currentColor"></path><path d="M11.8173 15.9655H10.0256V12.6847C10.0256 12.5827 9.94359 12.5 9.84267 12.5H9.1831C9.082 12.5 9 12.5827 9 12.6847V16.8152V16.8155C9 16.8651 9.01964 16.91 9.05118 16.9431C9.0519 16.944 9.05262 16.9449 9.0537 16.9458C9.0546 16.9467 9.05551 16.9475 9.05641 16.9484C9.08939 16.9804 9.13372 17 9.18292 17H11.8173C11.9184 17 12 16.9171 12 16.8152V16.1501C12 16.0482 11.9184 15.9655 11.8173 15.9655Z" fill="currentColor"></path><path d="M21.3173 13.5345C21.4184 13.5345 21.5 13.452 21.5 13.3499V12.6848C21.5 12.5829 21.4184 12.5 21.3173 12.5H18.6831H18.6827C18.6334 12.5 18.5888 12.52 18.5559 12.5522C18.5551 12.5529 18.5542 12.5534 18.5537 12.5542C18.5526 12.5553 18.5517 12.5563 18.5508 12.5574C18.5195 12.5905 18.5 12.6352 18.5 12.6847V12.6848V16.8153V16.8155C18.5 16.8651 18.5196 16.91 18.5512 16.9431C18.5519 16.944 18.5528 16.9451 18.5537 16.9458C18.5544 16.9467 18.5555 16.9477 18.5564 16.9484C18.5892 16.9802 18.6337 17 18.6827 17H21.3173C21.4184 17 21.5 16.9171 21.5 16.8153V16.1501C21.5 16.0483 21.4184 15.9655 21.3173 15.9655H19.5258V15.2672H21.3173C21.4184 15.2672 21.5 15.1845 21.5 15.0825V14.4175C21.5 14.3155 21.4184 14.2326 21.3173 14.2326H19.5258V13.5345H21.3173Z" fill="currentColor"></path></svg></a></li></ul></div></div>',
                      1
                    )),
                  d(
                    'div',
                    {
                      class: ei([
                        'fixed bottom-3 end-3 z-30 flex flex-col items-center justify-center transition-opacity duration-300',
                        {
                          'pointer-events-auto opacity-100': e.value,
                          'pointer-events-none opacity-0': !e.value
                        }
                      ])
                    },
                    [
                      G(
                        c,
                        { to: '/#purchase', class: 'scale-bounce' },
                        {
                          default: De(
                            () =>
                              l[0] ||
                              (l[0] = [
                                d(
                                  'img',
                                  { width: '60', src: $f, alt: '' },
                                  null,
                                  -1
                                )
                              ])
                          ),
                          _: 1
                        }
                      ),
                      d(
                        'div',
                        {
                          onClick: o,
                          class: 'mt-5 h-[65px] w-[65px] cursor-pointer'
                        },
                        l[1] ||
                          (l[1] = [d('img', { src: zf, alt: '' }, null, -1)])
                      )
                    ],
                    2
                  )
                ])
              ])
            ])
          )
        }
      )
    }
  }),
  th = { class: 'py-16' },
  ih = { class: 'container flex flex-col gap-y-5' },
  nh = { class: 'grid-col-1 grid border-b py-3 md:grid-cols-2' },
  rh = { class: 'grid grid-cols-2 gap-3' },
  sh = ['href'],
  oh = ['src', 'alt'],
  ah = { class: 'grid grid-cols-2 gap-3' },
  lh = ['href'],
  ch = ['src', 'alt'],
  uh = { class: 'border-b py-3' },
  dh = { class: 'grid grid-cols-3 gap-3' },
  fh = ['href'],
  ph = ['src', 'alt'],
  hh = { class: 'border-b py-3' },
  gh = { class: 'grid grid-cols-2 gap-3 md:grid-cols-4' },
  mh = ['href'],
  _h = ['src', 'alt'],
  vh = { class: 'border-b py-3' },
  bh = { class: 'grid grid-cols-2 gap-3 md:grid-cols-4' },
  wh = ['href'],
  yh = ['src', 'alt'],
  xh = {
    __name: 'Manufacturer',
    setup(r) {
      const e = './img/',
        t = {
          organizer: [
            {
              id: '/sponsor/01.jpg',
              title: '遠見天下文化事業群',
              link: 'https://www.cwgv.com.tw/index.html'
            },
            {
              id: '/sponsor/02.jpg',
              title: '未來親子學習平台',
              link: 'https://futureparenting.cwgv.com.tw/'
            }
          ],
          assistantOrganizer: [
            {
              id: '/sponsor/03.jpg',
              title: '遠見天下文化教育基金會',
              link: 'https://www.cwgv.com.tw/zh/foundation.html'
            }
          ],
          coOrganizer: [
            {
              id: '/sponsor/04.png',
              title: '新北市政府',
              link: 'https://www.ntpc.gov.tw/ch/index.jsp'
            },
            {
              id: '/sponsor/05.png',
              title: '新北市政府教育局',
              link: 'https://www.ntpc.edu.tw/'
            },
            {
              id: '/sponsor/06.png',
              title: '新北市家庭教育中心',
              link: 'https://ntpc.familyedu.moe.gov.tw/'
            }
          ],
          educationPartners: [
            {
              id: '/sponsor/07.png',
              title: '思博特',
              link: 'https://www.igogosport.com/'
            },
            { id: '/sponsor/08.png', title: '兒福聯盟', link: null },
            {
              id: '/sponsor/09.png',
              title: '小蚊清',
              link: 'https://shop.farcent.com.tw/collections/p0'
            },
            {
              id: '/sponsor/10.png',
              title: '初鹿牧場',
              link: 'https://www.chuluranch.com.tw/'
            },
            {
              id: '/sponsor/11.png',
              title: '農業部',
              link: 'https://www.moa.gov.tw/'
            },
            {
              id: '/sponsor/12.png',
              title: '德恩奈',
              link: 'https://www.day-night.com.tw/'
            }
          ],
          partners: [
            {
              id: '/sponsor/13.jpg',
              title: '妙管家',
              link: 'https://www.amah.com.tw/'
            },
            {
              id: '/sponsor/14.jpg',
              title: '知覺優格',
              link: 'https://www.yogurt-zj.com/'
            },
            { id: '/sponsor/15.jpg', title: '小兒利撒爾', link: null },
            { id: '/sponsor/16.jpg', title: '純淨之羽', link: null },
            { id: '/sponsor/17.jpg', title: '享居', link: null },
            {
              id: '/sponsor/18.jpg',
              title: '象印',
              link: 'https://www.zojirushi.com.tw/'
            },
            {
              id: '/sponsor/19.jpg',
              title: '美琪',
              link: 'https://www.mmsoap.com.tw/'
            }
          ]
        }
      return (i, n) => (
        J(),
        ee('div', th, [
          d('div', ih, [
            d('div', nh, [
              d('div', null, [
                n[0] ||
                  (n[0] = d(
                    'div',
                    { class: 'mb-3 font-bold' },
                    '主辦單位',
                    -1
                  )),
                d('div', rh, [
                  (J(!0),
                  ee(
                    Et,
                    null,
                    Tt(
                      t == null ? void 0 : t.organizer,
                      (s, o) => (
                        J(),
                        ee(
                          'a',
                          { key: o, href: s.link, target: '_blank' },
                          [
                            d(
                              'img',
                              { src: `${le(e)}${s.id}`, alt: s.title },
                              null,
                              8,
                              oh
                            )
                          ],
                          8,
                          sh
                        )
                      )
                    ),
                    128
                  ))
                ])
              ]),
              d('div', null, [
                n[1] ||
                  (n[1] = d(
                    'div',
                    { class: 'mb-3 font-bold' },
                    '協辦單位',
                    -1
                  )),
                d('div', ah, [
                  (J(!0),
                  ee(
                    Et,
                    null,
                    Tt(
                      t == null ? void 0 : t.assistantOrganizer,
                      (s, o) => (
                        J(),
                        ee(
                          'a',
                          { key: o, href: s.link, target: '_blank' },
                          [
                            d(
                              'img',
                              { src: `${le(e)}${s.id}`, alt: s.title },
                              null,
                              8,
                              ch
                            )
                          ],
                          8,
                          lh
                        )
                      )
                    ),
                    128
                  ))
                ])
              ])
            ]),
            d('div', uh, [
              n[2] ||
                (n[2] = d('div', { class: 'mb-3 font-bold' }, '共同主辦', -1)),
              d('div', dh, [
                (J(!0),
                ee(
                  Et,
                  null,
                  Tt(
                    t == null ? void 0 : t.coOrganizer,
                    (s, o) => (
                      J(),
                      ee(
                        'a',
                        { key: o, href: s.link, target: '_blank' },
                        [
                          d(
                            'img',
                            { src: `${le(e)}${s.id}`, alt: s.title },
                            null,
                            8,
                            ph
                          )
                        ],
                        8,
                        fh
                      )
                    )
                  ),
                  128
                ))
              ])
            ]),
            d('div', hh, [
              n[3] ||
                (n[3] = d('div', { class: 'mb-3 font-bold' }, '教育夥伴', -1)),
              d('div', gh, [
                (J(!0),
                ee(
                  Et,
                  null,
                  Tt(
                    t.educationPartners,
                    (s, o) => (
                      J(),
                      ee(
                        'a',
                        { key: o, href: s.link, target: '_blank' },
                        [
                          d(
                            'img',
                            { src: `${le(e)}${s.id}`, alt: s.title },
                            null,
                            8,
                            _h
                          )
                        ],
                        8,
                        mh
                      )
                    )
                  ),
                  128
                ))
              ])
            ]),
            d('div', vh, [
              n[4] ||
                (n[4] = d('div', { class: 'mb-3 font-bold' }, '合作夥伴', -1)),
              d('div', bh, [
                (J(!0),
                ee(
                  Et,
                  null,
                  Tt(
                    t.partners,
                    (s, o) => (
                      J(),
                      ee(
                        'a',
                        { key: o, href: s.link, target: '_blank' },
                        [
                          d(
                            'img',
                            { src: `${le(e)}${s.id}`, alt: s.title },
                            null,
                            8,
                            yh
                          )
                        ],
                        8,
                        wh
                      )
                    )
                  ),
                  128
                ))
              ])
            ])
          ])
        ])
      )
    }
  },
  Bl = '' + new URL('../img/logo.svg', import.meta.url).href
var Ch = Object.defineProperty,
  kh = (r, e, t) =>
    e in r
      ? Ch(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Nl = (r, e, t) => (kh(r, typeof e != 'symbol' ? e + '' : e, t), t)
/*!
 * TW Elements
 * Version: FREE 2.0.0
 *
 * Copyright: Material Design for Bootstrap
 * https://mdbootstrap.com/
 *
 * Read the license: https://tw-elements.com/license/
 *
 *
 * Documentation: https://tw-elements.com/
 *
 * Support: https://mdbootstrap.com/support/cat/twe
 *
 * Contact: tailwind@mdbootstrap.com
 *
 */ const Ro = (() => {
    const r = {}
    let e = 1
    return {
      set(t, i, n) {
        typeof t[i] > 'u' && ((t[i] = { key: i, id: e }), e++), (r[t[i].id] = n)
      },
      get(t, i) {
        if (!t || typeof t[i] > 'u') return null
        const n = t[i]
        return n.key === i ? r[n.id] : null
      },
      delete(t, i) {
        if (typeof t[i] > 'u') return
        const n = t[i]
        n.key === i && (delete r[n.id], delete t[i])
      }
    }
  })(),
  Xr = {
    setData(r, e, t) {
      Ro.set(r, e, t)
    },
    getData(r, e) {
      return Ro.get(r, e)
    },
    removeData(r, e) {
      Ro.delete(r, e)
    }
  },
  Eh = 1e6,
  Th = 1e3,
  _a = 'transitionend',
  Sh = (r) =>
    r == null
      ? `${r}`
      : {}.toString
          .call(r)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  Oh = (r) => {
    do r += Math.floor(Math.random() * Eh)
    while (document.getElementById(r))
    return r
  },
  Ku = (r) => {
    let e = r.getAttribute('data-twe-target')
    if (!e || e === '#') {
      let t = r.getAttribute('href')
      if (!t || (!t.includes('#') && !t.startsWith('.'))) return null
      t.includes('#') && !t.startsWith('#') && (t = `#${t.split('#')[1]}`),
        (e = t && t !== '#' ? t.trim() : null)
    }
    return e
  },
  Qu = (r) => {
    const e = Ku(r)
    return e && document.querySelector(e) ? e : null
  },
  hs = (r) => {
    const e = Ku(r)
    return e ? document.querySelector(e) : null
  },
  va = (r) => {
    if (!r) return 0
    let { transitionDuration: e, transitionDelay: t } =
      window.getComputedStyle(r)
    const i = Number.parseFloat(e),
      n = Number.parseFloat(t)
    return !i && !n
      ? 0
      : ((e = e.split(',')[0]),
        (t = t.split(',')[0]),
        (Number.parseFloat(e) + Number.parseFloat(t)) * Th)
  },
  Ah = (r) => {
    r.dispatchEvent(new Event(_a))
  },
  po = (r) =>
    !r || typeof r != 'object'
      ? !1
      : (typeof r.jquery < 'u' && (r = r[0]), typeof r.nodeType < 'u'),
  fr = (r) =>
    po(r)
      ? r.jquery
        ? r[0]
        : r
      : typeof r == 'string' && r.length > 0
        ? document.querySelector(r)
        : null,
  Pn = (r, e, t) => {
    Object.keys(t).forEach((i) => {
      const n = t[i],
        s = e[i],
        o = s && po(s) ? 'element' : Sh(s)
      if (!new RegExp(n).test(o))
        throw new Error(
          `${r.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${n}".`
        )
    })
  },
  ho = (r) => {
    if (!r) return !1
    if (r.style && r.parentNode && r.parentNode.style) {
      const e = getComputedStyle(r),
        t = getComputedStyle(r.parentNode)
      return (
        e.display !== 'none' &&
        t.display !== 'none' &&
        e.visibility !== 'hidden'
      )
    }
    return !1
  },
  go = (r) =>
    !r || r.nodeType !== Node.ELEMENT_NODE || r.classList.contains('disabled')
      ? !0
      : typeof r.disabled < 'u'
        ? r.disabled
        : r.hasAttribute('disabled') && r.getAttribute('disabled') !== 'false',
  Ju = (r) => {
    if (!document.documentElement.attachShadow) return null
    if (typeof r.getRootNode == 'function') {
      const e = r.getRootNode()
      return e instanceof ShadowRoot ? e : null
    }
    return r instanceof ShadowRoot ? r : r.parentNode ? Ju(r.parentNode) : null
  },
  jl = () => function () {},
  Ja = (r) => {
    r.offsetHeight
  },
  ed = () => {
    const { jQuery: r } = window
    return r && !document.body.hasAttribute('data-twe-no-jquery') ? r : null
  },
  $o = [],
  Ph = (r) => {
    document.readyState === 'loading'
      ? ($o.length ||
          document.addEventListener('DOMContentLoaded', () => {
            $o.forEach((e) => e())
          }),
        $o.push(r))
      : r()
  },
  Jt = () => document.documentElement.dir === 'rtl',
  _n = (r) => {
    typeof r == 'function' && r()
  },
  td = (r, e, t = !0) => {
    if (!t) {
      _n(r)
      return
    }
    const i = 5,
      n = va(e) + i
    let s = !1
    const o = ({ target: a }) => {
      a === e && ((s = !0), e.removeEventListener(_a, o), _n(r))
    }
    e.addEventListener(_a, o),
      setTimeout(() => {
        s || Ah(e)
      }, n)
  },
  Mh = /[^.]*(?=\..*)\.|.*/,
  Lh = /\..*/,
  Dh = /::\d+$/,
  zo = {}
let Fl = 1
const Rh = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
  $h = /^(mouseenter|mouseleave)/i,
  id = new Set([
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointerleave',
    'pointercancel',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll'
  ])
function nd(r, e) {
  return (e && `${e}::${Fl++}`) || r.uidEvent || Fl++
}
function rd(r) {
  const e = nd(r)
  return (r.uidEvent = e), (zo[e] = zo[e] || {}), zo[e]
}
function zh(r, e) {
  return function t(i) {
    return (
      (i.delegateTarget = r), t.oneOff && I.off(r, i.type, e), e.apply(r, [i])
    )
  }
}
function Ih(r, e, t) {
  return function i(n) {
    const s = r.querySelectorAll(e)
    for (let { target: o } = n; o && o !== this; o = o.parentNode)
      for (let a = s.length; a--; '')
        if (s[a] === o)
          return (
            (n.delegateTarget = o),
            i.oneOff && I.off(r, n.type, t),
            t.apply(o, [n])
          )
    return null
  }
}
function sd(r, e, t = null) {
  const i = Object.keys(r)
  for (let n = 0, s = i.length; n < s; n++) {
    const o = r[i[n]]
    if (o.originalHandler === e && o.delegationSelector === t) return o
  }
  return null
}
function od(r, e, t) {
  const i = typeof e == 'string',
    n = i ? t : e
  let s = ad(r)
  return id.has(s) || (s = r), [i, n, s]
}
function Ul(r, e, t, i, n) {
  if (typeof e != 'string' || !r) return
  if ((t || ((t = i), (i = null)), $h.test(e))) {
    const f = (m) =>
      function (g) {
        if (
          !g.relatedTarget ||
          (g.relatedTarget !== g.delegateTarget &&
            !g.delegateTarget.contains(g.relatedTarget))
        )
          return m.call(this, g)
      }
    i ? (i = f(i)) : (t = f(t))
  }
  const [s, o, a] = od(e, t, i),
    l = rd(r),
    c = l[a] || (l[a] = {}),
    u = sd(c, o, s ? t : null)
  if (u) {
    u.oneOff = u.oneOff && n
    return
  }
  const p = nd(o, e.replace(Mh, '')),
    h = s ? Ih(r, t, i) : zh(r, t)
  ;(h.delegationSelector = s ? t : null),
    (h.originalHandler = o),
    (h.oneOff = n),
    (h.uidEvent = p),
    (c[p] = h),
    r.addEventListener(a, h, s)
}
function ba(r, e, t, i, n) {
  const s = sd(e[t], i, n)
  s && (r.removeEventListener(t, s, !!n), delete e[t][s.uidEvent])
}
function Bh(r, e, t, i) {
  const n = e[t] || {}
  Object.keys(n).forEach((s) => {
    if (s.includes(i)) {
      const o = n[s]
      ba(r, e, t, o.originalHandler, o.delegationSelector)
    }
  })
}
function ad(r) {
  return (r = r.replace(Lh, '')), Rh[r] || r
}
const I = {
    on(r, e, t, i) {
      Ul(r, e, t, i, !1)
    },
    one(r, e, t, i) {
      Ul(r, e, t, i, !0)
    },
    off(r, e, t, i) {
      if (typeof e != 'string' || !r) return
      const [n, s, o] = od(e, t, i),
        a = o !== e,
        l = rd(r),
        c = e.startsWith('.')
      if (typeof s < 'u') {
        if (!l || !l[o]) return
        ba(r, l, o, s, n ? t : null)
        return
      }
      c &&
        Object.keys(l).forEach((p) => {
          Bh(r, l, p, e.slice(1))
        })
      const u = l[o] || {}
      Object.keys(u).forEach((p) => {
        const h = p.replace(Dh, '')
        if (!a || e.includes(h)) {
          const f = u[p]
          ba(r, l, o, f.originalHandler, f.delegationSelector)
        }
      })
    },
    trigger(r, e, t) {
      if (typeof e != 'string' || !r) return null
      const i = ed(),
        n = ad(e),
        s = e !== n,
        o = id.has(n)
      let a,
        l = !0,
        c = !0,
        u = !1,
        p = null
      return (
        s &&
          i &&
          ((a = i.Event(e, t)),
          i(r).trigger(a),
          (l = !a.isPropagationStopped()),
          (c = !a.isImmediatePropagationStopped()),
          (u = a.isDefaultPrevented())),
        o
          ? ((p = document.createEvent('HTMLEvents')), p.initEvent(n, l, !0))
          : (p = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
        typeof t < 'u' &&
          Object.keys(t).forEach((h) => {
            Object.defineProperty(p, h, {
              get() {
                return t[h]
              }
            })
          }),
        u && p.preventDefault(),
        c && r.dispatchEvent(p),
        p.defaultPrevented && typeof a < 'u' && a.preventDefault(),
        p
      )
    }
  },
  Nh = '5.1.3'
class mo {
  constructor(e) {
    ;(e = fr(e)),
      e &&
        ((this._element = e),
        Xr.setData(this._element, this.constructor.DATA_KEY, this))
  }
  dispose() {
    Xr.removeData(this._element, this.constructor.DATA_KEY),
      I.off(this._element, this.constructor.EVENT_KEY),
      Object.getOwnPropertyNames(this).forEach((e) => {
        this[e] = null
      })
  }
  _queueCallback(e, t, i = !0) {
    td(e, t, i)
  }
  static getInstance(e) {
    return Xr.getData(fr(e), this.DATA_KEY)
  }
  static getOrCreateInstance(e, t = {}) {
    return this.getInstance(e) || new this(e, typeof t == 'object' ? t : null)
  }
  static get VERSION() {
    return Nh
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    )
  }
  static get DATA_KEY() {
    return `twe.${this.NAME}`
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`
  }
}
var yt = 'top',
  Ut = 'bottom',
  Ht = 'right',
  xt = 'left',
  _o = 'auto',
  wr = [yt, Ut, Ht, xt],
  Mn = 'start',
  pr = 'end',
  ld = 'clippingParents',
  el = 'viewport',
  qn = 'popper',
  cd = 'reference',
  wa = wr.reduce(function (r, e) {
    return r.concat([e + '-' + Mn, e + '-' + pr])
  }, []),
  tl = [].concat(wr, [_o]).reduce(function (r, e) {
    return r.concat([e, e + '-' + Mn, e + '-' + pr])
  }, []),
  ud = 'beforeRead',
  dd = 'read',
  fd = 'afterRead',
  pd = 'beforeMain',
  hd = 'main',
  gd = 'afterMain',
  md = 'beforeWrite',
  _d = 'write',
  vd = 'afterWrite',
  bd = [ud, dd, fd, pd, hd, gd, md, _d, vd]
function Mi(r) {
  return r ? (r.nodeName || '').toLowerCase() : null
}
function Vt(r) {
  if (r == null) return window
  if (r.toString() !== '[object Window]') {
    var e = r.ownerDocument
    return (e && e.defaultView) || window
  }
  return r
}
function Ln(r) {
  var e = Vt(r).Element
  return r instanceof e || r instanceof Element
}
function ti(r) {
  var e = Vt(r).HTMLElement
  return r instanceof e || r instanceof HTMLElement
}
function il(r) {
  if (typeof ShadowRoot > 'u') return !1
  var e = Vt(r).ShadowRoot
  return r instanceof e || r instanceof ShadowRoot
}
function jh(r) {
  var e = r.state
  Object.keys(e.elements).forEach(function (t) {
    var i = e.styles[t] || {},
      n = e.attributes[t] || {},
      s = e.elements[t]
    !ti(s) ||
      !Mi(s) ||
      (Object.assign(s.style, i),
      Object.keys(n).forEach(function (o) {
        var a = n[o]
        a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? '' : a)
      }))
  })
}
function Fh(r) {
  var e = r.state,
    t = {
      popper: {
        position: e.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: { position: 'absolute' },
      reference: {}
    }
  return (
    Object.assign(e.elements.popper.style, t.popper),
    (e.styles = t),
    e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow),
    function () {
      Object.keys(e.elements).forEach(function (i) {
        var n = e.elements[i],
          s = e.attributes[i] || {},
          o = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]),
          a = o.reduce(function (l, c) {
            return (l[c] = ''), l
          }, {})
        !ti(n) ||
          !Mi(n) ||
          (Object.assign(n.style, a),
          Object.keys(s).forEach(function (l) {
            n.removeAttribute(l)
          }))
      })
    }
  )
}
const nl = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: jh,
  effect: Fh,
  requires: ['computeStyles']
}
function Oi(r) {
  return r.split('-')[0]
}
var kn = Math.max,
  no = Math.min,
  hr = Math.round
function ya() {
  var r = navigator.userAgentData
  return r != null && r.brands && Array.isArray(r.brands)
    ? r.brands
        .map(function (e) {
          return e.brand + '/' + e.version
        })
        .join(' ')
    : navigator.userAgent
}
function wd() {
  return !/^((?!chrome|android).)*safari/i.test(ya())
}
function gr(r, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1)
  var i = r.getBoundingClientRect(),
    n = 1,
    s = 1
  e &&
    ti(r) &&
    ((n = (r.offsetWidth > 0 && hr(i.width) / r.offsetWidth) || 1),
    (s = (r.offsetHeight > 0 && hr(i.height) / r.offsetHeight) || 1))
  var o = Ln(r) ? Vt(r) : window,
    a = o.visualViewport,
    l = !wd() && t,
    c = (i.left + (l && a ? a.offsetLeft : 0)) / n,
    u = (i.top + (l && a ? a.offsetTop : 0)) / s,
    p = i.width / n,
    h = i.height / s
  return {
    width: p,
    height: h,
    top: u,
    right: c + p,
    bottom: u + h,
    left: c,
    x: c,
    y: u
  }
}
function rl(r) {
  var e = gr(r),
    t = r.offsetWidth,
    i = r.offsetHeight
  return (
    Math.abs(e.width - t) <= 1 && (t = e.width),
    Math.abs(e.height - i) <= 1 && (i = e.height),
    { x: r.offsetLeft, y: r.offsetTop, width: t, height: i }
  )
}
function yd(r, e) {
  var t = e.getRootNode && e.getRootNode()
  if (r.contains(e)) return !0
  if (t && il(t)) {
    var i = e
    do {
      if (i && r.isSameNode(i)) return !0
      i = i.parentNode || i.host
    } while (i)
  }
  return !1
}
function Ui(r) {
  return Vt(r).getComputedStyle(r)
}
function Uh(r) {
  return ['table', 'td', 'th'].indexOf(Mi(r)) >= 0
}
function an(r) {
  return ((Ln(r) ? r.ownerDocument : r.document) || window.document)
    .documentElement
}
function vo(r) {
  return Mi(r) === 'html'
    ? r
    : r.assignedSlot || r.parentNode || (il(r) ? r.host : null) || an(r)
}
function Hl(r) {
  return !ti(r) || Ui(r).position === 'fixed' ? null : r.offsetParent
}
function Hh(r) {
  var e = /firefox/i.test(ya()),
    t = /Trident/i.test(ya())
  if (t && ti(r)) {
    var i = Ui(r)
    if (i.position === 'fixed') return null
  }
  var n = vo(r)
  for (il(n) && (n = n.host); ti(n) && ['html', 'body'].indexOf(Mi(n)) < 0; ) {
    var s = Ui(n)
    if (
      s.transform !== 'none' ||
      s.perspective !== 'none' ||
      s.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(s.willChange) !== -1 ||
      (e && s.willChange === 'filter') ||
      (e && s.filter && s.filter !== 'none')
    )
      return n
    n = n.parentNode
  }
  return null
}
function bs(r) {
  for (var e = Vt(r), t = Hl(r); t && Uh(t) && Ui(t).position === 'static'; )
    t = Hl(t)
  return t &&
    (Mi(t) === 'html' || (Mi(t) === 'body' && Ui(t).position === 'static'))
    ? e
    : t || Hh(r) || e
}
function sl(r) {
  return ['top', 'bottom'].indexOf(r) >= 0 ? 'x' : 'y'
}
function Gr(r, e, t) {
  return kn(r, no(e, t))
}
function Vh(r, e, t) {
  var i = Gr(r, e, t)
  return i > t ? t : i
}
function xd() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function Cd(r) {
  return Object.assign({}, xd(), r)
}
function kd(r, e) {
  return e.reduce(function (t, i) {
    return (t[i] = r), t
  }, {})
}
var qh = function (r, e) {
  return (
    (r =
      typeof r == 'function'
        ? r(Object.assign({}, e.rects, { placement: e.placement }))
        : r),
    Cd(typeof r != 'number' ? r : kd(r, wr))
  )
}
function Wh(r) {
  var e,
    t = r.state,
    i = r.name,
    n = r.options,
    s = t.elements.arrow,
    o = t.modifiersData.popperOffsets,
    a = Oi(t.placement),
    l = sl(a),
    c = [xt, Ht].indexOf(a) >= 0,
    u = c ? 'height' : 'width'
  if (!(!s || !o)) {
    var p = qh(n.padding, t),
      h = rl(s),
      f = l === 'y' ? yt : xt,
      m = l === 'y' ? Ut : Ht,
      g =
        t.rects.reference[u] + t.rects.reference[l] - o[l] - t.rects.popper[u],
      _ = o[l] - t.rects.reference[l],
      k = bs(s),
      T = k ? (l === 'y' ? k.clientHeight || 0 : k.clientWidth || 0) : 0,
      x = g / 2 - _ / 2,
      v = p[f],
      y = T - h[u] - p[m],
      E = T / 2 - h[u] / 2 + x,
      C = Gr(v, E, y),
      S = l
    t.modifiersData[i] = ((e = {}), (e[S] = C), (e.centerOffset = C - E), e)
  }
}
function Yh(r) {
  var e = r.state,
    t = r.options,
    i = t.element,
    n = i === void 0 ? '[data-popper-arrow]' : i
  n != null &&
    ((typeof n == 'string' && ((n = e.elements.popper.querySelector(n)), !n)) ||
      (yd(e.elements.popper, n) && (e.elements.arrow = n)))
}
const Ed = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Wh,
  effect: Yh,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
}
function mr(r) {
  return r.split('-')[1]
}
var Xh = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function Gh(r, e) {
  var t = r.x,
    i = r.y,
    n = e.devicePixelRatio || 1
  return { x: hr(t * n) / n || 0, y: hr(i * n) / n || 0 }
}
function Vl(r) {
  var e,
    t = r.popper,
    i = r.popperRect,
    n = r.placement,
    s = r.variation,
    o = r.offsets,
    a = r.position,
    l = r.gpuAcceleration,
    c = r.adaptive,
    u = r.roundOffsets,
    p = r.isFixed,
    h = o.x,
    f = h === void 0 ? 0 : h,
    m = o.y,
    g = m === void 0 ? 0 : m,
    _ = typeof u == 'function' ? u({ x: f, y: g }) : { x: f, y: g }
  ;(f = _.x), (g = _.y)
  var k = o.hasOwnProperty('x'),
    T = o.hasOwnProperty('y'),
    x = xt,
    v = yt,
    y = window
  if (c) {
    var E = bs(t),
      C = 'clientHeight',
      S = 'clientWidth'
    if (
      (E === Vt(t) &&
        ((E = an(t)),
        Ui(E).position !== 'static' &&
          a === 'absolute' &&
          ((C = 'scrollHeight'), (S = 'scrollWidth'))),
      (E = E),
      n === yt || ((n === xt || n === Ht) && s === pr))
    ) {
      v = Ut
      var b = p && E === y && y.visualViewport ? y.visualViewport.height : E[C]
      ;(g -= b - i.height), (g *= l ? 1 : -1)
    }
    if (n === xt || ((n === yt || n === Ut) && s === pr)) {
      x = Ht
      var O = p && E === y && y.visualViewport ? y.visualViewport.width : E[S]
      ;(f -= O - i.width), (f *= l ? 1 : -1)
    }
  }
  var M = Object.assign({ position: a }, c && Xh),
    P = u === !0 ? Gh({ x: f, y: g }, Vt(t)) : { x: f, y: g }
  if (((f = P.x), (g = P.y), l)) {
    var z
    return Object.assign(
      {},
      M,
      ((z = {}),
      (z[v] = T ? '0' : ''),
      (z[x] = k ? '0' : ''),
      (z.transform =
        (y.devicePixelRatio || 1) <= 1
          ? 'translate(' + f + 'px, ' + g + 'px)'
          : 'translate3d(' + f + 'px, ' + g + 'px, 0)'),
      z)
    )
  }
  return Object.assign(
    {},
    M,
    ((e = {}),
    (e[v] = T ? g + 'px' : ''),
    (e[x] = k ? f + 'px' : ''),
    (e.transform = ''),
    e)
  )
}
function Zh(r) {
  var e = r.state,
    t = r.options,
    i = t.gpuAcceleration,
    n = i === void 0 ? !0 : i,
    s = t.adaptive,
    o = s === void 0 ? !0 : s,
    a = t.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: Oi(e.placement),
      variation: mr(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: n,
      isFixed: e.options.strategy === 'fixed'
    }
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      Vl(
        Object.assign({}, c, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: o,
          roundOffsets: l
        })
      )
    )),
    e.modifiersData.arrow != null &&
      (e.styles.arrow = Object.assign(
        {},
        e.styles.arrow,
        Vl(
          Object.assign({}, c, {
            offsets: e.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l
          })
        )
      )),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      'data-popper-placement': e.placement
    }))
}
const ol = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: Zh,
  data: {}
}
var Es = { passive: !0 }
function Kh(r) {
  var e = r.state,
    t = r.instance,
    i = r.options,
    n = i.scroll,
    s = n === void 0 ? !0 : n,
    o = i.resize,
    a = o === void 0 ? !0 : o,
    l = Vt(e.elements.popper),
    c = [].concat(e.scrollParents.reference, e.scrollParents.popper)
  return (
    s &&
      c.forEach(function (u) {
        u.addEventListener('scroll', t.update, Es)
      }),
    a && l.addEventListener('resize', t.update, Es),
    function () {
      s &&
        c.forEach(function (u) {
          u.removeEventListener('scroll', t.update, Es)
        }),
        a && l.removeEventListener('resize', t.update, Es)
    }
  )
}
const al = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: Kh,
  data: {}
}
var Qh = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function Hs(r) {
  return r.replace(/left|right|bottom|top/g, function (e) {
    return Qh[e]
  })
}
var Jh = { start: 'end', end: 'start' }
function ql(r) {
  return r.replace(/start|end/g, function (e) {
    return Jh[e]
  })
}
function ll(r) {
  var e = Vt(r),
    t = e.pageXOffset,
    i = e.pageYOffset
  return { scrollLeft: t, scrollTop: i }
}
function cl(r) {
  return gr(an(r)).left + ll(r).scrollLeft
}
function eg(r, e) {
  var t = Vt(r),
    i = an(r),
    n = t.visualViewport,
    s = i.clientWidth,
    o = i.clientHeight,
    a = 0,
    l = 0
  if (n) {
    ;(s = n.width), (o = n.height)
    var c = wd()
    ;(c || (!c && e === 'fixed')) && ((a = n.offsetLeft), (l = n.offsetTop))
  }
  return { width: s, height: o, x: a + cl(r), y: l }
}
function tg(r) {
  var e,
    t = an(r),
    i = ll(r),
    n = (e = r.ownerDocument) == null ? void 0 : e.body,
    s = kn(
      t.scrollWidth,
      t.clientWidth,
      n ? n.scrollWidth : 0,
      n ? n.clientWidth : 0
    ),
    o = kn(
      t.scrollHeight,
      t.clientHeight,
      n ? n.scrollHeight : 0,
      n ? n.clientHeight : 0
    ),
    a = -i.scrollLeft + cl(r),
    l = -i.scrollTop
  return (
    Ui(n || t).direction === 'rtl' &&
      (a += kn(t.clientWidth, n ? n.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: l }
  )
}
function ul(r) {
  var e = Ui(r),
    t = e.overflow,
    i = e.overflowX,
    n = e.overflowY
  return /auto|scroll|overlay|hidden/.test(t + n + i)
}
function Td(r) {
  return ['html', 'body', '#document'].indexOf(Mi(r)) >= 0
    ? r.ownerDocument.body
    : ti(r) && ul(r)
      ? r
      : Td(vo(r))
}
function Zr(r, e) {
  var t
  e === void 0 && (e = [])
  var i = Td(r),
    n = i === ((t = r.ownerDocument) == null ? void 0 : t.body),
    s = Vt(i),
    o = n ? [s].concat(s.visualViewport || [], ul(i) ? i : []) : i,
    a = e.concat(o)
  return n ? a : a.concat(Zr(vo(o)))
}
function xa(r) {
  return Object.assign({}, r, {
    left: r.x,
    top: r.y,
    right: r.x + r.width,
    bottom: r.y + r.height
  })
}
function ig(r, e) {
  var t = gr(r, !1, e === 'fixed')
  return (
    (t.top = t.top + r.clientTop),
    (t.left = t.left + r.clientLeft),
    (t.bottom = t.top + r.clientHeight),
    (t.right = t.left + r.clientWidth),
    (t.width = r.clientWidth),
    (t.height = r.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  )
}
function Wl(r, e, t) {
  return e === el ? xa(eg(r, t)) : Ln(e) ? ig(e, t) : xa(tg(an(r)))
}
function ng(r) {
  var e = Zr(vo(r)),
    t = ['absolute', 'fixed'].indexOf(Ui(r).position) >= 0,
    i = t && ti(r) ? bs(r) : r
  return Ln(i)
    ? e.filter(function (n) {
        return Ln(n) && yd(n, i) && Mi(n) !== 'body'
      })
    : []
}
function rg(r, e, t, i) {
  var n = e === 'clippingParents' ? ng(r) : [].concat(e),
    s = [].concat(n, [t]),
    o = s[0],
    a = s.reduce(
      function (l, c) {
        var u = Wl(r, c, i)
        return (
          (l.top = kn(u.top, l.top)),
          (l.right = no(u.right, l.right)),
          (l.bottom = no(u.bottom, l.bottom)),
          (l.left = kn(u.left, l.left)),
          l
        )
      },
      Wl(r, o, i)
    )
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  )
}
function Sd(r) {
  var e = r.reference,
    t = r.element,
    i = r.placement,
    n = i ? Oi(i) : null,
    s = i ? mr(i) : null,
    o = e.x + e.width / 2 - t.width / 2,
    a = e.y + e.height / 2 - t.height / 2,
    l
  switch (n) {
    case yt:
      l = { x: o, y: e.y - t.height }
      break
    case Ut:
      l = { x: o, y: e.y + e.height }
      break
    case Ht:
      l = { x: e.x + e.width, y: a }
      break
    case xt:
      l = { x: e.x - t.width, y: a }
      break
    default:
      l = { x: e.x, y: e.y }
  }
  var c = n ? sl(n) : null
  if (c != null) {
    var u = c === 'y' ? 'height' : 'width'
    switch (s) {
      case Mn:
        l[c] = l[c] - (e[u] / 2 - t[u] / 2)
        break
      case pr:
        l[c] = l[c] + (e[u] / 2 - t[u] / 2)
        break
    }
  }
  return l
}
function _r(r, e) {
  e === void 0 && (e = {})
  var t = e,
    i = t.placement,
    n = i === void 0 ? r.placement : i,
    s = t.strategy,
    o = s === void 0 ? r.strategy : s,
    a = t.boundary,
    l = a === void 0 ? ld : a,
    c = t.rootBoundary,
    u = c === void 0 ? el : c,
    p = t.elementContext,
    h = p === void 0 ? qn : p,
    f = t.altBoundary,
    m = f === void 0 ? !1 : f,
    g = t.padding,
    _ = g === void 0 ? 0 : g,
    k = Cd(typeof _ != 'number' ? _ : kd(_, wr)),
    T = h === qn ? cd : qn,
    x = r.rects.popper,
    v = r.elements[m ? T : h],
    y = rg(Ln(v) ? v : v.contextElement || an(r.elements.popper), l, u, o),
    E = gr(r.elements.reference),
    C = Sd({ reference: E, element: x, strategy: 'absolute', placement: n }),
    S = xa(Object.assign({}, x, C)),
    b = h === qn ? S : E,
    O = {
      top: y.top - b.top + k.top,
      bottom: b.bottom - y.bottom + k.bottom,
      left: y.left - b.left + k.left,
      right: b.right - y.right + k.right
    },
    M = r.modifiersData.offset
  if (h === qn && M) {
    var P = M[n]
    Object.keys(O).forEach(function (z) {
      var F = [Ht, Ut].indexOf(z) >= 0 ? 1 : -1,
        H = [yt, Ut].indexOf(z) >= 0 ? 'y' : 'x'
      O[z] += P[H] * F
    })
  }
  return O
}
function sg(r, e) {
  e === void 0 && (e = {})
  var t = e,
    i = t.placement,
    n = t.boundary,
    s = t.rootBoundary,
    o = t.padding,
    a = t.flipVariations,
    l = t.allowedAutoPlacements,
    c = l === void 0 ? tl : l,
    u = mr(i),
    p = u
      ? a
        ? wa
        : wa.filter(function (m) {
            return mr(m) === u
          })
      : wr,
    h = p.filter(function (m) {
      return c.indexOf(m) >= 0
    })
  h.length === 0 && (h = p)
  var f = h.reduce(function (m, g) {
    return (
      (m[g] = _r(r, { placement: g, boundary: n, rootBoundary: s, padding: o })[
        Oi(g)
      ]),
      m
    )
  }, {})
  return Object.keys(f).sort(function (m, g) {
    return f[m] - f[g]
  })
}
function og(r) {
  if (Oi(r) === _o) return []
  var e = Hs(r)
  return [ql(r), e, ql(e)]
}
function ag(r) {
  var e = r.state,
    t = r.options,
    i = r.name
  if (!e.modifiersData[i]._skip) {
    for (
      var n = t.mainAxis,
        s = n === void 0 ? !0 : n,
        o = t.altAxis,
        a = o === void 0 ? !0 : o,
        l = t.fallbackPlacements,
        c = t.padding,
        u = t.boundary,
        p = t.rootBoundary,
        h = t.altBoundary,
        f = t.flipVariations,
        m = f === void 0 ? !0 : f,
        g = t.allowedAutoPlacements,
        _ = e.options.placement,
        k = Oi(_),
        T = k === _,
        x = l || (T || !m ? [Hs(_)] : og(_)),
        v = [_].concat(x).reduce(function (ae, ce) {
          return ae.concat(
            Oi(ce) === _o
              ? sg(e, {
                  placement: ce,
                  boundary: u,
                  rootBoundary: p,
                  padding: c,
                  flipVariations: m,
                  allowedAutoPlacements: g
                })
              : ce
          )
        }, []),
        y = e.rects.reference,
        E = e.rects.popper,
        C = new Map(),
        S = !0,
        b = v[0],
        O = 0;
      O < v.length;
      O++
    ) {
      var M = v[O],
        P = Oi(M),
        z = mr(M) === Mn,
        F = [yt, Ut].indexOf(P) >= 0,
        H = F ? 'width' : 'height',
        B = _r(e, {
          placement: M,
          boundary: u,
          rootBoundary: p,
          altBoundary: h,
          padding: c
        }),
        $ = F ? (z ? Ht : xt) : z ? Ut : yt
      y[H] > E[H] && ($ = Hs($))
      var D = Hs($),
        V = []
      if (
        (s && V.push(B[P] <= 0),
        a && V.push(B[$] <= 0, B[D] <= 0),
        V.every(function (ae) {
          return ae
        }))
      ) {
        ;(b = M), (S = !1)
        break
      }
      C.set(M, V)
    }
    if (S)
      for (
        var w = m ? 3 : 1,
          te = function (ae) {
            var ce = v.find(function (ze) {
              var fe = C.get(ze)
              if (fe)
                return fe.slice(0, ae).every(function (Te) {
                  return Te
                })
            })
            if (ce) return (b = ce), 'break'
          },
          me = w;
        me > 0;
        me--
      ) {
        var Je = te(me)
        if (Je === 'break') break
      }
    e.placement !== b &&
      ((e.modifiersData[i]._skip = !0), (e.placement = b), (e.reset = !0))
  }
}
const Od = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: ag,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
}
function Yl(r, e, t) {
  return (
    t === void 0 && (t = { x: 0, y: 0 }),
    {
      top: r.top - e.height - t.y,
      right: r.right - e.width + t.x,
      bottom: r.bottom - e.height + t.y,
      left: r.left - e.width - t.x
    }
  )
}
function Xl(r) {
  return [yt, Ht, Ut, xt].some(function (e) {
    return r[e] >= 0
  })
}
function lg(r) {
  var e = r.state,
    t = r.name,
    i = e.rects.reference,
    n = e.rects.popper,
    s = e.modifiersData.preventOverflow,
    o = _r(e, { elementContext: 'reference' }),
    a = _r(e, { altBoundary: !0 }),
    l = Yl(o, i),
    c = Yl(a, n, s),
    u = Xl(l),
    p = Xl(c)
  ;(e.modifiersData[t] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: p
  }),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      'data-popper-reference-hidden': u,
      'data-popper-escaped': p
    }))
}
const Ad = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: lg
}
function cg(r, e, t) {
  var i = Oi(r),
    n = [xt, yt].indexOf(i) >= 0 ? -1 : 1,
    s = typeof t == 'function' ? t(Object.assign({}, e, { placement: r })) : t,
    o = s[0],
    a = s[1]
  return (
    (o = o || 0),
    (a = (a || 0) * n),
    [xt, Ht].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
  )
}
function ug(r) {
  var e = r.state,
    t = r.options,
    i = r.name,
    n = t.offset,
    s = n === void 0 ? [0, 0] : n,
    o = tl.reduce(function (u, p) {
      return (u[p] = cg(p, e.rects, s)), u
    }, {}),
    a = o[e.placement],
    l = a.x,
    c = a.y
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += l),
    (e.modifiersData.popperOffsets.y += c)),
    (e.modifiersData[i] = o)
}
const Pd = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: ug
}
function dg(r) {
  var e = r.state,
    t = r.name
  e.modifiersData[t] = Sd({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: 'absolute',
    placement: e.placement
  })
}
const dl = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: dg,
  data: {}
}
function fg(r) {
  return r === 'x' ? 'y' : 'x'
}
function pg(r) {
  var e = r.state,
    t = r.options,
    i = r.name,
    n = t.mainAxis,
    s = n === void 0 ? !0 : n,
    o = t.altAxis,
    a = o === void 0 ? !1 : o,
    l = t.boundary,
    c = t.rootBoundary,
    u = t.altBoundary,
    p = t.padding,
    h = t.tether,
    f = h === void 0 ? !0 : h,
    m = t.tetherOffset,
    g = m === void 0 ? 0 : m,
    _ = _r(e, { boundary: l, rootBoundary: c, padding: p, altBoundary: u }),
    k = Oi(e.placement),
    T = mr(e.placement),
    x = !T,
    v = sl(k),
    y = fg(v),
    E = e.modifiersData.popperOffsets,
    C = e.rects.reference,
    S = e.rects.popper,
    b =
      typeof g == 'function'
        ? g(Object.assign({}, e.rects, { placement: e.placement }))
        : g,
    O =
      typeof b == 'number'
        ? { mainAxis: b, altAxis: b }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, b),
    M = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    P = { x: 0, y: 0 }
  if (E) {
    if (s) {
      var z,
        F = v === 'y' ? yt : xt,
        H = v === 'y' ? Ut : Ht,
        B = v === 'y' ? 'height' : 'width',
        $ = E[v],
        D = $ + _[F],
        V = $ - _[H],
        w = f ? -S[B] / 2 : 0,
        te = T === Mn ? C[B] : S[B],
        me = T === Mn ? -S[B] : -C[B],
        Je = e.elements.arrow,
        ae = f && Je ? rl(Je) : { width: 0, height: 0 },
        ce = e.modifiersData['arrow#persistent']
          ? e.modifiersData['arrow#persistent'].padding
          : xd(),
        ze = ce[F],
        fe = ce[H],
        Te = Gr(0, C[B], ae[B]),
        Ve = x
          ? C[B] / 2 - w - Te - ze - O.mainAxis
          : te - Te - ze - O.mainAxis,
        gi = x
          ? -C[B] / 2 + w + Te + fe + O.mainAxis
          : me + Te + fe + O.mainAxis,
        je = e.elements.arrow && bs(e.elements.arrow),
        Lt = je ? (v === 'y' ? je.clientTop || 0 : je.clientLeft || 0) : 0,
        ie = (z = M == null ? void 0 : M[v]) != null ? z : 0,
        we = $ + Ve - ie - Lt,
        et = $ + gi - ie,
        tt = Gr(f ? no(D, we) : D, $, f ? kn(V, et) : V)
      ;(E[v] = tt), (P[v] = tt - $)
    }
    if (a) {
      var A,
        dt = v === 'x' ? yt : xt,
        ri = v === 'x' ? Ut : Ht,
        it = E[y],
        he = y === 'y' ? 'height' : 'width',
        si = it + _[dt],
        mi = it - _[ri],
        _i = [yt, xt].indexOf(k) !== -1,
        Pe = (A = M == null ? void 0 : M[y]) != null ? A : 0,
        oi = _i ? si : it - C[he] - S[he] - Pe + O.altAxis,
        _e = _i ? it + C[he] + S[he] - Pe - O.altAxis : mi,
        Ct = f && _i ? Vh(oi, it, _e) : Gr(f ? oi : si, it, f ? _e : mi)
      ;(E[y] = Ct), (P[y] = Ct - it)
    }
    e.modifiersData[i] = P
  }
}
const Md = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: pg,
  requiresIfExists: ['offset']
}
function hg(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop }
}
function gg(r) {
  return r === Vt(r) || !ti(r) ? ll(r) : hg(r)
}
function mg(r) {
  var e = r.getBoundingClientRect(),
    t = hr(e.width) / r.offsetWidth || 1,
    i = hr(e.height) / r.offsetHeight || 1
  return t !== 1 || i !== 1
}
function _g(r, e, t) {
  t === void 0 && (t = !1)
  var i = ti(e),
    n = ti(e) && mg(e),
    s = an(e),
    o = gr(r, n, t),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 }
  return (
    (i || (!i && !t)) &&
      ((Mi(e) !== 'body' || ul(s)) && (a = gg(e)),
      ti(e)
        ? ((l = gr(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
        : s && (l.x = cl(s))),
    {
      x: o.left + a.scrollLeft - l.x,
      y: o.top + a.scrollTop - l.y,
      width: o.width,
      height: o.height
    }
  )
}
function vg(r) {
  var e = new Map(),
    t = new Set(),
    i = []
  r.forEach(function (s) {
    e.set(s.name, s)
  })
  function n(s) {
    t.add(s.name)
    var o = [].concat(s.requires || [], s.requiresIfExists || [])
    o.forEach(function (a) {
      if (!t.has(a)) {
        var l = e.get(a)
        l && n(l)
      }
    }),
      i.push(s)
  }
  return (
    r.forEach(function (s) {
      t.has(s.name) || n(s)
    }),
    i
  )
}
function bg(r) {
  var e = vg(r)
  return bd.reduce(function (t, i) {
    return t.concat(
      e.filter(function (n) {
        return n.phase === i
      })
    )
  }, [])
}
function wg(r) {
  var e
  return function () {
    return (
      e ||
        (e = new Promise(function (t) {
          Promise.resolve().then(function () {
            ;(e = void 0), t(r())
          })
        })),
      e
    )
  }
}
function yg(r) {
  var e = r.reduce(function (t, i) {
    var n = t[i.name]
    return (
      (t[i.name] = n
        ? Object.assign({}, n, i, {
            options: Object.assign({}, n.options, i.options),
            data: Object.assign({}, n.data, i.data)
          })
        : i),
      t
    )
  }, {})
  return Object.keys(e).map(function (t) {
    return e[t]
  })
}
var Gl = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function Zl() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t]
  return !e.some(function (i) {
    return !(i && typeof i.getBoundingClientRect == 'function')
  })
}
function bo(r) {
  r === void 0 && (r = {})
  var e = r,
    t = e.defaultModifiers,
    i = t === void 0 ? [] : t,
    n = e.defaultOptions,
    s = n === void 0 ? Gl : n
  return function (o, a, l) {
    l === void 0 && (l = s)
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Gl, s),
        modifiersData: {},
        elements: { reference: o, popper: a },
        attributes: {},
        styles: {}
      },
      u = [],
      p = !1,
      h = {
        state: c,
        setOptions: function (g) {
          var _ = typeof g == 'function' ? g(c.options) : g
          m(),
            (c.options = Object.assign({}, s, c.options, _)),
            (c.scrollParents = {
              reference: Ln(o)
                ? Zr(o)
                : o.contextElement
                  ? Zr(o.contextElement)
                  : [],
              popper: Zr(a)
            })
          var k = bg(yg([].concat(i, c.options.modifiers)))
          return (
            (c.orderedModifiers = k.filter(function (T) {
              return T.enabled
            })),
            f(),
            h.update()
          )
        },
        forceUpdate: function () {
          if (!p) {
            var g = c.elements,
              _ = g.reference,
              k = g.popper
            if (Zl(_, k)) {
              ;(c.rects = {
                reference: _g(_, bs(k), c.options.strategy === 'fixed'),
                popper: rl(k)
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (S) {
                  return (c.modifiersData[S.name] = Object.assign({}, S.data))
                })
              for (var T = 0; T < c.orderedModifiers.length; T++) {
                if (c.reset === !0) {
                  ;(c.reset = !1), (T = -1)
                  continue
                }
                var x = c.orderedModifiers[T],
                  v = x.fn,
                  y = x.options,
                  E = y === void 0 ? {} : y,
                  C = x.name
                typeof v == 'function' &&
                  (c = v({ state: c, options: E, name: C, instance: h }) || c)
              }
            }
          }
        },
        update: wg(function () {
          return new Promise(function (g) {
            h.forceUpdate(), g(c)
          })
        }),
        destroy: function () {
          m(), (p = !0)
        }
      }
    if (!Zl(o, a)) return h
    h.setOptions(l).then(function (g) {
      !p && l.onFirstUpdate && l.onFirstUpdate(g)
    })
    function f() {
      c.orderedModifiers.forEach(function (g) {
        var _ = g.name,
          k = g.options,
          T = k === void 0 ? {} : k,
          x = g.effect
        if (typeof x == 'function') {
          var v = x({ state: c, name: _, instance: h, options: T }),
            y = function () {}
          u.push(v || y)
        }
      })
    }
    function m() {
      u.forEach(function (g) {
        return g()
      }),
        (u = [])
    }
    return h
  }
}
var xg = bo(),
  Cg = [al, dl, ol, nl],
  kg = bo({ defaultModifiers: Cg }),
  Eg = [al, dl, ol, nl, Pd, Od, Md, Ed, Ad],
  Ld = bo({ defaultModifiers: Eg })
const Tg = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: gd,
      afterRead: fd,
      afterWrite: vd,
      applyStyles: nl,
      arrow: Ed,
      auto: _o,
      basePlacements: wr,
      beforeMain: pd,
      beforeRead: ud,
      beforeWrite: md,
      bottom: Ut,
      clippingParents: ld,
      computeStyles: ol,
      createPopper: Ld,
      createPopperBase: xg,
      createPopperLite: kg,
      detectOverflow: _r,
      end: pr,
      eventListeners: al,
      flip: Od,
      hide: Ad,
      left: xt,
      main: hd,
      modifierPhases: bd,
      offset: Pd,
      placements: tl,
      popper: qn,
      popperGenerator: bo,
      popperOffsets: dl,
      preventOverflow: Md,
      read: dd,
      reference: cd,
      right: Ht,
      start: Mn,
      top: yt,
      variationPlacements: wa,
      viewport: el,
      write: _d
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
function Io(r) {
  return r === 'true'
    ? !0
    : r === 'false'
      ? !1
      : r === Number(r).toString()
        ? Number(r)
        : r === '' || r === 'null'
          ? null
          : r
}
function Bo(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)
}
const Ce = {
  setDataAttribute(r, e, t) {
    r.setAttribute(`data-twe-${Bo(e)}`, t)
  },
  removeDataAttribute(r, e) {
    r.removeAttribute(`data-twe-${Bo(e)}`)
  },
  getDataAttributes(r) {
    if (!r) return {}
    const e = {}
    return (
      Object.keys(r.dataset)
        .filter((t) => t.startsWith('twe'))
        .forEach((t) => {
          if (t.startsWith('tweClass')) return
          let i = t.replace(/^twe/, '')
          ;(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
            (e[i] = Io(r.dataset[t]))
        }),
      e
    )
  },
  getDataClassAttributes(r) {
    if (!r) return {}
    const e = { ...r.dataset }
    return (
      Object.keys(e)
        .filter((t) => t.startsWith('tweClass'))
        .forEach((t) => {
          let i = t.replace(/^tweClass/, '')
          ;(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
            (e[i] = Io(e[t]))
        }),
      e
    )
  },
  getDataAttribute(r, e) {
    return Io(r.getAttribute(`data-twe-${Bo(e)}`))
  },
  offset(r) {
    const e = r.getBoundingClientRect()
    return {
      top: e.top + document.body.scrollTop,
      left: e.left + document.body.scrollLeft
    }
  },
  position(r) {
    return { top: r.offsetTop, left: r.offsetLeft }
  },
  style(r, e) {
    Object.assign(r.style, e)
  },
  toggleClass(r, e) {
    r &&
      No(e).forEach((t) => {
        r.classList.contains(t) ? r.classList.remove(t) : r.classList.add(t)
      })
  },
  addClass(r, e) {
    No(e).forEach((t) => !r.classList.contains(t) && r.classList.add(t))
  },
  addStyle(r, e) {
    Object.keys(e).forEach((t) => {
      r.style[t] = e[t]
    })
  },
  removeClass(r, e) {
    No(e).forEach((t) => r.classList.contains(t) && r.classList.remove(t))
  },
  hasClass(r, e) {
    return r.classList.contains(e)
  },
  maxOffset(r) {
    const e = r.getBoundingClientRect()
    return {
      top:
        e.top +
        Math.max(
          document.body.scrollTop,
          document.documentElement.scrollTop,
          window.scrollY
        ),
      left:
        e.left +
        Math.max(
          document.body.scrollLeft,
          document.documentElement.scrollLeft,
          window.scrollX
        )
    }
  }
}
function No(r) {
  return typeof r == 'string' ? r.split(' ') : Array.isArray(r) ? r : !1
}
const Sg = 3,
  Oe = {
    closest(r, e) {
      return r.closest(e)
    },
    matches(r, e) {
      return r.matches(e)
    },
    find(r, e = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(e, r))
    },
    findOne(r, e = document.documentElement) {
      return Element.prototype.querySelector.call(e, r)
    },
    children(r, e) {
      return [].concat(...r.children).filter((t) => t.matches(e))
    },
    parents(r, e) {
      const t = []
      let i = r.parentNode
      for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== Sg; )
        this.matches(i, e) && t.push(i), (i = i.parentNode)
      return t
    },
    prev(r, e) {
      let t = r.previousElementSibling
      for (; t; ) {
        if (t.matches(e)) return [t]
        t = t.previousElementSibling
      }
      return []
    },
    next(r, e) {
      let t = r.nextElementSibling
      for (; t; ) {
        if (this.matches(t, e)) return [t]
        t = t.nextElementSibling
      }
      return []
    },
    focusableChildren(r) {
      const e = [
        'a',
        'button',
        'input',
        'textarea',
        'select',
        'details',
        '[tabindex]',
        '[contenteditable="true"]'
      ]
        .map((t) => `${t}:not([tabindex^="-"])`)
        .join(', ')
      return this.find(e, r).filter((t) => !go(t) && ho(t))
    }
  }
Jt()
Jt()
Jt()
Jt()
Jt()
Jt()
const jo = 'collapse',
  Dd = 'twe.collapse',
  wo = `.${Dd}`,
  Kl = { toggle: !0, parent: null },
  Og = { toggle: 'boolean', parent: '(null|element)' },
  Ag = `show${wo}`,
  Pg = `shown${wo}`,
  Mg = `hide${wo}`,
  Lg = `hidden${wo}`,
  Fo = 'data-twe-collapse-show',
  Ql = 'data-twe-collapse-collapsed',
  Ts = 'data-twe-collapse-collapsing',
  Dg = 'data-twe-collapse-horizontal',
  Kn = 'data-twe-collapse-item',
  Jl = `:scope [${Kn}] [${Kn}]`,
  Rg = 'width',
  $g = 'height',
  zg =
    '[data-twe-collapse-item][data-twe-collapse-show], [data-twe-collapse-item][data-twe-collapse-collapsing]',
  ec = '[data-twe-collapse-init]',
  Ig = {
    visible: '!visible',
    hidden: 'hidden',
    baseTransition:
      'overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
    collapsing:
      'h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
    collapsingHorizontal:
      'w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
  },
  Bg = {
    visible: 'string',
    hidden: 'string',
    baseTransition: 'string',
    collapsing: 'string',
    collapsingHorizontal: 'string'
  }
class Bi extends mo {
  constructor(e, t, i) {
    super(e),
      (this._isTransitioning = !1),
      (this._config = this._getConfig(t)),
      (this._classes = this._getClasses(i)),
      (this._triggerArray = [])
    const n = Oe.find(ec)
    for (let s = 0, o = n.length; s < o; s++) {
      const a = n[s],
        l = Qu(a),
        c = Oe.find(l).filter((u) => u === this._element)
      l !== null &&
        c.length &&
        ((this._selector = l), this._triggerArray.push(a))
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle()
  }
  static get Default() {
    return Kl
  }
  static get NAME() {
    return jo
  }
  toggle() {
    this._isShown() ? this.hide() : this.show()
  }
  show() {
    if (this._isTransitioning || this._isShown()) return
    let e = [],
      t
    if (this._config.parent) {
      const l = Oe.find(Jl, this._config.parent)
      e = Oe.find(zg, this._config.parent).filter((c) => !l.includes(c))
    }
    const i = Oe.findOne(this._selector)
    if (e.length) {
      const l = e.find((c) => i !== c)
      if (((t = l ? Bi.getInstance(l) : null), t && t._isTransitioning)) return
    }
    if (I.trigger(this._element, Ag).defaultPrevented) return
    e.forEach((l) => {
      i !== l && Bi.getOrCreateInstance(l, { toggle: !1 }).hide(),
        t || Xr.setData(l, Dd, null)
    })
    const n = this._getDimension(),
      s =
        n === 'height'
          ? this._classes.collapsing
          : this._classes.collapsingHorizontal
    Ce.removeClass(this._element, this._classes.visible),
      Ce.removeClass(this._element, this._classes.hidden),
      Ce.addClass(this._element, s),
      this._element.removeAttribute(Kn),
      this._element.setAttribute(Ts, ''),
      (this._element.style[n] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0)
    const o = () => {
        ;(this._isTransitioning = !1),
          Ce.removeClass(this._element, this._classes.hidden),
          Ce.removeClass(this._element, s),
          Ce.addClass(this._element, this._classes.visible),
          this._element.removeAttribute(Ts),
          this._element.setAttribute(Kn, ''),
          this._element.setAttribute(Fo, ''),
          (this._element.style[n] = ''),
          I.trigger(this._element, Pg)
      },
      a = `scroll${n[0].toUpperCase() + n.slice(1)}`
    this._queueCallback(o, this._element, !0),
      (this._element.style[n] = `${this._element[a]}px`)
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      I.trigger(this._element, Mg).defaultPrevented
    )
      return
    const e = this._getDimension(),
      t =
        e === 'height'
          ? this._classes.collapsing
          : this._classes.collapsingHorizontal
    ;(this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`),
      Ja(this._element),
      Ce.addClass(this._element, t),
      Ce.removeClass(this._element, this._classes.visible),
      Ce.removeClass(this._element, this._classes.hidden),
      this._element.setAttribute(Ts, ''),
      this._element.removeAttribute(Kn),
      this._element.removeAttribute(Fo)
    const i = this._triggerArray.length
    for (let s = 0; s < i; s++) {
      const o = this._triggerArray[s],
        a = hs(o)
      a && !this._isShown(a) && this._addAriaAndCollapsedClass([o], !1)
    }
    this._isTransitioning = !0
    const n = () => {
      ;(this._isTransitioning = !1),
        Ce.removeClass(this._element, t),
        Ce.addClass(this._element, this._classes.visible),
        Ce.addClass(this._element, this._classes.hidden),
        this._element.removeAttribute(Ts),
        this._element.setAttribute(Kn, ''),
        I.trigger(this._element, Lg)
    }
    ;(this._element.style[e] = ''), this._queueCallback(n, this._element, !0)
  }
  _isShown(e = this._element) {
    return e.hasAttribute(Fo)
  }
  _getConfig(e) {
    return (
      (e = { ...Kl, ...Ce.getDataAttributes(this._element), ...e }),
      (e.toggle = !!e.toggle),
      (e.parent = fr(e.parent)),
      Pn(jo, e, Og),
      e
    )
  }
  _getClasses(e) {
    const t = Ce.getDataClassAttributes(this._element)
    return (e = { ...Ig, ...t, ...e }), Pn(jo, e, Bg), e
  }
  _getDimension() {
    return this._element.hasAttribute(Dg) ? Rg : $g
  }
  _initializeChildren() {
    if (!this._config.parent) return
    const e = Oe.find(Jl, this._config.parent)
    Oe.find(ec, this._config.parent)
      .filter((t) => !e.includes(t))
      .forEach((t) => {
        const i = hs(t)
        i && this._addAriaAndCollapsedClass([t], this._isShown(i))
      })
  }
  _addAriaAndCollapsedClass(e, t) {
    e.length &&
      e.forEach((i) => {
        t ? i.removeAttribute(Ql) : i.setAttribute(`${Ql}`, ''),
          i.setAttribute('aria-expanded', t)
      })
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const t = {}
      typeof e == 'string' && /show|hide/.test(e) && (t.toggle = !1)
      const i = Bi.getOrCreateInstance(this, t)
      if (typeof e == 'string') {
        if (typeof i[e] > 'u') throw new TypeError(`No method named "${e}"`)
        i[e]()
      }
    })
  }
}
const tc = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  ic = '.sticky-top'
class Ca {
  constructor() {
    this._element = document.body
  }
  getWidth() {
    const e = document.documentElement.clientWidth
    return Math.abs(window.innerWidth - e)
  }
  hide() {
    const e = this.getWidth()
    this._disableOverFlow(),
      this._setElementAttributes(this._element, 'paddingRight', (t) => t + e),
      this._setElementAttributes(tc, 'paddingRight', (t) => t + e),
      this._setElementAttributes(ic, 'marginRight', (t) => t - e)
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow'),
      (this._element.style.overflow = 'hidden')
  }
  _setElementAttributes(e, t, i) {
    const n = this.getWidth(),
      s = (o) => {
        if (o !== this._element && window.innerWidth > o.clientWidth + n) return
        this._saveInitialAttribute(o, t)
        const a = window.getComputedStyle(o)[t]
        o.style[t] = `${i(Number.parseFloat(a))}px`
      }
    this._applyManipulationCallback(e, s)
  }
  reset() {
    this._resetElementAttributes(this._element, 'overflow'),
      this._resetElementAttributes(this._element, 'paddingRight'),
      this._resetElementAttributes(tc, 'paddingRight'),
      this._resetElementAttributes(ic, 'marginRight')
  }
  _saveInitialAttribute(e, t) {
    const i = e.style[t]
    i && Ce.setDataAttribute(e, t, i)
  }
  _resetElementAttributes(e, t) {
    const i = (n) => {
      const s = Ce.getDataAttribute(n, t)
      typeof s > 'u'
        ? n.style.removeProperty(t)
        : (Ce.removeDataAttribute(n, t), (n.style[t] = s))
    }
    this._applyManipulationCallback(e, i)
  }
  _applyManipulationCallback(e, t) {
    po(e) ? t(e) : Oe.find(e, this._element).forEach(t)
  }
  isOverflowing() {
    return this.getWidth() > 0
  }
}
const Ng = {
    isVisible: !0,
    isAnimated: !1,
    rootElement: 'body',
    clickCallback: null,
    backdropClasses: null
  },
  jg = {
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)',
    backdropClasses: '(array|string|null)'
  },
  Rd = 'backdrop',
  nc = `mousedown.twe.${Rd}`
class $d {
  constructor(e) {
    ;(this._config = this._getConfig(e)),
      (this._isAppended = !1),
      (this._element = null)
  }
  show(e) {
    if (!this._config.isVisible) {
      _n(e)
      return
    }
    this._append(), this._config.isAnimated && Ja(this._getElement())
    const t = this._config.backdropClasses || [
      'opacity-50',
      'transition-all',
      'duration-300',
      'ease-in-out',
      'fixed',
      'top-0',
      'left-0',
      'z-[1040]',
      'bg-black',
      'w-screen',
      'h-screen'
    ]
    Ce.removeClass(this._getElement(), 'opacity-0'),
      Ce.addClass(this._getElement(), t),
      this._element.setAttribute('data-twe-backdrop-show', ''),
      this._emulateAnimation(() => {
        _n(e)
      })
  }
  hide(e) {
    if (!this._config.isVisible) {
      _n(e)
      return
    }
    this._element.removeAttribute('data-twe-backdrop-show'),
      this._getElement().classList.add('opacity-0'),
      this._getElement().classList.remove('opacity-50'),
      this._emulateAnimation(() => {
        this.dispose(), _n(e)
      })
  }
  update(e = {}) {
    this._config = this._getConfig({ ...this._config, ...e })
  }
  _getElement() {
    if (!this._element) {
      const e = document.createElement('div')
      this._element = e
    }
    return this._element
  }
  _getConfig(e) {
    return (
      (e = { ...Ng, ...(typeof e == 'object' ? e : {}) }),
      (e.rootElement = fr(e.rootElement)),
      Pn(Rd, e, jg),
      e
    )
  }
  _append() {
    this._isAppended ||
      (this._config.rootElement.append(this._getElement()),
      I.on(this._getElement(), nc, () => {
        _n(this._config.clickCallback)
      }),
      (this._isAppended = !0))
  }
  dispose() {
    this._isAppended &&
      (I.off(this._element, nc),
      this._element.remove(),
      (this._isAppended = !1))
  }
  _emulateAnimation(e) {
    td(e, this._getElement(), this._config.isAnimated)
  }
}
class zd {
  constructor(e, t = {}, i) {
    ;(this._element = e),
      (this._toggler = i),
      (this._event = t.event || 'blur'),
      (this._condition = t.condition || (() => !0)),
      (this._selector =
        t.selector ||
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'),
      (this._onlyVisible = t.onlyVisible || !1),
      (this._focusableElements = []),
      (this._firstElement = null),
      (this._lastElement = null),
      (this.handler = (n) => {
        this._condition(n) && !n.shiftKey && n.target === this._lastElement
          ? (n.preventDefault(), this._firstElement.focus())
          : this._condition(n) &&
            n.shiftKey &&
            n.target === this._firstElement &&
            (n.preventDefault(), this._lastElement.focus())
      })
  }
  trap() {
    this._setElements(), this._init(), this._setFocusTrap()
  }
  disable() {
    this._focusableElements.forEach((e) => {
      e.removeEventListener(this._event, this.handler)
    }),
      this._toggler && this._toggler.focus()
  }
  update() {
    this._setElements(), this._setFocusTrap()
  }
  _init() {
    const e = (t) => {
      !this._firstElement ||
        t.key !== 'Tab' ||
        this._focusableElements.includes(t.target) ||
        (t.preventDefault(),
        this._firstElement.focus(),
        window.removeEventListener('keydown', e))
    }
    window.addEventListener('keydown', e)
  }
  _filterVisible(e) {
    return e.filter((t) => {
      if (!ho(t)) return !1
      const i = Oe.parents(t, '*')
      for (let n = 0; n < i.length; n++) {
        const s = window.getComputedStyle(i[n])
        if (s && (s.display === 'none' || s.visibility === 'hidden')) return !1
      }
      return !0
    })
  }
  _setElements() {
    const e = Oe.find(this._selector, this._element)
    ;(this._focusableElements = e.filter((t) => {
      const i =
        t.getAttribute('data-twe-disabled') === 'true' ||
        t.hasAttribute('disabled')
      return t.disabled || i ? null : t
    })),
      this._onlyVisible &&
        (this._focusableElements = this._filterVisible(
          this._focusableElements
        )),
      (this._firstElement = this._focusableElements[0]),
      (this._lastElement =
        this._focusableElements[this._focusableElements.length - 1])
  }
  _setFocusTrap() {
    this._focusableElements.forEach((e, t) => {
      t === this._focusableElements.length - 1 || t === 0
        ? e.addEventListener(this._event, this.handler)
        : e.removeEventListener(this._event, this.handler)
    })
  }
}
let rc = []
const Id = (r, e = 'hide') => {
    const t = `click.dismiss${r.EVENT_KEY}`,
      i = r.NAME
    rc.includes(i) ||
      (rc.push(i),
      I.on(document, t, `[data-twe-${i}-dismiss]`, function (n) {
        if (
          (['A', 'AREA'].includes(this.tagName) && n.preventDefault(), go(this))
        )
          return
        const s =
          hs(this) ||
          this.closest(`.${i}`) ||
          this.closest(`[data-twe-${i}-init]`)
        s && r.getOrCreateInstance(s)[e]()
      }))
  },
  Fg = 9,
  sc = 'offcanvas',
  Ug = 'twe.offcanvas',
  yr = `.${Ug}`,
  Hg = '.data-api',
  Vg = `load${yr}${Hg}`,
  qg = 'Escape',
  oc = { backdrop: !0, keyboard: !0, scroll: !1 },
  Wg = { backdrop: 'boolean', keyboard: 'boolean', scroll: 'boolean' },
  ac = 'show',
  Yg = '[data-twe-offcanvas-init][data-twe-offcanvas-show]',
  Xg = `show${yr}`,
  Gg = `shown${yr}`,
  Zg = `hide${yr}`,
  Kg = `hidden${yr}`,
  Qg = `keydown.dismiss${yr}`
class Kr extends mo {
  constructor(e, t) {
    super(e),
      (this._config = this._getConfig(t)),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners(),
      (this._didInit = !1),
      this._init()
  }
  static get NAME() {
    return sc
  }
  static get Default() {
    return oc
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e)
  }
  show(e) {
    if (
      this._isShown ||
      I.trigger(this._element, Xg, { relatedTarget: e }).defaultPrevented
    )
      return
    ;(this._isShown = !0),
      (this._element.style.visibility = 'visible'),
      this._backdrop.show(),
      this._config.scroll || new Ca().hide(),
      this._element.removeAttribute('aria-hidden'),
      this._element.setAttribute('aria-modal', !0),
      this._element.setAttribute('role', 'dialog'),
      this._element.setAttribute(`data-twe-offcanvas-${ac}`, '')
    const t = () => {
      this._config.scroll || this._focustrap.trap(),
        I.trigger(this._element, Gg, { relatedTarget: e })
    }
    this._queueCallback(t, this._element, !0)
  }
  hide() {
    if (!this._isShown || I.trigger(this._element, Zg).defaultPrevented) return
    this._focustrap.disable(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.removeAttribute(`data-twe-offcanvas-${ac}`),
      this._backdrop.hide()
    const e = () => {
      this._element.setAttribute('aria-hidden', !0),
        this._element.removeAttribute('aria-modal'),
        this._element.removeAttribute('role'),
        (this._element.style.visibility = 'hidden'),
        this._config.scroll || new Ca().reset(),
        I.trigger(this._element, Kg)
    }
    this._queueCallback(e, this._element, !0)
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.disable(), super.dispose()
  }
  _init() {
    this._didInit ||
      (I.on(window, Vg, () =>
        Oe.find(Yg).forEach((e) => Kr.getOrCreateInstance(e).show())
      ),
      (this._didInit = !0),
      Id(Kr))
  }
  _getConfig(e) {
    return (
      (e = {
        ...oc,
        ...Ce.getDataAttributes(this._element),
        ...(typeof e == 'object' ? e : {})
      }),
      Pn(sc, e, Wg),
      e
    )
  }
  _initializeBackDrop() {
    return new $d({
      isVisible: this._config.backdrop,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    })
  }
  _initializeFocusTrap() {
    return new zd(this._element, {
      event: 'keydown',
      condition: (e) => e.keyCode === Fg,
      onlyVisible: !0
    })
  }
  _addEventListeners() {
    I.on(this._element, Qg, (e) => {
      this._config.keyboard && e.key === qg && this.hide()
    })
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const t = Kr.getOrCreateInstance(this, e)
      if (typeof e == 'string') {
        if (t[e] === void 0 || e.startsWith('_') || e === 'constructor')
          throw new TypeError(`No method named "${e}"`)
        t[e](this)
      }
    })
  }
}
const Jg = new Set([
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
  ]),
  em = /^aria-[\w-]*$/i,
  tm = /^data-twe-[\w-]*$/i,
  im = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
  nm =
    /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
  rm = (r, e) => {
    const t = r.nodeName.toLowerCase()
    if (e.includes(t))
      return Jg.has(t) ? !!(im.test(r.nodeValue) || nm.test(r.nodeValue)) : !0
    const i = e.filter((n) => n instanceof RegExp)
    for (let n = 0, s = i.length; n < s; n++) if (i[n].test(t)) return !0
    return !1
  },
  sm = {
    '*': ['class', 'dir', 'id', 'lang', 'role', em, tm],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  }
function lc(r, e, t) {
  if (!r.length) return r
  if (t && typeof t == 'function') return t(r)
  const i = new window.DOMParser().parseFromString(r, 'text/html'),
    n = [].concat(...i.body.querySelectorAll('*'))
  for (let s = 0, o = n.length; s < o; s++) {
    const a = n[s],
      l = a.nodeName.toLowerCase()
    if (!Object.keys(e).includes(l)) {
      a.remove()
      continue
    }
    const c = [].concat(...a.attributes),
      u = [].concat(e['*'] || [], e[l] || [])
    c.forEach((p) => {
      rm(p, u) || a.removeAttribute(p.nodeName)
    })
  }
  return i.body.innerHTML
}
const cc = 'tooltip',
  om = 'twe.tooltip',
  yi = `.${om}`,
  am = 'te-tooltip',
  lm = new Set(['sanitize', 'allowList', 'sanitizeFn']),
  cm = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  },
  um = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: Jt() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: Jt() ? 'right' : 'left'
  },
  dm = {
    animation: !0,
    template: `
    <div class="opacity-0 transition-opacity duration-300 ease-in-out absolute z-[1080] block m-0 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal" role="tooltip">
      <div data-twe-tooltip-inner-ref class="max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded"></div>
    </div>
    `,
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: !1,
    selector: !1,
    placement: 'top',
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: !0,
    sanitizeFn: null,
    allowList: sm,
    popperConfig: { hide: !0 }
  },
  fm = {
    HIDE: `hide${yi}`,
    HIDDEN: `hidden${yi}`,
    SHOW: `show${yi}`,
    SHOWN: `shown${yi}`,
    INSERTED: `inserted${yi}`,
    CLICK: `click${yi}`,
    FOCUSIN: `focusin${yi}`,
    FOCUSOUT: `focusout${yi}`,
    MOUSEENTER: `mouseenter${yi}`,
    MOUSELEAVE: `mouseleave${yi}`
  },
  pm = 'fade',
  hm = 'modal',
  Uo = 'show',
  Lr = 'show',
  Ho = 'out',
  uc = '[data-twe-tooltip-inner-ref]',
  dc = `.${hm}`,
  fc = 'hide.twe.modal',
  Dr = 'hover',
  Vo = 'focus',
  gm = 'click',
  mm = 'manual'
class Hi extends mo {
  constructor(e, t) {
    if (typeof Tg > 'u')
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      )
    super(e),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._hoverState = ''),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._config = this._getConfig(t)),
      (this.tip = null),
      this._setListeners()
  }
  static get Default() {
    return dm
  }
  static get NAME() {
    return cc
  }
  static get Event() {
    return fm
  }
  static get DefaultType() {
    return cm
  }
  enable() {
    this._isEnabled = !0
  }
  disable() {
    this._isEnabled = !1
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled
  }
  toggle(e) {
    if (this._isEnabled)
      if (e) {
        const t = this._initializeOnDelegatedTarget(e)
        ;(t._activeTrigger.click = !t._activeTrigger.click),
          t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
      } else {
        if (this.getTipElement().classList.contains(Uo)) {
          this._leave(null, this)
          return
        }
        this._enter(null, this)
      }
  }
  dispose() {
    clearTimeout(this._timeout),
      I.off(this._element.closest(dc), fc, this._hideModalHandler),
      this.tip && this.tip.remove(),
      this._disposePopper(),
      super.dispose()
  }
  show() {
    if (this._element.style.display === 'none')
      throw new Error('Please use show on visible elements')
    if (!(this.isWithContent() && this._isEnabled)) return
    const e = I.trigger(this._element, this.constructor.Event.SHOW),
      t = Ju(this._element),
      i =
        t === null
          ? this._element.ownerDocument.documentElement.contains(this._element)
          : t.contains(this._element)
    if (e.defaultPrevented || !i) return
    this.constructor.NAME === 'tooltip' &&
      this.tip &&
      this.getTitle() !== this.tip.querySelector(uc).innerHTML &&
      (this._disposePopper(), this.tip.remove(), (this.tip = null))
    const n = this.getTipElement(),
      s = Oh(this.constructor.NAME)
    n.setAttribute('id', s),
      this._element.setAttribute('aria-describedby', s),
      this._config.animation &&
        setTimeout(() => {
          this.tip.classList.add('opacity-100'),
            this.tip.classList.remove('opacity-0')
        }, 100)
    const o =
        typeof this._config.placement == 'function'
          ? this._config.placement.call(this, n, this._element)
          : this._config.placement,
      a = this._getAttachment(o)
    this._addAttachmentClass(a)
    const { container: l } = this._config
    if (
      (Xr.setData(n, this.constructor.DATA_KEY, this),
      this._element.ownerDocument.documentElement.contains(this.tip) ||
        (l.append(n),
        I.trigger(this._element, this.constructor.Event.INSERTED)),
      this._popper
        ? this._popper.update()
        : (this._popper = Ld(this._element, n, this._getPopperConfig(a))),
      n.getAttribute('id').includes('tooltip'))
    )
      switch (o) {
        case 'bottom':
          n.classList.add('py-[0.4rem]')
          break
        case 'left':
          n.classList.add('px-[0.4rem]')
          break
        case 'right':
          n.classList.add('px-[0.4rem]')
          break
        default:
          n.classList.add('py-[0.4rem]')
          break
      }
    const c = this._resolvePossibleFunction(this._config.customClass)
    c && n.classList.add(...c.split(' ')),
      'ontouchstart' in document.documentElement &&
        [].concat(...document.body.children).forEach((h) => {
          I.on(h, 'mouseover', jl)
        })
    const u = () => {
        const h = this._hoverState
        ;(this._hoverState = null),
          I.trigger(this._element, this.constructor.Event.SHOWN),
          h === Ho && this._leave(null, this)
      },
      p = this.tip.classList.contains('transition-opacity')
    this._queueCallback(u, this.tip, p)
  }
  hide() {
    if (!this._popper) return
    const e = this.getTipElement(),
      t = () => {
        this._isWithActiveTrigger() ||
          (this._hoverState !== Lr && e.remove(),
          this._cleanTipClass(),
          this._element.removeAttribute('aria-describedby'),
          I.trigger(this._element, this.constructor.Event.HIDDEN),
          this._disposePopper())
      }
    if (I.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
      return
    e.classList.add('opacity-0'),
      e.classList.remove('opacity-100'),
      'ontouchstart' in document.documentElement &&
        []
          .concat(...document.body.children)
          .forEach((n) => I.off(n, 'mouseover', jl)),
      (this._activeTrigger[gm] = !1),
      (this._activeTrigger[Vo] = !1),
      (this._activeTrigger[Dr] = !1)
    const i = this.tip.classList.contains('opacity-0')
    this._queueCallback(t, this.tip, i), (this._hoverState = '')
  }
  update() {
    this._popper !== null && this._popper.update()
  }
  isWithContent() {
    return !!this.getTitle()
  }
  getTipElement() {
    if (this.tip) return this.tip
    const e = document.createElement('div')
    e.innerHTML = this._config.template
    const t = e.children[0]
    return (
      this.setContent(t), t.classList.remove(pm, Uo), (this.tip = t), this.tip
    )
  }
  setContent(e) {
    this._sanitizeAndSetContent(e, this.getTitle(), uc)
  }
  _sanitizeAndSetContent(e, t, i) {
    const n = Oe.findOne(i, e)
    if (!t && n) {
      n.remove()
      return
    }
    this.setElementContent(n, t)
  }
  setElementContent(e, t) {
    if (e !== null) {
      if (po(t)) {
        ;(t = fr(t)),
          this._config.html
            ? t.parentNode !== e && ((e.innerHTML = ''), e.append(t))
            : (e.textContent = t.textContent)
        return
      }
      this._config.html
        ? (this._config.sanitize &&
            (t = lc(t, this._config.allowList, this._config.sanitizeFn)),
          (e.innerHTML = t))
        : (e.textContent = t)
    }
  }
  getTitle() {
    const e =
      this._element.getAttribute('data-twe-original-title') ||
      this._config.title
    return this._resolvePossibleFunction(e)
  }
  updateAttachment(e) {
    return e === 'right' ? 'end' : e === 'left' ? 'start' : e
  }
  _initializeOnDelegatedTarget(e, t) {
    return (
      t ||
      this.constructor.getOrCreateInstance(
        e.delegateTarget,
        this._getDelegateConfig()
      )
    )
  }
  _getOffset() {
    const { offset: e } = this._config
    return typeof e == 'string'
      ? e.split(',').map((t) => Number.parseInt(t, 10))
      : typeof e == 'function'
        ? (t) => e(t, this._element)
        : e
  }
  _resolvePossibleFunction(e) {
    return typeof e == 'function' ? e.call(this._element) : e
  }
  _getPopperConfig(e) {
    const t = {
      placement: e,
      modifiers: [
        {
          name: 'flip',
          options: { fallbackPlacements: this._config.fallbackPlacements }
        },
        { name: 'offset', options: { offset: this._getOffset() } },
        {
          name: 'preventOverflow',
          options: { boundary: this._config.boundary }
        },
        {
          name: 'arrow',
          options: { element: `.${this.constructor.NAME}-arrow` }
        },
        {
          name: 'onChange',
          enabled: !0,
          phase: 'afterWrite',
          fn: (i) => this._handlePopperPlacementChange(i)
        }
      ],
      onFirstUpdate: (i) => {
        i.options.placement !== i.placement &&
          this._handlePopperPlacementChange(i)
      }
    }
    return {
      ...t,
      ...(typeof this._config.popperConfig == 'function'
        ? this._config.popperConfig(t)
        : this._config.popperConfig)
    }
  }
  _addAttachmentClass(e) {
    this.getTipElement().classList.add(
      `${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`
    )
  }
  _getAttachment(e) {
    return um[e.toUpperCase()]
  }
  _setListeners() {
    this._config.trigger.split(' ').forEach((e) => {
      if (e === 'click')
        I.on(
          this._element,
          this.constructor.Event.CLICK,
          this._config.selector,
          (t) => this.toggle(t)
        )
      else if (e !== mm) {
        const t =
            e === Dr
              ? this.constructor.Event.MOUSEENTER
              : this.constructor.Event.FOCUSIN,
          i =
            e === Dr
              ? this.constructor.Event.MOUSELEAVE
              : this.constructor.Event.FOCUSOUT
        I.on(this._element, t, this._config.selector, (n) => this._enter(n)),
          I.on(this._element, i, this._config.selector, (n) => this._leave(n))
      }
    }),
      (this._hideModalHandler = () => {
        this._element && this.hide()
      }),
      I.on(this._element.closest(dc), fc, this._hideModalHandler),
      this._config.selector
        ? (this._config = { ...this._config, trigger: 'manual', selector: '' })
        : this._fixTitle()
  }
  _fixTitle() {
    const e = this._element.getAttribute('title'),
      t = typeof this._element.getAttribute('data-twe-original-title')
    ;(e || t !== 'string') &&
      (this._element.setAttribute('data-twe-original-title', e || ''),
      e &&
        !this._element.getAttribute('aria-label') &&
        !this._element.textContent &&
        this._element.setAttribute('aria-label', e),
      this._element.setAttribute('title', ''))
  }
  _enter(e, t) {
    if (
      ((t = this._initializeOnDelegatedTarget(e, t)),
      e && (t._activeTrigger[e.type === 'focusin' ? Vo : Dr] = !0),
      t.getTipElement().classList.contains(Uo) || t._hoverState === Lr)
    ) {
      t._hoverState = Lr
      return
    }
    if (
      (clearTimeout(t._timeout),
      (t._hoverState = Lr),
      !t._config.delay || !t._config.delay.show)
    ) {
      t.show()
      return
    }
    t._timeout = setTimeout(() => {
      t._hoverState === Lr && t.show()
    }, t._config.delay.show)
  }
  _leave(e, t) {
    if (
      ((t = this._initializeOnDelegatedTarget(e, t)),
      e &&
        (t._activeTrigger[e.type === 'focusout' ? Vo : Dr] =
          t._element.contains(e.relatedTarget)),
      !t._isWithActiveTrigger())
    ) {
      if (
        (clearTimeout(t._timeout),
        (t._hoverState = Ho),
        !t._config.delay || !t._config.delay.hide)
      ) {
        t.hide()
        return
      }
      t._timeout = setTimeout(() => {
        t._hoverState === Ho && t.hide()
      }, t._config.delay.hide)
    }
  }
  _isWithActiveTrigger() {
    for (const e in this._activeTrigger) if (this._activeTrigger[e]) return !0
    return !1
  }
  _getConfig(e) {
    const t = Ce.getDataAttributes(this._element)
    return (
      Object.keys(t).forEach((i) => {
        lm.has(i) && delete t[i]
      }),
      (e = {
        ...this.constructor.Default,
        ...t,
        ...(typeof e == 'object' && e ? e : {})
      }),
      (e.container = e.container === !1 ? document.body : fr(e.container)),
      typeof e.delay == 'number' &&
        (e.delay = { show: e.delay, hide: e.delay }),
      typeof e.title == 'number' && (e.title = e.title.toString()),
      typeof e.content == 'number' && (e.content = e.content.toString()),
      Pn(cc, e, this.constructor.DefaultType),
      e.sanitize && (e.template = lc(e.template, e.allowList, e.sanitizeFn)),
      e
    )
  }
  _getDelegateConfig() {
    const e = {}
    for (const t in this._config)
      this.constructor.Default[t] !== this._config[t] &&
        (e[t] = this._config[t])
    return e
  }
  _cleanTipClass() {
    const e = this.getTipElement(),
      t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g'),
      i = e.getAttribute('class').match(t)
    i !== null &&
      i.length > 0 &&
      i.map((n) => n.trim()).forEach((n) => e.classList.remove(n))
  }
  _getBasicClassPrefix() {
    return am
  }
  _handlePopperPlacementChange(e) {
    const { state: t } = e
    t &&
      ((this.tip = t.elements.popper),
      this._cleanTipClass(),
      this._addAttachmentClass(this._getAttachment(t.placement)))
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null))
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const t = Hi.getOrCreateInstance(this, e)
      if (typeof e == 'string') {
        if (typeof t[e] > 'u') throw new TypeError(`No method named "${e}"`)
        t[e]()
      }
    })
  }
}
;({ ...Hi.Default })
;({ ...Hi.DefaultType })
;(() => {
  var r = {
      454: (i, n, s) => {
        s.d(n, { Z: () => l })
        var o = s(645),
          a = s.n(o)()(function (c) {
            return c[1]
          })
        a.push([
          i.id,
          'INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}',
          ''
        ])
        const l = a
      },
      645: (i) => {
        i.exports = function (n) {
          var s = []
          return (
            (s.toString = function () {
              return this.map(function (o) {
                var a = n(o)
                return o[2] ? '@media '.concat(o[2], ' {').concat(a, '}') : a
              }).join('')
            }),
            (s.i = function (o, a, l) {
              typeof o == 'string' && (o = [[null, o, '']])
              var c = {}
              if (l)
                for (var u = 0; u < this.length; u++) {
                  var p = this[u][0]
                  p != null && (c[p] = !0)
                }
              for (var h = 0; h < o.length; h++) {
                var f = [].concat(o[h])
                ;(l && c[f[0]]) ||
                  (a &&
                    (f[2]
                      ? (f[2] = ''.concat(a, ' and ').concat(f[2]))
                      : (f[2] = a)),
                  s.push(f))
              }
            }),
            s
          )
        }
      },
      810: () => {
        ;(function () {
          if (typeof window < 'u')
            try {
              var i = new window.CustomEvent('test', { cancelable: !0 })
              if ((i.preventDefault(), i.defaultPrevented !== !0))
                throw new Error('Could not prevent default')
            } catch {
              var n = function (s, o) {
                var a, l
                return (
                  ((o = o || {}).bubbles = !!o.bubbles),
                  (o.cancelable = !!o.cancelable),
                  (a = document.createEvent('CustomEvent')).initCustomEvent(
                    s,
                    o.bubbles,
                    o.cancelable,
                    o.detail
                  ),
                  (l = a.preventDefault),
                  (a.preventDefault = function () {
                    l.call(this)
                    try {
                      Object.defineProperty(this, 'defaultPrevented', {
                        get: function () {
                          return !0
                        }
                      })
                    } catch {
                      this.defaultPrevented = !0
                    }
                  }),
                  a
                )
              }
              ;(n.prototype = window.Event.prototype), (window.CustomEvent = n)
            }
        })()
      },
      379: (i, n, s) => {
        var o,
          a = (function () {
            var x = {}
            return function (v) {
              if (x[v] === void 0) {
                var y = document.querySelector(v)
                if (
                  window.HTMLIFrameElement &&
                  y instanceof window.HTMLIFrameElement
                )
                  try {
                    y = y.contentDocument.head
                  } catch {
                    y = null
                  }
                x[v] = y
              }
              return x[v]
            }
          })(),
          l = []
        function c(x) {
          for (var v = -1, y = 0; y < l.length; y++)
            if (l[y].identifier === x) {
              v = y
              break
            }
          return v
        }
        function u(x, v) {
          for (var y = {}, E = [], C = 0; C < x.length; C++) {
            var S = x[C],
              b = v.base ? S[0] + v.base : S[0],
              O = y[b] || 0,
              M = ''.concat(b, ' ').concat(O)
            y[b] = O + 1
            var P = c(M),
              z = { css: S[1], media: S[2], sourceMap: S[3] }
            P !== -1
              ? (l[P].references++, l[P].updater(z))
              : l.push({ identifier: M, updater: T(z, v), references: 1 }),
              E.push(M)
          }
          return E
        }
        function p(x) {
          var v = document.createElement('style'),
            y = x.attributes || {}
          if (y.nonce === void 0) {
            var E = s.nc
            E && (y.nonce = E)
          }
          if (
            (Object.keys(y).forEach(function (S) {
              v.setAttribute(S, y[S])
            }),
            typeof x.insert == 'function')
          )
            x.insert(v)
          else {
            var C = a(x.insert || 'head')
            if (!C)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              )
            C.appendChild(v)
          }
          return v
        }
        var h,
          f =
            ((h = []),
            function (x, v) {
              return (
                (h[x] = v),
                h.filter(Boolean).join(`
`)
              )
            })
        function m(x, v, y, E) {
          var C = y
            ? ''
            : E.media
              ? '@media '.concat(E.media, ' {').concat(E.css, '}')
              : E.css
          if (x.styleSheet) x.styleSheet.cssText = f(v, C)
          else {
            var S = document.createTextNode(C),
              b = x.childNodes
            b[v] && x.removeChild(b[v]),
              b.length ? x.insertBefore(S, b[v]) : x.appendChild(S)
          }
        }
        function g(x, v, y) {
          var E = y.css,
            C = y.media,
            S = y.sourceMap
          if (
            (C ? x.setAttribute('media', C) : x.removeAttribute('media'),
            S &&
              typeof btoa < 'u' &&
              (E += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(S)))),
                ' */'
              )),
            x.styleSheet)
          )
            x.styleSheet.cssText = E
          else {
            for (; x.firstChild; ) x.removeChild(x.firstChild)
            x.appendChild(document.createTextNode(E))
          }
        }
        var _ = null,
          k = 0
        function T(x, v) {
          var y, E, C
          if (v.singleton) {
            var S = k++
            ;(y = _ || (_ = p(v))),
              (E = m.bind(null, y, S, !1)),
              (C = m.bind(null, y, S, !0))
          } else
            (y = p(v)),
              (E = g.bind(null, y, v)),
              (C = function () {
                ;(function (b) {
                  if (b.parentNode === null) return !1
                  b.parentNode.removeChild(b)
                })(y)
              })
          return (
            E(x),
            function (b) {
              if (b) {
                if (
                  b.css === x.css &&
                  b.media === x.media &&
                  b.sourceMap === x.sourceMap
                )
                  return
                E((x = b))
              } else C()
            }
          )
        }
        i.exports = function (x, v) {
          ;(v = v || {}).singleton ||
            typeof v.singleton == 'boolean' ||
            (v.singleton =
              (o === void 0 &&
                (o = !!(window && document && document.all && !window.atob)),
              o))
          var y = u((x = x || []), v)
          return function (E) {
            if (
              ((E = E || []),
              Object.prototype.toString.call(E) === '[object Array]')
            ) {
              for (var C = 0; C < y.length; C++) {
                var S = c(y[C])
                l[S].references--
              }
              for (var b = u(E, v), O = 0; O < y.length; O++) {
                var M = c(y[O])
                l[M].references === 0 && (l[M].updater(), l.splice(M, 1))
              }
              y = b
            }
          }
        }
      }
    },
    e = {}
  function t(i) {
    var n = e[i]
    if (n !== void 0) return n.exports
    var s = (e[i] = { id: i, exports: {} })
    return r[i](s, s.exports, t), s.exports
  }
  ;(t.n = (i) => {
    var n = i && i.__esModule ? () => i.default : () => i
    return t.d(n, { a: n }), n
  }),
    (t.d = (i, n) => {
      for (var s in n)
        t.o(n, s) &&
          !t.o(i, s) &&
          Object.defineProperty(i, s, { enumerable: !0, get: n[s] })
    }),
    (t.o = (i, n) => Object.prototype.hasOwnProperty.call(i, n)),
    (() => {
      var i = t(379),
        n = t.n(i),
        s = t(454)
      function o(l) {
        if (!l.hasAttribute('autocompleted')) {
          l.setAttribute('autocompleted', '')
          var c = new window.CustomEvent('onautocomplete', {
            bubbles: !0,
            cancelable: !0,
            detail: null
          })
          l.dispatchEvent(c) || (l.value = '')
        }
      }
      function a(l) {
        l.hasAttribute('autocompleted') &&
          (l.removeAttribute('autocompleted'),
          l.dispatchEvent(
            new window.CustomEvent('onautocomplete', {
              bubbles: !0,
              cancelable: !1,
              detail: null
            })
          ))
      }
      n()(s.Z, { insert: 'head', singleton: !1 }),
        s.Z.locals,
        t(810),
        document.addEventListener(
          'animationstart',
          function (l) {
            l.animationName === 'onautofillstart' ? o(l.target) : a(l.target)
          },
          !0
        ),
        document.addEventListener(
          'input',
          function (l) {
            l.inputType !== 'insertReplacementText' && 'data' in l
              ? a(l.target)
              : o(l.target)
          },
          !0
        )
    })()
})()
const _m = { property: 'color', defaultValue: null, inherit: !0 },
  Un = (r, e) => {
    const { property: t, defaultValue: i, inherit: n } = { ..._m, ...e },
      s = document.createElement('div')
    s.classList.add(r), document.body.appendChild(s)
    const o = window.getComputedStyle(s)[t] || i,
      a = window.getComputedStyle(s.parentElement)[t]
    return document.body.removeChild(s), !n && a && o === a ? i : o || i
  }
Un('text-primary', { defaultValue: '#3B71CA', inherit: !1 }),
  Un('text-primary-100', { defaultValue: '#9FA6B2', inherit: !1 }),
  Un('text-success', { defaultValue: '#14A44D', inherit: !1 }),
  Un('text-danger', { defaultValue: '#DC4C64', inherit: !1 }),
  Un('text-warning', { defaultValue: '#E4A11B', inherit: !1 }),
  Un('text-info', { defaultValue: '#54B4D3', inherit: !1 })
const qo = 'modal',
  vm = 'twe.modal',
  hi = `.${vm}`,
  pc = 'Escape',
  hc = { backdrop: !0, keyboard: !0, focus: !0 },
  gc = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean' },
  bm = {
    show: 'transform-none',
    static: 'scale-[1.02]',
    staticProperties: 'transition-scale duration-300 ease-in-out',
    backdrop:
      'opacity-50 transition-all duration-300 ease-in-out fixed top-0 left-0 z-[1040] bg-black w-screen h-screen'
  },
  wm = {
    show: 'string',
    static: 'string',
    staticProperties: 'string',
    backdrop: 'string'
  },
  ym = `hide${hi}`,
  xm = `hidePrevented${hi}`,
  Cm = `hidden${hi}`,
  km = `show${hi}`,
  Em = `shown${hi}`,
  mc = `resize${hi}`,
  _c = `click.dismiss${hi}`,
  vc = `keydown.dismiss${hi}`,
  Tm = `mouseup.dismiss${hi}`,
  bc = `mousedown.dismiss${hi}`,
  wc = 'data-twe-modal-open',
  yc = 'data-twe-open',
  Rr = '[data-twe-modal-dialog-ref]',
  Sm = '[data-twe-modal-body-ref]'
class rn extends mo {
  constructor(e, t, i) {
    super(e),
      (this._config = this._getConfig(t)),
      (this._classes = this._getClasses(i)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._scrollBar = new Ca()),
      (this._dialog = Oe.findOne(Rr, this._element)),
      (this._isShown = !1),
      (this._ignoreBackdropClick = !1),
      (this._isTransitioning = !1),
      (this._didInit = !1),
      this._init()
  }
  static get NAME() {
    return qo
  }
  static get Default() {
    return hc
  }
  static get getDefaultType() {
    return gc
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e)
  }
  show(e) {
    this._isShown ||
      this._isTransitioning ||
      I.trigger(this._element, km, { relatedTarget: e }).defaultPrevented ||
      ((this._isShown = !0),
      this._isAnimated() && (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.setAttribute(wc, 'true'),
      this._adjustDialog(),
      this._setEscapeEvent(),
      this._setResizeEvent(),
      I.on(this._dialog, bc, () => {
        I.one(this._element, Tm, (t) => {
          t.target === this._element && (this._ignoreBackdropClick = !0)
        })
      }),
      this._showElement(e),
      this._showBackdrop())
  }
  hide() {
    if (
      !this._isShown ||
      this._isTransitioning ||
      I.trigger(this._element, ym).defaultPrevented
    )
      return
    this._isShown = !1
    const e = this._isAnimated()
    e && (this._isTransitioning = !0),
      this._setEscapeEvent(),
      this._setResizeEvent(),
      this._focustrap.disable(),
      Oe.findOne(Rr, this._element).classList.remove(this._classes.show),
      I.off(this._element, _c),
      I.off(this._dialog, bc),
      this._queueCallback(() => this._hideModal(), this._element, e),
      this._element.removeAttribute(yc)
  }
  dispose() {
    ;[window, document, this._dialog].forEach((e) => I.off(e, hi)),
      this._backdrop.dispose(),
      this._focustrap.disable(),
      super.dispose()
  }
  handleUpdate() {
    this._adjustDialog()
  }
  _init() {
    this._didInit || (Id(rn), (this._didInit = !0))
  }
  _initializeBackDrop() {
    return new $d({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
      backdropClasses: this._classes.backdrop
    })
  }
  _initializeFocusTrap() {
    return new zd(this._element, {
      event: 'keydown',
      condition: (e) => e.key === 'Tab'
    })
  }
  _showElement(e) {
    const t = this._isAnimated(),
      i = Oe.findOne(Sm, this._dialog)
    ;(!this._element.parentNode ||
      this._element.parentNode.nodeType !== Node.ELEMENT_NODE) &&
      document.body.append(this._element),
      (this._element.style.display = 'block'),
      this._element.classList.remove('hidden'),
      this._element.removeAttribute('aria-hidden'),
      this._element.setAttribute('aria-modal', !0),
      this._element.setAttribute('role', 'dialog'),
      this._element.setAttribute(`${yc}`, 'true'),
      (this._element.scrollTop = 0)
    const n = Oe.findOne(Rr, this._element)
    n.classList.add(this._classes.show),
      n.classList.remove('opacity-0'),
      n.classList.add('opacity-100'),
      i && (i.scrollTop = 0),
      t && Ja(this._element)
    const s = () => {
      this._config.focus && this._focustrap.trap(),
        (this._isTransitioning = !1),
        I.trigger(this._element, Em, { relatedTarget: e })
    }
    this._queueCallback(s, this._dialog, t)
  }
  _setEscapeEvent() {
    this._isShown
      ? I.on(document, vc, (e) => {
          this._config.keyboard && e.key === pc
            ? (e.preventDefault(), this.hide())
            : !this._config.keyboard &&
              e.key === pc &&
              this._triggerBackdropTransition()
        })
      : I.off(this._element, vc)
  }
  _setResizeEvent() {
    this._isShown
      ? I.on(window, mc, () => this._adjustDialog())
      : I.off(window, mc)
  }
  _hideModal() {
    const e = Oe.findOne(Rr, this._element)
    e.classList.remove(this._classes.show),
      e.classList.remove('opacity-100'),
      e.classList.add('opacity-0')
    const t = va(e)
    setTimeout(() => {
      this._element.style.display = 'none'
    }, t),
      this._element.setAttribute('aria-hidden', !0),
      this._element.removeAttribute('aria-modal'),
      this._element.removeAttribute('role'),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.removeAttribute(wc),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          I.trigger(this._element, Cm)
      })
  }
  _showBackdrop(e) {
    I.on(this._element, _c, (t) => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = !1
        return
      }
      t.target === t.currentTarget &&
        (this._config.backdrop === !0
          ? this.hide()
          : this._config.backdrop === 'static' &&
            this._triggerBackdropTransition())
    }),
      this._backdrop.show(e)
  }
  _isAnimated() {
    return !!Oe.findOne(Rr, this._element)
  }
  _triggerBackdropTransition() {
    if (I.trigger(this._element, xm).defaultPrevented) return
    const { classList: e, scrollHeight: t, style: i } = this._element,
      n = t > document.documentElement.clientHeight
    if ((!n && i.overflowY === 'hidden') || e.contains(this._classes.static))
      return
    n || (i.overflowY = 'hidden'),
      e.add(...this._classes.static.split(' ')),
      e.add(...this._classes.staticProperties.split(' '))
    const s = va(this._element)
    this._queueCallback(() => {
      e.remove(this._classes.static),
        setTimeout(() => {
          e.remove(...this._classes.staticProperties.split(' '))
        }, s),
        n ||
          this._queueCallback(() => {
            i.overflowY = ''
          }, this._dialog)
    }, this._dialog),
      this._element.focus()
  }
  _getConfig(e) {
    return (
      (e = {
        ...hc,
        ...Ce.getDataAttributes(this._element),
        ...(typeof e == 'object' ? e : {})
      }),
      Pn(qo, e, gc),
      e
    )
  }
  _getClasses(e) {
    const t = Ce.getDataClassAttributes(this._element)
    return (e = { ...bm, ...t, ...e }), Pn(qo, e, wm), e
  }
  _adjustDialog() {
    const e =
        this._element.scrollHeight > document.documentElement.clientHeight,
      t = this._scrollBar.getWidth(),
      i = t > 0
    ;((!i && e && !Jt()) || (i && !e && Jt())) &&
      (this._element.style.paddingLeft = `${t}px`),
      ((i && !e && !Jt()) || (!i && e && Jt())) &&
        (this._element.style.paddingRight = `${t}px`)
  }
  _resetAdjustments() {
    ;(this._element.style.paddingLeft = ''),
      (this._element.style.paddingRight = '')
  }
  static jQueryInterface(e, t) {
    return this.each(function () {
      const i = rn.getOrCreateInstance(this, e)
      if (typeof e == 'string') {
        if (typeof i[e] > 'u') throw new TypeError(`No method named "${e}"`)
        i[e](t)
      }
    })
  }
}
const Om = (r, e) => {
    I.on(document, `click.twe.${r.NAME}`, e, function (t) {
      t.preventDefault(), r.getOrCreateInstance(this).toggle()
    })
  },
  Am = (r, e) => {
    I.on(document, `click.twe.${r.NAME}.data-api`, e, function (t) {
      ;['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
        !go(this) && r.getOrCreateInstance(this).show()
    })
  },
  Pm = (r, e) => {
    I.on(document, `click.twe.${r.NAME}.data-api`, e, function (t) {
      const i = hs(this)
      if (
        (['A', 'AREA'].includes(this.tagName) && t.preventDefault(), go(this))
      )
        return
      I.one(i, r.EVENT_HIDDEN, () => {
        ho(this) && this.focus()
      })
      const n = Oe.findOne(r.OPEN_SELECTOR)
      n && n !== i && r.getInstance(n).hide(),
        r.getOrCreateInstance(i).toggle(this)
    })
  },
  Mm = (r, e) => {
    I.on(document, `click.twe.${r.NAME}`, e, (t) => {
      t.preventDefault()
      const i = t.target.closest(e)
      r.getOrCreateInstance(i).toggle()
    })
  },
  Lm = (r, e) => {
    I.one(document, 'mousedown', e, r.autoInitial(new r()))
  },
  Dm = (r, e) => {
    I.on(document, `click.twe.${r.NAME}.data-api`, e, function (t) {
      ;(t.target.tagName === 'A' ||
        (t.delegateTarget && t.delegateTarget.tagName === 'A')) &&
        t.preventDefault()
      const i = Qu(this)
      Oe.find(i).forEach((n) => {
        r.getOrCreateInstance(n, { toggle: !1 }).toggle()
      })
    })
  },
  Rm = (r, e) => {
    ;[].slice.call(document.querySelectorAll(e)).map(function (t) {
      return new r(t)
    })
  },
  $m = (r, e) => {
    ;[].slice.call(document.querySelectorAll(e)).map(function (t) {
      return new r(t)
    })
  },
  zm = (r, e) => {
    I.on(document, `click.twe.${r.NAME}`, e, function (t) {
      const i = hs(this)
      ;['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
        I.one(i, r.EVENT_SHOW, (s) => {
          s.defaultPrevented ||
            I.one(i, r.EVENT_HIDDEN, () => {
              ho(this) && this.focus()
            })
        })
      const n = Oe.findOne(`[${r.OPEN_SELECTOR}="true"]`)
      n && r.getInstance(n).hide(), r.getOrCreateInstance(i).toggle(this)
    })
  },
  Im = {
    carousel: {
      name: 'Carousel',
      selector: '[data-twe-carousel-init]',
      isToggler: !1
    },
    input: {
      name: 'Input',
      selector: '[data-twe-input-wrapper-init]',
      isToggler: !1
    },
    scrollspy: {
      name: 'ScrollSpy',
      selector: "[data-twe-spy='scroll']",
      isToggler: !1
    },
    button: {
      name: 'Button',
      selector: "[data-twe-toggle='button']",
      isToggler: !0,
      callback: Mm
    },
    collapse: {
      name: 'Collapse',
      selector: '[data-twe-collapse-init]',
      isToggler: !0,
      callback: Dm
    },
    dropdown: {
      name: 'Dropdown',
      selector: '[data-twe-dropdown-toggle-ref]',
      isToggler: !0,
      callback: Om
    },
    ripple: {
      name: 'Ripple',
      selector: '[data-twe-ripple-init]',
      isToggler: !0,
      callback: Lm
    },
    offcanvas: {
      name: 'Offcanvas',
      selector: '[data-twe-offcanvas-toggle]',
      isToggler: !0,
      callback: Pm
    },
    tab: {
      name: 'Tab',
      selector:
        "[data-twe-toggle='tab'], [data-twe-toggle='pill'], [data-twe-toggle='list']",
      isToggler: !0,
      callback: Am
    },
    tooltip: {
      name: 'Tooltip',
      selector: "[data-twe-toggle='tooltip']",
      isToggler: !1,
      callback: Rm
    },
    popover: {
      name: 'Popover',
      selector: "[data-twe-toggle='popover']",
      isToggler: !0,
      callback: $m
    },
    modal: {
      name: 'Modal',
      selector: "[data-twe-toggle='modal']",
      isToggler: !0,
      callback: zm
    }
  },
  Bm = (r) => {
    Ph(() => {
      const e = ed()
      if (e) {
        const t = r.NAME,
          i = e.fn[t]
        ;(e.fn[t] = r.jQueryInterface),
          (e.fn[t].Constructor = r),
          (e.fn[t].noConflict = () => ((e.fn[t] = i), r.jQueryInterface))
      }
    })
  }
class Nm {
  constructor() {
    this.inits = []
  }
  get initialized() {
    return this.inits
  }
  isInited(e) {
    return this.inits.includes(e)
  }
  add(e) {
    this.isInited(e) || this.inits.push(e)
  }
}
const ka = new Nm()
let Wn
const jm = (r) => Wn[r.NAME] || null,
  Fm = (r, e) => {
    if (!r || (!e.allowReinits && ka.isInited(r.NAME))) return
    ka.add(r.NAME)
    const t = jm(r),
      i = (t == null ? void 0 : t.isToggler) || !1
    if ((Bm(r), t != null && t.advanced)) {
      t == null || t.advanced(r, t == null ? void 0 : t.selector)
      return
    }
    if (i) {
      t == null || t.callback(r, t == null ? void 0 : t.selector)
      return
    }
    Oe.find(t == null ? void 0 : t.selector).forEach((n) => {
      let s = r.getInstance(n)
      s || ((s = new r(n)), t != null && t.onInit && s[t.onInit]())
    })
  },
  Um = { allowReinits: !1, checkOtherImports: !1 }
class Hm {
  constructor(e) {
    Nl(this, 'init', (t, i) => {
      t.forEach((n) => Fm(n, i))
    }),
      Nl(this, 'initTWE', (t, i) => {
        const n = { ...Um, ...i },
          s = Object.keys(Wn).map((o) => {
            if (document.querySelector(Wn[o].selector)) {
              const a = t[Wn[o].name]
              return (
                !a &&
                  !ka.isInited(o) &&
                  n.checkOtherImports &&
                  console.warn(
                    `Please import ${Wn[o].name} from "tw-elements" package and add it to a object parameter inside "initTWE" function`
                  ),
                a
              )
            }
          })
        this.init(s, n)
      }),
      (Wn = e)
  }
}
const Vm = new Hm(Im),
  xr = Vm.initTWE,
  qm = { class: 'sticky top-0 z-20 bg-kv-green py-2.5 shadow-lg' },
  Wm = { class: 'container flex items-center justify-between' },
  Ym = { class: 'hidden items-center gap-3 lg:flex' },
  Xm = {
    class:
      'invisible fixed bottom-0 left-0 right-0 top-0 z-[1045] flex h-[200px] max-h-full max-w-full -translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out data-[twe-offcanvas-show]:transform-none dark:bg-body-dark dark:text-white',
    tabindex: '-1',
    id: 'offcanvasTop',
    'aria-labelledby': 'offcanvasTopLabel',
    'data-twe-offcanvas-init': ''
  },
  Gm = { class: 'flex items-center justify-between p-4' },
  Zm = { class: 'mb-0 font-semibold leading-normal', id: 'offcanvasTopLabel' },
  Km = { class: 'flex-grow overflow-y-auto px-4' },
  Qm = { class: 'grid grid-cols-3 justify-between gap-1' },
  Jm = {
    __name: 'Navbar',
    setup(r) {
      const e = bf(),
        t = [
          { to: '/', label: '首頁' },
          { to: '/gift', label: '互動好禮' },
          { to: '/game', label: '歡樂闖關' },
          { to: '/show', label: '精采表演' },
          { to: '/Article', label: '閱讀好文' },
          { to: '/notice', label: '詳細資訊' }
        ]
      return (
        qt(() => {
          xr({ Offcanvas: Kr })
        }),
        (i, n) => {
          const s = _s('router-link')
          return (
            J(),
            ee('nav', qm, [
              d('div', Wm, [
                d('h1', null, [
                  G(
                    s,
                    { to: '/' },
                    {
                      default: De(
                        () =>
                          n[0] ||
                          (n[0] = [
                            d(
                              'img',
                              { src: Bl, alt: 'logo', width: '100' },
                              null,
                              -1
                            )
                          ])
                      ),
                      _: 1
                    }
                  )
                ]),
                d('ul', Ym, [
                  (J(),
                  ee(
                    Et,
                    null,
                    Tt(t, (o, a) =>
                      d('li', { key: a }, [
                        G(
                          s,
                          {
                            to: o.to,
                            class: ei([
                              'rounded-full bg-white px-4 py-1 text-[1.1rem] font-bold transition hover:bg-primary-500 hover:text-white',
                              le(e).path === o.to
                                ? 'text-primary-500'
                                : 'text-kv-green'
                            ])
                          },
                          { default: De(() => [ta(_t(o.label), 1)]), _: 2 },
                          1032,
                          ['to', 'class']
                        )
                      ])
                    ),
                    64
                  ))
                ]),
                n[3] ||
                  (n[3] = pi(
                    '<div class="text-white lg:hidden"><svg data-twe-offcanvas-toggle data-twe-target="#offcanvasTop" aria-controls="offcanvasTop" data-twe-ripple-init data-twe-ripple-color="light" fill="currentColor" width="35" height="35" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><circle cx="4" cy="12" r="1"></circle><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"></rect><rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"></rect><rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"></rect></g></g></svg></div>',
                    1
                  )),
                d('div', Xm, [
                  d('div', Gm, [
                    d('h5', Zm, [
                      G(
                        s,
                        { to: '/' },
                        {
                          default: De(
                            () =>
                              n[1] ||
                              (n[1] = [
                                d(
                                  'img',
                                  { src: Bl, alt: 'logo', width: '135' },
                                  null,
                                  -1
                                )
                              ])
                          ),
                          _: 1
                        }
                      )
                    ]),
                    n[2] ||
                      (n[2] = d(
                        'button',
                        {
                          type: 'button',
                          class:
                            'box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300',
                          'data-twe-offcanvas-dismiss': '',
                          'aria-label': 'Close'
                        },
                        [
                          d('span', { class: '[&>svg]:h-6 [&>svg]:w-6' }, [
                            d(
                              'svg',
                              {
                                xmlns: 'http://www.w3.org/2000/svg',
                                fill: 'currentColor',
                                viewBox: '0 0 24 24',
                                'stroke-width': '1.5',
                                stroke: 'currentColor'
                              },
                              [
                                d('path', {
                                  'stroke-linecap': 'round',
                                  'stroke-linejoin': 'round',
                                  d: 'M6 18L18 6M6 6l12 12'
                                })
                              ]
                            )
                          ])
                        ],
                        -1
                      ))
                  ]),
                  d('div', Km, [
                    d('ul', Qm, [
                      (J(),
                      ee(
                        Et,
                        null,
                        Tt(t, (o, a) =>
                          d(
                            'li',
                            { key: a, 'data-twe-offcanvas-dismiss': '' },
                            [
                              G(
                                s,
                                {
                                  to: o.to,
                                  class: ei([
                                    'block rounded-full px-4 py-2 text-center text-[1.1rem] font-bold text-white',
                                    le(e).path === o.to
                                      ? 'bg-primary-500'
                                      : 'bg-kv-green'
                                  ])
                                },
                                {
                                  default: De(() => [ta(_t(o.label), 1)]),
                                  _: 2
                                },
                                1032,
                                ['to', 'class']
                              )
                            ]
                          )
                        ),
                        64
                      ))
                    ])
                  ])
                ])
              ])
            ])
          )
        }
      )
    }
  },
  e0 = '' + new URL('../img/speed-line.png', import.meta.url).href,
  t0 = '' + new URL('../img/hero-img.png', import.meta.url).href,
  xc = Le(!1)
function fl() {
  return {
    isLoading: xc,
    setLoading: (e) => {
      xc.value = e
    }
  }
}
function i0(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t]
    ;(i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(r, i.key, i)
  }
}
function n0(r, e, t) {
  return i0(r.prototype, e), r
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Qe,
  Vs,
  Bt,
  Zi,
  Ki,
  nr,
  Bd,
  gn,
  Qr,
  Nd,
  Ii,
  di,
  jd,
  Fd = function () {
    return (
      Qe ||
      (typeof window < 'u' && (Qe = window.gsap) && Qe.registerPlugin && Qe)
    )
  },
  Ud = 1,
  Qn = [],
  Q = [],
  Ai = [],
  Jr = Date.now,
  Ea = function (e, t) {
    return t
  },
  r0 = function () {
    var e = Qr.core,
      t = e.bridge || {},
      i = e._scrollers,
      n = e._proxies
    i.push.apply(i, Q),
      n.push.apply(n, Ai),
      (Q = i),
      (Ai = n),
      (Ea = function (o, a) {
        return t[o](a)
      })
  },
  en = function (e, t) {
    return ~Ai.indexOf(e) && Ai[Ai.indexOf(e) + 1][t]
  },
  es = function (e) {
    return !!~Nd.indexOf(e)
  },
  pt = function (e, t, i, n, s) {
    return e.addEventListener(t, i, { passive: n !== !1, capture: !!s })
  },
  ft = function (e, t, i, n) {
    return e.removeEventListener(t, i, !!n)
  },
  Ss = 'scrollLeft',
  Os = 'scrollTop',
  Ta = function () {
    return (Ii && Ii.isPressed) || Q.cache++
  },
  ro = function (e, t) {
    var i = function n(s) {
      if (s || s === 0) {
        Ud && (Bt.history.scrollRestoration = 'manual')
        var o = Ii && Ii.isPressed
        ;(s = n.v = Math.round(s) || (Ii && Ii.iOS ? 1 : 0)),
          e(s),
          (n.cacheID = Q.cache),
          o && Ea('ss', s)
      } else
        (t || Q.cache !== n.cacheID || Ea('ref')) &&
          ((n.cacheID = Q.cache), (n.v = e()))
      return n.v + n.offset
    }
    return (i.offset = 0), e && i
  },
  bt = {
    s: Ss,
    p: 'left',
    p2: 'Left',
    os: 'right',
    os2: 'Right',
    d: 'width',
    d2: 'Width',
    a: 'x',
    sc: ro(function (r) {
      return arguments.length
        ? Bt.scrollTo(r, He.sc())
        : Bt.pageXOffset || Zi[Ss] || Ki[Ss] || nr[Ss] || 0
    })
  },
  He = {
    s: Os,
    p: 'top',
    p2: 'Top',
    os: 'bottom',
    os2: 'Bottom',
    d: 'height',
    d2: 'Height',
    a: 'y',
    op: bt,
    sc: ro(function (r) {
      return arguments.length
        ? Bt.scrollTo(bt.sc(), r)
        : Bt.pageYOffset || Zi[Os] || Ki[Os] || nr[Os] || 0
    })
  },
  kt = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Qe.utils.toArray)(e)[0] ||
      (typeof e == 'string' && Qe.config().nullTargetWarn !== !1
        ? console.warn('Element not found:', e)
        : null)
    )
  },
  sn = function (e, t) {
    var i = t.s,
      n = t.sc
    es(e) && (e = Zi.scrollingElement || Ki)
    var s = Q.indexOf(e),
      o = n === He.sc ? 1 : 2
    !~s && (s = Q.push(e) - 1), Q[s + o] || pt(e, 'scroll', Ta)
    var a = Q[s + o],
      l =
        a ||
        (Q[s + o] =
          ro(en(e, i), !0) ||
          (es(e)
            ? n
            : ro(function (c) {
                return arguments.length ? (e[i] = c) : e[i]
              })))
    return (
      (l.target = e),
      a || (l.smooth = Qe.getProperty(e, 'scrollBehavior') === 'smooth'),
      l
    )
  },
  Sa = function (e, t, i) {
    var n = e,
      s = e,
      o = Jr(),
      a = o,
      l = t || 50,
      c = Math.max(500, l * 3),
      u = function (m, g) {
        var _ = Jr()
        g || _ - o > l
          ? ((s = n), (n = m), (a = o), (o = _))
          : i
            ? (n += m)
            : (n = s + ((m - s) / (_ - a)) * (o - a))
      },
      p = function () {
        ;(s = n = i ? 0 : n), (a = o = 0)
      },
      h = function (m) {
        var g = a,
          _ = s,
          k = Jr()
        return (
          (m || m === 0) && m !== n && u(m),
          o === a || k - a > c
            ? 0
            : ((n + (i ? _ : -_)) / ((i ? k : o) - g)) * 1e3
        )
      }
    return { update: u, reset: p, getVelocity: h }
  },
  $r = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    )
  },
  Cc = function (e) {
    var t = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e)
    return Math.abs(t) >= Math.abs(i) ? t : i
  },
  Hd = function () {
    ;(Qr = Qe.core.globals().ScrollTrigger), Qr && Qr.core && r0()
  },
  Vd = function (e) {
    return (
      (Qe = e || Fd()),
      !Vs &&
        Qe &&
        typeof document < 'u' &&
        document.body &&
        ((Bt = window),
        (Zi = document),
        (Ki = Zi.documentElement),
        (nr = Zi.body),
        (Nd = [Bt, Zi, Ki, nr]),
        Qe.utils.clamp,
        (jd = Qe.core.context || function () {}),
        (gn = 'onpointerenter' in nr ? 'pointer' : 'mouse'),
        (Bd = $e.isTouch =
          Bt.matchMedia &&
          Bt.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in Bt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (di = $e.eventTypes =
          (
            'ontouchstart' in Ki
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in Ki
                ? 'pointerdown,pointermove,pointercancel,pointerup'
                : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (Ud = 0)
        }, 500),
        Hd(),
        (Vs = 1)),
      Vs
    )
  }
bt.op = He
Q.cache = 0
var $e = (function () {
  function r(t) {
    this.init(t)
  }
  var e = r.prototype
  return (
    (e.init = function (i) {
      Vs || Vd(Qe) || console.warn('Please gsap.registerPlugin(Observer)'),
        Qr || Hd()
      var n = i.tolerance,
        s = i.dragMinimum,
        o = i.type,
        a = i.target,
        l = i.lineHeight,
        c = i.debounce,
        u = i.preventDefault,
        p = i.onStop,
        h = i.onStopDelay,
        f = i.ignore,
        m = i.wheelSpeed,
        g = i.event,
        _ = i.onDragStart,
        k = i.onDragEnd,
        T = i.onDrag,
        x = i.onPress,
        v = i.onRelease,
        y = i.onRight,
        E = i.onLeft,
        C = i.onUp,
        S = i.onDown,
        b = i.onChangeX,
        O = i.onChangeY,
        M = i.onChange,
        P = i.onToggleX,
        z = i.onToggleY,
        F = i.onHover,
        H = i.onHoverEnd,
        B = i.onMove,
        $ = i.ignoreCheck,
        D = i.isNormalizer,
        V = i.onGestureStart,
        w = i.onGestureEnd,
        te = i.onWheel,
        me = i.onEnable,
        Je = i.onDisable,
        ae = i.onClick,
        ce = i.scrollSpeed,
        ze = i.capture,
        fe = i.allowClicks,
        Te = i.lockAxis,
        Ve = i.onLockAxis
      ;(this.target = a = kt(a) || Ki),
        (this.vars = i),
        f && (f = Qe.utils.toArray(f)),
        (n = n || 1e-9),
        (s = s || 0),
        (m = m || 1),
        (ce = ce || 1),
        (o = o || 'wheel,touch,pointer'),
        (c = c !== !1),
        l || (l = parseFloat(Bt.getComputedStyle(nr).lineHeight) || 22)
      var gi,
        je,
        Lt,
        ie,
        we,
        et,
        tt,
        A = this,
        dt = 0,
        ri = 0,
        it = i.passive || !u,
        he = sn(a, bt),
        si = sn(a, He),
        mi = he(),
        _i = si(),
        Pe =
          ~o.indexOf('touch') &&
          !~o.indexOf('pointer') &&
          di[0] === 'pointerdown',
        oi = es(a),
        _e = a.ownerDocument || Zi,
        Ct = [0, 0, 0],
        Wt = [0, 0, 0],
        Li = 0,
        Tr = function () {
          return (Li = Jr())
        },
        Ie = function (j, oe) {
          return (
            ((A.event = j) && f && ~f.indexOf(j.target)) ||
            (oe && Pe && j.pointerType !== 'touch') ||
            ($ && $(j, oe))
          )
        },
        ys = function () {
          A._vx.reset(), A._vy.reset(), je.pause(), p && p(A)
        },
        Vi = function () {
          var j = (A.deltaX = Cc(Ct)),
            oe = (A.deltaY = Cc(Wt)),
            L = Math.abs(j) >= n,
            Y = Math.abs(oe) >= n
          M && (L || Y) && M(A, j, oe, Ct, Wt),
            L &&
              (y && A.deltaX > 0 && y(A),
              E && A.deltaX < 0 && E(A),
              b && b(A),
              P && A.deltaX < 0 != dt < 0 && P(A),
              (dt = A.deltaX),
              (Ct[0] = Ct[1] = Ct[2] = 0)),
            Y &&
              (S && A.deltaY > 0 && S(A),
              C && A.deltaY < 0 && C(A),
              O && O(A),
              z && A.deltaY < 0 != ri < 0 && z(A),
              (ri = A.deltaY),
              (Wt[0] = Wt[1] = Wt[2] = 0)),
            (ie || Lt) && (B && B(A), Lt && (T(A), (Lt = !1)), (ie = !1)),
            et && !(et = !1) && Ve && Ve(A),
            we && (te(A), (we = !1)),
            (gi = 0)
        },
        Bn = function (j, oe, L) {
          ;(Ct[L] += j),
            (Wt[L] += oe),
            A._vx.update(j),
            A._vy.update(oe),
            c ? gi || (gi = requestAnimationFrame(Vi)) : Vi()
        },
        Nn = function (j, oe) {
          Te &&
            !tt &&
            ((A.axis = tt = Math.abs(j) > Math.abs(oe) ? 'x' : 'y'), (et = !0)),
            tt !== 'y' && ((Ct[2] += j), A._vx.update(j, !0)),
            tt !== 'x' && ((Wt[2] += oe), A._vy.update(oe, !0)),
            c ? gi || (gi = requestAnimationFrame(Vi)) : Vi()
        },
        qi = function (j) {
          if (!Ie(j, 1)) {
            j = $r(j, u)
            var oe = j.clientX,
              L = j.clientY,
              Y = oe - A.x,
              N = L - A.y,
              q = A.isDragging
            ;(A.x = oe),
              (A.y = L),
              (q ||
                Math.abs(A.startX - oe) >= s ||
                Math.abs(A.startY - L) >= s) &&
                (T && (Lt = !0),
                q || (A.isDragging = !0),
                Nn(Y, N),
                q || (_ && _(A)))
          }
        },
        ln = (A.onPress = function (W) {
          Ie(W, 1) ||
            (W && W.button) ||
            ((A.axis = tt = null),
            je.pause(),
            (A.isPressed = !0),
            (W = $r(W)),
            (dt = ri = 0),
            (A.startX = A.x = W.clientX),
            (A.startY = A.y = W.clientY),
            A._vx.reset(),
            A._vy.reset(),
            pt(D ? a : _e, di[1], qi, it, !0),
            (A.deltaX = A.deltaY = 0),
            x && x(A))
        }),
        K = (A.onRelease = function (W) {
          if (!Ie(W, 1)) {
            ft(D ? a : _e, di[1], qi, !0)
            var j = !isNaN(A.y - A.startY),
              oe = A.isDragging,
              L =
                oe &&
                (Math.abs(A.x - A.startX) > 3 || Math.abs(A.y - A.startY) > 3),
              Y = $r(W)
            !L &&
              j &&
              (A._vx.reset(),
              A._vy.reset(),
              u &&
                fe &&
                Qe.delayedCall(0.08, function () {
                  if (Jr() - Li > 300 && !W.defaultPrevented) {
                    if (W.target.click) W.target.click()
                    else if (_e.createEvent) {
                      var N = _e.createEvent('MouseEvents')
                      N.initMouseEvent(
                        'click',
                        !0,
                        !0,
                        Bt,
                        1,
                        Y.screenX,
                        Y.screenY,
                        Y.clientX,
                        Y.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        W.target.dispatchEvent(N)
                    }
                  }
                })),
              (A.isDragging = A.isGesturing = A.isPressed = !1),
              p && oe && !D && je.restart(!0),
              k && oe && k(A),
              v && v(A, L)
          }
        }),
        cn = function (j) {
          return (
            j.touches &&
            j.touches.length > 1 &&
            (A.isGesturing = !0) &&
            V(j, A.isDragging)
          )
        },
        ai = function () {
          return (A.isGesturing = !1) || w(A)
        },
        li = function (j) {
          if (!Ie(j)) {
            var oe = he(),
              L = si()
            Bn((oe - mi) * ce, (L - _i) * ce, 1),
              (mi = oe),
              (_i = L),
              p && je.restart(!0)
          }
        },
        ci = function (j) {
          if (!Ie(j)) {
            ;(j = $r(j, u)), te && (we = !0)
            var oe =
              (j.deltaMode === 1 ? l : j.deltaMode === 2 ? Bt.innerHeight : 1) *
              m
            Bn(j.deltaX * oe, j.deltaY * oe, 0), p && !D && je.restart(!0)
          }
        },
        un = function (j) {
          if (!Ie(j)) {
            var oe = j.clientX,
              L = j.clientY,
              Y = oe - A.x,
              N = L - A.y
            ;(A.x = oe),
              (A.y = L),
              (ie = !0),
              p && je.restart(!0),
              (Y || N) && Nn(Y, N)
          }
        },
        jn = function (j) {
          ;(A.event = j), F(A)
        },
        Di = function (j) {
          ;(A.event = j), H(A)
        },
        Sr = function (j) {
          return Ie(j) || ($r(j, u) && ae(A))
        }
      ;(je = A._dc = Qe.delayedCall(h || 0.25, ys).pause()),
        (A.deltaX = A.deltaY = 0),
        (A._vx = Sa(0, 50, !0)),
        (A._vy = Sa(0, 50, !0)),
        (A.scrollX = he),
        (A.scrollY = si),
        (A.isDragging = A.isGesturing = A.isPressed = !1),
        jd(this),
        (A.enable = function (W) {
          return (
            A.isEnabled ||
              (pt(oi ? _e : a, 'scroll', Ta),
              o.indexOf('scroll') >= 0 && pt(oi ? _e : a, 'scroll', li, it, ze),
              o.indexOf('wheel') >= 0 && pt(a, 'wheel', ci, it, ze),
              ((o.indexOf('touch') >= 0 && Bd) || o.indexOf('pointer') >= 0) &&
                (pt(a, di[0], ln, it, ze),
                pt(_e, di[2], K),
                pt(_e, di[3], K),
                fe && pt(a, 'click', Tr, !0, !0),
                ae && pt(a, 'click', Sr),
                V && pt(_e, 'gesturestart', cn),
                w && pt(_e, 'gestureend', ai),
                F && pt(a, gn + 'enter', jn),
                H && pt(a, gn + 'leave', Di),
                B && pt(a, gn + 'move', un)),
              (A.isEnabled = !0),
              W && W.type && ln(W),
              me && me(A)),
            A
          )
        }),
        (A.disable = function () {
          A.isEnabled &&
            (Qn.filter(function (W) {
              return W !== A && es(W.target)
            }).length || ft(oi ? _e : a, 'scroll', Ta),
            A.isPressed &&
              (A._vx.reset(), A._vy.reset(), ft(D ? a : _e, di[1], qi, !0)),
            ft(oi ? _e : a, 'scroll', li, ze),
            ft(a, 'wheel', ci, ze),
            ft(a, di[0], ln, ze),
            ft(_e, di[2], K),
            ft(_e, di[3], K),
            ft(a, 'click', Tr, !0),
            ft(a, 'click', Sr),
            ft(_e, 'gesturestart', cn),
            ft(_e, 'gestureend', ai),
            ft(a, gn + 'enter', jn),
            ft(a, gn + 'leave', Di),
            ft(a, gn + 'move', un),
            (A.isEnabled = A.isPressed = A.isDragging = !1),
            Je && Je(A))
        }),
        (A.kill = A.revert =
          function () {
            A.disable()
            var W = Qn.indexOf(A)
            W >= 0 && Qn.splice(W, 1), Ii === A && (Ii = 0)
          }),
        Qn.push(A),
        D && es(a) && (Ii = A),
        A.enable(g)
    }),
    n0(r, [
      {
        key: 'velocityX',
        get: function () {
          return this._vx.getVelocity()
        }
      },
      {
        key: 'velocityY',
        get: function () {
          return this._vy.getVelocity()
        }
      }
    ]),
    r
  )
})()
$e.version = '3.12.5'
$e.create = function (r) {
  return new $e(r)
}
$e.register = Vd
$e.getAll = function () {
  return Qn.slice()
}
$e.getById = function (r) {
  return Qn.filter(function (e) {
    return e.vars.id === r
  })[0]
}
Fd() && Qe.registerPlugin($e)
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var R,
  Yn,
  re,
  xe,
  fi,
  ge,
  qd,
  so,
  gs,
  ts,
  jr,
  As,
  ot,
  yo,
  Oa,
  gt,
  kc,
  Ec,
  Xn,
  Wd,
  Wo,
  Yd,
  ht,
  Aa,
  Xd,
  Gd,
  Wi,
  Pa,
  pl,
  rr,
  hl,
  oo,
  Ma,
  Yo,
  Ps = 1,
  at = Date.now,
  Xo = at(),
  ii = 0,
  Fr = 0,
  Tc = function (e, t, i) {
    var n = $t(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1)
    return (i['_' + t + 'Clamp'] = n), n ? e.substr(6, e.length - 7) : e
  },
  Sc = function (e, t) {
    return t && (!$t(e) || e.substr(0, 6) !== 'clamp(') ? 'clamp(' + e + ')' : e
  },
  s0 = function r() {
    return Fr && requestAnimationFrame(r)
  },
  Oc = function () {
    return (yo = 1)
  },
  Ac = function () {
    return (yo = 0)
  },
  Ci = function (e) {
    return e
  },
  Ur = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  Zd = function () {
    return typeof window < 'u'
  },
  Kd = function () {
    return R || (Zd() && (R = window.gsap) && R.registerPlugin && R)
  },
  Dn = function (e) {
    return !!~qd.indexOf(e)
  },
  Qd = function (e) {
    return (
      (e === 'Height' ? hl : re['inner' + e]) ||
      fi['client' + e] ||
      ge['client' + e]
    )
  },
  Jd = function (e) {
    return (
      en(e, 'getBoundingClientRect') ||
      (Dn(e)
        ? function () {
            return (Gs.width = re.innerWidth), (Gs.height = hl), Gs
          }
        : function () {
            return zi(e)
          })
    )
  },
  o0 = function (e, t, i) {
    var n = i.d,
      s = i.d2,
      o = i.a
    return (o = en(e, 'getBoundingClientRect'))
      ? function () {
          return o()[n]
        }
      : function () {
          return (t ? Qd(s) : e['client' + s]) || 0
        }
  },
  a0 = function (e, t) {
    return !t || ~Ai.indexOf(e)
      ? Jd(e)
      : function () {
          return Gs
        }
  },
  Ti = function (e, t) {
    var i = t.s,
      n = t.d2,
      s = t.d,
      o = t.a
    return Math.max(
      0,
      (i = 'scroll' + n) && (o = en(e, i))
        ? o() - Jd(e)()[s]
        : Dn(e)
          ? (fi[i] || ge[i]) - Qd(n)
          : e[i] - e['offset' + n]
    )
  },
  Ms = function (e, t) {
    for (var i = 0; i < Xn.length; i += 3)
      (!t || ~t.indexOf(Xn[i + 1])) && e(Xn[i], Xn[i + 1], Xn[i + 2])
  },
  $t = function (e) {
    return typeof e == 'string'
  },
  wt = function (e) {
    return typeof e == 'function'
  },
  Hr = function (e) {
    return typeof e == 'number'
  },
  mn = function (e) {
    return typeof e == 'object'
  },
  zr = function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause()
  },
  Go = function (e, t) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return t(e)
          })
        : t(e)
      i && i.totalTime && (e.callbackAnimation = i)
    }
  },
  Hn = Math.abs,
  ef = 'left',
  tf = 'top',
  gl = 'right',
  ml = 'bottom',
  En = 'width',
  Tn = 'height',
  is = 'Right',
  ns = 'Left',
  rs = 'Top',
  ss = 'Bottom',
  Be = 'padding',
  Gt = 'margin',
  vr = 'Width',
  _l = 'Height',
  Ue = 'px',
  Zt = function (e) {
    return re.getComputedStyle(e)
  },
  l0 = function (e) {
    var t = Zt(e).position
    e.style.position = t === 'absolute' || t === 'fixed' ? t : 'relative'
  },
  Pc = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i])
    return e
  },
  zi = function (e, t) {
    var i =
        t &&
        Zt(e)[Oa] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
        R.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1),
      n = e.getBoundingClientRect()
    return i && i.progress(0).kill(), n
  },
  ao = function (e, t) {
    var i = t.d2
    return e['offset' + i] || e['client' + i] || 0
  },
  nf = function (e) {
    var t = [],
      i = e.labels,
      n = e.duration(),
      s
    for (s in i) t.push(i[s] / n)
    return t
  },
  c0 = function (e) {
    return function (t) {
      return R.utils.snap(nf(e), t)
    }
  },
  vl = function (e) {
    var t = R.utils.snap(e),
      i =
        Array.isArray(e) &&
        e.slice(0).sort(function (n, s) {
          return n - s
        })
    return i
      ? function (n, s, o) {
          o === void 0 && (o = 0.001)
          var a
          if (!s) return t(n)
          if (s > 0) {
            for (n -= o, a = 0; a < i.length; a++) if (i[a] >= n) return i[a]
            return i[a - 1]
          } else for (a = i.length, n += o; a--; ) if (i[a] <= n) return i[a]
          return i[0]
        }
      : function (n, s, o) {
          o === void 0 && (o = 0.001)
          var a = t(n)
          return !s || Math.abs(a - n) < o || a - n < 0 == s < 0
            ? a
            : t(s < 0 ? n - e : n + e)
        }
  },
  u0 = function (e) {
    return function (t, i) {
      return vl(nf(e))(t, i.direction)
    }
  },
  Ls = function (e, t, i, n) {
    return i.split(',').forEach(function (s) {
      return e(t, s, n)
    })
  },
  Ye = function (e, t, i, n, s) {
    return e.addEventListener(t, i, { passive: !n, capture: !!s })
  },
  We = function (e, t, i, n) {
    return e.removeEventListener(t, i, !!n)
  },
  Ds = function (e, t, i) {
    ;(i = i && i.wheelHandler), i && (e(t, 'wheel', i), e(t, 'touchmove', i))
  },
  Mc = {
    startColor: 'green',
    endColor: 'red',
    indent: 0,
    fontSize: '16px',
    fontWeight: 'normal'
  },
  Rs = { toggleActions: 'play', anticipatePin: 0 },
  lo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  qs = function (e, t) {
    if ($t(e)) {
      var i = e.indexOf('='),
        n = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0
      ~i && (e.indexOf('%') > i && (n *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          n +
          (e in lo
            ? lo[e] * t
            : ~e.indexOf('%')
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0))
    }
    return e
  },
  $s = function (e, t, i, n, s, o, a, l) {
    var c = s.startColor,
      u = s.endColor,
      p = s.fontSize,
      h = s.indent,
      f = s.fontWeight,
      m = xe.createElement('div'),
      g = Dn(i) || en(i, 'pinType') === 'fixed',
      _ = e.indexOf('scroller') !== -1,
      k = g ? ge : i,
      T = e.indexOf('start') !== -1,
      x = T ? c : u,
      v =
        'border-color:' +
        x +
        ';font-size:' +
        p +
        ';color:' +
        x +
        ';font-weight:' +
        f +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
    return (
      (v += 'position:' + ((_ || l) && g ? 'fixed;' : 'absolute;')),
      (_ || l || !g) &&
        (v += (n === He ? gl : ml) + ':' + (o + parseFloat(h)) + 'px;'),
      a &&
        (v +=
          'box-sizing:border-box;text-align:left;width:' +
          a.offsetWidth +
          'px;'),
      (m._isStart = T),
      m.setAttribute('class', 'gsap-marker-' + e + (t ? ' marker-' + t : '')),
      (m.style.cssText = v),
      (m.innerText = t || t === 0 ? e + '-' + t : e),
      k.children[0] ? k.insertBefore(m, k.children[0]) : k.appendChild(m),
      (m._offset = m['offset' + n.op.d2]),
      Ws(m, 0, n, T),
      m
    )
  },
  Ws = function (e, t, i, n) {
    var s = { display: 'block' },
      o = i[n ? 'os2' : 'p2'],
      a = i[n ? 'p2' : 'os2']
    ;(e._isFlipped = n),
      (s[i.a + 'Percent'] = n ? -100 : 0),
      (s[i.a] = n ? '1px' : 0),
      (s['border' + o + vr] = 1),
      (s['border' + a + vr] = 0),
      (s[i.p] = t + 'px'),
      R.set(e, s)
  },
  X = [],
  La = {},
  ms,
  Lc = function () {
    return at() - ii > 34 && (ms || (ms = requestAnimationFrame(Ni)))
  },
  Vn = function () {
    ;(!ht || !ht.isPressed || ht.startX > ge.clientWidth) &&
      (Q.cache++,
      ht ? ms || (ms = requestAnimationFrame(Ni)) : Ni(),
      ii || $n('scrollStart'),
      (ii = at()))
  },
  Zo = function () {
    ;(Gd = re.innerWidth), (Xd = re.innerHeight)
  },
  Vr = function () {
    Q.cache++,
      !ot &&
        !Yd &&
        !xe.fullscreenElement &&
        !xe.webkitFullscreenElement &&
        (!Aa ||
          Gd !== re.innerWidth ||
          Math.abs(re.innerHeight - Xd) > re.innerHeight * 0.25) &&
        so.restart(!0)
  },
  Rn = {},
  d0 = [],
  rf = function r() {
    return We(U, 'scrollEnd', r) || bn(!0)
  },
  $n = function (e) {
    return (
      (Rn[e] &&
        Rn[e].map(function (t) {
          return t()
        })) ||
      d0
    )
  },
  Rt = [],
  sf = function (e) {
    for (var t = 0; t < Rt.length; t += 5)
      (!e || (Rt[t + 4] && Rt[t + 4].query === e)) &&
        ((Rt[t].style.cssText = Rt[t + 1]),
        Rt[t].getBBox && Rt[t].setAttribute('transform', Rt[t + 2] || ''),
        (Rt[t + 3].uncache = 1))
  },
  bl = function (e, t) {
    var i
    for (gt = 0; gt < X.length; gt++)
      (i = X[gt]),
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0))
    ;(oo = !0), t && sf(t), t || $n('revert')
  },
  of = function (e, t) {
    Q.cache++,
      (t || !mt) &&
        Q.forEach(function (i) {
          return wt(i) && i.cacheID++ && (i.rec = 0)
        }),
      $t(e) && (re.history.scrollRestoration = pl = e)
  },
  mt,
  Sn = 0,
  Dc,
  f0 = function () {
    if (Dc !== Sn) {
      var e = (Dc = Sn)
      requestAnimationFrame(function () {
        return e === Sn && bn(!0)
      })
    }
  },
  af = function () {
    ge.appendChild(rr),
      (hl = (!ht && rr.offsetHeight) || re.innerHeight),
      ge.removeChild(rr)
  },
  Rc = function (e) {
    return gs(
      '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end'
    ).forEach(function (t) {
      return (t.style.display = e ? 'none' : 'block')
    })
  },
  bn = function (e, t) {
    if (ii && !e && !oo) {
      Ye(U, 'scrollEnd', rf)
      return
    }
    af(),
      (mt = U.isRefreshing = !0),
      Q.forEach(function (n) {
        return wt(n) && ++n.cacheID && (n.rec = n())
      })
    var i = $n('refreshInit')
    Wd && U.sort(),
      t || bl(),
      Q.forEach(function (n) {
        wt(n) && (n.smooth && (n.target.style.scrollBehavior = 'auto'), n(0))
      }),
      X.slice(0).forEach(function (n) {
        return n.refresh()
      }),
      (oo = !1),
      X.forEach(function (n) {
        if (n._subPinOffset && n.pin) {
          var s = n.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
            o = n.pin[s]
          n.revert(!0, 1), n.adjustPinSpacing(n.pin[s] - o), n.refresh()
        }
      }),
      (Ma = 1),
      Rc(!0),
      X.forEach(function (n) {
        var s = Ti(n.scroller, n._dir),
          o = n.vars.end === 'max' || (n._endClamp && n.end > s),
          a = n._startClamp && n.start >= s
        ;(o || a) &&
          n.setPositions(
            a ? s - 1 : n.start,
            o ? Math.max(a ? s : n.start + 1, s) : n.end,
            !0
          )
      }),
      Rc(!1),
      (Ma = 0),
      i.forEach(function (n) {
        return n && n.render && n.render(-1)
      }),
      Q.forEach(function (n) {
        wt(n) &&
          (n.smooth &&
            requestAnimationFrame(function () {
              return (n.target.style.scrollBehavior = 'smooth')
            }),
          n.rec && n(n.rec))
      }),
      of(pl, 1),
      so.pause(),
      Sn++,
      (mt = 2),
      Ni(2),
      X.forEach(function (n) {
        return wt(n.vars.onRefresh) && n.vars.onRefresh(n)
      }),
      (mt = U.isRefreshing = !1),
      $n('refresh')
  },
  Da = 0,
  Ys = 1,
  os,
  Ni = function (e) {
    if (e === 2 || (!mt && !oo)) {
      ;(U.isUpdating = !0), os && os.update(0)
      var t = X.length,
        i = at(),
        n = i - Xo >= 50,
        s = t && X[0].scroll()
      if (
        ((Ys = Da > s ? -1 : 1),
        mt || (Da = s),
        n &&
          (ii && !yo && i - ii > 200 && ((ii = 0), $n('scrollEnd')),
          (jr = Xo),
          (Xo = i)),
        Ys < 0)
      ) {
        for (gt = t; gt-- > 0; ) X[gt] && X[gt].update(0, n)
        Ys = 1
      } else for (gt = 0; gt < t; gt++) X[gt] && X[gt].update(0, n)
      U.isUpdating = !1
    }
    ms = 0
  },
  Ra = [
    ef,
    tf,
    ml,
    gl,
    Gt + ss,
    Gt + is,
    Gt + rs,
    Gt + ns,
    'display',
    'flexShrink',
    'float',
    'zIndex',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRowStart',
    'gridRowEnd',
    'gridArea',
    'justifySelf',
    'alignSelf',
    'placeSelf',
    'order'
  ],
  Xs = Ra.concat([
    En,
    Tn,
    'boxSizing',
    'max' + vr,
    'max' + _l,
    'position',
    Gt,
    Be,
    Be + rs,
    Be + is,
    Be + ss,
    Be + ns
  ]),
  p0 = function (e, t, i) {
    sr(i)
    var n = e._gsap
    if (n.spacerIsNative) sr(n.spacerState)
    else if (e._gsap.swappedIn) {
      var s = t.parentNode
      s && (s.insertBefore(e, t), s.removeChild(t))
    }
    e._gsap.swappedIn = !1
  },
  Ko = function (e, t, i, n) {
    if (!e._gsap.swappedIn) {
      for (var s = Ra.length, o = t.style, a = e.style, l; s--; )
        (l = Ra[s]), (o[l] = i[l])
      ;(o.position = i.position === 'absolute' ? 'absolute' : 'relative'),
        i.display === 'inline' && (o.display = 'inline-block'),
        (a[ml] = a[gl] = 'auto'),
        (o.flexBasis = i.flexBasis || 'auto'),
        (o.overflow = 'visible'),
        (o.boxSizing = 'border-box'),
        (o[En] = ao(e, bt) + Ue),
        (o[Tn] = ao(e, He) + Ue),
        (o[Be] = a[Gt] = a[tf] = a[ef] = '0'),
        sr(n),
        (a[En] = a['max' + vr] = i[En]),
        (a[Tn] = a['max' + _l] = i[Tn]),
        (a[Be] = i[Be]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0)
    }
  },
  h0 = /([A-Z])/g,
  sr = function (e) {
    if (e) {
      var t = e.t.style,
        i = e.length,
        n = 0,
        s,
        o
      for ((e.t._gsap || R.core.getCache(e.t)).uncache = 1; n < i; n += 2)
        (o = e[n + 1]),
          (s = e[n]),
          o
            ? (t[s] = o)
            : t[s] && t.removeProperty(s.replace(h0, '-$1').toLowerCase())
    }
  },
  zs = function (e) {
    for (var t = Xs.length, i = e.style, n = [], s = 0; s < t; s++)
      n.push(Xs[s], i[Xs[s]])
    return (n.t = e), n
  },
  g0 = function (e, t, i) {
    for (var n = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
      (a = e[o]), n.push(a, a in t ? t[a] : e[o + 1])
    return (n.t = e.t), n
  },
  Gs = { left: 0, top: 0 },
  $c = function (e, t, i, n, s, o, a, l, c, u, p, h, f, m) {
    wt(e) && (e = e(l)),
      $t(e) &&
        e.substr(0, 3) === 'max' &&
        (e = h + (e.charAt(4) === '=' ? qs('0' + e.substr(3), i) : 0))
    var g = f ? f.time() : 0,
      _,
      k,
      T
    if ((f && f.seek(0), isNaN(e) || (e = +e), Hr(e)))
      f &&
        (e = R.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          h,
          e
        )),
        a && Ws(a, i, n, !0)
    else {
      wt(t) && (t = t(l))
      var x = (e || '0').split(' '),
        v,
        y,
        E,
        C
      ;(T = kt(t, l) || ge),
        (v = zi(T) || {}),
        (!v || (!v.left && !v.top)) &&
          Zt(T).display === 'none' &&
          ((C = T.style.display),
          (T.style.display = 'block'),
          (v = zi(T)),
          C ? (T.style.display = C) : T.style.removeProperty('display')),
        (y = qs(x[0], v[n.d])),
        (E = qs(x[1] || '0', i)),
        (e = v[n.p] - c[n.p] - u + y + s - E),
        a && Ws(a, E, n, i - E < 20 || (a._isStart && E > 20)),
        (i -= i - E)
    }
    if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), o)) {
      var S = e + i,
        b = o._isStart
      ;(_ = 'scroll' + n.d2),
        Ws(
          o,
          S,
          n,
          (b && S > 20) ||
            (!b && (p ? Math.max(ge[_], fi[_]) : o.parentNode[_]) <= S + 1)
        ),
        p &&
          ((c = zi(a)),
          p && (o.style[n.op.p] = c[n.op.p] - n.op.m - o._offset + Ue))
    }
    return (
      f &&
        T &&
        ((_ = zi(T)),
        f.seek(h),
        (k = zi(T)),
        (f._caScrollDist = _[n.p] - k[n.p]),
        (e = (e / f._caScrollDist) * h)),
      f && f.seek(g),
      f ? e : Math.round(e)
    )
  },
  m0 = /(webkit|moz|length|cssText|inset)/i,
  zc = function (e, t, i, n) {
    if (e.parentNode !== t) {
      var s = e.style,
        o,
        a
      if (t === ge) {
        ;(e._stOrig = s.cssText), (a = Zt(e))
        for (o in a)
          !+o &&
            !m0.test(o) &&
            a[o] &&
            typeof s[o] == 'string' &&
            o !== '0' &&
            (s[o] = a[o])
        ;(s.top = i), (s.left = n)
      } else s.cssText = e._stOrig
      ;(R.core.getCache(e).uncache = 1), t.appendChild(e)
    }
  },
  lf = function (e, t, i) {
    var n = t,
      s = n
    return function (o) {
      var a = Math.round(e())
      return (
        a !== n &&
          a !== s &&
          Math.abs(a - n) > 3 &&
          Math.abs(a - s) > 3 &&
          ((o = a), i && i()),
        (s = n),
        (n = o),
        o
      )
    }
  },
  Is = function (e, t, i) {
    var n = {}
    ;(n[t.p] = '+=' + i), R.set(e, n)
  },
  Ic = function (e, t) {
    var i = sn(e, t),
      n = '_scroll' + t.p2,
      s = function o(a, l, c, u, p) {
        var h = o.tween,
          f = l.onComplete,
          m = {}
        c = c || i()
        var g = lf(i, c, function () {
          h.kill(), (o.tween = 0)
        })
        return (
          (p = (u && p) || 0),
          (u = u || a - c),
          h && h.kill(),
          (l[n] = a),
          (l.inherit = !1),
          (l.modifiers = m),
          (m[n] = function () {
            return g(c + u * h.ratio + p * h.ratio * h.ratio)
          }),
          (l.onUpdate = function () {
            Q.cache++, o.tween && Ni()
          }),
          (l.onComplete = function () {
            ;(o.tween = 0), f && f.call(h)
          }),
          (h = o.tween = R.to(e, l)),
          h
        )
      }
    return (
      (e[n] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0)
      }),
      Ye(e, 'wheel', i.wheelHandler),
      U.isTouch && Ye(e, 'touchmove', i.wheelHandler),
      s
    )
  },
  U = (function () {
    function r(t, i) {
      Yn ||
        r.register(R) ||
        console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
        Pa(this),
        this.init(t, i)
    }
    var e = r.prototype
    return (
      (e.init = function (i, n) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Fr)
        ) {
          this.update = this.refresh = this.kill = Ci
          return
        }
        i = Pc($t(i) || Hr(i) || i.nodeType ? { trigger: i } : i, Rs)
        var s = i,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          c = s.onToggle,
          u = s.onRefresh,
          p = s.scrub,
          h = s.trigger,
          f = s.pin,
          m = s.pinSpacing,
          g = s.invalidateOnRefresh,
          _ = s.anticipatePin,
          k = s.onScrubComplete,
          T = s.onSnapComplete,
          x = s.once,
          v = s.snap,
          y = s.pinReparent,
          E = s.pinSpacer,
          C = s.containerAnimation,
          S = s.fastScrollEnd,
          b = s.preventOverlaps,
          O =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? bt
              : He,
          M = !p && p !== 0,
          P = kt(i.scroller || re),
          z = R.core.getCache(P),
          F = Dn(P),
          H =
            ('pinType' in i
              ? i.pinType
              : en(P, 'pinType') || (F && 'fixed')) === 'fixed',
          B = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          $ = M && i.toggleActions.split(' '),
          D = 'markers' in i ? i.markers : Rs.markers,
          V = F ? 0 : parseFloat(Zt(P)['border' + O.p2 + vr]) || 0,
          w = this,
          te =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(w)
            },
          me = o0(P, F, O),
          Je = a0(P, F),
          ae = 0,
          ce = 0,
          ze = 0,
          fe = sn(P, O),
          Te,
          Ve,
          gi,
          je,
          Lt,
          ie,
          we,
          et,
          tt,
          A,
          dt,
          ri,
          it,
          he,
          si,
          mi,
          _i,
          Pe,
          oi,
          _e,
          Ct,
          Wt,
          Li,
          Tr,
          Ie,
          ys,
          Vi,
          Bn,
          Nn,
          qi,
          ln,
          K,
          cn,
          ai,
          li,
          ci,
          un,
          jn,
          Di
        if (
          ((w._startClamp = w._endClamp = !1),
          (w._dir = O),
          (_ *= 45),
          (w.scroller = P),
          (w.scroll = C ? C.time.bind(C) : fe),
          (je = fe()),
          (w.vars = i),
          (n = n || i.animation),
          'refreshPriority' in i &&
            ((Wd = 1), i.refreshPriority === -9999 && (os = w)),
          (z.tweenScroll = z.tweenScroll || {
            top: Ic(P, He),
            left: Ic(P, bt)
          }),
          (w.tweenTo = Te = z.tweenScroll[O.p]),
          (w.scrubDuration = function (L) {
            ;(cn = Hr(L) && L),
              cn
                ? K
                  ? K.duration(L)
                  : (K = R.to(n, {
                      ease: 'expo',
                      totalProgress: '+=0',
                      inherit: !1,
                      duration: cn,
                      paused: !0,
                      onComplete: function () {
                        return k && k(w)
                      }
                    }))
                : (K && K.progress(1).kill(), (K = 0))
          }),
          n &&
            ((n.vars.lazy = !1),
            (n._initted && !w.isReverted) ||
              (n.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                n.duration() &&
                n.render(0, !0, !0)),
            (w.animation = n.pause()),
            (n.scrollTrigger = w),
            w.scrubDuration(p),
            (qi = 0),
            l || (l = n.vars.id)),
          v &&
            ((!mn(v) || v.push) && (v = { snapTo: v }),
            'scrollBehavior' in ge.style &&
              R.set(F ? [ge, fi] : P, { scrollBehavior: 'auto' }),
            Q.forEach(function (L) {
              return (
                wt(L) &&
                L.target === (F ? xe.scrollingElement || fi : P) &&
                (L.smooth = !1)
              )
            }),
            (gi = wt(v.snapTo)
              ? v.snapTo
              : v.snapTo === 'labels'
                ? c0(n)
                : v.snapTo === 'labelsDirectional'
                  ? u0(n)
                  : v.directional !== !1
                    ? function (L, Y) {
                        return vl(v.snapTo)(
                          L,
                          at() - ce < 500 ? 0 : Y.direction
                        )
                      }
                    : R.utils.snap(v.snapTo)),
            (ai = v.duration || { min: 0.1, max: 2 }),
            (ai = mn(ai) ? ts(ai.min, ai.max) : ts(ai, ai)),
            (li = R.delayedCall(v.delay || cn / 2 || 0.1, function () {
              var L = fe(),
                Y = at() - ce < 500,
                N = Te.tween
              if (
                (Y || Math.abs(w.getVelocity()) < 10) &&
                !N &&
                !yo &&
                ae !== L
              ) {
                var q = (L - ie) / he,
                  qe = n && !M ? n.totalProgress() : q,
                  ne = Y ? 0 : ((qe - ln) / (at() - jr)) * 1e3 || 0,
                  Me = R.utils.clamp(-q, 1 - q, (Hn(ne / 2) * ne) / 0.185),
                  nt = q + (v.inertia === !1 ? 0 : Me),
                  Se,
                  ve,
                  ue = v,
                  ui = ue.onStart,
                  ye = ue.onInterrupt,
                  Dt = ue.onComplete
                if (
                  ((Se = gi(nt, w)),
                  Hr(Se) || (Se = nt),
                  (ve = Math.round(ie + Se * he)),
                  L <= we && L >= ie && ve !== L)
                ) {
                  if (N && !N._initted && N.data <= Hn(ve - L)) return
                  v.inertia === !1 && (Me = Se - q),
                    Te(
                      ve,
                      {
                        duration: ai(
                          Hn(
                            (Math.max(Hn(nt - qe), Hn(Se - qe)) * 0.185) /
                              ne /
                              0.05 || 0
                          )
                        ),
                        ease: v.ease || 'power3',
                        data: Hn(ve - L),
                        onInterrupt: function () {
                          return li.restart(!0) && ye && ye(w)
                        },
                        onComplete: function () {
                          w.update(),
                            (ae = fe()),
                            n &&
                              (K
                                ? K.resetTo(
                                    'totalProgress',
                                    Se,
                                    n._tTime / n._tDur
                                  )
                                : n.progress(Se)),
                            (qi = ln =
                              n && !M ? n.totalProgress() : w.progress),
                            T && T(w),
                            Dt && Dt(w)
                        }
                      },
                      L,
                      Me * he,
                      ve - L - Me * he
                    ),
                    ui && ui(w, Te.tween)
                }
              } else w.isActive && ae !== L && li.restart(!0)
            }).pause())),
          l && (La[l] = w),
          (h = w.trigger = kt(h || (f !== !0 && f))),
          (Di = h && h._gsap && h._gsap.stRevert),
          Di && (Di = Di(w)),
          (f = f === !0 ? h : kt(f)),
          $t(a) && (a = { targets: h, className: a }),
          f &&
            (m === !1 ||
              m === Gt ||
              (m =
                !m &&
                f.parentNode &&
                f.parentNode.style &&
                Zt(f.parentNode).display === 'flex'
                  ? !1
                  : Be),
            (w.pin = f),
            (Ve = R.core.getCache(f)),
            Ve.spacer
              ? (si = Ve.pinState)
              : (E &&
                  ((E = kt(E)),
                  E && !E.nodeType && (E = E.current || E.nativeElement),
                  (Ve.spacerIsNative = !!E),
                  E && (Ve.spacerState = zs(E))),
                (Ve.spacer = Pe = E || xe.createElement('div')),
                Pe.classList.add('pin-spacer'),
                l && Pe.classList.add('pin-spacer-' + l),
                (Ve.pinState = si = zs(f))),
            i.force3D !== !1 && R.set(f, { force3D: !0 }),
            (w.spacer = Pe = Ve.spacer),
            (Nn = Zt(f)),
            (Tr = Nn[m + O.os2]),
            (_e = R.getProperty(f)),
            (Ct = R.quickSetter(f, O.a, Ue)),
            Ko(f, Pe, Nn),
            (_i = zs(f))),
          D)
        ) {
          ;(ri = mn(D) ? Pc(D, Mc) : Mc),
            (A = $s('scroller-start', l, P, O, ri, 0)),
            (dt = $s('scroller-end', l, P, O, ri, 0, A)),
            (oi = A['offset' + O.op.d2])
          var Sr = kt(en(P, 'content') || P)
          ;(et = this.markerStart = $s('start', l, Sr, O, ri, oi, 0, C)),
            (tt = this.markerEnd = $s('end', l, Sr, O, ri, oi, 0, C)),
            C && (jn = R.quickSetter([et, tt], O.a, Ue)),
            !H &&
              !(Ai.length && en(P, 'fixedMarkers') === !0) &&
              (l0(F ? ge : P),
              R.set([A, dt], { force3D: !0 }),
              (ys = R.quickSetter(A, O.a, Ue)),
              (Bn = R.quickSetter(dt, O.a, Ue)))
        }
        if (C) {
          var W = C.vars.onUpdate,
            j = C.vars.onUpdateParams
          C.eventCallback('onUpdate', function () {
            w.update(0, 0, 1), W && W.apply(C, j || [])
          })
        }
        if (
          ((w.previous = function () {
            return X[X.indexOf(w) - 1]
          }),
          (w.next = function () {
            return X[X.indexOf(w) + 1]
          }),
          (w.revert = function (L, Y) {
            if (!Y) return w.kill(!0)
            var N = L !== !1 || !w.enabled,
              q = ot
            N !== w.isReverted &&
              (N &&
                ((ci = Math.max(fe(), w.scroll.rec || 0)),
                (ze = w.progress),
                (un = n && n.progress())),
              et &&
                [et, tt, A, dt].forEach(function (qe) {
                  return (qe.style.display = N ? 'none' : 'block')
                }),
              N && ((ot = w), w.update(N)),
              f &&
                (!y || !w.isActive) &&
                (N ? p0(f, Pe, si) : Ko(f, Pe, Zt(f), Ie)),
              N || w.update(N),
              (ot = q),
              (w.isReverted = N))
          }),
          (w.refresh = function (L, Y, N, q) {
            if (!((ot || !w.enabled) && !Y)) {
              if (f && L && ii) {
                Ye(r, 'scrollEnd', rf)
                return
              }
              !mt && te && te(w),
                (ot = w),
                Te.tween && !N && (Te.tween.kill(), (Te.tween = 0)),
                K && K.pause(),
                g && n && n.revert({ kill: !1 }).invalidate(),
                w.isReverted || w.revert(!0, !0),
                (w._subPinOffset = !1)
              var qe = me(),
                ne = Je(),
                Me = C ? C.duration() : Ti(P, O),
                nt = he <= 0.01,
                Se = 0,
                ve = q || 0,
                ue = mn(N) ? N.end : i.end,
                ui = i.endTrigger || h,
                ye = mn(N)
                  ? N.start
                  : i.start || (i.start === 0 || !h ? 0 : f ? '0 0' : '0 100%'),
                Dt = (w.pinnedContainer =
                  i.pinnedContainer && kt(i.pinnedContainer, w)),
                vi = (h && Math.max(0, X.indexOf(w))) || 0,
                Ze = vi,
                Ke,
                rt,
                dn,
                xs,
                st,
                Fe,
                bi,
                Co,
                yl,
                Or,
                wi,
                Ar,
                Cs
              for (
                D &&
                mn(N) &&
                ((Ar = R.getProperty(A, O.p)), (Cs = R.getProperty(dt, O.p)));
                Ze--;

              )
                (Fe = X[Ze]),
                  Fe.end || Fe.refresh(0, 1) || (ot = w),
                  (bi = Fe.pin),
                  bi &&
                    (bi === h || bi === f || bi === Dt) &&
                    !Fe.isReverted &&
                    (Or || (Or = []), Or.unshift(Fe), Fe.revert(!0, !0)),
                  Fe !== X[Ze] && (vi--, Ze--)
              for (
                wt(ye) && (ye = ye(w)),
                  ye = Tc(ye, 'start', w),
                  ie =
                    $c(
                      ye,
                      h,
                      qe,
                      O,
                      fe(),
                      et,
                      A,
                      w,
                      ne,
                      V,
                      H,
                      Me,
                      C,
                      w._startClamp && '_startClamp'
                    ) || (f ? -0.001 : 0),
                  wt(ue) && (ue = ue(w)),
                  $t(ue) &&
                    !ue.indexOf('+=') &&
                    (~ue.indexOf(' ')
                      ? (ue = ($t(ye) ? ye.split(' ')[0] : '') + ue)
                      : ((Se = qs(ue.substr(2), qe)),
                        (ue = $t(ye)
                          ? ye
                          : (C
                              ? R.utils.mapRange(
                                  0,
                                  C.duration(),
                                  C.scrollTrigger.start,
                                  C.scrollTrigger.end,
                                  ie
                                )
                              : ie) + Se),
                        (ui = h))),
                  ue = Tc(ue, 'end', w),
                  we =
                    Math.max(
                      ie,
                      $c(
                        ue || (ui ? '100% 0' : Me),
                        ui,
                        qe,
                        O,
                        fe() + Se,
                        tt,
                        dt,
                        w,
                        ne,
                        V,
                        H,
                        Me,
                        C,
                        w._endClamp && '_endClamp'
                      )
                    ) || -0.001,
                  Se = 0,
                  Ze = vi;
                Ze--;

              )
                (Fe = X[Ze]),
                  (bi = Fe.pin),
                  bi &&
                    Fe.start - Fe._pinPush <= ie &&
                    !C &&
                    Fe.end > 0 &&
                    ((Ke =
                      Fe.end -
                      (w._startClamp ? Math.max(0, Fe.start) : Fe.start)),
                    ((bi === h && Fe.start - Fe._pinPush < ie) || bi === Dt) &&
                      isNaN(ye) &&
                      (Se += Ke * (1 - Fe.progress)),
                    bi === f && (ve += Ke))
              if (
                ((ie += Se),
                (we += Se),
                w._startClamp && (w._startClamp += Se),
                w._endClamp &&
                  !mt &&
                  ((w._endClamp = we || -0.001), (we = Math.min(we, Ti(P, O)))),
                (he = we - ie || ((ie -= 0.01) && 0.001)),
                nt && (ze = R.utils.clamp(0, 1, R.utils.normalize(ie, we, ci))),
                (w._pinPush = ve),
                et &&
                  Se &&
                  ((Ke = {}),
                  (Ke[O.a] = '+=' + Se),
                  Dt && (Ke[O.p] = '-=' + fe()),
                  R.set([et, tt], Ke)),
                f && !(Ma && w.end >= Ti(P, O)))
              )
                (Ke = Zt(f)),
                  (xs = O === He),
                  (dn = fe()),
                  (Wt = parseFloat(_e(O.a)) + ve),
                  !Me &&
                    we > 1 &&
                    ((wi = (F ? xe.scrollingElement || fi : P).style),
                    (wi = {
                      style: wi,
                      value: wi['overflow' + O.a.toUpperCase()]
                    }),
                    F &&
                      Zt(ge)['overflow' + O.a.toUpperCase()] !== 'scroll' &&
                      (wi.style['overflow' + O.a.toUpperCase()] = 'scroll')),
                  Ko(f, Pe, Ke),
                  (_i = zs(f)),
                  (rt = zi(f, !0)),
                  (Co = H && sn(P, xs ? bt : He)()),
                  m
                    ? ((Ie = [m + O.os2, he + ve + Ue]),
                      (Ie.t = Pe),
                      (Ze = m === Be ? ao(f, O) + he + ve : 0),
                      Ze &&
                        (Ie.push(O.d, Ze + Ue),
                        Pe.style.flexBasis !== 'auto' &&
                          (Pe.style.flexBasis = Ze + Ue)),
                      sr(Ie),
                      Dt &&
                        X.forEach(function (Pr) {
                          Pr.pin === Dt &&
                            Pr.vars.pinSpacing !== !1 &&
                            (Pr._subPinOffset = !0)
                        }),
                      H && fe(ci))
                    : ((Ze = ao(f, O)),
                      Ze &&
                        Pe.style.flexBasis !== 'auto' &&
                        (Pe.style.flexBasis = Ze + Ue)),
                  H &&
                    ((st = {
                      top: rt.top + (xs ? dn - ie : Co) + Ue,
                      left: rt.left + (xs ? Co : dn - ie) + Ue,
                      boxSizing: 'border-box',
                      position: 'fixed'
                    }),
                    (st[En] = st['max' + vr] = Math.ceil(rt.width) + Ue),
                    (st[Tn] = st['max' + _l] = Math.ceil(rt.height) + Ue),
                    (st[Gt] =
                      st[Gt + rs] =
                      st[Gt + is] =
                      st[Gt + ss] =
                      st[Gt + ns] =
                        '0'),
                    (st[Be] = Ke[Be]),
                    (st[Be + rs] = Ke[Be + rs]),
                    (st[Be + is] = Ke[Be + is]),
                    (st[Be + ss] = Ke[Be + ss]),
                    (st[Be + ns] = Ke[Be + ns]),
                    (mi = g0(si, st, y)),
                    mt && fe(0)),
                  n
                    ? ((yl = n._initted),
                      Wo(1),
                      n.render(n.duration(), !0, !0),
                      (Li = _e(O.a) - Wt + he + ve),
                      (Vi = Math.abs(he - Li) > 1),
                      H && Vi && mi.splice(mi.length - 2, 2),
                      n.render(0, !0, !0),
                      yl || n.invalidate(!0),
                      n.parent || n.totalTime(n.totalTime()),
                      Wo(0))
                    : (Li = he),
                  wi &&
                    (wi.value
                      ? (wi.style['overflow' + O.a.toUpperCase()] = wi.value)
                      : wi.style.removeProperty('overflow-' + O.a))
              else if (h && fe() && !C)
                for (rt = h.parentNode; rt && rt !== ge; )
                  rt._pinOffset &&
                    ((ie -= rt._pinOffset), (we -= rt._pinOffset)),
                    (rt = rt.parentNode)
              Or &&
                Or.forEach(function (Pr) {
                  return Pr.revert(!1, !0)
                }),
                (w.start = ie),
                (w.end = we),
                (je = Lt = mt ? ci : fe()),
                !C && !mt && (je < ci && fe(ci), (w.scroll.rec = 0)),
                w.revert(!1, !0),
                (ce = at()),
                li && ((ae = -1), li.restart(!0)),
                (ot = 0),
                n &&
                  M &&
                  (n._initted || un) &&
                  n.progress() !== un &&
                  n.progress(un || 0, !0).render(n.time(), !0, !0),
                (nt || ze !== w.progress || C || g) &&
                  (n &&
                    !M &&
                    n.totalProgress(
                      C && ie < -0.001 && !ze
                        ? R.utils.normalize(ie, we, 0)
                        : ze,
                      !0
                    ),
                  (w.progress = nt || (je - ie) / he === ze ? 0 : ze)),
                f && m && (Pe._pinOffset = Math.round(w.progress * Li)),
                K && K.invalidate(),
                isNaN(Ar) ||
                  ((Ar -= R.getProperty(A, O.p)),
                  (Cs -= R.getProperty(dt, O.p)),
                  Is(A, O, Ar),
                  Is(et, O, Ar - (q || 0)),
                  Is(dt, O, Cs),
                  Is(tt, O, Cs - (q || 0))),
                nt && !mt && w.update(),
                u && !mt && !it && ((it = !0), u(w), (it = !1))
            }
          }),
          (w.getVelocity = function () {
            return ((fe() - Lt) / (at() - jr)) * 1e3 || 0
          }),
          (w.endAnimation = function () {
            zr(w.callbackAnimation),
              n &&
                (K
                  ? K.progress(1)
                  : n.paused()
                    ? M || zr(n, w.direction < 0, 1)
                    : zr(n, n.reversed()))
          }),
          (w.labelToScroll = function (L) {
            return (
              (n &&
                n.labels &&
                (ie || w.refresh() || ie) +
                  (n.labels[L] / n.duration()) * he) ||
              0
            )
          }),
          (w.getTrailing = function (L) {
            var Y = X.indexOf(w),
              N = w.direction > 0 ? X.slice(0, Y).reverse() : X.slice(Y + 1)
            return (
              $t(L)
                ? N.filter(function (q) {
                    return q.vars.preventOverlaps === L
                  })
                : N
            ).filter(function (q) {
              return w.direction > 0 ? q.end <= ie : q.start >= we
            })
          }),
          (w.update = function (L, Y, N) {
            if (!(C && !N && !L)) {
              var q = mt === !0 ? ci : w.scroll(),
                qe = L ? 0 : (q - ie) / he,
                ne = qe < 0 ? 0 : qe > 1 ? 1 : qe || 0,
                Me = w.progress,
                nt,
                Se,
                ve,
                ue,
                ui,
                ye,
                Dt,
                vi
              if (
                (Y &&
                  ((Lt = je),
                  (je = C ? fe() : q),
                  v && ((ln = qi), (qi = n && !M ? n.totalProgress() : ne))),
                _ &&
                  f &&
                  !ot &&
                  !Ps &&
                  ii &&
                  (!ne && ie < q + ((q - Lt) / (at() - jr)) * _
                    ? (ne = 1e-4)
                    : ne === 1 &&
                      we > q + ((q - Lt) / (at() - jr)) * _ &&
                      (ne = 0.9999)),
                ne !== Me && w.enabled)
              ) {
                if (
                  ((nt = w.isActive = !!ne && ne < 1),
                  (Se = !!Me && Me < 1),
                  (ye = nt !== Se),
                  (ui = ye || !!ne != !!Me),
                  (w.direction = ne > Me ? 1 : -1),
                  (w.progress = ne),
                  ui &&
                    !ot &&
                    ((ve = ne && !Me ? 0 : ne === 1 ? 1 : Me === 1 ? 2 : 3),
                    M &&
                      ((ue =
                        (!ye && $[ve + 1] !== 'none' && $[ve + 1]) || $[ve]),
                      (vi =
                        n &&
                        (ue === 'complete' || ue === 'reset' || ue in n)))),
                  b &&
                    (ye || vi) &&
                    (vi || p || !n) &&
                    (wt(b)
                      ? b(w)
                      : w.getTrailing(b).forEach(function (dn) {
                          return dn.endAnimation()
                        })),
                  M ||
                    (K && !ot && !Ps
                      ? (K._dp._time - K._start !== K._time &&
                          K.render(K._dp._time - K._start),
                        K.resetTo
                          ? K.resetTo('totalProgress', ne, n._tTime / n._tDur)
                          : ((K.vars.totalProgress = ne),
                            K.invalidate().restart()))
                      : n && n.totalProgress(ne, !!(ot && (ce || L)))),
                  f)
                ) {
                  if ((L && m && (Pe.style[m + O.os2] = Tr), !H))
                    Ct(Ur(Wt + Li * ne))
                  else if (ui) {
                    if (
                      ((Dt = !L && ne > Me && we + 1 > q && q + 1 >= Ti(P, O)),
                      y)
                    )
                      if (!L && (nt || Dt)) {
                        var Ze = zi(f, !0),
                          Ke = q - ie
                        zc(
                          f,
                          ge,
                          Ze.top + (O === He ? Ke : 0) + Ue,
                          Ze.left + (O === He ? 0 : Ke) + Ue
                        )
                      } else zc(f, Pe)
                    sr(nt || Dt ? mi : _i),
                      (Vi && ne < 1 && nt) ||
                        Ct(Wt + (ne === 1 && !Dt ? Li : 0))
                  }
                }
                v && !Te.tween && !ot && !Ps && li.restart(!0),
                  a &&
                    (ye || (x && ne && (ne < 1 || !Yo))) &&
                    gs(a.targets).forEach(function (dn) {
                      return dn.classList[nt || x ? 'add' : 'remove'](
                        a.className
                      )
                    }),
                  o && !M && !L && o(w),
                  ui && !ot
                    ? (M &&
                        (vi &&
                          (ue === 'complete'
                            ? n.pause().totalProgress(1)
                            : ue === 'reset'
                              ? n.restart(!0).pause()
                              : ue === 'restart'
                                ? n.restart(!0)
                                : n[ue]()),
                        o && o(w)),
                      (ye || !Yo) &&
                        (c && ye && Go(w, c),
                        B[ve] && Go(w, B[ve]),
                        x && (ne === 1 ? w.kill(!1, 1) : (B[ve] = 0)),
                        ye || ((ve = ne === 1 ? 1 : 3), B[ve] && Go(w, B[ve]))),
                      S &&
                        !nt &&
                        Math.abs(w.getVelocity()) > (Hr(S) ? S : 2500) &&
                        (zr(w.callbackAnimation),
                        K
                          ? K.progress(1)
                          : zr(n, ue === 'reverse' ? 1 : !ne, 1)))
                    : M && o && !ot && o(w)
              }
              if (Bn) {
                var rt = C ? (q / C.duration()) * (C._caScrollDist || 0) : q
                ys(rt + (A._isFlipped ? 1 : 0)), Bn(rt)
              }
              jn && jn((-q / C.duration()) * (C._caScrollDist || 0))
            }
          }),
          (w.enable = function (L, Y) {
            w.enabled ||
              ((w.enabled = !0),
              Ye(P, 'resize', Vr),
              F || Ye(P, 'scroll', Vn),
              te && Ye(r, 'refreshInit', te),
              L !== !1 && ((w.progress = ze = 0), (je = Lt = ae = fe())),
              Y !== !1 && w.refresh())
          }),
          (w.getTween = function (L) {
            return L && Te ? Te.tween : K
          }),
          (w.setPositions = function (L, Y, N, q) {
            if (C) {
              var qe = C.scrollTrigger,
                ne = C.duration(),
                Me = qe.end - qe.start
              ;(L = qe.start + (Me * L) / ne), (Y = qe.start + (Me * Y) / ne)
            }
            w.refresh(
              !1,
              !1,
              {
                start: Sc(L, N && !!w._startClamp),
                end: Sc(Y, N && !!w._endClamp)
              },
              q
            ),
              w.update()
          }),
          (w.adjustPinSpacing = function (L) {
            if (Ie && L) {
              var Y = Ie.indexOf(O.d) + 1
              ;(Ie[Y] = parseFloat(Ie[Y]) + L + Ue),
                (Ie[1] = parseFloat(Ie[1]) + L + Ue),
                sr(Ie)
            }
          }),
          (w.disable = function (L, Y) {
            if (
              w.enabled &&
              (L !== !1 && w.revert(!0, !0),
              (w.enabled = w.isActive = !1),
              Y || (K && K.pause()),
              (ci = 0),
              Ve && (Ve.uncache = 1),
              te && We(r, 'refreshInit', te),
              li && (li.pause(), Te.tween && Te.tween.kill() && (Te.tween = 0)),
              !F)
            ) {
              for (var N = X.length; N--; )
                if (X[N].scroller === P && X[N] !== w) return
              We(P, 'resize', Vr), F || We(P, 'scroll', Vn)
            }
          }),
          (w.kill = function (L, Y) {
            w.disable(L, Y), K && !Y && K.kill(), l && delete La[l]
            var N = X.indexOf(w)
            N >= 0 && X.splice(N, 1),
              N === gt && Ys > 0 && gt--,
              (N = 0),
              X.forEach(function (q) {
                return q.scroller === w.scroller && (N = 1)
              }),
              N || mt || (w.scroll.rec = 0),
              n &&
                ((n.scrollTrigger = null),
                L && n.revert({ kill: !1 }),
                Y || n.kill()),
              et &&
                [et, tt, A, dt].forEach(function (q) {
                  return q.parentNode && q.parentNode.removeChild(q)
                }),
              os === w && (os = 0),
              f &&
                (Ve && (Ve.uncache = 1),
                (N = 0),
                X.forEach(function (q) {
                  return q.pin === f && N++
                }),
                N || (Ve.spacer = 0)),
              i.onKill && i.onKill(w)
          }),
          X.push(w),
          w.enable(!1, !1),
          Di && Di(w),
          n && n.add && !he)
        ) {
          var oe = w.update
          ;(w.update = function () {
            ;(w.update = oe), ie || we || w.refresh()
          }),
            R.delayedCall(0.01, w.update),
            (he = 0.01),
            (ie = we = 0)
        } else w.refresh()
        f && f0()
      }),
      (r.register = function (i) {
        return (
          Yn ||
            ((R = i || Kd()), Zd() && window.document && r.enable(), (Yn = Fr)),
          Yn
        )
      }),
      (r.defaults = function (i) {
        if (i) for (var n in i) Rs[n] = i[n]
        return Rs
      }),
      (r.disable = function (i, n) {
        ;(Fr = 0),
          X.forEach(function (o) {
            return o[n ? 'kill' : 'disable'](i)
          }),
          We(re, 'wheel', Vn),
          We(xe, 'scroll', Vn),
          clearInterval(As),
          We(xe, 'touchcancel', Ci),
          We(ge, 'touchstart', Ci),
          Ls(We, xe, 'pointerdown,touchstart,mousedown', Oc),
          Ls(We, xe, 'pointerup,touchend,mouseup', Ac),
          so.kill(),
          Ms(We)
        for (var s = 0; s < Q.length; s += 3)
          Ds(We, Q[s], Q[s + 1]), Ds(We, Q[s], Q[s + 2])
      }),
      (r.enable = function () {
        if (
          ((re = window),
          (xe = document),
          (fi = xe.documentElement),
          (ge = xe.body),
          R &&
            ((gs = R.utils.toArray),
            (ts = R.utils.clamp),
            (Pa = R.core.context || Ci),
            (Wo = R.core.suppressOverwrites || Ci),
            (pl = re.history.scrollRestoration || 'auto'),
            (Da = re.pageYOffset),
            R.core.globals('ScrollTrigger', r),
            ge))
        ) {
          ;(Fr = 1),
            (rr = document.createElement('div')),
            (rr.style.height = '100vh'),
            (rr.style.position = 'absolute'),
            af(),
            s0(),
            $e.register(R),
            (r.isTouch = $e.isTouch),
            (Wi =
              $e.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Aa = $e.isTouch === 1),
            Ye(re, 'wheel', Vn),
            (qd = [re, xe, fi, ge]),
            R.matchMedia
              ? ((r.matchMedia = function (l) {
                  var c = R.matchMedia(),
                    u
                  for (u in l) c.add(u, l[u])
                  return c
                }),
                R.addEventListener('matchMediaInit', function () {
                  return bl()
                }),
                R.addEventListener('matchMediaRevert', function () {
                  return sf()
                }),
                R.addEventListener('matchMedia', function () {
                  bn(0, 1), $n('matchMedia')
                }),
                R.matchMedia('(orientation: portrait)', function () {
                  return Zo(), Zo
                }))
              : console.warn('Requires GSAP 3.11.0 or later'),
            Zo(),
            Ye(xe, 'scroll', Vn)
          var i = ge.style,
            n = i.borderTopStyle,
            s = R.core.Animation.prototype,
            o,
            a
          for (
            s.revert ||
              Object.defineProperty(s, 'revert', {
                value: function () {
                  return this.time(-0.01, !0)
                }
              }),
              i.borderTopStyle = 'solid',
              o = zi(ge),
              He.m = Math.round(o.top + He.sc()) || 0,
              bt.m = Math.round(o.left + bt.sc()) || 0,
              n ? (i.borderTopStyle = n) : i.removeProperty('border-top-style'),
              As = setInterval(Lc, 250),
              R.delayedCall(0.5, function () {
                return (Ps = 0)
              }),
              Ye(xe, 'touchcancel', Ci),
              Ye(ge, 'touchstart', Ci),
              Ls(Ye, xe, 'pointerdown,touchstart,mousedown', Oc),
              Ls(Ye, xe, 'pointerup,touchend,mouseup', Ac),
              Oa = R.utils.checkPrefix('transform'),
              Xs.push(Oa),
              Yn = at(),
              so = R.delayedCall(0.2, bn).pause(),
              Xn = [
                xe,
                'visibilitychange',
                function () {
                  var l = re.innerWidth,
                    c = re.innerHeight
                  xe.hidden
                    ? ((kc = l), (Ec = c))
                    : (kc !== l || Ec !== c) && Vr()
                },
                xe,
                'DOMContentLoaded',
                bn,
                re,
                'load',
                bn,
                re,
                'resize',
                Vr
              ],
              Ms(Ye),
              X.forEach(function (l) {
                return l.enable(0, 1)
              }),
              a = 0;
            a < Q.length;
            a += 3
          )
            Ds(We, Q[a], Q[a + 1]), Ds(We, Q[a], Q[a + 2])
        }
      }),
      (r.config = function (i) {
        'limitCallbacks' in i && (Yo = !!i.limitCallbacks)
        var n = i.syncInterval
        ;(n && clearInterval(As)) || ((As = n) && setInterval(Lc, n)),
          'ignoreMobileResize' in i &&
            (Aa = r.isTouch === 1 && i.ignoreMobileResize),
          'autoRefreshEvents' in i &&
            (Ms(We) || Ms(Ye, i.autoRefreshEvents || 'none'),
            (Yd = (i.autoRefreshEvents + '').indexOf('resize') === -1))
      }),
      (r.scrollerProxy = function (i, n) {
        var s = kt(i),
          o = Q.indexOf(s),
          a = Dn(s)
        ~o && Q.splice(o, a ? 6 : 2),
          n && (a ? Ai.unshift(re, n, ge, n, fi, n) : Ai.unshift(s, n))
      }),
      (r.clearMatchMedia = function (i) {
        X.forEach(function (n) {
          return n._ctx && n._ctx.query === i && n._ctx.kill(!0, !0)
        })
      }),
      (r.isInViewport = function (i, n, s) {
        var o = ($t(i) ? kt(i) : i).getBoundingClientRect(),
          a = o[s ? En : Tn] * n || 0
        return s
          ? o.right - a > 0 && o.left + a < re.innerWidth
          : o.bottom - a > 0 && o.top + a < re.innerHeight
      }),
      (r.positionInViewport = function (i, n, s) {
        $t(i) && (i = kt(i))
        var o = i.getBoundingClientRect(),
          a = o[s ? En : Tn],
          l =
            n == null
              ? a / 2
              : n in lo
                ? lo[n] * a
                : ~n.indexOf('%')
                  ? (parseFloat(n) * a) / 100
                  : parseFloat(n) || 0
        return s ? (o.left + l) / re.innerWidth : (o.top + l) / re.innerHeight
      }),
      (r.killAll = function (i) {
        if (
          (X.slice(0).forEach(function (s) {
            return s.vars.id !== 'ScrollSmoother' && s.kill()
          }),
          i !== !0)
        ) {
          var n = Rn.killAll || []
          ;(Rn = {}),
            n.forEach(function (s) {
              return s()
            })
        }
      }),
      r
    )
  })()
U.version = '3.12.5'
U.saveStyles = function (r) {
  return r
    ? gs(r).forEach(function (e) {
        if (e && e.style) {
          var t = Rt.indexOf(e)
          t >= 0 && Rt.splice(t, 5),
            Rt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute('transform'),
              R.core.getCache(e),
              Pa()
            )
        }
      })
    : Rt
}
U.revert = function (r, e) {
  return bl(!r, e)
}
U.create = function (r, e) {
  return new U(r, e)
}
U.refresh = function (r) {
  return r ? Vr() : (Yn || U.register()) && bn(!0)
}
U.update = function (r) {
  return ++Q.cache && Ni(r === !0 ? 2 : 0)
}
U.clearScrollMemory = of
U.maxScroll = function (r, e) {
  return Ti(r, e ? bt : He)
}
U.getScrollFunc = function (r, e) {
  return sn(kt(r), e ? bt : He)
}
U.getById = function (r) {
  return La[r]
}
U.getAll = function () {
  return X.filter(function (r) {
    return r.vars.id !== 'ScrollSmoother'
  })
}
U.isScrolling = function () {
  return !!ii
}
U.snapDirectional = vl
U.addEventListener = function (r, e) {
  var t = Rn[r] || (Rn[r] = [])
  ~t.indexOf(e) || t.push(e)
}
U.removeEventListener = function (r, e) {
  var t = Rn[r],
    i = t && t.indexOf(e)
  i >= 0 && t.splice(i, 1)
}
U.batch = function (r, e) {
  var t = [],
    i = {},
    n = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = function (c, u) {
      var p = [],
        h = [],
        f = R.delayedCall(n, function () {
          u(p, h), (p = []), (h = [])
        }).pause()
      return function (m) {
        p.length || f.restart(!0),
          p.push(m.trigger),
          h.push(m),
          s <= p.length && f.progress(1)
      }
    },
    a
  for (a in e)
    i[a] =
      a.substr(0, 2) === 'on' && wt(e[a]) && a !== 'onRefreshInit'
        ? o(a, e[a])
        : e[a]
  return (
    wt(s) &&
      ((s = s()),
      Ye(U, 'refresh', function () {
        return (s = e.batchMax())
      })),
    gs(r).forEach(function (l) {
      var c = {}
      for (a in i) c[a] = i[a]
      ;(c.trigger = l), t.push(U.create(c))
    }),
    t
  )
}
var Bc = function (e, t, i, n) {
    return (
      t > n ? e(n) : t < 0 && e(0),
      i > n ? (n - t) / (i - t) : i < 0 ? t / (t - i) : 1
    )
  },
  Qo = function r(e, t) {
    t === !0
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction =
          t === !0
            ? 'auto'
            : t
              ? 'pan-' + t + ($e.isTouch ? ' pinch-zoom' : '')
              : 'none'),
      e === fi && r(ge, t)
  },
  Bs = { auto: 1, scroll: 1 },
  _0 = function (e) {
    var t = e.event,
      i = e.target,
      n = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      o = s._gsap || R.core.getCache(s),
      a = at(),
      l
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== ge &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(Bs[(l = Zt(s)).overflowY] || Bs[l.overflowX]));

      )
        s = s.parentNode
      ;(o._isScroll =
        s &&
        s !== i &&
        !Dn(s) &&
        (Bs[(l = Zt(s)).overflowY] || Bs[l.overflowX])),
        (o._isScrollT = a)
    }
    ;(o._isScroll || n === 'x') && (t.stopPropagation(), (t._gsapAllow = !0))
  },
  cf = function (e, t, i, n) {
    return $e.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && _0),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function () {
        return i && Ye(xe, $e.eventTypes[0], jc, !1, !0)
      },
      onDisable: function () {
        return We(xe, $e.eventTypes[0], jc, !0)
      }
    })
  },
  v0 = /(input|label|select|textarea)/i,
  Nc,
  jc = function (e) {
    var t = v0.test(e.target.tagName)
    ;(t || Nc) && ((e._gsapAllow = !0), (Nc = t))
  },
  b0 = function (e) {
    mn(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer')
    var t = e,
      i = t.normalizeScrollX,
      n = t.momentum,
      s = t.allowNestedScroll,
      o = t.onRelease,
      a,
      l,
      c = kt(e.target) || fi,
      u = R.core.globals().ScrollSmoother,
      p = u && u.get(),
      h =
        Wi &&
        ((e.content && kt(e.content)) ||
          (p && e.content !== !1 && !p.smooth() && p.content())),
      f = sn(c, He),
      m = sn(c, bt),
      g = 1,
      _ =
        ($e.isTouch && re.visualViewport
          ? re.visualViewport.scale * re.visualViewport.width
          : re.outerWidth) / re.innerWidth,
      k = 0,
      T = wt(n)
        ? function () {
            return n(a)
          }
        : function () {
            return n || 2.8
          },
      x,
      v,
      y = cf(c, e.type, !0, s),
      E = function () {
        return (v = !1)
      },
      C = Ci,
      S = Ci,
      b = function () {
        ;(l = Ti(c, He)),
          (S = ts(Wi ? 1 : 0, l)),
          i && (C = ts(0, Ti(c, bt))),
          (x = Sn)
      },
      O = function () {
        ;(h._gsap.y = Ur(parseFloat(h._gsap.y) + f.offset) + 'px'),
          (h.style.transform =
            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
            parseFloat(h._gsap.y) +
            ', 0, 1)'),
          (f.offset = f.cacheID = 0)
      },
      M = function () {
        if (v) {
          requestAnimationFrame(E)
          var D = Ur(a.deltaY / 2),
            V = S(f.v - D)
          if (h && V !== f.v + f.offset) {
            f.offset = V - f.v
            var w = Ur((parseFloat(h && h._gsap.y) || 0) - f.offset)
            ;(h.style.transform =
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
              w +
              ', 0, 1)'),
              (h._gsap.y = w + 'px'),
              (f.cacheID = Q.cache),
              Ni()
          }
          return !0
        }
        f.offset && O(), (v = !0)
      },
      P,
      z,
      F,
      H,
      B = function () {
        b(),
          P.isActive() &&
            P.vars.scrollY > l &&
            (f() > l ? P.progress(1) && f(l) : P.resetTo('scrollY', l))
      }
    return (
      h && R.set(h, { y: '+=0' }),
      (e.ignoreCheck = function ($) {
        return (
          (Wi && $.type === 'touchmove' && M()) ||
          (g > 1.05 && $.type !== 'touchstart') ||
          a.isGesturing ||
          ($.touches && $.touches.length > 1)
        )
      }),
      (e.onPress = function () {
        v = !1
        var $ = g
        ;(g = Ur(((re.visualViewport && re.visualViewport.scale) || 1) / _)),
          P.pause(),
          $ !== g && Qo(c, g > 1.01 ? !0 : i ? !1 : 'x'),
          (z = m()),
          (F = f()),
          b(),
          (x = Sn)
      }),
      (e.onRelease = e.onGestureStart =
        function ($, D) {
          if ((f.offset && O(), !D)) H.restart(!0)
          else {
            Q.cache++
            var V = T(),
              w,
              te
            i &&
              ((w = m()),
              (te = w + (V * 0.05 * -$.velocityX) / 0.227),
              (V *= Bc(m, w, te, Ti(c, bt))),
              (P.vars.scrollX = C(te))),
              (w = f()),
              (te = w + (V * 0.05 * -$.velocityY) / 0.227),
              (V *= Bc(f, w, te, Ti(c, He))),
              (P.vars.scrollY = S(te)),
              P.invalidate().duration(V).play(0.01),
              ((Wi && P.vars.scrollY >= l) || w >= l - 1) &&
                R.to({}, { onUpdate: B, duration: V })
          }
          o && o($)
        }),
      (e.onWheel = function () {
        P._ts && P.pause(), at() - k > 1e3 && ((x = 0), (k = at()))
      }),
      (e.onChange = function ($, D, V, w, te) {
        if (
          (Sn !== x && b(),
          D && i && m(C(w[2] === D ? z + ($.startX - $.x) : m() + D - w[1])),
          V)
        ) {
          f.offset && O()
          var me = te[2] === V,
            Je = me ? F + $.startY - $.y : f() + V - te[1],
            ae = S(Je)
          me && Je !== ae && (F += ae - Je), f(ae)
        }
        ;(V || D) && Ni()
      }),
      (e.onEnable = function () {
        Qo(c, i ? !1 : 'x'),
          U.addEventListener('refresh', B),
          Ye(re, 'resize', B),
          f.smooth &&
            ((f.target.style.scrollBehavior = 'auto'),
            (f.smooth = m.smooth = !1)),
          y.enable()
      }),
      (e.onDisable = function () {
        Qo(c, !0),
          We(re, 'resize', B),
          U.removeEventListener('refresh', B),
          y.kill()
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new $e(e)),
      (a.iOS = Wi),
      Wi && !f() && f(1),
      Wi && R.ticker.add(Ci),
      (H = a._dc),
      (P = R.to(a, {
        ease: 'power4',
        paused: !0,
        inherit: !1,
        scrollX: i ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        modifiers: {
          scrollY: lf(f, f(), function () {
            return P.pause()
          })
        },
        onUpdate: Ni,
        onComplete: H.vars.onComplete
      })),
      a
    )
  }
U.sort = function (r) {
  return X.sort(
    r ||
      function (e, t) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (t.start + (t.vars.refreshPriority || 0) * -1e6)
        )
      }
  )
}
U.observe = function (r) {
  return new $e(r)
}
U.normalizeScroll = function (r) {
  if (typeof r > 'u') return ht
  if (r === !0 && ht) return ht.enable()
  if (r === !1) {
    ht && ht.kill(), (ht = r)
    return
  }
  var e = r instanceof $e ? r : b0(r)
  return ht && ht.target === e.target && ht.kill(), Dn(e.target) && (ht = e), e
}
U.core = {
  _getVelocityProp: Sa,
  _inputObserver: cf,
  _scrollers: Q,
  _proxies: Ai,
  bridge: {
    ss: function () {
      ii || $n('scrollStart'), (ii = at())
    },
    ref: function () {
      return ot
    }
  }
}
Kd() && R.registerPlugin(U)
const wl = (r, e) => {
    const t = r.__vccOpts || r
    for (const [i, n] of e) t[i] = n
    return t
  },
  w0 = {
    class:
      'fixed start-0 top-0 z-50 flex h-screen w-screen items-center justify-center'
  },
  y0 = {
    __name: 'Loading',
    setup(r) {
      Z.registerPlugin(U)
      const { isLoading: e } = fl()
      return (
        qt(() => {
          Z.to('.hero-img', {
            x: 20,
            y: 10,
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: !0
          }),
            Z.to('.hero-title', {
              x: 5,
              y: 5,
              duration: 1,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: !0
            }),
            Z.to('.hero-bg', {
              scale: 1.08,
              duration: 0.3,
              ease: 'power1.out',
              repeat: -1,
              yoyo: !0
            }),
            Z.from('.pattern', {
              scrollTrigger: {
                trigger: '.grid',
                start: 'top 85%',
                toggleActions: 'play none none none'
              },
              duration: 0.3,
              ease: 'power3.out',
              stagger: { each: 0.3, from: 'start' }
            })
        }),
        (t, i) =>
          wf(
            (J(),
            ee(
              'div',
              w0,
              i[0] ||
                (i[0] = [
                  pi(
                    '<div class="pattern absolute inset-0" data-v-8d869483></div><div class="hero-bg absolute inset-0 z-10 h-full w-full" data-v-8d869483><img class="h-full w-full md:object-cover" src="' +
                      e0 +
                      '" alt="" data-v-8d869483></div><div class="z-10 flex flex-col items-center justify-center" data-v-8d869483><div class="hero-img" data-v-8d869483><img width="160" src="' +
                      t0 +
                      '" data-v-8d869483></div><div class="hero-title mt-5 text-center text-xl font-bold" data-v-8d869483> Loading... </div></div>',
                    3
                  )
                ]),
              512
            )),
            [[yf, le(e)]]
          )
      )
    }
  },
  uf = wl(y0, [['__scopeId', 'data-v-8d869483']]),
  x0 = {}
function C0(r, e) {
  const t = uf,
    i = Jm,
    n = _s('router-view'),
    s = xh,
    o = eh
  return J(), ee('div', null, [G(t), G(i), d('main', null, [G(n)]), G(s), G(o)])
}
const k0 = wl(x0, [['render', C0]]),
  E0 = '' + new URL('../img/star-01.svg', import.meta.url).href,
  Fc = '' + new URL('../img/star-04.svg', import.meta.url).href,
  T0 = '' + new URL('../img/star-03.svg', import.meta.url).href,
  S0 = '' + new URL('../img/star-02.svg', import.meta.url).href,
  O0 = '' + new URL('../img/star-05-t.svg', import.meta.url).href,
  A0 = '' + new URL('../img/star-05-b.svg', import.meta.url).href,
  P0 = {
    id: 'kv-main',
    class: 'animate-bounceFloat relative z-10 flex flex-col gap-5'
  },
  Cr = {
    __name: 'Header',
    props: { height: { type: String, default: '600px' } },
    setup(r) {
      const e = './img/'
      return (
        Z.registerPlugin(U),
        qt(() => {
          $a(() => {
            setTimeout(() => {
              Z.fromTo(
                '#kv-main',
                { scale: 1.25, opacity: 0, filter: 'blur(100px)' },
                {
                  scale: 1,
                  opacity: 1,
                  filter: 'blur(0px)',
                  duration: 1.25,
                  ease: 'power4.out',
                  scrollTrigger: {
                    trigger: '#kv-main',
                    start: 'top 100%',
                    toggleActions: 'play none none none',
                    scale: 1.1,
                    yoyo: !0,
                    repeat: '-1'
                  }
                }
              ),
                [
                  '#star-02',
                  '#star-03',
                  '#star-04',
                  '#star-05-b',
                  '#star-06'
                ].forEach((i, n) => {
                  Z.fromTo(
                    i,
                    { scale: n % 2 === 0 ? 0.1 * n : 0.3 * n, rotation: 0 },
                    {
                      scale: 1.1,
                      rotation: 360,
                      repeat: -1,
                      yoyo: !0,
                      delay: 0.5 + n,
                      duration: 2,
                      ease: 'sine.inOut',
                      scrollTrigger: {
                        trigger: i,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                      }
                    }
                  )
                }),
                setTimeout(() => {
                  ;['#star-05', '#star-01'].forEach((n, s) => {
                    Z.fromTo(
                      n,
                      {
                        transformOrigin: '-500% -150% -100px',
                        opacity: 0,
                        scale: 0
                      },
                      {
                        z: 0,
                        scale: 1,
                        opacity: 1,
                        transformOrigin: '500% -150% -100px',
                        delay: 0.25 * s,
                        duration: 0.35,
                        ease: 'power3.inOut',
                        repeatDelay: 2,
                        scrollTrigger: {
                          trigger: n,
                          start: 'top 80%',
                          toggleActions: 'play none none none'
                        }
                      }
                    )
                  })
                }, 500)
            }, 400)
          })
        }),
        (t, i) => (
          J(),
          ee(
            'header',
            {
              class: ei(
                'relative z-10 flex h-[600px] w-screen items-center justify-center bg-cover bg-no-repeat'
              ),
              style: Cf({
                backgroundImage: `url(${le(e)}/kv-main.jpg)`,
                backgroundPosition: 'center right'
              })
            },
            [
              i[0] ||
                (i[0] = pi(
                  '<span id="star-01" class="absolute left-6 top-[50px] w-[190px] md:left-[200px] md:w-[300px]"><img class="scroll-animate-bouncePulse" src="' +
                    E0 +
                    '" alt=""></span><span id="star-06" class="absolute right-8 top-[100px] md:left-[100px] md:right-auto"><img src="' +
                    Fc +
                    '" alt=""></span><span id="star-03" class="absolute right-[80px] top-[220px] w-[70px] md:left-20 md:right-auto md:w-auto"><img src="' +
                    T0 +
                    '" alt=""></span><span id="star-04" class="absolute bottom-20 right-28 md:left-48 md:right-auto"><img src="' +
                    Fc +
                    '" alt=""></span><span id="star-02" class="absolute bottom-28 right-10 md:right-10"><img src="' +
                    S0 +
                    '" alt=""></span><span id="star-05" class="absolute hidden w-[150px] md:right-20 md:top-[200px] md:block"><div class="relative"><img class="absolute -bottom-10 -right-12" src="' +
                    O0 +
                    '" alt=""><img id="star-05-b" class="absolute left-4 top-0 w-[70px]" src="' +
                    A0 +
                    '" alt=""></div></span>',
                  6
                )),
              d('div', P0, [xf(t.$slots, 'default')])
            ],
            4
          )
        )
      )
    }
  },
  M0 = '' + new URL('../img/kv-main.svg', import.meta.url).href,
  kr = '' + new URL('../img/kv-main-img.svg', import.meta.url).href,
  L0 = '' + new URL('../img/title-video.svg', import.meta.url).href,
  br = '' + new URL('../img/bg-green-line-b.svg', import.meta.url).href,
  Uc = '' + new URL('../img/index-intro-01.png', import.meta.url).href,
  D0 = '' + new URL('../img/page-title-01.svg', import.meta.url).href,
  R0 = '' + new URL('../img/index-intro-icon-01.svg', import.meta.url).href,
  $0 = '' + new URL('../img/index-intro-02.png', import.meta.url).href,
  z0 = '' + new URL('../img/page-title-02.svg', import.meta.url).href,
  I0 = '' + new URL('../img/index-intro-icon-02.svg', import.meta.url).href,
  Hc = '' + new URL('../img/index-intro-03.png', import.meta.url).href,
  B0 = '' + new URL('../img/page-title-03.svg', import.meta.url).href,
  N0 = '' + new URL('../img/index-intro-icon-03.svg', import.meta.url).href,
  j0 = '' + new URL('../img/index-intro-04.png', import.meta.url).href,
  F0 = '' + new URL('../img/page-title-04.svg', import.meta.url).href,
  U0 = '' + new URL('../img/index-intro-icon-04.svg', import.meta.url).href,
  H0 = '' + new URL('../img/title-ticket.svg', import.meta.url).href,
  V0 = '' + new URL('../img/ticket-01.svg', import.meta.url).href,
  q0 = '' + new URL('../img/ticket-02.svg', import.meta.url).href,
  W0 = '' + new URL('../img/ticket-03.svg', import.meta.url).href,
  Y0 = '' + new URL('../img/index-gift-title-01.svg', import.meta.url).href,
  Vc = '' + new URL('../img/gift_01.png', import.meta.url).href,
  X0 = '' + new URL('../img/index-gift-title-02.svg', import.meta.url).href,
  df = '' + new URL('../img/modal-close.svg', import.meta.url).href,
  ff = [
    'eventsPrefix',
    'injectStyles',
    'injectStylesUrls',
    'modules',
    'init',
    '_direction',
    'oneWayMovement',
    'swiperElementNodeName',
    'touchEventsTarget',
    'initialSlide',
    '_speed',
    'cssMode',
    'updateOnWindowResize',
    'resizeObserver',
    'nested',
    'focusableElements',
    '_enabled',
    '_width',
    '_height',
    'preventInteractionOnTransition',
    'userAgent',
    'url',
    '_edgeSwipeDetection',
    '_edgeSwipeThreshold',
    '_freeMode',
    '_autoHeight',
    'setWrapperSize',
    'virtualTranslate',
    '_effect',
    'breakpoints',
    'breakpointsBase',
    '_spaceBetween',
    '_slidesPerView',
    'maxBackfaceHiddenSlides',
    '_grid',
    '_slidesPerGroup',
    '_slidesPerGroupSkip',
    '_slidesPerGroupAuto',
    '_centeredSlides',
    '_centeredSlidesBounds',
    '_slidesOffsetBefore',
    '_slidesOffsetAfter',
    'normalizeSlideIndex',
    '_centerInsufficientSlides',
    '_watchOverflow',
    'roundLengths',
    'touchRatio',
    'touchAngle',
    'simulateTouch',
    '_shortSwipes',
    '_longSwipes',
    'longSwipesRatio',
    'longSwipesMs',
    '_followFinger',
    'allowTouchMove',
    '_threshold',
    'touchMoveStopPropagation',
    'touchStartPreventDefault',
    'touchStartForcePreventDefault',
    'touchReleaseOnEdges',
    'uniqueNavElements',
    '_resistance',
    '_resistanceRatio',
    '_watchSlidesProgress',
    '_grabCursor',
    'preventClicks',
    'preventClicksPropagation',
    '_slideToClickedSlide',
    '_loop',
    'loopAdditionalSlides',
    'loopAddBlankSlides',
    'loopPreventsSliding',
    '_rewind',
    '_allowSlidePrev',
    '_allowSlideNext',
    '_swipeHandler',
    '_noSwiping',
    'noSwipingClass',
    'noSwipingSelector',
    'passiveListeners',
    'containerModifierClass',
    'slideClass',
    'slideActiveClass',
    'slideVisibleClass',
    'slideFullyVisibleClass',
    'slideNextClass',
    'slidePrevClass',
    'slideBlankClass',
    'wrapperClass',
    'lazyPreloaderClass',
    'lazyPreloadPrevNext',
    'runCallbacksOnInit',
    'observer',
    'observeParents',
    'observeSlideChildren',
    'a11y',
    '_autoplay',
    '_controller',
    'coverflowEffect',
    'cubeEffect',
    'fadeEffect',
    'flipEffect',
    'creativeEffect',
    'cardsEffect',
    'hashNavigation',
    'history',
    'keyboard',
    'mousewheel',
    '_navigation',
    '_pagination',
    'parallax',
    '_scrollbar',
    '_thumbs',
    'virtual',
    'zoom',
    'control'
  ]
function zn(r) {
  return (
    typeof r == 'object' &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === 'Object' &&
    !r.__swiper__
  )
}
function or(r, e) {
  const t = ['__proto__', 'constructor', 'prototype']
  Object.keys(e)
    .filter((i) => t.indexOf(i) < 0)
    .forEach((i) => {
      typeof r[i] > 'u'
        ? (r[i] = e[i])
        : zn(e[i]) && zn(r[i]) && Object.keys(e[i]).length > 0
          ? e[i].__swiper__
            ? (r[i] = e[i])
            : or(r[i], e[i])
          : (r[i] = e[i])
    })
}
function pf(r) {
  return (
    r === void 0 && (r = {}),
    r.navigation &&
      typeof r.navigation.nextEl > 'u' &&
      typeof r.navigation.prevEl > 'u'
  )
}
function hf(r) {
  return r === void 0 && (r = {}), r.pagination && typeof r.pagination.el > 'u'
}
function gf(r) {
  return r === void 0 && (r = {}), r.scrollbar && typeof r.scrollbar.el > 'u'
}
function mf(r) {
  r === void 0 && (r = '')
  const e = r
      .split(' ')
      .map((i) => i.trim())
      .filter((i) => !!i),
    t = []
  return (
    e.forEach((i) => {
      t.indexOf(i) < 0 && t.push(i)
    }),
    t.join(' ')
  )
}
function G0(r) {
  return (
    r === void 0 && (r = ''),
    r
      ? r.includes('swiper-wrapper')
        ? r
        : `swiper-wrapper ${r}`
      : 'swiper-wrapper'
  )
}
function Z0(r) {
  let {
    swiper: e,
    slides: t,
    passedParams: i,
    changedParams: n,
    nextEl: s,
    prevEl: o,
    scrollbarEl: a,
    paginationEl: l
  } = r
  const c = n.filter(
      (b) => b !== 'children' && b !== 'direction' && b !== 'wrapperClass'
    ),
    {
      params: u,
      pagination: p,
      navigation: h,
      scrollbar: f,
      virtual: m,
      thumbs: g
    } = e
  let _, k, T, x, v, y, E, C
  n.includes('thumbs') &&
    i.thumbs &&
    i.thumbs.swiper &&
    !i.thumbs.swiper.destroyed &&
    u.thumbs &&
    (!u.thumbs.swiper || u.thumbs.swiper.destroyed) &&
    (_ = !0),
    n.includes('controller') &&
      i.controller &&
      i.controller.control &&
      u.controller &&
      !u.controller.control &&
      (k = !0),
    n.includes('pagination') &&
      i.pagination &&
      (i.pagination.el || l) &&
      (u.pagination || u.pagination === !1) &&
      p &&
      !p.el &&
      (T = !0),
    n.includes('scrollbar') &&
      i.scrollbar &&
      (i.scrollbar.el || a) &&
      (u.scrollbar || u.scrollbar === !1) &&
      f &&
      !f.el &&
      (x = !0),
    n.includes('navigation') &&
      i.navigation &&
      (i.navigation.prevEl || o) &&
      (i.navigation.nextEl || s) &&
      (u.navigation || u.navigation === !1) &&
      h &&
      !h.prevEl &&
      !h.nextEl &&
      (v = !0)
  const S = (b) => {
    e[b] &&
      (e[b].destroy(),
      b === 'navigation'
        ? (e.isElement && (e[b].prevEl.remove(), e[b].nextEl.remove()),
          (u[b].prevEl = void 0),
          (u[b].nextEl = void 0),
          (e[b].prevEl = void 0),
          (e[b].nextEl = void 0))
        : (e.isElement && e[b].el.remove(),
          (u[b].el = void 0),
          (e[b].el = void 0)))
  }
  n.includes('loop') &&
    e.isElement &&
    (u.loop && !i.loop ? (y = !0) : !u.loop && i.loop ? (E = !0) : (C = !0)),
    c.forEach((b) => {
      if (zn(u[b]) && zn(i[b]))
        Object.assign(u[b], i[b]),
          (b === 'navigation' || b === 'pagination' || b === 'scrollbar') &&
            'enabled' in i[b] &&
            !i[b].enabled &&
            S(b)
      else {
        const O = i[b]
        ;(O === !0 || O === !1) &&
        (b === 'navigation' || b === 'pagination' || b === 'scrollbar')
          ? O === !1 && S(b)
          : (u[b] = i[b])
      }
    }),
    c.includes('controller') &&
      !k &&
      e.controller &&
      e.controller.control &&
      u.controller &&
      u.controller.control &&
      (e.controller.control = u.controller.control),
    n.includes('children') && t && m && u.virtual.enabled
      ? ((m.slides = t), m.update(!0))
      : n.includes('virtual') &&
        m &&
        u.virtual.enabled &&
        (t && (m.slides = t), m.update(!0)),
    n.includes('children') && t && u.loop && (C = !0),
    _ && g.init() && g.update(!0),
    k && (e.controller.control = u.controller.control),
    T &&
      (e.isElement &&
        (!l || typeof l == 'string') &&
        ((l = document.createElement('div')),
        l.classList.add('swiper-pagination'),
        l.part.add('pagination'),
        e.el.appendChild(l)),
      l && (u.pagination.el = l),
      p.init(),
      p.render(),
      p.update()),
    x &&
      (e.isElement &&
        (!a || typeof a == 'string') &&
        ((a = document.createElement('div')),
        a.classList.add('swiper-scrollbar'),
        a.part.add('scrollbar'),
        e.el.appendChild(a)),
      a && (u.scrollbar.el = a),
      f.init(),
      f.updateSize(),
      f.setTranslate()),
    v &&
      (e.isElement &&
        ((!s || typeof s == 'string') &&
          ((s = document.createElement('div')),
          s.classList.add('swiper-button-next'),
          (s.innerHTML = e.hostEl.constructor.nextButtonSvg),
          s.part.add('button-next'),
          e.el.appendChild(s)),
        (!o || typeof o == 'string') &&
          ((o = document.createElement('div')),
          o.classList.add('swiper-button-prev'),
          (o.innerHTML = e.hostEl.constructor.prevButtonSvg),
          o.part.add('button-prev'),
          e.el.appendChild(o))),
      s && (u.navigation.nextEl = s),
      o && (u.navigation.prevEl = o),
      h.init(),
      h.update()),
    n.includes('allowSlideNext') && (e.allowSlideNext = i.allowSlideNext),
    n.includes('allowSlidePrev') && (e.allowSlidePrev = i.allowSlidePrev),
    n.includes('direction') && e.changeDirection(i.direction, !1),
    (y || C) && e.loopDestroy(),
    (E || C) && e.loopCreate(),
    e.update()
}
function qc(r, e) {
  r === void 0 && (r = {})
  const t = { on: {} },
    i = {},
    n = {}
  or(t, Df), (t._emitClasses = !0), (t.init = !1)
  const s = {},
    o = ff.map((l) => l.replace(/_/, '')),
    a = Object.assign({}, r)
  return (
    Object.keys(a).forEach((l) => {
      typeof r[l] > 'u' ||
        (o.indexOf(l) >= 0
          ? zn(r[l])
            ? ((t[l] = {}), (n[l] = {}), or(t[l], r[l]), or(n[l], r[l]))
            : ((t[l] = r[l]), (n[l] = r[l]))
          : l.search(/on[A-Z]/) === 0 && typeof r[l] == 'function'
            ? (t.on[`${l[2].toLowerCase()}${l.substr(3)}`] = r[l])
            : (s[l] = r[l]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((l) => {
      t[l] === !0 && (t[l] = {}), t[l] === !1 && delete t[l]
    }),
    { params: t, passedParams: n, rest: s, events: i }
  )
}
function K0(r, e) {
  let {
    el: t,
    nextEl: i,
    prevEl: n,
    paginationEl: s,
    scrollbarEl: o,
    swiper: a
  } = r
  pf(e) &&
    i &&
    n &&
    ((a.params.navigation.nextEl = i),
    (a.originalParams.navigation.nextEl = i),
    (a.params.navigation.prevEl = n),
    (a.originalParams.navigation.prevEl = n)),
    hf(e) &&
      s &&
      ((a.params.pagination.el = s), (a.originalParams.pagination.el = s)),
    gf(e) &&
      o &&
      ((a.params.scrollbar.el = o), (a.originalParams.scrollbar.el = o)),
    a.init(t)
}
function Q0(r, e, t, i, n) {
  const s = []
  if (!e) return s
  const o = (l) => {
    s.indexOf(l) < 0 && s.push(l)
  }
  if (t && i) {
    const l = i.map(n),
      c = t.map(n)
    l.join('') !== c.join('') && o('children'),
      i.length !== t.length && o('children')
  }
  return (
    ff
      .filter((l) => l[0] === '_')
      .map((l) => l.replace(/_/, ''))
      .forEach((l) => {
        if (l in r && l in e)
          if (zn(r[l]) && zn(e[l])) {
            const c = Object.keys(r[l]),
              u = Object.keys(e[l])
            c.length !== u.length
              ? o(l)
              : (c.forEach((p) => {
                  r[l][p] !== e[l][p] && o(l)
                }),
                u.forEach((p) => {
                  r[l][p] !== e[l][p] && o(l)
                }))
          } else r[l] !== e[l] && o(l)
      }),
    s
  )
}
const J0 = (r) => {
  !r ||
    r.destroyed ||
    !r.params.virtual ||
    (r.params.virtual && !r.params.virtual.enabled) ||
    (r.updateSlides(),
    r.updateProgress(),
    r.updateSlidesClasses(),
    r.parallax &&
      r.params.parallax &&
      r.params.parallax.enabled &&
      r.parallax.setTranslate())
}
function Jo(r, e, t) {
  r === void 0 && (r = {})
  const i = [],
    n = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': []
    },
    s = (o, a) => {
      Array.isArray(o) &&
        o.forEach((l) => {
          const c = typeof l.type == 'symbol'
          a === 'default' && (a = 'container-end'),
            c && l.children
              ? s(l.children, a)
              : (l.type &&
                    (l.type.name === 'SwiperSlide' ||
                      l.type.name === 'AsyncComponentWrapper')) ||
                  (l.componentOptions &&
                    l.componentOptions.tag === 'SwiperSlide')
                ? i.push(l)
                : n[a] && n[a].push(l)
        })
    }
  return (
    Object.keys(r).forEach((o) => {
      if (typeof r[o] != 'function') return
      const a = r[o]()
      s(a, o)
    }),
    (t.value = e.value),
    (e.value = i),
    { slides: i, slots: n }
  )
}
function e1(r, e, t) {
  if (!t) return null
  const i = (u) => {
      let p = u
      return u < 0 ? (p = e.length + u) : p >= e.length && (p = p - e.length), p
    },
    n = r.value.isHorizontal()
      ? { [r.value.rtlTranslate ? 'right' : 'left']: `${t.offset}px` }
      : { top: `${t.offset}px` },
    { from: s, to: o } = t,
    a = r.value.params.loop ? -e.length : 0,
    l = r.value.params.loop ? e.length * 2 : e.length,
    c = []
  for (let u = a; u < l; u += 1)
    u >= s && u <= o && c.length < e.length && c.push(e[i(u)])
  return c.map((u) => {
    if (
      (u.props || (u.props = {}),
      u.props.style || (u.props.style = {}),
      (u.props.swiperRef = r),
      (u.props.style = n),
      u.type)
    )
      return Xt(u.type, { ...u.props }, u.children)
    if (u.componentOptions)
      return Xt(
        u.componentOptions.Ctor,
        { ...u.props },
        u.componentOptions.children
      )
  })
}
const t1 = {
    name: 'Swiper',
    props: {
      tag: { type: String, default: 'div' },
      wrapperTag: { type: String, default: 'div' },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      swiperElementNodeName: { type: String, default: 'SWIPER-CONTAINER' },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      breakpointsBase: { type: String, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 }
    },
    emits: [
      '_beforeBreakpoint',
      '_containerClasses',
      '_slideClass',
      '_slideClasses',
      '_swiper',
      '_freeModeNoMomentumRelease',
      'activeIndexChange',
      'afterInit',
      'autoplay',
      'autoplayStart',
      'autoplayStop',
      'autoplayPause',
      'autoplayResume',
      'autoplayTimeLeft',
      'beforeDestroy',
      'beforeInit',
      'beforeLoopFix',
      'beforeResize',
      'beforeSlideChangeStart',
      'beforeTransitionStart',
      'breakpoint',
      'changeDirection',
      'click',
      'disable',
      'doubleTap',
      'doubleClick',
      'destroy',
      'enable',
      'fromEdge',
      'hashChange',
      'hashSet',
      'init',
      'keyPress',
      'lock',
      'loopFix',
      'momentumBounce',
      'navigationHide',
      'navigationShow',
      'navigationPrev',
      'navigationNext',
      'observerUpdate',
      'orientationchange',
      'paginationHide',
      'paginationRender',
      'paginationShow',
      'paginationUpdate',
      'progress',
      'reachBeginning',
      'reachEnd',
      'realIndexChange',
      'resize',
      'scroll',
      'scrollbarDragEnd',
      'scrollbarDragMove',
      'scrollbarDragStart',
      'setTransition',
      'setTranslate',
      'slidesUpdated',
      'slideChange',
      'slideChangeTransitionEnd',
      'slideChangeTransitionStart',
      'slideNextTransitionEnd',
      'slideNextTransitionStart',
      'slidePrevTransitionEnd',
      'slidePrevTransitionStart',
      'slideResetTransitionStart',
      'slideResetTransitionEnd',
      'sliderMove',
      'sliderFirstMove',
      'slidesLengthChange',
      'slidesGridLengthChange',
      'snapGridLengthChange',
      'snapIndexChange',
      'swiper',
      'tap',
      'toEdge',
      'touchEnd',
      'touchMove',
      'touchMoveOpposite',
      'touchStart',
      'transitionEnd',
      'transitionStart',
      'unlock',
      'update',
      'virtualUpdate',
      'zoomChange'
    ],
    setup(r, e) {
      let { slots: t, emit: i } = e
      const { tag: n, wrapperTag: s } = r,
        o = Le('swiper'),
        a = Le(null),
        l = Le(!1),
        c = Le(!1),
        u = Le(null),
        p = Le(null),
        h = Le(null),
        f = { value: [] },
        m = { value: [] },
        g = Le(null),
        _ = Le(null),
        k = Le(null),
        T = Le(null),
        { params: x, passedParams: v } = qc(r)
      Jo(t, f, m), (h.value = v), (m.value = f.value)
      const y = () => {
        Jo(t, f, m), (l.value = !0)
      }
      ;(x.onAny = function (S) {
        for (
          var b = arguments.length, O = new Array(b > 1 ? b - 1 : 0), M = 1;
          M < b;
          M++
        )
          O[M - 1] = arguments[M]
        i(S, ...O)
      }),
        Object.assign(x.on, {
          _beforeBreakpoint: y,
          _containerClasses(S, b) {
            o.value = b
          }
        })
      const E = { ...x }
      if (
        (delete E.wrapperClass,
        (p.value = new Rf(E)),
        p.value.virtual && p.value.params.virtual.enabled)
      ) {
        p.value.virtual.slides = f.value
        const S = {
          cache: !1,
          slides: f.value,
          renderExternal: (b) => {
            a.value = b
          },
          renderExternalUpdate: !1
        }
        or(p.value.params.virtual, S), or(p.value.originalParams.virtual, S)
      }
      Gc(() => {
        !c.value && p.value && (p.value.emitSlidesClasses(), (c.value = !0))
        const { passedParams: S } = qc(r),
          b = Q0(S, h.value, f.value, m.value, (O) => O.props && O.props.key)
        ;(h.value = S),
          (b.length || l.value) &&
            p.value &&
            !p.value.destroyed &&
            Z0({
              swiper: p.value,
              slides: f.value,
              passedParams: S,
              changedParams: b,
              nextEl: g.value,
              prevEl: _.value,
              scrollbarEl: T.value,
              paginationEl: k.value
            }),
          (l.value = !1)
      }),
        Zc('swiper', p),
        kf(a, () => {
          $a(() => {
            J0(p.value)
          })
        }),
        qt(() => {
          u.value &&
            (K0(
              {
                el: u.value,
                nextEl: g.value,
                prevEl: _.value,
                paginationEl: k.value,
                scrollbarEl: T.value,
                swiper: p.value
              },
              x
            ),
            i('swiper', p.value))
        }),
        Kc(() => {
          p.value && !p.value.destroyed && p.value.destroy(!0, !1)
        })
      function C(S) {
        return x.virtual
          ? e1(p, S, a.value)
          : (S.forEach((b, O) => {
              b.props || (b.props = {}),
                (b.props.swiperRef = p),
                (b.props.swiperSlideIndex = O)
            }),
            S)
      }
      return () => {
        const { slides: S, slots: b } = Jo(t, f, m)
        return Xt(n, { ref: u, class: mf(o.value) }, [
          b['container-start'],
          Xt(s, { class: G0(x.wrapperClass) }, [
            b['wrapper-start'],
            C(S),
            b['wrapper-end']
          ]),
          pf(r) && [
            Xt('div', { ref: _, class: 'swiper-button-prev' }),
            Xt('div', { ref: g, class: 'swiper-button-next' })
          ],
          gf(r) && Xt('div', { ref: T, class: 'swiper-scrollbar' }),
          hf(r) && Xt('div', { ref: k, class: 'swiper-pagination' }),
          b['container-end']
        ])
      }
    }
  },
  ea = {
    name: 'SwiperSlide',
    props: {
      tag: { type: String, default: 'div' },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 }
    },
    setup(r, e) {
      let { slots: t } = e,
        i = !1
      const { swiperRef: n } = r,
        s = Le(null),
        o = Le('swiper-slide'),
        a = Le(!1)
      function l(p, h, f) {
        h === s.value && (o.value = f)
      }
      qt(() => {
        !n || !n.value || (n.value.on('_slideClass', l), (i = !0))
      }),
        Ef(() => {
          i || !n || !n.value || (n.value.on('_slideClass', l), (i = !0))
        }),
        Gc(() => {
          !s.value ||
            !n ||
            !n.value ||
            (typeof r.swiperSlideIndex < 'u' &&
              (s.value.swiperSlideIndex = r.swiperSlideIndex),
            n.value.destroyed &&
              o.value !== 'swiper-slide' &&
              (o.value = 'swiper-slide'))
        }),
        Kc(() => {
          !n || !n.value || n.value.off('_slideClass', l)
        })
      const c = Tf(() => ({
        isActive: o.value.indexOf('swiper-slide-active') >= 0,
        isVisible: o.value.indexOf('swiper-slide-visible') >= 0,
        isPrev: o.value.indexOf('swiper-slide-prev') >= 0,
        isNext: o.value.indexOf('swiper-slide-next') >= 0
      }))
      Zc('swiperSlide', c)
      const u = () => {
        a.value = !0
      }
      return () =>
        Xt(
          r.tag,
          {
            class: mf(`${o.value}`),
            ref: s,
            'data-swiper-slide-index':
              typeof r.virtualIndex > 'u' && n && n.value && n.value.params.loop
                ? r.swiperSlideIndex
                : r.virtualIndex,
            onLoadCapture: u
          },
          r.zoom
            ? Xt(
                'div',
                {
                  class: 'swiper-zoom-container',
                  'data-swiper-zoom':
                    typeof r.zoom == 'number' ? r.zoom : void 0
                },
                [
                  t.default && t.default(c.value),
                  r.lazy &&
                    !a.value &&
                    Xt('div', { class: 'swiper-lazy-preloader' })
                ]
              )
            : [
                t.default && t.default(c.value),
                r.lazy &&
                  !a.value &&
                  Xt('div', { class: 'swiper-lazy-preloader' })
              ]
        )
    }
  }
function i1(r) {
  let { swiper: e, extendParams: t, on: i, emit: n, params: s } = r
  ;(e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    })
  let o,
    a,
    l = s && s.autoplay ? s.autoplay.delay : 3e3,
    c = s && s.autoplay ? s.autoplay.delay : 3e3,
    u,
    p = new Date().getTime(),
    h,
    f,
    m,
    g,
    _,
    k,
    T
  function x(D) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (D.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener('transitionend', x),
        !(T || (D.detail && D.detail.bySwiperTouchMove)) && O()))
  }
  const v = () => {
      if (e.destroyed || !e.autoplay.running) return
      e.autoplay.paused ? (h = !0) : h && ((c = u), (h = !1))
      const D = e.autoplay.paused ? u : p + c - new Date().getTime()
      ;(e.autoplay.timeLeft = D),
        n('autoplayTimeLeft', D, D / l),
        (a = requestAnimationFrame(() => {
          v()
        }))
    },
    y = () => {
      let D
      return (
        e.virtual && e.params.virtual.enabled
          ? (D = e.slides.filter((w) =>
              w.classList.contains('swiper-slide-active')
            )[0])
          : (D = e.slides[e.activeIndex]),
        D ? parseInt(D.getAttribute('data-swiper-autoplay'), 10) : void 0
      )
    },
    E = (D) => {
      if (e.destroyed || !e.autoplay.running) return
      cancelAnimationFrame(a), v()
      let V = typeof D > 'u' ? e.params.autoplay.delay : D
      ;(l = e.params.autoplay.delay), (c = e.params.autoplay.delay)
      const w = y()
      !Number.isNaN(w) &&
        w > 0 &&
        typeof D > 'u' &&
        ((V = w), (l = w), (c = w)),
        (u = V)
      const te = e.params.speed,
        me = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(te, !0, !0), n('autoplay'))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, te, !0, !0), n('autoplay'))
              : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(te, !0, !0), n('autoplay'))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, te, !0, !0), n('autoplay')),
            e.params.cssMode &&
              ((p = new Date().getTime()),
              requestAnimationFrame(() => {
                E()
              })))
        }
      return (
        V > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              me()
            }, V)))
          : requestAnimationFrame(() => {
              me()
            }),
        V
      )
    },
    C = () => {
      ;(p = new Date().getTime()),
        (e.autoplay.running = !0),
        E(),
        n('autoplayStart')
    },
    S = () => {
      ;(e.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(a),
        n('autoplayStop')
    },
    b = (D, V) => {
      if (e.destroyed || !e.autoplay.running) return
      clearTimeout(o), D || (k = !0)
      const w = () => {
        n('autoplayPause'),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener('transitionend', x)
            : O()
      }
      if (((e.autoplay.paused = !0), V)) {
        _ && (u = e.params.autoplay.delay), (_ = !1), w()
        return
      }
      ;(u = (u || e.params.autoplay.delay) - (new Date().getTime() - p)),
        !(e.isEnd && u < 0 && !e.params.loop) && (u < 0 && (u = 0), w())
    },
    O = () => {
      ;(e.isEnd && u < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((p = new Date().getTime()),
        k ? ((k = !1), E(u)) : E(),
        (e.autoplay.paused = !1),
        n('autoplayResume'))
    },
    M = () => {
      if (e.destroyed || !e.autoplay.running) return
      const D = ko()
      D.visibilityState === 'hidden' && ((k = !0), b(!0)),
        D.visibilityState === 'visible' && O()
    },
    P = (D) => {
      D.pointerType === 'mouse' &&
        ((k = !0), (T = !0), !(e.animating || e.autoplay.paused) && b(!0))
    },
    z = (D) => {
      D.pointerType === 'mouse' && ((T = !1), e.autoplay.paused && O())
    },
    F = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener('pointerenter', P),
        e.el.addEventListener('pointerleave', z))
    },
    H = () => {
      e.el &&
        typeof e.el != 'string' &&
        (e.el.removeEventListener('pointerenter', P),
        e.el.removeEventListener('pointerleave', z))
    },
    B = () => {
      ko().addEventListener('visibilitychange', M)
    },
    $ = () => {
      ko().removeEventListener('visibilitychange', M)
    }
  i('init', () => {
    e.params.autoplay.enabled && (F(), B(), C())
  }),
    i('destroy', () => {
      H(), $(), e.autoplay.running && S()
    }),
    i('_freeModeStaticRelease', () => {
      ;(m || k) && O()
    }),
    i('_freeModeNoMomentumRelease', () => {
      e.params.autoplay.disableOnInteraction ? S() : b(!0, !0)
    }),
    i('beforeTransitionStart', (D, V, w) => {
      e.destroyed ||
        !e.autoplay.running ||
        (w || !e.params.autoplay.disableOnInteraction ? b(!0, !0) : S())
    }),
    i('sliderFirstMove', () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          S()
          return
        }
        ;(f = !0),
          (m = !1),
          (k = !1),
          (g = setTimeout(() => {
            ;(k = !0), (m = !0), b(!0)
          }, 200))
      }
    }),
    i('touchEnd', () => {
      if (!(e.destroyed || !e.autoplay.running || !f)) {
        if (
          (clearTimeout(g),
          clearTimeout(o),
          e.params.autoplay.disableOnInteraction)
        ) {
          ;(m = !1), (f = !1)
          return
        }
        m && e.params.cssMode && O(), (m = !1), (f = !1)
      }
    }),
    i('slideChange', () => {
      e.destroyed || !e.autoplay.running || (_ = !0)
    }),
    Object.assign(e.autoplay, { start: C, stop: S, pause: b, resume: O })
}
const n1 = { class: 'bg-green py-16' },
  r1 = { class: 'container relative flex w-full flex-col gap-10' },
  s1 = {
    class:
      'flex flex-wrap items-center justify-between md:flex-nowrap lg:items-stretch xl:gap-5'
  },
  o1 = { class: 'order-2 w-full md:max-w-[590px]' },
  a1 = { class: 'bg-yellow py-16' },
  l1 = { class: 'container' },
  c1 = { class: 'flex flex-wrap gap-14 pt-8 md:mt-10 md:flex-nowrap md:gap-8' },
  u1 = { class: 'mb-8 mt-10 flex flex-col gap-2 text-center font-bold' },
  d1 = {
    'data-twe-modal-init': '',
    class:
      'fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden p-6 outline-none',
    id: 'exampleModalScrollable',
    tabindex: '-1',
    'aria-labelledby': 'exampleModalScrollableLabel',
    'aria-hidden': 'true'
  },
  f1 = {
    'data-twe-modal-dialog-ref': '',
    class:
      'pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]'
  },
  p1 = {
    class:
      'pointer-events-auto relative flex max-h-[100%] w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark'
  },
  h1 = { class: 'relative overflow-y-auto p-6' },
  g1 = { class: 'flex flex-col gap-5 divide-y text-justify' },
  m1 = { class: 'mb-3' },
  _1 = ['src', 'alt'],
  v1 = { class: 'mb-3 text-center text-xl font-bold' },
  b1 = { class: 'mb-1' },
  w1 = ['innerHTML'],
  y1 = ['innerHTML'],
  x1 = {
    __name: 'Index',
    setup(r) {
      const e = './img/'
      U.create({ start: 'top center', end: 'bottom center', debounce: !0 })
      const t = Le(),
        i = [
          {
            id: '/gift-early-bird/01.png',
            brand: '美琪',
            title: '抗菌洗手慕斯隨身瓶50ML​',
            description: `
          <ul>
            <li>★【輕便隨身攜帶】小巧50ML設計，輕鬆放入包包   或口袋，隨時隨地保持手部清潔。一瓶可洗淨雙手約60次。​</li>
            <li>★【植萃安心防護】含茶樹、百里香、金盞菊三大天然植萃精華，呵護肌膚並提供溫和抗菌效果，適合全家人使用。​</li>
            <li>★【實驗證明有效抗菌】採用衛福部認可的抗菌成分，並經 SGS 檢測驗證，能有效抑制有害細菌，守護健康。</li>
          </ul>
        `
          },
          {
            id: '/gift-early-bird/02.png',
            brand: '德恩奈​',
            title: '潔牙雙星組​',
            description: `
           <ul class='flex flex-col gap-3'>
              <li>內含德恩奈清淨涼牙膏1支+德恩奈極淨細絲牙刷2支。</li>
              <li>
                德恩奈清淨涼牙膏採用特選歐薄荷結合濃郁冬青香，讓口氣散發清新自然好口氣，開口微笑更有自信，專業氟鈣配方搭配正確刷牙習慣可幫助修護受損琺瑯質及預防蛀牙。歐洲百年牙膏大廠生產製造，100%德國原裝進口，堅持好品質。
              </li>
              <li>
                德恩奈極淨細絲牙刷，台灣製造，採用超柔軟纖絲立體刷毛，搭配「潔淨長纖」與「護齦短纖」二種刷毛，只要輕輕的刷洗，並配合貝氏刷牙法，即可輕鬆清潔口腔，確保牙齒及牙齦健康，預防牙周病及蛀牙。
              </li>
            </ul>
          `
          },
          {
            id: '/gift-early-bird/03.png',
            brand: '小兒利撒爾',
            title: '維生素D3+K2口含錠',
            description: `
          <ul class='flex flex-col gap-3'>
            <li>
              ★專業藥師、營養師推薦！專為兒童骨骼發育設計，結合維生素D3和K2，有助於鈣質吸收和利用，幫助骨骼與牙齒生長發育。
            </li>
            <li>★神奇雪花般速溶口感，免咀嚼、配水，適合飯後補充，微甜新滋味。</li>
            <li>納豆菌發酵K2，純淨來源營養。</li>
            <li>★羊毛脂萃取D3+</li>
            <li>
              ★小兒利撒爾60年的專業兒童健康守護，無塑化劑、重金屬、防腐劑、人工色素等拒絕成分，定期專業檢驗透明報告，媽媽安心的選擇。
            </li>
          </ul>
        `
          },
          {
            id: '/gift-early-bird/04.jpg',
            brand: '兒福聯盟',
            title: 'No Hit Zone｜野餐墊',
            description: `
          <ul class='flex flex-col gap-3'>
            <li>
              兒福聯盟致力於兒童福利發展、孩子的情緒與永續教育，野餐墊以象徵大人的「泡福」和代表小朋友的「心仔」為出發設計，闡述小朋友從起床、去學校，回家的一日生活。心仔整天會發生哪些事呢？當遇到圖上情境時，泡福要怎麼和心仔溝通，心仔又希望泡福如何和他討論傾聽心中的需求與期待，請家長帶著孩子一同演練吧！期待透過野餐墊陪伴您與孩子出遊共處，相信共同努力，能創造一個充滿愛、尊重和支持的家庭與社會。
            </li>
          </ul>
        `
          },
          {
            id: '/gift-early-bird/05.png',
            brand: '清淨海',
            title: '純淨泰迪植萃酵素洗衣膠囊(香味隨機) 5g*30顆/包',
            description: `
        <ul class='flex flex-col gap-3'>
          <li>
            清淨海純淨系列洗衣膠囊添加七大酵素瓦解多元髒污，堅持選用植物萃取配方，回歸原始潔淨感，不添加多餘的有害化學物質，友善敏感肌膚者，也不添加螢光增白劑，安心清洗貼身衣物與嬰幼兒衣服，適合各種家庭與族群。
          </li>
          <li>★添加植萃配方與七大酵素</li>
          <li>★100%水溶性環保膠囊膜</li>
          <li>★榮獲臺美中發明專利</li>
          <li>★無動物實驗無有害成分</li>
          <li>★10倍超濃縮抗菌配方</li>
        </ul>
      `
          },
          {
            id: '/gift-lucky-bag/06.jpg',
            brand: '果利生技',
            title: 'SPD高濃度魚油EX(10入)',
            description: `
        <ul>
          <li>Omega-3高濃度魚油，SGS檢驗高達98.6%！促進新陳代謝的救星，讓健康全面升級。24項專利技術，榮獲世界品質評鑑金獎，品質值得信賴。國際GOED Omega-3會員認證與IFOS 五星最高評價，無腥味、新鮮度有保證，全球權威認可！獨特rTG型式，吸收率提升3倍，小顆易吞食，營養補充更有效！</li>
        </ul>
      `
          }
        ],
        n = [
          {
            id: '/gift-lucky-bag/01.jpg',
            brand: '德恩奈',
            title: '兒童口腔保健組',
            description: `
          <ul class='flex flex-col gap-3'>
            <li>每款內含兒童牙膏90g+前觸兒童牙刷各一支。</li>
            <li>
              德國原裝進口”德恩奈兒童牙膏含氟量1000ppm，專業配方"維他命E+氟+鈣"配合正確刷牙習慣，幫助預防蛀牙。
            </li>
          </ul>
        `
          },
          {
            id: '/gift-lucky-bag/02.jpg',
            brand: '德恩奈',
            title: '兒童防蛀漱口水500ml',
            description: `
         <ul cl ass="flex flex-col gap-3">
            <li>★強化琺瑯質、抗酸蝕 </li>
            <li>★去除引起蛀牙的細菌，預防蛀牙</li>
            <li>★幫助強健牙齦組織</li>
            <li>
              德恩奈兒童防蛀漱口水，添加「氟+木糖醇」雙效防蛀配方，氟能加強牙齒再礦化作用，木糖醇能中和口中酸性，配合正確刷牙習慣，能更有效幫助預防蛀牙，長期使用能降低蛀牙率35%~50%。
            </li>
            <li>
              不含酒精，口感溫和不刺激，清香葡萄口味，沒有藥水味，不含色素，減少口腔黏膜負擔，是最適合小朋友使用漱口水。"
            </li>
          </ul>
        `
          },
          {
            id: '/gift-lucky-bag/03.jpg',
            brand: 'PURE YU 純淨之羽',
            title: '超能營養QQ凍-晶亮醇兒童葉黃素凍 3入體驗包',
            description: `
          <ul class='flex flex-col gap-3'>
            <li>寶貝提早接觸平板手機，晶亮醇葉黃素凍改善乾澀不適，升級添加PS腦磷脂＋鋅，提升學習成長動力！</li>
            <li>100種蔬果酵素是挑食好幫手，輕鬆補充滿滿營養！</li>
          </ul>
          `
          },
          {
            id: '/gift-lucky-bag/04.jpg',
            brand: '小蚊清',
            title: '植萃沁涼防蚊液_隨身瓶',
            description: `
          <ul class='flex flex-col gap-3'>
            <li>小蚊清全系列皆使用天然來源植萃配方，無添加DEET(敵避)、Paraben防腐劑、重金屬等化學成分，並添加法國有機認證的保濕成分，溫和不刺激，全家大小都適用！採美國高規格水霧噴頭，在皮膚表層形成清爽防護網，蚊蟲OUT！</li>
            <li>★使用日本蚊連草萃取液，天然來源植萃配方，質地清爽，防蚊不黏膩</li>
            <li>★添加法國有機認證保濕成份，溫和不刺激肌膚</li>
            <li>★SGS檢測不含DEET(敵避)、 Paraben防腐劑、重金屬</li>
            <li>★小黑蚊忌避率達99%，皮膚科醫師專業推薦，媽媽安心的選擇</li>
          </ul>
        `
          },
          {
            id: '/gift-lucky-bag/05.jpg',
            brand: '可爾必思',
            title:
              "開心成長1瓶<span class='text-xs'>(原味/蘋果) 兩種口味隨機</span>",
            description: `
          <ul class='flex flex-col gap-3'>
            <li>
              日本百年品牌「可爾必思」專為孩子打造的乳酸菌飲品，清爽酸甜的滋味榮獲袋鼠評鑑五星白金獎，滿足美味與健康雙重需求，陪伴您的寶貝開心成長。
            </li>
            <li>🥛 原味：含牛奶鈣，輕鬆灌鈣快快長大!</li>
            <li>🍎 蘋果：含葉黃素，輕鬆補給明亮元素!</li>
            <li></li>
            <li>★日本獨家乳酸菌，幫助消化好順暢。</li>
            <li>★160ml小包裝，一次一罐剛剛好。</li>
            <li>★常溫保存設計，隨身包裝好攜帶。</li>
          </ul>
        `
          },
          {
            id: '/gift-lucky-bag/06.png',
            brand: '妙管家',
            title: '瞬潔洗潔精(果香葡萄柚)500g',
            description: `
            <ul class='flex flex-col gap-3'>
              <li>#只要一點點 用量省，超去油！</li>
              <li>★【4倍特濃】高濃度去油因子，用量省起泡快，快速發揮深層潔淨力！</li>
              <li>★【  科研導入】妙管家突破性離子乳化科技，Oil-ER Tech高效去油配方，快速分解油污</li>
              <li>★【友善環境】添加歐盟ECOCERT洗淨因子，生物高分解度95%以上，洗後不殘留。</li>
              <li>★【安心溫和】中性配方，清潔碗盤時較不易傷手。</li>
            </ul>
          `
          },
          {
            id: '/gift-lucky-bag/07.jpg',
            brand: '初鹿牧場',
            title: '原味保久乳(200ml)',
            description:
              '成分天然、無添加的初鹿牧場保久乳，堅持使用在地最純淨的「初鹿生乳」，風味香醇無可取代，成分單純無添加，只給家人最好的。【原味牛乳】100%使用初鹿生乳，成份天然，無調整無添加。'
          },
          {
            id: '/gift-lucky-bag/08.jpg',
            brand: '初鹿牧場',
            title: '原味米牛乳(200ml)',
            description:
              '【原味米牛乳】“米+牛乳”是孩子們最熟悉的第一口大人的食物！使用「初鹿生乳x台東米」天然在地食材，快充早餐所需營養，成分單純、無添加，孩子愛喝，媽媽開心。'
          },
          {
            id: '/gift-lucky-bag/09.jpg',
            brand: '未來親子',
            title: '《未來兒童》',
            description: `
        金鼎獎最佳兒童雜誌，適讀年齡：小學中低年級，搭配注音輕鬆讀、音檔下載隨時聽、精彩圖文好記憶，讓孩子生活知識一把罩！專業編輯團隊製作，頂尖專家把關，讓孩子贏在學習起跑點！
      `
          },
          {
            id: '/gift-lucky-bag/10.jpg',
            brand: '未來親子',
            title: '《用點心學校1（15週年暢銷慶祝版）》',
            description: `
        <ul>
          <li>鬼才作家林哲璋x超人氣畫家BO2聯手創作最受小孩喜愛的超人氣橋梁書系列 </li>
          <li>風靡校園15年，爆笑幽默+趣味想像，跟著點心人吸收美食情報、領會文字趣味。</li>
          <li>輕鬆連結圖畫書與文字書，自然導引孩子進入自主閱讀，創造無限的可能，一起朝全方位的點心人邁進吧！</li>
        </ul>
      `
          },
          {
            id: '/gift-lucky-bag/11.jpg',
            brand: '未來親子',
            title: '來寶圖鑑貼紙/來寶紋身貼紙',
            description:
              '深受小朋友喜愛的來寶推出圖鑑貼紙囉，9款實用生活情境，讓充滿好奇與熱愛閱讀的來寶，陪著小朋友一起探索學習；特別搭配10週年限定派對紋身貼紙，讓我們一起Party！一起狂歡！'
          }
        ],
        s = () => {
          U.getAll().forEach((o) => o.kill()),
            Z.utils.toArray('.animate-zoom-in').forEach((o) => {
              Z.fromTo(
                o,
                { opacity: 0, scale: 0.8, y: 50 },
                {
                  scrollTrigger: {
                    trigger: o,
                    start: 'top 100%',
                    toggleActions: 'play none none none'
                  },
                  duration: 0.8,
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  ease: 'power3.out'
                }
              )
            }),
            Z.utils.toArray('.animate-zoom-right').forEach((o) => {
              Z.fromTo(
                o,
                { opacity: 0, x: 50 },
                {
                  scrollTrigger: {
                    trigger: o,
                    start: 'left 100%',
                    toggleActions: 'play none none none'
                  },
                  duration: 0.8,
                  opacity: 1,
                  x: 0,
                  ease: 'power3.out'
                }
              )
            }),
            Z.utils.toArray('.animate-zoom-left').forEach((o) => {
              Z.fromTo(
                o,
                { opacity: 0, x: -50 },
                {
                  scrollTrigger: {
                    trigger: o,
                    start: 'right 100%',
                    toggleActions: 'play none none none'
                  },
                  duration: 0.8,
                  opacity: 1,
                  x: 0,
                  ease: 'power3.out'
                }
              )
            })
        }
      return (
        qt(() => {
          xr({ Tooltip: Hi, Modal: rn, Collapse: Bi }), s()
        }),
        Xc(() => {
          U.getAll().forEach((o) => o.kill())
        }),
        (o, a) => {
          const l = Cr,
            c = _s('router-link')
          return (
            J(),
            ee('div', null, [
              G(
                l,
                { height: '800px' },
                {
                  default: De(
                    () =>
                      a[2] ||
                      (a[2] = [
                        d(
                          'img',
                          { class: 'px-3', src: M0, alt: '', width: '600' },
                          null,
                          -1
                        ),
                        d(
                          'span',
                          {
                            class:
                              'absolute bottom-4 right-1 top-auto z-10 w-[80px] md:-right-16 md:top-24 md:w-[150px]'
                          },
                          [d('img', { src: kr, alt: '', width: '150' })],
                          -1
                        )
                      ])
                  ),
                  _: 1
                }
              ),
              d('div', null, [
                a[21] ||
                  (a[21] = d(
                    'div',
                    { class: 'bg-yellow py-16' },
                    [
                      d('div', { class: 'container' }, [
                        d(
                          'div',
                          {
                            class:
                              'flex flex-wrap items-center gap-3 md:mb-16 md:flex-nowrap'
                          },
                          [
                            d('iframe', {
                              class:
                                'aspect-video scroll-animate-slideInLeft order-2 mx-auto h-[250px] w-full max-w-[450px] md:order-1 md:h-[350px]',
                              src: 'https://www.youtube.com/embed/Sef8LyqvRJk?si=qtjNJwouQu-pgyAa&controls=0',
                              allow:
                                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                              referrerPolicy: 'strict-origin-when-cross-origin',
                              allowFullScreen: ''
                            }),
                            d(
                              'div',
                              {
                                class:
                                  'scroll-animate-slideInRight order-1 flex grow flex-col items-center justify-center gap-3 pb-5 text-xl font-black text-kv-blue md:order-2 lg:p-5'
                              },
                              [
                                d('img', {
                                  width: '400',
                                  class: 'mb-4',
                                  src: L0,
                                  alt: ''
                                }),
                                d(
                                  'div',
                                  {
                                    class:
                                      'flex flex-col gap-1 text-center text-[1.1rem] font-black tracking-wide text-kv-blue'
                                  },
                                  [
                                    d(
                                      'div',
                                      null,
                                      '未來親子野餐日陪伴孩子10週年啦!'
                                    ),
                                    d(
                                      'div',
                                      null,
                                      '這象徵著「幸福永續」的里程碑，'
                                    ),
                                    d(
                                      'div',
                                      null,
                                      '期待能陪伴孩子，朝著更美好的未來邁進！'
                                    ),
                                    d(
                                      'div',
                                      null,
                                      '更多歡樂、甜蜜的親子時光，'
                                    ),
                                    d(
                                      'div',
                                      null,
                                      '就從今年的10歲生日派對開始吧！'
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ],
                    -1
                  )),
                d('div', n1, [
                  a[10] ||
                    (a[10] = d(
                      'span',
                      {
                        class:
                          'absolute -top-[80px] start-0 h-[100px] w-full rotate-180'
                      },
                      [
                        d('img', {
                          class: 'w-full object-cover',
                          src: br,
                          alt: ''
                        })
                      ],
                      -1
                    )),
                  d('div', r1, [
                    G(
                      c,
                      {
                        class:
                          'animate-zoom-right rounded-rl-2xl relative rounded-bl-[50px] rounded-tr-[50px] bg-primary-500 p-6 text-white',
                        to: '/show'
                      },
                      {
                        default: De(
                          () =>
                            a[3] ||
                            (a[3] = [
                              d(
                                'div',
                                {
                                  class:
                                    'flex flex-wrap items-center justify-between md:flex-nowrap lg:items-stretch xl:gap-5'
                                },
                                [
                                  d('div', { class: 'lg:shrink-0' }, [
                                    d('img', {
                                      class: 'w-full',
                                      src: Uc,
                                      alt: ''
                                    })
                                  ]),
                                  d('div', { class: 'relative grow pt-5' }, [
                                    d('img', {
                                      width: '250',
                                      src: D0,
                                      alt: ''
                                    }),
                                    d(
                                      'div',
                                      { class: 'dashed-text-container' },
                                      ' 孩子的春日派對、大人的歡聚時光！最精彩好看的舞台節目都在這，準備好一起 High 翻天吧！ '
                                    ),
                                    d(
                                      'div',
                                      {
                                        class:
                                          'absolute -bottom-10 start-10 hidden lg:block'
                                      },
                                      [
                                        d('img', {
                                          class: 'w-[100px]',
                                          src: R0,
                                          alt: ''
                                        })
                                      ]
                                    ),
                                    d(
                                      'div',
                                      {
                                        class:
                                          'bottom-0 right-0 ms-auto mt-2 inline-block w-full rounded-tr-xl bg-kv-green px-10 py-1.5 text-center text-2xl font-black tracking-wide text-white transition hover:bg-kv-blue md:mt-auto md:w-auto lg:absolute'
                                      },
                                      ' 看看表演 '
                                    )
                                  ])
                                ],
                                -1
                              )
                            ])
                        ),
                        _: 1
                      }
                    ),
                    G(
                      c,
                      {
                        class:
                          'animate-zoom-left rounded-rl-2xl relative rounded-br-[50px] rounded-tl-[50px] bg-kv-green p-6 text-white',
                        to: '/game#game-01'
                      },
                      {
                        default: De(
                          () =>
                            a[4] ||
                            (a[4] = [
                              d(
                                'div',
                                {
                                  class:
                                    'flex flex-wrap items-center justify-between md:flex-nowrap lg:items-stretch xl:gap-5'
                                },
                                [
                                  d('div', { class: 'order-2 lg:shrink-0' }, [
                                    d('img', {
                                      class: 'w-full',
                                      src: $0,
                                      alt: ''
                                    })
                                  ]),
                                  d(
                                    'div',
                                    {
                                      class:
                                        'relative order-2 grow pt-5 md:order-1'
                                    },
                                    [
                                      d('img', {
                                        width: '250',
                                        src: z0,
                                        alt: ''
                                      }),
                                      d(
                                        'div',
                                        { class: 'dashed-text-container' },
                                        ' 十大主題，兼具知識與趣味的闖關挑戰，親子共同完成任務，還有小農市集，美好回憶獎不完！ '
                                      ),
                                      d(
                                        'div',
                                        {
                                          class:
                                            'end-15 absolute -bottom-10 hidden lg:block'
                                        },
                                        [
                                          d('img', {
                                            class: 'w-[100px]',
                                            src: I0,
                                            alt: ''
                                          })
                                        ]
                                      ),
                                      d(
                                        'div',
                                        {
                                          class:
                                            'bottom-0 right-0 ms-auto mt-2 inline-block w-full rounded-tl-xl bg-primary-500 px-10 py-1.5 text-center text-2xl font-black tracking-wide text-white transition hover:bg-kv-blue md:mt-auto md:w-auto lg:absolute'
                                        },
                                        ' 看看闖關 '
                                      )
                                    ]
                                  )
                                ],
                                -1
                              )
                            ])
                        ),
                        _: 1
                      }
                    ),
                    G(
                      c,
                      {
                        class:
                          'animate-zoom-right rounded-rl-2xl relative rounded-bl-[50px] rounded-tr-[50px] bg-primary-500 p-6 text-white',
                        to: '/gift'
                      },
                      {
                        default: De(
                          () =>
                            a[5] ||
                            (a[5] = [
                              d(
                                'div',
                                {
                                  class:
                                    'flex flex-wrap items-center justify-between md:flex-nowrap lg:items-stretch xl:gap-5'
                                },
                                [
                                  d('div', { class: 'lg:shrink-0' }, [
                                    d('img', { class: '500', src: Hc, alt: '' })
                                  ]),
                                  d('div', { class: 'relative grow pt-5' }, [
                                    d('img', {
                                      width: '250',
                                      src: B0,
                                      alt: ''
                                    }),
                                    d(
                                      'div',
                                      { class: 'dashed-text-container' },
                                      ' 歡慶十週年，活動好禮拿不完！快來看看這次活動有哪些超亮點，把限量好禮通通帶回家！ '
                                    ),
                                    d(
                                      'div',
                                      {
                                        class:
                                          'absolute -bottom-10 start-10 hidden lg:block'
                                      },
                                      [
                                        d('img', {
                                          class: 'w-[100px]',
                                          src: N0,
                                          alt: ''
                                        })
                                      ]
                                    ),
                                    d(
                                      'div',
                                      {
                                        class:
                                          'bottom-0 right-0 ms-auto mt-2 inline-block w-full rounded-tr-xl bg-kv-green px-10 py-1.5 text-center text-2xl font-black tracking-wide text-white transition hover:bg-kv-blue md:mt-auto md:w-auto lg:absolute'
                                      },
                                      ' 看看好禮 '
                                    )
                                  ])
                                ],
                                -1
                              )
                            ])
                        ),
                        _: 1
                      }
                    ),
                    G(
                      c,
                      {
                        class:
                          'animate-zoom-left rounded-rl-2xl relative rounded-br-[50px] rounded-tl-[50px] bg-kv-green p-6 text-white',
                        to: '/game#game-02'
                      },
                      {
                        default: De(() => [
                          d('div', s1, [
                            d('div', o1, [
                              G(
                                le(t1),
                                {
                                  class: 'w-full',
                                  'slides-per-view': 1,
                                  autoplay: {
                                    delay: 3500,
                                    disableOnInteraction: !1
                                  },
                                  modules: [le(i1)],
                                  loop: ''
                                },
                                {
                                  default: De(() => [
                                    G(le(ea), null, {
                                      default: De(
                                        () =>
                                          a[6] ||
                                          (a[6] = [
                                            d(
                                              'img',
                                              {
                                                class: 'w-full',
                                                src: j0,
                                                alt: ''
                                              },
                                              null,
                                              -1
                                            )
                                          ])
                                      ),
                                      _: 1
                                    }),
                                    G(le(ea), null, {
                                      default: De(
                                        () =>
                                          a[7] ||
                                          (a[7] = [
                                            d(
                                              'img',
                                              {
                                                class: 'w-full',
                                                src: Hc,
                                                alt: ''
                                              },
                                              null,
                                              -1
                                            )
                                          ])
                                      ),
                                      _: 1
                                    }),
                                    G(le(ea), null, {
                                      default: De(
                                        () =>
                                          a[8] ||
                                          (a[8] = [
                                            d(
                                              'img',
                                              {
                                                class: 'w-full',
                                                src: Uc,
                                                alt: ''
                                              },
                                              null,
                                              -1
                                            )
                                          ])
                                      ),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                },
                                8,
                                ['modules']
                              )
                            ]),
                            a[9] ||
                              (a[9] = d(
                                'div',
                                {
                                  class: 'relative order-2 grow pt-5 md:order-1'
                                },
                                [
                                  d('img', { width: '250', src: F0, alt: '' }),
                                  d(
                                    'div',
                                    { class: 'dashed-text-container' },
                                    ' 完成闖關集章，即可兌換一張抽獎券，獎項超豐富，好禮總價值超過50萬！ '
                                  ),
                                  d(
                                    'div',
                                    {
                                      class:
                                        'absolute -bottom-10 -start-20 hidden lg:block'
                                    },
                                    [
                                      d('img', {
                                        class: 'w-[180px]',
                                        src: U0,
                                        alt: ''
                                      })
                                    ]
                                  ),
                                  d(
                                    'div',
                                    {
                                      class:
                                        'ms-auto mt-2 inline-block w-full rounded-tl-xl bg-primary-500 px-10 py-1.5 text-center text-2xl font-black tracking-wide text-white transition hover:bg-kv-blue md:bottom-0 md:right-0 md:mt-auto md:w-auto lg:absolute'
                                    },
                                    ' 看看抽獎 '
                                  )
                                ],
                                -1
                              ))
                          ])
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  a[11] ||
                    (a[11] = d(
                      'span',
                      {
                        class:
                          'absolute -bottom-[80px] start-0 h-[100px] w-full'
                      },
                      [
                        d('img', {
                          class: 'h-full w-full object-cover',
                          src: br,
                          alt: ''
                        })
                      ],
                      -1
                    ))
                ]),
                d('div', a1, [
                  d('div', l1, [
                    a[20] ||
                      (a[20] = d(
                        'div',
                        {
                          class:
                            'mt-10 flex flex-col items-center gap-2 text-2xl font-bold'
                        },
                        [
                          d('div', { class: 'mb-3' }, [
                            d('img', { width: '300', src: H0, alt: '' })
                          ]),
                          d(
                            'div',
                            { class: 'text-center text-[1.1rem] font-black' },
                            [
                              d('div', null, '2025年4月3日 10:30-15:00'),
                              d('div', null, '新北大都會公園')
                            ]
                          )
                        ],
                        -1
                      )),
                    d('div', null, [
                      a[19] ||
                        (a[19] = pi(
                          '<div id="purchase" class="mt-5 flex flex-wrap items-end justify-between gap-10 md:flex-nowrap md:gap-5" data-v-b3c215c0><a class="animate-zoom-in group relative grow" href="#" data-v-b3c215c0><img class="w-full" src="' +
                            V0 +
                            '" alt="" data-v-b3c215c0><div class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl border-4 border-kv-green bg-kv-green px-5 py-2 text-center text-[22px] font-bold tracking-wide text-white transition md:py-1.5 md:group-hover:bg-white md:group-hover:text-kv-green" data-v-b3c215c0> 立即購票 </div></a><a class="animate-zoom-in group relative grow text-primary-500" href="#" data-v-b3c215c0><img class="w-full" src="' +
                            q0 +
                            '" alt="" data-v-b3c215c0><div class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl border-4 border-primary-500 bg-primary-500 px-5 py-2 text-center text-[22px] font-bold tracking-wide text-white transition md:py-1.5 md:group-hover:bg-white md:group-hover:text-primary-500" data-v-b3c215c0> 立即購票 </div></a><a class="animate-zoom-in group relative grow" href="#" data-v-b3c215c0><img class="w-full" src="' +
                            W0 +
                            '" alt="" data-v-b3c215c0><div class="absolute inset-x-0 -bottom-6 mx-auto inline-block max-w-[250px] rounded-xl border-4 border-kv-green bg-kv-green px-5 py-2 text-center text-[22px] font-bold tracking-wide text-white transition md:py-1.5 md:group-hover:bg-white md:group-hover:text-kv-green" data-v-b3c215c0> 立即購票 </div></a></div>',
                          1
                        )),
                      d('div', c1, [
                        d(
                          'div',
                          {
                            class:
                              'animate-zoom-in relative w-full cursor-pointer bg-white p-5 shadow-xl md:w-2/3',
                            'data-twe-toggle': 'modal',
                            'data-twe-target': '#exampleModalScrollable',
                            'data-twe-ripple-init': '',
                            'data-twe-ripple-color': 'light',
                            onClick: a[0] || (a[0] = (u) => (t.value = n))
                          },
                          a[12] ||
                            (a[12] = [
                              d(
                                'div',
                                null,
                                [
                                  d(
                                    'span',
                                    {
                                      class:
                                        'absolute -start-[4px] -top-[28px] w-[280px] md:-top-[30px]'
                                    },
                                    [d('img', { src: Y0, alt: '' })]
                                  ),
                                  d('img', {
                                    class: 'w-full object-cover md:h-[350px]',
                                    src: Vc,
                                    alt: ''
                                  })
                                ],
                                -1
                              ),
                              d(
                                'div',
                                {
                                  class:
                                    'mt-3 text-center text-2xl font-black text-primary-500'
                                },
                                null,
                                -1
                              )
                            ])
                        ),
                        d(
                          'div',
                          {
                            class:
                              'animate-zoom-in relative w-full cursor-pointer bg-white p-5 shadow-xl md:w-1/3',
                            'data-twe-toggle': 'modal',
                            'data-twe-target': '#exampleModalScrollable',
                            'data-twe-ripple-init': '',
                            'data-twe-ripple-color': 'light',
                            onClick: a[1] || (a[1] = (u) => (t.value = i))
                          },
                          a[13] ||
                            (a[13] = [
                              d(
                                'div',
                                null,
                                [
                                  d(
                                    'span',
                                    {
                                      class:
                                        'absolute -start-[4px] -top-[28px] w-[280px] md:-top-[30px] md:w-[300px]'
                                    },
                                    [d('img', { src: X0, alt: '' })]
                                  ),
                                  d('img', {
                                    class: 'w-full object-cover md:h-[350px]',
                                    src: Vc,
                                    alt: ''
                                  })
                                ],
                                -1
                              ),
                              d(
                                'div',
                                {
                                  class:
                                    'mt-3 text-center text-2xl font-black text-primary-500'
                                },
                                ' 限量 600 組！ ',
                                -1
                              )
                            ])
                        )
                      ]),
                      d('div', u1, [
                        a[15] ||
                          (a[15] = d(
                            'div',
                            null,
                            ' ※【單組票】、【揪團票】、【慶生套票】下訂後，恕不接受換票。 ',
                            -1
                          )),
                        a[16] ||
                          (a[16] = d(
                            'div',
                            null,
                            ' ※ 產品圖片僅供示意，以現場實物為主，現場不挑款式、花色，隨機出貨。 ',
                            -1
                          )),
                        a[17] ||
                          (a[17] = d(
                            'div',
                            null,
                            '※ 報名前，請務必詳閱報名注意事項。',
                            -1
                          )),
                        d('div', null, [
                          G(
                            c,
                            {
                              to: '/notice#notice-02',
                              class:
                                'mt-5 inline-flex items-center gap-3 rounded-full bg-primary-500 px-8 py-2 text-2xl font-bold text-white transition md:hover:bg-kv-green'
                            },
                            {
                              default: De(
                                () =>
                                  a[14] ||
                                  (a[14] = [
                                    d(
                                      'svg',
                                      {
                                        width: '35',
                                        height: '35',
                                        viewBox: '0 0 35 35',
                                        fill: 'none',
                                        xmlns: 'http://www.w3.org/2000/svg'
                                      },
                                      [
                                        d('path', {
                                          d: 'M17.5 0C7.8351 0 0 7.83475 0 17.5C0 27.1652 7.8351 35 17.5 35C27.1649 35 35 27.1652 35 17.5C35 7.83475 27.1649 0 17.5 0ZM17.5 3.5C25.232 3.5 31.5 9.7685 31.5 17.5C31.5 25.2315 25.232 31.5 17.5 31.5C9.76797 31.5 3.5 25.2315 3.5 17.5C3.5 9.7685 9.76797 3.5 17.5 3.5ZM17.5 8.75C16.5335 8.75 15.75 9.534 15.75 10.5C15.75 11.466 16.5335 12.25 17.5 12.25C18.4665 12.25 19.25 11.466 19.25 10.5C19.25 9.534 18.4665 8.75 17.5 8.75ZM17.5 14C16.5335 14 15.75 14.784 15.75 15.75V24.5C15.75 25.466 16.5335 26.25 17.5 26.25C18.4665 26.25 19.25 25.466 19.25 24.5V15.75C19.25 14.784 18.4665 14 17.5 14Z',
                                          fill: 'white'
                                        })
                                      ],
                                      -1
                                    ),
                                    ta(' 報名注意事項 ')
                                  ])
                              ),
                              _: 1
                            }
                          )
                        ])
                      ]),
                      d('div', d1, [
                        d('div', f1, [
                          d('div', p1, [
                            a[18] ||
                              (a[18] = d(
                                'div',
                                {
                                  class:
                                    'flex flex-shrink-0 items-center justify-between rounded-t-md p-4'
                                },
                                [
                                  d('h5', {
                                    class: 'text-xl font-bold',
                                    id: 'exampleModalScrollableLabel'
                                  }),
                                  d(
                                    'button',
                                    {
                                      type: 'button',
                                      class:
                                        'absolute -right-2 -top-2 z-10 box-content rounded-full border-none bg-white text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none',
                                      'data-twe-modal-dismiss': '',
                                      'aria-label': 'Close'
                                    },
                                    [
                                      d('img', {
                                        width: '40',
                                        src: df,
                                        alt: ''
                                      })
                                    ]
                                  )
                                ],
                                -1
                              )),
                            d('div', h1, [
                              d('div', g1, [
                                (J(!0),
                                ee(
                                  Et,
                                  null,
                                  Tt(
                                    t.value,
                                    (u, p) => (
                                      J(),
                                      ee(
                                        'div',
                                        { key: p, class: 'border-b py-4' },
                                        [
                                          d('div', m1, [
                                            d(
                                              'img',
                                              {
                                                class:
                                                  'h-[300px] w-full bg-white object-contain text-center',
                                                src: `${le(e)}${u.id}`,
                                                alt: u.title
                                              },
                                              null,
                                              8,
                                              _1
                                            )
                                          ]),
                                          d('div', v1, [
                                            d(
                                              'div',
                                              b1,
                                              '【' + _t(u.brand) + '】',
                                              1
                                            ),
                                            d(
                                              'div',
                                              { innerHTML: u.title },
                                              null,
                                              8,
                                              w1
                                            )
                                          ]),
                                          d(
                                            'div',
                                            { innerHTML: u.description },
                                            null,
                                            8,
                                            y1
                                          )
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          )
        }
      )
    }
  },
  C1 = wl(x1, [['__scopeId', 'data-v-b3c215c0']]),
  k1 = '' + new URL('../img/btn-join.svg', import.meta.url).href,
  xo = {
    __name: 'ButtonJoin',
    props: {
      title: { type: String, required: !0 },
      link: { type: String, default: '#', required: !0 }
    },
    setup(r) {
      return (
        qt(() => {
          Z.to('.bounce-float', {
            y: '10px',
            repeat: -1,
            yoyo: !0,
            ease: 'power1.inOut',
            duration: 0.8
          }),
            Z.to('.scale-bounce', {
              scale: 1.2,
              repeat: -1,
              yoyo: !0,
              ease: 'elastic.inOut(1, 0.5)',
              duration: 1.2
            })
        }),
        (e, t) => {
          const i = _s('router-link')
          return (
            J(),
            Sf(
              i,
              {
                to: '/#purchase',
                class: 'scroll-animate-zoomIn animate-bounceFloat'
              },
              {
                default: De(
                  () =>
                    t[0] ||
                    (t[0] = [
                      d('img', { width: '250', src: k1, alt: '' }, null, -1)
                    ])
                ),
                _: 1
              }
            )
          )
        }
      )
    }
  },
  E1 = '' + new URL('../img/kv-gift.svg', import.meta.url).href,
  T1 = '' + new URL('../img/title-gift-main.svg', import.meta.url).href,
  S1 = '' + new URL('../img/gift-item-img-01.jpg', import.meta.url).href,
  O1 = { class: 'bg-yellow' },
  A1 = { class: 'container py-16' },
  P1 = { class: 'grid gap-6 md:mb-36 md:grid-cols-2' },
  M1 = ['src'],
  L1 = { class: 'mb-5 flex items-center justify-center pt-5 md:pt-8' },
  D1 = {
    __name: 'Gift',
    setup(r) {
      Z.registerPlugin(U)
      const e = './img/',
        t = Array.from({ length: 10 }, (i, n) => n + 1)
      return (
        qt(() => {
          xr({ Tooltip: Hi, Modal: rn, Collapse: Bi })
        }),
        (i, n) => {
          const s = Cr,
            o = xo
          return (
            J(),
            ee('div', null, [
              G(s, null, {
                default: De(
                  () =>
                    n[0] ||
                    (n[0] = [
                      d('img', { src: E1, alt: '', width: '600' }, null, -1),
                      d(
                        'span',
                        {
                          class:
                            'absolute bottom-0 right-2 top-auto z-10 w-[70px] sm:-right-[100px] sm:top-24 sm:w-[180px]'
                        },
                        [d('img', { src: kr, alt: '', width: '150' })],
                        -1
                      )
                    ])
                ),
                _: 1
              }),
              d('div', O1, [
                d('div', A1, [
                  n[1] ||
                    (n[1] = d(
                      'div',
                      { class: 'mb-8 text-center' },
                      [
                        d('img', {
                          width: '600',
                          class: 'mx-auto',
                          src: T1,
                          alt: ''
                        })
                      ],
                      -1
                    )),
                  n[2] ||
                    (n[2] = d(
                      'div',
                      { class: 'text-center text-[1.1rem] font-black' },
                      [
                        d('div', null, '10大互動好禮搶先看！'),
                        d('div', null, '全場活動趴趴走，好禮拿不停！'),
                        d('div', null, '點擊按鈕，看更多活動說明')
                      ],
                      -1
                    )),
                  d('div', P1, [
                    (J(!0),
                    ee(
                      Et,
                      null,
                      Tt(
                        le(t),
                        (a, l) => (
                          J(),
                          ee(
                            'div',
                            Of(
                              {
                                key: l,
                                class: [
                                  'w-full',
                                  l % 2 === 0
                                    ? 'md:translate-y-0'
                                    : 'md:translate-y-1/2',
                                  l === 5 ? 'cursor-pointer' : ''
                                ],
                                ref_for: !0
                              },
                              l === 5
                                ? {
                                    'data-twe-toggle': 'modal',
                                    'data-twe-target':
                                      '#exampleModalScrollable',
                                    'data-twe-ripple-init': '',
                                    'data-twe-ripple-color': 'light'
                                  }
                                : {}
                            ),
                            [
                              d(
                                'img',
                                {
                                  class: ei([
                                    'w-full',
                                    l % 2 === 0
                                      ? 'scroll-animate-slideInLeft'
                                      : 'scroll-animate-slideInRight'
                                  ]),
                                  src: `${le(e)}/gift-item-${l + 1 < 10 ? '0' + (l + 1) : l + 1}.svg`,
                                  alt: ''
                                },
                                null,
                                10,
                                M1
                              )
                            ],
                            16
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  d('div', L1, [G(o)]),
                  n[3] ||
                    (n[3] = pi(
                      '<div data-twe-modal-init class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden p-6 outline-none" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true"><div data-twe-modal-dialog-ref class="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"><div class="pointer-events-auto relative flex max-h-[100%] w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark"><div class="flex flex-shrink-0 items-center justify-between rounded-t-md p-4"><h5 class="text-xl font-bold" id="exampleModalScrollableLabel"> 換書說明 </h5><button type="button" class="absolute -right-2 -top-2 z-10 box-content rounded-full border-none bg-white text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none" data-twe-modal-dismiss aria-label="Close"><img width="40" src="' +
                        df +
                        '" alt=""></button></div><div class="relative overflow-y-auto p-6"><div class="flex flex-col gap-5 divide-y text-justify"><div class="flex flex-col gap-2"><p><img class="w-full" src="' +
                        S1 +
                        '" alt=""></p><p class="text-xl font-bold">好書大風吹</p><p> 凡攜帶家中用不到且狀態良好的舊書至活動攤位，即可兌換一本小天下/未來出版書籍，原捐獻之舊書將整理後捐給______（捐贈單位待定），讓美好知識永續傳承。 </p><p></p><p>※ 注意事項：</p><ul class="list-decimal px-4"><li> 一組家庭限捐1本紙本書，並兌換1本小天下/未來出版書籍。 </li><li>捐贈書籍限兒童讀物，並需有版權及價格註記。</li><li> 圖書封面及內頁需清潔完好，8成新，無破損、污損或塗鴉情形者。 </li><li>電腦類書籍、教科書、期刊雜誌恕不收取。</li><li>若捐贈之書籍書況極差，未來親子擁有拒收的權利。</li></ul></div></div></div></div></div></div>',
                      1
                    ))
                ])
              ])
            ])
          )
        }
      )
    }
  },
  R1 = ['onMouseenter'],
  $1 = { class: 'overflow-hidden' },
  z1 = { class: 'mb-2 text-xl font-bold' },
  I1 = ['innerHTML'],
  B1 = {
    class:
      'aspect-h-3 aspect-w-3 overflow-hidden rounded-tl-2xl bg-gray-100 transition-opacity duration-300'
  },
  N1 = ['src'],
  j1 = {
    __name: 'GameItem',
    props: {
      className: { type: String, default: 'bg-primary-500' },
      list: { type: Array, required: !0 }
    },
    setup(r) {
      const e = r,
        { list: t } = e,
        i = Le(null),
        n = './img/'
      return (s, o) => (
        J(!0),
        ee(
          Et,
          null,
          Tt(
            le(t),
            (a, l) => (
              J(),
              ee(
                'div',
                {
                  class:
                    'scroll-animate-zoomIn group relative rounded-tl-2xl bg-white p-3 shadow-md',
                  key: l,
                  onMouseenter: (c) => (i.value = l),
                  onMouseleave: o[0] || (o[0] = (c) => (i.value = null))
                },
                [
                  d('div', $1, [
                    d(
                      'span',
                      {
                        class: ei([
                          'group:hover:translate-x-0 absolute inset-0 z-10 h-full overflow-hidden bg-white p-6 transition-opacity duration-300',
                          i.value === l ? 'opacity-100' : 'opacity-0'
                        ])
                      },
                      [
                        d('div', z1, _t(a.brand), 1),
                        d(
                          'div',
                          {
                            innerHTML: a.description,
                            class: 'h-full overflow-auto'
                          },
                          null,
                          8,
                          I1
                        )
                      ],
                      2
                    ),
                    d('div', B1, [
                      d(
                        'img',
                        {
                          class: ei([
                            'h-full w-full object-contain',
                            i.value === l ? 'opacity-0' : 'opacity-100'
                          ]),
                          src: `${le(n)}${a.id}`,
                          alt: ''
                        },
                        null,
                        10,
                        N1
                      )
                    ]),
                    d(
                      'span',
                      {
                        class: ei(
                          `absolute -end-3 -top-[23px] z-10 inline-block w-full max-w-[300px] rounded-tr-xl px-4 py-1.5 font-bold tracking-wide text-white ${r.className}`
                        )
                      },
                      _t(a.name),
                      3
                    )
                  ])
                ],
                40,
                R1
              )
            )
          ),
          128
        )
      )
    }
  },
  F1 = '' + new URL('../img/kv-game.svg', import.meta.url).href,
  U1 = '' + new URL('../img/game-tag-title-01.svg', import.meta.url).href,
  H1 = '' + new URL('../img/game-tag-title-02.svg', import.meta.url).href,
  V1 = '' + new URL('../img/title-game-main-01.svg', import.meta.url).href,
  q1 = '' + new URL('../img/title-game.svg', import.meta.url).href,
  W1 = '' + new URL('../img/game-title-01.svg', import.meta.url).href,
  Y1 = '' + new URL('../img/game-title-02.svg', import.meta.url).href,
  X1 = '' + new URL('../img/game-title-03.svg', import.meta.url).href,
  G1 = '' + new URL('../img/game-title-04.svg', import.meta.url).href,
  Z1 = '' + new URL('../img/game-title-05.svg', import.meta.url).href,
  K1 = '' + new URL('../img/title-lottery.svg', import.meta.url).href
function Jn(r) {
  if (!r) return
  const e = document.getElementById(r)
  if (!e) return
  const t = document.querySelector('.navbar'),
    i = t ? t.offsetHeight : 0,
    n = e.getBoundingClientRect().top + window.scrollY - i - 30
  window.scrollTo({ top: n, behavior: 'smooth' })
}
const Q1 = { class: 'bg-green' },
  J1 = {
    class:
      'mx-5 flex max-w-[500px] divide-x divide-white rounded-bl-xl rounded-br-xl bg-primary-500 py-3 md:mx-auto'
  },
  e_ = { class: 'container py-16' },
  t_ = {
    class:
      'mb-5 grid grid-cols-1 gap-x-8 gap-y-12 py-10 sm:grid-cols-2 md:grid-cols-3'
  },
  i_ = {
    class:
      'mb-5 grid grid-cols-1 gap-x-8 gap-y-12 py-10 sm:grid-cols-2 md:grid-cols-3'
  },
  n_ = {
    class:
      'mb-5 grid grid-cols-1 gap-x-8 gap-y-12 py-10 sm:grid-cols-2 md:grid-cols-3'
  },
  r_ = {
    class:
      'mb-5 grid grid-cols-1 gap-x-8 gap-y-12 py-10 sm:grid-cols-2 md:grid-cols-3'
  },
  s_ = {
    class:
      'mb-5 grid grid-cols-1 gap-x-8 gap-y-12 py-10 sm:grid-cols-2 md:grid-cols-3'
  },
  o_ = { id: 'game-02', class: 'bg-yellow relative' },
  a_ = { class: 'container py-24' },
  l_ = { class: 'my-8 grid items-stretch gap-8 md:grid-cols-3' },
  c_ = ['onMouseenter'],
  u_ = { class: 'relative mb-3 text-white' },
  d_ = {
    class:
      'aspect-h-4 aspect-w-6 overflow-hidden rounded-tl-2xl bg-gray-100 transition-opacity duration-300'
  },
  f_ = ['src', 'alt'],
  p_ = { class: 'mb-3 px-3 text-center' },
  h_ = { class: 'mb-1 font-semibold text-primary-500' },
  g_ = { class: 'font-semibold text-primary-500' },
  m_ = {
    class: 'mt-auto border-t p-3 text-center text-sm font-bold text-gray2-500'
  },
  __ = { class: 'flex h-full flex-col' },
  v_ = {
    class:
      'mb-1 shrink-0 border-b p-2 text-center text-xl font-semibold text-primary-500'
  },
  b_ = { class: 'font-semibold text-primary-500' },
  w_ = ['innerHTML'],
  y_ = { class: 'mt-5 flex items-center justify-center' },
  x_ = {
    __name: 'Game',
    setup(r) {
      Z.registerPlugin(U)
      const e = Le(null),
        t = './img/',
        i = [
          {
            id: '01.png',
            brand: 'igogosport思博特',
            name: 'myFirst Fone S3 4G 智慧兒童手錶',
            description:
              'S3除了具備精準的GPS定位，更具有完善的APP，介面美觀且多功能! 手錶上更有通話、視訊、MP3和SOS求救功能，還有專門設計給孩子的社交圈CIRCLE，讓孩子可以自由上傳心情與分享圖片，讓孩子與家長之間0距離！',
            price: '＄獎項價值 5,980 元 / 1 名'
          },
          {
            id: '02.jpg',
            brand: 'igogosport思博特',
            name: 'myFirst 3D Pen Make - 3D 列印筆',
            description:
              '培養孩子的美感，從小開始！myFirst 3D筆，選用無毒材料，孩子開心玩，爸媽好安心！此外加熱顏料更是溫感不燙，讓孩子可以盡情發揮創意做出獨特的3D作品，畫筆更不需要時刻充電，外出攜帶更方便！',
            price: '＄獎項價值 1,580元$ / 1 名'
          },
          {
            id: '03.jpg',
            brand: 'igogosport思博特',
            name: 'myFirst Camera 3 雙鏡頭兒童相機',
            description:
              '熱銷款兒童相機！鏡頭具備1600萬像素，此外更具備微距鏡頭，幫助寶貝更好對焦，還有前鏡頭讓寶貝輕鬆自拍、記錄生活，LED閃光燈，在黑暗的地方也可以捕捉畫面，內建麥克風，還可以錄影！是孩子記錄生活的最好玩伴！',
            price: '＄獎項價值 2,680 元 / 1 名'
          },
          {
            id: '04.jpg',
            brand: '台北喜來登大飯店',
            name: '手拉手樂園親子主題房住宿1晚',
            description:
              '台北喜來登大飯店以莫蘭迪色系融合動物童話繪本元素，打造四大主題「動物森林」、「叢林小鎮」、「史前探險」與「恐龍王國」故事場景客房，讓小孩玩到不想回家。入住主題親子客房皆可免費體驗樓層專屬「手拉手樂園」，分齡設計的室內遊戲區包含娃娃廚房、小車積木、樹洞滑梯，以及適合大小朋友的科技電玩區，為家庭的每一位成員打造一段充滿童趣與奇思妙想的歡聚之旅。（房型照片僅供參考，依實際入住房型為主）',
            price: '＄獎項價值 $13,000 元 / 1 名'
          },
          {
            id: '05.jpg',
            brand: '知覺優格',
            name: '優格飲12入 (口味隨機)',
            description: `
        <p>【清爽果粒 益菌隨行】</p>
        <p>知覺優格飲採用無調整國產鮮乳，搭配精心手工調製的果醬，口感豐盈綿密，完美呈現真實水果的酸甜風味！</p>
        <p>首創添加「菊苣膳食纖維護好菌」，嚴選優質菌種與法國專利菌株，幫助維持消化道機能，輕鬆搖一搖，即可隨時補充活性益生菌，健康與美味隨行無負擔！</p>
      `,
            price: '＄獎項價值 1,176 元 / 10 名'
          },
          {
            id: '06.jpg',
            brand: '象印',
            name: '童用ONE TOUCH保溫杯 (款式隨機)',
            description: `
           <p>象印專為孩童貼心設計的小熊杯，讓孩子夏日愛上喝水的秘密武器！色彩繽紛的可愛圖樣設計，不管男孩女孩通通都超愛！三大便利機能，讓孩子每日的飲水更加輕鬆又方便：</p>
           <p>#小熊安全鎖簡單開關</p>
           <p>#飲品集中扇形杯口設計方便飲用</p>
           <p>#輕量好握讓孩子輕鬆好拿 </p>
           <p>還有四大特色讓爸媽輕鬆清洗：</p>
           <p>#一體式中栓設計</p>
           <p>#可裝運動飲料的「防沾塗層+(plus)」</p>
           <p>#高效保溫保冷力</p>
           <p>#外袋可放置洗衣機清洗</p>
         `,
            price: '＄獎項價值 1,450 元 / 10 名'
          },
          {
            id: '07.jpg',
            brand: '福容大飯店-高雄店',
            name: '精緻豪華雙床房─動物園主題房型入住一晚(含早餐)',
            description:
              '交通位置相當便利的福容高雄店，步行5分鐘到輕軌真愛碼頭站、8分鐘到捷運鹽埕埔站。可搭乘輕軌一路玩高雄流行音樂中心、駁二藝術特區、棧貳庫，也可悠閒在愛河畔散步、騎單車、搭乘愛之船欣賞高雄港灣的日夜之美。',
            price: '＄獎項價值 10,780 元 / 1 名'
          },
          {
            id: '08.jpg',
            brand: '德恩奈',
            name: '專業口腔保健禮盒組',
            description:
              '內含德恩奈清新雙效漱口水500mlx1瓶+清淨涼牙膏156gx1支+美白牙膏125gx1支+夜用牙膏126gx1支+兒童牙膏90gx1支+前觸兒童牙刷x1支+極淨細絲牙刷2支 (總價值1125元) 適合全家人使用。',
            price: '＄獎項價值 1,125 元 / 10 名'
          },
          {
            id: '09.jpg',
            brand: '享居',
            name: '天絲兩用被(DtD)（圖案隨機）',
            description: `
           <p>DOTDOT 天絲兩用被，利用材質透氣與親膚度，可自由調整厚度，打造最單純的簡單舒適！</p>
           <p>輕巧多功能，雙面天絲材質，適合台灣氣候四季使用。額外可搭配水洗被胎來增加保暖度，還可以與DtD睡袋睡墊進行單邊結合。</p>
         `,
            price: '＄獎項價值 1,810 元 / 10 名'
          },
          {
            id: '10.jpg',
            brand: '未來親子',
            name: '小天下|書購書金 12,000元',
            description: `
        <p>小天下及未來出版所製作的書籍，不但備受小讀者的喜愛，更受師長父母的肯定。在每年所公布的金鼎獎、好書大家讀、行政院優良固書推薦等得獎書單中，小天下的出版品往往囊括超過三分之一的獎項。</p>
      `,
            price: '＄獎項價值 12,000 元 / 1 名'
          },
          {
            id: '12.jpg',
            brand: '未來親子',
            name: '《未來兒童》或《未來少年》3年(不含數位知識庫)',
            description:
              '《未來兒童》《未來少年》榮獲金鼎獎，符合108課綱的跨領域學習精神，每月一本養成定時定量閱讀，用豐富知識帶孩子認識自然生態、科普新知、地球科學、人文素養、歷史地理、國際潮流，全方位學習，打造孩子知識網路！',
            price: '＄獎項價值 12,960 元 / 1 名'
          },
          {
            id: '13.jpg',
            brand: '蒲公英',
            name: '環保抽取式衛生紙一年份 (100抽72入)',
            description:
              '蒲公英秉持著友善環境的初衷，相信「紙用再生」就能「讓美好循環發生」。從最初100%回收紙製造的環保家庭用紙系列，是市場上唯一同時擁有FSC、碳足跡、環保標章的家用紙品牌，到高生物分解度的環保清潔用品系列。從一而終的綠色堅持，希望讓愛護地球的你在日常生活中就能選擇對環境更友善的商品，輕鬆落實減碳生活！',
            price: '＄獎項價值 1,050 元 / 3 名'
          },
          {
            id: '14.jpg',
            brand: '利樂',
            name: '露露椅-紙盒包再生料特製高版',
            description: '',
            price: '＄獎項價值 元 /  名'
          }
        ],
        n = [
          {
            id: '/game-01/01.jpg',
            brand: '初鹿牧場',
            name: '懂吃！早餐小博士',
            description:
              '想要長高高又跑得快，早餐記得要吃、而且營養要均衡喔！快來找超人氣「小初牛牛」，帶你到初鹿牧場，一起認識好吃又營養的早餐，還有好玩的闖關遊戲，讓寶貝變身懂吃的早餐小博士！'
          },
          {
            id: '/game-01/02.jpg',
            brand: 'igogosport思博特',
            name: 'myFirst 快樂「喀擦」冒險',
            description: `
          <p>喀擦！喀擦！還記得第一次使用相機的感動嗎？現在，讓孩子也來感受這份快樂吧！現場不僅可以體驗myFirst Camera50兒童相機，開啟充滿驚喜的「喀擦」冒險！用孩子的視角捕捉生活中美好瞬間，無論是小小的快樂、奇妙的發現，還是成長的點滴，每一張照片都是美好記憶！</p>
          <p>喀擦後，愛要分享！現場還可以利用myFirst Frame電子相框，把孩子作品瞬間送達爸媽爺奶身邊，讓全家人一起感受幸福時刻！myFirst 系列產品不僅記錄下孩子的快樂，也讓全家人的心更靠近！喀擦一下，開啟全家人的溫馨冒險！</p>
        `
          },
          {
            id: '/game-01/03.jpg',
            brand: '農業部',
            name: '食農趣學園',
            description:
              '快來接受「蔬果校長」的挑戰吧！土裡還是樹上？一起揭開蔬果的生長祕密！完成任務後，分享家人最愛吃的蔬菜和水果，還能探索它們從產地到餐桌的奇妙旅程。現場還有趣味小知識和互動闖關，讓大朋友小朋友輕鬆變身「食農小專家」，玩得開心又學到滿滿知識！'
          },
          {
            id: '/game-01/04.jpg',
            brand: '兒童福利聯盟',
            name: '太空補給站的玩具發送任務',
            description:
              '太空補給站發送緊急玩具需求！快看看手邊的玩具，將玩具分類，也將符合需求的玩具發送給補給站，分享給其他小朋友吧！'
          },
          {
            id: '/game-01/05.jpg',
            brand: '可爾必思',
            name: '「可爾必思」Peace小問答',
            description: `
        <p>你對「可爾必思」認識多少呢？等你來挑戰！</p>
        <p>• 活動1. 轉動輪盤回答問題，答對即可獲得口袋摺疊扇一個（數量有限）、闖關章一枚！</p>
        <p>• 活動2. 「可爾必思」試飲</p>
        <p>• 活動3. 按讚「可爾必思」FB或IG，與現場拍照道具合照，分享至個人FB或IG並tag #可爾必思，送水槍一支（數量有限）</p>
      `
          },
          {
            id: '/game-01/06.jpg',
            brand: '德恩奈',
            name: '保護萌牙大作戰',
            description:
              '可愛的小萌牙陪伴著我們開心吃飯、哈哈大笑，真的好重要！到底該怎麼保護寶貝小萌牙呢？快和牙寶寶迪恩一起來對抗蛀牙蟲，用德恩奈兒童口腔保健組每天認真刷牙，一起成為迪恩的好朋友！'
          },
          {
            id: '/game-01/07.jpg',
            brand: 'Life with Flower｜花宅日常',
            name: 'Life with Flower｜花宅日常',
            description: `
        <p>「帶一束花，回到生活裡。」</p>
        <p>來自台中的花宅日常，是一間提供常日自選花的鮮花店，希望可以透過花朵陪伴每個家庭。</p>
        <p>在花宅裡，除了花藝師的工作之外，還有花藝師和孩子的生活日常。邀請大家，一起探訪花宅的花朵和我們的故事。</p>
      `
          }
        ],
        s = [
          {
            id: '/game-02/01.jpg',
            name: '隨野家',
            description:
              '隨野家提供自由放養的優質雞蛋及加工品，同時致力於推廣友善農業與食農教育。我們精心設計兼具趣味與知識的多元體驗活動，適合各年齡層參與，讓大家在互動中深入了解從土地到餐桌的過程，並培養對環境永續的重視與實踐行動力。'
          },
          {
            id: '/game-02/02.jpg',
            name: '五寮尖山羊乳',
            description:
              '讓你喝新鮮直送的羊奶！這是離台北最近的羊場：位於三峽，五寮尖山的酪農：阿順一家人，每日餵養自己種牧草，並常清洗羊床管理糞便（羊的身體乾淨了，奶也不騷了）他採用低溫巴士殺菌，無均值化處理，直接展現天然的乳脂肪的清爽口感，準備好來一罐嗎？'
          },
          {
            id: '/game-02/03.jpg',
            name: '錦川食堂	',
            description:
              '純米研磨、手工製作之港式蘿蔔糕 & 草仔粿，用料實在，無添加香精香料，讓您吃的健康吃的安心。蘿蔔糕讓您每一口都吃的到蘿蔔絲及綿密香甜 ; 而當您咬下草仔粿的第一口，Q彈的外皮加上層次感豐富的內餡，讓您一口接一口，停不下來。'
          },
          {
            id: '/game-02/04.jpg',
            name: '芭寶米生態農場',
            description:
              '「芭寶米」五代務農位於中壢市的芝芭里，主要種植桃園3號米、帶有淡淡芋香味，怎麼煮都好吃。碗糕使用100%在來米製作有著濃濃米香，讓人人都愛吃台灣米！'
          },
          {
            id: '/game-02/05.jpg',
            name: '添丁養生黑木耳',
            description:
              '(Tien-Ding)想找現炸菇菇、菇餅、白木耳露、黑木耳露和水果這裡通通有！新鮮養生又好吃！'
          },
          {
            id: '/game-02/06.jpg',
            name: '甜馨農場',
            description: '有機藍莓、無農藥草莓，品嚐每一口甜蜜～'
          },
          {
            id: '/game-02/07.jpg',
            name: '春蜂滿蜜大丘園',
            description: `
          <p>堅信「有樹枝，就有鳥棲」。腳踏實地養好每一隻蜂、採好每一滴蜜、做好每一個環節，用專業打磨每個“樹枝”，必會有識者擇木而棲。</p>
          <p>自然的天工是生命在綻放，養蜂的匠心是對這份事業的追求。打造一片養蜂「迦南之地」，流淌著蜂蜜的人間樂土，消費者值得信賴的蜂蜜代名詞。大丘園養蜂場用匠心致敬大自然，用誠意回饋每位消費者。</p>
        `
          },
          {
            id: '/game-02/08.jpg',
            name: '古稻樂埕',
            description: `
          <p>講究「古」早傳統的飼養方法，採用天然酵母配方的酒糟「稻」穀作飼料，追求和「樂」自然、環境友善的飼養空間，創造人文和雞隻豐饒薈萃的大「埕」院。</p>
          <p>孫家古道樂埕”的原創精神，就是堅持以給家人吃的真誠心意，來飼養每隻令人感動幸福的雞。期盼這份真心，同時也傳承分享給每一個值得健康的人。</p>
          <p>販售商品茶葉蛋、雞肉肉鬆、麻油雞湯、蔥油雞</p>
        `
          },
          {
            id: '/game-02/09.jpg',
            name: '遇米甜',
            description: `
          <p>◆白龍王水果玉米－生食帶點像水梨，甘蔗香甜</p>
          <p>◆日本雙色水果玉米－文青甜的特色，有點甜不會膩</p>
          <p>◆紫色甜玉米－獨特少有的濃郁花青素，健康滿分甜玉米</p>
          <p>◆彩虹甜糯玉米－口感QQ帶有嚼勁</p>
          <p>◆鮮嫩玉米筍－高纖減重減脂的最佳蔬菜，玉米鬚還能煮茶喝，促進代謝</p>
          <p>◆水煮水果玉米－孩子們的最愛</p>
        `
          },
          {
            id: '/game-02/10.jpg',
            name: '芭樂主子與辣小妹',
            description:
              '珍珠芭樂珍珠芭樂成熟時由濃綠轉為淡綠色，沾染晨露的果實特別脆口，質地細緻，但香甜回甘。'
          }
        ],
        o = [
          {
            id: '/game-03/01.jpg',
            brand: '新北市家教中心',
            name: '新北市家教中心 無圖待補',
            description: '無圖代補'
          }
        ],
        a = [
          {
            id: '/game-04/01.jpg',
            brand: '農業部',
            name: '探索縣市特色食材與永續飲食之旅',
            description:
              '來一場美味又綠意盎然的冒險吧！深入探索台灣各縣市的特色蔬果！從台北的多汁柑橘、台南的甜蜜鳳梨，到高雄的清新蓮霧，每一口都是在地的鮮美。如何將這些食材與低碳、零浪費的飲食理念結合，打造不僅好吃、還能幫助地球的永續生活方式？快來一起了解、品嚐並實踐！'
          },
          {
            id: '/game-04/02.jpg',
            brand: '利樂包裝、正隆公司',
            name: '紙超人和紙盒小兵的奇幻歷險',
            description: `
        <p>你知道嗎？紙張與紙容器應該分開回收！正確分類紙製品，是我們輕鬆實踐環保的第一步，使用後進行妥善回收，不僅能減少資源浪費，還能提升再利用的效率。</p>
        <p>讓我們從日常習慣做起，一起為地球打造更美好的未來！</p>
      `
          },
          {
            id: '/game-04/03.jpg',
            brand: '義美鮮乳',
            name: '義美如木鮮乳永續自造所',
            description:
              'Making and Thinking！邀請所有的小朋友一起利用大自然的素材、生活中二次利用的物品，發揮創意與美感，集體創作義美如木鮮乳盒，一起來體驗永續自造所！'
          },
          {
            id: '/game-04/04.jpg',
            brand: '',
            name: '未來親子',
            description: ''
          }
        ],
        l = [
          {
            id: '/game-05/01.jpg',
            name: '我是未來知識王',
            description:
              '浩瀚的知識宇宙，你掌握了多少奧秘呢？趕快加入這場知識宇宙大冒險，成為未來知識王，還可抽萬元大獎並獲得《未來兒童》《未來少年》雜誌及多項精美好禮。'
          },
          {
            id: '/game-05/03.jpg',
            name: '未來親子故事屋',
            description:
              '大朋友、小朋友～一起來聽故事囉！生動有趣的未來姐姐說故事、加上趣味又好玩的遊戲，趕快加入這場故事派對，一起讓想像夢遊！'
          }
        ],
        c = () => {
          const p = document.querySelectorAll('#accordionContainer > div')
          Z.from(p, {
            scrollTrigger: {
              trigger: '#accordionContainer',
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            stagger: { each: 0.3, from: 'start' }
          })
        },
        u = () => {
          const p = document.querySelectorAll('.gift-item')
          Z.from(p, {
            scrollTrigger: {
              trigger: '.grid',
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            stagger: { each: 0.3, from: 'start' }
          }),
            p.forEach((h) => {
              Z.to(h, {
                scale: 1.05,
                duration: 0.8,
                ease: 'bounce.inOut',
                repeat: -1,
                yoyo: !0,
                paused: !0
              }),
                h.addEventListener('mouseenter', () => {
                  Z.to(h, { scale: 1.05, duration: 0.3, ease: 'power1.out' })
                }),
                h.addEventListener('mouseleave', () => {
                  Z.to(h, { scale: 1, duration: 0.3, ease: 'power1.out' })
                })
            })
        }
      return (
        qt(() => {
          xr({ Tooltip: Hi, Modal: rn, Collapse: Bi }), c(), u()
        }),
        (p, h) => {
          const f = Cr,
            m = j1,
            g = xo
          return (
            J(),
            ee('div', null, [
              G(f, null, {
                default: De(
                  () =>
                    h[3] ||
                    (h[3] = [
                      d('img', { src: F1, alt: '', width: '600' }, null, -1),
                      d(
                        'span',
                        {
                          class:
                            'absolute bottom-0 right-2 top-auto z-10 w-[70px] sm:-right-[100px] sm:top-24 sm:w-[180px]'
                        },
                        [d('img', { src: kr, alt: '', width: '150' })],
                        -1
                      )
                    ])
                ),
                _: 1
              }),
              d('div', Q1, [
                d('div', J1, [
                  d(
                    'div',
                    {
                      class: 'cursor-pointer px-5 py-1 md:px-8',
                      onClick: h[0] || (h[0] = (_) => le(Jn)('game-01'))
                    },
                    h[4] || (h[4] = [d('img', { src: U1, alt: '' }, null, -1)])
                  ),
                  d(
                    'div',
                    {
                      class: 'cursor-pointer px-5 py-1 md:px-8',
                      onClick: h[1] || (h[1] = (_) => le(Jn)('game-02'))
                    },
                    h[5] || (h[5] = [d('img', { src: H1, alt: '' }, null, -1)])
                  )
                ]),
                d('div', e_, [
                  h[6] ||
                    (h[6] = pi(
                      '<div class="mb-20 text-center"><img class="mx-auto mb-5 block" width="780" src="' +
                        V1 +
                        '" alt=""><div class="text-center text-[1.1rem] font-black"><div>兼具知識、趣味的闖關挑戰</div><div>在未來親子野餐日10週年活動就玩得到！</div><div>爸爸媽媽陪著孩子共同完成任務</div><div>多樣品牌小禮拿滿滿，集滿10章再抽大獎！</div></div></div><div id="game-01" class="text-center"><img class="mx-auto" width="450" src="' +
                        q1 +
                        '" alt=""></div><div class="mb-5 flex flex-wrap items-center gap-5 md:flex-nowrap"><div class="w-[200px] shrink-0 px-5 py-1 pe-5 text-kv-green md:w-[280px] md:border-e md:border-kv-green"><img class="w-full" src="' +
                        W1 +
                        '" alt=""></div><div class="text-[1.1rem] font-black"> 各大知名品牌帶來寓教於樂、全家共玩的親子活動， 一起享受闖關集章、學習知識，共度好時光！ </div></div>',
                      3
                    )),
                  d('div', t_, [G(m, { list: n, className: 'bg-kv-green' })]),
                  h[7] ||
                    (h[7] = d(
                      'div',
                      {
                        class:
                          'mb-5 flex flex-wrap items-center gap-5 md:flex-nowrap'
                      },
                      [
                        d(
                          'div',
                          {
                            class:
                              'w-[200px] shrink-0 px-5 py-1 pe-5 text-primary-500 md:w-[280px] md:border-e md:border-primary-500'
                          },
                          [d('img', { class: 'w-full', src: Y1, alt: '' })]
                        ),
                        d(
                          'div',
                          { class: 'text-[1.1rem] font-black' },
                          ' 攜手農業部，來小農市集體驗從產地到餐桌的永續之旅吧！ 這裡不僅是美味的起點，更是與家人認識環境永續、共享歡樂時光的最佳選擇！ '
                        )
                      ],
                      -1
                    )),
                  d('div', i_, [G(m, { list: s })]),
                  h[8] ||
                    (h[8] = d(
                      'div',
                      {
                        class:
                          'mb-5 flex flex-wrap items-center gap-5 md:flex-nowrap'
                      },
                      [
                        d(
                          'div',
                          {
                            class:
                              'w-[200px] shrink-0 px-5 py-1 pe-5 text-kv-green md:w-[280px] md:border-e md:border-kv-green'
                          },
                          [d('img', { class: 'w-full', src: X1, alt: '' })]
                        ),
                        d(
                          'div',
                          { class: 'text-[1.1rem] font-black' },
                          ' 讓教育與愛永續！新北市政府各單位攜手進駐，宣導政策並提供新知。 全家人一起共學共讀，不能不知道的快訊一次掌握！ '
                        )
                      ],
                      -1
                    )),
                  d('div', n_, [G(m, { list: o, className: 'bg-kv-green' })]),
                  h[9] ||
                    (h[9] = d(
                      'div',
                      {
                        class:
                          'mb-5 flex flex-wrap items-center gap-5 md:flex-nowrap'
                      },
                      [
                        d(
                          'div',
                          {
                            class:
                              'w-[200px] shrink-0 px-5 py-1 pe-5 text-primary-500 md:w-[280px] md:border-e md:border-primary-500'
                          },
                          [d('img', { class: 'w-full', src: G1, alt: '' })]
                        ),
                        d(
                          'div',
                          { class: 'text-[1.1rem] font-black' },
                          ' 由四大品牌共同打造環保、低負擔的永續迷宮， 讓資源與永續教育持續善的循環，帶孩子一起愛地球！ '
                        )
                      ],
                      -1
                    )),
                  d('div', r_, [G(m, { list: a })]),
                  h[10] ||
                    (h[10] = d(
                      'div',
                      {
                        class:
                          'mb-5 flex flex-wrap items-center gap-5 md:flex-nowrap'
                      },
                      [
                        d(
                          'div',
                          {
                            class:
                              'w-[200px] shrink-0 px-5 py-1 pe-5 text-kv-green md:w-[280px] md:border-e md:border-kv-green'
                          },
                          [d('img', { class: 'w-full', src: Z1, alt: '' })]
                        ),
                        d(
                          'div',
                          { class: 'text-[1.1rem] font-black' },
                          ' 未來親子推廣專區，跟著來寶一起聽故事、玩知識、塗塗鴉、看看書， 感受知識與閱讀的無限樂趣！ '
                        )
                      ],
                      -1
                    )),
                  d('div', s_, [G(m, { list: l, className: 'bg-kv-green' })])
                ]),
                h[11] ||
                  (h[11] = d(
                    'span',
                    {
                      class: 'absolute -bottom-[80px] start-0 h-[100px] w-full'
                    },
                    [d('img', { class: 'w-full', src: br, alt: '' })],
                    -1
                  ))
              ]),
              d('div', o_, [
                d('div', a_, [
                  h[13] ||
                    (h[13] = d(
                      'div',
                      { class: 'relative z-10 text-center' },
                      [
                        d('img', {
                          width: '450',
                          class: 'mx-auto',
                          src: K1,
                          alt: ''
                        })
                      ],
                      -1
                    )),
                  h[14] ||
                    (h[14] = d(
                      'div',
                      { class: 'text-center text-[1.1rem] font-black' },
                      [
                        d('div', null, '集滿10個闖關印章，就能兌換抽獎券！'),
                        d('div', null, '超過60個幸運獎項，超級豪禮等你來拿！')
                      ],
                      -1
                    )),
                  d('div', l_, [
                    (J(),
                    ee(
                      Et,
                      null,
                      Tt(i, (_, k) =>
                        d(
                          'div',
                          {
                            key: k,
                            class:
                              'scroll-animate-zoomIn relative flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg',
                            onMouseenter: (T) => (e.value = k),
                            onMouseleave:
                              h[2] || (h[2] = (T) => (e.value = null))
                          },
                          [
                            d('div', u_, [
                              h[12] ||
                                (h[12] = d(
                                  'span',
                                  {
                                    class:
                                      'absolute start-0 top-0 inline-block h-full w-full scale-95 rounded-tl-xl rounded-tr-xl border border-white'
                                  },
                                  null,
                                  -1
                                )),
                              d('div', d_, [
                                d(
                                  'img',
                                  {
                                    class: 'h-full w-full object-cover',
                                    src: `${le(t)}/lottery/${_.id}`,
                                    alt: `【${_.brand}】${_.name}`
                                  },
                                  null,
                                  8,
                                  f_
                                )
                              ])
                            ]),
                            d('div', p_, [
                              d('div', h_, ' 【' + _t(_.brand) + '】 ', 1),
                              d('h2', g_, _t(_.name), 1)
                            ]),
                            d('div', m_, _t(_.price), 1),
                            d(
                              'div',
                              {
                                class: ei(
                                  `absolute inset-0 z-10 bg-white p-3 px-3 transition-opacity duration-300 ${e.value === k ? 'opacity-100' : 'opacity-0'}`
                                )
                              },
                              [
                                d('div', __, [
                                  d('div', v_, [
                                    d(
                                      'span',
                                      null,
                                      '【' + _t(_.brand) + '】',
                                      1
                                    ),
                                    d('h2', b_, _t(_.name), 1)
                                  ]),
                                  d(
                                    'div',
                                    {
                                      class:
                                        'h-full grow overflow-y-auto overflow-x-hidden py-3',
                                      innerHTML: _.description
                                    },
                                    null,
                                    8,
                                    w_
                                  )
                                ])
                              ],
                              2
                            )
                          ],
                          40,
                          c_
                        )
                      ),
                      64
                    ))
                  ]),
                  d('div', y_, [G(g)])
                ])
              ])
            ])
          )
        }
      )
    }
  },
  C_ = '' + new URL('../img/kv-article.svg', import.meta.url).href,
  k_ = '' + new URL('../img/title-article.svg', import.meta.url).href,
  E_ = '' + new URL('../img/article-icon-01.svg', import.meta.url).href,
  T_ = '' + new URL('../img/article-icon-02.svg', import.meta.url).href,
  S_ = '' + new URL('../img/article-icon-03.svg', import.meta.url).href,
  O_ = '' + new URL('../img/article-icon-04.svg', import.meta.url).href,
  A_ = ['href'],
  P_ = { class: 'flex flex-col' },
  M_ = {
    class:
      'aspect-h-4 aspect-w-6 overflow-hidden rounded-tl-2xl bg-gray-100 transition-opacity duration-300'
  },
  L_ = ['src', 'alt'],
  Ns = {
    __name: 'ArticleItem',
    props: {
      className: { type: String, default: 'bg-primary-500' },
      list: { type: Array, required: !0 }
    },
    setup(r) {
      const e = r,
        { list: t } = e
      return (
        Le(null),
        (i, n) => (
          J(!0),
          ee(
            Et,
            null,
            Tt(
              le(t),
              (s, o) => (
                J(),
                ee(
                  'div',
                  {
                    key: o,
                    class:
                      'scroll-animate-fadeInUp ms:p-2.5 animate-slideIn px-1 pb-5'
                  },
                  [
                    d(
                      'a',
                      {
                        href: s.link,
                        target: '_blank',
                        class:
                          'relative block rounded-tl-2xl bg-white px-3 pt-3 shadow-lg'
                      },
                      [
                        d('div', P_, [
                          d('div', M_, [
                            d(
                              'img',
                              {
                                class: 'h-full w-full object-cover',
                                src: s.src,
                                alt: s.title
                              },
                              null,
                              8,
                              L_
                            )
                          ])
                        ]),
                        d(
                          'div',
                          {
                            class: ei(
                              `relative -bottom-3 -start-0 line-clamp-2 h-[58px] w-[calc(100%+30px)] rounded-tr-xl px-2 py-1.5 text-left font-bold tracking-wide text-white ${r.className}`
                            )
                          },
                          _t(s.title),
                          3
                        )
                      ],
                      8,
                      A_
                    )
                  ]
                )
              )
            ),
            128
          )
        )
      )
    }
  },
  D_ = { class: 'bg-green' },
  R_ = { class: 'container py-16' },
  $_ = { class: 'mt-10 flex flex-col items-center gap-5' },
  z_ = { class: 'grid grid-cols-2 gap-5 md:grid-cols-4' },
  I_ = { id: 'article-01', class: 'py-5 md:py-10' },
  B_ = { class: 'grid gap-3 md:grid-cols-3 md:gap-8' },
  N_ = { id: 'article-02', class: 'py-5 md:py-10' },
  j_ = { class: 'grid gap-3 md:grid-cols-3 md:gap-8' },
  F_ = { id: 'article-03', class: 'py-5 md:py-10' },
  U_ = { class: 'grid gap-3 md:grid-cols-3 md:gap-8' },
  H_ = { id: 'article-04', class: 'py-5 md:py-10' },
  V_ = { class: 'grid gap-3 md:grid-cols-3 md:gap-8' },
  q_ = {
    class: 'mb-8 mt-3 flex w-full flex-wrap items-center justify-center gap-16'
  },
  W_ = {
    __name: 'Article',
    setup(r) {
      Z.registerPlugin(U),
        qt(() => {
          xr({ Tooltip: Hi, Modal: rn, Collapse: Bi })
        })
      const e = [
          {
            src: 'https://imgs.cwgv.com.tw/articles/19/16519/preview/16519.png',
            title:
              '不用花大錢的學習就在日常生活與大自然裡，而我們是否錯過了這份珍貴的成長禮物呢？',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/16519'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/27/31227/preview/31227.png',
            title:
              '掌握3原則，讓孩子放下手機，親近自然》華德福戶外引導師：玩，是看起來不像學習的學習',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/31227'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/67/11867/preview/11867.png',
            title: '理論與效益：戶外教育4大效益、10項學習成果',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/11867'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/17/3617/preview/3617.png',
            title: '翻轉教室學習模式〉帶孩子走向戶外， 知識才會貼近生活',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/3617'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/88/29088/preview/29088.png',
            title:
              '孩子太宅、不愛運動？念體育系的心理師、三寶爸張榮斌分享4招，輕鬆培養運動好習慣',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/29088'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/85/28285/preview/28285.png',
            title:
              '近視率飆升的原因是什麼》看太多電視電腦、玩手機太久？並不是！為了保健視力，兒童每天需要約３小時處於日照下',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/28285'
          }
        ],
        t = [
          {
            src: 'https://imgs.cwgv.com.tw/articles/57/27957/preview/27957.png',
            title:
              '小時候的旅行，成為孩子長大後的養分；陳培瑜曾請假一週，帶建中兒去環島，讓大自然和美好回憶成為孩子的力量',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/27957'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/28/4328/preview/4328.png',
            title: '孩子的快樂是來自於父母的陪伴，而非錢花了多少',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/4328'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/61/5261/preview/5261.png',
            title: '其實，孩子願望比你想像的簡單',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/5261'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/96/32396/preview/32396.png',
            title:
              '長大後，孩子對家的記憶是什麼？6方法打造家的「記憶存摺」，養出懂愛、有幸福感的孩子',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/32396'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/54/23854/preview/23854.png',
            title:
              '允許孩子玩樂》「玩」是童年重要的事，爸媽應該鼓勵孩子出去玩耍，懂玩的孩子更懂得生存',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/23854'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/23/14023/preview/14023.png',
            title:
              '孩子最好的玩具就是他們的雙手，而不是手機或電視機，讓孩子用雙手盡情探索世界',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/14023'
          }
        ],
        i = [
          {
            src: 'https://imgs.cwgv.com.tw/articles/20/30620/preview/30620.png',
            title:
              '2024未來親子野餐日 盛大登場！闖關互動寓教於樂 國際級表演趣味精彩 千組家庭歡度周末 一起幸福Fun滿滿！',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/30620'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/52/27452/preview/27452.png',
            title:
              '全台最盛大！【未來親子野餐日】上千組家庭草地曬幸福，闔家同樂趣味闖關比食力',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/27452'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/18/20018/preview/20018.png',
            title:
              '2020未來親子野餐日：全台最盛大的「知識型野餐派對」， 萬人熱情參與，用食育打造幸福家庭時光！',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/20018'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/56/16556/preview/16556.png',
            title:
              '2019未來親子野餐日前進高雄囉！食育嘉年華，全家大小嗨翻天、親子食育課，吃出孩子好未來！',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/16556'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/82/14382/preview/14382.png',
            title: '2019未來親子萬人綠地野餐，吃出孩子好未來！',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/14382'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/32/11132/preview/11132.png',
            title: '2018未來親子野餐日 8,000大手小手歡聚台中市民廣場',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/11132'
          }
        ],
        n = [
          {
            src: 'https://imgs.cwgv.com.tw/articles/26/14126/preview/14126.png',
            title: '從產地到餐桌：了解食物來源和生長環境，學會惜福感恩',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/14126'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/29/23229/preview/23229.png',
            title:
              '孩子愛挑食、不喜歡吃青菜？台南官田國小的食農教育，翻轉孩子愛上健康飲食',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/23229'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/65/10065/preview/10065.png',
            title: '健康教養術：從農場到餐桌的胡蘿蔔',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/10065'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/53/26753/preview/26753.png',
            title:
              '從生活中落實SDGs》關懷無家者，建中學生從種菜到料理，自製餐點送餐到北車，強調「真心款待」',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/26753'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/02/32302/preview/32302.png',
            title:
              '石虎保育可以這樣做！農業部聯手家樂福，用友善石虎山蕉為石虎保育打前鋒，邁向ESG永續新世代',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/32302'
          },
          {
            src: 'https://imgs.cwgv.com.tw/articles/11/27511/preview/27511.png',
            title:
              '打造SDGs幸福城市：從永續教育開始！新北特色學校帶給孩子們新未來',
            link: 'https://futureparenting.cwgv.com.tw/family/content/index/27511'
          }
        ]
      return (s, o) => {
        const a = Cr,
          l = xo
        return (
          J(),
          ee('div', null, [
            G(a, null, {
              default: De(
                () =>
                  o[4] ||
                  (o[4] = [
                    d('img', { src: C_, alt: '', width: '600' }, null, -1),
                    d(
                      'span',
                      {
                        class:
                          'absolute bottom-0 right-2 top-auto z-10 w-[70px] sm:-right-[100px] sm:top-24 sm:w-[180px]'
                      },
                      [d('img', { src: kr, alt: '', width: '150' })],
                      -1
                    )
                  ])
              ),
              _: 1
            }),
            d('div', D_, [
              d('div', R_, [
                o[13] ||
                  (o[13] = d(
                    'div',
                    { class: 'mb-8 text-center' },
                    [
                      d('img', {
                        width: '600',
                        class: 'mx-auto',
                        src: k_,
                        alt: ''
                      })
                    ],
                    -1
                  )),
                o[14] ||
                  (o[14] = d(
                    'div',
                    { class: 'text-center text-[1.1rem] font-black' },
                    [
                      d('div', null, '未來親子精選四大主題文章'),
                      d('div', null, '透過專業實用的教養好文'),
                      d('div', null, '為生活增添質地'),
                      d('div', null, '讓爸媽與孩子共創永續而美好的家庭回憶！')
                    ],
                    -1
                  )),
                d('div', $_, [
                  d('div', z_, [
                    d(
                      'div',
                      {
                        class: 'animate-bounceFloat cursor-pointer',
                        onClick: o[0] || (o[0] = (c) => le(Jn)('article-01'))
                      },
                      o[5] ||
                        (o[5] = [d('img', { src: E_, alt: '' }, null, -1)])
                    ),
                    d(
                      'div',
                      {
                        class: 'animate-bounceFloat cursor-pointer',
                        onClick: o[1] || (o[1] = (c) => le(Jn)('article-02'))
                      },
                      o[6] ||
                        (o[6] = [d('img', { src: T_, alt: '' }, null, -1)])
                    ),
                    d(
                      'div',
                      {
                        class: 'animate-bounceFloat cursor-pointer',
                        onClick: o[2] || (o[2] = (c) => le(Jn)('article-03'))
                      },
                      o[7] ||
                        (o[7] = [d('img', { src: S_, alt: '' }, null, -1)])
                    ),
                    d(
                      'div',
                      {
                        class: 'animate-bounceFloat cursor-pointer',
                        onClick: o[3] || (o[3] = (c) => le(Jn)('article-04'))
                      },
                      o[8] ||
                        (o[8] = [d('img', { src: O_, alt: '' }, null, -1)])
                    )
                  ])
                ]),
                d('div', I_, [
                  o[9] ||
                    (o[9] = d(
                      'div',
                      {
                        class:
                          'scroll-animate-fadeInUp mb-4 text-center text-[35px] font-black text-primary-500 md:text-[45px]'
                      },
                      ' #運動學習力 ',
                      -1
                    )),
                  d('div', B_, [
                    G(Ns, { list: e, className: 'bg-primary-500' })
                  ])
                ]),
                d('div', N_, [
                  o[10] ||
                    (o[10] = d(
                      'div',
                      {
                        class:
                          'scroll-animate-fadeInUp mb-4 text-center text-[35px] font-black text-kv-green md:text-[45px]'
                      },
                      ' #家庭陪伴力 ',
                      -1
                    )),
                  d('div', j_, [
                    G(Ns, { list: t, className: 'bg-primary-500' })
                  ])
                ]),
                d('div', F_, [
                  o[11] ||
                    (o[11] = d(
                      'div',
                      {
                        class:
                          'scroll-animate-fadeInUp mb-4 text-center text-[35px] font-black text-primary-500 md:text-[45px]'
                      },
                      ' #永續執行力 ',
                      -1
                    )),
                  d('div', U_, [
                    G(Ns, { list: n, className: 'bg-primary-500' })
                  ])
                ]),
                d('div', H_, [
                  o[12] ||
                    (o[12] = d(
                      'div',
                      {
                        class:
                          'scroll-animate-fadeInUp mb-4 text-center text-[35px] font-black text-kv-green md:text-[45px]'
                      },
                      ' #野餐玩樂力 ',
                      -1
                    )),
                  d('div', V_, [G(Ns, { list: i, className: 'bg-kv-green' })])
                ]),
                d('div', q_, [G(l)]),
                o[15] ||
                  (o[15] = pi(
                    '<div class="mb-10 mt-5 flex w-full flex-wrap items-center justify-center gap-16"><a href="#" class="mt-5 inline-flex items-center gap-3 rounded-full bg-primary-500 px-8 py-2 text-2xl font-bold text-white transition md:hover:bg-kv-green"><svg width="41" height="41" viewBox="0 0 41 41" fill="none"><path d="M37.5832 28.5976V7.97797C37.5832 5.92797 35.909 4.40756 33.8761 4.57839H33.7736C30.1861 4.88589 24.7365 6.71381 21.6957 8.62714L21.4053 8.81506C20.9098 9.12256 20.0898 9.12256 19.5944 8.81506L19.1673 8.55881C16.1265 6.66256 10.694 4.85172 7.1065 4.56131C5.07359 4.39047 3.4165 5.92797 3.4165 7.96089V28.5976C3.4165 30.2376 4.749 31.7751 6.389 31.9801L6.88442 32.0484C10.5915 32.5438 16.3144 34.423 19.5944 36.2167L19.6628 36.2509C20.124 36.5071 20.8586 36.5071 21.3028 36.2509C24.5828 34.4401 30.3228 32.5438 34.0469 32.0484L34.6107 31.9801C36.2507 31.7751 37.5832 30.2376 37.5832 28.5976Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 9.37891V35.0039" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.2397 14.5039H9.396" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.521 19.6289H9.396" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> 看更多好文 </a></div>',
                    1
                  ))
              ]),
              o[16] ||
                (o[16] = d(
                  'span',
                  { class: 'absolute -bottom-[80px] start-0 h-[100px] w-full' },
                  [
                    d('img', {
                      class: 'h-full w-full object-cover',
                      src: br,
                      alt: ''
                    })
                  ],
                  -1
                ))
            ])
          ])
        )
      }
    }
  },
  Y_ = '' + new URL('../img/kv-notice.svg', import.meta.url).href,
  X_ = '' + new URL('../img/title-faq.svg', import.meta.url).href,
  G_ = '' + new URL('../img/title-faq-item.svg', import.meta.url).href,
  Z_ = '' + new URL('../img/title-transportation.svg', import.meta.url).href,
  K_ = { class: 'bg-green' },
  Q_ = { class: 'container py-16' },
  J_ = { class: 'scroll-animate-fadeIn bg-white' },
  ev = ['id'],
  tv = [
    'data-twe-collapse-collapsed',
    'data-twe-target',
    'aria-expanded',
    'aria-controls'
  ],
  iv = ['id'],
  nv = { class: 'px-6 pb-4 text-xl md:px-14' },
  rv = {
    __name: 'Notice',
    setup(r) {
      Z.registerPlugin(U),
        qt(() => {
          xr({ Tooltip: Hi, Modal: rn, Collapse: Bi })
        })
      const e = [
        {
          q: '請問報名資格為何？需要費用嗎？',
          a: '舉凡親子家庭皆可參加；活動報名每組家庭899元整，三組優惠價2,299元整再送精選圖書。今年還有加碼慶生禮每組只要999元，一起來趴踢！'
        },
        {
          q: '一定要報名才可以參加嗎？有實體票券嗎？',
          a: '為提供優質的活動品質，活動前開放網站事先報名。報名成功後，會收到訂單成立信件，無提供實體票券。活動前將會發送提醒簡訊至您報名資料填寫的手機，活動當天憑簡訊即可至現場報到區領取贈品喔！'
        },
        {
          q: '有名額限制嗎？',
          a: '1,500組親子家庭額滿為止。野餐日當天現場多項活動皆開放參與，歡迎攜家帶眷體驗野餐樂趣。	'
        },
        {
          q: '可攜伴參加嗎？',
          a: '可攜伴，不限人數，歡迎全家大小一起來參加（注意：一組家庭/一筆訂單，僅能領取一份贈品及一張闖關卡，完成闖關後可兌換一張抽獎券）'
        },
        {
          q: '主辦單位有提供食物嗎？要帶什麼呢？',
          a: '大會活動僅提供福袋禮、早鳥禮及抽獎禮之品項，並無提供野餐食物，若有需要可以自行攜帶，也可至十在好食區購買支持在地小農。為落實環境永續，請務必自行攜帶餐具，其餘物品大會建議攜帶環保袋、野餐墊、水等，以及開心玩樂的心情！'
        },
        {
          q: '無付費報名的民眾可以參與嗎？現場可報名嗎？',
          a: '無付費報名的民眾現場無法參與闖關及抽獎。來不及事先報名者，可於當天至報到處現場付費報名，但需依實際銷售狀況為主，若門票已售罄，主辦單位可不受理現場報名。'
        },
        {
          q: '我無法準時到場，可以請親友代為領取贈品嗎？',
          a: '領取贈品皆以報名簡訊為依據，簡訊會發至您在報名時所填寫的聯絡手機，只要有簡訊，請同行友人代為領取也可以喔。(提醒您！一封簡訊僅限領取一次贈品)'
        },
        {
          q: '抽獎項兌領注意事項為何？',
          a: '得獎者須於摸彩時由本人在場領取，逾時視同放棄。得獎者請務必出示身分證！獎品金額在新臺幣20,000元（含）以上之得獎者，領取獎品時請出示身份證、健保卡或駕照等雙證件，否則視同棄權。現場摸彩獎品將依中華民國稅法規定扣抵所得稅。凡得獎者之獎金超過新臺幣20,000元（含）以上者，須負擔10%之所得稅；外籍人士則須負擔20%。'
        },
        {
          q: '報名繳費後，因故不克參加可退費嗎？',
          a: '報名繳費後，因故不克參加者，請於3/28(五)前提出，主辦單位將扣除30%手續費後予以退費，3/29(六)起取消者恕無法退費。若活動前一週內因天候等不可抗力因素延期，請配合主辦單位公告之延期日期，恕不退費。'
        },
        {
          q: '活動因故延期如何因應？',
          a: '如有調整，將於活動前 3 天於【本活動網頁】公告並以電子郵件或簡訊通知。'
        },
        {
          q: '下雨活動會取消嗎？',
          a: '如遇雨天將移至中山橋下進行未來親子園遊會，活動照常舉行不會取消喔！'
        },
        {
          q: '我還有其它疑問，不在網站的Q/A裡，請問我可以怎麼辦？',
          a: '有任何疑問，歡迎您撥打服務專線(02)2662-0012（週一到週五9:00~12:30 ; 13:30~17:00），將有專人為您解答。'
        }
      ]
      return (t, i) => {
        const n = Cr
        return (
          J(),
          ee('div', null, [
            G(n, null, {
              default: De(
                () =>
                  i[0] ||
                  (i[0] = [
                    d('img', { src: Y_, alt: '', width: '600' }, null, -1),
                    d(
                      'span',
                      {
                        class:
                          'absolute bottom-0 right-2 top-auto z-10 w-[70px] sm:-right-[100px] sm:top-24 sm:w-[180px]'
                      },
                      [d('img', { src: kr, alt: '', width: '150' })],
                      -1
                    )
                  ])
              ),
              _: 1
            }),
            d('div', K_, [
              d('div', Q_, [
                i[3] ||
                  (i[3] = d(
                    'div',
                    {
                      class:
                        'my-8 flex flex-col items-center gap-3 text-3xl font-bold'
                    },
                    [
                      d('div', { class: 'mb-5' }, [
                        d('img', { width: '345', src: X_, alt: '' })
                      ])
                    ],
                    -1
                  )),
                d('div', J_, [
                  (J(),
                  ee(
                    Et,
                    null,
                    Tt(e, (s, o) =>
                      d(
                        'div',
                        { key: o, class: 'border-b border-primary-500' },
                        [
                          d(
                            'h2',
                            { class: 'mb-0', id: `heading${o}` },
                            [
                              d(
                                'button',
                                {
                                  class:
                                    'group relative flex w-full border-0 px-5 py-3 text-start text-[19px] font-extrabold text-primary-500 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] md:items-center',
                                  type: 'button',
                                  'data-twe-collapse-init': '',
                                  'data-twe-collapse-collapsed': o !== 0,
                                  'data-twe-target': `#collapse${o}`,
                                  'aria-expanded': o === 0,
                                  'aria-controls': `collapse${o}`
                                },
                                [
                                  i[1] ||
                                    (i[1] = d(
                                      'img',
                                      {
                                        class: 'me-3 mt-1',
                                        src: G_,
                                        width: '25'
                                      },
                                      null,
                                      -1
                                    )),
                                  d('span', null, _t(s.q), 1),
                                  i[2] ||
                                    (i[2] = pi(
                                      '<span class="ms-auto mt-1.5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none md:mt-0"><svg width="23" height="23" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#68BE83"></circle><g clip-path="url(#clip0_420_256)"><path d="M23.045 18.2348C22.754 18.2346 22.475 18.1188 22.2694 17.9129L16.6557 12.2992C16.4859 12.1293 16.2842 11.9945 16.0622 11.9026C15.8403 11.8106 15.6023 11.7633 15.3621 11.7633C15.1218 11.7633 14.8839 11.8106 14.6619 11.9026C14.44 11.9945 14.2383 12.1293 14.0684 12.2992L8.46208 17.9056C8.25508 18.1055 7.97783 18.2161 7.69005 18.2136C7.40228 18.2111 7.12699 18.0957 6.9235 17.8922C6.72 17.6887 6.60457 17.4134 6.60207 17.1256C6.59957 16.8379 6.7102 16.5606 6.91013 16.3536L12.5121 10.7473C13.2674 9.99344 14.2909 9.57007 15.3581 9.57007C16.4252 9.57007 17.4487 9.99344 18.204 10.7473L23.8213 16.3609C23.9749 16.5144 24.0796 16.71 24.1219 16.923C24.1643 17.136 24.1426 17.3567 24.0595 17.5574C23.9764 17.758 23.8356 17.9294 23.655 18.05C23.4745 18.1706 23.2622 18.2349 23.045 18.2348Z" fill="white"></path></g><defs><clipPath id="clip0_420_256"><rect width="17.561" height="17.561" fill="white" transform="translate(24.1462 5.12183) rotate(90)"></rect></clipPath></defs></svg></span>',
                                      1
                                    ))
                                ],
                                8,
                                tv
                              )
                            ],
                            8,
                            ev
                          ),
                          d(
                            'div',
                            {
                              id: `collapse${o}`,
                              class: ei(`!visible ${o > 0 ? 'hidden' : null}`),
                              'data-twe-collapse-item': ''
                            },
                            [d('div', nv, _t(s.a), 1)],
                            10,
                            iv
                          )
                        ]
                      )
                    ),
                    64
                  ))
                ])
              ]),
              i[4] ||
                (i[4] = d(
                  'div',
                  { class: 'container py-16' },
                  [
                    d(
                      'div',
                      {
                        class:
                          'flex flex-col items-center gap-3 text-3xl font-bold'
                      },
                      [
                        d('div', { class: 'mb-6' }, [
                          d('img', { width: '300', src: Z_, alt: '' })
                        ])
                      ]
                    ),
                    d('div', { class: 'scroll-animate-fadeIn mb-8' }, [
                      d(
                        'div',
                        {
                          class: 'mb-3 text-[19px] font-bold text-primary-500'
                        },
                        ' 如何到達？ '
                      ),
                      d('div', { class: 'my-3 text-center' }, [
                        d('iframe', {
                          class: 'h-[250px] w-full md:h-[450px]',
                          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3623542421947!2d121.47821782537727!3d25.05570482780247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8fac6152a05%3A0x3821847e329dcd64!2z5paw5YyX5aSn6YO95pyD5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1710127332403!5m2!1szh-TW!2stw',
                          width: '600',
                          height: '450',
                          style: { border: '0' },
                          allowfullscreen: '',
                          loading: 'lazy',
                          referrerpolicy: 'no-referrer-when-downgrade'
                        })
                      ])
                    ]),
                    d('div', { class: 'scroll-animate-fadeIn mb-8' }, [
                      d(
                        'div',
                        {
                          class: 'mb-3 text-[19px] font-bold text-primary-500'
                        },
                        ' 新北大都會公園 '
                      ),
                      d('div', null, '地址：新北市三重區水漾路一段')
                    ]),
                    d('div', { class: 'scroll-animate-fadeIn mb-8' }, [
                      d(
                        'div',
                        {
                          class: 'mb-3 text-[19px] font-bold text-primary-500'
                        },
                        '捷運'
                      ),
                      d('div', { class: 'flex flex-col gap-3' }, [
                        d('div', null, '1.捷運中和線三重站，1出口即可抵達。'),
                        d('div', null, '2.機場捷運線A2三重站，從1A出口即可抵達')
                      ])
                    ]),
                    d('div', { class: 'scroll-animate-fadeIn mb-8' }, [
                      d(
                        'div',
                        {
                          class: 'mb-3 text-[19px] font-bold text-primary-500'
                        },
                        '公車'
                      ),
                      d('div', { class: 'flex flex-col gap-3' }, [
                        d(
                          'div',
                          null,
                          '1.捷運三重站：62、227區、232、264、640。'
                        ),
                        d(
                          'div',
                          null,
                          ' 2.菜寮（重陽路）站：14、227、227區、232、292、292副、621、640、662、803、806、1212、忠孝幹線。 '
                        ),
                        d(
                          'div',
                          null,
                          ' 3.菜寮（重新路）站：14、62、111、227、264、292、616、622、636、638、639、801、803、820、857、1209、1803、9102、F301及忠孝幹線。 '
                        )
                      ])
                    ]),
                    d('div', { class: 'scroll-animate-fadeIn mb-8' }, [
                      d(
                        'div',
                        {
                          class: 'mb-3 text-[19px] font-bold text-primary-500'
                        },
                        ' 微笑單車 '
                      ),
                      d('div', null, '捷運三重站(3號出口)')
                    ]),
                    d('div', { class: 'scroll-animate-fadeIn mb-8' }, [
                      d(
                        'div',
                        {
                          class: 'mb-3 text-[19px] font-bold text-primary-500'
                        },
                        ' 停車資訊(附近有多個付費停車場) '
                      ),
                      d('div', { class: 'flex flex-col gap-3' }, [
                        d(
                          'div',
                          null,
                          ' 1.幸褔水漾停車場：新北市三重區重新橋北側自行車道與疏洪十六路交叉口 '
                        ),
                        d(
                          'div',
                          null,
                          ' 2.觀光市集北側停車場：新北市三重區重新橋北側/新莊堤外道路及疏洪十六路交叉口 '
                        ),
                        d(
                          'div',
                          null,
                          ' 3.觀光市集南側停車場：新北市三重區重新橋南側/新莊堤外道路與疏洪十六路交叉口 '
                        )
                      ])
                    ])
                  ],
                  -1
                )),
              i[5] ||
                (i[5] = d(
                  'span',
                  { class: 'absolute -bottom-[80px] start-0 h-[100px] w-full' },
                  [
                    d('img', {
                      class: 'h-full w-full object-cover',
                      src: br,
                      alt: ''
                    })
                  ],
                  -1
                ))
            ]),
            i[6] ||
              (i[6] = pi(
                '<div class="bg-yellow"><div class="container pb-20 pt-28"><div id="notice-02" class="scroll-animate-fadeIn mb-8"><div class="mb-3 text-[19px] font-bold">特別聲明</div><ul class="flex flex-col gap-3"><li> 1.本活動網頁僅為報名用途，非現場各項活動預約報名。各攤位現場活動體驗因適合年齡及容納人數皆不同，以現場排隊指示為主。 </li><li> 2.主辦單位保有活動場地、時間、形式異動與解釋之權利，若有更改將另行通知。 </li><li> 3.參加本活動即同意無償授權主辦單位使用活動期間所拍攝之照片與影片，並運用刊登於主辦單位所發行之包括但不限於平面刊物、網站、部落格、Facebook粉絲專頁及相關社群平台、電子報、EDM等相關之行銷活動規劃。 </li><li> 4.參與對象以家庭(訂單)為單位，憑報到序號領取乙張闖關卡，若資料有重複者，將以時間序取第一次報名為主。 </li><li> 5.所有贈品及獎項以實物為準，如遇產品缺貨或其他不可抗力之事由，主辦單位得保留更換等值獎品之權利，不另行告知。 </li></ul></div><div class="scroll-animate-fadeIn mb-8"><div class="mb-3 text-[19px] font-bold">早鳥獎項</div><div> 登記報名並於現場報到完成者，可獲得超值驚喜包一份，依網路報名先後順序取符合資格者，於活動網頁上公告得獎名單。 </div></div><div class="scroll-animate-fadeIn mb-8"><div class="mb-3 text-[19px] font-bold">領取方式</div><ul class="flex flex-col gap-3"><li> 1.早鳥報名得獎名單將於活動前一周公布在本網頁，敬請密切留意相關資訊。 </li><li> 2.活動當天攜帶官方發送之報到序號簡訊及身分證明文件報到完成，即可領取福袋禮(報到禮)。 </li><li> ※ 若不符合參加資格，主辦單位有權取消得獎資格，獎項不後補，不得異議。 </li></ul></div><div class="scroll-animate-fadeIn mb-8"><div class="mb-3 text-[19px] font-bold">現場舞台抽獎</div><ul class="flex flex-col gap-3"><li> 1.活動現場將提供：一個家庭(一筆訂單)一張闖關卡，合計1,500張供索取，發完為止。 </li><li> 2.須依闖關卡指示完成指定任務後，方可將抽獎聯投入摸彩箱，參加舞台抽獎。 </li><li> 3.所有舞台抽出之獎項皆須本人在場，主持人唱名三次未回覆將取消得獎資格。 </li><li> 4.若活動當天遇到不可抗力之因素，主辦單位得調整抽獎方式，以現場公告為主。 </li></ul></div><div class="scroll-animate-fadeIn mb-8"><div class="mb-3 text-[19px] font-bold">注意事項</div><ul class="flex flex-col gap-3"><li> 1.參加者於參加活動時，即視同為同意接受本活動規範，若本活動因不可抗力之因素(例如：天候狀況)無法執行時，主辦單位有權決定取消、終止、修改或暫停本活動及相關獎項得獎資格。 </li><li> 2.早鳥報名名單內若發現資料不全將取消報名資格；若有重覆報名，將以時間序取第一次報名為主。 </li><li>3.早鳥登記報名後不接受任何理由修改報名資料。</li><li> 4.抽獎中獎者務必攜帶雙證件影本(或手機清晰拍照檔案)供主辦單位核對身分，若無法驗證身分，將視同放棄領獎資格。 </li><li> 5.贈品以主辦單位提供實物為準，不得要求更換、指定款式或折換現金。 </li><li> 6.參加者同意填寫或提出之資料均為真實且正確，未冒用或盜用任何第三人之資料。如有致損害於主辦單位或其他第三人，參加者應負一切相關責任。 </li><li> 7.為求活動之公平及公正，參加者若以惡意之電腦程式或其他明顯違反活動公平性之方式，意圖混淆或影響活動結果者，一經主辦單位察覺得立即取消參賽者之參賽與得獎資格，並得追回獎品及活動執行單位將保留法律追訴權力。 </li><li> 8.本活動有任何因電腦、網路、技術或其他不可歸責於主辦單位之事由，而使參與本活動者所登錄之資料有所遺失、錯誤、無法辨識或毀損所導致資料無效之情況，活動小組不負任何法律責任，參加者與得獎者亦不得異議。 </li><li> 9.本活動相關獎項屬於機會中獎，依中華民國所得稅法及各類所得扣繳率標準規定，機會中獎金額超過新台幣20,000元者，得獎者需先行繳納10%機會中獎所得稅款(不足1元部分，則四捨五入至元)，非中華民國境內居住者，無論金額大小皆需先行繳納20%機會中獎所得稅款，詳細規定，請參閱財政部稅務入口網。無論扣繳與否，均需列入活動得獎人當年度之個人機會中獎所得，並由本公司開立扣繳憑單予活動得獎人，活動得獎人需依規定填寫並繳交相關資料方可領獎。如不願意配合者，則視為自動放棄得獎資格。 </li><li> 10.中獎者若為未滿20歲之未成年人，須檢附戶口名簿影本、法定代理人身分證正本及影本，並提出法定代理人所簽署之領獎同意書，方可辦理獎項領取。中獎者(或代為領獎之法定代理人)須自行負擔因兌獎所產生之稅金及後續衍生之所有費用(包含領牌、保險等相關程序費用)。 </li><li> 11.因獎項內容而遭受之任何損失損害(包括但不限於間接或衍生性損失)或任何索賠、債務和任何種類的損害(包含合理的律師費和費用)或人身傷害，主辦單位概不負責。 </li></ul></div><div class="scroll-animate-fadeIn mb-8"><div class="mb-3 text-[19px] font-bold">個資保護聲明</div><ul class="flex flex-col gap-3"><li> 遠見天下文化出版股份有限公司蒐集、處理及利用個人資料告知事項 </li><li> 遠見天下文化出版股份有限公司為蒐集、處理及利用您的個人資料，提供各項服務，依個人資料保護法規定，明確告知您下列事項，請您詳為閱讀 </li><li>一、公司名稱：遠見天下文化出版股份有限公司。</li><li> 二、蒐集目的：遠見‧天下文化事業群及各委外服務廠商基於客戶管理、統計及調查分析、會員管理、演講活動報名、行銷及其他合於營業登記項目或章程所定業務需要之特定目的。 </li><li> 三、資料類別：得包括姓名、身分證字號、性別、出生年月日、電話、傳真、Email、地址、學校名稱，或其他得直接或間接識別您個人的資料(詳如網頁的填載欄位)。 </li><li> 四、利用期間、地區、對象及方式：(1)期間：蒐集目的存續期間或法令規定得為保存的期間。(2)地區：中華民國境內及本公司業務或服務所及的其他地區、利用對象所在的地區。(3)對象：本公司及其關係企業、活動合作夥伴、委外廠商、往來金融機構、政府機關等。(4)方式：電子處理、郵寄、電話、簡訊、傳真及其他為達成蒐集目的之利用方式。 </li><li> 五、就您的個人資料，您得依個人資料保護法規定，向本公司行使以下權利：(1)查詢或請求閱覽。(2)請求製給複製本。(3)請求補充或更正。(4)請求停止蒐集、處理及利用。(5)請求刪除。但本公司為執行業務有保存或利用該個人資料之必要，或法令另有規定者，不在此限。本公司得請您提供身分證明及為適當的釋明，並得向您酌收閱覽個人資料或製給複製本的必要成本費用。 </li><li> 六、您得自由選擇是否提供您的個人資料。但若您未提供本公司所需的個人資料，本公司將無法向您提供部分或全部的服務。 </li></ul></div></div></div>',
                1
              ))
          ])
        )
      }
    }
  },
  sv = '' + new URL('../img/kv-show.svg', import.meta.url).href,
  ov = '' + new URL('../img/title-show.svg', import.meta.url).href,
  av = '' + new URL('../img/title-schedule.svg', import.meta.url).href,
  lv = { class: 'bg-green py-16' },
  cv = { class: 'container' },
  uv = {
    class: 'mb-5 grid gap-x-10 gap-y-8 md:grid-cols-3 md:gap-y-10 md:pt-10'
  },
  dv = { class: 'flex flex-col' },
  fv = {
    class:
      'aspect-h-4 aspect-w-6 overflow-hidden rounded-tl-2xl rounded-tl-3xl bg-gray-100 transition-opacity duration-300'
  },
  pv = ['src'],
  hv = { class: 'relative' },
  gv = { class: 'flex gap-4' },
  mv = { key: 0, class: 'shrink-0' },
  _v = ['src'],
  vv = { class: 'bg-yellow py-16' },
  bv = { class: 'container pt-20' },
  wv = { class: 'my-5 flex items-center justify-center' },
  yv = {
    __name: 'Show',
    setup(r) {
      Le(null)
      const e = './img/',
        t = [
          {
            id: '/show/05.jpg',
            title: null,
            subtitle: '泥寶寶的魔法音樂會',
            description:
              '聽說星球上的泥土寶寶生病了，需要注入營養能量才能讓他打起精神！「微笑姐姐」使出神奇魔法帶領蔬果樂手演奏能量樂曲，泥土寶寶終於冒出新芽了！由農業部帶來精采的食農教育故事劇，讓孩子在悠揚的四季旋律中學習愛與珍惜！'
          },
          {
            id: '/show/01.jpg',
            title: 'J HALL樂團',
            subtitle: 'J HALL樂團｜孩子搖滾演唱會',
            description:
              '平均年齡只有10歲的「J HALL樂團」成軍3年，是華語樂壇史上最年輕的兒童樂團，將帶來孩子也能搖滾的演唱會，為現場爸爸媽媽與小朋友帶來多首朗朗上口的歌曲，一起來搖滾慶生Party吧！'
          },
          {
            id: '/show/02.jpg',
            title: '楊元慶',
            subtitle: '楊元慶｜魔術花式溜溜球',
            description:
              '溜溜球大師透過花式技巧演譯力與美！溜溜球項目金氏世界紀錄保持人楊元慶，用一顆溜溜球走遍全世界，期許孩子在熱愛的事情上不需要當最厲害的，而是成為無法取代。'
          },
          {
            id: '/show/03.jpg',
            title: '天馬戲創作劇團',
            subtitle: '天馬戲創作劇團｜蟲蟲馬戲團',
            description:
              '故事派對就從探索藝術與關懷環境展開！由天馬戲創作劇團帶來蟲蟲馬戲團表演，森林探險家帶著大家一窺森林的秘密，找尋傳說中的神奇昆蟲並立志要保護美麗的森林，不只是特技，更融入了環保與教育意涵。'
          },
          {
            id: '/show/04.jpg',
            title: null,
            subtitle: '歡樂派對秀',
            description:
              '歡慶來寶過生日！還有神祕小夥伴來同樂，猜猜看會是誰呢？快來野餐日揭曉謎題～（小提示：是爸爸媽媽也都認識的好朋友哦）'
          },
          {
            id: '/show/05.jpg',
            title: null,
            subtitle: '來寶好朋友大遊行',
            description:
              '最萌的來寶小壽星和他的好朋友們浩浩蕩蕩來跟大小朋友拍照囉！Ｑ度和顏值都爆表的見面會，絕對不能錯過！★遊行場次★ 12:00、13:40、15:00'
          },
          {
            id: '/show/06.jpg',
            title: '泡泡哥哥',
            subtitle: '波波星球',
            description:
              '舞台前卡位預備備～超人氣偶像泡泡哥哥來囉！要跟小朋友們一起開派對、唱唱跳跳high玩一整天！'
          },
          {
            id: '/show/07.jpg',
            title: 'F.S.D 藝術滑輪行動慶生舞',
            subtitle: 'F.S.D 兒童輪舞團｜行動慶生輪舞',
            description:
              '將藝術輪滑結合生活、穿越整場的驚喜童趣慶生！慶生小隊不定點出沒在活動中，一起來找他們玩滑輪、拿氣球吧！★表演場次★ 13:00、13:30、14:00、14:30'
          }
        ],
        i = () => {
          const n = Z.utils.toArray('.card-item')
          Z.fromTo(
            n,
            { rotateY: 90, opacity: 0 },
            {
              rotateY: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              stagger: 0.3,
              scrollTrigger: {
                trigger: '.card-item',
                start: 'top 80%',
                toggleActions: 'play none none none'
              }
            }
          )
        }
      return (
        qt(() => {
          i()
        }),
        (n, s) => {
          const o = Cr,
            a = xo
          return (
            J(),
            ee('div', null, [
              G(o, null, {
                default: De(
                  () =>
                    s[0] ||
                    (s[0] = [
                      d('img', { src: sv, alt: '', width: '600' }, null, -1),
                      d(
                        'span',
                        {
                          class:
                            'absolute bottom-0 right-2 top-auto z-10 w-[70px] sm:-right-[100px] sm:top-24 sm:w-[180px]'
                        },
                        [d('img', { src: kr, alt: '', width: '150' })],
                        -1
                      )
                    ])
                ),
                _: 1
              }),
              d('div', lv, [
                d('div', cv, [
                  s[1] ||
                    (s[1] = d(
                      'div',
                      { class: 'mb-8 text-center' },
                      [
                        d('img', {
                          width: '600',
                          class: 'mx-auto',
                          src: ov,
                          alt: ''
                        })
                      ],
                      -1
                    )),
                  s[2] ||
                    (s[2] = d(
                      'div',
                      { class: 'text-center text-[1.1rem] font-black' },
                      [
                        d('div', null, '當然不能少了各種好Show炒熱氣氛！'),
                        d('div', null, '音樂、故事、唱唱跳跳'),
                        d('div', null, '最豐富的表演，都在未來親子野餐日！')
                      ],
                      -1
                    )),
                  d('div', uv, [
                    (J(),
                    ee(
                      Et,
                      null,
                      Tt(t, (l, c) =>
                        d(
                          'div',
                          {
                            key: c,
                            class:
                              'scroll-animate-rotateIn relative rounded-tl-3xl bg-white p-3 shadow-md'
                          },
                          [
                            d('div', dv, [
                              d('div', fv, [
                                d(
                                  'img',
                                  {
                                    class: 'h-full w-full object-cover',
                                    src: `${le(e)}${l.id}`,
                                    alt: '1'
                                  },
                                  null,
                                  8,
                                  pv
                                )
                              ]),
                              d('div', hv, [
                                d(
                                  'div',
                                  {
                                    class: ei(
                                      `relative -end-8 -top-3 inline-block w-full rounded-tr-xl px-4 py-1.5 font-bold tracking-wide text-white ${c % 2 === 0 ? 'bg-primary-500' : 'bg-kv-green'}`
                                    )
                                  },
                                  _t(l.subtitle),
                                  3
                                ),
                                d('div', null, [
                                  d('div', gv, [
                                    c === t.length - 2 && c === t.length - 3
                                      ? (J(),
                                        ee('div', mv, [
                                          d(
                                            'img',
                                            {
                                              width: '100',
                                              height: '100',
                                              src: `${le(e)}/special-show-0${c === t.length - 2 ? 1 : 2}.svg`,
                                              alt: '1'
                                            },
                                            null,
                                            8,
                                            _v
                                          )
                                        ]))
                                      : Af('', !0),
                                    d('div', null, _t(l.description), 1)
                                  ])
                                ])
                              ])
                            ])
                          ]
                        )
                      ),
                      64
                    ))
                  ])
                ]),
                s[3] ||
                  (s[3] = d(
                    'span',
                    {
                      class: 'absolute -bottom-[80px] start-0 h-[100px] w-full'
                    },
                    [
                      d('img', {
                        class: 'h-full w-full object-cover',
                        src: br,
                        alt: ''
                      })
                    ],
                    -1
                  ))
              ]),
              d('div', vv, [
                d('div', bv, [
                  s[4] ||
                    (s[4] = pi(
                      '<div class="relative z-10 mb-8 flex flex-col items-center gap-3 font-bold"><div class="mb-5"><img width="450" src="' +
                        av +
                        '" alt=""></div><div class="mb-">※ 將依現場實際流程為主。</div></div><div class="scroll-animate-fadeInUp text-[1.2rem]"><div class="flex divide-x divide-white rounded-t-lg bg-primary-500 py-3 text-white"><div class="grow px-3 text-center md:max-w-[200px]">時間</div><div class="grow px-3 text-center">內容</div></div><div class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">11:00</div><div class="grow px-3 font-black">活力開場</div></div><div class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">11:15</div><div class="grow px-3 font-black">Q萌來寶唱跳秀</div></div><div class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">11:25</div><div class="grow px-3 font-black">Q萌來寶唱跳秀</div></div><div class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">11:30</div><div class="grow px-3 font-black">貴賓致詞暨開幕儀式</div></div><div class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">12:00</div><div class="flex grow flex-wrap gap-2 px-3 font-black"><div class="flex items-center justify-center rounded-full bg-kv-green px-4 text-xl font-bold text-white transition"> 故事時間 </div><div class="text-kv-green">泥寶寶的魔法音樂會</div></div></div><div class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">12:15</div><div class="flex grow flex-wrap gap-2 px-3 font-black"><div class="flex items-center justify-center rounded-full bg-primary-500 px-4 text-xl font-bold text-white transition"> KIDs Concert </div><div class="text-primary-500">J HALL樂團搖滾開趴</div></div></div><div class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">12:50</div><div class="flex grow flex-wrap gap-2 px-3 font-black"><div class="flex items-center justify-center rounded-full bg-kv-green px-4 text-xl font-bold text-white transition"> 歡樂互動 </div><div class="text-kv-green">來寶唱跳秀</div></div></div><div class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">13:00</div><div class="flex grow flex-wrap gap-2 px-3 font-black"><div class="flex items-center justify-center rounded-full bg-primary-500 px-4 text-xl font-bold text-white transition"> 魔幻Party </div><div class="text-primary-500">楊元慶—花式溜溜球</div></div></div><div class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">13:25</div><div class="flex grow flex-wrap gap-2 px-3 font-black"><div class="flex items-center justify-center rounded-full bg-kv-green px-4 text-xl font-bold text-white transition"> 歡樂互動 </div><div class="text-kv-green">來寶唱跳秀</div></div></div><div class="grid border-b border-primary-500 bg-[#FFECE6] py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">13:35</div><div class="flex grow flex-wrap gap-2 px-3 font-black"><div class="flex items-center justify-center rounded-full bg-primary-500 px-4 text-xl font-bold text-white transition"> 故事Party </div><div class="text-primary-500">天馬戲創作劇團—蟲蟲馬戲團</div></div></div><div class="grid border-b border-primary-500 bg-white py-3 md:flex md:flex-nowrap"><div class="grow px-3 md:max-w-[200px] md:text-center">14:10</div><div class="grow px-3 font-black"> 2025 未來親子野餐日 歡樂抽獎​ </div></div></div>',
                      2
                    )),
                  d('div', wv, [G(a)])
                ])
              ])
            ])
          )
        }
      )
    }
  },
  xv = [
    { path: '/', component: C1 },
    { path: '/gift', component: D1 },
    { path: '/game', component: x_ },
    { path: '/show', component: yv },
    { path: '/Article', component: W_ },
    { path: '/notice', component: rv }
  ],
  ws = Pf({
    history: Mf(),
    routes: xv,
    scrollBehavior(r, e, t) {
      if (r.hash) {
        const i = document.querySelector(r.hash)
        i && i.scrollIntoView({ behavior: 'smooth' })
      } else return t || { top: 0 }
    }
  })
ws.beforeEach((r, e, t) => {
  const { setLoading: i } = fl()
  i(!0), t()
})
ws.afterEach(() => {
  const { setLoading: r } = fl()
  setTimeout(() => {
    r(!1)
  }, 1e3)
})
const Wc = {
  bounceFloat: {
    y: '10px',
    repeat: -1,
    yoyo: !0,
    ease: 'power1.inOut',
    duration: 0.8
  },
  scaleBounce: {
    scale: 1.2,
    repeat: -1,
    yoyo: !0,
    ease: 'elastic.inOut(1, 0.5)',
    duration: 1.2
  },
  fadeIn: { opacity: 1, duration: 1, ease: 'power2.inOut' },
  slideIn: { x: 0, duration: 1, ease: 'power2.out' },
  rotateIn: { rotation: 360, duration: 1.5, ease: 'none', repeat: -1 }
}
function Cv() {
  document.querySelectorAll('[class*="animate-"]').forEach((e) => {
    Array.from(e.classList).forEach((i) => {
      if (i.startsWith('animate-')) {
        const n = i.replace('animate-', '')
        if (Wc[n]) {
          switch (n) {
            case 'fadeIn':
              Z.set(e, { opacity: 0 })
              break
            case 'slideIn':
              Z.set(e, { x: '-100%' })
              break
          }
          Z.to(e, Wc[n])
        }
      }
    })
  })
}
const kv = {
  install(r) {
    r.mixin({
      mounted() {
        Cv()
      }
    })
  }
}
Z.registerPlugin(U)
const Ir = {
    fadeIn: {
      opacity: 0,
      animation: { opacity: 1, duration: 1, ease: 'power2.out' }
    },
    fadeInUp: {
      opacity: 0,
      y: 50,
      animation: { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    },
    slideInLeft: {
      opacity: 0,
      x: -100,
      animation: { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    },
    slideInRight: {
      opacity: 0,
      x: 100,
      animation: { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    },
    zoomIn: {
      opacity: 0,
      scale: 0.5,
      animation: { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
    },
    flipIn: {
      opacity: 0,
      rotationX: 90,
      animation: { opacity: 1, rotationX: 0, duration: 1, ease: 'power2.out' }
    },
    bounceIn: {
      opacity: 0,
      scale: 0.3,
      animation: {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
      }
    },
    rotateIn: {
      opacity: 0,
      rotation: 180,
      scale: 0.5,
      animation: {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out'
      }
    },
    flip3D: {
      opacity: 0,
      rotationY: 90,
      delay: 3e3,
      animation: { opacity: 1, rotationY: 0, duration: 1, ease: 'power2.out' }
    },
    shake: {
      animation: {
        x: [-10, 10, -10, 10, 0],
        duration: 0.5,
        ease: 'power1.inOut'
      }
    },
    bounceHorizontal: {
      x: 0,
      animation: {
        x: 10,
        duration: 1,
        ease: 'power1.inOut',
        yoyo: !0,
        repeat: -1
      }
    },
    bounceVertical: {
      y: 0,
      animation: {
        y: 10,
        duration: 1,
        ease: 'power1.inOut',
        yoyo: !0,
        repeat: -1
      }
    },
    bouncePulse: {
      scale: 1,
      animation: {
        scale: 1.1,
        duration: 0.5,
        ease: 'power1.inOut',
        yoyo: !0,
        repeat: -1
      }
    },
    fadeInDown: {
      opacity: 0,
      y: -50,
      animation: { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    },
    fadeInLeft: {
      opacity: 0,
      x: -50,
      animation: { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    },
    fadeInRight: {
      opacity: 0,
      x: 50,
      animation: { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    },
    zoomInLeft: {
      opacity: 0,
      scale: 0.5,
      x: -100,
      animation: { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'power2.out' }
    },
    zoomInRight: {
      opacity: 0,
      scale: 0.5,
      x: 100,
      animation: { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'power2.out' }
    },
    flipInX: {
      opacity: 0,
      rotationX: 90,
      animation: { opacity: 1, rotationX: 0, duration: 1, ease: 'power2.out' }
    },
    flipInY: {
      opacity: 0,
      rotationY: 90,
      animation: { opacity: 1, rotationY: 0, duration: 1, ease: 'power2.out' }
    },
    lightSpeedIn: {
      opacity: 0,
      x: 200,
      skewX: -30,
      animation: { opacity: 1, x: 0, skewX: 0, duration: 1, ease: 'power2.out' }
    },
    rubberBand: {
      scale: 1,
      animation: {
        keyframes: [
          { scale: 1, duration: 0 },
          { scaleX: 1.25, scaleY: 0.75, duration: 0.3 },
          { scaleX: 0.75, scaleY: 1.25, duration: 0.3 },
          { scaleX: 1.15, scaleY: 0.85, duration: 0.3 },
          { scale: 1, duration: 0.3 }
        ],
        repeat: -1,
        repeatDelay: 1
      }
    },
    swing: {
      rotation: 0,
      transformOrigin: 'top center',
      animation: {
        rotation: 15,
        duration: 1,
        ease: 'power1.inOut',
        yoyo: !0,
        repeat: -1
      }
    },
    tiltIn: {
      opacity: 0,
      rotationX: 35,
      rotationY: -35,
      z: -100,
      animation: {
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        z: 0,
        duration: 1,
        ease: 'power2.out'
      }
    },
    rotateRoom: {
      opacity: 0,
      rotationY: 180,
      perspective: 1e3,
      animation: { opacity: 1, rotationY: 0, duration: 1, ease: 'power2.inOut' }
    },
    typewriter: {
      opacity: 0,
      width: 0,
      animation: { opacity: 1, width: 'auto', duration: 1, ease: 'none' }
    },
    splitLetters: {
      opacity: 0,
      y: 50,
      stagger: { amount: 0.3, from: 'start' },
      animation: { opacity: 1, y: 0, duration: 0.5, ease: 'back.out' }
    }
  },
  Yc = {
    trigger: null,
    start: 'top 90%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    markers: !1,
    scrub: !1,
    once: !0
  }
function Ev(r) {
  const e = r.textContent
  return (
    (r.textContent = ''),
    [...e].map((t) => {
      const i = document.createElement('span')
      return (i.textContent = t), r.appendChild(i), i
    })
  )
}
function Tv() {
  document.querySelectorAll('[class*="scroll-animate-"]').forEach((e) => {
    Array.from(e.classList).forEach((i) => {
      if (i.startsWith('scroll-animate-')) {
        const n = i.replace('scroll-animate-', '')
        if (Ir[n])
          if (n === 'splitLetters') {
            const s = Ev(e)
            Z.set(s, Ir[n]),
              Z.to(s, {
                ...Ir[n].animation,
                scrollTrigger: { ...Yc, trigger: e }
              })
          } else
            Z.set(e, Ir[n]),
              Z.to(e, {
                ...Ir[n].animation,
                scrollTrigger: { ...Yc, trigger: e }
              })
      }
    })
  })
}
function Sv() {
  U.refresh()
}
const Ov = {
    install(r) {
      r.mixin({
        mounted() {
          $a(() => {
            Tv()
          })
        },
        updated() {
          Sv()
        }
      })
    }
  },
  Er = Lf(k0)
Er.use(kv)
Er.use(Ov)
const Av = Er.component('Loading', uf)
let _f
ws.beforeEach((r, e, t) => {
  ;(_f = setTimeout(() => {
    const i = document.createElement('div')
    ;(i.id = 'global-loading'), document.body.appendChild(i), Er.mount(i, Av)
  }, 0)),
    t()
})
ws.afterEach(() => {
  clearTimeout(_f),
    setTimeout(() => {
      const r = document.getElementById('global-loading')
      r && r.remove()
    }, 500)
})
Er.use(ws)
Er.mount('#app')
