;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r)
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const s = {}
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    )
  }
  function i(r) {
    if (r.ep) return
    r.ep = !0
    const s = n(r)
    fetch(r.href, s)
  }
})()
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function ku(t) {
  const e = Object.create(null)
  for (const n of t.split(',')) e[n] = 1
  return (n) => n in e
}
const Ne = {},
  ts = [],
  ci = () => {},
  Y_ = () => !1,
  cl = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  Ru = (t) => t.startsWith('onUpdate:'),
  $t = Object.assign,
  Lu = (t, e) => {
    const n = t.indexOf(e)
    n > -1 && t.splice(n, 1)
  },
  X_ = Object.prototype.hasOwnProperty,
  De = (t, e) => X_.call(t, e),
  fe = Array.isArray,
  ns = (t) => ul(t) === '[object Map]',
  Jp = (t) => ul(t) === '[object Set]',
  pe = (t) => typeof t == 'function',
  at = (t) => typeof t == 'string',
  Ri = (t) => typeof t == 'symbol',
  We = (t) => t !== null && typeof t == 'object',
  eh = (t) => (We(t) || pe(t)) && pe(t.then) && pe(t.catch),
  th = Object.prototype.toString,
  ul = (t) => th.call(t),
  K_ = (t) => ul(t).slice(8, -1),
  nh = (t) => ul(t) === '[object Object]',
  Du = (t) =>
    at(t) && t !== 'NaN' && t[0] !== '-' && '' + parseInt(t, 10) === t,
  oo = ku(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  fl = (t) => {
    const e = Object.create(null)
    return (n) => e[n] || (e[n] = t(n))
  },
  Q_ = /-(\w)/g,
  zn = fl((t) => t.replace(Q_, (e, n) => (n ? n.toUpperCase() : ''))),
  Z_ = /\B([A-Z])/g,
  Nr = fl((t) => t.replace(Z_, '-$1').toLowerCase()),
  dl = fl((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Bl = fl((t) => (t ? `on${dl(t)}` : '')),
  Ui = (t, e) => !Object.is(t, e),
  $l = (t, ...e) => {
    for (let n = 0; n < t.length; n++) t[n](...e)
  },
  ih = (t, e, n, i = !1) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      writable: i,
      value: n
    })
  },
  J_ = (t) => {
    const e = parseFloat(t)
    return isNaN(e) ? t : e
  }
let Ff
const pl = () =>
  Ff ||
  (Ff =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function hl(t) {
  if (fe(t)) {
    const e = {}
    for (let n = 0; n < t.length; n++) {
      const i = t[n],
        r = at(i) ? i0(i) : hl(i)
      if (r) for (const s in r) e[s] = r[s]
    }
    return e
  } else if (at(t) || We(t)) return t
}
const e0 = /;(?![^(]*\))/g,
  t0 = /:([^]+)/,
  n0 = /\/\*[^]*?\*\//g
function i0(t) {
  const e = {}
  return (
    t
      .replace(n0, '')
      .split(e0)
      .forEach((n) => {
        if (n) {
          const i = n.split(t0)
          i.length > 1 && (e[i[0].trim()] = i[1].trim())
        }
      }),
    e
  )
}
function gl(t) {
  let e = ''
  if (at(t)) e = t
  else if (fe(t))
    for (let n = 0; n < t.length; n++) {
      const i = gl(t[n])
      i && (e += i + ' ')
    }
  else if (We(t)) for (const n in t) t[n] && (e += n + ' ')
  return e.trim()
}
const r0 =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  s0 = ku(r0)
function rh(t) {
  return !!t || t === ''
}
const sh = (t) => !!(t && t.__v_isRef === !0),
  zi = (t) =>
    at(t)
      ? t
      : t == null
        ? ''
        : fe(t) || (We(t) && (t.toString === th || !pe(t.toString)))
          ? sh(t)
            ? zi(t.value)
            : JSON.stringify(t, oh, 2)
          : String(t),
  oh = (t, e) =>
    sh(e)
      ? oh(t, e.value)
      : ns(e)
        ? {
            [`Map(${e.size})`]: [...e.entries()].reduce(
              (n, [i, r], s) => ((n[Fl(i, s) + ' =>'] = r), n),
              {}
            )
          }
        : Jp(e)
          ? { [`Set(${e.size})`]: [...e.values()].map((n) => Fl(n)) }
          : Ri(e)
            ? Fl(e)
            : We(e) && !fe(e) && !nh(e)
              ? String(e)
              : e,
  Fl = (t, e = '') => {
    var n
    return Ri(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  }
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let fn
class o0 {
  constructor(e = !1) {
    ;(this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = fn),
      !e && fn && (this.index = (fn.scopes || (fn.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let e, n
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause()
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let e, n
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume()
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume()
    }
  }
  run(e) {
    if (this._active) {
      const n = fn
      try {
        return (fn = this), e()
      } finally {
        fn = n
      }
    }
  }
  on() {
    fn = this
  }
  off() {
    fn = this.parent
  }
  stop(e) {
    if (this._active) {
      this._active = !1
      let n, i
      for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function a0() {
  return fn
}
let $e
const jl = new WeakSet()
class ah {
  constructor(e) {
    ;(this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      fn && fn.active && fn.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), jl.has(this) && (jl.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ch(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), jf(this), uh(this)
    const e = $e,
      n = Un
    ;($e = this), (Un = !0)
    try {
      return this.fn()
    } finally {
      fh(this), ($e = e), (Un = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) Nu(e)
      ;(this.deps = this.depsTail = void 0),
        jf(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? jl.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    Dc(this) && this.run()
  }
  get dirty() {
    return Dc(this)
  }
}
let lh = 0,
  ao,
  lo
function ch(t, e = !1) {
  if (((t.flags |= 8), e)) {
    ;(t.next = lo), (lo = t)
    return
  }
  ;(t.next = ao), (ao = t)
}
function Iu() {
  lh++
}
function zu() {
  if (--lh > 0) return
  if (lo) {
    let e = lo
    for (lo = void 0; e; ) {
      const n = e.next
      ;(e.next = void 0), (e.flags &= -9), (e = n)
    }
  }
  let t
  for (; ao; ) {
    let e = ao
    for (ao = void 0; e; ) {
      const n = e.next
      if (((e.next = void 0), (e.flags &= -9), e.flags & 1))
        try {
          e.trigger()
        } catch (i) {
          t || (t = i)
        }
      e = n
    }
  }
  if (t) throw t
}
function uh(t) {
  for (let e = t.deps; e; e = e.nextDep)
    (e.version = -1),
      (e.prevActiveLink = e.dep.activeLink),
      (e.dep.activeLink = e)
}
function fh(t) {
  let e,
    n = t.depsTail,
    i = n
  for (; i; ) {
    const r = i.prevDep
    i.version === -1 ? (i === n && (n = r), Nu(i), l0(i)) : (e = i),
      (i.dep.activeLink = i.prevActiveLink),
      (i.prevActiveLink = void 0),
      (i = r)
  }
  ;(t.deps = e), (t.depsTail = n)
}
function Dc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (
      e.dep.version !== e.version ||
      (e.dep.computed && (dh(e.dep.computed) || e.dep.version !== e.version))
    )
      return !0
  return !!t._dirty
}
function dh(t) {
  if (
    (t.flags & 4 && !(t.flags & 16)) ||
    ((t.flags &= -17), t.globalVersion === Mo)
  )
    return
  t.globalVersion = Mo
  const e = t.dep
  if (((t.flags |= 2), e.version > 0 && !t.isSSR && t.deps && !Dc(t))) {
    t.flags &= -3
    return
  }
  const n = $e,
    i = Un
  ;($e = t), (Un = !0)
  try {
    uh(t)
    const r = t.fn(t._value)
    ;(e.version === 0 || Ui(r, t._value)) && ((t._value = r), e.version++)
  } catch (r) {
    throw (e.version++, r)
  } finally {
    ;($e = n), (Un = i), fh(t), (t.flags &= -3)
  }
}
function Nu(t, e = !1) {
  const { dep: n, prevSub: i, nextSub: r } = t
  if (
    (i && ((i.nextSub = r), (t.prevSub = void 0)),
    r && ((r.prevSub = i), (t.nextSub = void 0)),
    n.subs === t && ((n.subs = i), !i && n.computed))
  ) {
    n.computed.flags &= -5
    for (let s = n.computed.deps; s; s = s.nextDep) Nu(s, !0)
  }
  !e && !--n.sc && n.map && n.map.delete(n.key)
}
function l0(t) {
  const { prevDep: e, nextDep: n } = t
  e && ((e.nextDep = n), (t.prevDep = void 0)),
    n && ((n.prevDep = e), (t.nextDep = void 0))
}
let Un = !0
const ph = []
function Ji() {
  ph.push(Un), (Un = !1)
}
function er() {
  const t = ph.pop()
  Un = t === void 0 ? !0 : t
}
function jf(t) {
  const { cleanup: e } = t
  if (((t.cleanup = void 0), e)) {
    const n = $e
    $e = void 0
    try {
      e()
    } finally {
      $e = n
    }
  }
}
let Mo = 0
class c0 {
  constructor(e, n) {
    ;(this.sub = e),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0)
  }
}
class Bu {
  constructor(e) {
    ;(this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(e) {
    if (!$e || !Un || $e === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== $e)
      (n = this.activeLink = new c0($e, this)),
        $e.deps
          ? ((n.prevDep = $e.depsTail),
            ($e.depsTail.nextDep = n),
            ($e.depsTail = n))
          : ($e.deps = $e.depsTail = n),
        hh(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const i = n.nextDep
      ;(i.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = i),
        (n.prevDep = $e.depsTail),
        (n.nextDep = void 0),
        ($e.depsTail.nextDep = n),
        ($e.depsTail = n),
        $e.deps === n && ($e.deps = i)
    }
    return n
  }
  trigger(e) {
    this.version++, Mo++, this.notify(e)
  }
  notify(e) {
    Iu()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      zu()
    }
  }
}
function hh(t) {
  if ((t.dep.sc++, t.sub.flags & 4)) {
    const e = t.dep.computed
    if (e && !t.dep.subs) {
      e.flags |= 20
      for (let i = e.deps; i; i = i.nextDep) hh(i)
    }
    const n = t.dep.subs
    n !== t && ((t.prevSub = n), n && (n.nextSub = t)), (t.dep.subs = t)
  }
}
const Ic = new WeakMap(),
  vr = Symbol(''),
  zc = Symbol(''),
  ko = Symbol('')
function Rt(t, e, n) {
  if (Un && $e) {
    let i = Ic.get(t)
    i || Ic.set(t, (i = new Map()))
    let r = i.get(n)
    r || (i.set(n, (r = new Bu())), (r.map = i), (r.key = n)), r.track()
  }
}
function Si(t, e, n, i, r, s) {
  const o = Ic.get(t)
  if (!o) {
    Mo++
    return
  }
  const a = (l) => {
    l && l.trigger()
  }
  if ((Iu(), e === 'clear')) o.forEach(a)
  else {
    const l = fe(t),
      c = l && Du(n)
    if (l && n === 'length') {
      const u = Number(i)
      o.forEach((f, p) => {
        ;(p === 'length' || p === ko || (!Ri(p) && p >= u)) && a(f)
      })
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && a(o.get(n)), c && a(o.get(ko)), e)
      ) {
        case 'add':
          l ? c && a(o.get('length')) : (a(o.get(vr)), ns(t) && a(o.get(zc)))
          break
        case 'delete':
          l || (a(o.get(vr)), ns(t) && a(o.get(zc)))
          break
        case 'set':
          ns(t) && a(o.get(vr))
          break
      }
  }
  zu()
}
function Fr(t) {
  const e = Le(t)
  return e === t ? e : (Rt(e, 'iterate', ko), Ln(t) ? e : e.map(Lt))
}
function ml(t) {
  return Rt((t = Le(t)), 'iterate', ko), t
}
const u0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Vl(this, Symbol.iterator, Lt)
  },
  concat(...t) {
    return Fr(this).concat(...t.map((e) => (fe(e) ? Fr(e) : e)))
  },
  entries() {
    return Vl(this, 'entries', (t) => ((t[1] = Lt(t[1])), t))
  },
  every(t, e) {
    return _i(this, 'every', t, e, void 0, arguments)
  },
  filter(t, e) {
    return _i(this, 'filter', t, e, (n) => n.map(Lt), arguments)
  },
  find(t, e) {
    return _i(this, 'find', t, e, Lt, arguments)
  },
  findIndex(t, e) {
    return _i(this, 'findIndex', t, e, void 0, arguments)
  },
  findLast(t, e) {
    return _i(this, 'findLast', t, e, Lt, arguments)
  },
  findLastIndex(t, e) {
    return _i(this, 'findLastIndex', t, e, void 0, arguments)
  },
  forEach(t, e) {
    return _i(this, 'forEach', t, e, void 0, arguments)
  },
  includes(...t) {
    return Hl(this, 'includes', t)
  },
  indexOf(...t) {
    return Hl(this, 'indexOf', t)
  },
  join(t) {
    return Fr(this).join(t)
  },
  lastIndexOf(...t) {
    return Hl(this, 'lastIndexOf', t)
  },
  map(t, e) {
    return _i(this, 'map', t, e, void 0, arguments)
  },
  pop() {
    return js(this, 'pop')
  },
  push(...t) {
    return js(this, 'push', t)
  },
  reduce(t, ...e) {
    return Vf(this, 'reduce', t, e)
  },
  reduceRight(t, ...e) {
    return Vf(this, 'reduceRight', t, e)
  },
  shift() {
    return js(this, 'shift')
  },
  some(t, e) {
    return _i(this, 'some', t, e, void 0, arguments)
  },
  splice(...t) {
    return js(this, 'splice', t)
  },
  toReversed() {
    return Fr(this).toReversed()
  },
  toSorted(t) {
    return Fr(this).toSorted(t)
  },
  toSpliced(...t) {
    return Fr(this).toSpliced(...t)
  },
  unshift(...t) {
    return js(this, 'unshift', t)
  },
  values() {
    return Vl(this, 'values', Lt)
  }
}
function Vl(t, e, n) {
  const i = ml(t),
    r = i[e]()
  return (
    i !== t &&
      !Ln(t) &&
      ((r._next = r.next),
      (r.next = () => {
        const s = r._next()
        return s.value && (s.value = n(s.value)), s
      })),
    r
  )
}
const f0 = Array.prototype
function _i(t, e, n, i, r, s) {
  const o = ml(t),
    a = o !== t && !Ln(t),
    l = o[e]
  if (l !== f0[e]) {
    const f = l.apply(t, s)
    return a ? Lt(f) : f
  }
  let c = n
  o !== t &&
    (a
      ? (c = function (f, p) {
          return n.call(this, Lt(f), p, t)
        })
      : n.length > 2 &&
        (c = function (f, p) {
          return n.call(this, f, p, t)
        }))
  const u = l.call(o, c, i)
  return a && r ? r(u) : u
}
function Vf(t, e, n, i) {
  const r = ml(t)
  let s = n
  return (
    r !== t &&
      (Ln(t)
        ? n.length > 3 &&
          (s = function (o, a, l) {
            return n.call(this, o, a, l, t)
          })
        : (s = function (o, a, l) {
            return n.call(this, o, Lt(a), l, t)
          })),
    r[e](s, ...i)
  )
}
function Hl(t, e, n) {
  const i = Le(t)
  Rt(i, 'iterate', ko)
  const r = i[e](...n)
  return (r === -1 || r === !1) && ju(n[0])
    ? ((n[0] = Le(n[0])), i[e](...n))
    : r
}
function js(t, e, n = []) {
  Ji(), Iu()
  const i = Le(t)[e].apply(t, n)
  return zu(), er(), i
}
const d0 = ku('__proto__,__v_isRef,__isVue'),
  gh = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== 'arguments' && t !== 'caller')
      .map((t) => Symbol[t])
      .filter(Ri)
  )
function p0(t) {
  Ri(t) || (t = String(t))
  const e = Le(this)
  return Rt(e, 'has', t), e.hasOwnProperty(t)
}
class mh {
  constructor(e = !1, n = !1) {
    ;(this._isReadonly = e), (this._isShallow = n)
  }
  get(e, n, i) {
    if (n === '__v_skip') return e.__v_skip
    const r = this._isReadonly,
      s = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return s
    if (n === '__v_raw')
      return i === (r ? (s ? S0 : yh) : s ? bh : vh).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(i)
        ? e
        : void 0
    const o = fe(e)
    if (!r) {
      let l
      if (o && (l = u0[n])) return l
      if (n === 'hasOwnProperty') return p0
    }
    const a = Reflect.get(e, n, zt(e) ? e : i)
    return (Ri(n) ? gh.has(n) : d0(n)) || (r || Rt(e, 'get', n), s)
      ? a
      : zt(a)
        ? o && Du(n)
          ? a
          : a.value
        : We(a)
          ? r
            ? xh(a)
            : _l(a)
          : a
  }
}
class _h extends mh {
  constructor(e = !1) {
    super(!1, e)
  }
  set(e, n, i, r) {
    let s = e[n]
    if (!this._isShallow) {
      const l = Pr(s)
      if (
        (!Ln(i) && !Pr(i) && ((s = Le(s)), (i = Le(i))),
        !fe(e) && zt(s) && !zt(i))
      )
        return l ? !1 : ((s.value = i), !0)
    }
    const o = fe(e) && Du(n) ? Number(n) < e.length : De(e, n),
      a = Reflect.set(e, n, i, zt(e) ? e : r)
    return (
      e === Le(r) && (o ? Ui(i, s) && Si(e, 'set', n, i) : Si(e, 'add', n, i)),
      a
    )
  }
  deleteProperty(e, n) {
    const i = De(e, n)
    e[n]
    const r = Reflect.deleteProperty(e, n)
    return r && i && Si(e, 'delete', n, void 0), r
  }
  has(e, n) {
    const i = Reflect.has(e, n)
    return (!Ri(n) || !gh.has(n)) && Rt(e, 'has', n), i
  }
  ownKeys(e) {
    return Rt(e, 'iterate', fe(e) ? 'length' : vr), Reflect.ownKeys(e)
  }
}
class h0 extends mh {
  constructor(e = !1) {
    super(!0, e)
  }
  set(e, n) {
    return !0
  }
  deleteProperty(e, n) {
    return !0
  }
}
const g0 = new _h(),
  m0 = new h0(),
  _0 = new _h(!0)
const Nc = (t) => t,
  ra = (t) => Reflect.getPrototypeOf(t)
function v0(t, e, n) {
  return function (...i) {
    const r = this.__v_raw,
      s = Le(r),
      o = ns(s),
      a = t === 'entries' || (t === Symbol.iterator && o),
      l = t === 'keys' && o,
      c = r[t](...i),
      u = n ? Nc : e ? Bc : Lt
    return (
      !e && Rt(s, 'iterate', l ? zc : vr),
      {
        next() {
          const { value: f, done: p } = c.next()
          return p
            ? { value: f, done: p }
            : { value: a ? [u(f[0]), u(f[1])] : u(f), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function sa(t) {
  return function (...e) {
    return t === 'delete' ? !1 : t === 'clear' ? void 0 : this
  }
}
function b0(t, e) {
  const n = {
    get(r) {
      const s = this.__v_raw,
        o = Le(s),
        a = Le(r)
      t || (Ui(r, a) && Rt(o, 'get', r), Rt(o, 'get', a))
      const { has: l } = ra(o),
        c = e ? Nc : t ? Bc : Lt
      if (l.call(o, r)) return c(s.get(r))
      if (l.call(o, a)) return c(s.get(a))
      s !== o && s.get(r)
    },
    get size() {
      const r = this.__v_raw
      return !t && Rt(Le(r), 'iterate', vr), Reflect.get(r, 'size', r)
    },
    has(r) {
      const s = this.__v_raw,
        o = Le(s),
        a = Le(r)
      return (
        t || (Ui(r, a) && Rt(o, 'has', r), Rt(o, 'has', a)),
        r === a ? s.has(r) : s.has(r) || s.has(a)
      )
    },
    forEach(r, s) {
      const o = this,
        a = o.__v_raw,
        l = Le(a),
        c = e ? Nc : t ? Bc : Lt
      return (
        !t && Rt(l, 'iterate', vr),
        a.forEach((u, f) => r.call(s, c(u), c(f), o))
      )
    }
  }
  return (
    $t(
      n,
      t
        ? {
            add: sa('add'),
            set: sa('set'),
            delete: sa('delete'),
            clear: sa('clear')
          }
        : {
            add(r) {
              !e && !Ln(r) && !Pr(r) && (r = Le(r))
              const s = Le(this)
              return (
                ra(s).has.call(s, r) || (s.add(r), Si(s, 'add', r, r)), this
              )
            },
            set(r, s) {
              !e && !Ln(s) && !Pr(s) && (s = Le(s))
              const o = Le(this),
                { has: a, get: l } = ra(o)
              let c = a.call(o, r)
              c || ((r = Le(r)), (c = a.call(o, r)))
              const u = l.call(o, r)
              return (
                o.set(r, s),
                c ? Ui(s, u) && Si(o, 'set', r, s) : Si(o, 'add', r, s),
                this
              )
            },
            delete(r) {
              const s = Le(this),
                { has: o, get: a } = ra(s)
              let l = o.call(s, r)
              l || ((r = Le(r)), (l = o.call(s, r))), a && a.call(s, r)
              const c = s.delete(r)
              return l && Si(s, 'delete', r, void 0), c
            },
            clear() {
              const r = Le(this),
                s = r.size !== 0,
                o = r.clear()
              return s && Si(r, 'clear', void 0, void 0), o
            }
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = v0(r, t, e)
    }),
    n
  )
}
function $u(t, e) {
  const n = b0(t, e)
  return (i, r, s) =>
    r === '__v_isReactive'
      ? !t
      : r === '__v_isReadonly'
        ? t
        : r === '__v_raw'
          ? i
          : Reflect.get(De(n, r) && r in i ? n : i, r, s)
}
const y0 = { get: $u(!1, !1) },
  w0 = { get: $u(!1, !0) },
  x0 = { get: $u(!0, !1) }
const vh = new WeakMap(),
  bh = new WeakMap(),
  yh = new WeakMap(),
  S0 = new WeakMap()
function T0(t) {
  switch (t) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function E0(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : T0(K_(t))
}
function _l(t) {
  return Pr(t) ? t : Fu(t, !1, g0, y0, vh)
}
function wh(t) {
  return Fu(t, !1, _0, w0, bh)
}
function xh(t) {
  return Fu(t, !0, m0, x0, yh)
}
function Fu(t, e, n, i, r) {
  if (!We(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t
  const s = r.get(t)
  if (s) return s
  const o = E0(t)
  if (o === 0) return t
  const a = new Proxy(t, o === 2 ? i : n)
  return r.set(t, a), a
}
function is(t) {
  return Pr(t) ? is(t.__v_raw) : !!(t && t.__v_isReactive)
}
function Pr(t) {
  return !!(t && t.__v_isReadonly)
}
function Ln(t) {
  return !!(t && t.__v_isShallow)
}
function ju(t) {
  return t ? !!t.__v_raw : !1
}
function Le(t) {
  const e = t && t.__v_raw
  return e ? Le(e) : t
}
function C0(t) {
  return (
    !De(t, '__v_skip') && Object.isExtensible(t) && ih(t, '__v_skip', !0), t
  )
}
const Lt = (t) => (We(t) ? _l(t) : t),
  Bc = (t) => (We(t) ? xh(t) : t)
function zt(t) {
  return t ? t.__v_isRef === !0 : !1
}
function gt(t) {
  return Sh(t, !1)
}
function P0(t) {
  return Sh(t, !0)
}
function Sh(t, e) {
  return zt(t) ? t : new O0(t, e)
}
class O0 {
  constructor(e, n) {
    ;(this.dep = new Bu()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? e : Le(e)),
      (this._value = n ? e : Lt(e)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(e) {
    const n = this._rawValue,
      i = this.__v_isShallow || Ln(e) || Pr(e)
    ;(e = i ? e : Le(e)),
      Ui(e, n) &&
        ((this._rawValue = e),
        (this._value = i ? e : Lt(e)),
        this.dep.trigger())
  }
}
function _t(t) {
  return zt(t) ? t.value : t
}
const A0 = {
  get: (t, e, n) => (e === '__v_raw' ? t : _t(Reflect.get(t, e, n))),
  set: (t, e, n, i) => {
    const r = t[e]
    return zt(r) && !zt(n) ? ((r.value = n), !0) : Reflect.set(t, e, n, i)
  }
}
function Th(t) {
  return is(t) ? t : new Proxy(t, A0)
}
class M0 {
  constructor(e, n, i) {
    ;(this.fn = e),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Bu(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Mo - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = i)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && $e !== this))
      return ch(this, !0), !0
  }
  get value() {
    const e = this.dep.track()
    return dh(this), e && (e.version = this.dep.version), this._value
  }
  set value(e) {
    this.setter && this.setter(e)
  }
}
function k0(t, e, n = !1) {
  let i, r
  return pe(t) ? (i = t) : ((i = t.get), (r = t.set)), new M0(i, r, n)
}
const oa = {},
  Ba = new WeakMap()
let fr
function R0(t, e = !1, n = fr) {
  if (n) {
    let i = Ba.get(n)
    i || Ba.set(n, (i = [])), i.push(t)
  }
}
function L0(t, e, n = Ne) {
  const {
      immediate: i,
      deep: r,
      once: s,
      scheduler: o,
      augmentJob: a,
      call: l
    } = n,
    c = (v) => (r ? v : Ln(v) || r === !1 || r === 0 ? Ti(v, 1) : Ti(v))
  let u,
    f,
    p,
    d,
    g = !1,
    h = !1
  if (
    (zt(t)
      ? ((f = () => t.value), (g = Ln(t)))
      : is(t)
        ? ((f = () => c(t)), (g = !0))
        : fe(t)
          ? ((h = !0),
            (g = t.some((v) => is(v) || Ln(v))),
            (f = () =>
              t.map((v) => {
                if (zt(v)) return v.value
                if (is(v)) return c(v)
                if (pe(v)) return l ? l(v, 2) : v()
              })))
          : pe(t)
            ? e
              ? (f = l ? () => l(t, 2) : t)
              : (f = () => {
                  if (p) {
                    Ji()
                    try {
                      p()
                    } finally {
                      er()
                    }
                  }
                  const v = fr
                  fr = u
                  try {
                    return l ? l(t, 3, [d]) : t(d)
                  } finally {
                    fr = v
                  }
                })
            : (f = ci),
    e && r)
  ) {
    const v = f,
      b = r === !0 ? 1 / 0 : r
    f = () => Ti(v(), b)
  }
  const y = a0(),
    w = () => {
      u.stop(), y && y.active && Lu(y.effects, u)
    }
  if (s && e) {
    const v = e
    e = (...b) => {
      v(...b), w()
    }
  }
  let _ = h ? new Array(t.length).fill(oa) : oa
  const m = (v) => {
    if (!(!(u.flags & 1) || (!u.dirty && !v)))
      if (e) {
        const b = u.run()
        if (r || g || (h ? b.some((C, P) => Ui(C, _[P])) : Ui(b, _))) {
          p && p()
          const C = fr
          fr = u
          try {
            const P = [b, _ === oa ? void 0 : h && _[0] === oa ? [] : _, d]
            l ? l(e, 3, P) : e(...P), (_ = b)
          } finally {
            fr = C
          }
        }
      } else u.run()
  }
  return (
    a && a(m),
    (u = new ah(f)),
    (u.scheduler = o ? () => o(m, !1) : m),
    (d = (v) => R0(v, !1, u)),
    (p = u.onStop =
      () => {
        const v = Ba.get(u)
        if (v) {
          if (l) l(v, 4)
          else for (const b of v) b()
          Ba.delete(u)
        }
      }),
    e ? (i ? m(!0) : (_ = u.run())) : o ? o(m.bind(null, !0), !0) : u.run(),
    (w.pause = u.pause.bind(u)),
    (w.resume = u.resume.bind(u)),
    (w.stop = w),
    w
  )
}
function Ti(t, e = 1 / 0, n) {
  if (e <= 0 || !We(t) || t.__v_skip || ((n = n || new Set()), n.has(t)))
    return t
  if ((n.add(t), e--, zt(t))) Ti(t.value, e, n)
  else if (fe(t)) for (let i = 0; i < t.length; i++) Ti(t[i], e, n)
  else if (Jp(t) || ns(t))
    t.forEach((i) => {
      Ti(i, e, n)
    })
  else if (nh(t)) {
    for (const i in t) Ti(t[i], e, n)
    for (const i of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, i) && Ti(t[i], e, n)
  }
  return t
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Xo(t, e, n, i) {
  try {
    return i ? t(...i) : t()
  } catch (r) {
    vl(r, e, n)
  }
}
function pi(t, e, n, i) {
  if (pe(t)) {
    const r = Xo(t, e, n, i)
    return (
      r &&
        eh(r) &&
        r.catch((s) => {
          vl(s, e, n)
        }),
      r
    )
  }
  if (fe(t)) {
    const r = []
    for (let s = 0; s < t.length; s++) r.push(pi(t[s], e, n, i))
    return r
  }
}
function vl(t, e, n, i = !0) {
  const r = e ? e.vnode : null,
    { errorHandler: s, throwUnhandledErrorInProduction: o } =
      (e && e.appContext.config) || Ne
  if (e) {
    let a = e.parent
    const l = e.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; a; ) {
      const u = a.ec
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](t, l, c) === !1) return
      }
      a = a.parent
    }
    if (s) {
      Ji(), Xo(s, null, 10, [t, l, c]), er()
      return
    }
  }
  D0(t, n, r, i, o)
}
function D0(t, e, n, i = !0, r = !1) {
  if (r) throw t
  console.error(t)
}
const Ut = []
let ti = -1
const rs = []
let Ni = null,
  Wr = 0
const Eh = Promise.resolve()
let $a = null
function Vu(t) {
  const e = $a || Eh
  return t ? e.then(this ? t.bind(this) : t) : e
}
function I0(t) {
  let e = ti + 1,
    n = Ut.length
  for (; e < n; ) {
    const i = (e + n) >>> 1,
      r = Ut[i],
      s = Ro(r)
    s < t || (s === t && r.flags & 2) ? (e = i + 1) : (n = i)
  }
  return e
}
function Hu(t) {
  if (!(t.flags & 1)) {
    const e = Ro(t),
      n = Ut[Ut.length - 1]
    !n || (!(t.flags & 2) && e >= Ro(n)) ? Ut.push(t) : Ut.splice(I0(e), 0, t),
      (t.flags |= 1),
      Ch()
  }
}
function Ch() {
  $a || ($a = Eh.then(Oh))
}
function z0(t) {
  fe(t)
    ? rs.push(...t)
    : Ni && t.id === -1
      ? Ni.splice(Wr + 1, 0, t)
      : t.flags & 1 || (rs.push(t), (t.flags |= 1)),
    Ch()
}
function Hf(t, e, n = ti + 1) {
  for (; n < Ut.length; n++) {
    const i = Ut[n]
    if (i && i.flags & 2) {
      if (t && i.id !== t.uid) continue
      Ut.splice(n, 1),
        n--,
        i.flags & 4 && (i.flags &= -2),
        i(),
        i.flags & 4 || (i.flags &= -2)
    }
  }
}
function Ph(t) {
  if (rs.length) {
    const e = [...new Set(rs)].sort((n, i) => Ro(n) - Ro(i))
    if (((rs.length = 0), Ni)) {
      Ni.push(...e)
      return
    }
    for (Ni = e, Wr = 0; Wr < Ni.length; Wr++) {
      const n = Ni[Wr]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(Ni = null), (Wr = 0)
  }
}
const Ro = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id)
function Oh(t) {
  try {
    for (ti = 0; ti < Ut.length; ti++) {
      const e = Ut[ti]
      e &&
        !(e.flags & 8) &&
        (e.flags & 4 && (e.flags &= -2),
        Xo(e, e.i, e.i ? 15 : 14),
        e.flags & 4 || (e.flags &= -2))
    }
  } finally {
    for (; ti < Ut.length; ti++) {
      const e = Ut[ti]
      e && (e.flags &= -2)
    }
    ;(ti = -1),
      (Ut.length = 0),
      Ph(),
      ($a = null),
      (Ut.length || rs.length) && Oh()
  }
}
let Tt = null,
  Ah = null
function Fa(t) {
  const e = Tt
  return (Tt = t), (Ah = (t && t.type.__scopeId) || null), e
}
function tn(t, e = Tt, n) {
  if (!e || t._n) return t
  const i = (...r) => {
    i._d && Jf(-1)
    const s = Fa(e)
    let o
    try {
      o = t(...r)
    } finally {
      Fa(s), i._d && Jf(1)
    }
    return o
  }
  return (i._n = !0), (i._c = !0), (i._d = !0), i
}
function N0(t, e) {
  if (Tt === null) return t
  const n = Sl(Tt),
    i = t.dirs || (t.dirs = [])
  for (let r = 0; r < e.length; r++) {
    let [s, o, a, l = Ne] = e[r]
    s &&
      (pe(s) && (s = { mounted: s, updated: s }),
      s.deep && Ti(o),
      i.push({
        dir: s,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: a,
        modifiers: l
      }))
  }
  return t
}
function ar(t, e, n, i) {
  const r = t.dirs,
    s = e && e.dirs
  for (let o = 0; o < r.length; o++) {
    const a = r[o]
    s && (a.oldValue = s[o].value)
    let l = a.dir[i]
    l && (Ji(), pi(l, n, 8, [t.el, a, t, e]), er())
  }
}
const B0 = Symbol('_vte'),
  $0 = (t) => t.__isTeleport
function Gu(t, e) {
  t.shapeFlag & 6 && t.component
    ? ((t.transition = e), Gu(t.component.subTree, e))
    : t.shapeFlag & 128
      ? ((t.ssContent.transition = e.clone(t.ssContent)),
        (t.ssFallback.transition = e.clone(t.ssFallback)))
      : (t.transition = e)
}
/*! #__NO_SIDE_EFFECTS__ */ function Mh(t, e) {
  return pe(t) ? $t({ name: t.name }, e, { setup: t }) : t
}
function kh(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + '-', 0, 0]
}
function ja(t, e, n, i, r = !1) {
  if (fe(t)) {
    t.forEach((g, h) => ja(g, e && (fe(e) ? e[h] : e), n, i, r))
    return
  }
  if (ss(i) && !r) {
    i.shapeFlag & 512 &&
      i.type.__asyncResolved &&
      i.component.subTree.component &&
      ja(t, e, n, i.component.subTree)
    return
  }
  const s = i.shapeFlag & 4 ? Sl(i.component) : i.el,
    o = r ? null : s,
    { i: a, r: l } = t,
    c = e && e.r,
    u = a.refs === Ne ? (a.refs = {}) : a.refs,
    f = a.setupState,
    p = Le(f),
    d = f === Ne ? () => !1 : (g) => De(p, g)
  if (
    (c != null &&
      c !== l &&
      (at(c)
        ? ((u[c] = null), d(c) && (f[c] = null))
        : zt(c) && (c.value = null)),
    pe(l))
  )
    Xo(l, a, 12, [o, u])
  else {
    const g = at(l),
      h = zt(l)
    if (g || h) {
      const y = () => {
        if (t.f) {
          const w = g ? (d(l) ? f[l] : u[l]) : l.value
          r
            ? fe(w) && Lu(w, s)
            : fe(w)
              ? w.includes(s) || w.push(s)
              : g
                ? ((u[l] = [s]), d(l) && (f[l] = u[l]))
                : ((l.value = [s]), t.k && (u[t.k] = l.value))
        } else
          g
            ? ((u[l] = o), d(l) && (f[l] = o))
            : h && ((l.value = o), t.k && (u[t.k] = o))
      }
      o ? ((y.id = -1), un(y, n)) : y()
    }
  }
}
pl().requestIdleCallback
pl().cancelIdleCallback
const ss = (t) => !!t.type.__asyncLoader,
  Rh = (t) => t.type.__isKeepAlive
function F0(t, e) {
  Lh(t, 'a', e)
}
function j0(t, e) {
  Lh(t, 'da', e)
}
function Lh(t, e, n = Dt) {
  const i =
    t.__wdc ||
    (t.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return t()
    })
  if ((bl(e, i, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) Rh(r.parent.vnode) && V0(i, e, n, r), (r = r.parent)
  }
}
function V0(t, e, n, i) {
  const r = bl(e, t, i, !0)
  Ih(() => {
    Lu(i[e], r)
  }, n)
}
function bl(t, e, n = Dt, i = !1) {
  if (n) {
    const r = n[t] || (n[t] = []),
      s =
        e.__weh ||
        (e.__weh = (...o) => {
          Ji()
          const a = Ko(n),
            l = pi(e, n, t, o)
          return a(), er(), l
        })
    return i ? r.unshift(s) : r.push(s), s
  }
}
const Li =
    (t) =>
    (e, n = Dt) => {
      ;(!Io || t === 'sp') && bl(t, (...i) => e(...i), n)
    },
  H0 = Li('bm'),
  Or = Li('m'),
  Dh = Li('bu'),
  Wu = Li('u'),
  Uu = Li('bum'),
  Ih = Li('um'),
  G0 = Li('sp'),
  W0 = Li('rtg'),
  U0 = Li('rtc')
function q0(t, e = Dt) {
  bl('ec', t, e)
}
const Y0 = 'components'
function yl(t, e) {
  return K0(Y0, t, !0, e) || t
}
const X0 = Symbol.for('v-ndc')
function K0(t, e, n = !0, i = !1) {
  const r = Tt || Dt
  if (r) {
    const s = r.type
    {
      const a = Nv(s, !1)
      if (a && (a === e || a === zn(e) || a === dl(zn(e)))) return s
    }
    const o = Gf(r[t] || s[t], e) || Gf(r.appContext[t], e)
    return !o && i ? s : o
  }
}
function Gf(t, e) {
  return t && (t[e] || t[zn(e)] || t[dl(zn(e))])
}
function $c(t, e, n, i) {
  let r
  const s = n,
    o = fe(t)
  if (o || at(t)) {
    const a = o && is(t)
    let l = !1
    a && ((l = !Ln(t)), (t = ml(t))), (r = new Array(t.length))
    for (let c = 0, u = t.length; c < u; c++)
      r[c] = e(l ? Lt(t[c]) : t[c], c, void 0, s)
  } else if (typeof t == 'number') {
    r = new Array(t)
    for (let a = 0; a < t; a++) r[a] = e(a + 1, a, void 0, s)
  } else if (We(t))
    if (t[Symbol.iterator]) r = Array.from(t, (a, l) => e(a, l, void 0, s))
    else {
      const a = Object.keys(t)
      r = new Array(a.length)
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l]
        r[l] = e(t[u], u, l, s)
      }
    }
  else r = []
  return r
}
function Q0(t, e, n = {}, i, r) {
  if (Tt.ce || (Tt.parent && ss(Tt.parent) && Tt.parent.ce))
    return bt(), Ha(qt, null, [Pe('slot', n, i)], 64)
  let s = t[e]
  s && s._c && (s._d = !1), bt()
  const o = s && zh(s(n)),
    a = n.key || (o && o.key),
    l = Ha(
      qt,
      { key: (a && !Ri(a) ? a : `_${e}`) + '' },
      o || [],
      o && t._ === 1 ? 64 : -2
    )
  return (
    l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    s && s._c && (s._d = !0),
    l
  )
}
function zh(t) {
  return t.some((e) =>
    Do(e) ? !(e.type === ms || (e.type === qt && !zh(e.children))) : !0
  )
    ? t
    : null
}
const Fc = (t) => (t ? (ig(t) ? Sl(t) : Fc(t.parent)) : null),
  co = $t(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Fc(t.parent),
    $root: (t) => Fc(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Bh(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        Hu(t.update)
      }),
    $nextTick: (t) => t.n || (t.n = Vu.bind(t.proxy)),
    $watch: (t) => vv.bind(t)
  }),
  Gl = (t, e) => t !== Ne && !t.__isScriptSetup && De(t, e),
  Z0 = {
    get({ _: t }, e) {
      if (e === '__v_skip') return !0
      const {
        ctx: n,
        setupState: i,
        data: r,
        props: s,
        accessCache: o,
        type: a,
        appContext: l
      } = t
      let c
      if (e[0] !== '$') {
        const d = o[e]
        if (d !== void 0)
          switch (d) {
            case 1:
              return i[e]
            case 2:
              return r[e]
            case 4:
              return n[e]
            case 3:
              return s[e]
          }
        else {
          if (Gl(i, e)) return (o[e] = 1), i[e]
          if (r !== Ne && De(r, e)) return (o[e] = 2), r[e]
          if ((c = t.propsOptions[0]) && De(c, e)) return (o[e] = 3), s[e]
          if (n !== Ne && De(n, e)) return (o[e] = 4), n[e]
          jc && (o[e] = 0)
        }
      }
      const u = co[e]
      let f, p
      if (u) return e === '$attrs' && Rt(t.attrs, 'get', ''), u(t)
      if ((f = a.__cssModules) && (f = f[e])) return f
      if (n !== Ne && De(n, e)) return (o[e] = 4), n[e]
      if (((p = l.config.globalProperties), De(p, e))) return p[e]
    },
    set({ _: t }, e, n) {
      const { data: i, setupState: r, ctx: s } = t
      return Gl(r, e)
        ? ((r[e] = n), !0)
        : i !== Ne && De(i, e)
          ? ((i[e] = n), !0)
          : De(t.props, e) || (e[0] === '$' && e.slice(1) in t)
            ? !1
            : ((s[e] = n), !0)
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: n,
          ctx: i,
          appContext: r,
          propsOptions: s
        }
      },
      o
    ) {
      let a
      return (
        !!n[o] ||
        (t !== Ne && De(t, o)) ||
        Gl(e, o) ||
        ((a = s[0]) && De(a, o)) ||
        De(i, o) ||
        De(co, o) ||
        De(r.config.globalProperties, o)
      )
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : De(n, 'value') && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      )
    }
  }
function Wf(t) {
  return fe(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t
}
let jc = !0
function J0(t) {
  const e = Bh(t),
    n = t.proxy,
    i = t.ctx
  ;(jc = !1), e.beforeCreate && Uf(e.beforeCreate, t, 'bc')
  const {
    data: r,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: p,
    beforeUpdate: d,
    updated: g,
    activated: h,
    deactivated: y,
    beforeDestroy: w,
    beforeUnmount: _,
    destroyed: m,
    unmounted: v,
    render: b,
    renderTracked: C,
    renderTriggered: P,
    errorCaptured: M,
    serverPrefetch: E,
    expose: O,
    inheritAttrs: I,
    components: L,
    directives: z,
    filters: j
  } = e
  if ((c && ev(c, i, null), o))
    for (const G in o) {
      const Q = o[G]
      pe(Q) && (i[G] = Q.bind(n))
    }
  if (r) {
    const G = r.call(n, n)
    We(G) && (t.data = _l(G))
  }
  if (((jc = !0), s))
    for (const G in s) {
      const Q = s[G],
        le = pe(Q) ? Q.bind(n, n) : pe(Q.get) ? Q.get.bind(n, n) : ci,
        k = !pe(Q) && pe(Q.set) ? Q.set.bind(n) : ci,
        he = An({ get: le, set: k })
      Object.defineProperty(i, G, {
        enumerable: !0,
        configurable: !0,
        get: () => he.value,
        set: (_e) => (he.value = _e)
      })
    }
  if (a) for (const G in a) Nh(a[G], i, n, G)
  if (l) {
    const G = pe(l) ? l.call(n) : l
    Reflect.ownKeys(G).forEach((Q) => {
      as(Q, G[Q])
    })
  }
  u && Uf(u, t, 'c')
  function q(G, Q) {
    fe(Q) ? Q.forEach((le) => G(le.bind(n))) : Q && G(Q.bind(n))
  }
  if (
    (q(H0, f),
    q(Or, p),
    q(Dh, d),
    q(Wu, g),
    q(F0, h),
    q(j0, y),
    q(q0, M),
    q(U0, C),
    q(W0, P),
    q(Uu, _),
    q(Ih, v),
    q(G0, E),
    fe(O))
  )
    if (O.length) {
      const G = t.exposed || (t.exposed = {})
      O.forEach((Q) => {
        Object.defineProperty(G, Q, {
          get: () => n[Q],
          set: (le) => (n[Q] = le)
        })
      })
    } else t.exposed || (t.exposed = {})
  b && t.render === ci && (t.render = b),
    I != null && (t.inheritAttrs = I),
    L && (t.components = L),
    z && (t.directives = z),
    E && kh(t)
}
function ev(t, e, n = ci) {
  fe(t) && (t = Vc(t))
  for (const i in t) {
    const r = t[i]
    let s
    We(r)
      ? 'default' in r
        ? (s = Pi(r.from || i, r.default, !0))
        : (s = Pi(r.from || i))
      : (s = Pi(r)),
      zt(s)
        ? Object.defineProperty(e, i, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (o) => (s.value = o)
          })
        : (e[i] = s)
  }
}
function Uf(t, e, n) {
  pi(fe(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy), e, n)
}
function Nh(t, e, n, i) {
  let r = i.includes('.') ? Zh(n, i) : () => n[i]
  if (at(t)) {
    const s = e[t]
    pe(s) && uo(r, s)
  } else if (pe(t)) uo(r, t.bind(n))
  else if (We(t))
    if (fe(t)) t.forEach((s) => Nh(s, e, n, i))
    else {
      const s = pe(t.handler) ? t.handler.bind(n) : e[t.handler]
      pe(s) && uo(r, s, t)
    }
}
function Bh(t) {
  const e = t.type,
    { mixins: n, extends: i } = e,
    {
      mixins: r,
      optionsCache: s,
      config: { optionMergeStrategies: o }
    } = t.appContext,
    a = s.get(e)
  let l
  return (
    a
      ? (l = a)
      : !r.length && !n && !i
        ? (l = e)
        : ((l = {}),
          r.length && r.forEach((c) => Va(l, c, o, !0)),
          Va(l, e, o)),
    We(e) && s.set(e, l),
    l
  )
}
function Va(t, e, n, i = !1) {
  const { mixins: r, extends: s } = e
  s && Va(t, s, n, !0), r && r.forEach((o) => Va(t, o, n, !0))
  for (const o in e)
    if (!(i && o === 'expose')) {
      const a = tv[o] || (n && n[o])
      t[o] = a ? a(t[o], e[o]) : e[o]
    }
  return t
}
const tv = {
  data: qf,
  props: Yf,
  emits: Yf,
  methods: Zs,
  computed: Zs,
  beforeCreate: jt,
  created: jt,
  beforeMount: jt,
  mounted: jt,
  beforeUpdate: jt,
  updated: jt,
  beforeDestroy: jt,
  beforeUnmount: jt,
  destroyed: jt,
  unmounted: jt,
  activated: jt,
  deactivated: jt,
  errorCaptured: jt,
  serverPrefetch: jt,
  components: Zs,
  directives: Zs,
  watch: iv,
  provide: qf,
  inject: nv
}
function qf(t, e) {
  return e
    ? t
      ? function () {
          return $t(
            pe(t) ? t.call(this, this) : t,
            pe(e) ? e.call(this, this) : e
          )
        }
      : e
    : t
}
function nv(t, e) {
  return Zs(Vc(t), Vc(e))
}
function Vc(t) {
  if (fe(t)) {
    const e = {}
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n]
    return e
  }
  return t
}
function jt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e
}
function Zs(t, e) {
  return t ? $t(Object.create(null), t, e) : e
}
function Yf(t, e) {
  return t
    ? fe(t) && fe(e)
      ? [...new Set([...t, ...e])]
      : $t(Object.create(null), Wf(t), Wf(e ?? {}))
    : e
}
function iv(t, e) {
  if (!t) return e
  if (!e) return t
  const n = $t(Object.create(null), t)
  for (const i in e) n[i] = jt(t[i], e[i])
  return n
}
function $h() {
  return {
    app: null,
    config: {
      isNativeTag: Y_,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let rv = 0
function sv(t, e) {
  return function (i, r = null) {
    pe(i) || (i = $t({}, i)), r != null && !We(r) && (r = null)
    const s = $h(),
      o = new WeakSet(),
      a = []
    let l = !1
    const c = (s.app = {
      _uid: rv++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: $v,
      get config() {
        return s.config
      },
      set config(u) {},
      use(u, ...f) {
        return (
          o.has(u) ||
            (u && pe(u.install)
              ? (o.add(u), u.install(c, ...f))
              : pe(u) && (o.add(u), u(c, ...f))),
          c
        )
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), c
      },
      component(u, f) {
        return f ? ((s.components[u] = f), c) : s.components[u]
      },
      directive(u, f) {
        return f ? ((s.directives[u] = f), c) : s.directives[u]
      },
      mount(u, f, p) {
        if (!l) {
          const d = c._ceVNode || Pe(i, r)
          return (
            (d.appContext = s),
            p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
            t(d, u, p),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            Sl(d.component)
          )
        }
      },
      onUnmount(u) {
        a.push(u)
      },
      unmount() {
        l &&
          (pi(a, c._instance, 16),
          t(null, c._container),
          delete c._container.__vue_app__)
      },
      provide(u, f) {
        return (s.provides[u] = f), c
      },
      runWithContext(u) {
        const f = os
        os = c
        try {
          return u()
        } finally {
          os = f
        }
      }
    })
    return c
  }
}
let os = null
function as(t, e) {
  if (Dt) {
    let n = Dt.provides
    const i = Dt.parent && Dt.parent.provides
    i === n && (n = Dt.provides = Object.create(i)), (n[t] = e)
  }
}
function Pi(t, e, n = !1) {
  const i = Dt || Tt
  if (i || os) {
    const r = os
      ? os._context.provides
      : i
        ? i.parent == null
          ? i.vnode.appContext && i.vnode.appContext.provides
          : i.parent.provides
        : void 0
    if (r && t in r) return r[t]
    if (arguments.length > 1) return n && pe(e) ? e.call(i && i.proxy) : e
  }
}
const Fh = {},
  jh = () => Object.create(Fh),
  Vh = (t) => Object.getPrototypeOf(t) === Fh
function ov(t, e, n, i = !1) {
  const r = {},
    s = jh()
  ;(t.propsDefaults = Object.create(null)), Hh(t, e, r, s)
  for (const o in t.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (t.props = i ? r : wh(r)) : t.type.props ? (t.props = r) : (t.props = s),
    (t.attrs = s)
}
function av(t, e, n, i) {
  const {
      props: r,
      attrs: s,
      vnode: { patchFlag: o }
    } = t,
    a = Le(r),
    [l] = t.propsOptions
  let c = !1
  if ((i || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = t.vnode.dynamicProps
      for (let f = 0; f < u.length; f++) {
        let p = u[f]
        if (wl(t.emitsOptions, p)) continue
        const d = e[p]
        if (l)
          if (De(s, p)) d !== s[p] && ((s[p] = d), (c = !0))
          else {
            const g = zn(p)
            r[g] = Hc(l, a, g, d, t, !1)
          }
        else d !== s[p] && ((s[p] = d), (c = !0))
      }
    }
  } else {
    Hh(t, e, r, s) && (c = !0)
    let u
    for (const f in a)
      (!e || (!De(e, f) && ((u = Nr(f)) === f || !De(e, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (r[f] = Hc(l, a, f, void 0, t, !0))
          : delete r[f])
    if (s !== a) for (const f in s) (!e || !De(e, f)) && (delete s[f], (c = !0))
  }
  c && Si(t.attrs, 'set', '')
}
function Hh(t, e, n, i) {
  const [r, s] = t.propsOptions
  let o = !1,
    a
  if (e)
    for (let l in e) {
      if (oo(l)) continue
      const c = e[l]
      let u
      r && De(r, (u = zn(l)))
        ? !s || !s.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : wl(t.emitsOptions, l) ||
          ((!(l in i) || c !== i[l]) && ((i[l] = c), (o = !0)))
    }
  if (s) {
    const l = Le(n),
      c = a || Ne
    for (let u = 0; u < s.length; u++) {
      const f = s[u]
      n[f] = Hc(r, l, f, c[f], t, !De(c, f))
    }
  }
  return o
}
function Hc(t, e, n, i, r, s) {
  const o = t[n]
  if (o != null) {
    const a = De(o, 'default')
    if (a && i === void 0) {
      const l = o.default
      if (o.type !== Function && !o.skipFactory && pe(l)) {
        const { propsDefaults: c } = r
        if (n in c) i = c[n]
        else {
          const u = Ko(r)
          ;(i = c[n] = l.call(null, e)), u()
        }
      } else i = l
      r.ce && r.ce._setProp(n, i)
    }
    o[0] && (s && !a ? (i = !1) : o[1] && (i === '' || i === Nr(n)) && (i = !0))
  }
  return i
}
const lv = new WeakMap()
function Gh(t, e, n = !1) {
  const i = n ? lv : e.propsCache,
    r = i.get(t)
  if (r) return r
  const s = t.props,
    o = {},
    a = []
  let l = !1
  if (!pe(t)) {
    const u = (f) => {
      l = !0
      const [p, d] = Gh(f, e, !0)
      $t(o, p), d && a.push(...d)
    }
    !n && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u)
  }
  if (!s && !l) return We(t) && i.set(t, ts), ts
  if (fe(s))
    for (let u = 0; u < s.length; u++) {
      const f = zn(s[u])
      Xf(f) && (o[f] = Ne)
    }
  else if (s)
    for (const u in s) {
      const f = zn(u)
      if (Xf(f)) {
        const p = s[u],
          d = (o[f] = fe(p) || pe(p) ? { type: p } : $t({}, p)),
          g = d.type
        let h = !1,
          y = !0
        if (fe(g))
          for (let w = 0; w < g.length; ++w) {
            const _ = g[w],
              m = pe(_) && _.name
            if (m === 'Boolean') {
              h = !0
              break
            } else m === 'String' && (y = !1)
          }
        else h = pe(g) && g.name === 'Boolean'
        ;(d[0] = h), (d[1] = y), (h || De(d, 'default')) && a.push(f)
      }
    }
  const c = [o, a]
  return We(t) && i.set(t, c), c
}
function Xf(t) {
  return t[0] !== '$' && !oo(t)
}
const Wh = (t) => t[0] === '_' || t === '$stable',
  qu = (t) => (fe(t) ? t.map(ri) : [ri(t)]),
  cv = (t, e, n) => {
    if (e._n) return e
    const i = tn((...r) => qu(e(...r)), n)
    return (i._c = !1), i
  },
  Uh = (t, e, n) => {
    const i = t._ctx
    for (const r in t) {
      if (Wh(r)) continue
      const s = t[r]
      if (pe(s)) e[r] = cv(r, s, i)
      else if (s != null) {
        const o = qu(s)
        e[r] = () => o
      }
    }
  },
  qh = (t, e) => {
    const n = qu(e)
    t.slots.default = () => n
  },
  Yh = (t, e, n) => {
    for (const i in e) (n || i !== '_') && (t[i] = e[i])
  },
  uv = (t, e, n) => {
    const i = (t.slots = jh())
    if (t.vnode.shapeFlag & 32) {
      const r = e._
      r ? (Yh(i, e, n), n && ih(i, '_', r, !0)) : Uh(e, i)
    } else e && qh(t, e)
  },
  fv = (t, e, n) => {
    const { vnode: i, slots: r } = t
    let s = !0,
      o = Ne
    if (i.shapeFlag & 32) {
      const a = e._
      a
        ? n && a === 1
          ? (s = !1)
          : Yh(r, e, n)
        : ((s = !e.$stable), Uh(e, r)),
        (o = e)
    } else e && (qh(t, e), (o = { default: 1 }))
    if (s) for (const a in r) !Wh(a) && o[a] == null && delete r[a]
  },
  un = Ev
function dv(t) {
  return pv(t)
}
function pv(t, e) {
  const n = pl()
  n.__VUE__ = !0
  const {
      insert: i,
      remove: r,
      patchProp: s,
      createElement: o,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: p,
      setScopeId: d = ci,
      insertStaticContent: g
    } = t,
    h = (
      S,
      x,
      A,
      N = null,
      B = null,
      T = null,
      U = void 0,
      H = null,
      F = !!x.dynamicChildren
    ) => {
      if (S === x) return
      S && !Vs(S, x) && ((N = D(S)), _e(S, B, T, !0), (S = null)),
        x.patchFlag === -2 && ((F = !1), (x.dynamicChildren = null))
      const { type: $, ref: ne, shapeFlag: X } = x
      switch ($) {
        case xl:
          y(S, x, A, N)
          break
        case ms:
          w(S, x, A, N)
          break
        case Ta:
          S == null && _(x, A, N, U)
          break
        case qt:
          L(S, x, A, N, B, T, U, H, F)
          break
        default:
          X & 1
            ? b(S, x, A, N, B, T, U, H, F)
            : X & 6
              ? z(S, x, A, N, B, T, U, H, F)
              : (X & 64 || X & 128) && $.process(S, x, A, N, B, T, U, H, F, Z)
      }
      ne != null && B && ja(ne, S && S.ref, T, x || S, !x)
    },
    y = (S, x, A, N) => {
      if (S == null) i((x.el = a(x.children)), A, N)
      else {
        const B = (x.el = S.el)
        x.children !== S.children && c(B, x.children)
      }
    },
    w = (S, x, A, N) => {
      S == null ? i((x.el = l(x.children || '')), A, N) : (x.el = S.el)
    },
    _ = (S, x, A, N) => {
      ;[S.el, S.anchor] = g(S.children, x, A, N, S.el, S.anchor)
    },
    m = ({ el: S, anchor: x }, A, N) => {
      let B
      for (; S && S !== x; ) (B = p(S)), i(S, A, N), (S = B)
      i(x, A, N)
    },
    v = ({ el: S, anchor: x }) => {
      let A
      for (; S && S !== x; ) (A = p(S)), r(S), (S = A)
      r(x)
    },
    b = (S, x, A, N, B, T, U, H, F) => {
      x.type === 'svg' ? (U = 'svg') : x.type === 'math' && (U = 'mathml'),
        S == null ? C(x, A, N, B, T, U, H, F) : E(S, x, B, T, U, H, F)
    },
    C = (S, x, A, N, B, T, U, H) => {
      let F, $
      const { props: ne, shapeFlag: X, transition: te, dirs: J } = S
      if (
        ((F = S.el = o(S.type, T, ne && ne.is, ne)),
        X & 8
          ? u(F, S.children)
          : X & 16 && M(S.children, F, null, N, B, Wl(S, T), U, H),
        J && ar(S, null, N, 'created'),
        P(F, S, S.scopeId, U, N),
        ne)
      ) {
        for (const ie in ne)
          ie !== 'value' && !oo(ie) && s(F, ie, null, ne[ie], T, N)
        'value' in ne && s(F, 'value', null, ne.value, T),
          ($ = ne.onVnodeBeforeMount) && Jn($, N, S)
      }
      J && ar(S, null, N, 'beforeMount')
      const ce = hv(B, te)
      ce && te.beforeEnter(F),
        i(F, x, A),
        (($ = ne && ne.onVnodeMounted) || ce || J) &&
          un(() => {
            $ && Jn($, N, S), ce && te.enter(F), J && ar(S, null, N, 'mounted')
          }, B)
    },
    P = (S, x, A, N, B) => {
      if ((A && d(S, A), N)) for (let T = 0; T < N.length; T++) d(S, N[T])
      if (B) {
        let T = B.subTree
        if (
          x === T ||
          (eg(T.type) && (T.ssContent === x || T.ssFallback === x))
        ) {
          const U = B.vnode
          P(S, U, U.scopeId, U.slotScopeIds, B.parent)
        }
      }
    },
    M = (S, x, A, N, B, T, U, H, F = 0) => {
      for (let $ = F; $ < S.length; $++) {
        const ne = (S[$] = H ? Bi(S[$]) : ri(S[$]))
        h(null, ne, x, A, N, B, T, U, H)
      }
    },
    E = (S, x, A, N, B, T, U) => {
      const H = (x.el = S.el)
      let { patchFlag: F, dynamicChildren: $, dirs: ne } = x
      F |= S.patchFlag & 16
      const X = S.props || Ne,
        te = x.props || Ne
      let J
      if (
        (A && lr(A, !1),
        (J = te.onVnodeBeforeUpdate) && Jn(J, A, x, S),
        ne && ar(x, S, A, 'beforeUpdate'),
        A && lr(A, !0),
        ((X.innerHTML && te.innerHTML == null) ||
          (X.textContent && te.textContent == null)) &&
          u(H, ''),
        $
          ? O(S.dynamicChildren, $, H, A, N, Wl(x, B), T)
          : U || Q(S, x, H, null, A, N, Wl(x, B), T, !1),
        F > 0)
      ) {
        if (F & 16) I(H, X, te, A, B)
        else if (
          (F & 2 && X.class !== te.class && s(H, 'class', null, te.class, B),
          F & 4 && s(H, 'style', X.style, te.style, B),
          F & 8)
        ) {
          const ce = x.dynamicProps
          for (let ie = 0; ie < ce.length; ie++) {
            const ue = ce[ie],
              Be = X[ue],
              Ve = te[ue]
            ;(Ve !== Be || ue === 'value') && s(H, ue, Be, Ve, B, A)
          }
        }
        F & 1 && S.children !== x.children && u(H, x.children)
      } else !U && $ == null && I(H, X, te, A, B)
      ;((J = te.onVnodeUpdated) || ne) &&
        un(() => {
          J && Jn(J, A, x, S), ne && ar(x, S, A, 'updated')
        }, N)
    },
    O = (S, x, A, N, B, T, U) => {
      for (let H = 0; H < x.length; H++) {
        const F = S[H],
          $ = x[H],
          ne =
            F.el && (F.type === qt || !Vs(F, $) || F.shapeFlag & 70)
              ? f(F.el)
              : A
        h(F, $, ne, null, N, B, T, U, !0)
      }
    },
    I = (S, x, A, N, B) => {
      if (x !== A) {
        if (x !== Ne)
          for (const T in x) !oo(T) && !(T in A) && s(S, T, x[T], null, B, N)
        for (const T in A) {
          if (oo(T)) continue
          const U = A[T],
            H = x[T]
          U !== H && T !== 'value' && s(S, T, H, U, B, N)
        }
        'value' in A && s(S, 'value', x.value, A.value, B)
      }
    },
    L = (S, x, A, N, B, T, U, H, F) => {
      const $ = (x.el = S ? S.el : a('')),
        ne = (x.anchor = S ? S.anchor : a(''))
      let { patchFlag: X, dynamicChildren: te, slotScopeIds: J } = x
      J && (H = H ? H.concat(J) : J),
        S == null
          ? (i($, A, N), i(ne, A, N), M(x.children || [], A, ne, B, T, U, H, F))
          : X > 0 && X & 64 && te && S.dynamicChildren
            ? (O(S.dynamicChildren, te, A, B, T, U, H),
              (x.key != null || (B && x === B.subTree)) && Xh(S, x, !0))
            : Q(S, x, A, ne, B, T, U, H, F)
    },
    z = (S, x, A, N, B, T, U, H, F) => {
      ;(x.slotScopeIds = H),
        S == null
          ? x.shapeFlag & 512
            ? B.ctx.activate(x, A, N, U, F)
            : j(x, A, N, B, T, U, F)
          : Y(S, x, F)
    },
    j = (S, x, A, N, B, T, U) => {
      const H = (S.component = Rv(S, N, B))
      if ((Rh(S) && (H.ctx.renderer = Z), Lv(H, !1, U), H.asyncDep)) {
        if ((B && B.registerDep(H, q, U), !S.el)) {
          const F = (H.subTree = Pe(ms))
          w(null, F, x, A)
        }
      } else q(H, S, x, A, B, T, U)
    },
    Y = (S, x, A) => {
      const N = (x.component = S.component)
      if (Sv(S, x, A))
        if (N.asyncDep && !N.asyncResolved) {
          G(N, x, A)
          return
        } else (N.next = x), N.update()
      else (x.el = S.el), (N.vnode = x)
    },
    q = (S, x, A, N, B, T, U) => {
      const H = () => {
        if (S.isMounted) {
          let { next: X, bu: te, u: J, parent: ce, vnode: ie } = S
          {
            const Me = Kh(S)
            if (Me) {
              X && ((X.el = ie.el), G(S, X, U)),
                Me.asyncDep.then(() => {
                  S.isUnmounted || H()
                })
              return
            }
          }
          let ue = X,
            Be
          lr(S, !1),
            X ? ((X.el = ie.el), G(S, X, U)) : (X = ie),
            te && $l(te),
            (Be = X.props && X.props.onVnodeBeforeUpdate) && Jn(Be, ce, X, ie),
            lr(S, !0)
          const Ve = Qf(S),
            Ct = S.subTree
          ;(S.subTree = Ve),
            h(Ct, Ve, f(Ct.el), D(Ct), S, B, T),
            (X.el = Ve.el),
            ue === null && Tv(S, Ve.el),
            J && un(J, B),
            (Be = X.props && X.props.onVnodeUpdated) &&
              un(() => Jn(Be, ce, X, ie), B)
        } else {
          let X
          const { el: te, props: J } = x,
            { bm: ce, m: ie, parent: ue, root: Be, type: Ve } = S,
            Ct = ss(x)
          lr(S, !1),
            ce && $l(ce),
            !Ct && (X = J && J.onVnodeBeforeMount) && Jn(X, ue, x),
            lr(S, !0)
          {
            Be.ce && Be.ce._injectChildStyle(Ve)
            const Me = (S.subTree = Qf(S))
            h(null, Me, A, N, S, B, T), (x.el = Me.el)
          }
          if ((ie && un(ie, B), !Ct && (X = J && J.onVnodeMounted))) {
            const Me = x
            un(() => Jn(X, ue, Me), B)
          }
          ;(x.shapeFlag & 256 ||
            (ue && ss(ue.vnode) && ue.vnode.shapeFlag & 256)) &&
            S.a &&
            un(S.a, B),
            (S.isMounted = !0),
            (x = A = N = null)
        }
      }
      S.scope.on()
      const F = (S.effect = new ah(H))
      S.scope.off()
      const $ = (S.update = F.run.bind(F)),
        ne = (S.job = F.runIfDirty.bind(F))
      ;(ne.i = S), (ne.id = S.uid), (F.scheduler = () => Hu(ne)), lr(S, !0), $()
    },
    G = (S, x, A) => {
      x.component = S
      const N = S.vnode.props
      ;(S.vnode = x),
        (S.next = null),
        av(S, x.props, N, A),
        fv(S, x.children, A),
        Ji(),
        Hf(S),
        er()
    },
    Q = (S, x, A, N, B, T, U, H, F = !1) => {
      const $ = S && S.children,
        ne = S ? S.shapeFlag : 0,
        X = x.children,
        { patchFlag: te, shapeFlag: J } = x
      if (te > 0) {
        if (te & 128) {
          k($, X, A, N, B, T, U, H, F)
          return
        } else if (te & 256) {
          le($, X, A, N, B, T, U, H, F)
          return
        }
      }
      J & 8
        ? (ne & 16 && Oe($, B, T), X !== $ && u(A, X))
        : ne & 16
          ? J & 16
            ? k($, X, A, N, B, T, U, H, F)
            : Oe($, B, T, !0)
          : (ne & 8 && u(A, ''), J & 16 && M(X, A, N, B, T, U, H, F))
    },
    le = (S, x, A, N, B, T, U, H, F) => {
      ;(S = S || ts), (x = x || ts)
      const $ = S.length,
        ne = x.length,
        X = Math.min($, ne)
      let te
      for (te = 0; te < X; te++) {
        const J = (x[te] = F ? Bi(x[te]) : ri(x[te]))
        h(S[te], J, A, null, B, T, U, H, F)
      }
      $ > ne ? Oe(S, B, T, !0, !1, X) : M(x, A, N, B, T, U, H, F, X)
    },
    k = (S, x, A, N, B, T, U, H, F) => {
      let $ = 0
      const ne = x.length
      let X = S.length - 1,
        te = ne - 1
      for (; $ <= X && $ <= te; ) {
        const J = S[$],
          ce = (x[$] = F ? Bi(x[$]) : ri(x[$]))
        if (Vs(J, ce)) h(J, ce, A, null, B, T, U, H, F)
        else break
        $++
      }
      for (; $ <= X && $ <= te; ) {
        const J = S[X],
          ce = (x[te] = F ? Bi(x[te]) : ri(x[te]))
        if (Vs(J, ce)) h(J, ce, A, null, B, T, U, H, F)
        else break
        X--, te--
      }
      if ($ > X) {
        if ($ <= te) {
          const J = te + 1,
            ce = J < ne ? x[J].el : N
          for (; $ <= te; )
            h(null, (x[$] = F ? Bi(x[$]) : ri(x[$])), A, ce, B, T, U, H, F), $++
        }
      } else if ($ > te) for (; $ <= X; ) _e(S[$], B, T, !0), $++
      else {
        const J = $,
          ce = $,
          ie = new Map()
        for ($ = ce; $ <= te; $++) {
          const rt = (x[$] = F ? Bi(x[$]) : ri(x[$]))
          rt.key != null && ie.set(rt.key, $)
        }
        let ue,
          Be = 0
        const Ve = te - ce + 1
        let Ct = !1,
          Me = 0
        const Xn = new Array(Ve)
        for ($ = 0; $ < Ve; $++) Xn[$] = 0
        for ($ = J; $ <= X; $++) {
          const rt = S[$]
          if (Be >= Ve) {
            _e(rt, B, T, !0)
            continue
          }
          let wt
          if (rt.key != null) wt = ie.get(rt.key)
          else
            for (ue = ce; ue <= te; ue++)
              if (Xn[ue - ce] === 0 && Vs(rt, x[ue])) {
                wt = ue
                break
              }
          wt === void 0
            ? _e(rt, B, T, !0)
            : ((Xn[wt - ce] = $ + 1),
              wt >= Me ? (Me = wt) : (Ct = !0),
              h(rt, x[wt], A, null, B, T, U, H, F),
              Be++)
        }
        const Bn = Ct ? gv(Xn) : ts
        for (ue = Bn.length - 1, $ = Ve - 1; $ >= 0; $--) {
          const rt = ce + $,
            wt = x[rt],
            $n = rt + 1 < ne ? x[rt + 1].el : N
          Xn[$] === 0
            ? h(null, wt, A, $n, B, T, U, H, F)
            : Ct && (ue < 0 || $ !== Bn[ue] ? he(wt, A, $n, 2) : ue--)
        }
      }
    },
    he = (S, x, A, N, B = null) => {
      const { el: T, type: U, transition: H, children: F, shapeFlag: $ } = S
      if ($ & 6) {
        he(S.component.subTree, x, A, N)
        return
      }
      if ($ & 128) {
        S.suspense.move(x, A, N)
        return
      }
      if ($ & 64) {
        U.move(S, x, A, Z)
        return
      }
      if (U === qt) {
        i(T, x, A)
        for (let X = 0; X < F.length; X++) he(F[X], x, A, N)
        i(S.anchor, x, A)
        return
      }
      if (U === Ta) {
        m(S, x, A)
        return
      }
      if (N !== 2 && $ & 1 && H)
        if (N === 0) H.beforeEnter(T), i(T, x, A), un(() => H.enter(T), B)
        else {
          const { leave: X, delayLeave: te, afterLeave: J } = H,
            ce = () => i(T, x, A),
            ie = () => {
              X(T, () => {
                ce(), J && J()
              })
            }
          te ? te(T, ce, ie) : ie()
        }
      else i(T, x, A)
    },
    _e = (S, x, A, N = !1, B = !1) => {
      const {
        type: T,
        props: U,
        ref: H,
        children: F,
        dynamicChildren: $,
        shapeFlag: ne,
        patchFlag: X,
        dirs: te,
        cacheIndex: J
      } = S
      if (
        (X === -2 && (B = !1),
        H != null && ja(H, null, A, S, !0),
        J != null && (x.renderCache[J] = void 0),
        ne & 256)
      ) {
        x.ctx.deactivate(S)
        return
      }
      const ce = ne & 1 && te,
        ie = !ss(S)
      let ue
      if ((ie && (ue = U && U.onVnodeBeforeUnmount) && Jn(ue, x, S), ne & 6))
        Ae(S.component, A, N)
      else {
        if (ne & 128) {
          S.suspense.unmount(A, N)
          return
        }
        ce && ar(S, null, x, 'beforeUnmount'),
          ne & 64
            ? S.type.remove(S, x, A, Z, N)
            : $ && !$.hasOnce && (T !== qt || (X > 0 && X & 64))
              ? Oe($, x, A, !1, !0)
              : ((T === qt && X & 384) || (!B && ne & 16)) && Oe(F, x, A),
          N && Ue(S)
      }
      ;((ie && (ue = U && U.onVnodeUnmounted)) || ce) &&
        un(() => {
          ue && Jn(ue, x, S), ce && ar(S, null, x, 'unmounted')
        }, A)
    },
    Ue = (S) => {
      const { type: x, el: A, anchor: N, transition: B } = S
      if (x === qt) {
        we(A, N)
        return
      }
      if (x === Ta) {
        v(S)
        return
      }
      const T = () => {
        r(A), B && !B.persisted && B.afterLeave && B.afterLeave()
      }
      if (S.shapeFlag & 1 && B && !B.persisted) {
        const { leave: U, delayLeave: H } = B,
          F = () => U(A, T)
        H ? H(S.el, T, F) : F()
      } else T()
    },
    we = (S, x) => {
      let A
      for (; S !== x; ) (A = p(S)), r(S), (S = A)
      r(x)
    },
    Ae = (S, x, A) => {
      const { bum: N, scope: B, job: T, subTree: U, um: H, m: F, a: $ } = S
      Kf(F),
        Kf($),
        N && $l(N),
        B.stop(),
        T && ((T.flags |= 8), _e(U, S, x, A)),
        H && un(H, x),
        un(() => {
          S.isUnmounted = !0
        }, x),
        x &&
          x.pendingBranch &&
          !x.isUnmounted &&
          S.asyncDep &&
          !S.asyncResolved &&
          S.suspenseId === x.pendingId &&
          (x.deps--, x.deps === 0 && x.resolve())
    },
    Oe = (S, x, A, N = !1, B = !1, T = 0) => {
      for (let U = T; U < S.length; U++) _e(S[U], x, A, N, B)
    },
    D = (S) => {
      if (S.shapeFlag & 6) return D(S.component.subTree)
      if (S.shapeFlag & 128) return S.suspense.next()
      const x = p(S.anchor || S.el),
        A = x && x[B0]
      return A ? p(A) : x
    }
  let W = !1
  const V = (S, x, A) => {
      S == null
        ? x._vnode && _e(x._vnode, null, null, !0)
        : h(x._vnode || null, S, x, null, null, null, A),
        (x._vnode = S),
        W || ((W = !0), Hf(), Ph(), (W = !1))
    },
    Z = { p: h, um: _e, m: he, r: Ue, mt: j, mc: M, pc: Q, pbc: O, n: D, o: t }
  return { render: V, hydrate: void 0, createApp: sv(V) }
}
function Wl({ type: t, props: e }, n) {
  return (n === 'svg' && t === 'foreignObject') ||
    (n === 'mathml' &&
      t === 'annotation-xml' &&
      e &&
      e.encoding &&
      e.encoding.includes('html'))
    ? void 0
    : n
}
function lr({ effect: t, job: e }, n) {
  n ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5))
}
function hv(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted
}
function Xh(t, e, n = !1) {
  const i = t.children,
    r = e.children
  if (fe(i) && fe(r))
    for (let s = 0; s < i.length; s++) {
      const o = i[s]
      let a = r[s]
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = r[s] = Bi(r[s])), (a.el = o.el)),
        !n && a.patchFlag !== -2 && Xh(o, a)),
        a.type === xl && (a.el = o.el)
    }
}
function gv(t) {
  const e = t.slice(),
    n = [0]
  let i, r, s, o, a
  const l = t.length
  for (i = 0; i < l; i++) {
    const c = t[i]
    if (c !== 0) {
      if (((r = n[n.length - 1]), t[r] < c)) {
        ;(e[i] = r), n.push(i)
        continue
      }
      for (s = 0, o = n.length - 1; s < o; )
        (a = (s + o) >> 1), t[n[a]] < c ? (s = a + 1) : (o = a)
      c < t[n[s]] && (s > 0 && (e[i] = n[s - 1]), (n[s] = i))
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; ) (n[s] = o), (o = e[o])
  return n
}
function Kh(t) {
  const e = t.subTree.component
  if (e) return e.asyncDep && !e.asyncResolved ? e : Kh(e)
}
function Kf(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8
}
const mv = Symbol.for('v-scx'),
  _v = () => Pi(mv)
function uo(t, e, n) {
  return Qh(t, e, n)
}
function Qh(t, e, n = Ne) {
  const { immediate: i, deep: r, flush: s, once: o } = n,
    a = $t({}, n),
    l = (e && i) || (!e && s !== 'post')
  let c
  if (Io) {
    if (s === 'sync') {
      const d = _v()
      c = d.__watcherHandles || (d.__watcherHandles = [])
    } else if (!l) {
      const d = () => {}
      return (d.stop = ci), (d.resume = ci), (d.pause = ci), d
    }
  }
  const u = Dt
  a.call = (d, g, h) => pi(d, u, g, h)
  let f = !1
  s === 'post'
    ? (a.scheduler = (d) => {
        un(d, u && u.suspense)
      })
    : s !== 'sync' &&
      ((f = !0),
      (a.scheduler = (d, g) => {
        g ? d() : Hu(d)
      })),
    (a.augmentJob = (d) => {
      e && (d.flags |= 4),
        f && ((d.flags |= 2), u && ((d.id = u.uid), (d.i = u)))
    })
  const p = L0(t, e, a)
  return Io && (c ? c.push(p) : l && p()), p
}
function vv(t, e, n) {
  const i = this.proxy,
    r = at(t) ? (t.includes('.') ? Zh(i, t) : () => i[t]) : t.bind(i, i)
  let s
  pe(e) ? (s = e) : ((s = e.handler), (n = e))
  const o = Ko(this),
    a = Qh(r, s.bind(i), n)
  return o(), a
}
function Zh(t, e) {
  const n = e.split('.')
  return () => {
    let i = t
    for (let r = 0; r < n.length && i; r++) i = i[n[r]]
    return i
  }
}
const bv = (t, e) =>
  e === 'modelValue' || e === 'model-value'
    ? t.modelModifiers
    : t[`${e}Modifiers`] || t[`${zn(e)}Modifiers`] || t[`${Nr(e)}Modifiers`]
function yv(t, e, ...n) {
  if (t.isUnmounted) return
  const i = t.vnode.props || Ne
  let r = n
  const s = e.startsWith('update:'),
    o = s && bv(i, e.slice(7))
  o &&
    (o.trim && (r = n.map((u) => (at(u) ? u.trim() : u))),
    o.number && (r = n.map(J_)))
  let a,
    l = i[(a = Bl(e))] || i[(a = Bl(zn(e)))]
  !l && s && (l = i[(a = Bl(Nr(e)))]), l && pi(l, t, 6, r)
  const c = i[a + 'Once']
  if (c) {
    if (!t.emitted) t.emitted = {}
    else if (t.emitted[a]) return
    ;(t.emitted[a] = !0), pi(c, t, 6, r)
  }
}
function Jh(t, e, n = !1) {
  const i = e.emitsCache,
    r = i.get(t)
  if (r !== void 0) return r
  const s = t.emits
  let o = {},
    a = !1
  if (!pe(t)) {
    const l = (c) => {
      const u = Jh(c, e, !0)
      u && ((a = !0), $t(o, u))
    }
    !n && e.mixins.length && e.mixins.forEach(l),
      t.extends && l(t.extends),
      t.mixins && t.mixins.forEach(l)
  }
  return !s && !a
    ? (We(t) && i.set(t, null), null)
    : (fe(s) ? s.forEach((l) => (o[l] = null)) : $t(o, s),
      We(t) && i.set(t, o),
      o)
}
function wl(t, e) {
  return !t || !cl(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, '')),
      De(t, e[0].toLowerCase() + e.slice(1)) || De(t, Nr(e)) || De(t, e))
}
function Qf(t) {
  const {
      type: e,
      vnode: n,
      proxy: i,
      withProxy: r,
      propsOptions: [s],
      slots: o,
      attrs: a,
      emit: l,
      render: c,
      renderCache: u,
      props: f,
      data: p,
      setupState: d,
      ctx: g,
      inheritAttrs: h
    } = t,
    y = Fa(t)
  let w, _
  try {
    if (n.shapeFlag & 4) {
      const v = r || i,
        b = v
      ;(w = ri(c.call(b, v, u, f, d, p, g))), (_ = a)
    } else {
      const v = e
      ;(w = ri(
        v.length > 1 ? v(f, { attrs: a, slots: o, emit: l }) : v(f, null)
      )),
        (_ = e.props ? a : wv(a))
    }
  } catch (v) {
    ;(fo.length = 0), vl(v, t, 1), (w = Pe(ms))
  }
  let m = w
  if (_ && h !== !1) {
    const v = Object.keys(_),
      { shapeFlag: b } = m
    v.length &&
      b & 7 &&
      (s && v.some(Ru) && (_ = xv(_, s)), (m = _s(m, _, !1, !0)))
  }
  return (
    n.dirs &&
      ((m = _s(m, null, !1, !0)),
      (m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Gu(m, n.transition),
    (w = m),
    Fa(y),
    w
  )
}
const wv = (t) => {
    let e
    for (const n in t)
      (n === 'class' || n === 'style' || cl(n)) && ((e || (e = {}))[n] = t[n])
    return e
  },
  xv = (t, e) => {
    const n = {}
    for (const i in t) (!Ru(i) || !(i.slice(9) in e)) && (n[i] = t[i])
    return n
  }
function Sv(t, e, n) {
  const { props: i, children: r, component: s } = t,
    { props: o, children: a, patchFlag: l } = e,
    c = s.emitsOptions
  if (e.dirs || e.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return i ? Zf(i, o, c) : !!o
    if (l & 8) {
      const u = e.dynamicProps
      for (let f = 0; f < u.length; f++) {
        const p = u[f]
        if (o[p] !== i[p] && !wl(c, p)) return !0
      }
    }
  } else
    return (r || a) && (!a || !a.$stable)
      ? !0
      : i === o
        ? !1
        : i
          ? o
            ? Zf(i, o, c)
            : !0
          : !!o
  return !1
}
function Zf(t, e, n) {
  const i = Object.keys(e)
  if (i.length !== Object.keys(t).length) return !0
  for (let r = 0; r < i.length; r++) {
    const s = i[r]
    if (e[s] !== t[s] && !wl(n, s)) return !0
  }
  return !1
}
function Tv({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const i = e.subTree
    if ((i.suspense && i.suspense.activeBranch === t && (i.el = t.el), i === t))
      ((t = e.vnode).el = n), (e = e.parent)
    else break
  }
}
const eg = (t) => t.__isSuspense
function Ev(t, e) {
  e && e.pendingBranch
    ? fe(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : z0(t)
}
const qt = Symbol.for('v-fgt'),
  xl = Symbol.for('v-txt'),
  ms = Symbol.for('v-cmt'),
  Ta = Symbol.for('v-stc'),
  fo = []
let vn = null
function bt(t = !1) {
  fo.push((vn = t ? null : []))
}
function Cv() {
  fo.pop(), (vn = fo[fo.length - 1] || null)
}
let Lo = 1
function Jf(t, e = !1) {
  ;(Lo += t), t < 0 && vn && e && (vn.hasOnce = !0)
}
function tg(t) {
  return (
    (t.dynamicChildren = Lo > 0 ? vn || ts : null),
    Cv(),
    Lo > 0 && vn && vn.push(t),
    t
  )
}
function nn(t, e, n, i, r, s) {
  return tg(R(t, e, n, i, r, s, !0))
}
function Ha(t, e, n, i, r) {
  return tg(Pe(t, e, n, i, r, !0))
}
function Do(t) {
  return t ? t.__v_isVNode === !0 : !1
}
function Vs(t, e) {
  return t.type === e.type && t.key === e.key
}
const ng = ({ key: t }) => t ?? null,
  Ea = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == 'number' && (t = '' + t),
    t != null
      ? at(t) || zt(t) || pe(t)
        ? { i: Tt, r: t, k: e, f: !!n }
        : t
      : null
  )
function R(
  t,
  e = null,
  n = null,
  i = 0,
  r = null,
  s = t === qt ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ng(e),
    ref: e && Ea(e),
    scopeId: Ah,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: i,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Tt
  }
  return (
    a
      ? (Yu(l, n), s & 128 && t.normalize(l))
      : n && (l.shapeFlag |= at(n) ? 8 : 16),
    Lo > 0 &&
      !o &&
      vn &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      vn.push(l),
    l
  )
}
const Pe = Pv
function Pv(t, e = null, n = null, i = 0, r = null, s = !1) {
  if (((!t || t === X0) && (t = ms), Do(t))) {
    const a = _s(t, e, !0)
    return (
      n && Yu(a, n),
      Lo > 0 &&
        !s &&
        vn &&
        (a.shapeFlag & 6 ? (vn[vn.indexOf(t)] = a) : vn.push(a)),
      (a.patchFlag = -2),
      a
    )
  }
  if ((Bv(t) && (t = t.__vccOpts), e)) {
    e = Ov(e)
    let { class: a, style: l } = e
    a && !at(a) && (e.class = gl(a)),
      We(l) && (ju(l) && !fe(l) && (l = $t({}, l)), (e.style = hl(l)))
  }
  const o = at(t) ? 1 : eg(t) ? 128 : $0(t) ? 64 : We(t) ? 4 : pe(t) ? 2 : 0
  return R(t, e, n, i, r, o, s, !0)
}
function Ov(t) {
  return t ? (ju(t) || Vh(t) ? $t({}, t) : t) : null
}
function _s(t, e, n = !1, i = !1) {
  const { props: r, ref: s, patchFlag: o, children: a, transition: l } = t,
    c = e ? Av(r || {}, e) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t.type,
      props: c,
      key: c && ng(c),
      ref:
        e && e.ref
          ? n && s
            ? fe(s)
              ? s.concat(Ea(e))
              : [s, Ea(e)]
            : Ea(e)
          : s,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: a,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== qt ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: l,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && _s(t.ssContent),
      ssFallback: t.ssFallback && _s(t.ssFallback),
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce
    }
  return l && i && Gu(u, l.clone(u)), u
}
function ve(t = ' ', e = 0) {
  return Pe(xl, null, t, e)
}
function Ls(t, e) {
  const n = Pe(Ta, null, t)
  return (n.staticCount = e), n
}
function ri(t) {
  return t == null || typeof t == 'boolean'
    ? Pe(ms)
    : fe(t)
      ? Pe(qt, null, t.slice())
      : Do(t)
        ? Bi(t)
        : Pe(xl, null, String(t))
}
function Bi(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : _s(t)
}
function Yu(t, e) {
  let n = 0
  const { shapeFlag: i } = t
  if (e == null) e = null
  else if (fe(e)) n = 16
  else if (typeof e == 'object')
    if (i & 65) {
      const r = e.default
      r && (r._c && (r._d = !1), Yu(t, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = e._
      !r && !Vh(e)
        ? (e._ctx = Tt)
        : r === 3 &&
          Tt &&
          (Tt.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)))
    }
  else
    pe(e)
      ? ((e = { default: e, _ctx: Tt }), (n = 32))
      : ((e = String(e)), i & 64 ? ((n = 16), (e = [ve(e)])) : (n = 8))
  ;(t.children = e), (t.shapeFlag |= n)
}
function Av(...t) {
  const e = {}
  for (let n = 0; n < t.length; n++) {
    const i = t[n]
    for (const r in i)
      if (r === 'class')
        e.class !== i.class && (e.class = gl([e.class, i.class]))
      else if (r === 'style') e.style = hl([e.style, i.style])
      else if (cl(r)) {
        const s = e[r],
          o = i[r]
        o &&
          s !== o &&
          !(fe(s) && s.includes(o)) &&
          (e[r] = s ? [].concat(s, o) : o)
      } else r !== '' && (e[r] = i[r])
  }
  return e
}
function Jn(t, e, n, i = null) {
  pi(t, e, 7, [n, i])
}
const Mv = $h()
let kv = 0
function Rv(t, e, n) {
  const i = t.type,
    r = (e ? e.appContext : t.appContext) || Mv,
    s = {
      uid: kv++,
      vnode: t,
      type: i,
      parent: e,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new o0(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(r.provides),
      ids: e ? e.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Gh(i, r),
      emitsOptions: Jh(i, r),
      emit: null,
      emitted: null,
      propsDefaults: Ne,
      inheritAttrs: i.inheritAttrs,
      ctx: Ne,
      data: Ne,
      props: Ne,
      attrs: Ne,
      slots: Ne,
      refs: Ne,
      setupState: Ne,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (s.ctx = { _: s }),
    (s.root = e ? e.root : s),
    (s.emit = yv.bind(null, s)),
    t.ce && t.ce(s),
    s
  )
}
let Dt = null,
  Ga,
  Gc
{
  const t = pl(),
    e = (n, i) => {
      let r
      return (
        (r = t[n]) || (r = t[n] = []),
        r.push(i),
        (s) => {
          r.length > 1 ? r.forEach((o) => o(s)) : r[0](s)
        }
      )
    }
  ;(Ga = e('__VUE_INSTANCE_SETTERS__', (n) => (Dt = n))),
    (Gc = e('__VUE_SSR_SETTERS__', (n) => (Io = n)))
}
const Ko = (t) => {
    const e = Dt
    return (
      Ga(t),
      t.scope.on(),
      () => {
        t.scope.off(), Ga(e)
      }
    )
  },
  ed = () => {
    Dt && Dt.scope.off(), Ga(null)
  }
function ig(t) {
  return t.vnode.shapeFlag & 4
}
let Io = !1
function Lv(t, e = !1, n = !1) {
  e && Gc(e)
  const { props: i, children: r } = t.vnode,
    s = ig(t)
  ov(t, i, s, e), uv(t, r, n)
  const o = s ? Dv(t, e) : void 0
  return e && Gc(!1), o
}
function Dv(t, e) {
  const n = t.type
  ;(t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, Z0))
  const { setup: i } = n
  if (i) {
    Ji()
    const r = (t.setupContext = i.length > 1 ? zv(t) : null),
      s = Ko(t),
      o = Xo(i, t, 0, [t.props, r]),
      a = eh(o)
    if ((er(), s(), (a || t.sp) && !ss(t) && kh(t), a)) {
      if ((o.then(ed, ed), e))
        return o
          .then((l) => {
            td(t, l)
          })
          .catch((l) => {
            vl(l, t, 0)
          })
      t.asyncDep = o
    } else td(t, o)
  } else rg(t)
}
function td(t, e, n) {
  pe(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : We(e) && (t.setupState = Th(e)),
    rg(t)
}
function rg(t, e, n) {
  const i = t.type
  t.render || (t.render = i.render || ci)
  {
    const r = Ko(t)
    Ji()
    try {
      J0(t)
    } finally {
      er(), r()
    }
  }
}
const Iv = {
  get(t, e) {
    return Rt(t, 'get', ''), t[e]
  }
}
function zv(t) {
  const e = (n) => {
    t.exposed = n || {}
  }
  return {
    attrs: new Proxy(t.attrs, Iv),
    slots: t.slots,
    emit: t.emit,
    expose: e
  }
}
function Sl(t) {
  return t.exposed
    ? t.exposeProxy ||
        (t.exposeProxy = new Proxy(Th(C0(t.exposed)), {
          get(e, n) {
            if (n in e) return e[n]
            if (n in co) return co[n](t)
          },
          has(e, n) {
            return n in e || n in co
          }
        }))
    : t.proxy
}
function Nv(t, e = !0) {
  return pe(t) ? t.displayName || t.name : t.name || (e && t.__name)
}
function Bv(t) {
  return pe(t) && '__vccOpts' in t
}
const An = (t, e) => k0(t, e, Io)
function en(t, e, n) {
  const i = arguments.length
  return i === 2
    ? We(e) && !fe(e)
      ? Do(e)
        ? Pe(t, null, [e])
        : Pe(t, e)
      : Pe(t, null, e)
    : (i > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : i === 3 && Do(n) && (n = [n]),
      Pe(t, e, n))
}
const $v = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Wc
const nd = typeof window < 'u' && window.trustedTypes
if (nd)
  try {
    Wc = nd.createPolicy('vue', { createHTML: (t) => t })
  } catch {}
const sg = Wc ? (t) => Wc.createHTML(t) : (t) => t,
  Fv = 'http://www.w3.org/2000/svg',
  jv = 'http://www.w3.org/1998/Math/MathML',
  yi = typeof document < 'u' ? document : null,
  id = yi && yi.createElement('template'),
  Vv = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null)
    },
    remove: (t) => {
      const e = t.parentNode
      e && e.removeChild(t)
    },
    createElement: (t, e, n, i) => {
      const r =
        e === 'svg'
          ? yi.createElementNS(Fv, t)
          : e === 'mathml'
            ? yi.createElementNS(jv, t)
            : n
              ? yi.createElement(t, { is: n })
              : yi.createElement(t)
      return (
        t === 'select' &&
          i &&
          i.multiple != null &&
          r.setAttribute('multiple', i.multiple),
        r
      )
    },
    createText: (t) => yi.createTextNode(t),
    createComment: (t) => yi.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e
    },
    setElementText: (t, e) => {
      t.textContent = e
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => yi.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, '')
    },
    insertStaticContent(t, e, n, i, r, s) {
      const o = n ? n.previousSibling : e.lastChild
      if (r && (r === s || r.nextSibling))
        for (
          ;
          e.insertBefore(r.cloneNode(!0), n),
            !(r === s || !(r = r.nextSibling));

        );
      else {
        id.innerHTML = sg(
          i === 'svg'
            ? `<svg>${t}</svg>`
            : i === 'mathml'
              ? `<math>${t}</math>`
              : t
        )
        const a = id.content
        if (i === 'svg' || i === 'mathml') {
          const l = a.firstChild
          for (; l.firstChild; ) a.appendChild(l.firstChild)
          a.removeChild(l)
        }
        e.insertBefore(a, n)
      }
      return [
        o ? o.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild
      ]
    }
  },
  Hv = Symbol('_vtc')
function Gv(t, e, n) {
  const i = t[Hv]
  i && (e = (e ? [e, ...i] : [...i]).join(' ')),
    e == null
      ? t.removeAttribute('class')
      : n
        ? t.setAttribute('class', e)
        : (t.className = e)
}
const Wa = Symbol('_vod'),
  og = Symbol('_vsh'),
  Wv = {
    beforeMount(t, { value: e }, { transition: n }) {
      ;(t[Wa] = t.style.display === 'none' ? '' : t.style.display),
        n && e ? n.beforeEnter(t) : Hs(t, e)
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t)
    },
    updated(t, { value: e, oldValue: n }, { transition: i }) {
      !e != !n &&
        (i
          ? e
            ? (i.beforeEnter(t), Hs(t, !0), i.enter(t))
            : i.leave(t, () => {
                Hs(t, !1)
              })
          : Hs(t, e))
    },
    beforeUnmount(t, { value: e }) {
      Hs(t, e)
    }
  }
function Hs(t, e) {
  ;(t.style.display = e ? t[Wa] : 'none'), (t[og] = !e)
}
const Uv = Symbol(''),
  qv = /(^|;)\s*display\s*:/
function Yv(t, e, n) {
  const i = t.style,
    r = at(n)
  let s = !1
  if (n && !r) {
    if (e)
      if (at(e))
        for (const o of e.split(';')) {
          const a = o.slice(0, o.indexOf(':')).trim()
          n[a] == null && Ca(i, a, '')
        }
      else for (const o in e) n[o] == null && Ca(i, o, '')
    for (const o in n) o === 'display' && (s = !0), Ca(i, o, n[o])
  } else if (r) {
    if (e !== n) {
      const o = i[Uv]
      o && (n += ';' + o), (i.cssText = n), (s = qv.test(n))
    }
  } else e && t.removeAttribute('style')
  Wa in t && ((t[Wa] = s ? i.display : ''), t[og] && (i.display = 'none'))
}
const rd = /\s*!important$/
function Ca(t, e, n) {
  if (fe(n)) n.forEach((i) => Ca(t, e, i))
  else if ((n == null && (n = ''), e.startsWith('--'))) t.setProperty(e, n)
  else {
    const i = Xv(t, e)
    rd.test(n)
      ? t.setProperty(Nr(i), n.replace(rd, ''), 'important')
      : (t[i] = n)
  }
}
const sd = ['Webkit', 'Moz', 'ms'],
  Ul = {}
function Xv(t, e) {
  const n = Ul[e]
  if (n) return n
  let i = zn(e)
  if (i !== 'filter' && i in t) return (Ul[e] = i)
  i = dl(i)
  for (let r = 0; r < sd.length; r++) {
    const s = sd[r] + i
    if (s in t) return (Ul[e] = s)
  }
  return e
}
const od = 'http://www.w3.org/1999/xlink'
function ad(t, e, n, i, r, s = s0(e)) {
  i && e.startsWith('xlink:')
    ? n == null
      ? t.removeAttributeNS(od, e.slice(6, e.length))
      : t.setAttributeNS(od, e, n)
    : n == null || (s && !rh(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, s ? '' : Ri(n) ? String(n) : n)
}
function ld(t, e, n, i, r) {
  if (e === 'innerHTML' || e === 'textContent') {
    n != null && (t[e] = e === 'innerHTML' ? sg(n) : n)
    return
  }
  const s = t.tagName
  if (e === 'value' && s !== 'PROGRESS' && !s.includes('-')) {
    const a = s === 'OPTION' ? t.getAttribute('value') || '' : t.value,
      l = n == null ? (t.type === 'checkbox' ? 'on' : '') : String(n)
    ;(a !== l || !('_value' in t)) && (t.value = l),
      n == null && t.removeAttribute(e),
      (t._value = n)
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const a = typeof t[e]
    a === 'boolean'
      ? (n = rh(n))
      : n == null && a === 'string'
        ? ((n = ''), (o = !0))
        : a === 'number' && ((n = 0), (o = !0))
  }
  try {
    t[e] = n
  } catch {}
  o && t.removeAttribute(r || e)
}
function Kv(t, e, n, i) {
  t.addEventListener(e, n, i)
}
function Qv(t, e, n, i) {
  t.removeEventListener(e, n, i)
}
const cd = Symbol('_vei')
function Zv(t, e, n, i, r = null) {
  const s = t[cd] || (t[cd] = {}),
    o = s[e]
  if (i && o) o.value = i
  else {
    const [a, l] = Jv(e)
    if (i) {
      const c = (s[e] = nb(i, r))
      Kv(t, a, c, l)
    } else o && (Qv(t, a, o, l), (s[e] = void 0))
  }
}
const ud = /(?:Once|Passive|Capture)$/
function Jv(t) {
  let e
  if (ud.test(t)) {
    e = {}
    let i
    for (; (i = t.match(ud)); )
      (t = t.slice(0, t.length - i[0].length)), (e[i[0].toLowerCase()] = !0)
  }
  return [t[2] === ':' ? t.slice(3) : Nr(t.slice(2)), e]
}
let ql = 0
const eb = Promise.resolve(),
  tb = () => ql || (eb.then(() => (ql = 0)), (ql = Date.now()))
function nb(t, e) {
  const n = (i) => {
    if (!i._vts) i._vts = Date.now()
    else if (i._vts <= n.attached) return
    pi(ib(i, n.value), e, 5, [i])
  }
  return (n.value = t), (n.attached = tb()), n
}
function ib(t, e) {
  if (fe(e)) {
    const n = t.stopImmediatePropagation
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0)
      }),
      e.map((i) => (r) => !r._stopped && i && i(r))
    )
  } else return e
}
const fd = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  rb = (t, e, n, i, r, s) => {
    const o = r === 'svg'
    e === 'class'
      ? Gv(t, i, o)
      : e === 'style'
        ? Yv(t, n, i)
        : cl(e)
          ? Ru(e) || Zv(t, e, n, i, s)
          : (
                e[0] === '.'
                  ? ((e = e.slice(1)), !0)
                  : e[0] === '^'
                    ? ((e = e.slice(1)), !1)
                    : sb(t, e, i, o)
              )
            ? (ld(t, e, i),
              !t.tagName.includes('-') &&
                (e === 'value' || e === 'checked' || e === 'selected') &&
                ad(t, e, i, o, s, e !== 'value'))
            : t._isVueCE && (/[A-Z]/.test(e) || !at(i))
              ? ld(t, zn(e), i, s, e)
              : (e === 'true-value'
                  ? (t._trueValue = i)
                  : e === 'false-value' && (t._falseValue = i),
                ad(t, e, i, o))
  }
function sb(t, e, n, i) {
  if (i)
    return !!(
      e === 'innerHTML' ||
      e === 'textContent' ||
      (e in t && fd(e) && pe(n))
    )
  if (
    e === 'spellcheck' ||
    e === 'draggable' ||
    e === 'translate' ||
    e === 'form' ||
    (e === 'list' && t.tagName === 'INPUT') ||
    (e === 'type' && t.tagName === 'TEXTAREA')
  )
    return !1
  if (e === 'width' || e === 'height') {
    const r = t.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return fd(e) && at(n) ? !1 : e in t
}
const ob = $t({ patchProp: rb }, Vv)
let dd
function ab() {
  return dd || (dd = dv(ob))
}
const lb = (...t) => {
  const e = ab().createApp(...t),
    { mount: n } = e
  return (
    (e.mount = (i) => {
      const r = ub(i)
      if (!r) return
      const s = e._component
      !pe(s) && !s.render && !s.template && (s.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = '')
      const o = n(r, !1, cb(r))
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        o
      )
    }),
    e
  )
}
function cb(t) {
  if (t instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && t instanceof MathMLElement)
    return 'mathml'
}
function ub(t) {
  return at(t) ? document.querySelector(t) : t
}
const fb = '' + new URL('../assets/svg/footer-logo.svg', import.meta.url).href,
  db = '' + new URL('../img/fixed-btn-01.png', import.meta.url).href,
  pb = '' + new URL('../img/fixed-btn-02.png', import.meta.url).href,
  hb = '' + new URL('../img/go-top.svg', import.meta.url).href,
  gb = { class: 'bg-white tracking-wide md:bg-transparent' },
  mb = {
    __name: 'Footer',
    setup(t) {
      const e = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return (n, i) => (
        bt(),
        nn('footer', gb, [
          i[2] ||
            (i[2] = Ls(
              '<div class="container mx-auto flex flex-wrap items-center justify-between gap-5 px-3 py-5 text-sm"><div class="flex grow flex-wrap items-center gap-2"><a class="mx-auto md:mx-0" href="#" target="_blank"><img class="max-f-full" width="120" src="' +
                fb +
                '" alt="logo"></a><div><ul class="mb-2 flex flex-wrap divide-x"><li class="px-2"><a href="https://futureparenting.cwgv.com.tw/" title="未來親子學習平台" target="_blank">未來親子學習平台</a></li><li class="px-2"><a href="https://futureparenting.cwgv.com.tw/kids" title="小天下 / 未來出版" target="_blank">小天下 / 未來出版</a></li><li class="px-2"><a href="https://futureparenting.cwgv.com.tw/junior" title="未來兒童" target="_blank">未來兒童 </a></li><li class="px-2"><a href="https://futureparenting.cwgv.com.tw/youth" title="未來少年" target="_blank">未來少年</a></li><li class="px-2"><a href="https://futureparenting.cwgv.com.tw/family" title="未來Family" target="_blank">未來Family</a></li></ul><div class="px-2"> Copyright © 未來親子學習平台﹒All rights reserved. </div></div></div><div><ul class="mb-2 flex flex-wrap divide-x text-end"><li class="px-2"><a href="https://futuredata.cwgv.com.tw/copyright/index/A" title="著作權聲明" target="_blank">著作權聲明</a></li><li class="px-2"><a href="https://futuredata.cwgv.com.tw/copyright/index/B" title="隱私權政策" target="_blank">隱私權政策</a></li></ul><ul class="flex divide-x text-end"><li class="px-2"><a href="https://futuredata.cwgv.com.tw/copyright/index/C" title="個資保護聲明" target="_blank">個資保護聲明</a></li><li class="px-2"><a href="https://futuredata.cwgv.com.tw/qa" title="QA" target="_blank">常見問題</a></li></ul></div></div>',
              1
            )),
          R(
            'div',
            { class: 'fixed bottom-5 end-3 flex flex-col items-center gap-3' },
            [
              i[0] ||
                (i[0] = R(
                  'img',
                  { width: '80', height: '80', src: db, alt: '' },
                  null,
                  -1
                )),
              i[1] ||
                (i[1] = R(
                  'img',
                  { width: '80', height: '80', src: pb, alt: '' },
                  null,
                  -1
                )),
              R('img', {
                onClick: e,
                class: 'cursor-pointer',
                width: '40',
                height: '40',
                src: hb,
                alt: ''
              })
            ]
          )
        ])
      )
    }
  },
  _b = '' + new URL('../img/sponsor/logo01.jpg', import.meta.url).href,
  vb = '' + new URL('../img/sponsor/logo02.jpg', import.meta.url).href,
  bb = '' + new URL('../img/sponsor/logo03.jpg', import.meta.url).href,
  yb = '' + new URL('../img/sponsor/logo04.png', import.meta.url).href,
  wb = '' + new URL('../img/sponsor/logo05.png', import.meta.url).href,
  xb = '' + new URL('../img/sponsor/logo06.png', import.meta.url).href,
  Sb = {
    __name: 'Manufacturer',
    setup(t) {
      return (e, n) => (
        bt(),
        nn(
          'div',
          null,
          n[0] ||
            (n[0] = [
              Ls(
                '<div class="container"><div><div class="mb-3 py-3 font-bold"> 主辦單位 </div><div class="flex gap-3"><a href="#" target="_blank"><img src="' +
                  _b +
                  '" alt=""></a><a href="#" target="_blank"><img src="' +
                  vb +
                  '" alt=""></a></div></div><div><div class="mb-3 py-3 font-bold"> 協辦單位 </div><div class="flex gap-3"><a href="#" target="_blank"><img src="' +
                  bb +
                  '" alt=""></a></div></div><div><div class="mb-3 py-3 font-bold"> 共同主辦 </div><div class="flex gap-3"><a href="#" target="_blank"><img src="' +
                  yb +
                  '" alt=""></a><a href="#" target="_blank"><img src="' +
                  wb +
                  '" alt=""></a><a href="#" target="_blank"><img src="' +
                  xb +
                  '" alt=""></a></div></div></div>',
                1
              )
            ])
        )
      )
    }
  },
  Tb = '' + new URL('../assets/svg/logo.svg', import.meta.url).href,
  Qo = (t, e) => {
    const n = t.__vccOpts || t
    for (const [i, r] of e) n[i] = r
    return n
  },
  Eb = {},
  Cb = { class: 'sticky top-0 z-10 bg-primary-500 px-3 py-3' },
  Pb = { class: 'container flex items-center justify-between px-3' },
  Ob = { class: 'flex items-center gap-5' }
function Ab(t, e) {
  const n = yl('router-link')
  return (
    bt(),
    nn('nav', Cb, [
      R('div', Pb, [
        R('h1', null, [
          Pe(
            n,
            { to: '/' },
            {
              default: tn(
                () =>
                  e[0] ||
                  (e[0] = [
                    R(
                      'img',
                      { src: Tb, alt: 'logo', width: '180', height: '90' },
                      null,
                      -1
                    )
                  ])
              ),
              _: 1
            }
          )
        ]),
        R('ul', Ob, [
          R('li', null, [
            Pe(
              n,
              { to: '/gift', class: 'text-xl font-bold text-white' },
              { default: tn(() => e[1] || (e[1] = [ve('互動好禮')])), _: 1 }
            )
          ]),
          R('li', null, [
            Pe(
              n,
              { to: '/game', class: 'text-xl font-bold text-white' },
              { default: tn(() => e[2] || (e[2] = [ve('闖關好樂')])), _: 1 }
            )
          ]),
          R('li', null, [
            Pe(
              n,
              { to: '/show', class: 'text-xl font-bold text-white' },
              { default: tn(() => e[3] || (e[3] = [ve('派對好秀')])), _: 1 }
            )
          ]),
          R('li', null, [
            Pe(
              n,
              { to: '/knowledge', class: 'text-xl font-bold text-white' },
              { default: tn(() => e[4] || (e[4] = [ve('知識好訊')])), _: 1 }
            )
          ])
        ])
      ])
    ])
  )
}
const Mb = Qo(Eb, [['render', Ab]]),
  kb = '' + new URL('../img/speed-line.png', import.meta.url).href,
  Rb = '' + new URL('../img/hero-img.png', import.meta.url).href,
  pd = gt(!1)
function Xu() {
  return {
    isLoading: pd,
    setLoading: (e) => {
      pd.value = e
    }
  }
}
function wi(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return t
}
function ag(t, e) {
  ;(t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e)
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var yn = {
    autoSleep: 120,
    force3D: 'auto',
    nullTargetWarn: 1,
    units: { lineHeight: '' }
  },
  vs = { duration: 0.5, overwrite: !1, delay: 0 },
  Ku,
  Nt,
  Ge,
  Mn = 1e8,
  Fe = 1 / Mn,
  Uc = Math.PI * 2,
  Lb = Uc / 4,
  Db = 0,
  lg = Math.sqrt,
  Ib = Math.cos,
  zb = Math.sin,
  yt = function (e) {
    return typeof e == 'string'
  },
  Je = function (e) {
    return typeof e == 'function'
  },
  Ai = function (e) {
    return typeof e == 'number'
  },
  Qu = function (e) {
    return typeof e > 'u'
  },
  hi = function (e) {
    return typeof e == 'object'
  },
  rn = function (e) {
    return e !== !1
  },
  Zu = function () {
    return typeof window < 'u'
  },
  aa = function (e) {
    return Je(e) || yt(e)
  },
  cg =
    (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
  Bt = Array.isArray,
  qc = /(?:-?\.?\d|\.)+/gi,
  ug = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Qr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Yl = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  fg = /[+-]=-?[.\d]+/,
  dg = /[^,'"\[\]\s]+/gi,
  Nb = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Xe,
  ni,
  Yc,
  Ju,
  wn = {},
  Ua = {},
  pg,
  hg = function (e) {
    return (Ua = Ar(e, wn)) && ln
  },
  ef = function (e, n) {
    return console.warn(
      'Invalid property',
      e,
      'set to',
      n,
      'Missing plugin? gsap.registerPlugin()'
    )
  },
  zo = function (e, n) {
    return !n && console.warn(e)
  },
  gg = function (e, n) {
    return (e && (wn[e] = n) && Ua && (Ua[e] = n)) || wn
  },
  No = function () {
    return 0
  },
  Bb = { suppressEvents: !0, isStart: !0, kill: !1 },
  Pa = { suppressEvents: !0, kill: !1 },
  $b = { suppressEvents: !0 },
  tf = {},
  qi = [],
  Xc = {},
  mg,
  hn = {},
  Xl = {},
  hd = 30,
  Oa = [],
  nf = '',
  rf = function (e) {
    var n = e[0],
      i,
      r
    if ((hi(n) || Je(n) || (e = [e]), !(i = (n._gsap || {}).harness))) {
      for (r = Oa.length; r-- && !Oa[r].targetTest(n); );
      i = Oa[r]
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Fg(e[r], i)))) || e.splice(r, 1)
    return e
  },
  br = function (e) {
    return e._gsap || rf(kn(e))[0]._gsap
  },
  _g = function (e, n, i) {
    return (i = e[n]) && Je(i)
      ? e[n]()
      : (Qu(i) && e.getAttribute && e.getAttribute(n)) || i
  },
  sn = function (e, n) {
    return (e = e.split(',')).forEach(n) || e
  },
  tt = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  vt = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0
  },
  ls = function (e, n) {
    var i = n.charAt(0),
      r = parseFloat(n.substr(2))
    return (
      (e = parseFloat(e)),
      i === '+' ? e + r : i === '-' ? e - r : i === '*' ? e * r : e / r
    )
  },
  Fb = function (e, n) {
    for (var i = n.length, r = 0; e.indexOf(n[r]) < 0 && ++r < i; );
    return r < i
  },
  qa = function () {
    var e = qi.length,
      n = qi.slice(0),
      i,
      r
    for (Xc = {}, qi.length = 0, i = 0; i < e; i++)
      (r = n[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
  },
  vg = function (e, n, i, r) {
    qi.length && !Nt && qa(),
      e.render(n, i, Nt && n < 0 && (e._initted || e._startAt)),
      qi.length && !Nt && qa()
  },
  bg = function (e) {
    var n = parseFloat(e)
    return (n || n === 0) && (e + '').match(dg).length < 2
      ? n
      : yt(e)
        ? e.trim()
        : e
  },
  yg = function (e) {
    return e
  },
  Nn = function (e, n) {
    for (var i in n) i in e || (e[i] = n[i])
    return e
  },
  jb = function (e) {
    return function (n, i) {
      for (var r in i)
        r in n || (r === 'duration' && e) || r === 'ease' || (n[r] = i[r])
    }
  },
  Ar = function (e, n) {
    for (var i in n) e[i] = n[i]
    return e
  },
  gd = function t(e, n) {
    for (var i in n)
      i !== '__proto__' &&
        i !== 'constructor' &&
        i !== 'prototype' &&
        (e[i] = hi(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i])
    return e
  },
  Ya = function (e, n) {
    var i = {},
      r
    for (r in e) r in n || (i[r] = e[r])
    return i
  },
  po = function (e) {
    var n = e.parent || Xe,
      i = e.keyframes ? jb(Bt(e.keyframes)) : Nn
    if (rn(e.inherit))
      for (; n; ) i(e, n.vars.defaults), (n = n.parent || n._dp)
    return e
  },
  Vb = function (e, n) {
    for (var i = e.length, r = i === n.length; r && i-- && e[i] === n[i]; );
    return i < 0
  },
  wg = function (e, n, i, r, s) {
    var o = e[r],
      a
    if (s) for (a = n[s]; o && o[s] > a; ) o = o._prev
    return (
      o ? ((n._next = o._next), (o._next = n)) : ((n._next = e[i]), (e[i] = n)),
      n._next ? (n._next._prev = n) : (e[r] = n),
      (n._prev = o),
      (n.parent = n._dp = e),
      n
    )
  },
  Tl = function (e, n, i, r) {
    i === void 0 && (i = '_first'), r === void 0 && (r = '_last')
    var s = n._prev,
      o = n._next
    s ? (s._next = o) : e[i] === n && (e[i] = o),
      o ? (o._prev = s) : e[r] === n && (e[r] = s),
      (n._next = n._prev = n.parent = null)
  },
  Ki = function (e, n) {
    e.parent &&
      (!n || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0)
  },
  yr = function (e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent)
    return e
  },
  Hb = function (e) {
    for (var n = e.parent; n && n.parent; )
      (n._dirty = 1), n.totalDuration(), (n = n.parent)
    return e
  },
  Kc = function (e, n, i, r) {
    return (
      e._startAt &&
      (Nt
        ? e._startAt.revert(Pa)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(n, !0, r))
    )
  },
  Gb = function t(e) {
    return !e || (e._ts && t(e.parent))
  },
  md = function (e) {
    return e._repeat ? bs(e._tTime, (e = e.duration() + e._rDelay)) * e : 0
  },
  bs = function (e, n) {
    var i = Math.floor((e /= n))
    return e && i === e ? i - 1 : i
  },
  Xa = function (e, n) {
    return (
      (e - n._start) * n._ts +
      (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    )
  },
  El = function (e) {
    return (e._end = vt(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || Fe) || 0)
    ))
  },
  Cl = function (e, n) {
    var i = e._dp
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = vt(
          i._time -
            (e._ts > 0
              ? n / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
        )),
        El(e),
        i._dirty || yr(i, e)),
      e
    )
  },
  xg = function (e, n) {
    var i
    if (
      ((n._time ||
        (!n._dur && n._initted) ||
        (n._start < e._time && (n._dur || !n.add))) &&
        ((i = Xa(e.rawTime(), n)),
        (!n._dur || Zo(0, n.totalDuration(), i) - n._tTime > Fe) &&
          n.render(i, !0)),
      yr(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp)
      e._zTime = -Fe
    }
  },
  si = function (e, n, i, r) {
    return (
      n.parent && Ki(n),
      (n._start = vt(
        (Ai(i) ? i : i || e !== Xe ? Cn(e, i, n) : e._time) + n._delay
      )),
      (n._end = vt(
        n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
      )),
      wg(e, n, '_first', '_last', e._sort ? '_start' : 0),
      Qc(n) || (e._recent = n),
      r || xg(e, n),
      e._ts < 0 && Cl(e, e._tTime),
      e
    )
  },
  Sg = function (e, n) {
    return (
      (wn.ScrollTrigger || ef('scrollTrigger', n)) &&
      wn.ScrollTrigger.create(n, e)
    )
  },
  Tg = function (e, n, i, r, s) {
    if ((of(e, n, s), !e._initted)) return 1
    if (
      !i &&
      e._pt &&
      !Nt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      mg !== mn.frame
    )
      return qi.push(e), (e._lazy = [s, r]), 1
  },
  Wb = function t(e) {
    var n = e.parent
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
  },
  Qc = function (e) {
    var n = e.data
    return n === 'isFromStart' || n === 'isStart'
  },
  Ub = function (e, n, i, r) {
    var s = e.ratio,
      o =
        n < 0 ||
        (!n &&
          ((!e._start && Wb(e) && !(!e._initted && Qc(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Qc(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      c,
      u,
      f
    if (
      (a &&
        e._repeat &&
        ((l = Zo(0, e._tDur, n)),
        (u = bs(l, a)),
        e._yoyo && u & 1 && (o = 1 - o),
        u !== bs(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || Nt || r || e._zTime === Fe || (!n && e._zTime))
    ) {
      if (!e._initted && Tg(e, n, r, i, l)) return
      for (
        f = e._zTime,
          e._zTime = n || (i ? Fe : 0),
          i || (i = n && !f),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;

      )
        c.r(o, c.d), (c = c._next)
      n < 0 && Kc(e, n, i, !0),
        e._onUpdate && !i && bn(e, 'onUpdate'),
        l && e._repeat && !i && e.parent && bn(e, 'onRepeat'),
        (n >= e._tDur || n < 0) &&
          e.ratio === o &&
          (o && Ki(e, 1),
          !i &&
            !Nt &&
            (bn(e, o ? 'onComplete' : 'onReverseComplete', !0),
            e._prom && e._prom()))
    } else e._zTime || (e._zTime = n)
  },
  qb = function (e, n, i) {
    var r
    if (i > n)
      for (r = e._first; r && r._start <= i; ) {
        if (r.data === 'isPause' && r._start > n) return r
        r = r._next
      }
    else
      for (r = e._last; r && r._start >= i; ) {
        if (r.data === 'isPause' && r._start < n) return r
        r = r._prev
      }
  },
  ys = function (e, n, i, r) {
    var s = e._repeat,
      o = vt(n) || 0,
      a = e._tTime / e._tDur
    return (
      a && !r && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : vt(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !r && Cl(e, (e._tTime = e._tDur * a)),
      e.parent && El(e),
      i || yr(e.parent, e),
      e
    )
  },
  _d = function (e) {
    return e instanceof Yt ? yr(e) : ys(e, e._dur)
  },
  Yb = { _start: 0, endTime: No, totalDuration: No },
  Cn = function t(e, n, i) {
    var r = e.labels,
      s = e._recent || Yb,
      o = e.duration() >= Mn ? s.endTime(!1) : e._dur,
      a,
      l,
      c
    return yt(n) && (isNaN(n) || n in r)
      ? ((l = n.charAt(0)),
        (c = n.substr(-1) === '%'),
        (a = n.indexOf('=')),
        l === '<' || l === '>'
          ? (a >= 0 && (n = n.replace(/=/, '')),
            (l === '<' ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (c ? (a < 0 ? s : i).totalDuration() / 100 : 1))
          : a < 0
            ? (n in r || (r[n] = o), r[n])
            : ((l = parseFloat(n.charAt(a - 1) + n.substr(a + 1))),
              c && i && (l = (l / 100) * (Bt(i) ? i[0] : i).totalDuration()),
              a > 1 ? t(e, n.substr(0, a - 1), i) + l : o + l))
      : n == null
        ? o
        : +n
  },
  ho = function (e, n, i) {
    var r = Ai(n[1]),
      s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      o = n[s],
      a,
      l
    if ((r && (o.duration = n[1]), (o.parent = i), e)) {
      for (a = o, l = i; l && !('immediateRender' in a); )
        (a = l.vars.defaults || {}), (l = rn(l.vars.inherit) && l.parent)
      ;(o.immediateRender = rn(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = n[s - 1])
    }
    return new ot(n[0], o, n[s + 1])
  },
  tr = function (e, n) {
    return e || e === 0 ? n(e) : n
  },
  Zo = function (e, n, i) {
    return i < e ? e : i > n ? n : i
  },
  It = function (e, n) {
    return !yt(e) || !(n = Nb.exec(e)) ? '' : n[1]
  },
  Xb = function (e, n, i) {
    return tr(i, function (r) {
      return Zo(e, n, r)
    })
  },
  Zc = [].slice,
  Eg = function (e, n) {
    return (
      e &&
      hi(e) &&
      'length' in e &&
      ((!n && !e.length) || (e.length - 1 in e && hi(e[0]))) &&
      !e.nodeType &&
      e !== ni
    )
  },
  Kb = function (e, n, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (r) {
        var s
        return (yt(r) && !n) || Eg(r, 1)
          ? (s = i).push.apply(s, kn(r))
          : i.push(r)
      }) || i
    )
  },
  kn = function (e, n, i) {
    return Ge && !n && Ge.selector
      ? Ge.selector(e)
      : yt(e) && !i && (Yc || !ws())
        ? Zc.call((n || Ju).querySelectorAll(e), 0)
        : Bt(e)
          ? Kb(e, i)
          : Eg(e)
            ? Zc.call(e, 0)
            : e
              ? [e]
              : []
  },
  Jc = function (e) {
    return (
      (e = kn(e)[0] || zo('Invalid scope') || {}),
      function (n) {
        var i = e.current || e.nativeElement || e
        return kn(
          n,
          i.querySelectorAll
            ? i
            : i === e
              ? zo('Invalid scope') || Ju.createElement('div')
              : e
        )
      }
    )
  },
  Cg = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random()
    })
  },
  Pg = function (e) {
    if (Je(e)) return e
    var n = hi(e) ? e : { each: e },
      i = wr(n.ease),
      r = n.from || 0,
      s = parseFloat(n.base) || 0,
      o = {},
      a = r > 0 && r < 1,
      l = isNaN(r) || a,
      c = n.axis,
      u = r,
      f = r
    return (
      yt(r)
        ? (u = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && l && ((u = r[0]), (f = r[1])),
      function (p, d, g) {
        var h = (g || n).length,
          y = o[h],
          w,
          _,
          m,
          v,
          b,
          C,
          P,
          M,
          E
        if (!y) {
          if (((E = n.grid === 'auto' ? 0 : (n.grid || [1, Mn])[1]), !E)) {
            for (
              P = -Mn;
              P < (P = g[E++].getBoundingClientRect().left) && E < h;

            );
            E < h && E--
          }
          for (
            y = o[h] = [],
              w = l ? Math.min(E, h) * u - 0.5 : r % E,
              _ = E === Mn ? 0 : l ? (h * f) / E - 0.5 : (r / E) | 0,
              P = 0,
              M = Mn,
              C = 0;
            C < h;
            C++
          )
            (m = (C % E) - w),
              (v = _ - ((C / E) | 0)),
              (y[C] = b = c ? Math.abs(c === 'y' ? v : m) : lg(m * m + v * v)),
              b > P && (P = b),
              b < M && (M = b)
          r === 'random' && Cg(y),
            (y.max = P - M),
            (y.min = M),
            (y.v = h =
              (parseFloat(n.amount) ||
                parseFloat(n.each) *
                  (E > h
                    ? h - 1
                    : c
                      ? c === 'y'
                        ? h / E
                        : E
                      : Math.max(E, h / E)) ||
                0) * (r === 'edges' ? -1 : 1)),
            (y.b = h < 0 ? s - h : s),
            (y.u = It(n.amount || n.each) || 0),
            (i = i && h < 0 ? Ng(i) : i)
        }
        return (
          (h = (y[p] - y.min) / y.max || 0),
          vt(y.b + (i ? i(h) : h) * y.v) + y.u
        )
      }
    )
  },
  eu = function (e) {
    var n = Math.pow(10, ((e + '').split('.')[1] || '').length)
    return function (i) {
      var r = vt(Math.round(parseFloat(i) / e) * e * n)
      return (r - (r % 1)) / n + (Ai(i) ? 0 : It(i))
    }
  },
  Og = function (e, n) {
    var i = Bt(e),
      r,
      s
    return (
      !i &&
        hi(e) &&
        ((r = i = e.radius || Mn),
        e.values
          ? ((e = kn(e.values)), (s = !Ai(e[0])) && (r *= r))
          : (e = eu(e.increment))),
      tr(
        n,
        i
          ? Je(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= r ? s : o
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    c = Mn,
                    u = 0,
                    f = e.length,
                    p,
                    d;
                  f--;

                )
                  s
                    ? ((p = e[f].x - a), (d = e[f].y - l), (p = p * p + d * d))
                    : (p = Math.abs(e[f] - a)),
                    p < c && ((c = p), (u = f))
                return (
                  (u = !r || c <= r ? e[u] : o),
                  s || u === o || Ai(o) ? u : u + It(o)
                )
              }
          : eu(e)
      )
    )
  },
  Ag = function (e, n, i, r) {
    return tr(Bt(e) ? !n : i === !0 ? !!(i = 0) : !r, function () {
      return Bt(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
            Math.floor(
              Math.round((e - i / 2 + Math.random() * (n - e + i * 0.99)) / i) *
                i *
                r
            ) / r
    })
  },
  Qb = function () {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
      n[i] = arguments[i]
    return function (r) {
      return n.reduce(function (s, o) {
        return o(s)
      }, r)
    }
  },
  Zb = function (e, n) {
    return function (i) {
      return e(parseFloat(i)) + (n || It(i))
    }
  },
  Jb = function (e, n, i) {
    return kg(e, n, 0, 1, i)
  },
  Mg = function (e, n, i) {
    return tr(i, function (r) {
      return e[~~n(r)]
    })
  },
  ey = function t(e, n, i) {
    var r = n - e
    return Bt(e)
      ? Mg(e, t(0, e.length), n)
      : tr(i, function (s) {
          return ((r + ((s - e) % r)) % r) + e
        })
  },
  ty = function t(e, n, i) {
    var r = n - e,
      s = r * 2
    return Bt(e)
      ? Mg(e, t(0, e.length - 1), n)
      : tr(i, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > r ? s - o : o)
        })
  },
  Bo = function (e) {
    for (var n = 0, i = '', r, s, o, a; ~(r = e.indexOf('random(', n)); )
      (o = e.indexOf(')', r)),
        (a = e.charAt(r + 7) === '['),
        (s = e.substr(r + 7, o - r - 7).match(a ? dg : qc)),
        (i +=
          e.substr(n, r - n) + Ag(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (n = o + 1)
    return i + e.substr(n, e.length - n)
  },
  kg = function (e, n, i, r, s) {
    var o = n - e,
      a = r - i
    return tr(s, function (l) {
      return i + (((l - e) / o) * a || 0)
    })
  },
  ny = function t(e, n, i, r) {
    var s = isNaN(e + n)
      ? 0
      : function (d) {
          return (1 - d) * e + d * n
        }
    if (!s) {
      var o = yt(e),
        a = {},
        l,
        c,
        u,
        f,
        p
      if ((i === !0 && (r = 1) && (i = null), o)) (e = { p: e }), (n = { p: n })
      else if (Bt(e) && !Bt(n)) {
        for (u = [], f = e.length, p = f - 2, c = 1; c < f; c++)
          u.push(t(e[c - 1], e[c]))
        f--,
          (s = function (g) {
            g *= f
            var h = Math.min(p, ~~g)
            return u[h](g - h)
          }),
          (i = n)
      } else r || (e = Ar(Bt(e) ? [] : {}, e))
      if (!u) {
        for (l in n) sf.call(a, e, l, 'get', n[l])
        s = function (g) {
          return cf(g, a) || (o ? e.p : e)
        }
      }
    }
    return tr(i, s)
  },
  vd = function (e, n, i) {
    var r = e.labels,
      s = Mn,
      o,
      a,
      l
    for (o in r)
      (a = r[o] - n),
        a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a))
    return l
  },
  bn = function (e, n, i) {
    var r = e.vars,
      s = r[n],
      o = Ge,
      a = e._ctx,
      l,
      c,
      u
    if (s)
      return (
        (l = r[n + 'Params']),
        (c = r.callbackScope || e),
        i && qi.length && qa(),
        a && (Ge = a),
        (u = l ? s.apply(c, l) : s.call(c)),
        (Ge = o),
        u
      )
  },
  Js = function (e) {
    return (
      Ki(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Nt),
      e.progress() < 1 && bn(e, 'onInterrupt'),
      e
    )
  },
  Zr,
  Rg = [],
  Lg = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Zu() || e.headless)) {
        var n = e.name,
          i = Je(e),
          r =
            n && !i && e.init
              ? function () {
                  this._props = []
                }
              : e,
          s = {
            init: No,
            render: cf,
            add: sf,
            kill: vy,
            modifier: _y,
            rawVars: 0
          },
          o = { targetTest: 0, get: 0, getSetter: lf, aliases: {}, register: 0 }
        if ((ws(), e !== r)) {
          if (hn[n]) return
          Nn(r, Nn(Ya(e, s), o)),
            Ar(r.prototype, Ar(s, Ya(e, o))),
            (hn[(r.prop = n)] = r),
            e.targetTest && (Oa.push(r), (tf[n] = 1)),
            (n =
              (n === 'css' ? 'CSS' : n.charAt(0).toUpperCase() + n.substr(1)) +
              'Plugin')
        }
        gg(n, r), e.register && e.register(ln, r, on)
      } else Rg.push(e)
  },
  ze = 255,
  eo = {
    aqua: [0, ze, ze],
    lime: [0, ze, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ze],
    navy: [0, 0, 128],
    white: [ze, ze, ze],
    olive: [128, 128, 0],
    yellow: [ze, ze, 0],
    orange: [ze, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ze, 0, 0],
    pink: [ze, 192, 203],
    cyan: [0, ze, ze],
    transparent: [ze, ze, ze, 0]
  },
  Kl = function (e, n, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? n + (i - n) * e * 6
        : e < 0.5
          ? i
          : e * 3 < 2
            ? n + (i - n) * (2 / 3 - e) * 6
            : n) *
        ze +
        0.5) |
        0
    )
  },
  Dg = function (e, n, i) {
    var r = e ? (Ai(e) ? [e >> 16, (e >> 8) & ze, e & ze] : 0) : eo.black,
      s,
      o,
      a,
      l,
      c,
      u,
      f,
      p,
      d,
      g
    if (!r) {
      if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), eo[e]))
        r = eo[e]
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
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & ze, r & ze, parseInt(e.substr(7), 16) / 255]
          )
        ;(e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & ze, e & ze])
      } else if (e.substr(0, 3) === 'hsl') {
        if (((r = g = e.match(qc)), !n))
          (l = (+r[0] % 360) / 360),
            (c = +r[1] / 100),
            (u = +r[2] / 100),
            (o = u <= 0.5 ? u * (c + 1) : u + c - u * c),
            (s = u * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Kl(l + 1 / 3, s, o)),
            (r[1] = Kl(l, s, o)),
            (r[2] = Kl(l - 1 / 3, s, o))
        else if (~e.indexOf('='))
          return (r = e.match(ug)), i && r.length < 4 && (r[3] = 1), r
      } else r = e.match(qc) || eo.transparent
      r = r.map(Number)
    }
    return (
      n &&
        !g &&
        ((s = r[0] / ze),
        (o = r[1] / ze),
        (a = r[2] / ze),
        (f = Math.max(s, o, a)),
        (p = Math.min(s, o, a)),
        (u = (f + p) / 2),
        f === p
          ? (l = c = 0)
          : ((d = f - p),
            (c = u > 0.5 ? d / (2 - f - p) : d / (f + p)),
            (l =
              f === s
                ? (o - a) / d + (o < a ? 6 : 0)
                : f === o
                  ? (a - s) / d + 2
                  : (s - o) / d + 4),
            (l *= 60)),
        (r[0] = ~~(l + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(u * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    )
  },
  Ig = function (e) {
    var n = [],
      i = [],
      r = -1
    return (
      e.split(Yi).forEach(function (s) {
        var o = s.match(Qr) || []
        n.push.apply(n, o), i.push((r += o.length + 1))
      }),
      (n.c = i),
      n
    )
  },
  bd = function (e, n, i) {
    var r = '',
      s = (e + r).match(Yi),
      o = n ? 'hsla(' : 'rgba(',
      a = 0,
      l,
      c,
      u,
      f
    if (!s) return e
    if (
      ((s = s.map(function (p) {
        return (
          (p = Dg(p, n, 1)) &&
          o +
            (n ? p[0] + ',' + p[1] + '%,' + p[2] + '%,' + p[3] : p.join(',')) +
            ')'
        )
      })),
      i && ((u = Ig(e)), (l = i.c), l.join(r) !== u.c.join(r)))
    )
      for (c = e.replace(Yi, '1').split(Qr), f = c.length - 1; a < f; a++)
        r +=
          c[a] +
          (~l.indexOf(a)
            ? s.shift() || o + '0,0,0,0)'
            : (u.length ? u : s.length ? s : i).shift())
    if (!c) for (c = e.split(Yi), f = c.length - 1; a < f; a++) r += c[a] + s[a]
    return r + c[f]
  },
  Yi = (function () {
    var t =
        '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
      e
    for (e in eo) t += '|' + e + '\\b'
    return new RegExp(t + ')', 'gi')
  })(),
  iy = /hsl[a]?\(/,
  zg = function (e) {
    var n = e.join(' '),
      i
    if (((Yi.lastIndex = 0), Yi.test(n)))
      return (
        (i = iy.test(n)),
        (e[1] = bd(e[1], i)),
        (e[0] = bd(e[0], i, Ig(e[1]))),
        !0
      )
  },
  $o,
  mn = (function () {
    var t = Date.now,
      e = 500,
      n = 33,
      i = t(),
      r = i,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      c,
      u,
      f,
      p,
      d,
      g = function h(y) {
        var w = t() - r,
          _ = y === !0,
          m,
          v,
          b,
          C
        if (
          ((w > e || w < 0) && (i += w - n),
          (r += w),
          (b = r - i),
          (m = b - o),
          (m > 0 || _) &&
            ((C = ++f.frame),
            (p = b - f.time * 1e3),
            (f.time = b = b / 1e3),
            (o += m + (m >= s ? 4 : s - m)),
            (v = 1)),
          _ || (l = c(h)),
          v)
        )
          for (d = 0; d < a.length; d++) a[d](b, p, C, y)
      }
    return (
      (f = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0)
        },
        deltaRatio: function (y) {
          return p / (1e3 / (y || 60))
        },
        wake: function () {
          pg &&
            (!Yc &&
              Zu() &&
              ((ni = Yc = window),
              (Ju = ni.document || {}),
              (wn.gsap = ln),
              (ni.gsapVersions || (ni.gsapVersions = [])).push(ln.version),
              hg(Ua || ni.GreenSockGlobals || (!ni.gsap && ni) || {}),
              Rg.forEach(Lg)),
            (u = typeof requestAnimationFrame < 'u' && requestAnimationFrame),
            l && f.sleep(),
            (c =
              u ||
              function (y) {
                return setTimeout(y, (o - f.time * 1e3 + 1) | 0)
              }),
            ($o = 1),
            g(2))
        },
        sleep: function () {
          ;(u ? cancelAnimationFrame : clearTimeout)(l), ($o = 0), (c = No)
        },
        lagSmoothing: function (y, w) {
          ;(e = y || 1 / 0), (n = Math.min(w || 33, e))
        },
        fps: function (y) {
          ;(s = 1e3 / (y || 240)), (o = f.time * 1e3 + s)
        },
        add: function (y, w, _) {
          var m = w
            ? function (v, b, C, P) {
                y(v, b, C, P), f.remove(m)
              }
            : y
          return f.remove(y), a[_ ? 'unshift' : 'push'](m), ws(), m
        },
        remove: function (y, w) {
          ~(w = a.indexOf(y)) && a.splice(w, 1) && d >= w && d--
        },
        _listeners: a
      }),
      f
    )
  })(),
  ws = function () {
    return !$o && mn.wake()
  },
  Ce = {},
  ry = /^[\d.\-M][\d.\-,\s]/,
  sy = /["']/g,
  oy = function (e) {
    for (
      var n = {},
        i = e.substr(1, e.length - 3).split(':'),
        r = i[0],
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
        (n[r] = isNaN(c) ? c.replace(sy, '').trim() : +c),
        (r = l.substr(a + 1).trim())
    return n
  },
  ay = function (e) {
    var n = e.indexOf('(') + 1,
      i = e.indexOf(')'),
      r = e.indexOf('(', n)
    return e.substring(n, ~r && r < i ? e.indexOf(')', i + 1) : i)
  },
  ly = function (e) {
    var n = (e + '').split('('),
      i = Ce[n[0]]
    return i && n.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf('{') ? [oy(n[1])] : ay(e).split(',').map(bg)
        )
      : Ce._CE && ry.test(e)
        ? Ce._CE('', e)
        : i
  },
  Ng = function (e) {
    return function (n) {
      return 1 - e(1 - n)
    }
  },
  Bg = function t(e, n) {
    for (var i = e._first, r; i; )
      i instanceof Yt
        ? t(i, n)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== n &&
          (i.timeline
            ? t(i.timeline, n)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = n))),
        (i = i._next)
  },
  wr = function (e, n) {
    return (e && (Je(e) ? e : Ce[e] || ly(e))) || n
  },
  Br = function (e, n, i, r) {
    i === void 0 &&
      (i = function (l) {
        return 1 - n(1 - l)
      }),
      r === void 0 &&
        (r = function (l) {
          return l < 0.5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2
        })
    var s = { easeIn: n, easeOut: i, easeInOut: r },
      o
    return (
      sn(e, function (a) {
        ;(Ce[a] = wn[a] = s), (Ce[(o = a.toLowerCase())] = i)
        for (var l in s)
          Ce[
            o + (l === 'easeIn' ? '.in' : l === 'easeOut' ? '.out' : '.inOut')
          ] = Ce[a + '.' + l] = s[l]
      }),
      s
    )
  },
  $g = function (e) {
    return function (n) {
      return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2
    }
  },
  Ql = function t(e, n, i) {
    var r = n >= 1 ? n : 1,
      s = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (s / Uc) * (Math.asin(1 / r) || 0),
      a = function (u) {
        return u === 1 ? 1 : r * Math.pow(2, -10 * u) * zb((u - o) * s) + 1
      },
      l =
        e === 'out'
          ? a
          : e === 'in'
            ? function (c) {
                return 1 - a(1 - c)
              }
            : $g(a)
    return (
      (s = Uc / s),
      (l.config = function (c, u) {
        return t(e, c, u)
      }),
      l
    )
  },
  Zl = function t(e, n) {
    n === void 0 && (n = 1.70158)
    var i = function (o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0
      },
      r =
        e === 'out'
          ? i
          : e === 'in'
            ? function (s) {
                return 1 - i(1 - s)
              }
            : $g(i)
    return (
      (r.config = function (s) {
        return t(e, s)
      }),
      r
    )
  }
sn('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
  var n = e < 5 ? e + 1 : e
  Br(
    t + ',Power' + (n - 1),
    e
      ? function (i) {
          return Math.pow(i, n)
        }
      : function (i) {
          return i
        },
    function (i) {
      return 1 - Math.pow(1 - i, n)
    },
    function (i) {
      return i < 0.5 ? Math.pow(i * 2, n) / 2 : 1 - Math.pow((1 - i) * 2, n) / 2
    }
  )
})
Ce.Linear.easeNone = Ce.none = Ce.Linear.easeIn
Br('Elastic', Ql('in'), Ql('out'), Ql())
;(function (t, e) {
  var n = 1 / e,
    i = 2 * n,
    r = 2.5 * n,
    s = function (a) {
      return a < n
        ? t * a * a
        : a < i
          ? t * Math.pow(a - 1.5 / e, 2) + 0.75
          : a < r
            ? t * (a -= 2.25 / e) * a + 0.9375
            : t * Math.pow(a - 2.625 / e, 2) + 0.984375
    }
  Br(
    'Bounce',
    function (o) {
      return 1 - s(1 - o)
    },
    s
  )
})(7.5625, 2.75)
Br('Expo', function (t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0
})
Br('Circ', function (t) {
  return -(lg(1 - t * t) - 1)
})
Br('Sine', function (t) {
  return t === 1 ? 1 : -Ib(t * Lb) + 1
})
Br('Back', Zl('in'), Zl('out'), Zl())
Ce.SteppedEase =
  Ce.steps =
  wn.SteppedEase =
    {
      config: function (e, n) {
        e === void 0 && (e = 1)
        var i = 1 / e,
          r = e + (n ? 0 : 1),
          s = n ? 1 : 0,
          o = 1 - Fe
        return function (a) {
          return (((r * Zo(0, o, a)) | 0) + s) * i
        }
      }
    }
vs.ease = Ce['quad.out']
sn(
  'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
  function (t) {
    return (nf += t + ',' + t + 'Params,')
  }
)
var Fg = function (e, n) {
    ;(this.id = Db++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = n),
      (this.get = n ? n.get : _g),
      (this.set = n ? n.getSetter : lf)
  },
  Fo = (function () {
    function t(n) {
      ;(this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
          ((this._rDelay = n.repeatDelay || 0),
          (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        ys(this, +n.duration, 1, 1),
        (this.data = n.data),
        Ge && ((this._ctx = Ge), Ge.data.push(this)),
        $o || mn.wake()
    }
    var e = t.prototype
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
            ys(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur
      }),
      (e.totalTime = function (i, r) {
        if ((ws(), !arguments.length)) return this._tTime
        var s = this._dp
        if (s && s.smoothChildTiming && this._ts) {
          for (Cl(this, i), !s._dp || s.parent || xg(s, this); s && s.parent; )
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
            si(this._dp, this, this._start - this._delay)
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === Fe) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), vg(this, i, r)),
          this
        )
      }),
      (e.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + md(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time
      }),
      (e.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() > 0
              ? 1
              : 0
      }),
      (e.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                md(this),
              r
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0
      }),
      (e.iteration = function (i, r) {
        var s = this.duration() + this._rDelay
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * s, r)
          : this._repeat
            ? bs(this._tTime, s) + 1
            : 1
      }),
      (e.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -Fe ? 0 : this._rts
        if (this._rts === i) return this
        var s =
          this.parent && this._ts ? Xa(this.parent._time, this) : this._tTime
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -Fe ? 0 : this._rts),
          this.totalTime(Zo(-Math.abs(this._delay), this._tDur, s), r !== !1),
          El(this),
          Hb(this)
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
                : (ws(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== Fe &&
                      (this._tTime -= Fe)
                  ))),
            this)
          : this._ps
      }),
      (e.startTime = function (i) {
        if (arguments.length) {
          this._start = i
          var r = this.parent || this._dp
          return (
            r && (r._sort || !this.parent) && si(r, this, i - this._delay), this
          )
        }
        return this._start
      }),
      (e.endTime = function (i) {
        return (
          this._start +
          (rn(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        )
      }),
      (e.rawTime = function (i) {
        var r = this.parent || this._dp
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Xa(r.rawTime(i), this)
              : this._tTime
          : this._tTime
      }),
      (e.revert = function (i) {
        i === void 0 && (i = $b)
        var r = Nt
        return (
          (Nt = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== 'nested' && i.kill !== !1 && this.kill(),
          (Nt = r),
          this
        )
      }),
      (e.globalTime = function (i) {
        for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
          (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp)
        return !this.parent && this._sat ? this._sat.globalTime(i) : s
      }),
      (e.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), _d(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat
      }),
      (e.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time
          return (this._rDelay = i), _d(this), r ? this.time(r) : this
        }
        return this._rDelay
      }),
      (e.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo
      }),
      (e.seek = function (i, r) {
        return this.totalTime(Cn(this, i), rn(r))
      }),
      (e.restart = function (i, r) {
        return this.play().totalTime(i ? -this._delay : 0, rn(r))
      }),
      (e.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1)
      }),
      (e.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        )
      }),
      (e.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0)
      }),
      (e.resume = function () {
        return this.paused(!1)
      }),
      (e.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -Fe : 0)),
            this)
          : this._rts < 0
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -Fe), this
      }),
      (e.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          s
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (s = i.rawTime(!0)) >= r &&
            s < this.endTime(!0) - Fe)
        )
      }),
      (e.eventCallback = function (i, r, s) {
        var o = this.vars
        return arguments.length > 1
          ? (r
              ? ((o[i] = r),
                s && (o[i + 'Params'] = s),
                i === 'onUpdate' && (this._onUpdate = r))
              : delete o[i],
            this)
          : o[i]
      }),
      (e.then = function (i) {
        var r = this
        return new Promise(function (s) {
          var o = Je(i) ? i : yg,
            a = function () {
              var c = r.then
              ;(r.then = null),
                Je(o) && (o = o(r)) && (o.then || o === r) && (r.then = c),
                s(o),
                (r.then = c)
            }
          ;(r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? a()
            : (r._prom = a)
        })
      }),
      (e.kill = function () {
        Js(this)
      }),
      t
    )
  })()
Nn(Fo.prototype, {
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
  _zTime: -Fe,
  _prom: 0,
  _ps: !1,
  _rts: 1
})
var Yt = (function (t) {
  ag(e, t)
  function e(i, r) {
    var s
    return (
      i === void 0 && (i = {}),
      (s = t.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = rn(i.sortChildren)),
      Xe && si(i.parent || Xe, wi(s), r),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && Sg(wi(s), i.scrollTrigger),
      s
    )
  }
  var n = e.prototype
  return (
    (n.to = function (r, s, o) {
      return ho(0, arguments, this), this
    }),
    (n.from = function (r, s, o) {
      return ho(1, arguments, this), this
    }),
    (n.fromTo = function (r, s, o, a) {
      return ho(2, arguments, this), this
    }),
    (n.set = function (r, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        po(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new ot(r, s, Cn(this, o), 1),
        this
      )
    }),
    (n.call = function (r, s, o) {
      return si(this, ot.delayedCall(0, r, s), o)
    }),
    (n.staggerTo = function (r, s, o, a, l, c, u) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = c),
        (o.onCompleteParams = u),
        (o.parent = this),
        new ot(r, o, Cn(this, l)),
        this
      )
    }),
    (n.staggerFrom = function (r, s, o, a, l, c, u) {
      return (
        (o.runBackwards = 1),
        (po(o).immediateRender = rn(o.immediateRender)),
        this.staggerTo(r, s, o, a, l, c, u)
      )
    }),
    (n.staggerFromTo = function (r, s, o, a, l, c, u, f) {
      return (
        (a.startAt = o),
        (po(a).immediateRender = rn(a.immediateRender)),
        this.staggerTo(r, s, a, l, c, u, f)
      )
    }),
    (n.render = function (r, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        u = r <= 0 ? 0 : vt(r),
        f = this._zTime < 0 != r < 0 && (this._initted || !c),
        p,
        d,
        g,
        h,
        y,
        w,
        _,
        m,
        v,
        b,
        C,
        P
      if (
        (this !== Xe && u > l && r >= 0 && (u = l), u !== this._tTime || o || f)
      ) {
        if (
          (a !== this._time &&
            c &&
            ((u += this._time - a), (r += this._time - a)),
          (p = u),
          (v = this._start),
          (m = this._ts),
          (w = !m),
          f && (c || (a = this._zTime), (r || !s) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((C = this._yoyo),
            (y = c + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(y * 100 + r, s, o)
          if (
            ((p = vt(u % y)),
            u === l
              ? ((h = this._repeat), (p = c))
              : ((h = ~~(u / y)),
                h && h === u / y && ((p = c), h--),
                p > c && (p = c)),
            (b = bs(this._tTime, y)),
            !a &&
              this._tTime &&
              b !== h &&
              this._tTime - b * y - this._dur <= 0 &&
              (b = h),
            C && h & 1 && ((p = c - p), (P = 1)),
            h !== b && !this._lock)
          ) {
            var M = C && b & 1,
              E = M === (C && h & 1)
            if (
              (h < b && (M = !M),
              (a = M ? 0 : u % c ? c : u),
              (this._lock = 1),
              (this.render(a || (P ? 0 : vt(h * y)), s, !c)._lock = 0),
              (this._tTime = u),
              !s && this.parent && bn(this, 'onRepeat'),
              this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                w !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this
            if (
              ((c = this._dur),
              (l = this._tDur),
              E &&
                ((this._lock = 2),
                (a = M ? c : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !P && this.invalidate()),
              (this._lock = 0),
              !this._ts && !w)
            )
              return this
            Bg(this, P)
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((_ = qb(this, vt(a), vt(p))), _ && (u -= p - (p = _._start))),
          (this._tTime = u),
          (this._time = p),
          (this._act = !m),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && p && !s && !h && (bn(this, 'onStart'), this._tTime !== u))
        )
          return this
        if (p >= a && r >= 0)
          for (d = this._first; d; ) {
            if (
              ((g = d._next), (d._act || p >= d._start) && d._ts && _ !== d)
            ) {
              if (d.parent !== this) return this.render(r, s, o)
              if (
                (d.render(
                  d._ts > 0
                    ? (p - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (p - d._start) * d._ts,
                  s,
                  o
                ),
                p !== this._time || (!this._ts && !w))
              ) {
                ;(_ = 0), g && (u += this._zTime = -Fe)
                break
              }
            }
            d = g
          }
        else {
          d = this._last
          for (var O = r < 0 ? r : p; d; ) {
            if (((g = d._prev), (d._act || O <= d._end) && d._ts && _ !== d)) {
              if (d.parent !== this) return this.render(r, s, o)
              if (
                (d.render(
                  d._ts > 0
                    ? (O - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (O - d._start) * d._ts,
                  s,
                  o || (Nt && (d._initted || d._startAt))
                ),
                p !== this._time || (!this._ts && !w))
              ) {
                ;(_ = 0), g && (u += this._zTime = O ? -Fe : Fe)
                break
              }
            }
            d = g
          }
        }
        if (
          _ &&
          !s &&
          (this.pause(),
          (_.render(p >= a ? 0 : -Fe)._zTime = p >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = v), El(this), this.render(r, s, o)
        this._onUpdate && !s && bn(this, 'onUpdate', !0),
          ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) &&
            (v === this._start || Math.abs(m) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !c) &&
                ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                Ki(this, 1),
              !s &&
                !(r < 0 && !a) &&
                (u || a || !l) &&
                (bn(
                  this,
                  u === l && r >= 0 ? 'onComplete' : 'onReverseComplete',
                  !0
                ),
                this._prom &&
                  !(u < l && this.timeScale() > 0) &&
                  this._prom())))
      }
      return this
    }),
    (n.add = function (r, s) {
      var o = this
      if ((Ai(s) || (s = Cn(this, s, r)), !(r instanceof Fo))) {
        if (Bt(r))
          return (
            r.forEach(function (a) {
              return o.add(a, s)
            }),
            this
          )
        if (yt(r)) return this.addLabel(r, s)
        if (Je(r)) r = ot.delayedCall(0, r)
        else return this
      }
      return this !== r ? si(this, r, s) : this
    }),
    (n.getChildren = function (r, s, o, a) {
      r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -Mn)
      for (var l = [], c = this._first; c; )
        c._start >= a &&
          (c instanceof ot
            ? s && l.push(c)
            : (o && l.push(c), r && l.push.apply(l, c.getChildren(!0, s, o)))),
          (c = c._next)
      return l
    }),
    (n.getById = function (r) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === r) return s[o]
    }),
    (n.remove = function (r) {
      return yt(r)
        ? this.removeLabel(r)
        : Je(r)
          ? this.killTweensOf(r)
          : (Tl(this, r),
            r === this._recent && (this._recent = this._last),
            yr(this))
    }),
    (n.totalTime = function (r, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = vt(
              mn.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          t.prototype.totalTime.call(this, r, s),
          (this._forcing = 0),
          this)
        : this._tTime
    }),
    (n.addLabel = function (r, s) {
      return (this.labels[r] = Cn(this, s)), this
    }),
    (n.removeLabel = function (r) {
      return delete this.labels[r], this
    }),
    (n.addPause = function (r, s, o) {
      var a = ot.delayedCall(0, s || No, o)
      return (
        (a.data = 'isPause'), (this._hasPause = 1), si(this, a, Cn(this, r))
      )
    }),
    (n.removePause = function (r) {
      var s = this._first
      for (r = Cn(this, r); s; )
        s._start === r && s.data === 'isPause' && Ki(s), (s = s._next)
    }),
    (n.killTweensOf = function (r, s, o) {
      for (var a = this.getTweensOf(r, o), l = a.length; l--; )
        Fi !== a[l] && a[l].kill(r, s)
      return this
    }),
    (n.getTweensOf = function (r, s) {
      for (var o = [], a = kn(r), l = this._first, c = Ai(s), u; l; )
        l instanceof ot
          ? Fb(l._targets, a) &&
            (c
              ? (!Fi || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u),
          (l = l._next)
      return o
    }),
    (n.tweenTo = function (r, s) {
      s = s || {}
      var o = this,
        a = Cn(o, r),
        l = s,
        c = l.startAt,
        u = l.onStart,
        f = l.onStartParams,
        p = l.immediateRender,
        d,
        g = ot.to(
          o,
          Nn(
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
                Fe,
              onStart: function () {
                if ((o.pause(), !d)) {
                  var y =
                    s.duration ||
                    Math.abs(
                      (a - (c && 'time' in c ? c.time : o._time)) /
                        o.timeScale()
                    )
                  g._dur !== y && ys(g, y, 0, 1).render(g._time, !0, !0),
                    (d = 1)
                }
                u && u.apply(g, f || [])
              }
            },
            s
          )
        )
      return p ? g.render(0) : g
    }),
    (n.tweenFromTo = function (r, s, o) {
      return this.tweenTo(s, Nn({ startAt: { time: Cn(this, r) } }, o))
    }),
    (n.recent = function () {
      return this._recent
    }),
    (n.nextLabel = function (r) {
      return r === void 0 && (r = this._time), vd(this, Cn(this, r))
    }),
    (n.previousLabel = function (r) {
      return r === void 0 && (r = this._time), vd(this, Cn(this, r), 1)
    }),
    (n.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + Fe)
    }),
    (n.shiftChildren = function (r, s, o) {
      o === void 0 && (o = 0)
      for (var a = this._first, l = this.labels, c; a; )
        a._start >= o && ((a._start += r), (a._end += r)), (a = a._next)
      if (s) for (c in l) l[c] >= o && (l[c] += r)
      return yr(this)
    }),
    (n.invalidate = function (r) {
      var s = this._first
      for (this._lock = 0; s; ) s.invalidate(r), (s = s._next)
      return t.prototype.invalidate.call(this, r)
    }),
    (n.clear = function (r) {
      r === void 0 && (r = !0)
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o)
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        yr(this)
      )
    }),
    (n.totalDuration = function (r) {
      var s = 0,
        o = this,
        a = o._last,
        l = Mn,
        c,
        u,
        f
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r)
        )
      if (o._dirty) {
        for (f = o.parent; a; )
          (c = a._prev),
            a._dirty && a.totalDuration(),
            (u = a._start),
            u > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (si(o, a, u - a._delay, 1)._lock = 0))
              : (l = u),
            u < 0 &&
              a._ts &&
              ((s -= u),
              ((!f && !o._dp) || (f && f.smoothChildTiming)) &&
                ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)),
              o.shiftChildren(-u, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = c)
        ys(o, o === Xe && o._time > s ? o._time : s, 1, 1), (o._dirty = 0)
      }
      return o._tDur
    }),
    (e.updateRoot = function (r) {
      if ((Xe._ts && (vg(Xe, Xa(r, Xe)), (mg = mn.frame)), mn.frame >= hd)) {
        hd += yn.autoSleep || 120
        var s = Xe._first
        if ((!s || !s._ts) && yn.autoSleep && mn._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next
          s || mn.sleep()
        }
      }
    }),
    e
  )
})(Fo)
Nn(Yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
var cy = function (e, n, i, r, s, o, a) {
    var l = new on(this._pt, e, n, 0, 1, Ug, null, s),
      c = 0,
      u = 0,
      f,
      p,
      d,
      g,
      h,
      y,
      w,
      _
    for (
      l.b = i,
        l.e = r,
        i += '',
        r += '',
        (w = ~r.indexOf('random(')) && (r = Bo(r)),
        o && ((_ = [i, r]), o(_, e, n), (i = _[0]), (r = _[1])),
        p = i.match(Yl) || [];
      (f = Yl.exec(r));

    )
      (g = f[0]),
        (h = r.substring(c, f.index)),
        d ? (d = (d + 1) % 5) : h.substr(-5) === 'rgba(' && (d = 1),
        g !== p[u++] &&
          ((y = parseFloat(p[u - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: h || u === 1 ? h : ',',
            s: y,
            c: g.charAt(1) === '=' ? ls(y, g) - y : parseFloat(g) - y,
            m: d && d < 4 ? Math.round : 0
          }),
          (c = Yl.lastIndex))
    return (
      (l.c = c < r.length ? r.substring(c, r.length) : ''),
      (l.fp = a),
      (fg.test(r) || w) && (l.e = 0),
      (this._pt = l),
      l
    )
  },
  sf = function (e, n, i, r, s, o, a, l, c, u) {
    Je(r) && (r = r(s || 0, e, o))
    var f = e[n],
      p =
        i !== 'get'
          ? i
          : Je(f)
            ? c
              ? e[
                  n.indexOf('set') || !Je(e['get' + n.substr(3)])
                    ? n
                    : 'get' + n.substr(3)
                ](c)
              : e[n]()
            : f,
      d = Je(f) ? (c ? hy : Gg) : af,
      g
    if (
      (yt(r) &&
        (~r.indexOf('random(') && (r = Bo(r)),
        r.charAt(1) === '=' &&
          ((g = ls(p, r) + (It(p) || 0)), (g || g === 0) && (r = g))),
      !u || p !== r || tu)
    )
      return !isNaN(p * r) && r !== ''
        ? ((g = new on(
            this._pt,
            e,
            n,
            +p || 0,
            r - (p || 0),
            typeof f == 'boolean' ? my : Wg,
            0,
            d
          )),
          c && (g.fp = c),
          a && g.modifier(a, this, e),
          (this._pt = g))
        : (!f && !(n in e) && ef(n, r),
          cy.call(this, e, n, p, r, d, l || yn.stringFilter, c))
  },
  uy = function (e, n, i, r, s) {
    if (
      (Je(e) && (e = go(e, s, n, i, r)),
      !hi(e) || (e.style && e.nodeType) || Bt(e) || cg(e))
    )
      return yt(e) ? go(e, s, n, i, r) : e
    var o = {},
      a
    for (a in e) o[a] = go(e[a], s, n, i, r)
    return o
  },
  jg = function (e, n, i, r, s, o) {
    var a, l, c, u
    if (
      hn[e] &&
      (a = new hn[e]()).init(
        s,
        a.rawVars ? n[e] : uy(n[e], r, s, o, i),
        i,
        r,
        o
      ) !== !1 &&
      ((i._pt = l = new on(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      i !== Zr)
    )
      for (c = i._ptLookup[i._targets.indexOf(s)], u = a._props.length; u--; )
        c[a._props[u]] = l
    return a
  },
  Fi,
  tu,
  of = function t(e, n, i) {
    var r = e.vars,
      s = r.ease,
      o = r.startAt,
      a = r.immediateRender,
      l = r.lazy,
      c = r.onUpdate,
      u = r.runBackwards,
      f = r.yoyoEase,
      p = r.keyframes,
      d = r.autoRevert,
      g = e._dur,
      h = e._startAt,
      y = e._targets,
      w = e.parent,
      _ = w && w.data === 'nested' ? w.vars.targets : y,
      m = e._overwrite === 'auto' && !Ku,
      v = e.timeline,
      b,
      C,
      P,
      M,
      E,
      O,
      I,
      L,
      z,
      j,
      Y,
      q,
      G
    if (
      (v && (!p || !s) && (s = 'none'),
      (e._ease = wr(s, vs.ease)),
      (e._yEase = f ? Ng(wr(f === !0 ? s : f, vs.ease)) : 0),
      f &&
        e._yoyo &&
        !e._repeat &&
        ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
      (e._from = !v && !!r.runBackwards),
      !v || (p && !r.stagger))
    ) {
      if (
        ((L = y[0] ? br(y[0]).harness : 0),
        (q = L && r[L.prop]),
        (b = Ya(r, tf)),
        h &&
          (h._zTime < 0 && h.progress(1),
          n < 0 && u && a && !d ? h.render(-1, !0) : h.revert(u && g ? Pa : Bb),
          (h._lazy = 0)),
        o)
      ) {
        if (
          (Ki(
            (e._startAt = ot.set(
              y,
              Nn(
                {
                  data: 'isStart',
                  overwrite: !1,
                  parent: w,
                  immediateRender: !0,
                  lazy: !h && rn(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    c &&
                    function () {
                      return bn(e, 'onUpdate')
                    },
                  stagger: 0
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Nt || (!a && !d)) && e._startAt.revert(Pa),
          a && g && n <= 0 && i <= 0)
        ) {
          n && (e._zTime = n)
          return
        }
      } else if (u && g && !h) {
        if (
          (n && (a = !1),
          (P = Nn(
            {
              overwrite: !1,
              data: 'isFromStart',
              lazy: a && !h && rn(l),
              immediateRender: a,
              stagger: 0,
              parent: w
            },
            b
          )),
          q && (P[L.prop] = q),
          Ki((e._startAt = ot.set(y, P))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Nt ? e._startAt.revert(Pa) : e._startAt.render(-1, !0)),
          (e._zTime = n),
          !a)
        )
          t(e._startAt, Fe, Fe)
        else if (!n) return
      }
      for (
        e._pt = e._ptCache = 0, l = (g && rn(l)) || (l && !g), C = 0;
        C < y.length;
        C++
      ) {
        if (
          ((E = y[C]),
          (I = E._gsap || rf(y)[C]._gsap),
          (e._ptLookup[C] = j = {}),
          Xc[I.id] && qi.length && qa(),
          (Y = _ === y ? C : _.indexOf(E)),
          L &&
            (z = new L()).init(E, q || b, e, Y, _) !== !1 &&
            ((e._pt = M =
              new on(e._pt, E, z.name, 0, 1, z.render, z, 0, z.priority)),
            z._props.forEach(function (Q) {
              j[Q] = M
            }),
            z.priority && (O = 1)),
          !L || q)
        )
          for (P in b)
            hn[P] && (z = jg(P, b, e, Y, E, _))
              ? z.priority && (O = 1)
              : (j[P] = M =
                  sf.call(e, E, P, 'get', b[P], Y, _, 0, r.stringFilter))
        e._op && e._op[C] && e.kill(E, e._op[C]),
          m &&
            e._pt &&
            ((Fi = e),
            Xe.killTweensOf(E, j, e.globalTime(n)),
            (G = !e.parent),
            (Fi = 0)),
          e._pt && l && (Xc[I.id] = 1)
      }
      O && qg(e), e._onInit && e._onInit(e)
    }
    ;(e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !G),
      p && n <= 0 && v.render(Mn, !0, !0)
  },
  fy = function (e, n, i, r, s, o, a, l) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
      u,
      f,
      p,
      d
    if (!c)
      for (
        c = e._ptCache[n] = [], p = e._ptLookup, d = e._targets.length;
        d--;

      ) {
        if (((u = p[d][n]), u && u.d && u.d._pt))
          for (u = u.d._pt; u && u.p !== n && u.fp !== n; ) u = u._next
        if (!u)
          return (
            (tu = 1),
            (e.vars[n] = '+=0'),
            of(e, a),
            (tu = 0),
            l ? zo(n + ' not eligible for reset') : 1
          )
        c.push(u)
      }
    for (d = c.length; d--; )
      (f = c[d]),
        (u = f._pt || f),
        (u.s = (r || r === 0) && !s ? r : u.s + (r || 0) + o * u.c),
        (u.c = i - u.s),
        f.e && (f.e = tt(i) + It(f.e)),
        f.b && (f.b = u.s + It(f.b))
  },
  dy = function (e, n) {
    var i = e[0] ? br(e[0]).harness : 0,
      r = i && i.aliases,
      s,
      o,
      a,
      l
    if (!r) return n
    s = Ar({}, n)
    for (o in r)
      if (o in s) for (l = r[o].split(','), a = l.length; a--; ) s[l[a]] = s[o]
    return s
  },
  py = function (e, n, i, r) {
    var s = n.ease || r || 'power1.inOut',
      o,
      a
    if (Bt(n))
      (a = i[e] || (i[e] = [])),
        n.forEach(function (l, c) {
          return a.push({ t: (c / (n.length - 1)) * 100, v: l, e: s })
        })
    else
      for (o in n)
        (a = i[o] || (i[o] = [])),
          o === 'ease' || a.push({ t: parseFloat(e), v: n[o], e: s })
  },
  go = function (e, n, i, r, s) {
    return Je(e)
      ? e.call(n, i, r, s)
      : yt(e) && ~e.indexOf('random(')
        ? Bo(e)
        : e
  },
  Vg = nf + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
  Hg = {}
sn(Vg + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
  return (Hg[t] = 1)
})
var ot = (function (t) {
  ag(e, t)
  function e(i, r, s, o) {
    var a
    typeof r == 'number' && ((s.duration = r), (r = s), (s = null)),
      (a = t.call(this, o ? r : po(r)) || this)
    var l = a.vars,
      c = l.duration,
      u = l.delay,
      f = l.immediateRender,
      p = l.stagger,
      d = l.overwrite,
      g = l.keyframes,
      h = l.defaults,
      y = l.scrollTrigger,
      w = l.yoyoEase,
      _ = r.parent || Xe,
      m = (Bt(i) || cg(i) ? Ai(i[0]) : 'length' in r) ? [i] : kn(i),
      v,
      b,
      C,
      P,
      M,
      E,
      O,
      I
    if (
      ((a._targets = m.length
        ? rf(m)
        : zo(
            'GSAP target ' + i + ' not found. https://gsap.com',
            !yn.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      g || p || aa(c) || aa(u))
    ) {
      if (
        ((r = a.vars),
        (v = a.timeline =
          new Yt({
            data: 'nested',
            defaults: h || {},
            targets: _ && _.data === 'nested' ? _.vars.targets : m
          })),
        v.kill(),
        (v.parent = v._dp = wi(a)),
        (v._start = 0),
        p || aa(c) || aa(u))
      ) {
        if (((P = m.length), (O = p && Pg(p)), hi(p)))
          for (M in p) ~Vg.indexOf(M) && (I || (I = {}), (I[M] = p[M]))
        for (b = 0; b < P; b++)
          (C = Ya(r, Hg)),
            (C.stagger = 0),
            w && (C.yoyoEase = w),
            I && Ar(C, I),
            (E = m[b]),
            (C.duration = +go(c, wi(a), b, E, m)),
            (C.delay = (+go(u, wi(a), b, E, m) || 0) - a._delay),
            !p &&
              P === 1 &&
              C.delay &&
              ((a._delay = u = C.delay), (a._start += u), (C.delay = 0)),
            v.to(E, C, O ? O(b, E, m) : 0),
            (v._ease = Ce.none)
        v.duration() ? (c = u = 0) : (a.timeline = 0)
      } else if (g) {
        po(Nn(v.vars.defaults, { ease: 'none' })),
          (v._ease = wr(g.ease || r.ease || 'none'))
        var L = 0,
          z,
          j,
          Y
        if (Bt(g))
          g.forEach(function (q) {
            return v.to(m, q, '>')
          }),
            v.duration()
        else {
          C = {}
          for (M in g)
            M === 'ease' || M === 'easeEach' || py(M, g[M], C, g.easeEach)
          for (M in C)
            for (
              z = C[M].sort(function (q, G) {
                return q.t - G.t
              }),
                L = 0,
                b = 0;
              b < z.length;
              b++
            )
              (j = z[b]),
                (Y = {
                  ease: j.e,
                  duration: ((j.t - (b ? z[b - 1].t : 0)) / 100) * c
                }),
                (Y[M] = j.v),
                v.to(m, Y, L),
                (L += Y.duration)
          v.duration() < c && v.to({}, { duration: c - v.duration() })
        }
      }
      c || a.duration((c = v.duration()))
    } else a.timeline = 0
    return (
      d === !0 && !Ku && ((Fi = wi(a)), Xe.killTweensOf(m), (Fi = 0)),
      si(_, wi(a), s),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (f ||
        (!c &&
          !g &&
          a._start === vt(_._time) &&
          rn(f) &&
          Gb(wi(a)) &&
          _.data !== 'nested')) &&
        ((a._tTime = -Fe), a.render(Math.max(0, -u) || 0)),
      y && Sg(wi(a), y),
      a
    )
  }
  var n = e.prototype
  return (
    (n.render = function (r, s, o) {
      var a = this._time,
        l = this._tDur,
        c = this._dur,
        u = r < 0,
        f = r > l - Fe && !u ? l : r < Fe ? 0 : r,
        p,
        d,
        g,
        h,
        y,
        w,
        _,
        m,
        v
      if (!c) Ub(this, r, s, o)
      else if (
        f !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u)
      ) {
        if (((p = f), (m = this.timeline), this._repeat)) {
          if (((h = c + this._rDelay), this._repeat < -1 && u))
            return this.totalTime(h * 100 + r, s, o)
          if (
            ((p = vt(f % h)),
            f === l
              ? ((g = this._repeat), (p = c))
              : ((g = ~~(f / h)),
                g && g === vt(f / h) && ((p = c), g--),
                p > c && (p = c)),
            (w = this._yoyo && g & 1),
            w && ((v = this._yEase), (p = c - p)),
            (y = bs(this._tTime, h)),
            p === a && !o && this._initted && g === y)
          )
            return (this._tTime = f), this
          g !== y &&
            (m && this._yEase && Bg(m, w),
            this.vars.repeatRefresh &&
              !w &&
              !this._lock &&
              this._time !== h &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(vt(h * g), !0).invalidate()._lock = 0)))
        }
        if (!this._initted) {
          if (Tg(this, u ? r : p, o, s, f)) return (this._tTime = 0), this
          if (a !== this._time && !(o && this.vars.repeatRefresh && g !== y))
            return this
          if (c !== this._dur) return this.render(r, s, o)
        }
        if (
          ((this._tTime = f),
          (this._time = p),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = _ = (v || this._ease)(p / c)),
          this._from && (this.ratio = _ = 1 - _),
          p && !a && !s && !g && (bn(this, 'onStart'), this._tTime !== f))
        )
          return this
        for (d = this._pt; d; ) d.r(_, d.d), (d = d._next)
        ;(m && m.render(r < 0 ? r : m._dur * m._ease(p / this._dur), s, o)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !s &&
            (u && Kc(this, r, s, o), bn(this, 'onUpdate')),
          this._repeat &&
            g !== y &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            bn(this, 'onRepeat'),
          (f === this._tDur || !f) &&
            this._tTime === f &&
            (u && !this._onUpdate && Kc(this, r, !0, !0),
            (r || !c) &&
              ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
              Ki(this, 1),
            !s &&
              !(u && !a) &&
              (f || a || w) &&
              (bn(this, f === l ? 'onComplete' : 'onReverseComplete', !0),
              this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
      }
      return this
    }),
    (n.targets = function () {
      return this._targets
    }),
    (n.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        t.prototype.invalidate.call(this, r)
      )
    }),
    (n.resetTo = function (r, s, o, a, l) {
      $o || mn.wake(), this._ts || this.play()
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u
      return (
        this._initted || of(this, c),
        (u = this._ease(c / this._dur)),
        fy(this, r, s, o, a, u, c, l)
          ? this.resetTo(r, s, o, a, 1)
          : (Cl(this, 0),
            this.parent ||
              wg(
                this._dp,
                this,
                '_first',
                '_last',
                this._dp._sort ? '_start' : 0
              ),
            this.render(0))
      )
    }),
    (n.kill = function (r, s) {
      if ((s === void 0 && (s = 'all'), !r && (!s || s === 'all')))
        return (this._lazy = this._pt = 0), this.parent ? Js(this) : this
      if (this.timeline) {
        var o = this.timeline.totalDuration()
        return (
          this.timeline.killTweensOf(r, s, Fi && Fi.vars.overwrite !== !0)
            ._first || Js(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            ys(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        )
      }
      var a = this._targets,
        l = r ? kn(r) : a,
        c = this._ptLookup,
        u = this._pt,
        f,
        p,
        d,
        g,
        h,
        y,
        w
      if ((!s || s === 'all') && Vb(a, l))
        return s === 'all' && (this._pt = 0), Js(this)
      for (
        f = this._op = this._op || [],
          s !== 'all' &&
            (yt(s) &&
              ((h = {}),
              sn(s, function (_) {
                return (h[_] = 1)
              }),
              (s = h)),
            (s = dy(a, s))),
          w = a.length;
        w--;

      )
        if (~l.indexOf(a[w])) {
          ;(p = c[w]),
            s === 'all'
              ? ((f[w] = s), (g = p), (d = {}))
              : ((d = f[w] = f[w] || {}), (g = s))
          for (h in g)
            (y = p && p[h]),
              y &&
                ((!('kill' in y.d) || y.d.kill(h) === !0) && Tl(this, y, '_pt'),
                delete p[h]),
              d !== 'all' && (d[h] = 1)
        }
      return this._initted && !this._pt && u && Js(this), this
    }),
    (e.to = function (r, s) {
      return new e(r, s, arguments[2])
    }),
    (e.from = function (r, s) {
      return ho(1, arguments)
    }),
    (e.delayedCall = function (r, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a
      })
    }),
    (e.fromTo = function (r, s, o) {
      return ho(2, arguments)
    }),
    (e.set = function (r, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s)
    }),
    (e.killTweensOf = function (r, s, o) {
      return Xe.killTweensOf(r, s, o)
    }),
    e
  )
})(Fo)
Nn(ot.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 })
sn('staggerTo,staggerFrom,staggerFromTo', function (t) {
  ot[t] = function () {
    var e = new Yt(),
      n = Zc.call(arguments, 0)
    return n.splice(t === 'staggerFromTo' ? 5 : 4, 0, 0), e[t].apply(e, n)
  }
})
var af = function (e, n, i) {
    return (e[n] = i)
  },
  Gg = function (e, n, i) {
    return e[n](i)
  },
  hy = function (e, n, i, r) {
    return e[n](r.fp, i)
  },
  gy = function (e, n, i) {
    return e.setAttribute(n, i)
  },
  lf = function (e, n) {
    return Je(e[n]) ? Gg : Qu(e[n]) && e.setAttribute ? gy : af
  },
  Wg = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
  },
  my = function (e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
  },
  Ug = function (e, n) {
    var i = n._pt,
      r = ''
    if (!e && n.b) r = n.b
    else if (e === 1 && n.e) r = n.e
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
          r),
          (i = i._next)
      r += n.c
    }
    n.set(n.t, n.p, r, n)
  },
  cf = function (e, n) {
    for (var i = n._pt; i; ) i.r(e, i.d), (i = i._next)
  },
  _y = function (e, n, i, r) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === r && s.modifier(e, n, i), (s = o)
  },
  vy = function (e) {
    for (var n = this._pt, i, r; n; )
      (r = n._next),
        (n.p === e && !n.op) || n.op === e
          ? Tl(this, n, '_pt')
          : n.dep || (i = 1),
        (n = r)
    return !i
  },
  by = function (e, n, i, r) {
    r.mSet(e, n, r.m.call(r.tween, i, r.mt), r)
  },
  qg = function (e) {
    for (var n = e._pt, i, r, s, o; n; ) {
      for (i = n._next, r = s; r && r.pr > n.pr; ) r = r._next
      ;(n._prev = r ? r._prev : o) ? (n._prev._next = n) : (s = n),
        (n._next = r) ? (r._prev = n) : (o = n),
        (n = i)
    }
    e._pt = s
  },
  on = (function () {
    function t(n, i, r, s, o, a, l, c, u) {
      ;(this.t = i),
        (this.s = s),
        (this.c = o),
        (this.p = r),
        (this.r = a || Wg),
        (this.d = l || this),
        (this.set = c || af),
        (this.pr = u || 0),
        (this._next = n),
        n && (n._prev = this)
    }
    var e = t.prototype
    return (
      (e.modifier = function (i, r, s) {
        ;(this.mSet = this.mSet || this.set),
          (this.set = by),
          (this.m = i),
          (this.mt = s),
          (this.tween = r)
      }),
      t
    )
  })()
sn(
  nf +
    'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
  function (t) {
    return (tf[t] = 1)
  }
)
wn.TweenMax = wn.TweenLite = ot
wn.TimelineLite = wn.TimelineMax = Yt
Xe = new Yt({
  sortChildren: !1,
  defaults: vs,
  autoRemoveChildren: !0,
  id: 'root',
  smoothChildTiming: !0
})
yn.stringFilter = zg
var xr = [],
  Aa = {},
  yy = [],
  yd = 0,
  wy = 0,
  Jl = function (e) {
    return (Aa[e] || yy).map(function (n) {
      return n()
    })
  },
  nu = function () {
    var e = Date.now(),
      n = []
    e - yd > 2 &&
      (Jl('matchMediaInit'),
      xr.forEach(function (i) {
        var r = i.queries,
          s = i.conditions,
          o,
          a,
          l,
          c
        for (a in r)
          (o = ni.matchMedia(r[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (c = 1))
        c && (i.revert(), l && n.push(i))
      }),
      Jl('matchMediaRevert'),
      n.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r)
        })
      }),
      (yd = e),
      Jl('matchMedia'))
  },
  Yg = (function () {
    function t(n, i) {
      ;(this.selector = i && Jc(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = wy++),
        n && this.add(n)
    }
    var e = t.prototype
    return (
      (e.add = function (i, r, s) {
        Je(i) && ((s = r), (r = i), (i = Je))
        var o = this,
          a = function () {
            var c = Ge,
              u = o.selector,
              f
            return (
              c && c !== o && c.data.push(o),
              s && (o.selector = Jc(s)),
              (Ge = o),
              (f = r.apply(o, arguments)),
              Je(f) && o._r.push(f),
              (Ge = c),
              (o.selector = u),
              (o.isReverted = !1),
              f
            )
          }
        return (
          (o.last = a),
          i === Je
            ? a(o, function (l) {
                return o.add(null, l)
              })
            : i
              ? (o[i] = a)
              : a
        )
      }),
      (e.ignore = function (i) {
        var r = Ge
        ;(Ge = null), i(this), (Ge = r)
      }),
      (e.getTweens = function () {
        var i = []
        return (
          this.data.forEach(function (r) {
            return r instanceof t
              ? i.push.apply(i, r.getTweens())
              : r instanceof ot &&
                  !(r.parent && r.parent.data === 'nested') &&
                  i.push(r)
          }),
          i
        )
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0
      }),
      (e.kill = function (i, r) {
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
                    .sort(function (u, f) {
                      return f.g - u.g || -1 / 0
                    })
                    .forEach(function (u) {
                      return u.t.revert(i)
                    }),
                    l = s.data.length;
                  l--;

                )
                  (c = s.data[l]),
                    c instanceof Yt
                      ? c.data !== 'nested' &&
                        (c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
                      : !(c instanceof ot) && c.revert && c.revert(i)
                s._r.forEach(function (u) {
                  return u(i, s)
                }),
                  (s.isReverted = !0)
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill()
              }),
          this.clear(),
          r)
        )
          for (var o = xr.length; o--; ) xr[o].id === this.id && xr.splice(o, 1)
      }),
      (e.revert = function (i) {
        this.kill(i || {})
      }),
      t
    )
  })(),
  xy = (function () {
    function t(n) {
      ;(this.contexts = []), (this.scope = n), Ge && Ge.data.push(this)
    }
    var e = t.prototype
    return (
      (e.add = function (i, r, s) {
        hi(i) || (i = { matches: i })
        var o = new Yg(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          c,
          u
        Ge && !o.selector && (o.selector = Ge.selector),
          this.contexts.push(o),
          (r = o.add('onMatch', r)),
          (o.queries = i)
        for (c in i)
          c === 'all'
            ? (u = 1)
            : ((l = ni.matchMedia(i[c])),
              l &&
                (xr.indexOf(o) < 0 && xr.push(o),
                (a[c] = l.matches) && (u = 1),
                l.addListener
                  ? l.addListener(nu)
                  : l.addEventListener('change', nu)))
        return (
          u &&
            r(o, function (f) {
              return o.add(null, f)
            }),
          this
        )
      }),
      (e.revert = function (i) {
        this.kill(i || {})
      }),
      (e.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0)
        })
      }),
      t
    )
  })(),
  Ka = {
    registerPlugin: function () {
      for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
        n[i] = arguments[i]
      n.forEach(function (r) {
        return Lg(r)
      })
    },
    timeline: function (e) {
      return new Yt(e)
    },
    getTweensOf: function (e, n) {
      return Xe.getTweensOf(e, n)
    },
    getProperty: function (e, n, i, r) {
      yt(e) && (e = kn(e)[0])
      var s = br(e || {}).get,
        o = i ? yg : bg
      return (
        i === 'native' && (i = ''),
        e &&
          (n
            ? o(((hn[n] && hn[n].get) || s)(e, n, i, r))
            : function (a, l, c) {
                return o(((hn[a] && hn[a].get) || s)(e, a, l, c))
              })
      )
    },
    quickSetter: function (e, n, i) {
      if (((e = kn(e)), e.length > 1)) {
        var r = e.map(function (u) {
            return ln.quickSetter(u, n, i)
          }),
          s = r.length
        return function (u) {
          for (var f = s; f--; ) r[f](u)
        }
      }
      e = e[0] || {}
      var o = hn[n],
        a = br(e),
        l = (a.harness && (a.harness.aliases || {})[n]) || n,
        c = o
          ? function (u) {
              var f = new o()
              ;(Zr._pt = 0),
                f.init(e, i ? u + i : u, Zr, 0, [e]),
                f.render(1, f),
                Zr._pt && cf(1, Zr)
            }
          : a.set(e, l)
      return o
        ? c
        : function (u) {
            return c(e, l, i ? u + i : u, a, 1)
          }
    },
    quickTo: function (e, n, i) {
      var r,
        s = ln.to(
          e,
          Ar(((r = {}), (r[n] = '+=0.1'), (r.paused = !0), r), i || {})
        ),
        o = function (l, c, u) {
          return s.resetTo(n, l, c, u)
        }
      return (o.tween = s), o
    },
    isTweening: function (e) {
      return Xe.getTweensOf(e, !0).length > 0
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = wr(e.ease, vs.ease)), gd(vs, e || {})
    },
    config: function (e) {
      return gd(yn, e || {})
    },
    registerEffect: function (e) {
      var n = e.name,
        i = e.effect,
        r = e.plugins,
        s = e.defaults,
        o = e.extendTimeline
      ;(r || '').split(',').forEach(function (a) {
        return (
          a && !hn[a] && !wn[a] && zo(n + ' effect requires ' + a + ' plugin.')
        )
      }),
        (Xl[n] = function (a, l, c) {
          return i(kn(a), Nn(l || {}, s), c)
        }),
        o &&
          (Yt.prototype[n] = function (a, l, c) {
            return this.add(Xl[n](a, hi(l) ? l : (c = l) && {}, this), c)
          })
    },
    registerEase: function (e, n) {
      Ce[e] = wr(n)
    },
    parseEase: function (e, n) {
      return arguments.length ? wr(e, n) : Ce
    },
    getById: function (e) {
      return Xe.getById(e)
    },
    exportRoot: function (e, n) {
      e === void 0 && (e = {})
      var i = new Yt(e),
        r,
        s
      for (
        i.smoothChildTiming = rn(e.smoothChildTiming),
          Xe.remove(i),
          i._dp = 0,
          i._time = i._tTime = Xe._time,
          r = Xe._first;
        r;

      )
        (s = r._next),
          (n ||
            !(
              !r._dur &&
              r instanceof ot &&
              r.vars.onComplete === r._targets[0]
            )) &&
            si(i, r, r._start - r._delay),
          (r = s)
      return si(Xe, i, 0), i
    },
    context: function (e, n) {
      return e ? new Yg(e, n) : Ge
    },
    matchMedia: function (e) {
      return new xy(e)
    },
    matchMediaRefresh: function () {
      return (
        xr.forEach(function (e) {
          var n = e.conditions,
            i,
            r
          for (r in n) n[r] && ((n[r] = !1), (i = 1))
          i && e.revert()
        }) || nu()
      )
    },
    addEventListener: function (e, n) {
      var i = Aa[e] || (Aa[e] = [])
      ~i.indexOf(n) || i.push(n)
    },
    removeEventListener: function (e, n) {
      var i = Aa[e],
        r = i && i.indexOf(n)
      r >= 0 && i.splice(r, 1)
    },
    utils: {
      wrap: ey,
      wrapYoyo: ty,
      distribute: Pg,
      random: Ag,
      snap: Og,
      normalize: Jb,
      getUnit: It,
      clamp: Xb,
      splitColor: Dg,
      toArray: kn,
      selector: Jc,
      mapRange: kg,
      pipe: Qb,
      unitize: Zb,
      interpolate: ny,
      shuffle: Cg
    },
    install: hg,
    effects: Xl,
    ticker: mn,
    updateRoot: Yt.updateRoot,
    plugins: hn,
    globalTimeline: Xe,
    core: {
      PropTween: on,
      globals: gg,
      Tween: ot,
      Timeline: Yt,
      Animation: Fo,
      getCache: br,
      _removeLinkedListItem: Tl,
      reverting: function () {
        return Nt
      },
      context: function (e) {
        return e && Ge && (Ge.data.push(e), (e._ctx = Ge)), Ge
      },
      suppressOverwrites: function (e) {
        return (Ku = e)
      }
    }
  }
sn('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
  return (Ka[t] = ot[t])
})
mn.add(Yt.updateRoot)
Zr = Ka.to({}, { duration: 0 })
var Sy = function (e, n) {
    for (var i = e._pt; i && i.p !== n && i.op !== n && i.fp !== n; )
      i = i._next
    return i
  },
  Ty = function (e, n) {
    var i = e._targets,
      r,
      s,
      o
    for (r in n)
      for (s = i.length; s--; )
        (o = e._ptLookup[s][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = Sy(o, r)),
            o && o.modifier && o.modifier(n[r], e, i[s], r))
  },
  ec = function (e, n) {
    return {
      name: e,
      rawVars: 1,
      init: function (r, s, o) {
        o._onInit = function (a) {
          var l, c
          if (
            (yt(s) &&
              ((l = {}),
              sn(s, function (u) {
                return (l[u] = 1)
              }),
              (s = l)),
            n)
          ) {
            l = {}
            for (c in s) l[c] = n(s[c])
            s = l
          }
          Ty(a, s)
        }
      }
    }
  },
  ln =
    Ka.registerPlugin(
      {
        name: 'attr',
        init: function (e, n, i, r, s) {
          var o, a, l
          this.tween = i
          for (o in n)
            (l = e.getAttribute(o) || ''),
              (a = this.add(
                e,
                'setAttribute',
                (l || 0) + '',
                n[o],
                r,
                s,
                0,
                0,
                o
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o)
        },
        render: function (e, n) {
          for (var i = n._pt; i; )
            Nt ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next)
        }
      },
      {
        name: 'endArray',
        init: function (e, n) {
          for (var i = n.length; i--; )
            this.add(e, i, e[i] || 0, n[i], 0, 0, 0, 0, 0, 1)
        }
      },
      ec('roundProps', eu),
      ec('modifiers'),
      ec('snap', Og)
    ) || Ka
ot.version = Yt.version = ln.version = '3.12.5'
pg = 1
Zu() && ws()
Ce.Power0
Ce.Power1
Ce.Power2
Ce.Power3
Ce.Power4
Ce.Linear
Ce.Quad
Ce.Cubic
Ce.Quart
Ce.Quint
Ce.Strong
Ce.Elastic
Ce.Back
Ce.SteppedEase
Ce.Bounce
Ce.Sine
Ce.Expo
Ce.Circ
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var wd,
  ji,
  cs,
  uf,
  mr,
  xd,
  ff,
  Ey = function () {
    return typeof window < 'u'
  },
  Mi = {},
  dr = 180 / Math.PI,
  us = Math.PI / 180,
  jr = Math.atan2,
  Sd = 1e8,
  df = /([A-Z])/g,
  Cy = /(left|right|width|margin|padding|x)/i,
  Py = /[\s,\(]\S/,
  oi = {
    autoAlpha: 'opacity,visibility',
    scale: 'scaleX,scaleY',
    alpha: 'opacity'
  },
  iu = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
  },
  Oy = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
      n
    )
  },
  Ay = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
      n
    )
  },
  My = function (e, n) {
    var i = n.s + n.c * e
    n.set(n.t, n.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + n.u, n)
  },
  Xg = function (e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
  },
  Kg = function (e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
  },
  ky = function (e, n, i) {
    return (e.style[n] = i)
  },
  Ry = function (e, n, i) {
    return e.style.setProperty(n, i)
  },
  Ly = function (e, n, i) {
    return (e._gsap[n] = i)
  },
  Dy = function (e, n, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i)
  },
  Iy = function (e, n, i, r, s) {
    var o = e._gsap
    ;(o.scaleX = o.scaleY = i), o.renderTransform(s, o)
  },
  zy = function (e, n, i, r, s) {
    var o = e._gsap
    ;(o[n] = i), o.renderTransform(s, o)
  },
  Ke = 'transform',
  an = Ke + 'Origin',
  Ny = function t(e, n) {
    var i = this,
      r = this.target,
      s = r.style,
      o = r._gsap
    if (e in Mi && s) {
      if (((this.tfm = this.tfm || {}), e !== 'transform'))
        (e = oi[e] || e),
          ~e.indexOf(',')
            ? e.split(',').forEach(function (a) {
                return (i.tfm[a] = xi(r, a))
              })
            : (this.tfm[e] = o.x ? o[e] : xi(r, e)),
          e === an && (this.tfm.zOrigin = o.zOrigin)
      else
        return oi.transform.split(',').forEach(function (a) {
          return t.call(i, a, n)
        })
      if (this.props.indexOf(Ke) >= 0) return
      o.svg &&
        ((this.svgo = r.getAttribute('data-svg-origin')),
        this.props.push(an, n, '')),
        (e = Ke)
    }
    ;(s || n) && this.props.push(e, n, s[e])
  },
  Qg = function (e) {
    e.translate &&
      (e.removeProperty('translate'),
      e.removeProperty('scale'),
      e.removeProperty('rotate'))
  },
  By = function () {
    var e = this.props,
      n = this.target,
      i = n.style,
      r = n._gsap,
      s,
      o
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (n[e[s]] = e[s + 2])
        : e[s + 2]
          ? (i[e[s]] = e[s + 2])
          : i.removeProperty(
              e[s].substr(0, 2) === '--'
                ? e[s]
                : e[s].replace(df, '-$1').toLowerCase()
            )
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o]
      r.svg &&
        (r.renderTransform(),
        n.setAttribute('data-svg-origin', this.svgo || '')),
        (s = ff()),
        (!s || !s.isStart) &&
          !i[Ke] &&
          (Qg(i),
          r.zOrigin &&
            i[an] &&
            ((i[an] += ' ' + r.zOrigin + 'px'),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1))
    }
  },
  Zg = function (e, n) {
    var i = { target: e, props: [], revert: By, save: Ny }
    return (
      e._gsap || ln.core.getCache(e),
      n &&
        n.split(',').forEach(function (r) {
          return i.save(r)
        }),
      i
    )
  },
  Jg,
  ru = function (e, n) {
    var i = ji.createElementNS
      ? ji.createElementNS(
          (n || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
          e
        )
      : ji.createElement(e)
    return i && i.style ? i : ji.createElement(e)
  },
  ui = function t(e, n, i) {
    var r = getComputedStyle(e)
    return (
      r[n] ||
      r.getPropertyValue(n.replace(df, '-$1').toLowerCase()) ||
      r.getPropertyValue(n) ||
      (!i && t(e, xs(n) || n, 1)) ||
      ''
    )
  },
  Td = 'O,Moz,ms,Ms,Webkit'.split(','),
  xs = function (e, n, i) {
    var r = n || mr,
      s = r.style,
      o = 5
    if (e in s && !i) return e
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Td[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? 'ms' : o >= 0 ? Td[o] : '') + e
  },
  su = function () {
    Ey() &&
      window.document &&
      ((wd = window),
      (ji = wd.document),
      (cs = ji.documentElement),
      (mr = ru('div') || { style: {} }),
      ru('div'),
      (Ke = xs(Ke)),
      (an = Ke + 'Origin'),
      (mr.style.cssText =
        'border-width:0;line-height:0;position:absolute;padding:0'),
      (Jg = !!xs('perspective')),
      (ff = ln.core.reverting),
      (uf = 1))
  },
  tc = function t(e) {
    var n = ru(
        'svg',
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
          'http://www.w3.org/2000/svg'
      ),
      i = this.parentNode,
      r = this.nextSibling,
      s = this.style.cssText,
      o
    if (
      (cs.appendChild(n),
      n.appendChild(this),
      (this.style.display = 'block'),
      e)
    )
      try {
        ;(o = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t)
      } catch {}
    else this._gsapBBox && (o = this._gsapBBox())
    return (
      i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
      cs.removeChild(n),
      (this.style.cssText = s),
      o
    )
  },
  Ed = function (e, n) {
    for (var i = n.length; i--; )
      if (e.hasAttribute(n[i])) return e.getAttribute(n[i])
  },
  em = function (e) {
    var n
    try {
      n = e.getBBox()
    } catch {
      n = tc.call(e, !0)
    }
    return (
      (n && (n.width || n.height)) || e.getBBox === tc || (n = tc.call(e, !0)),
      n && !n.width && !n.x && !n.y
        ? {
            x: +Ed(e, ['x', 'cx', 'x1']) || 0,
            y: +Ed(e, ['y', 'cy', 'y1']) || 0,
            width: 0,
            height: 0
          }
        : n
    )
  },
  tm = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && em(e))
  },
  Mr = function (e, n) {
    if (n) {
      var i = e.style,
        r
      n in Mi && n !== an && (n = Ke),
        i.removeProperty
          ? ((r = n.substr(0, 2)),
            (r === 'ms' || n.substr(0, 6) === 'webkit') && (n = '-' + n),
            i.removeProperty(
              r === '--' ? n : n.replace(df, '-$1').toLowerCase()
            ))
          : i.removeAttribute(n)
    }
  },
  Vi = function (e, n, i, r, s, o) {
    var a = new on(e._pt, n, i, 0, 1, o ? Kg : Xg)
    return (e._pt = a), (a.b = r), (a.e = s), e._props.push(i), a
  },
  Cd = { deg: 1, rad: 1, turn: 1 },
  $y = { grid: 1, flex: 1 },
  Qi = function t(e, n, i, r) {
    var s = parseFloat(i) || 0,
      o = (i + '').trim().substr((s + '').length) || 'px',
      a = mr.style,
      l = Cy.test(n),
      c = e.tagName.toLowerCase() === 'svg',
      u = (c ? 'client' : 'offset') + (l ? 'Width' : 'Height'),
      f = 100,
      p = r === 'px',
      d = r === '%',
      g,
      h,
      y,
      w
    if (r === o || !s || Cd[r] || Cd[o]) return s
    if (
      (o !== 'px' && !p && (s = t(e, n, i, 'px')),
      (w = e.getCTM && tm(e)),
      (d || o === '%') && (Mi[n] || ~n.indexOf('adius')))
    )
      return (
        (g = w ? e.getBBox()[l ? 'width' : 'height'] : e[u]),
        tt(d ? (s / g) * f : (s / 100) * g)
      )
    if (
      ((a[l ? 'width' : 'height'] = f + (p ? o : r)),
      (h =
        ~n.indexOf('adius') || (r === 'em' && e.appendChild && !c)
          ? e
          : e.parentNode),
      w && (h = (e.ownerSVGElement || {}).parentNode),
      (!h || h === ji || !h.appendChild) && (h = ji.body),
      (y = h._gsap),
      y && d && y.width && l && y.time === mn.time && !y.uncache)
    )
      return tt((s / y.width) * f)
    if (d && (n === 'height' || n === 'width')) {
      var _ = e.style[n]
      ;(e.style[n] = f + r), (g = e[u]), _ ? (e.style[n] = _) : Mr(e, n)
    } else
      (d || o === '%') &&
        !$y[ui(h, 'display')] &&
        (a.position = ui(e, 'position')),
        h === e && (a.position = 'static'),
        h.appendChild(mr),
        (g = mr[u]),
        h.removeChild(mr),
        (a.position = 'absolute')
    return (
      l && d && ((y = br(h)), (y.time = mn.time), (y.width = h[u])),
      tt(p ? (g * s) / f : g && s ? (f / g) * s : 0)
    )
  },
  xi = function (e, n, i, r) {
    var s
    return (
      uf || su(),
      n in oi &&
        n !== 'transform' &&
        ((n = oi[n]), ~n.indexOf(',') && (n = n.split(',')[0])),
      Mi[n] && n !== 'transform'
        ? ((s = Vo(e, r)),
          (s =
            n !== 'transformOrigin'
              ? s[n]
              : s.svg
                ? s.origin
                : Za(ui(e, an)) + ' ' + s.zOrigin + 'px'))
        : ((s = e.style[n]),
          (!s || s === 'auto' || r || ~(s + '').indexOf('calc(')) &&
            (s =
              (Qa[n] && Qa[n](e, n, i)) ||
              ui(e, n) ||
              _g(e, n) ||
              (n === 'opacity' ? 1 : 0))),
      i && !~(s + '').trim().indexOf(' ') ? Qi(e, n, s, i) + i : s
    )
  },
  Fy = function (e, n, i, r) {
    if (!i || i === 'none') {
      var s = xs(n, e, 1),
        o = s && ui(e, s, 1)
      o && o !== i
        ? ((n = s), (i = o))
        : n === 'borderColor' && (i = ui(e, 'borderTopColor'))
    }
    var a = new on(this._pt, e.style, n, 0, 1, Ug),
      l = 0,
      c = 0,
      u,
      f,
      p,
      d,
      g,
      h,
      y,
      w,
      _,
      m,
      v,
      b
    if (
      ((a.b = i),
      (a.e = r),
      (i += ''),
      (r += ''),
      r === 'auto' &&
        ((h = e.style[n]),
        (e.style[n] = r),
        (r = ui(e, n) || r),
        h ? (e.style[n] = h) : Mr(e, n)),
      (u = [i, r]),
      zg(u),
      (i = u[0]),
      (r = u[1]),
      (p = i.match(Qr) || []),
      (b = r.match(Qr) || []),
      b.length)
    ) {
      for (; (f = Qr.exec(r)); )
        (y = f[0]),
          (_ = r.substring(l, f.index)),
          g
            ? (g = (g + 1) % 5)
            : (_.substr(-5) === 'rgba(' || _.substr(-5) === 'hsla(') && (g = 1),
          y !== (h = p[c++] || '') &&
            ((d = parseFloat(h) || 0),
            (v = h.substr((d + '').length)),
            y.charAt(1) === '=' && (y = ls(d, y) + v),
            (w = parseFloat(y)),
            (m = y.substr((w + '').length)),
            (l = Qr.lastIndex - m.length),
            m ||
              ((m = m || yn.units[n] || v),
              l === r.length && ((r += m), (a.e += m))),
            v !== m && (d = Qi(e, n, h, m) || 0),
            (a._pt = {
              _next: a._pt,
              p: _ || c === 1 ? _ : ',',
              s: d,
              c: w - d,
              m: (g && g < 4) || n === 'zIndex' ? Math.round : 0
            }))
      a.c = l < r.length ? r.substring(l, r.length) : ''
    } else a.r = n === 'display' && r === 'none' ? Kg : Xg
    return fg.test(r) && (a.e = 0), (this._pt = a), a
  },
  Pd = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
  jy = function (e) {
    var n = e.split(' '),
      i = n[0],
      r = n[1] || '50%'
    return (
      (i === 'top' || i === 'bottom' || r === 'left' || r === 'right') &&
        ((e = i), (i = r), (r = e)),
      (n[0] = Pd[i] || i),
      (n[1] = Pd[r] || r),
      n.join(' ')
    )
  },
  Vy = function (e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var i = n.t,
        r = i.style,
        s = n.u,
        o = i._gsap,
        a,
        l,
        c
      if (s === 'all' || s === !0) (r.cssText = ''), (l = 1)
      else
        for (s = s.split(','), c = s.length; --c > -1; )
          (a = s[c]),
            Mi[a] && ((l = 1), (a = a === 'transformOrigin' ? an : Ke)),
            Mr(i, a)
      l &&
        (Mr(i, Ke),
        o &&
          (o.svg && i.removeAttribute('transform'),
          Vo(i, 1),
          (o.uncache = 1),
          Qg(r)))
    }
  },
  Qa = {
    clearProps: function (e, n, i, r, s) {
      if (s.data !== 'isFromStart') {
        var o = (e._pt = new on(e._pt, n, i, 0, 0, Vy))
        return (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(i), 1
      }
    }
  },
  jo = [1, 0, 0, 1, 0, 0],
  nm = {},
  im = function (e) {
    return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e
  },
  Od = function (e) {
    var n = ui(e, Ke)
    return im(n) ? jo : n.substr(7).match(ug).map(tt)
  },
  pf = function (e, n) {
    var i = e._gsap || br(e),
      r = e.style,
      s = Od(e),
      o,
      a,
      l,
      c
    return i.svg && e.getAttribute('transform')
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(',') === '1,0,0,1,0,0' ? jo : s)
      : (s === jo &&
          !e.offsetParent &&
          e !== cs &&
          !i.svg &&
          ((l = r.display),
          (r.display = 'block'),
          (o = e.parentNode),
          (!o || !e.offsetParent) &&
            ((c = 1), (a = e.nextElementSibling), cs.appendChild(e)),
          (s = Od(e)),
          l ? (r.display = l) : Mr(e, 'display'),
          c &&
            (a
              ? o.insertBefore(e, a)
              : o
                ? o.appendChild(e)
                : cs.removeChild(e))),
        n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
  },
  ou = function (e, n, i, r, s, o) {
    var a = e._gsap,
      l = s || pf(e, !0),
      c = a.xOrigin || 0,
      u = a.yOrigin || 0,
      f = a.xOffset || 0,
      p = a.yOffset || 0,
      d = l[0],
      g = l[1],
      h = l[2],
      y = l[3],
      w = l[4],
      _ = l[5],
      m = n.split(' '),
      v = parseFloat(m[0]) || 0,
      b = parseFloat(m[1]) || 0,
      C,
      P,
      M,
      E
    i
      ? l !== jo &&
        (P = d * y - g * h) &&
        ((M = v * (y / P) + b * (-h / P) + (h * _ - y * w) / P),
        (E = v * (-g / P) + b * (d / P) - (d * _ - g * w) / P),
        (v = M),
        (b = E))
      : ((C = em(e)),
        (v = C.x + (~m[0].indexOf('%') ? (v / 100) * C.width : v)),
        (b = C.y + (~(m[1] || m[0]).indexOf('%') ? (b / 100) * C.height : b))),
      r || (r !== !1 && a.smooth)
        ? ((w = v - c),
          (_ = b - u),
          (a.xOffset = f + (w * d + _ * h) - w),
          (a.yOffset = p + (w * g + _ * y) - _))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = v),
      (a.yOrigin = b),
      (a.smooth = !!r),
      (a.origin = n),
      (a.originIsAbsolute = !!i),
      (e.style[an] = '0px 0px'),
      o &&
        (Vi(o, a, 'xOrigin', c, v),
        Vi(o, a, 'yOrigin', u, b),
        Vi(o, a, 'xOffset', f, a.xOffset),
        Vi(o, a, 'yOffset', p, a.yOffset)),
      e.setAttribute('data-svg-origin', v + ' ' + b)
  },
  Vo = function (e, n) {
    var i = e._gsap || new Fg(e)
    if ('x' in i && !n && !i.uncache) return i
    var r = e.style,
      s = i.scaleX < 0,
      o = 'px',
      a = 'deg',
      l = getComputedStyle(e),
      c = ui(e, an) || '0',
      u,
      f,
      p,
      d,
      g,
      h,
      y,
      w,
      _,
      m,
      v,
      b,
      C,
      P,
      M,
      E,
      O,
      I,
      L,
      z,
      j,
      Y,
      q,
      G,
      Q,
      le,
      k,
      he,
      _e,
      Ue,
      we,
      Ae
    return (
      (u = f = p = h = y = w = _ = m = v = 0),
      (d = g = 1),
      (i.svg = !!(e.getCTM && tm(e))),
      l.translate &&
        ((l.translate !== 'none' ||
          l.scale !== 'none' ||
          l.rotate !== 'none') &&
          (r[Ke] =
            (l.translate !== 'none'
              ? 'translate3d(' +
                (l.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                ') '
              : '') +
            (l.rotate !== 'none' ? 'rotate(' + l.rotate + ') ' : '') +
            (l.scale !== 'none'
              ? 'scale(' + l.scale.split(' ').join(',') + ') '
              : '') +
            (l[Ke] !== 'none' ? l[Ke] : '')),
        (r.scale = r.rotate = r.translate = 'none')),
      (P = pf(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((Q = e.getBBox()),
            (c = i.xOrigin - Q.x + 'px ' + (i.yOrigin - Q.y) + 'px'),
            (G = ''))
          : (G = !n && e.getAttribute('data-svg-origin')),
        ou(e, G || c, !!G || i.originIsAbsolute, i.smooth !== !1, P)),
      (b = i.xOrigin || 0),
      (C = i.yOrigin || 0),
      P !== jo &&
        ((I = P[0]),
        (L = P[1]),
        (z = P[2]),
        (j = P[3]),
        (u = Y = P[4]),
        (f = q = P[5]),
        P.length === 6
          ? ((d = Math.sqrt(I * I + L * L)),
            (g = Math.sqrt(j * j + z * z)),
            (h = I || L ? jr(L, I) * dr : 0),
            (_ = z || j ? jr(z, j) * dr + h : 0),
            _ && (g *= Math.abs(Math.cos(_ * us))),
            i.svg && ((u -= b - (b * I + C * z)), (f -= C - (b * L + C * j))))
          : ((Ae = P[6]),
            (Ue = P[7]),
            (k = P[8]),
            (he = P[9]),
            (_e = P[10]),
            (we = P[11]),
            (u = P[12]),
            (f = P[13]),
            (p = P[14]),
            (M = jr(Ae, _e)),
            (y = M * dr),
            M &&
              ((E = Math.cos(-M)),
              (O = Math.sin(-M)),
              (G = Y * E + k * O),
              (Q = q * E + he * O),
              (le = Ae * E + _e * O),
              (k = Y * -O + k * E),
              (he = q * -O + he * E),
              (_e = Ae * -O + _e * E),
              (we = Ue * -O + we * E),
              (Y = G),
              (q = Q),
              (Ae = le)),
            (M = jr(-z, _e)),
            (w = M * dr),
            M &&
              ((E = Math.cos(-M)),
              (O = Math.sin(-M)),
              (G = I * E - k * O),
              (Q = L * E - he * O),
              (le = z * E - _e * O),
              (we = j * O + we * E),
              (I = G),
              (L = Q),
              (z = le)),
            (M = jr(L, I)),
            (h = M * dr),
            M &&
              ((E = Math.cos(M)),
              (O = Math.sin(M)),
              (G = I * E + L * O),
              (Q = Y * E + q * O),
              (L = L * E - I * O),
              (q = q * E - Y * O),
              (I = G),
              (Y = Q)),
            y &&
              Math.abs(y) + Math.abs(h) > 359.9 &&
              ((y = h = 0), (w = 180 - w)),
            (d = tt(Math.sqrt(I * I + L * L + z * z))),
            (g = tt(Math.sqrt(q * q + Ae * Ae))),
            (M = jr(Y, q)),
            (_ = Math.abs(M) > 2e-4 ? M * dr : 0),
            (v = we ? 1 / (we < 0 ? -we : we) : 0)),
        i.svg &&
          ((G = e.getAttribute('transform')),
          (i.forceCSS = e.setAttribute('transform', '') || !im(ui(e, Ke))),
          G && e.setAttribute('transform', G))),
      Math.abs(_) > 90 &&
        Math.abs(_) < 270 &&
        (s
          ? ((d *= -1), (_ += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
          : ((g *= -1), (_ += _ <= 0 ? 180 : -180))),
      (n = n || i.uncache),
      (i.x =
        u -
        ((i.xPercent =
          u &&
          ((!n && i.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * i.xPercent) / 100
          : 0) +
        o),
      (i.y =
        f -
        ((i.yPercent =
          f &&
          ((!n && i.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetHeight * i.yPercent) / 100
          : 0) +
        o),
      (i.z = p + o),
      (i.scaleX = tt(d)),
      (i.scaleY = tt(g)),
      (i.rotation = tt(h) + a),
      (i.rotationX = tt(y) + a),
      (i.rotationY = tt(w) + a),
      (i.skewX = _ + a),
      (i.skewY = m + a),
      (i.transformPerspective = v + o),
      (i.zOrigin = parseFloat(c.split(' ')[2]) || (!n && i.zOrigin) || 0) &&
        (r[an] = Za(c)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = yn.force3D),
      (i.renderTransform = i.svg ? Gy : Jg ? rm : Hy),
      (i.uncache = 0),
      i
    )
  },
  Za = function (e) {
    return (e = e.split(' '))[0] + ' ' + e[1]
  },
  nc = function (e, n, i) {
    var r = It(n)
    return tt(parseFloat(n) + parseFloat(Qi(e, 'x', i + 'px', r))) + r
  },
  Hy = function (e, n) {
    ;(n.z = '0px'),
      (n.rotationY = n.rotationX = '0deg'),
      (n.force3D = 0),
      rm(e, n)
  },
  cr = '0deg',
  Gs = '0px',
  ur = ') ',
  rm = function (e, n) {
    var i = n || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.z,
      c = i.rotation,
      u = i.rotationY,
      f = i.rotationX,
      p = i.skewX,
      d = i.skewY,
      g = i.scaleX,
      h = i.scaleY,
      y = i.transformPerspective,
      w = i.force3D,
      _ = i.target,
      m = i.zOrigin,
      v = '',
      b = (w === 'auto' && e && e !== 1) || w === !0
    if (m && (f !== cr || u !== cr)) {
      var C = parseFloat(u) * us,
        P = Math.sin(C),
        M = Math.cos(C),
        E
      ;(C = parseFloat(f) * us),
        (E = Math.cos(C)),
        (o = nc(_, o, P * E * -m)),
        (a = nc(_, a, -Math.sin(C) * -m)),
        (l = nc(_, l, M * E * -m + m))
    }
    y !== Gs && (v += 'perspective(' + y + ur),
      (r || s) && (v += 'translate(' + r + '%, ' + s + '%) '),
      (b || o !== Gs || a !== Gs || l !== Gs) &&
        (v +=
          l !== Gs || b
            ? 'translate3d(' + o + ', ' + a + ', ' + l + ') '
            : 'translate(' + o + ', ' + a + ur),
      c !== cr && (v += 'rotate(' + c + ur),
      u !== cr && (v += 'rotateY(' + u + ur),
      f !== cr && (v += 'rotateX(' + f + ur),
      (p !== cr || d !== cr) && (v += 'skew(' + p + ', ' + d + ur),
      (g !== 1 || h !== 1) && (v += 'scale(' + g + ', ' + h + ur),
      (_.style[Ke] = v || 'translate(0, 0)')
  },
  Gy = function (e, n) {
    var i = n || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.rotation,
      c = i.skewX,
      u = i.skewY,
      f = i.scaleX,
      p = i.scaleY,
      d = i.target,
      g = i.xOrigin,
      h = i.yOrigin,
      y = i.xOffset,
      w = i.yOffset,
      _ = i.forceCSS,
      m = parseFloat(o),
      v = parseFloat(a),
      b,
      C,
      P,
      M,
      E
    ;(l = parseFloat(l)),
      (c = parseFloat(c)),
      (u = parseFloat(u)),
      u && ((u = parseFloat(u)), (c += u), (l += u)),
      l || c
        ? ((l *= us),
          (c *= us),
          (b = Math.cos(l) * f),
          (C = Math.sin(l) * f),
          (P = Math.sin(l - c) * -p),
          (M = Math.cos(l - c) * p),
          c &&
            ((u *= us),
            (E = Math.tan(c - u)),
            (E = Math.sqrt(1 + E * E)),
            (P *= E),
            (M *= E),
            u &&
              ((E = Math.tan(u)),
              (E = Math.sqrt(1 + E * E)),
              (b *= E),
              (C *= E))),
          (b = tt(b)),
          (C = tt(C)),
          (P = tt(P)),
          (M = tt(M)))
        : ((b = f), (M = p), (C = P = 0)),
      ((m && !~(o + '').indexOf('px')) || (v && !~(a + '').indexOf('px'))) &&
        ((m = Qi(d, 'x', o, 'px')), (v = Qi(d, 'y', a, 'px'))),
      (g || h || y || w) &&
        ((m = tt(m + g - (g * b + h * P) + y)),
        (v = tt(v + h - (g * C + h * M) + w))),
      (r || s) &&
        ((E = d.getBBox()),
        (m = tt(m + (r / 100) * E.width)),
        (v = tt(v + (s / 100) * E.height))),
      (E =
        'matrix(' + b + ',' + C + ',' + P + ',' + M + ',' + m + ',' + v + ')'),
      d.setAttribute('transform', E),
      _ && (d.style[Ke] = E)
  },
  Wy = function (e, n, i, r, s) {
    var o = 360,
      a = yt(s),
      l = parseFloat(s) * (a && ~s.indexOf('rad') ? dr : 1),
      c = l - r,
      u = r + c + 'deg',
      f,
      p
    return (
      a &&
        ((f = s.split('_')[1]),
        f === 'short' && ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -o)),
        f === 'cw' && c < 0
          ? (c = ((c + o * Sd) % o) - ~~(c / o) * o)
          : f === 'ccw' && c > 0 && (c = ((c - o * Sd) % o) - ~~(c / o) * o)),
      (e._pt = p = new on(e._pt, n, i, r, c, Oy)),
      (p.e = u),
      (p.u = 'deg'),
      e._props.push(i),
      p
    )
  },
  Ad = function (e, n) {
    for (var i in n) e[i] = n[i]
    return e
  },
  Uy = function (e, n, i) {
    var r = Ad({}, i._gsap),
      s = 'perspective,force3D,transformOrigin,svgOrigin',
      o = i.style,
      a,
      l,
      c,
      u,
      f,
      p,
      d,
      g
    r.svg
      ? ((c = i.getAttribute('transform')),
        i.setAttribute('transform', ''),
        (o[Ke] = n),
        (a = Vo(i, 1)),
        Mr(i, Ke),
        i.setAttribute('transform', c))
      : ((c = getComputedStyle(i)[Ke]),
        (o[Ke] = n),
        (a = Vo(i, 1)),
        (o[Ke] = c))
    for (l in Mi)
      (c = r[l]),
        (u = a[l]),
        c !== u &&
          s.indexOf(l) < 0 &&
          ((d = It(c)),
          (g = It(u)),
          (f = d !== g ? Qi(i, l, c, g) : parseFloat(c)),
          (p = parseFloat(u)),
          (e._pt = new on(e._pt, a, l, f, p - f, iu)),
          (e._pt.u = g || 0),
          e._props.push(l))
    Ad(a, r)
  }
sn('padding,margin,Width,Radius', function (t, e) {
  var n = 'Top',
    i = 'Right',
    r = 'Bottom',
    s = 'Left',
    o = (e < 3 ? [n, i, r, s] : [n + s, n + i, r + i, r + s]).map(function (a) {
      return e < 2 ? t + a : 'border' + a + t
    })
  Qa[e > 1 ? 'border' + t : t] = function (a, l, c, u, f) {
    var p, d
    if (arguments.length < 4)
      return (
        (p = o.map(function (g) {
          return xi(a, g, c)
        })),
        (d = p.join(' ')),
        d.split(p[0]).length === 5 ? p[0] : d
      )
    ;(p = (u + '').split(' ')),
      (d = {}),
      o.forEach(function (g, h) {
        return (d[g] = p[h] = p[h] || p[((h - 1) / 2) | 0])
      }),
      a.init(l, d, f)
  }
})
var sm = {
  name: 'css',
  register: su,
  targetTest: function (e) {
    return e.style && e.nodeType
  },
  init: function (e, n, i, r, s) {
    var o = this._props,
      a = e.style,
      l = i.vars.startAt,
      c,
      u,
      f,
      p,
      d,
      g,
      h,
      y,
      w,
      _,
      m,
      v,
      b,
      C,
      P,
      M
    uf || su(),
      (this.styles = this.styles || Zg(e)),
      (M = this.styles.props),
      (this.tween = i)
    for (h in n)
      if (h !== 'autoRound' && ((u = n[h]), !(hn[h] && jg(h, n, i, r, e, s)))) {
        if (
          ((d = typeof u),
          (g = Qa[h]),
          d === 'function' && ((u = u.call(i, r, e, s)), (d = typeof u)),
          d === 'string' && ~u.indexOf('random(') && (u = Bo(u)),
          g)
        )
          g(this, e, h, u, i) && (P = 1)
        else if (h.substr(0, 2) === '--')
          (c = (getComputedStyle(e).getPropertyValue(h) + '').trim()),
            (u += ''),
            (Yi.lastIndex = 0),
            Yi.test(c) || ((y = It(c)), (w = It(u))),
            w ? y !== w && (c = Qi(e, h, c, w) + w) : y && (u += y),
            this.add(a, 'setProperty', c, u, r, s, 0, 0, h),
            o.push(h),
            M.push(h, 0, a[h])
        else if (d !== 'undefined') {
          if (
            (l && h in l
              ? ((c = typeof l[h] == 'function' ? l[h].call(i, r, e, s) : l[h]),
                yt(c) && ~c.indexOf('random(') && (c = Bo(c)),
                It(c + '') ||
                  c === 'auto' ||
                  (c += yn.units[h] || It(xi(e, h)) || ''),
                (c + '').charAt(1) === '=' && (c = xi(e, h)))
              : (c = xi(e, h)),
            (p = parseFloat(c)),
            (_ = d === 'string' && u.charAt(1) === '=' && u.substr(0, 2)),
            _ && (u = u.substr(2)),
            (f = parseFloat(u)),
            h in oi &&
              (h === 'autoAlpha' &&
                (p === 1 && xi(e, 'visibility') === 'hidden' && f && (p = 0),
                M.push('visibility', 0, a.visibility),
                Vi(
                  this,
                  a,
                  'visibility',
                  p ? 'inherit' : 'hidden',
                  f ? 'inherit' : 'hidden',
                  !f
                )),
              h !== 'scale' &&
                h !== 'transform' &&
                ((h = oi[h]), ~h.indexOf(',') && (h = h.split(',')[0]))),
            (m = h in Mi),
            m)
          ) {
            if (
              (this.styles.save(h),
              v ||
                ((b = e._gsap),
                (b.renderTransform && !n.parseTransform) ||
                  Vo(e, n.parseTransform),
                (C = n.smoothOrigin !== !1 && b.smooth),
                (v = this._pt =
                  new on(this._pt, a, Ke, 0, 1, b.renderTransform, b, 0, -1)),
                (v.dep = 1)),
              h === 'scale')
            )
              (this._pt = new on(
                this._pt,
                b,
                'scaleY',
                b.scaleY,
                (_ ? ls(b.scaleY, _ + f) : f) - b.scaleY || 0,
                iu
              )),
                (this._pt.u = 0),
                o.push('scaleY', h),
                (h += 'X')
            else if (h === 'transformOrigin') {
              M.push(an, 0, a[an]),
                (u = jy(u)),
                b.svg
                  ? ou(e, u, 0, C, 0, this)
                  : ((w = parseFloat(u.split(' ')[2]) || 0),
                    w !== b.zOrigin && Vi(this, b, 'zOrigin', b.zOrigin, w),
                    Vi(this, a, h, Za(c), Za(u)))
              continue
            } else if (h === 'svgOrigin') {
              ou(e, u, 1, C, 0, this)
              continue
            } else if (h in nm) {
              Wy(this, b, h, p, _ ? ls(p, _ + u) : u)
              continue
            } else if (h === 'smoothOrigin') {
              Vi(this, b, 'smooth', b.smooth, u)
              continue
            } else if (h === 'force3D') {
              b[h] = u
              continue
            } else if (h === 'transform') {
              Uy(this, u, e)
              continue
            }
          } else h in a || (h = xs(h) || h)
          if (m || ((f || f === 0) && (p || p === 0) && !Py.test(u) && h in a))
            (y = (c + '').substr((p + '').length)),
              f || (f = 0),
              (w = It(u) || (h in yn.units ? yn.units[h] : y)),
              y !== w && (p = Qi(e, h, c, w)),
              (this._pt = new on(
                this._pt,
                m ? b : a,
                h,
                p,
                (_ ? ls(p, _ + f) : f) - p,
                !m && (w === 'px' || h === 'zIndex') && n.autoRound !== !1
                  ? My
                  : iu
              )),
              (this._pt.u = w || 0),
              y !== w && w !== '%' && ((this._pt.b = c), (this._pt.r = Ay))
          else if (h in a) Fy.call(this, e, h, c, _ ? _ + u : u)
          else if (h in e) this.add(e, h, c || e[h], _ ? _ + u : u, r, s)
          else if (h !== 'parseTransform') {
            ef(h, u)
            continue
          }
          m || (h in a ? M.push(h, 0, a[h]) : M.push(h, 1, c || e[h])),
            o.push(h)
        }
      }
    P && qg(this)
  },
  render: function (e, n) {
    if (n.tween._time || !ff())
      for (var i = n._pt; i; ) i.r(e, i.d), (i = i._next)
    else n.styles.revert()
  },
  get: xi,
  aliases: oi,
  getSetter: function (e, n, i) {
    var r = oi[n]
    return (
      r && r.indexOf(',') < 0 && (n = r),
      n in Mi && n !== an && (e._gsap.x || xi(e, 'x'))
        ? i && xd === i
          ? n === 'scale'
            ? Dy
            : Ly
          : (xd = i || {}) && (n === 'scale' ? Iy : zy)
        : e.style && !Qu(e.style[n])
          ? ky
          : ~n.indexOf('-')
            ? Ry
            : lf(e, n)
    )
  },
  core: { _removeProperty: Mr, _getMatrix: pf }
}
ln.utils.checkPrefix = xs
ln.core.getStyleSaver = Zg
;(function (t, e, n, i) {
  var r = sn(t + ',' + e + ',' + n, function (s) {
    Mi[s] = 1
  })
  sn(e, function (s) {
    ;(yn.units[s] = 'deg'), (nm[s] = 1)
  }),
    (oi[r[13]] = t + ',' + e),
    sn(i, function (s) {
      var o = s.split(':')
      oi[o[1]] = r[o[0]]
    })
})(
  'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
  'rotation,rotationX,rotationY,skewX,skewY',
  'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
  '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
)
sn(
  'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
  function (t) {
    yn.units[t] = 'px'
  }
)
ln.registerPlugin(sm)
var ut = ln.registerPlugin(sm) || ln
ut.core.Tween
function qy(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n]
    ;(i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(t, i.key, i)
  }
}
function Yy(t, e, n) {
  return qy(t.prototype, e), t
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Et,
  Ma,
  _n,
  Hi,
  Gi,
  fs,
  om,
  pr,
  mo,
  am,
  Ci,
  Gn,
  lm,
  cm = function () {
    return (
      Et ||
      (typeof window < 'u' && (Et = window.gsap) && Et.registerPlugin && Et)
    )
  },
  um = 1,
  Jr = [],
  Se = [],
  fi = [],
  _o = Date.now,
  au = function (e, n) {
    return n
  },
  Xy = function () {
    var e = mo.core,
      n = e.bridge || {},
      i = e._scrollers,
      r = e._proxies
    i.push.apply(i, Se),
      r.push.apply(r, fi),
      (Se = i),
      (fi = r),
      (au = function (o, a) {
        return n[o](a)
      })
  },
  Xi = function (e, n) {
    return ~fi.indexOf(e) && fi[fi.indexOf(e) + 1][n]
  },
  vo = function (e) {
    return !!~am.indexOf(e)
  },
  Vt = function (e, n, i, r, s) {
    return e.addEventListener(n, i, { passive: r !== !1, capture: !!s })
  },
  Ft = function (e, n, i, r) {
    return e.removeEventListener(n, i, !!r)
  },
  la = 'scrollLeft',
  ca = 'scrollTop',
  lu = function () {
    return (Ci && Ci.isPressed) || Se.cache++
  },
  Ja = function (e, n) {
    var i = function r(s) {
      if (s || s === 0) {
        um && (_n.history.scrollRestoration = 'manual')
        var o = Ci && Ci.isPressed
        ;(s = r.v = Math.round(s) || (Ci && Ci.iOS ? 1 : 0)),
          e(s),
          (r.cacheID = Se.cache),
          o && au('ss', s)
      } else
        (n || Se.cache !== r.cacheID || au('ref')) &&
          ((r.cacheID = Se.cache), (r.v = e()))
      return r.v + r.offset
    }
    return (i.offset = 0), e && i
  },
  Xt = {
    s: la,
    p: 'left',
    p2: 'Left',
    os: 'right',
    os2: 'Right',
    d: 'width',
    d2: 'Width',
    a: 'x',
    sc: Ja(function (t) {
      return arguments.length
        ? _n.scrollTo(t, ft.sc())
        : _n.pageXOffset || Hi[la] || Gi[la] || fs[la] || 0
    })
  },
  ft = {
    s: ca,
    p: 'top',
    p2: 'Top',
    os: 'bottom',
    os2: 'Bottom',
    d: 'height',
    d2: 'Height',
    a: 'y',
    op: Xt,
    sc: Ja(function (t) {
      return arguments.length
        ? _n.scrollTo(Xt.sc(), t)
        : _n.pageYOffset || Hi[ca] || Gi[ca] || fs[ca] || 0
    })
  },
  Jt = function (e, n) {
    return (
      ((n && n._ctx && n._ctx.selector) || Et.utils.toArray)(e)[0] ||
      (typeof e == 'string' && Et.config().nullTargetWarn !== !1
        ? console.warn('Element not found:', e)
        : null)
    )
  },
  Zi = function (e, n) {
    var i = n.s,
      r = n.sc
    vo(e) && (e = Hi.scrollingElement || Gi)
    var s = Se.indexOf(e),
      o = r === ft.sc ? 1 : 2
    !~s && (s = Se.push(e) - 1), Se[s + o] || Vt(e, 'scroll', lu)
    var a = Se[s + o],
      l =
        a ||
        (Se[s + o] =
          Ja(Xi(e, i), !0) ||
          (vo(e)
            ? r
            : Ja(function (c) {
                return arguments.length ? (e[i] = c) : e[i]
              })))
    return (
      (l.target = e),
      a || (l.smooth = Et.getProperty(e, 'scrollBehavior') === 'smooth'),
      l
    )
  },
  cu = function (e, n, i) {
    var r = e,
      s = e,
      o = _o(),
      a = o,
      l = n || 50,
      c = Math.max(500, l * 3),
      u = function (g, h) {
        var y = _o()
        h || y - o > l
          ? ((s = r), (r = g), (a = o), (o = y))
          : i
            ? (r += g)
            : (r = s + ((g - s) / (y - a)) * (o - a))
      },
      f = function () {
        ;(s = r = i ? 0 : r), (a = o = 0)
      },
      p = function (g) {
        var h = a,
          y = s,
          w = _o()
        return (
          (g || g === 0) && g !== r && u(g),
          o === a || w - a > c
            ? 0
            : ((r + (i ? y : -y)) / ((i ? w : o) - h)) * 1e3
        )
      }
    return { update: u, reset: f, getVelocity: p }
  },
  Ws = function (e, n) {
    return (
      n && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    )
  },
  Md = function (e) {
    var n = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e)
    return Math.abs(n) >= Math.abs(i) ? n : i
  },
  fm = function () {
    ;(mo = Et.core.globals().ScrollTrigger), mo && mo.core && Xy()
  },
  dm = function (e) {
    return (
      (Et = e || cm()),
      !Ma &&
        Et &&
        typeof document < 'u' &&
        document.body &&
        ((_n = window),
        (Hi = document),
        (Gi = Hi.documentElement),
        (fs = Hi.body),
        (am = [_n, Hi, Gi, fs]),
        Et.utils.clamp,
        (lm = Et.core.context || function () {}),
        (pr = 'onpointerenter' in fs ? 'pointer' : 'mouse'),
        (om = it.isTouch =
          _n.matchMedia &&
          _n.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in _n ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Gn = it.eventTypes =
          (
            'ontouchstart' in Gi
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in Gi
                ? 'pointerdown,pointermove,pointercancel,pointerup'
                : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (um = 0)
        }, 500),
        fm(),
        (Ma = 1)),
      Ma
    )
  }
Xt.op = ft
Se.cache = 0
var it = (function () {
  function t(n) {
    this.init(n)
  }
  var e = t.prototype
  return (
    (e.init = function (i) {
      Ma || dm(Et) || console.warn('Please gsap.registerPlugin(Observer)'),
        mo || fm()
      var r = i.tolerance,
        s = i.dragMinimum,
        o = i.type,
        a = i.target,
        l = i.lineHeight,
        c = i.debounce,
        u = i.preventDefault,
        f = i.onStop,
        p = i.onStopDelay,
        d = i.ignore,
        g = i.wheelSpeed,
        h = i.event,
        y = i.onDragStart,
        w = i.onDragEnd,
        _ = i.onDrag,
        m = i.onPress,
        v = i.onRelease,
        b = i.onRight,
        C = i.onLeft,
        P = i.onUp,
        M = i.onDown,
        E = i.onChangeX,
        O = i.onChangeY,
        I = i.onChange,
        L = i.onToggleX,
        z = i.onToggleY,
        j = i.onHover,
        Y = i.onHoverEnd,
        q = i.onMove,
        G = i.ignoreCheck,
        Q = i.isNormalizer,
        le = i.onGestureStart,
        k = i.onGestureEnd,
        he = i.onWheel,
        _e = i.onEnable,
        Ue = i.onDisable,
        we = i.onClick,
        Ae = i.scrollSpeed,
        Oe = i.capture,
        D = i.allowClicks,
        W = i.lockAxis,
        V = i.onLockAxis
      ;(this.target = a = Jt(a) || Gi),
        (this.vars = i),
        d && (d = Et.utils.toArray(d)),
        (r = r || 1e-9),
        (s = s || 0),
        (g = g || 1),
        (Ae = Ae || 1),
        (o = o || 'wheel,touch,pointer'),
        (c = c !== !1),
        l || (l = parseFloat(_n.getComputedStyle(fs).lineHeight) || 22)
      var Z,
        oe,
        S,
        x,
        A,
        N,
        B,
        T = this,
        U = 0,
        H = 0,
        F = i.passive || !u,
        $ = Zi(a, Xt),
        ne = Zi(a, ft),
        X = $(),
        te = ne(),
        J =
          ~o.indexOf('touch') &&
          !~o.indexOf('pointer') &&
          Gn[0] === 'pointerdown',
        ce = vo(a),
        ie = a.ownerDocument || Hi,
        ue = [0, 0, 0],
        Be = [0, 0, 0],
        Ve = 0,
        Ct = function () {
          return (Ve = _o())
        },
        Me = function (se, ke) {
          return (
            ((T.event = se) && d && ~d.indexOf(se.target)) ||
            (ke && J && se.pointerType !== 'touch') ||
            (G && G(se, ke))
          )
        },
        Xn = function () {
          T._vx.reset(), T._vy.reset(), oe.pause(), f && f(T)
        },
        Bn = function () {
          var se = (T.deltaX = Md(ue)),
            ke = (T.deltaY = Md(Be)),
            K = Math.abs(se) >= r,
            me = Math.abs(ke) >= r
          I && (K || me) && I(T, se, ke, ue, Be),
            K &&
              (b && T.deltaX > 0 && b(T),
              C && T.deltaX < 0 && C(T),
              E && E(T),
              L && T.deltaX < 0 != U < 0 && L(T),
              (U = T.deltaX),
              (ue[0] = ue[1] = ue[2] = 0)),
            me &&
              (M && T.deltaY > 0 && M(T),
              P && T.deltaY < 0 && P(T),
              O && O(T),
              z && T.deltaY < 0 != H < 0 && z(T),
              (H = T.deltaY),
              (Be[0] = Be[1] = Be[2] = 0)),
            (x || S) && (q && q(T), S && (_(T), (S = !1)), (x = !1)),
            N && !(N = !1) && V && V(T),
            A && (he(T), (A = !1)),
            (Z = 0)
        },
        rt = function (se, ke, K) {
          ;(ue[K] += se),
            (Be[K] += ke),
            T._vx.update(se),
            T._vy.update(ke),
            c ? Z || (Z = requestAnimationFrame(Bn)) : Bn()
        },
        wt = function (se, ke) {
          W &&
            !B &&
            ((T.axis = B = Math.abs(se) > Math.abs(ke) ? 'x' : 'y'), (N = !0)),
            B !== 'y' && ((ue[2] += se), T._vx.update(se, !0)),
            B !== 'x' && ((Be[2] += ke), T._vy.update(ke, !0)),
            c ? Z || (Z = requestAnimationFrame(Bn)) : Bn()
        },
        $n = function (se) {
          if (!Me(se, 1)) {
            se = Ws(se, u)
            var ke = se.clientX,
              K = se.clientY,
              me = ke - T.x,
              re = K - T.y,
              de = T.isDragging
            ;(T.x = ke),
              (T.y = K),
              (de ||
                Math.abs(T.startX - ke) >= s ||
                Math.abs(T.startY - K) >= s) &&
                (_ && (S = !0),
                de || (T.isDragging = !0),
                wt(me, re),
                de || (y && y(T)))
          }
        },
        ir = (T.onPress = function (ge) {
          Me(ge, 1) ||
            (ge && ge.button) ||
            ((T.axis = B = null),
            oe.pause(),
            (T.isPressed = !0),
            (ge = Ws(ge)),
            (U = H = 0),
            (T.startX = T.x = ge.clientX),
            (T.startY = T.y = ge.clientY),
            T._vx.reset(),
            T._vy.reset(),
            Vt(Q ? a : ie, Gn[1], $n, F, !0),
            (T.deltaX = T.deltaY = 0),
            m && m(T))
        }),
        xe = (T.onRelease = function (ge) {
          if (!Me(ge, 1)) {
            Ft(Q ? a : ie, Gn[1], $n, !0)
            var se = !isNaN(T.y - T.startY),
              ke = T.isDragging,
              K =
                ke &&
                (Math.abs(T.x - T.startX) > 3 || Math.abs(T.y - T.startY) > 3),
              me = Ws(ge)
            !K &&
              se &&
              (T._vx.reset(),
              T._vy.reset(),
              u &&
                D &&
                Et.delayedCall(0.08, function () {
                  if (_o() - Ve > 300 && !ge.defaultPrevented) {
                    if (ge.target.click) ge.target.click()
                    else if (ie.createEvent) {
                      var re = ie.createEvent('MouseEvents')
                      re.initMouseEvent(
                        'click',
                        !0,
                        !0,
                        _n,
                        1,
                        me.screenX,
                        me.screenY,
                        me.clientX,
                        me.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        ge.target.dispatchEvent(re)
                    }
                  }
                })),
              (T.isDragging = T.isGesturing = T.isPressed = !1),
              f && ke && !Q && oe.restart(!0),
              w && ke && w(T),
              v && v(T, K)
          }
        }),
        rr = function (se) {
          return (
            se.touches &&
            se.touches.length > 1 &&
            (T.isGesturing = !0) &&
            le(se, T.isDragging)
          )
        },
        Fn = function () {
          return (T.isGesturing = !1) || k(T)
        },
        jn = function (se) {
          if (!Me(se)) {
            var ke = $(),
              K = ne()
            rt((ke - X) * Ae, (K - te) * Ae, 1),
              (X = ke),
              (te = K),
              f && oe.restart(!0)
          }
        },
        Vn = function (se) {
          if (!Me(se)) {
            ;(se = Ws(se, u)), he && (A = !0)
            var ke =
              (se.deltaMode === 1
                ? l
                : se.deltaMode === 2
                  ? _n.innerHeight
                  : 1) * g
            rt(se.deltaX * ke, se.deltaY * ke, 0), f && !Q && oe.restart(!0)
          }
        },
        sr = function (se) {
          if (!Me(se)) {
            var ke = se.clientX,
              K = se.clientY,
              me = ke - T.x,
              re = K - T.y
            ;(T.x = ke),
              (T.y = K),
              (x = !0),
              f && oe.restart(!0),
              (me || re) && wt(me, re)
          }
        },
        $r = function (se) {
          ;(T.event = se), j(T)
        },
        mi = function (se) {
          ;(T.event = se), Y(T)
        },
        Ns = function (se) {
          return Me(se) || (Ws(se, u) && we(T))
        }
      ;(oe = T._dc = Et.delayedCall(p || 0.25, Xn).pause()),
        (T.deltaX = T.deltaY = 0),
        (T._vx = cu(0, 50, !0)),
        (T._vy = cu(0, 50, !0)),
        (T.scrollX = $),
        (T.scrollY = ne),
        (T.isDragging = T.isGesturing = T.isPressed = !1),
        lm(this),
        (T.enable = function (ge) {
          return (
            T.isEnabled ||
              (Vt(ce ? ie : a, 'scroll', lu),
              o.indexOf('scroll') >= 0 && Vt(ce ? ie : a, 'scroll', jn, F, Oe),
              o.indexOf('wheel') >= 0 && Vt(a, 'wheel', Vn, F, Oe),
              ((o.indexOf('touch') >= 0 && om) || o.indexOf('pointer') >= 0) &&
                (Vt(a, Gn[0], ir, F, Oe),
                Vt(ie, Gn[2], xe),
                Vt(ie, Gn[3], xe),
                D && Vt(a, 'click', Ct, !0, !0),
                we && Vt(a, 'click', Ns),
                le && Vt(ie, 'gesturestart', rr),
                k && Vt(ie, 'gestureend', Fn),
                j && Vt(a, pr + 'enter', $r),
                Y && Vt(a, pr + 'leave', mi),
                q && Vt(a, pr + 'move', sr)),
              (T.isEnabled = !0),
              ge && ge.type && ir(ge),
              _e && _e(T)),
            T
          )
        }),
        (T.disable = function () {
          T.isEnabled &&
            (Jr.filter(function (ge) {
              return ge !== T && vo(ge.target)
            }).length || Ft(ce ? ie : a, 'scroll', lu),
            T.isPressed &&
              (T._vx.reset(), T._vy.reset(), Ft(Q ? a : ie, Gn[1], $n, !0)),
            Ft(ce ? ie : a, 'scroll', jn, Oe),
            Ft(a, 'wheel', Vn, Oe),
            Ft(a, Gn[0], ir, Oe),
            Ft(ie, Gn[2], xe),
            Ft(ie, Gn[3], xe),
            Ft(a, 'click', Ct, !0),
            Ft(a, 'click', Ns),
            Ft(ie, 'gesturestart', rr),
            Ft(ie, 'gestureend', Fn),
            Ft(a, pr + 'enter', $r),
            Ft(a, pr + 'leave', mi),
            Ft(a, pr + 'move', sr),
            (T.isEnabled = T.isPressed = T.isDragging = !1),
            Ue && Ue(T))
        }),
        (T.kill = T.revert =
          function () {
            T.disable()
            var ge = Jr.indexOf(T)
            ge >= 0 && Jr.splice(ge, 1), Ci === T && (Ci = 0)
          }),
        Jr.push(T),
        Q && vo(a) && (Ci = T),
        T.enable(h)
    }),
    Yy(t, [
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
    t
  )
})()
it.version = '3.12.5'
it.create = function (t) {
  return new it(t)
}
it.register = dm
it.getAll = function () {
  return Jr.slice()
}
it.getById = function (t) {
  return Jr.filter(function (e) {
    return e.vars.id === t
  })[0]
}
cm() && Et.registerPlugin(it)
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ee,
  Ur,
  Ee,
  Ye,
  Wn,
  je,
  pm,
  el,
  Ho,
  bo,
  to,
  ua,
  Mt,
  Pl,
  uu,
  Gt,
  kd,
  Rd,
  qr,
  hm,
  ic,
  gm,
  Ht,
  fu,
  mm,
  _m,
  Ii,
  du,
  hf,
  ds,
  gf,
  tl,
  pu,
  rc,
  fa = 1,
  kt = Date.now,
  sc = kt(),
  Dn = 0,
  no = 0,
  Ld = function (e, n, i) {
    var r = pn(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1)
    return (i['_' + n + 'Clamp'] = r), r ? e.substr(6, e.length - 7) : e
  },
  Dd = function (e, n) {
    return n && (!pn(e) || e.substr(0, 6) !== 'clamp(') ? 'clamp(' + e + ')' : e
  },
  Ky = function t() {
    return no && requestAnimationFrame(t)
  },
  Id = function () {
    return (Pl = 1)
  },
  zd = function () {
    return (Pl = 0)
  },
  ii = function (e) {
    return e
  },
  io = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  vm = function () {
    return typeof window < 'u'
  },
  bm = function () {
    return ee || (vm() && (ee = window.gsap) && ee.registerPlugin && ee)
  },
  kr = function (e) {
    return !!~pm.indexOf(e)
  },
  ym = function (e) {
    return (
      (e === 'Height' ? gf : Ee['inner' + e]) ||
      Wn['client' + e] ||
      je['client' + e]
    )
  },
  wm = function (e) {
    return (
      Xi(e, 'getBoundingClientRect') ||
      (kr(e)
        ? function () {
            return (Ia.width = Ee.innerWidth), (Ia.height = gf), Ia
          }
        : function () {
            return Ei(e)
          })
    )
  },
  Qy = function (e, n, i) {
    var r = i.d,
      s = i.d2,
      o = i.a
    return (o = Xi(e, 'getBoundingClientRect'))
      ? function () {
          return o()[r]
        }
      : function () {
          return (n ? ym(s) : e['client' + s]) || 0
        }
  },
  Zy = function (e, n) {
    return !n || ~fi.indexOf(e)
      ? wm(e)
      : function () {
          return Ia
        }
  },
  ai = function (e, n) {
    var i = n.s,
      r = n.d2,
      s = n.d,
      o = n.a
    return Math.max(
      0,
      (i = 'scroll' + r) && (o = Xi(e, i))
        ? o() - wm(e)()[s]
        : kr(e)
          ? (Wn[i] || je[i]) - ym(r)
          : e[i] - e['offset' + r]
    )
  },
  da = function (e, n) {
    for (var i = 0; i < qr.length; i += 3)
      (!n || ~n.indexOf(qr[i + 1])) && e(qr[i], qr[i + 1], qr[i + 2])
  },
  pn = function (e) {
    return typeof e == 'string'
  },
  Kt = function (e) {
    return typeof e == 'function'
  },
  ro = function (e) {
    return typeof e == 'number'
  },
  hr = function (e) {
    return typeof e == 'object'
  },
  Us = function (e, n, i) {
    return e && e.progress(n ? 0 : 1) && i && e.pause()
  },
  oc = function (e, n) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return n(e)
          })
        : n(e)
      i && i.totalTime && (e.callbackAnimation = i)
    }
  },
  Vr = Math.abs,
  xm = 'left',
  Sm = 'top',
  mf = 'right',
  _f = 'bottom',
  Sr = 'width',
  Tr = 'height',
  yo = 'Right',
  wo = 'Left',
  xo = 'Top',
  So = 'Bottom',
  st = 'padding',
  Pn = 'margin',
  Ss = 'Width',
  vf = 'Height',
  ct = 'px',
  On = function (e) {
    return Ee.getComputedStyle(e)
  },
  Jy = function (e) {
    var n = On(e).position
    e.style.position = n === 'absolute' || n === 'fixed' ? n : 'relative'
  },
  Nd = function (e, n) {
    for (var i in n) i in e || (e[i] = n[i])
    return e
  },
  Ei = function (e, n) {
    var i =
        n &&
        On(e)[uu] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
        ee
          .to(e, {
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
          })
          .progress(1),
      r = e.getBoundingClientRect()
    return i && i.progress(0).kill(), r
  },
  nl = function (e, n) {
    var i = n.d2
    return e['offset' + i] || e['client' + i] || 0
  },
  Tm = function (e) {
    var n = [],
      i = e.labels,
      r = e.duration(),
      s
    for (s in i) n.push(i[s] / r)
    return n
  },
  ew = function (e) {
    return function (n) {
      return ee.utils.snap(Tm(e), n)
    }
  },
  bf = function (e) {
    var n = ee.utils.snap(e),
      i =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, s) {
          return r - s
        })
    return i
      ? function (r, s, o) {
          o === void 0 && (o = 0.001)
          var a
          if (!s) return n(r)
          if (s > 0) {
            for (r -= o, a = 0; a < i.length; a++) if (i[a] >= r) return i[a]
            return i[a - 1]
          } else for (a = i.length, r += o; a--; ) if (i[a] <= r) return i[a]
          return i[0]
        }
      : function (r, s, o) {
          o === void 0 && (o = 0.001)
          var a = n(r)
          return !s || Math.abs(a - r) < o || a - r < 0 == s < 0
            ? a
            : n(s < 0 ? r - e : r + e)
        }
  },
  tw = function (e) {
    return function (n, i) {
      return bf(Tm(e))(n, i.direction)
    }
  },
  pa = function (e, n, i, r) {
    return i.split(',').forEach(function (s) {
      return e(n, s, r)
    })
  },
  ht = function (e, n, i, r, s) {
    return e.addEventListener(n, i, { passive: !r, capture: !!s })
  },
  pt = function (e, n, i, r) {
    return e.removeEventListener(n, i, !!r)
  },
  ha = function (e, n, i) {
    ;(i = i && i.wheelHandler), i && (e(n, 'wheel', i), e(n, 'touchmove', i))
  },
  Bd = {
    startColor: 'green',
    endColor: 'red',
    indent: 0,
    fontSize: '16px',
    fontWeight: 'normal'
  },
  ga = { toggleActions: 'play', anticipatePin: 0 },
  il = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  ka = function (e, n) {
    if (pn(e)) {
      var i = e.indexOf('='),
        r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0
      ~i && (e.indexOf('%') > i && (r *= n / 100), (e = e.substr(0, i - 1))),
        (e =
          r +
          (e in il
            ? il[e] * n
            : ~e.indexOf('%')
              ? (parseFloat(e) * n) / 100
              : parseFloat(e) || 0))
    }
    return e
  },
  ma = function (e, n, i, r, s, o, a, l) {
    var c = s.startColor,
      u = s.endColor,
      f = s.fontSize,
      p = s.indent,
      d = s.fontWeight,
      g = Ye.createElement('div'),
      h = kr(i) || Xi(i, 'pinType') === 'fixed',
      y = e.indexOf('scroller') !== -1,
      w = h ? je : i,
      _ = e.indexOf('start') !== -1,
      m = _ ? c : u,
      v =
        'border-color:' +
        m +
        ';font-size:' +
        f +
        ';color:' +
        m +
        ';font-weight:' +
        d +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
    return (
      (v += 'position:' + ((y || l) && h ? 'fixed;' : 'absolute;')),
      (y || l || !h) &&
        (v += (r === ft ? mf : _f) + ':' + (o + parseFloat(p)) + 'px;'),
      a &&
        (v +=
          'box-sizing:border-box;text-align:left;width:' +
          a.offsetWidth +
          'px;'),
      (g._isStart = _),
      g.setAttribute('class', 'gsap-marker-' + e + (n ? ' marker-' + n : '')),
      (g.style.cssText = v),
      (g.innerText = n || n === 0 ? e + '-' + n : e),
      w.children[0] ? w.insertBefore(g, w.children[0]) : w.appendChild(g),
      (g._offset = g['offset' + r.op.d2]),
      Ra(g, 0, r, _),
      g
    )
  },
  Ra = function (e, n, i, r) {
    var s = { display: 'block' },
      o = i[r ? 'os2' : 'p2'],
      a = i[r ? 'p2' : 'os2']
    ;(e._isFlipped = r),
      (s[i.a + 'Percent'] = r ? -100 : 0),
      (s[i.a] = r ? '1px' : 0),
      (s['border' + o + Ss] = 1),
      (s['border' + a + Ss] = 0),
      (s[i.p] = n + 'px'),
      ee.set(e, s)
  },
  be = [],
  hu = {},
  Go,
  $d = function () {
    return kt() - Dn > 34 && (Go || (Go = requestAnimationFrame(Oi)))
  },
  Hr = function () {
    ;(!Ht || !Ht.isPressed || Ht.startX > je.clientWidth) &&
      (Se.cache++,
      Ht ? Go || (Go = requestAnimationFrame(Oi)) : Oi(),
      Dn || Lr('scrollStart'),
      (Dn = kt()))
  },
  ac = function () {
    ;(_m = Ee.innerWidth), (mm = Ee.innerHeight)
  },
  so = function () {
    Se.cache++,
      !Mt &&
        !gm &&
        !Ye.fullscreenElement &&
        !Ye.webkitFullscreenElement &&
        (!fu ||
          _m !== Ee.innerWidth ||
          Math.abs(Ee.innerHeight - mm) > Ee.innerHeight * 0.25) &&
        el.restart(!0)
  },
  Rr = {},
  nw = [],
  Em = function t() {
    return pt(ye, 'scrollEnd', t) || _r(!0)
  },
  Lr = function (e) {
    return (
      (Rr[e] &&
        Rr[e].map(function (n) {
          return n()
        })) ||
      nw
    )
  },
  dn = [],
  Cm = function (e) {
    for (var n = 0; n < dn.length; n += 5)
      (!e || (dn[n + 4] && dn[n + 4].query === e)) &&
        ((dn[n].style.cssText = dn[n + 1]),
        dn[n].getBBox && dn[n].setAttribute('transform', dn[n + 2] || ''),
        (dn[n + 3].uncache = 1))
  },
  yf = function (e, n) {
    var i
    for (Gt = 0; Gt < be.length; Gt++)
      (i = be[Gt]),
        i && (!n || i._ctx === n) && (e ? i.kill(1) : i.revert(!0, !0))
    ;(tl = !0), n && Cm(n), n || Lr('revert')
  },
  Pm = function (e, n) {
    Se.cache++,
      (n || !Wt) &&
        Se.forEach(function (i) {
          return Kt(i) && i.cacheID++ && (i.rec = 0)
        }),
      pn(e) && (Ee.history.scrollRestoration = hf = e)
  },
  Wt,
  Er = 0,
  Fd,
  iw = function () {
    if (Fd !== Er) {
      var e = (Fd = Er)
      requestAnimationFrame(function () {
        return e === Er && _r(!0)
      })
    }
  },
  Om = function () {
    je.appendChild(ds),
      (gf = (!Ht && ds.offsetHeight) || Ee.innerHeight),
      je.removeChild(ds)
  },
  jd = function (e) {
    return Ho(
      '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end'
    ).forEach(function (n) {
      return (n.style.display = e ? 'none' : 'block')
    })
  },
  _r = function (e, n) {
    if (Dn && !e && !tl) {
      ht(ye, 'scrollEnd', Em)
      return
    }
    Om(),
      (Wt = ye.isRefreshing = !0),
      Se.forEach(function (r) {
        return Kt(r) && ++r.cacheID && (r.rec = r())
      })
    var i = Lr('refreshInit')
    hm && ye.sort(),
      n || yf(),
      Se.forEach(function (r) {
        Kt(r) && (r.smooth && (r.target.style.scrollBehavior = 'auto'), r(0))
      }),
      be.slice(0).forEach(function (r) {
        return r.refresh()
      }),
      (tl = !1),
      be.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var s = r.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
            o = r.pin[s]
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - o), r.refresh()
        }
      }),
      (pu = 1),
      jd(!0),
      be.forEach(function (r) {
        var s = ai(r.scroller, r._dir),
          o = r.vars.end === 'max' || (r._endClamp && r.end > s),
          a = r._startClamp && r.start >= s
        ;(o || a) &&
          r.setPositions(
            a ? s - 1 : r.start,
            o ? Math.max(a ? s : r.start + 1, s) : r.end,
            !0
          )
      }),
      jd(!1),
      (pu = 0),
      i.forEach(function (r) {
        return r && r.render && r.render(-1)
      }),
      Se.forEach(function (r) {
        Kt(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = 'smooth')
            }),
          r.rec && r(r.rec))
      }),
      Pm(hf, 1),
      el.pause(),
      Er++,
      (Wt = 2),
      Oi(2),
      be.forEach(function (r) {
        return Kt(r.vars.onRefresh) && r.vars.onRefresh(r)
      }),
      (Wt = ye.isRefreshing = !1),
      Lr('refresh')
  },
  gu = 0,
  La = 1,
  To,
  Oi = function (e) {
    if (e === 2 || (!Wt && !tl)) {
      ;(ye.isUpdating = !0), To && To.update(0)
      var n = be.length,
        i = kt(),
        r = i - sc >= 50,
        s = n && be[0].scroll()
      if (
        ((La = gu > s ? -1 : 1),
        Wt || (gu = s),
        r &&
          (Dn && !Pl && i - Dn > 200 && ((Dn = 0), Lr('scrollEnd')),
          (to = sc),
          (sc = i)),
        La < 0)
      ) {
        for (Gt = n; Gt-- > 0; ) be[Gt] && be[Gt].update(0, r)
        La = 1
      } else for (Gt = 0; Gt < n; Gt++) be[Gt] && be[Gt].update(0, r)
      ye.isUpdating = !1
    }
    Go = 0
  },
  mu = [
    xm,
    Sm,
    _f,
    mf,
    Pn + So,
    Pn + yo,
    Pn + xo,
    Pn + wo,
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
  Da = mu.concat([
    Sr,
    Tr,
    'boxSizing',
    'max' + Ss,
    'max' + vf,
    'position',
    Pn,
    st,
    st + xo,
    st + yo,
    st + So,
    st + wo
  ]),
  rw = function (e, n, i) {
    ps(i)
    var r = e._gsap
    if (r.spacerIsNative) ps(r.spacerState)
    else if (e._gsap.swappedIn) {
      var s = n.parentNode
      s && (s.insertBefore(e, n), s.removeChild(n))
    }
    e._gsap.swappedIn = !1
  },
  lc = function (e, n, i, r) {
    if (!e._gsap.swappedIn) {
      for (var s = mu.length, o = n.style, a = e.style, l; s--; )
        (l = mu[s]), (o[l] = i[l])
      ;(o.position = i.position === 'absolute' ? 'absolute' : 'relative'),
        i.display === 'inline' && (o.display = 'inline-block'),
        (a[_f] = a[mf] = 'auto'),
        (o.flexBasis = i.flexBasis || 'auto'),
        (o.overflow = 'visible'),
        (o.boxSizing = 'border-box'),
        (o[Sr] = nl(e, Xt) + ct),
        (o[Tr] = nl(e, ft) + ct),
        (o[st] = a[Pn] = a[Sm] = a[xm] = '0'),
        ps(r),
        (a[Sr] = a['max' + Ss] = i[Sr]),
        (a[Tr] = a['max' + vf] = i[Tr]),
        (a[st] = i[st]),
        e.parentNode !== n &&
          (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0)
    }
  },
  sw = /([A-Z])/g,
  ps = function (e) {
    if (e) {
      var n = e.t.style,
        i = e.length,
        r = 0,
        s,
        o
      for ((e.t._gsap || ee.core.getCache(e.t)).uncache = 1; r < i; r += 2)
        (o = e[r + 1]),
          (s = e[r]),
          o
            ? (n[s] = o)
            : n[s] && n.removeProperty(s.replace(sw, '-$1').toLowerCase())
    }
  },
  _a = function (e) {
    for (var n = Da.length, i = e.style, r = [], s = 0; s < n; s++)
      r.push(Da[s], i[Da[s]])
    return (r.t = e), r
  },
  ow = function (e, n, i) {
    for (var r = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
      (a = e[o]), r.push(a, a in n ? n[a] : e[o + 1])
    return (r.t = e.t), r
  },
  Ia = { left: 0, top: 0 },
  Vd = function (e, n, i, r, s, o, a, l, c, u, f, p, d, g) {
    Kt(e) && (e = e(l)),
      pn(e) &&
        e.substr(0, 3) === 'max' &&
        (e = p + (e.charAt(4) === '=' ? ka('0' + e.substr(3), i) : 0))
    var h = d ? d.time() : 0,
      y,
      w,
      _
    if ((d && d.seek(0), isNaN(e) || (e = +e), ro(e)))
      d &&
        (e = ee.utils.mapRange(
          d.scrollTrigger.start,
          d.scrollTrigger.end,
          0,
          p,
          e
        )),
        a && Ra(a, i, r, !0)
    else {
      Kt(n) && (n = n(l))
      var m = (e || '0').split(' '),
        v,
        b,
        C,
        P
      ;(_ = Jt(n, l) || je),
        (v = Ei(_) || {}),
        (!v || (!v.left && !v.top)) &&
          On(_).display === 'none' &&
          ((P = _.style.display),
          (_.style.display = 'block'),
          (v = Ei(_)),
          P ? (_.style.display = P) : _.style.removeProperty('display')),
        (b = ka(m[0], v[r.d])),
        (C = ka(m[1] || '0', i)),
        (e = v[r.p] - c[r.p] - u + b + s - C),
        a && Ra(a, C, r, i - C < 20 || (a._isStart && C > 20)),
        (i -= i - C)
    }
    if ((g && ((l[g] = e || -0.001), e < 0 && (e = 0)), o)) {
      var M = e + i,
        E = o._isStart
      ;(y = 'scroll' + r.d2),
        Ra(
          o,
          M,
          r,
          (E && M > 20) ||
            (!E && (f ? Math.max(je[y], Wn[y]) : o.parentNode[y]) <= M + 1)
        ),
        f &&
          ((c = Ei(a)),
          f && (o.style[r.op.p] = c[r.op.p] - r.op.m - o._offset + ct))
    }
    return (
      d &&
        _ &&
        ((y = Ei(_)),
        d.seek(p),
        (w = Ei(_)),
        (d._caScrollDist = y[r.p] - w[r.p]),
        (e = (e / d._caScrollDist) * p)),
      d && d.seek(h),
      d ? e : Math.round(e)
    )
  },
  aw = /(webkit|moz|length|cssText|inset)/i,
  Hd = function (e, n, i, r) {
    if (e.parentNode !== n) {
      var s = e.style,
        o,
        a
      if (n === je) {
        ;(e._stOrig = s.cssText), (a = On(e))
        for (o in a)
          !+o &&
            !aw.test(o) &&
            a[o] &&
            typeof s[o] == 'string' &&
            o !== '0' &&
            (s[o] = a[o])
        ;(s.top = i), (s.left = r)
      } else s.cssText = e._stOrig
      ;(ee.core.getCache(e).uncache = 1), n.appendChild(e)
    }
  },
  Am = function (e, n, i) {
    var r = n,
      s = r
    return function (o) {
      var a = Math.round(e())
      return (
        a !== r &&
          a !== s &&
          Math.abs(a - r) > 3 &&
          Math.abs(a - s) > 3 &&
          ((o = a), i && i()),
        (s = r),
        (r = o),
        o
      )
    }
  },
  va = function (e, n, i) {
    var r = {}
    ;(r[n.p] = '+=' + i), ee.set(e, r)
  },
  Gd = function (e, n) {
    var i = Zi(e, n),
      r = '_scroll' + n.p2,
      s = function o(a, l, c, u, f) {
        var p = o.tween,
          d = l.onComplete,
          g = {}
        c = c || i()
        var h = Am(i, c, function () {
          p.kill(), (o.tween = 0)
        })
        return (
          (f = (u && f) || 0),
          (u = u || a - c),
          p && p.kill(),
          (l[r] = a),
          (l.inherit = !1),
          (l.modifiers = g),
          (g[r] = function () {
            return h(c + u * p.ratio + f * p.ratio * p.ratio)
          }),
          (l.onUpdate = function () {
            Se.cache++, o.tween && Oi()
          }),
          (l.onComplete = function () {
            ;(o.tween = 0), d && d.call(p)
          }),
          (p = o.tween = ee.to(e, l)),
          p
        )
      }
    return (
      (e[r] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0)
      }),
      ht(e, 'wheel', i.wheelHandler),
      ye.isTouch && ht(e, 'touchmove', i.wheelHandler),
      s
    )
  },
  ye = (function () {
    function t(n, i) {
      Ur ||
        t.register(ee) ||
        console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
        du(this),
        this.init(n, i)
    }
    var e = t.prototype
    return (
      (e.init = function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !no)
        ) {
          this.update = this.refresh = this.kill = ii
          return
        }
        i = Nd(pn(i) || ro(i) || i.nodeType ? { trigger: i } : i, ga)
        var s = i,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          c = s.onToggle,
          u = s.onRefresh,
          f = s.scrub,
          p = s.trigger,
          d = s.pin,
          g = s.pinSpacing,
          h = s.invalidateOnRefresh,
          y = s.anticipatePin,
          w = s.onScrubComplete,
          _ = s.onSnapComplete,
          m = s.once,
          v = s.snap,
          b = s.pinReparent,
          C = s.pinSpacer,
          P = s.containerAnimation,
          M = s.fastScrollEnd,
          E = s.preventOverlaps,
          O =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Xt
              : ft,
          I = !f && f !== 0,
          L = Jt(i.scroller || Ee),
          z = ee.core.getCache(L),
          j = kr(L),
          Y =
            ('pinType' in i
              ? i.pinType
              : Xi(L, 'pinType') || (j && 'fixed')) === 'fixed',
          q = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          G = I && i.toggleActions.split(' '),
          Q = 'markers' in i ? i.markers : ga.markers,
          le = j ? 0 : parseFloat(On(L)['border' + O.p2 + Ss]) || 0,
          k = this,
          he =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(k)
            },
          _e = Qy(L, j, O),
          Ue = Zy(L, j),
          we = 0,
          Ae = 0,
          Oe = 0,
          D = Zi(L, O),
          W,
          V,
          Z,
          oe,
          S,
          x,
          A,
          N,
          B,
          T,
          U,
          H,
          F,
          $,
          ne,
          X,
          te,
          J,
          ce,
          ie,
          ue,
          Be,
          Ve,
          Ct,
          Me,
          Xn,
          Bn,
          rt,
          wt,
          $n,
          ir,
          xe,
          rr,
          Fn,
          jn,
          Vn,
          sr,
          $r,
          mi
        if (
          ((k._startClamp = k._endClamp = !1),
          (k._dir = O),
          (y *= 45),
          (k.scroller = L),
          (k.scroll = P ? P.time.bind(P) : D),
          (oe = D()),
          (k.vars = i),
          (r = r || i.animation),
          'refreshPriority' in i &&
            ((hm = 1), i.refreshPriority === -9999 && (To = k)),
          (z.tweenScroll = z.tweenScroll || {
            top: Gd(L, ft),
            left: Gd(L, Xt)
          }),
          (k.tweenTo = W = z.tweenScroll[O.p]),
          (k.scrubDuration = function (K) {
            ;(rr = ro(K) && K),
              rr
                ? xe
                  ? xe.duration(K)
                  : (xe = ee.to(r, {
                      ease: 'expo',
                      totalProgress: '+=0',
                      inherit: !1,
                      duration: rr,
                      paused: !0,
                      onComplete: function () {
                        return w && w(k)
                      }
                    }))
                : (xe && xe.progress(1).kill(), (xe = 0))
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !k.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (k.animation = r.pause()),
            (r.scrollTrigger = k),
            k.scrubDuration(f),
            ($n = 0),
            l || (l = r.vars.id)),
          v &&
            ((!hr(v) || v.push) && (v = { snapTo: v }),
            'scrollBehavior' in je.style &&
              ee.set(j ? [je, Wn] : L, { scrollBehavior: 'auto' }),
            Se.forEach(function (K) {
              return (
                Kt(K) &&
                K.target === (j ? Ye.scrollingElement || Wn : L) &&
                (K.smooth = !1)
              )
            }),
            (Z = Kt(v.snapTo)
              ? v.snapTo
              : v.snapTo === 'labels'
                ? ew(r)
                : v.snapTo === 'labelsDirectional'
                  ? tw(r)
                  : v.directional !== !1
                    ? function (K, me) {
                        return bf(v.snapTo)(
                          K,
                          kt() - Ae < 500 ? 0 : me.direction
                        )
                      }
                    : ee.utils.snap(v.snapTo)),
            (Fn = v.duration || { min: 0.1, max: 2 }),
            (Fn = hr(Fn) ? bo(Fn.min, Fn.max) : bo(Fn, Fn)),
            (jn = ee
              .delayedCall(v.delay || rr / 2 || 0.1, function () {
                var K = D(),
                  me = kt() - Ae < 500,
                  re = W.tween
                if (
                  (me || Math.abs(k.getVelocity()) < 10) &&
                  !re &&
                  !Pl &&
                  we !== K
                ) {
                  var de = (K - x) / $,
                    dt = r && !I ? r.totalProgress() : de,
                    Te = me ? 0 : ((dt - ir) / (kt() - to)) * 1e3 || 0,
                    et = ee.utils.clamp(-de, 1 - de, (Vr(Te / 2) * Te) / 0.185),
                    Pt = de + (v.inertia === !1 ? 0 : et),
                    Qe,
                    He,
                    Ie = v,
                    Hn = Ie.onStart,
                    qe = Ie.onInterrupt,
                    cn = Ie.onComplete
                  if (
                    ((Qe = Z(Pt, k)),
                    ro(Qe) || (Qe = Pt),
                    (He = Math.round(x + Qe * $)),
                    K <= A && K >= x && He !== K)
                  ) {
                    if (re && !re._initted && re.data <= Vr(He - K)) return
                    v.inertia === !1 && (et = Qe - de),
                      W(
                        He,
                        {
                          duration: Fn(
                            Vr(
                              (Math.max(Vr(Pt - dt), Vr(Qe - dt)) * 0.185) /
                                Te /
                                0.05 || 0
                            )
                          ),
                          ease: v.ease || 'power3',
                          data: Vr(He - K),
                          onInterrupt: function () {
                            return jn.restart(!0) && qe && qe(k)
                          },
                          onComplete: function () {
                            k.update(),
                              (we = D()),
                              r &&
                                (xe
                                  ? xe.resetTo(
                                      'totalProgress',
                                      Qe,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(Qe)),
                              ($n = ir =
                                r && !I ? r.totalProgress() : k.progress),
                              _ && _(k),
                              cn && cn(k)
                          }
                        },
                        K,
                        et * $,
                        He - K - et * $
                      ),
                      Hn && Hn(k, W.tween)
                  }
                } else k.isActive && we !== K && jn.restart(!0)
              })
              .pause())),
          l && (hu[l] = k),
          (p = k.trigger = Jt(p || (d !== !0 && d))),
          (mi = p && p._gsap && p._gsap.stRevert),
          mi && (mi = mi(k)),
          (d = d === !0 ? p : Jt(d)),
          pn(a) && (a = { targets: p, className: a }),
          d &&
            (g === !1 ||
              g === Pn ||
              (g =
                !g &&
                d.parentNode &&
                d.parentNode.style &&
                On(d.parentNode).display === 'flex'
                  ? !1
                  : st),
            (k.pin = d),
            (V = ee.core.getCache(d)),
            V.spacer
              ? (ne = V.pinState)
              : (C &&
                  ((C = Jt(C)),
                  C && !C.nodeType && (C = C.current || C.nativeElement),
                  (V.spacerIsNative = !!C),
                  C && (V.spacerState = _a(C))),
                (V.spacer = J = C || Ye.createElement('div')),
                J.classList.add('pin-spacer'),
                l && J.classList.add('pin-spacer-' + l),
                (V.pinState = ne = _a(d))),
            i.force3D !== !1 && ee.set(d, { force3D: !0 }),
            (k.spacer = J = V.spacer),
            (wt = On(d)),
            (Ct = wt[g + O.os2]),
            (ie = ee.getProperty(d)),
            (ue = ee.quickSetter(d, O.a, ct)),
            lc(d, J, wt),
            (te = _a(d))),
          Q)
        ) {
          ;(H = hr(Q) ? Nd(Q, Bd) : Bd),
            (T = ma('scroller-start', l, L, O, H, 0)),
            (U = ma('scroller-end', l, L, O, H, 0, T)),
            (ce = T['offset' + O.op.d2])
          var Ns = Jt(Xi(L, 'content') || L)
          ;(N = this.markerStart = ma('start', l, Ns, O, H, ce, 0, P)),
            (B = this.markerEnd = ma('end', l, Ns, O, H, ce, 0, P)),
            P && ($r = ee.quickSetter([N, B], O.a, ct)),
            !Y &&
              !(fi.length && Xi(L, 'fixedMarkers') === !0) &&
              (Jy(j ? je : L),
              ee.set([T, U], { force3D: !0 }),
              (Xn = ee.quickSetter(T, O.a, ct)),
              (rt = ee.quickSetter(U, O.a, ct)))
        }
        if (P) {
          var ge = P.vars.onUpdate,
            se = P.vars.onUpdateParams
          P.eventCallback('onUpdate', function () {
            k.update(0, 0, 1), ge && ge.apply(P, se || [])
          })
        }
        if (
          ((k.previous = function () {
            return be[be.indexOf(k) - 1]
          }),
          (k.next = function () {
            return be[be.indexOf(k) + 1]
          }),
          (k.revert = function (K, me) {
            if (!me) return k.kill(!0)
            var re = K !== !1 || !k.enabled,
              de = Mt
            re !== k.isReverted &&
              (re &&
                ((Vn = Math.max(D(), k.scroll.rec || 0)),
                (Oe = k.progress),
                (sr = r && r.progress())),
              N &&
                [N, B, T, U].forEach(function (dt) {
                  return (dt.style.display = re ? 'none' : 'block')
                }),
              re && ((Mt = k), k.update(re)),
              d &&
                (!b || !k.isActive) &&
                (re ? rw(d, J, ne) : lc(d, J, On(d), Me)),
              re || k.update(re),
              (Mt = de),
              (k.isReverted = re))
          }),
          (k.refresh = function (K, me, re, de) {
            if (!((Mt || !k.enabled) && !me)) {
              if (d && K && Dn) {
                ht(t, 'scrollEnd', Em)
                return
              }
              !Wt && he && he(k),
                (Mt = k),
                W.tween && !re && (W.tween.kill(), (W.tween = 0)),
                xe && xe.pause(),
                h && r && r.revert({ kill: !1 }).invalidate(),
                k.isReverted || k.revert(!0, !0),
                (k._subPinOffset = !1)
              var dt = _e(),
                Te = Ue(),
                et = P ? P.duration() : ai(L, O),
                Pt = $ <= 0.01,
                Qe = 0,
                He = de || 0,
                Ie = hr(re) ? re.end : i.end,
                Hn = i.endTrigger || p,
                qe = hr(re)
                  ? re.start
                  : i.start || (i.start === 0 || !p ? 0 : d ? '0 0' : '0 100%'),
                cn = (k.pinnedContainer =
                  i.pinnedContainer && Jt(i.pinnedContainer, k)),
                Kn = (p && Math.max(0, be.indexOf(k))) || 0,
                xt = Kn,
                St,
                Ot,
                or,
                na,
                At,
                lt,
                Qn,
                Nl,
                $f,
                Bs,
                Zn,
                $s,
                ia
              for (
                Q &&
                hr(re) &&
                (($s = ee.getProperty(T, O.p)), (ia = ee.getProperty(U, O.p)));
                xt--;

              )
                (lt = be[xt]),
                  lt.end || lt.refresh(0, 1) || (Mt = k),
                  (Qn = lt.pin),
                  Qn &&
                    (Qn === p || Qn === d || Qn === cn) &&
                    !lt.isReverted &&
                    (Bs || (Bs = []), Bs.unshift(lt), lt.revert(!0, !0)),
                  lt !== be[xt] && (Kn--, xt--)
              for (
                Kt(qe) && (qe = qe(k)),
                  qe = Ld(qe, 'start', k),
                  x =
                    Vd(
                      qe,
                      p,
                      dt,
                      O,
                      D(),
                      N,
                      T,
                      k,
                      Te,
                      le,
                      Y,
                      et,
                      P,
                      k._startClamp && '_startClamp'
                    ) || (d ? -0.001 : 0),
                  Kt(Ie) && (Ie = Ie(k)),
                  pn(Ie) &&
                    !Ie.indexOf('+=') &&
                    (~Ie.indexOf(' ')
                      ? (Ie = (pn(qe) ? qe.split(' ')[0] : '') + Ie)
                      : ((Qe = ka(Ie.substr(2), dt)),
                        (Ie = pn(qe)
                          ? qe
                          : (P
                              ? ee.utils.mapRange(
                                  0,
                                  P.duration(),
                                  P.scrollTrigger.start,
                                  P.scrollTrigger.end,
                                  x
                                )
                              : x) + Qe),
                        (Hn = p))),
                  Ie = Ld(Ie, 'end', k),
                  A =
                    Math.max(
                      x,
                      Vd(
                        Ie || (Hn ? '100% 0' : et),
                        Hn,
                        dt,
                        O,
                        D() + Qe,
                        B,
                        U,
                        k,
                        Te,
                        le,
                        Y,
                        et,
                        P,
                        k._endClamp && '_endClamp'
                      )
                    ) || -0.001,
                  Qe = 0,
                  xt = Kn;
                xt--;

              )
                (lt = be[xt]),
                  (Qn = lt.pin),
                  Qn &&
                    lt.start - lt._pinPush <= x &&
                    !P &&
                    lt.end > 0 &&
                    ((St =
                      lt.end -
                      (k._startClamp ? Math.max(0, lt.start) : lt.start)),
                    ((Qn === p && lt.start - lt._pinPush < x) || Qn === cn) &&
                      isNaN(qe) &&
                      (Qe += St * (1 - lt.progress)),
                    Qn === d && (He += St))
              if (
                ((x += Qe),
                (A += Qe),
                k._startClamp && (k._startClamp += Qe),
                k._endClamp &&
                  !Wt &&
                  ((k._endClamp = A || -0.001), (A = Math.min(A, ai(L, O)))),
                ($ = A - x || ((x -= 0.01) && 0.001)),
                Pt && (Oe = ee.utils.clamp(0, 1, ee.utils.normalize(x, A, Vn))),
                (k._pinPush = He),
                N &&
                  Qe &&
                  ((St = {}),
                  (St[O.a] = '+=' + Qe),
                  cn && (St[O.p] = '-=' + D()),
                  ee.set([N, B], St)),
                d && !(pu && k.end >= ai(L, O)))
              )
                (St = On(d)),
                  (na = O === ft),
                  (or = D()),
                  (Be = parseFloat(ie(O.a)) + He),
                  !et &&
                    A > 1 &&
                    ((Zn = (j ? Ye.scrollingElement || Wn : L).style),
                    (Zn = {
                      style: Zn,
                      value: Zn['overflow' + O.a.toUpperCase()]
                    }),
                    j &&
                      On(je)['overflow' + O.a.toUpperCase()] !== 'scroll' &&
                      (Zn.style['overflow' + O.a.toUpperCase()] = 'scroll')),
                  lc(d, J, St),
                  (te = _a(d)),
                  (Ot = Ei(d, !0)),
                  (Nl = Y && Zi(L, na ? Xt : ft)()),
                  g
                    ? ((Me = [g + O.os2, $ + He + ct]),
                      (Me.t = J),
                      (xt = g === st ? nl(d, O) + $ + He : 0),
                      xt &&
                        (Me.push(O.d, xt + ct),
                        J.style.flexBasis !== 'auto' &&
                          (J.style.flexBasis = xt + ct)),
                      ps(Me),
                      cn &&
                        be.forEach(function (Fs) {
                          Fs.pin === cn &&
                            Fs.vars.pinSpacing !== !1 &&
                            (Fs._subPinOffset = !0)
                        }),
                      Y && D(Vn))
                    : ((xt = nl(d, O)),
                      xt &&
                        J.style.flexBasis !== 'auto' &&
                        (J.style.flexBasis = xt + ct)),
                  Y &&
                    ((At = {
                      top: Ot.top + (na ? or - x : Nl) + ct,
                      left: Ot.left + (na ? Nl : or - x) + ct,
                      boxSizing: 'border-box',
                      position: 'fixed'
                    }),
                    (At[Sr] = At['max' + Ss] = Math.ceil(Ot.width) + ct),
                    (At[Tr] = At['max' + vf] = Math.ceil(Ot.height) + ct),
                    (At[Pn] =
                      At[Pn + xo] =
                      At[Pn + yo] =
                      At[Pn + So] =
                      At[Pn + wo] =
                        '0'),
                    (At[st] = St[st]),
                    (At[st + xo] = St[st + xo]),
                    (At[st + yo] = St[st + yo]),
                    (At[st + So] = St[st + So]),
                    (At[st + wo] = St[st + wo]),
                    (X = ow(ne, At, b)),
                    Wt && D(0)),
                  r
                    ? (($f = r._initted),
                      ic(1),
                      r.render(r.duration(), !0, !0),
                      (Ve = ie(O.a) - Be + $ + He),
                      (Bn = Math.abs($ - Ve) > 1),
                      Y && Bn && X.splice(X.length - 2, 2),
                      r.render(0, !0, !0),
                      $f || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      ic(0))
                    : (Ve = $),
                  Zn &&
                    (Zn.value
                      ? (Zn.style['overflow' + O.a.toUpperCase()] = Zn.value)
                      : Zn.style.removeProperty('overflow-' + O.a))
              else if (p && D() && !P)
                for (Ot = p.parentNode; Ot && Ot !== je; )
                  Ot._pinOffset && ((x -= Ot._pinOffset), (A -= Ot._pinOffset)),
                    (Ot = Ot.parentNode)
              Bs &&
                Bs.forEach(function (Fs) {
                  return Fs.revert(!1, !0)
                }),
                (k.start = x),
                (k.end = A),
                (oe = S = Wt ? Vn : D()),
                !P && !Wt && (oe < Vn && D(Vn), (k.scroll.rec = 0)),
                k.revert(!1, !0),
                (Ae = kt()),
                jn && ((we = -1), jn.restart(!0)),
                (Mt = 0),
                r &&
                  I &&
                  (r._initted || sr) &&
                  r.progress() !== sr &&
                  r.progress(sr || 0, !0).render(r.time(), !0, !0),
                (Pt || Oe !== k.progress || P || h) &&
                  (r &&
                    !I &&
                    r.totalProgress(
                      P && x < -0.001 && !Oe ? ee.utils.normalize(x, A, 0) : Oe,
                      !0
                    ),
                  (k.progress = Pt || (oe - x) / $ === Oe ? 0 : Oe)),
                d && g && (J._pinOffset = Math.round(k.progress * Ve)),
                xe && xe.invalidate(),
                isNaN($s) ||
                  (($s -= ee.getProperty(T, O.p)),
                  (ia -= ee.getProperty(U, O.p)),
                  va(T, O, $s),
                  va(N, O, $s - (de || 0)),
                  va(U, O, ia),
                  va(B, O, ia - (de || 0))),
                Pt && !Wt && k.update(),
                u && !Wt && !F && ((F = !0), u(k), (F = !1))
            }
          }),
          (k.getVelocity = function () {
            return ((D() - S) / (kt() - to)) * 1e3 || 0
          }),
          (k.endAnimation = function () {
            Us(k.callbackAnimation),
              r &&
                (xe
                  ? xe.progress(1)
                  : r.paused()
                    ? I || Us(r, k.direction < 0, 1)
                    : Us(r, r.reversed()))
          }),
          (k.labelToScroll = function (K) {
            return (
              (r &&
                r.labels &&
                (x || k.refresh() || x) + (r.labels[K] / r.duration()) * $) ||
              0
            )
          }),
          (k.getTrailing = function (K) {
            var me = be.indexOf(k),
              re =
                k.direction > 0 ? be.slice(0, me).reverse() : be.slice(me + 1)
            return (
              pn(K)
                ? re.filter(function (de) {
                    return de.vars.preventOverlaps === K
                  })
                : re
            ).filter(function (de) {
              return k.direction > 0 ? de.end <= x : de.start >= A
            })
          }),
          (k.update = function (K, me, re) {
            if (!(P && !re && !K)) {
              var de = Wt === !0 ? Vn : k.scroll(),
                dt = K ? 0 : (de - x) / $,
                Te = dt < 0 ? 0 : dt > 1 ? 1 : dt || 0,
                et = k.progress,
                Pt,
                Qe,
                He,
                Ie,
                Hn,
                qe,
                cn,
                Kn
              if (
                (me &&
                  ((S = oe),
                  (oe = P ? D() : de),
                  v && ((ir = $n), ($n = r && !I ? r.totalProgress() : Te))),
                y &&
                  d &&
                  !Mt &&
                  !fa &&
                  Dn &&
                  (!Te && x < de + ((de - S) / (kt() - to)) * y
                    ? (Te = 1e-4)
                    : Te === 1 &&
                      A > de + ((de - S) / (kt() - to)) * y &&
                      (Te = 0.9999)),
                Te !== et && k.enabled)
              ) {
                if (
                  ((Pt = k.isActive = !!Te && Te < 1),
                  (Qe = !!et && et < 1),
                  (qe = Pt !== Qe),
                  (Hn = qe || !!Te != !!et),
                  (k.direction = Te > et ? 1 : -1),
                  (k.progress = Te),
                  Hn &&
                    !Mt &&
                    ((He = Te && !et ? 0 : Te === 1 ? 1 : et === 1 ? 2 : 3),
                    I &&
                      ((Ie =
                        (!qe && G[He + 1] !== 'none' && G[He + 1]) || G[He]),
                      (Kn =
                        r &&
                        (Ie === 'complete' || Ie === 'reset' || Ie in r)))),
                  E &&
                    (qe || Kn) &&
                    (Kn || f || !r) &&
                    (Kt(E)
                      ? E(k)
                      : k.getTrailing(E).forEach(function (or) {
                          return or.endAnimation()
                        })),
                  I ||
                    (xe && !Mt && !fa
                      ? (xe._dp._time - xe._start !== xe._time &&
                          xe.render(xe._dp._time - xe._start),
                        xe.resetTo
                          ? xe.resetTo('totalProgress', Te, r._tTime / r._tDur)
                          : ((xe.vars.totalProgress = Te),
                            xe.invalidate().restart()))
                      : r && r.totalProgress(Te, !!(Mt && (Ae || K)))),
                  d)
                ) {
                  if ((K && g && (J.style[g + O.os2] = Ct), !Y))
                    ue(io(Be + Ve * Te))
                  else if (Hn) {
                    if (
                      ((cn = !K && Te > et && A + 1 > de && de + 1 >= ai(L, O)),
                      b)
                    )
                      if (!K && (Pt || cn)) {
                        var xt = Ei(d, !0),
                          St = de - x
                        Hd(
                          d,
                          je,
                          xt.top + (O === ft ? St : 0) + ct,
                          xt.left + (O === ft ? 0 : St) + ct
                        )
                      } else Hd(d, J)
                    ps(Pt || cn ? X : te),
                      (Bn && Te < 1 && Pt) ||
                        ue(Be + (Te === 1 && !cn ? Ve : 0))
                  }
                }
                v && !W.tween && !Mt && !fa && jn.restart(!0),
                  a &&
                    (qe || (m && Te && (Te < 1 || !rc))) &&
                    Ho(a.targets).forEach(function (or) {
                      return or.classList[Pt || m ? 'add' : 'remove'](
                        a.className
                      )
                    }),
                  o && !I && !K && o(k),
                  Hn && !Mt
                    ? (I &&
                        (Kn &&
                          (Ie === 'complete'
                            ? r.pause().totalProgress(1)
                            : Ie === 'reset'
                              ? r.restart(!0).pause()
                              : Ie === 'restart'
                                ? r.restart(!0)
                                : r[Ie]()),
                        o && o(k)),
                      (qe || !rc) &&
                        (c && qe && oc(k, c),
                        q[He] && oc(k, q[He]),
                        m && (Te === 1 ? k.kill(!1, 1) : (q[He] = 0)),
                        qe || ((He = Te === 1 ? 1 : 3), q[He] && oc(k, q[He]))),
                      M &&
                        !Pt &&
                        Math.abs(k.getVelocity()) > (ro(M) ? M : 2500) &&
                        (Us(k.callbackAnimation),
                        xe
                          ? xe.progress(1)
                          : Us(r, Ie === 'reverse' ? 1 : !Te, 1)))
                    : I && o && !Mt && o(k)
              }
              if (rt) {
                var Ot = P ? (de / P.duration()) * (P._caScrollDist || 0) : de
                Xn(Ot + (T._isFlipped ? 1 : 0)), rt(Ot)
              }
              $r && $r((-de / P.duration()) * (P._caScrollDist || 0))
            }
          }),
          (k.enable = function (K, me) {
            k.enabled ||
              ((k.enabled = !0),
              ht(L, 'resize', so),
              j || ht(L, 'scroll', Hr),
              he && ht(t, 'refreshInit', he),
              K !== !1 && ((k.progress = Oe = 0), (oe = S = we = D())),
              me !== !1 && k.refresh())
          }),
          (k.getTween = function (K) {
            return K && W ? W.tween : xe
          }),
          (k.setPositions = function (K, me, re, de) {
            if (P) {
              var dt = P.scrollTrigger,
                Te = P.duration(),
                et = dt.end - dt.start
              ;(K = dt.start + (et * K) / Te), (me = dt.start + (et * me) / Te)
            }
            k.refresh(
              !1,
              !1,
              {
                start: Dd(K, re && !!k._startClamp),
                end: Dd(me, re && !!k._endClamp)
              },
              de
            ),
              k.update()
          }),
          (k.adjustPinSpacing = function (K) {
            if (Me && K) {
              var me = Me.indexOf(O.d) + 1
              ;(Me[me] = parseFloat(Me[me]) + K + ct),
                (Me[1] = parseFloat(Me[1]) + K + ct),
                ps(Me)
            }
          }),
          (k.disable = function (K, me) {
            if (
              k.enabled &&
              (K !== !1 && k.revert(!0, !0),
              (k.enabled = k.isActive = !1),
              me || (xe && xe.pause()),
              (Vn = 0),
              V && (V.uncache = 1),
              he && pt(t, 'refreshInit', he),
              jn && (jn.pause(), W.tween && W.tween.kill() && (W.tween = 0)),
              !j)
            ) {
              for (var re = be.length; re--; )
                if (be[re].scroller === L && be[re] !== k) return
              pt(L, 'resize', so), j || pt(L, 'scroll', Hr)
            }
          }),
          (k.kill = function (K, me) {
            k.disable(K, me), xe && !me && xe.kill(), l && delete hu[l]
            var re = be.indexOf(k)
            re >= 0 && be.splice(re, 1),
              re === Gt && La > 0 && Gt--,
              (re = 0),
              be.forEach(function (de) {
                return de.scroller === k.scroller && (re = 1)
              }),
              re || Wt || (k.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                K && r.revert({ kill: !1 }),
                me || r.kill()),
              N &&
                [N, B, T, U].forEach(function (de) {
                  return de.parentNode && de.parentNode.removeChild(de)
                }),
              To === k && (To = 0),
              d &&
                (V && (V.uncache = 1),
                (re = 0),
                be.forEach(function (de) {
                  return de.pin === d && re++
                }),
                re || (V.spacer = 0)),
              i.onKill && i.onKill(k)
          }),
          be.push(k),
          k.enable(!1, !1),
          mi && mi(k),
          r && r.add && !$)
        ) {
          var ke = k.update
          ;(k.update = function () {
            ;(k.update = ke), x || A || k.refresh()
          }),
            ee.delayedCall(0.01, k.update),
            ($ = 0.01),
            (x = A = 0)
        } else k.refresh()
        d && iw()
      }),
      (t.register = function (i) {
        return (
          Ur ||
            ((ee = i || bm()),
            vm() && window.document && t.enable(),
            (Ur = no)),
          Ur
        )
      }),
      (t.defaults = function (i) {
        if (i) for (var r in i) ga[r] = i[r]
        return ga
      }),
      (t.disable = function (i, r) {
        ;(no = 0),
          be.forEach(function (o) {
            return o[r ? 'kill' : 'disable'](i)
          }),
          pt(Ee, 'wheel', Hr),
          pt(Ye, 'scroll', Hr),
          clearInterval(ua),
          pt(Ye, 'touchcancel', ii),
          pt(je, 'touchstart', ii),
          pa(pt, Ye, 'pointerdown,touchstart,mousedown', Id),
          pa(pt, Ye, 'pointerup,touchend,mouseup', zd),
          el.kill(),
          da(pt)
        for (var s = 0; s < Se.length; s += 3)
          ha(pt, Se[s], Se[s + 1]), ha(pt, Se[s], Se[s + 2])
      }),
      (t.enable = function () {
        if (
          ((Ee = window),
          (Ye = document),
          (Wn = Ye.documentElement),
          (je = Ye.body),
          ee &&
            ((Ho = ee.utils.toArray),
            (bo = ee.utils.clamp),
            (du = ee.core.context || ii),
            (ic = ee.core.suppressOverwrites || ii),
            (hf = Ee.history.scrollRestoration || 'auto'),
            (gu = Ee.pageYOffset),
            ee.core.globals('ScrollTrigger', t),
            je))
        ) {
          ;(no = 1),
            (ds = document.createElement('div')),
            (ds.style.height = '100vh'),
            (ds.style.position = 'absolute'),
            Om(),
            Ky(),
            it.register(ee),
            (t.isTouch = it.isTouch),
            (Ii =
              it.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (fu = it.isTouch === 1),
            ht(Ee, 'wheel', Hr),
            (pm = [Ee, Ye, Wn, je]),
            ee.matchMedia
              ? ((t.matchMedia = function (l) {
                  var c = ee.matchMedia(),
                    u
                  for (u in l) c.add(u, l[u])
                  return c
                }),
                ee.addEventListener('matchMediaInit', function () {
                  return yf()
                }),
                ee.addEventListener('matchMediaRevert', function () {
                  return Cm()
                }),
                ee.addEventListener('matchMedia', function () {
                  _r(0, 1), Lr('matchMedia')
                }),
                ee.matchMedia('(orientation: portrait)', function () {
                  return ac(), ac
                }))
              : console.warn('Requires GSAP 3.11.0 or later'),
            ac(),
            ht(Ye, 'scroll', Hr)
          var i = je.style,
            r = i.borderTopStyle,
            s = ee.core.Animation.prototype,
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
              o = Ei(je),
              ft.m = Math.round(o.top + ft.sc()) || 0,
              Xt.m = Math.round(o.left + Xt.sc()) || 0,
              r ? (i.borderTopStyle = r) : i.removeProperty('border-top-style'),
              ua = setInterval($d, 250),
              ee.delayedCall(0.5, function () {
                return (fa = 0)
              }),
              ht(Ye, 'touchcancel', ii),
              ht(je, 'touchstart', ii),
              pa(ht, Ye, 'pointerdown,touchstart,mousedown', Id),
              pa(ht, Ye, 'pointerup,touchend,mouseup', zd),
              uu = ee.utils.checkPrefix('transform'),
              Da.push(uu),
              Ur = kt(),
              el = ee.delayedCall(0.2, _r).pause(),
              qr = [
                Ye,
                'visibilitychange',
                function () {
                  var l = Ee.innerWidth,
                    c = Ee.innerHeight
                  Ye.hidden
                    ? ((kd = l), (Rd = c))
                    : (kd !== l || Rd !== c) && so()
                },
                Ye,
                'DOMContentLoaded',
                _r,
                Ee,
                'load',
                _r,
                Ee,
                'resize',
                so
              ],
              da(ht),
              be.forEach(function (l) {
                return l.enable(0, 1)
              }),
              a = 0;
            a < Se.length;
            a += 3
          )
            ha(pt, Se[a], Se[a + 1]), ha(pt, Se[a], Se[a + 2])
        }
      }),
      (t.config = function (i) {
        'limitCallbacks' in i && (rc = !!i.limitCallbacks)
        var r = i.syncInterval
        ;(r && clearInterval(ua)) || ((ua = r) && setInterval($d, r)),
          'ignoreMobileResize' in i &&
            (fu = t.isTouch === 1 && i.ignoreMobileResize),
          'autoRefreshEvents' in i &&
            (da(pt) || da(ht, i.autoRefreshEvents || 'none'),
            (gm = (i.autoRefreshEvents + '').indexOf('resize') === -1))
      }),
      (t.scrollerProxy = function (i, r) {
        var s = Jt(i),
          o = Se.indexOf(s),
          a = kr(s)
        ~o && Se.splice(o, a ? 6 : 2),
          r && (a ? fi.unshift(Ee, r, je, r, Wn, r) : fi.unshift(s, r))
      }),
      (t.clearMatchMedia = function (i) {
        be.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0)
        })
      }),
      (t.isInViewport = function (i, r, s) {
        var o = (pn(i) ? Jt(i) : i).getBoundingClientRect(),
          a = o[s ? Sr : Tr] * r || 0
        return s
          ? o.right - a > 0 && o.left + a < Ee.innerWidth
          : o.bottom - a > 0 && o.top + a < Ee.innerHeight
      }),
      (t.positionInViewport = function (i, r, s) {
        pn(i) && (i = Jt(i))
        var o = i.getBoundingClientRect(),
          a = o[s ? Sr : Tr],
          l =
            r == null
              ? a / 2
              : r in il
                ? il[r] * a
                : ~r.indexOf('%')
                  ? (parseFloat(r) * a) / 100
                  : parseFloat(r) || 0
        return s ? (o.left + l) / Ee.innerWidth : (o.top + l) / Ee.innerHeight
      }),
      (t.killAll = function (i) {
        if (
          (be.slice(0).forEach(function (s) {
            return s.vars.id !== 'ScrollSmoother' && s.kill()
          }),
          i !== !0)
        ) {
          var r = Rr.killAll || []
          ;(Rr = {}),
            r.forEach(function (s) {
              return s()
            })
        }
      }),
      t
    )
  })()
ye.version = '3.12.5'
ye.saveStyles = function (t) {
  return t
    ? Ho(t).forEach(function (e) {
        if (e && e.style) {
          var n = dn.indexOf(e)
          n >= 0 && dn.splice(n, 5),
            dn.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute('transform'),
              ee.core.getCache(e),
              du()
            )
        }
      })
    : dn
}
ye.revert = function (t, e) {
  return yf(!t, e)
}
ye.create = function (t, e) {
  return new ye(t, e)
}
ye.refresh = function (t) {
  return t ? so() : (Ur || ye.register()) && _r(!0)
}
ye.update = function (t) {
  return ++Se.cache && Oi(t === !0 ? 2 : 0)
}
ye.clearScrollMemory = Pm
ye.maxScroll = function (t, e) {
  return ai(t, e ? Xt : ft)
}
ye.getScrollFunc = function (t, e) {
  return Zi(Jt(t), e ? Xt : ft)
}
ye.getById = function (t) {
  return hu[t]
}
ye.getAll = function () {
  return be.filter(function (t) {
    return t.vars.id !== 'ScrollSmoother'
  })
}
ye.isScrolling = function () {
  return !!Dn
}
ye.snapDirectional = bf
ye.addEventListener = function (t, e) {
  var n = Rr[t] || (Rr[t] = [])
  ~n.indexOf(e) || n.push(e)
}
ye.removeEventListener = function (t, e) {
  var n = Rr[t],
    i = n && n.indexOf(e)
  i >= 0 && n.splice(i, 1)
}
ye.batch = function (t, e) {
  var n = [],
    i = {},
    r = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = function (c, u) {
      var f = [],
        p = [],
        d = ee
          .delayedCall(r, function () {
            u(f, p), (f = []), (p = [])
          })
          .pause()
      return function (g) {
        f.length || d.restart(!0),
          f.push(g.trigger),
          p.push(g),
          s <= f.length && d.progress(1)
      }
    },
    a
  for (a in e)
    i[a] =
      a.substr(0, 2) === 'on' && Kt(e[a]) && a !== 'onRefreshInit'
        ? o(a, e[a])
        : e[a]
  return (
    Kt(s) &&
      ((s = s()),
      ht(ye, 'refresh', function () {
        return (s = e.batchMax())
      })),
    Ho(t).forEach(function (l) {
      var c = {}
      for (a in i) c[a] = i[a]
      ;(c.trigger = l), n.push(ye.create(c))
    }),
    n
  )
}
var Wd = function (e, n, i, r) {
    return (
      n > r ? e(r) : n < 0 && e(0),
      i > r ? (r - n) / (i - n) : i < 0 ? n / (n - i) : 1
    )
  },
  cc = function t(e, n) {
    n === !0
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction =
          n === !0
            ? 'auto'
            : n
              ? 'pan-' + n + (it.isTouch ? ' pinch-zoom' : '')
              : 'none'),
      e === Wn && t(je, n)
  },
  ba = { auto: 1, scroll: 1 },
  lw = function (e) {
    var n = e.event,
      i = e.target,
      r = e.axis,
      s = (n.changedTouches ? n.changedTouches[0] : n).target,
      o = s._gsap || ee.core.getCache(s),
      a = kt(),
      l
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== je &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(ba[(l = On(s)).overflowY] || ba[l.overflowX]));

      )
        s = s.parentNode
      ;(o._isScroll =
        s &&
        s !== i &&
        !kr(s) &&
        (ba[(l = On(s)).overflowY] || ba[l.overflowX])),
        (o._isScrollT = a)
    }
    ;(o._isScroll || r === 'x') && (n.stopPropagation(), (n._gsapAllow = !0))
  },
  Mm = function (e, n, i, r) {
    return it.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (r = r && lw),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return i && ht(Ye, it.eventTypes[0], qd, !1, !0)
      },
      onDisable: function () {
        return pt(Ye, it.eventTypes[0], qd, !0)
      }
    })
  },
  cw = /(input|label|select|textarea)/i,
  Ud,
  qd = function (e) {
    var n = cw.test(e.target.tagName)
    ;(n || Ud) && ((e._gsapAllow = !0), (Ud = n))
  },
  uw = function (e) {
    hr(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer')
    var n = e,
      i = n.normalizeScrollX,
      r = n.momentum,
      s = n.allowNestedScroll,
      o = n.onRelease,
      a,
      l,
      c = Jt(e.target) || Wn,
      u = ee.core.globals().ScrollSmoother,
      f = u && u.get(),
      p =
        Ii &&
        ((e.content && Jt(e.content)) ||
          (f && e.content !== !1 && !f.smooth() && f.content())),
      d = Zi(c, ft),
      g = Zi(c, Xt),
      h = 1,
      y =
        (it.isTouch && Ee.visualViewport
          ? Ee.visualViewport.scale * Ee.visualViewport.width
          : Ee.outerWidth) / Ee.innerWidth,
      w = 0,
      _ = Kt(r)
        ? function () {
            return r(a)
          }
        : function () {
            return r || 2.8
          },
      m,
      v,
      b = Mm(c, e.type, !0, s),
      C = function () {
        return (v = !1)
      },
      P = ii,
      M = ii,
      E = function () {
        ;(l = ai(c, ft)),
          (M = bo(Ii ? 1 : 0, l)),
          i && (P = bo(0, ai(c, Xt))),
          (m = Er)
      },
      O = function () {
        ;(p._gsap.y = io(parseFloat(p._gsap.y) + d.offset) + 'px'),
          (p.style.transform =
            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
            parseFloat(p._gsap.y) +
            ', 0, 1)'),
          (d.offset = d.cacheID = 0)
      },
      I = function () {
        if (v) {
          requestAnimationFrame(C)
          var Q = io(a.deltaY / 2),
            le = M(d.v - Q)
          if (p && le !== d.v + d.offset) {
            d.offset = le - d.v
            var k = io((parseFloat(p && p._gsap.y) || 0) - d.offset)
            ;(p.style.transform =
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
              k +
              ', 0, 1)'),
              (p._gsap.y = k + 'px'),
              (d.cacheID = Se.cache),
              Oi()
          }
          return !0
        }
        d.offset && O(), (v = !0)
      },
      L,
      z,
      j,
      Y,
      q = function () {
        E(),
          L.isActive() &&
            L.vars.scrollY > l &&
            (d() > l ? L.progress(1) && d(l) : L.resetTo('scrollY', l))
      }
    return (
      p && ee.set(p, { y: '+=0' }),
      (e.ignoreCheck = function (G) {
        return (
          (Ii && G.type === 'touchmove' && I()) ||
          (h > 1.05 && G.type !== 'touchstart') ||
          a.isGesturing ||
          (G.touches && G.touches.length > 1)
        )
      }),
      (e.onPress = function () {
        v = !1
        var G = h
        ;(h = io(((Ee.visualViewport && Ee.visualViewport.scale) || 1) / y)),
          L.pause(),
          G !== h && cc(c, h > 1.01 ? !0 : i ? !1 : 'x'),
          (z = g()),
          (j = d()),
          E(),
          (m = Er)
      }),
      (e.onRelease = e.onGestureStart =
        function (G, Q) {
          if ((d.offset && O(), !Q)) Y.restart(!0)
          else {
            Se.cache++
            var le = _(),
              k,
              he
            i &&
              ((k = g()),
              (he = k + (le * 0.05 * -G.velocityX) / 0.227),
              (le *= Wd(g, k, he, ai(c, Xt))),
              (L.vars.scrollX = P(he))),
              (k = d()),
              (he = k + (le * 0.05 * -G.velocityY) / 0.227),
              (le *= Wd(d, k, he, ai(c, ft))),
              (L.vars.scrollY = M(he)),
              L.invalidate().duration(le).play(0.01),
              ((Ii && L.vars.scrollY >= l) || k >= l - 1) &&
                ee.to({}, { onUpdate: q, duration: le })
          }
          o && o(G)
        }),
      (e.onWheel = function () {
        L._ts && L.pause(), kt() - w > 1e3 && ((m = 0), (w = kt()))
      }),
      (e.onChange = function (G, Q, le, k, he) {
        if (
          (Er !== m && E(),
          Q && i && g(P(k[2] === Q ? z + (G.startX - G.x) : g() + Q - k[1])),
          le)
        ) {
          d.offset && O()
          var _e = he[2] === le,
            Ue = _e ? j + G.startY - G.y : d() + le - he[1],
            we = M(Ue)
          _e && Ue !== we && (j += we - Ue), d(we)
        }
        ;(le || Q) && Oi()
      }),
      (e.onEnable = function () {
        cc(c, i ? !1 : 'x'),
          ye.addEventListener('refresh', q),
          ht(Ee, 'resize', q),
          d.smooth &&
            ((d.target.style.scrollBehavior = 'auto'),
            (d.smooth = g.smooth = !1)),
          b.enable()
      }),
      (e.onDisable = function () {
        cc(c, !0),
          pt(Ee, 'resize', q),
          ye.removeEventListener('refresh', q),
          b.kill()
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new it(e)),
      (a.iOS = Ii),
      Ii && !d() && d(1),
      Ii && ee.ticker.add(ii),
      (Y = a._dc),
      (L = ee.to(a, {
        ease: 'power4',
        paused: !0,
        inherit: !1,
        scrollX: i ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        modifiers: {
          scrollY: Am(d, d(), function () {
            return L.pause()
          })
        },
        onUpdate: Oi,
        onComplete: Y.vars.onComplete
      })),
      a
    )
  }
ye.sort = function (t) {
  return be.sort(
    t ||
      function (e, n) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (n.start + (n.vars.refreshPriority || 0) * -1e6)
        )
      }
  )
}
ye.observe = function (t) {
  return new it(t)
}
ye.normalizeScroll = function (t) {
  if (typeof t > 'u') return Ht
  if (t === !0 && Ht) return Ht.enable()
  if (t === !1) {
    Ht && Ht.kill(), (Ht = t)
    return
  }
  var e = t instanceof it ? t : uw(t)
  return Ht && Ht.target === e.target && Ht.kill(), kr(e.target) && (Ht = e), e
}
ye.core = {
  _getVelocityProp: cu,
  _inputObserver: Mm,
  _scrollers: Se,
  _proxies: fi,
  bridge: {
    ss: function () {
      Dn || Lr('scrollStart'), (Dn = kt())
    },
    ref: function () {
      return Mt
    }
  }
}
bm() && ee.registerPlugin(ye)
const fw = {
    class:
      'fixed start-0 top-0 z-50 flex h-screen w-screen items-center justify-center'
  },
  dw = {
    __name: 'Loading',
    setup(t) {
      ut.registerPlugin(ye)
      const { isLoading: e } = Xu()
      return (
        Or(() => {
          ut.to('.hero-img', {
            x: () => ut.utils.random(-100, 100),
            y: () => ut.utils.random(-10, 10),
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: !0
          }),
            ut.to('.hero-title', {
              y: () => ut.utils.random(-100, 100),
              duration: 1,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: !0
            }),
            ut.to('.hero-bg', {
              scale: 1.08,
              duration: 0.3,
              ease: 'power1.out',
              repeat: -1,
              yoyo: !0
            }),
            ut.from('.pattern', {
              scrollTrigger: {
                trigger: '.grid',
                start: 'top 85%',
                toggleActions: 'play none none none'
              },
              opacity: 0,
              y: 50,
              duration: 0.3,
              ease: 'power3.out',
              stagger: { each: 0.3, from: 'start' }
            })
        }),
        (n, i) =>
          N0(
            (bt(),
            nn(
              'div',
              fw,
              i[0] ||
                (i[0] = [
                  Ls(
                    '<div class="pattern absolute inset-0" data-v-0612ce30></div><div class="hero-bg absolute inset-0 h-full w-full" data-v-0612ce30><img class="h-full w-full object-cover" src="' +
                      kb +
                      '" alt="" data-v-0612ce30></div><div class="z-10 flex flex-col items-center justify-center" data-v-0612ce30><div class="hero-img" data-v-0612ce30><img width="200" src="' +
                      Rb +
                      '" alt="Hero Image" data-v-0612ce30></div><div class="hero-title text-center text-xl font-bold" data-v-0612ce30>Loading...</div></div>',
                    3
                  )
                ]),
              512
            )),
            [[Wv, _t(e)]]
          )
      )
    }
  },
  km = Qo(dw, [['__scopeId', 'data-v-0612ce30']]),
  pw = {}
function hw(t, e) {
  const n = km,
    i = Mb,
    r = yl('router-view'),
    s = Sb,
    o = mb
  return (
    bt(),
    nn('div', null, [Pe(n), Pe(i), R('main', null, [Pe(r)]), Pe(s), Pe(o)])
  )
}
const gw = Qo(pw, [['render', hw]])
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Yr = typeof document < 'u'
function Rm(t) {
  return (
    typeof t == 'object' ||
    'displayName' in t ||
    'props' in t ||
    '__vccOpts' in t
  )
}
function mw(t) {
  return (
    t.__esModule ||
    t[Symbol.toStringTag] === 'Module' ||
    (t.default && Rm(t.default))
  )
}
const Re = Object.assign
function uc(t, e) {
  const n = {}
  for (const i in e) {
    const r = e[i]
    n[i] = qn(r) ? r.map(t) : t(r)
  }
  return n
}
const Eo = () => {},
  qn = Array.isArray,
  Lm = /#/g,
  _w = /&/g,
  vw = /\//g,
  bw = /=/g,
  yw = /\?/g,
  Dm = /\+/g,
  ww = /%5B/g,
  xw = /%5D/g,
  Im = /%5E/g,
  Sw = /%60/g,
  zm = /%7B/g,
  Tw = /%7C/g,
  Nm = /%7D/g,
  Ew = /%20/g
function wf(t) {
  return encodeURI('' + t)
    .replace(Tw, '|')
    .replace(ww, '[')
    .replace(xw, ']')
}
function Cw(t) {
  return wf(t).replace(zm, '{').replace(Nm, '}').replace(Im, '^')
}
function _u(t) {
  return wf(t)
    .replace(Dm, '%2B')
    .replace(Ew, '+')
    .replace(Lm, '%23')
    .replace(_w, '%26')
    .replace(Sw, '`')
    .replace(zm, '{')
    .replace(Nm, '}')
    .replace(Im, '^')
}
function Pw(t) {
  return _u(t).replace(bw, '%3D')
}
function Ow(t) {
  return wf(t).replace(Lm, '%23').replace(yw, '%3F')
}
function Aw(t) {
  return t == null ? '' : Ow(t).replace(vw, '%2F')
}
function Wo(t) {
  try {
    return decodeURIComponent('' + t)
  } catch {}
  return '' + t
}
const Mw = /\/$/,
  kw = (t) => t.replace(Mw, '')
function fc(t, e, n = '/') {
  let i,
    r = {},
    s = '',
    o = ''
  const a = e.indexOf('#')
  let l = e.indexOf('?')
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((i = e.slice(0, l)),
      (s = e.slice(l + 1, a > -1 ? a : e.length)),
      (r = t(s))),
    a > -1 && ((i = i || e.slice(0, a)), (o = e.slice(a, e.length))),
    (i = Iw(i ?? e, n)),
    { fullPath: i + (s && '?') + s + o, path: i, query: r, hash: Wo(o) }
  )
}
function Rw(t, e) {
  const n = e.query ? t(e.query) : ''
  return e.path + (n && '?') + n + (e.hash || '')
}
function Yd(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase())
    ? t
    : t.slice(e.length) || '/'
}
function Lw(t, e, n) {
  const i = e.matched.length - 1,
    r = n.matched.length - 1
  return (
    i > -1 &&
    i === r &&
    Ts(e.matched[i], n.matched[r]) &&
    Bm(e.params, n.params) &&
    t(e.query) === t(n.query) &&
    e.hash === n.hash
  )
}
function Ts(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e)
}
function Bm(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1
  for (const n in t) if (!Dw(t[n], e[n])) return !1
  return !0
}
function Dw(t, e) {
  return qn(t) ? Xd(t, e) : qn(e) ? Xd(e, t) : t === e
}
function Xd(t, e) {
  return qn(e)
    ? t.length === e.length && t.every((n, i) => n === e[i])
    : t.length === 1 && t[0] === e
}
function Iw(t, e) {
  if (t.startsWith('/')) return t
  if (!t) return e
  const n = e.split('/'),
    i = t.split('/'),
    r = i[i.length - 1]
  ;(r === '..' || r === '.') && i.push('')
  let s = n.length - 1,
    o,
    a
  for (o = 0; o < i.length; o++)
    if (((a = i[o]), a !== '.'))
      if (a === '..') s > 1 && s--
      else break
  return n.slice(0, s).join('/') + '/' + i.slice(o).join('/')
}
const Di = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0
}
var Uo
;(function (t) {
  ;(t.pop = 'pop'), (t.push = 'push')
})(Uo || (Uo = {}))
var Co
;(function (t) {
  ;(t.back = 'back'), (t.forward = 'forward'), (t.unknown = '')
})(Co || (Co = {}))
function zw(t) {
  if (!t)
    if (Yr) {
      const e = document.querySelector('base')
      ;(t = (e && e.getAttribute('href')) || '/'),
        (t = t.replace(/^\w+:\/\/[^\/]+/, ''))
    } else t = '/'
  return t[0] !== '/' && t[0] !== '#' && (t = '/' + t), kw(t)
}
const Nw = /^[^#]+#/
function Bw(t, e) {
  return t.replace(Nw, '#') + e
}
function $w(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    i = t.getBoundingClientRect()
  return {
    behavior: e.behavior,
    left: i.left - n.left - (e.left || 0),
    top: i.top - n.top - (e.top || 0)
  }
}
const Ol = () => ({ left: window.scrollX, top: window.scrollY })
function Fw(t) {
  let e
  if ('el' in t) {
    const n = t.el,
      i = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? i
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    e = $w(r, t)
  } else e = t
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.scrollX,
        e.top != null ? e.top : window.scrollY
      )
}
function Kd(t, e) {
  return (history.state ? history.state.position - e : -1) + t
}
const vu = new Map()
function jw(t, e) {
  vu.set(t, e)
}
function Vw(t) {
  const e = vu.get(t)
  return vu.delete(t), e
}
let Hw = () => location.protocol + '//' + location.host
function $m(t, e) {
  const { pathname: n, search: i, hash: r } = e,
    s = t.indexOf('#')
  if (s > -1) {
    let a = r.includes(t.slice(s)) ? t.slice(s).length : 1,
      l = r.slice(a)
    return l[0] !== '/' && (l = '/' + l), Yd(l, '')
  }
  return Yd(n, t) + i + r
}
function Gw(t, e, n, i) {
  let r = [],
    s = [],
    o = null
  const a = ({ state: p }) => {
    const d = $m(t, location),
      g = n.value,
      h = e.value
    let y = 0
    if (p) {
      if (((n.value = d), (e.value = p), o && o === g)) {
        o = null
        return
      }
      y = h ? p.position - h.position : 0
    } else i(d)
    r.forEach((w) => {
      w(n.value, g, {
        delta: y,
        type: Uo.pop,
        direction: y ? (y > 0 ? Co.forward : Co.back) : Co.unknown
      })
    })
  }
  function l() {
    o = n.value
  }
  function c(p) {
    r.push(p)
    const d = () => {
      const g = r.indexOf(p)
      g > -1 && r.splice(g, 1)
    }
    return s.push(d), d
  }
  function u() {
    const { history: p } = window
    p.state && p.replaceState(Re({}, p.state, { scroll: Ol() }), '')
  }
  function f() {
    for (const p of s) p()
    ;(s = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', u)
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', u, { passive: !0 }),
    { pauseListeners: l, listen: c, destroy: f }
  )
}
function Qd(t, e, n, i = !1, r = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: i,
    position: window.history.length,
    scroll: r ? Ol() : null
  }
}
function Ww(t) {
  const { history: e, location: n } = window,
    i = { value: $m(t, n) },
    r = { value: e.state }
  r.value ||
    s(
      i.value,
      {
        back: null,
        current: i.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function s(l, c, u) {
    const f = t.indexOf('#'),
      p =
        f > -1
          ? (n.host && document.querySelector('base') ? t : t.slice(f)) + l
          : Hw() + t + l
    try {
      e[u ? 'replaceState' : 'pushState'](c, '', p), (r.value = c)
    } catch (d) {
      console.error(d), n[u ? 'replace' : 'assign'](p)
    }
  }
  function o(l, c) {
    const u = Re({}, e.state, Qd(r.value.back, l, r.value.forward, !0), c, {
      position: r.value.position
    })
    s(l, u, !0), (i.value = l)
  }
  function a(l, c) {
    const u = Re({}, r.value, e.state, { forward: l, scroll: Ol() })
    s(u.current, u, !0)
    const f = Re({}, Qd(i.value, l, null), { position: u.position + 1 }, c)
    s(l, f, !1), (i.value = l)
  }
  return { location: i, state: r, push: a, replace: o }
}
function Uw(t) {
  t = zw(t)
  const e = Ww(t),
    n = Gw(t, e.state, e.location, e.replace)
  function i(s, o = !0) {
    o || n.pauseListeners(), history.go(s)
  }
  const r = Re(
    { location: '', base: t, go: i, createHref: Bw.bind(null, t) },
    e,
    n
  )
  return (
    Object.defineProperty(r, 'location', {
      enumerable: !0,
      get: () => e.location.value
    }),
    Object.defineProperty(r, 'state', {
      enumerable: !0,
      get: () => e.state.value
    }),
    r
  )
}
function qw(t) {
  return (
    (t = location.host ? t || location.pathname + location.search : ''),
    t.includes('#') || (t += '#'),
    Uw(t)
  )
}
function Yw(t) {
  return typeof t == 'string' || (t && typeof t == 'object')
}
function Fm(t) {
  return typeof t == 'string' || typeof t == 'symbol'
}
const jm = Symbol('')
var Zd
;(function (t) {
  ;(t[(t.aborted = 4)] = 'aborted'),
    (t[(t.cancelled = 8)] = 'cancelled'),
    (t[(t.duplicated = 16)] = 'duplicated')
})(Zd || (Zd = {}))
function Es(t, e) {
  return Re(new Error(), { type: t, [jm]: !0 }, e)
}
function vi(t, e) {
  return t instanceof Error && jm in t && (e == null || !!(t.type & e))
}
const Jd = '[^/]+?',
  Xw = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Kw = /[.+*?^${}()[\]/\\]/g
function Qw(t, e) {
  const n = Re({}, Xw, e),
    i = []
  let r = n.start ? '^' : ''
  const s = []
  for (const c of t) {
    const u = c.length ? [] : [90]
    n.strict && !c.length && (r += '/')
    for (let f = 0; f < c.length; f++) {
      const p = c[f]
      let d = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0)
        f || (r += '/'), (r += p.value.replace(Kw, '\\$&')), (d += 40)
      else if (p.type === 1) {
        const { value: g, repeatable: h, optional: y, regexp: w } = p
        s.push({ name: g, repeatable: h, optional: y })
        const _ = w || Jd
        if (_ !== Jd) {
          d += 10
          try {
            new RegExp(`(${_})`)
          } catch (v) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${_}): ` + v.message
            )
          }
        }
        let m = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`
        f || (m = y && c.length < 2 ? `(?:/${m})` : '/' + m),
          y && (m += '?'),
          (r += m),
          (d += 20),
          y && (d += -8),
          h && (d += -20),
          _ === '.*' && (d += -50)
      }
      u.push(d)
    }
    i.push(u)
  }
  if (n.strict && n.end) {
    const c = i.length - 1
    i[c][i[c].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'),
    n.end ? (r += '$') : n.strict && !r.endsWith('/') && (r += '(?:/|$)')
  const o = new RegExp(r, n.sensitive ? '' : 'i')
  function a(c) {
    const u = c.match(o),
      f = {}
    if (!u) return null
    for (let p = 1; p < u.length; p++) {
      const d = u[p] || '',
        g = s[p - 1]
      f[g.name] = d && g.repeatable ? d.split('/') : d
    }
    return f
  }
  function l(c) {
    let u = '',
      f = !1
    for (const p of t) {
      ;(!f || !u.endsWith('/')) && (u += '/'), (f = !1)
      for (const d of p)
        if (d.type === 0) u += d.value
        else if (d.type === 1) {
          const { value: g, repeatable: h, optional: y } = d,
            w = g in c ? c[g] : ''
          if (qn(w) && !h)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            )
          const _ = qn(w) ? w.join('/') : w
          if (!_)
            if (y)
              p.length < 2 &&
                (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0))
            else throw new Error(`Missing required param "${g}"`)
          u += _
        }
    }
    return u || '/'
  }
  return { re: o, score: i, keys: s, parse: a, stringify: l }
}
function Zw(t, e) {
  let n = 0
  for (; n < t.length && n < e.length; ) {
    const i = e[n] - t[n]
    if (i) return i
    n++
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 80
      ? -1
      : 1
    : t.length > e.length
      ? e.length === 1 && e[0] === 80
        ? 1
        : -1
      : 0
}
function Vm(t, e) {
  let n = 0
  const i = t.score,
    r = e.score
  for (; n < i.length && n < r.length; ) {
    const s = Zw(i[n], r[n])
    if (s) return s
    n++
  }
  if (Math.abs(r.length - i.length) === 1) {
    if (ep(i)) return 1
    if (ep(r)) return -1
  }
  return r.length - i.length
}
function ep(t) {
  const e = t[t.length - 1]
  return t.length > 0 && e[e.length - 1] < 0
}
const Jw = { type: 0, value: '' },
  ex = /[a-zA-Z0-9_]/
function tx(t) {
  if (!t) return [[]]
  if (t === '/') return [[Jw]]
  if (!t.startsWith('/')) throw new Error(`Invalid path "${t}"`)
  function e(d) {
    throw new Error(`ERR (${n})/"${c}": ${d}`)
  }
  let n = 0,
    i = n
  const r = []
  let s
  function o() {
    s && r.push(s), (s = [])
  }
  let a = 0,
    l,
    c = '',
    u = ''
  function f() {
    c &&
      (n === 0
        ? s.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (s.length > 1 &&
              (l === '*' || l === '+') &&
              e(
                `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
              ),
            s.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?'
            }))
          : e('Invalid state to consume buffer'),
      (c = ''))
  }
  function p() {
    c += l
  }
  for (; a < t.length; ) {
    if (((l = t[a++]), l === '\\' && n !== 2)) {
      ;(i = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (c && f(), o()) : l === ':' ? (f(), (n = 1)) : p()
        break
      case 4:
        p(), (n = i)
        break
      case 1:
        l === '('
          ? (n = 2)
          : ex.test(l)
            ? p()
            : (f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--)
        break
      case 2:
        l === ')'
          ? u[u.length - 1] == '\\'
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l)
        break
      case 3:
        f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (u = '')
        break
      default:
        e('Unknown state')
        break
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${c}"`), f(), o(), r
}
function nx(t, e, n) {
  const i = Qw(tx(t.path), n),
    r = Re(i, { record: t, parent: e, children: [], alias: [] })
  return e && !r.record.aliasOf == !e.record.aliasOf && e.children.push(r), r
}
function ix(t, e) {
  const n = [],
    i = new Map()
  e = rp({ strict: !1, end: !0, sensitive: !1 }, e)
  function r(f) {
    return i.get(f)
  }
  function s(f, p, d) {
    const g = !d,
      h = np(f)
    h.aliasOf = d && d.record
    const y = rp(e, f),
      w = [h]
    if ('alias' in f) {
      const v = typeof f.alias == 'string' ? [f.alias] : f.alias
      for (const b of v)
        w.push(
          np(
            Re({}, h, {
              components: d ? d.record.components : h.components,
              path: b,
              aliasOf: d ? d.record : h
            })
          )
        )
    }
    let _, m
    for (const v of w) {
      const { path: b } = v
      if (p && b[0] !== '/') {
        const C = p.record.path,
          P = C[C.length - 1] === '/' ? '' : '/'
        v.path = p.record.path + (b && P + b)
      }
      if (
        ((_ = nx(v, p, y)),
        d
          ? d.alias.push(_)
          : ((m = m || _),
            m !== _ && m.alias.push(_),
            g && f.name && !ip(_) && o(f.name)),
        Hm(_) && l(_),
        h.children)
      ) {
        const C = h.children
        for (let P = 0; P < C.length; P++) s(C[P], _, d && d.children[P])
      }
      d = d || _
    }
    return m
      ? () => {
          o(m)
        }
      : Eo
  }
  function o(f) {
    if (Fm(f)) {
      const p = i.get(f)
      p &&
        (i.delete(f),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(o),
        p.alias.forEach(o))
    } else {
      const p = n.indexOf(f)
      p > -1 &&
        (n.splice(p, 1),
        f.record.name && i.delete(f.record.name),
        f.children.forEach(o),
        f.alias.forEach(o))
    }
  }
  function a() {
    return n
  }
  function l(f) {
    const p = ox(f, n)
    n.splice(p, 0, f), f.record.name && !ip(f) && i.set(f.record.name, f)
  }
  function c(f, p) {
    let d,
      g = {},
      h,
      y
    if ('name' in f && f.name) {
      if (((d = i.get(f.name)), !d)) throw Es(1, { location: f })
      ;(y = d.record.name),
        (g = Re(
          tp(
            p.params,
            d.keys
              .filter((m) => !m.optional)
              .concat(d.parent ? d.parent.keys.filter((m) => m.optional) : [])
              .map((m) => m.name)
          ),
          f.params &&
            tp(
              f.params,
              d.keys.map((m) => m.name)
            )
        )),
        (h = d.stringify(g))
    } else if (f.path != null)
      (h = f.path),
        (d = n.find((m) => m.re.test(h))),
        d && ((g = d.parse(h)), (y = d.record.name))
    else {
      if (((d = p.name ? i.get(p.name) : n.find((m) => m.re.test(p.path))), !d))
        throw Es(1, { location: f, currentLocation: p })
      ;(y = d.record.name),
        (g = Re({}, p.params, f.params)),
        (h = d.stringify(g))
    }
    const w = []
    let _ = d
    for (; _; ) w.unshift(_.record), (_ = _.parent)
    return { name: y, path: h, params: g, matched: w, meta: sx(w) }
  }
  t.forEach((f) => s(f))
  function u() {
    ;(n.length = 0), i.clear()
  }
  return {
    addRoute: s,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: r
  }
}
function tp(t, e) {
  const n = {}
  for (const i of e) i in t && (n[i] = t[i])
  return n
}
function np(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: rx(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in t
        ? t.components || null
        : t.component && { default: t.component }
  }
  return Object.defineProperty(e, 'mods', { value: {} }), e
}
function rx(t) {
  const e = {},
    n = t.props || !1
  if ('component' in t) e.default = n
  else for (const i in t.components) e[i] = typeof n == 'object' ? n[i] : n
  return e
}
function ip(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0
    t = t.parent
  }
  return !1
}
function sx(t) {
  return t.reduce((e, n) => Re(e, n.meta), {})
}
function rp(t, e) {
  const n = {}
  for (const i in t) n[i] = i in e ? e[i] : t[i]
  return n
}
function ox(t, e) {
  let n = 0,
    i = e.length
  for (; n !== i; ) {
    const s = (n + i) >> 1
    Vm(t, e[s]) < 0 ? (i = s) : (n = s + 1)
  }
  const r = ax(t)
  return r && (i = e.lastIndexOf(r, i - 1)), i
}
function ax(t) {
  let e = t
  for (; (e = e.parent); ) if (Hm(e) && Vm(t, e) === 0) return e
}
function Hm({ record: t }) {
  return !!(
    t.name ||
    (t.components && Object.keys(t.components).length) ||
    t.redirect
  )
}
function lx(t) {
  const e = {}
  if (t === '' || t === '?') return e
  const i = (t[0] === '?' ? t.slice(1) : t).split('&')
  for (let r = 0; r < i.length; ++r) {
    const s = i[r].replace(Dm, ' '),
      o = s.indexOf('='),
      a = Wo(o < 0 ? s : s.slice(0, o)),
      l = o < 0 ? null : Wo(s.slice(o + 1))
    if (a in e) {
      let c = e[a]
      qn(c) || (c = e[a] = [c]), c.push(l)
    } else e[a] = l
  }
  return e
}
function sp(t) {
  let e = ''
  for (let n in t) {
    const i = t[n]
    if (((n = Pw(n)), i == null)) {
      i !== void 0 && (e += (e.length ? '&' : '') + n)
      continue
    }
    ;(qn(i) ? i.map((s) => s && _u(s)) : [i && _u(i)]).forEach((s) => {
      s !== void 0 &&
        ((e += (e.length ? '&' : '') + n), s != null && (e += '=' + s))
    })
  }
  return e
}
function cx(t) {
  const e = {}
  for (const n in t) {
    const i = t[n]
    i !== void 0 &&
      (e[n] = qn(i)
        ? i.map((r) => (r == null ? null : '' + r))
        : i == null
          ? i
          : '' + i)
  }
  return e
}
const ux = Symbol(''),
  op = Symbol(''),
  xf = Symbol(''),
  Gm = Symbol(''),
  bu = Symbol('')
function qs() {
  let t = []
  function e(i) {
    return (
      t.push(i),
      () => {
        const r = t.indexOf(i)
        r > -1 && t.splice(r, 1)
      }
    )
  }
  function n() {
    t = []
  }
  return { add: e, list: () => t.slice(), reset: n }
}
function $i(t, e, n, i, r, s = (o) => o()) {
  const o = i && (i.enterCallbacks[r] = i.enterCallbacks[r] || [])
  return () =>
    new Promise((a, l) => {
      const c = (p) => {
          p === !1
            ? l(Es(4, { from: n, to: e }))
            : p instanceof Error
              ? l(p)
              : Yw(p)
                ? l(Es(2, { from: e, to: p }))
                : (o &&
                    i.enterCallbacks[r] === o &&
                    typeof p == 'function' &&
                    o.push(p),
                  a())
        },
        u = s(() => t.call(i && i.instances[r], e, n, c))
      let f = Promise.resolve(u)
      t.length < 3 && (f = f.then(c)), f.catch((p) => l(p))
    })
}
function dc(t, e, n, i, r = (s) => s()) {
  const s = []
  for (const o of t)
    for (const a in o.components) {
      let l = o.components[a]
      if (!(e !== 'beforeRouteEnter' && !o.instances[a]))
        if (Rm(l)) {
          const u = (l.__vccOpts || l)[e]
          u && s.push($i(u, n, i, o, a, r))
        } else {
          let c = l()
          s.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${o.path}"`
                )
              const f = mw(u) ? u.default : u
              ;(o.mods[a] = u), (o.components[a] = f)
              const d = (f.__vccOpts || f)[e]
              return d && $i(d, n, i, o, a, r)()
            })
          )
        }
    }
  return s
}
function ap(t) {
  const e = Pi(xf),
    n = Pi(Gm),
    i = An(() => {
      const l = _t(t.to)
      return e.resolve(l)
    }),
    r = An(() => {
      const { matched: l } = i.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched
      if (!u || !f.length) return -1
      const p = f.findIndex(Ts.bind(null, u))
      if (p > -1) return p
      const d = lp(l[c - 2])
      return c > 1 && lp(u) === d && f[f.length - 1].path !== d
        ? f.findIndex(Ts.bind(null, l[c - 2]))
        : p
    }),
    s = An(() => r.value > -1 && gx(n.params, i.value.params)),
    o = An(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        Bm(n.params, i.value.params)
    )
  function a(l = {}) {
    if (hx(l)) {
      const c = e[_t(t.replace) ? 'replace' : 'push'](_t(t.to)).catch(Eo)
      return (
        t.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => c),
        c
      )
    }
    return Promise.resolve()
  }
  return {
    route: i,
    href: An(() => i.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a
  }
}
function fx(t) {
  return t.length === 1 ? t[0] : t
}
const dx = Mh({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: ap,
    setup(t, { slots: e }) {
      const n = _l(ap(t)),
        { options: i } = Pi(xf),
        r = An(() => ({
          [cp(t.activeClass, i.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [cp(
            t.exactActiveClass,
            i.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive
        }))
      return () => {
        const s = e.default && fx(e.default(n))
        return t.custom
          ? s
          : en(
              'a',
              {
                'aria-current': n.isExactActive ? t.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
              },
              s
            )
      }
    }
  }),
  px = dx
function hx(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(e)) return
    }
    return t.preventDefault && t.preventDefault(), !0
  }
}
function gx(t, e) {
  for (const n in e) {
    const i = e[n],
      r = t[n]
    if (typeof i == 'string') {
      if (i !== r) return !1
    } else if (!qn(r) || r.length !== i.length || i.some((s, o) => s !== r[o]))
      return !1
  }
  return !0
}
function lp(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : ''
}
const cp = (t, e, n) => t ?? e ?? n,
  mx = Mh({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: n }) {
      const i = Pi(bu),
        r = An(() => t.route || i.value),
        s = Pi(op, 0),
        o = An(() => {
          let c = _t(s)
          const { matched: u } = r.value
          let f
          for (; (f = u[c]) && !f.components; ) c++
          return c
        }),
        a = An(() => r.value.matched[o.value])
      as(
        op,
        An(() => o.value + 1)
      ),
        as(ux, a),
        as(bu, r)
      const l = gt()
      return (
        uo(
          () => [l.value, a.value, t.name],
          ([c, u, f], [p, d, g]) => {
            u &&
              ((u.instances[f] = c),
              d &&
                d !== u &&
                c &&
                c === p &&
                (u.leaveGuards.size || (u.leaveGuards = d.leaveGuards),
                u.updateGuards.size || (u.updateGuards = d.updateGuards))),
              c &&
                u &&
                (!d || !Ts(u, d) || !p) &&
                (u.enterCallbacks[f] || []).forEach((h) => h(c))
          },
          { flush: 'post' }
        ),
        () => {
          const c = r.value,
            u = t.name,
            f = a.value,
            p = f && f.components[u]
          if (!p) return up(n.default, { Component: p, route: c })
          const d = f.props[u],
            g = d
              ? d === !0
                ? c.params
                : typeof d == 'function'
                  ? d(c)
                  : d
              : null,
            y = en(
              p,
              Re({}, g, e, {
                onVnodeUnmounted: (w) => {
                  w.component.isUnmounted && (f.instances[u] = null)
                },
                ref: l
              })
            )
          return up(n.default, { Component: y, route: c }) || y
        }
      )
    }
  })
function up(t, e) {
  if (!t) return null
  const n = t(e)
  return n.length === 1 ? n[0] : n
}
const _x = mx
function vx(t) {
  const e = ix(t.routes, t),
    n = t.parseQuery || lx,
    i = t.stringifyQuery || sp,
    r = t.history,
    s = qs(),
    o = qs(),
    a = qs(),
    l = P0(Di)
  let c = Di
  Yr &&
    t.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const u = uc.bind(null, (D) => '' + D),
    f = uc.bind(null, Aw),
    p = uc.bind(null, Wo)
  function d(D, W) {
    let V, Z
    return (
      Fm(D) ? ((V = e.getRecordMatcher(D)), (Z = W)) : (Z = D), e.addRoute(Z, V)
    )
  }
  function g(D) {
    const W = e.getRecordMatcher(D)
    W && e.removeRoute(W)
  }
  function h() {
    return e.getRoutes().map((D) => D.record)
  }
  function y(D) {
    return !!e.getRecordMatcher(D)
  }
  function w(D, W) {
    if (((W = Re({}, W || l.value)), typeof D == 'string')) {
      const A = fc(n, D, W.path),
        N = e.resolve({ path: A.path }, W),
        B = r.createHref(A.fullPath)
      return Re(A, N, {
        params: p(N.params),
        hash: Wo(A.hash),
        redirectedFrom: void 0,
        href: B
      })
    }
    let V
    if (D.path != null) V = Re({}, D, { path: fc(n, D.path, W.path).path })
    else {
      const A = Re({}, D.params)
      for (const N in A) A[N] == null && delete A[N]
      ;(V = Re({}, D, { params: f(A) })), (W.params = f(W.params))
    }
    const Z = e.resolve(V, W),
      oe = D.hash || ''
    Z.params = u(p(Z.params))
    const S = Rw(i, Re({}, D, { hash: Cw(oe), path: Z.path })),
      x = r.createHref(S)
    return Re(
      { fullPath: S, hash: oe, query: i === sp ? cx(D.query) : D.query || {} },
      Z,
      { redirectedFrom: void 0, href: x }
    )
  }
  function _(D) {
    return typeof D == 'string' ? fc(n, D, l.value.path) : Re({}, D)
  }
  function m(D, W) {
    if (c !== D) return Es(8, { from: W, to: D })
  }
  function v(D) {
    return P(D)
  }
  function b(D) {
    return v(Re(_(D), { replace: !0 }))
  }
  function C(D) {
    const W = D.matched[D.matched.length - 1]
    if (W && W.redirect) {
      const { redirect: V } = W
      let Z = typeof V == 'function' ? V(D) : V
      return (
        typeof Z == 'string' &&
          ((Z = Z.includes('?') || Z.includes('#') ? (Z = _(Z)) : { path: Z }),
          (Z.params = {})),
        Re(
          {
            query: D.query,
            hash: D.hash,
            params: Z.path != null ? {} : D.params
          },
          Z
        )
      )
    }
  }
  function P(D, W) {
    const V = (c = w(D)),
      Z = l.value,
      oe = D.state,
      S = D.force,
      x = D.replace === !0,
      A = C(V)
    if (A)
      return P(
        Re(_(A), {
          state: typeof A == 'object' ? Re({}, oe, A.state) : oe,
          force: S,
          replace: x
        }),
        W || V
      )
    const N = V
    N.redirectedFrom = W
    let B
    return (
      !S && Lw(i, Z, V) && ((B = Es(16, { to: N, from: Z })), he(Z, Z, !0, !1)),
      (B ? Promise.resolve(B) : O(N, Z))
        .catch((T) => (vi(T) ? (vi(T, 2) ? T : k(T)) : Q(T, N, Z)))
        .then((T) => {
          if (T) {
            if (vi(T, 2))
              return P(
                Re({ replace: x }, _(T.to), {
                  state: typeof T.to == 'object' ? Re({}, oe, T.to.state) : oe,
                  force: S
                }),
                W || N
              )
          } else T = L(N, Z, !0, x, oe)
          return I(N, Z, T), T
        })
    )
  }
  function M(D, W) {
    const V = m(D, W)
    return V ? Promise.reject(V) : Promise.resolve()
  }
  function E(D) {
    const W = we.values().next().value
    return W && typeof W.runWithContext == 'function'
      ? W.runWithContext(D)
      : D()
  }
  function O(D, W) {
    let V
    const [Z, oe, S] = bx(D, W)
    V = dc(Z.reverse(), 'beforeRouteLeave', D, W)
    for (const A of Z)
      A.leaveGuards.forEach((N) => {
        V.push($i(N, D, W))
      })
    const x = M.bind(null, D, W)
    return (
      V.push(x),
      Oe(V)
        .then(() => {
          V = []
          for (const A of s.list()) V.push($i(A, D, W))
          return V.push(x), Oe(V)
        })
        .then(() => {
          V = dc(oe, 'beforeRouteUpdate', D, W)
          for (const A of oe)
            A.updateGuards.forEach((N) => {
              V.push($i(N, D, W))
            })
          return V.push(x), Oe(V)
        })
        .then(() => {
          V = []
          for (const A of S)
            if (A.beforeEnter)
              if (qn(A.beforeEnter))
                for (const N of A.beforeEnter) V.push($i(N, D, W))
              else V.push($i(A.beforeEnter, D, W))
          return V.push(x), Oe(V)
        })
        .then(
          () => (
            D.matched.forEach((A) => (A.enterCallbacks = {})),
            (V = dc(S, 'beforeRouteEnter', D, W, E)),
            V.push(x),
            Oe(V)
          )
        )
        .then(() => {
          V = []
          for (const A of o.list()) V.push($i(A, D, W))
          return V.push(x), Oe(V)
        })
        .catch((A) => (vi(A, 8) ? A : Promise.reject(A)))
    )
  }
  function I(D, W, V) {
    a.list().forEach((Z) => E(() => Z(D, W, V)))
  }
  function L(D, W, V, Z, oe) {
    const S = m(D, W)
    if (S) return S
    const x = W === Di,
      A = Yr ? history.state : {}
    V &&
      (Z || x
        ? r.replace(D.fullPath, Re({ scroll: x && A && A.scroll }, oe))
        : r.push(D.fullPath, oe)),
      (l.value = D),
      he(D, W, V, x),
      k()
  }
  let z
  function j() {
    z ||
      (z = r.listen((D, W, V) => {
        if (!Ae.listening) return
        const Z = w(D),
          oe = C(Z)
        if (oe) {
          P(Re(oe, { replace: !0, force: !0 }), Z).catch(Eo)
          return
        }
        c = Z
        const S = l.value
        Yr && jw(Kd(S.fullPath, V.delta), Ol()),
          O(Z, S)
            .catch((x) =>
              vi(x, 12)
                ? x
                : vi(x, 2)
                  ? (P(Re(_(x.to), { force: !0 }), Z)
                      .then((A) => {
                        vi(A, 20) &&
                          !V.delta &&
                          V.type === Uo.pop &&
                          r.go(-1, !1)
                      })
                      .catch(Eo),
                    Promise.reject())
                  : (V.delta && r.go(-V.delta, !1), Q(x, Z, S))
            )
            .then((x) => {
              ;(x = x || L(Z, S, !1)),
                x &&
                  (V.delta && !vi(x, 8)
                    ? r.go(-V.delta, !1)
                    : V.type === Uo.pop && vi(x, 20) && r.go(-1, !1)),
                I(Z, S, x)
            })
            .catch(Eo)
      }))
  }
  let Y = qs(),
    q = qs(),
    G
  function Q(D, W, V) {
    k(D)
    const Z = q.list()
    return (
      Z.length ? Z.forEach((oe) => oe(D, W, V)) : console.error(D),
      Promise.reject(D)
    )
  }
  function le() {
    return G && l.value !== Di
      ? Promise.resolve()
      : new Promise((D, W) => {
          Y.add([D, W])
        })
  }
  function k(D) {
    return (
      G ||
        ((G = !D),
        j(),
        Y.list().forEach(([W, V]) => (D ? V(D) : W())),
        Y.reset()),
      D
    )
  }
  function he(D, W, V, Z) {
    const { scrollBehavior: oe } = t
    if (!Yr || !oe) return Promise.resolve()
    const S =
      (!V && Vw(Kd(D.fullPath, 0))) ||
      ((Z || !V) && history.state && history.state.scroll) ||
      null
    return Vu()
      .then(() => oe(D, W, S))
      .then((x) => x && Fw(x))
      .catch((x) => Q(x, D, W))
  }
  const _e = (D) => r.go(D)
  let Ue
  const we = new Set(),
    Ae = {
      currentRoute: l,
      listening: !0,
      addRoute: d,
      removeRoute: g,
      clearRoutes: e.clearRoutes,
      hasRoute: y,
      getRoutes: h,
      resolve: w,
      options: t,
      push: v,
      replace: b,
      go: _e,
      back: () => _e(-1),
      forward: () => _e(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: q.add,
      isReady: le,
      install(D) {
        const W = this
        D.component('RouterLink', px),
          D.component('RouterView', _x),
          (D.config.globalProperties.$router = W),
          Object.defineProperty(D.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => _t(l)
          }),
          Yr &&
            !Ue &&
            l.value === Di &&
            ((Ue = !0), v(r.location).catch((oe) => {}))
        const V = {}
        for (const oe in Di)
          Object.defineProperty(V, oe, {
            get: () => l.value[oe],
            enumerable: !0
          })
        D.provide(xf, W), D.provide(Gm, wh(V)), D.provide(bu, l)
        const Z = D.unmount
        we.add(D),
          (D.unmount = function () {
            we.delete(D),
              we.size < 1 &&
                ((c = Di),
                z && z(),
                (z = null),
                (l.value = Di),
                (Ue = !1),
                (G = !1)),
              Z()
          })
      }
    }
  function Oe(D) {
    return D.reduce((W, V) => W.then(() => E(V)), Promise.resolve())
  }
  return Ae
}
function bx(t, e) {
  const n = [],
    i = [],
    r = [],
    s = Math.max(e.matched.length, t.matched.length)
  for (let o = 0; o < s; o++) {
    const a = e.matched[o]
    a && (t.matched.find((c) => Ts(c, a)) ? i.push(a) : n.push(a))
    const l = t.matched[o]
    l && (e.matched.find((c) => Ts(c, l)) || r.push(l))
  }
  return [n, i, r]
}
const yx = '' + new URL('../assets/gif/bg_all.gif', import.meta.url).href,
  wx = { class: 'flex flex-col gap-5' },
  Jo = {
    __name: 'Header',
    setup(t) {
      return (e, n) => (
        bt(),
        nn(
          'header',
          {
            class:
              'flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat p-5',
            style: hl({ backgroundImage: `url(${_t(yx)})` })
          },
          [R('div', wx, [Q0(e.$slots, 'default')])],
          4
        )
      )
    }
  },
  xx = '' + new URL('../img/kv-index.png', import.meta.url).href,
  fp = '' + new URL('../img/ticket-01.png', import.meta.url).href,
  dp = '' + new URL('../img/ticket-02.png', import.meta.url).href,
  Sx = '' + new URL('../img/ticket-gift-01.png', import.meta.url).href,
  Tx = '' + new URL('../img/ticket-gift-01-s.png', import.meta.url).href,
  Ex = '' + new URL('../img/ticket-gift-02.png', import.meta.url).href,
  Cx = '' + new URL('../img/ticket-gift-02-s.png', import.meta.url).href
var Px = Object.defineProperty,
  Ox = (t, e, n) =>
    e in t
      ? Px(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  pp = (t, e, n) => (Ox(t, typeof e != 'symbol' ? e + '' : e, n), n)
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
 */ const pc = (() => {
    const t = {}
    let e = 1
    return {
      set(n, i, r) {
        typeof n[i] > 'u' && ((n[i] = { key: i, id: e }), e++), (t[n[i].id] = r)
      },
      get(n, i) {
        if (!n || typeof n[i] > 'u') return null
        const r = n[i]
        return r.key === i ? t[r.id] : null
      },
      delete(n, i) {
        if (typeof n[i] > 'u') return
        const r = n[i]
        r.key === i && (delete t[r.id], delete n[i])
      }
    }
  })(),
  Po = {
    setData(t, e, n) {
      pc.set(t, e, n)
    },
    getData(t, e) {
      return pc.get(t, e)
    },
    removeData(t, e) {
      pc.delete(t, e)
    }
  },
  Ax = 1e6,
  Mx = 1e3,
  yu = 'transitionend',
  kx = (t) =>
    t == null
      ? `${t}`
      : {}.toString
          .call(t)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  Rx = (t) => {
    do t += Math.floor(Math.random() * Ax)
    while (document.getElementById(t))
    return t
  },
  Wm = (t) => {
    let e = t.getAttribute('data-twe-target')
    if (!e || e === '#') {
      let n = t.getAttribute('href')
      if (!n || (!n.includes('#') && !n.startsWith('.'))) return null
      n.includes('#') && !n.startsWith('#') && (n = `#${n.split('#')[1]}`),
        (e = n && n !== '#' ? n.trim() : null)
    }
    return e
  },
  Um = (t) => {
    const e = Wm(t)
    return e && document.querySelector(e) ? e : null
  },
  qo = (t) => {
    const e = Wm(t)
    return e ? document.querySelector(e) : null
  },
  wu = (t) => {
    if (!t) return 0
    let { transitionDuration: e, transitionDelay: n } =
      window.getComputedStyle(t)
    const i = Number.parseFloat(e),
      r = Number.parseFloat(n)
    return !i && !r
      ? 0
      : ((e = e.split(',')[0]),
        (n = n.split(',')[0]),
        (Number.parseFloat(e) + Number.parseFloat(n)) * Mx)
  },
  Lx = (t) => {
    t.dispatchEvent(new Event(yu))
  },
  Al = (t) =>
    !t || typeof t != 'object'
      ? !1
      : (typeof t.jquery < 'u' && (t = t[0]), typeof t.nodeType < 'u'),
  Cs = (t) =>
    Al(t)
      ? t.jquery
        ? t[0]
        : t
      : typeof t == 'string' && t.length > 0
        ? document.querySelector(t)
        : null,
  Ps = (t, e, n) => {
    Object.keys(n).forEach((i) => {
      const r = n[i],
        s = e[i],
        o = s && Al(s) ? 'element' : kx(s)
      if (!new RegExp(r).test(o))
        throw new Error(
          `${t.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`
        )
    })
  },
  Ml = (t) => {
    if (!t) return !1
    if (t.style && t.parentNode && t.parentNode.style) {
      const e = getComputedStyle(t),
        n = getComputedStyle(t.parentNode)
      return (
        e.display !== 'none' &&
        n.display !== 'none' &&
        e.visibility !== 'hidden'
      )
    }
    return !1
  },
  kl = (t) =>
    !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains('disabled')
      ? !0
      : typeof t.disabled < 'u'
        ? t.disabled
        : t.hasAttribute('disabled') && t.getAttribute('disabled') !== 'false',
  qm = (t) => {
    if (!document.documentElement.attachShadow) return null
    if (typeof t.getRootNode == 'function') {
      const e = t.getRootNode()
      return e instanceof ShadowRoot ? e : null
    }
    return t instanceof ShadowRoot ? t : t.parentNode ? qm(t.parentNode) : null
  },
  hp = () => function () {},
  Sf = (t) => {
    t.offsetHeight
  },
  Ym = () => {
    const { jQuery: t } = window
    return t && !document.body.hasAttribute('data-twe-no-jquery') ? t : null
  },
  hc = [],
  Dx = (t) => {
    document.readyState === 'loading'
      ? (hc.length ||
          document.addEventListener('DOMContentLoaded', () => {
            hc.forEach((e) => e())
          }),
        hc.push(t))
      : t()
  },
  Rn = () => document.documentElement.dir === 'rtl',
  gr = (t) => {
    typeof t == 'function' && t()
  },
  Xm = (t, e, n = !0) => {
    if (!n) {
      gr(t)
      return
    }
    const i = 5,
      r = wu(e) + i
    let s = !1
    const o = ({ target: a }) => {
      a === e && ((s = !0), e.removeEventListener(yu, o), gr(t))
    }
    e.addEventListener(yu, o),
      setTimeout(() => {
        s || Lx(e)
      }, r)
  },
  Ix = /[^.]*(?=\..*)\.|.*/,
  zx = /\..*/,
  Nx = /::\d+$/,
  gc = {}
let gp = 1
const Bx = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
  $x = /^(mouseenter|mouseleave)/i,
  Km = new Set([
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
function Qm(t, e) {
  return (e && `${e}::${gp++}`) || t.uidEvent || gp++
}
function Zm(t) {
  const e = Qm(t)
  return (t.uidEvent = e), (gc[e] = gc[e] || {}), gc[e]
}
function Fx(t, e) {
  return function n(i) {
    return (
      (i.delegateTarget = t), n.oneOff && ae.off(t, i.type, e), e.apply(t, [i])
    )
  }
}
function jx(t, e, n) {
  return function i(r) {
    const s = t.querySelectorAll(e)
    for (let { target: o } = r; o && o !== this; o = o.parentNode)
      for (let a = s.length; a--; '')
        if (s[a] === o)
          return (
            (r.delegateTarget = o),
            i.oneOff && ae.off(t, r.type, n),
            n.apply(o, [r])
          )
    return null
  }
}
function Jm(t, e, n = null) {
  const i = Object.keys(t)
  for (let r = 0, s = i.length; r < s; r++) {
    const o = t[i[r]]
    if (o.originalHandler === e && o.delegationSelector === n) return o
  }
  return null
}
function e_(t, e, n) {
  const i = typeof e == 'string',
    r = i ? n : e
  let s = t_(t)
  return Km.has(s) || (s = t), [i, r, s]
}
function mp(t, e, n, i, r) {
  if (typeof e != 'string' || !t) return
  if ((n || ((n = i), (i = null)), $x.test(e))) {
    const d = (g) =>
      function (h) {
        if (
          !h.relatedTarget ||
          (h.relatedTarget !== h.delegateTarget &&
            !h.delegateTarget.contains(h.relatedTarget))
        )
          return g.call(this, h)
      }
    i ? (i = d(i)) : (n = d(n))
  }
  const [s, o, a] = e_(e, n, i),
    l = Zm(t),
    c = l[a] || (l[a] = {}),
    u = Jm(c, o, s ? n : null)
  if (u) {
    u.oneOff = u.oneOff && r
    return
  }
  const f = Qm(o, e.replace(Ix, '')),
    p = s ? jx(t, n, i) : Fx(t, n)
  ;(p.delegationSelector = s ? n : null),
    (p.originalHandler = o),
    (p.oneOff = r),
    (p.uidEvent = f),
    (c[f] = p),
    t.addEventListener(a, p, s)
}
function xu(t, e, n, i, r) {
  const s = Jm(e[n], i, r)
  s && (t.removeEventListener(n, s, !!r), delete e[n][s.uidEvent])
}
function Vx(t, e, n, i) {
  const r = e[n] || {}
  Object.keys(r).forEach((s) => {
    if (s.includes(i)) {
      const o = r[s]
      xu(t, e, n, o.originalHandler, o.delegationSelector)
    }
  })
}
function t_(t) {
  return (t = t.replace(zx, '')), Bx[t] || t
}
const ae = {
    on(t, e, n, i) {
      mp(t, e, n, i, !1)
    },
    one(t, e, n, i) {
      mp(t, e, n, i, !0)
    },
    off(t, e, n, i) {
      if (typeof e != 'string' || !t) return
      const [r, s, o] = e_(e, n, i),
        a = o !== e,
        l = Zm(t),
        c = e.startsWith('.')
      if (typeof s < 'u') {
        if (!l || !l[o]) return
        xu(t, l, o, s, r ? n : null)
        return
      }
      c &&
        Object.keys(l).forEach((f) => {
          Vx(t, l, f, e.slice(1))
        })
      const u = l[o] || {}
      Object.keys(u).forEach((f) => {
        const p = f.replace(Nx, '')
        if (!a || e.includes(p)) {
          const d = u[f]
          xu(t, l, o, d.originalHandler, d.delegationSelector)
        }
      })
    },
    trigger(t, e, n) {
      if (typeof e != 'string' || !t) return null
      const i = Ym(),
        r = t_(e),
        s = e !== r,
        o = Km.has(r)
      let a,
        l = !0,
        c = !0,
        u = !1,
        f = null
      return (
        s &&
          i &&
          ((a = i.Event(e, n)),
          i(t).trigger(a),
          (l = !a.isPropagationStopped()),
          (c = !a.isImmediatePropagationStopped()),
          (u = a.isDefaultPrevented())),
        o
          ? ((f = document.createEvent('HTMLEvents')), f.initEvent(r, l, !0))
          : (f = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
        typeof n < 'u' &&
          Object.keys(n).forEach((p) => {
            Object.defineProperty(f, p, {
              get() {
                return n[p]
              }
            })
          }),
        u && f.preventDefault(),
        c && t.dispatchEvent(f),
        f.defaultPrevented && typeof a < 'u' && a.preventDefault(),
        f
      )
    }
  },
  Hx = '5.1.3'
class Tf {
  constructor(e) {
    ;(e = Cs(e)),
      e &&
        ((this._element = e),
        Po.setData(this._element, this.constructor.DATA_KEY, this))
  }
  dispose() {
    Po.removeData(this._element, this.constructor.DATA_KEY),
      ae.off(this._element, this.constructor.EVENT_KEY),
      Object.getOwnPropertyNames(this).forEach((e) => {
        this[e] = null
      })
  }
  _queueCallback(e, n, i = !0) {
    Xm(e, n, i)
  }
  static getInstance(e) {
    return Po.getData(Cs(e), this.DATA_KEY)
  }
  static getOrCreateInstance(e, n = {}) {
    return this.getInstance(e) || new this(e, typeof n == 'object' ? n : null)
  }
  static get VERSION() {
    return Hx
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
var Qt = 'top',
  xn = 'bottom',
  Sn = 'right',
  Zt = 'left',
  Rl = 'auto',
  Ds = [Qt, xn, Sn, Zt],
  Dr = 'start',
  Os = 'end',
  n_ = 'clippingParents',
  Ef = 'viewport',
  Xr = 'popper',
  i_ = 'reference',
  Su = Ds.reduce(function (t, e) {
    return t.concat([e + '-' + Dr, e + '-' + Os])
  }, []),
  Cf = [].concat(Ds, [Rl]).reduce(function (t, e) {
    return t.concat([e, e + '-' + Dr, e + '-' + Os])
  }, []),
  r_ = 'beforeRead',
  s_ = 'read',
  o_ = 'afterRead',
  a_ = 'beforeMain',
  l_ = 'main',
  c_ = 'afterMain',
  u_ = 'beforeWrite',
  f_ = 'write',
  d_ = 'afterWrite',
  p_ = [r_, s_, o_, a_, l_, c_, u_, f_, d_]
function gi(t) {
  return t ? (t.nodeName || '').toLowerCase() : null
}
function Tn(t) {
  if (t == null) return window
  if (t.toString() !== '[object Window]') {
    var e = t.ownerDocument
    return (e && e.defaultView) || window
  }
  return t
}
function Ir(t) {
  var e = Tn(t).Element
  return t instanceof e || t instanceof Element
}
function In(t) {
  var e = Tn(t).HTMLElement
  return t instanceof e || t instanceof HTMLElement
}
function Pf(t) {
  if (typeof ShadowRoot > 'u') return !1
  var e = Tn(t).ShadowRoot
  return t instanceof e || t instanceof ShadowRoot
}
function Gx(t) {
  var e = t.state
  Object.keys(e.elements).forEach(function (n) {
    var i = e.styles[n] || {},
      r = e.attributes[n] || {},
      s = e.elements[n]
    !In(s) ||
      !gi(s) ||
      (Object.assign(s.style, i),
      Object.keys(r).forEach(function (o) {
        var a = r[o]
        a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? '' : a)
      }))
  })
}
function Wx(t) {
  var e = t.state,
    n = {
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
    Object.assign(e.elements.popper.style, n.popper),
    (e.styles = n),
    e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
    function () {
      Object.keys(e.elements).forEach(function (i) {
        var r = e.elements[i],
          s = e.attributes[i] || {},
          o = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : n[i]),
          a = o.reduce(function (l, c) {
            return (l[c] = ''), l
          }, {})
        !In(r) ||
          !gi(r) ||
          (Object.assign(r.style, a),
          Object.keys(s).forEach(function (l) {
            r.removeAttribute(l)
          }))
      })
    }
  )
}
const Of = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: Gx,
  effect: Wx,
  requires: ['computeStyles']
}
function di(t) {
  return t.split('-')[0]
}
var Cr = Math.max,
  rl = Math.min,
  As = Math.round
function Tu() {
  var t = navigator.userAgentData
  return t != null && t.brands && Array.isArray(t.brands)
    ? t.brands
        .map(function (e) {
          return e.brand + '/' + e.version
        })
        .join(' ')
    : navigator.userAgent
}
function h_() {
  return !/^((?!chrome|android).)*safari/i.test(Tu())
}
function Ms(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1)
  var i = t.getBoundingClientRect(),
    r = 1,
    s = 1
  e &&
    In(t) &&
    ((r = (t.offsetWidth > 0 && As(i.width) / t.offsetWidth) || 1),
    (s = (t.offsetHeight > 0 && As(i.height) / t.offsetHeight) || 1))
  var o = Ir(t) ? Tn(t) : window,
    a = o.visualViewport,
    l = !h_() && n,
    c = (i.left + (l && a ? a.offsetLeft : 0)) / r,
    u = (i.top + (l && a ? a.offsetTop : 0)) / s,
    f = i.width / r,
    p = i.height / s
  return {
    width: f,
    height: p,
    top: u,
    right: c + f,
    bottom: u + p,
    left: c,
    x: c,
    y: u
  }
}
function Af(t) {
  var e = Ms(t),
    n = t.offsetWidth,
    i = t.offsetHeight
  return (
    Math.abs(e.width - n) <= 1 && (n = e.width),
    Math.abs(e.height - i) <= 1 && (i = e.height),
    { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
  )
}
function g_(t, e) {
  var n = e.getRootNode && e.getRootNode()
  if (t.contains(e)) return !0
  if (n && Pf(n)) {
    var i = e
    do {
      if (i && t.isSameNode(i)) return !0
      i = i.parentNode || i.host
    } while (i)
  }
  return !1
}
function ki(t) {
  return Tn(t).getComputedStyle(t)
}
function Ux(t) {
  return ['table', 'td', 'th'].indexOf(gi(t)) >= 0
}
function nr(t) {
  return ((Ir(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement
}
function Ll(t) {
  return gi(t) === 'html'
    ? t
    : t.assignedSlot || t.parentNode || (Pf(t) ? t.host : null) || nr(t)
}
function _p(t) {
  return !In(t) || ki(t).position === 'fixed' ? null : t.offsetParent
}
function qx(t) {
  var e = /firefox/i.test(Tu()),
    n = /Trident/i.test(Tu())
  if (n && In(t)) {
    var i = ki(t)
    if (i.position === 'fixed') return null
  }
  var r = Ll(t)
  for (Pf(r) && (r = r.host); In(r) && ['html', 'body'].indexOf(gi(r)) < 0; ) {
    var s = ki(r)
    if (
      s.transform !== 'none' ||
      s.perspective !== 'none' ||
      s.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(s.willChange) !== -1 ||
      (e && s.willChange === 'filter') ||
      (e && s.filter && s.filter !== 'none')
    )
      return r
    r = r.parentNode
  }
  return null
}
function ea(t) {
  for (var e = Tn(t), n = _p(t); n && Ux(n) && ki(n).position === 'static'; )
    n = _p(n)
  return n &&
    (gi(n) === 'html' || (gi(n) === 'body' && ki(n).position === 'static'))
    ? e
    : n || qx(t) || e
}
function Mf(t) {
  return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y'
}
function Oo(t, e, n) {
  return Cr(t, rl(e, n))
}
function Yx(t, e, n) {
  var i = Oo(t, e, n)
  return i > n ? n : i
}
function m_() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function __(t) {
  return Object.assign({}, m_(), t)
}
function v_(t, e) {
  return e.reduce(function (n, i) {
    return (n[i] = t), n
  }, {})
}
var Xx = function (t, e) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, e.rects, { placement: e.placement }))
        : t),
    __(typeof t != 'number' ? t : v_(t, Ds))
  )
}
function Kx(t) {
  var e,
    n = t.state,
    i = t.name,
    r = t.options,
    s = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    a = di(n.placement),
    l = Mf(a),
    c = [Zt, Sn].indexOf(a) >= 0,
    u = c ? 'height' : 'width'
  if (!(!s || !o)) {
    var f = Xx(r.padding, n),
      p = Af(s),
      d = l === 'y' ? Qt : Zt,
      g = l === 'y' ? xn : Sn,
      h =
        n.rects.reference[u] + n.rects.reference[l] - o[l] - n.rects.popper[u],
      y = o[l] - n.rects.reference[l],
      w = ea(s),
      _ = w ? (l === 'y' ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
      m = h / 2 - y / 2,
      v = f[d],
      b = _ - p[u] - f[g],
      C = _ / 2 - p[u] / 2 + m,
      P = Oo(v, C, b),
      M = l
    n.modifiersData[i] = ((e = {}), (e[M] = P), (e.centerOffset = P - C), e)
  }
}
function Qx(t) {
  var e = t.state,
    n = t.options,
    i = n.element,
    r = i === void 0 ? '[data-popper-arrow]' : i
  r != null &&
    ((typeof r == 'string' && ((r = e.elements.popper.querySelector(r)), !r)) ||
      (g_(e.elements.popper, r) && (e.elements.arrow = r)))
}
const b_ = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Kx,
  effect: Qx,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
}
function ks(t) {
  return t.split('-')[1]
}
var Zx = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function Jx(t, e) {
  var n = t.x,
    i = t.y,
    r = e.devicePixelRatio || 1
  return { x: As(n * r) / r || 0, y: As(i * r) / r || 0 }
}
function vp(t) {
  var e,
    n = t.popper,
    i = t.popperRect,
    r = t.placement,
    s = t.variation,
    o = t.offsets,
    a = t.position,
    l = t.gpuAcceleration,
    c = t.adaptive,
    u = t.roundOffsets,
    f = t.isFixed,
    p = o.x,
    d = p === void 0 ? 0 : p,
    g = o.y,
    h = g === void 0 ? 0 : g,
    y = typeof u == 'function' ? u({ x: d, y: h }) : { x: d, y: h }
  ;(d = y.x), (h = y.y)
  var w = o.hasOwnProperty('x'),
    _ = o.hasOwnProperty('y'),
    m = Zt,
    v = Qt,
    b = window
  if (c) {
    var C = ea(n),
      P = 'clientHeight',
      M = 'clientWidth'
    if (
      (C === Tn(n) &&
        ((C = nr(n)),
        ki(C).position !== 'static' &&
          a === 'absolute' &&
          ((P = 'scrollHeight'), (M = 'scrollWidth'))),
      (C = C),
      r === Qt || ((r === Zt || r === Sn) && s === Os))
    ) {
      v = xn
      var E = f && C === b && b.visualViewport ? b.visualViewport.height : C[P]
      ;(h -= E - i.height), (h *= l ? 1 : -1)
    }
    if (r === Zt || ((r === Qt || r === xn) && s === Os)) {
      m = Sn
      var O = f && C === b && b.visualViewport ? b.visualViewport.width : C[M]
      ;(d -= O - i.width), (d *= l ? 1 : -1)
    }
  }
  var I = Object.assign({ position: a }, c && Zx),
    L = u === !0 ? Jx({ x: d, y: h }, Tn(n)) : { x: d, y: h }
  if (((d = L.x), (h = L.y), l)) {
    var z
    return Object.assign(
      {},
      I,
      ((z = {}),
      (z[v] = _ ? '0' : ''),
      (z[m] = w ? '0' : ''),
      (z.transform =
        (b.devicePixelRatio || 1) <= 1
          ? 'translate(' + d + 'px, ' + h + 'px)'
          : 'translate3d(' + d + 'px, ' + h + 'px, 0)'),
      z)
    )
  }
  return Object.assign(
    {},
    I,
    ((e = {}),
    (e[v] = _ ? h + 'px' : ''),
    (e[m] = w ? d + 'px' : ''),
    (e.transform = ''),
    e)
  )
}
function e1(t) {
  var e = t.state,
    n = t.options,
    i = n.gpuAcceleration,
    r = i === void 0 ? !0 : i,
    s = n.adaptive,
    o = s === void 0 ? !0 : s,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: di(e.placement),
      variation: ks(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: r,
      isFixed: e.options.strategy === 'fixed'
    }
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      vp(
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
        vp(
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
const kf = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: e1,
  data: {}
}
var ya = { passive: !0 }
function t1(t) {
  var e = t.state,
    n = t.instance,
    i = t.options,
    r = i.scroll,
    s = r === void 0 ? !0 : r,
    o = i.resize,
    a = o === void 0 ? !0 : o,
    l = Tn(e.elements.popper),
    c = [].concat(e.scrollParents.reference, e.scrollParents.popper)
  return (
    s &&
      c.forEach(function (u) {
        u.addEventListener('scroll', n.update, ya)
      }),
    a && l.addEventListener('resize', n.update, ya),
    function () {
      s &&
        c.forEach(function (u) {
          u.removeEventListener('scroll', n.update, ya)
        }),
        a && l.removeEventListener('resize', n.update, ya)
    }
  )
}
const Rf = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: t1,
  data: {}
}
var n1 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function za(t) {
  return t.replace(/left|right|bottom|top/g, function (e) {
    return n1[e]
  })
}
var i1 = { start: 'end', end: 'start' }
function bp(t) {
  return t.replace(/start|end/g, function (e) {
    return i1[e]
  })
}
function Lf(t) {
  var e = Tn(t),
    n = e.pageXOffset,
    i = e.pageYOffset
  return { scrollLeft: n, scrollTop: i }
}
function Df(t) {
  return Ms(nr(t)).left + Lf(t).scrollLeft
}
function r1(t, e) {
  var n = Tn(t),
    i = nr(t),
    r = n.visualViewport,
    s = i.clientWidth,
    o = i.clientHeight,
    a = 0,
    l = 0
  if (r) {
    ;(s = r.width), (o = r.height)
    var c = h_()
    ;(c || (!c && e === 'fixed')) && ((a = r.offsetLeft), (l = r.offsetTop))
  }
  return { width: s, height: o, x: a + Df(t), y: l }
}
function s1(t) {
  var e,
    n = nr(t),
    i = Lf(t),
    r = (e = t.ownerDocument) == null ? void 0 : e.body,
    s = Cr(
      n.scrollWidth,
      n.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0
    ),
    o = Cr(
      n.scrollHeight,
      n.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0
    ),
    a = -i.scrollLeft + Df(t),
    l = -i.scrollTop
  return (
    ki(r || n).direction === 'rtl' &&
      (a += Cr(n.clientWidth, r ? r.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: l }
  )
}
function If(t) {
  var e = ki(t),
    n = e.overflow,
    i = e.overflowX,
    r = e.overflowY
  return /auto|scroll|overlay|hidden/.test(n + r + i)
}
function y_(t) {
  return ['html', 'body', '#document'].indexOf(gi(t)) >= 0
    ? t.ownerDocument.body
    : In(t) && If(t)
      ? t
      : y_(Ll(t))
}
function Ao(t, e) {
  var n
  e === void 0 && (e = [])
  var i = y_(t),
    r = i === ((n = t.ownerDocument) == null ? void 0 : n.body),
    s = Tn(i),
    o = r ? [s].concat(s.visualViewport || [], If(i) ? i : []) : i,
    a = e.concat(o)
  return r ? a : a.concat(Ao(Ll(o)))
}
function Eu(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  })
}
function o1(t, e) {
  var n = Ms(t, !1, e === 'fixed')
  return (
    (n.top = n.top + t.clientTop),
    (n.left = n.left + t.clientLeft),
    (n.bottom = n.top + t.clientHeight),
    (n.right = n.left + t.clientWidth),
    (n.width = t.clientWidth),
    (n.height = t.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  )
}
function yp(t, e, n) {
  return e === Ef ? Eu(r1(t, n)) : Ir(e) ? o1(e, n) : Eu(s1(nr(t)))
}
function a1(t) {
  var e = Ao(Ll(t)),
    n = ['absolute', 'fixed'].indexOf(ki(t).position) >= 0,
    i = n && In(t) ? ea(t) : t
  return Ir(i)
    ? e.filter(function (r) {
        return Ir(r) && g_(r, i) && gi(r) !== 'body'
      })
    : []
}
function l1(t, e, n, i) {
  var r = e === 'clippingParents' ? a1(t) : [].concat(e),
    s = [].concat(r, [n]),
    o = s[0],
    a = s.reduce(
      function (l, c) {
        var u = yp(t, c, i)
        return (
          (l.top = Cr(u.top, l.top)),
          (l.right = rl(u.right, l.right)),
          (l.bottom = rl(u.bottom, l.bottom)),
          (l.left = Cr(u.left, l.left)),
          l
        )
      },
      yp(t, o, i)
    )
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  )
}
function w_(t) {
  var e = t.reference,
    n = t.element,
    i = t.placement,
    r = i ? di(i) : null,
    s = i ? ks(i) : null,
    o = e.x + e.width / 2 - n.width / 2,
    a = e.y + e.height / 2 - n.height / 2,
    l
  switch (r) {
    case Qt:
      l = { x: o, y: e.y - n.height }
      break
    case xn:
      l = { x: o, y: e.y + e.height }
      break
    case Sn:
      l = { x: e.x + e.width, y: a }
      break
    case Zt:
      l = { x: e.x - n.width, y: a }
      break
    default:
      l = { x: e.x, y: e.y }
  }
  var c = r ? Mf(r) : null
  if (c != null) {
    var u = c === 'y' ? 'height' : 'width'
    switch (s) {
      case Dr:
        l[c] = l[c] - (e[u] / 2 - n[u] / 2)
        break
      case Os:
        l[c] = l[c] + (e[u] / 2 - n[u] / 2)
        break
    }
  }
  return l
}
function Rs(t, e) {
  e === void 0 && (e = {})
  var n = e,
    i = n.placement,
    r = i === void 0 ? t.placement : i,
    s = n.strategy,
    o = s === void 0 ? t.strategy : s,
    a = n.boundary,
    l = a === void 0 ? n_ : a,
    c = n.rootBoundary,
    u = c === void 0 ? Ef : c,
    f = n.elementContext,
    p = f === void 0 ? Xr : f,
    d = n.altBoundary,
    g = d === void 0 ? !1 : d,
    h = n.padding,
    y = h === void 0 ? 0 : h,
    w = __(typeof y != 'number' ? y : v_(y, Ds)),
    _ = p === Xr ? i_ : Xr,
    m = t.rects.popper,
    v = t.elements[g ? _ : p],
    b = l1(Ir(v) ? v : v.contextElement || nr(t.elements.popper), l, u, o),
    C = Ms(t.elements.reference),
    P = w_({ reference: C, element: m, strategy: 'absolute', placement: r }),
    M = Eu(Object.assign({}, m, P)),
    E = p === Xr ? M : C,
    O = {
      top: b.top - E.top + w.top,
      bottom: E.bottom - b.bottom + w.bottom,
      left: b.left - E.left + w.left,
      right: E.right - b.right + w.right
    },
    I = t.modifiersData.offset
  if (p === Xr && I) {
    var L = I[r]
    Object.keys(O).forEach(function (z) {
      var j = [Sn, xn].indexOf(z) >= 0 ? 1 : -1,
        Y = [Qt, xn].indexOf(z) >= 0 ? 'y' : 'x'
      O[z] += L[Y] * j
    })
  }
  return O
}
function c1(t, e) {
  e === void 0 && (e = {})
  var n = e,
    i = n.placement,
    r = n.boundary,
    s = n.rootBoundary,
    o = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? Cf : l,
    u = ks(i),
    f = u
      ? a
        ? Su
        : Su.filter(function (g) {
            return ks(g) === u
          })
      : Ds,
    p = f.filter(function (g) {
      return c.indexOf(g) >= 0
    })
  p.length === 0 && (p = f)
  var d = p.reduce(function (g, h) {
    return (
      (g[h] = Rs(t, { placement: h, boundary: r, rootBoundary: s, padding: o })[
        di(h)
      ]),
      g
    )
  }, {})
  return Object.keys(d).sort(function (g, h) {
    return d[g] - d[h]
  })
}
function u1(t) {
  if (di(t) === Rl) return []
  var e = za(t)
  return [bp(t), e, bp(e)]
}
function f1(t) {
  var e = t.state,
    n = t.options,
    i = t.name
  if (!e.modifiersData[i]._skip) {
    for (
      var r = n.mainAxis,
        s = r === void 0 ? !0 : r,
        o = n.altAxis,
        a = o === void 0 ? !0 : o,
        l = n.fallbackPlacements,
        c = n.padding,
        u = n.boundary,
        f = n.rootBoundary,
        p = n.altBoundary,
        d = n.flipVariations,
        g = d === void 0 ? !0 : d,
        h = n.allowedAutoPlacements,
        y = e.options.placement,
        w = di(y),
        _ = w === y,
        m = l || (_ || !g ? [za(y)] : u1(y)),
        v = [y].concat(m).reduce(function (we, Ae) {
          return we.concat(
            di(Ae) === Rl
              ? c1(e, {
                  placement: Ae,
                  boundary: u,
                  rootBoundary: f,
                  padding: c,
                  flipVariations: g,
                  allowedAutoPlacements: h
                })
              : Ae
          )
        }, []),
        b = e.rects.reference,
        C = e.rects.popper,
        P = new Map(),
        M = !0,
        E = v[0],
        O = 0;
      O < v.length;
      O++
    ) {
      var I = v[O],
        L = di(I),
        z = ks(I) === Dr,
        j = [Qt, xn].indexOf(L) >= 0,
        Y = j ? 'width' : 'height',
        q = Rs(e, {
          placement: I,
          boundary: u,
          rootBoundary: f,
          altBoundary: p,
          padding: c
        }),
        G = j ? (z ? Sn : Zt) : z ? xn : Qt
      b[Y] > C[Y] && (G = za(G))
      var Q = za(G),
        le = []
      if (
        (s && le.push(q[L] <= 0),
        a && le.push(q[G] <= 0, q[Q] <= 0),
        le.every(function (we) {
          return we
        }))
      ) {
        ;(E = I), (M = !1)
        break
      }
      P.set(I, le)
    }
    if (M)
      for (
        var k = g ? 3 : 1,
          he = function (we) {
            var Ae = v.find(function (Oe) {
              var D = P.get(Oe)
              if (D)
                return D.slice(0, we).every(function (W) {
                  return W
                })
            })
            if (Ae) return (E = Ae), 'break'
          },
          _e = k;
        _e > 0;
        _e--
      ) {
        var Ue = he(_e)
        if (Ue === 'break') break
      }
    e.placement !== E &&
      ((e.modifiersData[i]._skip = !0), (e.placement = E), (e.reset = !0))
  }
}
const x_ = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: f1,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
}
function wp(t, e, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x
    }
  )
}
function xp(t) {
  return [Qt, Sn, xn, Zt].some(function (e) {
    return t[e] >= 0
  })
}
function d1(t) {
  var e = t.state,
    n = t.name,
    i = e.rects.reference,
    r = e.rects.popper,
    s = e.modifiersData.preventOverflow,
    o = Rs(e, { elementContext: 'reference' }),
    a = Rs(e, { altBoundary: !0 }),
    l = wp(o, i),
    c = wp(a, r, s),
    u = xp(l),
    f = xp(c)
  ;(e.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      'data-popper-reference-hidden': u,
      'data-popper-escaped': f
    }))
}
const S_ = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: d1
}
function p1(t, e, n) {
  var i = di(t),
    r = [Zt, Qt].indexOf(i) >= 0 ? -1 : 1,
    s = typeof n == 'function' ? n(Object.assign({}, e, { placement: t })) : n,
    o = s[0],
    a = s[1]
  return (
    (o = o || 0),
    (a = (a || 0) * r),
    [Zt, Sn].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
  )
}
function h1(t) {
  var e = t.state,
    n = t.options,
    i = t.name,
    r = n.offset,
    s = r === void 0 ? [0, 0] : r,
    o = Cf.reduce(function (u, f) {
      return (u[f] = p1(f, e.rects, s)), u
    }, {}),
    a = o[e.placement],
    l = a.x,
    c = a.y
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += l),
    (e.modifiersData.popperOffsets.y += c)),
    (e.modifiersData[i] = o)
}
const T_ = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: h1
}
function g1(t) {
  var e = t.state,
    n = t.name
  e.modifiersData[n] = w_({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: 'absolute',
    placement: e.placement
  })
}
const zf = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: g1,
  data: {}
}
function m1(t) {
  return t === 'x' ? 'y' : 'x'
}
function _1(t) {
  var e = t.state,
    n = t.options,
    i = t.name,
    r = n.mainAxis,
    s = r === void 0 ? !0 : r,
    o = n.altAxis,
    a = o === void 0 ? !1 : o,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.altBoundary,
    f = n.padding,
    p = n.tether,
    d = p === void 0 ? !0 : p,
    g = n.tetherOffset,
    h = g === void 0 ? 0 : g,
    y = Rs(e, { boundary: l, rootBoundary: c, padding: f, altBoundary: u }),
    w = di(e.placement),
    _ = ks(e.placement),
    m = !_,
    v = Mf(w),
    b = m1(v),
    C = e.modifiersData.popperOffsets,
    P = e.rects.reference,
    M = e.rects.popper,
    E =
      typeof h == 'function'
        ? h(Object.assign({}, e.rects, { placement: e.placement }))
        : h,
    O =
      typeof E == 'number'
        ? { mainAxis: E, altAxis: E }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, E),
    I = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    L = { x: 0, y: 0 }
  if (C) {
    if (s) {
      var z,
        j = v === 'y' ? Qt : Zt,
        Y = v === 'y' ? xn : Sn,
        q = v === 'y' ? 'height' : 'width',
        G = C[v],
        Q = G + y[j],
        le = G - y[Y],
        k = d ? -M[q] / 2 : 0,
        he = _ === Dr ? P[q] : M[q],
        _e = _ === Dr ? -M[q] : -P[q],
        Ue = e.elements.arrow,
        we = d && Ue ? Af(Ue) : { width: 0, height: 0 },
        Ae = e.modifiersData['arrow#persistent']
          ? e.modifiersData['arrow#persistent'].padding
          : m_(),
        Oe = Ae[j],
        D = Ae[Y],
        W = Oo(0, P[q], we[q]),
        V = m ? P[q] / 2 - k - W - Oe - O.mainAxis : he - W - Oe - O.mainAxis,
        Z = m ? -P[q] / 2 + k + W + D + O.mainAxis : _e + W + D + O.mainAxis,
        oe = e.elements.arrow && ea(e.elements.arrow),
        S = oe ? (v === 'y' ? oe.clientTop || 0 : oe.clientLeft || 0) : 0,
        x = (z = I == null ? void 0 : I[v]) != null ? z : 0,
        A = G + V - x - S,
        N = G + Z - x,
        B = Oo(d ? rl(Q, A) : Q, G, d ? Cr(le, N) : le)
      ;(C[v] = B), (L[v] = B - G)
    }
    if (a) {
      var T,
        U = v === 'x' ? Qt : Zt,
        H = v === 'x' ? xn : Sn,
        F = C[b],
        $ = b === 'y' ? 'height' : 'width',
        ne = F + y[U],
        X = F - y[H],
        te = [Qt, Zt].indexOf(w) !== -1,
        J = (T = I == null ? void 0 : I[b]) != null ? T : 0,
        ce = te ? ne : F - P[$] - M[$] - J + O.altAxis,
        ie = te ? F + P[$] + M[$] - J - O.altAxis : X,
        ue = d && te ? Yx(ce, F, ie) : Oo(d ? ce : ne, F, d ? ie : X)
      ;(C[b] = ue), (L[b] = ue - F)
    }
    e.modifiersData[i] = L
  }
}
const E_ = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: _1,
  requiresIfExists: ['offset']
}
function v1(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
}
function b1(t) {
  return t === Tn(t) || !In(t) ? Lf(t) : v1(t)
}
function y1(t) {
  var e = t.getBoundingClientRect(),
    n = As(e.width) / t.offsetWidth || 1,
    i = As(e.height) / t.offsetHeight || 1
  return n !== 1 || i !== 1
}
function w1(t, e, n) {
  n === void 0 && (n = !1)
  var i = In(e),
    r = In(e) && y1(e),
    s = nr(e),
    o = Ms(t, r, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 }
  return (
    (i || (!i && !n)) &&
      ((gi(e) !== 'body' || If(s)) && (a = b1(e)),
      In(e)
        ? ((l = Ms(e, !0)), (l.x += e.clientLeft), (l.y += e.clientTop))
        : s && (l.x = Df(s))),
    {
      x: o.left + a.scrollLeft - l.x,
      y: o.top + a.scrollTop - l.y,
      width: o.width,
      height: o.height
    }
  )
}
function x1(t) {
  var e = new Map(),
    n = new Set(),
    i = []
  t.forEach(function (s) {
    e.set(s.name, s)
  })
  function r(s) {
    n.add(s.name)
    var o = [].concat(s.requires || [], s.requiresIfExists || [])
    o.forEach(function (a) {
      if (!n.has(a)) {
        var l = e.get(a)
        l && r(l)
      }
    }),
      i.push(s)
  }
  return (
    t.forEach(function (s) {
      n.has(s.name) || r(s)
    }),
    i
  )
}
function S1(t) {
  var e = x1(t)
  return p_.reduce(function (n, i) {
    return n.concat(
      e.filter(function (r) {
        return r.phase === i
      })
    )
  }, [])
}
function T1(t) {
  var e
  return function () {
    return (
      e ||
        (e = new Promise(function (n) {
          Promise.resolve().then(function () {
            ;(e = void 0), n(t())
          })
        })),
      e
    )
  }
}
function E1(t) {
  var e = t.reduce(function (n, i) {
    var r = n[i.name]
    return (
      (n[i.name] = r
        ? Object.assign({}, r, i, {
            options: Object.assign({}, r.options, i.options),
            data: Object.assign({}, r.data, i.data)
          })
        : i),
      n
    )
  }, {})
  return Object.keys(e).map(function (n) {
    return e[n]
  })
}
var Sp = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function Tp() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n]
  return !e.some(function (i) {
    return !(i && typeof i.getBoundingClientRect == 'function')
  })
}
function Dl(t) {
  t === void 0 && (t = {})
  var e = t,
    n = e.defaultModifiers,
    i = n === void 0 ? [] : n,
    r = e.defaultOptions,
    s = r === void 0 ? Sp : r
  return function (o, a, l) {
    l === void 0 && (l = s)
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Sp, s),
        modifiersData: {},
        elements: { reference: o, popper: a },
        attributes: {},
        styles: {}
      },
      u = [],
      f = !1,
      p = {
        state: c,
        setOptions: function (h) {
          var y = typeof h == 'function' ? h(c.options) : h
          g(),
            (c.options = Object.assign({}, s, c.options, y)),
            (c.scrollParents = {
              reference: Ir(o)
                ? Ao(o)
                : o.contextElement
                  ? Ao(o.contextElement)
                  : [],
              popper: Ao(a)
            })
          var w = S1(E1([].concat(i, c.options.modifiers)))
          return (
            (c.orderedModifiers = w.filter(function (_) {
              return _.enabled
            })),
            d(),
            p.update()
          )
        },
        forceUpdate: function () {
          if (!f) {
            var h = c.elements,
              y = h.reference,
              w = h.popper
            if (Tp(y, w)) {
              ;(c.rects = {
                reference: w1(y, ea(w), c.options.strategy === 'fixed'),
                popper: Af(w)
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (M) {
                  return (c.modifiersData[M.name] = Object.assign({}, M.data))
                })
              for (var _ = 0; _ < c.orderedModifiers.length; _++) {
                if (c.reset === !0) {
                  ;(c.reset = !1), (_ = -1)
                  continue
                }
                var m = c.orderedModifiers[_],
                  v = m.fn,
                  b = m.options,
                  C = b === void 0 ? {} : b,
                  P = m.name
                typeof v == 'function' &&
                  (c = v({ state: c, options: C, name: P, instance: p }) || c)
              }
            }
          }
        },
        update: T1(function () {
          return new Promise(function (h) {
            p.forceUpdate(), h(c)
          })
        }),
        destroy: function () {
          g(), (f = !0)
        }
      }
    if (!Tp(o, a)) return p
    p.setOptions(l).then(function (h) {
      !f && l.onFirstUpdate && l.onFirstUpdate(h)
    })
    function d() {
      c.orderedModifiers.forEach(function (h) {
        var y = h.name,
          w = h.options,
          _ = w === void 0 ? {} : w,
          m = h.effect
        if (typeof m == 'function') {
          var v = m({ state: c, name: y, instance: p, options: _ }),
            b = function () {}
          u.push(v || b)
        }
      })
    }
    function g() {
      u.forEach(function (h) {
        return h()
      }),
        (u = [])
    }
    return p
  }
}
var C1 = Dl(),
  P1 = [Rf, zf, kf, Of],
  O1 = Dl({ defaultModifiers: P1 }),
  A1 = [Rf, zf, kf, Of, T_, x_, E_, b_, S_],
  C_ = Dl({ defaultModifiers: A1 })
const M1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: c_,
      afterRead: o_,
      afterWrite: d_,
      applyStyles: Of,
      arrow: b_,
      auto: Rl,
      basePlacements: Ds,
      beforeMain: a_,
      beforeRead: r_,
      beforeWrite: u_,
      bottom: xn,
      clippingParents: n_,
      computeStyles: kf,
      createPopper: C_,
      createPopperBase: C1,
      createPopperLite: O1,
      detectOverflow: Rs,
      end: Os,
      eventListeners: Rf,
      flip: x_,
      hide: S_,
      left: Zt,
      main: l_,
      modifierPhases: p_,
      offset: T_,
      placements: Cf,
      popper: Xr,
      popperGenerator: Dl,
      popperOffsets: zf,
      preventOverflow: E_,
      read: s_,
      reference: i_,
      right: Sn,
      start: Dr,
      top: Qt,
      variationPlacements: Su,
      viewport: Ef,
      write: f_
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
function mc(t) {
  return t === 'true'
    ? !0
    : t === 'false'
      ? !1
      : t === Number(t).toString()
        ? Number(t)
        : t === '' || t === 'null'
          ? null
          : t
}
function _c(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)
}
const Ze = {
  setDataAttribute(t, e, n) {
    t.setAttribute(`data-twe-${_c(e)}`, n)
  },
  removeDataAttribute(t, e) {
    t.removeAttribute(`data-twe-${_c(e)}`)
  },
  getDataAttributes(t) {
    if (!t) return {}
    const e = {}
    return (
      Object.keys(t.dataset)
        .filter((n) => n.startsWith('twe'))
        .forEach((n) => {
          if (n.startsWith('tweClass')) return
          let i = n.replace(/^twe/, '')
          ;(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
            (e[i] = mc(t.dataset[n]))
        }),
      e
    )
  },
  getDataClassAttributes(t) {
    if (!t) return {}
    const e = { ...t.dataset }
    return (
      Object.keys(e)
        .filter((n) => n.startsWith('tweClass'))
        .forEach((n) => {
          let i = n.replace(/^tweClass/, '')
          ;(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
            (e[i] = mc(e[n]))
        }),
      e
    )
  },
  getDataAttribute(t, e) {
    return mc(t.getAttribute(`data-twe-${_c(e)}`))
  },
  offset(t) {
    const e = t.getBoundingClientRect()
    return {
      top: e.top + document.body.scrollTop,
      left: e.left + document.body.scrollLeft
    }
  },
  position(t) {
    return { top: t.offsetTop, left: t.offsetLeft }
  },
  style(t, e) {
    Object.assign(t.style, e)
  },
  toggleClass(t, e) {
    t &&
      vc(e).forEach((n) => {
        t.classList.contains(n) ? t.classList.remove(n) : t.classList.add(n)
      })
  },
  addClass(t, e) {
    vc(e).forEach((n) => !t.classList.contains(n) && t.classList.add(n))
  },
  addStyle(t, e) {
    Object.keys(e).forEach((n) => {
      t.style[n] = e[n]
    })
  },
  removeClass(t, e) {
    vc(e).forEach((n) => t.classList.contains(n) && t.classList.remove(n))
  },
  hasClass(t, e) {
    return t.classList.contains(e)
  },
  maxOffset(t) {
    const e = t.getBoundingClientRect()
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
function vc(t) {
  return typeof t == 'string' ? t.split(' ') : Array.isArray(t) ? t : !1
}
const k1 = 3,
  nt = {
    closest(t, e) {
      return t.closest(e)
    },
    matches(t, e) {
      return t.matches(e)
    },
    find(t, e = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(e, t))
    },
    findOne(t, e = document.documentElement) {
      return Element.prototype.querySelector.call(e, t)
    },
    children(t, e) {
      return [].concat(...t.children).filter((n) => n.matches(e))
    },
    parents(t, e) {
      const n = []
      let i = t.parentNode
      for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== k1; )
        this.matches(i, e) && n.push(i), (i = i.parentNode)
      return n
    },
    prev(t, e) {
      let n = t.previousElementSibling
      for (; n; ) {
        if (n.matches(e)) return [n]
        n = n.previousElementSibling
      }
      return []
    },
    next(t, e) {
      let n = t.nextElementSibling
      for (; n; ) {
        if (this.matches(n, e)) return [n]
        n = n.nextElementSibling
      }
      return []
    },
    focusableChildren(t) {
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
        .map((n) => `${n}:not([tabindex^="-"])`)
        .join(', ')
      return this.find(e, t).filter((n) => !kl(n) && Ml(n))
    }
  }
Rn()
Rn()
Rn()
Rn()
Rn()
Rn()
const bc = 'collapse',
  P_ = 'twe.collapse',
  Il = `.${P_}`,
  Ep = { toggle: !0, parent: null },
  R1 = { toggle: 'boolean', parent: '(null|element)' },
  L1 = `show${Il}`,
  D1 = `shown${Il}`,
  I1 = `hide${Il}`,
  z1 = `hidden${Il}`,
  yc = 'data-twe-collapse-show',
  Cp = 'data-twe-collapse-collapsed',
  wa = 'data-twe-collapse-collapsing',
  N1 = 'data-twe-collapse-horizontal',
  es = 'data-twe-collapse-item',
  Pp = `:scope [${es}] [${es}]`,
  B1 = 'width',
  $1 = 'height',
  F1 =
    '[data-twe-collapse-item][data-twe-collapse-show], [data-twe-collapse-item][data-twe-collapse-collapsing]',
  Op = '[data-twe-collapse-init]',
  j1 = {
    visible: '!visible',
    hidden: 'hidden',
    baseTransition:
      'overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
    collapsing:
      'h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
    collapsingHorizontal:
      'w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
  },
  V1 = {
    visible: 'string',
    hidden: 'string',
    baseTransition: 'string',
    collapsing: 'string',
    collapsingHorizontal: 'string'
  }
class hs extends Tf {
  constructor(e, n, i) {
    super(e),
      (this._isTransitioning = !1),
      (this._config = this._getConfig(n)),
      (this._classes = this._getClasses(i)),
      (this._triggerArray = [])
    const r = nt.find(Op)
    for (let s = 0, o = r.length; s < o; s++) {
      const a = r[s],
        l = Um(a),
        c = nt.find(l).filter((u) => u === this._element)
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
    return Ep
  }
  static get NAME() {
    return bc
  }
  toggle() {
    this._isShown() ? this.hide() : this.show()
  }
  show() {
    if (this._isTransitioning || this._isShown()) return
    let e = [],
      n
    if (this._config.parent) {
      const l = nt.find(Pp, this._config.parent)
      e = nt.find(F1, this._config.parent).filter((c) => !l.includes(c))
    }
    const i = nt.findOne(this._selector)
    if (e.length) {
      const l = e.find((c) => i !== c)
      if (((n = l ? hs.getInstance(l) : null), n && n._isTransitioning)) return
    }
    if (ae.trigger(this._element, L1).defaultPrevented) return
    e.forEach((l) => {
      i !== l && hs.getOrCreateInstance(l, { toggle: !1 }).hide(),
        n || Po.setData(l, P_, null)
    })
    const r = this._getDimension(),
      s =
        r === 'height'
          ? this._classes.collapsing
          : this._classes.collapsingHorizontal
    Ze.removeClass(this._element, this._classes.visible),
      Ze.removeClass(this._element, this._classes.hidden),
      Ze.addClass(this._element, s),
      this._element.removeAttribute(es),
      this._element.setAttribute(wa, ''),
      (this._element.style[r] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0)
    const o = () => {
        ;(this._isTransitioning = !1),
          Ze.removeClass(this._element, this._classes.hidden),
          Ze.removeClass(this._element, s),
          Ze.addClass(this._element, this._classes.visible),
          this._element.removeAttribute(wa),
          this._element.setAttribute(es, ''),
          this._element.setAttribute(yc, ''),
          (this._element.style[r] = ''),
          ae.trigger(this._element, D1)
      },
      a = `scroll${r[0].toUpperCase() + r.slice(1)}`
    this._queueCallback(o, this._element, !0),
      (this._element.style[r] = `${this._element[a]}px`)
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      ae.trigger(this._element, I1).defaultPrevented
    )
      return
    const e = this._getDimension(),
      n =
        e === 'height'
          ? this._classes.collapsing
          : this._classes.collapsingHorizontal
    ;(this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`),
      Sf(this._element),
      Ze.addClass(this._element, n),
      Ze.removeClass(this._element, this._classes.visible),
      Ze.removeClass(this._element, this._classes.hidden),
      this._element.setAttribute(wa, ''),
      this._element.removeAttribute(es),
      this._element.removeAttribute(yc)
    const i = this._triggerArray.length
    for (let s = 0; s < i; s++) {
      const o = this._triggerArray[s],
        a = qo(o)
      a && !this._isShown(a) && this._addAriaAndCollapsedClass([o], !1)
    }
    this._isTransitioning = !0
    const r = () => {
      ;(this._isTransitioning = !1),
        Ze.removeClass(this._element, n),
        Ze.addClass(this._element, this._classes.visible),
        Ze.addClass(this._element, this._classes.hidden),
        this._element.removeAttribute(wa),
        this._element.setAttribute(es, ''),
        ae.trigger(this._element, z1)
    }
    ;(this._element.style[e] = ''), this._queueCallback(r, this._element, !0)
  }
  _isShown(e = this._element) {
    return e.hasAttribute(yc)
  }
  _getConfig(e) {
    return (
      (e = { ...Ep, ...Ze.getDataAttributes(this._element), ...e }),
      (e.toggle = !!e.toggle),
      (e.parent = Cs(e.parent)),
      Ps(bc, e, R1),
      e
    )
  }
  _getClasses(e) {
    const n = Ze.getDataClassAttributes(this._element)
    return (e = { ...j1, ...n, ...e }), Ps(bc, e, V1), e
  }
  _getDimension() {
    return this._element.hasAttribute(N1) ? B1 : $1
  }
  _initializeChildren() {
    if (!this._config.parent) return
    const e = nt.find(Pp, this._config.parent)
    nt.find(Op, this._config.parent)
      .filter((n) => !e.includes(n))
      .forEach((n) => {
        const i = qo(n)
        i && this._addAriaAndCollapsedClass([n], this._isShown(i))
      })
  }
  _addAriaAndCollapsedClass(e, n) {
    e.length &&
      e.forEach((i) => {
        n ? i.removeAttribute(Cp) : i.setAttribute(`${Cp}`, ''),
          i.setAttribute('aria-expanded', n)
      })
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = {}
      typeof e == 'string' && /show|hide/.test(e) && (n.toggle = !1)
      const i = hs.getOrCreateInstance(this, n)
      if (typeof e == 'string') {
        if (typeof i[e] > 'u') throw new TypeError(`No method named "${e}"`)
        i[e]()
      }
    })
  }
}
const Ap = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  Mp = '.sticky-top'
class H1 {
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
      this._setElementAttributes(this._element, 'paddingRight', (n) => n + e),
      this._setElementAttributes(Ap, 'paddingRight', (n) => n + e),
      this._setElementAttributes(Mp, 'marginRight', (n) => n - e)
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow'),
      (this._element.style.overflow = 'hidden')
  }
  _setElementAttributes(e, n, i) {
    const r = this.getWidth(),
      s = (o) => {
        if (o !== this._element && window.innerWidth > o.clientWidth + r) return
        this._saveInitialAttribute(o, n)
        const a = window.getComputedStyle(o)[n]
        o.style[n] = `${i(Number.parseFloat(a))}px`
      }
    this._applyManipulationCallback(e, s)
  }
  reset() {
    this._resetElementAttributes(this._element, 'overflow'),
      this._resetElementAttributes(this._element, 'paddingRight'),
      this._resetElementAttributes(Ap, 'paddingRight'),
      this._resetElementAttributes(Mp, 'marginRight')
  }
  _saveInitialAttribute(e, n) {
    const i = e.style[n]
    i && Ze.setDataAttribute(e, n, i)
  }
  _resetElementAttributes(e, n) {
    const i = (r) => {
      const s = Ze.getDataAttribute(r, n)
      typeof s > 'u'
        ? r.style.removeProperty(n)
        : (Ze.removeDataAttribute(r, n), (r.style[n] = s))
    }
    this._applyManipulationCallback(e, i)
  }
  _applyManipulationCallback(e, n) {
    Al(e) ? n(e) : nt.find(e, this._element).forEach(n)
  }
  isOverflowing() {
    return this.getWidth() > 0
  }
}
const G1 = {
    isVisible: !0,
    isAnimated: !1,
    rootElement: 'body',
    clickCallback: null,
    backdropClasses: null
  },
  W1 = {
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)',
    backdropClasses: '(array|string|null)'
  },
  O_ = 'backdrop',
  kp = `mousedown.twe.${O_}`
class U1 {
  constructor(e) {
    ;(this._config = this._getConfig(e)),
      (this._isAppended = !1),
      (this._element = null)
  }
  show(e) {
    if (!this._config.isVisible) {
      gr(e)
      return
    }
    this._append(), this._config.isAnimated && Sf(this._getElement())
    const n = this._config.backdropClasses || [
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
    Ze.removeClass(this._getElement(), 'opacity-0'),
      Ze.addClass(this._getElement(), n),
      this._element.setAttribute('data-twe-backdrop-show', ''),
      this._emulateAnimation(() => {
        gr(e)
      })
  }
  hide(e) {
    if (!this._config.isVisible) {
      gr(e)
      return
    }
    this._element.removeAttribute('data-twe-backdrop-show'),
      this._getElement().classList.add('opacity-0'),
      this._getElement().classList.remove('opacity-50'),
      this._emulateAnimation(() => {
        this.dispose(), gr(e)
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
      (e = { ...G1, ...(typeof e == 'object' ? e : {}) }),
      (e.rootElement = Cs(e.rootElement)),
      Ps(O_, e, W1),
      e
    )
  }
  _append() {
    this._isAppended ||
      (this._config.rootElement.append(this._getElement()),
      ae.on(this._getElement(), kp, () => {
        gr(this._config.clickCallback)
      }),
      (this._isAppended = !0))
  }
  dispose() {
    this._isAppended &&
      (ae.off(this._element, kp),
      this._element.remove(),
      (this._isAppended = !1))
  }
  _emulateAnimation(e) {
    Xm(e, this._getElement(), this._config.isAnimated)
  }
}
class q1 {
  constructor(e, n = {}, i) {
    ;(this._element = e),
      (this._toggler = i),
      (this._event = n.event || 'blur'),
      (this._condition = n.condition || (() => !0)),
      (this._selector =
        n.selector ||
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'),
      (this._onlyVisible = n.onlyVisible || !1),
      (this._focusableElements = []),
      (this._firstElement = null),
      (this._lastElement = null),
      (this.handler = (r) => {
        this._condition(r) && !r.shiftKey && r.target === this._lastElement
          ? (r.preventDefault(), this._firstElement.focus())
          : this._condition(r) &&
            r.shiftKey &&
            r.target === this._firstElement &&
            (r.preventDefault(), this._lastElement.focus())
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
    const e = (n) => {
      !this._firstElement ||
        n.key !== 'Tab' ||
        this._focusableElements.includes(n.target) ||
        (n.preventDefault(),
        this._firstElement.focus(),
        window.removeEventListener('keydown', e))
    }
    window.addEventListener('keydown', e)
  }
  _filterVisible(e) {
    return e.filter((n) => {
      if (!Ml(n)) return !1
      const i = nt.parents(n, '*')
      for (let r = 0; r < i.length; r++) {
        const s = window.getComputedStyle(i[r])
        if (s && (s.display === 'none' || s.visibility === 'hidden')) return !1
      }
      return !0
    })
  }
  _setElements() {
    const e = nt.find(this._selector, this._element)
    ;(this._focusableElements = e.filter((n) => {
      const i =
        n.getAttribute('data-twe-disabled') === 'true' ||
        n.hasAttribute('disabled')
      return n.disabled || i ? null : n
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
    this._focusableElements.forEach((e, n) => {
      n === this._focusableElements.length - 1 || n === 0
        ? e.addEventListener(this._event, this.handler)
        : e.removeEventListener(this._event, this.handler)
    })
  }
}
let Rp = []
const Y1 = (t, e = 'hide') => {
    const n = `click.dismiss${t.EVENT_KEY}`,
      i = t.NAME
    Rp.includes(i) ||
      (Rp.push(i),
      ae.on(document, n, `[data-twe-${i}-dismiss]`, function (r) {
        if (
          (['A', 'AREA'].includes(this.tagName) && r.preventDefault(), kl(this))
        )
          return
        const s =
          qo(this) ||
          this.closest(`.${i}`) ||
          this.closest(`[data-twe-${i}-init]`)
        s && t.getOrCreateInstance(s)[e]()
      }))
  },
  X1 = new Set([
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
  ]),
  K1 = /^aria-[\w-]*$/i,
  Q1 = /^data-twe-[\w-]*$/i,
  Z1 = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
  J1 =
    /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
  eS = (t, e) => {
    const n = t.nodeName.toLowerCase()
    if (e.includes(n))
      return X1.has(n) ? !!(Z1.test(t.nodeValue) || J1.test(t.nodeValue)) : !0
    const i = e.filter((r) => r instanceof RegExp)
    for (let r = 0, s = i.length; r < s; r++) if (i[r].test(n)) return !0
    return !1
  },
  tS = {
    '*': ['class', 'dir', 'id', 'lang', 'role', K1, Q1],
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
function Lp(t, e, n) {
  if (!t.length) return t
  if (n && typeof n == 'function') return n(t)
  const i = new window.DOMParser().parseFromString(t, 'text/html'),
    r = [].concat(...i.body.querySelectorAll('*'))
  for (let s = 0, o = r.length; s < o; s++) {
    const a = r[s],
      l = a.nodeName.toLowerCase()
    if (!Object.keys(e).includes(l)) {
      a.remove()
      continue
    }
    const c = [].concat(...a.attributes),
      u = [].concat(e['*'] || [], e[l] || [])
    c.forEach((f) => {
      eS(f, u) || a.removeAttribute(f.nodeName)
    })
  }
  return i.body.innerHTML
}
const Dp = 'tooltip',
  nS = 'twe.tooltip',
  ei = `.${nS}`,
  iS = 'te-tooltip',
  rS = new Set(['sanitize', 'allowList', 'sanitizeFn']),
  sS = {
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
  oS = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: Rn() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: Rn() ? 'right' : 'left'
  },
  aS = {
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
    allowList: tS,
    popperConfig: { hide: !0 }
  },
  lS = {
    HIDE: `hide${ei}`,
    HIDDEN: `hidden${ei}`,
    SHOW: `show${ei}`,
    SHOWN: `shown${ei}`,
    INSERTED: `inserted${ei}`,
    CLICK: `click${ei}`,
    FOCUSIN: `focusin${ei}`,
    FOCUSOUT: `focusout${ei}`,
    MOUSEENTER: `mouseenter${ei}`,
    MOUSELEAVE: `mouseleave${ei}`
  },
  cS = 'fade',
  uS = 'modal',
  wc = 'show',
  Ys = 'show',
  xc = 'out',
  Ip = '[data-twe-tooltip-inner-ref]',
  zp = `.${uS}`,
  Np = 'hide.twe.modal',
  Xs = 'hover',
  Sc = 'focus',
  fS = 'click',
  dS = 'manual'
class Is extends Tf {
  constructor(e, n) {
    if (typeof M1 > 'u')
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      )
    super(e),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._hoverState = ''),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._config = this._getConfig(n)),
      (this.tip = null),
      this._setListeners()
  }
  static get Default() {
    return aS
  }
  static get NAME() {
    return Dp
  }
  static get Event() {
    return lS
  }
  static get DefaultType() {
    return sS
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
        const n = this._initializeOnDelegatedTarget(e)
        ;(n._activeTrigger.click = !n._activeTrigger.click),
          n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
      } else {
        if (this.getTipElement().classList.contains(wc)) {
          this._leave(null, this)
          return
        }
        this._enter(null, this)
      }
  }
  dispose() {
    clearTimeout(this._timeout),
      ae.off(this._element.closest(zp), Np, this._hideModalHandler),
      this.tip && this.tip.remove(),
      this._disposePopper(),
      super.dispose()
  }
  show() {
    if (this._element.style.display === 'none')
      throw new Error('Please use show on visible elements')
    if (!(this.isWithContent() && this._isEnabled)) return
    const e = ae.trigger(this._element, this.constructor.Event.SHOW),
      n = qm(this._element),
      i =
        n === null
          ? this._element.ownerDocument.documentElement.contains(this._element)
          : n.contains(this._element)
    if (e.defaultPrevented || !i) return
    this.constructor.NAME === 'tooltip' &&
      this.tip &&
      this.getTitle() !== this.tip.querySelector(Ip).innerHTML &&
      (this._disposePopper(), this.tip.remove(), (this.tip = null))
    const r = this.getTipElement(),
      s = Rx(this.constructor.NAME)
    r.setAttribute('id', s),
      this._element.setAttribute('aria-describedby', s),
      this._config.animation &&
        setTimeout(() => {
          this.tip.classList.add('opacity-100'),
            this.tip.classList.remove('opacity-0')
        }, 100)
    const o =
        typeof this._config.placement == 'function'
          ? this._config.placement.call(this, r, this._element)
          : this._config.placement,
      a = this._getAttachment(o)
    this._addAttachmentClass(a)
    const { container: l } = this._config
    if (
      (Po.setData(r, this.constructor.DATA_KEY, this),
      this._element.ownerDocument.documentElement.contains(this.tip) ||
        (l.append(r),
        ae.trigger(this._element, this.constructor.Event.INSERTED)),
      this._popper
        ? this._popper.update()
        : (this._popper = C_(this._element, r, this._getPopperConfig(a))),
      r.getAttribute('id').includes('tooltip'))
    )
      switch (o) {
        case 'bottom':
          r.classList.add('py-[0.4rem]')
          break
        case 'left':
          r.classList.add('px-[0.4rem]')
          break
        case 'right':
          r.classList.add('px-[0.4rem]')
          break
        default:
          r.classList.add('py-[0.4rem]')
          break
      }
    const c = this._resolvePossibleFunction(this._config.customClass)
    c && r.classList.add(...c.split(' ')),
      'ontouchstart' in document.documentElement &&
        [].concat(...document.body.children).forEach((p) => {
          ae.on(p, 'mouseover', hp)
        })
    const u = () => {
        const p = this._hoverState
        ;(this._hoverState = null),
          ae.trigger(this._element, this.constructor.Event.SHOWN),
          p === xc && this._leave(null, this)
      },
      f = this.tip.classList.contains('transition-opacity')
    this._queueCallback(u, this.tip, f)
  }
  hide() {
    if (!this._popper) return
    const e = this.getTipElement(),
      n = () => {
        this._isWithActiveTrigger() ||
          (this._hoverState !== Ys && e.remove(),
          this._cleanTipClass(),
          this._element.removeAttribute('aria-describedby'),
          ae.trigger(this._element, this.constructor.Event.HIDDEN),
          this._disposePopper())
      }
    if (ae.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
      return
    e.classList.add('opacity-0'),
      e.classList.remove('opacity-100'),
      'ontouchstart' in document.documentElement &&
        []
          .concat(...document.body.children)
          .forEach((r) => ae.off(r, 'mouseover', hp)),
      (this._activeTrigger[fS] = !1),
      (this._activeTrigger[Sc] = !1),
      (this._activeTrigger[Xs] = !1)
    const i = this.tip.classList.contains('opacity-0')
    this._queueCallback(n, this.tip, i), (this._hoverState = '')
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
    const n = e.children[0]
    return (
      this.setContent(n), n.classList.remove(cS, wc), (this.tip = n), this.tip
    )
  }
  setContent(e) {
    this._sanitizeAndSetContent(e, this.getTitle(), Ip)
  }
  _sanitizeAndSetContent(e, n, i) {
    const r = nt.findOne(i, e)
    if (!n && r) {
      r.remove()
      return
    }
    this.setElementContent(r, n)
  }
  setElementContent(e, n) {
    if (e !== null) {
      if (Al(n)) {
        ;(n = Cs(n)),
          this._config.html
            ? n.parentNode !== e && ((e.innerHTML = ''), e.append(n))
            : (e.textContent = n.textContent)
        return
      }
      this._config.html
        ? (this._config.sanitize &&
            (n = Lp(n, this._config.allowList, this._config.sanitizeFn)),
          (e.innerHTML = n))
        : (e.textContent = n)
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
  _initializeOnDelegatedTarget(e, n) {
    return (
      n ||
      this.constructor.getOrCreateInstance(
        e.delegateTarget,
        this._getDelegateConfig()
      )
    )
  }
  _getOffset() {
    const { offset: e } = this._config
    return typeof e == 'string'
      ? e.split(',').map((n) => Number.parseInt(n, 10))
      : typeof e == 'function'
        ? (n) => e(n, this._element)
        : e
  }
  _resolvePossibleFunction(e) {
    return typeof e == 'function' ? e.call(this._element) : e
  }
  _getPopperConfig(e) {
    const n = {
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
      ...n,
      ...(typeof this._config.popperConfig == 'function'
        ? this._config.popperConfig(n)
        : this._config.popperConfig)
    }
  }
  _addAttachmentClass(e) {
    this.getTipElement().classList.add(
      `${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`
    )
  }
  _getAttachment(e) {
    return oS[e.toUpperCase()]
  }
  _setListeners() {
    this._config.trigger.split(' ').forEach((e) => {
      if (e === 'click')
        ae.on(
          this._element,
          this.constructor.Event.CLICK,
          this._config.selector,
          (n) => this.toggle(n)
        )
      else if (e !== dS) {
        const n =
            e === Xs
              ? this.constructor.Event.MOUSEENTER
              : this.constructor.Event.FOCUSIN,
          i =
            e === Xs
              ? this.constructor.Event.MOUSELEAVE
              : this.constructor.Event.FOCUSOUT
        ae.on(this._element, n, this._config.selector, (r) => this._enter(r)),
          ae.on(this._element, i, this._config.selector, (r) => this._leave(r))
      }
    }),
      (this._hideModalHandler = () => {
        this._element && this.hide()
      }),
      ae.on(this._element.closest(zp), Np, this._hideModalHandler),
      this._config.selector
        ? (this._config = { ...this._config, trigger: 'manual', selector: '' })
        : this._fixTitle()
  }
  _fixTitle() {
    const e = this._element.getAttribute('title'),
      n = typeof this._element.getAttribute('data-twe-original-title')
    ;(e || n !== 'string') &&
      (this._element.setAttribute('data-twe-original-title', e || ''),
      e &&
        !this._element.getAttribute('aria-label') &&
        !this._element.textContent &&
        this._element.setAttribute('aria-label', e),
      this._element.setAttribute('title', ''))
  }
  _enter(e, n) {
    if (
      ((n = this._initializeOnDelegatedTarget(e, n)),
      e && (n._activeTrigger[e.type === 'focusin' ? Sc : Xs] = !0),
      n.getTipElement().classList.contains(wc) || n._hoverState === Ys)
    ) {
      n._hoverState = Ys
      return
    }
    if (
      (clearTimeout(n._timeout),
      (n._hoverState = Ys),
      !n._config.delay || !n._config.delay.show)
    ) {
      n.show()
      return
    }
    n._timeout = setTimeout(() => {
      n._hoverState === Ys && n.show()
    }, n._config.delay.show)
  }
  _leave(e, n) {
    if (
      ((n = this._initializeOnDelegatedTarget(e, n)),
      e &&
        (n._activeTrigger[e.type === 'focusout' ? Sc : Xs] =
          n._element.contains(e.relatedTarget)),
      !n._isWithActiveTrigger())
    ) {
      if (
        (clearTimeout(n._timeout),
        (n._hoverState = xc),
        !n._config.delay || !n._config.delay.hide)
      ) {
        n.hide()
        return
      }
      n._timeout = setTimeout(() => {
        n._hoverState === xc && n.hide()
      }, n._config.delay.hide)
    }
  }
  _isWithActiveTrigger() {
    for (const e in this._activeTrigger) if (this._activeTrigger[e]) return !0
    return !1
  }
  _getConfig(e) {
    const n = Ze.getDataAttributes(this._element)
    return (
      Object.keys(n).forEach((i) => {
        rS.has(i) && delete n[i]
      }),
      (e = {
        ...this.constructor.Default,
        ...n,
        ...(typeof e == 'object' && e ? e : {})
      }),
      (e.container = e.container === !1 ? document.body : Cs(e.container)),
      typeof e.delay == 'number' &&
        (e.delay = { show: e.delay, hide: e.delay }),
      typeof e.title == 'number' && (e.title = e.title.toString()),
      typeof e.content == 'number' && (e.content = e.content.toString()),
      Ps(Dp, e, this.constructor.DefaultType),
      e.sanitize && (e.template = Lp(e.template, e.allowList, e.sanitizeFn)),
      e
    )
  }
  _getDelegateConfig() {
    const e = {}
    for (const n in this._config)
      this.constructor.Default[n] !== this._config[n] &&
        (e[n] = this._config[n])
    return e
  }
  _cleanTipClass() {
    const e = this.getTipElement(),
      n = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g'),
      i = e.getAttribute('class').match(n)
    i !== null &&
      i.length > 0 &&
      i.map((r) => r.trim()).forEach((r) => e.classList.remove(r))
  }
  _getBasicClassPrefix() {
    return iS
  }
  _handlePopperPlacementChange(e) {
    const { state: n } = e
    n &&
      ((this.tip = n.elements.popper),
      this._cleanTipClass(),
      this._addAttachmentClass(this._getAttachment(n.placement)))
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null))
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const n = Is.getOrCreateInstance(this, e)
      if (typeof e == 'string') {
        if (typeof n[e] > 'u') throw new TypeError(`No method named "${e}"`)
        n[e]()
      }
    })
  }
}
;({ ...Is.Default })
;({ ...Is.DefaultType })
;(() => {
  var t = {
      454: (i, r, s) => {
        s.d(r, { Z: () => l })
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
        i.exports = function (r) {
          var s = []
          return (
            (s.toString = function () {
              return this.map(function (o) {
                var a = r(o)
                return o[2] ? '@media '.concat(o[2], ' {').concat(a, '}') : a
              }).join('')
            }),
            (s.i = function (o, a, l) {
              typeof o == 'string' && (o = [[null, o, '']])
              var c = {}
              if (l)
                for (var u = 0; u < this.length; u++) {
                  var f = this[u][0]
                  f != null && (c[f] = !0)
                }
              for (var p = 0; p < o.length; p++) {
                var d = [].concat(o[p])
                ;(l && c[d[0]]) ||
                  (a &&
                    (d[2]
                      ? (d[2] = ''.concat(a, ' and ').concat(d[2]))
                      : (d[2] = a)),
                  s.push(d))
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
              var r = function (s, o) {
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
              ;(r.prototype = window.Event.prototype), (window.CustomEvent = r)
            }
        })()
      },
      379: (i, r, s) => {
        var o,
          a = (function () {
            var m = {}
            return function (v) {
              if (m[v] === void 0) {
                var b = document.querySelector(v)
                if (
                  window.HTMLIFrameElement &&
                  b instanceof window.HTMLIFrameElement
                )
                  try {
                    b = b.contentDocument.head
                  } catch {
                    b = null
                  }
                m[v] = b
              }
              return m[v]
            }
          })(),
          l = []
        function c(m) {
          for (var v = -1, b = 0; b < l.length; b++)
            if (l[b].identifier === m) {
              v = b
              break
            }
          return v
        }
        function u(m, v) {
          for (var b = {}, C = [], P = 0; P < m.length; P++) {
            var M = m[P],
              E = v.base ? M[0] + v.base : M[0],
              O = b[E] || 0,
              I = ''.concat(E, ' ').concat(O)
            b[E] = O + 1
            var L = c(I),
              z = { css: M[1], media: M[2], sourceMap: M[3] }
            L !== -1
              ? (l[L].references++, l[L].updater(z))
              : l.push({ identifier: I, updater: _(z, v), references: 1 }),
              C.push(I)
          }
          return C
        }
        function f(m) {
          var v = document.createElement('style'),
            b = m.attributes || {}
          if (b.nonce === void 0) {
            var C = s.nc
            C && (b.nonce = C)
          }
          if (
            (Object.keys(b).forEach(function (M) {
              v.setAttribute(M, b[M])
            }),
            typeof m.insert == 'function')
          )
            m.insert(v)
          else {
            var P = a(m.insert || 'head')
            if (!P)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              )
            P.appendChild(v)
          }
          return v
        }
        var p,
          d =
            ((p = []),
            function (m, v) {
              return (
                (p[m] = v),
                p.filter(Boolean).join(`
`)
              )
            })
        function g(m, v, b, C) {
          var P = b
            ? ''
            : C.media
              ? '@media '.concat(C.media, ' {').concat(C.css, '}')
              : C.css
          if (m.styleSheet) m.styleSheet.cssText = d(v, P)
          else {
            var M = document.createTextNode(P),
              E = m.childNodes
            E[v] && m.removeChild(E[v]),
              E.length ? m.insertBefore(M, E[v]) : m.appendChild(M)
          }
        }
        function h(m, v, b) {
          var C = b.css,
            P = b.media,
            M = b.sourceMap
          if (
            (P ? m.setAttribute('media', P) : m.removeAttribute('media'),
            M &&
              typeof btoa < 'u' &&
              (C += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(M)))),
                ' */'
              )),
            m.styleSheet)
          )
            m.styleSheet.cssText = C
          else {
            for (; m.firstChild; ) m.removeChild(m.firstChild)
            m.appendChild(document.createTextNode(C))
          }
        }
        var y = null,
          w = 0
        function _(m, v) {
          var b, C, P
          if (v.singleton) {
            var M = w++
            ;(b = y || (y = f(v))),
              (C = g.bind(null, b, M, !1)),
              (P = g.bind(null, b, M, !0))
          } else
            (b = f(v)),
              (C = h.bind(null, b, v)),
              (P = function () {
                ;(function (E) {
                  if (E.parentNode === null) return !1
                  E.parentNode.removeChild(E)
                })(b)
              })
          return (
            C(m),
            function (E) {
              if (E) {
                if (
                  E.css === m.css &&
                  E.media === m.media &&
                  E.sourceMap === m.sourceMap
                )
                  return
                C((m = E))
              } else P()
            }
          )
        }
        i.exports = function (m, v) {
          ;(v = v || {}).singleton ||
            typeof v.singleton == 'boolean' ||
            (v.singleton =
              (o === void 0 &&
                (o = !!(window && document && document.all && !window.atob)),
              o))
          var b = u((m = m || []), v)
          return function (C) {
            if (
              ((C = C || []),
              Object.prototype.toString.call(C) === '[object Array]')
            ) {
              for (var P = 0; P < b.length; P++) {
                var M = c(b[P])
                l[M].references--
              }
              for (var E = u(C, v), O = 0; O < b.length; O++) {
                var I = c(b[O])
                l[I].references === 0 && (l[I].updater(), l.splice(I, 1))
              }
              b = E
            }
          }
        }
      }
    },
    e = {}
  function n(i) {
    var r = e[i]
    if (r !== void 0) return r.exports
    var s = (e[i] = { id: i, exports: {} })
    return t[i](s, s.exports, n), s.exports
  }
  ;(n.n = (i) => {
    var r = i && i.__esModule ? () => i.default : () => i
    return n.d(r, { a: r }), r
  }),
    (n.d = (i, r) => {
      for (var s in r)
        n.o(r, s) &&
          !n.o(i, s) &&
          Object.defineProperty(i, s, { enumerable: !0, get: r[s] })
    }),
    (n.o = (i, r) => Object.prototype.hasOwnProperty.call(i, r)),
    (() => {
      var i = n(379),
        r = n.n(i),
        s = n(454)
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
      r()(s.Z, { insert: 'head', singleton: !1 }),
        s.Z.locals,
        n(810),
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
const pS = { property: 'color', defaultValue: null, inherit: !0 },
  Gr = (t, e) => {
    const { property: n, defaultValue: i, inherit: r } = { ...pS, ...e },
      s = document.createElement('div')
    s.classList.add(t), document.body.appendChild(s)
    const o = window.getComputedStyle(s)[n] || i,
      a = window.getComputedStyle(s.parentElement)[n]
    return document.body.removeChild(s), !r && a && o === a ? i : o || i
  }
Gr('text-primary', { defaultValue: '#3B71CA', inherit: !1 }),
  Gr('text-primary-100', { defaultValue: '#9FA6B2', inherit: !1 }),
  Gr('text-success', { defaultValue: '#14A44D', inherit: !1 }),
  Gr('text-danger', { defaultValue: '#DC4C64', inherit: !1 }),
  Gr('text-warning', { defaultValue: '#E4A11B', inherit: !1 }),
  Gr('text-info', { defaultValue: '#54B4D3', inherit: !1 })
const Tc = 'modal',
  hS = 'twe.modal',
  Yn = `.${hS}`,
  Bp = 'Escape',
  $p = { backdrop: !0, keyboard: !0, focus: !0 },
  Fp = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean' },
  gS = {
    show: 'transform-none',
    static: 'scale-[1.02]',
    staticProperties: 'transition-scale duration-300 ease-in-out',
    backdrop:
      'opacity-50 transition-all duration-300 ease-in-out fixed top-0 left-0 z-[1040] bg-black w-screen h-screen'
  },
  mS = {
    show: 'string',
    static: 'string',
    staticProperties: 'string',
    backdrop: 'string'
  },
  _S = `hide${Yn}`,
  vS = `hidePrevented${Yn}`,
  bS = `hidden${Yn}`,
  yS = `show${Yn}`,
  wS = `shown${Yn}`,
  jp = `resize${Yn}`,
  Vp = `click.dismiss${Yn}`,
  Hp = `keydown.dismiss${Yn}`,
  xS = `mouseup.dismiss${Yn}`,
  Gp = `mousedown.dismiss${Yn}`,
  Wp = 'data-twe-modal-open',
  Up = 'data-twe-open',
  Ks = '[data-twe-modal-dialog-ref]',
  SS = '[data-twe-modal-body-ref]'
class Yo extends Tf {
  constructor(e, n, i) {
    super(e),
      (this._config = this._getConfig(n)),
      (this._classes = this._getClasses(i)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._scrollBar = new H1()),
      (this._dialog = nt.findOne(Ks, this._element)),
      (this._isShown = !1),
      (this._ignoreBackdropClick = !1),
      (this._isTransitioning = !1),
      (this._didInit = !1),
      this._init()
  }
  static get NAME() {
    return Tc
  }
  static get Default() {
    return $p
  }
  static get getDefaultType() {
    return Fp
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e)
  }
  show(e) {
    this._isShown ||
      this._isTransitioning ||
      ae.trigger(this._element, yS, { relatedTarget: e }).defaultPrevented ||
      ((this._isShown = !0),
      this._isAnimated() && (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.setAttribute(Wp, 'true'),
      this._adjustDialog(),
      this._setEscapeEvent(),
      this._setResizeEvent(),
      ae.on(this._dialog, Gp, () => {
        ae.one(this._element, xS, (n) => {
          n.target === this._element && (this._ignoreBackdropClick = !0)
        })
      }),
      this._showElement(e),
      this._showBackdrop())
  }
  hide() {
    if (
      !this._isShown ||
      this._isTransitioning ||
      ae.trigger(this._element, _S).defaultPrevented
    )
      return
    this._isShown = !1
    const e = this._isAnimated()
    e && (this._isTransitioning = !0),
      this._setEscapeEvent(),
      this._setResizeEvent(),
      this._focustrap.disable(),
      nt.findOne(Ks, this._element).classList.remove(this._classes.show),
      ae.off(this._element, Vp),
      ae.off(this._dialog, Gp),
      this._queueCallback(() => this._hideModal(), this._element, e),
      this._element.removeAttribute(Up)
  }
  dispose() {
    ;[window, document, this._dialog].forEach((e) => ae.off(e, Yn)),
      this._backdrop.dispose(),
      this._focustrap.disable(),
      super.dispose()
  }
  handleUpdate() {
    this._adjustDialog()
  }
  _init() {
    this._didInit || (Y1(Yo), (this._didInit = !0))
  }
  _initializeBackDrop() {
    return new U1({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
      backdropClasses: this._classes.backdrop
    })
  }
  _initializeFocusTrap() {
    return new q1(this._element, {
      event: 'keydown',
      condition: (e) => e.key === 'Tab'
    })
  }
  _showElement(e) {
    const n = this._isAnimated(),
      i = nt.findOne(SS, this._dialog)
    ;(!this._element.parentNode ||
      this._element.parentNode.nodeType !== Node.ELEMENT_NODE) &&
      document.body.append(this._element),
      (this._element.style.display = 'block'),
      this._element.classList.remove('hidden'),
      this._element.removeAttribute('aria-hidden'),
      this._element.setAttribute('aria-modal', !0),
      this._element.setAttribute('role', 'dialog'),
      this._element.setAttribute(`${Up}`, 'true'),
      (this._element.scrollTop = 0)
    const r = nt.findOne(Ks, this._element)
    r.classList.add(this._classes.show),
      r.classList.remove('opacity-0'),
      r.classList.add('opacity-100'),
      i && (i.scrollTop = 0),
      n && Sf(this._element)
    const s = () => {
      this._config.focus && this._focustrap.trap(),
        (this._isTransitioning = !1),
        ae.trigger(this._element, wS, { relatedTarget: e })
    }
    this._queueCallback(s, this._dialog, n)
  }
  _setEscapeEvent() {
    this._isShown
      ? ae.on(document, Hp, (e) => {
          this._config.keyboard && e.key === Bp
            ? (e.preventDefault(), this.hide())
            : !this._config.keyboard &&
              e.key === Bp &&
              this._triggerBackdropTransition()
        })
      : ae.off(this._element, Hp)
  }
  _setResizeEvent() {
    this._isShown
      ? ae.on(window, jp, () => this._adjustDialog())
      : ae.off(window, jp)
  }
  _hideModal() {
    const e = nt.findOne(Ks, this._element)
    e.classList.remove(this._classes.show),
      e.classList.remove('opacity-100'),
      e.classList.add('opacity-0')
    const n = wu(e)
    setTimeout(() => {
      this._element.style.display = 'none'
    }, n),
      this._element.setAttribute('aria-hidden', !0),
      this._element.removeAttribute('aria-modal'),
      this._element.removeAttribute('role'),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.removeAttribute(Wp),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          ae.trigger(this._element, bS)
      })
  }
  _showBackdrop(e) {
    ae.on(this._element, Vp, (n) => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = !1
        return
      }
      n.target === n.currentTarget &&
        (this._config.backdrop === !0
          ? this.hide()
          : this._config.backdrop === 'static' &&
            this._triggerBackdropTransition())
    }),
      this._backdrop.show(e)
  }
  _isAnimated() {
    return !!nt.findOne(Ks, this._element)
  }
  _triggerBackdropTransition() {
    if (ae.trigger(this._element, vS).defaultPrevented) return
    const { classList: e, scrollHeight: n, style: i } = this._element,
      r = n > document.documentElement.clientHeight
    if ((!r && i.overflowY === 'hidden') || e.contains(this._classes.static))
      return
    r || (i.overflowY = 'hidden'),
      e.add(...this._classes.static.split(' ')),
      e.add(...this._classes.staticProperties.split(' '))
    const s = wu(this._element)
    this._queueCallback(() => {
      e.remove(this._classes.static),
        setTimeout(() => {
          e.remove(...this._classes.staticProperties.split(' '))
        }, s),
        r ||
          this._queueCallback(() => {
            i.overflowY = ''
          }, this._dialog)
    }, this._dialog),
      this._element.focus()
  }
  _getConfig(e) {
    return (
      (e = {
        ...$p,
        ...Ze.getDataAttributes(this._element),
        ...(typeof e == 'object' ? e : {})
      }),
      Ps(Tc, e, Fp),
      e
    )
  }
  _getClasses(e) {
    const n = Ze.getDataClassAttributes(this._element)
    return (e = { ...gS, ...n, ...e }), Ps(Tc, e, mS), e
  }
  _adjustDialog() {
    const e =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      i = n > 0
    ;((!i && e && !Rn()) || (i && !e && Rn())) &&
      (this._element.style.paddingLeft = `${n}px`),
      ((i && !e && !Rn()) || (!i && e && Rn())) &&
        (this._element.style.paddingRight = `${n}px`)
  }
  _resetAdjustments() {
    ;(this._element.style.paddingLeft = ''),
      (this._element.style.paddingRight = '')
  }
  static jQueryInterface(e, n) {
    return this.each(function () {
      const i = Yo.getOrCreateInstance(this, e)
      if (typeof e == 'string') {
        if (typeof i[e] > 'u') throw new TypeError(`No method named "${e}"`)
        i[e](n)
      }
    })
  }
}
const TS = (t, e) => {
    ae.on(document, `click.twe.${t.NAME}`, e, function (n) {
      n.preventDefault(), t.getOrCreateInstance(this).toggle()
    })
  },
  ES = (t, e) => {
    ae.on(document, `click.twe.${t.NAME}.data-api`, e, function (n) {
      ;['A', 'AREA'].includes(this.tagName) && n.preventDefault(),
        !kl(this) && t.getOrCreateInstance(this).show()
    })
  },
  CS = (t, e) => {
    ae.on(document, `click.twe.${t.NAME}.data-api`, e, function (n) {
      const i = qo(this)
      if (
        (['A', 'AREA'].includes(this.tagName) && n.preventDefault(), kl(this))
      )
        return
      ae.one(i, t.EVENT_HIDDEN, () => {
        Ml(this) && this.focus()
      })
      const r = nt.findOne(t.OPEN_SELECTOR)
      r && r !== i && t.getInstance(r).hide(),
        t.getOrCreateInstance(i).toggle(this)
    })
  },
  PS = (t, e) => {
    ae.on(document, `click.twe.${t.NAME}`, e, (n) => {
      n.preventDefault()
      const i = n.target.closest(e)
      t.getOrCreateInstance(i).toggle()
    })
  },
  OS = (t, e) => {
    ae.one(document, 'mousedown', e, t.autoInitial(new t()))
  },
  AS = (t, e) => {
    ae.on(document, `click.twe.${t.NAME}.data-api`, e, function (n) {
      ;(n.target.tagName === 'A' ||
        (n.delegateTarget && n.delegateTarget.tagName === 'A')) &&
        n.preventDefault()
      const i = Um(this)
      nt.find(i).forEach((r) => {
        t.getOrCreateInstance(r, { toggle: !1 }).toggle()
      })
    })
  },
  MS = (t, e) => {
    ;[].slice.call(document.querySelectorAll(e)).map(function (n) {
      return new t(n)
    })
  },
  kS = (t, e) => {
    ;[].slice.call(document.querySelectorAll(e)).map(function (n) {
      return new t(n)
    })
  },
  RS = (t, e) => {
    ae.on(document, `click.twe.${t.NAME}`, e, function (n) {
      const i = qo(this)
      ;['A', 'AREA'].includes(this.tagName) && n.preventDefault(),
        ae.one(i, t.EVENT_SHOW, (s) => {
          s.defaultPrevented ||
            ae.one(i, t.EVENT_HIDDEN, () => {
              Ml(this) && this.focus()
            })
        })
      const r = nt.findOne(`[${t.OPEN_SELECTOR}="true"]`)
      r && t.getInstance(r).hide(), t.getOrCreateInstance(i).toggle(this)
    })
  },
  LS = {
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
      callback: PS
    },
    collapse: {
      name: 'Collapse',
      selector: '[data-twe-collapse-init]',
      isToggler: !0,
      callback: AS
    },
    dropdown: {
      name: 'Dropdown',
      selector: '[data-twe-dropdown-toggle-ref]',
      isToggler: !0,
      callback: TS
    },
    ripple: {
      name: 'Ripple',
      selector: '[data-twe-ripple-init]',
      isToggler: !0,
      callback: OS
    },
    offcanvas: {
      name: 'Offcanvas',
      selector: '[data-twe-offcanvas-toggle]',
      isToggler: !0,
      callback: CS
    },
    tab: {
      name: 'Tab',
      selector:
        "[data-twe-toggle='tab'], [data-twe-toggle='pill'], [data-twe-toggle='list']",
      isToggler: !0,
      callback: ES
    },
    tooltip: {
      name: 'Tooltip',
      selector: "[data-twe-toggle='tooltip']",
      isToggler: !1,
      callback: MS
    },
    popover: {
      name: 'Popover',
      selector: "[data-twe-toggle='popover']",
      isToggler: !0,
      callback: kS
    },
    modal: {
      name: 'Modal',
      selector: "[data-twe-toggle='modal']",
      isToggler: !0,
      callback: RS
    }
  },
  DS = (t) => {
    Dx(() => {
      const e = Ym()
      if (e) {
        const n = t.NAME,
          i = e.fn[n]
        ;(e.fn[n] = t.jQueryInterface),
          (e.fn[n].Constructor = t),
          (e.fn[n].noConflict = () => ((e.fn[n] = i), t.jQueryInterface))
      }
    })
  }
class IS {
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
const Cu = new IS()
let Kr
const zS = (t) => Kr[t.NAME] || null,
  NS = (t, e) => {
    if (!t || (!e.allowReinits && Cu.isInited(t.NAME))) return
    Cu.add(t.NAME)
    const n = zS(t),
      i = (n == null ? void 0 : n.isToggler) || !1
    if ((DS(t), n != null && n.advanced)) {
      n == null || n.advanced(t, n == null ? void 0 : n.selector)
      return
    }
    if (i) {
      n == null || n.callback(t, n == null ? void 0 : n.selector)
      return
    }
    nt.find(n == null ? void 0 : n.selector).forEach((r) => {
      let s = t.getInstance(r)
      s || ((s = new t(r)), n != null && n.onInit && s[n.onInit]())
    })
  },
  BS = { allowReinits: !1, checkOtherImports: !1 }
class $S {
  constructor(e) {
    pp(this, 'init', (n, i) => {
      n.forEach((r) => NS(r, i))
    }),
      pp(this, 'initTWE', (n, i) => {
        const r = { ...BS, ...i },
          s = Object.keys(Kr).map((o) => {
            if (document.querySelector(Kr[o].selector)) {
              const a = n[Kr[o].name]
              return (
                !a &&
                  !Cu.isInited(o) &&
                  r.checkOtherImports &&
                  console.warn(
                    `Please import ${Kr[o].name} from "tw-elements" package and add it to a object parameter inside "initTWE" function`
                  ),
                a
              )
            }
          })
        this.init(s, r)
      }),
      (Kr = e)
  }
}
const FS = new $S(LS),
  A_ = FS.initTWE
function qp(t) {
  return (
    t !== null &&
    typeof t == 'object' &&
    'constructor' in t &&
    t.constructor === Object
  )
}
function Nf(t, e) {
  t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((n) => {
      typeof t[n] > 'u'
        ? (t[n] = e[n])
        : qp(e[n]) && qp(t[n]) && Object.keys(e[n]).length > 0 && Nf(t[n], e[n])
    })
}
const M_ = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return { initEvent() {} }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      }
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
}
function zs() {
  const t = typeof document < 'u' ? document : {}
  return Nf(t, M_), t
}
const jS = {
  document: M_,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ''
      }
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > 'u' ? (t(), null) : setTimeout(t, 0)
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > 'u' || clearTimeout(t)
  }
}
function En() {
  const t = typeof window < 'u' ? window : {}
  return Nf(t, jS), t
}
function VS(t) {
  return (
    t === void 0 && (t = ''),
    t
      .trim()
      .split(' ')
      .filter((e) => !!e.trim())
  )
}
function HS(t) {
  const e = t
  Object.keys(e).forEach((n) => {
    try {
      e[n] = null
    } catch {}
    try {
      delete e[n]
    } catch {}
  })
}
function Pu(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e)
}
function sl() {
  return Date.now()
}
function GS(t) {
  const e = En()
  let n
  return (
    e.getComputedStyle && (n = e.getComputedStyle(t, null)),
    !n && t.currentStyle && (n = t.currentStyle),
    n || (n = t.style),
    n
  )
}
function WS(t, e) {
  e === void 0 && (e = 'x')
  const n = En()
  let i, r, s
  const o = GS(t)
  return (
    n.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(',').length > 6 &&
          (r = r
            .split(', ')
            .map((a) => a.replace(',', '.'))
            .join(', ')),
        (s = new n.WebKitCSSMatrix(r === 'none' ? '' : r)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (i = s.toString().split(','))),
    e === 'x' &&
      (n.WebKitCSSMatrix
        ? (r = s.m41)
        : i.length === 16
          ? (r = parseFloat(i[12]))
          : (r = parseFloat(i[4]))),
    e === 'y' &&
      (n.WebKitCSSMatrix
        ? (r = s.m42)
        : i.length === 16
          ? (r = parseFloat(i[13]))
          : (r = parseFloat(i[5]))),
    r || 0
  )
}
function xa(t) {
  return (
    typeof t == 'object' &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === 'Object'
  )
}
function US(t) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11)
}
function gn() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ['__proto__', 'constructor', 'prototype']
  for (let n = 1; n < arguments.length; n += 1) {
    const i = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (i != null && !US(i)) {
      const r = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0)
      for (let s = 0, o = r.length; s < o; s += 1) {
        const a = r[s],
          l = Object.getOwnPropertyDescriptor(i, a)
        l !== void 0 &&
          l.enumerable &&
          (xa(t[a]) && xa(i[a])
            ? i[a].__swiper__
              ? (t[a] = i[a])
              : gn(t[a], i[a])
            : !xa(t[a]) && xa(i[a])
              ? ((t[a] = {}), i[a].__swiper__ ? (t[a] = i[a]) : gn(t[a], i[a]))
              : (t[a] = i[a]))
      }
    }
  }
  return t
}
function Sa(t, e, n) {
  t.style.setProperty(e, n)
}
function k_(t) {
  let { swiper: e, targetPosition: n, side: i } = t
  const r = En(),
    s = -e.translate
  let o = null,
    a
  const l = e.params.speed
  ;(e.wrapperEl.style.scrollSnapType = 'none'),
    r.cancelAnimationFrame(e.cssModeFrameID)
  const c = n > s ? 'next' : 'prev',
    u = (p, d) => (c === 'next' && p >= d) || (c === 'prev' && p <= d),
    f = () => {
      ;(a = new Date().getTime()), o === null && (o = a)
      const p = Math.max(Math.min((a - o) / l, 1), 0),
        d = 0.5 - Math.cos(p * Math.PI) / 2
      let g = s + d * (n - s)
      if ((u(g, n) && (g = n), e.wrapperEl.scrollTo({ [i]: g }), u(g, n))) {
        ;(e.wrapperEl.style.overflow = 'hidden'),
          (e.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [i]: g })
          }),
          r.cancelAnimationFrame(e.cssModeFrameID)
        return
      }
      e.cssModeFrameID = r.requestAnimationFrame(f)
    }
  f()
}
function li(t, e) {
  e === void 0 && (e = '')
  const n = [...t.children]
  return (
    t instanceof HTMLSlotElement && n.push(...t.assignedElements()),
    e ? n.filter((i) => i.matches(e)) : n
  )
}
function qS(t, e) {
  const n = e.contains(t)
  return !n && e instanceof HTMLSlotElement
    ? [...e.assignedElements()].includes(t)
    : n
}
function ol(t) {
  try {
    console.warn(t)
    return
  } catch {}
}
function al(t, e) {
  e === void 0 && (e = [])
  const n = document.createElement(t)
  return n.classList.add(...(Array.isArray(e) ? e : VS(e))), n
}
function YS(t, e) {
  const n = []
  for (; t.previousElementSibling; ) {
    const i = t.previousElementSibling
    e ? i.matches(e) && n.push(i) : n.push(i), (t = i)
  }
  return n
}
function XS(t, e) {
  const n = []
  for (; t.nextElementSibling; ) {
    const i = t.nextElementSibling
    e ? i.matches(e) && n.push(i) : n.push(i), (t = i)
  }
  return n
}
function Wi(t, e) {
  return En().getComputedStyle(t, null).getPropertyValue(e)
}
function ll(t) {
  let e = t,
    n
  if (e) {
    for (n = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (n += 1)
    return n
  }
}
function R_(t, e) {
  const n = []
  let i = t.parentElement
  for (; i; ) e ? i.matches(e) && n.push(i) : n.push(i), (i = i.parentElement)
  return n
}
function Ou(t, e, n) {
  const i = En()
  return (
    t[e === 'width' ? 'offsetWidth' : 'offsetHeight'] +
    parseFloat(
      i
        .getComputedStyle(t, null)
        .getPropertyValue(e === 'width' ? 'margin-right' : 'margin-top')
    ) +
    parseFloat(
      i
        .getComputedStyle(t, null)
        .getPropertyValue(e === 'width' ? 'margin-left' : 'margin-bottom')
    )
  )
}
function mt(t) {
  return (Array.isArray(t) ? t : [t]).filter((e) => !!e)
}
let Ec
function KS() {
  const t = En(),
    e = zs()
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      'scrollBehavior' in e.documentElement.style,
    touch: !!(
      'ontouchstart' in t ||
      (t.DocumentTouch && e instanceof t.DocumentTouch)
    )
  }
}
function L_() {
  return Ec || (Ec = KS()), Ec
}
let Cc
function QS(t) {
  let { userAgent: e } = t === void 0 ? {} : t
  const n = L_(),
    i = En(),
    r = i.navigator.platform,
    s = e || i.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = i.screen.width,
    l = i.screen.height,
    c = s.match(/(Android);?[\s\/]+([\d.]+)?/)
  let u = s.match(/(iPad).*OS\s([\d_]+)/)
  const f = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    d = r === 'Win32'
  let g = r === 'MacIntel'
  const h = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810'
  ]
  return (
    !u &&
      g &&
      n.touch &&
      h.indexOf(`${a}x${l}`) >= 0 &&
      ((u = s.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, '13_0_0']),
      (g = !1)),
    c && !d && ((o.os = 'android'), (o.android = !0)),
    (u || p || f) && ((o.os = 'ios'), (o.ios = !0)),
    o
  )
}
function D_(t) {
  return t === void 0 && (t = {}), Cc || (Cc = QS(t)), Cc
}
let Pc
function ZS() {
  const t = En(),
    e = D_()
  let n = !1
  function i() {
    const a = t.navigator.userAgent.toLowerCase()
    return (
      a.indexOf('safari') >= 0 &&
      a.indexOf('chrome') < 0 &&
      a.indexOf('android') < 0
    )
  }
  if (i()) {
    const a = String(t.navigator.userAgent)
    if (a.includes('Version/')) {
      const [l, c] = a
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((u) => Number(u))
      n = l < 16 || (l === 16 && c < 2)
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      t.navigator.userAgent
    ),
    s = i(),
    o = s || (r && e.ios)
  return { isSafari: n || s, needPerspectiveFix: n, need3dFix: o, isWebView: r }
}
function JS() {
  return Pc || (Pc = ZS()), Pc
}
function eT(t) {
  let { swiper: e, on: n, emit: i } = t
  const r = En()
  let s = null,
    o = null
  const a = () => {
      !e || e.destroyed || !e.initialized || (i('beforeResize'), i('resize'))
    },
    l = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((s = new ResizeObserver((f) => {
          o = r.requestAnimationFrame(() => {
            const { width: p, height: d } = e
            let g = p,
              h = d
            f.forEach((y) => {
              let { contentBoxSize: w, contentRect: _, target: m } = y
              ;(m && m !== e.el) ||
                ((g = _ ? _.width : (w[0] || w).inlineSize),
                (h = _ ? _.height : (w[0] || w).blockSize))
            }),
              (g !== p || h !== d) && a()
          })
        })),
        s.observe(e.el))
    },
    c = () => {
      o && r.cancelAnimationFrame(o),
        s && s.unobserve && e.el && (s.unobserve(e.el), (s = null))
    },
    u = () => {
      !e || e.destroyed || !e.initialized || i('orientationchange')
    }
  n('init', () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < 'u') {
      l()
      return
    }
    r.addEventListener('resize', a), r.addEventListener('orientationchange', u)
  }),
    n('destroy', () => {
      c(),
        r.removeEventListener('resize', a),
        r.removeEventListener('orientationchange', u)
    })
}
function tT(t) {
  let { swiper: e, extendParams: n, on: i, emit: r } = t
  const s = [],
    o = En(),
    a = function (u, f) {
      f === void 0 && (f = {})
      const p = o.MutationObserver || o.WebkitMutationObserver,
        d = new p((g) => {
          if (e.__preventObserver__) return
          if (g.length === 1) {
            r('observerUpdate', g[0])
            return
          }
          const h = function () {
            r('observerUpdate', g[0])
          }
          o.requestAnimationFrame
            ? o.requestAnimationFrame(h)
            : o.setTimeout(h, 0)
        })
      d.observe(u, {
        attributes: typeof f.attributes > 'u' ? !0 : f.attributes,
        childList: e.isElement || (typeof f.childList > 'u' ? !0 : f).childList,
        characterData: typeof f.characterData > 'u' ? !0 : f.characterData
      }),
        s.push(d)
    },
    l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const u = R_(e.hostEl)
          for (let f = 0; f < u.length; f += 1) a(u[f])
        }
        a(e.hostEl, { childList: e.params.observeSlideChildren }),
          a(e.wrapperEl, { attributes: !1 })
      }
    },
    c = () => {
      s.forEach((u) => {
        u.disconnect()
      }),
        s.splice(0, s.length)
    }
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i('init', l),
    i('destroy', c)
}
var nT = {
  on(t, e, n) {
    const i = this
    if (!i.eventsListeners || i.destroyed || typeof e != 'function') return i
    const r = n ? 'unshift' : 'push'
    return (
      t.split(' ').forEach((s) => {
        i.eventsListeners[s] || (i.eventsListeners[s] = []),
          i.eventsListeners[s][r](e)
      }),
      i
    )
  },
  once(t, e, n) {
    const i = this
    if (!i.eventsListeners || i.destroyed || typeof e != 'function') return i
    function r() {
      i.off(t, r), r.__emitterProxy && delete r.__emitterProxy
      for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
        o[a] = arguments[a]
      e.apply(i, o)
    }
    return (r.__emitterProxy = e), i.on(t, r, n)
  },
  onAny(t, e) {
    const n = this
    if (!n.eventsListeners || n.destroyed || typeof t != 'function') return n
    const i = e ? 'unshift' : 'push'
    return n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[i](t), n
  },
  offAny(t) {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e
    const n = e.eventsAnyListeners.indexOf(t)
    return n >= 0 && e.eventsAnyListeners.splice(n, 1), e
  },
  off(t, e) {
    const n = this
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        t.split(' ').forEach((i) => {
          typeof e > 'u'
            ? (n.eventsListeners[i] = [])
            : n.eventsListeners[i] &&
              n.eventsListeners[i].forEach((r, s) => {
                ;(r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                  n.eventsListeners[i].splice(s, 1)
              })
        }),
      n
    )
  },
  emit() {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t
    let e, n, i
    for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
      s[o] = arguments[o]
    return (
      typeof s[0] == 'string' || Array.isArray(s[0])
        ? ((e = s[0]), (n = s.slice(1, s.length)), (i = t))
        : ((e = s[0].events), (n = s[0].data), (i = s[0].context || t)),
      n.unshift(i),
      (Array.isArray(e) ? e : e.split(' ')).forEach((l) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((c) => {
            c.apply(i, [l, ...n])
          }),
          t.eventsListeners &&
            t.eventsListeners[l] &&
            t.eventsListeners[l].forEach((c) => {
              c.apply(i, n)
            })
      }),
      t
    )
  }
}
function iT() {
  const t = this
  let e, n
  const i = t.el
  typeof t.params.width < 'u' && t.params.width !== null
    ? (e = t.params.width)
    : (e = i.clientWidth),
    typeof t.params.height < 'u' && t.params.height !== null
      ? (n = t.params.height)
      : (n = i.clientHeight),
    !((e === 0 && t.isHorizontal()) || (n === 0 && t.isVertical())) &&
      ((e =
        e -
        parseInt(Wi(i, 'padding-left') || 0, 10) -
        parseInt(Wi(i, 'padding-right') || 0, 10)),
      (n =
        n -
        parseInt(Wi(i, 'padding-top') || 0, 10) -
        parseInt(Wi(i, 'padding-bottom') || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(t, { width: e, height: n, size: t.isHorizontal() ? e : n }))
}
function rT() {
  const t = this
  function e(O, I) {
    return parseFloat(O.getPropertyValue(t.getDirectionLabel(I)) || 0)
  }
  const n = t.params,
    { wrapperEl: i, slidesEl: r, size: s, rtlTranslate: o, wrongRTL: a } = t,
    l = t.virtual && n.virtual.enabled,
    c = l ? t.virtual.slides.length : t.slides.length,
    u = li(r, `.${t.params.slideClass}, swiper-slide`),
    f = l ? t.virtual.slides.length : u.length
  let p = []
  const d = [],
    g = []
  let h = n.slidesOffsetBefore
  typeof h == 'function' && (h = n.slidesOffsetBefore.call(t))
  let y = n.slidesOffsetAfter
  typeof y == 'function' && (y = n.slidesOffsetAfter.call(t))
  const w = t.snapGrid.length,
    _ = t.slidesGrid.length
  let m = n.spaceBetween,
    v = -h,
    b = 0,
    C = 0
  if (typeof s > 'u') return
  typeof m == 'string' && m.indexOf('%') >= 0
    ? (m = (parseFloat(m.replace('%', '')) / 100) * s)
    : typeof m == 'string' && (m = parseFloat(m)),
    (t.virtualSize = -m),
    u.forEach((O) => {
      o ? (O.style.marginLeft = '') : (O.style.marginRight = ''),
        (O.style.marginBottom = ''),
        (O.style.marginTop = '')
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Sa(i, '--swiper-centered-offset-before', ''),
      Sa(i, '--swiper-centered-offset-after', ''))
  const P = n.grid && n.grid.rows > 1 && t.grid
  P ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides()
  let M
  const E =
    n.slidesPerView === 'auto' &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (O) => typeof n.breakpoints[O].slidesPerView < 'u'
    ).length > 0
  for (let O = 0; O < f; O += 1) {
    M = 0
    let I
    if (
      (u[O] && (I = u[O]),
      P && t.grid.updateSlide(O, I, u),
      !(u[O] && Wi(I, 'display') === 'none'))
    ) {
      if (n.slidesPerView === 'auto') {
        E && (u[O].style[t.getDirectionLabel('width')] = '')
        const L = getComputedStyle(I),
          z = I.style.transform,
          j = I.style.webkitTransform
        if (
          (z && (I.style.transform = 'none'),
          j && (I.style.webkitTransform = 'none'),
          n.roundLengths)
        )
          M = t.isHorizontal() ? Ou(I, 'width') : Ou(I, 'height')
        else {
          const Y = e(L, 'width'),
            q = e(L, 'padding-left'),
            G = e(L, 'padding-right'),
            Q = e(L, 'margin-left'),
            le = e(L, 'margin-right'),
            k = L.getPropertyValue('box-sizing')
          if (k && k === 'border-box') M = Y + Q + le
          else {
            const { clientWidth: he, offsetWidth: _e } = I
            M = Y + q + G + Q + le + (_e - he)
          }
        }
        z && (I.style.transform = z),
          j && (I.style.webkitTransform = j),
          n.roundLengths && (M = Math.floor(M))
      } else
        (M = (s - (n.slidesPerView - 1) * m) / n.slidesPerView),
          n.roundLengths && (M = Math.floor(M)),
          u[O] && (u[O].style[t.getDirectionLabel('width')] = `${M}px`)
      u[O] && (u[O].swiperSlideSize = M),
        g.push(M),
        n.centeredSlides
          ? ((v = v + M / 2 + b / 2 + m),
            b === 0 && O !== 0 && (v = v - s / 2 - m),
            O === 0 && (v = v - s / 2 - m),
            Math.abs(v) < 1 / 1e3 && (v = 0),
            n.roundLengths && (v = Math.floor(v)),
            C % n.slidesPerGroup === 0 && p.push(v),
            d.push(v))
          : (n.roundLengths && (v = Math.floor(v)),
            (C - Math.min(t.params.slidesPerGroupSkip, C)) %
              t.params.slidesPerGroup ===
              0 && p.push(v),
            d.push(v),
            (v = v + M + m)),
        (t.virtualSize += M + m),
        (b = M),
        (C += 1)
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, s) + y),
    o &&
      a &&
      (n.effect === 'slide' || n.effect === 'coverflow') &&
      (i.style.width = `${t.virtualSize + m}px`),
    n.setWrapperSize &&
      (i.style[t.getDirectionLabel('width')] = `${t.virtualSize + m}px`),
    P && t.grid.updateWrapperSize(M, p),
    !n.centeredSlides)
  ) {
    const O = []
    for (let I = 0; I < p.length; I += 1) {
      let L = p[I]
      n.roundLengths && (L = Math.floor(L)),
        p[I] <= t.virtualSize - s && O.push(L)
    }
    ;(p = O),
      Math.floor(t.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(t.virtualSize - s)
  }
  if (l && n.loop) {
    const O = g[0] + m
    if (n.slidesPerGroup > 1) {
      const I = Math.ceil(
          (t.virtual.slidesBefore + t.virtual.slidesAfter) / n.slidesPerGroup
        ),
        L = O * n.slidesPerGroup
      for (let z = 0; z < I; z += 1) p.push(p[p.length - 1] + L)
    }
    for (let I = 0; I < t.virtual.slidesBefore + t.virtual.slidesAfter; I += 1)
      n.slidesPerGroup === 1 && p.push(p[p.length - 1] + O),
        d.push(d[d.length - 1] + O),
        (t.virtualSize += O)
  }
  if ((p.length === 0 && (p = [0]), m !== 0)) {
    const O =
      t.isHorizontal() && o ? 'marginLeft' : t.getDirectionLabel('marginRight')
    u.filter((I, L) =>
      !n.cssMode || n.loop ? !0 : L !== u.length - 1
    ).forEach((I) => {
      I.style[O] = `${m}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let O = 0
    g.forEach((L) => {
      O += L + (m || 0)
    }),
      (O -= m)
    const I = O > s ? O - s : 0
    p = p.map((L) => (L <= 0 ? -h : L > I ? I + y : L))
  }
  if (n.centerInsufficientSlides) {
    let O = 0
    g.forEach((L) => {
      O += L + (m || 0)
    }),
      (O -= m)
    const I = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if (O + I < s) {
      const L = (s - O - I) / 2
      p.forEach((z, j) => {
        p[j] = z - L
      }),
        d.forEach((z, j) => {
          d[j] = z + L
        })
    }
  }
  if (
    (Object.assign(t, {
      slides: u,
      snapGrid: p,
      slidesGrid: d,
      slidesSizesGrid: g
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Sa(i, '--swiper-centered-offset-before', `${-p[0]}px`),
      Sa(
        i,
        '--swiper-centered-offset-after',
        `${t.size / 2 - g[g.length - 1] / 2}px`
      )
    const O = -t.snapGrid[0],
      I = -t.slidesGrid[0]
    ;(t.snapGrid = t.snapGrid.map((L) => L + O)),
      (t.slidesGrid = t.slidesGrid.map((L) => L + I))
  }
  if (
    (f !== c && t.emit('slidesLengthChange'),
    p.length !== w &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit('snapGridLengthChange')),
    d.length !== _ && t.emit('slidesGridLengthChange'),
    n.watchSlidesProgress && t.updateSlidesOffset(),
    t.emit('slidesUpdated'),
    !l && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
  ) {
    const O = `${n.containerModifierClass}backface-hidden`,
      I = t.el.classList.contains(O)
    f <= n.maxBackfaceHiddenSlides
      ? I || t.el.classList.add(O)
      : I && t.el.classList.remove(O)
  }
}
function sT(t) {
  const e = this,
    n = [],
    i = e.virtual && e.params.virtual.enabled
  let r = 0,
    s
  typeof t == 'number'
    ? e.setTransition(t)
    : t === !0 && e.setTransition(e.params.speed)
  const o = (a) => (i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a])
  if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((a) => {
        n.push(a)
      })
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const a = e.activeIndex + s
        if (a > e.slides.length && !i) break
        n.push(o(a))
      }
  else n.push(o(e.activeIndex))
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < 'u') {
      const a = n[s].offsetHeight
      r = a > r ? a : r
    }
  ;(r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}
function oT() {
  const t = this,
    e = t.slides,
    n = t.isElement
      ? t.isHorizontal()
        ? t.wrapperEl.offsetLeft
        : t.wrapperEl.offsetTop
      : 0
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset =
      (t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
      n -
      t.cssOverflowAdjustment()
}
const Yp = (t, e, n) => {
  e && !t.classList.contains(n)
    ? t.classList.add(n)
    : !e && t.classList.contains(n) && t.classList.remove(n)
}
function aT(t) {
  t === void 0 && (t = (this && this.translate) || 0)
  const e = this,
    n = e.params,
    { slides: i, rtlTranslate: r, snapGrid: s } = e
  if (i.length === 0) return
  typeof i[0].swiperSlideOffset > 'u' && e.updateSlidesOffset()
  let o = -t
  r && (o = t), (e.visibleSlidesIndexes = []), (e.visibleSlides = [])
  let a = n.spaceBetween
  typeof a == 'string' && a.indexOf('%') >= 0
    ? (a = (parseFloat(a.replace('%', '')) / 100) * e.size)
    : typeof a == 'string' && (a = parseFloat(a))
  for (let l = 0; l < i.length; l += 1) {
    const c = i[l]
    let u = c.swiperSlideOffset
    n.cssMode && n.centeredSlides && (u -= i[0].swiperSlideOffset)
    const f =
        (o + (n.centeredSlides ? e.minTranslate() : 0) - u) /
        (c.swiperSlideSize + a),
      p =
        (o - s[0] + (n.centeredSlides ? e.minTranslate() : 0) - u) /
        (c.swiperSlideSize + a),
      d = -(o - u),
      g = d + e.slidesSizesGrid[l],
      h = d >= 0 && d <= e.size - e.slidesSizesGrid[l],
      y =
        (d >= 0 && d < e.size - 1) ||
        (g > 1 && g <= e.size) ||
        (d <= 0 && g >= e.size)
    y && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(l)),
      Yp(c, y, n.slideVisibleClass),
      Yp(c, h, n.slideFullyVisibleClass),
      (c.progress = r ? -f : f),
      (c.originalProgress = r ? -p : p)
  }
}
function lT(t) {
  const e = this
  if (typeof t > 'u') {
    const u = e.rtlTranslate ? -1 : 1
    t = (e && e.translate && e.translate * u) || 0
  }
  const n = e.params,
    i = e.maxTranslate() - e.minTranslate()
  let { progress: r, isBeginning: s, isEnd: o, progressLoop: a } = e
  const l = s,
    c = o
  if (i === 0) (r = 0), (s = !0), (o = !0)
  else {
    r = (t - e.minTranslate()) / i
    const u = Math.abs(t - e.minTranslate()) < 1,
      f = Math.abs(t - e.maxTranslate()) < 1
    ;(s = u || r <= 0), (o = f || r >= 1), u && (r = 0), f && (r = 1)
  }
  if (n.loop) {
    const u = e.getSlideIndexByData(0),
      f = e.getSlideIndexByData(e.slides.length - 1),
      p = e.slidesGrid[u],
      d = e.slidesGrid[f],
      g = e.slidesGrid[e.slidesGrid.length - 1],
      h = Math.abs(t)
    h >= p ? (a = (h - p) / g) : (a = (h + g - d) / g), a > 1 && (a -= 1)
  }
  Object.assign(e, { progress: r, progressLoop: a, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      e.updateSlidesProgress(t),
    s && !l && e.emit('reachBeginning toEdge'),
    o && !c && e.emit('reachEnd toEdge'),
    ((l && !s) || (c && !o)) && e.emit('fromEdge'),
    e.emit('progress', r)
}
const Oc = (t, e, n) => {
  e && !t.classList.contains(n)
    ? t.classList.add(n)
    : !e && t.classList.contains(n) && t.classList.remove(n)
}
function cT() {
  const t = this,
    { slides: e, params: n, slidesEl: i, activeIndex: r } = t,
    s = t.virtual && n.virtual.enabled,
    o = t.grid && n.grid && n.grid.rows > 1,
    a = (f) => li(i, `.${n.slideClass}${f}, swiper-slide${f}`)[0]
  let l, c, u
  if (s)
    if (n.loop) {
      let f = r - t.virtual.slidesBefore
      f < 0 && (f = t.virtual.slides.length + f),
        f >= t.virtual.slides.length && (f -= t.virtual.slides.length),
        (l = a(`[data-swiper-slide-index="${f}"]`))
    } else l = a(`[data-swiper-slide-index="${r}"]`)
  else
    o
      ? ((l = e.filter((f) => f.column === r)[0]),
        (u = e.filter((f) => f.column === r + 1)[0]),
        (c = e.filter((f) => f.column === r - 1)[0]))
      : (l = e[r])
  l &&
    (o ||
      ((u = XS(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u && (u = e[0]),
      (c = YS(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c === 0 && (c = e[e.length - 1]))),
    e.forEach((f) => {
      Oc(f, f === l, n.slideActiveClass),
        Oc(f, f === u, n.slideNextClass),
        Oc(f, f === c, n.slidePrevClass)
    }),
    t.emitSlidesClasses()
}
const Na = (t, e) => {
    if (!t || t.destroyed || !t.params) return
    const n = () => (t.isElement ? 'swiper-slide' : `.${t.params.slideClass}`),
      i = e.closest(n())
    if (i) {
      let r = i.querySelector(`.${t.params.lazyPreloaderClass}`)
      !r &&
        t.isElement &&
        (i.shadowRoot
          ? (r = i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              i.shadowRoot &&
                ((r = i.shadowRoot.querySelector(
                  `.${t.params.lazyPreloaderClass}`
                )),
                r && r.remove())
            })),
        r && r.remove()
    }
  },
  Ac = (t, e) => {
    if (!t.slides[e]) return
    const n = t.slides[e].querySelector('[loading="lazy"]')
    n && n.removeAttribute('loading')
  },
  Au = (t) => {
    if (!t || t.destroyed || !t.params) return
    let e = t.params.lazyPreloadPrevNext
    const n = t.slides.length
    if (!n || !e || e < 0) return
    e = Math.min(e, n)
    const i =
        t.params.slidesPerView === 'auto'
          ? t.slidesPerViewDynamic()
          : Math.ceil(t.params.slidesPerView),
      r = t.activeIndex
    if (t.params.grid && t.params.grid.rows > 1) {
      const o = r,
        a = [o - e]
      a.push(...Array.from({ length: e }).map((l, c) => o + i + c)),
        t.slides.forEach((l, c) => {
          a.includes(l.column) && Ac(t, c)
        })
      return
    }
    const s = r + i - 1
    if (t.params.rewind || t.params.loop)
      for (let o = r - e; o <= s + e; o += 1) {
        const a = ((o % n) + n) % n
        ;(a < r || a > s) && Ac(t, a)
      }
    else
      for (let o = Math.max(r - e, 0); o <= Math.min(s + e, n - 1); o += 1)
        o !== r && (o > s || o < r) && Ac(t, o)
  }
function uT(t) {
  const { slidesGrid: e, params: n } = t,
    i = t.rtlTranslate ? t.translate : -t.translate
  let r
  for (let s = 0; s < e.length; s += 1)
    typeof e[s + 1] < 'u'
      ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2
        ? (r = s)
        : i >= e[s] && i < e[s + 1] && (r = s + 1)
      : i >= e[s] && (r = s)
  return n.normalizeSlideIndex && (r < 0 || typeof r > 'u') && (r = 0), r
}
function fT(t) {
  const e = this,
    n = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: i, params: r, activeIndex: s, realIndex: o, snapIndex: a } = e
  let l = t,
    c
  const u = (d) => {
    let g = d - e.virtual.slidesBefore
    return (
      g < 0 && (g = e.virtual.slides.length + g),
      g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
      g
    )
  }
  if ((typeof l > 'u' && (l = uT(e)), i.indexOf(n) >= 0)) c = i.indexOf(n)
  else {
    const d = Math.min(r.slidesPerGroupSkip, l)
    c = d + Math.floor((l - d) / r.slidesPerGroup)
  }
  if ((c >= i.length && (c = i.length - 1), l === s && !e.params.loop)) {
    c !== a && ((e.snapIndex = c), e.emit('snapIndexChange'))
    return
  }
  if (l === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = u(l)
    return
  }
  const f = e.grid && r.grid && r.grid.rows > 1
  let p
  if (e.virtual && r.virtual.enabled && r.loop) p = u(l)
  else if (f) {
    const d = e.slides.filter((h) => h.column === l)[0]
    let g = parseInt(d.getAttribute('data-swiper-slide-index'), 10)
    Number.isNaN(g) && (g = Math.max(e.slides.indexOf(d), 0)),
      (p = Math.floor(g / r.grid.rows))
  } else if (e.slides[l]) {
    const d = e.slides[l].getAttribute('data-swiper-slide-index')
    d ? (p = parseInt(d, 10)) : (p = l)
  } else p = l
  Object.assign(e, {
    previousSnapIndex: a,
    snapIndex: c,
    previousRealIndex: o,
    realIndex: p,
    previousIndex: s,
    activeIndex: l
  }),
    e.initialized && Au(e),
    e.emit('activeIndexChange'),
    e.emit('snapIndexChange'),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (o !== p && e.emit('realIndexChange'), e.emit('slideChange'))
}
function dT(t, e) {
  const n = this,
    i = n.params
  let r = t.closest(`.${i.slideClass}, swiper-slide`)
  !r &&
    n.isElement &&
    e &&
    e.length > 1 &&
    e.includes(t) &&
    [...e.slice(e.indexOf(t) + 1, e.length)].forEach((a) => {
      !r && a.matches && a.matches(`.${i.slideClass}, swiper-slide`) && (r = a)
    })
  let s = !1,
    o
  if (r) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === r) {
        ;(s = !0), (o = a)
        break
      }
  }
  if (r && s)
    (n.clickedSlide = r),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            r.getAttribute('data-swiper-slide-index'),
            10
          ))
        : (n.clickedIndex = o)
  else {
    ;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
    return
  }
  i.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide()
}
var pT = {
  updateSize: iT,
  updateSlides: rT,
  updateAutoHeight: sT,
  updateSlidesOffset: oT,
  updateSlidesProgress: aT,
  updateProgress: lT,
  updateSlidesClasses: cT,
  updateActiveIndex: fT,
  updateClickedSlide: dT
}
function hT(t) {
  t === void 0 && (t = this.isHorizontal() ? 'x' : 'y')
  const e = this,
    { params: n, rtlTranslate: i, translate: r, wrapperEl: s } = e
  if (n.virtualTranslate) return i ? -r : r
  if (n.cssMode) return r
  let o = WS(s, t)
  return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0
}
function gT(t, e) {
  const n = this,
    { rtlTranslate: i, params: r, wrapperEl: s, progress: o } = n
  let a = 0,
    l = 0
  const c = 0
  n.isHorizontal() ? (a = i ? -t : t) : (l = t),
    r.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : l),
    r.cssMode
      ? (s[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal()
          ? -a
          : -l)
      : r.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (l -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${a}px, ${l}px, ${c}px)`))
  let u
  const f = n.maxTranslate() - n.minTranslate()
  f === 0 ? (u = 0) : (u = (t - n.minTranslate()) / f),
    u !== o && n.updateProgress(t),
    n.emit('setTranslate', n.translate, e)
}
function mT() {
  return -this.snapGrid[0]
}
function _T() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function vT(t, e, n, i, r) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    n === void 0 && (n = !0),
    i === void 0 && (i = !0)
  const s = this,
    { params: o, wrapperEl: a } = s
  if (s.animating && o.preventInteractionOnTransition) return !1
  const l = s.minTranslate(),
    c = s.maxTranslate()
  let u
  if (
    (i && t > l ? (u = l) : i && t < c ? (u = c) : (u = t),
    s.updateProgress(u),
    o.cssMode)
  ) {
    const f = s.isHorizontal()
    if (e === 0) a[f ? 'scrollLeft' : 'scrollTop'] = -u
    else {
      if (!s.support.smoothScroll)
        return (
          k_({ swiper: s, targetPosition: -u, side: f ? 'left' : 'top' }), !0
        )
      a.scrollTo({ [f ? 'left' : 'top']: -u, behavior: 'smooth' })
    }
    return !0
  }
  return (
    e === 0
      ? (s.setTransition(0),
        s.setTranslate(u),
        n && (s.emit('beforeTransitionStart', e, r), s.emit('transitionEnd')))
      : (s.setTransition(e),
        s.setTranslate(u),
        n && (s.emit('beforeTransitionStart', e, r), s.emit('transitionStart')),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (p) {
              !s ||
                s.destroyed ||
                (p.target === this &&
                  (s.wrapperEl.removeEventListener(
                    'transitionend',
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit('transitionEnd')))
            }),
          s.wrapperEl.addEventListener(
            'transitionend',
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  )
}
var bT = {
  getTranslate: hT,
  setTranslate: gT,
  minTranslate: mT,
  maxTranslate: _T,
  translateTo: vT
}
function yT(t, e) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${t}ms`),
    (n.wrapperEl.style.transitionDelay = t === 0 ? '0ms' : '')),
    n.emit('setTransition', t, e)
}
function I_(t) {
  let { swiper: e, runCallbacks: n, direction: i, step: r } = t
  const { activeIndex: s, previousIndex: o } = e
  let a = i
  if (
    (a || (s > o ? (a = 'next') : s < o ? (a = 'prev') : (a = 'reset')),
    e.emit(`transition${r}`),
    n && s !== o)
  ) {
    if (a === 'reset') {
      e.emit(`slideResetTransition${r}`)
      return
    }
    e.emit(`slideChangeTransition${r}`),
      a === 'next'
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`)
  }
}
function wT(t, e) {
  t === void 0 && (t = !0)
  const n = this,
    { params: i } = n
  i.cssMode ||
    (i.autoHeight && n.updateAutoHeight(),
    I_({ swiper: n, runCallbacks: t, direction: e, step: 'Start' }))
}
function xT(t, e) {
  t === void 0 && (t = !0)
  const n = this,
    { params: i } = n
  ;(n.animating = !1),
    !i.cssMode &&
      (n.setTransition(0),
      I_({ swiper: n, runCallbacks: t, direction: e, step: 'End' }))
}
var ST = { setTransition: yT, transitionStart: wT, transitionEnd: xT }
function TT(t, e, n, i, r) {
  t === void 0 && (t = 0),
    n === void 0 && (n = !0),
    typeof t == 'string' && (t = parseInt(t, 10))
  const s = this
  let o = t
  o < 0 && (o = 0)
  const {
    params: a,
    snapGrid: l,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: f,
    rtlTranslate: p,
    wrapperEl: d,
    enabled: g
  } = s
  if (
    (!g && !i && !r) ||
    s.destroyed ||
    (s.animating && a.preventInteractionOnTransition)
  )
    return !1
  typeof e > 'u' && (e = s.params.speed)
  const h = Math.min(s.params.slidesPerGroupSkip, o)
  let y = h + Math.floor((o - h) / s.params.slidesPerGroup)
  y >= l.length && (y = l.length - 1)
  const w = -l[y]
  if (a.normalizeSlideIndex)
    for (let b = 0; b < c.length; b += 1) {
      const C = -Math.floor(w * 100),
        P = Math.floor(c[b] * 100),
        M = Math.floor(c[b + 1] * 100)
      typeof c[b + 1] < 'u'
        ? C >= P && C < M - (M - P) / 2
          ? (o = b)
          : C >= P && C < M && (o = b + 1)
        : C >= P && (o = b)
    }
  if (
    s.initialized &&
    o !== f &&
    ((!s.allowSlideNext &&
      (p
        ? w > s.translate && w > s.minTranslate()
        : w < s.translate && w < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        w > s.translate &&
        w > s.maxTranslate() &&
        (f || 0) !== o))
  )
    return !1
  o !== (u || 0) && n && s.emit('beforeSlideChangeStart'), s.updateProgress(w)
  let _
  o > f ? (_ = 'next') : o < f ? (_ = 'prev') : (_ = 'reset')
  const m = s.virtual && s.params.virtual.enabled
  if (!(m && r) && ((p && -w === s.translate) || (!p && w === s.translate)))
    return (
      s.updateActiveIndex(o),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== 'slide' && s.setTranslate(w),
      _ !== 'reset' && (s.transitionStart(n, _), s.transitionEnd(n, _)),
      !1
    )
  if (a.cssMode) {
    const b = s.isHorizontal(),
      C = p ? w : -w
    if (e === 0)
      m &&
        ((s.wrapperEl.style.scrollSnapType = 'none'),
        (s._immediateVirtual = !0)),
        m && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              d[b ? 'scrollLeft' : 'scrollTop'] = C
            }))
          : (d[b ? 'scrollLeft' : 'scrollTop'] = C),
        m &&
          requestAnimationFrame(() => {
            ;(s.wrapperEl.style.scrollSnapType = ''), (s._immediateVirtual = !1)
          })
    else {
      if (!s.support.smoothScroll)
        return (
          k_({ swiper: s, targetPosition: C, side: b ? 'left' : 'top' }), !0
        )
      d.scrollTo({ [b ? 'left' : 'top']: C, behavior: 'smooth' })
    }
    return !0
  }
  return (
    s.setTransition(e),
    s.setTranslate(w),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit('beforeTransitionStart', e, i),
    s.transitionStart(n, _),
    e === 0
      ? s.transitionEnd(n, _)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (C) {
            !s ||
              s.destroyed ||
              (C.target === this &&
                (s.wrapperEl.removeEventListener(
                  'transitionend',
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, _)))
          }),
        s.wrapperEl.addEventListener(
          'transitionend',
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  )
}
function ET(t, e, n, i) {
  t === void 0 && (t = 0),
    n === void 0 && (n = !0),
    typeof t == 'string' && (t = parseInt(t, 10))
  const r = this
  if (r.destroyed) return
  typeof e > 'u' && (e = r.params.speed)
  const s = r.grid && r.params.grid && r.params.grid.rows > 1
  let o = t
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore
    else {
      let a
      if (s) {
        const p = o * r.params.grid.rows
        a = r.slides.filter(
          (d) => d.getAttribute('data-swiper-slide-index') * 1 === p
        )[0].column
      } else a = r.getSlideIndexByData(o)
      const l = s
          ? Math.ceil(r.slides.length / r.params.grid.rows)
          : r.slides.length,
        { centeredSlides: c } = r.params
      let u = r.params.slidesPerView
      u === 'auto'
        ? (u = r.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
          c && u % 2 === 0 && (u = u + 1))
      let f = l - a < u
      if (
        (c && (f = f || a < Math.ceil(u / 2)),
        i && c && r.params.slidesPerView !== 'auto' && !s && (f = !1),
        f)
      ) {
        const p = c
          ? a < r.activeIndex
            ? 'prev'
            : 'next'
          : a - r.activeIndex - 1 < r.params.slidesPerView
            ? 'next'
            : 'prev'
        r.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === 'next' ? a + 1 : a - l + 1,
          slideRealIndex: p === 'next' ? r.realIndex : void 0
        })
      }
      if (s) {
        const p = o * r.params.grid.rows
        o = r.slides.filter(
          (d) => d.getAttribute('data-swiper-slide-index') * 1 === p
        )[0].column
      } else o = r.getSlideIndexByData(o)
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(o, e, n, i)
    }),
    r
  )
}
function CT(t, e, n) {
  e === void 0 && (e = !0)
  const i = this,
    { enabled: r, params: s, animating: o } = i
  if (!r || i.destroyed) return i
  typeof t > 'u' && (t = i.params.speed)
  let a = s.slidesPerGroup
  s.slidesPerView === 'auto' &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (a = Math.max(i.slidesPerViewDynamic('current', !0), 1))
  const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a,
    c = i.virtual && s.virtual.enabled
  if (s.loop) {
    if (o && !c && s.loopPreventsSliding) return !1
    if (
      (i.loopFix({ direction: 'next' }),
      (i._clientLeft = i.wrapperEl.clientLeft),
      i.activeIndex === i.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + l, t, e, n)
        }),
        !0
      )
  }
  return s.rewind && i.isEnd
    ? i.slideTo(0, t, e, n)
    : i.slideTo(i.activeIndex + l, t, e, n)
}
function PT(t, e, n) {
  e === void 0 && (e = !0)
  const i = this,
    {
      params: r,
      snapGrid: s,
      slidesGrid: o,
      rtlTranslate: a,
      enabled: l,
      animating: c
    } = i
  if (!l || i.destroyed) return i
  typeof t > 'u' && (t = i.params.speed)
  const u = i.virtual && r.virtual.enabled
  if (r.loop) {
    if (c && !u && r.loopPreventsSliding) return !1
    i.loopFix({ direction: 'prev' }), (i._clientLeft = i.wrapperEl.clientLeft)
  }
  const f = a ? i.translate : -i.translate
  function p(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w)
  }
  const d = p(f),
    g = s.map((w) => p(w))
  let h = s[g.indexOf(d) - 1]
  if (typeof h > 'u' && r.cssMode) {
    let w
    s.forEach((_, m) => {
      d >= _ && (w = m)
    }),
      typeof w < 'u' && (h = s[w > 0 ? w - 1 : w])
  }
  let y = 0
  if (
    (typeof h < 'u' &&
      ((y = o.indexOf(h)),
      y < 0 && (y = i.activeIndex - 1),
      r.slidesPerView === 'auto' &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((y = y - i.slidesPerViewDynamic('previous', !0) + 1),
        (y = Math.max(y, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const w =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1
    return i.slideTo(w, t, e, n)
  } else if (r.loop && i.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(y, t, e, n)
      }),
      !0
    )
  return i.slideTo(y, t, e, n)
}
function OT(t, e, n) {
  e === void 0 && (e = !0)
  const i = this
  if (!i.destroyed)
    return (
      typeof t > 'u' && (t = i.params.speed), i.slideTo(i.activeIndex, t, e, n)
    )
}
function AT(t, e, n, i) {
  e === void 0 && (e = !0), i === void 0 && (i = 0.5)
  const r = this
  if (r.destroyed) return
  typeof t > 'u' && (t = r.params.speed)
  let s = r.activeIndex
  const o = Math.min(r.params.slidesPerGroupSkip, s),
    a = o + Math.floor((s - o) / r.params.slidesPerGroup),
    l = r.rtlTranslate ? r.translate : -r.translate
  if (l >= r.snapGrid[a]) {
    const c = r.snapGrid[a],
      u = r.snapGrid[a + 1]
    l - c > (u - c) * i && (s += r.params.slidesPerGroup)
  } else {
    const c = r.snapGrid[a - 1],
      u = r.snapGrid[a]
    l - c <= (u - c) * i && (s -= r.params.slidesPerGroup)
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, r.slidesGrid.length - 1)),
    r.slideTo(s, t, e, n)
  )
}
function MT() {
  const t = this
  if (t.destroyed) return
  const { params: e, slidesEl: n } = t,
    i = e.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : e.slidesPerView
  let r = t.clickedIndex,
    s
  const o = t.isElement ? 'swiper-slide' : `.${e.slideClass}`
  if (e.loop) {
    if (t.animating) return
    ;(s = parseInt(t.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      e.centeredSlides
        ? r < t.loopedSlides - i / 2 ||
          r > t.slides.length - t.loopedSlides + i / 2
          ? (t.loopFix(),
            (r = t.getSlideIndex(
              li(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Pu(() => {
              t.slideTo(r)
            }))
          : t.slideTo(r)
        : r > t.slides.length - i
          ? (t.loopFix(),
            (r = t.getSlideIndex(
              li(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Pu(() => {
              t.slideTo(r)
            }))
          : t.slideTo(r)
  } else t.slideTo(r)
}
var kT = {
  slideTo: TT,
  slideToLoop: ET,
  slideNext: CT,
  slidePrev: PT,
  slideReset: OT,
  slideToClosest: AT,
  slideToClickedSlide: MT
}
function RT(t) {
  const e = this,
    { params: n, slidesEl: i } = e
  if (!n.loop || (e.virtual && e.params.virtual.enabled)) return
  const r = () => {
      li(i, `.${n.slideClass}, swiper-slide`).forEach((f, p) => {
        f.setAttribute('data-swiper-slide-index', p)
      })
    },
    s = e.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (s ? n.grid.rows : 1),
    a = e.slides.length % o !== 0,
    l = s && e.slides.length % n.grid.rows !== 0,
    c = (u) => {
      for (let f = 0; f < u; f += 1) {
        const p = e.isElement
          ? al('swiper-slide', [n.slideBlankClass])
          : al('div', [n.slideClass, n.slideBlankClass])
        e.slidesEl.append(p)
      }
    }
  if (a) {
    if (n.loopAddBlankSlides) {
      const u = o - (e.slides.length % o)
      c(u), e.recalcSlides(), e.updateSlides()
    } else
      ol(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    r()
  } else if (l) {
    if (n.loopAddBlankSlides) {
      const u = n.grid.rows - (e.slides.length % n.grid.rows)
      c(u), e.recalcSlides(), e.updateSlides()
    } else
      ol(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    r()
  } else r()
  e.loopFix({
    slideRealIndex: t,
    direction: n.centeredSlides ? void 0 : 'next'
  })
}
function LT(t) {
  let {
    slideRealIndex: e,
    slideTo: n = !0,
    direction: i,
    setTranslate: r,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: a
  } = t === void 0 ? {} : t
  const l = this
  if (!l.params.loop) return
  l.emit('beforeLoopFix')
  const {
      slides: c,
      allowSlidePrev: u,
      allowSlideNext: f,
      slidesEl: p,
      params: d
    } = l,
    { centeredSlides: g } = d
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && d.virtual.enabled)
  ) {
    n &&
      (!d.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : d.centeredSlides && l.snapIndex < d.slidesPerView
          ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
          : l.snapIndex === l.snapGrid.length - 1 &&
            l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = u),
      (l.allowSlideNext = f),
      l.emit('loopFix')
    return
  }
  let h = d.slidesPerView
  h === 'auto'
    ? (h = l.slidesPerViewDynamic())
    : ((h = Math.ceil(parseFloat(d.slidesPerView, 10))),
      g && h % 2 === 0 && (h = h + 1))
  const y = d.slidesPerGroupAuto ? h : d.slidesPerGroup
  let w = y
  w % y !== 0 && (w += y - (w % y)),
    (w += d.loopAdditionalSlides),
    (l.loopedSlides = w)
  const _ = l.grid && d.grid && d.grid.rows > 1
  c.length < h + w
    ? ol(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : _ &&
      d.grid.fill === 'row' &&
      ol(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      )
  const m = [],
    v = []
  let b = l.activeIndex
  typeof s > 'u'
    ? (s = l.getSlideIndex(
        c.filter((z) => z.classList.contains(d.slideActiveClass))[0]
      ))
    : (b = s)
  const C = i === 'next' || !i,
    P = i === 'prev' || !i
  let M = 0,
    E = 0
  const O = _ ? Math.ceil(c.length / d.grid.rows) : c.length,
    L = (_ ? c[s].column : s) + (g && typeof r > 'u' ? -h / 2 + 0.5 : 0)
  if (L < w) {
    M = Math.max(w - L, y)
    for (let z = 0; z < w - L; z += 1) {
      const j = z - Math.floor(z / O) * O
      if (_) {
        const Y = O - j - 1
        for (let q = c.length - 1; q >= 0; q -= 1)
          c[q].column === Y && m.push(q)
      } else m.push(O - j - 1)
    }
  } else if (L + h > O - w) {
    E = Math.max(L - (O - w * 2), y)
    for (let z = 0; z < E; z += 1) {
      const j = z - Math.floor(z / O) * O
      _
        ? c.forEach((Y, q) => {
            Y.column === j && v.push(q)
          })
        : v.push(j)
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1
    }),
    P &&
      m.forEach((z) => {
        ;(c[z].swiperLoopMoveDOM = !0),
          p.prepend(c[z]),
          (c[z].swiperLoopMoveDOM = !1)
      }),
    C &&
      v.forEach((z) => {
        ;(c[z].swiperLoopMoveDOM = !0),
          p.append(c[z]),
          (c[z].swiperLoopMoveDOM = !1)
      }),
    l.recalcSlides(),
    d.slidesPerView === 'auto'
      ? l.updateSlides()
      : _ &&
        ((m.length > 0 && P) || (v.length > 0 && C)) &&
        l.slides.forEach((z, j) => {
          l.grid.updateSlide(j, z, l.slides)
        }),
    d.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (m.length > 0 && P) {
      if (typeof e > 'u') {
        const z = l.slidesGrid[b],
          Y = l.slidesGrid[b + M] - z
        a
          ? l.setTranslate(l.translate - Y)
          : (l.slideTo(b + Math.ceil(M), 0, !1, !0),
            r &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - Y),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - Y)))
      } else if (r) {
        const z = _ ? m.length / d.grid.rows : m.length
        l.slideTo(l.activeIndex + z, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate)
      }
    } else if (v.length > 0 && C)
      if (typeof e > 'u') {
        const z = l.slidesGrid[b],
          Y = l.slidesGrid[b - E] - z
        a
          ? l.setTranslate(l.translate - Y)
          : (l.slideTo(b - E, 0, !1, !0),
            r &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - Y),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - Y)))
      } else {
        const z = _ ? v.length / d.grid.rows : v.length
        l.slideTo(l.activeIndex - z, 0, !1, !0)
      }
  }
  if (
    ((l.allowSlidePrev = u),
    (l.allowSlideNext = f),
    l.controller && l.controller.control && !o)
  ) {
    const z = {
      slideRealIndex: e,
      direction: i,
      setTranslate: r,
      activeSlideIndex: s,
      byController: !0
    }
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((j) => {
          !j.destroyed &&
            j.params.loop &&
            j.loopFix({
              ...z,
              slideTo: j.params.slidesPerView === d.slidesPerView ? n : !1
            })
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...z,
          slideTo:
            l.controller.control.params.slidesPerView === d.slidesPerView
              ? n
              : !1
        })
  }
  l.emit('loopFix')
}
function DT() {
  const t = this,
    { params: e, slidesEl: n } = t
  if (!e.loop || (t.virtual && t.params.virtual.enabled)) return
  t.recalcSlides()
  const i = []
  t.slides.forEach((r) => {
    const s =
      typeof r.swiperSlideIndex > 'u'
        ? r.getAttribute('data-swiper-slide-index') * 1
        : r.swiperSlideIndex
    i[s] = r
  }),
    t.slides.forEach((r) => {
      r.removeAttribute('data-swiper-slide-index')
    }),
    i.forEach((r) => {
      n.append(r)
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0)
}
var IT = { loopCreate: RT, loopFix: LT, loopDestroy: DT }
function zT(t) {
  const e = this
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return
  const n = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl
  e.isElement && (e.__preventObserver__ = !0),
    (n.style.cursor = 'move'),
    (n.style.cursor = t ? 'grabbing' : 'grab'),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1
      })
}
function NT() {
  const t = this
  ;(t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t.isElement && (t.__preventObserver__ = !0),
    (t[
      t.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = ''),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1
      }))
}
var BT = { setGrabCursor: zT, unsetGrabCursor: NT }
function $T(t, e) {
  e === void 0 && (e = this)
  function n(i) {
    if (!i || i === zs() || i === En()) return null
    i.assignedSlot && (i = i.assignedSlot)
    const r = i.closest(t)
    return !r && !i.getRootNode ? null : r || n(i.getRootNode().host)
  }
  return n(e)
}
function Xp(t, e, n) {
  const i = En(),
    { params: r } = t,
    s = r.edgeSwipeDetection,
    o = r.edgeSwipeThreshold
  return s && (n <= o || n >= i.innerWidth - o)
    ? s === 'prevent'
      ? (e.preventDefault(), !0)
      : !1
    : !0
}
function FT(t) {
  const e = this,
    n = zs()
  let i = t
  i.originalEvent && (i = i.originalEvent)
  const r = e.touchEventsData
  if (i.type === 'pointerdown') {
    if (r.pointerId !== null && r.pointerId !== i.pointerId) return
    r.pointerId = i.pointerId
  } else
    i.type === 'touchstart' &&
      i.targetTouches.length === 1 &&
      (r.touchId = i.targetTouches[0].identifier)
  if (i.type === 'touchstart') {
    Xp(e, i, i.targetTouches[0].pageX)
    return
  }
  const { params: s, touches: o, enabled: a } = e
  if (
    !a ||
    (!s.simulateTouch && i.pointerType === 'mouse') ||
    (e.animating && s.preventInteractionOnTransition)
  )
    return
  !e.animating && s.cssMode && s.loop && e.loopFix()
  let l = i.target
  if (
    (s.touchEventsTarget === 'wrapper' && !qS(l, e.wrapperEl)) ||
    ('which' in i && i.which === 3) ||
    ('button' in i && i.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return
  const c = !!s.noSwipingClass && s.noSwipingClass !== '',
    u = i.composedPath ? i.composedPath() : i.path
  c && i.target && i.target.shadowRoot && u && (l = u[0])
  const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    p = !!(i.target && i.target.shadowRoot)
  if (s.noSwiping && (p ? $T(f, l) : l.closest(f))) {
    e.allowClick = !0
    return
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler)) return
  ;(o.currentX = i.pageX), (o.currentY = i.pageY)
  const d = o.currentX,
    g = o.currentY
  if (!Xp(e, i, d)) return
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }),
    (o.startX = d),
    (o.startY = g),
    (r.touchStartTime = sl()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    s.threshold > 0 && (r.allowThresholdMove = !1)
  let h = !0
  l.matches(r.focusableElements) &&
    ((h = !1), l.nodeName === 'SELECT' && (r.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(r.focusableElements) &&
      n.activeElement !== l &&
      (i.pointerType === 'mouse' ||
        (i.pointerType !== 'mouse' && !l.matches(r.focusableElements))) &&
      n.activeElement.blur()
  const y = h && e.allowTouchMove && s.touchStartPreventDefault
  ;(s.touchStartForcePreventDefault || y) &&
    !l.isContentEditable &&
    i.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !s.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit('touchStart', i)
}
function jT(t) {
  const e = zs(),
    n = this,
    i = n.touchEventsData,
    { params: r, touches: s, rtlTranslate: o, enabled: a } = n
  if (!a || (!r.simulateTouch && t.pointerType === 'mouse')) return
  let l = t
  if (
    (l.originalEvent && (l = l.originalEvent),
    l.type === 'pointermove' &&
      (i.touchId !== null || l.pointerId !== i.pointerId))
  )
    return
  let c
  if (l.type === 'touchmove') {
    if (
      ((c = [...l.changedTouches].filter((C) => C.identifier === i.touchId)[0]),
      !c || c.identifier !== i.touchId)
    )
      return
  } else c = l
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && n.emit('touchMoveOpposite', l)
    return
  }
  const u = c.pageX,
    f = c.pageY
  if (l.preventedByNestedSwiper) {
    ;(s.startX = u), (s.startY = f)
    return
  }
  if (!n.allowTouchMove) {
    l.target.matches(i.focusableElements) || (n.allowClick = !1),
      i.isTouched &&
        (Object.assign(s, { startX: u, startY: f, currentX: u, currentY: f }),
        (i.touchStartTime = sl()))
    return
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (n.isVertical()) {
      if (
        (f < s.startY && n.translate <= n.maxTranslate()) ||
        (f > s.startY && n.translate >= n.minTranslate())
      ) {
        ;(i.isTouched = !1), (i.isMoved = !1)
        return
      }
    } else if (
      (u < s.startX && n.translate <= n.maxTranslate()) ||
      (u > s.startX && n.translate >= n.minTranslate())
    )
      return
  }
  if (
    (e.activeElement &&
      e.activeElement.matches(i.focusableElements) &&
      e.activeElement !== l.target &&
      l.pointerType !== 'mouse' &&
      e.activeElement.blur(),
    e.activeElement &&
      l.target === e.activeElement &&
      l.target.matches(i.focusableElements))
  ) {
    ;(i.isMoved = !0), (n.allowClick = !1)
    return
  }
  i.allowTouchCallbacks && n.emit('touchMove', l),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = u),
    (s.currentY = f)
  const p = s.currentX - s.startX,
    d = s.currentY - s.startY
  if (n.params.threshold && Math.sqrt(p ** 2 + d ** 2) < n.params.threshold)
    return
  if (typeof i.isScrolling > 'u') {
    let C
    ;(n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (i.isScrolling = !1)
      : p * p + d * d >= 25 &&
        ((C = (Math.atan2(Math.abs(d), Math.abs(p)) * 180) / Math.PI),
        (i.isScrolling = n.isHorizontal()
          ? C > r.touchAngle
          : 90 - C > r.touchAngle))
  }
  if (
    (i.isScrolling && n.emit('touchMoveOpposite', l),
    typeof i.startMoving > 'u' &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (i.startMoving = !0),
    i.isScrolling ||
      (l.type === 'touchmove' && i.preventTouchMoveFromPointerMove))
  ) {
    i.isTouched = !1
    return
  }
  if (!i.startMoving) return
  ;(n.allowClick = !1),
    !r.cssMode && l.cancelable && l.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && l.stopPropagation()
  let g = n.isHorizontal() ? p : d,
    h = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY
  r.oneWayMovement &&
    ((g = Math.abs(g) * (o ? 1 : -1)), (h = Math.abs(h) * (o ? 1 : -1))),
    (s.diff = g),
    (g *= r.touchRatio),
    o && ((g = -g), (h = -h))
  const y = n.touchesDirection
  ;(n.swipeDirection = g > 0 ? 'prev' : 'next'),
    (n.touchesDirection = h > 0 ? 'prev' : 'next')
  const w = n.params.loop && !r.cssMode,
    _ =
      (n.touchesDirection === 'next' && n.allowSlideNext) ||
      (n.touchesDirection === 'prev' && n.allowSlidePrev)
  if (!i.isMoved) {
    if (
      (w && _ && n.loopFix({ direction: n.swipeDirection }),
      (i.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const C = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 }
      })
      n.wrapperEl.dispatchEvent(C)
    }
    ;(i.allowMomentumBounce = !1),
      r.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit('sliderFirstMove', l)
  }
  let m
  if (
    (new Date().getTime(),
    i.isMoved &&
      i.allowThresholdMove &&
      y !== n.touchesDirection &&
      w &&
      _ &&
      Math.abs(g) >= 1)
  ) {
    Object.assign(s, {
      startX: u,
      startY: f,
      currentX: u,
      currentY: f,
      startTranslate: i.currentTranslate
    }),
      (i.loopSwapReset = !0),
      (i.startTranslate = i.currentTranslate)
    return
  }
  n.emit('sliderMove', l),
    (i.isMoved = !0),
    (i.currentTranslate = g + i.startTranslate)
  let v = !0,
    b = r.resistanceRatio
  if (
    (r.touchReleaseOnEdges && (b = 0),
    g > 0
      ? (w &&
          _ &&
          !m &&
          i.allowThresholdMove &&
          i.currentTranslate >
            (r.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (r.slidesPerView !== 'auto' &&
                n.slides.length - r.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: 'prev',
            setTranslate: !0,
            activeSlideIndex: 0
          }),
        i.currentTranslate > n.minTranslate() &&
          ((v = !1),
          r.resistance &&
            (i.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + i.startTranslate + g) ** b)))
      : g < 0 &&
        (w &&
          _ &&
          !m &&
          i.allowThresholdMove &&
          i.currentTranslate <
            (r.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (r.slidesPerView !== 'auto' &&
                n.slides.length - r.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (r.slidesPerView === 'auto'
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10)))
          }),
        i.currentTranslate < n.maxTranslate() &&
          ((v = !1),
          r.resistance &&
            (i.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - i.startTranslate - g) ** b))),
    v && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === 'next' &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === 'prev' &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(g) > r.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        ;(i.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (i.currentTranslate = i.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY)
        return
      }
    } else {
      i.currentTranslate = i.startTranslate
      return
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
      r.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(i.currentTranslate),
    n.setTranslate(i.currentTranslate))
}
function VT(t) {
  const e = this,
    n = e.touchEventsData
  let i = t
  i.originalEvent && (i = i.originalEvent)
  let r
  if (i.type === 'touchend' || i.type === 'touchcancel') {
    if (
      ((r = [...i.changedTouches].filter((b) => b.identifier === n.touchId)[0]),
      !r || r.identifier !== n.touchId)
    )
      return
  } else {
    if (n.touchId !== null || i.pointerId !== n.pointerId) return
    r = i
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
      i.type
    ) &&
    !(
      ['pointercancel', 'contextmenu'].includes(i.type) &&
      (e.browser.isSafari || e.browser.isWebView)
    )
  )
    return
  ;(n.pointerId = null), (n.touchId = null)
  const {
    params: o,
    touches: a,
    rtlTranslate: l,
    slidesGrid: c,
    enabled: u
  } = e
  if (!u || (!o.simulateTouch && i.pointerType === 'mouse')) return
  if (
    (n.allowTouchCallbacks && e.emit('touchEnd', i),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && e.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1)
    return
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1)
  const f = sl(),
    p = f - n.touchStartTime
  if (e.allowClick) {
    const b = i.path || (i.composedPath && i.composedPath())
    e.updateClickedSlide((b && b[0]) || i.target, b),
      e.emit('tap click', i),
      p < 300 && f - n.lastClickTime < 300 && e.emit('doubleTap doubleClick', i)
  }
  if (
    ((n.lastClickTime = sl()),
    Pu(() => {
      e.destroyed || (e.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !e.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
    return
  }
  ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
  let d
  if (
    (o.followFinger
      ? (d = l ? e.translate : -e.translate)
      : (d = -n.currentTranslate),
    o.cssMode)
  )
    return
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: d })
    return
  }
  const g = d >= -e.maxTranslate() && !e.params.loop
  let h = 0,
    y = e.slidesSizesGrid[0]
  for (
    let b = 0;
    b < c.length;
    b += b < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const C = b < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
    typeof c[b + C] < 'u'
      ? (g || (d >= c[b] && d < c[b + C])) && ((h = b), (y = c[b + C] - c[b]))
      : (g || d >= c[b]) && ((h = b), (y = c[c.length - 1] - c[c.length - 2]))
  }
  let w = null,
    _ = null
  o.rewind &&
    (e.isBeginning
      ? (_ =
          o.virtual && o.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (w = 0))
  const m = (d - c[h]) / y,
    v = h < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
  if (p > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex)
      return
    }
    e.swipeDirection === 'next' &&
      (m >= o.longSwipesRatio
        ? e.slideTo(o.rewind && e.isEnd ? w : h + v)
        : e.slideTo(h)),
      e.swipeDirection === 'prev' &&
        (m > 1 - o.longSwipesRatio
          ? e.slideTo(h + v)
          : _ !== null && m < 0 && Math.abs(m) > o.longSwipesRatio
            ? e.slideTo(_)
            : e.slideTo(h))
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex)
      return
    }
    e.navigation &&
    (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
      ? i.target === e.navigation.nextEl
        ? e.slideTo(h + v)
        : e.slideTo(h)
      : (e.swipeDirection === 'next' && e.slideTo(w !== null ? w : h + v),
        e.swipeDirection === 'prev' && e.slideTo(_ !== null ? _ : h))
  }
}
function Kp() {
  const t = this,
    { params: e, el: n } = t
  if (n && n.offsetWidth === 0) return
  e.breakpoints && t.setBreakpoint()
  const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = t,
    o = t.virtual && t.params.virtual.enabled
  ;(t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses()
  const a = o && e.loop
  ;(e.slidesPerView === 'auto' || e.slidesPerView > 1) &&
  t.isEnd &&
  !t.isBeginning &&
  !t.params.centeredSlides &&
  !a
    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
    : t.params.loop && !o
      ? t.slideToLoop(t.realIndex, 0, !1, !0)
      : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(t.autoplay.resizeTimeout),
      (t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.resume()
      }, 500))),
    (t.allowSlidePrev = r),
    (t.allowSlideNext = i),
    t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow()
}
function HT(t) {
  const e = this
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())))
}
function GT() {
  const t = this,
    { wrapperEl: e, rtlTranslate: n, enabled: i } = t
  if (!i) return
  ;(t.previousTranslate = t.translate),
    t.isHorizontal()
      ? (t.translate = -e.scrollLeft)
      : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses()
  let r
  const s = t.maxTranslate() - t.minTranslate()
  s === 0 ? (r = 0) : (r = (t.translate - t.minTranslate()) / s),
    r !== t.progress && t.updateProgress(n ? -t.translate : t.translate),
    t.emit('setTranslate', t.translate, !1)
}
function WT(t) {
  const e = this
  Na(e, t.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== 'auto' && !e.params.autoHeight)
    ) && e.update()
}
function UT() {
  const t = this
  t.documentTouchHandlerProceeded ||
    ((t.documentTouchHandlerProceeded = !0),
    t.params.touchReleaseOnEdges && (t.el.style.touchAction = 'auto'))
}
const z_ = (t, e) => {
  const n = zs(),
    { params: i, el: r, wrapperEl: s, device: o } = t,
    a = !!i.nested,
    l = e === 'on' ? 'addEventListener' : 'removeEventListener',
    c = e
  !r ||
    typeof r == 'string' ||
    (n[l]('touchstart', t.onDocumentTouchStart, { passive: !1, capture: a }),
    r[l]('touchstart', t.onTouchStart, { passive: !1 }),
    r[l]('pointerdown', t.onTouchStart, { passive: !1 }),
    n[l]('touchmove', t.onTouchMove, { passive: !1, capture: a }),
    n[l]('pointermove', t.onTouchMove, { passive: !1, capture: a }),
    n[l]('touchend', t.onTouchEnd, { passive: !0 }),
    n[l]('pointerup', t.onTouchEnd, { passive: !0 }),
    n[l]('pointercancel', t.onTouchEnd, { passive: !0 }),
    n[l]('touchcancel', t.onTouchEnd, { passive: !0 }),
    n[l]('pointerout', t.onTouchEnd, { passive: !0 }),
    n[l]('pointerleave', t.onTouchEnd, { passive: !0 }),
    n[l]('contextmenu', t.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      r[l]('click', t.onClick, !0),
    i.cssMode && s[l]('scroll', t.onScroll),
    i.updateOnWindowResize
      ? t[c](
          o.ios || o.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          Kp,
          !0
        )
      : t[c]('observerUpdate', Kp, !0),
    r[l]('load', t.onLoad, { capture: !0 }))
}
function qT() {
  const t = this,
    { params: e } = t
  ;(t.onTouchStart = FT.bind(t)),
    (t.onTouchMove = jT.bind(t)),
    (t.onTouchEnd = VT.bind(t)),
    (t.onDocumentTouchStart = UT.bind(t)),
    e.cssMode && (t.onScroll = GT.bind(t)),
    (t.onClick = HT.bind(t)),
    (t.onLoad = WT.bind(t)),
    z_(t, 'on')
}
function YT() {
  z_(this, 'off')
}
var XT = { attachEvents: qT, detachEvents: YT }
const Qp = (t, e) => t.grid && e.grid && e.grid.rows > 1
function KT() {
  const t = this,
    { realIndex: e, initialized: n, params: i, el: r } = t,
    s = i.breakpoints
  if (!s || (s && Object.keys(s).length === 0)) return
  const o = t.getBreakpoint(s, t.params.breakpointsBase, t.el)
  if (!o || t.currentBreakpoint === o) return
  const l = (o in s ? s[o] : void 0) || t.originalParams,
    c = Qp(t, i),
    u = Qp(t, l),
    f = t.params.grabCursor,
    p = l.grabCursor,
    d = i.enabled
  c && !u
    ? (r.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`
      ),
      t.emitContainerClasses())
    : !c &&
      u &&
      (r.classList.add(`${i.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === 'column') ||
        (!l.grid.fill && i.grid.fill === 'column')) &&
        r.classList.add(`${i.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    f && !p ? t.unsetGrabCursor() : !f && p && t.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((m) => {
      if (typeof l[m] > 'u') return
      const v = i[m] && i[m].enabled,
        b = l[m] && l[m].enabled
      v && !b && t[m].disable(), !v && b && t[m].enable()
    })
  const g = l.direction && l.direction !== i.direction,
    h = i.loop && (l.slidesPerView !== i.slidesPerView || g),
    y = i.loop
  g && n && t.changeDirection(), gn(t.params, l)
  const w = t.params.enabled,
    _ = t.params.loop
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev
  }),
    d && !w ? t.disable() : !d && w && t.enable(),
    (t.currentBreakpoint = o),
    t.emit('_beforeBreakpoint', l),
    n &&
      (h
        ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides())
        : !y && _
          ? (t.loopCreate(e), t.updateSlides())
          : y && !_ && t.loopDestroy()),
    t.emit('breakpoint', l)
}
function QT(t, e, n) {
  if ((e === void 0 && (e = 'window'), !t || (e === 'container' && !n))) return
  let i = !1
  const r = En(),
    s = e === 'window' ? r.innerHeight : n.clientHeight,
    o = Object.keys(t).map((a) => {
      if (typeof a == 'string' && a.indexOf('@') === 0) {
        const l = parseFloat(a.substr(1))
        return { value: s * l, point: a }
      }
      return { value: a, point: a }
    })
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10))
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: c } = o[a]
    e === 'window'
      ? r.matchMedia(`(min-width: ${c}px)`).matches && (i = l)
      : c <= n.clientWidth && (i = l)
  }
  return i || 'max'
}
var ZT = { setBreakpoint: KT, getBreakpoint: QT }
function JT(t, e) {
  const n = []
  return (
    t.forEach((i) => {
      typeof i == 'object'
        ? Object.keys(i).forEach((r) => {
            i[r] && n.push(e + r)
          })
        : typeof i == 'string' && n.push(e + i)
    }),
    n
  )
}
function eE() {
  const t = this,
    { classNames: e, params: n, rtl: i, el: r, device: s } = t,
    o = JT(
      [
        'initialized',
        n.direction,
        { 'free-mode': t.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: i },
        { grid: n.grid && n.grid.rows > 1 },
        {
          'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column'
        },
        { android: s.android },
        { ios: s.ios },
        { 'css-mode': n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { 'watch-progress': n.watchSlidesProgress }
      ],
      n.containerModifierClass
    )
  e.push(...o), r.classList.add(...e), t.emitContainerClasses()
}
function tE() {
  const t = this,
    { el: e, classNames: n } = t
  !e ||
    typeof e == 'string' ||
    (e.classList.remove(...n), t.emitContainerClasses())
}
var nE = { addClasses: eE, removeClasses: tE }
function iE() {
  const t = this,
    { isLocked: e, params: n } = t,
    { slidesOffsetBefore: i } = n
  if (i) {
    const r = t.slides.length - 1,
      s = t.slidesGrid[r] + t.slidesSizesGrid[r] + i * 2
    t.isLocked = t.size > s
  } else t.isLocked = t.snapGrid.length === 1
  n.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    n.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? 'lock' : 'unlock')
}
var rE = { checkOverflow: iE },
  Mu = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  }
function sE(t, e) {
  return function (i) {
    i === void 0 && (i = {})
    const r = Object.keys(i)[0],
      s = i[r]
    if (typeof s != 'object' || s === null) {
      gn(e, i)
      return
    }
    if (
      (t[r] === !0 && (t[r] = { enabled: !0 }),
      r === 'navigation' &&
        t[r] &&
        t[r].enabled &&
        !t[r].prevEl &&
        !t[r].nextEl &&
        (t[r].auto = !0),
      ['pagination', 'scrollbar'].indexOf(r) >= 0 &&
        t[r] &&
        t[r].enabled &&
        !t[r].el &&
        (t[r].auto = !0),
      !(r in t && 'enabled' in s))
    ) {
      gn(e, i)
      return
    }
    typeof t[r] == 'object' && !('enabled' in t[r]) && (t[r].enabled = !0),
      t[r] || (t[r] = { enabled: !1 }),
      gn(e, i)
  }
}
const Mc = {
    eventsEmitter: nT,
    update: pT,
    translate: bT,
    transition: ST,
    slide: kT,
    loop: IT,
    grabCursor: BT,
    events: XT,
    breakpoints: ZT,
    checkOverflow: rE,
    classes: nE
  },
  kc = {}
let Bf = class bi {
  constructor() {
    let e, n
    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
      r[s] = arguments[s]
    r.length === 1 &&
    r[0].constructor &&
    Object.prototype.toString.call(r[0]).slice(8, -1) === 'Object'
      ? (n = r[0])
      : ([e, n] = r),
      n || (n = {}),
      (n = gn({}, n)),
      e && !n.el && (n.el = e)
    const o = zs()
    if (
      n.el &&
      typeof n.el == 'string' &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const u = []
      return (
        o.querySelectorAll(n.el).forEach((f) => {
          const p = gn({}, n, { el: f })
          u.push(new bi(p))
        }),
        u
      )
    }
    const a = this
    ;(a.__swiper__ = !0),
      (a.support = L_()),
      (a.device = D_({ userAgent: n.userAgent })),
      (a.browser = JS()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules)
    const l = {}
    a.modules.forEach((u) => {
      u({
        params: n,
        swiper: a,
        extendParams: sE(n, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a)
      })
    })
    const c = gn({}, Mu, l)
    return (
      (a.params = gn({}, c, kc, n)),
      (a.originalParams = gn({}, a.params)),
      (a.passedParams = gn({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((u) => {
          a.on(u, a.params.on[u])
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === 'horizontal'
        },
        isVertical() {
          return a.params.direction === 'vertical'
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0
      }),
      a.emit('_swiper'),
      a.params.init && a.init(),
      a
    )
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom'
        }[e]
  }
  getSlideIndex(e) {
    const { slidesEl: n, params: i } = this,
      r = li(n, `.${i.slideClass}, swiper-slide`),
      s = ll(r[0])
    return ll(e) - s
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute('data-swiper-slide-index') * 1 === e
      )[0]
    )
  }
  recalcSlides() {
    const e = this,
      { slidesEl: n, params: i } = e
    e.slides = li(n, `.${i.slideClass}, swiper-slide`)
  }
  enable() {
    const e = this
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit('enable'))
  }
  disable() {
    const e = this
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit('disable'))
  }
  setProgress(e, n) {
    const i = this
    e = Math.min(Math.max(e, 0), 1)
    const r = i.minTranslate(),
      o = (i.maxTranslate() - r) * e + r
    i.translateTo(o, typeof n > 'u' ? 0 : n),
      i.updateActiveIndex(),
      i.updateSlidesClasses()
  }
  emitContainerClasses() {
    const e = this
    if (!e.params._emitClasses || !e.el) return
    const n = e.el.className
      .split(' ')
      .filter(
        (i) =>
          i.indexOf('swiper') === 0 ||
          i.indexOf(e.params.containerModifierClass) === 0
      )
    e.emit('_containerClasses', n.join(' '))
  }
  getSlideClasses(e) {
    const n = this
    return n.destroyed
      ? ''
      : e.className
          .split(' ')
          .filter(
            (i) =>
              i.indexOf('swiper-slide') === 0 ||
              i.indexOf(n.params.slideClass) === 0
          )
          .join(' ')
  }
  emitSlidesClasses() {
    const e = this
    if (!e.params._emitClasses || !e.el) return
    const n = []
    e.slides.forEach((i) => {
      const r = e.getSlideClasses(i)
      n.push({ slideEl: i, classNames: r }), e.emit('_slideClass', i, r)
    }),
      e.emit('_slideClasses', n)
  }
  slidesPerViewDynamic(e, n) {
    e === void 0 && (e = 'current'), n === void 0 && (n = !1)
    const i = this,
      {
        params: r,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: a,
        size: l,
        activeIndex: c
      } = i
    let u = 1
    if (typeof r.slidesPerView == 'number') return r.slidesPerView
    if (r.centeredSlides) {
      let f = s[c] ? Math.ceil(s[c].swiperSlideSize) : 0,
        p
      for (let d = c + 1; d < s.length; d += 1)
        s[d] &&
          !p &&
          ((f += Math.ceil(s[d].swiperSlideSize)), (u += 1), f > l && (p = !0))
      for (let d = c - 1; d >= 0; d -= 1)
        s[d] && !p && ((f += s[d].swiperSlideSize), (u += 1), f > l && (p = !0))
    } else if (e === 'current')
      for (let f = c + 1; f < s.length; f += 1)
        (n ? o[f] + a[f] - o[c] < l : o[f] - o[c] < l) && (u += 1)
    else for (let f = c - 1; f >= 0; f -= 1) o[c] - o[f] < l && (u += 1)
    return u
  }
  update() {
    const e = this
    if (!e || e.destroyed) return
    const { snapGrid: n, params: i } = e
    i.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Na(e, o)
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses()
    function r() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate())
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses()
    }
    let s
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      r(), i.autoHeight && e.updateAutoHeight()
    else {
      if (
        (i.slidesPerView === 'auto' || i.slidesPerView > 1) &&
        e.isEnd &&
        !i.centeredSlides
      ) {
        const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides
        s = e.slideTo(o.length - 1, 0, !1, !0)
      } else s = e.slideTo(e.activeIndex, 0, !1, !0)
      s || r()
    }
    i.watchOverflow && n !== e.snapGrid && e.checkOverflow(), e.emit('update')
  }
  changeDirection(e, n) {
    n === void 0 && (n = !0)
    const i = this,
      r = i.params.direction
    return (
      e || (e = r === 'horizontal' ? 'vertical' : 'horizontal'),
      e === r ||
        (e !== 'horizontal' && e !== 'vertical') ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
        i.el.classList.add(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        (i.params.direction = e),
        i.slides.forEach((s) => {
          e === 'vertical' ? (s.style.width = '') : (s.style.height = '')
        }),
        i.emit('changeDirection'),
        n && i.update()),
      i
    )
  }
  changeLanguageDirection(e) {
    const n = this
    ;(n.rtl && e === 'rtl') ||
      (!n.rtl && e === 'ltr') ||
      ((n.rtl = e === 'rtl'),
      (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'rtl'))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'ltr')),
      n.update())
  }
  mount(e) {
    const n = this
    if (n.mounted) return !0
    let i = e || n.params.el
    if ((typeof i == 'string' && (i = document.querySelector(i)), !i)) return !1
    ;(i.swiper = n),
      i.parentNode &&
        i.parentNode.host &&
        i.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0)
    const r = () =>
      `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`
    let o =
      i && i.shadowRoot && i.shadowRoot.querySelector
        ? i.shadowRoot.querySelector(r())
        : li(i, r())[0]
    return (
      !o &&
        n.params.createElements &&
        ((o = al('div', n.params.wrapperClass)),
        i.append(o),
        li(i, `.${n.params.slideClass}`).forEach((a) => {
          o.append(a)
        })),
      Object.assign(n, {
        el: i,
        wrapperEl: o,
        slidesEl:
          n.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
        hostEl: n.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === 'rtl' || Wi(i, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (i.dir.toLowerCase() === 'rtl' || Wi(i, 'direction') === 'rtl'),
        wrongRTL: Wi(o, 'display') === '-webkit-box'
      }),
      !0
    )
  }
  init(e) {
    const n = this
    if (n.initialized || n.mount(e) === !1) return n
    n.emit('beforeInit'),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents()
    const r = [...n.el.querySelectorAll('[loading="lazy"]')]
    return (
      n.isElement && r.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      r.forEach((s) => {
        s.complete
          ? Na(n, s)
          : s.addEventListener('load', (o) => {
              Na(n, o.target)
            })
      }),
      Au(n),
      (n.initialized = !0),
      Au(n),
      n.emit('init'),
      n.emit('afterInit'),
      n
    )
  }
  destroy(e, n) {
    e === void 0 && (e = !0), n === void 0 && (n = !0)
    const i = this,
      { params: r, el: s, wrapperEl: o, slides: a } = i
    return (
      typeof i.params > 'u' ||
        i.destroyed ||
        (i.emit('beforeDestroy'),
        (i.initialized = !1),
        i.detachEvents(),
        r.loop && i.loopDestroy(),
        n &&
          (i.removeClasses(),
          s && typeof s != 'string' && s.removeAttribute('style'),
          o && o.removeAttribute('style'),
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(
                r.slideVisibleClass,
                r.slideFullyVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass
              ),
                l.removeAttribute('style'),
                l.removeAttribute('data-swiper-slide-index')
            })),
        i.emit('destroy'),
        Object.keys(i.eventsListeners).forEach((l) => {
          i.off(l)
        }),
        e !== !1 &&
          (i.el && typeof i.el != 'string' && (i.el.swiper = null), HS(i)),
        (i.destroyed = !0)),
      null
    )
  }
  static extendDefaults(e) {
    gn(kc, e)
  }
  static get extendedDefaults() {
    return kc
  }
  static get defaults() {
    return Mu
  }
  static installModule(e) {
    bi.prototype.__modules__ || (bi.prototype.__modules__ = [])
    const n = bi.prototype.__modules__
    typeof e == 'function' && n.indexOf(e) < 0 && n.push(e)
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((n) => bi.installModule(n)), bi)
      : (bi.installModule(e), bi)
  }
}
Object.keys(Mc).forEach((t) => {
  Object.keys(Mc[t]).forEach((e) => {
    Bf.prototype[e] = Mc[t][e]
  })
})
Bf.use([eT, tT])
const N_ = [
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
function zr(t) {
  return (
    typeof t == 'object' &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === 'Object' &&
    !t.__swiper__
  )
}
function gs(t, e) {
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(e)
    .filter((i) => n.indexOf(i) < 0)
    .forEach((i) => {
      typeof t[i] > 'u'
        ? (t[i] = e[i])
        : zr(e[i]) && zr(t[i]) && Object.keys(e[i]).length > 0
          ? e[i].__swiper__
            ? (t[i] = e[i])
            : gs(t[i], e[i])
          : (t[i] = e[i])
    })
}
function B_(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation &&
      typeof t.navigation.nextEl > 'u' &&
      typeof t.navigation.prevEl > 'u'
  )
}
function $_(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > 'u'
}
function F_(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > 'u'
}
function j_(t) {
  t === void 0 && (t = '')
  const e = t
      .split(' ')
      .map((i) => i.trim())
      .filter((i) => !!i),
    n = []
  return (
    e.forEach((i) => {
      n.indexOf(i) < 0 && n.push(i)
    }),
    n.join(' ')
  )
}
function oE(t) {
  return (
    t === void 0 && (t = ''),
    t
      ? t.includes('swiper-wrapper')
        ? t
        : `swiper-wrapper ${t}`
      : 'swiper-wrapper'
  )
}
function aE(t) {
  let {
    swiper: e,
    slides: n,
    passedParams: i,
    changedParams: r,
    nextEl: s,
    prevEl: o,
    scrollbarEl: a,
    paginationEl: l
  } = t
  const c = r.filter(
      (E) => E !== 'children' && E !== 'direction' && E !== 'wrapperClass'
    ),
    {
      params: u,
      pagination: f,
      navigation: p,
      scrollbar: d,
      virtual: g,
      thumbs: h
    } = e
  let y, w, _, m, v, b, C, P
  r.includes('thumbs') &&
    i.thumbs &&
    i.thumbs.swiper &&
    !i.thumbs.swiper.destroyed &&
    u.thumbs &&
    (!u.thumbs.swiper || u.thumbs.swiper.destroyed) &&
    (y = !0),
    r.includes('controller') &&
      i.controller &&
      i.controller.control &&
      u.controller &&
      !u.controller.control &&
      (w = !0),
    r.includes('pagination') &&
      i.pagination &&
      (i.pagination.el || l) &&
      (u.pagination || u.pagination === !1) &&
      f &&
      !f.el &&
      (_ = !0),
    r.includes('scrollbar') &&
      i.scrollbar &&
      (i.scrollbar.el || a) &&
      (u.scrollbar || u.scrollbar === !1) &&
      d &&
      !d.el &&
      (m = !0),
    r.includes('navigation') &&
      i.navigation &&
      (i.navigation.prevEl || o) &&
      (i.navigation.nextEl || s) &&
      (u.navigation || u.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (v = !0)
  const M = (E) => {
    e[E] &&
      (e[E].destroy(),
      E === 'navigation'
        ? (e.isElement && (e[E].prevEl.remove(), e[E].nextEl.remove()),
          (u[E].prevEl = void 0),
          (u[E].nextEl = void 0),
          (e[E].prevEl = void 0),
          (e[E].nextEl = void 0))
        : (e.isElement && e[E].el.remove(),
          (u[E].el = void 0),
          (e[E].el = void 0)))
  }
  r.includes('loop') &&
    e.isElement &&
    (u.loop && !i.loop ? (b = !0) : !u.loop && i.loop ? (C = !0) : (P = !0)),
    c.forEach((E) => {
      if (zr(u[E]) && zr(i[E]))
        Object.assign(u[E], i[E]),
          (E === 'navigation' || E === 'pagination' || E === 'scrollbar') &&
            'enabled' in i[E] &&
            !i[E].enabled &&
            M(E)
      else {
        const O = i[E]
        ;(O === !0 || O === !1) &&
        (E === 'navigation' || E === 'pagination' || E === 'scrollbar')
          ? O === !1 && M(E)
          : (u[E] = i[E])
      }
    }),
    c.includes('controller') &&
      !w &&
      e.controller &&
      e.controller.control &&
      u.controller &&
      u.controller.control &&
      (e.controller.control = u.controller.control),
    r.includes('children') && n && g && u.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : r.includes('virtual') &&
        g &&
        u.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    r.includes('children') && n && u.loop && (P = !0),
    y && h.init() && h.update(!0),
    w && (e.controller.control = u.controller.control),
    _ &&
      (e.isElement &&
        (!l || typeof l == 'string') &&
        ((l = document.createElement('div')),
        l.classList.add('swiper-pagination'),
        l.part.add('pagination'),
        e.el.appendChild(l)),
      l && (u.pagination.el = l),
      f.init(),
      f.render(),
      f.update()),
    m &&
      (e.isElement &&
        (!a || typeof a == 'string') &&
        ((a = document.createElement('div')),
        a.classList.add('swiper-scrollbar'),
        a.part.add('scrollbar'),
        e.el.appendChild(a)),
      a && (u.scrollbar.el = a),
      d.init(),
      d.updateSize(),
      d.setTranslate()),
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
      p.init(),
      p.update()),
    r.includes('allowSlideNext') && (e.allowSlideNext = i.allowSlideNext),
    r.includes('allowSlidePrev') && (e.allowSlidePrev = i.allowSlidePrev),
    r.includes('direction') && e.changeDirection(i.direction, !1),
    (b || P) && e.loopDestroy(),
    (C || P) && e.loopCreate(),
    e.update()
}
function Zp(t, e) {
  t === void 0 && (t = {})
  const n = { on: {} },
    i = {},
    r = {}
  gs(n, Mu), (n._emitClasses = !0), (n.init = !1)
  const s = {},
    o = N_.map((l) => l.replace(/_/, '')),
    a = Object.assign({}, t)
  return (
    Object.keys(a).forEach((l) => {
      typeof t[l] > 'u' ||
        (o.indexOf(l) >= 0
          ? zr(t[l])
            ? ((n[l] = {}), (r[l] = {}), gs(n[l], t[l]), gs(r[l], t[l]))
            : ((n[l] = t[l]), (r[l] = t[l]))
          : l.search(/on[A-Z]/) === 0 && typeof t[l] == 'function'
            ? (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = t[l])
            : (s[l] = t[l]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l]
    }),
    { params: n, passedParams: r, rest: s, events: i }
  )
}
function lE(t, e) {
  let {
    el: n,
    nextEl: i,
    prevEl: r,
    paginationEl: s,
    scrollbarEl: o,
    swiper: a
  } = t
  B_(e) &&
    i &&
    r &&
    ((a.params.navigation.nextEl = i),
    (a.originalParams.navigation.nextEl = i),
    (a.params.navigation.prevEl = r),
    (a.originalParams.navigation.prevEl = r)),
    $_(e) &&
      s &&
      ((a.params.pagination.el = s), (a.originalParams.pagination.el = s)),
    F_(e) &&
      o &&
      ((a.params.scrollbar.el = o), (a.originalParams.scrollbar.el = o)),
    a.init(n)
}
function cE(t, e, n, i, r) {
  const s = []
  if (!e) return s
  const o = (l) => {
    s.indexOf(l) < 0 && s.push(l)
  }
  if (n && i) {
    const l = i.map(r),
      c = n.map(r)
    l.join('') !== c.join('') && o('children'),
      i.length !== n.length && o('children')
  }
  return (
    N_.filter((l) => l[0] === '_')
      .map((l) => l.replace(/_/, ''))
      .forEach((l) => {
        if (l in t && l in e)
          if (zr(t[l]) && zr(e[l])) {
            const c = Object.keys(t[l]),
              u = Object.keys(e[l])
            c.length !== u.length
              ? o(l)
              : (c.forEach((f) => {
                  t[l][f] !== e[l][f] && o(l)
                }),
                u.forEach((f) => {
                  t[l][f] !== e[l][f] && o(l)
                }))
          } else t[l] !== e[l] && o(l)
      }),
    s
  )
}
const uE = (t) => {
  !t ||
    t.destroyed ||
    !t.params.virtual ||
    (t.params.virtual && !t.params.virtual.enabled) ||
    (t.updateSlides(),
    t.updateProgress(),
    t.updateSlidesClasses(),
    t.parallax &&
      t.params.parallax &&
      t.params.parallax.enabled &&
      t.parallax.setTranslate())
}
function Rc(t, e, n) {
  t === void 0 && (t = {})
  const i = [],
    r = {
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
                : r[a] && r[a].push(l)
        })
    }
  return (
    Object.keys(t).forEach((o) => {
      if (typeof t[o] != 'function') return
      const a = t[o]()
      s(a, o)
    }),
    (n.value = e.value),
    (e.value = i),
    { slides: i, slots: r }
  )
}
function fE(t, e, n) {
  if (!n) return null
  const i = (u) => {
      let f = u
      return u < 0 ? (f = e.length + u) : f >= e.length && (f = f - e.length), f
    },
    r = t.value.isHorizontal()
      ? { [t.value.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: o } = n,
    a = t.value.params.loop ? -e.length : 0,
    l = t.value.params.loop ? e.length * 2 : e.length,
    c = []
  for (let u = a; u < l; u += 1)
    u >= s && u <= o && c.length < e.length && c.push(e[i(u)])
  return c.map((u) => {
    if (
      (u.props || (u.props = {}),
      u.props.style || (u.props.style = {}),
      (u.props.swiperRef = t),
      (u.props.style = r),
      u.type)
    )
      return en(u.type, { ...u.props }, u.children)
    if (u.componentOptions)
      return en(
        u.componentOptions.Ctor,
        { ...u.props },
        u.componentOptions.children
      )
  })
}
const V_ = {
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
    setup(t, e) {
      let { slots: n, emit: i } = e
      const { tag: r, wrapperTag: s } = t,
        o = gt('swiper'),
        a = gt(null),
        l = gt(!1),
        c = gt(!1),
        u = gt(null),
        f = gt(null),
        p = gt(null),
        d = { value: [] },
        g = { value: [] },
        h = gt(null),
        y = gt(null),
        w = gt(null),
        _ = gt(null),
        { params: m, passedParams: v } = Zp(t)
      Rc(n, d, g), (p.value = v), (g.value = d.value)
      const b = () => {
        Rc(n, d, g), (l.value = !0)
      }
      ;(m.onAny = function (M) {
        for (
          var E = arguments.length, O = new Array(E > 1 ? E - 1 : 0), I = 1;
          I < E;
          I++
        )
          O[I - 1] = arguments[I]
        i(M, ...O)
      }),
        Object.assign(m.on, {
          _beforeBreakpoint: b,
          _containerClasses(M, E) {
            o.value = E
          }
        })
      const C = { ...m }
      if (
        (delete C.wrapperClass,
        (f.value = new Bf(C)),
        f.value.virtual && f.value.params.virtual.enabled)
      ) {
        f.value.virtual.slides = d.value
        const M = {
          cache: !1,
          slides: d.value,
          renderExternal: (E) => {
            a.value = E
          },
          renderExternalUpdate: !1
        }
        gs(f.value.params.virtual, M), gs(f.value.originalParams.virtual, M)
      }
      Wu(() => {
        !c.value && f.value && (f.value.emitSlidesClasses(), (c.value = !0))
        const { passedParams: M } = Zp(t),
          E = cE(M, p.value, d.value, g.value, (O) => O.props && O.props.key)
        ;(p.value = M),
          (E.length || l.value) &&
            f.value &&
            !f.value.destroyed &&
            aE({
              swiper: f.value,
              slides: d.value,
              passedParams: M,
              changedParams: E,
              nextEl: h.value,
              prevEl: y.value,
              scrollbarEl: _.value,
              paginationEl: w.value
            }),
          (l.value = !1)
      }),
        as('swiper', f),
        uo(a, () => {
          Vu(() => {
            uE(f.value)
          })
        }),
        Or(() => {
          u.value &&
            (lE(
              {
                el: u.value,
                nextEl: h.value,
                prevEl: y.value,
                paginationEl: w.value,
                scrollbarEl: _.value,
                swiper: f.value
              },
              m
            ),
            i('swiper', f.value))
        }),
        Uu(() => {
          f.value && !f.value.destroyed && f.value.destroy(!0, !1)
        })
      function P(M) {
        return m.virtual
          ? fE(f, M, a.value)
          : (M.forEach((E, O) => {
              E.props || (E.props = {}),
                (E.props.swiperRef = f),
                (E.props.swiperSlideIndex = O)
            }),
            M)
      }
      return () => {
        const { slides: M, slots: E } = Rc(n, d, g)
        return en(r, { ref: u, class: j_(o.value) }, [
          E['container-start'],
          en(s, { class: oE(m.wrapperClass) }, [
            E['wrapper-start'],
            P(M),
            E['wrapper-end']
          ]),
          B_(t) && [
            en('div', { ref: y, class: 'swiper-button-prev' }),
            en('div', { ref: h, class: 'swiper-button-next' })
          ],
          F_(t) && en('div', { ref: _, class: 'swiper-scrollbar' }),
          $_(t) && en('div', { ref: w, class: 'swiper-pagination' }),
          E['container-end']
        ])
      }
    }
  },
  H_ = {
    name: 'SwiperSlide',
    props: {
      tag: { type: String, default: 'div' },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 }
    },
    setup(t, e) {
      let { slots: n } = e,
        i = !1
      const { swiperRef: r } = t,
        s = gt(null),
        o = gt('swiper-slide'),
        a = gt(!1)
      function l(f, p, d) {
        p === s.value && (o.value = d)
      }
      Or(() => {
        !r || !r.value || (r.value.on('_slideClass', l), (i = !0))
      }),
        Dh(() => {
          i || !r || !r.value || (r.value.on('_slideClass', l), (i = !0))
        }),
        Wu(() => {
          !s.value ||
            !r ||
            !r.value ||
            (typeof t.swiperSlideIndex < 'u' &&
              (s.value.swiperSlideIndex = t.swiperSlideIndex),
            r.value.destroyed &&
              o.value !== 'swiper-slide' &&
              (o.value = 'swiper-slide'))
        }),
        Uu(() => {
          !r || !r.value || r.value.off('_slideClass', l)
        })
      const c = An(() => ({
        isActive: o.value.indexOf('swiper-slide-active') >= 0,
        isVisible: o.value.indexOf('swiper-slide-visible') >= 0,
        isPrev: o.value.indexOf('swiper-slide-prev') >= 0,
        isNext: o.value.indexOf('swiper-slide-next') >= 0
      }))
      as('swiperSlide', c)
      const u = () => {
        a.value = !0
      }
      return () =>
        en(
          t.tag,
          {
            class: j_(`${o.value}`),
            ref: s,
            'data-swiper-slide-index':
              typeof t.virtualIndex > 'u' && r && r.value && r.value.params.loop
                ? t.swiperSlideIndex
                : t.virtualIndex,
            onLoadCapture: u
          },
          t.zoom
            ? en(
                'div',
                {
                  class: 'swiper-zoom-container',
                  'data-swiper-zoom':
                    typeof t.zoom == 'number' ? t.zoom : void 0
                },
                [
                  n.default && n.default(c.value),
                  t.lazy &&
                    !a.value &&
                    en('div', { class: 'swiper-lazy-preloader' })
                ]
              )
            : [
                n.default && n.default(c.value),
                t.lazy &&
                  !a.value &&
                  en('div', { class: 'swiper-lazy-preloader' })
              ]
        )
    }
  }
function G_(t, e, n, i) {
  return (
    t.params.createElements &&
      Object.keys(i).forEach((r) => {
        if (!n[r] && n.auto === !0) {
          let s = li(t.el, `.${i[r]}`)[0]
          s || ((s = al('div', i[r])), (s.className = i[r]), t.el.append(s)),
            (n[r] = s),
            (e[r] = s)
        }
      }),
    n
  )
}
function W_(t) {
  let { swiper: e, extendParams: n, on: i, emit: r } = t
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  }),
    (e.navigation = { nextEl: null, prevEl: null })
  function s(g) {
    let h
    return g &&
      typeof g == 'string' &&
      e.isElement &&
      ((h = e.el.querySelector(g) || e.hostEl.querySelector(g)), h)
      ? h
      : (g &&
          (typeof g == 'string' && (h = [...document.querySelectorAll(g)]),
          e.params.uniqueNavElements &&
          typeof g == 'string' &&
          h &&
          h.length > 1 &&
          e.el.querySelectorAll(g).length === 1
            ? (h = e.el.querySelector(g))
            : h && h.length === 1 && (h = h[0])),
        g && !h ? g : h)
  }
  function o(g, h) {
    const y = e.params.navigation
    ;(g = mt(g)),
      g.forEach((w) => {
        w &&
          (w.classList[h ? 'add' : 'remove'](...y.disabledClass.split(' ')),
          w.tagName === 'BUTTON' && (w.disabled = h),
          e.params.watchOverflow &&
            e.enabled &&
            w.classList[e.isLocked ? 'add' : 'remove'](y.lockClass))
      })
  }
  function a() {
    const { nextEl: g, prevEl: h } = e.navigation
    if (e.params.loop) {
      o(h, !1), o(g, !1)
      return
    }
    o(h, e.isBeginning && !e.params.rewind), o(g, e.isEnd && !e.params.rewind)
  }
  function l(g) {
    g.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), r('navigationPrev'))
  }
  function c(g) {
    g.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), r('navigationNext'))
  }
  function u() {
    const g = e.params.navigation
    if (
      ((e.params.navigation = G_(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
      )),
      !(g.nextEl || g.prevEl))
    )
      return
    let h = s(g.nextEl),
      y = s(g.prevEl)
    Object.assign(e.navigation, { nextEl: h, prevEl: y }),
      (h = mt(h)),
      (y = mt(y))
    const w = (_, m) => {
      _ && _.addEventListener('click', m === 'next' ? c : l),
        !e.enabled && _ && _.classList.add(...g.lockClass.split(' '))
    }
    h.forEach((_) => w(_, 'next')), y.forEach((_) => w(_, 'prev'))
  }
  function f() {
    let { nextEl: g, prevEl: h } = e.navigation
    ;(g = mt(g)), (h = mt(h))
    const y = (w, _) => {
      w.removeEventListener('click', _ === 'next' ? c : l),
        w.classList.remove(...e.params.navigation.disabledClass.split(' '))
    }
    g.forEach((w) => y(w, 'next')), h.forEach((w) => y(w, 'prev'))
  }
  i('init', () => {
    e.params.navigation.enabled === !1 ? d() : (u(), a())
  }),
    i('toEdge fromEdge lock unlock', () => {
      a()
    }),
    i('destroy', () => {
      f()
    }),
    i('enable disable', () => {
      let { nextEl: g, prevEl: h } = e.navigation
      if (((g = mt(g)), (h = mt(h)), e.enabled)) {
        a()
        return
      }
      ;[...g, ...h]
        .filter((y) => !!y)
        .forEach((y) => y.classList.add(e.params.navigation.lockClass))
    }),
    i('click', (g, h) => {
      let { nextEl: y, prevEl: w } = e.navigation
      ;(y = mt(y)), (w = mt(w))
      const _ = h.target
      let m = w.includes(_) || y.includes(_)
      if (e.isElement && !m) {
        const v = h.path || (h.composedPath && h.composedPath())
        v && (m = v.find((b) => y.includes(b) || w.includes(b)))
      }
      if (e.params.navigation.hideOnClick && !m) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === _ || e.pagination.el.contains(_))
        )
          return
        let v
        y.length
          ? (v = y[0].classList.contains(e.params.navigation.hiddenClass))
          : w.length &&
            (v = w[0].classList.contains(e.params.navigation.hiddenClass)),
          r(v === !0 ? 'navigationShow' : 'navigationHide'),
          [...y, ...w]
            .filter((b) => !!b)
            .forEach((b) => b.classList.toggle(e.params.navigation.hiddenClass))
      }
    })
  const p = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(' ')
      ),
        u(),
        a()
    },
    d = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(' ')
      ),
        f()
    }
  Object.assign(e.navigation, {
    enable: p,
    disable: d,
    update: a,
    init: u,
    destroy: f
  })
}
function Qs(t) {
  return (
    t === void 0 && (t = ''),
    `.${t
      .trim()
      .replace(/([\.:!+\/])/g, '\\$1')
      .replace(/ /g, '.')}`
  )
}
function U_(t) {
  let { swiper: e, extendParams: n, on: i, emit: r } = t
  const s = 'swiper-pagination'
  n({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: 'bullets',
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (_) => _,
      formatFractionTotal: (_) => _,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`
    }
  }),
    (e.pagination = { el: null, bullets: [] })
  let o,
    a = 0
  function l() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    )
  }
  function c(_, m) {
    const { bulletActiveClass: v } = e.params.pagination
    _ &&
      ((_ = _[`${m === 'prev' ? 'previous' : 'next'}ElementSibling`]),
      _ &&
        (_.classList.add(`${v}-${m}`),
        (_ = _[`${m === 'prev' ? 'previous' : 'next'}ElementSibling`]),
        _ && _.classList.add(`${v}-${m}-${m}`)))
  }
  function u(_, m, v) {
    if (((_ = _ % v), (m = m % v), m === _ + 1)) return 'next'
    if (m === _ - 1) return 'previous'
  }
  function f(_) {
    const m = _.target.closest(Qs(e.params.pagination.bulletClass))
    if (!m) return
    _.preventDefault()
    const v = ll(m) * e.params.slidesPerGroup
    if (e.params.loop) {
      if (e.realIndex === v) return
      const b = u(e.realIndex, v, e.slides.length)
      b === 'next'
        ? e.slideNext()
        : b === 'previous'
          ? e.slidePrev()
          : e.slideToLoop(v)
    } else e.slideTo(v)
  }
  function p() {
    const _ = e.rtl,
      m = e.params.pagination
    if (l()) return
    let v = e.pagination.el
    v = mt(v)
    let b, C
    const P =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      M = e.params.loop
        ? Math.ceil(P / e.params.slidesPerGroup)
        : e.snapGrid.length
    if (
      (e.params.loop
        ? ((C = e.previousRealIndex || 0),
          (b =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < 'u'
          ? ((b = e.snapIndex), (C = e.previousSnapIndex))
          : ((C = e.previousIndex || 0), (b = e.activeIndex || 0)),
      m.type === 'bullets' &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const E = e.pagination.bullets
      let O, I, L
      if (
        (m.dynamicBullets &&
          ((o = Ou(E[0], e.isHorizontal() ? 'width' : 'height')),
          v.forEach((z) => {
            z.style[e.isHorizontal() ? 'width' : 'height'] =
              `${o * (m.dynamicMainBullets + 4)}px`
          }),
          m.dynamicMainBullets > 1 &&
            C !== void 0 &&
            ((a += b - (C || 0)),
            a > m.dynamicMainBullets - 1
              ? (a = m.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (O = Math.max(b - a, 0)),
          (I = O + (Math.min(E.length, m.dynamicMainBullets) - 1)),
          (L = (I + O) / 2)),
        E.forEach((z) => {
          const j = [
            ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
              (Y) => `${m.bulletActiveClass}${Y}`
            )
          ]
            .map((Y) =>
              typeof Y == 'string' && Y.includes(' ') ? Y.split(' ') : Y
            )
            .flat()
          z.classList.remove(...j)
        }),
        v.length > 1)
      )
        E.forEach((z) => {
          const j = ll(z)
          j === b
            ? z.classList.add(...m.bulletActiveClass.split(' '))
            : e.isElement && z.setAttribute('part', 'bullet'),
            m.dynamicBullets &&
              (j >= O &&
                j <= I &&
                z.classList.add(...`${m.bulletActiveClass}-main`.split(' ')),
              j === O && c(z, 'prev'),
              j === I && c(z, 'next'))
        })
      else {
        const z = E[b]
        if (
          (z && z.classList.add(...m.bulletActiveClass.split(' ')),
          e.isElement &&
            E.forEach((j, Y) => {
              j.setAttribute('part', Y === b ? 'bullet-active' : 'bullet')
            }),
          m.dynamicBullets)
        ) {
          const j = E[O],
            Y = E[I]
          for (let q = O; q <= I; q += 1)
            E[q] &&
              E[q].classList.add(...`${m.bulletActiveClass}-main`.split(' '))
          c(j, 'prev'), c(Y, 'next')
        }
      }
      if (m.dynamicBullets) {
        const z = Math.min(E.length, m.dynamicMainBullets + 4),
          j = (o * z - o) / 2 - L * o,
          Y = _ ? 'right' : 'left'
        E.forEach((q) => {
          q.style[e.isHorizontal() ? Y : 'top'] = `${j}px`
        })
      }
    }
    v.forEach((E, O) => {
      if (
        (m.type === 'fraction' &&
          (E.querySelectorAll(Qs(m.currentClass)).forEach((I) => {
            I.textContent = m.formatFractionCurrent(b + 1)
          }),
          E.querySelectorAll(Qs(m.totalClass)).forEach((I) => {
            I.textContent = m.formatFractionTotal(M)
          })),
        m.type === 'progressbar')
      ) {
        let I
        m.progressbarOpposite
          ? (I = e.isHorizontal() ? 'vertical' : 'horizontal')
          : (I = e.isHorizontal() ? 'horizontal' : 'vertical')
        const L = (b + 1) / M
        let z = 1,
          j = 1
        I === 'horizontal' ? (z = L) : (j = L),
          E.querySelectorAll(Qs(m.progressbarFillClass)).forEach((Y) => {
            ;(Y.style.transform = `translate3d(0,0,0) scaleX(${z}) scaleY(${j})`),
              (Y.style.transitionDuration = `${e.params.speed}ms`)
          })
      }
      m.type === 'custom' && m.renderCustom
        ? ((E.innerHTML = m.renderCustom(e, b + 1, M)),
          O === 0 && r('paginationRender', E))
        : (O === 0 && r('paginationRender', E), r('paginationUpdate', E)),
        e.params.watchOverflow &&
          e.enabled &&
          E.classList[e.isLocked ? 'add' : 'remove'](m.lockClass)
    })
  }
  function d() {
    const _ = e.params.pagination
    if (l()) return
    const m =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length
    let v = e.pagination.el
    v = mt(v)
    let b = ''
    if (_.type === 'bullets') {
      let C = e.params.loop
        ? Math.ceil(m / e.params.slidesPerGroup)
        : e.snapGrid.length
      e.params.freeMode && e.params.freeMode.enabled && C > m && (C = m)
      for (let P = 0; P < C; P += 1)
        _.renderBullet
          ? (b += _.renderBullet.call(e, P, _.bulletClass))
          : (b += `<${_.bulletElement} ${e.isElement ? 'part="bullet"' : ''} class="${_.bulletClass}"></${_.bulletElement}>`)
    }
    _.type === 'fraction' &&
      (_.renderFraction
        ? (b = _.renderFraction.call(e, _.currentClass, _.totalClass))
        : (b = `<span class="${_.currentClass}"></span> / <span class="${_.totalClass}"></span>`)),
      _.type === 'progressbar' &&
        (_.renderProgressbar
          ? (b = _.renderProgressbar.call(e, _.progressbarFillClass))
          : (b = `<span class="${_.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      v.forEach((C) => {
        _.type !== 'custom' && (C.innerHTML = b || ''),
          _.type === 'bullets' &&
            e.pagination.bullets.push(...C.querySelectorAll(Qs(_.bulletClass)))
      }),
      _.type !== 'custom' && r('paginationRender', v[0])
  }
  function g() {
    e.params.pagination = G_(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: 'swiper-pagination' }
    )
    const _ = e.params.pagination
    if (!_.el) return
    let m
    typeof _.el == 'string' && e.isElement && (m = e.el.querySelector(_.el)),
      !m &&
        typeof _.el == 'string' &&
        (m = [...document.querySelectorAll(_.el)]),
      m || (m = _.el),
      !(!m || m.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof _.el == 'string' &&
          Array.isArray(m) &&
          m.length > 1 &&
          ((m = [...e.el.querySelectorAll(_.el)]),
          m.length > 1 &&
            (m = m.filter((v) => R_(v, '.swiper')[0] === e.el)[0])),
        Array.isArray(m) && m.length === 1 && (m = m[0]),
        Object.assign(e.pagination, { el: m }),
        (m = mt(m)),
        m.forEach((v) => {
          _.type === 'bullets' &&
            _.clickable &&
            v.classList.add(...(_.clickableClass || '').split(' ')),
            v.classList.add(_.modifierClass + _.type),
            v.classList.add(
              e.isHorizontal() ? _.horizontalClass : _.verticalClass
            ),
            _.type === 'bullets' &&
              _.dynamicBullets &&
              (v.classList.add(`${_.modifierClass}${_.type}-dynamic`),
              (a = 0),
              _.dynamicMainBullets < 1 && (_.dynamicMainBullets = 1)),
            _.type === 'progressbar' &&
              _.progressbarOpposite &&
              v.classList.add(_.progressbarOppositeClass),
            _.clickable && v.addEventListener('click', f),
            e.enabled || v.classList.add(_.lockClass)
        }))
  }
  function h() {
    const _ = e.params.pagination
    if (l()) return
    let m = e.pagination.el
    m &&
      ((m = mt(m)),
      m.forEach((v) => {
        v.classList.remove(_.hiddenClass),
          v.classList.remove(_.modifierClass + _.type),
          v.classList.remove(
            e.isHorizontal() ? _.horizontalClass : _.verticalClass
          ),
          _.clickable &&
            (v.classList.remove(...(_.clickableClass || '').split(' ')),
            v.removeEventListener('click', f))
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((v) =>
          v.classList.remove(..._.bulletActiveClass.split(' '))
        )
  }
  i('changeDirection', () => {
    if (!e.pagination || !e.pagination.el) return
    const _ = e.params.pagination
    let { el: m } = e.pagination
    ;(m = mt(m)),
      m.forEach((v) => {
        v.classList.remove(_.horizontalClass, _.verticalClass),
          v.classList.add(
            e.isHorizontal() ? _.horizontalClass : _.verticalClass
          )
      })
  }),
    i('init', () => {
      e.params.pagination.enabled === !1 ? w() : (g(), d(), p())
    }),
    i('activeIndexChange', () => {
      typeof e.snapIndex > 'u' && p()
    }),
    i('snapIndexChange', () => {
      p()
    }),
    i('snapGridLengthChange', () => {
      d(), p()
    }),
    i('destroy', () => {
      h()
    }),
    i('enable disable', () => {
      let { el: _ } = e.pagination
      _ &&
        ((_ = mt(_)),
        _.forEach((m) =>
          m.classList[e.enabled ? 'remove' : 'add'](
            e.params.pagination.lockClass
          )
        ))
    }),
    i('lock unlock', () => {
      p()
    }),
    i('click', (_, m) => {
      const v = m.target,
        b = mt(e.pagination.el)
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        b &&
        b.length > 0 &&
        !v.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && v === e.navigation.nextEl) ||
            (e.navigation.prevEl && v === e.navigation.prevEl))
        )
          return
        const C = b[0].classList.contains(e.params.pagination.hiddenClass)
        r(C === !0 ? 'paginationShow' : 'paginationHide'),
          b.forEach((P) => P.classList.toggle(e.params.pagination.hiddenClass))
      }
    })
  const y = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass)
      let { el: _ } = e.pagination
      _ &&
        ((_ = mt(_)),
        _.forEach((m) =>
          m.classList.remove(e.params.pagination.paginationDisabledClass)
        )),
        g(),
        d(),
        p()
    },
    w = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass)
      let { el: _ } = e.pagination
      _ &&
        ((_ = mt(_)),
        _.forEach((m) =>
          m.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        h()
    }
  Object.assign(e.pagination, {
    enable: y,
    disable: w,
    render: d,
    update: p,
    init: g,
    destroy: h
  })
}
const dE = { class: 'container py-10' },
  pE = { class: 'py-10' },
  hE = {
    __name: 'Index',
    setup(t) {
      ut.registerPlugin(ye), gt(null)
      const e = gt(null),
        n = () => {
          ut.from('.box', { opacity: 0, stagger: 0.1 }),
            ut.to('.box', { rotation: '+=360', duration: 3 }),
            ut.to(e.value, { rotation: '-=360', duration: 3 })
        }
      return (
        Or(() => {
          A_({ Tooltip: Is, Modal: Yo, Collapse: hs }), n()
        }),
        (i, r) => {
          const s = yl('router-link'),
            o = Jo
          return (
            bt(),
            nn('div', null, [
              Pe(o, null, {
                default: tn(() => [
                  Pe(
                    s,
                    { to: '/' },
                    {
                      default: tn(
                        () =>
                          r[0] ||
                          (r[0] = [
                            R(
                              'img',
                              { src: xx, alt: '', width: '650' },
                              null,
                              -1
                            )
                          ])
                      ),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }),
              R('div', dE, [
                r[2] ||
                  (r[2] = Ls(
                    '<div class=""><div class="flex flex-col items-center justify-center gap-5 text-2xl"><div>未來親子野餐日陪伴孩子10週年啦！</div><div>不只是我們共創的里程碑，也象徵著「幸福永續」</div><div>期待能陪伴孩子，朝著更美好的未來邁進！</div><div>更多歡樂、甜蜜的親子時光，</div><div>就從今年的10歲生日派對開始吧！</div></div></div><div class="grid grid-cols-1 md:grid-cols-3"><a href="#"><img src="' +
                      fp +
                      '" alt=""></a><a href="#"><img src="' +
                      dp +
                      '" alt=""></a><a href="#"><img src="' +
                      dp +
                      '" alt=""></a></div><div><div data-twe-toggle="modal" data-twe-target="#exampleModalCenter2" data-twe-ripple-init data-twe-ripple-color="light"><img class="hidden md:block" src="' +
                      Sx +
                      '" alt=""><img class="block md:hidden" src="' +
                      Tx +
                      '" alt=""></div><div><img class="hidden md:block" src="' +
                      Ex +
                      '" alt=""><img class="block md:hidden" src="' +
                      Cx +
                      '" alt=""></div></div>',
                    3
                  )),
                r[3] ||
                  (r[3] = R(
                    'div',
                    {
                      class:
                        'flex flex-wrap gap-5 rounded-lg bg-white p-8 shadow-xl md:flex-nowrap'
                    },
                    [
                      R('div', { class: 'w-1/2' }, [
                        R('iframe', {
                          class: 'h-full w-full',
                          src: 'https://www.youtube.com/embed/HfbW8DL1Ld4?si=qtjNJwouQu-pgyAa&controls=0',
                          allow:
                            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                          referrerPolicy: 'strict-origin-when-cross-origin',
                          allowFullScreen: ''
                        })
                      ]),
                      R('a', { href: '#', class: 'flex flex-col gap-5' }, [
                        R(
                          'div',
                          { class: 'text-2xl font-bold text-primary-500' },
                          '互動好禮'
                        ),
                        R(
                          'div',
                          null,
                          ' 歡慶十週年，活動好禮拿不完！快來看看這次活動有哪些超亮點，把限量好禮通通帶回家！ '
                        ),
                        R(
                          'button',
                          {
                            type: 'button',
                            class:
                              'inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2'
                          },
                          ' 看看好禮 '
                        )
                      ])
                    ],
                    -1
                  )),
                R('div', pE, [
                  Pe(
                    _t(V_),
                    {
                      'slides-per-view': 4,
                      'space-between': 20,
                      autoplay: { delay: 5e3, disableOnInteraction: !1 },
                      pagination: { clickable: !0 },
                      modules: [_t(U_), _t(W_)],
                      navigation: '',
                      loop: ''
                    },
                    {
                      default: tn(() => [
                        Pe(
                          _t(H_),
                          { class: 'flex flex-col gap-3' },
                          {
                            default: tn(
                              () =>
                                r[1] ||
                                (r[1] = [
                                  R(
                                    'div',
                                    {
                                      class: 'h-[200px] w-full overflow-hidden',
                                      'data-twe-toggle': 'modal',
                                      'data-twe-target': '#exampleModalCenter',
                                      'data-twe-ripple-init': '',
                                      'data-twe-ripple-color': 'light'
                                    },
                                    [R('img', { src: fp, alt: '' })],
                                    -1
                                  )
                                ])
                            ),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['modules']
                  )
                ]),
                r[4] ||
                  (r[4] = R(
                    'div',
                    null,
                    [
                      R(
                        'div',
                        {
                          'data-twe-modal-init': '',
                          class:
                            'fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none',
                          id: 'exampleModalCenter',
                          tabindex: '-1',
                          'aria-labelledby': 'exampleModalCenterTitle',
                          'aria-modal': 'true',
                          role: 'dialog'
                        },
                        [
                          R(
                            'div',
                            {
                              'data-twe-modal-dialog-ref': '',
                              class:
                                'pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]'
                            },
                            [
                              R(
                                'div',
                                {
                                  class:
                                    'pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark'
                                },
                                [
                                  R(
                                    'div',
                                    {
                                      class:
                                        'flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10'
                                    },
                                    [
                                      R(
                                        'h5',
                                        {
                                          class:
                                            'text-xl font-medium leading-normal text-surface dark:text-white',
                                          id: 'exampleModalCenterTitle'
                                        },
                                        ' Modal title '
                                      ),
                                      R(
                                        'button',
                                        {
                                          type: 'button',
                                          class:
                                            'box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300',
                                          'data-twe-modal-dismiss': '',
                                          'aria-label': 'Close'
                                        },
                                        [
                                          R(
                                            'span',
                                            {
                                              class: '[&>svg]:h-6 [&>svg]:w-6'
                                            },
                                            [
                                              R(
                                                'svg',
                                                {
                                                  xmlns:
                                                    'http://www.w3.org/2000/svg',
                                                  fill: 'currentColor',
                                                  viewBox: '0 0 24 24',
                                                  'stroke-width': '1.5',
                                                  stroke: 'currentColor'
                                                },
                                                [
                                                  R('path', {
                                                    'stroke-linecap': 'round',
                                                    'stroke-linejoin': 'round',
                                                    d: 'M6 18L18 6M6 6l12 12'
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  R('div', { class: 'relative p-4' }, [
                                    R(
                                      'p',
                                      null,
                                      'This is a vertically centered modal.'
                                    )
                                  ]),
                                  R(
                                    'div',
                                    {
                                      class:
                                        'flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10'
                                    },
                                    [
                                      R(
                                        'button',
                                        {
                                          type: 'button',
                                          class:
                                            'inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400',
                                          'data-twe-modal-dismiss': '',
                                          'data-twe-ripple-init': '',
                                          'data-twe-ripple-color': 'light'
                                        },
                                        ' Close '
                                      ),
                                      R(
                                        'button',
                                        {
                                          type: 'button',
                                          class:
                                            'ms-1 inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong',
                                          'data-twe-ripple-init': '',
                                          'data-twe-ripple-color': 'light'
                                        },
                                        ' Save changes '
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      R(
                        'div',
                        {
                          'data-twe-modal-init': '',
                          class:
                            'fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none',
                          id: 'exampleModalCenter2',
                          tabindex: '-1',
                          'aria-labelledby': 'exampleModalCenterTitle',
                          'aria-modal': 'true',
                          role: 'dialog'
                        },
                        [
                          R(
                            'div',
                            {
                              'data-twe-modal-dialog-ref': '',
                              class:
                                'pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]'
                            },
                            [
                              R(
                                'div',
                                {
                                  class:
                                    'pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark'
                                },
                                [
                                  R(
                                    'div',
                                    {
                                      class:
                                        'flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10'
                                    },
                                    [
                                      R(
                                        'h5',
                                        {
                                          class:
                                            'text-xl font-medium leading-normal text-surface dark:text-white',
                                          id: 'exampleModalCenterTitle'
                                        },
                                        ' Modal title '
                                      ),
                                      R(
                                        'button',
                                        {
                                          type: 'button',
                                          class:
                                            'box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300',
                                          'data-twe-modal-dismiss': '',
                                          'aria-label': 'Close'
                                        },
                                        [
                                          R(
                                            'span',
                                            {
                                              class: '[&>svg]:h-6 [&>svg]:w-6'
                                            },
                                            [
                                              R(
                                                'svg',
                                                {
                                                  xmlns:
                                                    'http://www.w3.org/2000/svg',
                                                  fill: 'currentColor',
                                                  viewBox: '0 0 24 24',
                                                  'stroke-width': '1.5',
                                                  stroke: 'currentColor'
                                                },
                                                [
                                                  R('path', {
                                                    'stroke-linecap': 'round',
                                                    'stroke-linejoin': 'round',
                                                    d: 'M6 18L18 6M6 6l12 12'
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  R('div', { class: 'relative p-4' }, [
                                    R(
                                      'p',
                                      null,
                                      'This is a vertically centered modal.'
                                    )
                                  ]),
                                  R(
                                    'div',
                                    {
                                      class:
                                        'flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10'
                                    },
                                    [
                                      R(
                                        'button',
                                        {
                                          type: 'button',
                                          class:
                                            'inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400',
                                          'data-twe-modal-dismiss': '',
                                          'data-twe-ripple-init': '',
                                          'data-twe-ripple-color': 'light'
                                        },
                                        ' Close '
                                      ),
                                      R(
                                        'button',
                                        {
                                          type: 'button',
                                          class:
                                            'ms-1 inline-block rounded bg-primary-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong',
                                          'data-twe-ripple-init': '',
                                          'data-twe-ripple-color': 'light'
                                        },
                                        ' Save changes '
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    -1
                  ))
              ])
            ])
          )
        }
      )
    }
  },
  gE = '' + new URL('../img/play_9.png', import.meta.url).href,
  mE = { class: 'container' },
  _E = { id: 'accordionContainer' },
  vE = ['id'],
  bE = ['data-twe-target', 'aria-controls'],
  yE = ['id', 'data-twe-collapse-show', 'aria-labelledby'],
  wE = { class: 'font-lg px-5 py-4' },
  xE = { class: 'grid grid-cols-2 gap-10 md:grid-cols-3' },
  SE = { class: 'relative my-6 flex flex-col rounded-lg' },
  TE = { class: 'relative mb-3 overflow-hidden rounded-md text-white' },
  EE = ['src'],
  CE = { class: 'mb-2 text-xl font-semibold' },
  PE = { class: 'mb-3' },
  OE = { class: 'font-light leading-normal text-slate-600' },
  AE = { class: 'text-center text-xl font-bold text-primary-500' },
  ME = {
    __name: 'Gift',
    setup(t) {
      ut.registerPlugin(ye),
        Or(() => {
          A_({ Tooltip: Is, Modal: Yo, Collapse: hs })
        })
      const e = [
          {
            q: '請問報名資格為何？需要費用嗎？',
            a: '舉凡親子家庭皆可參加；活動報名每組家庭899元整，三組優惠價2,299元整再送精選圖書。'
          },
          {
            q: '一定要報名才可以參加嗎？有實體票券嗎？',
            a: '為提供優質的活動品質，活動前開放網站事先報名。報名成功後，會收到訂單成立信件，無提供實體票券。活動前將會發送提醒簡訊至您報名資料填寫的手機，活動當天憑簡訊即可至現場報到區領取贈品喔！'
          },
          {
            q: '有名額限制嗎？',
            a: '2,000組親子家庭額滿為止。野餐日當天現場多項活動皆開放參與，歡迎攜家帶眷體驗野餐樂趣。'
          },
          {
            q: '可攜伴參加嗎？',
            a: '可攜伴，不限人數，歡迎全家大小一起來參加（注意：一組家庭/一筆訂單，僅能領取一份贈品及一張闖關卡，完成闖關後可兌換一張抽獎券）'
          },
          {
            q: '主辦單位有提供食物嗎？要帶什麼呢？',
            a: '大會活動僅提供福袋禮、早鳥禮及抽獎禮之品項，並無提供野餐食物，若有需要可以自行攜帶。抽獎活動之得獎者須要出示身分證，請記得攜帶！其餘物品大會建議攜帶環保袋、野餐墊、水等，以及開心玩樂的心情！'
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
            a: '報名繳費後，因故不克參加者，請於4/19(五)前提出，主辦單位將扣除30%手續費後予以退費，4/20(六)起取消者恕無法退費。若活動前一週內因天候等不可抗力因素延期，請配合主辦單位公告之延期日期，恕不退費。'
          },
          {
            q: '活動因故延期如何因應？',
            a: '如有調整，將於活動前 3 天於【本活動網頁】公告並以電子郵件或簡訊通知。'
          },
          {
            q: '我還有其它疑問，不在網站的Q/A裡，請問我可以怎麼辦？',
            a: '有任何疑問，歡迎您撥打服務專線(02)2662-0012（週一到週五9:00~12:30 ; 13:30~17:00），將有專人為您解答。'
          }
        ],
        n = [
          {
            name: '澎澄飯店',
            image:
              'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
            room: 'CookieRun 薑餅人主題房',
            note: '(加贈一位12歲以下兒童入住+開房禮)',
            description:
              '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
            price: '$11,880 / 2名'
          },
          {
            name: '澎澄飯店',
            image:
              'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
            room: 'CookieRun 薑餅人主題房',
            note: '(加贈一位12歲以下兒童入住+開房禮)',
            description:
              '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
            price: '$11,880 / 2名'
          },
          {
            name: '澎澄飯店',
            image:
              'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
            room: 'CookieRun 薑餅人主題房',
            note: '(加贈一位12歲以下兒童入住+開房禮)',
            description:
              '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
            price: '$11,880 / 2名'
          },
          {
            name: '澎澄飯店',
            image:
              'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
            room: 'CookieRun 薑餅人主題房',
            note: '(加贈一位12歲以下兒童入住+開房禮)',
            description:
              '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
            price: '$11,880 / 2名'
          },
          {
            name: '澎澄飯店',
            image:
              'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
            room: 'CookieRun 薑餅人主題房',
            note: '(加贈一位12歲以下兒童入住+開房禮)',
            description:
              '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
            price: '$11,880 / 2名'
          },
          {
            name: '澎澄飯店',
            image:
              'https://parenting.cwgv.com.tw/event/picnic/2024/assets/img/gift_p6.jpg',
            room: 'CookieRun 薑餅人主題房',
            note: '(加贈一位12歲以下兒童入住+開房禮)',
            description:
              '今年澎澄飯店特別攜手韓國人氣益智冒險遊戲CookieRun薑餅人打造專屬主題房，除了房內處處充滿CookieRun薑餅人元素，全館還設有多處拍照打卡區，並舉辦各式活動與房客共度歡樂時光，不容錯過的精彩體驗等你來參與！(飯店房型照片僅供參考，依實際入住房型為主)',
            price: '$11,880 / 2名'
          }
        ],
        i = () => {
          const s = document.querySelectorAll('#accordionContainer > div')
          ut.from(s, {
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
        r = () => {
          const s = document.querySelectorAll('.gift-item')
          ut.from(s, {
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
            s.forEach((o) => {
              ut.to(o, {
                scale: 1.05,
                duration: 0.8,
                ease: 'bounce.inOut',
                repeat: -1,
                yoyo: !0,
                paused: !0
              }),
                o.addEventListener('mouseenter', () => {
                  ut.to(o, { scale: 1.05, duration: 0.3, ease: 'power1.out' })
                }),
                o.addEventListener('mouseleave', () => {
                  ut.to(o, { scale: 1, duration: 0.3, ease: 'power1.out' })
                })
            })
        }
      return (
        Or(() => {
          i(), r()
        }),
        (s, o) => {
          const a = Jo
          return (
            bt(),
            nn('div', null, [
              Pe(a),
              R('div', mE, [
                o[1] ||
                  (o[1] = R(
                    'div',
                    null,
                    [R('img', { class: 'mx-auto', src: gE, alt: '' })],
                    -1
                  )),
                R('div', _E, [
                  (bt(),
                  nn(
                    qt,
                    null,
                    $c(e, (l, c) =>
                      R('div', { key: c, class: '' }, [
                        R(
                          'h2',
                          {
                            class: 'mb-0 border-b-4 border-primary-500',
                            id: `test-${c}`
                          },
                          [
                            R(
                              'button',
                              {
                                class:
                                  'group relative flex w-full items-center rounded-t-lg border-0 px-5 py-4 text-xl font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary-500 [&:not([data-twe-collapse-collapsed])]:shadow-border-b',
                                type: 'button',
                                'data-twe-collapse-init': '',
                                'data-twe-target': `#collapse${c}`,
                                'aria-expanded': 'true',
                                'aria-controls': `collapse${c}`
                              },
                              [
                                ve(zi(l.q) + ' ', 1),
                                o[0] ||
                                  (o[0] = R(
                                    'span',
                                    {
                                      class:
                                        '-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6'
                                    },
                                    [
                                      R(
                                        'svg',
                                        {
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          fill: 'none',
                                          viewBox: '0 0 24 24',
                                          'stroke-width': '1.5',
                                          stroke: 'currentColor'
                                        },
                                        [
                                          R('path', {
                                            'stroke-linecap': 'round',
                                            'stroke-linejoin': 'round',
                                            d: 'M19.5 8.25l-7.5 7.5-7.5-7.5'
                                          })
                                        ]
                                      )
                                    ],
                                    -1
                                  ))
                              ],
                              8,
                              bE
                            )
                          ],
                          8,
                          vE
                        ),
                        R(
                          'div',
                          {
                            id: `collapse${c}`,
                            class: gl(`!visible ${c > 0 && 'hidden'}`),
                            'data-twe-collapse-item': '',
                            'data-twe-collapse-show': c === 0,
                            'aria-labelledby': `test-${c}`,
                            'data-twe-parent': '#accordionContainer'
                          },
                          [R('div', wE, zi(l.a), 1)],
                          10,
                          yE
                        )
                      ])
                    ),
                    64
                  ))
                ]),
                R('div', xE, [
                  (bt(),
                  nn(
                    qt,
                    null,
                    $c(n, (l, c) =>
                      R('div', { key: c, class: 'gift-item' }, [
                        R('div', SE, [
                          R('div', TE, [
                            R(
                              'img',
                              { src: l.image, alt: 'w-full' },
                              null,
                              8,
                              EE
                            )
                          ]),
                          R('div', null, [
                            R('h2', CE, zi(l.name), 1),
                            R('div', PE, zi(l.note), 1),
                            R('div', OE, zi(l.description), 1),
                            R('div', AE, zi(l.price), 1)
                          ])
                        ])
                      ])
                    ),
                    64
                  ))
                ]),
                o[2] ||
                  (o[2] = Ls(
                    '<div class="my-6 flex max-w-96 flex-col rounded-lg border border-slate-200 bg-white p-8 shadow-sm"><div class="m-0 mb-8 border-b border-slate-200 pb-8 text-center text-slate-800"><p class="text-sm font-semibold uppercase text-slate-500">standard</p><h1 class="text-6xl mt-4 flex justify-center gap-1 font-bold text-slate-800"><span class="text-3xl">$</span>29 <span class="self-end text-3xl">/mo</span></h1></div><div class="p-0"><ul class="flex flex-col gap-4"><li class="flex items-center gap-4"><span class="rounded-full border border-slate-200 bg-slate-50 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-slate-600"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></span><p class="text-slate-500">5 team members</p></li><li class="flex items-center gap-4"><span class="rounded-full border border-slate-200 bg-slate-50 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-slate-600"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></span><p class="text-slate-500">200+ components</p></li><li class="flex items-center gap-4"><span class="rounded-full border border-slate-200 bg-slate-50 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-slate-600"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></span><p class="text-slate-500">40+ built-in pages</p></li><li class="flex items-center gap-4"><span class="rounded-full border border-slate-200 bg-slate-50 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-slate-600"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></span><p class="text-slate-500">1 year free updates</p></li><li class="flex items-center gap-4"><span class="rounded-full border border-slate-200 bg-slate-50 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-slate-600"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></span><p class="text-slate-500">Life time technical support</p></li></ul></div><div class="mt-12 p-0"><button class="w-full min-w-32 rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"> Buy Now </button></div></div>',
                    1
                  )),
                o[3] ||
                  (o[3] = R(
                    'div',
                    null,
                    [
                      R(
                        'div',
                        { class: 'txt-2xl mb-3 font-bold' },
                        '如何到達？'
                      ),
                      R('div', { class: 'text-center' }, [
                        R('iframe', {
                          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3623542421947!2d121.47821782537727!3d25.05570482780247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8fac6152a05%3A0x3821847e329dcd64!2z5paw5YyX5aSn6YO95pyD5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1710127332403!5m2!1szh-TW!2stw',
                          width: '600',
                          height: '450',
                          style: { border: '0' },
                          allowfullscreen: '',
                          loading: 'lazy',
                          referrerpolicy: 'no-referrer-when-downgrade'
                        })
                      ]),
                      R(
                        'div',
                        { class: 'txt-2xl mb-3 font-bold' },
                        '新北大都會公園'
                      ),
                      R(
                        'div',
                        { class: 'map_p' },
                        '地址:新北市三重區水漾路一段'
                      ),
                      R('div', { class: 'txt-2xl mb-3 font-bold' }, '捷運'),
                      R(
                        'div',
                        { class: 'map_p' },
                        '1.捷運中和線三重站，1出口即可抵達。'
                      ),
                      R(
                        'div',
                        { class: 'map_p' },
                        '2.機場捷運線A2三重站，從1A出口即可抵達'
                      ),
                      R('div', { class: 'txt-2xl mb-3 font-bold' }, '公車'),
                      R(
                        'div',
                        { class: 'map_p' },
                        '1.捷運三重站:62、227區、232、264、640。'
                      ),
                      R(
                        'div',
                        { class: 'map_p' },
                        ' 2.菜寮（重陽路）站:14、227、227區、232、292、292副、621、640、662、803、806、1212、忠孝幹線。 '
                      ),
                      R(
                        'div',
                        { class: 'map_p' },
                        ' 3.菜寮（重新路）站:14、62、111、227、264、292、616、622、636、638、639、801、803、820、857、1209、1803、9102、F301及忠孝幹線。 '
                      ),
                      R('div', { class: 'txt-2xl mb-3 font-bold' }, '微笑單車'),
                      ve(' 捷運三重站(3號出口) '),
                      R(
                        'div',
                        { class: 'txt-2xl mb-3 font-bold' },
                        '停車資訊(附近有多個付費停車場)'
                      ),
                      R(
                        'div',
                        { class: 'map_p' },
                        ' 1.幸褔水漾停車場：新北市三重區重新橋北側自行車道與疏洪十六路交叉口 '
                      ),
                      R(
                        'div',
                        { class: 'map_p' },
                        ' 2.觀光市集北側停車場：新北市三重區重新橋北側/新莊堤外道路及疏洪十六路交叉口 '
                      ),
                      R(
                        'div',
                        { class: 'map_p' },
                        ' 3.觀光市集南側停車場：新北市三重區重新橋南側/新莊堤外道路與疏洪十六路交叉口 '
                      ),
                      R('div', { class: 'txt-2xl mb-3 font-bold' }, '特別聲明'),
                      R('div', { class: 'map_p' }, [
                        ve(
                          ' 1.本活動網頁僅為報名用途，非現場各項活動預約報名。各攤位現場活動體驗因適合年齡及容納人數皆不同，以現場排隊指示為主。'
                        ),
                        R('br'),
                        ve(
                          ' 2.主辦單位保有活動場地、時間、形式異動與解釋之權利，若有更改將另行通知。'
                        ),
                        R('br'),
                        ve(
                          ' 3.參加本活動即同意無償授權主辦單位使用活動期間所拍攝之照片與影片，並運用刊登於主辦單位所發行之包括但不限於平面刊物、網站、部落格、Facebook粉絲專頁及相關社群平台、電子報、EDM等相關之行銷活動規劃。'
                        ),
                        R('br'),
                        ve(
                          ' 4.參與對象以家庭(訂單)為單位，憑報到序號領取乙張闖關卡，若資料有重複者，將以時間序取第一次報名為主。'
                        ),
                        R('br'),
                        ve(
                          ' 5.所有贈品及獎項以實物為準，如遇產品缺貨或其他不可抗力之事由，主辦單位得保留更換等值獎品之權利，不另行告知。'
                        ),
                        R('br'),
                        R('div', { class: 'map_p' }, [
                          R(
                            'div',
                            { class: 'txt-2xl mb-3 font-bold' },
                            '早鳥獎項'
                          ),
                          R(
                            'div',
                            { class: 'map_p' },
                            ' 登記報名並於現場報到完成者，可獲得超值驚喜包一份，依網路報名先後順序取符合資格者，於活動網頁上公告得獎名單。 '
                          ),
                          R(
                            'div',
                            { class: 'txt-2xl mb-3 font-bold' },
                            '領取方式'
                          ),
                          R('div', { class: 'map_p' }, [
                            ve(
                              ' 1.早鳥報名得獎名單將於活動前一周公布在本網頁，敬請密切留意相關資訊。'
                            ),
                            R('br'),
                            ve(
                              ' 2.活動當天攜帶官方發送之報到序號簡訊及身分證明文件報到完成，即可領取福袋禮(報到禮)。'
                            ),
                            R('br'),
                            ve(
                              ' ※若不符合參加資格，主辦單位有權取消得獎資格，獎項不後補，不得異議。'
                            ),
                            R('br')
                          ]),
                          R(
                            'div',
                            { class: 'txt-2xl mb-3 font-bold' },
                            '現場舞台抽獎'
                          ),
                          R('div', { class: 'map_p' }, [
                            ve(
                              ' 1.活動現場將提供：一個家庭(一筆訂單)一張闖關卡，合計2,000張供索取，發完為止。'
                            ),
                            R('br'),
                            ve(
                              ' 2.須依闖關卡指示完成指定任務後，方可將抽獎聯投入摸彩箱，參加舞台抽獎。'
                            ),
                            R('br'),
                            ve(
                              ' 3.所有舞台抽出之獎項皆須本人在場，主持人唱名三次未回覆將取消得獎資格。'
                            ),
                            R('br'),
                            ve(
                              ' 4.若活動當天遇到不可抗力之因素，主辦單位得調整抽獎方式，以現場公告為主。 '
                            )
                          ]),
                          R(
                            'div',
                            { class: 'txt-2xl mb-3 font-bold' },
                            '注意事項'
                          ),
                          R('div', { class: 'map_p' }, [
                            ve(
                              ' 1.參加者於參加活動時，即視同為同意接受本活動規範，若本活動因不可抗力之因素(例如：天候狀況)無法執行時，主辦單位有權決定取消、終止、修改或暫停本活動及相關獎項得獎資格。'
                            ),
                            R('br'),
                            ve(
                              ' 2.早鳥報名名單內若發現資料不全將取消報名資格；若有重覆報名，將以時間序取第一次報名為主。'
                            ),
                            R('br'),
                            ve(' 3.早鳥登記報名後不接受任何理由修改報名資料。'),
                            R('br'),
                            ve(
                              ' 4.抽獎中獎者務必攜帶雙證件影本(或手機清晰拍照檔案)供主辦單位核對身分，若無法驗證身分，將視同放棄領獎資格。'
                            ),
                            R('br'),
                            ve(
                              ' 5.贈品以主辦單位提供實物為準，不得要求更換、指定款式或折換現金。'
                            ),
                            R('br'),
                            ve(
                              ' 6.參加者同意填寫或提出之資料均為真實且正確，未冒用或盜用任何第三人之資料。如有致損害於主辦單位或其他第三人，參加者應負一切相關責任。'
                            ),
                            R('br'),
                            ve(
                              ' 7.為求活動之公平及公正，參加者若以惡意之電腦程式或其他明顯違反活動公平性之方式，意圖混淆或影響活動結果者，一經主辦單位察覺得立即取消參賽者之參賽與得獎資格，並得追回獎品及活動執行單位將保留法律追訴權力。'
                            ),
                            R('br'),
                            ve(
                              ' 8.本活動有任何因電腦、網路、技術或其他不可歸責於主辦單位之事由，而使參與本活動者所登錄之資料有所遺失、錯誤、無法辨識或毀損所導致資料無效之情況，活動小組不負任何法律責任，參加者與得獎者亦不得異議。'
                            ),
                            R('br'),
                            ve(
                              ' 9.本活動相關獎項屬於機會中獎，依中華民國所得稅法及各類所得扣繳率標準規定，機會中獎金額超過新台幣20,000元者，得獎者需先行繳納10%機會中獎所得稅款(不足1元部分，則四捨五入至元)，非中華民國境內居住者，無論金額大小皆需先行繳納20%機會中獎所得稅款，詳細規定，請參閱財政部稅務入口網。無論扣繳與否，均需列入活動得獎人當年度之個人機會中獎所得，並由本公司開立扣繳憑單予活動得獎人，活動得獎人需依規定填寫並繳交相關資料方可領獎。如不願意配合者，則視為自動放棄得獎資格。'
                            ),
                            R('br'),
                            ve(
                              ' 10.中獎者若為未滿20歲之未成年人，須檢附戶口名簿影本、法定代理人身分證正本及影本，並提出法定代理人所簽署之領獎同意書，方可辦理獎項領取。中獎者(或代為領獎之法定代理人)須自行負擔因兌獎所產生之稅金及後續衍生之所有費用(包含領牌、保險等相關程序費用)。'
                            ),
                            R('br'),
                            ve(
                              ' 11.因獎項內容而遭受之任何損失損害(包括但不限於間接或衍生性損失)或任何索賠、債務和任何種類的損害(包含合理的律師費和費用)或人身傷害，主辦單位概不負責。 '
                            )
                          ]),
                          R(
                            'div',
                            { class: 'txt-2xl mb-3 font-bold' },
                            '個資保護聲明'
                          ),
                          R('div', { class: 'map_p' }, [
                            ve(
                              ' 遠見天下文化出版股份有限公司蒐集、處理及利用個人資料告知事項'
                            ),
                            R('br'),
                            ve(
                              ' 遠見天下文化出版股份有限公司為蒐集、處理及利用您的個人資料，提供各項服務，依個人資料保護法規定，明確告知您下列事項，請您詳為閱讀：'
                            ),
                            R('br'),
                            ve(' 一、公司名稱：遠見天下文化出版股份有限公司。'),
                            R('br'),
                            ve(
                              ' 二、蒐集目的：遠見‧天下文化事業群及各委外服務廠商基於客戶管理、統計及調查分析、會員管理、演講活動報名、行銷及其他合於營業登記項目或章程所定業務需要之特定目的。'
                            ),
                            R('br'),
                            ve(
                              ' 三、資料類別：得包括姓名、身分證字號、性別、出生年月日、電話、傳真、Email、地址、學校名稱，或其他得直接或間接識別您個人的資料(詳如網頁的填載欄位)。'
                            ),
                            R('br'),
                            ve(
                              ' 四、利用期間、地區、對象及方式：(1)期間：蒐集目的存續期間或法令規定得為保存的期間。(2)地區：中華民國境內及本公司業務或服務所及的其他地區、利用對象所在的地區。(3)對象：本公司及其關係企業、活動合作夥伴、委外廠商、往來金融機構、政府機關等。(4)方式：電子處理、郵寄、電話、簡訊、傳真及其他為達成蒐集目的之利用方式。'
                            ),
                            R('br'),
                            ve(
                              ' 五、就您的個人資料，您得依個人資料保護法規定，向本公司行使以下權利：(1)查詢或請求閱覽。(2)請求製給複製本。(3)請求補充或更正。(4)請求停止蒐集、處理及利用。(5)請求刪除。但本公司為執行業務有保存或利用該個人資料之必要，或法令另有規定者，不在此限。本公司得請您提供身分證明及為適當的釋明，並得向您酌收閱覽個人資料或製給複製本的必要成本費用。'
                            ),
                            R('br'),
                            ve(
                              ' 六、您得自由選擇是否提供您的個人資料。但若您未提供本公司所需的個人資料，本公司將無法向您提供部分或全部的服務。'
                            ),
                            R('br')
                          ])
                        ])
                      ])
                    ],
                    -1
                  ))
              ])
            ])
          )
        }
      )
    }
  },
  kE = '' + new URL('../img/kv-play.png', import.meta.url).href,
  RE = {}
function LE(t, e) {
  const n = yl('router-link'),
    i = Jo
  return (
    bt(),
    nn('div', null, [
      Pe(i, null, {
        default: tn(() => [
          Pe(
            n,
            { to: '/' },
            {
              default: tn(
                () =>
                  e[0] ||
                  (e[0] = [
                    R('img', { src: kE, alt: '', width: '650' }, null, -1)
                  ])
              ),
              _: 1
            }
          )
        ]),
        _: 1
      }),
      e[1] || (e[1] = R('div', { class: 'container py-10' }, 'Game', -1))
    ])
  )
}
const DE = Qo(RE, [['render', LE]]),
  IE = { class: 'h-[200px] w-full overflow-hidden' },
  zE = ['src', 'alt'],
  NE = { class: 'line-clamp-2 text-start' },
  BE = ['href'],
  $E = {
    __name: 'Swiper',
    props: {
      className: { type: String, default: 'w-full' },
      swiperConfig: { type: Object },
      swiperItems: { type: Array, required: !0 }
    },
    setup(t) {
      const e = t,
        { swiperConfig: n, swiperItems: i } = e,
        r = './img/'
      return (s, o) => (
        bt(),
        Ha(
          _t(V_),
          {
            'slides-per-view': 4,
            'space-between': 20,
            autoplay: { delay: 5e3, disableOnInteraction: !1 },
            pagination: { clickable: !0 },
            modules: [_t(U_), _t(W_)],
            navigation: '',
            loop: ''
          },
          {
            default: tn(() => [
              (bt(!0),
              nn(
                qt,
                null,
                $c(
                  _t(i),
                  (a, l) => (
                    bt(),
                    Ha(
                      _t(H_),
                      { key: l, class: 'flex flex-col gap-3' },
                      {
                        default: tn(() => [
                          R('div', IE, [
                            R(
                              'img',
                              {
                                src: `${_t(r)}${a.src}`,
                                alt: a.title,
                                class: 'h-full w-full object-cover'
                              },
                              null,
                              8,
                              zE
                            )
                          ]),
                          R('div', NE, [
                            R(
                              'a',
                              { href: a.link, target: '_blank' },
                              zi(a.title),
                              9,
                              BE
                            )
                          ])
                        ]),
                        _: 2
                      },
                      1024
                    )
                  )
                ),
                128
              ))
            ]),
            _: 1
          },
          8,
          ['modules']
        )
      )
    }
  },
  FE = '' + new URL('../assets/png/2299.png', import.meta.url).href,
  jE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: FE },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  VE = '' + new URL('../assets/png/899.png', import.meta.url).href,
  HE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: VE },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  GE = '' + new URL('../assets/png/G1.png', import.meta.url).href,
  WE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: GE },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  UE = '' + new URL('../assets/png/MENU1.png', import.meta.url).href,
  qE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: UE },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  YE = '' + new URL('../assets/png/MENU2.png', import.meta.url).href,
  XE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: YE },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  KE = '' + new URL('../assets/png/MENU3.png', import.meta.url).href,
  QE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: KE },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ZE = '' + new URL('../assets/png/MENU4.png', import.meta.url).href,
  JE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ZE },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  eC = '' + new URL('../assets/png/footer-logo.png', import.meta.url).href,
  tC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: eC },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  nC = '' + new URL('../assets/png/gift2.png', import.meta.url).href,
  iC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: nC },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  rC = '' + new URL('../assets/png/gift3.png', import.meta.url).href,
  sC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: rC },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  oC = '' + new URL('../assets/png/login_logo01.png', import.meta.url).href,
  aC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: oC },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  lC = '' + new URL('../assets/png/login_logo02.png', import.meta.url).href,
  cC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: lC },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  uC = '' + new URL('../assets/png/login_logo03.png', import.meta.url).href,
  fC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: uC },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  dC = '' + new URL('../assets/png/logo.png', import.meta.url).href,
  pC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dC },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  hC = { class: 'container mx-auto' },
  gC = { class: 'py-10' },
  mC = {
    __name: 'Knowledge',
    setup(t) {
      Object.fromEntries(
        Object.entries(
          Object.assign({
            '/src/assets/img/2299.png': jE,
            '/src/assets/img/899.png': HE,
            '/src/assets/img/G1.png': WE,
            '/src/assets/img/MENU1.png': qE,
            '/src/assets/img/MENU2.png': XE,
            '/src/assets/img/MENU3.png': QE,
            '/src/assets/img/MENU4.png': JE,
            '/src/assets/img/footer-logo.png': tC,
            '/src/assets/img/gift2.png': iC,
            '/src/assets/img/gift3.png': sC,
            '/src/assets/img/login_logo01.png': aC,
            '/src/assets/img/login_logo02.png': cC,
            '/src/assets/img/login_logo03.png': fC,
            '/src/assets/img/logo.png': pC
          })
        ).map(([n, i]) => [n.split('/').pop().split('.')[0], i.default])
      )
      const e = [
        {
          src: 'activity-01.png',
          title: '不只是我們共創的里程碑，也象徵著「幸福永續」',
          link: '#'
        },
        {
          src: 'fixed-btn-01.png',
          title: '不只是我們共創的里程碑...',
          link: '#'
        }
      ]
      return (n, i) => {
        const r = Jo,
          s = $E
        return (
          bt(),
          nn('div', null, [
            Pe(r),
            R('div', hC, [
              i[0] ||
                (i[0] = R(
                  'div',
                  { class: 'py-10' },
                  [
                    R(
                      'div',
                      {
                        class:
                          'flex flex-col items-center justify-center gap-5 text-2xl'
                      },
                      [
                        R('div', null, '未來親子野餐日陪伴孩子10週年啦！'),
                        R(
                          'div',
                          null,
                          '不只是我們共創的里程碑，也象徵著「幸福永續」'
                        ),
                        R(
                          'div',
                          null,
                          '期待能陪伴孩子，朝著更美好的未來邁進！'
                        ),
                        R('div', null, '更多歡樂、甜蜜的親子時光，'),
                        R('div', null, '就從今年的10歲生日派對開始吧！')
                      ]
                    )
                  ],
                  -1
                )),
              R('div', gC, [Pe(s, { swiperItems: e })])
            ])
          ])
        )
      }
    }
  },
  Lc = '' + new URL('../img/show-01.png', import.meta.url).href,
  _C = {}
function vC(t, e) {
  const n = Jo
  return (
    bt(),
    nn('div', null, [
      Pe(n),
      e[0] ||
        (e[0] = Ls(
          '<div class="container py-10"><div class="flex gap-8"><div class="flex flex-col"><div><img class="w-full" src="' +
            Lc +
            '" alt=""></div><div> 平均年齡只有10歲的「J HALL樂團」成軍3年，是華語樂壇史上最年輕的兒童樂團，將帶來孩子也能搖滾的演唱會，為現場爸爸媽媽與小朋友帶來多首朗朗上口的歌曲，也為野餐日慶生，一起來搖滾Party吧！ </div></div><div class="flex flex-col"><div><img class="w-full" src="' +
            Lc +
            '" alt=""></div><div> 邀請溜溜球大師透過花式技巧演譯力與美！溜溜球項目金氏世界紀錄保持人楊元慶，用一顆溜溜球走遍全世界，期許孩子在熱愛的事情上不需要當最厲害的，而是成為無法取代。精彩演出將開啟藝術表演魔幻旅程！ </div></div><div class="flex flex-col"><div><img class="w-full" src="' +
            Lc +
            '" alt=""></div><div> 故事派對就從探索藝術與關懷環境展開！由天馬戲創作劇團帶來蟲蟲馬戲團表演，森林探險家帶著大家一窺森林的秘密，找尋傳說中的神奇昆蟲並立志要保護美麗的森林，不只是特技，更融入了環保與教育意涵。 </div></div></div><div>舞台時程表</div><div><ol class="relative border-s border-gray-600"><li class="mb-10 ms-4"><div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary-500"></div><time class="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">11:00~11:30</time><h3 class="text-2xl font-semibold text-gray-900"> 活動開始 來寶唱跳秀 </h3><p class="mb-4 text-base font-normal text-gray-500"> 說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字 </p></li></ol></div></div>',
          1
        ))
    ])
  )
}
const bC = Qo(_C, [['render', vC]]),
  yC = [
    { path: '/', component: hE },
    { path: '/gift', component: ME },
    { path: '/game', component: DE },
    { path: '/show', component: bC },
    { path: '/knowledge', component: mC }
  ],
  ta = vx({ history: qw(), routes: yC })
ta.beforeEach((t, e, n) => {
  const { setLoading: i } = Xu()
  i(!0), n()
})
ta.afterEach(() => {
  window.scrollTo({ top: 0 })
  const { setLoading: t } = Xu()
  setTimeout(() => {
    t(!1)
  }, 1e3)
})
const zl = lb(gw),
  wC = zl.component('Loading', km)
let q_
ta.beforeEach((t, e, n) => {
  ;(q_ = setTimeout(() => {
    const i = document.createElement('div')
    ;(i.id = 'global-loading'), document.body.appendChild(i), zl.mount(i, wC)
  }, 0)),
    n()
})
ta.afterEach(() => {
  clearTimeout(q_),
    setTimeout(() => {
      const t = document.getElementById('global-loading')
      t && t.remove()
    }, 500)
})
zl.use(ta)
zl.mount('#app')
