// ../node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d = Array.isArray;
function w(n3, l5) {
  for (var u5 in l5) n3[u5] = l5[u5];
  return n3;
}
function g(n3) {
  n3 && n3.parentNode && n3.parentNode.removeChild(n3);
}
function _(l5, u5, t4) {
  var i5, r4, o4, e4 = {};
  for (o4 in u5) "key" == o4 ? i5 = u5[o4] : "ref" == o4 ? r4 = u5[o4] : e4[o4] = u5[o4];
  if (arguments.length > 2 && (e4.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l5 && null != l5.defaultProps) for (o4 in l5.defaultProps) void 0 === e4[o4] && (e4[o4] = l5.defaultProps[o4]);
  return m(l5, e4, i5, r4, null);
}
function m(n3, t4, i5, r4, o4) {
  var e4 = { type: n3, props: t4, key: i5, ref: r4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o4 ? ++u : o4, __i: -1, __u: 0 };
  return null == o4 && null != l.vnode && l.vnode(e4), e4;
}
function k(n3) {
  return n3.children;
}
function x(n3, l5) {
  this.props = n3, this.context = l5;
}
function S(n3, l5) {
  if (null == l5) return n3.__ ? S(n3.__, n3.__i + 1) : null;
  for (var u5; l5 < n3.__k.length; l5++) if (null != (u5 = n3.__k[l5]) && null != u5.__e) return u5.__e;
  return "function" == typeof n3.type ? S(n3) : null;
}
function C(n3) {
  if (n3.__P && n3.__d) {
    var u5 = n3.__v, t4 = u5.__e, i5 = [], r4 = [], o4 = w({}, u5);
    o4.__v = u5.__v + 1, l.vnode && l.vnode(o4), z(n3.__P, o4, u5, n3.__n, n3.__P.namespaceURI, 32 & u5.__u ? [t4] : null, i5, null == t4 ? S(u5) : t4, !!(32 & u5.__u), r4), o4.__v = u5.__v, o4.__.__k[o4.__i] = o4, V(i5, o4, r4), u5.__e = u5.__ = null, o4.__e != t4 && M(o4);
  }
}
function M(n3) {
  if (null != (n3 = n3.__) && null != n3.__c) return n3.__e = n3.__c.base = null, n3.__k.some(function(l5) {
    if (null != l5 && null != l5.__e) return n3.__e = n3.__c.base = l5.__e;
  }), M(n3);
}
function $(n3) {
  (!n3.__d && (n3.__d = true) && i.push(n3) && !I.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(I);
}
function I() {
  try {
    for (var n3, l5 = 1; i.length; ) i.length > l5 && i.sort(e), n3 = i.shift(), l5 = i.length, C(n3);
  } finally {
    i.length = I.__r = 0;
  }
}
function P(n3, l5, u5, t4, i5, r4, o4, e4, f5, c4, s4) {
  var a4, h5, y5, d5, w5, g4, _4, m4 = t4 && t4.__k || v, b3 = l5.length;
  for (f5 = A(u5, l5, m4, f5, b3), a4 = 0; a4 < b3; a4++) null != (y5 = u5.__k[a4]) && (h5 = -1 != y5.__i && m4[y5.__i] || p, y5.__i = a4, g4 = z(n3, y5, h5, i5, r4, o4, e4, f5, c4, s4), d5 = y5.__e, y5.ref && h5.ref != y5.ref && (h5.ref && D(h5.ref, null, y5), s4.push(y5.ref, y5.__c || d5, y5)), null == w5 && null != d5 && (w5 = d5), (_4 = !!(4 & y5.__u)) || h5.__k === y5.__k ? f5 = H(y5, f5, n3, _4) : "function" == typeof y5.type && void 0 !== g4 ? f5 = g4 : d5 && (f5 = d5.nextSibling), y5.__u &= -7);
  return u5.__e = w5, f5;
}
function A(n3, l5, u5, t4, i5) {
  var r4, o4, e4, f5, c4, s4 = u5.length, a4 = s4, h5 = 0;
  for (n3.__k = new Array(i5), r4 = 0; r4 < i5; r4++) null != (o4 = l5[r4]) && "boolean" != typeof o4 && "function" != typeof o4 ? ("string" == typeof o4 || "number" == typeof o4 || "bigint" == typeof o4 || o4.constructor == String ? o4 = n3.__k[r4] = m(null, o4, null, null, null) : d(o4) ? o4 = n3.__k[r4] = m(k, { children: o4 }, null, null, null) : void 0 === o4.constructor && o4.__b > 0 ? o4 = n3.__k[r4] = m(o4.type, o4.props, o4.key, o4.ref ? o4.ref : null, o4.__v) : n3.__k[r4] = o4, f5 = r4 + h5, o4.__ = n3, o4.__b = n3.__b + 1, e4 = null, -1 != (c4 = o4.__i = T(o4, u5, f5, a4)) && (a4--, (e4 = u5[c4]) && (e4.__u |= 2)), null == e4 || null == e4.__v ? (-1 == c4 && (i5 > s4 ? h5-- : i5 < s4 && h5++), "function" != typeof o4.type && (o4.__u |= 4)) : c4 != f5 && (c4 == f5 - 1 ? h5-- : c4 == f5 + 1 ? h5++ : (c4 > f5 ? h5-- : h5++, o4.__u |= 4))) : n3.__k[r4] = null;
  if (a4) for (r4 = 0; r4 < s4; r4++) null != (e4 = u5[r4]) && 0 == (2 & e4.__u) && (e4.__e == t4 && (t4 = S(e4)), E(e4, e4));
  return t4;
}
function H(n3, l5, u5, t4) {
  var i5, r4;
  if ("function" == typeof n3.type) {
    for (i5 = n3.__k, r4 = 0; i5 && r4 < i5.length; r4++) i5[r4] && (i5[r4].__ = n3, l5 = H(i5[r4], l5, u5, t4));
    return l5;
  }
  n3.__e != l5 && (t4 && (l5 && n3.type && !l5.parentNode && (l5 = S(n3)), u5.insertBefore(n3.__e, l5 || null)), l5 = n3.__e);
  do {
    l5 = l5 && l5.nextSibling;
  } while (null != l5 && 8 == l5.nodeType);
  return l5;
}
function T(n3, l5, u5, t4) {
  var i5, r4, o4, e4 = n3.key, f5 = n3.type, c4 = l5[u5], s4 = null != c4 && 0 == (2 & c4.__u);
  if (null === c4 && null == e4 || s4 && e4 == c4.key && f5 == c4.type) return u5;
  if (t4 > (s4 ? 1 : 0)) {
    for (i5 = u5 - 1, r4 = u5 + 1; i5 >= 0 || r4 < l5.length; ) if (null != (c4 = l5[o4 = i5 >= 0 ? i5-- : r4++]) && 0 == (2 & c4.__u) && e4 == c4.key && f5 == c4.type) return o4;
  }
  return -1;
}
function j(n3, l5, u5) {
  "-" == l5[0] ? n3.setProperty(l5, null == u5 ? "" : u5) : n3[l5] = null == u5 ? "" : "number" != typeof u5 || y.test(l5) ? u5 : u5 + "px";
}
function F(n3, l5, u5, t4, i5) {
  var r4, o4;
  n: if ("style" == l5) if ("string" == typeof u5) n3.style.cssText = u5;
  else {
    if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4) for (l5 in t4) u5 && l5 in u5 || j(n3.style, l5, "");
    if (u5) for (l5 in u5) t4 && u5[l5] == t4[l5] || j(n3.style, l5, u5[l5]);
  }
  else if ("o" == l5[0] && "n" == l5[1]) r4 = l5 != (l5 = l5.replace(f, "$1")), o4 = l5.toLowerCase(), l5 = o4 in n3 || "onFocusOut" == l5 || "onFocusIn" == l5 ? o4.slice(2) : l5.slice(2), n3.l || (n3.l = {}), n3.l[l5 + r4] = u5, u5 ? t4 ? u5.u = t4.u : (u5.u = c, n3.addEventListener(l5, r4 ? a : s, r4)) : n3.removeEventListener(l5, r4 ? a : s, r4);
  else {
    if ("http://www.w3.org/2000/svg" == i5) l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l5 && "height" != l5 && "href" != l5 && "list" != l5 && "form" != l5 && "tabIndex" != l5 && "download" != l5 && "rowSpan" != l5 && "colSpan" != l5 && "role" != l5 && "popover" != l5 && l5 in n3) try {
      n3[l5] = null == u5 ? "" : u5;
      break n;
    } catch (n4) {
    }
    "function" == typeof u5 || (null == u5 || false === u5 && "-" != l5[4] ? n3.removeAttribute(l5) : n3.setAttribute(l5, "popover" == l5 && 1 == u5 ? "" : u5));
  }
}
function O(n3) {
  return function(u5) {
    if (this.l) {
      var t4 = this.l[u5.type + n3];
      if (null == u5.t) u5.t = c++;
      else if (u5.t < t4.u) return;
      return t4(l.event ? l.event(u5) : u5);
    }
  };
}
function z(n3, u5, t4, i5, r4, o4, e4, f5, c4, s4) {
  var a4, h5, p5, y5, _4, m4, b3, S3, C4, M2, $2, I3, A3, H2, L, T4 = u5.type;
  if (void 0 !== u5.constructor) return null;
  128 & t4.__u && (c4 = !!(32 & t4.__u), o4 = [f5 = u5.__e = t4.__e]), (a4 = l.__b) && a4(u5);
  n: if ("function" == typeof T4) try {
    if (S3 = u5.props, C4 = T4.prototype && T4.prototype.render, M2 = (a4 = T4.contextType) && i5[a4.__c], $2 = a4 ? M2 ? M2.props.value : a4.__ : i5, t4.__c ? b3 = (h5 = u5.__c = t4.__c).__ = h5.__E : (C4 ? u5.__c = h5 = new T4(S3, $2) : (u5.__c = h5 = new x(S3, $2), h5.constructor = T4, h5.render = G), M2 && M2.sub(h5), h5.state || (h5.state = {}), h5.__n = i5, p5 = h5.__d = true, h5.__h = [], h5._sb = []), C4 && null == h5.__s && (h5.__s = h5.state), C4 && null != T4.getDerivedStateFromProps && (h5.__s == h5.state && (h5.__s = w({}, h5.__s)), w(h5.__s, T4.getDerivedStateFromProps(S3, h5.__s))), y5 = h5.props, _4 = h5.state, h5.__v = u5, p5) C4 && null == T4.getDerivedStateFromProps && null != h5.componentWillMount && h5.componentWillMount(), C4 && null != h5.componentDidMount && h5.__h.push(h5.componentDidMount);
    else {
      if (C4 && null == T4.getDerivedStateFromProps && S3 !== y5 && null != h5.componentWillReceiveProps && h5.componentWillReceiveProps(S3, $2), u5.__v == t4.__v || !h5.__e && null != h5.shouldComponentUpdate && false === h5.shouldComponentUpdate(S3, h5.__s, $2)) {
        u5.__v != t4.__v && (h5.props = S3, h5.state = h5.__s, h5.__d = false), u5.__e = t4.__e, u5.__k = t4.__k, u5.__k.some(function(n4) {
          n4 && (n4.__ = u5);
        }), v.push.apply(h5.__h, h5._sb), h5._sb = [], h5.__h.length && e4.push(h5);
        break n;
      }
      null != h5.componentWillUpdate && h5.componentWillUpdate(S3, h5.__s, $2), C4 && null != h5.componentDidUpdate && h5.__h.push(function() {
        h5.componentDidUpdate(y5, _4, m4);
      });
    }
    if (h5.context = $2, h5.props = S3, h5.__P = n3, h5.__e = false, I3 = l.__r, A3 = 0, C4) h5.state = h5.__s, h5.__d = false, I3 && I3(u5), a4 = h5.render(h5.props, h5.state, h5.context), v.push.apply(h5.__h, h5._sb), h5._sb = [];
    else do {
      h5.__d = false, I3 && I3(u5), a4 = h5.render(h5.props, h5.state, h5.context), h5.state = h5.__s;
    } while (h5.__d && ++A3 < 25);
    h5.state = h5.__s, null != h5.getChildContext && (i5 = w(w({}, i5), h5.getChildContext())), C4 && !p5 && null != h5.getSnapshotBeforeUpdate && (m4 = h5.getSnapshotBeforeUpdate(y5, _4)), H2 = null != a4 && a4.type === k && null == a4.key ? q(a4.props.children) : a4, f5 = P(n3, d(H2) ? H2 : [H2], u5, t4, i5, r4, o4, e4, f5, c4, s4), h5.base = u5.__e, u5.__u &= -161, h5.__h.length && e4.push(h5), b3 && (h5.__E = h5.__ = null);
  } catch (n4) {
    if (u5.__v = null, c4 || null != o4) if (n4.then) {
      for (u5.__u |= c4 ? 160 : 128; f5 && 8 == f5.nodeType && f5.nextSibling; ) f5 = f5.nextSibling;
      o4[o4.indexOf(f5)] = null, u5.__e = f5;
    } else {
      for (L = o4.length; L--; ) g(o4[L]);
      N(u5);
    }
    else u5.__e = t4.__e, u5.__k = t4.__k, n4.then || N(u5);
    l.__e(n4, u5, t4);
  }
  else null == o4 && u5.__v == t4.__v ? (u5.__k = t4.__k, u5.__e = t4.__e) : f5 = u5.__e = B(t4.__e, u5, t4, i5, r4, o4, e4, c4, s4);
  return (a4 = l.diffed) && a4(u5), 128 & u5.__u ? void 0 : f5;
}
function N(n3) {
  n3 && (n3.__c && (n3.__c.__e = true), n3.__k && n3.__k.some(N));
}
function V(n3, u5, t4) {
  for (var i5 = 0; i5 < t4.length; i5++) D(t4[i5], t4[++i5], t4[++i5]);
  l.__c && l.__c(u5, n3), n3.some(function(u6) {
    try {
      n3 = u6.__h, u6.__h = [], n3.some(function(n4) {
        n4.call(u6);
      });
    } catch (n4) {
      l.__e(n4, u6.__v);
    }
  });
}
function q(n3) {
  return "object" != typeof n3 || null == n3 || n3.__b > 0 ? n3 : d(n3) ? n3.map(q) : w({}, n3);
}
function B(u5, t4, i5, r4, o4, e4, f5, c4, s4) {
  var a4, h5, v4, y5, w5, _4, m4, b3 = i5.props || p, k3 = t4.props, x4 = t4.type;
  if ("svg" == x4 ? o4 = "http://www.w3.org/2000/svg" : "math" == x4 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != e4) {
    for (a4 = 0; a4 < e4.length; a4++) if ((w5 = e4[a4]) && "setAttribute" in w5 == !!x4 && (x4 ? w5.localName == x4 : 3 == w5.nodeType)) {
      u5 = w5, e4[a4] = null;
      break;
    }
  }
  if (null == u5) {
    if (null == x4) return document.createTextNode(k3);
    u5 = document.createElementNS(o4, x4, k3.is && k3), c4 && (l.__m && l.__m(t4, e4), c4 = false), e4 = null;
  }
  if (null == x4) b3 === k3 || c4 && u5.data == k3 || (u5.data = k3);
  else {
    if (e4 = e4 && n.call(u5.childNodes), !c4 && null != e4) for (b3 = {}, a4 = 0; a4 < u5.attributes.length; a4++) b3[(w5 = u5.attributes[a4]).name] = w5.value;
    for (a4 in b3) w5 = b3[a4], "dangerouslySetInnerHTML" == a4 ? v4 = w5 : "children" == a4 || a4 in k3 || "value" == a4 && "defaultValue" in k3 || "checked" == a4 && "defaultChecked" in k3 || F(u5, a4, null, w5, o4);
    for (a4 in k3) w5 = k3[a4], "children" == a4 ? y5 = w5 : "dangerouslySetInnerHTML" == a4 ? h5 = w5 : "value" == a4 ? _4 = w5 : "checked" == a4 ? m4 = w5 : c4 && "function" != typeof w5 || b3[a4] === w5 || F(u5, a4, w5, b3[a4], o4);
    if (h5) c4 || v4 && (h5.__html == v4.__html || h5.__html == u5.innerHTML) || (u5.innerHTML = h5.__html), t4.__k = [];
    else if (v4 && (u5.innerHTML = ""), P("template" == t4.type ? u5.content : u5, d(y5) ? y5 : [y5], t4, i5, r4, "foreignObject" == x4 ? "http://www.w3.org/1999/xhtml" : o4, e4, f5, e4 ? e4[0] : i5.__k && S(i5, 0), c4, s4), null != e4) for (a4 = e4.length; a4--; ) g(e4[a4]);
    c4 || (a4 = "value", "progress" == x4 && null == _4 ? u5.removeAttribute("value") : null != _4 && (_4 !== u5[a4] || "progress" == x4 && !_4 || "option" == x4 && _4 != b3[a4]) && F(u5, a4, _4, b3[a4], o4), a4 = "checked", null != m4 && m4 != u5[a4] && F(u5, a4, m4, b3[a4], o4));
  }
  return u5;
}
function D(n3, u5, t4) {
  try {
    if ("function" == typeof n3) {
      var i5 = "function" == typeof n3.__u;
      i5 && n3.__u(), i5 && null == u5 || (n3.__u = n3(u5));
    } else n3.current = u5;
  } catch (n4) {
    l.__e(n4, t4);
  }
}
function E(n3, u5, t4) {
  var i5, r4;
  if (l.unmount && l.unmount(n3), (i5 = n3.ref) && (i5.current && i5.current != n3.__e || D(i5, null, u5)), null != (i5 = n3.__c)) {
    if (i5.componentWillUnmount) try {
      i5.componentWillUnmount();
    } catch (n4) {
      l.__e(n4, u5);
    }
    i5.base = i5.__P = null;
  }
  if (i5 = n3.__k) for (r4 = 0; r4 < i5.length; r4++) i5[r4] && E(i5[r4], u5, t4 || "function" != typeof n3.type);
  t4 || g(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
}
function G(n3, l5, u5) {
  return this.constructor(n3, u5);
}
function J(u5, t4, i5) {
  var r4, o4, e4, f5;
  t4 == document && (t4 = document.documentElement), l.__ && l.__(u5, t4), o4 = (r4 = "function" == typeof i5) ? null : i5 && i5.__k || t4.__k, e4 = [], f5 = [], z(t4, u5 = (!r4 && i5 || t4).__k = _(k, null, [u5]), o4 || p, p, t4.namespaceURI, !r4 && i5 ? [i5] : o4 ? null : t4.firstChild ? n.call(t4.childNodes) : null, e4, !r4 && i5 ? i5 : o4 ? o4.__e : t4.firstChild, r4, f5), V(e4, u5, f5);
}
n = v.slice, l = { __e: function(n3, l5, u5, t4) {
  for (var i5, r4, o4; l5 = l5.__; ) if ((i5 = l5.__c) && !i5.__) try {
    if ((r4 = i5.constructor) && null != r4.getDerivedStateFromError && (i5.setState(r4.getDerivedStateFromError(n3)), o4 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n3, t4 || {}), o4 = i5.__d), o4) return i5.__E = i5;
  } catch (l6) {
    n3 = l6;
  }
  throw n3;
} }, u = 0, t = function(n3) {
  return null != n3 && void 0 === n3.constructor;
}, x.prototype.setState = function(n3, l5) {
  var u5;
  u5 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n3 && (n3 = n3(w({}, u5), this.props)), n3 && w(u5, n3), null != n3 && this.__v && (l5 && this._sb.push(l5), $(this));
}, x.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), $(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n3, l5) {
  return n3.__v.__b - l5.__v.__b;
}, I.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;

// ../node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var s2 = c2.__;
function p2(n3, t4) {
  c2.__h && c2.__h(r2, n3, o2 || t4), o2 = 0;
  var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n3 >= u5.__.length && u5.__.push({}), u5.__[n3];
}
function d2(n3) {
  return o2 = 1, h2(D2, n3);
}
function h2(n3, u5, i5) {
  var o4 = p2(t2++, 2);
  if (o4.t = n3, !o4.__c && (o4.__ = [i5 ? i5(u5) : D2(void 0, u5), function(n4) {
    var t4 = o4.__N ? o4.__N[0] : o4.__[0], r4 = o4.t(t4, n4);
    t4 !== r4 && (o4.__N = [r4, o4.__[1]], o4.__c.setState({}));
  }], o4.__c = r2, !r2.__f)) {
    var f5 = function(n4, t4, r4) {
      if (!o4.__c.__H) return true;
      var u6 = o4.__c.__H.__.filter(function(n5) {
        return n5.__c;
      });
      if (u6.every(function(n5) {
        return !n5.__N;
      })) return !c4 || c4.call(this, n4, t4, r4);
      var i6 = o4.__c.props !== n4;
      return u6.some(function(n5) {
        if (n5.__N) {
          var t5 = n5.__[0];
          n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i6 = true);
        }
      }), c4 && c4.call(this, n4, t4, r4) || i6;
    };
    r2.__f = true;
    var c4 = r2.shouldComponentUpdate, e4 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n4, t4, r4) {
      if (this.__e) {
        var u6 = c4;
        c4 = void 0, f5(n4, t4, r4), c4 = u6;
      }
      e4 && e4.call(this, n4, t4, r4);
    }, r2.shouldComponentUpdate = f5;
  }
  return o4.__N || o4.__;
}
function y2(n3, u5) {
  var i5 = p2(t2++, 3);
  !c2.__s && C2(i5.__H, u5) && (i5.__ = n3, i5.u = u5, r2.__H.__h.push(i5));
}
function A2(n3) {
  return o2 = 5, T2(function() {
    return { current: n3 };
  }, []);
}
function T2(n3, r4) {
  var u5 = p2(t2++, 7);
  return C2(u5.__H, r4) && (u5.__ = n3(), u5.__H = r4, u5.__h = n3), u5.__;
}
function q2(n3, t4) {
  return o2 = 8, T2(function() {
    return n3;
  }, t4);
}
function j2() {
  for (var n3; n3 = f2.shift(); ) {
    var t4 = n3.__H;
    if (n3.__P && t4) try {
      t4.__h.some(z2), t4.__h.some(B2), t4.__h = [];
    } catch (r4) {
      t4.__h = [], c2.__e(r4, n3.__v);
    }
  }
}
c2.__b = function(n3) {
  r2 = null, e2 && e2(n3);
}, c2.__ = function(n3, t4) {
  n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), s2 && s2(n3, t4);
}, c2.__r = function(n3) {
  a2 && a2(n3), t2 = 0;
  var i5 = (r2 = n3.__c).__H;
  i5 && (u2 === r2 ? (i5.__h = [], r2.__h = [], i5.__.some(function(n4) {
    n4.__N && (n4.__ = n4.__N), n4.u = n4.__N = void 0;
  })) : (i5.__h.some(z2), i5.__h.some(B2), i5.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n3) {
  v2 && v2(n3);
  var t4 = n3.__c;
  t4 && t4.__H && (t4.__H.__h.length && (1 !== f2.push(t4) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t4.__H.__.some(function(n4) {
    n4.u && (n4.__H = n4.u), n4.u = void 0;
  })), u2 = r2 = null;
}, c2.__c = function(n3, t4) {
  t4.some(function(n4) {
    try {
      n4.__h.some(z2), n4.__h = n4.__h.filter(function(n5) {
        return !n5.__ || B2(n5);
      });
    } catch (r4) {
      t4.some(function(n5) {
        n5.__h && (n5.__h = []);
      }), t4 = [], c2.__e(r4, n4.__v);
    }
  }), l2 && l2(n3, t4);
}, c2.unmount = function(n3) {
  m2 && m2(n3);
  var t4, r4 = n3.__c;
  r4 && r4.__H && (r4.__H.__.some(function(n4) {
    try {
      z2(n4);
    } catch (n5) {
      t4 = n5;
    }
  }), r4.__H = void 0, t4 && c2.__e(t4, r4.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n3) {
  var t4, r4 = function() {
    clearTimeout(u5), k2 && cancelAnimationFrame(t4), setTimeout(n3);
  }, u5 = setTimeout(r4, 35);
  k2 && (t4 = requestAnimationFrame(r4));
}
function z2(n3) {
  var t4 = r2, u5 = n3.__c;
  "function" == typeof u5 && (n3.__c = void 0, u5()), r2 = t4;
}
function B2(n3) {
  var t4 = r2;
  n3.__c = n3.__(), r2 = t4;
}
function C2(n3, t4) {
  return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
    return t5 !== n3[r4];
  });
}
function D2(n3, t4) {
  return "function" == typeof t4 ? t4(n3) : t4;
}

// ../node_modules/@preact/signals-core/dist/signals-core.module.js
var i3 = Symbol.for("preact-signals");
function t3() {
  if (!(s3 > 1)) {
    var i5, t4 = false;
    !function() {
      var i6 = c3;
      c3 = void 0;
      while (void 0 !== i6) {
        if (i6.S.v === i6.v) i6.S.i = i6.i;
        i6 = i6.o;
      }
    }();
    while (void 0 !== h3) {
      var n3 = h3;
      h3 = void 0;
      v3++;
      while (void 0 !== n3) {
        var r4 = n3.u;
        n3.u = void 0;
        n3.f &= -3;
        if (!(8 & n3.f) && w3(n3)) try {
          n3.c();
        } catch (n4) {
          if (!t4) {
            i5 = n4;
            t4 = true;
          }
        }
        n3 = r4;
      }
    }
    v3 = 0;
    s3--;
    if (t4) throw i5;
  } else s3--;
}
function n2(i5) {
  if (s3 > 0) return i5();
  e3 = ++u3;
  s3++;
  try {
    return i5();
  } finally {
    t3();
  }
}
var r3 = void 0;
function o3(i5) {
  var t4 = r3;
  r3 = void 0;
  try {
    return i5();
  } finally {
    r3 = t4;
  }
}
var f3;
var h3 = void 0;
var s3 = 0;
var v3 = 0;
var u3 = 0;
var e3 = 0;
var c3 = void 0;
var d3 = 0;
function a3(i5) {
  if (void 0 !== r3) {
    var t4 = i5.n;
    if (void 0 === t4 || t4.t !== r3) {
      t4 = { i: 0, S: i5, p: r3.s, n: void 0, t: r3, e: void 0, x: void 0, r: t4 };
      if (void 0 !== r3.s) r3.s.n = t4;
      r3.s = t4;
      i5.n = t4;
      if (32 & r3.f) i5.S(t4);
      return t4;
    } else if (-1 === t4.i) {
      t4.i = 0;
      if (void 0 !== t4.n) {
        t4.n.p = t4.p;
        if (void 0 !== t4.p) t4.p.n = t4.n;
        t4.p = r3.s;
        t4.n = void 0;
        r3.s.n = t4;
        r3.s = t4;
      }
      return t4;
    }
  }
}
function l3(i5, t4) {
  this.v = i5;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
  this.l = 0;
  this.W = null == t4 ? void 0 : t4.watched;
  this.Z = null == t4 ? void 0 : t4.unwatched;
  this.name = null == t4 ? void 0 : t4.name;
}
l3.prototype.brand = i3;
l3.prototype.h = function() {
  return true;
};
l3.prototype.S = function(i5) {
  var t4 = this, n3 = this.t;
  if (n3 !== i5 && void 0 === i5.e) {
    i5.x = n3;
    this.t = i5;
    if (void 0 !== n3) n3.e = i5;
    else o3(function() {
      var i6;
      null == (i6 = t4.W) || i6.call(t4);
    });
  }
};
l3.prototype.U = function(i5) {
  var t4 = this;
  if (void 0 !== this.t) {
    var n3 = i5.e, r4 = i5.x;
    if (void 0 !== n3) {
      n3.x = r4;
      i5.e = void 0;
    }
    if (void 0 !== r4) {
      r4.e = n3;
      i5.x = void 0;
    }
    if (i5 === this.t) {
      this.t = r4;
      if (void 0 === r4) o3(function() {
        var i6;
        null == (i6 = t4.Z) || i6.call(t4);
      });
    }
  }
};
l3.prototype.subscribe = function(i5) {
  var t4 = this;
  return j3(function() {
    var n3 = t4.value, o4 = r3;
    r3 = void 0;
    try {
      i5(n3);
    } finally {
      r3 = o4;
    }
  }, { name: "sub" });
};
l3.prototype.valueOf = function() {
  return this.value;
};
l3.prototype.toString = function() {
  return this.value + "";
};
l3.prototype.toJSON = function() {
  return this.value;
};
l3.prototype.peek = function() {
  var i5 = r3;
  r3 = void 0;
  try {
    return this.value;
  } finally {
    r3 = i5;
  }
};
Object.defineProperty(l3.prototype, "value", { get: function() {
  var i5 = a3(this);
  if (void 0 !== i5) i5.i = this.i;
  return this.v;
}, set: function(i5) {
  if (i5 !== this.v) {
    if (v3 > 100) throw new Error("Cycle detected");
    !function(i6) {
      if (0 !== s3 && 0 === v3) {
        if (i6.l !== e3) {
          i6.l = e3;
          c3 = { S: i6, v: i6.v, i: i6.i, o: c3 };
        }
      }
    }(this);
    this.v = i5;
    this.i++;
    d3++;
    s3++;
    try {
      for (var n3 = this.t; void 0 !== n3; n3 = n3.x) n3.t.N();
    } finally {
      t3();
    }
  }
} });
function y3(i5, t4) {
  return new l3(i5, t4);
}
function w3(i5) {
  for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i) return true;
  return false;
}
function _2(i5) {
  for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) {
    var n3 = t4.S.n;
    if (void 0 !== n3) t4.r = n3;
    t4.S.n = t4;
    t4.i = -1;
    if (void 0 === t4.n) {
      i5.s = t4;
      break;
    }
  }
}
function b(i5) {
  var t4 = i5.s, n3 = void 0;
  while (void 0 !== t4) {
    var r4 = t4.p;
    if (-1 === t4.i) {
      t4.S.U(t4);
      if (void 0 !== r4) r4.n = t4.n;
      if (void 0 !== t4.n) t4.n.p = r4;
    } else n3 = t4;
    t4.S.n = t4.r;
    if (void 0 !== t4.r) t4.r = void 0;
    t4 = r4;
  }
  i5.s = n3;
}
function p3(i5, t4) {
  l3.call(this, void 0);
  this.x = i5;
  this.s = void 0;
  this.g = d3 - 1;
  this.f = 4;
  this.W = null == t4 ? void 0 : t4.watched;
  this.Z = null == t4 ? void 0 : t4.unwatched;
  this.name = null == t4 ? void 0 : t4.name;
}
p3.prototype = new l3();
p3.prototype.h = function() {
  this.f &= -3;
  if (1 & this.f) return false;
  if (32 == (36 & this.f)) return true;
  this.f &= -5;
  if (this.g === d3) return true;
  this.g = d3;
  this.f |= 1;
  if (this.i > 0 && !w3(this)) {
    this.f &= -2;
    return true;
  }
  var i5 = r3;
  try {
    _2(this);
    r3 = this;
    var t4 = this.x();
    if (16 & this.f || this.v !== t4 || 0 === this.i) {
      this.v = t4;
      this.f &= -17;
      this.i++;
    }
  } catch (i6) {
    this.v = i6;
    this.f |= 16;
    this.i++;
  }
  r3 = i5;
  b(this);
  this.f &= -2;
  return true;
};
p3.prototype.S = function(i5) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t4 = this.s; void 0 !== t4; t4 = t4.n) t4.S.S(t4);
  }
  l3.prototype.S.call(this, i5);
};
p3.prototype.U = function(i5) {
  if (void 0 !== this.t) {
    l3.prototype.U.call(this, i5);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t4 = this.s; void 0 !== t4; t4 = t4.n) t4.S.U(t4);
    }
  }
};
p3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i5 = this.t; void 0 !== i5; i5 = i5.x) i5.t.N();
  }
};
Object.defineProperty(p3.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var i5 = a3(this);
  this.h();
  if (void 0 !== i5) i5.i = this.i;
  if (16 & this.f) throw this.v;
  return this.v;
} });
function g2(i5, t4) {
  return new p3(i5, t4);
}
function S2(i5) {
  var n3 = i5.m;
  i5.m = void 0;
  if ("function" == typeof n3) {
    s3++;
    var o4 = r3;
    r3 = void 0;
    try {
      n3();
    } catch (t4) {
      i5.f &= -2;
      i5.f |= 8;
      m3(i5);
      throw t4;
    } finally {
      r3 = o4;
      t3();
    }
  }
}
function m3(i5) {
  for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) t4.S.U(t4);
  i5.x = void 0;
  i5.s = void 0;
  S2(i5);
}
function x2(i5) {
  if (r3 !== this) throw new Error("Out-of-order effect");
  b(this);
  r3 = i5;
  this.f &= -2;
  if (8 & this.f) m3(this);
  t3();
}
function E2(i5, t4) {
  this.x = i5;
  this.m = void 0;
  this.s = void 0;
  this.u = void 0;
  this.f = 32;
  this.name = null == t4 ? void 0 : t4.name;
  if (f3) f3.push(this);
}
E2.prototype.c = function() {
  var i5 = this.S();
  try {
    if (8 & this.f) return;
    if (void 0 === this.x) return;
    var t4 = this.x();
    if ("function" == typeof t4) this.m = t4;
  } finally {
    i5();
  }
};
E2.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1;
  this.f &= -9;
  S2(this);
  _2(this);
  s3++;
  var i5 = r3;
  r3 = this;
  return x2.bind(this, i5);
};
E2.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.u = h3;
    h3 = this;
  }
};
E2.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f)) m3(this);
};
E2.prototype.dispose = function() {
  this.d();
};
function j3(i5, t4) {
  var n3 = new E2(i5, t4);
  try {
    n3.c();
  } catch (i6) {
    n3.d();
    throw i6;
  }
  var r4 = n3.d.bind(n3);
  r4[Symbol.dispose] = r4;
  return r4;
}

// ../node_modules/@preact/signals/dist/signals.module.js
var l4;
var d4;
var h4;
var p4 = "undefined" != typeof window && !!window.__PREACT_SIGNALS_DEVTOOLS__;
var _3 = [];
j3(function() {
  l4 = this.N;
})();
function g3(i5, r4) {
  l[i5] = r4.bind(null, l[i5] || function() {
  });
}
function b2(i5) {
  if (h4) {
    var n3 = h4;
    h4 = void 0;
    n3();
  }
  h4 = i5 && i5.S();
}
function y4(i5) {
  var n3 = this, t4 = i5.data, e4 = useSignal(t4);
  e4.value = t4;
  var f5 = T2(function() {
    var i6 = n3, t5 = n3.__v;
    while (t5 = t5.__) if (t5.__c) {
      t5.__c.__$f |= 4;
      break;
    }
    var o4 = g2(function() {
      var i7 = e4.value.value;
      return 0 === i7 ? 0 : true === i7 ? "" : i7 || "";
    }), f6 = g2(function() {
      return !Array.isArray(o4.value) && !t(o4.value);
    }), a5 = j3(function() {
      this.N = F2;
      if (f6.value) {
        var n4 = o4.value;
        if (i6.__v && i6.__v.__e && 3 === i6.__v.__e.nodeType) i6.__v.__e.data = n4;
      }
    }), v5 = n3.__$u.d;
    n3.__$u.d = function() {
      a5();
      v5.call(this);
    };
    return [f6, o4];
  }, []), a4 = f5[0], v4 = f5[1];
  return a4.value ? v4.peek() : v4.value;
}
y4.displayName = "ReactiveTextNode";
Object.defineProperties(l3.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: y4 }, props: { configurable: true, get: function() {
  var i5 = this;
  return { data: { get value() {
    return i5.value;
  } } };
} }, __b: { configurable: true, value: 1 } });
g3("__b", function(i5, n3) {
  if ("string" == typeof n3.type) {
    var r4, t4 = n3.props;
    for (var o4 in t4) if ("children" !== o4) {
      var e4 = t4[o4];
      if (e4 instanceof l3) {
        if (!r4) n3.__np = r4 = {};
        r4[o4] = e4;
        t4[o4] = e4.peek();
      }
    }
  }
  i5(n3);
});
g3("__r", function(i5, n3) {
  i5(n3);
  if (n3.type !== k) {
    b2();
    var r4, o4 = n3.__c;
    if (o4) {
      o4.__$f &= -2;
      if (void 0 === (r4 = o4.__$u)) o4.__$u = r4 = function(i6, n4) {
        var r5;
        j3(function() {
          r5 = this;
        }, { name: n4 });
        r5.c = i6;
        return r5;
      }(function() {
        var i6;
        if (p4) null == (i6 = r4.y) || i6.call(r4);
        o4.__$f |= 1;
        o4.setState({});
      }, "function" == typeof n3.type ? n3.type.displayName || n3.type.name : "");
    }
    d4 = o4;
    b2(r4);
  }
});
g3("__e", function(i5, n3, r4, t4) {
  b2();
  d4 = void 0;
  i5(n3, r4, t4);
});
g3("diffed", function(i5, n3) {
  b2();
  d4 = void 0;
  var r4;
  if ("string" == typeof n3.type && (r4 = n3.__e)) {
    var t4 = n3.__np, o4 = n3.props;
    if (t4) {
      var e4 = r4.U;
      if (e4) for (var f5 in e4) {
        var u5 = e4[f5];
        if (void 0 !== u5 && !(f5 in t4)) {
          u5.d();
          e4[f5] = void 0;
        }
      }
      else {
        e4 = {};
        r4.U = e4;
      }
      for (var a4 in t4) {
        var c4 = e4[a4], v4 = t4[a4];
        if (void 0 === c4) {
          c4 = w4(r4, a4, v4);
          e4[a4] = c4;
        } else c4.o(v4, o4);
      }
      for (var s4 in t4) o4[s4] = t4[s4];
    }
  }
  i5(n3);
});
function w4(i5, n3, r4, t4) {
  var o4 = n3 in i5 && void 0 === i5.ownerSVGElement, e4 = y3(r4), f5 = r4.peek();
  return { o: function(i6, n4) {
    e4.value = i6;
    f5 = i6.peek();
  }, d: j3(function() {
    this.N = F2;
    var r5 = e4.value.value;
    if (f5 !== r5) {
      f5 = void 0;
      if (o4) i5[n3] = r5;
      else if (null != r5 && (false !== r5 || "-" === n3[4])) i5.setAttribute(n3, r5);
      else i5.removeAttribute(n3);
    } else f5 = void 0;
  }) };
}
g3("unmount", function(i5, n3) {
  if ("string" == typeof n3.type) {
    var r4 = n3.__e;
    if (r4) {
      var t4 = r4.U;
      if (t4) {
        r4.U = void 0;
        for (var o4 in t4) {
          var e4 = t4[o4];
          if (e4) e4.d();
        }
      }
    }
    n3.__np = void 0;
  } else {
    var f5 = n3.__c;
    if (f5) {
      var u5 = f5.__$u;
      if (u5) {
        f5.__$u = void 0;
        u5.d();
      }
    }
  }
  i5(n3);
});
g3("__h", function(i5, n3, r4, t4) {
  if (t4 < 3 || 9 === t4) n3.__$f |= 2;
  i5(n3, r4, t4);
});
x.prototype.shouldComponentUpdate = function(i5, n3) {
  if (this.__R) return true;
  var r4 = this.__$u, t4 = r4 && void 0 !== r4.s;
  for (var o4 in n3) return true;
  if (this.__f || "boolean" == typeof this.u && true === this.u) {
    var e4 = 2 & this.__$f;
    if (!(t4 || e4 || 4 & this.__$f)) return true;
    if (1 & this.__$f) return true;
  } else {
    if (!(t4 || 4 & this.__$f)) return true;
    if (3 & this.__$f) return true;
  }
  for (var f5 in i5) if ("__source" !== f5 && i5[f5] !== this.props[f5]) return true;
  for (var u5 in this.props) if (!(u5 in i5)) return true;
  return false;
};
function useSignal(i5, n3) {
  return T2(function() {
    return y3(i5, n3);
  }, []);
}
var q3 = function(i5) {
  queueMicrotask(function() {
    queueMicrotask(i5);
  });
};
function x3() {
  n2(function() {
    var i5;
    while (i5 = _3.shift()) l4.call(i5);
  });
}
function F2() {
  if (1 === _3.push(this)) (l.requestAnimationFrame || q3)(x3);
}

// ../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f4 = 0;
var i4 = Array.isArray;
function u4(e4, t4, n3, o4, i5, u5) {
  t4 || (t4 = {});
  var a4, c4, p5 = t4;
  if ("ref" in p5) for (c4 in p5 = {}, t4) "ref" == c4 ? a4 = t4[c4] : p5[c4] = t4[c4];
  var l5 = { type: e4, props: p5, key: n3, ref: a4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f4, __i: -1, __u: 0, __source: i5, __self: u5 };
  if ("function" == typeof e4 && (a4 = e4.defaultProps)) for (c4 in a4) void 0 === p5[c4] && (p5[c4] = a4[c4]);
  return l.vnode && l.vnode(l5), l5;
}

// src/icons.jsx
var I2 = (props, paths) => /* @__PURE__ */ u4(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size || 20,
    height: props.size || 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    ...props,
    children: paths
  }
);
var Eye = (p5) => I2(p5, /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }),
  /* @__PURE__ */ u4("circle", { cx: "12", cy: "12", r: "3" })
] }));
var Grid = (p5) => I2(p5, /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }),
  /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }),
  /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }),
  /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" })
] }));
var Heading = (p5) => I2(p5, /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("path", { d: "M6 12h12" }),
  /* @__PURE__ */ u4("path", { d: "M6 20V4" }),
  /* @__PURE__ */ u4("path", { d: "M18 20V4" })
] }));
var AlignLeft = (p5) => I2(p5, /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("path", { d: "M17 6.1H3" }),
  /* @__PURE__ */ u4("path", { d: "M21 12.1H3" }),
  /* @__PURE__ */ u4("path", { d: "M15.1 18H3" })
] }));
var Image = (p5) => I2(p5, /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }),
  /* @__PURE__ */ u4("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ u4("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
] }));
var List = (p5) => I2(p5, /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("line", { x1: "8", x2: "21", y1: "6", y2: "6" }),
  /* @__PURE__ */ u4("line", { x1: "8", x2: "21", y1: "12", y2: "12" }),
  /* @__PURE__ */ u4("line", { x1: "8", x2: "21", y1: "18", y2: "18" }),
  /* @__PURE__ */ u4("line", { x1: "3", x2: "3.01", y1: "6", y2: "6" }),
  /* @__PURE__ */ u4("line", { x1: "3", x2: "3.01", y1: "12", y2: "12" }),
  /* @__PURE__ */ u4("line", { x1: "3", x2: "3.01", y1: "18", y2: "18" })
] }));
var ClipboardList = (p5) => I2(p5, /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }),
  /* @__PURE__ */ u4("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
  /* @__PURE__ */ u4("path", { d: "M12 11h4" }),
  /* @__PURE__ */ u4("path", { d: "M12 16h4" }),
  /* @__PURE__ */ u4("path", { d: "M8 11h.01" }),
  /* @__PURE__ */ u4("path", { d: "M8 16h.01" })
] }));
var Timer = (p5) => I2(p5, /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("line", { x1: "10", x2: "14", y1: "2", y2: "2" }),
  /* @__PURE__ */ u4("line", { x1: "12", x2: "15", y1: "14", y2: "11" }),
  /* @__PURE__ */ u4("circle", { cx: "12", cy: "14", r: "8" })
] }));
var MousePointerClick = (p5) => I2(p5, /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("rect", { width: "18", height: "10", x: "3", y: "7", rx: "5" }),
  /* @__PURE__ */ u4("path", { d: "M7 12h10" })
] }));

// src/state.js
var saveStatus = y3("saved");
var history = y3([]);
var MAX_HISTORY = 100;
function pushHistory(action = "") {
  const snapshot = JSON.stringify(rows.value);
  const list = [...history.value];
  list.push({ timestamp: Date.now(), snapshot, action, pinned: false });
  while (list.length > MAX_HISTORY) {
    const idx = list.findIndex((e4) => !e4.pinned);
    if (idx === -1) break;
    list.splice(idx, 1);
  }
  history.value = list;
}
function togglePin(index) {
  history.value = history.value.map(
    (entry, i5) => i5 === index ? { ...entry, pinned: !entry.pinned } : entry
  );
  debouncedSave();
}
function autoSave() {
  const { ajaxUrl, nonce, postId } = window.nomentor;
  const data = JSON.stringify(rows.value);
  const historyData = JSON.stringify(history.value);
  saveStatus.value = "saving";
  const body = new URLSearchParams({
    action: "nomentor_save",
    nonce,
    post_id: postId,
    data: btoa(unescape(encodeURIComponent(data))),
    page_history: btoa(unescape(encodeURIComponent(historyData)))
  });
  fetch(ajaxUrl, { method: "POST", body }).then((r4) => r4.json()).then((r4) => {
    saveStatus.value = r4.success ? "saved" : "error";
  }).catch(() => {
    saveStatus.value = "error";
  });
}
function loadHistory(entries) {
  if (Array.isArray(entries)) history.value = entries;
}
var saveTimer = null;
function debouncedSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(autoSave, 800);
}
var previewIndex = y3(null);
var _liveSnapshot = null;
function previewVersion(index) {
  const entry = history.value[index];
  if (!entry) return;
  try {
    if (previewIndex.value === null) {
      _liveSnapshot = JSON.stringify(rows.value);
    }
    rows.value = JSON.parse(entry.snapshot);
    previewIndex.value = index;
  } catch (e4) {
    console.error("Preview error:", e4);
  }
}
function exitPreview() {
  if (_liveSnapshot !== null) {
    try {
      rows.value = JSON.parse(_liveSnapshot);
    } catch {
    }
    _liveSnapshot = null;
  }
  previewIndex.value = null;
}
function revertToVersion(index) {
  const entry = history.value[index];
  if (!entry) return;
  try {
    clearTimeout(saveTimer);
    rows.value = JSON.parse(entry.snapshot);
    _liveSnapshot = null;
    previewIndex.value = null;
    pushHistory("Reverted to version " + (index + 1));
    autoSave();
  } catch {
  }
}
var sidebarMode = y3("toolbox");
var leftSidebarOpen = y3(true);
var rightSidebarOpen = y3(true);
var viewportMode = y3("desktop");
var DEFAULT_SIZES = { xs: 0.75, sm: 0.875, base: 1, lg: 1.125, xl: 1.25, "2xl": 1.5, "3xl": 1.875, "4xl": 2.25 };
var DEFAULT_HEADING_SIZES = { h1: 2.5, h2: 2, h3: 1.75, h4: 1.5, h5: 1.25, h6: 1 };
var DEFAULT_DESKTOP = { base: 16, fontFamily: "", sizes: { ...DEFAULT_SIZES }, headingSizes: { ...DEFAULT_HEADING_SIZES } };
var globalSettings = y3(window.nomentor?.globalSettings || {});
var pageSettings = y3(null);
var _loadedFonts = /* @__PURE__ */ new Set();
function loadGoogleFontCSS(family) {
  if (!family || family.includes(",") || _loadedFonts.has(family) || typeof document === "undefined") return;
  _loadedFonts.add(family);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@300;400;500;600;700&display=swap`;
  document.head.appendChild(link);
}
if (typeof document !== "undefined") {
  const gs = window.nomentor?.globalSettings || {};
  for (const vp of ["desktop", "tablet", "mobile"]) {
    loadGoogleFontCSS(gs[vp]?.fontFamily);
  }
}
function loadPageSettings(settings) {
  pageSettings.value = settings || null;
  if (settings) {
    for (const vp of ["desktop", "tablet", "mobile"]) {
      loadGoogleFontCSS(settings[vp]?.fontFamily);
    }
  }
}
function getEffectiveSettings(viewport) {
  const g4 = globalSettings.value;
  const p5 = pageSettings.value;
  const vpChain = viewport === "desktop" ? ["desktop"] : viewport === "tablet" ? ["desktop", "tablet"] : ["desktop", "tablet", "mobile"];
  function resolve(key, fallback) {
    for (let i5 = vpChain.length - 1; i5 >= 0; i5--) {
      if (p5?.[vpChain[i5]]?.[key] != null) return p5[vpChain[i5]][key];
    }
    for (let i5 = vpChain.length - 1; i5 >= 0; i5--) {
      if (g4[vpChain[i5]]?.[key] != null) return g4[vpChain[i5]][key];
    }
    return fallback;
  }
  const sizes = { ...DEFAULT_SIZES };
  for (const vp of vpChain) Object.assign(sizes, g4[vp]?.sizes || {});
  for (const vp of vpChain) Object.assign(sizes, p5?.[vp]?.sizes || {});
  const headingSizes = { ...DEFAULT_HEADING_SIZES };
  for (const vp of vpChain) Object.assign(headingSizes, g4[vp]?.headingSizes || {});
  for (const vp of vpChain) Object.assign(headingSizes, p5?.[vp]?.headingSizes || {});
  return {
    base: resolve("base", DEFAULT_DESKTOP.base),
    fontFamily: resolve("fontFamily", DEFAULT_DESKTOP.fontFamily),
    sizes,
    headingSizes
  };
}
function getHeadingSizeMap(viewport) {
  const { headingSizes } = getEffectiveSettings(viewport);
  const map = {};
  for (const [key, em] of Object.entries(headingSizes)) {
    map[key] = em + "em";
  }
  return map;
}
function hasExplicitValue(settingsObj, viewport, key) {
  return settingsObj?.[viewport]?.[key] != null;
}
function hasExplicitSize(settingsObj, viewport, sizeKey) {
  return settingsObj?.[viewport]?.sizes?.[sizeKey] != null;
}
function getEffectiveDirection() {
  return pageSettings.value?.direction || globalSettings.value.direction || "rtl";
}
function getEffectiveColors() {
  const g4 = globalSettings.value.colors || [];
  const p5 = pageSettings.value?.colors;
  if (!p5) return g4;
  const merged = [...g4];
  for (const pc of p5) {
    const idx = merged.findIndex((c4) => c4.name === pc.name);
    if (idx >= 0) merged[idx] = pc;
    else merged.push(pc);
  }
  return merged;
}
function getSizeMap(viewport) {
  const { sizes } = getEffectiveSettings(viewport);
  const map = {};
  for (const [key, em] of Object.entries(sizes)) {
    map[key] = em + "em";
  }
  return map;
}
function saveGlobalSettings(settings) {
  globalSettings.value = settings;
  const { ajaxUrl, nonce } = window.nomentor;
  fetch(ajaxUrl, {
    method: "POST",
    body: new URLSearchParams({ action: "nomentor_save_global_settings", nonce, settings: JSON.stringify(settings) })
  });
}
function savePageSettings(settings) {
  pageSettings.value = settings;
  const { ajaxUrl, nonce, postId } = window.nomentor;
  fetch(ajaxUrl, {
    method: "POST",
    body: new URLSearchParams({ action: "nomentor_save_page_settings", nonce, post_id: postId, settings: JSON.stringify(settings) })
  });
}
var pageTitle = y3(window.nomentor?.title || "");
function renamePost(newTitle) {
  const clean = newTitle.replace(/<[^>]*>/g, "").trim();
  if (!clean) return;
  pageTitle.value = clean;
  window.nomentor.title = clean;
  const { ajaxUrl, nonce, postId } = window.nomentor;
  fetch(ajaxUrl, {
    method: "POST",
    body: new URLSearchParams({ action: "nomentor_rename", nonce, post_id: postId, title: clean })
  });
}
var rows = y3([]);
var selectedId = y3(null);
var _nextId = 1;
function nextId(prefix = "el") {
  return prefix + "-" + _nextId++;
}
function syncIdCounter(rowList) {
  let max = 0;
  function scan(items) {
    if (!items) return;
    for (const item of items) {
      const num = parseInt((item.id || "").split("-").pop());
      if (num > max) max = num;
      if (item.elements) scan(item.elements);
      if (item.children) scan(item.children);
    }
  }
  scan(rowList);
  if (max >= _nextId) _nextId = max + 1;
}
function defaultProps(type) {
  switch (type) {
    case "heading":
      return { text: "Heading", level: "h2" };
    case "text":
      return { text: "Type your text here..." };
    case "image":
      return { src: "", alt: "" };
    case "grid":
      return { columns: 2 };
    case "button":
      return { text: "Click me", url: "", newTab: false, bgColor: "#4a90d9", color: "#ffffff", borderRadius: "6", fontSize: "base" };
    case "form":
      return {
        fields: [
          { id: "f1", type: "text", label: "Full Name", placeholder: "", required: true, validation: "none", name: "name" },
          { id: "f2", type: "text", label: "Email", placeholder: "", required: true, validation: "email", name: "email" }
        ]
      };
    case "list":
      return {
        listType: "ul",
        items: [{ id: "li1", text: "Item 1" }, { id: "li2", text: "Item 2" }, { id: "li3", text: "Item 3" }],
        icon: "",
        iconColor: "",
        fontSize: "base",
        fontWeight: "400",
        itemPadding: "8px 12px",
        itemBgColor: "",
        itemRadius: "0",
        itemGap: "4"
      };
    case "timer":
      return { targetDate: "", timezone: "Asia/Jerusalem", bgColor: "#eef2f7", color: "#1a2744", labelDays: "\u05D9\u05DE\u05D9\u05DD", labelHours: "\u05E9\u05E2\u05D5\u05EA", labelMinutes: "\u05D3\u05E7\u05D5\u05EA", labelSeconds: "\u05E9\u05E0\u05D9\u05D5\u05EA", expiredText: "\u05D4\u05D6\u05DE\u05DF \u05E0\u05D2\u05DE\u05E8!" };
    default:
      return {};
  }
}
function createElement(type) {
  const el = { id: nextId(), type, props: defaultProps(type) };
  if (type === "grid") {
    el.children = Array.from({ length: 2 }, () => ({
      id: nextId("cell"),
      elements: []
    }));
  }
  if (type === "form") {
    el.children = [
      { id: nextId("form-before"), elements: [], slot: "before" },
      { id: nextId("form-after"), elements: [], slot: "after" }
    ];
  }
  return el;
}
function deepFilterElement(elements, elementId) {
  return elements.filter((el) => el.id !== elementId).map((el) => {
    if (!el.children) return el;
    return { ...el, children: el.children.map((cell) => ({ ...cell, elements: deepFilterElement(cell.elements, elementId) })) };
  });
}
function deepMapElement(elements, elementId, fn) {
  return elements.map((el) => {
    if (el.id === elementId) return fn(el);
    if (!el.children) return el;
    return { ...el, children: el.children.map((cell) => ({ ...cell, elements: deepMapElement(cell.elements, elementId, fn) })) };
  });
}
function deepMapCell(elements, cellId, fn) {
  return elements.map((el) => {
    if (!el.children) return el;
    let found = false;
    const newChildren = el.children.map((cell) => {
      if (cell.id === cellId) {
        found = true;
        return fn(cell);
      }
      return cell;
    });
    if (found) return { ...el, children: newChildren };
    return { ...el, children: el.children.map((cell) => ({ ...cell, elements: deepMapCell(cell.elements, cellId, fn) })) };
  });
}
function findInElements(elements, elementId) {
  for (const el of elements) {
    if (el.id === elementId) return el;
    if (el.children) {
      for (const cell of el.children) {
        const found = findInElements(cell.elements, elementId);
        if (found) return found;
      }
    }
  }
  return null;
}
function findElementById(elementId) {
  for (const row of rows.value) {
    const found = findInElements(row.elements, elementId);
    if (found) return found;
  }
  return null;
}
function findCellInElements(elements, cellId) {
  for (const el of elements) {
    if (el.children) {
      for (const cell of el.children) {
        if (cell.id === cellId) return cell;
        const found = findCellInElements(cell.elements, cellId);
        if (found) return found;
      }
    }
  }
  return null;
}
function findCellById(cellId) {
  for (const row of rows.value) {
    const found = findCellInElements(row.elements, cellId);
    if (found) return found;
  }
  return null;
}
function updateCellProps(cellId, props) {
  rows.value = rows.value.map((row) => ({
    ...row,
    elements: deepMapCell(row.elements, cellId, (cell) => ({
      ...cell,
      props: { ...cell.props || {}, ...props }
    }))
  }));
}
function updateRowProps(rowId, props) {
  rows.value = rows.value.map((row) => {
    if (row.id !== rowId) return row;
    return { ...row, props: { ...row.props || {}, ...props } };
  });
}
function addRow(beforeRowId = null) {
  const row = { id: nextId("row"), elements: [], props: {} };
  const list = [...rows.value];
  if (beforeRowId) {
    const idx = list.findIndex((r4) => r4.id === beforeRowId);
    if (idx >= 0) list.splice(idx, 0, row);
    else list.push(row);
  } else {
    list.push(row);
  }
  rows.value = list;
  return row.id;
}
function removeRow(rowId) {
  rows.value = rows.value.filter((r4) => r4.id !== rowId);
  if (selectedId.value === rowId) selectedId.value = null;
}
function reorderRow(rowId, beforeRowId) {
  const list = JSON.parse(JSON.stringify(rows.value));
  const idx = list.findIndex((r4) => r4.id === rowId);
  if (idx < 0) return;
  const [row] = list.splice(idx, 1);
  if (beforeRowId) {
    const tIdx = list.findIndex((r4) => r4.id === beforeRowId);
    list.splice(tIdx >= 0 ? tIdx : list.length, 0, row);
  } else {
    list.push(row);
  }
  rows.value = list;
}
function addElementToRow(rowId, type, beforeElementId = null) {
  const el = createElement(type);
  rows.value = rows.value.map((row) => {
    if (row.id !== rowId) return row;
    const elements = [...row.elements];
    if (beforeElementId) {
      const idx = elements.findIndex((e4) => e4.id === beforeElementId);
      if (idx >= 0) elements.splice(idx, 0, el);
      else elements.push(el);
    } else {
      elements.push(el);
    }
    return { ...row, elements };
  });
  selectedId.value = el.id;
  return el.id;
}
function addElementToCell(cellId, type) {
  const el = createElement(type);
  rows.value = rows.value.map((row) => ({
    ...row,
    elements: deepMapCell(row.elements, cellId, (cell) => ({
      ...cell,
      elements: [...cell.elements, el]
    }))
  }));
  selectedId.value = el.id;
  return el.id;
}
function addGridCell(elementId) {
  rows.value = rows.value.map((row) => ({
    ...row,
    elements: deepMapElement(row.elements, elementId, (el) => {
      if (!el.children) return el;
      const newCell = { id: nextId("cell"), elements: [] };
      return {
        ...el,
        props: { ...el.props, columns: el.children.length + 1 },
        children: [...el.children, newCell]
      };
    })
  }));
}
function removeGridCell(elementId, cellId) {
  rows.value = rows.value.map((row) => ({
    ...row,
    elements: deepMapElement(row.elements, elementId, (el) => {
      if (!el.children || el.children.length <= 1) return el;
      return {
        ...el,
        props: { ...el.props, columns: el.children.length - 1 },
        children: el.children.filter((c4) => c4.id !== cellId)
      };
    })
  }));
}
function removeElement(elementId) {
  rows.value = rows.value.map((row) => ({
    ...row,
    elements: deepFilterElement(row.elements, elementId)
  }));
  if (selectedId.value === elementId) selectedId.value = null;
}
function updateElementProps(elementId, props) {
  rows.value = rows.value.map((row) => ({
    ...row,
    elements: deepMapElement(row.elements, elementId, (el) => ({
      ...el,
      props: { ...el.props, ...props }
    }))
  }));
}
function moveElement(elementId, target) {
  const element = findElementById(elementId);
  if (!element) return;
  const el = JSON.parse(JSON.stringify(element));
  let newRows = rows.value.map((row) => ({
    ...row,
    elements: deepFilterElement(row.elements, elementId)
  }));
  if (target.cellId) {
    newRows = newRows.map((row) => ({
      ...row,
      elements: deepMapCell(row.elements, target.cellId, (cell) => {
        const elems = [...cell.elements];
        if (target.beforeElementId) {
          const idx = elems.findIndex((e4) => e4.id === target.beforeElementId);
          elems.splice(idx >= 0 ? idx : elems.length, 0, el);
        } else {
          elems.push(el);
        }
        return { ...cell, elements: elems };
      })
    }));
  } else if (target.rowId) {
    newRows = newRows.map((row) => {
      if (row.id !== target.rowId) return row;
      const elems = [...row.elements];
      if (target.beforeElementId) {
        const idx = elems.findIndex((e4) => e4.id === target.beforeElementId);
        elems.splice(idx >= 0 ? idx : elems.length, 0, el);
      } else {
        elems.push(el);
      }
      return { ...row, elements: elems };
    });
  }
  rows.value = newRows;
}
function dropOnCanvas(type, beforeRowId = null) {
  const rowId = addRow(beforeRowId);
  addElementToRow(rowId, type);
  commitChange("Add " + type);
}
function dropOnContainer(type, rowId) {
  addElementToRow(rowId, type);
  commitChange("Add " + type);
}
function commitChange(action = "") {
  pushHistory(action);
  debouncedSave();
}
function selectElement(id) {
  selectedId.value = id;
  if (id) {
    sidebarMode.value = "properties";
    if (!leftSidebarOpen.value) leftSidebarOpen.value = true;
  }
}
var dragging = y3(null);
var dropTargetId = y3(null);

// src/components/Toolbar.jsx
var menuOpen = y3(false);
if (typeof document !== "undefined") {
  document.addEventListener("click", () => {
    menuOpen.value = false;
  });
}
function Toolbar({ backUrl, viewUrl }) {
  const titleRef = A2(null);
  const status = saveStatus.value;
  const mode = sidebarMode.value;
  const leftOpen = leftSidebarOpen.value;
  const rightOpen = rightSidebarOpen.value;
  const viewport = viewportMode.value;
  const title = pageTitle.value;
  const isMenuOpen = menuOpen.value;
  function onTitleBlur() {
    if (!titleRef.current) return;
    const text = titleRef.current.textContent.trim();
    if (text && text !== title) renamePost(text);
  }
  function onTitleKeyDown(e4) {
    if (e4.key === "Enter") {
      e4.preventDefault();
      titleRef.current?.blur();
    }
  }
  function openPanel(panel) {
    sidebarMode.value = panel;
    if (!leftOpen) leftSidebarOpen.value = true;
    menuOpen.value = false;
  }
  return /* @__PURE__ */ u4("div", { class: "nomentor-toolbar", children: [
    /* @__PURE__ */ u4("div", { class: "toolbar-menu-wrap", onClick: (e4) => e4.stopPropagation(), children: [
      /* @__PURE__ */ u4("button", { class: "toolbar-menu-btn", onClick: () => menuOpen.value = !isMenuOpen, children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
        /* @__PURE__ */ u4("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
        /* @__PURE__ */ u4("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
      ] }) }),
      isMenuOpen && /* @__PURE__ */ u4("div", { class: "toolbar-menu-dropdown", children: [
        /* @__PURE__ */ u4("button", { onClick: () => openPanel("globalSettings"), children: [
          /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u4("circle", { cx: "12", cy: "12", r: "3" }),
            /* @__PURE__ */ u4("path", { d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" })
          ] }),
          "Global Settings"
        ] }),
        /* @__PURE__ */ u4("button", { onClick: () => openPanel("pageSettings"), children: [
          /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u4("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
            /* @__PURE__ */ u4("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" })
          ] }),
          "Page Settings"
        ] }),
        /* @__PURE__ */ u4("div", { class: "toolbar-menu-divider" }),
        /* @__PURE__ */ u4("a", { href: backUrl, children: [
          /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u4("path", { d: "m12 19-7-7 7-7" }),
            /* @__PURE__ */ u4("path", { d: "M19 12H5" })
          ] }),
          "Exit to WordPress"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u4("span", { class: "separator" }),
    /* @__PURE__ */ u4(
      "span",
      {
        ref: titleRef,
        class: "page-title",
        contentEditable: true,
        spellcheck: false,
        onBlur: onTitleBlur,
        onKeyDown: onTitleKeyDown,
        dangerouslySetInnerHTML: { __html: title }
      }
    ),
    /* @__PURE__ */ u4(
      "button",
      {
        class: `toolbar-icon-btn ${leftOpen ? "active" : ""}`,
        onClick: () => leftSidebarOpen.value = !leftOpen,
        title: leftOpen ? "Hide sidebar" : "Show sidebar",
        children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ u4("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
          /* @__PURE__ */ u4("path", { d: "M9 3v18" })
        ] })
      }
    ),
    /* @__PURE__ */ u4("span", { class: "separator" }),
    /* @__PURE__ */ u4("div", { class: "toolbar-toggle", children: [
      /* @__PURE__ */ u4(
        "button",
        {
          class: mode === "toolbox" ? "active" : "",
          onClick: () => {
            sidebarMode.value = "toolbox";
            if (previewIndex.value !== null) exitPreview();
            if (!leftOpen) leftSidebarOpen.value = true;
          },
          title: "Toolbox",
          children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }),
            /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }),
            /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }),
            /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" })
          ] })
        }
      ),
      /* @__PURE__ */ u4(
        "button",
        {
          class: mode === "properties" ? "active" : "",
          onClick: () => {
            sidebarMode.value = "properties";
            if (!leftOpen) leftSidebarOpen.value = true;
          },
          title: "Properties",
          children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u4("line", { x1: "4", x2: "4", y1: "21", y2: "14" }),
            /* @__PURE__ */ u4("line", { x1: "4", x2: "4", y1: "10", y2: "3" }),
            /* @__PURE__ */ u4("line", { x1: "12", x2: "12", y1: "21", y2: "12" }),
            /* @__PURE__ */ u4("line", { x1: "12", x2: "12", y1: "8", y2: "3" }),
            /* @__PURE__ */ u4("line", { x1: "20", x2: "20", y1: "21", y2: "16" }),
            /* @__PURE__ */ u4("line", { x1: "20", x2: "20", y1: "12", y2: "3" }),
            /* @__PURE__ */ u4("line", { x1: "2", x2: "6", y1: "14", y2: "14" }),
            /* @__PURE__ */ u4("line", { x1: "10", x2: "14", y1: "8", y2: "8" }),
            /* @__PURE__ */ u4("line", { x1: "18", x2: "22", y1: "16", y2: "16" })
          ] })
        }
      ),
      /* @__PURE__ */ u4(
        "button",
        {
          class: mode === "history" ? "active" : "",
          onClick: () => {
            sidebarMode.value = "history";
            if (!leftOpen) leftSidebarOpen.value = true;
          },
          title: "History",
          children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u4("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
            /* @__PURE__ */ u4("path", { d: "M3 3v5h5" }),
            /* @__PURE__ */ u4("path", { d: "M12 7v5l4 2" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ u4("span", { class: "spacer" }),
    /* @__PURE__ */ u4("div", { class: "toolbar-toggle viewport-toggle", children: [
      /* @__PURE__ */ u4("button", { class: viewport === "desktop" ? "active" : "", onClick: () => viewportMode.value = "desktop", title: "Desktop", children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }),
        /* @__PURE__ */ u4("path", { d: "M8 21h8" }),
        /* @__PURE__ */ u4("path", { d: "M12 17v4" })
      ] }) }),
      /* @__PURE__ */ u4("button", { class: viewport === "tablet" ? "active" : "", onClick: () => viewportMode.value = "tablet", title: "Tablet", children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }),
        /* @__PURE__ */ u4("path", { d: "M12 18h.01" })
      ] }) }),
      /* @__PURE__ */ u4("button", { class: viewport === "mobile" ? "active" : "", onClick: () => viewportMode.value = "mobile", title: "Mobile", children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("rect", { width: "14", height: "20", x: "5", y: "2", rx: "2" }),
        /* @__PURE__ */ u4("path", { d: "M12 18h.01" })
      ] }) })
    ] }),
    /* @__PURE__ */ u4("span", { class: "spacer" }),
    /* @__PURE__ */ u4("span", { class: `save-status ${status}`, children: status === "saving" ? "Saving..." : status === "error" ? "Save failed" : "Saved" }),
    /* @__PURE__ */ u4("span", { class: "separator" }),
    /* @__PURE__ */ u4(
      "button",
      {
        class: `toolbar-icon-btn ${rightOpen ? "active" : ""}`,
        onClick: () => rightSidebarOpen.value = !rightOpen,
        title: rightOpen ? "Hide navigator" : "Show navigator",
        children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ u4("path", { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" }),
          /* @__PURE__ */ u4("path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" }),
          /* @__PURE__ */ u4("path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" })
        ] })
      }
    ),
    /* @__PURE__ */ u4("a", { href: viewUrl || "#", target: "_blank", class: viewUrl ? "" : "disabled", title: "View page", children: /* @__PURE__ */ u4(Eye, { size: 16 }) })
  ] });
}

// src/components/Toolbox.jsx
var COMPONENTS = [
  { type: "grid", label: "Grid", icon: Grid },
  { type: "heading", label: "Heading", icon: Heading },
  { type: "text", label: "Text", icon: AlignLeft },
  { type: "image", label: "Image", icon: Image },
  { type: "button", label: "Button", icon: MousePointerClick },
  { type: "list", label: "List", icon: List },
  { type: "timer", label: "Timer", icon: Timer },
  { type: "form", label: "Form", icon: ClipboardList }
];
function Toolbox() {
  function onDragStart(e4, type) {
    dragging.value = { type, source: "toolbox" };
    e4.dataTransfer.effectAllowed = "copy";
    e4.dataTransfer.setData("text/plain", type);
  }
  function onDragEnd() {
    dragging.value = null;
  }
  return /* @__PURE__ */ u4("aside", { class: "nomentor-sidebar-left", children: [
    /* @__PURE__ */ u4("div", { class: "sidebar-header", children: "Toolbox" }),
    /* @__PURE__ */ u4("div", { class: "sidebar-content", children: /* @__PURE__ */ u4("div", { class: "toolbox-grid", children: COMPONENTS.map((c4) => /* @__PURE__ */ u4(
      "div",
      {
        class: "toolbox-item",
        draggable: true,
        onDragStart: (e4) => onDragStart(e4, c4.type),
        onDragEnd,
        children: [
          /* @__PURE__ */ u4(c4.icon, {}),
          /* @__PURE__ */ u4("span", { children: c4.label })
        ]
      },
      c4.type
    )) }) })
  ] });
}

// src/components/History.jsx
function History() {
  const entries = history.value;
  const previewing = previewIndex.value;
  const count = entries.length;
  return /* @__PURE__ */ u4("aside", { class: "nomentor-sidebar-left", children: [
    /* @__PURE__ */ u4("div", { class: "sidebar-header", children: [
      /* @__PURE__ */ u4("span", { children: [
        "History ",
        /* @__PURE__ */ u4("span", { class: "history-count", children: [
          count,
          "/100"
        ] })
      ] }),
      previewing !== null && /* @__PURE__ */ u4("button", { class: "history-exit-btn", onClick: exitPreview, children: "Back to live" })
    ] }),
    /* @__PURE__ */ u4("div", { class: "sidebar-content", children: count === 0 ? /* @__PURE__ */ u4("div", { class: "history-empty", children: "No changes yet" }) : /* @__PURE__ */ u4("ul", { class: "history-list", children: [...entries].reverse().map((entry, ri) => {
      const i5 = count - 1 - ri;
      const isLast = i5 === count - 1;
      const isActive = previewing === i5;
      const label = isLast ? "Current" : entry.action || "Version " + (i5 + 1);
      return /* @__PURE__ */ u4("li", { class: `history-item ${isActive ? "active" : ""} ${isLast ? "is-current" : ""}`, children: [
        /* @__PURE__ */ u4("div", { class: "history-item-row", onClick: () => isLast ? exitPreview() : previewVersion(i5), children: [
          /* @__PURE__ */ u4("span", { class: "history-time", title: formatTime(entry.timestamp), children: [
            /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ u4("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ u4("polyline", { points: "12 6 12 12 16 14" })
            ] }),
            /* @__PURE__ */ u4("span", { class: "history-time-text", children: formatTime(entry.timestamp) })
          ] }),
          /* @__PURE__ */ u4("span", { class: "history-action", children: label })
        ] }),
        /* @__PURE__ */ u4("div", { class: "history-item-actions", children: [
          !isLast && /* @__PURE__ */ u4(
            "button",
            {
              class: `history-pin-btn ${entry.pinned ? "pinned" : ""}`,
              onClick: (e4) => {
                e4.stopPropagation();
                togglePin(i5);
              },
              title: entry.pinned ? "Unpin" : "Pin to keep",
              children: /* @__PURE__ */ u4(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 24 24",
                  fill: entry.pinned ? "currentColor" : "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  children: /* @__PURE__ */ u4("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" })
                }
              )
            }
          ),
          /* @__PURE__ */ u4(
            "button",
            {
              class: `history-revert-btn ${isActive && !isLast ? "" : "hidden"}`,
              onClick: (e4) => {
                e4.stopPropagation();
                revertToVersion(i5);
              },
              title: "Revert to this version",
              children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
                /* @__PURE__ */ u4("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
                /* @__PURE__ */ u4("path", { d: "M3 3v5h5" })
              ] })
            }
          )
        ] })
      ] }, i5);
    }) }) })
  ] });
}
function formatTime(ts) {
  const d5 = new Date(ts);
  return d5.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

// src/components/MediaPicker.jsx
var pickerState = y3(null);
function openMediaPicker() {
  return new Promise((resolve) => {
    pickerState.value = { resolve };
  });
}
function MediaPicker() {
  const state = pickerState.value;
  if (!state) return null;
  return /* @__PURE__ */ u4(
    MediaPickerModal,
    {
      onSelect: (img) => {
        state.resolve(img);
        pickerState.value = null;
      },
      onClose: () => {
        state.resolve(null);
        pickerState.value = null;
      }
    }
  );
}
function MediaPickerModal({ onSelect, onClose }) {
  const [items, setItems] = d2([]);
  const [page, setPage] = d2(1);
  const [hasMore, setHasMore] = d2(false);
  const [search, setSearch] = d2("");
  const [loading, setLoading] = d2(true);
  const [uploading, setUploading] = d2(false);
  const fileRef = A2(null);
  const searchTimer = A2(null);
  function load(p5, s4) {
    setLoading(true);
    const { ajaxUrl, nonce } = window.nomentor;
    const params = new URLSearchParams({ action: "nomentor_media", nonce, page: p5, search: s4 });
    fetch(`${ajaxUrl}?${params}`).then((r4) => r4.json()).then((r4) => {
      if (r4.success) {
        setItems((prev) => p5 === 1 ? r4.data.items : [...prev, ...r4.data.items]);
        setHasMore(r4.data.hasMore);
        setPage(p5);
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }
  y2(() => {
    load(1, "");
  }, []);
  function onSearch(e4) {
    const val = e4.target.value;
    setSearch(val);
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => load(1, val), 300);
  }
  function onUpload(e4) {
    const file = e4.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const { ajaxUrl, nonce } = window.nomentor;
    const formData = new FormData();
    formData.append("action", "nomentor_upload");
    formData.append("nonce", nonce);
    formData.append("file", file);
    fetch(ajaxUrl, { method: "POST", body: formData }).then((r4) => r4.json()).then((r4) => {
      setUploading(false);
      if (r4.success) {
        onSelect({ url: r4.data.url, alt: r4.data.alt || "" });
      }
    }).catch(() => setUploading(false));
  }
  function onBackdropClick(e4) {
    if (e4.target === e4.currentTarget) onClose();
  }
  return /* @__PURE__ */ u4("div", { class: "media-picker-overlay", onClick: onBackdropClick, children: /* @__PURE__ */ u4("div", { class: "media-picker", children: [
    /* @__PURE__ */ u4("div", { class: "media-picker-header", children: [
      /* @__PURE__ */ u4("span", { class: "media-picker-title", children: "Media Library" }),
      /* @__PURE__ */ u4("button", { class: "media-picker-close", onClick: onClose, children: "\xD7" })
    ] }),
    /* @__PURE__ */ u4("div", { class: "media-picker-toolbar", children: [
      /* @__PURE__ */ u4(
        "input",
        {
          type: "text",
          class: "media-picker-search",
          placeholder: "Search images...",
          value: search,
          onInput: onSearch
        }
      ),
      /* @__PURE__ */ u4("button", { class: "media-picker-upload-btn", onClick: () => fileRef.current?.click(), disabled: uploading, children: uploading ? "Uploading..." : "Upload" }),
      /* @__PURE__ */ u4("input", { ref: fileRef, type: "file", accept: "image/*", style: { display: "none" }, onChange: onUpload })
    ] }),
    /* @__PURE__ */ u4("div", { class: "media-picker-grid", children: [
      items.map((img) => /* @__PURE__ */ u4("div", { class: "media-picker-item", onClick: () => onSelect({ url: img.url, alt: img.alt || img.title || "" }), title: img.title, children: /* @__PURE__ */ u4("img", { src: img.thumb || img.url, alt: img.alt, loading: "lazy" }) }, img.id)),
      loading && /* @__PURE__ */ u4("div", { class: "media-picker-loading", children: "Loading..." }),
      !loading && items.length === 0 && /* @__PURE__ */ u4("div", { class: "media-picker-empty", children: "No images found" })
    ] }),
    hasMore && !loading && /* @__PURE__ */ u4("div", { class: "media-picker-footer", children: /* @__PURE__ */ u4("button", { class: "media-picker-load-more", onClick: () => load(page + 1, search), children: "Load more" }) })
  ] }) });
}

// src/lucide-icons.js
var ICONS = [
  ["a-arrow-down", "A Arrow Down", '<path d="m14 12 4 4 4-4"/><path d="M18 16V7"/><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"/><path d="M3.304 13h6.392"/>'],
  ["a-arrow-up", "A Arrow Up", '<path d="m14 11 4-4 4 4"/><path d="M18 16V7"/><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"/><path d="M3.304 13h6.392"/>'],
  ["a-large-small", "A Large Small", '<path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16"/><path d="M15.697 14h5.606"/><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"/><path d="M3.304 13h6.392"/>'],
  ["accessibility", "Accessibility", '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>'],
  ["activity", "Activity", '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>'],
  ["activity-square", "Activity Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/>'],
  ["air-vent", "Air Vent", '<path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12"/><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M6.6 15.572A2 2 0 1 0 10 17v-5"/>'],
  ["airplay", "Airplay", '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/>'],
  ["alarm-check", "Alarm Check", '<circle cx="12" cy="13" r="8"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/><path d="m9 13 2 2 4-4"/>'],
  ["alarm-clock", "Alarm Clock", '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/>'],
  ["alarm-clock-check", "Alarm Clock Check", '<circle cx="12" cy="13" r="8"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/><path d="m9 13 2 2 4-4"/>'],
  ["alarm-clock-minus", "Alarm Clock Minus", '<circle cx="12" cy="13" r="8"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/><path d="M9 13h6"/>'],
  ["alarm-clock-off", "Alarm Clock Off", '<path d="M6.87 6.87a8 8 0 1 0 11.26 11.26"/><path d="M19.9 14.25a8 8 0 0 0-9.15-9.15"/><path d="m22 6-3-3"/><path d="M6.26 18.67 4 21"/><path d="m2 2 20 20"/><path d="M4 4 2 6"/>'],
  ["alarm-clock-plus", "Alarm Clock Plus", '<circle cx="12" cy="13" r="8"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/><path d="M12 10v6"/><path d="M9 13h6"/>'],
  ["alarm-minus", "Alarm Minus", '<circle cx="12" cy="13" r="8"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/><path d="M9 13h6"/>'],
  ["alarm-plus", "Alarm Plus", '<circle cx="12" cy="13" r="8"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/><path d="M12 10v6"/><path d="M9 13h6"/>'],
  ["alarm-smoke", "Alarm Smoke", '<path d="M11 21c0-2.5 2-2.5 2-5"/><path d="M16 21c0-2.5 2-2.5 2-5"/><path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"/><path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"/><path d="M6 21c0-2.5 2-2.5 2-5"/>'],
  ["album", "Album", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><polyline points="11 3 11 11 14 8 17 11 17 3"/>'],
  ["alert-circle", "Alert Circle", '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>'],
  ["alert-octagon", "Alert Octagon", '<path d="M12 16h.01"/><path d="M12 8v4"/><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"/>'],
  ["alert-triangle", "Alert Triangle", '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>'],
  ["align-center", "Align Center", '<path d="M21 5H3"/><path d="M17 12H7"/><path d="M19 19H5"/>'],
  ["align-center-horizontal", "Align Center Horizontal", '<path d="M2 12h20"/><path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"/><path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"/><path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"/>'],
  ["align-center-vertical", "Align Center Vertical", '<path d="M12 2v20"/><path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"/><path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"/><path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"/><path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"/>'],
  ["align-end-horizontal", "Align End Horizontal", '<rect width="6" height="16" x="4" y="2" rx="2"/><rect width="6" height="9" x="14" y="9" rx="2"/><path d="M22 22H2"/>'],
  ["align-end-vertical", "Align End Vertical", '<rect width="16" height="6" x="2" y="4" rx="2"/><rect width="9" height="6" x="9" y="14" rx="2"/><path d="M22 22V2"/>'],
  ["align-horizontal-distribute-center", "Align Horizontal Distribute Center", '<rect width="6" height="14" x="4" y="5" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M17 22v-5"/><path d="M17 7V2"/><path d="M7 22v-3"/><path d="M7 5V2"/>'],
  ["align-horizontal-distribute-end", "Align Horizontal Distribute End", '<rect width="6" height="14" x="4" y="5" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M10 2v20"/><path d="M20 2v20"/>'],
  ["align-horizontal-distribute-start", "Align Horizontal Distribute Start", '<rect width="6" height="14" x="4" y="5" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M4 2v20"/><path d="M14 2v20"/>'],
  ["align-horizontal-justify-center", "Align Horizontal Justify Center", '<rect width="6" height="14" x="2" y="5" rx="2"/><rect width="6" height="10" x="16" y="7" rx="2"/><path d="M12 2v20"/>'],
  ["align-horizontal-justify-end", "Align Horizontal Justify End", '<rect width="6" height="14" x="2" y="5" rx="2"/><rect width="6" height="10" x="12" y="7" rx="2"/><path d="M22 2v20"/>'],
  ["align-horizontal-justify-start", "Align Horizontal Justify Start", '<rect width="6" height="14" x="6" y="5" rx="2"/><rect width="6" height="10" x="16" y="7" rx="2"/><path d="M2 2v20"/>'],
  ["align-horizontal-space-around", "Align Horizontal Space Around", '<rect width="6" height="10" x="9" y="7" rx="2"/><path d="M4 22V2"/><path d="M20 22V2"/>'],
  ["align-horizontal-space-between", "Align Horizontal Space Between", '<rect width="6" height="14" x="3" y="5" rx="2"/><rect width="6" height="10" x="15" y="7" rx="2"/><path d="M3 2v20"/><path d="M21 2v20"/>'],
  ["align-justify", "Align Justify", '<path d="M3 5h18"/><path d="M3 12h18"/><path d="M3 19h18"/>'],
  ["align-left", "Align Left", '<path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/>'],
  ["align-right", "Align Right", '<path d="M21 5H3"/><path d="M21 12H9"/><path d="M21 19H7"/>'],
  ["align-start-horizontal", "Align Start Horizontal", '<rect width="6" height="16" x="4" y="6" rx="2"/><rect width="6" height="9" x="14" y="6" rx="2"/><path d="M22 2H2"/>'],
  ["align-start-vertical", "Align Start Vertical", '<rect width="9" height="6" x="6" y="14" rx="2"/><rect width="16" height="6" x="6" y="4" rx="2"/><path d="M2 2v20"/>'],
  ["align-vertical-distribute-center", "Align Vertical Distribute Center", '<path d="M22 17h-3"/><path d="M22 7h-5"/><path d="M5 17H2"/><path d="M7 7H2"/><rect x="5" y="14" width="14" height="6" rx="2"/><rect x="7" y="4" width="10" height="6" rx="2"/>'],
  ["align-vertical-distribute-end", "Align Vertical Distribute End", '<rect width="14" height="6" x="5" y="14" rx="2"/><rect width="10" height="6" x="7" y="4" rx="2"/><path d="M2 20h20"/><path d="M2 10h20"/>'],
  ["align-vertical-distribute-start", "Align Vertical Distribute Start", '<rect width="14" height="6" x="5" y="14" rx="2"/><rect width="10" height="6" x="7" y="4" rx="2"/><path d="M2 14h20"/><path d="M2 4h20"/>'],
  ["align-vertical-justify-center", "Align Vertical Justify Center", '<rect width="14" height="6" x="5" y="16" rx="2"/><rect width="10" height="6" x="7" y="2" rx="2"/><path d="M2 12h20"/>'],
  ["align-vertical-justify-end", "Align Vertical Justify End", '<rect width="14" height="6" x="5" y="12" rx="2"/><rect width="10" height="6" x="7" y="2" rx="2"/><path d="M2 22h20"/>'],
  ["align-vertical-justify-start", "Align Vertical Justify Start", '<rect width="14" height="6" x="5" y="16" rx="2"/><rect width="10" height="6" x="7" y="6" rx="2"/><path d="M2 2h20"/>'],
  ["align-vertical-space-around", "Align Vertical Space Around", '<rect width="10" height="6" x="7" y="9" rx="2"/><path d="M22 20H2"/><path d="M22 4H2"/>'],
  ["align-vertical-space-between", "Align Vertical Space Between", '<rect width="14" height="6" x="5" y="15" rx="2"/><rect width="10" height="6" x="7" y="3" rx="2"/><path d="M2 21h20"/><path d="M2 3h20"/>'],
  ["ambulance", "Ambulance", '<path d="M10 10H6"/><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/><path d="M8 8v4"/><path d="M9 18h6"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>'],
  ["ampersand", "Ampersand", '<path d="M16 12h3"/><path d="M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"/>'],
  ["ampersands", "Ampersands", '<path d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"/><path d="M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"/>'],
  ["amphora", "Amphora", '<path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"/><path d="M10 5H8a2 2 0 0 0 0 4h.68"/><path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"/><path d="M14 5h2a2 2 0 0 1 0 4h-.68"/><path d="M18 22H6"/><path d="M9 2h6"/>'],
  ["anchor", "Anchor", '<path d="M12 6v16"/><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"/><path d="M9 11h6"/><circle cx="12" cy="4" r="2"/>'],
  ["angry", "Angry", '<circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><path d="M7.5 8 10 9"/><path d="m14 9 2.5-1"/><path d="M9 10h.01"/><path d="M15 10h.01"/>'],
  ["annoyed", "Annoyed", '<circle cx="12" cy="12" r="10"/><path d="M8 15h8"/><path d="M8 9h2"/><path d="M14 9h2"/>'],
  ["antenna", "Antenna", '<path d="M2 12 7 2"/><path d="m7 12 5-10"/><path d="m12 12 5-10"/><path d="m17 12 5-10"/><path d="M4.5 7h15"/><path d="M12 16v6"/>'],
  ["anvil", "Anvil", '<path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"/><path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"/><path d="M9 12v5"/><path d="M15 12v5"/><path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"/>'],
  ["aperture", "Aperture", '<circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94"/><path d="M9.69 8h11.48"/><path d="m7.38 12 5.74-9.94"/><path d="M9.69 16 3.95 6.06"/><path d="M14.31 16H2.83"/><path d="m16.62 12-5.74 9.94"/>'],
  ["app-window", "App Window", '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/>'],
  ["app-window-mac", "App Window Mac", '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/>'],
  ["apple", "Apple", '<path d="M12 6.528V3a1 1 0 0 1 1-1h0"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/>'],
  ["archive", "Archive", '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>'],
  ["archive-restore", "Archive Restore", '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h2"/><path d="M20 8v11a2 2 0 0 1-2 2h-2"/><path d="m9 15 3-3 3 3"/><path d="M12 12v9"/>'],
  ["archive-x", "Archive X", '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="m9.5 17 5-5"/><path d="m9.5 12 5 5"/>'],
  ["area-chart", "Area Chart", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>'],
  ["armchair", "Armchair", '<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/>'],
  ["arrow-big-down", "Arrow Big Down", '<path d="M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z"/>'],
  ["arrow-big-down-dash", "Arrow Big Down Dash", '<path d="M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z"/><path d="M9 4h6"/>'],
  ["arrow-big-left", "Arrow Big Left", '<path d="M10.793 19.793a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707z"/>'],
  ["arrow-big-left-dash", "Arrow Big Left Dash", '<path d="M13 9a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707l6.94 6.94a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/><path d="M20 9v6"/>'],
  ["arrow-big-right", "Arrow Big Right", '<path d="M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z"/>'],
  ["arrow-big-right-dash", "Arrow Big Right Dash", '<path d="M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/><path d="M4 9v6"/>'],
  ["arrow-big-up", "Arrow Big Up", '<path d="M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z"/>'],
  ["arrow-big-up-dash", "Arrow Big Up Dash", '<path d="M14 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-6.939-6.939a1.207 1.207 0 0 0-1.708 0l-6.94 6.94a.707.707 0 0 0 .5 1.206H8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1z"/><path d="M9 20h6"/>'],
  ["arrow-down", "Arrow Down", '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>'],
  ["arrow-down-a-z", "Arrow Down A Z", '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M20 8h-5"/><path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"/><path d="M15 14h5l-5 6h5"/>'],
  ["arrow-down-az", "Arrow Down Az", '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M20 8h-5"/><path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"/><path d="M15 14h5l-5 6h5"/>'],
  ["arrow-down-circle", "Arrow Down Circle", '<circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/>'],
  ["arrow-down-from-line", "Arrow Down From Line", '<path d="M19 3H5"/><path d="M12 21V7"/><path d="m6 15 6 6 6-6"/>'],
  ["arrow-down-left", "Arrow Down Left", '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>'],
  ["arrow-down-left-from-circle", "Arrow Down Left From Circle", '<path d="M2 12a10 10 0 1 1 10 10"/><path d="m2 22 10-10"/><path d="M8 22H2v-6"/>'],
  ["arrow-down-left-from-square", "Arrow Down Left From Square", '<path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"/><path d="m3 21 9-9"/><path d="M9 21H3v-6"/>'],
  ["arrow-down-left-square", "Arrow Down Left Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 8-8 8"/><path d="M16 16H8V8"/>'],
  ["arrow-down-narrow-wide", "Arrow Down Narrow Wide", '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h4"/><path d="M11 8h7"/><path d="M11 12h10"/>'],
  ["arrow-down-right", "Arrow Down Right", '<path d="m7 7 10 10"/><path d="M17 7v10H7"/>'],
  ["arrow-down-right-from-circle", "Arrow Down Right From Circle", '<path d="M12 22a10 10 0 1 1 10-10"/><path d="M22 22 12 12"/><path d="M22 16v6h-6"/>'],
  ["arrow-down-right-from-square", "Arrow Down Right From Square", '<path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="m21 21-9-9"/><path d="M21 15v6h-6"/>'],
  ["arrow-down-right-square", "Arrow Down Right Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m8 8 8 8"/><path d="M16 8v8H8"/>'],
  ["arrow-down-square", "Arrow Down Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/>'],
  ["arrow-down-to-dot", "Arrow Down To Dot", '<path d="M12 2v14"/><path d="m19 9-7 7-7-7"/><circle cx="12" cy="21" r="1"/>'],
  ["arrow-down-to-line", "Arrow Down To Line", '<path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/>'],
  ["arrow-down-up", "Arrow Down Up", '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/>'],
  ["arrow-down-wide-narrow", "Arrow Down Wide Narrow", '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/><path d="M11 12h4"/>'],
  ["arrow-down-z-a", "Arrow Down Z A", '<path d="m3 16 4 4 4-4"/><path d="M7 4v16"/><path d="M15 4h5l-5 6h5"/><path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"/><path d="M20 18h-5"/>'],
  ["arrow-down-za", "Arrow Down Za", '<path d="m3 16 4 4 4-4"/><path d="M7 4v16"/><path d="M15 4h5l-5 6h5"/><path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"/><path d="M20 18h-5"/>'],
  ["arrow-down01", "Arrow Down01", '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><rect x="15" y="4" width="4" height="6" ry="2"/><path d="M17 20v-6h-2"/><path d="M15 20h4"/>'],
  ["arrow-down10", "Arrow Down10", '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M17 10V4h-2"/><path d="M15 10h4"/><rect x="15" y="14" width="4" height="6" ry="2"/>'],
  ["arrow-left", "Arrow Left", '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>'],
  ["arrow-left-circle", "Arrow Left Circle", '<circle cx="12" cy="12" r="10"/><path d="m12 8-4 4 4 4"/><path d="M16 12H8"/>'],
  ["arrow-left-from-line", "Arrow Left From Line", '<path d="m9 6-6 6 6 6"/><path d="M3 12h14"/><path d="M21 19V5"/>'],
  ["arrow-left-right", "Arrow Left Right", '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>'],
  ["arrow-left-square", "Arrow Left Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m12 8-4 4 4 4"/><path d="M16 12H8"/>'],
  ["arrow-left-to-line", "Arrow Left To Line", '<path d="M3 19V5"/><path d="m13 6-6 6 6 6"/><path d="M7 12h14"/>'],
  ["arrow-right", "Arrow Right", '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'],
  ["arrow-right-circle", "Arrow Right Circle", '<circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/>'],
  ["arrow-right-from-line", "Arrow Right From Line", '<path d="M3 5v14"/><path d="M21 12H7"/><path d="m15 18 6-6-6-6"/>'],
  ["arrow-right-left", "Arrow Right Left", '<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>'],
  ["arrow-right-square", "Arrow Right Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="m12 16 4-4-4-4"/>'],
  ["arrow-right-to-line", "Arrow Right To Line", '<path d="M17 12H3"/><path d="m11 18 6-6-6-6"/><path d="M21 5v14"/>'],
  ["arrow-up", "Arrow Up", '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>'],
  ["arrow-up-a-z", "Arrow Up A Z", '<path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M20 8h-5"/><path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"/><path d="M15 14h5l-5 6h5"/>'],
  ["arrow-up-az", "Arrow Up Az", '<path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M20 8h-5"/><path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"/><path d="M15 14h5l-5 6h5"/>'],
  ["arrow-up-circle", "Arrow Up Circle", '<circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/>'],
  ["arrow-up-down", "Arrow Up Down", '<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>'],
  ["arrow-up-from-dot", "Arrow Up From Dot", '<path d="m5 9 7-7 7 7"/><path d="M12 16V2"/><circle cx="12" cy="21" r="1"/>'],
  ["arrow-up-from-line", "Arrow Up From Line", '<path d="m18 9-6-6-6 6"/><path d="M12 3v14"/><path d="M5 21h14"/>'],
  ["arrow-up-left", "Arrow Up Left", '<path d="M7 17V7h10"/><path d="M17 17 7 7"/>'],
  ["arrow-up-left-from-circle", "Arrow Up Left From Circle", '<path d="M2 8V2h6"/><path d="m2 2 10 10"/><path d="M12 2A10 10 0 1 1 2 12"/>'],
  ["arrow-up-left-from-square", "Arrow Up Left From Square", '<path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"/><path d="m3 3 9 9"/><path d="M3 9V3h6"/>'],
  ["arrow-up-left-square", "Arrow Up Left Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 16V8h8"/><path d="M16 16 8 8"/>'],
  ["arrow-up-narrow-wide", "Arrow Up Narrow Wide", '<path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h4"/><path d="M11 16h7"/><path d="M11 20h10"/>'],
  ["arrow-up-right", "Arrow Up Right", '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>'],
  ["arrow-up-right-from-circle", "Arrow Up Right From Circle", '<path d="M22 12A10 10 0 1 1 12 2"/><path d="M22 2 12 12"/><path d="M16 2h6v6"/>'],
  ["arrow-up-right-from-square", "Arrow Up Right From Square", '<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/>'],
  ["arrow-up-right-square", "Arrow Up Right Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 8h8v8"/><path d="m8 16 8-8"/>'],
  ["arrow-up-square", "Arrow Up Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/>'],
  ["arrow-up-to-line", "Arrow Up To Line", '<path d="M5 3h14"/><path d="m18 13-6-6-6 6"/><path d="M12 7v14"/>'],
  ["arrow-up-wide-narrow", "Arrow Up Wide Narrow", '<path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h10"/><path d="M11 16h7"/><path d="M11 20h4"/>'],
  ["arrow-up-z-a", "Arrow Up Z A", '<path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M15 4h5l-5 6h5"/><path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"/><path d="M20 18h-5"/>'],
  ["arrow-up-za", "Arrow Up Za", '<path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M15 4h5l-5 6h5"/><path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"/><path d="M20 18h-5"/>'],
  ["arrow-up01", "Arrow Up01", '<path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><rect x="15" y="4" width="4" height="6" ry="2"/><path d="M17 20v-6h-2"/><path d="M15 20h4"/>'],
  ["arrow-up10", "Arrow Up10", '<path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M17 10V4h-2"/><path d="M15 10h4"/><rect x="15" y="14" width="4" height="6" ry="2"/>'],
  ["arrows-up-from-line", "Arrows Up From Line", '<path d="m4 6 3-3 3 3"/><path d="M7 17V3"/><path d="m14 6 3-3 3 3"/><path d="M17 17V3"/><path d="M4 21h16"/>'],
  ["asterisk", "Asterisk", '<path d="M12 6v12"/><path d="M17.196 9 6.804 15"/><path d="m6.804 9 10.392 6"/>'],
  ["asterisk-square", "Asterisk Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="m8.5 14 7-4"/><path d="m8.5 10 7 4"/>'],
  ["at-sign", "At Sign", '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>'],
  ["atom", "Atom", '<circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/>'],
  ["audio-lines", "Audio Lines", '<path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/>'],
  ["audio-waveform", "Audio Waveform", '<path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>'],
  ["award", "Award", '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>'],
  ["axe", "Axe", '<path d="m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9"/><path d="M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z"/>'],
  ["axis3-d", "Axis3 D", '<path d="M13.5 10.5 15 9"/><path d="M4 4v15a1 1 0 0 0 1 1h15"/><path d="M4.293 19.707 6 18"/><path d="m9 15 1.5-1.5"/>'],
  ["axis3d", "Axis3d", '<path d="M13.5 10.5 15 9"/><path d="M4 4v15a1 1 0 0 0 1 1h15"/><path d="M4.293 19.707 6 18"/><path d="m9 15 1.5-1.5"/>'],
  ["baby", "Baby", '<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M15 12h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/><path d="M9 12h.01"/>'],
  ["backpack", "Backpack", '<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M8 10h8"/><path d="M8 18h8"/><path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>'],
  ["badge", "Badge", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>'],
  ["badge-alert", "Badge Alert", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>'],
  ["badge-cent", "Badge Cent", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M12 7v10"/><path d="M15.4 10a4 4 0 1 0 0 4"/>'],
  ["badge-check", "Badge Check", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>'],
  ["badge-dollar-sign", "Badge Dollar Sign", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>'],
  ["badge-euro", "Badge Euro", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M7 12h5"/><path d="M15 9.4a4 4 0 1 0 0 5.2"/>'],
  ["badge-help", "Badge Help", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/>'],
  ["badge-indian-rupee", "Badge Indian Rupee", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="m13 17-5-1h1a4 4 0 0 0 0-8"/>'],
  ["badge-info", "Badge Info", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/>'],
  ["badge-japanese-yen", "Badge Japanese Yen", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 8 3 3v7"/><path d="m12 11 3-3"/><path d="M9 12h6"/><path d="M9 16h6"/>'],
  ["badge-minus", "Badge Minus", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="8" x2="16" y1="12" y2="12"/>'],
  ["badge-percent", "Badge Percent", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/>'],
  ["badge-plus", "Badge Plus", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/>'],
  ["badge-pound-sterling", "Badge Pound Sterling", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M8 12h4"/><path d="M10 16V9.5a2.5 2.5 0 0 1 5 0"/><path d="M8 16h7"/>'],
  ["badge-question-mark", "Badge Question Mark", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/>'],
  ["badge-russian-ruble", "Badge Russian Ruble", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M9 16h5"/><path d="M9 12h5a2 2 0 1 0 0-4h-3v9"/>'],
  ["badge-swiss-franc", "Badge Swiss Franc", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M11 17V8h4"/><path d="M11 12h3"/><path d="M9 16h4"/>'],
  ["badge-turkish-lira", "Badge Turkish Lira", '<path d="M11 7v10a5 5 0 0 0 5-5"/><path d="m15 8-6 3"/><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"/>'],
  ["badge-x", "Badge X", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/>'],
  ["baggage-claim", "Baggage Claim", '<path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"/><path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"/><rect width="13" height="8" x="8" y="6" rx="1"/><circle cx="18" cy="20" r="2"/><circle cx="9" cy="20" r="2"/>'],
  ["balloon", "Balloon", '<path d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1"/><path d="M12 6a2 2 0 0 1 2 2"/><path d="M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0"/>'],
  ["ban", "Ban", '<circle cx="12" cy="12" r="10"/><path d="M4.929 4.929 19.07 19.071"/>'],
  ["banana", "Banana", '<path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"/><path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"/>'],
  ["bandage", "Bandage", '<path d="M10 10.01h.01"/><path d="M10 14.01h.01"/><path d="M14 10.01h.01"/><path d="M14 14.01h.01"/><path d="M18 6v12"/><path d="M6 6v12"/><rect x="2" y="6" width="20" height="12" rx="2"/>'],
  ["banknote", "Banknote", '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>'],
  ["banknote-arrow-down", "Banknote Arrow Down", '<path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="m16 19 3 3 3-3"/><path d="M18 12h.01"/><path d="M19 16v6"/><path d="M6 12h.01"/><circle cx="12" cy="12" r="2"/>'],
  ["banknote-arrow-up", "Banknote Arrow Up", '<path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="M18 12h.01"/><path d="M19 22v-6"/><path d="m22 19-3-3-3 3"/><path d="M6 12h.01"/><circle cx="12" cy="12" r="2"/>'],
  ["banknote-x", "Banknote X", '<path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="m17 17 5 5"/><path d="M18 12h.01"/><path d="m22 17-5 5"/><path d="M6 12h.01"/><circle cx="12" cy="12" r="2"/>'],
  ["bar-chart", "Bar Chart", '<path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/>'],
  ["bar-chart-big", "Bar Chart Big", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/>'],
  ["bar-chart-horizontal", "Bar Chart Horizontal", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/>'],
  ["bar-chart-horizontal-big", "Bar Chart Horizontal Big", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="7" y="13" width="9" height="4" rx="1"/><rect x="7" y="5" width="12" height="4" rx="1"/>'],
  ["bar-chart2", "Bar Chart2", '<path d="M5 21v-6"/><path d="M12 21V3"/><path d="M19 21V9"/>'],
  ["bar-chart3", "Bar Chart3", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>'],
  ["bar-chart4", "Bar Chart4", '<path d="M13 17V9"/><path d="M18 17V5"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 17v-3"/>'],
  ["barcode", "Barcode", '<path d="M3 5v14"/><path d="M8 5v14"/><path d="M12 5v14"/><path d="M17 5v14"/><path d="M21 5v14"/>'],
  ["barrel", "Barrel", '<path d="M10 3a41 41 0 0 0 0 18"/><path d="M14 3a41 41 0 0 1 0 18"/><path d="M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z"/><path d="M3.84 17h16.32"/><path d="M3.84 7h16.32"/>'],
  ["baseline", "Baseline", '<path d="M4 20h16"/><path d="m6 16 6-12 6 12"/><path d="M8 12h8"/>'],
  ["bath", "Bath", '<path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>'],
  ["battery", "Battery", '<path d="M 22 14 L 22 10"/><rect x="2" y="6" width="16" height="12" rx="2"/>'],
  ["battery-charging", "Battery Charging", '<path d="m11 7-3 5h4l-3 5"/><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"/><path d="M22 14v-4"/><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"/>'],
  ["battery-full", "Battery Full", '<path d="M10 10v4"/><path d="M14 10v4"/><path d="M22 14v-4"/><path d="M6 10v4"/><rect x="2" y="6" width="16" height="12" rx="2"/>'],
  ["battery-low", "Battery Low", '<path d="M22 14v-4"/><path d="M6 14v-4"/><rect x="2" y="6" width="16" height="12" rx="2"/>'],
  ["battery-medium", "Battery Medium", '<path d="M10 14v-4"/><path d="M22 14v-4"/><path d="M6 14v-4"/><rect x="2" y="6" width="16" height="12" rx="2"/>'],
  ["battery-plus", "Battery Plus", '<path d="M10 9v6"/><path d="M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605"/><path d="M22 14v-4"/><path d="M7 12h6"/><path d="M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606"/>'],
  ["battery-warning", "Battery Warning", '<path d="M10 17h.01"/><path d="M10 7v6"/><path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"/><path d="M22 14v-4"/><path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/>'],
  ["beaker", "Beaker", '<path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/>'],
  ["bean", "Bean", '<path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"/><path d="M5.341 10.62a4 4 0 1 0 5.279-5.28"/>'],
  ["bean-off", "Bean Off", '<path d="M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"/><path d="M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"/><path d="M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"/><line x1="2" x2="22" y1="2" y2="22"/>'],
  ["bed", "Bed", '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>'],
  ["bed-double", "Bed Double", '<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/>'],
  ["bed-single", "Bed Single", '<path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"/><path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><path d="M3 18h18"/>'],
  ["beef", "Beef", '<path d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/><circle cx="12.5" cy="8.5" r="2.5"/>'],
  ["beef-off", "Beef Off", '<path d="M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12"/><path d="M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04"/><path d="M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393"/><path d="m2 2 20 20"/><path d="M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151"/>'],
  ["beer", "Beer", '<path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"/><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/>'],
  ["beer-off", "Beer Off", '<path d="M13 13v5"/><path d="M17 11.47V8"/><path d="M17 11h1a3 3 0 0 1 2.745 4.211"/><path d="m2 2 20 20"/><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"/><path d="M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"/><path d="M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"/><path d="M9 14.6V18"/>'],
  ["bell", "Bell", '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>'],
  ["bell-dot", "Bell Dot", '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348"/><circle cx="18" cy="5" r="3"/>'],
  ["bell-electric", "Bell Electric", '<path d="M18.518 17.347A7 7 0 0 1 14 19"/><path d="M18.8 4A11 11 0 0 1 20 9"/><path d="M9 9h.01"/><circle cx="20" cy="16" r="2"/><circle cx="9" cy="9" r="7"/><rect x="4" y="16" width="10" height="6" rx="2"/>'],
  ["bell-minus", "Bell Minus", '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"/>'],
  ["bell-off", "Bell Off", '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"/><path d="m2 2 20 20"/><path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"/>'],
  ["bell-plus", "Bell Plus", '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/>'],
  ["bell-ring", "Bell Ring", '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>'],
  ["between-horizonal-end", "Between Horizonal End", '<rect width="13" height="7" x="3" y="3" rx="1"/><path d="m22 15-3-3 3-3"/><rect width="13" height="7" x="3" y="14" rx="1"/>'],
  ["between-horizonal-start", "Between Horizonal Start", '<rect width="13" height="7" x="8" y="3" rx="1"/><path d="m2 9 3 3-3 3"/><rect width="13" height="7" x="8" y="14" rx="1"/>'],
  ["between-horizontal-end", "Between Horizontal End", '<rect width="13" height="7" x="3" y="3" rx="1"/><path d="m22 15-3-3 3-3"/><rect width="13" height="7" x="3" y="14" rx="1"/>'],
  ["between-horizontal-start", "Between Horizontal Start", '<rect width="13" height="7" x="8" y="3" rx="1"/><path d="m2 9 3 3-3 3"/><rect width="13" height="7" x="8" y="14" rx="1"/>'],
  ["between-vertical-end", "Between Vertical End", '<rect width="7" height="13" x="3" y="3" rx="1"/><path d="m9 22 3-3 3 3"/><rect width="7" height="13" x="14" y="3" rx="1"/>'],
  ["between-vertical-start", "Between Vertical Start", '<rect width="7" height="13" x="3" y="8" rx="1"/><path d="m15 2-3 3-3-3"/><rect width="7" height="13" x="14" y="8" rx="1"/>'],
  ["biceps-flexed", "Biceps Flexed", '<path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"/><path d="M15 14a5 5 0 0 0-7.584 2"/><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"/>'],
  ["bike", "Bike", '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>'],
  ["binary", "Binary", '<rect x="14" y="14" width="4" height="6" rx="2"/><rect x="6" y="4" width="4" height="6" rx="2"/><path d="M6 20h4"/><path d="M14 10h4"/><path d="M6 14h2v6"/><path d="M14 4h2v6"/>'],
  ["binoculars", "Binoculars", '<path d="M10 10h4"/><path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"/><path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"/><path d="M 22 16 L 2 16"/><path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"/><path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"/>'],
  ["biohazard", "Biohazard", '<circle cx="12" cy="11.9" r="2"/><path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"/><path d="m8.9 10.1 1.4.8"/><path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"/><path d="m15.1 10.1-1.4.8"/><path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"/><path d="M12 13.9v1.6"/><path d="M13.5 5.4c-1-.2-2-.2-3 0"/><path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5"/><path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5"/>'],
  ["bird", "Bird", '<path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/>'],
  ["birdhouse", "Birdhouse", '<path d="M12 18v4"/><path d="m17 18 1.956-11.468"/><path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8"/><path d="M4 18h16"/><path d="M7 18 5.044 6.532"/><circle cx="12" cy="10" r="2"/>'],
  ["bitcoin", "Bitcoin", '<path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"/>'],
  ["blend", "Blend", '<circle cx="9" cy="9" r="7"/><circle cx="15" cy="15" r="7"/>'],
  ["blinds", "Blinds", '<path d="M3 3h18"/><path d="M20 7H8"/><path d="M20 11H8"/><path d="M10 19h10"/><path d="M8 15h12"/><path d="M4 3v14"/><circle cx="4" cy="19" r="2"/>'],
  ["blocks", "Blocks", '<path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/>'],
  ["bluetooth", "Bluetooth", '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>'],
  ["bluetooth-connected", "Bluetooth Connected", '<path d="m7 7 10 10-5 5V2l5 5L7 17"/><line x1="18" x2="21" y1="12" y2="12"/><line x1="3" x2="6" y1="12" y2="12"/>'],
  ["bluetooth-off", "Bluetooth Off", '<path d="m17 17-5 5V12l-5 5"/><path d="m2 2 20 20"/><path d="M14.5 9.5 17 7l-5-5v4.5"/>'],
  ["bluetooth-searching", "Bluetooth Searching", '<path d="m7 7 10 10-5 5V2l5 5L7 17"/><path d="M20.83 14.83a4 4 0 0 0 0-5.66"/><path d="M18 12h.01"/>'],
  ["bold", "Bold", '<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/>'],
  ["bolt", "Bolt", '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/>'],
  ["bomb", "Bomb", '<circle cx="11" cy="13" r="9"/><path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"/><path d="m22 2-1.5 1.5"/>'],
  ["bone", "Bone", '<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/>'],
  ["book", "Book", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>'],
  ["book-a", "Book A", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m8 13 4-7 4 7"/><path d="M9.1 11h5.7"/>'],
  ["book-alert", "Book Alert", '<path d="M12 13h.01"/><path d="M12 6v3"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>'],
  ["book-audio", "Book Audio", '<path d="M12 6v7"/><path d="M16 8v3"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 8v3"/>'],
  ["book-check", "Book Check", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 9.5 2 2 4-4"/>'],
  ["book-copy", "Book Copy", '<path d="M5 7a2 2 0 0 0-2 2v11"/><path d="M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21"/><path d="M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10"/>'],
  ["book-dashed", "Book Dashed", '<path d="M12 17h1.5"/><path d="M12 22h1.5"/><path d="M12 2h1.5"/><path d="M17.5 22H19a1 1 0 0 0 1-1"/><path d="M17.5 2H19a1 1 0 0 1 1 1v1.5"/><path d="M20 14v3h-2.5"/><path d="M20 8.5V10"/><path d="M4 10V8.5"/><path d="M4 19.5V14"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8"/><path d="M8 22H6.5a1 1 0 0 1 0-5H8"/>'],
  ["book-down", "Book Down", '<path d="M12 13V7"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 10 3 3 3-3"/>'],
  ["book-headphones", "Book Headphones", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 12v-2a4 4 0 0 1 8 0v2"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="12" r="1"/>'],
  ["book-heart", "Book Heart", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/>'],
  ["book-image", "Book Image", '<path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><circle cx="10" cy="8" r="2"/>'],
  ["book-key", "Book Key", '<path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15"/><path d="M17 2v6"/><path d="M17 4h2"/><path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><circle cx="17" cy="10" r="2"/>'],
  ["book-lock", "Book Lock", '<path d="M18 6V4a2 2 0 1 0-4 0v2"/><path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"/><rect x="12" y="6" width="8" height="5" rx="1"/>'],
  ["book-marked", "Book Marked", '<path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>'],
  ["book-minus", "Book Minus", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M9 10h6"/>'],
  ["book-open", "Book Open", '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>'],
  ["book-open-check", "Book Open Check", '<path d="M12 21V7"/><path d="m16 12 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/>'],
  ["book-open-text", "Book Open Text", '<path d="M12 7v14"/><path d="M16 12h2"/><path d="M16 8h2"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/><path d="M6 12h2"/><path d="M6 8h2"/>'],
  ["book-plus", "Book Plus", '<path d="M12 7v6"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M9 10h6"/>'],
  ["book-search", "Book Search", '<path d="M11 22H5.5a1 1 0 0 1 0-5h4.501"/><path d="m21 22-1.879-1.878"/><path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8"/><circle cx="17" cy="18" r="3"/>'],
  ["book-template", "Book Template", '<path d="M12 17h1.5"/><path d="M12 22h1.5"/><path d="M12 2h1.5"/><path d="M17.5 22H19a1 1 0 0 0 1-1"/><path d="M17.5 2H19a1 1 0 0 1 1 1v1.5"/><path d="M20 14v3h-2.5"/><path d="M20 8.5V10"/><path d="M4 10V8.5"/><path d="M4 19.5V14"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8"/><path d="M8 22H6.5a1 1 0 0 1 0-5H8"/>'],
  ["book-text", "Book Text", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/>'],
  ["book-type", "Book Type", '<path d="M10 13h4"/><path d="M12 6v7"/><path d="M16 8V6H8v2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>'],
  ["book-up", "Book Up", '<path d="M12 13V7"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 10 3-3 3 3"/>'],
  ["book-up2", "Book Up2", '<path d="M12 13V7"/><path d="M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"/><path d="m9 10 3-3 3 3"/><path d="m9 5 3-3 3 3"/>'],
  ["book-user", "Book User", '<path d="M15 13a3 3 0 1 0-6 0"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><circle cx="12" cy="8" r="2"/>'],
  ["book-x", "Book X", '<path d="m14.5 7-5 5"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9.5 7 5 5"/>'],
  ["bookmark", "Bookmark", '<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/>'],
  ["bookmark-check", "Bookmark Check", '<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/><path d="m9 10 2 2 4-4"/>'],
  ["bookmark-minus", "Bookmark Minus", '<path d="M15 10H9"/><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/>'],
  ["bookmark-plus", "Bookmark Plus", '<path d="M12 7v6"/><path d="M15 10H9"/><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/>'],
  ["bookmark-x", "Bookmark X", '<path d="m14.5 7.5-5 5"/><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/><path d="m9.5 7.5 5 5"/>'],
  ["boom-box", "Boom Box", '<path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M8 8v1"/><path d="M12 8v1"/><path d="M16 8v1"/><rect width="20" height="12" x="2" y="9" rx="2"/><circle cx="8" cy="15" r="2"/><circle cx="16" cy="15" r="2"/>'],
  ["bot", "Bot", '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>'],
  ["bot-message-square", "Bot Message Square", '<path d="M12 6V2H8"/><path d="M15 11v2"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/><path d="M9 11v2"/>'],
  ["bot-off", "Bot Off", '<path d="M13.67 8H18a2 2 0 0 1 2 2v4.33"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M22 22 2 2"/><path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"/><path d="M9 13v2"/><path d="M9.67 4H12v2.33"/>'],
  ["bottle-wine", "Bottle Wine", '<path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z"/><path d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4"/>'],
  ["bow-arrow", "Bow Arrow", '<path d="M17 3h4v4"/><path d="M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17"/><path d="M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05"/><path d="M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z"/><path d="M9.707 14.293 21 3"/>'],
  ["box", "Box", '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>'],
  ["box-select", "Box Select", '<path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h1"/><path d="M14 3h1"/><path d="M14 21h1"/><path d="M3 9v1"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M21 14v1"/>'],
  ["boxes", "Boxes", '<path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/>'],
  ["braces", "Braces", '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>'],
  ["brackets", "Brackets", '<path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"/><path d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"/>'],
  ["brain", "Brain", '<path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/>'],
  ["brain-circuit", "Brain Circuit", '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/>'],
  ["brain-cog", "Brain Cog", '<path d="m10.852 14.772-.383.923"/><path d="m10.852 9.228-.383-.923"/><path d="m13.148 14.772.382.924"/><path d="m13.531 8.305-.383.923"/><path d="m14.772 10.852.923-.383"/><path d="m14.772 13.148.923.383"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"/><path d="M17.998 5.125a4 4 0 0 1 2.525 5.771"/><path d="M19.505 10.294a4 4 0 0 1-1.5 7.706"/><path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"/><path d="M4.5 10.291A4 4 0 0 0 6 18"/><path d="M6.002 5.125a3 3 0 0 0 .4 1.375"/><path d="m9.228 10.852-.923-.383"/><path d="m9.228 13.148-.923.383"/><circle cx="12" cy="12" r="3"/>'],
  ["brick-wall", "Brick Wall", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 9v6"/><path d="M16 15v6"/><path d="M16 3v6"/><path d="M3 15h18"/><path d="M3 9h18"/><path d="M8 15v6"/><path d="M8 3v6"/>'],
  ["brick-wall-fire", "Brick Wall Fire", '<path d="M16 3v2.107"/><path d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"/><path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938"/><path d="M3 15h5.253"/><path d="M3 9h8.228"/><path d="M8 15v6"/><path d="M8 3v6"/>'],
  ["brick-wall-shield", "Brick Wall Shield", '<path d="M12 9v1.258"/><path d="M16 3v5.46"/><path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"/><path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"/><path d="M3 15h7"/><path d="M3 9h12.142"/><path d="M8 15v6"/><path d="M8 3v6"/>'],
  ["briefcase", "Briefcase", '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>'],
  ["briefcase-business", "Briefcase Business", '<path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/>'],
  ["briefcase-conveyor-belt", "Briefcase Conveyor Belt", '<path d="M10 20v2"/><path d="M14 20v2"/><path d="M18 20v2"/><path d="M21 20H3"/><path d="M6 20v2"/><path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"/><rect x="4" y="6" width="16" height="10" rx="2"/>'],
  ["briefcase-medical", "Briefcase Medical", '<path d="M12 11v4"/><path d="M14 13h-4"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M18 6v14"/><path d="M6 6v14"/><rect width="20" height="14" x="2" y="6" rx="2"/>'],
  ["bring-to-front", "Bring To Front", '<rect x="8" y="8" width="8" height="8" rx="2"/><path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"/><path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"/>'],
  ["brush", "Brush", '<path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/>'],
  ["brush-cleaning", "Brush Cleaning", '<path d="m16 22-1-4"/><path d="M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1"/><path d="M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z"/><path d="m8 22 1-4"/>'],
  ["bubbles", "Bubbles", '<path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5"/><circle cx="18.5" cy="8.5" r="3.5"/><circle cx="7.5" cy="16.5" r="5.5"/><circle cx="7.5" cy="4.5" r="2.5"/>'],
  ["bug", "Bug", '<path d="M12 20v-9"/><path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"/><path d="M14.12 3.88 16 2"/><path d="M21 21a4 4 0 0 0-3.81-4"/><path d="M21 5a4 4 0 0 1-3.55 3.97"/><path d="M22 13h-4"/><path d="M3 21a4 4 0 0 1 3.81-4"/><path d="M3 5a4 4 0 0 0 3.55 3.97"/><path d="M6 13H2"/><path d="m8 2 1.88 1.88"/><path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"/>'],
  ["bug-off", "Bug Off", '<path d="M12 20v-8"/><path d="M12.656 7H14a4 4 0 0 1 4 4v1.344"/><path d="M14.12 3.88 16 2"/><path d="M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287"/><path d="m2 2 20 20"/><path d="M21 5a4 4 0 0 1-3.55 3.97"/><path d="M22 13h-3.344"/><path d="M3 21a4 4 0 0 1 3.81-4"/><path d="M3 5a4 4 0 0 0 3.55 3.97"/><path d="M6 13H2"/><path d="m8 2 1.88 1.88"/><path d="M9.712 4.06A3 3 0 0 1 15 6v1.13"/>'],
  ["bug-play", "Bug Play", '<path d="M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97"/><path d="M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"/><path d="M14.12 3.88 16 2"/><path d="M21 5a4 4 0 0 1-3.55 3.97"/><path d="M3 21a4 4 0 0 1 3.81-4"/><path d="M3 5a4 4 0 0 0 3.55 3.97"/><path d="M6 13H2"/><path d="m8 2 1.88 1.88"/><path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"/>'],
  ["building", "Building", '<path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect x="4" y="2" width="16" height="20" rx="2"/>'],
  ["building2", "Building2", '<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>'],
  ["bus", "Bus", '<path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>'],
  ["bus-front", "Bus Front", '<path d="M4 6 2 7"/><path d="M10 6h4"/><path d="m22 7-2-1"/><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M8 15h.01"/><path d="M16 15h.01"/><path d="M6 19v2"/><path d="M18 21v-2"/>'],
  ["cable", "Cable", '<path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"/><path d="M17 21v-2"/><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"/><path d="M21 21v-2"/><path d="M3 5V3"/><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"/><path d="M7 5V3"/>'],
  ["cable-car", "Cable Car", '<path d="M10 3h.01"/><path d="M14 2h.01"/><path d="m2 9 20-5"/><path d="M12 12V6.5"/><rect width="16" height="10" x="4" y="12" rx="3"/><path d="M9 12v5"/><path d="M15 12v5"/><path d="M4 17h16"/>'],
  ["cake", "Cake", '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>'],
  ["cake-slice", "Cake Slice", '<path d="M16 13H3"/><path d="M16 17H3"/><path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"/><circle cx="9" cy="7" r="2"/>'],
  ["calculator", "Calculator", '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>'],
  ["calendar", "Calendar", '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>'],
  ["calendar-arrow-down", "Calendar Arrow Down", '<path d="m14 18 4 4 4-4"/><path d="M16 2v4"/><path d="M18 14v8"/><path d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"/><path d="M3 10h18"/><path d="M8 2v4"/>'],
  ["calendar-arrow-up", "Calendar Arrow Up", '<path d="m14 18 4-4 4 4"/><path d="M16 2v4"/><path d="M18 22v-8"/><path d="M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"/><path d="M3 10h18"/><path d="M8 2v4"/>'],
  ["calendar-check", "Calendar Check", '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>'],
  ["calendar-check2", "Calendar Check2", '<path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/>'],
  ["calendar-clock", "Calendar Clock", '<path d="M16 14v2.2l1.6 1"/><path d="M16 2v4"/><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M3 10h5"/><path d="M8 2v4"/><circle cx="16" cy="16" r="6"/>'],
  ["calendar-cog", "Calendar Cog", '<path d="m15.228 16.852-.923-.383"/><path d="m15.228 19.148-.923.383"/><path d="M16 2v4"/><path d="m16.47 14.305.382.923"/><path d="m16.852 20.772-.383.924"/><path d="m19.148 15.228.383-.923"/><path d="m19.53 21.696-.382-.924"/><path d="m20.772 16.852.924-.383"/><path d="m20.772 19.148.924.383"/><path d="M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="M3 10h18"/><path d="M8 2v4"/><circle cx="18" cy="18" r="3"/>'],
  ["calendar-days", "Calendar Days", '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>'],
  ["calendar-fold", "Calendar Fold", '<path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M15 22v-5a1 1 0 0 1 1-1h5"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/>'],
  ["calendar-heart", "Calendar Heart", '<path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125"/><path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/>'],
  ["calendar-minus", "Calendar Minus", '<path d="M16 19h6"/><path d="M16 2v4"/><path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"/><path d="M3 10h18"/><path d="M8 2v4"/>'],
  ["calendar-minus2", "Calendar Minus2", '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M10 16h4"/>'],
  ["calendar-off", "Calendar Off", '<path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"/><path d="M21 15.5V6a2 2 0 0 0-2-2H9.5"/><path d="M16 2v4"/><path d="M3 10h7"/><path d="M21 10h-5.5"/><path d="m2 2 20 20"/>'],
  ["calendar-plus", "Calendar Plus", '<path d="M16 19h6"/><path d="M16 2v4"/><path d="M19 16v6"/><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"/><path d="M3 10h18"/><path d="M8 2v4"/>'],
  ["calendar-plus2", "Calendar Plus2", '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M10 16h4"/><path d="M12 14v4"/>'],
  ["calendar-range", "Calendar Range", '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M17 14h-6"/><path d="M13 18H7"/><path d="M7 14h.01"/><path d="M17 18h.01"/>'],
  ["calendar-search", "Calendar Search", '<path d="M16 2v4"/><path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"/><path d="m22 22-1.875-1.875"/><path d="M3 10h18"/><path d="M8 2v4"/><circle cx="18" cy="18" r="3"/>'],
  ["calendar-sync", "Calendar Sync", '<path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5"/><path d="M16 2v4"/><path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"/><path d="M3 10h4"/><path d="M8 2v4"/>'],
  ["calendar-x", "Calendar X", '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m14 14-4 4"/><path d="m10 14 4 4"/>'],
  ["calendar-x2", "Calendar X2", '<path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m17 22 5-5"/><path d="m17 17 5 5"/>'],
  ["calendar1", "Calendar1", '<path d="M11 14h1v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/>'],
  ["calendars", "Calendars", '<path d="M12 2v2"/><path d="M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2"/><path d="M18 2v2"/><path d="M2 13h2"/><path d="M8 8h14"/><rect x="8" y="3" width="14" height="14" rx="2"/>'],
  ["camera", "Camera", '<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>'],
  ["camera-off", "Camera Off", '<path d="M14.564 14.558a3 3 0 1 1-4.122-4.121"/><path d="m2 2 20 20"/><path d="M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175"/><path d="M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344"/>'],
  ["candlestick-chart", "Candlestick Chart", '<path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/>'],
  ["candy", "Candy", '<path d="M10 7v10.9"/><path d="M14 6.1V17"/><path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"/><path d="M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07"/><path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"/>'],
  ["candy-cane", "Candy Cane", '<path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"/><path d="M17.75 7 15 2.1"/><path d="M10.9 4.8 13 9"/><path d="m7.9 9.7 2 4.4"/><path d="M4.9 14.7 7 18.9"/>'],
  ["candy-off", "Candy Off", '<path d="M10 10v7.9"/><path d="M11.802 6.145a5 5 0 0 1 6.053 6.053"/><path d="M14 6.1v2.243"/><path d="m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965"/><path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"/><path d="m2 2 20 20"/><path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"/>'],
  ["cannabis", "Cannabis", '<path d="M12 22v-4"/><path d="M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"/>'],
  ["cannabis-off", "Cannabis Off", '<path d="M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5"/><path d="M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9"/><path d="M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684"/><path d="m2 2 20 20"/><path d="M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907"/><path d="M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3"/>'],
  ["captions", "Captions", '<rect width="18" height="14" x="3" y="5" rx="2" ry="2"/><path d="M7 15h4M15 15h2M7 11h2M13 11h4"/>'],
  ["captions-off", "Captions Off", '<path d="M10.5 5H19a2 2 0 0 1 2 2v8.5"/><path d="M17 11h-.5"/><path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"/><path d="m2 2 20 20"/><path d="M7 11h4"/><path d="M7 15h2.5"/>'],
  ["car", "Car", '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>'],
  ["car-front", "Car Front", '<path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/>'],
  ["car-taxi-front", "Car Taxi Front", '<path d="M10 2h4"/><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/>'],
  ["caravan", "Caravan", '<path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"/><path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"/><path d="M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"/><circle cx="8" cy="19" r="2"/>'],
  ["card-sim", "Card Sim", '<path d="M12 14v4"/><path d="M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M8 14h8"/><rect x="8" y="10" width="8" height="8" rx="1"/>'],
  ["carrot", "Carrot", '<path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"/><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"/><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"/>'],
  ["case-lower", "Case Lower", '<path d="M10 9v7"/><path d="M14 6v10"/><circle cx="17.5" cy="12.5" r="3.5"/><circle cx="6.5" cy="12.5" r="3.5"/>'],
  ["case-sensitive", "Case Sensitive", '<path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"/><path d="M22 9v7"/><path d="M3.304 13h6.392"/><circle cx="18.5" cy="12.5" r="3.5"/>'],
  ["case-upper", "Case Upper", '<path d="M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5"/><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"/><path d="M3.304 13h6.392"/>'],
  ["cassette-tape", "Cassette Tape", '<rect width="20" height="16" x="2" y="4" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M8 12h8"/><circle cx="16" cy="10" r="2"/><path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"/>'],
  ["cast", "Cast", '<path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><path d="M2 12a9 9 0 0 1 8 8"/><path d="M2 16a5 5 0 0 1 4 4"/><line x1="2" x2="2.01" y1="20" y2="20"/>'],
  ["castle", "Castle", '<path d="M10 5V3"/><path d="M14 5V3"/><path d="M15 21v-3a3 3 0 0 0-6 0v3"/><path d="M18 3v8"/><path d="M18 5H6"/><path d="M22 11H2"/><path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"/><path d="M6 3v8"/>'],
  ["cat", "Cat", '<path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/>'],
  ["cctv", "Cctv", '<path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"/><path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"/><path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"/><path d="M2 21v-4"/><path d="M7 9h.01"/>'],
  ["cctv-off", "Cctv Off", '<path d="m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448"/><path d="m15.166 15.166-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037"/><path d="M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902"/><path d="m2 2 20 20"/><path d="M2 21v-4"/><path d="M7 9h.01"/>'],
  ["chart-area", "Chart Area", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>'],
  ["chart-bar", "Chart Bar", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/>'],
  ["chart-bar-big", "Chart Bar Big", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="7" y="13" width="9" height="4" rx="1"/><rect x="7" y="5" width="12" height="4" rx="1"/>'],
  ["chart-bar-decreasing", "Chart Bar Decreasing", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11h8"/><path d="M7 16h3"/><path d="M7 6h12"/>'],
  ["chart-bar-increasing", "Chart Bar Increasing", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11h8"/><path d="M7 16h12"/><path d="M7 6h3"/>'],
  ["chart-bar-stacked", "Chart Bar Stacked", '<path d="M11 13v4"/><path d="M15 5v4"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="7" y="13" width="9" height="4" rx="1"/><rect x="7" y="5" width="12" height="4" rx="1"/>'],
  ["chart-candlestick", "Chart Candlestick", '<path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/>'],
  ["chart-column", "Chart Column", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>'],
  ["chart-column-big", "Chart Column Big", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/>'],
  ["chart-column-decreasing", "Chart Column Decreasing", '<path d="M13 17V9"/><path d="M18 17v-3"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 17V5"/>'],
  ["chart-column-increasing", "Chart Column Increasing", '<path d="M13 17V9"/><path d="M18 17V5"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 17v-3"/>'],
  ["chart-column-stacked", "Chart Column Stacked", '<path d="M11 13H7"/><path d="M19 9h-4"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/>'],
  ["chart-gantt", "Chart Gantt", '<path d="M10 6h8"/><path d="M12 16h6"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 11h7"/>'],
  ["chart-line", "Chart Line", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>'],
  ["chart-network", "Chart Network", '<path d="m13.11 7.664 1.78 2.672"/><path d="m14.162 12.788-3.324 1.424"/><path d="m20 4-6.06 1.515"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><circle cx="12" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="9" cy="15" r="2"/>'],
  ["chart-no-axes-column", "Chart No Axes Column", '<path d="M5 21v-6"/><path d="M12 21V3"/><path d="M19 21V9"/>'],
  ["chart-no-axes-column-decreasing", "Chart No Axes Column Decreasing", '<path d="M5 21V3"/><path d="M12 21V9"/><path d="M19 21v-6"/>'],
  ["chart-no-axes-column-increasing", "Chart No Axes Column Increasing", '<path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/>'],
  ["chart-no-axes-combined", "Chart No Axes Combined", '<path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/>'],
  ["chart-no-axes-gantt", "Chart No Axes Gantt", '<path d="M6 5h12"/><path d="M4 12h10"/><path d="M12 19h8"/>'],
  ["chart-pie", "Chart Pie", '<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>'],
  ["chart-scatter", "Chart Scatter", '<circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="18.5" cy="5.5" r=".5" fill="currentColor"/><circle cx="11.5" cy="11.5" r=".5" fill="currentColor"/><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="14.5" r=".5" fill="currentColor"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/>'],
  ["chart-spline", "Chart Spline", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/>'],
  ["check", "Check", '<path d="M20 6 9 17l-5-5"/>'],
  ["check-check", "Check Check", '<path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/>'],
  ["check-circle", "Check Circle", '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>'],
  ["check-circle2", "Check Circle2", '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'],
  ["check-line", "Check Line", '<path d="M20 4L9 15"/><path d="M21 19L3 19"/><path d="M9 15L4 10"/>'],
  ["check-square", "Check Square", '<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"/><path d="m9 11 3 3L22 4"/>'],
  ["check-square2", "Check Square2", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>'],
  ["chef-hat", "Chef Hat", '<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/>'],
  ["cherry", "Cherry", '<path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"/><path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"/><path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"/><path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"/>'],
  ["chess-bishop", "Chess Bishop", '<path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18"/><path d="m16 7-2.5 2.5"/><path d="M9 2h6"/>'],
  ["chess-king", "Chess King", '<path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1"/><path d="M10 4h4"/><path d="M12 2v6.818"/>'],
  ["chess-knight", "Chess Knight", '<path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456"/><path d="m15 5 1.425-1.425"/><path d="m17 8 1.53-1.53"/><path d="M9.713 12.185 7 18"/>'],
  ["chess-pawn", "Chess Pawn", '<path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="m14.5 10 1.5 8"/><path d="M7 10h10"/><path d="m8 18 1.5-8"/><circle cx="12" cy="6" r="4"/>'],
  ["chess-queen", "Chess Queen", '<path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402"/><path d="m20 9-3 9"/><path d="m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34"/><path d="M7 18 4 9"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="7" r="2"/><circle cx="4" cy="7" r="2"/>'],
  ["chess-rook", "Chess Rook", '<path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M10 2v2"/><path d="M14 2v2"/><path d="m17 18-1-9"/><path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2"/><path d="M6 4h12"/><path d="m7 18 1-9"/>'],
  ["chevron-down", "Chevron Down", '<path d="m6 9 6 6 6-6"/>'],
  ["chevron-down-circle", "Chevron Down Circle", '<circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/>'],
  ["chevron-down-square", "Chevron Down Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 10-4 4-4-4"/>'],
  ["chevron-first", "Chevron First", '<path d="m17 18-6-6 6-6"/><path d="M7 6v12"/>'],
  ["chevron-last", "Chevron Last", '<path d="m7 18 6-6-6-6"/><path d="M17 6v12"/>'],
  ["chevron-left", "Chevron Left", '<path d="m15 18-6-6 6-6"/>'],
  ["chevron-left-circle", "Chevron Left Circle", '<circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/>'],
  ["chevron-left-square", "Chevron Left Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m14 16-4-4 4-4"/>'],
  ["chevron-right", "Chevron Right", '<path d="m9 18 6-6-6-6"/>'],
  ["chevron-right-circle", "Chevron Right Circle", '<circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/>'],
  ["chevron-right-square", "Chevron Right Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/>'],
  ["chevron-up", "Chevron Up", '<path d="m18 15-6-6-6 6"/>'],
  ["chevron-up-circle", "Chevron Up Circle", '<circle cx="12" cy="12" r="10"/><path d="m8 14 4-4 4 4"/>'],
  ["chevron-up-square", "Chevron Up Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m8 14 4-4 4 4"/>'],
  ["chevrons-down", "Chevrons Down", '<path d="m7 6 5 5 5-5"/><path d="m7 13 5 5 5-5"/>'],
  ["chevrons-down-up", "Chevrons Down Up", '<path d="m7 20 5-5 5 5"/><path d="m7 4 5 5 5-5"/>'],
  ["chevrons-left", "Chevrons Left", '<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>'],
  ["chevrons-left-right", "Chevrons Left Right", '<path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/>'],
  ["chevrons-left-right-ellipsis", "Chevrons Left Right Ellipsis", '<path d="M12 12h.01"/><path d="M16 12h.01"/><path d="m17 7 5 5-5 5"/><path d="m7 7-5 5 5 5"/><path d="M8 12h.01"/>'],
  ["chevrons-right", "Chevrons Right", '<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>'],
  ["chevrons-right-left", "Chevrons Right Left", '<path d="m20 17-5-5 5-5"/><path d="m4 17 5-5-5-5"/>'],
  ["chevrons-up", "Chevrons Up", '<path d="m17 11-5-5-5 5"/><path d="m17 18-5-5-5 5"/>'],
  ["chevrons-up-down", "Chevrons Up Down", '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>'],
  ["church", "Church", '<path d="M10 9h4"/><path d="M12 7v5"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9"/><path d="M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14"/>'],
  ["cigarette", "Cigarette", '<path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"/><path d="M18 8c0-2.5-2-2.5-2-5"/><path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M22 8c0-2.5-2-2.5-2-5"/><path d="M7 12v4"/>'],
  ["cigarette-off", "Cigarette Off", '<path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"/><path d="M18 8c0-2.5-2-2.5-2-5"/><path d="m2 2 20 20"/><path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"/><path d="M22 8c0-2.5-2-2.5-2-5"/><path d="M7 12v4"/>'],
  ["circle", "Circle", '<circle cx="12" cy="12" r="10"/>'],
  ["circle-alert", "Circle Alert", '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>'],
  ["circle-arrow-down", "Circle Arrow Down", '<circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/>'],
  ["circle-arrow-left", "Circle Arrow Left", '<circle cx="12" cy="12" r="10"/><path d="m12 8-4 4 4 4"/><path d="M16 12H8"/>'],
  ["circle-arrow-out-down-left", "Circle Arrow Out Down Left", '<path d="M2 12a10 10 0 1 1 10 10"/><path d="m2 22 10-10"/><path d="M8 22H2v-6"/>'],
  ["circle-arrow-out-down-right", "Circle Arrow Out Down Right", '<path d="M12 22a10 10 0 1 1 10-10"/><path d="M22 22 12 12"/><path d="M22 16v6h-6"/>'],
  ["circle-arrow-out-up-left", "Circle Arrow Out Up Left", '<path d="M2 8V2h6"/><path d="m2 2 10 10"/><path d="M12 2A10 10 0 1 1 2 12"/>'],
  ["circle-arrow-out-up-right", "Circle Arrow Out Up Right", '<path d="M22 12A10 10 0 1 1 12 2"/><path d="M22 2 12 12"/><path d="M16 2h6v6"/>'],
  ["circle-arrow-right", "Circle Arrow Right", '<circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/>'],
  ["circle-arrow-up", "Circle Arrow Up", '<circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/>'],
  ["circle-check", "Circle Check", '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'],
  ["circle-check-big", "Circle Check Big", '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>'],
  ["circle-chevron-down", "Circle Chevron Down", '<circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/>'],
  ["circle-chevron-left", "Circle Chevron Left", '<circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/>'],
  ["circle-chevron-right", "Circle Chevron Right", '<circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/>'],
  ["circle-chevron-up", "Circle Chevron Up", '<circle cx="12" cy="12" r="10"/><path d="m8 14 4-4 4 4"/>'],
  ["circle-dashed", "Circle Dashed", '<path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"/>'],
  ["circle-divide", "Circle Divide", '<circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="12" y2="12"/><line x1="12" x2="12" y1="16" y2="16"/><line x1="12" x2="12" y1="8" y2="8"/>'],
  ["circle-dollar-sign", "Circle Dollar Sign", '<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>'],
  ["circle-dot", "Circle Dot", '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/>'],
  ["circle-dot-dashed", "Circle Dot Dashed", '<path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"/><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"/><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"/><circle cx="12" cy="12" r="1"/>'],
  ["circle-ellipsis", "Circle Ellipsis", '<circle cx="12" cy="12" r="10"/><path d="M17 12h.01"/><path d="M12 12h.01"/><path d="M7 12h.01"/>'],
  ["circle-equal", "Circle Equal", '<circle cx="12" cy="12" r="10"/><path d="M7 10h10"/><path d="M7 14h10"/>'],
  ["circle-fading-arrow-up", "Circle Fading Arrow Up", '<path d="M12 2a10 10 0 0 1 7.38 16.75"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/><path d="M2.5 8.875a10 10 0 0 0-.5 3"/><path d="M2.83 16a10 10 0 0 0 2.43 3.4"/><path d="M4.636 5.235a10 10 0 0 1 .891-.857"/><path d="M8.644 21.42a10 10 0 0 0 7.631-.38"/>'],
  ["circle-fading-plus", "Circle Fading Plus", '<path d="M12 2a10 10 0 0 1 7.38 16.75"/><path d="M12 8v8"/><path d="M16 12H8"/><path d="M2.5 8.875a10 10 0 0 0-.5 3"/><path d="M2.83 16a10 10 0 0 0 2.43 3.4"/><path d="M4.636 5.235a10 10 0 0 1 .891-.857"/><path d="M8.644 21.42a10 10 0 0 0 7.631-.38"/>'],
  ["circle-gauge", "Circle Gauge", '<path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19 5"/>'],
  ["circle-help", "Circle Help", '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>'],
  ["circle-minus", "Circle Minus", '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>'],
  ["circle-off", "Circle Off", '<path d="m2 2 20 20"/><path d="M8.35 2.69A10 10 0 0 1 21.3 15.65"/><path d="M19.08 19.08A10 10 0 1 1 4.92 4.92"/>'],
  ["circle-parking", "Circle Parking", '<circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>'],
  ["circle-parking-off", "Circle Parking Off", '<path d="M12.656 7H13a3 3 0 0 1 2.984 3.307"/><path d="M13 13H9"/><path d="M19.071 19.071A1 1 0 0 1 4.93 4.93"/><path d="m2 2 20 20"/><path d="M8.357 2.687a10 10 0 0 1 12.956 12.956"/><path d="M9 17V9"/>'],
  ["circle-pause", "Circle Pause", '<circle cx="12" cy="12" r="10"/><line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/>'],
  ["circle-percent", "Circle Percent", '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/>'],
  ["circle-pile", "Circle Pile", '<circle cx="12" cy="19" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="20" cy="19" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="8" cy="12" r="2"/>'],
  ["circle-play", "Circle Play", '<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/><circle cx="12" cy="12" r="10"/>'],
  ["circle-plus", "Circle Plus", '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>'],
  ["circle-pound-sterling", "Circle Pound Sterling", '<circle cx="12" cy="12" r="10"/><path d="M10 16V9.5a1 1 0 0 1 5 0"/><path d="M8 12h4"/><path d="M8 16h7"/>'],
  ["circle-power", "Circle Power", '<circle cx="12" cy="12" r="10"/><path d="M12 7v4"/><path d="M7.998 9.003a5 5 0 1 0 8-.005"/>'],
  ["circle-question-mark", "Circle Question Mark", '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>'],
  ["circle-slash", "Circle Slash", '<circle cx="12" cy="12" r="10"/><line x1="9" x2="15" y1="15" y2="9"/>'],
  ["circle-slash2", "Circle Slash2", '<circle cx="12" cy="12" r="10"/><path d="M22 2 2 22"/>'],
  ["circle-slashed", "Circle Slashed", '<circle cx="12" cy="12" r="10"/><path d="M22 2 2 22"/>'],
  ["circle-small", "Circle Small", '<circle cx="12" cy="12" r="6"/>'],
  ["circle-star", "Circle Star", '<circle cx="12" cy="12" r="10"/><path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/>'],
  ["circle-stop", "Circle Stop", '<circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6" rx="1"/>'],
  ["circle-user", "Circle User", '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>'],
  ["circle-user-round", "Circle User Round", '<path d="M17.925 20.056a6 6 0 0 0-11.851.001"/><circle cx="12" cy="11" r="4"/><circle cx="12" cy="12" r="10"/>'],
  ["circle-x", "Circle X", '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>'],
  ["circuit-board", "Circuit Board", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M11 9h4a2 2 0 0 0 2-2V3"/><circle cx="9" cy="9" r="2"/><path d="M7 21v-4a2 2 0 0 1 2-2h4"/><circle cx="15" cy="15" r="2"/>'],
  ["citrus", "Citrus", '<path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"/><path d="M19.65 15.66A8 8 0 0 1 8.35 4.34"/><path d="m14 10-5.5 5.5"/><path d="M14 17.85V10H6.15"/>'],
  ["clapperboard", "Clapperboard", '<path d="m12.296 3.464 3.02 3.956"/><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m6.18 5.276 3.1 3.899"/>'],
  ["clipboard", "Clipboard", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>'],
  ["clipboard-check", "Clipboard Check", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>'],
  ["clipboard-clock", "Clipboard Clock", '<path d="M16 14v2.2l1.6 1"/><path d="M16 4h2a2 2 0 0 1 2 2v.832"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect x="8" y="2" width="8" height="4" rx="1"/>'],
  ["clipboard-copy", "Clipboard Copy", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M16 4h2a2 2 0 0 1 2 2v4"/><path d="M21 14H11"/><path d="m15 10-4 4 4 4"/>'],
  ["clipboard-edit", "Clipboard Edit", '<path d="M16 4h2a2 2 0 0 1 2 2v2"/><path d="M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>'],
  ["clipboard-list", "Clipboard List", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>'],
  ["clipboard-minus", "Clipboard Minus", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/>'],
  ["clipboard-paste", "Clipboard Paste", '<path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/>'],
  ["clipboard-pen", "Clipboard Pen", '<path d="M16 4h2a2 2 0 0 1 2 2v2"/><path d="M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>'],
  ["clipboard-pen-line", "Clipboard Pen Line", '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"/><path d="M16 4h2a2 2 0 0 1 1.73 1"/><path d="M8 18h1"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>'],
  ["clipboard-plus", "Clipboard Plus", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/><path d="M12 17v-6"/>'],
  ["clipboard-signature", "Clipboard Signature", '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"/><path d="M16 4h2a2 2 0 0 1 1.73 1"/><path d="M8 18h1"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>'],
  ["clipboard-type", "Clipboard Type", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12v-1h6v1"/><path d="M11 17h2"/><path d="M12 11v6"/>'],
  ["clipboard-x", "Clipboard X", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m15 11-6 6"/><path d="m9 11 6 6"/>'],
  ["clock", "Clock", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'],
  ["clock-alert", "Clock Alert", '<path d="M12 6v6l4 2"/><path d="M20 12v5"/><path d="M20 21h.01"/><path d="M21.25 8.2A10 10 0 1 0 16 21.16"/>'],
  ["clock-arrow-down", "Clock Arrow Down", '<path d="M12 6v6l2 1"/><path d="M12.337 21.994a10 10 0 1 1 9.588-8.767"/><path d="m14 18 4 4 4-4"/><path d="M18 14v8"/>'],
  ["clock-arrow-up", "Clock Arrow Up", '<path d="M12 6v6l1.56.78"/><path d="M13.227 21.925a10 10 0 1 1 8.767-9.588"/><path d="m14 18 4-4 4 4"/><path d="M18 22v-8"/>'],
  ["clock-check", "Clock Check", '<path d="M12 6v6l4 2"/><path d="M22 12a10 10 0 1 0-11 9.95"/><path d="m22 16-5.5 5.5L14 19"/>'],
  ["clock-fading", "Clock Fading", '<path d="M12 2a10 10 0 0 1 7.38 16.75"/><path d="M12 6v6l4 2"/><path d="M2.5 8.875a10 10 0 0 0-.5 3"/><path d="M2.83 16a10 10 0 0 0 2.43 3.4"/><path d="M4.636 5.235a10 10 0 0 1 .891-.857"/><path d="M8.644 21.42a10 10 0 0 0 7.631-.38"/>'],
  ["clock-plus", "Clock Plus", '<path d="M12 6v6l3.644 1.822"/><path d="M16 19h6"/><path d="M19 16v6"/><path d="M21.92 13.267a10 10 0 1 0-8.653 8.653"/>'],
  ["clock1", "Clock1", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l2-4"/>'],
  ["clock10", "Clock10", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l-4-2"/>'],
  ["clock11", "Clock11", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l-2-4"/>'],
  ["clock12", "Clock12", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6"/>'],
  ["clock2", "Clock2", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4-2"/>'],
  ["clock3", "Clock3", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6h4"/>'],
  ["clock4", "Clock4", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'],
  ["clock5", "Clock5", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l2 4"/>'],
  ["clock6", "Clock6", '<circle cx="12" cy="12" r="10"/><path d="M12 6v10"/>'],
  ["clock7", "Clock7", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l-2 4"/>'],
  ["clock8", "Clock8", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l-4 2"/>'],
  ["clock9", "Clock9", '<circle cx="12" cy="12" r="10"/><path d="M12 6v6H8"/>'],
  ["closed-caption", "Closed Caption", '<path d="M10 9.17a3 3 0 1 0 0 5.66"/><path d="M17 9.17a3 3 0 1 0 0 5.66"/><rect x="2" y="5" width="20" height="14" rx="2"/>'],
  ["cloud", "Cloud", '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>'],
  ["cloud-alert", "Cloud Alert", '<path d="M12 12v4"/><path d="M12 20h.01"/><path d="M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642"/>'],
  ["cloud-backup", "Cloud Backup", '<path d="M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607"/><path d="M7 11v4h4"/><path d="M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15"/>'],
  ["cloud-check", "Cloud Check", '<path d="m17 15-5.5 5.5L9 18"/><path d="M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327"/>'],
  ["cloud-cog", "Cloud Cog", '<path d="m10.852 19.772-.383.924"/><path d="m13.148 14.228.383-.923"/><path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"/><path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"/><path d="m14.772 15.852.923-.383"/><path d="m14.772 18.148.923.383"/><path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"/><path d="m9.228 15.852-.923-.383"/><path d="m9.228 18.148-.923.383"/>'],
  ["cloud-download", "Cloud Download", '<path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/>'],
  ["cloud-drizzle", "Cloud Drizzle", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M8 19v1"/><path d="M8 14v1"/><path d="M16 19v1"/><path d="M16 14v1"/><path d="M12 21v1"/><path d="M12 16v1"/>'],
  ["cloud-fog", "Cloud Fog", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 17H7"/><path d="M17 21H9"/>'],
  ["cloud-hail", "Cloud Hail", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v2"/><path d="M8 14v2"/><path d="M16 20h.01"/><path d="M8 20h.01"/><path d="M12 16v2"/><path d="M12 22h.01"/>'],
  ["cloud-lightning", "Cloud Lightning", '<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/>'],
  ["cloud-moon", "Cloud Moon", '<path d="M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z"/><path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"/>'],
  ["cloud-moon-rain", "Cloud Moon Rain", '<path d="M11 20v2"/><path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"/><path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"/><path d="M7 19v2"/>'],
  ["cloud-off", "Cloud Off", '<path d="M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057"/><path d="M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78"/><path d="m2 2 20 20"/>'],
  ["cloud-rain", "Cloud Rain", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>'],
  ["cloud-rain-wind", "Cloud Rain Wind", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m9.2 22 3-7"/><path d="m9 13-3 7"/><path d="m17 13-3 7"/>'],
  ["cloud-snow", "Cloud Snow", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M8 15h.01"/><path d="M8 19h.01"/><path d="M12 17h.01"/><path d="M12 21h.01"/><path d="M16 15h.01"/><path d="M16 19h.01"/>'],
  ["cloud-sun", "Cloud Sun", '<path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>'],
  ["cloud-sun-rain", "Cloud Sun Rain", '<path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"/><path d="M11 20v2"/><path d="M7 19v2"/>'],
  ["cloud-sync", "Cloud Sync", '<path d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M17 22v-4h-4"/><path d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607"/><path d="M7 10v4h4"/><path d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5"/>'],
  ["cloud-upload", "Cloud Upload", '<path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/>'],
  ["cloudy", "Cloudy", '<path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z"/><path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61"/>'],
  ["clover", "Clover", '<path d="M16.17 7.83 2 22"/><path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"/><path d="m7.83 7.83 8.34 8.34"/>'],
  ["club", "Club", '<path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"/><path d="M12 17.66L12 22"/>'],
  ["code", "Code", '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>'],
  ["code-square", "Code Square", '<path d="m10 9-3 3 3 3"/><path d="m14 15 3-3-3-3"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["code-xml", "Code Xml", '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>'],
  ["code2", "Code2", '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>'],
  ["coffee", "Coffee", '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>'],
  ["cog", "Cog", '<path d="M11 10.27 7 3.34"/><path d="m11 13.73-4 6.93"/><path d="M12 22v-2"/><path d="M12 2v2"/><path d="M14 12h8"/><path d="m17 20.66-1-1.73"/><path d="m17 3.34-1 1.73"/><path d="M2 12h2"/><path d="m20.66 17-1.73-1"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m3.34 7 1.73 1"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="8"/>'],
  ["coins", "Coins", '<path d="M13.744 17.736a6 6 0 1 1-7.48-7.48"/><path d="M15 6h1v4"/><path d="m6.134 14.768.866-.5 2 3.464"/><circle cx="16" cy="8" r="6"/>'],
  ["columns", "Columns", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/>'],
  ["columns-settings", "Columns Settings", '<path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"/><path d="m14.3 19.6 1-.4"/><path d="M15 3v7.5"/><path d="m15.2 16.9-.9-.3"/><path d="m16.6 21.7.3-.9"/><path d="m16.8 15.3-.4-1"/><path d="m19.1 15.2.3-.9"/><path d="m19.6 21.7-.4-1"/><path d="m20.7 16.8 1-.4"/><path d="m21.7 19.4-.9-.3"/><path d="M9 3v18"/><circle cx="18" cy="18" r="3"/>'],
  ["columns2", "Columns2", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/>'],
  ["columns3", "Columns3", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>'],
  ["columns3-cog", "Columns3 Cog", '<path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"/><path d="m14.3 19.6 1-.4"/><path d="M15 3v7.5"/><path d="m15.2 16.9-.9-.3"/><path d="m16.6 21.7.3-.9"/><path d="m16.8 15.3-.4-1"/><path d="m19.1 15.2.3-.9"/><path d="m19.6 21.7-.4-1"/><path d="m20.7 16.8 1-.4"/><path d="m21.7 19.4-.9-.3"/><path d="M9 3v18"/><circle cx="18" cy="18" r="3"/>'],
  ["columns4", "Columns4", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7.5 3v18"/><path d="M12 3v18"/><path d="M16.5 3v18"/>'],
  ["combine", "Combine", '<path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"/><path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"/><path d="m7 15 3 3"/><path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="3" width="7" height="7" rx="1"/>'],
  ["command", "Command", '<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>'],
  ["compass", "Compass", '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/>'],
  ["component", "Component", '<path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"/><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"/><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/>'],
  ["computer", "Computer", '<rect width="14" height="8" x="5" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h2"/><path d="M12 18h6"/>'],
  ["concierge-bell", "Concierge Bell", '<path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"/><path d="M20 16a8 8 0 1 0-16 0"/><path d="M12 4v4"/><path d="M10 4h4"/>'],
  ["cone", "Cone", '<path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"/><ellipse cx="12" cy="19" rx="9" ry="3"/>'],
  ["construction", "Construction", '<rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 6 7.7 7.7"/><path d="m8 6 8 8"/>'],
  ["contact", "Contact", '<path d="M16 2v2"/><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M8 2v2"/><circle cx="12" cy="11" r="3"/><rect x="3" y="4" width="18" height="18" rx="2"/>'],
  ["contact-round", "Contact Round", '<path d="M16 2v2"/><path d="M17.915 22a6 6 0 0 0-12 0"/><path d="M8 2v2"/><circle cx="12" cy="12" r="4"/><rect x="3" y="4" width="18" height="18" rx="2"/>'],
  ["contact2", "Contact2", '<path d="M16 2v2"/><path d="M17.915 22a6 6 0 0 0-12 0"/><path d="M8 2v2"/><circle cx="12" cy="12" r="4"/><rect x="3" y="4" width="18" height="18" rx="2"/>'],
  ["container", "Container", '<path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"/><path d="M10 21.9V14L2.1 9.1"/><path d="m10 14 11.9-6.9"/><path d="M14 19.8v-8.1"/><path d="M18 17.5V9.4"/>'],
  ["contrast", "Contrast", '<circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/>'],
  ["cookie", "Cookie", '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/>'],
  ["cooking-pot", "Cooking Pot", '<path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/>'],
  ["copy", "Copy", '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'],
  ["copy-check", "Copy Check", '<path d="m12 15 2 2 4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'],
  ["copy-minus", "Copy Minus", '<line x1="12" x2="18" y1="15" y2="15"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'],
  ["copy-plus", "Copy Plus", '<line x1="15" x2="15" y1="12" y2="18"/><line x1="12" x2="18" y1="15" y2="15"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'],
  ["copy-slash", "Copy Slash", '<line x1="12" x2="18" y1="18" y2="12"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'],
  ["copy-x", "Copy X", '<line x1="12" x2="18" y1="12" y2="18"/><line x1="12" x2="18" y1="18" y2="12"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'],
  ["copyleft", "Copyleft", '<circle cx="12" cy="12" r="10"/><path d="M9.17 14.83a4 4 0 1 0 0-5.66"/>'],
  ["copyright", "Copyright", '<circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/>'],
  ["corner-down-left", "Corner Down Left", '<path d="M20 4v7a4 4 0 0 1-4 4H4"/><path d="m9 10-5 5 5 5"/>'],
  ["corner-down-right", "Corner Down Right", '<path d="m15 10 5 5-5 5"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/>'],
  ["corner-left-down", "Corner Left Down", '<path d="m14 15-5 5-5-5"/><path d="M20 4h-7a4 4 0 0 0-4 4v12"/>'],
  ["corner-left-up", "Corner Left Up", '<path d="M14 9 9 4 4 9"/><path d="M20 20h-7a4 4 0 0 1-4-4V4"/>'],
  ["corner-right-down", "Corner Right Down", '<path d="m10 15 5 5 5-5"/><path d="M4 4h7a4 4 0 0 1 4 4v12"/>'],
  ["corner-right-up", "Corner Right Up", '<path d="m10 9 5-5 5 5"/><path d="M4 20h7a4 4 0 0 0 4-4V4"/>'],
  ["corner-up-left", "Corner Up Left", '<path d="M20 20v-7a4 4 0 0 0-4-4H4"/><path d="M9 14 4 9l5-5"/>'],
  ["corner-up-right", "Corner Up Right", '<path d="m15 14 5-5-5-5"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>'],
  ["cpu", "Cpu", '<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>'],
  ["creative-commons", "Creative Commons", '<circle cx="12" cy="12" r="10"/><path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"/><path d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"/>'],
  ["credit-card", "Credit Card", '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>'],
  ["croissant", "Croissant", '<path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487"/><path d="M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132"/><path d="M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42"/><path d="M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14"/><path d="M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676"/>'],
  ["crop", "Crop", '<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>'],
  ["cross", "Cross", '<path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"/>'],
  ["crosshair", "Crosshair", '<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>'],
  ["crown", "Crown", '<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>'],
  ["cuboid", "Cuboid", '<path d="M10 22v-8"/><path d="M2.336 8.89 10 14l11.715-7.029"/><path d="M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z"/>'],
  ["cup-soda", "Cup Soda", '<path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"/><path d="M5 8h14"/><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/><path d="m12 8 1-6h2"/>'],
  ["curly-braces", "Curly Braces", '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>'],
  ["currency", "Currency", '<circle cx="12" cy="12" r="8"/><line x1="3" x2="6" y1="3" y2="6"/><line x1="21" x2="18" y1="3" y2="6"/><line x1="3" x2="6" y1="21" y2="18"/><line x1="21" x2="18" y1="21" y2="18"/>'],
  ["cylinder", "Cylinder", '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/>'],
  ["dam", "Dam", '<path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M2 6h4"/><path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"/>'],
  ["database", "Database", '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>'],
  ["database-backup", "Database Backup", '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12a9 3 0 0 0 5 2.69"/><path d="M21 9.3V5"/><path d="M3 5v14a9 3 0 0 0 6.47 2.88"/><path d="M12 12v4h4"/><path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"/>'],
  ["database-search", "Database Search", '<path d="M21 11.693V5"/><path d="m22 22-1.875-1.875"/><path d="M3 12a9 3 0 0 0 8.697 2.998"/><path d="M3 5v14a9 3 0 0 0 9.28 2.999"/><circle cx="18" cy="18" r="3"/><ellipse cx="12" cy="5" rx="9" ry="3"/>'],
  ["database-zap", "Database Zap", '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/>'],
  ["decimals-arrow-left", "Decimals Arrow Left", '<path d="m13 21-3-3 3-3"/><path d="M20 18H10"/><path d="M3 11h.01"/><rect x="6" y="3" width="5" height="8" rx="2.5"/>'],
  ["decimals-arrow-right", "Decimals Arrow Right", '<path d="M10 18h10"/><path d="m17 21 3-3-3-3"/><path d="M3 11h.01"/><rect x="15" y="3" width="5" height="8" rx="2.5"/><rect x="6" y="3" width="5" height="8" rx="2.5"/>'],
  ["delete", "Delete", '<path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/><path d="m12 9 6 6"/><path d="m18 9-6 6"/>'],
  ["dessert", "Dessert", '<path d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826"/><path d="M20.804 14.869a9 9 0 0 1-17.608 0"/><circle cx="12" cy="4" r="2"/>'],
  ["diameter", "Diameter", '<circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/><path d="M6.48 3.66a10 10 0 0 1 13.86 13.86"/><path d="m6.41 6.41 11.18 11.18"/><path d="M3.66 6.48a10 10 0 0 0 13.86 13.86"/>'],
  ["diamond", "Diamond", '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>'],
  ["diamond-minus", "Diamond Minus", '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"/><path d="M8 12h8"/>'],
  ["diamond-percent", "Diamond Percent", '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"/><path d="M9.2 9.2h.01"/><path d="m14.5 9.5-5 5"/><path d="M14.7 14.8h.01"/>'],
  ["diamond-plus", "Diamond Plus", '<path d="M12 8v8"/><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"/><path d="M8 12h8"/>'],
  ["dice1", "Dice1", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M12 12h.01"/>'],
  ["dice2", "Dice2", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M15 9h.01"/><path d="M9 15h.01"/>'],
  ["dice3", "Dice3", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M16 8h.01"/><path d="M12 12h.01"/><path d="M8 16h.01"/>'],
  ["dice4", "Dice4", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M16 8h.01"/><path d="M8 8h.01"/><path d="M8 16h.01"/><path d="M16 16h.01"/>'],
  ["dice5", "Dice5", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M16 8h.01"/><path d="M8 8h.01"/><path d="M8 16h.01"/><path d="M16 16h.01"/><path d="M12 12h.01"/>'],
  ["dice6", "Dice6", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M16 8h.01"/><path d="M16 12h.01"/><path d="M16 16h.01"/><path d="M8 8h.01"/><path d="M8 12h.01"/><path d="M8 16h.01"/>'],
  ["dices", "Dices", '<rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"/><path d="M6 18h.01"/><path d="M10 14h.01"/><path d="M15 6h.01"/><path d="M18 9h.01"/>'],
  ["diff", "Diff", '<path d="M12 3v14"/><path d="M5 10h14"/><path d="M5 21h14"/>'],
  ["disc", "Disc", '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/>'],
  ["disc-album", "Disc Album", '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="5"/><path d="M12 12h.01"/>'],
  ["disc2", "Disc2", '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 12h.01"/>'],
  ["disc3", "Disc3", '<circle cx="12" cy="12" r="10"/><path d="M6 12c0-1.7.7-3.2 1.8-4.2"/><circle cx="12" cy="12" r="2"/><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"/>'],
  ["divide", "Divide", '<circle cx="12" cy="6" r="1"/><line x1="5" x2="19" y1="12" y2="12"/><circle cx="12" cy="18" r="1"/>'],
  ["divide-circle", "Divide Circle", '<circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="12" y2="12"/><line x1="12" x2="12" y1="16" y2="16"/><line x1="12" x2="12" y1="8" y2="8"/>'],
  ["divide-square", "Divide Square", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="8" x2="16" y1="12" y2="12"/><line x1="12" x2="12" y1="16" y2="16"/><line x1="12" x2="12" y1="8" y2="8"/>'],
  ["dna", "Dna", '<path d="m10 16 1.5 1.5"/><path d="m14 8-1.5-1.5"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="m16.5 10.5 1 1"/><path d="m17 6-2.891-2.891"/><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="m20 9 .891.891"/><path d="M3.109 14.109 4 15"/><path d="m6.5 12.5 1 1"/><path d="m7 18 2.891 2.891"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/>'],
  ["dna-off", "Dna Off", '<path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"/><path d="m17 6-2.891-2.891"/><path d="M2 15c3.333-3 6.667-3 10-3"/><path d="m2 2 20 20"/><path d="m20 9 .891.891"/><path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"/><path d="M3.109 14.109 4 15"/><path d="m6.5 12.5 1 1"/><path d="m7 18 2.891 2.891"/><path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"/>'],
  ["dock", "Dock", '<path d="M2 8h20"/><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 16h12"/>'],
  ["dog", "Dog", '<path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>'],
  ["dollar-sign", "Dollar Sign", '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'],
  ["donut", "Donut", '<path d="M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"/><circle cx="12" cy="12" r="3"/>'],
  ["door-closed", "Door Closed", '<path d="M10 12h.01"/><path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h20"/>'],
  ["door-closed-locked", "Door Closed Locked", '<path d="M10 12h.01"/><path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h8"/><path d="M20 17v-2a2 2 0 1 0-4 0v2"/><rect x="14" y="17" width="8" height="5" rx="1"/>'],
  ["door-open", "Door Open", '<path d="M11 20H2"/><path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"/><path d="M11 4H8a2 2 0 0 0-2 2v14"/><path d="M14 12h.01"/><path d="M22 20h-3"/>'],
  ["dot", "Dot", '<circle cx="12.1" cy="12.1" r="1"/>'],
  ["dot-square", "Dot Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="1"/>'],
  ["download", "Download", '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>'],
  ["download-cloud", "Download Cloud", '<path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/>'],
  ["drafting-compass", "Drafting Compass", '<path d="m12.99 6.74 1.93 3.44"/><path d="M19.136 12a10 10 0 0 1-14.271 0"/><path d="m21 21-2.16-3.84"/><path d="m3 21 8.02-14.26"/><circle cx="12" cy="5" r="2"/>'],
  ["drama", "Drama", '<path d="M10 11h.01"/><path d="M14 6h.01"/><path d="M18 6h.01"/><path d="M6.5 13.1h.01"/><path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"/><path d="M17.4 9.9c-.8.8-2 .8-2.8 0"/><path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"/><path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"/>'],
  ["drill", "Drill", '<path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"/><path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"/><path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"/><path d="M18 6h4"/><path d="m5 10-2 8"/><path d="m7 18 2-8"/>'],
  ["drone", "Drone", '<path d="M10 10 7 7"/><path d="m10 14-3 3"/><path d="m14 10 3-3"/><path d="m14 14 3 3"/><path d="M14.205 4.139a4 4 0 1 1 5.439 5.863"/><path d="M19.637 14a4 4 0 1 1-5.432 5.868"/><path d="M4.367 10a4 4 0 1 1 5.438-5.862"/><path d="M9.795 19.862a4 4 0 1 1-5.429-5.873"/><rect x="10" y="8" width="4" height="8" rx="1"/>'],
  ["droplet", "Droplet", '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>'],
  ["droplet-off", "Droplet Off", '<path d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"/><path d="m2 2 20 20"/><path d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"/>'],
  ["droplets", "Droplets", '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>'],
  ["drum", "Drum", '<path d="m2 2 8 8"/><path d="m22 2-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9"/><path d="M12 14v8"/><path d="M17 13.4v7.9"/><path d="M2 9v8a10 5 0 0 0 20 0V9"/>'],
  ["drumstick", "Drumstick", '<path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"/><path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"/>'],
  ["dumbbell", "Dumbbell", '<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>'],
  ["ear", "Ear", '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/>'],
  ["ear-off", "Ear Off", '<path d="M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"/><path d="M6 8.5c0-.75.13-1.47.36-2.14"/><path d="M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"/><path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"/><line x1="2" x2="22" y1="2" y2="22"/>'],
  ["earth", "Earth", '<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/>'],
  ["earth-lock", "Earth Lock", '<path d="M7 3.34V5a3 3 0 0 0 3 3"/><path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M12 2a10 10 0 1 0 9.54 13"/><path d="M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/>'],
  ["eclipse", "Eclipse", '<circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 1 0 10 10"/>'],
  ["edit", "Edit", '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>'],
  ["edit2", "Edit2", '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>'],
  ["edit3", "Edit3", '<path d="M13 21h8"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>'],
  ["egg", "Egg", '<path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"/>'],
  ["egg-fried", "Egg Fried", '<circle cx="11.5" cy="12.5" r="3.5"/><path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"/>'],
  ["egg-off", "Egg Off", '<path d="m2 2 20 20"/><path d="M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19"/><path d="M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568"/>'],
  ["ellipse", "Ellipse", '<ellipse cx="12" cy="12" rx="10" ry="6"/>'],
  ["ellipsis", "Ellipsis", '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>'],
  ["ellipsis-vertical", "Ellipsis Vertical", '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>'],
  ["equal", "Equal", '<line x1="5" x2="19" y1="9" y2="9"/><line x1="5" x2="19" y1="15" y2="15"/>'],
  ["equal-approximately", "Equal Approximately", '<path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"/><path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"/>'],
  ["equal-not", "Equal Not", '<line x1="5" x2="19" y1="9" y2="9"/><line x1="5" x2="19" y1="15" y2="15"/><line x1="19" x2="5" y1="5" y2="19"/>'],
  ["equal-square", "Equal Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 10h10"/><path d="M7 14h10"/>'],
  ["eraser", "Eraser", '<path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"/><path d="m5.082 11.09 8.828 8.828"/>'],
  ["ethernet-port", "Ethernet Port", '<path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"/><path d="M6 8v1"/><path d="M10 8v1"/><path d="M14 8v1"/><path d="M18 8v1"/>'],
  ["euro", "Euro", '<path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>'],
  ["ev-charger", "Ev Charger", '<path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"/><path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"/><path d="M2 21h13"/><path d="M3 7h11"/><path d="m9 11-2 3h3l-2 3"/>'],
  ["expand", "Expand", '<path d="m15 15 6 6"/><path d="m15 9 6-6"/><path d="M21 16v5h-5"/><path d="M21 8V3h-5"/><path d="M3 16v5h5"/><path d="m3 21 6-6"/><path d="M3 8V3h5"/><path d="M9 9 3 3"/>'],
  ["external-link", "External Link", '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'],
  ["eye", "Eye", '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>'],
  ["eye-closed", "Eye Closed", '<path d="m15 18-.722-3.25"/><path d="M2 8a10.645 10.645 0 0 0 20 0"/><path d="m20 15-1.726-2.05"/><path d="m4 15 1.726-2.05"/><path d="m9 18 .722-3.25"/>'],
  ["eye-off", "Eye Off", '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>'],
  ["factory", "Factory", '<path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/>'],
  ["fan", "Fan", '<path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/>'],
  ["fast-forward", "Fast Forward", '<path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"/><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"/>'],
  ["feather", "Feather", '<path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/>'],
  ["fence", "Fence", '<path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/><path d="M6 8h4"/><path d="M6 18h4"/><path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/><path d="M14 8h4"/><path d="M14 18h4"/><path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/>'],
  ["ferris-wheel", "Ferris Wheel", '<circle cx="12" cy="12" r="2"/><path d="M12 2v4"/><path d="m6.8 15-3.5 2"/><path d="m20.7 7-3.5 2"/><path d="M6.8 9 3.3 7"/><path d="m20.7 17-3.5-2"/><path d="m9 22 3-8 3 8"/><path d="M8 22h8"/><path d="M18 18.7a9 9 0 1 0-12 0"/>'],
  ["file", "File", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/>'],
  ["file-archive", "File Archive", '<path d="M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 12v-1"/><path d="M8 18v-2"/><path d="M8 7V6"/><circle cx="8" cy="20" r="2"/>'],
  ["file-audio", "File Audio", '<path d="M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0"/>'],
  ["file-audio2", "File Audio2", '<path d="M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0"/>'],
  ["file-axis3-d", "File Axis3 D", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m8 18 4-4"/><path d="M8 10v8h8"/>'],
  ["file-axis3d", "File Axis3d", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m8 18 4-4"/><path d="M8 10v8h8"/>'],
  ["file-badge", "File Badge", '<path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"/><circle cx="6" cy="14" r="3"/>'],
  ["file-badge2", "File Badge2", '<path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"/><circle cx="6" cy="14" r="3"/>'],
  ["file-bar-chart", "File Bar Chart", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 18v-2"/><path d="M12 18v-4"/><path d="M16 18v-6"/>'],
  ["file-bar-chart2", "File Bar Chart2", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 18v-1"/><path d="M12 18v-6"/><path d="M16 18v-3"/>'],
  ["file-box", "File Box", '<path d="M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M11.7 14.2 7 17l-4.7-2.8"/><path d="M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z"/><path d="M7 17v5"/>'],
  ["file-braces", "File Braces", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/>'],
  ["file-braces-corner", "File Braces Corner", '<path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1"/><path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1"/>'],
  ["file-chart-column", "File Chart Column", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 18v-1"/><path d="M12 18v-6"/><path d="M16 18v-3"/>'],
  ["file-chart-column-increasing", "File Chart Column Increasing", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 18v-2"/><path d="M12 18v-4"/><path d="M16 18v-6"/>'],
  ["file-chart-line", "File Chart Line", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m16 13-3.5 3.5-2-2L8 17"/>'],
  ["file-chart-pie", "File Chart Pie", '<path d="M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M4.017 11.512a6 6 0 1 0 8.466 8.475"/><path d="M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"/>'],
  ["file-check", "File Check", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m9 15 2 2 4-4"/>'],
  ["file-check-corner", "File Check Corner", '<path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m14 20 2 2 4-4"/>'],
  ["file-check2", "File Check2", '<path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m14 20 2 2 4-4"/>'],
  ["file-clock", "File Clock", '<path d="M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 14v2.2l1.6 1"/><circle cx="8" cy="16" r="6"/>'],
  ["file-code", "File Code", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/>'],
  ["file-code-corner", "File Code Corner", '<path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m5 16-3 3 3 3"/><path d="m9 22 3-3-3-3"/>'],
  ["file-code2", "File Code2", '<path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m5 16-3 3 3 3"/><path d="m9 22 3-3-3-3"/>'],
  ["file-cog", "File Cog", '<path d="M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z"/><path d="M20 8v12a2 2 0 0 1-2 2h-4.182"/><path d="m3.305 19.53.923-.382"/><path d="M4 10.592V4a2 2 0 0 1 2-2h8"/><path d="m4.228 16.852-.924-.383"/><path d="m5.852 15.228-.383-.923"/><path d="m5.852 20.772-.383.924"/><path d="m8.148 15.228.383-.923"/><path d="m8.53 21.696-.382-.924"/><path d="m9.773 16.852.922-.383"/><path d="m9.773 19.148.922.383"/><circle cx="7" cy="18" r="3"/>'],
  ["file-cog2", "File Cog2", '<path d="M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z"/><path d="M20 8v12a2 2 0 0 1-2 2h-4.182"/><path d="m3.305 19.53.923-.382"/><path d="M4 10.592V4a2 2 0 0 1 2-2h8"/><path d="m4.228 16.852-.924-.383"/><path d="m5.852 15.228-.383-.923"/><path d="m5.852 20.772-.383.924"/><path d="m8.148 15.228.383-.923"/><path d="m8.53 21.696-.382-.924"/><path d="m9.773 16.852.922-.383"/><path d="m9.773 19.148.922.383"/><circle cx="7" cy="18" r="3"/>'],
  ["file-diff", "File Diff", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M9 10h6"/><path d="M12 13V7"/><path d="M9 17h6"/>'],
  ["file-digit", "File Digit", '<path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 16h2v6"/><path d="M10 22h4"/><rect x="2" y="16" width="4" height="6" rx="2"/>'],
  ["file-down", "File Down", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/>'],
  ["file-edit", "File Edit", '<path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z"/>'],
  ["file-exclamation-point", "File Exclamation Point", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M12 9v4"/><path d="M12 17h.01"/>'],
  ["file-headphone", "File Headphone", '<path d="M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0"/>'],
  ["file-heart", "File Heart", '<path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z"/>'],
  ["file-image", "File Image", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><circle cx="10" cy="12" r="2"/><path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"/>'],
  ["file-input", "File Input", '<path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M2 15h10"/><path d="m9 18 3-3-3-3"/>'],
  ["file-json", "File Json", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/>'],
  ["file-json2", "File Json2", '<path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1"/><path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1"/>'],
  ["file-key", "File Key", '<path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M4 12v6"/><path d="M4 14h2"/><path d="M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4"/><circle cx="4" cy="20" r="2"/>'],
  ["file-key2", "File Key2", '<path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M4 12v6"/><path d="M4 14h2"/><path d="M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4"/><circle cx="4" cy="20" r="2"/>'],
  ["file-line-chart", "File Line Chart", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m16 13-3.5 3.5-2-2L8 17"/>'],
  ["file-lock", "File Lock", '<path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M9 17v-2a2 2 0 0 0-4 0v2"/><rect width="8" height="5" x="3" y="17" rx="1"/>'],
  ["file-lock2", "File Lock2", '<path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M9 17v-2a2 2 0 0 0-4 0v2"/><rect width="8" height="5" x="3" y="17" rx="1"/>'],
  ["file-minus", "File Minus", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M9 15h6"/>'],
  ["file-minus-corner", "File Minus Corner", '<path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M14 18h6"/>'],
  ["file-minus2", "File Minus2", '<path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M14 18h6"/>'],
  ["file-music", "File Music", '<path d="M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 20v-7l3 1.474"/><circle cx="6" cy="20" r="2"/>'],
  ["file-output", "File Output", '<path d="M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m5 11-3 3"/><path d="m5 17-3-3h10"/>'],
  ["file-pen", "File Pen", '<path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z"/>'],
  ["file-pen-line", "File Pen Line", '<path d="M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z"/><path d="M14.487 7.858A1 1 0 0 1 14 7V2"/><path d="M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516"/><path d="M8 18h1"/>'],
  ["file-pie-chart", "File Pie Chart", '<path d="M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M4.017 11.512a6 6 0 1 0 8.466 8.475"/><path d="M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"/>'],
  ["file-play", "File Play", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z"/>'],
  ["file-plus", "File Plus", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M9 15h6"/><path d="M12 18v-6"/>'],
  ["file-plus-corner", "File Plus Corner", '<path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M14 19h6"/><path d="M17 16v6"/>'],
  ["file-plus2", "File Plus2", '<path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M14 19h6"/><path d="M17 16v6"/>'],
  ["file-question", "File Question", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M12 17h.01"/><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/>'],
  ["file-question-mark", "File Question Mark", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M12 17h.01"/><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/>'],
  ["file-scan", "File Scan", '<path d="M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M16 14a2 2 0 0 0-2 2"/><path d="M16 22a2 2 0 0 1-2-2"/><path d="M20 14a2 2 0 0 1 2 2"/><path d="M20 22a2 2 0 0 0 2-2"/>'],
  ["file-search", "File Search", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><circle cx="11.5" cy="14.5" r="2.5"/><path d="M13.3 16.3 15 18"/>'],
  ["file-search-corner", "File Search Corner", '<path d="M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m21 22-2.88-2.88"/><circle cx="16" cy="17" r="3"/>'],
  ["file-search2", "File Search2", '<path d="M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m21 22-2.88-2.88"/><circle cx="16" cy="17" r="3"/>'],
  ["file-signal", "File Signal", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 15h.01"/><path d="M11.5 13.5a2.5 2.5 0 0 1 0 3"/><path d="M15 12a5 5 0 0 1 0 6"/>'],
  ["file-signature", "File Signature", '<path d="M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z"/><path d="M14.487 7.858A1 1 0 0 1 14 7V2"/><path d="M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516"/><path d="M8 18h1"/>'],
  ["file-sliders", "File Sliders", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 12h8"/><path d="M10 11v2"/><path d="M8 17h8"/><path d="M14 16v2"/>'],
  ["file-spreadsheet", "File Spreadsheet", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 13h2"/><path d="M14 13h2"/><path d="M8 17h2"/><path d="M14 17h2"/>'],
  ["file-stack", "File Stack", '<path d="M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"/><path d="M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"/><path d="M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"/>'],
  ["file-symlink", "File Symlink", '<path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m10 18 3-3-3-3"/>'],
  ["file-terminal", "File Terminal", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m8 16 2-2-2-2"/><path d="M12 18h4"/>'],
  ["file-text", "File Text", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'],
  ["file-type", "File Type", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M11 18h2"/><path d="M12 12v6"/><path d="M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5"/>'],
  ["file-type-corner", "File Type Corner", '<path d="M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16"/><path d="M6 22h2"/><path d="M7 14v8"/>'],
  ["file-type2", "File Type2", '<path d="M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16"/><path d="M6 22h2"/><path d="M7 14v8"/>'],
  ["file-up", "File Up", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/>'],
  ["file-user", "File User", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M16 22a4 4 0 0 0-8 0"/><circle cx="12" cy="15" r="3"/>'],
  ["file-video", "File Video", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z"/>'],
  ["file-video-camera", "File Video Camera", '<path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157"/><rect width="7" height="6" x="3" y="16" rx="1"/>'],
  ["file-video2", "File Video2", '<path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157"/><rect width="7" height="6" x="3" y="16" rx="1"/>'],
  ["file-volume", "File Volume", '<path d="M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 15a5 5 0 0 1 0 6"/><path d="M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z"/>'],
  ["file-volume2", "File Volume2", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 15h.01"/><path d="M11.5 13.5a2.5 2.5 0 0 1 0 3"/><path d="M15 12a5 5 0 0 1 0 6"/>'],
  ["file-warning", "File Warning", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M12 9v4"/><path d="M12 17h.01"/>'],
  ["file-x", "File X", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m14.5 12.5-5 5"/><path d="m9.5 12.5 5 5"/>'],
  ["file-x-corner", "File X Corner", '<path d="M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m15 17 5 5"/><path d="m20 17-5 5"/>'],
  ["file-x2", "File X2", '<path d="M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m15 17 5 5"/><path d="m20 17-5 5"/>'],
  ["files", "Files", '<path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/><path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"/><path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"/>'],
  ["film", "Film", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>'],
  ["filter", "Filter", '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>'],
  ["filter-x", "Filter X", '<path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"/><path d="m16.5 3.5 5 5"/><path d="m21.5 3.5-5 5"/>'],
  ["fingerprint", "Fingerprint", '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>'],
  ["fingerprint-pattern", "Fingerprint Pattern", '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>'],
  ["fire-extinguisher", "Fire Extinguisher", '<path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"/><path d="M9 18h8"/><path d="M18 3h-3"/><path d="M11 3a6 6 0 0 0-6 6v11"/><path d="M5 13h4"/><path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/>'],
  ["fish", "Fish", '<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"/><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/>'],
  ["fish-off", "Fish Off", '<path d="M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"/><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"/>'],
  ["fish-symbol", "Fish Symbol", '<path d="M2 16s9-15 20-4C11 23 2 8 2 8"/>'],
  ["fishing-hook", "Fishing Hook", '<path d="m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10"/><path d="M20.414 8.586 22 7"/><circle cx="19" cy="10" r="2"/>'],
  ["fishing-rod", "Fishing Rod", '<path d="M4 11h1"/><path d="M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4"/><circle cx="18" cy="18" r="2"/>'],
  ["flag", "Flag", '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>'],
  ["flag-off", "Flag Off", '<path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/><path d="m2 2 20 20"/><path d="M4 22V4"/><path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347"/>'],
  ["flag-triangle-left", "Flag Triangle Left", '<path d="M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5"/>'],
  ["flag-triangle-right", "Flag Triangle Right", '<path d="M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5"/>'],
  ["flame", "Flame", '<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>'],
  ["flame-kindling", "Flame Kindling", '<path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"/><path d="m5 22 14-4"/><path d="m5 18 14 4"/>'],
  ["flashlight", "Flashlight", '<path d="M12 13v1"/><path d="M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z"/><path d="M6 6h12"/>'],
  ["flashlight-off", "Flashlight Off", '<path d="M11.652 6H18"/><path d="M12 13v1"/><path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6"/><path d="m2 2 20 20"/><path d="M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007"/>'],
  ["flask-conical", "Flask Conical", '<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/>'],
  ["flask-conical-off", "Flask Conical Off", '<path d="M10 2v2.343"/><path d="M14 2v6.343"/><path d="m2 2 20 20"/><path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"/><path d="M6.453 15H15"/><path d="M8.5 2h7"/>'],
  ["flask-round", "Flask Round", '<path d="M10 2v6.292a7 7 0 1 0 4 0V2"/><path d="M5 15h14"/><path d="M8.5 2h7"/>'],
  ["flip-horizontal", "Flip Horizontal", '<path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/><path d="M12 20v2"/><path d="M12 14v2"/><path d="M12 8v2"/><path d="M12 2v2"/>'],
  ["flip-horizontal2", "Flip Horizontal2", '<path d="m3 7 5 5-5 5V7"/><path d="m21 7-5 5 5 5V7"/><path d="M12 20v2"/><path d="M12 14v2"/><path d="M12 8v2"/><path d="M12 2v2"/>'],
  ["flip-vertical", "Flip Vertical", '<path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/>'],
  ["flip-vertical2", "Flip Vertical2", '<path d="m17 3-5 5-5-5h10"/><path d="m17 21-5-5-5 5h10"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/>'],
  ["flower", "Flower", '<circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"/><path d="M12 7.5V9"/><path d="M7.5 12H9"/><path d="M16.5 12H15"/><path d="M12 16.5V15"/><path d="m8 8 1.88 1.88"/><path d="M14.12 9.88 16 8"/><path d="m8 16 1.88-1.88"/><path d="M14.12 14.12 16 16"/>'],
  ["flower2", "Flower2", '<path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/><circle cx="12" cy="8" r="2"/><path d="M12 10v12"/><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"/><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"/>'],
  ["focus", "Focus", '<circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>'],
  ["fold-horizontal", "Fold Horizontal", '<path d="M2 12h6"/><path d="M22 12h-6"/><path d="M12 2v2"/><path d="M12 8v2"/><path d="M12 14v2"/><path d="M12 20v2"/><path d="m19 9-3 3 3 3"/><path d="m5 15 3-3-3-3"/>'],
  ["fold-vertical", "Fold Vertical", '<path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="m15 19-3-3-3 3"/><path d="m15 5-3 3-3-3"/>'],
  ["folder", "Folder", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>'],
  ["folder-archive", "Folder Archive", '<circle cx="15" cy="19" r="2"/><path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"/><path d="M15 11v-1"/><path d="M15 17v-2"/>'],
  ["folder-check", "Folder Check", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9 13 2 2 4-4"/>'],
  ["folder-clock", "Folder Clock", '<path d="M16 14v2.2l1.6 1"/><path d="M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"/><circle cx="16" cy="16" r="6"/>'],
  ["folder-closed", "Folder Closed", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M2 10h20"/>'],
  ["folder-code", "Folder Code", '<path d="M10 10.5 8 13l2 2.5"/><path d="m14 10.5 2 2.5-2 2.5"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/>'],
  ["folder-cog", "Folder Cog", '<path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"/><path d="m14.305 19.53.923-.382"/><path d="m15.228 16.852-.923-.383"/><path d="m16.852 15.228-.383-.923"/><path d="m16.852 20.772-.383.924"/><path d="m19.148 15.228.383-.923"/><path d="m19.53 21.696-.382-.924"/><path d="m20.772 16.852.924-.383"/><path d="m20.772 19.148.924.383"/><circle cx="18" cy="18" r="3"/>'],
  ["folder-cog2", "Folder Cog2", '<path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"/><path d="m14.305 19.53.923-.382"/><path d="m15.228 16.852-.923-.383"/><path d="m16.852 15.228-.383-.923"/><path d="m16.852 20.772-.383.924"/><path d="m19.148 15.228.383-.923"/><path d="m19.53 21.696-.382-.924"/><path d="m20.772 16.852.924-.383"/><path d="m20.772 19.148.924.383"/><circle cx="18" cy="18" r="3"/>'],
  ["folder-dot", "Folder Dot", '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><circle cx="12" cy="13" r="1"/>'],
  ["folder-down", "Folder Down", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M12 10v6"/><path d="m15 13-3 3-3-3"/>'],
  ["folder-edit", "Folder Edit", '<path d="M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"/><path d="M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>'],
  ["folder-git", "Folder Git", '<circle cx="12" cy="13" r="2"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M14 13h3"/><path d="M7 13h3"/>'],
  ["folder-git2", "Folder Git2", '<path d="M18 19a5 5 0 0 1-5-5v8"/><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><circle cx="20" cy="19" r="2"/>'],
  ["folder-heart", "Folder Heart", '<path d="M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417"/><path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/>'],
  ["folder-input", "Folder Input", '<path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"/><path d="M2 13h10"/><path d="m9 16 3-3-3-3"/>'],
  ["folder-kanban", "Folder Kanban", '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/>'],
  ["folder-key", "Folder Key", '<path d="M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36"/><path d="M19 12v6"/><path d="M19 14h2"/><circle cx="19" cy="20" r="2"/>'],
  ["folder-lock", "Folder Lock", '<rect width="8" height="5" x="14" y="17" rx="1"/><path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"/><path d="M20 17v-2a2 2 0 1 0-4 0v2"/>'],
  ["folder-minus", "Folder Minus", '<path d="M9 13h6"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>'],
  ["folder-open", "Folder Open", '<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>'],
  ["folder-open-dot", "Folder Open Dot", '<path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/><circle cx="14" cy="15" r="1"/>'],
  ["folder-output", "Folder Output", '<path d="M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"/><path d="M2 13h10"/><path d="m5 10-3 3 3 3"/>'],
  ["folder-pen", "Folder Pen", '<path d="M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"/><path d="M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>'],
  ["folder-plus", "Folder Plus", '<path d="M12 10v6"/><path d="M9 13h6"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>'],
  ["folder-root", "Folder Root", '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><circle cx="12" cy="13" r="2"/><path d="M12 15v5"/>'],
  ["folder-search", "Folder Search", '<path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"/><path d="m21 21-1.9-1.9"/><circle cx="17" cy="17" r="3"/>'],
  ["folder-search2", "Folder Search2", '<circle cx="11.5" cy="12.5" r="2.5"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M13.3 14.3 15 16"/>'],
  ["folder-symlink", "Folder Symlink", '<path d="M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"/><path d="m8 16 3-3-3-3"/>'],
  ["folder-sync", "Folder Sync", '<path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"/><path d="M12 10v4h4"/><path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5"/><path d="M22 22v-4h-4"/><path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5"/>'],
  ["folder-tree", "Folder Tree", '<path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M3 5a2 2 0 0 0 2 2h3"/><path d="M3 3v13a2 2 0 0 0 2 2h3"/>'],
  ["folder-up", "Folder Up", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/>'],
  ["folder-x", "Folder X", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9.5 10.5 5 5"/><path d="m14.5 10.5-5 5"/>'],
  ["folders", "Folders", '<path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"/><path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1"/>'],
  ["footprints", "Footprints", '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>'],
  ["fork-knife", "Fork Knife", '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>'],
  ["fork-knife-crossed", "Fork Knife Crossed", '<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/>'],
  ["forklift", "Forklift", '<path d="M12 12H5a2 2 0 0 0-2 2v5"/><path d="M15 19h7"/><path d="M16 19V2"/><path d="M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828"/><path d="M7 19h4"/><circle cx="13" cy="19" r="2"/><circle cx="5" cy="19" r="2"/>'],
  ["form", "Form", '<path d="M4 14h6"/><path d="M4 2h10"/><rect x="4" y="18" width="16" height="4" rx="1"/><rect x="4" y="6" width="16" height="4" rx="1"/>'],
  ["form-input", "Form Input", '<rect width="20" height="12" x="2" y="6" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/>'],
  ["forward", "Forward", '<path d="m15 17 5-5-5-5"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/>'],
  ["frame", "Frame", '<line x1="22" x2="2" y1="6" y2="6"/><line x1="22" x2="2" y1="18" y2="18"/><line x1="6" x2="6" y1="2" y2="22"/><line x1="18" x2="18" y1="2" y2="22"/>'],
  ["frown", "Frown", '<circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>'],
  ["fuel", "Fuel", '<path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"/><path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"/><path d="M2 21h13"/><path d="M3 9h11"/>'],
  ["fullscreen", "Fullscreen", '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/>'],
  ["function-square", "Function Square", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"/><path d="M9 11.2h5.7"/>'],
  ["funnel", "Funnel", '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>'],
  ["funnel-plus", "Funnel Plus", '<path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"/><path d="M16 6h6"/><path d="M19 3v6"/>'],
  ["funnel-x", "Funnel X", '<path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"/><path d="m16.5 3.5 5 5"/><path d="m21.5 3.5-5 5"/>'],
  ["gallery-horizontal", "Gallery Horizontal", '<path d="M2 3v18"/><rect width="12" height="18" x="6" y="3" rx="2"/><path d="M22 3v18"/>'],
  ["gallery-horizontal-end", "Gallery Horizontal End", '<path d="M2 7v10"/><path d="M6 5v14"/><rect width="12" height="18" x="10" y="3" rx="2"/>'],
  ["gallery-thumbnails", "Gallery Thumbnails", '<rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1"/><path d="M9 21h1"/><path d="M14 21h1"/><path d="M19 21h1"/>'],
  ["gallery-vertical", "Gallery Vertical", '<path d="M3 2h18"/><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M3 22h18"/>'],
  ["gallery-vertical-end", "Gallery Vertical End", '<path d="M7 2h10"/><path d="M5 6h14"/><rect width="18" height="12" x="3" y="10" rx="2"/>'],
  ["gamepad", "Gamepad", '<line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/>'],
  ["gamepad-directional", "Gamepad Directional", '<path d="M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z"/><path d="M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"/><path d="M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z"/><path d="M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z"/>'],
  ["gamepad2", "Gamepad2", '<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>'],
  ["gantt-chart", "Gantt Chart", '<path d="M6 5h12"/><path d="M4 12h10"/><path d="M12 19h8"/>'],
  ["gantt-chart-square", "Gantt Chart Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/>'],
  ["gauge", "Gauge", '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>'],
  ["gauge-circle", "Gauge Circle", '<path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19 5"/>'],
  ["gavel", "Gavel", '<path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"/><path d="m16 16 6-6"/><path d="m21.5 10.5-8-8"/><path d="m8 8 6-6"/><path d="m8.5 7.5 8 8"/>'],
  ["gem", "Gem", '<path d="M10.5 3 8 9l4 13 4-13-2.5-6"/><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"/><path d="M2 9h20"/>'],
  ["georgian-lari", "Georgian Lari", '<path d="M11.5 21a7.5 7.5 0 1 1 7.35-9"/><path d="M13 12V3"/><path d="M4 21h16"/><path d="M9 12V3"/>'],
  ["ghost", "Ghost", '<path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/>'],
  ["gift", "Gift", '<path d="M12 7v14"/><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect x="3" y="7" width="18" height="4" rx="1"/>'],
  ["git-branch", "Git Branch", '<path d="M15 6a9 9 0 0 0-9 9V3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>'],
  ["git-branch-minus", "Git Branch Minus", '<path d="M15 6a9 9 0 0 0-9 9V3"/><path d="M21 18h-6"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>'],
  ["git-branch-plus", "Git Branch Plus", '<path d="M6 3v12"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M15 6a9 9 0 0 0-9 9"/><path d="M18 15v6"/><path d="M21 18h-6"/>'],
  ["git-commit", "Git Commit", '<circle cx="12" cy="12" r="3"/><line x1="3" x2="9" y1="12" y2="12"/><line x1="15" x2="21" y1="12" y2="12"/>'],
  ["git-commit-horizontal", "Git Commit Horizontal", '<circle cx="12" cy="12" r="3"/><line x1="3" x2="9" y1="12" y2="12"/><line x1="15" x2="21" y1="12" y2="12"/>'],
  ["git-commit-vertical", "Git Commit Vertical", '<path d="M12 3v6"/><circle cx="12" cy="12" r="3"/><path d="M12 15v6"/>'],
  ["git-compare", "Git Compare", '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/>'],
  ["git-compare-arrows", "Git Compare Arrows", '<circle cx="5" cy="6" r="3"/><path d="M12 6h5a2 2 0 0 1 2 2v7"/><path d="m15 9-3-3 3-3"/><circle cx="19" cy="18" r="3"/><path d="M12 18H7a2 2 0 0 1-2-2V9"/><path d="m9 15 3 3-3 3"/>'],
  ["git-fork", "Git Fork", '<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>'],
  ["git-graph", "Git Graph", '<circle cx="5" cy="6" r="3"/><path d="M5 9v6"/><circle cx="5" cy="18" r="3"/><path d="M12 3v18"/><circle cx="19" cy="6" r="3"/><path d="M16 15.7A9 9 0 0 0 19 9"/>'],
  ["git-merge", "Git Merge", '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>'],
  ["git-merge-conflict", "Git Merge Conflict", '<path d="M12 6h4a2 2 0 0 1 2 2v7"/><path d="M6 12v9"/><path d="M9 3 3 9"/><path d="M9 9 3 3"/><circle cx="18" cy="18" r="3"/>'],
  ["git-pull-request", "Git Pull Request", '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" x2="6" y1="9" y2="21"/>'],
  ["git-pull-request-arrow", "Git Pull Request Arrow", '<circle cx="5" cy="6" r="3"/><path d="M5 9v12"/><circle cx="19" cy="18" r="3"/><path d="m15 9-3-3 3-3"/><path d="M12 6h5a2 2 0 0 1 2 2v7"/>'],
  ["git-pull-request-closed", "Git Pull Request Closed", '<circle cx="6" cy="6" r="3"/><path d="M6 9v12"/><path d="m21 3-6 6"/><path d="m21 9-6-6"/><path d="M18 11.5V15"/><circle cx="18" cy="18" r="3"/>'],
  ["git-pull-request-create", "Git Pull Request Create", '<circle cx="6" cy="6" r="3"/><path d="M6 9v12"/><path d="M13 6h3a2 2 0 0 1 2 2v3"/><path d="M18 15v6"/><path d="M21 18h-6"/>'],
  ["git-pull-request-create-arrow", "Git Pull Request Create Arrow", '<circle cx="5" cy="6" r="3"/><path d="M5 9v12"/><path d="m15 9-3-3 3-3"/><path d="M12 6h5a2 2 0 0 1 2 2v3"/><path d="M19 15v6"/><path d="M22 18h-6"/>'],
  ["git-pull-request-draft", "Git Pull Request Draft", '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M18 6V5"/><path d="M18 11v-1"/><line x1="6" x2="6" y1="9" y2="21"/>'],
  ["glass-water", "Glass Water", '<path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/>'],
  ["glasses", "Glasses", '<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>'],
  ["globe", "Globe", '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'],
  ["globe-lock", "Globe Lock", '<path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"/><path d="M2 12h8.5"/><path d="M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/>'],
  ["globe-off", "Globe Off", '<path d="M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643"/><path d="M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929"/><path d="M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687"/><path d="M17.656 12H22"/><path d="M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45"/><path d="M2 12h10"/><path d="m2 2 20 20"/>'],
  ["globe-x", "Globe X", '<path d="m16 3 5 5"/><path d="M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10"/><path d="m21 3-5 5"/>'],
  ["globe2", "Globe2", '<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/>'],
  ["goal", "Goal", '<path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/>'],
  ["gpu", "Gpu", '<path d="M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2"/><path d="M2 21V3"/><path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"/><circle cx="16" cy="11" r="2"/><circle cx="8" cy="11" r="2"/>'],
  ["grab", "Grab", '<path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"/><path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"/><path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"/>'],
  ["graduation-cap", "Graduation Cap", '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>'],
  ["grape", "Grape", '<path d="M22 5V2l-5.89 5.89"/><circle cx="16.6" cy="15.89" r="3"/><circle cx="8.11" cy="7.4" r="3"/><circle cx="12.35" cy="11.65" r="3"/><circle cx="13.91" cy="5.85" r="3"/><circle cx="18.15" cy="10.09" r="3"/><circle cx="6.56" cy="13.2" r="3"/><circle cx="10.8" cy="17.44" r="3"/><circle cx="5" cy="19" r="3"/>'],
  ["grid", "Grid", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>'],
  ["grid2-x2", "Grid2 X2", '<path d="M12 3v18"/><path d="M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["grid2-x2-check", "Grid2 X2 Check", '<path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"/><path d="m16 19 2 2 4-4"/>'],
  ["grid2-x2-plus", "Grid2 X2 Plus", '<path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"/><path d="M16 19h6"/><path d="M19 22v-6"/>'],
  ["grid2-x2-x", "Grid2 X2 X", '<path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"/><path d="m16 16 5 5"/><path d="m16 21 5-5"/>'],
  ["grid2x2", "Grid2x2", '<path d="M12 3v18"/><path d="M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["grid2x2-check", "Grid2x2 Check", '<path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"/><path d="m16 19 2 2 4-4"/>'],
  ["grid2x2-plus", "Grid2x2 Plus", '<path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"/><path d="M16 19h6"/><path d="M19 22v-6"/>'],
  ["grid2x2-x", "Grid2x2 X", '<path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"/><path d="m16 16 5 5"/><path d="m16 21 5-5"/>'],
  ["grid3-x3", "Grid3 X3", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>'],
  ["grid3x2", "Grid3x2", '<path d="M15 3v18"/><path d="M3 12h18"/><path d="M9 3v18"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["grid3x3", "Grid3x3", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>'],
  ["grip", "Grip", '<circle cx="12" cy="5" r="1"/><circle cx="19" cy="5" r="1"/><circle cx="5" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="19" cy="19" r="1"/><circle cx="5" cy="19" r="1"/>'],
  ["grip-horizontal", "Grip Horizontal", '<circle cx="12" cy="9" r="1"/><circle cx="19" cy="9" r="1"/><circle cx="5" cy="9" r="1"/><circle cx="12" cy="15" r="1"/><circle cx="19" cy="15" r="1"/><circle cx="5" cy="15" r="1"/>'],
  ["grip-vertical", "Grip Vertical", '<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>'],
  ["group", "Group", '<path d="M3 7V5c0-1.1.9-2 2-2h2"/><path d="M17 3h2c1.1 0 2 .9 2 2v2"/><path d="M21 17v2c0 1.1-.9 2-2 2h-2"/><path d="M7 21H5c-1.1 0-2-.9-2-2v-2"/><rect width="7" height="5" x="7" y="7" rx="1"/><rect width="7" height="5" x="10" y="12" rx="1"/>'],
  ["guitar", "Guitar", '<path d="m11.9 12.1 4.514-4.514"/><path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"/><path d="m6 16 2 2"/><path d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"/>'],
  ["ham", "Ham", '<path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"/><path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"/><path d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"/><path d="m8.5 16.5-1-1"/>'],
  ["hamburger", "Hamburger", '<path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25"/><path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2"/><path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"/><path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/>'],
  ["hammer", "Hammer", '<path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/>'],
  ["hand", "Hand", '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'],
  ["hand-coins", "Hand Coins", '<path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/>'],
  ["hand-fist", "Hand Fist", '<path d="M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0"/><path d="M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5"/><path d="M9 5A2 2 0 1 0 5 5V10"/><path d="M9 7V4A2 2 0 1 1 13 4V7.268"/>'],
  ["hand-grab", "Hand Grab", '<path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"/><path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"/><path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"/>'],
  ["hand-heart", "Hand Heart", '<path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95"/><path d="m2 15 6 6"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"/>'],
  ["hand-helping", "Hand Helping", '<path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"/><path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 13 6 6"/>'],
  ["hand-metal", "Hand Metal", '<path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"/><path d="M14 11V9a2 2 0 1 0-4 0v2"/><path d="M10 10.5V5a2 2 0 1 0-4 0v9"/><path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"/>'],
  ["hand-platter", "Hand Platter", '<path d="M12 3V2"/><path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"/><path d="M2 14h12a2 2 0 0 1 0 4h-2"/><path d="M4 10h16"/><path d="M5 10a7 7 0 0 1 14 0"/><path d="M5 14v6a1 1 0 0 1-1 1H2"/>'],
  ["handbag", "Handbag", '<path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z"/><path d="M8 11V6a4 4 0 0 1 8 0v5"/>'],
  ["handshake", "Handshake", '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>'],
  ["hard-drive", "Hard Drive", '<path d="M10 16h.01"/><path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M21.946 12.013H2.054"/><path d="M6 16h.01"/>'],
  ["hard-drive-download", "Hard Drive Download", '<path d="M12 2v8"/><path d="m16 6-4 4-4-4"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01"/><path d="M10 18h.01"/>'],
  ["hard-drive-upload", "Hard Drive Upload", '<path d="m16 6-4-4-4 4"/><path d="M12 2v8"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01"/><path d="M10 18h.01"/>'],
  ["hard-hat", "Hard Hat", '<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 6 6v3"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><rect x="2" y="15" width="20" height="4" rx="1"/>'],
  ["hash", "Hash", '<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/>'],
  ["hat-glasses", "Hat Glasses", '<path d="M14 18a2 2 0 0 0-4 0"/><path d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"/><path d="M2 11h20"/><circle cx="17" cy="18" r="3"/><circle cx="7" cy="18" r="3"/>'],
  ["haze", "Haze", '<path d="m5.2 6.2 1.4 1.4"/><path d="M2 13h2"/><path d="M20 13h2"/><path d="m17.4 7.6 1.4-1.4"/><path d="M22 17H2"/><path d="M22 21H2"/><path d="M16 13a4 4 0 0 0-8 0"/><path d="M12 5V2.5"/>'],
  ["hd", "Hd", '<path d="M10 12H6"/><path d="M10 15V9"/><path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z"/><path d="M6 15V9"/><rect x="2" y="5" width="20" height="14" rx="2"/>'],
  ["hdmi-port", "Hdmi Port", '<path d="M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"/><path d="M7.5 12h9"/>'],
  ["heading", "Heading", '<path d="M6 12h12"/><path d="M6 20V4"/><path d="M18 20V4"/>'],
  ["heading1", "Heading1", '<path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="m17 12 3-2v8"/>'],
  ["heading2", "Heading2", '<path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/>'],
  ["heading3", "Heading3", '<path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"/><path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"/>'],
  ["heading4", "Heading4", '<path d="M12 18V6"/><path d="M17 10v3a1 1 0 0 0 1 1h3"/><path d="M21 10v8"/><path d="M4 12h8"/><path d="M4 18V6"/>'],
  ["heading5", "Heading5", '<path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17 13v-3h4"/><path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"/>'],
  ["heading6", "Heading6", '<path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><circle cx="19" cy="16" r="2"/><path d="M20 10c-2 2-3 3.5-3 6"/>'],
  ["headphone-off", "Headphone Off", '<path d="M21 14h-1.343"/><path d="M9.128 3.47A9 9 0 0 1 21 12v3.343"/><path d="m2 2 20 20"/><path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"/><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"/>'],
  ["headphones", "Headphones", '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>'],
  ["headset", "Headset", '<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>'],
  ["heart", "Heart", '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>'],
  ["heart-crack", "Heart Crack", '<path d="M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15"/><path d="M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z"/>'],
  ["heart-handshake", "Heart Handshake", '<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/>'],
  ["heart-minus", "Heart Minus", '<path d="m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572"/><path d="M15 15h6"/>'],
  ["heart-off", "Heart Off", '<path d="M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655"/><path d="m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761"/><path d="m2 2 20 20"/>'],
  ["heart-plus", "Heart Plus", '<path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49"/><path d="M15 15h6"/><path d="M18 12v6"/>'],
  ["heart-pulse", "Heart Pulse", '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>'],
  ["heater", "Heater", '<path d="M11 8c2-3-2-3 0-6"/><path d="M15.5 8c2-3-2-3 0-6"/><path d="M6 10h.01"/><path d="M6 14h.01"/><path d="M10 16v-4"/><path d="M14 16v-4"/><path d="M18 16v-4"/><path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"/><path d="M5 20v2"/><path d="M19 20v2"/>'],
  ["helicopter", "Helicopter", '<path d="M11 17v4"/><path d="M14 3v8a2 2 0 0 0 2 2h5.865"/><path d="M17 17v4"/><path d="M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z"/><path d="M2 10v5"/><path d="M6 3h16"/><path d="M7 21h14"/><path d="M8 13H2"/>'],
  ["help-circle", "Help Circle", '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>'],
  ["helping-hand", "Helping Hand", '<path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"/><path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 13 6 6"/>'],
  ["hexagon", "Hexagon", '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>'],
  ["highlighter", "Highlighter", '<path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/>'],
  ["history", "History", '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>'],
  ["home", "Home", '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'],
  ["hop", "Hop", '<path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"/><path d="M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"/><path d="M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"/><path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"/><path d="M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"/><path d="M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"/><path d="M4.93 4.93 3 3a.7.7 0 0 1 0-1"/><path d="M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"/>'],
  ["hop-off", "Hop Off", '<path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"/><path d="M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"/><path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"/><path d="M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"/><path d="M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"/><path d="M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"/><path d="M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"/><path d="M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"/><path d="m2 2 20 20"/>'],
  ["hospital", "Hospital", '<path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/>'],
  ["hotel", "Hotel", '<path d="M10 22v-6.57"/><path d="M12 11h.01"/><path d="M12 7h.01"/><path d="M14 15.43V22"/><path d="M15 16a5 5 0 0 0-6 0"/><path d="M16 11h.01"/><path d="M16 7h.01"/><path d="M8 11h.01"/><path d="M8 7h.01"/><rect x="4" y="2" width="16" height="20" rx="2"/>'],
  ["hourglass", "Hourglass", '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>'],
  ["house", "House", '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'],
  ["house-heart", "House Heart", '<path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'],
  ["house-plug", "House Plug", '<path d="M10 12V8.964"/><path d="M14 12V8.964"/><path d="M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"/><path d="M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"/>'],
  ["house-plus", "House Plus", '<path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35"/><path d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8"/><path d="M15 18h6"/><path d="M18 15v6"/>'],
  ["house-wifi", "House Wifi", '<path d="M9.5 13.866a4 4 0 0 1 5 .01"/><path d="M12 17h.01"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M7 10.754a8 8 0 0 1 10 0"/>'],
  ["ice-cream", "Ice Cream", '<path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"/><path d="M17 7A5 5 0 0 0 7 7"/><path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"/>'],
  ["ice-cream-bowl", "Ice Cream Bowl", '<path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"/><path d="M12.14 11a3.5 3.5 0 1 1 6.71 0"/><path d="M15.5 6.5a3.5 3.5 0 1 0-7 0"/>'],
  ["ice-cream-cone", "Ice Cream Cone", '<path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"/><path d="M17 7A5 5 0 0 0 7 7"/><path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"/>'],
  ["ice-cream2", "Ice Cream2", '<path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"/><path d="M12.14 11a3.5 3.5 0 1 1 6.71 0"/><path d="M15.5 6.5a3.5 3.5 0 1 0-7 0"/>'],
  ["id-card", "Id Card", '<path d="M16 10h2"/><path d="M16 14h2"/><path d="M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect x="2" y="5" width="20" height="14" rx="2"/>'],
  ["id-card-lanyard", "Id Card Lanyard", '<path d="M13.5 8h-3"/><path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"/><path d="M16.899 22A5 5 0 0 0 7.1 22"/><path d="m9 2 3 6"/><circle cx="12" cy="15" r="3"/>'],
  ["image", "Image", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>'],
  ["image-down", "Image Down", '<path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"/><path d="m14 19 3 3v-5.5"/><path d="m17 22 3-3"/><circle cx="9" cy="9" r="2"/>'],
  ["image-minus", "Image Minus", '<path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><line x1="16" x2="22" y1="5" y2="5"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>'],
  ["image-off", "Image Off", '<line x1="2" x2="22" y1="2" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"/><path d="M21 15V5a2 2 0 0 0-2-2H9"/>'],
  ["image-play", "Image Play", '<path d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"/><path d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="m6 21 5-5"/><circle cx="9" cy="9" r="2"/>'],
  ["image-plus", "Image Plus", '<path d="M16 5h6"/><path d="M19 2v6"/><path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/>'],
  ["image-up", "Image Up", '<path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"/><path d="m14 19.5 3-3 3 3"/><path d="M17 22v-5.5"/><circle cx="9" cy="9" r="2"/>'],
  ["image-upscale", "Image Upscale", '<path d="M16 3h5v5"/><path d="M17 21h2a2 2 0 0 0 2-2"/><path d="M21 12v3"/><path d="m21 3-5 5"/><path d="M3 7V5a2 2 0 0 1 2-2"/><path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"/><path d="M9 3h3"/><rect x="3" y="11" width="10" height="10" rx="1"/>'],
  ["images", "Images", '<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>'],
  ["import", "Import", '<path d="M12 3v12"/><path d="m8 11 4 4 4-4"/><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"/>'],
  ["inbox", "Inbox", '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>'],
  ["indent", "Indent", '<path d="M21 5H11"/><path d="M21 12H11"/><path d="M21 19H11"/><path d="m3 8 4 4-4 4"/>'],
  ["indent-decrease", "Indent Decrease", '<path d="M21 5H11"/><path d="M21 12H11"/><path d="M21 19H11"/><path d="m7 8-4 4 4 4"/>'],
  ["indent-increase", "Indent Increase", '<path d="M21 5H11"/><path d="M21 12H11"/><path d="M21 19H11"/><path d="m3 8 4 4-4 4"/>'],
  ["indian-rupee", "Indian Rupee", '<path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/>'],
  ["infinity", "Infinity", '<path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/>'],
  ["info", "Info", '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'],
  ["inspect", "Inspect", '<path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/>'],
  ["inspection-panel", "Inspection Panel", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/>'],
  ["italic", "Italic", '<line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/>'],
  ["iteration-ccw", "Iteration Ccw", '<path d="m16 14 4 4-4 4"/><path d="M20 10a8 8 0 1 0-8 8h8"/>'],
  ["iteration-cw", "Iteration Cw", '<path d="M4 10a8 8 0 1 1 8 8H4"/><path d="m8 22-4-4 4-4"/>'],
  ["japanese-yen", "Japanese Yen", '<path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3"/><path d="M6 15h12"/><path d="M6 11h12"/>'],
  ["joystick", "Joystick", '<path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"/><path d="M6 15v-2"/><path d="M12 15V9"/><circle cx="12" cy="6" r="3"/>'],
  ["kanban", "Kanban", '<path d="M5 3v14"/><path d="M12 3v8"/><path d="M19 3v18"/>'],
  ["kanban-square", "Kanban Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/>'],
  ["kanban-square-dashed", "Kanban Square Dashed", '<path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/><path d="M5 3a2 2 0 0 0-2 2"/><path d="M9 3h1"/><path d="M14 3h1"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 9v1"/><path d="M21 14v1"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M14 21h1"/><path d="M9 21h1"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M3 14v1"/><path d="M3 9v1"/>'],
  ["kayak", "Kayak", '<path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z"/><path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61"/><path d="m6.707 6.707 10.586 10.586"/><path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z"/>'],
  ["key", "Key", '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/>'],
  ["key-round", "Key Round", '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>'],
  ["key-square", "Key Square", '<path d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"/><path d="m14 7 3 3"/><path d="m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"/>'],
  ["keyboard", "Keyboard", '<path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>'],
  ["keyboard-music", "Keyboard Music", '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h4"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M2 12h20"/><path d="M6 12v4"/><path d="M10 12v4"/><path d="M14 12v4"/><path d="M18 12v4"/>'],
  ["keyboard-off", "Keyboard Off", '<path d="M 20 4 A2 2 0 0 1 22 6"/><path d="M 22 6 L 22 16.41"/><path d="M 7 16 L 16 16"/><path d="M 9.69 4 L 20 4"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="m2 2 20 20"/><path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/><path d="M6 8h.01"/><path d="M8 12h.01"/>'],
  ["lamp", "Lamp", '<path d="M12 12v6"/><path d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"/><path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"/>'],
  ["lamp-ceiling", "Lamp Ceiling", '<path d="M12 2v5"/><path d="M14.829 15.998a3 3 0 1 1-5.658 0"/><path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z"/>'],
  ["lamp-desk", "Lamp Desk", '<path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z"/><path d="m14.207 4.793-3.414 3.414"/><path d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18"/>'],
  ["lamp-floor", "Lamp Floor", '<path d="M12 10v12"/><path d="M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z"/><path d="M9 22h6"/>'],
  ["lamp-wall-down", "Lamp Wall Down", '<path d="M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z"/><path d="M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M8 6h4a2 2 0 0 1 2 2v5"/>'],
  ["lamp-wall-up", "Lamp Wall Up", '<path d="M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z"/><path d="M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/><path d="M8 18h4a2 2 0 0 0 2-2v-5"/>'],
  ["land-plot", "Land Plot", '<path d="m12 8 6-3-6-3v10"/><path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"/><path d="m6.49 12.85 11.02 6.3"/><path d="M17.51 12.85 6.5 19.15"/>'],
  ["landmark", "Landmark", '<path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/>'],
  ["languages", "Languages", '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>'],
  ["laptop", "Laptop", '<path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"/><path d="M20.054 15.987H3.946"/>'],
  ["laptop-minimal", "Laptop Minimal", '<rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/>'],
  ["laptop-minimal-check", "Laptop Minimal Check", '<path d="M2 20h20"/><path d="m9 10 2 2 4-4"/><rect x="3" y="4" width="18" height="12" rx="2"/>'],
  ["laptop2", "Laptop2", '<rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/>'],
  ["lasso", "Lasso", '<path d="M3.704 14.467a10 8 0 1 1 3.115 2.375"/><path d="M7 22a5 5 0 0 1-2-3.994"/><circle cx="5" cy="16" r="2"/>'],
  ["lasso-select", "Lasso Select", '<path d="M7 22a5 5 0 0 1-2-4"/><path d="M7 16.93c.96.43 1.96.74 2.99.91"/><path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"/><path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"/>'],
  ["laugh", "Laugh", '<circle cx="12" cy="12" r="10"/><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>'],
  ["layers", "Layers", '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>'],
  ["layers-plus", "Layers Plus", '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z"/><path d="M16 17h6"/><path d="M19 14v6"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962"/>'],
  ["layers2", "Layers2", '<path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"/><path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"/>'],
  ["layers3", "Layers3", '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>'],
  ["layout", "Layout", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>'],
  ["layout-dashboard", "Layout Dashboard", '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>'],
  ["layout-grid", "Layout Grid", '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>'],
  ["layout-list", "Layout List", '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M14 4h7"/><path d="M14 9h7"/><path d="M14 15h7"/><path d="M14 20h7"/>'],
  ["layout-panel-left", "Layout Panel Left", '<rect width="7" height="18" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/>'],
  ["layout-panel-top", "Layout Panel Top", '<rect width="18" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/>'],
  ["layout-template", "Layout Template", '<rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/>'],
  ["leaf", "Leaf", '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>'],
  ["leafy-green", "Leafy Green", '<path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"/><path d="M2 22 17 7"/>'],
  ["lectern", "Lectern", '<path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"/><path d="M18 6V3a1 1 0 0 0-1-1h-3"/><rect width="8" height="12" x="8" y="10" rx="1"/>'],
  ["lens-concave", "Lens Concave", '<path d="M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z"/>'],
  ["lens-convex", "Lens Convex", '<path d="M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z"/>'],
  ["letter-text", "Letter Text", '<path d="M15 5h6"/><path d="M15 12h6"/><path d="M3 19h18"/><path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"/><path d="M3.92 10h6.16"/>'],
  ["library", "Library", '<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>'],
  ["library-big", "Library Big", '<rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/>'],
  ["library-square", "Library Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7v10"/><path d="M11 7v10"/><path d="m15 7 2 10"/>'],
  ["life-buoy", "Life Buoy", '<circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/>'],
  ["ligature", "Ligature", '<path d="M14 12h2v8"/><path d="M14 20h4"/><path d="M6 12h4"/><path d="M6 20h4"/><path d="M8 20V8a4 4 0 0 1 7.464-2"/>'],
  ["lightbulb", "Lightbulb", '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>'],
  ["lightbulb-off", "Lightbulb Off", '<path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"/><path d="m2 2 20 20"/><path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>'],
  ["line-chart", "Line Chart", '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>'],
  ["line-dot-right-horizontal", "Line Dot Right Horizontal", '<path d="M 3 12 L 15 12"/><circle cx="18" cy="12" r="3"/>'],
  ["line-squiggle", "Line Squiggle", '<path d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2"/>'],
  ["line-style", "Line Style", '<path d="M11 5h2"/><path d="M15 12h6"/><path d="M19 5h2"/><path d="M3 12h6"/><path d="M3 19h18"/><path d="M3 5h2"/>'],
  ["link", "Link", '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'],
  ["link2", "Link2", '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>'],
  ["link2-off", "Link2 Off", '<path d="M9 17H7A5 5 0 0 1 7 7"/><path d="M15 7h2a5 5 0 0 1 4 8"/><line x1="8" x2="12" y1="12" y2="12"/><line x1="2" x2="22" y1="2" y2="22"/>'],
  ["list", "List", '<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>'],
  ["list-check", "List Check", '<path d="M16 5H3"/><path d="M16 12H3"/><path d="M11 19H3"/><path d="m15 18 2 2 4-4"/>'],
  ["list-checks", "List Checks", '<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>'],
  ["list-chevrons-down-up", "List Chevrons Down Up", '<path d="M3 5h8"/><path d="M3 12h8"/><path d="M3 19h8"/><path d="m15 5 3 3 3-3"/><path d="m15 19 3-3 3 3"/>'],
  ["list-chevrons-up-down", "List Chevrons Up Down", '<path d="M3 5h8"/><path d="M3 12h8"/><path d="M3 19h8"/><path d="m15 8 3-3 3 3"/><path d="m15 16 3 3 3-3"/>'],
  ["list-collapse", "List Collapse", '<path d="M10 5h11"/><path d="M10 12h11"/><path d="M10 19h11"/><path d="m3 10 3-3-3-3"/><path d="m3 20 3-3-3-3"/>'],
  ["list-end", "List End", '<path d="M16 5H3"/><path d="M16 12H3"/><path d="M9 19H3"/><path d="m16 16-3 3 3 3"/><path d="M21 5v12a2 2 0 0 1-2 2h-6"/>'],
  ["list-filter", "List Filter", '<path d="M2 5h20"/><path d="M6 12h12"/><path d="M9 19h6"/>'],
  ["list-filter-plus", "List Filter Plus", '<path d="M12 5H2"/><path d="M6 12h12"/><path d="M9 19h6"/><path d="M16 5h6"/><path d="M19 8V2"/>'],
  ["list-indent-decrease", "List Indent Decrease", '<path d="M21 5H11"/><path d="M21 12H11"/><path d="M21 19H11"/><path d="m7 8-4 4 4 4"/>'],
  ["list-indent-increase", "List Indent Increase", '<path d="M21 5H11"/><path d="M21 12H11"/><path d="M21 19H11"/><path d="m3 8 4 4-4 4"/>'],
  ["list-minus", "List Minus", '<path d="M16 5H3"/><path d="M11 12H3"/><path d="M16 19H3"/><path d="M21 12h-6"/>'],
  ["list-music", "List Music", '<path d="M16 5H3"/><path d="M11 12H3"/><path d="M11 19H3"/><path d="M21 16V5"/><circle cx="18" cy="16" r="3"/>'],
  ["list-ordered", "List Ordered", '<path d="M11 5h10"/><path d="M11 12h10"/><path d="M11 19h10"/><path d="M4 4h1v5"/><path d="M4 9h2"/><path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"/>'],
  ["list-plus", "List Plus", '<path d="M16 5H3"/><path d="M11 12H3"/><path d="M16 19H3"/><path d="M18 9v6"/><path d="M21 12h-6"/>'],
  ["list-restart", "List Restart", '<path d="M21 5H3"/><path d="M7 12H3"/><path d="M7 19H3"/><path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"/><path d="M11 10v4h4"/>'],
  ["list-start", "List Start", '<path d="M3 5h6"/><path d="M3 12h13"/><path d="M3 19h13"/><path d="m16 8-3-3 3-3"/><path d="M21 19V7a2 2 0 0 0-2-2h-6"/>'],
  ["list-todo", "List Todo", '<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><rect x="3" y="4" width="6" height="6" rx="1"/>'],
  ["list-tree", "List Tree", '<path d="M8 5h13"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="M3 10a2 2 0 0 0 2 2h3"/><path d="M3 5v12a2 2 0 0 0 2 2h3"/>'],
  ["list-video", "List Video", '<path d="M21 5H3"/><path d="M10 12H3"/><path d="M10 19H3"/><path d="M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"/>'],
  ["list-x", "List X", '<path d="M16 5H3"/><path d="M11 12H3"/><path d="M16 19H3"/><path d="m15.5 9.5 5 5"/><path d="m20.5 9.5-5 5"/>'],
  ["loader", "Loader", '<path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/>'],
  ["loader-circle", "Loader Circle", '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>'],
  ["loader-pinwheel", "Loader Pinwheel", '<path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"/><path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"/><path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"/><circle cx="12" cy="12" r="10"/>'],
  ["loader2", "Loader2", '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>'],
  ["locate", "Locate", '<line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/>'],
  ["locate-fixed", "Locate Fixed", '<line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/>'],
  ["locate-off", "Locate Off", '<path d="M12 19v3"/><path d="M12 2v3"/><path d="M18.89 13.24a7 7 0 0 0-8.13-8.13"/><path d="M19 12h3"/><path d="M2 12h3"/><path d="m2 2 20 20"/><path d="M7.05 7.05a7 7 0 0 0 9.9 9.9"/>'],
  ["location-edit", "Location Edit", '<path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="10" r="3"/>'],
  ["lock", "Lock", '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'],
  ["lock-keyhole", "Lock Keyhole", '<circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/>'],
  ["lock-keyhole-open", "Lock Keyhole Open", '<circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/>'],
  ["lock-open", "Lock Open", '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>'],
  ["log-in", "Log In", '<path d="m10 17 5-5-5-5"/><path d="M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>'],
  ["log-out", "Log Out", '<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>'],
  ["logs", "Logs", '<path d="M3 5h1"/><path d="M3 12h1"/><path d="M3 19h1"/><path d="M8 5h1"/><path d="M8 12h1"/><path d="M8 19h1"/><path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/>'],
  ["lollipop", "Lollipop", '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"/>'],
  ["luggage", "Luggage", '<path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/><path d="M10 20h4"/><circle cx="16" cy="20" r="2"/><circle cx="8" cy="20" r="2"/>'],
  ["m-square", "M Square", '<path d="M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["magnet", "Magnet", '<path d="m12 15 4 4"/><path d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z"/><path d="m5 8 4 4"/>'],
  ["mail", "Mail", '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>'],
  ["mail-check", "Mail Check", '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m16 19 2 2 4-4"/>'],
  ["mail-minus", "Mail Minus", '<path d="M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M16 19h6"/>'],
  ["mail-open", "Mail Open", '<path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/>'],
  ["mail-plus", "Mail Plus", '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/>'],
  ["mail-question", "Mail Question", '<path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"/><path d="M20 22v.01"/>'],
  ["mail-question-mark", "Mail Question Mark", '<path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"/><path d="M20 22v.01"/>'],
  ["mail-search", "Mail Search", '<path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.5-1.5"/>'],
  ["mail-warning", "Mail Warning", '<path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M20 14v4"/><path d="M20 22v.01"/>'],
  ["mail-x", "Mail X", '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m17 17 4 4"/><path d="m21 17-4 4"/>'],
  ["mailbox", "Mailbox", '<path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"/><polyline points="15,9 18,9 18,11"/><path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"/><line x1="6" x2="7" y1="10" y2="10"/>'],
  ["mails", "Mails", '<path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732"/><path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5"/><rect x="7" y="3" width="15" height="12" rx="2"/>'],
  ["map", "Map", '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>'],
  ["map-minus", "Map Minus", '<path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14"/><path d="M15 5.764V14"/><path d="M21 18h-6"/><path d="M9 3.236v15"/>'],
  ["map-pin", "Map Pin", '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'],
  ["map-pin-check", "Map Pin Check", '<path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"/><circle cx="12" cy="10" r="3"/><path d="m16 18 2 2 4-4"/>'],
  ["map-pin-check-inside", "Map Pin Check Inside", '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="m9 10 2 2 4-4"/>'],
  ["map-pin-house", "Map Pin House", '<path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"/><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"/><path d="M18 22v-3"/><circle cx="10" cy="10" r="3"/>'],
  ["map-pin-minus", "Map Pin Minus", '<path d="M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"/><circle cx="12" cy="10" r="3"/><path d="M16 18h6"/>'],
  ["map-pin-minus-inside", "Map Pin Minus Inside", '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="M9 10h6"/>'],
  ["map-pin-off", "Map Pin Off", '<path d="M12.75 7.09a3 3 0 0 1 2.16 2.16"/><path d="M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"/><path d="m2 2 20 20"/><path d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"/><path d="M9.13 9.13a3 3 0 0 0 3.74 3.74"/>'],
  ["map-pin-pen", "Map Pin Pen", '<path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="10" r="3"/>'],
  ["map-pin-plus", "Map Pin Plus", '<path d="M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"/><circle cx="12" cy="10" r="3"/><path d="M16 18h6"/><path d="M19 15v6"/>'],
  ["map-pin-plus-inside", "Map Pin Plus Inside", '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="M12 7v6"/><path d="M9 10h6"/>'],
  ["map-pin-search", "Map Pin Search", '<path d="M 12.248 21.969 a 1 1 0 0 1 -0.849 -0.17 C 9.539 20.193 4 14.993 4 10 a 8 8 0 0 1 16 0 C 20 10.42 19.961 10.841 19.888 11.262"/><path d="m22 22-1.88-1.88"/><circle cx="12" cy="10" r="3"/><circle cx="18" cy="18" r="3"/>'],
  ["map-pin-x", "Map Pin X", '<path d="M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"/><circle cx="12" cy="10" r="3"/><path d="m21.5 15.5-5 5"/><path d="m21.5 20.5-5-5"/>'],
  ["map-pin-x-inside", "Map Pin X Inside", '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="m14.5 7.5-5 5"/><path d="m9.5 7.5 5 5"/>'],
  ["map-pinned", "Map Pinned", '<path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>'],
  ["map-plus", "Map Plus", '<path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"/><path d="M15 5.764V12"/><path d="M18 15v6"/><path d="M21 18h-6"/><path d="M9 3.236v15"/>'],
  ["mars", "Mars", '<path d="M16 3h5v5"/><path d="m21 3-6.75 6.75"/><circle cx="10" cy="14" r="6"/>'],
  ["mars-stroke", "Mars Stroke", '<path d="m14 6 4 4"/><path d="M17 3h4v4"/><path d="m21 3-7.75 7.75"/><circle cx="9" cy="15" r="6"/>'],
  ["martini", "Martini", '<path d="M8 22h8"/><path d="M12 11v11"/><path d="m19 3-7 8-7-8Z"/>'],
  ["maximize", "Maximize", '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>'],
  ["maximize2", "Maximize2", '<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/>'],
  ["medal", "Medal", '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/>'],
  ["megaphone", "Megaphone", '<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/><path d="M8 6v8"/>'],
  ["megaphone-off", "Megaphone Off", '<path d="M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344"/><path d="M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1"/><path d="m2 2 20 20"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/><path d="M8 8v6"/>'],
  ["meh", "Meh", '<circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="15" y2="15"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>'],
  ["memory-stick", "Memory Stick", '<path d="M12 12v-2"/><path d="M12 18v-2"/><path d="M16 12v-2"/><path d="M16 18v-2"/><path d="M2 11h1.5"/><path d="M20 18v-2"/><path d="M20.5 11H22"/><path d="M4 18v-2"/><path d="M8 12v-2"/><path d="M8 18v-2"/><rect x="2" y="6" width="20" height="10" rx="2"/>'],
  ["menu", "Menu", '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>'],
  ["menu-square", "Menu Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/>'],
  ["merge", "Merge", '<path d="m8 6 4-4 4 4"/><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"/><path d="m20 22-5-5"/>'],
  ["message-circle", "Message Circle", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>'],
  ["message-circle-check", "Message Circle Check", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="m9 12 2 2 4-4"/>'],
  ["message-circle-code", "Message Circle Code", '<path d="m10 9-3 3 3 3"/><path d="m14 15 3-3-3-3"/><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>'],
  ["message-circle-dashed", "Message Circle Dashed", '<path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.72a10 10 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.28 17.61a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98"/>'],
  ["message-circle-heart", "Message Circle Heart", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z"/>'],
  ["message-circle-more", "Message Circle More", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/>'],
  ["message-circle-off", "Message Circle Off", '<path d="m2 2 20 20"/><path d="M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989"/><path d="M8.35 2.69A10 10 0 0 1 21.3 15.65"/>'],
  ["message-circle-plus", "Message Circle Plus", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M8 12h8"/><path d="M12 8v8"/>'],
  ["message-circle-question", "Message Circle Question", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>'],
  ["message-circle-question-mark", "Message Circle Question Mark", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>'],
  ["message-circle-reply", "Message Circle Reply", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="m10 15-3-3 3-3"/><path d="M7 12h8a2 2 0 0 1 2 2v1"/>'],
  ["message-circle-warning", "Message Circle Warning", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M12 8v4"/><path d="M12 16h.01"/>'],
  ["message-circle-x", "Message Circle X", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>'],
  ["message-square", "Message Square", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>'],
  ["message-square-check", "Message Square Check", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="m9 11 2 2 4-4"/>'],
  ["message-square-code", "Message Square Code", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="m10 8-3 3 3 3"/><path d="m14 14 3-3-3-3"/>'],
  ["message-square-dashed", "Message Square Dashed", '<path d="M14 3h2"/><path d="M16 19h-2"/><path d="M2 12v-2"/><path d="M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149"/><path d="M20 19a2 2 0 0 0 2-2v-1"/><path d="M22 10v2"/><path d="M22 6V5a2 2 0 0 0-2-2"/><path d="M4 3a2 2 0 0 0-2 2v1"/><path d="M8 19h2"/><path d="M8 3h2"/>'],
  ["message-square-diff", "Message Square Diff", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M10 15h4"/><path d="M10 9h4"/><path d="M12 7v4"/>'],
  ["message-square-dot", "Message Square Dot", '<path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7"/><circle cx="19" cy="6" r="3"/>'],
  ["message-square-heart", "Message Square Heart", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5"/>'],
  ["message-square-lock", "Message Square Lock", '<path d="M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10"/><path d="M20 15v-2a2 2 0 0 0-4 0v2"/><rect x="14" y="15" width="8" height="5" rx="1"/>'],
  ["message-square-more", "Message Square More", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 11h.01"/>'],
  ["message-square-off", "Message Square Off", '<path d="M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826"/><path d="m2 2 20 20"/><path d="M8.656 3H20a2 2 0 0 1 2 2v11.344"/>'],
  ["message-square-plus", "Message Square Plus", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M12 8v6"/><path d="M9 11h6"/>'],
  ["message-square-quote", "Message Square Quote", '<path d="M14 14a2 2 0 0 0 2-2V8h-2"/><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M8 14a2 2 0 0 0 2-2V8H8"/>'],
  ["message-square-reply", "Message Square Reply", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="m10 8-3 3 3 3"/><path d="M17 14v-1a2 2 0 0 0-2-2H7"/>'],
  ["message-square-share", "Message Square Share", '<path d="M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4"/><path d="M16 3h6v6"/><path d="m16 9 6-6"/>'],
  ["message-square-text", "Message Square Text", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>'],
  ["message-square-warning", "Message Square Warning", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M12 15h.01"/><path d="M12 7v4"/>'],
  ["message-square-x", "Message Square X", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="m14.5 8.5-5 5"/><path d="m9.5 8.5 5 5"/>'],
  ["messages-square", "Messages Square", '<path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/>'],
  ["metronome", "Metronome", '<path d="M12 11.4V9.1"/><path d="m12 17 6.59-6.59"/><path d="m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2"/><circle cx="20" cy="9" r="2"/>'],
  ["mic", "Mic", '<path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/>'],
  ["mic-off", "Mic Off", '<path d="M12 19v3"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M16.95 16.95A7 7 0 0 1 5 12v-2"/><path d="M18.89 13.23A7 7 0 0 0 19 12v-2"/><path d="m2 2 20 20"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/>'],
  ["mic-vocal", "Mic Vocal", '<path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"/><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"/><circle cx="16" cy="7" r="5"/>'],
  ["mic2", "Mic2", '<path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"/><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"/><circle cx="16" cy="7" r="5"/>'],
  ["microchip", "Microchip", '<path d="M10 12h4"/><path d="M10 17h4"/><path d="M10 7h4"/><path d="M18 12h2"/><path d="M18 18h2"/><path d="M18 6h2"/><path d="M4 12h2"/><path d="M4 18h2"/><path d="M4 6h2"/><rect x="6" y="2" width="12" height="20" rx="2"/>'],
  ["microscope", "Microscope", '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>'],
  ["microwave", "Microwave", '<rect width="20" height="15" x="2" y="4" rx="2"/><rect width="8" height="7" x="6" y="8" rx="1"/><path d="M18 8v7"/><path d="M6 19v2"/><path d="M18 19v2"/>'],
  ["milestone", "Milestone", '<path d="M12 13v8"/><path d="M12 3v3"/><path d="M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"/>'],
  ["milk", "Milk", '<path d="M8 2h8"/><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"/><path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/>'],
  ["milk-off", "Milk Off", '<path d="M8 2h8"/><path d="M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"/><path d="M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"/><line x1="2" x2="22" y1="2" y2="22"/>'],
  ["minimize", "Minimize", '<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>'],
  ["minimize2", "Minimize2", '<path d="m14 10 7-7"/><path d="M20 10h-6V4"/><path d="m3 21 7-7"/><path d="M4 14h6v6"/>'],
  ["minus", "Minus", '<path d="M5 12h14"/>'],
  ["minus-circle", "Minus Circle", '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>'],
  ["minus-square", "Minus Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/>'],
  ["mirror-rectangular", "Mirror Rectangular", '<path d="M11 6 8 9"/><path d="m16 7-8 8"/><rect x="4" y="2" width="16" height="20" rx="2"/>'],
  ["mirror-round", "Mirror Round", '<path d="M10 6.6 8.6 8"/><path d="M12 18v4"/><path d="M15 7.5 9.5 13"/><path d="M7 22h10"/><circle cx="12" cy="10" r="8"/>'],
  ["monitor", "Monitor", '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>'],
  ["monitor-check", "Monitor Check", '<path d="m9 10 2 2 4-4"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/>'],
  ["monitor-cloud", "Monitor Cloud", '<path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z"/><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/>'],
  ["monitor-cog", "Monitor Cog", '<path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/>'],
  ["monitor-dot", "Monitor Dot", '<path d="M12 17v4"/><path d="M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693"/><path d="M8 21h8"/><circle cx="19" cy="6" r="3"/>'],
  ["monitor-down", "Monitor Down", '<path d="M12 13V7"/><path d="m15 10-3 3-3-3"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/>'],
  ["monitor-off", "Monitor Off", '<path d="M12 17v4"/><path d="M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826"/><path d="m2 2 20 20"/><path d="M8 21h8"/><path d="M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042"/>'],
  ["monitor-pause", "Monitor Pause", '<path d="M10 13V7"/><path d="M14 13V7"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/>'],
  ["monitor-play", "Monitor Play", '<path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"/><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/>'],
  ["monitor-smartphone", "Monitor Smartphone", '<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/>'],
  ["monitor-speaker", "Monitor Speaker", '<path d="M5.5 20H8"/><path d="M17 9h.01"/><rect width="10" height="16" x="12" y="4" rx="2"/><path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"/><circle cx="17" cy="15" r="1"/>'],
  ["monitor-stop", "Monitor Stop", '<path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/><rect x="9" y="7" width="6" height="6" rx="1"/>'],
  ["monitor-up", "Monitor Up", '<path d="m9 10 3-3 3 3"/><path d="M12 13V7"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/>'],
  ["monitor-x", "Monitor X", '<path d="m14.5 12.5-5-5"/><path d="m9.5 12.5 5-5"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/>'],
  ["moon", "Moon", '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>'],
  ["moon-star", "Moon Star", '<path d="M18 5h4"/><path d="M20 3v4"/><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>'],
  ["more-horizontal", "More Horizontal", '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>'],
  ["more-vertical", "More Vertical", '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>'],
  ["motorbike", "Motorbike", '<path d="m18 14-1-3"/><path d="m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81"/><path d="M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5"/><circle cx="19" cy="17" r="3"/><circle cx="5" cy="17" r="3"/>'],
  ["mountain", "Mountain", '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>'],
  ["mountain-snow", "Mountain Snow", '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"/>'],
  ["mouse", "Mouse", '<rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/>'],
  ["mouse-left", "Mouse Left", '<path d="M12 7.318V10"/><path d="M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7"/><circle cx="7" cy="4" r="2"/>'],
  ["mouse-off", "Mouse Off", '<path d="M12 6v.343"/><path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"/><path d="M19 13.343V9A7 7 0 0 0 8.56 2.902"/><path d="M22 22 2 2"/>'],
  ["mouse-pointer", "Mouse Pointer", '<path d="M12.586 12.586 19 19"/><path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"/>'],
  ["mouse-pointer-ban", "Mouse Pointer Ban", '<path d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"/><circle cx="16" cy="16" r="6"/><path d="m11.8 11.8 8.4 8.4"/>'],
  ["mouse-pointer-click", "Mouse Pointer Click", '<path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/>'],
  ["mouse-pointer-square-dashed", "Mouse Pointer Square Dashed", '<path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h2"/><path d="M14 3h1"/><path d="M3 9v1"/><path d="M21 9v2"/><path d="M3 14v1"/>'],
  ["mouse-pointer2", "Mouse Pointer2", '<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/>'],
  ["mouse-pointer2-off", "Mouse Pointer2 Off", '<path d="m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551"/><path d="M22 2 2 22"/><path d="m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779"/>'],
  ["mouse-right", "Mouse Right", '<path d="M12 7.318V10"/><path d="M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7"/><circle cx="17" cy="4" r="2"/>'],
  ["move", "Move", '<path d="M12 2v20"/><path d="m15 19-3 3-3-3"/><path d="m19 9 3 3-3 3"/><path d="M2 12h20"/><path d="m5 9-3 3 3 3"/><path d="m9 5 3-3 3 3"/>'],
  ["move-diagonal", "Move Diagonal", '<path d="M11 19H5v-6"/><path d="M13 5h6v6"/><path d="M19 5 5 19"/>'],
  ["move-diagonal2", "Move Diagonal2", '<path d="M19 13v6h-6"/><path d="M5 11V5h6"/><path d="m5 5 14 14"/>'],
  ["move-down", "Move Down", '<path d="M8 18L12 22L16 18"/><path d="M12 2V22"/>'],
  ["move-down-left", "Move Down Left", '<path d="M11 19H5V13"/><path d="M19 5L5 19"/>'],
  ["move-down-right", "Move Down Right", '<path d="M19 13V19H13"/><path d="M5 5L19 19"/>'],
  ["move-horizontal", "Move Horizontal", '<path d="m18 8 4 4-4 4"/><path d="M2 12h20"/><path d="m6 8-4 4 4 4"/>'],
  ["move-left", "Move Left", '<path d="M6 8L2 12L6 16"/><path d="M2 12H22"/>'],
  ["move-right", "Move Right", '<path d="M18 8L22 12L18 16"/><path d="M2 12H22"/>'],
  ["move-up", "Move Up", '<path d="M8 6L12 2L16 6"/><path d="M12 2V22"/>'],
  ["move-up-left", "Move Up Left", '<path d="M5 11V5H11"/><path d="M5 5L19 19"/>'],
  ["move-up-right", "Move Up Right", '<path d="M13 5H19V11"/><path d="M19 5L5 19"/>'],
  ["move-vertical", "Move Vertical", '<path d="M12 2v20"/><path d="m8 18 4 4 4-4"/><path d="m8 6 4-4 4 4"/>'],
  ["move3-d", "Move3 D", '<path d="M5 3v16h16"/><path d="m5 19 6-6"/><path d="m2 6 3-3 3 3"/><path d="m18 16 3 3-3 3"/>'],
  ["move3d", "Move3d", '<path d="M5 3v16h16"/><path d="m5 19 6-6"/><path d="m2 6 3-3 3 3"/><path d="m18 16 3 3-3 3"/>'],
  ["music", "Music", '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'],
  ["music2", "Music2", '<circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/>'],
  ["music3", "Music3", '<circle cx="12" cy="18" r="4"/><path d="M16 18V2"/>'],
  ["music4", "Music4", '<path d="M9 18V5l12-2v13"/><path d="m9 9 12-2"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'],
  ["navigation", "Navigation", '<polygon points="3 11 22 2 13 21 11 13 3 11"/>'],
  ["navigation-off", "Navigation Off", '<path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43"/><path d="M17.39 11.73 22 2l-9.73 4.61"/><line x1="2" x2="22" y1="2" y2="22"/>'],
  ["navigation2", "Navigation2", '<polygon points="12 2 19 21 12 17 5 21 12 2"/>'],
  ["navigation2-off", "Navigation2 Off", '<path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17"/><path d="M14.53 8.88 12 2l-1.17 3.17"/><line x1="2" x2="22" y1="2" y2="22"/>'],
  ["network", "Network", '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>'],
  ["newspaper", "Newspaper", '<path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/>'],
  ["nfc", "Nfc", '<path d="M6 8.32a7.43 7.43 0 0 1 0 7.36"/><path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"/><path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"/><path d="M16.37 2a20.16 20.16 0 0 1 0 20"/>'],
  ["non-binary", "Non Binary", '<path d="M12 2v10"/><path d="m8.5 4 7 4"/><path d="m8.5 8 7-4"/><circle cx="12" cy="17" r="5"/>'],
  ["notebook", "Notebook", '<path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2v20"/>'],
  ["notebook-pen", "Notebook Pen", '<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>'],
  ["notebook-tabs", "Notebook Tabs", '<path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M15 2v20"/><path d="M15 7h5"/><path d="M15 12h5"/><path d="M15 17h5"/>'],
  ["notebook-text", "Notebook Text", '<path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9.5 8h5"/><path d="M9.5 12H16"/><path d="M9.5 16H14"/>'],
  ["notepad-text", "Notepad Text", '<path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/>'],
  ["notepad-text-dashed", "Notepad Text Dashed", '<path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><path d="M16 4h2a2 2 0 0 1 2 2v2"/><path d="M20 12v2"/><path d="M20 18v2a2 2 0 0 1-2 2h-1"/><path d="M13 22h-2"/><path d="M7 22H6a2 2 0 0 1-2-2v-2"/><path d="M4 14v-2"/><path d="M4 8V6a2 2 0 0 1 2-2h2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/>'],
  ["nut", "Nut", '<path d="M12 4V2"/><path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"/><path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"/>'],
  ["nut-off", "Nut Off", '<path d="M12 4V2"/><path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"/><path d="M19 10v3.343"/><path d="M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"/><line x1="2" x2="22" y1="2" y2="22"/>'],
  ["octagon", "Octagon", '<path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/>'],
  ["octagon-alert", "Octagon Alert", '<path d="M12 16h.01"/><path d="M12 8v4"/><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"/>'],
  ["octagon-minus", "Octagon Minus", '<path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/><path d="M8 12h8"/>'],
  ["octagon-pause", "Octagon Pause", '<path d="M10 15V9"/><path d="M14 15V9"/><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/>'],
  ["octagon-x", "Octagon X", '<path d="m15 9-6 6"/><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/><path d="m9 9 6 6"/>'],
  ["omega", "Omega", '<path d="M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"/>'],
  ["option", "Option", '<path d="M3 3h6l6 18h6"/><path d="M14 3h7"/>'],
  ["orbit", "Orbit", '<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>'],
  ["origami", "Origami", '<path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"/><path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"/><path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"/>'],
  ["outdent", "Outdent", '<path d="M21 5H11"/><path d="M21 12H11"/><path d="M21 19H11"/><path d="m7 8-4 4 4 4"/>'],
  ["package", "Package", '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>'],
  ["package-check", "Package Check", '<path d="M12 22V12"/><path d="m16 17 2 2 4-4"/><path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/>'],
  ["package-minus", "Package Minus", '<path d="M12 22V12"/><path d="M16 17h6"/><path d="M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/>'],
  ["package-open", "Package Open", '<path d="M12 22v-9"/><path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"/><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"/><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"/>'],
  ["package-plus", "Package Plus", '<path d="M12 22V12"/><path d="M16 17h6"/><path d="M19 14v6"/><path d="M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/>'],
  ["package-search", "Package Search", '<path d="M12 22V12"/><path d="M20.27 18.27 22 20"/><path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/><circle cx="18.5" cy="16.5" r="2.5"/>'],
  ["package-x", "Package X", '<path d="M12 22V12"/><path d="m16.5 14.5 5 5"/><path d="m16.5 19.5 5-5"/><path d="M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/>'],
  ["package2", "Package2", '<path d="M12 3v6"/><path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z"/><path d="M3.054 9.013h17.893"/>'],
  ["paint-bucket", "Paint Bucket", '<path d="M11 7 6 2"/><path d="M18.992 12H2.041"/><path d="M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595"/><path d="m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33"/>'],
  ["paint-roller", "Paint Roller", '<rect width="16" height="6" x="2" y="2" rx="2"/><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect width="4" height="6" x="8" y="16" rx="1"/>'],
  ["paintbrush", "Paintbrush", '<path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/>'],
  ["paintbrush-vertical", "Paintbrush Vertical", '<path d="M10 2v2"/><path d="M14 2v4"/><path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"/><path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"/>'],
  ["paintbrush2", "Paintbrush2", '<path d="M10 2v2"/><path d="M14 2v4"/><path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"/><path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"/>'],
  ["palette", "Palette", '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>'],
  ["palmtree", "Palmtree", '<path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"/><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/>'],
  ["panda", "Panda", '<path d="M11.25 17.25h1.5L12 18z"/><path d="m15 12 2 2"/><path d="M18 6.5a.5.5 0 0 0-.5-.5"/><path d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83"/><path d="M6 6.5a.495.495 0 0 1 .5-.5"/><path d="m9 12-2 2"/>'],
  ["panel-bottom", "Panel Bottom", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/>'],
  ["panel-bottom-close", "Panel Bottom Close", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/><path d="m15 8-3 3-3-3"/>'],
  ["panel-bottom-dashed", "Panel Bottom Dashed", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M14 15h1"/><path d="M19 15h2"/><path d="M3 15h2"/><path d="M9 15h1"/>'],
  ["panel-bottom-inactive", "Panel Bottom Inactive", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M14 15h1"/><path d="M19 15h2"/><path d="M3 15h2"/><path d="M9 15h1"/>'],
  ["panel-bottom-open", "Panel Bottom Open", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/><path d="m9 10 3-3 3 3"/>'],
  ["panel-left", "Panel Left", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>'],
  ["panel-left-close", "Panel Left Close", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>'],
  ["panel-left-dashed", "Panel Left Dashed", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1"/><path d="M9 19v2"/><path d="M9 3v2"/><path d="M9 9v1"/>'],
  ["panel-left-inactive", "Panel Left Inactive", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1"/><path d="M9 19v2"/><path d="M9 3v2"/><path d="M9 9v1"/>'],
  ["panel-left-open", "Panel Left Open", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/>'],
  ["panel-left-right-dashed", "Panel Left Right Dashed", '<path d="M15 10V9"/><path d="M15 15v-1"/><path d="M15 21v-2"/><path d="M15 5V3"/><path d="M9 10V9"/><path d="M9 15v-1"/><path d="M9 21v-2"/><path d="M9 5V3"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["panel-right", "Panel Right", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/>'],
  ["panel-right-close", "Panel Right Close", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/>'],
  ["panel-right-dashed", "Panel Right Dashed", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 14v1"/><path d="M15 19v2"/><path d="M15 3v2"/><path d="M15 9v1"/>'],
  ["panel-right-inactive", "Panel Right Inactive", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 14v1"/><path d="M15 19v2"/><path d="M15 3v2"/><path d="M15 9v1"/>'],
  ["panel-right-open", "Panel Right Open", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m10 15-3-3 3-3"/>'],
  ["panel-top", "Panel Top", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/>'],
  ["panel-top-bottom-dashed", "Panel Top Bottom Dashed", '<path d="M14 15h1"/><path d="M14 9h1"/><path d="M19 15h2"/><path d="M19 9h2"/><path d="M3 15h2"/><path d="M3 9h2"/><path d="M9 15h1"/><path d="M9 9h1"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["panel-top-close", "Panel Top Close", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="m9 16 3-3 3 3"/>'],
  ["panel-top-dashed", "Panel Top Dashed", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M14 9h1"/><path d="M19 9h2"/><path d="M3 9h2"/><path d="M9 9h1"/>'],
  ["panel-top-inactive", "Panel Top Inactive", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M14 9h1"/><path d="M19 9h2"/><path d="M3 9h2"/><path d="M9 9h1"/>'],
  ["panel-top-open", "Panel Top Open", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="m15 14-3 3-3-3"/>'],
  ["panels-left-bottom", "Panels Left Bottom", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M9 15h12"/>'],
  ["panels-left-right", "Panels Left Right", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/>'],
  ["panels-right-bottom", "Panels Right Bottom", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h12"/><path d="M15 3v18"/>'],
  ["panels-top-bottom", "Panels Top Bottom", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/>'],
  ["panels-top-left", "Panels Top Left", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>'],
  ["paperclip", "Paperclip", '<path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>'],
  ["parentheses", "Parentheses", '<path d="M8 21s-4-3-4-9 4-9 4-9"/><path d="M16 3s4 3 4 9-4 9-4 9"/>'],
  ["parking-circle", "Parking Circle", '<circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>'],
  ["parking-circle-off", "Parking Circle Off", '<path d="M12.656 7H13a3 3 0 0 1 2.984 3.307"/><path d="M13 13H9"/><path d="M19.071 19.071A1 1 0 0 1 4.93 4.93"/><path d="m2 2 20 20"/><path d="M8.357 2.687a10 10 0 0 1 12.956 12.956"/><path d="M9 17V9"/>'],
  ["parking-meter", "Parking Meter", '<path d="M11 15h2"/><path d="M12 12v3"/><path d="M12 19v3"/><path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"/><path d="M9 9a3 3 0 1 1 6 0"/>'],
  ["parking-square", "Parking Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>'],
  ["parking-square-off", "Parking Square Off", '<path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"/><path d="M3 8.7V19a2 2 0 0 0 2 2h10.3"/><path d="m2 2 20 20"/><path d="M13 13a3 3 0 1 0 0-6H9v2"/><path d="M9 17v-2.3"/>'],
  ["party-popper", "Party Popper", '<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>'],
  ["pause", "Pause", '<rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/>'],
  ["pause-circle", "Pause Circle", '<circle cx="12" cy="12" r="10"/><line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/>'],
  ["pause-octagon", "Pause Octagon", '<path d="M10 15V9"/><path d="M14 15V9"/><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/>'],
  ["paw-print", "Paw Print", '<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>'],
  ["pc-case", "Pc Case", '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M15 14h.01"/><path d="M9 6h6"/><path d="M9 10h6"/>'],
  ["pen", "Pen", '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>'],
  ["pen-box", "Pen Box", '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>'],
  ["pen-line", "Pen Line", '<path d="M13 21h8"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>'],
  ["pen-off", "Pen Off", '<path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"/><path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"/><path d="m2 2 20 20"/>'],
  ["pen-square", "Pen Square", '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>'],
  ["pen-tool", "Pen Tool", '<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/><path d="m2.3 2.3 7.286 7.286"/><circle cx="11" cy="11" r="2"/>'],
  ["pencil", "Pencil", '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>'],
  ["pencil-line", "Pencil Line", '<path d="M13 21h8"/><path d="m15 5 4 4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>'],
  ["pencil-off", "Pencil Off", '<path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"/><path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"/><path d="m15 5 4 4"/><path d="m2 2 20 20"/>'],
  ["pencil-ruler", "Pencil Ruler", '<path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>'],
  ["pentagon", "Pentagon", '<path d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"/>'],
  ["percent", "Percent", '<line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>'],
  ["percent-circle", "Percent Circle", '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/>'],
  ["percent-diamond", "Percent Diamond", '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"/><path d="M9.2 9.2h.01"/><path d="m14.5 9.5-5 5"/><path d="M14.7 14.8h.01"/>'],
  ["percent-square", "Percent Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/>'],
  ["person-standing", "Person Standing", '<circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/>'],
  ["philippine-peso", "Philippine Peso", '<path d="M20 11H4"/><path d="M20 7H4"/><path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"/>'],
  ["phone", "Phone", '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>'],
  ["phone-call", "Phone Call", '<path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>'],
  ["phone-forwarded", "Phone Forwarded", '<path d="M14 6h8"/><path d="m18 2 4 4-4 4"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>'],
  ["phone-incoming", "Phone Incoming", '<path d="M16 2v6h6"/><path d="m22 2-6 6"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>'],
  ["phone-missed", "Phone Missed", '<path d="m16 2 6 6"/><path d="m22 2-6 6"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>'],
  ["phone-off", "Phone Off", '<path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"/><path d="M22 2 2 22"/><path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"/>'],
  ["phone-outgoing", "Phone Outgoing", '<path d="m16 8 6-6"/><path d="M22 8V2h-6"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>'],
  ["pi", "Pi", '<line x1="9" x2="9" y1="4" y2="20"/><path d="M4 7c0-1.7 1.3-3 3-3h13"/><path d="M18 20c-1.7 0-3-1.3-3-3V4"/>'],
  ["pi-square", "Pi Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M10 7v10"/><path d="M16 17a2 2 0 0 1-2-2V7"/>'],
  ["piano", "Piano", '<path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"/><path d="M2 14h20"/><path d="M6 14v4"/><path d="M10 14v4"/><path d="M14 14v4"/><path d="M18 14v4"/>'],
  ["pickaxe", "Pickaxe", '<path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"/><path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"/><path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"/><path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"/>'],
  ["picture-in-picture", "Picture In Picture", '<path d="M2 10h6V4"/><path d="m2 4 6 6"/><path d="M21 10V7a2 2 0 0 0-2-2h-7"/><path d="M3 14v2a2 2 0 0 0 2 2h3"/><rect x="12" y="14" width="10" height="7" rx="1"/>'],
  ["picture-in-picture2", "Picture In Picture2", '<path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"/><rect width="10" height="7" x="12" y="13" rx="2"/>'],
  ["pie-chart", "Pie Chart", '<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>'],
  ["piggy-bank", "Piggy Bank", '<path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"/><path d="M16 10h.01"/><path d="M2 8v1a2 2 0 0 0 2 2h1"/>'],
  ["pilcrow", "Pilcrow", '<path d="M13 4v16"/><path d="M17 4v16"/><path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13"/>'],
  ["pilcrow-left", "Pilcrow Left", '<path d="M14 3v11"/><path d="M14 9h-3a3 3 0 0 1 0-6h9"/><path d="M18 3v11"/><path d="M22 18H2l4-4"/><path d="m6 22-4-4"/>'],
  ["pilcrow-right", "Pilcrow Right", '<path d="M10 3v11"/><path d="M10 9H7a1 1 0 0 1 0-6h8"/><path d="M14 3v11"/><path d="m18 14 4 4H2"/><path d="m22 18-4 4"/>'],
  ["pilcrow-square", "Pilcrow Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17"/><path d="M12 7v10"/><path d="M16 7v10"/>'],
  ["pill", "Pill", '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>'],
  ["pill-bottle", "Pill Bottle", '<path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"/><path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"/><rect width="16" height="5" x="4" y="2" rx="1"/>'],
  ["pin", "Pin", '<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>'],
  ["pin-off", "Pin Off", '<path d="M12 17v5"/><path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"/><path d="m2 2 20 20"/><path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"/>'],
  ["pipette", "Pipette", '<path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"/><path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"/><path d="m2 22 .414-.414"/>'],
  ["pizza", "Pizza", '<path d="m12 14-1 1"/><path d="m13.75 18.25-1.25 1.42"/><path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"/><path d="M18.8 9.3a1 1 0 0 0 2.1 7.7"/><path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"/>'],
  ["plane", "Plane", '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>'],
  ["plane-landing", "Plane Landing", '<path d="M2 22h20"/><path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"/>'],
  ["plane-takeoff", "Plane Takeoff", '<path d="M2 22h20"/><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"/>'],
  ["play", "Play", '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>'],
  ["play-circle", "Play Circle", '<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/><circle cx="12" cy="12" r="10"/>'],
  ["play-square", "Play Square", '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/>'],
  ["plug", "Plug", '<path d="M12 22v-5"/><path d="M15 8V2"/><path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"/><path d="M9 8V2"/>'],
  ["plug-zap", "Plug Zap", '<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="m2 22 3-3"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m18 3-4 4h6l-4 4"/>'],
  ["plug-zap2", "Plug Zap2", '<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="m2 22 3-3"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m18 3-4 4h6l-4 4"/>'],
  ["plug2", "Plug2", '<path d="M9 2v6"/><path d="M15 2v6"/><path d="M12 17v5"/><path d="M5 8h14"/><path d="M6 11V8h12v3a6 6 0 1 1-12 0Z"/>'],
  ["plus", "Plus", '<path d="M5 12h14"/><path d="M12 5v14"/>'],
  ["plus-circle", "Plus Circle", '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>'],
  ["plus-square", "Plus Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/>'],
  ["pocket-knife", "Pocket Knife", '<path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"/><path d="M18 6h.01"/><path d="M6 18h.01"/><path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"/><path d="M18 11.66V22a4 4 0 0 0 4-4V6"/>'],
  ["podcast", "Podcast", '<path d="M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z" fill="currentColor"/><path d="M16.85 18.58a9 9 0 1 0-9.7 0"/><path d="M8 14a5 5 0 1 1 8 0"/><circle cx="12" cy="11" r="1" fill="currentColor"/>'],
  ["pointer", "Pointer", '<path d="M22 14a8 8 0 0 1-8 8"/><path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"/><path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'],
  ["pointer-off", "Pointer Off", '<path d="M10 4.5V4a2 2 0 0 0-2.41-1.957"/><path d="M13.9 8.4a2 2 0 0 0-1.26-1.295"/><path d="M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"/><path d="m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"/><path d="M6 6v8"/><path d="m2 2 20 20"/>'],
  ["popcorn", "Popcorn", '<path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"/><path d="M10 22 9 8"/><path d="m14 22 1-14"/><path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"/>'],
  ["popsicle", "Popsicle", '<path d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"/><path d="m22 22-5.5-5.5"/>'],
  ["pound-sterling", "Pound Sterling", '<path d="M18 7c0-5.333-8-5.333-8 0"/><path d="M10 7v14"/><path d="M6 21h12"/><path d="M6 13h10"/>'],
  ["power", "Power", '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>'],
  ["power-circle", "Power Circle", '<circle cx="12" cy="12" r="10"/><path d="M12 7v4"/><path d="M7.998 9.003a5 5 0 1 0 8-.005"/>'],
  ["power-off", "Power Off", '<path d="M18.36 6.64A9 9 0 0 1 20.77 15"/><path d="M6.16 6.16a9 9 0 1 0 12.68 12.68"/><path d="M12 2v4"/><path d="m2 2 20 20"/>'],
  ["power-square", "Power Square", '<path d="M12 7v4"/><path d="M7.998 9.003a5 5 0 1 0 8-.005"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["presentation", "Presentation", '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>'],
  ["printer", "Printer", '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>'],
  ["printer-check", "Printer Check", '<path d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"/><path d="m16 19 2 2 4-4"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/>'],
  ["printer-x", "Printer X", '<path d="M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377"/><path d="m16.5 16.5 5 5"/><path d="m16.5 21.5 5-5"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/>'],
  ["projector", "Projector", '<path d="M5 7 3 5"/><path d="M9 6V3"/><path d="m13 7 2-2"/><circle cx="9" cy="13" r="3"/><path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"/><path d="M16 16h2"/>'],
  ["proportions", "Proportions", '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M12 9v11"/><path d="M2 9h13a2 2 0 0 1 2 2v9"/>'],
  ["puzzle", "Puzzle", '<path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"/>'],
  ["pyramid", "Pyramid", '<path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"/><path d="M12 2v20"/>'],
  ["qr-code", "Qr Code", '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>'],
  ["quote", "Quote", '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>'],
  ["rabbit", "Rabbit", '<path d="M13 16a3 3 0 0 1 2.24 5"/><path d="M18 12h.01"/><path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/><path d="M20 8.54V4a2 2 0 1 0-4 0v3"/><path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"/>'],
  ["radar", "Radar", '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>'],
  ["radiation", "Radiation", '<path d="M12 12h.01"/><path d="M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z"/><path d="M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z"/><path d="M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z"/>'],
  ["radical", "Radical", '<path d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"/>'],
  ["radio", "Radio", '<path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/>'],
  ["radio-off", "Radio Off", '<path d="M10.4103 10.7852C10.1529 11.1218 10 11.5425 10 11.999C10 13.1036 10.8954 13.999 12 13.999C12.5077 13.999 12.9713 13.8098 13.324 13.498"/><path d="M16.1992 7.80078C17.4739 9.07549 18.0422 10.8109 17.9039 12.5134"/><path d="M19.0996 4.89844C22.0892 7.88804 22.7871 12.2879 21.1932 15.936"/><path d="M2 2L22 22"/><path d="M4.89961 19.0984C0.999609 15.1984 0.999609 8.79844 4.89961 4.89844"/><path d="M7.79922 16.1992C5.66828 14.0683 5.51165 10.6498 7.32931 8.25"/>'],
  ["radio-receiver", "Radio Receiver", '<path d="M5 16v2"/><path d="M19 16v2"/><rect width="20" height="8" x="2" y="8" rx="2"/><path d="M18 12h.01"/>'],
  ["radio-tower", "Radio Tower", '<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"/><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"/><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"/><path d="M9.5 18h5"/><path d="m8 22 4-11 4 11"/>'],
  ["radius", "Radius", '<path d="M20.34 17.52a10 10 0 1 0-2.82 2.82"/><circle cx="19" cy="19" r="2"/><path d="m13.41 13.41 4.18 4.18"/><circle cx="12" cy="12" r="2"/>'],
  ["rainbow", "Rainbow", '<path d="M22 17a10 10 0 0 0-20 0"/><path d="M6 17a6 6 0 0 1 12 0"/><path d="M10 17a2 2 0 0 1 4 0"/>'],
  ["rat", "Rat", '<path d="M13 22H4a2 2 0 0 1 0-4h12"/><path d="M13.236 18a3 3 0 0 0-2.2-5"/><path d="M16 9h.01"/><path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"/><path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18"/>'],
  ["ratio", "Ratio", '<rect width="12" height="20" x="6" y="2" rx="2"/><rect width="20" height="12" x="2" y="6" rx="2"/>'],
  ["receipt", "Receipt", '<path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>'],
  ["receipt-cent", "Receipt Cent", '<path d="M12 7v10"/><path d="M14.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>'],
  ["receipt-euro", "Receipt Euro", '<path d="M15.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/><path d="M8 12h5"/>'],
  ["receipt-indian-rupee", "Receipt Indian Rupee", '<path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/><path d="M8 11h8"/><path d="M8 7h8"/><path d="M9 7a4 4 0 0 1 0 8H8l3 2"/>'],
  ["receipt-japanese-yen", "Receipt Japanese Yen", '<path d="m12 10 3-3"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/><path d="M9 11h6"/><path d="M9 15h6"/><path d="m9 7 3 3v7"/>'],
  ["receipt-pound-sterling", "Receipt Pound Sterling", '<path d="M10 17V9.5a1 1 0 0 1 5 0"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/><path d="M8 13h5"/><path d="M8 17h7"/>'],
  ["receipt-russian-ruble", "Receipt Russian Ruble", '<path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/><path d="M8 11h5a2 2 0 0 0 0-4h-3v10"/><path d="M8 15h5"/>'],
  ["receipt-swiss-franc", "Receipt Swiss Franc", '<path d="M10 11h4"/><path d="M10 17V7h5"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/><path d="M8 15h5"/>'],
  ["receipt-text", "Receipt Text", '<path d="M13 16H8"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>'],
  ["receipt-turkish-lira", "Receipt Turkish Lira", '<path d="M10 7v10a5 5 0 0 0 5-5"/><path d="m14 8-6 3"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>'],
  ["rectangle-circle", "Rectangle Circle", '<path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><circle cx="14" cy="12" r="8"/>'],
  ["rectangle-ellipsis", "Rectangle Ellipsis", '<rect width="20" height="12" x="2" y="6" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/>'],
  ["rectangle-goggles", "Rectangle Goggles", '<path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>'],
  ["rectangle-horizontal", "Rectangle Horizontal", '<rect width="20" height="12" x="2" y="6" rx="2"/>'],
  ["rectangle-vertical", "Rectangle Vertical", '<rect width="12" height="20" x="6" y="2" rx="2"/>'],
  ["recycle", "Recycle", '<path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/>'],
  ["redo", "Redo", '<path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/>'],
  ["redo-dot", "Redo Dot", '<circle cx="12" cy="17" r="1"/><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/>'],
  ["redo2", "Redo2", '<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"/>'],
  ["refresh-ccw", "Refresh Ccw", '<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>'],
  ["refresh-ccw-dot", "Refresh Ccw Dot", '<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/><circle cx="12" cy="12" r="1"/>'],
  ["refresh-cw", "Refresh Cw", '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>'],
  ["refresh-cw-off", "Refresh Cw Off", '<path d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"/><path d="M8 16H3v5"/><path d="M3 12C3 9.51 4 7.26 5.64 5.64"/><path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"/><path d="M21 12c0 1-.16 1.97-.47 2.87"/><path d="M21 3v5h-5"/><path d="M22 22 2 2"/>'],
  ["refrigerator", "Refrigerator", '<path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"/><path d="M5 10h14"/><path d="M15 7v6"/>'],
  ["regex", "Regex", '<path d="M17 3v10"/><path d="m12.67 5.5 8.66 5"/><path d="m12.67 10.5 8.66-5"/><path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"/>'],
  ["remove-formatting", "Remove Formatting", '<path d="M4 7V4h16v3"/><path d="M5 20h6"/><path d="M13 4 8 20"/><path d="m15 15 5 5"/><path d="m20 15-5 5"/>'],
  ["repeat", "Repeat", '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>'],
  ["repeat1", "Repeat1", '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/><path d="M11 10h1v4"/>'],
  ["repeat2", "Repeat2", '<path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/>'],
  ["replace", "Replace", '<path d="M14 4a1 1 0 0 1 1-1"/><path d="M15 10a1 1 0 0 1-1-1"/><path d="M21 4a1 1 0 0 0-1-1"/><path d="M21 9a1 1 0 0 1-1 1"/><path d="m3 7 3 3 3-3"/><path d="M6 10V5a2 2 0 0 1 2-2h2"/><rect x="3" y="14" width="7" height="7" rx="1"/>'],
  ["replace-all", "Replace All", '<path d="M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"/><path d="M14 4a1 1 0 0 1 1-1"/><path d="M15 10a1 1 0 0 1-1-1"/><path d="M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"/><path d="M21 4a1 1 0 0 0-1-1"/><path d="M21 9a1 1 0 0 1-1 1"/><path d="m3 7 3 3 3-3"/><path d="M6 10V5a2 2 0 0 1 2-2h2"/><rect x="3" y="14" width="7" height="7" rx="1"/>'],
  ["reply", "Reply", '<path d="M20 18v-2a4 4 0 0 0-4-4H4"/><path d="m9 17-5-5 5-5"/>'],
  ["reply-all", "Reply All", '<path d="m12 17-5-5 5-5"/><path d="M22 18v-2a4 4 0 0 0-4-4H7"/><path d="m7 17-5-5 5-5"/>'],
  ["rewind", "Rewind", '<path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z"/><path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z"/>'],
  ["ribbon", "Ribbon", '<path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"/><path d="m12 18 2.57-3.5"/><path d="M6.243 9.016a7 7 0 0 1 11.507-.009"/><path d="M9.35 14.53 12 11.22"/><path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"/>'],
  ["road", "Road", '<path d="M12 17v4"/><path d="M12 5V3"/><path d="M12 9v3"/><path d="M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z"/>'],
  ["rocket", "Rocket", '<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/>'],
  ["rocking-chair", "Rocking Chair", '<path d="m15 13 3.708 7.416"/><path d="M3 19a15 15 0 0 0 18 0"/><path d="m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18"/><path d="m9 13-3.708 7.416"/>'],
  ["roller-coaster", "Roller Coaster", '<path d="M6 19V5"/><path d="M10 19V6.8"/><path d="M14 19v-7.8"/><path d="M18 5v4"/><path d="M18 19v-6"/><path d="M22 19V9"/><path d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"/>'],
  ["rose", "Rose", '<path d="M17 10h-1a4 4 0 1 1 4-4v.534"/><path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31"/><path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2"/><path d="M9.77 12C4 15 2 22 2 22"/><circle cx="17" cy="8" r="2"/>'],
  ["rotate-ccw", "Rotate Ccw", '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>'],
  ["rotate-ccw-key", "Rotate Ccw Key", '<path d="M12 7v6"/><path d="M12 9h2"/><path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><circle cx="12" cy="15" r="2"/>'],
  ["rotate-ccw-square", "Rotate Ccw Square", '<path d="M20 9V7a2 2 0 0 0-2-2h-6"/><path d="m15 2-3 3 3 3"/><path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/>'],
  ["rotate-cw", "Rotate Cw", '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>'],
  ["rotate-cw-square", "Rotate Cw Square", '<path d="M12 5H6a2 2 0 0 0-2 2v3"/><path d="m9 8 3-3-3-3"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>'],
  ["rotate3-d", "Rotate3 D", '<path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"/><path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"/>'],
  ["rotate3d", "Rotate3d", '<path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"/><path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"/>'],
  ["route", "Route", '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>'],
  ["route-off", "Route Off", '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5c.4 0 .9-.1 1.3-.2"/><path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"/><path d="m2 2 20 20"/><path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3"/><path d="M15 5h-4.3"/><circle cx="18" cy="5" r="3"/>'],
  ["router", "Router", '<rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6"/><path d="M10.01 18H10"/><path d="M15 10v4"/><path d="M17.84 7.17a4 4 0 0 0-5.66 0"/><path d="M20.66 4.34a8 8 0 0 0-11.31 0"/>'],
  ["rows", "Rows", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/>'],
  ["rows2", "Rows2", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/>'],
  ["rows3", "Rows3", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/>'],
  ["rows4", "Rows4", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 7.5H3"/><path d="M21 12H3"/><path d="M21 16.5H3"/>'],
  ["rss", "Rss", '<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>'],
  ["ruler", "Ruler", '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>'],
  ["ruler-dimension-line", "Ruler Dimension Line", '<path d="M10 15v-3"/><path d="M14 15v-3"/><path d="M18 15v-3"/><path d="M2 8V4"/><path d="M22 6H2"/><path d="M22 8V4"/><path d="M6 15v-3"/><rect x="2" y="12" width="20" height="8" rx="2"/>'],
  ["russian-ruble", "Russian Ruble", '<path d="M6 11h8a4 4 0 0 0 0-8H9v18"/><path d="M6 15h8"/>'],
  ["sailboat", "Sailboat", '<path d="M10 2v15"/><path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"/><path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>'],
  ["salad", "Salad", '<path d="M7 21h10"/><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"/><path d="m13 12 4-4"/><path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"/>'],
  ["sandwich", "Sandwich", '<path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"/><path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"/><path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"/><path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/><rect width="20" height="4" x="2" y="11" rx="1"/>'],
  ["satellite", "Satellite", '<path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"/><path d="M16.5 7.5 19 5"/><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"/><path d="M9 21a6 6 0 0 0-6-6"/><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/>'],
  ["satellite-dish", "Satellite Dish", '<path d="M4 10a7.31 7.31 0 0 0 10 10Z"/><path d="m9 15 3-3"/><path d="M17 13a6 6 0 0 0-6-6"/><path d="M21 13A10 10 0 0 0 11 3"/>'],
  ["saudi-riyal", "Saudi Riyal", '<path d="m20 19.5-5.5 1.2"/><path d="M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2"/><path d="m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2"/><path d="M20 10 4 13.5"/>'],
  ["save", "Save", '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>'],
  ["save-all", "Save All", '<path d="M10 2v3a1 1 0 0 0 1 1h5"/><path d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"/><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"/>'],
  ["save-off", "Save Off", '<path d="M13 13H8a1 1 0 0 0-1 1v7"/><path d="M14 8h1"/><path d="M17 21v-4"/><path d="m2 2 20 20"/><path d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"/><path d="M29.5 11.5s5 5 4 5"/><path d="M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"/>'],
  ["scale", "Scale", '<path d="M12 3v18"/><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M7 21h10"/>'],
  ["scale3-d", "Scale3 D", '<path d="M5 7v11a1 1 0 0 0 1 1h11"/><path d="M5.293 18.707 11 13"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/>'],
  ["scale3d", "Scale3d", '<path d="M5 7v11a1 1 0 0 0 1 1h11"/><path d="M5.293 18.707 11 13"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/>'],
  ["scaling", "Scaling", '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5"/><path d="M16 3h5v5"/><path d="M21 3 9 15"/>'],
  ["scan", "Scan", '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>'],
  ["scan-barcode", "Scan Barcode", '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M17 7v10"/>'],
  ["scan-eye", "Scan Eye", '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="1"/><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/>'],
  ["scan-face", "Scan Face", '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/>'],
  ["scan-heart", "Scan Heart", '<path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z"/>'],
  ["scan-line", "Scan Line", '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>'],
  ["scan-qr-code", "Scan Qr Code", '<path d="M17 12v4a1 1 0 0 1-1 1h-4"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M17 8V7"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M7 17h.01"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect x="7" y="7" width="5" height="5" rx="1"/>'],
  ["scan-search", "Scan Search", '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/>'],
  ["scan-text", "Scan Text", '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>'],
  ["scatter-chart", "Scatter Chart", '<circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="18.5" cy="5.5" r=".5" fill="currentColor"/><circle cx="11.5" cy="11.5" r=".5" fill="currentColor"/><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="14.5" r=".5" fill="currentColor"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/>'],
  ["school", "School", '<path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M18 4.933V21"/><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"/><path d="M6 4.933V21"/><circle cx="12" cy="9" r="2"/>'],
  ["school2", "School2", '<path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M18 12h.01"/><path d="M18 16h.01"/><path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/><path d="M6 12h.01"/><path d="M6 16h.01"/><circle cx="12" cy="10" r="2"/>'],
  ["scissors", "Scissors", '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>'],
  ["scissors-line-dashed", "Scissors Line Dashed", '<path d="M5.42 9.42 8 12"/><circle cx="4" cy="8" r="2"/><path d="m14 6-8.58 8.58"/><circle cx="4" cy="16" r="2"/><path d="M10.8 14.8 14 18"/><path d="M16 12h-2"/><path d="M22 12h-2"/>'],
  ["scissors-square", "Scissors Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><line x1="9.56066" y1="9.56066" x2="12" y2="12"/><line x1="17" y1="17" x2="14.82" y2="14.82"/><circle cx="8.5" cy="15.5" r="1.5"/><line x1="9.56066" y1="14.43934" x2="17" y2="7"/>'],
  ["scissors-square-dashed-bottom", "Scissors Square Dashed Bottom", '<line x1="5" y1="3" x2="19" y2="3"/><line x1="3" y1="5" x2="3" y2="19"/><line x1="21" y1="5" x2="21" y2="19"/><line x1="9" y1="21" x2="10" y2="21"/><line x1="14" y1="21" x2="15" y2="21"/><path d="M 3 5 A2 2 0 0 1 5 3"/><path d="M 19 3 A2 2 0 0 1 21 5"/><path d="M 5 21 A2 2 0 0 1 3 19"/><path d="M 21 19 A2 2 0 0 1 19 21"/><circle cx="8.5" cy="8.5" r="1.5"/><line x1="9.56066" y1="9.56066" x2="12" y2="12"/><line x1="17" y1="17" x2="14.82" y2="14.82"/><circle cx="8.5" cy="15.5" r="1.5"/><line x1="9.56066" y1="14.43934" x2="17" y2="7"/>'],
  ["scooter", "Scooter", '<path d="M21 4h-3.5l2 11.05"/><path d="M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009"/><circle cx="19.5" cy="17.5" r="2.5"/><circle cx="4.5" cy="17.5" r="2.5"/>'],
  ["screen-share", "Screen Share", '<path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="m17 8 5-5"/><path d="M17 3h5v5"/>'],
  ["screen-share-off", "Screen Share Off", '<path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="m22 3-5 5"/><path d="m17 3 5 5"/>'],
  ["scroll", "Scroll", '<path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>'],
  ["scroll-text", "Scroll Text", '<path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>'],
  ["search", "Search", '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>'],
  ["search-alert", "Search Alert", '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 7v4"/><path d="M11 15h.01"/>'],
  ["search-check", "Search Check", '<path d="m8 11 2 2 4-4"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'],
  ["search-code", "Search Code", '<path d="m13 13.5 2-2.5-2-2.5"/><path d="m21 21-4.3-4.3"/><path d="M9 8.5 7 11l2 2.5"/><circle cx="11" cy="11" r="8"/>'],
  ["search-slash", "Search Slash", '<path d="m13.5 8.5-5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'],
  ["search-x", "Search X", '<path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'],
  ["section", "Section", '<path d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"/><path d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"/>'],
  ["send", "Send", '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>'],
  ["send-horizonal", "Send Horizonal", '<path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/>'],
  ["send-horizontal", "Send Horizontal", '<path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/>'],
  ["send-to-back", "Send To Back", '<rect x="14" y="14" width="8" height="8" rx="2"/><rect x="2" y="2" width="8" height="8" rx="2"/><path d="M7 14v1a2 2 0 0 0 2 2h1"/><path d="M14 7h1a2 2 0 0 1 2 2v1"/>'],
  ["separator-horizontal", "Separator Horizontal", '<path d="m16 16-4 4-4-4"/><path d="M3 12h18"/><path d="m8 8 4-4 4 4"/>'],
  ["separator-vertical", "Separator Vertical", '<path d="M12 3v18"/><path d="m16 16 4-4-4-4"/><path d="m8 8-4 4 4 4"/>'],
  ["server", "Server", '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>'],
  ["server-cog", "Server Cog", '<path d="m10.852 14.772-.383.923"/><path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"/><path d="m13.148 9.228.383-.923"/><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"/><path d="m14.772 10.852.923-.383"/><path d="m14.772 13.148.923.383"/><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"/><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"/><path d="M6 18h.01"/><path d="M6 6h.01"/><path d="m9.228 10.852-.923-.383"/><path d="m9.228 13.148-.923.383"/>'],
  ["server-crash", "Server Crash", '<path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"/><path d="M6 6h.01"/><path d="M6 18h.01"/><path d="m13 6-4 6h6l-4 6"/>'],
  ["server-off", "Server Off", '<path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"/><path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"/><path d="M22 17v-1a2 2 0 0 0-2-2h-1"/><path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"/><path d="M6 18h.01"/><path d="m2 2 20 20"/>'],
  ["settings", "Settings", '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>'],
  ["settings2", "Settings2", '<path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>'],
  ["shapes", "Shapes", '<path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/>'],
  ["share", "Share", '<path d="M12 2v13"/><path d="m16 6-4-4-4 4"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>'],
  ["share2", "Share2", '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>'],
  ["sheet", "Sheet", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="21"/><line x1="15" x2="15" y1="9" y2="21"/>'],
  ["shell", "Shell", '<path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"/>'],
  ["shelving-unit", "Shelving Unit", '<path d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/><path d="M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"/><path d="M20 22V2"/><path d="M4 12h16"/><path d="M4 20h16"/><path d="M4 2v20"/><path d="M4 4h16"/>'],
  ["shield", "Shield", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'],
  ["shield-alert", "Shield Alert", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>'],
  ["shield-ban", "Shield Ban", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m4.243 5.21 14.39 12.472"/>'],
  ["shield-check", "Shield Check", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'],
  ["shield-close", "Shield Close", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m14.5 9.5-5 5"/><path d="m9.5 9.5 5 5"/>'],
  ["shield-cog", "Shield Cog", '<path d="m10.929 14.467-.383.924"/><path d="M10.929 8.923 10.546 8"/><path d="M13.225 8.923 13.608 8"/><path d="m13.607 15.391-.382-.924"/><path d="m14.849 10.547.923-.383"/><path d="m14.849 12.843.923.383"/><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9.305 10.547-.923-.383"/><path d="m9.305 12.843-.923.383"/><circle cx="12.077" cy="11.695" r="3"/>'],
  ["shield-cog-corner", "Shield Cog Corner", '<path d="M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4"/><path d="M14.923 16.547 14 16.164"/><path d="m14.923 18.843-.923.383"/><path d="M16.547 14.923 16.164 14"/><path d="m16.547 20.467-.383.924"/><path d="m18.843 14.923.383-.923"/><path d="m19.225 21.391-.382-.924"/><path d="m20.467 16.547.923-.383"/><path d="m20.467 18.843.923.383"/><circle cx="17.695" cy="17.695" r="3"/>'],
  ["shield-ellipsis", "Shield Ellipsis", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/>'],
  ["shield-half", "Shield Half", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 22V2"/>'],
  ["shield-minus", "Shield Minus", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/>'],
  ["shield-off", "Shield Off", '<path d="m2 2 20 20"/><path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"/><path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"/>'],
  ["shield-plus", "Shield Plus", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/><path d="M12 9v6"/>'],
  ["shield-question", "Shield Question", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>'],
  ["shield-question-mark", "Shield Question Mark", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>'],
  ["shield-user", "Shield User", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M6.376 18.91a6 6 0 0 1 11.249.003"/><circle cx="12" cy="11" r="4"/>'],
  ["shield-x", "Shield X", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m14.5 9.5-5 5"/><path d="m9.5 9.5 5 5"/>'],
  ["ship", "Ship", '<path d="M12 10.189V14"/><path d="M12 2v3"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>'],
  ["ship-wheel", "Ship Wheel", '<circle cx="12" cy="12" r="8"/><path d="M12 2v7.5"/><path d="m19 5-5.23 5.23"/><path d="M22 12h-7.5"/><path d="m19 19-5.23-5.23"/><path d="M12 14.5V22"/><path d="M10.23 13.77 5 19"/><path d="M9.5 12H2"/><path d="M10.23 10.23 5 5"/><circle cx="12" cy="12" r="2.5"/>'],
  ["shirt", "Shirt", '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>'],
  ["shopping-bag", "Shopping Bag", '<path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/>'],
  ["shopping-basket", "Shopping Basket", '<path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/>'],
  ["shopping-cart", "Shopping Cart", '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>'],
  ["shovel", "Shovel", '<path d="M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z"/><path d="M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z"/><path d="m9 15 7.879-7.878"/>'],
  ["shower-head", "Shower Head", '<path d="m4 4 2.5 2.5"/><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"/><path d="M15 5 5 15"/><path d="M14 17v.01"/><path d="M10 16v.01"/><path d="M13 13v.01"/><path d="M16 10v.01"/><path d="M11 20v.01"/><path d="M17 14v.01"/><path d="M20 11v.01"/>'],
  ["shredder", "Shredder", '<path d="M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 22v-5"/><path d="M14 19v-2"/><path d="M18 20v-3"/><path d="M2 13h20"/><path d="M6 20v-3"/>'],
  ["shrimp", "Shrimp", '<path d="M11 12h.01"/><path d="M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1"/><path d="M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8"/><path d="M14 8a8.5 8.5 0 0 1 0 8"/><path d="M16 16c2 0 4.5-4 4-6"/>'],
  ["shrink", "Shrink", '<path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8"/><path d="M9 19.8V15m0 0H4.2M9 15l-6 6"/><path d="M15 4.2V9m0 0h4.8M15 9l6-6"/><path d="M9 4.2V9m0 0H4.2M9 9 3 3"/>'],
  ["shrub", "Shrub", '<path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5"/><path d="M14.5 14.5 12 17"/><path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z"/>'],
  ["shuffle", "Shuffle", '<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/>'],
  ["sidebar", "Sidebar", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>'],
  ["sidebar-close", "Sidebar Close", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>'],
  ["sidebar-open", "Sidebar Open", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/>'],
  ["sigma", "Sigma", '<path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>'],
  ["sigma-square", "Sigma Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M16 8.9V7H8l4 5-4 5h8v-1.9"/>'],
  ["signal", "Signal", '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/>'],
  ["signal-high", "Signal High", '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/>'],
  ["signal-low", "Signal Low", '<path d="M2 20h.01"/><path d="M7 20v-4"/>'],
  ["signal-medium", "Signal Medium", '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/>'],
  ["signal-zero", "Signal Zero", '<path d="M2 20h.01"/>'],
  ["signature", "Signature", '<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"/><path d="M3 21h18"/>'],
  ["signpost", "Signpost", '<path d="M12 13v8"/><path d="M12 3v3"/><path d="M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z"/>'],
  ["signpost-big", "Signpost Big", '<path d="M10 9H4L2 7l2-2h6"/><path d="M14 5h6l2 2-2 2h-6"/><path d="M10 22V4a2 2 0 1 1 4 0v18"/><path d="M8 22h8"/>'],
  ["siren", "Siren", '<path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/><path d="M21 12h1"/><path d="M18.5 4.5 18 5"/><path d="M2 12h1"/><path d="M12 2v1"/><path d="m4.929 4.929.707.707"/><path d="M12 12v6"/>'],
  ["skip-back", "Skip Back", '<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M3 20V4"/>'],
  ["skip-forward", "Skip Forward", '<path d="M21 4v16"/><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/>'],
  ["skull", "Skull", '<path d="m12.5 17-.5-1-.5 1h1z"/><path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="12" r="1"/>'],
  ["slash", "Slash", '<path d="M22 2 2 22"/>'],
  ["slash-square", "Slash Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><line x1="9" x2="15" y1="15" y2="9"/>'],
  ["slice", "Slice", '<path d="M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"/>'],
  ["sliders", "Sliders", '<path d="M10 8h4"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M17 16h4"/><path d="M19 12V3"/><path d="M19 21v-5"/><path d="M3 14h4"/><path d="M5 10V3"/><path d="M5 21v-7"/>'],
  ["sliders-horizontal", "Sliders Horizontal", '<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>'],
  ["sliders-vertical", "Sliders Vertical", '<path d="M10 8h4"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M17 16h4"/><path d="M19 12V3"/><path d="M19 21v-5"/><path d="M3 14h4"/><path d="M5 10V3"/><path d="M5 21v-7"/>'],
  ["smartphone", "Smartphone", '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>'],
  ["smartphone-charging", "Smartphone Charging", '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12.667 8 10 12h4l-2.667 4"/>'],
  ["smartphone-nfc", "Smartphone Nfc", '<rect width="7" height="12" x="2" y="6" rx="1"/><path d="M13 8.32a7.43 7.43 0 0 1 0 7.36"/><path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58"/><path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"/>'],
  ["smile", "Smile", '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>'],
  ["smile-plus", "Smile Plus", '<path d="M22 11v1a10 10 0 1 1-9-10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/><path d="M16 5h6"/><path d="M19 2v6"/>'],
  ["snail", "Snail", '<path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"/><circle cx="10" cy="13" r="8"/><path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"/><path d="M18 3 19.1 5.2"/><path d="M22 3 20.9 5.2"/>'],
  ["snowflake", "Snowflake", '<path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6h-4"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h6.5L10 9"/><path d="m20 10-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15"/><path d="m4 10 1.5 2L4 14"/><path d="m7 21 3-6-1.5-3"/><path d="m7 3 3 6h4"/>'],
  ["soap-dispenser-droplet", "Soap Dispenser Droplet", '<path d="M10.5 2v4"/><path d="M14 2H7a2 2 0 0 0-2 2"/><path d="M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19"/><path d="M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>'],
  ["sofa", "Sofa", '<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M4 18v2"/><path d="M20 18v2"/><path d="M12 4v9"/>'],
  ["solar-panel", "Solar Panel", '<path d="M11 2h2"/><path d="m14.28 14-4.56 8"/><path d="m21 22-1.558-4H4.558"/><path d="M3 10v2"/><path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z"/><path d="M7 2a4 4 0 0 1-4 4"/><path d="m8.66 7.66 1.41 1.41"/>'],
  ["sort-asc", "Sort Asc", '<path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h4"/><path d="M11 16h7"/><path d="M11 20h10"/>'],
  ["sort-desc", "Sort Desc", '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/><path d="M11 12h4"/>'],
  ["soup", "Soup", '<path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"/><path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"/><path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"/>'],
  ["space", "Space", '<path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"/>'],
  ["spade", "Spade", '<path d="M12 18v4"/><path d="M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5"/>'],
  ["sparkle", "Sparkle", '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>'],
  ["sparkles", "Sparkles", '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>'],
  ["speaker", "Speaker", '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M12 6h.01"/><circle cx="12" cy="14" r="4"/><path d="M12 14h.01"/>'],
  ["speech", "Speech", '<path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"/><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"/><path d="M17 15a3.5 3.5 0 0 0-.025-4.975"/>'],
  ["spell-check", "Spell Check", '<path d="m6 16 6-12 6 12"/><path d="M8 12h8"/><path d="m16 20 2 2 4-4"/>'],
  ["spell-check2", "Spell Check2", '<path d="m6 16 6-12 6 12"/><path d="M8 12h8"/><path d="M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"/>'],
  ["spline", "Spline", '<circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M5 17A12 12 0 0 1 17 5"/>'],
  ["spline-pointer", "Spline Pointer", '<path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M5 17A12 12 0 0 1 17 5"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>'],
  ["split", "Split", '<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/>'],
  ["split-square-horizontal", "Split Square Horizontal", '<path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"/><path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"/><line x1="12" x2="12" y1="4" y2="20"/>'],
  ["split-square-vertical", "Split Square Vertical", '<path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"/><path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"/><line x1="4" x2="20" y1="12" y2="12"/>'],
  ["spool", "Spool", '<path d="M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66"/><path d="m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178"/>'],
  ["sport-shoe", "Sport Shoe", '<path d="m15 10.42 4.8-5.07"/><path d="M19 18h3"/><path d="M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14"/>'],
  ["spotlight", "Spotlight", '<path d="M15.295 19.562 16 22"/><path d="m17 16 3.758 2.098"/><path d="m19 12.5 3.026-.598"/><path d="M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z"/><path d="M8 9V2"/>'],
  ["spray-can", "Spray Can", '<path d="M3 3h.01"/><path d="M7 5h.01"/><path d="M11 7h.01"/><path d="M3 7h.01"/><path d="M7 9h.01"/><path d="M3 11h.01"/><rect width="4" height="4" x="15" y="5"/><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"/><path d="m13 14 8-2"/><path d="m13 19 8-2"/>'],
  ["sprout", "Sprout", '<path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"/><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"/><path d="M5 21h14"/>'],
  ["square", "Square", '<rect width="18" height="18" x="3" y="3" rx="2"/>'],
  ["square-activity", "Square Activity", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/>'],
  ["square-arrow-down", "Square Arrow Down", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/>'],
  ["square-arrow-down-left", "Square Arrow Down Left", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 8-8 8"/><path d="M16 16H8V8"/>'],
  ["square-arrow-down-right", "Square Arrow Down Right", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m8 8 8 8"/><path d="M16 8v8H8"/>'],
  ["square-arrow-left", "Square Arrow Left", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m12 8-4 4 4 4"/><path d="M16 12H8"/>'],
  ["square-arrow-out-down-left", "Square Arrow Out Down Left", '<path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"/><path d="m3 21 9-9"/><path d="M9 21H3v-6"/>'],
  ["square-arrow-out-down-right", "Square Arrow Out Down Right", '<path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="m21 21-9-9"/><path d="M21 15v6h-6"/>'],
  ["square-arrow-out-up-left", "Square Arrow Out Up Left", '<path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"/><path d="m3 3 9 9"/><path d="M3 9V3h6"/>'],
  ["square-arrow-out-up-right", "Square Arrow Out Up Right", '<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/>'],
  ["square-arrow-right", "Square Arrow Right", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="m12 16 4-4-4-4"/>'],
  ["square-arrow-right-enter", "Square Arrow Right Enter", '<path d="m10 16 4-4-4-4"/><path d="M3 12h11"/><path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"/>'],
  ["square-arrow-right-exit", "Square Arrow Right Exit", '<path d="M10 12h11"/><path d="m17 16 4-4-4-4"/><path d="M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344"/>'],
  ["square-arrow-up", "Square Arrow Up", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/>'],
  ["square-arrow-up-left", "Square Arrow Up Left", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 16V8h8"/><path d="M16 16 8 8"/>'],
  ["square-arrow-up-right", "Square Arrow Up Right", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 8h8v8"/><path d="m8 16 8-8"/>'],
  ["square-asterisk", "Square Asterisk", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="m8.5 14 7-4"/><path d="m8.5 10 7 4"/>'],
  ["square-bottom-dashed-scissors", "Square Bottom Dashed Scissors", '<line x1="5" y1="3" x2="19" y2="3"/><line x1="3" y1="5" x2="3" y2="19"/><line x1="21" y1="5" x2="21" y2="19"/><line x1="9" y1="21" x2="10" y2="21"/><line x1="14" y1="21" x2="15" y2="21"/><path d="M 3 5 A2 2 0 0 1 5 3"/><path d="M 19 3 A2 2 0 0 1 21 5"/><path d="M 5 21 A2 2 0 0 1 3 19"/><path d="M 21 19 A2 2 0 0 1 19 21"/><circle cx="8.5" cy="8.5" r="1.5"/><line x1="9.56066" y1="9.56066" x2="12" y2="12"/><line x1="17" y1="17" x2="14.82" y2="14.82"/><circle cx="8.5" cy="15.5" r="1.5"/><line x1="9.56066" y1="14.43934" x2="17" y2="7"/>'],
  ["square-centerline-dashed-horizontal", "Square Centerline Dashed Horizontal", '<path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/><path d="M12 20v2"/><path d="M12 14v2"/><path d="M12 8v2"/><path d="M12 2v2"/>'],
  ["square-centerline-dashed-vertical", "Square Centerline Dashed Vertical", '<path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/>'],
  ["square-chart-gantt", "Square Chart Gantt", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/>'],
  ["square-check", "Square Check", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>'],
  ["square-check-big", "Square Check Big", '<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"/><path d="m9 11 3 3L22 4"/>'],
  ["square-chevron-down", "Square Chevron Down", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 10-4 4-4-4"/>'],
  ["square-chevron-left", "Square Chevron Left", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m14 16-4-4 4-4"/>'],
  ["square-chevron-right", "Square Chevron Right", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/>'],
  ["square-chevron-up", "Square Chevron Up", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m8 14 4-4 4 4"/>'],
  ["square-code", "Square Code", '<path d="m10 9-3 3 3 3"/><path d="m14 15 3-3-3-3"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["square-dashed", "Square Dashed", '<path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h1"/><path d="M14 3h1"/><path d="M14 21h1"/><path d="M3 9v1"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M21 14v1"/>'],
  ["square-dashed-bottom", "Square Dashed Bottom", '<path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"/><path d="M9 21h1"/><path d="M14 21h1"/>'],
  ["square-dashed-bottom-code", "Square Dashed Bottom Code", '<path d="M10 9.5 8 12l2 2.5"/><path d="M14 21h1"/><path d="m14 9.5 2 2.5-2 2.5"/><path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"/><path d="M9 21h1"/>'],
  ["square-dashed-kanban", "Square Dashed Kanban", '<path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/><path d="M5 3a2 2 0 0 0-2 2"/><path d="M9 3h1"/><path d="M14 3h1"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 9v1"/><path d="M21 14v1"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M14 21h1"/><path d="M9 21h1"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M3 14v1"/><path d="M3 9v1"/>'],
  ["square-dashed-mouse-pointer", "Square Dashed Mouse Pointer", '<path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h2"/><path d="M14 3h1"/><path d="M3 9v1"/><path d="M21 9v2"/><path d="M3 14v1"/>'],
  ["square-dashed-top-solid", "Square Dashed Top Solid", '<path d="M14 21h1"/><path d="M21 14v1"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 9v1"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 21h1"/>'],
  ["square-divide", "Square Divide", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="8" x2="16" y1="12" y2="12"/><line x1="12" x2="12" y1="16" y2="16"/><line x1="12" x2="12" y1="8" y2="8"/>'],
  ["square-dot", "Square Dot", '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="1"/>'],
  ["square-equal", "Square Equal", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 10h10"/><path d="M7 14h10"/>'],
  ["square-function", "Square Function", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"/><path d="M9 11.2h5.7"/>'],
  ["square-gantt-chart", "Square Gantt Chart", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/>'],
  ["square-kanban", "Square Kanban", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/>'],
  ["square-library", "Square Library", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7v10"/><path d="M11 7v10"/><path d="m15 7 2 10"/>'],
  ["square-m", "Square M", '<path d="M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["square-menu", "Square Menu", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/>'],
  ["square-minus", "Square Minus", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/>'],
  ["square-mouse-pointer", "Square Mouse Pointer", '<path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/>'],
  ["square-parking", "Square Parking", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>'],
  ["square-parking-off", "Square Parking Off", '<path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"/><path d="M3 8.7V19a2 2 0 0 0 2 2h10.3"/><path d="m2 2 20 20"/><path d="M13 13a3 3 0 1 0 0-6H9v2"/><path d="M9 17v-2.3"/>'],
  ["square-pause", "Square Pause", '<rect width="18" height="18" x="3" y="3" rx="2"/><line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/>'],
  ["square-pen", "Square Pen", '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>'],
  ["square-percent", "Square Percent", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/>'],
  ["square-pi", "Square Pi", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M10 7v10"/><path d="M16 17a2 2 0 0 1-2-2V7"/>'],
  ["square-pilcrow", "Square Pilcrow", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17"/><path d="M12 7v10"/><path d="M16 7v10"/>'],
  ["square-play", "Square Play", '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/>'],
  ["square-plus", "Square Plus", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/>'],
  ["square-power", "Square Power", '<path d="M12 7v4"/><path d="M7.998 9.003a5 5 0 1 0 8-.005"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["square-radical", "Square Radical", '<path d="M7 12h2l2 5 2-10h4"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["square-round-corner", "Square Round Corner", '<path d="M21 11a8 8 0 0 0-8-8"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>'],
  ["square-scissors", "Square Scissors", '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><line x1="9.56066" y1="9.56066" x2="12" y2="12"/><line x1="17" y1="17" x2="14.82" y2="14.82"/><circle cx="8.5" cy="15.5" r="1.5"/><line x1="9.56066" y1="14.43934" x2="17" y2="7"/>'],
  ["square-sigma", "Square Sigma", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M16 8.9V7H8l4 5-4 5h8v-1.9"/>'],
  ["square-slash", "Square Slash", '<rect width="18" height="18" x="3" y="3" rx="2"/><line x1="9" x2="15" y1="15" y2="9"/>'],
  ["square-split-horizontal", "Square Split Horizontal", '<path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"/><path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"/><line x1="12" x2="12" y1="4" y2="20"/>'],
  ["square-split-vertical", "Square Split Vertical", '<path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"/><path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"/><line x1="4" x2="20" y1="12" y2="12"/>'],
  ["square-square", "Square Square", '<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>'],
  ["square-stack", "Square Stack", '<path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/><path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/><rect width="8" height="8" x="14" y="14" rx="2"/>'],
  ["square-star", "Square Star", '<path d="M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><rect x="3" y="3" width="18" height="18" rx="2"/>'],
  ["square-stop", "Square Stop", '<rect width="18" height="18" x="3" y="3" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/>'],
  ["square-terminal", "Square Terminal", '<path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>'],
  ["square-user", "Square User", '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>'],
  ["square-user-round", "Square User Round", '<path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><rect width="18" height="18" x="3" y="3" rx="2"/>'],
  ["square-x", "Square X", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>'],
  ["squares-exclude", "Squares Exclude", '<path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"/><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"/>'],
  ["squares-intersect", "Squares Intersect", '<path d="M10 22a2 2 0 0 1-2-2"/><path d="M14 2a2 2 0 0 1 2 2"/><path d="M16 22h-2"/><path d="M2 10V8"/><path d="M2 4a2 2 0 0 1 2-2"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/><path d="M4 16a2 2 0 0 1-2-2"/><path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"/><path d="M8 2h2"/>'],
  ["squares-subtract", "Squares Subtract", '<path d="M10 22a2 2 0 0 1-2-2"/><path d="M16 22h-2"/><path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/>'],
  ["squares-unite", "Squares Unite", '<path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"/>'],
  ["squircle", "Squircle", '<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"/>'],
  ["squircle-dashed", "Squircle Dashed", '<path d="M13.77 3.043a34 34 0 0 0-3.54 0"/><path d="M13.771 20.956a33 33 0 0 1-3.541.001"/><path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44"/><path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438"/><path d="M20.957 10.23a33 33 0 0 1 0 3.54"/><path d="M3.043 10.23a34 34 0 0 0 .001 3.541"/><path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438"/><path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44"/>'],
  ["squirrel", "Squirrel", '<path d="M15.236 22a3 3 0 0 0-2.2-5"/><path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"/><path d="M18 13h.01"/><path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"/>'],
  ["stamp", "Stamp", '<path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13"/><path d="M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z"/><path d="M5 22h14"/>'],
  ["star", "Star", '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>'],
  ["star-half", "Star Half", '<path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"/>'],
  ["star-off", "Star Off", '<path d="m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152"/><path d="m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099"/><path d="m2 2 20 20"/>'],
  ["stars", "Stars", '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>'],
  ["step-back", "Step Back", '<path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M21 20V4"/>'],
  ["step-forward", "Step Forward", '<path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/><path d="M3 4v16"/>'],
  ["stethoscope", "Stethoscope", '<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>'],
  ["sticker", "Sticker", '<path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path d="M15 3v5a1 1 0 0 0 1 1h5"/><path d="M8 13h.01"/><path d="M16 13h.01"/><path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1"/>'],
  ["sticky-note", "Sticky Note", '<path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path d="M15 3v5a1 1 0 0 0 1 1h5"/>'],
  ["stone", "Stone", '<path d="M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z"/><path d="M11.99 22 14 12l7.822 3.184"/><path d="M14 12 8.47 2.302"/>'],
  ["stop-circle", "Stop Circle", '<circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6" rx="1"/>'],
  ["store", "Store", '<path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"/><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"/><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"/>'],
  ["stretch-horizontal", "Stretch Horizontal", '<rect width="20" height="6" x="2" y="4" rx="2"/><rect width="20" height="6" x="2" y="14" rx="2"/>'],
  ["stretch-vertical", "Stretch Vertical", '<rect width="6" height="20" x="4" y="2" rx="2"/><rect width="6" height="20" x="14" y="2" rx="2"/>'],
  ["strikethrough", "Strikethrough", '<path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" x2="20" y1="12" y2="12"/>'],
  ["subscript", "Subscript", '<path d="m4 5 8 8"/><path d="m12 5-8 8"/><path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"/>'],
  ["subtitles", "Subtitles", '<rect width="18" height="14" x="3" y="5" rx="2" ry="2"/><path d="M7 15h4M15 15h2M7 11h2M13 11h4"/>'],
  ["sun", "Sun", '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>'],
  ["sun-dim", "Sun Dim", '<circle cx="12" cy="12" r="4"/><path d="M12 4h.01"/><path d="M20 12h.01"/><path d="M12 20h.01"/><path d="M4 12h.01"/><path d="M17.657 6.343h.01"/><path d="M17.657 17.657h.01"/><path d="M6.343 17.657h.01"/><path d="M6.343 6.343h.01"/>'],
  ["sun-medium", "Sun Medium", '<circle cx="12" cy="12" r="4"/><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 17.657-.707.707"/><path d="m5.636 5.636.707.707"/><path d="m17.657 17.657.707.707"/>'],
  ["sun-moon", "Sun Moon", '<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>'],
  ["sun-snow", "Sun Snow", '<path d="M10 21v-1"/><path d="M10 4V3"/><path d="M10 9a3 3 0 0 0 0 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6 1.5-3H22"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h1"/><path d="m20 10-1.5 2 1.5 2"/><path d="m3.64 18.36.7-.7"/><path d="m4.34 6.34-.7-.7"/>'],
  ["sunrise", "Sunrise", '<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>'],
  ["sunset", "Sunset", '<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>'],
  ["superscript", "Superscript", '<path d="m4 19 8-8"/><path d="m12 19-8-8"/><path d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"/>'],
  ["swatch-book", "Swatch Book", '<path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/><path d="M 7 17h.01"/><path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/>'],
  ["swiss-franc", "Swiss Franc", '<path d="M10 21V3h8"/><path d="M6 16h9"/><path d="M10 9.5h7"/>'],
  ["switch-camera", "Switch Camera", '<path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/><path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"/><circle cx="12" cy="12" r="3"/><path d="m18 22-3-3 3-3"/><path d="m6 2 3 3-3 3"/>'],
  ["sword", "Sword", '<path d="m11 19-6-6"/><path d="m5 21-2-2"/><path d="m8 16-4 4"/><path d="M9.5 17.5 21 6V3h-3L6.5 14.5"/>'],
  ["swords", "Swords", '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/>'],
  ["syringe", "Syringe", '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>'],
  ["table", "Table", '<path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/>'],
  ["table-cells-merge", "Table Cells Merge", '<path d="M12 21v-6"/><path d="M12 9V3"/><path d="M3 15h18"/><path d="M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/>'],
  ["table-cells-split", "Table Cells Split", '<path d="M12 15V9"/><path d="M3 15h18"/><path d="M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/>'],
  ["table-columns-split", "Table Columns Split", '<path d="M14 14v2"/><path d="M14 20v2"/><path d="M14 2v2"/><path d="M14 8v2"/><path d="M2 15h8"/><path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"/><path d="M2 9h8"/><path d="M22 15h-4"/><path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><path d="M22 9h-4"/><path d="M5 3v18"/>'],
  ["table-config", "Table Config", '<path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"/><path d="m14.3 19.6 1-.4"/><path d="M15 3v7.5"/><path d="m15.2 16.9-.9-.3"/><path d="m16.6 21.7.3-.9"/><path d="m16.8 15.3-.4-1"/><path d="m19.1 15.2.3-.9"/><path d="m19.6 21.7-.4-1"/><path d="m20.7 16.8 1-.4"/><path d="m21.7 19.4-.9-.3"/><path d="M9 3v18"/><circle cx="18" cy="18" r="3"/>'],
  ["table-of-contents", "Table Of Contents", '<path d="M16 5H3"/><path d="M16 12H3"/><path d="M16 19H3"/><path d="M21 5h.01"/><path d="M21 12h.01"/><path d="M21 19h.01"/>'],
  ["table-properties", "Table Properties", '<path d="M15 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/>'],
  ["table-rows-split", "Table Rows Split", '<path d="M14 10h2"/><path d="M15 22v-8"/><path d="M15 2v4"/><path d="M2 10h2"/><path d="M20 10h2"/><path d="M3 19h18"/><path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"/><path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"/><path d="M8 10h2"/><path d="M9 22v-8"/><path d="M9 2v4"/>'],
  ["table2", "Table2", '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>'],
  ["tablet", "Tablet", '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/>'],
  ["tablet-smartphone", "Tablet Smartphone", '<rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/>'],
  ["tablets", "Tablets", '<circle cx="7" cy="7" r="5"/><circle cx="17" cy="17" r="5"/><path d="M12 17h10"/><path d="m3.46 10.54 7.08-7.08"/>'],
  ["tag", "Tag", '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>'],
  ["tags", "Tags", '<path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"/><path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"/><circle cx="10.5" cy="6.5" r=".5" fill="currentColor"/>'],
  ["tally1", "Tally1", '<path d="M4 4v16"/>'],
  ["tally2", "Tally2", '<path d="M4 4v16"/><path d="M9 4v16"/>'],
  ["tally3", "Tally3", '<path d="M4 4v16"/><path d="M9 4v16"/><path d="M14 4v16"/>'],
  ["tally4", "Tally4", '<path d="M4 4v16"/><path d="M9 4v16"/><path d="M14 4v16"/><path d="M19 4v16"/>'],
  ["tally5", "Tally5", '<path d="M4 4v16"/><path d="M9 4v16"/><path d="M14 4v16"/><path d="M19 4v16"/><path d="M22 6 2 18"/>'],
  ["tangent", "Tangent", '<circle cx="17" cy="4" r="2"/><path d="M15.59 5.41 5.41 15.59"/><circle cx="4" cy="17" r="2"/><path d="M12 22s-4-9-1.5-11.5S22 12 22 12"/>'],
  ["target", "Target", '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'],
  ["telescope", "Telescope", '<path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/><path d="m13.56 11.747 4.332-.924"/><path d="m16 21-3.105-6.21"/><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"/><path d="m6.158 8.633 1.114 4.456"/><path d="m8 21 3.105-6.21"/><circle cx="12" cy="13" r="2"/>'],
  ["tent", "Tent", '<path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/>'],
  ["tent-tree", "Tent Tree", '<circle cx="4" cy="4" r="2"/><path d="m14 5 3-3 3 3"/><path d="m14 10 3-3 3 3"/><path d="M17 14V2"/><path d="M17 14H7l-5 8h20Z"/><path d="M8 14v8"/><path d="m9 14 5 8"/>'],
  ["terminal", "Terminal", '<path d="M12 19h8"/><path d="m4 17 6-6-6-6"/>'],
  ["terminal-square", "Terminal Square", '<path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>'],
  ["test-tube", "Test Tube", '<path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/>'],
  ["test-tube-diagonal", "Test Tube Diagonal", '<path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"/><path d="m16 2 6 6"/><path d="M12 16H4"/>'],
  ["test-tube2", "Test Tube2", '<path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"/><path d="m16 2 6 6"/><path d="M12 16H4"/>'],
  ["test-tubes", "Test Tubes", '<path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"/><path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"/><path d="M3 2h7"/><path d="M14 2h7"/><path d="M9 16H4"/><path d="M20 16h-5"/>'],
  ["text", "Text", '<path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/>'],
  ["text-align-center", "Text Align Center", '<path d="M21 5H3"/><path d="M17 12H7"/><path d="M19 19H5"/>'],
  ["text-align-end", "Text Align End", '<path d="M21 5H3"/><path d="M21 12H9"/><path d="M21 19H7"/>'],
  ["text-align-justify", "Text Align Justify", '<path d="M3 5h18"/><path d="M3 12h18"/><path d="M3 19h18"/>'],
  ["text-align-start", "Text Align Start", '<path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/>'],
  ["text-cursor", "Text Cursor", '<path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"/><path d="M7 22h1a4 4 0 0 0 4-4v-1"/><path d="M7 2h1a4 4 0 0 1 4 4v1"/>'],
  ["text-cursor-input", "Text Cursor Input", '<path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"/><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"/><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"/><path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"/><path d="M9 6v12"/>'],
  ["text-initial", "Text Initial", '<path d="M15 5h6"/><path d="M15 12h6"/><path d="M3 19h18"/><path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"/><path d="M3.92 10h6.16"/>'],
  ["text-quote", "Text Quote", '<path d="M17 5H3"/><path d="M21 12H8"/><path d="M21 19H8"/><path d="M3 12v7"/>'],
  ["text-search", "Text Search", '<path d="M21 5H3"/><path d="M10 12H3"/><path d="M10 19H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/>'],
  ["text-select", "Text Select", '<path d="M14 21h1"/><path d="M14 3h1"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 14v1"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M3 9v1"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M5 3a2 2 0 0 0-2 2"/><path d="M7 12h10"/><path d="M7 16h6"/><path d="M7 8h8"/><path d="M9 21h1"/><path d="M9 3h1"/>'],
  ["text-selection", "Text Selection", '<path d="M14 21h1"/><path d="M14 3h1"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 14v1"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M3 9v1"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M5 3a2 2 0 0 0-2 2"/><path d="M7 12h10"/><path d="M7 16h6"/><path d="M7 8h8"/><path d="M9 21h1"/><path d="M9 3h1"/>'],
  ["text-wrap", "Text Wrap", '<path d="m16 16-3 3 3 3"/><path d="M3 12h14.5a1 1 0 0 1 0 7H13"/><path d="M3 19h6"/><path d="M3 5h18"/>'],
  ["theater", "Theater", '<path d="M2 10s3-3 3-8"/><path d="M22 10s-3-3-3-8"/><path d="M10 2c0 4.4-3.6 8-8 8"/><path d="M14 2c0 4.4 3.6 8 8 8"/><path d="M2 10s2 2 2 5"/><path d="M22 10s-2 2-2 5"/><path d="M8 15h8"/><path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/><path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/>'],
  ["thermometer", "Thermometer", '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>'],
  ["thermometer-snowflake", "Thermometer Snowflake", '<path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="M10.585 15H10"/><path d="M2 12h6.5L10 9"/><path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/><path d="m4 10 1.5 2L4 14"/><path d="m7 21 3-6-1.5-3"/><path d="m7 3 3 6h2"/>'],
  ["thermometer-sun", "Thermometer Sun", '<path d="M12 2v2"/><path d="M12 8a4 4 0 0 0-1.645 7.647"/><path d="M2 12h2"/><path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/><path d="m4.93 4.93 1.41 1.41"/><path d="m6.34 17.66-1.41 1.41"/>'],
  ["thumbs-down", "Thumbs Down", '<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/><path d="M17 14V2"/>'],
  ["thumbs-up", "Thumbs Up", '<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/><path d="M7 10v12"/>'],
  ["ticket", "Ticket", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>'],
  ["ticket-check", "Ticket Check", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="m9 12 2 2 4-4"/>'],
  ["ticket-minus", "Ticket Minus", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M9 12h6"/>'],
  ["ticket-percent", "Ticket Percent", '<path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M9 9h.01"/><path d="m15 9-6 6"/><path d="M15 15h.01"/>'],
  ["ticket-plus", "Ticket Plus", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M9 12h6"/><path d="M12 9v6"/>'],
  ["ticket-slash", "Ticket Slash", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="m9.5 14.5 5-5"/>'],
  ["ticket-x", "Ticket X", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="m9.5 14.5 5-5"/><path d="m9.5 9.5 5 5"/>'],
  ["tickets", "Tickets", '<path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8"/><path d="M6 10V8"/><path d="M6 14v1"/><path d="M6 19v2"/><rect x="2" y="8" width="20" height="13" rx="2"/>'],
  ["tickets-plane", "Tickets Plane", '<path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"/><path d="m12 13.5 3.794.506"/><path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8"/><path d="M6 10V8"/><path d="M6 14v1"/><path d="M6 19v2"/><rect x="2" y="8" width="20" height="13" rx="2"/>'],
  ["timer", "Timer", '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>'],
  ["timer-off", "Timer Off", '<path d="M10 2h4"/><path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"/><path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"/><path d="m2 2 20 20"/><path d="M12 12v-2"/>'],
  ["timer-reset", "Timer Reset", '<path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/>'],
  ["toggle-left", "Toggle Left", '<circle cx="9" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>'],
  ["toggle-right", "Toggle Right", '<circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>'],
  ["toilet", "Toilet", '<path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"/><path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/>'],
  ["tool-case", "Tool Case", '<path d="M10 15h4"/><path d="m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27"/><path d="m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122"/><path d="M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>'],
  ["toolbox", "Toolbox", '<path d="M16 12v4"/><path d="M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 14h20"/><path d="M8 12v4"/>'],
  ["tornado", "Tornado", '<path d="M21 4H3"/><path d="M18 8H6"/><path d="M19 12H9"/><path d="M16 16h-6"/><path d="M11 20H9"/>'],
  ["torus", "Torus", '<ellipse cx="12" cy="11" rx="3" ry="2"/><ellipse cx="12" cy="12.5" rx="10" ry="8.5"/>'],
  ["touchpad", "Touchpad", '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M2 14h20"/><path d="M12 20v-6"/>'],
  ["touchpad-off", "Touchpad Off", '<path d="M12 20v-6"/><path d="M19.656 14H22"/><path d="M2 14h12"/><path d="m2 2 20 20"/><path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/><path d="M9.656 4H20a2 2 0 0 1 2 2v10.344"/>'],
  ["towel-rack", "Towel Rack", '<path d="M22 7h-2"/><path d="M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4"/><path d="M9 7H2"/>'],
  ["tower-control", "Tower Control", '<path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"/><path d="M8 13v9"/><path d="M16 22v-9"/><path d="m9 6 1 7"/><path d="m15 6-1 7"/><path d="M12 6V2"/><path d="M13 2h-2"/>'],
  ["toy-brick", "Toy Brick", '<rect width="18" height="12" x="3" y="8" rx="1"/><path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"/><path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"/>'],
  ["tractor", "Tractor", '<path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"/><path d="M16 18h-5"/><path d="M18 5a1 1 0 0 0-1 1v5.573"/><path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"/><path d="M4 11V4"/><path d="M7 15h.01"/><path d="M8 10.1V4"/><circle cx="18" cy="18" r="2"/><circle cx="7" cy="15" r="5"/>'],
  ["traffic-cone", "Traffic Cone", '<path d="M16.05 10.966a5 2.5 0 0 1-8.1 0"/><path d="m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04"/><path d="M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z"/><path d="M9.194 6.57a5 2.5 0 0 0 5.61 0"/>'],
  ["train", "Train", '<rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h.01"/><path d="M16 15h.01"/>'],
  ["train-front", "Train Front", '<path d="M8 3.1V7a4 4 0 0 0 8 0V3.1"/><path d="m9 15-1-1"/><path d="m15 15 1-1"/><path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"/><path d="m8 19-2 3"/><path d="m16 19 2 3"/>'],
  ["train-front-tunnel", "Train Front Tunnel", '<path d="M2 22V12a10 10 0 1 1 20 0v10"/><path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"/><path d="M10 15h.01"/><path d="M14 15h.01"/><path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"/><path d="m9 19-2 3"/><path d="m15 19 2 3"/>'],
  ["train-track", "Train Track", '<path d="M2 17 17 2"/><path d="m2 14 8 8"/><path d="m5 11 8 8"/><path d="m8 8 8 8"/><path d="m11 5 8 8"/><path d="m14 2 8 8"/><path d="M7 22 22 7"/>'],
  ["tram-front", "Tram Front", '<rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h.01"/><path d="M16 15h.01"/>'],
  ["transgender", "Transgender", '<path d="M12 16v6"/><path d="M14 20h-4"/><path d="M18 2h4v4"/><path d="m2 2 7.17 7.17"/><path d="M2 5.355V2h3.357"/><path d="m22 2-7.17 7.17"/><path d="M8 5 5 8"/><circle cx="12" cy="12" r="4"/>'],
  ["trash", "Trash", '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'],
  ["trash2", "Trash2", '<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'],
  ["tree-deciduous", "Tree Deciduous", '<path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"/><path d="M12 19v3"/>'],
  ["tree-palm", "Tree Palm", '<path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"/><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/>'],
  ["tree-pine", "Tree Pine", '<path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"/><path d="M12 22v-3"/>'],
  ["trees", "Trees", '<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/>'],
  ["trending-down", "Trending Down", '<path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/>'],
  ["trending-up", "Trending Up", '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>'],
  ["trending-up-down", "Trending Up Down", '<path d="M14.828 14.828 21 21"/><path d="M21 16v5h-5"/><path d="m21 3-9 9-4-4-6 6"/><path d="M21 8V3h-5"/>'],
  ["triangle", "Triangle", '<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>'],
  ["triangle-alert", "Triangle Alert", '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>'],
  ["triangle-dashed", "Triangle Dashed", '<path d="M10.17 4.193a2 2 0 0 1 3.666.013"/><path d="M14 21h2"/><path d="m15.874 7.743 1 1.732"/><path d="m18.849 12.952 1 1.732"/><path d="M21.824 18.18a2 2 0 0 1-1.835 2.824"/><path d="M4.024 21a2 2 0 0 1-1.839-2.839"/><path d="m5.136 12.952-1 1.732"/><path d="M8 21h2"/><path d="m8.102 7.743-1 1.732"/>'],
  ["triangle-right", "Triangle Right", '<path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"/>'],
  ["trophy", "Trophy", '<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/>'],
  ["truck", "Truck", '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>'],
  ["truck-electric", "Truck Electric", '<path d="M14 19V7a2 2 0 0 0-2-2H9"/><path d="M15 19H9"/><path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"/><path d="M2 13v5a1 1 0 0 0 1 1h2"/><path d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/>'],
  ["turkish-lira", "Turkish Lira", '<path d="M15 4 5 9"/><path d="m15 8.5-10 5"/><path d="M18 12a9 9 0 0 1-9 9V3"/>'],
  ["turntable", "Turntable", '<path d="M10 12.01h.01"/><path d="M18 8v4a8 8 0 0 1-1.07 4"/><circle cx="10" cy="12" r="4"/><rect x="2" y="4" width="20" height="16" rx="2"/>'],
  ["turtle", "Turtle", '<path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"/><path d="M4.82 7.9 8 10"/><path d="M15.18 7.9 12 10"/><path d="M16.93 10H20a2 2 0 0 1 0 4H2"/>'],
  ["tv", "Tv", '<path d="m17 2-5 5-5-5"/><rect width="20" height="15" x="2" y="7" rx="2"/>'],
  ["tv-minimal", "Tv Minimal", '<path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/>'],
  ["tv-minimal-play", "Tv Minimal Play", '<path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"/><path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/>'],
  ["tv2", "Tv2", '<path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/>'],
  ["type", "Type", '<path d="M12 4v16"/><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"/><path d="M9 20h6"/>'],
  ["type-outline", "Type Outline", '<path d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"/>'],
  ["umbrella", "Umbrella", '<path d="M12 13v7a2 2 0 0 0 4 0"/><path d="M12 2v2"/><path d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"/>'],
  ["umbrella-off", "Umbrella Off", '<path d="M12 13v7a2 2 0 0 0 4 0"/><path d="M12 2v2"/><path d="M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51"/><path d="m2 2 20 20"/><path d="M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10"/>'],
  ["underline", "Underline", '<path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/>'],
  ["undo", "Undo", '<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>'],
  ["undo-dot", "Undo Dot", '<path d="M21 17a9 9 0 0 0-15-6.7L3 13"/><path d="M3 7v6h6"/><circle cx="12" cy="17" r="1"/>'],
  ["undo2", "Undo2", '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>'],
  ["unfold-horizontal", "Unfold Horizontal", '<path d="M16 12h6"/><path d="M8 12H2"/><path d="M12 2v2"/><path d="M12 8v2"/><path d="M12 14v2"/><path d="M12 20v2"/><path d="m19 15 3-3-3-3"/><path d="m5 9-3 3 3 3"/>'],
  ["unfold-vertical", "Unfold Vertical", '<path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="m15 19-3 3-3-3"/><path d="m15 5-3-3-3 3"/>'],
  ["ungroup", "Ungroup", '<rect width="8" height="6" x="5" y="4" rx="1"/><rect width="8" height="6" x="11" y="14" rx="1"/>'],
  ["university", "University", '<path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M18 12h.01"/><path d="M18 16h.01"/><path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/><path d="M6 12h.01"/><path d="M6 16h.01"/><circle cx="12" cy="10" r="2"/>'],
  ["unlink", "Unlink", '<path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"/><path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"/><line x1="8" x2="8" y1="2" y2="5"/><line x1="2" x2="5" y1="8" y2="8"/><line x1="16" x2="16" y1="19" y2="22"/><line x1="19" x2="22" y1="16" y2="16"/>'],
  ["unlink2", "Unlink2", '<path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"/>'],
  ["unlock", "Unlock", '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>'],
  ["unlock-keyhole", "Unlock Keyhole", '<circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/>'],
  ["unplug", "Unplug", '<path d="m19 5 3-3"/><path d="m2 22 3-3"/><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"/>'],
  ["upload", "Upload", '<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>'],
  ["upload-cloud", "Upload Cloud", '<path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/>'],
  ["usb", "Usb", '<circle cx="10" cy="7" r="1"/><circle cx="4" cy="20" r="1"/><path d="M4.7 19.3 19 5"/><path d="m21 3-3 1 2 2Z"/><path d="M9.26 7.68 5 12l2 5"/><path d="m10 14 5 2 3.5-3.5"/><path d="m18 12 1-1 1 1-1 1Z"/>'],
  ["user", "User", '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'],
  ["user-check", "User Check", '<path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'],
  ["user-check2", "User Check2", '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/>'],
  ["user-circle", "User Circle", '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>'],
  ["user-circle2", "User Circle2", '<path d="M17.925 20.056a6 6 0 0 0-11.851.001"/><circle cx="12" cy="11" r="4"/><circle cx="12" cy="12" r="10"/>'],
  ["user-cog", "User Cog", '<path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m14.305 16.53.923-.382"/><path d="m15.228 13.852-.923-.383"/><path d="m16.852 12.228-.383-.923"/><path d="m16.852 17.772-.383.924"/><path d="m19.148 12.228.383-.923"/><path d="m19.53 18.696-.382-.924"/><path d="m20.772 13.852.924-.383"/><path d="m20.772 16.148.924.383"/><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/>'],
  ["user-cog2", "User Cog2", '<path d="m14.305 19.53.923-.382"/><path d="m15.228 16.852-.923-.383"/><path d="m16.852 15.228-.383-.923"/><path d="m16.852 20.772-.383.924"/><path d="m19.148 15.228.383-.923"/><path d="m19.53 21.696-.382-.924"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><path d="m20.772 16.852.924-.383"/><path d="m20.772 19.148.924.383"/><circle cx="10" cy="8" r="5"/><circle cx="18" cy="18" r="3"/>'],
  ["user-key", "User Key", '<path d="M20 11v6"/><path d="M20 13h2"/><path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578"/><circle cx="10" cy="7" r="4"/><circle cx="20" cy="19" r="2"/>'],
  ["user-lock", "User Lock", '<path d="M19 16v-2a2 2 0 0 0-4 0v2"/><path d="M9.5 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><rect x="13" y="16" width="8" height="5" rx=".899"/>'],
  ["user-minus", "User Minus", '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="22" x2="16" y1="11" y2="11"/>'],
  ["user-minus2", "User Minus2", '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M22 19h-6"/>'],
  ["user-pen", "User Pen", '<path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/>'],
  ["user-plus", "User Plus", '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>'],
  ["user-plus2", "User Plus2", '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/>'],
  ["user-round", "User Round", '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>'],
  ["user-round-check", "User Round Check", '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/>'],
  ["user-round-cog", "User Round Cog", '<path d="m14.305 19.53.923-.382"/><path d="m15.228 16.852-.923-.383"/><path d="m16.852 15.228-.383-.923"/><path d="m16.852 20.772-.383.924"/><path d="m19.148 15.228.383-.923"/><path d="m19.53 21.696-.382-.924"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><path d="m20.772 16.852.924-.383"/><path d="m20.772 19.148.924.383"/><circle cx="10" cy="8" r="5"/><circle cx="18" cy="18" r="3"/>'],
  ["user-round-key", "User Round Key", '<path d="M19 11v6"/><path d="M19 13h2"/><path d="M2 21a8 8 0 0 1 12.868-6.349"/><circle cx="10" cy="8" r="5"/><circle cx="19" cy="19" r="2"/>'],
  ["user-round-minus", "User Round Minus", '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M22 19h-6"/>'],
  ["user-round-pen", "User Round Pen", '<path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/>'],
  ["user-round-plus", "User Round Plus", '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/>'],
  ["user-round-search", "User Round Search", '<circle cx="10" cy="8" r="5"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.9-1.9"/>'],
  ["user-round-x", "User Round X", '<path d="M2 21a8 8 0 0 1 11.873-7"/><circle cx="10" cy="8" r="5"/><path d="m17 17 5 5"/><path d="m22 17-5 5"/>'],
  ["user-search", "User Search", '<circle cx="10" cy="7" r="4"/><path d="M10.3 15H7a4 4 0 0 0-4 4v2"/><circle cx="17" cy="17" r="3"/><path d="m21 21-1.9-1.9"/>'],
  ["user-square", "User Square", '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>'],
  ["user-square2", "User Square2", '<path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><rect width="18" height="18" x="3" y="3" rx="2"/>'],
  ["user-star", "User Star", '<path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/>'],
  ["user-x", "User X", '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" x2="22" y1="8" y2="13"/><line x1="22" x2="17" y1="8" y2="13"/>'],
  ["user-x2", "User X2", '<path d="M2 21a8 8 0 0 1 11.873-7"/><circle cx="10" cy="8" r="5"/><path d="m17 17 5 5"/><path d="m22 17-5 5"/>'],
  ["user2", "User2", '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>'],
  ["users", "Users", '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>'],
  ["users-round", "Users Round", '<path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>'],
  ["users2", "Users2", '<path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>'],
  ["utensils", "Utensils", '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>'],
  ["utensils-crossed", "Utensils Crossed", '<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/>'],
  ["utility-pole", "Utility Pole", '<path d="M12 2v20"/><path d="M2 5h20"/><path d="M3 3v2"/><path d="M7 3v2"/><path d="M17 3v2"/><path d="M21 3v2"/><path d="m19 5-7 7-7-7"/>'],
  ["van", "Van", '<path d="M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3"/><path d="M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>'],
  ["variable", "Variable", '<path d="M8 21s-4-3-4-9 4-9 4-9"/><path d="M16 3s4 3 4 9-4 9-4 9"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/>'],
  ["vault", "Vault", '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/><path d="m7.9 7.9 2.7 2.7"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/><path d="m13.4 10.6 2.7-2.7"/><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"/><path d="m7.9 16.1 2.7-2.7"/><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"/><path d="m13.4 13.4 2.7 2.7"/><circle cx="12" cy="12" r="2"/>'],
  ["vector-square", "Vector Square", '<path d="M19.5 7a24 24 0 0 1 0 10"/><path d="M4.5 7a24 24 0 0 0 0 10"/><path d="M7 19.5a24 24 0 0 0 10 0"/><path d="M7 4.5a24 24 0 0 1 10 0"/><rect x="17" y="17" width="5" height="5" rx="1"/><rect x="17" y="2" width="5" height="5" rx="1"/><rect x="2" y="17" width="5" height="5" rx="1"/><rect x="2" y="2" width="5" height="5" rx="1"/>'],
  ["vegan", "Vegan", '<path d="M16 8q6 0 6-6-6 0-6 6"/><path d="M17.41 3.59a10 10 0 1 0 3 3"/><path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"/>'],
  ["venetian-mask", "Venetian Mask", '<path d="M18 11c-1.5 0-2.5.5-3 2"/><path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"/><path d="M6 11c1.5 0 2.5.5 3 2"/>'],
  ["venus", "Venus", '<path d="M12 15v7"/><path d="M9 19h6"/><circle cx="12" cy="9" r="6"/>'],
  ["venus-and-mars", "Venus And Mars", '<path d="M10 20h4"/><path d="M12 16v6"/><path d="M17 2h4v4"/><path d="m21 2-5.46 5.46"/><circle cx="12" cy="11" r="5"/>'],
  ["verified", "Verified", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>'],
  ["vibrate", "Vibrate", '<path d="m2 8 2 2-2 2 2 2-2 2"/><path d="m22 8-2 2 2 2-2 2 2 2"/><rect width="8" height="14" x="8" y="5" rx="1"/>'],
  ["vibrate-off", "Vibrate Off", '<path d="m2 8 2 2-2 2 2 2-2 2"/><path d="m22 8-2 2 2 2-2 2 2 2"/><path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"/><path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34"/><line x1="2" x2="22" y1="2" y2="22"/>'],
  ["video", "Video", '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>'],
  ["video-off", "Video Off", '<path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"/><path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/><path d="m2 2 20 20"/>'],
  ["videotape", "Videotape", '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M2 8h20"/><circle cx="8" cy="14" r="2"/><path d="M8 12h8"/><circle cx="16" cy="14" r="2"/>'],
  ["view", "View", '<path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/><circle cx="12" cy="12" r="1"/><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/>'],
  ["voicemail", "Voicemail", '<circle cx="6" cy="12" r="4"/><circle cx="18" cy="12" r="4"/><line x1="6" x2="18" y1="16" y2="16"/>'],
  ["volleyball", "Volleyball", '<path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4"/><path d="M12 12a12.6 12.6 0 0 1-8.7 5"/><path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5"/><path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"/><path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"/><circle cx="12" cy="12" r="10"/>'],
  ["volume", "Volume", '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/>'],
  ["volume-off", "Volume Off", '<path d="M16 9a5 5 0 0 1 .95 2.293"/><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"/><path d="m2 2 20 20"/><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"/><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"/>'],
  ["volume-x", "Volume X", '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>'],
  ["volume1", "Volume1", '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/>'],
  ["volume2", "Volume2", '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>'],
  ["vote", "Vote", '<path d="m9 12 2 2 4-4"/><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"/><path d="M22 19H2"/>'],
  ["wallet", "Wallet", '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>'],
  ["wallet-cards", "Wallet Cards", '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"/>'],
  ["wallet-minimal", "Wallet Minimal", '<path d="M17 14h.01"/><path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"/>'],
  ["wallet2", "Wallet2", '<path d="M17 14h.01"/><path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"/>'],
  ["wallpaper", "Wallpaper", '<path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/>'],
  ["wand", "Wand", '<path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h.01"/><path d="M17.8 6.2 19 5"/><path d="m3 21 9-9"/><path d="M12.2 6.2 11 5"/>'],
  ["wand-sparkles", "Wand Sparkles", '<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/>'],
  ["wand2", "Wand2", '<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/>'],
  ["warehouse", "Warehouse", '<path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/>'],
  ["washing-machine", "Washing Machine", '<path d="M3 6h3"/><path d="M17 6h.01"/><rect width="18" height="20" x="3" y="2" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"/>'],
  ["watch", "Watch", '<path d="M12 10v2.2l1.6 1"/><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"/><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/><circle cx="12" cy="12" r="6"/>'],
  ["waves", "Waves", '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>'],
  ["waves-arrow-down", "Waves Arrow Down", '<path d="M12 10L12 2"/><path d="M16 6L12 10L8 6"/><path d="M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15"/><path d="M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21"/>'],
  ["waves-arrow-up", "Waves Arrow Up", '<path d="M12 2v8"/><path d="M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="m8 6 4-4 4 4"/>'],
  ["waves-ladder", "Waves Ladder", '<path d="M19 5a2 2 0 0 0-2 2v11"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M7 13h10"/><path d="M7 9h10"/><path d="M9 5a2 2 0 0 0-2 2v11"/>'],
  ["waypoints", "Waypoints", '<path d="m10.586 5.414-5.172 5.172"/><path d="m18.586 13.414-5.172 5.172"/><path d="M6 12h12"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/>'],
  ["webcam", "Webcam", '<circle cx="12" cy="10" r="8"/><circle cx="12" cy="10" r="3"/><path d="M7 22h10"/><path d="M12 22v-4"/>'],
  ["webhook", "Webhook", '<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/>'],
  ["webhook-off", "Webhook Off", '<path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"/><path d="M9 3.4a4 4 0 0 1 6.52.66"/><path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"/><path d="M20.3 20.3a4 4 0 0 1-2.3.7"/><path d="M18.6 13a4 4 0 0 1 3.357 3.414"/><path d="m12 6 .6 1"/><path d="m2 2 20 20"/>'],
  ["weight", "Weight", '<circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/>'],
  ["weight-tilde", "Weight Tilde", '<path d="M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z"/><path d="M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0"/><circle cx="12" cy="5" r="3"/>'],
  ["wheat", "Wheat", '<path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/>'],
  ["wheat-off", "Wheat Off", '<path d="m2 22 10-10"/><path d="m16 8-1.17 1.17"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"/><path d="M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/><path d="m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"/><path d="M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"/><line x1="2" x2="22" y1="2" y2="22"/>'],
  ["whole-word", "Whole Word", '<circle cx="7" cy="12" r="3"/><path d="M10 9v6"/><circle cx="17" cy="12" r="3"/><path d="M14 7v8"/><path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"/>'],
  ["wifi", "Wifi", '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>'],
  ["wifi-cog", "Wifi Cog", '<path d="m14.305 19.53.923-.382"/><path d="m15.228 16.852-.923-.383"/><path d="m16.852 15.228-.383-.923"/><path d="m16.852 20.772-.383.924"/><path d="m19.148 15.228.383-.923"/><path d="m19.53 21.696-.382-.924"/><path d="M2 7.82a15 15 0 0 1 20 0"/><path d="m20.772 16.852.924-.383"/><path d="m20.772 19.148.924.383"/><path d="M5 11.858a10 10 0 0 1 11.5-1.785"/><path d="M8.5 15.429a5 5 0 0 1 2.413-1.31"/><circle cx="18" cy="18" r="3"/>'],
  ["wifi-high", "Wifi High", '<path d="M12 20h.01"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>'],
  ["wifi-low", "Wifi Low", '<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>'],
  ["wifi-off", "Wifi Off", '<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>'],
  ["wifi-pen", "Wifi Pen", '<path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M5 12.859a10 10 0 0 1 10.5-2.222"/><path d="M8.5 16.429a5 5 0 0 1 3-1.406"/>'],
  ["wifi-sync", "Wifi Sync", '<path d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5"/><path d="M11.965 14.105h4"/><path d="M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M21.965 22.105v-4"/><path d="M5 12.86a10 10 0 0 1 3-2.032"/><path d="M8.5 16.429h.01"/>'],
  ["wifi-zero", "Wifi Zero", '<path d="M12 20h.01"/>'],
  ["wind", "Wind", '<path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/>'],
  ["wind-arrow-down", "Wind Arrow Down", '<path d="M10 2v8"/><path d="M12.8 21.6A2 2 0 1 0 14 18H2"/><path d="M17.5 10a2.5 2.5 0 1 1 2 4H2"/><path d="m6 6 4 4 4-4"/>'],
  ["wine", "Wine", '<path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/>'],
  ["wine-off", "Wine Off", '<path d="M8 22h8"/><path d="M7 10h3m7 0h-1.343"/><path d="M12 15v7"/><path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"/><line x1="2" x2="22" y1="2" y2="22"/>'],
  ["workflow", "Workflow", '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>'],
  ["worm", "Worm", '<path d="m19 12-1.5 3"/><path d="M19.63 18.81 22 20"/><path d="M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"/>'],
  ["wrap-text", "Wrap Text", '<path d="m16 16-3 3 3 3"/><path d="M3 12h14.5a1 1 0 0 1 0 7H13"/><path d="M3 19h6"/><path d="M3 5h18"/>'],
  ["wrench", "Wrench", '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>'],
  ["x", "X", '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'],
  ["x-circle", "X Circle", '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>'],
  ["x-line-top", "X Line Top", '<path d="M18 4H6"/><path d="M18 8 6 20"/><path d="m6 8 12 12"/>'],
  ["x-octagon", "X Octagon", '<path d="m15 9-6 6"/><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/><path d="m9 9 6 6"/>'],
  ["x-square", "X Square", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>'],
  ["zap", "Zap", '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'],
  ["zap-off", "Zap Off", '<path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"/><path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"/><path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"/><path d="m2 2 20 20"/>'],
  ["zodiac-aquarius", "Zodiac Aquarius", '<path d="m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10"/><path d="m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002"/>'],
  ["zodiac-aries", "Zodiac Aries", '<path d="M12 7.5a4.5 4.5 0 1 1 5 4.5"/><path d="M7 12a4.5 4.5 0 1 1 5-4.5V21"/>'],
  ["zodiac-cancer", "Zodiac Cancer", '<path d="M21 14.5A9 6.5 0 0 1 5.5 19"/><path d="M3 9.5A9 6.5 0 0 1 18.5 5"/><circle cx="17.5" cy="14.5" r="3.5"/><circle cx="6.5" cy="9.5" r="3.5"/>'],
  ["zodiac-capricorn", "Zodiac Capricorn", '<path d="M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0"/><path d="M7 19V6a3 3 0 0 0-3-3h0"/><circle cx="17" cy="17" r="3"/>'],
  ["zodiac-gemini", "Zodiac Gemini", '<path d="M16 4.525v14.948"/><path d="M20 3A17 17 0 0 1 4 3"/><path d="M4 21a17 17 0 0 1 16 0"/><path d="M8 4.525v14.948"/>'],
  ["zodiac-leo", "Zodiac Leo", '<path d="M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0"/><circle cx="7" cy="16" r="3"/>'],
  ["zodiac-libra", "Zodiac Libra", '<path d="M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21"/><path d="M3 20h18"/>'],
  ["zodiac-ophiuchus", "Zodiac Ophiuchus", '<path d="M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10"/><path d="M6 3v12a6 6 0 0 0 12 0V3"/>'],
  ["zodiac-pisces", "Zodiac Pisces", '<path d="M19 21a15 15 0 0 1 0-18"/><path d="M20 12H4"/><path d="M5 3a15 15 0 0 1 0 18"/>'],
  ["zodiac-sagittarius", "Zodiac Sagittarius", '<path d="M15 3h6v6"/><path d="M21 3 3 21"/><path d="m9 9 6 6"/>'],
  ["zodiac-scorpio", "Zodiac Scorpio", '<path d="M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3"/><path d="m22 19-3 3"/><path d="M5 19V5.5a1 1 0 0 1 5 0"/><path d="M5 5.5A2.5 2.5 0 0 0 2.5 3"/>'],
  ["zodiac-taurus", "Zodiac Taurus", '<circle cx="12" cy="15" r="6"/><path d="M18 3A6 6 0 0 1 6 3"/>'],
  ["zodiac-virgo", "Zodiac Virgo", '<path d="M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5"/><path d="M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5"/><path d="M6 19V6a3 3 0 0 0-3-3h0"/><path d="M6 5.5a1 1 0 0 1 5 0V19"/>'],
  ["zoom-in", "Zoom In", '<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>'],
  ["zoom-out", "Zoom Out", '<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/>']
];
var ICON_LIST = ICONS.map(([id, name, svg]) => ({ id, name, svg }));
var ICON_MAP = {};
ICONS.forEach(([id, , svg]) => {
  ICON_MAP[id] = svg;
});
function renderIconSvg(iconId, size = 20, strokeWidth = 2) {
  const svg = ICON_MAP[iconId];
  if (!svg) return "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${svg}</svg>`;
}

// src/components/IconPicker.jsx
function IconPicker({ value, onChange }) {
  const [open, setOpen] = d2(false);
  const [search, setSearch] = d2("");
  const wrapRef = A2(null);
  const searchRef = A2(null);
  const filtered = search ? ICON_LIST.filter((i5) => i5.name.toLowerCase().includes(search.toLowerCase()) || i5.id.includes(search.toLowerCase())) : ICON_LIST;
  function toggle() {
    setOpen(!open);
    if (!open) setTimeout(() => searchRef.current?.focus(), 50);
  }
  y2(() => {
    if (!open) return;
    function onClick(e4) {
      if (!wrapRef.current?.contains(e4.target)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);
  return /* @__PURE__ */ u4("div", { class: "icon-picker", ref: wrapRef, children: [
    /* @__PURE__ */ u4("div", { class: "icon-picker-selected", onClick: toggle, children: [
      value ? /* @__PURE__ */ u4("span", { class: "icon-picker-preview", dangerouslySetInnerHTML: { __html: renderIconSvg(value, 16) } }) : /* @__PURE__ */ u4("span", { class: "icon-picker-none", children: "No icon" }),
      /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ u4("path", { d: "m6 9 6 6 6-6" }) })
    ] }),
    value && /* @__PURE__ */ u4("button", { class: "prop-btn-clear icon-picker-clear", onClick: (e4) => {
      e4.stopPropagation();
      onChange("");
    }, title: "Remove icon", children: "\xD7" }),
    open && /* @__PURE__ */ u4("div", { class: "icon-picker-dropdown", children: [
      /* @__PURE__ */ u4(
        "input",
        {
          ref: searchRef,
          type: "text",
          class: "icon-picker-search",
          placeholder: "Search icons...",
          value: search,
          onInput: (e4) => setSearch(e4.target.value)
        }
      ),
      /* @__PURE__ */ u4("div", { class: "icon-picker-grid", children: [
        filtered.map((icon) => /* @__PURE__ */ u4(
          "button",
          {
            class: `icon-picker-item ${value === icon.id ? "active" : ""}`,
            onClick: () => {
              onChange(icon.id);
              setOpen(false);
              setSearch("");
            },
            title: icon.name,
            dangerouslySetInnerHTML: { __html: renderIconSvg(icon.id, 18) }
          },
          icon.id
        )),
        filtered.length === 0 && /* @__PURE__ */ u4("div", { class: "icon-picker-empty", children: "No icons found" })
      ] })
    ] })
  ] });
}

// src/components/ColorSelector.jsx
function ColorSelector({ value, onChange, placeholder }) {
  const [open, setOpen] = d2(false);
  const wrapRef = A2(null);
  const palette = getEffectiveColors();
  y2(() => {
    if (!open) return;
    function onClick(e4) {
      if (!wrapRef.current?.contains(e4.target)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);
  const selectedColor = palette.find((c4) => c4.value === value);
  return /* @__PURE__ */ u4("div", { class: "color-selector", ref: wrapRef, children: [
    /* @__PURE__ */ u4("div", { class: "color-selector-input", onClick: () => setOpen(!open), children: [
      /* @__PURE__ */ u4("span", { class: "color-selector-swatch", style: { backgroundColor: value || "transparent", border: value ? "none" : "1px dashed #ccc" } }),
      /* @__PURE__ */ u4("span", { class: "color-selector-label", children: selectedColor ? selectedColor.name : value || placeholder || "Select color..." }),
      /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ u4("path", { d: "m6 9 6 6 6-6" }) })
    ] }),
    open && /* @__PURE__ */ u4("div", { class: "color-selector-dropdown", children: [
      palette.length > 0 && /* @__PURE__ */ u4(k, { children: [
        /* @__PURE__ */ u4("div", { class: "color-selector-section", children: "Preset Colors" }),
        palette.map((c4) => /* @__PURE__ */ u4(
          "button",
          {
            class: `color-selector-option ${value === c4.value ? "active" : ""}`,
            onClick: () => {
              onChange(c4.value);
              setOpen(false);
            },
            children: [
              /* @__PURE__ */ u4("span", { class: "color-selector-swatch", style: { backgroundColor: c4.value } }),
              /* @__PURE__ */ u4("span", { class: "color-selector-option-name", children: c4.name }),
              /* @__PURE__ */ u4("span", { class: "color-selector-option-hex", children: c4.value })
            ]
          },
          c4.name
        )),
        /* @__PURE__ */ u4("div", { class: "color-selector-divider" })
      ] }),
      /* @__PURE__ */ u4("div", { class: "color-selector-section", children: "Custom Color" }),
      /* @__PURE__ */ u4("div", { class: "color-selector-custom", children: [
        /* @__PURE__ */ u4(
          "input",
          {
            type: "color",
            class: "prop-color",
            value: value || "#000000",
            onInput: (e4) => onChange(e4.target.value)
          }
        ),
        /* @__PURE__ */ u4(
          "input",
          {
            type: "text",
            class: "color-selector-hex-input",
            value: value || "",
            placeholder: "#000000",
            onInput: (e4) => onChange(e4.target.value),
            onKeyDown: (e4) => {
              if (e4.key === "Enter") setOpen(false);
            }
          }
        )
      ] }),
      value && /* @__PURE__ */ u4("button", { class: "color-selector-option color-selector-clear", onClick: () => {
        onChange("");
        setOpen(false);
      }, children: [
        /* @__PURE__ */ u4("span", { class: "color-selector-swatch", style: { border: "1px dashed #ccc" } }),
        /* @__PURE__ */ u4("span", { class: "color-selector-option-name", children: "Clear / Inherit" })
      ] })
    ] })
  ] });
}

// src/components/BoxShadowEditor.jsx
function shadowToCSS(shadow) {
  if (!shadow || !shadow.x && !shadow.y && !shadow.blur && !shadow.spread) return "";
  return `${shadow.inset ? "inset " : ""}${shadow.x || 0}px ${shadow.y || 0}px ${shadow.blur || 0}px ${shadow.spread || 0}px ${shadow.color || "rgba(0,0,0,0.1)"}`;
}
function BoxShadowEditor({ value, onChange }) {
  const [open, setOpen] = d2(false);
  const shadow = value || { x: 0, y: 0, blur: 0, spread: 0, color: "rgba(0,0,0,0.1)", inset: false };
  const css = shadowToCSS(value);
  const padRef = A2(null);
  const dragging2 = A2(false);
  function set(patch) {
    onChange({ ...shadow, ...patch });
  }
  function clear() {
    onChange(void 0);
    setOpen(false);
  }
  const onPadPointerDown = q2((e4) => {
    dragging2.current = true;
    padRef.current?.setPointerCapture(e4.pointerId);
    updateXY(e4);
  }, [shadow]);
  const onPadPointerMove = q2((e4) => {
    if (!dragging2.current) return;
    updateXY(e4);
  }, [shadow]);
  const onPadPointerUp = q2((e4) => {
    dragging2.current = false;
  }, []);
  function updateXY(e4) {
    const rect = padRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x4 = Math.round(((e4.clientX - rect.left) / rect.width - 0.5) * 40);
    const y5 = Math.round(((e4.clientY - rect.top) / rect.height - 0.5) * 40);
    set({ x: Math.max(-20, Math.min(20, x4)), y: Math.max(-20, Math.min(20, y5)) });
  }
  const dotX = ((shadow.x || 0) / 40 + 0.5) * 100;
  const dotY = ((shadow.y || 0) / 40 + 0.5) * 100;
  return /* @__PURE__ */ u4("div", { class: "shadow-editor", children: [
    /* @__PURE__ */ u4("div", { class: "shadow-trigger", onClick: () => setOpen(!open), children: [
      css ? /* @__PURE__ */ u4("div", { class: "shadow-trigger-preview", style: { boxShadow: css } }) : /* @__PURE__ */ u4("span", { class: "shadow-trigger-none", children: "None" }),
      /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", children: /* @__PURE__ */ u4("path", { d: "m6 9 6 6 6-6" }) })
    ] }),
    open && /* @__PURE__ */ u4("div", { class: "shadow-dropdown", children: [
      /* @__PURE__ */ u4("div", { class: "shadow-row", children: [
        /* @__PURE__ */ u4("span", { class: "shadow-label", children: "Type" }),
        /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: [
          /* @__PURE__ */ u4("button", { class: `prop-btn ${!shadow.inset ? "active" : ""}`, onClick: () => set({ inset: false }), children: "Outset" }),
          /* @__PURE__ */ u4("button", { class: `prop-btn ${shadow.inset ? "active" : ""}`, onClick: () => set({ inset: true }), children: "Inset" })
        ] })
      ] }),
      /* @__PURE__ */ u4("div", { class: "shadow-xy-section", children: [
        /* @__PURE__ */ u4("div", { class: "shadow-xy-inputs", children: [
          /* @__PURE__ */ u4("div", { class: "shadow-row", children: [
            /* @__PURE__ */ u4("span", { class: "shadow-label", children: "X" }),
            /* @__PURE__ */ u4("input", { type: "number", class: "shadow-num", value: shadow.x || 0, onInput: (e4) => set({ x: parseInt(e4.target.value) || 0 }) })
          ] }),
          /* @__PURE__ */ u4("div", { class: "shadow-row", children: [
            /* @__PURE__ */ u4("span", { class: "shadow-label", children: "Y" }),
            /* @__PURE__ */ u4("input", { type: "number", class: "shadow-num", value: shadow.y || 0, onInput: (e4) => set({ y: parseInt(e4.target.value) || 0 }) })
          ] })
        ] }),
        /* @__PURE__ */ u4(
          "div",
          {
            ref: padRef,
            class: "shadow-xy-pad",
            onPointerDown: onPadPointerDown,
            onPointerMove: onPadPointerMove,
            onPointerUp: onPadPointerUp,
            children: [
              /* @__PURE__ */ u4("div", { class: "shadow-xy-crosshair-h" }),
              /* @__PURE__ */ u4("div", { class: "shadow-xy-crosshair-v" }),
              /* @__PURE__ */ u4("div", { class: "shadow-xy-dot", style: { left: dotX + "%", top: dotY + "%" } })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ u4("div", { class: "shadow-row", children: [
        /* @__PURE__ */ u4("span", { class: "shadow-label", children: "Blur" }),
        /* @__PURE__ */ u4("input", { type: "range", min: 0, max: 50, value: shadow.blur || 0, onInput: (e4) => set({ blur: parseInt(e4.target.value) }), class: "shadow-slider" }),
        /* @__PURE__ */ u4("input", { type: "number", class: "shadow-num", value: shadow.blur || 0, min: 0, onInput: (e4) => set({ blur: parseInt(e4.target.value) || 0 }) })
      ] }),
      /* @__PURE__ */ u4("div", { class: "shadow-row", children: [
        /* @__PURE__ */ u4("span", { class: "shadow-label", children: "Spread" }),
        /* @__PURE__ */ u4("input", { type: "range", min: -20, max: 20, value: shadow.spread || 0, onInput: (e4) => set({ spread: parseInt(e4.target.value) }), class: "shadow-slider" }),
        /* @__PURE__ */ u4("input", { type: "number", class: "shadow-num", value: shadow.spread || 0, onInput: (e4) => set({ spread: parseInt(e4.target.value) || 0 }) })
      ] }),
      /* @__PURE__ */ u4("div", { class: "shadow-row", children: [
        /* @__PURE__ */ u4("span", { class: "shadow-label", children: "Color" }),
        /* @__PURE__ */ u4(
          "input",
          {
            type: "text",
            class: "shadow-color-input",
            value: shadow.color || "",
            placeholder: "rgba(0,0,0,0.1)",
            onInput: (e4) => set({ color: e4.target.value })
          }
        )
      ] }),
      css && /* @__PURE__ */ u4("button", { class: "shadow-clear-btn", onClick: clear, children: "Remove Shadow" })
    ] })
  ] });
}

// src/components/Properties.jsx
function Properties() {
  const sel = selectedId.value;
  if (!sel) {
    return /* @__PURE__ */ u4("aside", { class: "nomentor-sidebar-left", children: [
      /* @__PURE__ */ u4("div", { class: "sidebar-header", children: "Properties" }),
      /* @__PURE__ */ u4("div", { class: "sidebar-content", children: /* @__PURE__ */ u4("div", { class: "props-empty", children: "Select an element to edit its properties" }) })
    ] });
  }
  const row = rows.value.find((r4) => r4.id === sel);
  if (row) {
    return /* @__PURE__ */ u4("aside", { class: "nomentor-sidebar-left", children: [
      /* @__PURE__ */ u4("div", { class: "sidebar-header", children: "Container Properties" }),
      /* @__PURE__ */ u4("div", { class: "sidebar-content", children: [
        /* @__PURE__ */ u4(ContainerProps, { row }),
        /* @__PURE__ */ u4(VisibilityField, { props: row.props || {}, onUpdate: (k3, v4) => {
          updateRowProps(row.id, { [k3]: v4 });
          commitChange("Edit visibility");
        } }),
        /* @__PURE__ */ u4(BorderFields, { props: row.props || {}, onUpdate: (k3, v4) => {
          updateRowProps(row.id, { [k3]: v4 });
          commitChange("Edit border");
        } }),
        /* @__PURE__ */ u4(PropField, { label: "Box Shadow", children: /* @__PURE__ */ u4(BoxShadowEditor, { value: row.props?.boxShadow, onChange: (v4) => {
          updateRowProps(row.id, { boxShadow: v4 });
          commitChange("Edit shadow");
        } }) }),
        /* @__PURE__ */ u4(SpacingFields, { label: "padding", props: row.props || {}, onUpdate: (k3, v4) => {
          updateRowProps(row.id, { [k3]: v4 });
          commitChange("Edit padding");
        } }),
        /* @__PURE__ */ u4(SpacingFields, { label: "margin", props: row.props || {}, onUpdate: (k3, v4) => {
          updateRowProps(row.id, { [k3]: v4 });
          commitChange("Edit margin");
        } }),
        /* @__PURE__ */ u4(
          CssEditor,
          {
            value: row.props?.customCss || "",
            selector: "selector",
            onChange: (v4) => updateRowProps(row.id, { customCss: v4 }),
            onBlur: () => commitChange("Edit container CSS")
          }
        )
      ] })
    ] });
  }
  const cell = findCellById(sel);
  if (cell) {
    return /* @__PURE__ */ u4("aside", { class: "nomentor-sidebar-left", children: [
      /* @__PURE__ */ u4("div", { class: "sidebar-header", children: "Cell Properties" }),
      /* @__PURE__ */ u4("div", { class: "sidebar-content", children: /* @__PURE__ */ u4(CellProps, { cell }) })
    ] });
  }
  const element = findElementById(sel);
  if (!element) {
    return /* @__PURE__ */ u4("aside", { class: "nomentor-sidebar-left", children: [
      /* @__PURE__ */ u4("div", { class: "sidebar-header", children: "Properties" }),
      /* @__PURE__ */ u4("div", { class: "sidebar-content", children: /* @__PURE__ */ u4("div", { class: "props-empty", children: "Element not found" }) })
    ] });
  }
  return /* @__PURE__ */ u4("aside", { class: "nomentor-sidebar-left", children: [
    /* @__PURE__ */ u4("div", { class: "sidebar-header", children: [
      element.type.charAt(0).toUpperCase() + element.type.slice(1),
      " Properties"
    ] }),
    /* @__PURE__ */ u4("div", { class: "sidebar-content", children: [
      /* @__PURE__ */ u4(ElementProps, { element }),
      /* @__PURE__ */ u4(VisibilityField, { props: element.props, onUpdate: (k3, v4) => {
        updateElementProps(element.id, { [k3]: v4 });
        commitChange("Edit visibility");
      } }),
      /* @__PURE__ */ u4(DirectionField, { element }),
      /* @__PURE__ */ u4(BorderFields, { props: element.props, onUpdate: (k3, v4) => {
        updateElementProps(element.id, { [k3]: v4 });
        commitChange("Edit border");
      } }),
      /* @__PURE__ */ u4(PropField, { label: "Box Shadow", children: /* @__PURE__ */ u4(BoxShadowEditor, { value: element.props.boxShadow, onChange: (v4) => {
        updateElementProps(element.id, { boxShadow: v4 });
        commitChange("Edit shadow");
      } }) }),
      /* @__PURE__ */ u4(SpacingFields, { label: "padding", props: element.props, onUpdate: (k3, v4) => {
        updateElementProps(element.id, { [k3]: v4 });
        commitChange("Edit padding");
      } }),
      /* @__PURE__ */ u4(SpacingFields, { label: "margin", props: element.props, onUpdate: (k3, v4) => {
        updateElementProps(element.id, { [k3]: v4 });
        commitChange("Edit margin");
      } }),
      /* @__PURE__ */ u4(
        CssEditor,
        {
          value: element.props.customCss || "",
          selector: "selector",
          onChange: (v4) => updateElementProps(element.id, { customCss: v4 }),
          onBlur: () => commitChange("Edit custom CSS")
        }
      )
    ] })
  ] });
}
function ElementProps({ element }) {
  switch (element.type) {
    case "heading":
      return /* @__PURE__ */ u4(HeadingProps, { element });
    case "text":
      return /* @__PURE__ */ u4(TextProps, { element });
    case "image":
      return /* @__PURE__ */ u4(ImageProps, { element });
    case "grid":
      return /* @__PURE__ */ u4(GridProps, { element });
    case "button":
      return /* @__PURE__ */ u4(ButtonProps, { element });
    case "list":
      return /* @__PURE__ */ u4(ListProps, { element });
    case "timer":
      return /* @__PURE__ */ u4(TimerProps, { element });
    case "form":
      return /* @__PURE__ */ u4(FormProps, { element });
    default:
      return null;
  }
}
function HeadingProps({ element }) {
  const { text, level } = element.props;
  function update(props) {
    updateElementProps(element.id, props);
    commitChange("Edit heading");
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: "Content", children: /* @__PURE__ */ u4(
      "textarea",
      {
        class: "prop-textarea",
        value: text || "",
        onInput: (e4) => updateElementProps(element.id, { text: e4.target.value }),
        onBlur: () => commitChange("Edit heading text"),
        rows: 3
      }
    ) }),
    /* @__PURE__ */ u4(PropField, { label: "Size", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: ["h1", "h2", "h3", "h4", "h5", "h6"].map((h5) => /* @__PURE__ */ u4(
      "button",
      {
        class: `prop-btn ${level === h5 ? "active" : ""}`,
        onClick: () => update({ level: h5 }),
        children: h5.toUpperCase()
      },
      h5
    )) }) }),
    /* @__PURE__ */ u4(ColorField, { element, label: "Color" }),
    /* @__PURE__ */ u4(AlignField, { element })
  ] });
}
var TEXT_SIZES = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"];
var ALIGN_OPTIONS = [
  { value: "left", icon: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u4("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
    /* @__PURE__ */ u4("line", { x1: "15", x2: "3", y1: "12", y2: "12" }),
    /* @__PURE__ */ u4("line", { x1: "17", x2: "3", y1: "18", y2: "18" })
  ] }) },
  { value: "center", icon: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u4("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
    /* @__PURE__ */ u4("line", { x1: "17", x2: "7", y1: "12", y2: "12" }),
    /* @__PURE__ */ u4("line", { x1: "19", x2: "5", y1: "18", y2: "18" })
  ] }) },
  { value: "right", icon: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
    /* @__PURE__ */ u4("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
    /* @__PURE__ */ u4("line", { x1: "21", x2: "9", y1: "12", y2: "12" }),
    /* @__PURE__ */ u4("line", { x1: "21", x2: "7", y1: "18", y2: "18" })
  ] }) }
];
function TextProps({ element }) {
  const { fontSize } = element.props;
  function update(props) {
    updateElementProps(element.id, props);
    commitChange("Edit text");
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: "Size", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: TEXT_SIZES.map((s4) => /* @__PURE__ */ u4(
      "button",
      {
        class: `prop-btn ${fontSize === s4 ? "active" : ""}`,
        onClick: () => update({ fontSize: s4 }),
        children: s4
      },
      s4
    )) }) }),
    /* @__PURE__ */ u4(ColorField, { element, label: "Color" }),
    /* @__PURE__ */ u4(AlignField, { element })
  ] });
}
function ImageProps({ element }) {
  const { src, alt } = element.props;
  function selectImage() {
    openMediaPicker().then((img) => {
      if (img) {
        updateElementProps(element.id, { src: img.url, alt: img.alt });
        commitChange("Set image");
      }
    });
  }
  function uploadFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    const { ajaxUrl, nonce } = window.nomentor;
    const formData = new FormData();
    formData.append("action", "nomentor_upload");
    formData.append("nonce", nonce);
    formData.append("file", file);
    fetch(ajaxUrl, { method: "POST", body: formData }).then((r4) => r4.json()).then((r4) => {
      if (r4.success) {
        updateElementProps(element.id, { src: r4.data.url, alt: r4.data.alt || "" });
        commitChange("Upload image");
      }
    });
  }
  function onDrop(e4) {
    e4.preventDefault();
    e4.currentTarget.classList.remove("prop-drop-active");
    const file = e4.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: "Image", children: src ? /* @__PURE__ */ u4("div", { class: "prop-image-preview", children: [
      /* @__PURE__ */ u4("img", { src, alt }),
      /* @__PURE__ */ u4("div", { class: "prop-image-actions", children: [
        /* @__PURE__ */ u4("button", { class: "prop-btn", onClick: selectImage, children: "Change" }),
        /* @__PURE__ */ u4("button", { class: "prop-btn-clear", onClick: () => {
          updateElementProps(element.id, { src: "", alt: "" });
          commitChange("Remove image");
        }, title: "Remove", children: "\xD7" })
      ] })
    ] }) : /* @__PURE__ */ u4(
      "div",
      {
        class: "prop-image-drop",
        onDragOver: (e4) => {
          e4.preventDefault();
          e4.currentTarget.classList.add("prop-drop-active");
        },
        onDragLeave: (e4) => e4.currentTarget.classList.remove("prop-drop-active"),
        onDrop,
        children: [
          /* @__PURE__ */ u4("button", { class: "prop-btn", onClick: selectImage, style: { width: "100%" }, children: "Select from Media Library" }),
          /* @__PURE__ */ u4("span", { class: "prop-image-drop-hint", children: "or drop an image here" })
        ]
      }
    ) }),
    /* @__PURE__ */ u4(PropField, { label: "Alt Text", children: /* @__PURE__ */ u4(
      "input",
      {
        type: "text",
        class: "prop-input",
        value: alt || "",
        placeholder: "Describe the image",
        onInput: (e4) => updateElementProps(element.id, { alt: e4.target.value }),
        onBlur: () => commitChange("Edit alt text")
      }
    ) }),
    /* @__PURE__ */ u4(ImageDimensions, { element })
  ] });
}
var VP_DIM_KEYS = {
  desktop: { w: "width", h: "height" },
  tablet: { w: "tabletWidth", h: "tabletHeight" },
  mobile: { w: "mobileWidth", h: "mobileHeight" }
};
function ImageDimensions({ element }) {
  const vp = viewportMode.value;
  const keys = VP_DIM_KEYS[vp];
  const desktopW = element.props.width || "";
  const desktopH = element.props.height || "";
  const w5 = element.props[keys.w] ?? (vp === "desktop" ? "" : "");
  const h5 = element.props[keys.h] ?? (vp === "desktop" ? "" : "");
  const isDesktop = vp === "desktop";
  function effective(prop) {
    if (vp === "mobile") return element.props.mobileWidth !== void 0 ? element.props[prop === "w" ? "mobileWidth" : "mobileHeight"] : element.props[prop === "w" ? "tabletWidth" : "tabletHeight"] ?? element.props[prop === "w" ? "width" : "height"] ?? "";
    if (vp === "tablet") return element.props[prop === "w" ? "tabletWidth" : "tabletHeight"] ?? element.props[prop === "w" ? "width" : "height"] ?? "";
    return element.props[prop === "w" ? "width" : "height"] ?? "";
  }
  const effectiveW = effective("w");
  const effectiveH = effective("h");
  const hasWOverride = !isDesktop && element.props[keys.w] != null;
  const hasHOverride = !isDesktop && element.props[keys.h] != null;
  function setDim(key, val) {
    updateElementProps(element.id, { [key]: val });
    commitChange("Change image dimensions");
  }
  function clearOverride(key) {
    updateElementProps(element.id, { [key]: void 0 });
    const el = findElementById(element.id);
    if (el) delete el.props[key];
    commitChange("Reset image dimensions");
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: `Width${!isDesktop ? " (" + vp + ")" : ""}`, children: /* @__PURE__ */ u4("div", { class: "prop-dim-row", children: [
      /* @__PURE__ */ u4(
        "input",
        {
          type: "text",
          class: `prop-input ${hasWOverride ? "overridden" : ""}`,
          value: effectiveW,
          placeholder: "auto (e.g. 100%, 300px)",
          onInput: (e4) => setDim(keys.w, e4.target.value),
          onBlur: () => commitChange("Change image width")
        }
      ),
      hasWOverride && /* @__PURE__ */ u4("button", { class: "prop-btn-clear", onClick: () => clearOverride(keys.w), title: "Reset", children: "\xD7" })
    ] }) }),
    /* @__PURE__ */ u4(PropField, { label: `Height${!isDesktop ? " (" + vp + ")" : ""}`, children: /* @__PURE__ */ u4("div", { class: "prop-dim-row", children: [
      /* @__PURE__ */ u4(
        "input",
        {
          type: "text",
          class: `prop-input ${hasHOverride ? "overridden" : ""}`,
          value: effectiveH,
          placeholder: "auto (e.g. 200px, 50vh)",
          onInput: (e4) => setDim(keys.h, e4.target.value),
          onBlur: () => commitChange("Change image height")
        }
      ),
      hasHOverride && /* @__PURE__ */ u4("button", { class: "prop-btn-clear", onClick: () => clearOverride(keys.h), title: "Reset", children: "\xD7" })
    ] }) })
  ] });
}
function ColorField({ element, label }) {
  return /* @__PURE__ */ u4(PropField, { label, children: /* @__PURE__ */ u4(
    ColorSelector,
    {
      value: element.props.color || "",
      onChange: (v4) => {
        updateElementProps(element.id, { color: v4 });
        commitChange("Change color");
      },
      placeholder: "inherit"
    }
  ) });
}
function AlignField({ element }) {
  const textAlign = element.props.textAlign;
  return /* @__PURE__ */ u4(PropField, { label: "Align", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: ALIGN_OPTIONS.map((a4) => /* @__PURE__ */ u4(
    "button",
    {
      class: `prop-btn prop-btn-icon ${textAlign === a4.value ? "active" : ""}`,
      onClick: () => {
        updateElementProps(element.id, { textAlign: a4.value });
        commitChange("Change alignment");
      },
      title: a4.value,
      children: a4.icon
    },
    a4.value
  )) }) });
}
function ButtonProps({ element }) {
  const { text, url, newTab, bgColor, color, borderRadius, fontSize, fullWidth } = element.props;
  const palette = getEffectiveColors();
  function update(p5) {
    updateElementProps(element.id, p5);
    commitChange("Edit button");
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: "Label", children: /* @__PURE__ */ u4(
      "input",
      {
        type: "text",
        class: "prop-input",
        value: text || "",
        onInput: (e4) => updateElementProps(element.id, { text: e4.target.value }),
        onBlur: () => commitChange("Edit button text")
      }
    ) }),
    /* @__PURE__ */ u4(PropField, { label: "Icon", children: /* @__PURE__ */ u4("div", { class: "icon-field-row", children: [
      /* @__PURE__ */ u4(IconPicker, { value: element.props.icon || "", onChange: (v4) => update({ icon: v4 }) }),
      element.props.icon && /* @__PURE__ */ u4("div", { class: "prop-btn-group", style: { marginLeft: 8 }, children: [
        /* @__PURE__ */ u4("button", { class: `prop-btn ${(element.props.iconPosition || "before") === "before" ? "active" : ""}`, onClick: () => update({ iconPosition: "before" }), children: "Before" }),
        /* @__PURE__ */ u4("button", { class: `prop-btn ${element.props.iconPosition === "after" ? "active" : ""}`, onClick: () => update({ iconPosition: "after" }), children: "After" })
      ] })
    ] }) }),
    /* @__PURE__ */ u4(PropField, { label: "Action", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", style: { marginBottom: "6px" }, children: [["link", "Link"], ["submitForm", "Submit Form"], ["redirect", "Redirect"], ["showMessage", "Show Message"]].map(([val, label]) => /* @__PURE__ */ u4(
      "button",
      {
        class: `prop-btn ${(element.props.action || "link") === val ? "active" : ""}`,
        onClick: () => update({ action: val }),
        style: { fontSize: "10px" },
        children: label
      },
      val
    )) }) }),
    (element.props.action || "link") === "link" && /* @__PURE__ */ u4(k, { children: [
      /* @__PURE__ */ u4(PropField, { label: "URL", children: /* @__PURE__ */ u4(
        "input",
        {
          type: "text",
          class: "prop-input",
          value: url || "",
          placeholder: "https://...",
          onInput: (e4) => updateElementProps(element.id, { url: e4.target.value }),
          onBlur: () => commitChange("Edit button URL")
        }
      ) }),
      /* @__PURE__ */ u4(PropField, { label: "Open in new tab", children: /* @__PURE__ */ u4("label", { class: "prop-checkbox", children: [
        /* @__PURE__ */ u4("input", { type: "checkbox", checked: newTab || false, onChange: (e4) => update({ newTab: e4.target.checked }) }),
        /* @__PURE__ */ u4("span", { children: "Open link in new tab" })
      ] }) })
    ] }),
    element.props.action === "submitForm" && /* @__PURE__ */ u4(k, { children: [
      /* @__PURE__ */ u4(PropField, { label: "Form Target", children: /* @__PURE__ */ u4(
        "select",
        {
          class: "prop-input",
          value: element.props.formTarget || "",
          onChange: (e4) => update({ formTarget: e4.target.value }),
          children: [
            /* @__PURE__ */ u4("option", { value: "", children: "Select form..." }),
            rows.value.flatMap((r4) => r4.elements).filter((e4) => e4.type === "form").map((f5) => /* @__PURE__ */ u4("option", { value: f5.id, children: f5.id }, f5.id))
          ]
        }
      ) }),
      /* @__PURE__ */ u4(PropField, { label: "Callback (optional)", children: [
        /* @__PURE__ */ u4(
          "input",
          {
            type: "text",
            class: "prop-input prop-css",
            value: element.props.callbackFn || "",
            placeholder: "window.handleSubmit",
            onInput: (e4) => update({ callbackFn: e4.target.value })
          }
        ),
        /* @__PURE__ */ u4("span", { style: { fontSize: "10px", color: "#999" }, children: "JS function(formData, formEl) \u2192 Promise" })
      ] }),
      /* @__PURE__ */ u4(PropField, { label: "After Submit", children: [
        /* @__PURE__ */ u4("div", { class: "prop-btn-group", style: { marginBottom: "4px" }, children: [
          /* @__PURE__ */ u4("button", { class: `prop-btn ${(element.props.afterSubmit || "message") === "message" ? "active" : ""}`, onClick: () => update({ afterSubmit: "message" }), children: "Message" }),
          /* @__PURE__ */ u4("button", { class: `prop-btn ${element.props.afterSubmit === "redirect" ? "active" : ""}`, onClick: () => update({ afterSubmit: "redirect" }), children: "Redirect" })
        ] }),
        (element.props.afterSubmit || "message") === "message" && /* @__PURE__ */ u4(
          "input",
          {
            type: "text",
            class: "prop-input",
            value: element.props.successMessage || "",
            placeholder: "Thank you!",
            onInput: (e4) => update({ successMessage: e4.target.value })
          }
        ),
        element.props.afterSubmit === "redirect" && /* @__PURE__ */ u4(
          "input",
          {
            type: "text",
            class: "prop-input",
            value: element.props.redirectUrl || "",
            placeholder: "https://...",
            onInput: (e4) => update({ redirectUrl: e4.target.value })
          }
        )
      ] })
    ] }),
    element.props.action === "redirect" && /* @__PURE__ */ u4(PropField, { label: "Redirect URL", children: /* @__PURE__ */ u4(
      "input",
      {
        type: "text",
        class: "prop-input",
        value: element.props.redirectUrl || "",
        placeholder: "https://...",
        onInput: (e4) => update({ redirectUrl: e4.target.value })
      }
    ) }),
    element.props.action === "showMessage" && /* @__PURE__ */ u4(PropField, { label: "Message", children: /* @__PURE__ */ u4(
      "input",
      {
        type: "text",
        class: "prop-input",
        value: element.props.successMessage || "",
        placeholder: "Thank you!",
        onInput: (e4) => update({ successMessage: e4.target.value })
      }
    ) }),
    /* @__PURE__ */ u4(PropField, { label: "Width", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: [
      /* @__PURE__ */ u4("button", { class: `prop-btn ${!fullWidth ? "active" : ""}`, onClick: () => update({ fullWidth: false }), children: "Auto" }),
      /* @__PURE__ */ u4("button", { class: `prop-btn ${fullWidth ? "active" : ""}`, onClick: () => update({ fullWidth: true }), children: "Full Width" })
    ] }) }),
    /* @__PURE__ */ u4(PropField, { label: "Size", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"].map((s4) => /* @__PURE__ */ u4(
      "button",
      {
        class: `prop-btn ${fontSize === s4 ? "active" : ""}`,
        onClick: () => update({ fontSize: s4 }),
        children: s4
      },
      s4
    )) }) }),
    /* @__PURE__ */ u4(PropField, { label: "Background Color", children: /* @__PURE__ */ u4(ColorSelector, { value: bgColor || "", onChange: (v4) => update({ bgColor: v4 }), placeholder: "#4a90d9" }) }),
    /* @__PURE__ */ u4(PropField, { label: "Text Color", children: /* @__PURE__ */ u4(ColorSelector, { value: color || "", onChange: (v4) => update({ color: v4 }), placeholder: "#ffffff" }) }),
    /* @__PURE__ */ u4(PropField, { label: "Border Radius (px)", children: /* @__PURE__ */ u4(
      "input",
      {
        type: "number",
        class: "prop-input",
        value: borderRadius || "6",
        min: 0,
        onInput: (e4) => updateElementProps(element.id, { borderRadius: e4.target.value }),
        onBlur: () => commitChange("Change button radius")
      }
    ) }),
    /* @__PURE__ */ u4(AlignField, { element })
  ] });
}
var FIELD_TYPES = [
  { value: "text", label: "Text" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "number", label: "Number" },
  { value: "textarea", label: "Textarea" },
  { value: "select", label: "Dropdown" },
  { value: "radio", label: "Radio" },
  { value: "checkbox", label: "Checkbox" }
];
var VALIDATIONS = [
  { value: "none", label: "None" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "number", label: "Number" }
];
function FormProps({ element }) {
  const { fields } = element.props;
  function update(p5) {
    updateElementProps(element.id, p5);
    commitChange("Edit form");
  }
  function updateField(fieldId, patch) {
    const newFields = (fields || []).map((f5) => f5.id === fieldId ? { ...f5, ...patch } : f5);
    update({ fields: newFields });
  }
  function addField() {
    const id = "f" + Date.now();
    update({ fields: [...fields || [], { id, type: "text", label: "New Field", placeholder: "", required: false, validation: "none", name: "field_" + id }] });
  }
  function removeField(fieldId) {
    update({ fields: (fields || []).filter((f5) => f5.id !== fieldId) });
  }
  function moveField(fieldId, dir) {
    const list = [...fields || []];
    const idx = list.findIndex((f5) => f5.id === fieldId);
    if (idx < 0) return;
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= list.length) return;
    [list[idx], list[swapIdx]] = [list[swapIdx], list[idx]];
    update({ fields: list });
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: "Form ID", children: [
      /* @__PURE__ */ u4("input", { type: "text", class: "prop-input prop-css", value: element.id, disabled: true, style: { opacity: 0.6 } }),
      /* @__PURE__ */ u4("span", { style: { fontSize: "10px", color: "#999", display: "block", marginTop: "2px" }, children: `Use this ID in a Button's "Submit Form" action` })
    ] }),
    /* @__PURE__ */ u4(PropField, { label: "Form Fields", children: [
      /* @__PURE__ */ u4("div", { class: "form-fields-list", children: (fields || []).map((f5, i5) => /* @__PURE__ */ u4(
        FormFieldEditor,
        {
          field: f5,
          index: i5,
          total: (fields || []).length,
          onChange: (k3, v4) => updateField(f5.id, { [k3]: v4 }),
          onRemove: () => removeField(f5.id),
          onMove: (dir) => moveField(f5.id, dir)
        },
        f5.id
      )) }),
      /* @__PURE__ */ u4("button", { class: "palette-add-btn", onClick: addField, children: "+ Add Field" })
    ] })
  ] });
}
function FormFieldEditor({ field, index, total, onChange, onRemove, onMove }) {
  const hasOptions = field.type === "select" || field.type === "radio";
  function getOptions() {
    const opts = field.options || [];
    return opts.map((o4) => typeof o4 === "string" ? { label: o4, value: o4 } : o4);
  }
  function setOptions(opts) {
    onChange("options", opts);
  }
  function addOption() {
    setOptions([...getOptions(), { label: "Option", value: "option" }]);
  }
  function updateOption(i5, key, val) {
    const opts = getOptions().map((o4, j4) => j4 === i5 ? { ...o4, [key]: val } : o4);
    setOptions(opts);
  }
  function removeOption(i5) {
    setOptions(getOptions().filter((_4, j4) => j4 !== i5));
  }
  return /* @__PURE__ */ u4("div", { class: "form-field-editor", children: [
    /* @__PURE__ */ u4("div", { class: "form-field-header", children: [
      /* @__PURE__ */ u4("select", { class: "form-field-type-select", value: field.type, onChange: (e4) => onChange("type", e4.target.value), children: FIELD_TYPES.map((t4) => /* @__PURE__ */ u4("option", { value: t4.value, children: t4.label }, t4.value)) }),
      /* @__PURE__ */ u4("div", { class: "form-field-actions", children: [
        /* @__PURE__ */ u4("button", { class: "form-field-action", onClick: () => onMove(-1), disabled: index === 0, title: "Move up", children: "\u2191" }),
        /* @__PURE__ */ u4("button", { class: "form-field-action", onClick: () => onMove(1), disabled: index === total - 1, title: "Move down", children: "\u2193" }),
        /* @__PURE__ */ u4("button", { class: "form-field-action form-field-remove", onClick: onRemove, title: "Remove", children: "\xD7" })
      ] })
    ] }),
    /* @__PURE__ */ u4(
      "input",
      {
        type: "text",
        class: "prop-input",
        value: field.label || "",
        placeholder: "Label",
        onInput: (e4) => onChange("label", e4.target.value),
        style: { marginBottom: "3px" }
      }
    ),
    /* @__PURE__ */ u4(
      "input",
      {
        type: "text",
        class: "prop-input",
        value: field.name || "",
        placeholder: "Field name (for form data)",
        onInput: (e4) => onChange("name", e4.target.value),
        style: { marginBottom: "3px", fontFamily: "monospace", fontSize: "11px" }
      }
    ),
    field.type !== "checkbox" && field.type !== "radio" && field.type !== "select" && /* @__PURE__ */ u4(
      "input",
      {
        type: "text",
        class: "prop-input",
        value: field.placeholder || "",
        placeholder: "Placeholder",
        onInput: (e4) => onChange("placeholder", e4.target.value),
        style: { marginBottom: "3px" }
      }
    ),
    field.type === "select" && /* @__PURE__ */ u4(
      "input",
      {
        type: "text",
        class: "prop-input",
        value: field.placeholder || "",
        placeholder: "Placeholder (e.g. Select...)",
        onInput: (e4) => onChange("placeholder", e4.target.value),
        style: { marginBottom: "3px" }
      }
    ),
    hasOptions && /* @__PURE__ */ u4("div", { class: "form-options-list", children: [
      getOptions().map((opt, i5) => /* @__PURE__ */ u4("div", { class: "form-option-row", children: [
        /* @__PURE__ */ u4(
          "input",
          {
            type: "text",
            class: "prop-input",
            value: opt.label,
            placeholder: "Label",
            onInput: (e4) => updateOption(i5, "label", e4.target.value),
            style: { flex: 1 }
          }
        ),
        /* @__PURE__ */ u4(
          "input",
          {
            type: "text",
            class: "prop-input prop-css",
            value: opt.value,
            placeholder: "Value",
            onInput: (e4) => updateOption(i5, "value", e4.target.value),
            style: { flex: 1 }
          }
        ),
        /* @__PURE__ */ u4("button", { class: "form-field-action form-field-remove", onClick: () => removeOption(i5), children: "\xD7" })
      ] }, i5)),
      /* @__PURE__ */ u4("button", { class: "palette-add-btn", onClick: addOption, style: { fontSize: "10px", padding: "3px" }, children: "+ Option" })
    ] }),
    /* @__PURE__ */ u4("div", { class: "form-field-flags", children: [
      /* @__PURE__ */ u4("label", { class: "prop-checkbox", children: [
        /* @__PURE__ */ u4("input", { type: "checkbox", checked: field.required, onChange: (e4) => onChange("required", e4.target.checked) }),
        /* @__PURE__ */ u4("span", { children: "Required" })
      ] }),
      field.type === "text" && /* @__PURE__ */ u4("select", { class: "form-field-type-select", value: field.validation || "none", onChange: (e4) => onChange("validation", e4.target.value), style: { marginLeft: "8px" }, children: VALIDATIONS.map((v4) => /* @__PURE__ */ u4("option", { value: v4.value, children: v4.label }, v4.value)) })
    ] }),
    /* @__PURE__ */ u4(
      "input",
      {
        type: "text",
        class: "prop-input prop-css",
        value: field.customValidator || "",
        placeholder: "Custom validator: window.validateField",
        onInput: (e4) => onChange("customValidator", e4.target.value),
        style: { marginTop: "3px", fontSize: "10px" }
      }
    ),
    field.customValidator && /* @__PURE__ */ u4("span", { style: { fontSize: "9px", color: "#999" }, children: 'async fn(value, fieldName) \u2192 null | "error message"' })
  ] });
}
var FONT_WEIGHTS = ["300", "400", "500", "600", "700", "800"];
function ListProps({ element }) {
  const { listType, items, icon, iconColor, fontSize, fontWeight, itemPadding, itemBgColor, itemRadius, itemGap } = element.props;
  const palette = getEffectiveColors();
  function update(p5) {
    updateElementProps(element.id, p5);
    commitChange("Edit list");
  }
  function updateItem(idx, patch) {
    const newItems = (items || []).map((item, i5) => i5 === idx ? { ...item, ...patch } : item);
    update({ items: newItems });
  }
  function addItem() {
    update({ items: [...items || [], { id: "li" + Date.now(), text: "New item" }] });
  }
  function removeItem(idx) {
    update({ items: (items || []).filter((_4, i5) => i5 !== idx) });
  }
  function moveItem(idx, dir) {
    const list = [...items || []];
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= list.length) return;
    [list[idx], list[swapIdx]] = [list[swapIdx], list[idx]];
    update({ items: list });
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: "Type", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: [
      /* @__PURE__ */ u4("button", { class: `prop-btn ${(listType || "ul") === "ul" ? "active" : ""}`, onClick: () => update({ listType: "ul" }), children: "Unordered" }),
      /* @__PURE__ */ u4("button", { class: `prop-btn ${listType === "ol" ? "active" : ""}`, onClick: () => update({ listType: "ol" }), children: "Ordered" })
    ] }) }),
    /* @__PURE__ */ u4(PropField, { label: "Default Icon", children: [
      /* @__PURE__ */ u4(IconPicker, { value: icon || "", onChange: (v4) => update({ icon: v4 }) }),
      icon && /* @__PURE__ */ u4(k, { children: [
        /* @__PURE__ */ u4("div", { class: "prop-color-row", style: { marginTop: "4px" }, children: [
          /* @__PURE__ */ u4("input", { type: "color", class: "prop-color", value: iconColor || "#000000", onInput: (e4) => update({ iconColor: e4.target.value }) }),
          /* @__PURE__ */ u4("input", { type: "text", class: "prop-input", value: iconColor || "", placeholder: "currentColor", onInput: (e4) => update({ iconColor: e4.target.value }) })
        ] }),
        /* @__PURE__ */ u4("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }, children: [
          /* @__PURE__ */ u4("span", { style: { fontSize: "11px", color: "#999" }, children: "Weight" }),
          /* @__PURE__ */ u4(
            "input",
            {
              type: "range",
              min: 0.5,
              max: 4,
              step: 0.25,
              value: element.props.iconWeight || 2,
              onInput: (e4) => update({ iconWeight: parseFloat(e4.target.value) }),
              style: { flex: 1 }
            }
          ),
          /* @__PURE__ */ u4("span", { style: { fontSize: "11px", fontFamily: "monospace", color: "#666", minWidth: "24px" }, children: element.props.iconWeight || 2 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u4(PropField, { label: "Font Size", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: ["xs", "sm", "base", "lg", "xl", "2xl"].map((s4) => /* @__PURE__ */ u4("button", { class: `prop-btn ${(fontSize || "base") === s4 ? "active" : ""}`, onClick: () => update({ fontSize: s4 }), children: s4 }, s4)) }) }),
    /* @__PURE__ */ u4(PropField, { label: "Font Weight", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: FONT_WEIGHTS.map((w5) => /* @__PURE__ */ u4("button", { class: `prop-btn ${(fontWeight || "400") === w5 ? "active" : ""}`, onClick: () => update({ fontWeight: w5 }), children: w5 }, w5)) }) }),
    /* @__PURE__ */ u4(PropField, { label: "Item Background", children: /* @__PURE__ */ u4(ColorSelector, { value: itemBgColor || "", onChange: (v4) => update({ itemBgColor: v4 }), placeholder: "none" }) }),
    /* @__PURE__ */ u4(PropField, { label: "Item Padding", children: /* @__PURE__ */ u4("input", { type: "text", class: "prop-input", value: itemPadding || "", placeholder: "8px 12px", onInput: (e4) => update({ itemPadding: e4.target.value }) }) }),
    /* @__PURE__ */ u4(PropField, { label: "Item Radius (px)", children: /* @__PURE__ */ u4("input", { type: "number", class: "prop-input", value: itemRadius || "0", min: 0, onInput: (e4) => update({ itemRadius: e4.target.value }) }) }),
    /* @__PURE__ */ u4(PropField, { label: "Item Shadow", children: /* @__PURE__ */ u4(BoxShadowEditor, { value: element.props.itemShadow, onChange: (v4) => update({ itemShadow: v4 }) }) }),
    /* @__PURE__ */ u4(PropField, { label: "Item Gap (px)", children: /* @__PURE__ */ u4("input", { type: "number", class: "prop-input", value: itemGap || "4", min: 0, onInput: (e4) => update({ itemGap: e4.target.value }) }) }),
    /* @__PURE__ */ u4(ColorField, { element, label: "Text Color" }),
    /* @__PURE__ */ u4(PropField, { label: "Items", children: [
      /* @__PURE__ */ u4("div", { class: "form-fields-list", children: (items || []).map((item, i5) => /* @__PURE__ */ u4("div", { class: "list-item-editor", children: [
        /* @__PURE__ */ u4("div", { class: "form-field-header", children: [
          /* @__PURE__ */ u4(IconPicker, { value: item.icon ?? "", onChange: (v4) => updateItem(i5, { icon: v4 || void 0 }) }),
          /* @__PURE__ */ u4("div", { class: "form-field-actions", children: [
            /* @__PURE__ */ u4("button", { class: "form-field-action", onClick: () => moveItem(i5, -1), disabled: i5 === 0, children: "\u2191" }),
            /* @__PURE__ */ u4("button", { class: "form-field-action", onClick: () => moveItem(i5, 1), disabled: i5 === (items || []).length - 1, children: "\u2193" }),
            /* @__PURE__ */ u4("button", { class: "form-field-action form-field-remove", onClick: () => removeItem(i5), children: "\xD7" })
          ] })
        ] }),
        /* @__PURE__ */ u4(
          "input",
          {
            type: "text",
            class: "prop-input",
            value: item.text || "",
            placeholder: "Item text",
            onInput: (e4) => updateItem(i5, { text: e4.target.value }),
            style: { marginBottom: "3px" }
          }
        ),
        /* @__PURE__ */ u4("div", { class: "prop-color-row", children: [
          /* @__PURE__ */ u4(
            "input",
            {
              type: "color",
              class: "prop-color",
              value: item.bgColor || itemBgColor || "#ffffff",
              onInput: (e4) => updateItem(i5, { bgColor: e4.target.value })
            }
          ),
          /* @__PURE__ */ u4(
            "input",
            {
              type: "text",
              class: "prop-input",
              value: item.bgColor || "",
              placeholder: "inherit",
              onInput: (e4) => updateItem(i5, { bgColor: e4.target.value })
            }
          ),
          item.bgColor && /* @__PURE__ */ u4("button", { class: "prop-btn-clear", onClick: () => updateItem(i5, { bgColor: "" }), children: "\xD7" })
        ] })
      ] }, item.id || i5)) }),
      /* @__PURE__ */ u4("button", { class: "palette-add-btn", onClick: addItem, children: "+ Add Item" })
    ] })
  ] });
}
var TIMEZONES = [
  "Asia/Jerusalem",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Australia/Sydney",
  "Pacific/Auckland",
  "UTC"
];
function TimerProps({ element }) {
  const { targetDate, timezone, bgColor, color, labelDays, labelHours, labelMinutes, labelSeconds, expiredText, borderRadius } = element.props;
  const palette = getEffectiveColors();
  function update(p5) {
    updateElementProps(element.id, p5);
    commitChange("Edit timer");
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: "Target Date & Time", children: /* @__PURE__ */ u4(
      "input",
      {
        type: "datetime-local",
        class: "prop-input",
        value: targetDate || "",
        onInput: (e4) => update({ targetDate: e4.target.value })
      }
    ) }),
    /* @__PURE__ */ u4(PropField, { label: "Timezone", children: /* @__PURE__ */ u4("select", { class: "prop-input", value: timezone || "Asia/Jerusalem", onChange: (e4) => update({ timezone: e4.target.value }), children: TIMEZONES.map((tz) => /* @__PURE__ */ u4("option", { value: tz, children: tz }, tz)) }) }),
    /* @__PURE__ */ u4(PropField, { label: "Box Background", children: /* @__PURE__ */ u4(ColorSelector, { value: bgColor || "", onChange: (v4) => update({ bgColor: v4 }), placeholder: "#eef2f7" }) }),
    /* @__PURE__ */ u4(PropField, { label: "Text Color", children: /* @__PURE__ */ u4(ColorSelector, { value: color || "", onChange: (v4) => update({ color: v4 }), placeholder: "#1a2744" }) }),
    /* @__PURE__ */ u4(PropField, { label: "Box Radius (px)", children: /* @__PURE__ */ u4(
      "input",
      {
        type: "number",
        class: "prop-input",
        value: borderRadius || "12",
        min: 0,
        onInput: (e4) => updateElementProps(element.id, { borderRadius: e4.target.value }),
        onBlur: () => commitChange("Change timer radius")
      }
    ) }),
    /* @__PURE__ */ u4(PropField, { label: "Box Width (%)", children: /* @__PURE__ */ u4("div", { class: "prop-dim-row", children: [
      /* @__PURE__ */ u4(
        "input",
        {
          type: "range",
          min: 10,
          max: 25,
          value: element.props.boxWidth || 20,
          onInput: (e4) => update({ boxWidth: parseInt(e4.target.value) }),
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ u4("span", { style: { fontSize: "12px", color: "#666", minWidth: "30px", textAlign: "right" }, children: [
        element.props.boxWidth || 20,
        "%"
      ] })
    ] }) }),
    /* @__PURE__ */ u4(PropField, { label: "Labels", children: /* @__PURE__ */ u4("div", { class: "timer-labels-grid", children: [
      /* @__PURE__ */ u4("input", { type: "text", class: "prop-input", value: labelDays || "", placeholder: "Days", onInput: (e4) => update({ labelDays: e4.target.value }) }),
      /* @__PURE__ */ u4("input", { type: "text", class: "prop-input", value: labelHours || "", placeholder: "Hours", onInput: (e4) => update({ labelHours: e4.target.value }) }),
      /* @__PURE__ */ u4("input", { type: "text", class: "prop-input", value: labelMinutes || "", placeholder: "Minutes", onInput: (e4) => update({ labelMinutes: e4.target.value }) }),
      /* @__PURE__ */ u4("input", { type: "text", class: "prop-input", value: labelSeconds || "", placeholder: "Seconds", onInput: (e4) => update({ labelSeconds: e4.target.value }) })
    ] }) }),
    /* @__PURE__ */ u4(PropField, { label: "Expired Text", children: /* @__PURE__ */ u4(
      "input",
      {
        type: "text",
        class: "prop-input",
        value: expiredText || "",
        placeholder: "Time is up!",
        onInput: (e4) => update({ expiredText: e4.target.value })
      }
    ) })
  ] });
}
function GridProps({ element }) {
  function update(p5) {
    updateElementProps(element.id, p5);
    commitChange("Edit grid");
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: "Width", children: [
      /* @__PURE__ */ u4("div", { class: "prop-btn-group", style: { marginBottom: "6px" }, children: [
        /* @__PURE__ */ u4("button", { class: `prop-btn ${!element.props.maxWidth ? "active" : ""}`, onClick: () => update({ maxWidth: "" }), children: "Full" }),
        /* @__PURE__ */ u4("button", { class: `prop-btn ${element.props.maxWidth ? "active" : ""}`, onClick: () => {
          if (!element.props.maxWidth) update({ maxWidth: "1200px" });
        }, children: "Set Width" })
      ] }),
      element.props.maxWidth && /* @__PURE__ */ u4(
        "input",
        {
          type: "text",
          class: "prop-input",
          value: element.props.maxWidth,
          placeholder: "e.g. 1200px, 960px, 80%",
          onInput: (e4) => updateElementProps(element.id, { maxWidth: e4.target.value }),
          onBlur: () => commitChange("Change grid max width")
        }
      )
    ] }),
    /* @__PURE__ */ u4(GapFields, { props: element.props, onUpdate: (k3, v4) => {
      updateElementProps(element.id, { [k3]: v4 });
      commitChange("Edit gap");
    } })
  ] });
}
function ContainerProps({ row }) {
  const props = row.props || {};
  const { bgColor } = props;
  const palette = getEffectiveColors();
  function update(p5) {
    updateRowProps(row.id, p5);
    commitChange("Edit container");
  }
  function setBg(val) {
    updateRowProps(row.id, { bgColor: val });
    commitChange("Change container background");
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: "Width", children: [
      /* @__PURE__ */ u4("div", { class: "prop-btn-group", style: { marginBottom: "6px" }, children: [
        /* @__PURE__ */ u4("button", { class: `prop-btn ${!props.maxWidth ? "active" : ""}`, onClick: () => update({ maxWidth: "" }), children: "Full" }),
        /* @__PURE__ */ u4("button", { class: `prop-btn ${props.maxWidth ? "active" : ""}`, onClick: () => {
          if (!props.maxWidth) update({ maxWidth: "1200px" });
        }, children: "Set Width" })
      ] }),
      props.maxWidth && /* @__PURE__ */ u4(
        "input",
        {
          type: "text",
          class: "prop-input",
          value: props.maxWidth,
          placeholder: "e.g. 1200px, 960px, 80%",
          onInput: (e4) => updateRowProps(row.id, { maxWidth: e4.target.value }),
          onBlur: () => commitChange("Change container max width")
        }
      )
    ] }),
    /* @__PURE__ */ u4(GapFields, { props, onUpdate: (k3, v4) => {
      updateRowProps(row.id, { [k3]: v4 });
      commitChange("Edit gap");
    } }),
    /* @__PURE__ */ u4(
      AlignmentPicker,
      {
        value: props.align,
        onChange: (val) => update({ align: val })
      }
    ),
    /* @__PURE__ */ u4(
      DirectionPicker,
      {
        value: props.direction,
        onChange: (val) => update({ direction: val })
      }
    ),
    /* @__PURE__ */ u4(PropField, { label: "Background Color", children: /* @__PURE__ */ u4(ColorSelector, { value: bgColor || "", onChange: (v4) => {
      updateRowProps(row.id, { bgColor: v4 });
      commitChange("Change container background");
    }, placeholder: "none" }) })
  ] });
}
function CellProps({ cell }) {
  const props = cell.props || {};
  function update(p5) {
    updateCellProps(cell.id, p5);
    commitChange("Edit cell");
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(VisibilityField, { props, onUpdate: (k3, v4) => {
      updateCellProps(cell.id, { [k3]: v4 });
      commitChange("Edit visibility");
    } }),
    /* @__PURE__ */ u4(GapFields, { props, onUpdate: (k3, v4) => {
      updateCellProps(cell.id, { [k3]: v4 });
      commitChange("Edit gap");
    } }),
    /* @__PURE__ */ u4(AlignmentPicker, { value: props.align, onChange: (val) => update({ align: val }) }),
    /* @__PURE__ */ u4(DirectionPicker, { value: props.direction, onChange: (val) => update({ direction: val }) }),
    /* @__PURE__ */ u4(BorderFields, { props, onUpdate: (k3, v4) => {
      updateCellProps(cell.id, { [k3]: v4 });
      commitChange("Edit border");
    } }),
    /* @__PURE__ */ u4(PropField, { label: "Box Shadow", children: /* @__PURE__ */ u4(BoxShadowEditor, { value: props.boxShadow, onChange: (v4) => {
      updateCellProps(cell.id, { boxShadow: v4 });
      commitChange("Edit shadow");
    } }) }),
    /* @__PURE__ */ u4(SpacingFields, { label: "padding", props, onUpdate: (k3, v4) => {
      updateCellProps(cell.id, { [k3]: v4 });
      commitChange("Edit padding");
    } }),
    /* @__PURE__ */ u4(SpacingFields, { label: "margin", props, onUpdate: (k3, v4) => {
      updateCellProps(cell.id, { [k3]: v4 });
      commitChange("Edit margin");
    } }),
    /* @__PURE__ */ u4(
      CssEditor,
      {
        value: props.customCss || "",
        selector: "selector",
        onChange: (v4) => updateCellProps(cell.id, { customCss: v4 }),
        onBlur: () => commitChange("Edit cell CSS")
      }
    )
  ] });
}
var SIDES = ["top", "right", "bottom", "left"];
var VP_PREFIX = { desktop: "", tablet: "tablet_", mobile: "mobile_" };
function SpacingFields({ props, onUpdate, label }) {
  const vp = viewportMode.value;
  const prefix = VP_PREFIX[vp];
  const key = prefix + label;
  function getEffective() {
    if (vp === "mobile") return props["mobile_" + label] || props["tablet_" + label] || props[label];
    if (vp === "tablet") return props["tablet_" + label] || props[label];
    return props[label];
  }
  const raw = props[key];
  const effective = getEffective() || { top: 0, right: 0, bottom: 0, left: 0, linked: true };
  const hasOverride = vp !== "desktop" && !!raw;
  function set(newVal) {
    onUpdate(key, newVal);
  }
  function onSideChange(side, val) {
    const num = val === "" ? 0 : val;
    if (effective.linked) {
      set({ ...effective, top: num, right: num, bottom: num, left: num });
    } else {
      set({ ...effective, [side]: num });
    }
  }
  function toggleLinked() {
    set({ ...effective, linked: !effective.linked });
  }
  function clearOverride() {
    onUpdate(key, void 0);
  }
  const isDesktop = vp === "desktop";
  return /* @__PURE__ */ u4(PropField, { label: /* @__PURE__ */ u4(k, { children: [
    label.charAt(0).toUpperCase() + label.slice(1),
    !isDesktop && /* @__PURE__ */ u4("span", { class: "spacing-vp-label", children: [
      " (",
      vp,
      ")"
    ] }),
    hasOverride && /* @__PURE__ */ u4("button", { class: "settings-reset", onClick: clearOverride, title: "Reset", children: "\xD7" })
  ] }), children: /* @__PURE__ */ u4("div", { class: `spacing-box ${hasOverride ? "overridden" : ""}`, children: [
    SIDES.map((side) => /* @__PURE__ */ u4("div", { class: "spacing-side", children: [
      /* @__PURE__ */ u4(
        "input",
        {
          type: "number",
          class: "spacing-input",
          value: effective[side] ?? 0,
          onInput: (e4) => onSideChange(side, parseInt(e4.target.value) || 0)
        }
      ),
      /* @__PURE__ */ u4("span", { class: "spacing-side-label", children: side.charAt(0).toUpperCase() })
    ] }, side)),
    /* @__PURE__ */ u4("button", { class: `spacing-link-btn ${effective.linked ? "linked" : ""}`, onClick: toggleLinked, title: effective.linked ? "Unlink sides" : "Link sides", children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: effective.linked ? /* @__PURE__ */ u4(k, { children: [
      /* @__PURE__ */ u4("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      /* @__PURE__ */ u4("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    ] }) : /* @__PURE__ */ u4(k, { children: [
      /* @__PURE__ */ u4("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
      /* @__PURE__ */ u4("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
      /* @__PURE__ */ u4("line", { x1: "8", x2: "8", y1: "2", y2: "5" }),
      /* @__PURE__ */ u4("line", { x1: "2", x2: "5", y1: "8", y2: "8" }),
      /* @__PURE__ */ u4("line", { x1: "16", x2: "16", y1: "19", y2: "22" }),
      /* @__PURE__ */ u4("line", { x1: "19", x2: "22", y1: "16", y2: "16" })
    ] }) }) })
  ] }) });
}
function GapFields({ props, onUpdate }) {
  const vp = viewportMode.value;
  const prefix = VP_PREFIX[vp];
  const rowKey = prefix + "rowGap";
  const colKey = prefix + "colGap";
  function resolve(prop) {
    if (vp === "mobile") return props["mobile_" + prop] ?? props["tablet_" + prop] ?? props[prop];
    if (vp === "tablet") return props["tablet_" + prop] ?? props[prop];
    return props[prop];
  }
  const effectiveRow = resolve("rowGap") ?? 0;
  const effectiveCol = resolve("colGap") ?? 0;
  const hasRowOverride = vp !== "desktop" && props[rowKey] != null;
  const hasColOverride = vp !== "desktop" && props[colKey] != null;
  const isDesktop = vp === "desktop";
  return /* @__PURE__ */ u4(PropField, { label: /* @__PURE__ */ u4(k, { children: [
    "Gap",
    !isDesktop && /* @__PURE__ */ u4("span", { class: "spacing-vp-label", children: [
      " (",
      vp,
      ")"
    ] })
  ] }), children: /* @__PURE__ */ u4("div", { class: "gap-row", children: [
    /* @__PURE__ */ u4("div", { class: "gap-field", children: [
      /* @__PURE__ */ u4("label", { class: "gap-label", children: "Row" }),
      /* @__PURE__ */ u4("div", { class: "gap-input-wrap", children: [
        /* @__PURE__ */ u4(
          "input",
          {
            type: "number",
            class: `spacing-input ${hasRowOverride ? "overridden" : ""}`,
            value: effectiveRow,
            min: 0,
            onInput: (e4) => onUpdate(rowKey, parseInt(e4.target.value) || 0)
          }
        ),
        hasRowOverride && /* @__PURE__ */ u4("button", { class: "prop-btn-clear", onClick: () => onUpdate(rowKey, void 0), title: "Reset", children: "\xD7" })
      ] })
    ] }),
    /* @__PURE__ */ u4("div", { class: "gap-field", children: [
      /* @__PURE__ */ u4("label", { class: "gap-label", children: "Col" }),
      /* @__PURE__ */ u4("div", { class: "gap-input-wrap", children: [
        /* @__PURE__ */ u4(
          "input",
          {
            type: "number",
            class: `spacing-input ${hasColOverride ? "overridden" : ""}`,
            value: effectiveCol,
            min: 0,
            onInput: (e4) => onUpdate(colKey, parseInt(e4.target.value) || 0)
          }
        ),
        hasColOverride && /* @__PURE__ */ u4("button", { class: "prop-btn-clear", onClick: () => onUpdate(colKey, void 0), title: "Reset", children: "\xD7" })
      ] })
    ] }),
    /* @__PURE__ */ u4("span", { class: "gap-unit", children: "px" })
  ] }) });
}
var BORDER_STYLES = ["none", "solid", "dashed", "dotted"];
var CORNERS = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
var CORNER_LABELS = { topLeft: "TL", topRight: "TR", bottomRight: "BR", bottomLeft: "BL" };
function BorderFields({ props, onUpdate }) {
  const vp = viewportMode.value;
  const prefix = VP_PREFIX[vp];
  const borderKey = prefix + "border";
  const radiusKey = prefix + "borderRadius";
  function resolveBorder2() {
    if (vp === "mobile") return props.mobile_border || props.tablet_border || props.border;
    if (vp === "tablet") return props.tablet_border || props.border;
    return props.border;
  }
  function resolveRadius() {
    if (vp === "mobile") return props.mobile_borderRadius || props.tablet_borderRadius || props.borderRadius;
    if (vp === "tablet") return props.tablet_borderRadius || props.borderRadius;
    return props.borderRadius;
  }
  const border = resolveBorder2() || { width: 0, style: "none", color: "#000000" };
  const radius = resolveRadius() || { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0, linked: true };
  const hasBorderOverride = vp !== "desktop" && !!props[borderKey];
  const hasRadiusOverride = vp !== "desktop" && !!props[radiusKey];
  const isDesktop = vp === "desktop";
  const palette = getEffectiveColors();
  function setBorder(patch) {
    onUpdate(borderKey, { ...border, ...patch });
  }
  function setRadius(corner, val) {
    const num = parseInt(val) || 0;
    if (radius.linked) {
      onUpdate(radiusKey, { ...radius, topLeft: num, topRight: num, bottomRight: num, bottomLeft: num });
    } else {
      onUpdate(radiusKey, { ...radius, [corner]: num });
    }
  }
  function toggleRadiusLinked() {
    onUpdate(radiusKey, { ...radius, linked: !radius.linked });
  }
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(PropField, { label: /* @__PURE__ */ u4(k, { children: [
      "Border",
      !isDesktop && /* @__PURE__ */ u4("span", { class: "spacing-vp-label", children: [
        " (",
        vp,
        ")"
      ] }),
      hasBorderOverride && /* @__PURE__ */ u4("button", { class: "settings-reset", onClick: () => onUpdate(borderKey, void 0), title: "Reset", children: "\xD7" })
    ] }), children: /* @__PURE__ */ u4("div", { class: `border-controls ${hasBorderOverride ? "overridden" : ""}`, children: [
      /* @__PURE__ */ u4("div", { class: "border-row", children: [
        /* @__PURE__ */ u4(
          "input",
          {
            type: "number",
            class: "spacing-input",
            value: border.width ?? 0,
            min: 0,
            onInput: (e4) => setBorder({ width: parseInt(e4.target.value) || 0 })
          }
        ),
        /* @__PURE__ */ u4("span", { class: "border-unit", children: "px" }),
        /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: BORDER_STYLES.map((s4) => /* @__PURE__ */ u4("button", { class: `prop-btn ${border.style === s4 ? "active" : ""}`, onClick: () => setBorder({ style: s4 }), style: { fontSize: "10px", padding: "3px 6px" }, children: s4 }, s4)) })
      ] }),
      /* @__PURE__ */ u4("div", { style: { marginTop: "4px" }, children: /* @__PURE__ */ u4(ColorSelector, { value: border.color || "", onChange: (v4) => setBorder({ color: v4 }), placeholder: "#000000" }) })
    ] }) }),
    /* @__PURE__ */ u4(PropField, { label: /* @__PURE__ */ u4(k, { children: [
      "Border Radius",
      !isDesktop && /* @__PURE__ */ u4("span", { class: "spacing-vp-label", children: [
        " (",
        vp,
        ")"
      ] }),
      hasRadiusOverride && /* @__PURE__ */ u4("button", { class: "settings-reset", onClick: () => onUpdate(radiusKey, void 0), title: "Reset", children: "\xD7" })
    ] }), children: /* @__PURE__ */ u4("div", { class: `spacing-box ${hasRadiusOverride ? "overridden" : ""}`, children: [
      CORNERS.map((c4) => /* @__PURE__ */ u4("div", { class: "spacing-side", children: [
        /* @__PURE__ */ u4(
          "input",
          {
            type: "number",
            class: "spacing-input",
            value: radius[c4] ?? 0,
            min: 0,
            onInput: (e4) => setRadius(c4, e4.target.value)
          }
        ),
        /* @__PURE__ */ u4("span", { class: "spacing-side-label", children: CORNER_LABELS[c4] })
      ] }, c4)),
      /* @__PURE__ */ u4("button", { class: `spacing-link-btn ${radius.linked ? "linked" : ""}`, onClick: toggleRadiusLinked, title: radius.linked ? "Unlink corners" : "Link corners", children: /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: radius.linked ? /* @__PURE__ */ u4(k, { children: [
        /* @__PURE__ */ u4("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
        /* @__PURE__ */ u4("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
      ] }) : /* @__PURE__ */ u4(k, { children: [
        /* @__PURE__ */ u4("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
        /* @__PURE__ */ u4("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
        /* @__PURE__ */ u4("line", { x1: "8", x2: "8", y1: "2", y2: "5" }),
        /* @__PURE__ */ u4("line", { x1: "2", x2: "5", y1: "8", y2: "8" }),
        /* @__PURE__ */ u4("line", { x1: "16", x2: "16", y1: "19", y2: "22" }),
        /* @__PURE__ */ u4("line", { x1: "19", x2: "22", y1: "16", y2: "16" })
      ] }) }) })
    ] }) })
  ] });
}
function VisibilityField({ props, onUpdate }) {
  const hide = props.hideOn || {};
  function toggle(vp) {
    const next = { ...hide, [vp]: !hide[vp] };
    for (const k3 of Object.keys(next)) {
      if (!next[k3]) delete next[k3];
    }
    onUpdate("hideOn", Object.keys(next).length ? next : void 0);
  }
  return /* @__PURE__ */ u4(PropField, { label: "Visibility", children: /* @__PURE__ */ u4("div", { class: "visibility-row", children: ["desktop", "tablet", "mobile"].map((vp) => /* @__PURE__ */ u4(
    "button",
    {
      class: `visibility-btn ${hide[vp] ? "hidden-vp" : "visible-vp"}`,
      onClick: () => toggle(vp),
      title: hide[vp] ? `Hidden on ${vp}` : `Visible on ${vp}`,
      children: [
        /* @__PURE__ */ u4(VisibilityIcon, { vp, hidden: !!hide[vp] }),
        /* @__PURE__ */ u4("span", { children: vp.charAt(0).toUpperCase() + vp.slice(1) })
      ]
    },
    vp
  )) }) });
}
function VisibilityIcon({ vp, hidden }) {
  const s4 = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
  if (hidden) {
    return /* @__PURE__ */ u4("svg", { ...s4, children: [
      /* @__PURE__ */ u4("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }),
      /* @__PURE__ */ u4("path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }),
      /* @__PURE__ */ u4("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }),
      /* @__PURE__ */ u4("path", { d: "m2 2 20 20" })
    ] });
  }
  return /* @__PURE__ */ u4("svg", { ...s4, children: [
    /* @__PURE__ */ u4("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }),
    /* @__PURE__ */ u4("circle", { cx: "12", cy: "12", r: "3" })
  ] });
}
function CssEditor({ value, selector, onChange, onBlur }) {
  return /* @__PURE__ */ u4(PropField, { label: "Custom CSS", children: /* @__PURE__ */ u4("div", { class: "css-editor-wrap", children: [
    /* @__PURE__ */ u4("div", { class: "css-editor-selector", children: [
      selector,
      " ",
      "{"
    ] }),
    /* @__PURE__ */ u4(
      "textarea",
      {
        class: "prop-textarea prop-css css-editor-textarea",
        value,
        placeholder: "font-weight: bold;\nborder-radius: 8px;",
        onInput: (e4) => onChange(e4.target.value),
        onBlur,
        rows: 5
      }
    ),
    /* @__PURE__ */ u4("div", { class: "css-editor-selector", children: "}" })
  ] }) });
}
var ALIGN_POSITIONS = [
  ["top-left", "top-center", "top-right"],
  ["middle-left", "middle-center", "middle-right"],
  ["bottom-left", "bottom-center", "bottom-right"]
];
function AlignmentPicker({ value, onChange }) {
  return /* @__PURE__ */ u4(PropField, { label: "Content Alignment", children: /* @__PURE__ */ u4("div", { class: "align-grid", children: ALIGN_POSITIONS.map((row) => row.map((pos) => /* @__PURE__ */ u4(
    "button",
    {
      class: `align-cell ${value === pos ? "active" : ""}`,
      onClick: () => onChange(value === pos ? "" : pos),
      title: pos,
      children: /* @__PURE__ */ u4("span", { class: "align-dot" })
    },
    pos
  ))) }) });
}
function DirectionPicker({ value, onChange }) {
  return /* @__PURE__ */ u4(PropField, { label: "Direction", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: [
    ["ltr", "rtl"].map((d5) => /* @__PURE__ */ u4(
      "button",
      {
        class: `prop-btn ${value === d5 ? "active" : ""}`,
        onClick: () => onChange(value === d5 ? "" : d5),
        children: d5.toUpperCase()
      },
      d5
    )),
    value && /* @__PURE__ */ u4("button", { class: "prop-btn-clear", onClick: () => onChange(""), title: "Reset to page default", children: "\xD7" })
  ] }) });
}
function DirectionField({ element }) {
  const dir = element.props.direction;
  return /* @__PURE__ */ u4(PropField, { label: "Direction", children: /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: [
    ["ltr", "rtl"].map((d5) => /* @__PURE__ */ u4(
      "button",
      {
        class: `prop-btn ${dir === d5 ? "active" : ""}`,
        onClick: () => {
          updateElementProps(element.id, { direction: dir === d5 ? "" : d5 });
          commitChange("Change direction");
        },
        children: d5.toUpperCase()
      },
      d5
    )),
    dir && /* @__PURE__ */ u4("button", { class: "prop-btn-clear", onClick: () => {
      updateElementProps(element.id, { direction: "" });
      commitChange("Reset direction");
    }, title: "Reset", children: "\xD7" })
  ] }) });
}
function PropField({ label, children }) {
  return /* @__PURE__ */ u4("div", { class: "prop-field", children: [
    /* @__PURE__ */ u4("label", { class: "prop-label", children: label }),
    children
  ] });
}

// src/components/FontPicker.jsx
function FontPicker({ value, onChange, className }) {
  const [fonts, setFonts] = d2([]);
  const [open, setOpen] = d2(false);
  const [search, setSearch] = d2("");
  const [loaded, setLoaded] = d2(false);
  const wrapRef = A2(null);
  const searchRef = A2(null);
  const searchTimer = A2(null);
  y2(() => {
    if (value && !value.includes(",")) loadGoogleFontCSS(value);
  }, [value]);
  function fetchFonts(q4) {
    const { ajaxUrl, nonce } = window.nomentor;
    const params = new URLSearchParams({ action: "nomentor_fonts", nonce, search: q4 || "" });
    fetch(`${ajaxUrl}?${params}`).then((r4) => r4.json()).then((r4) => {
      if (r4.success) {
        setFonts(r4.data);
        r4.data.forEach((f5) => {
          if (f5.type === "google") loadGoogleFontCSS(f5.family);
        });
      }
      setLoaded(true);
    });
  }
  function toggle() {
    if (!open) {
      setOpen(true);
      if (!loaded) fetchFonts("");
      setTimeout(() => searchRef.current?.focus(), 50);
    } else {
      setOpen(false);
    }
  }
  function onSearch(e4) {
    const val = e4.target.value;
    setSearch(val);
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => fetchFonts(val), 200);
  }
  function select(font) {
    onChange(font.family);
    setOpen(false);
    setSearch("");
  }
  y2(() => {
    if (!open) return;
    function onClick(e4) {
      if (!wrapRef.current?.contains(e4.target)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);
  const displayName = value ? value.includes(",") ? value.split(",")[0].replace(/"/g, "") : value : "Select font...";
  return /* @__PURE__ */ u4("div", { class: "font-picker", ref: wrapRef, children: [
    /* @__PURE__ */ u4("button", { class: `font-picker-btn ${className || ""}`, onClick: toggle, type: "button", style: value && !value.includes(",") ? { fontFamily: value } : void 0, children: [
      displayName,
      /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ u4("path", { d: "m6 9 6 6 6-6" }) })
    ] }),
    open && /* @__PURE__ */ u4("div", { class: "font-picker-dropdown", children: [
      /* @__PURE__ */ u4(
        "input",
        {
          ref: searchRef,
          type: "text",
          class: "font-picker-search",
          placeholder: "Search fonts...",
          value: search,
          onInput: onSearch
        }
      ),
      /* @__PURE__ */ u4("div", { class: "font-picker-list", children: [
        fonts.map((f5) => /* @__PURE__ */ u4(
          "button",
          {
            class: `font-picker-option ${f5.family === value ? "active" : ""}`,
            onClick: () => select(f5),
            style: f5.type === "google" ? { fontFamily: f5.family } : void 0,
            children: [
              /* @__PURE__ */ u4("span", { children: f5.name }),
              f5.type === "google" && /* @__PURE__ */ u4("span", { class: "font-picker-badge", children: "Google" })
            ]
          },
          f5.family
        )),
        loaded && fonts.length === 0 && /* @__PURE__ */ u4("div", { class: "font-picker-empty", children: "No fonts found" }),
        !loaded && /* @__PURE__ */ u4("div", { class: "font-picker-empty", children: "Loading..." })
      ] })
    ] })
  ] });
}

// src/components/Settings.jsx
var SIZE_LABELS = { xs: "XS", sm: "SM", lg: "LG", xl: "XL", "2xl": "2XL", "3xl": "3XL", "4xl": "4XL" };
var HEADING_LABELS = { h1: "H1", h2: "H2", h3: "H3", h4: "H4", h5: "H5", h6: "H6" };
function resolveForLevel(isGlobal, viewport) {
  const g4 = globalSettings.value;
  const p5 = pageSettings.value;
  const vpChain = viewport === "desktop" ? ["desktop"] : viewport === "tablet" ? ["desktop", "tablet"] : ["desktop", "tablet", "mobile"];
  function resolve(key, fallback) {
    if (!isGlobal) {
      for (let i5 = vpChain.length - 1; i5 >= 0; i5--) {
        if (p5?.[vpChain[i5]]?.[key] != null) return p5[vpChain[i5]][key];
      }
    }
    for (let i5 = vpChain.length - 1; i5 >= 0; i5--) {
      if (g4[vpChain[i5]]?.[key] != null) return g4[vpChain[i5]][key];
    }
    return fallback;
  }
  const sizes = { ...DEFAULT_SIZES };
  for (const vp of vpChain) Object.assign(sizes, g4[vp]?.sizes || {});
  if (!isGlobal) {
    for (const vp of vpChain) Object.assign(sizes, p5?.[vp]?.sizes || {});
  }
  const headingSizes = { ...DEFAULT_HEADING_SIZES };
  for (const vp of vpChain) Object.assign(headingSizes, g4[vp]?.headingSizes || {});
  if (!isGlobal) {
    for (const vp of vpChain) Object.assign(headingSizes, p5?.[vp]?.headingSizes || {});
  }
  return {
    base: resolve("base", 16),
    fontFamily: resolve("fontFamily", ""),
    sizes,
    headingSizes
  };
}
function Settings({ mode }) {
  const isGlobal = mode === "globalSettings";
  const viewport = viewportMode.value;
  const isDesktop = viewport === "desktop";
  const raw = isGlobal ? globalSettings.value : pageSettings.value;
  const globalVal = globalSettings.value;
  const effective = resolveForLevel(isGlobal, viewport);
  function hasOverride(key) {
    return hasExplicitValue(raw, viewport, key);
  }
  function hasSizeOverride(sizeKey) {
    return hasExplicitSize(raw, viewport, sizeKey);
  }
  function showReset(key) {
    if (isGlobal && isDesktop) return false;
    return hasOverride(key);
  }
  function showSizeReset(sizeKey) {
    if (isGlobal && isDesktop) {
      const val = raw?.desktop?.sizes?.[sizeKey];
      return val != null && val !== DEFAULT_SIZES[sizeKey];
    }
    return hasSizeOverride(sizeKey);
  }
  function update(key, value) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : pageSettings.value || {}));
    if (!current[viewport]) current[viewport] = {};
    current[viewport][key] = value;
    if (key === "fontFamily") loadGoogleFontCSS(value);
    isGlobal ? saveGlobalSettings(current) : savePageSettings(current);
  }
  function updateSize(sizeKey, em) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : pageSettings.value || {}));
    if (!current[viewport]) current[viewport] = {};
    if (!current[viewport].sizes) current[viewport].sizes = {};
    current[viewport].sizes[sizeKey] = em;
    isGlobal ? saveGlobalSettings(current) : savePageSettings(current);
  }
  function updateHeadingSize(key, em) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : pageSettings.value || {}));
    if (!current[viewport]) current[viewport] = {};
    if (!current[viewport].headingSizes) current[viewport].headingSizes = {};
    current[viewport].headingSizes[key] = em;
    isGlobal ? saveGlobalSettings(current) : savePageSettings(current);
  }
  function showHeadingSizeReset(key) {
    if (isGlobal && isDesktop) {
      const val = raw?.desktop?.headingSizes?.[key];
      return val != null && val !== DEFAULT_HEADING_SIZES[key];
    }
    return hasExplicitSize(raw, viewport, "headingSizes") && raw?.[viewport]?.headingSizes?.[key] != null;
  }
  function clearHeadingSizeOverride(key) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : pageSettings.value || {}));
    if (current[viewport]?.headingSizes) {
      delete current[viewport].headingSizes[key];
      if (!Object.keys(current[viewport].headingSizes).length) delete current[viewport].headingSizes;
      if (!Object.keys(current[viewport]).length) delete current[viewport];
    }
    isGlobal ? saveGlobalSettings(current) : savePageSettings(Object.keys(current).length ? current : null);
  }
  function clearOverride(key) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : pageSettings.value || {}));
    if (current[viewport]) {
      delete current[viewport][key];
      if (!Object.keys(current[viewport]).length || Object.keys(current[viewport]).length === 1 && current[viewport].sizes && !Object.keys(current[viewport].sizes).length) {
        delete current[viewport];
      }
    }
    isGlobal ? saveGlobalSettings(current) : savePageSettings(Object.keys(current).length ? current : null);
  }
  function clearSizeOverride(sizeKey) {
    const current = JSON.parse(JSON.stringify(isGlobal ? globalSettings.value : pageSettings.value || {}));
    if (current[viewport]?.sizes) {
      delete current[viewport].sizes[sizeKey];
      if (!Object.keys(current[viewport].sizes).length) delete current[viewport].sizes;
      if (!Object.keys(current[viewport]).length) delete current[viewport];
    }
    isGlobal ? saveGlobalSettings(current) : savePageSettings(Object.keys(current).length ? current : null);
  }
  function resetSizeToDefault(sizeKey) {
    clearSizeOverride(sizeKey);
  }
  const inheritLabel = isGlobal ? isDesktop ? null : "Inherits from desktop. Override below." : "Inherits from global settings. Override below.";
  return /* @__PURE__ */ u4("aside", { class: "nomentor-sidebar-left", children: [
    /* @__PURE__ */ u4("div", { class: "sidebar-header", children: [
      isGlobal ? "Global Settings" : "Page Settings",
      /* @__PURE__ */ u4("span", { class: "settings-viewport-badge", children: viewport })
    ] }),
    /* @__PURE__ */ u4("div", { class: "sidebar-content", children: [
      inheritLabel && /* @__PURE__ */ u4("div", { class: "settings-inherit-note", children: inheritLabel }),
      /* @__PURE__ */ u4("div", { class: "prop-field", children: [
        /* @__PURE__ */ u4("label", { class: "prop-label", children: [
          "Base Font Size (px)",
          showReset("base") && /* @__PURE__ */ u4("button", { class: "settings-reset", onClick: () => clearOverride("base"), title: "Reset", children: "\xD7" })
        ] }),
        /* @__PURE__ */ u4(
          "input",
          {
            type: "number",
            class: `prop-input ${showReset("base") ? "overridden" : ""}`,
            value: effective.base,
            min: 8,
            max: 48,
            onInput: (e4) => update("base", parseInt(e4.target.value) || 16)
          }
        )
      ] }),
      /* @__PURE__ */ u4("div", { class: "prop-field", children: [
        /* @__PURE__ */ u4("label", { class: "prop-label", children: "Sizes (em)" }),
        /* @__PURE__ */ u4("div", { class: "settings-size-table", children: [
          /* @__PURE__ */ u4("div", { class: "settings-size-row settings-size-header", children: [
            /* @__PURE__ */ u4("span", { children: "Name" }),
            /* @__PURE__ */ u4("span", { children: "em" }),
            /* @__PURE__ */ u4("span", { children: "px" }),
            /* @__PURE__ */ u4("span", {})
          ] }),
          Object.entries(SIZE_LABELS).map(([key, label]) => {
            const em = effective.sizes[key] ?? DEFAULT_SIZES[key];
            const px = Math.round(effective.base * em * 100) / 100;
            return /* @__PURE__ */ u4("div", { class: "settings-size-row", children: [
              /* @__PURE__ */ u4("span", { class: "settings-size-label", children: label }),
              /* @__PURE__ */ u4(
                "input",
                {
                  type: "number",
                  class: `settings-size-input ${showSizeReset(key) ? "overridden" : ""}`,
                  value: em,
                  step: 0.0625,
                  min: 0.25,
                  max: 6,
                  onInput: (e4) => updateSize(key, parseFloat(e4.target.value) || DEFAULT_SIZES[key])
                }
              ),
              /* @__PURE__ */ u4("span", { class: "settings-size-px", children: [
                px,
                "px"
              ] }),
              /* @__PURE__ */ u4("span", { class: "settings-size-actions", children: showSizeReset(key) && /* @__PURE__ */ u4("button", { class: "settings-reset", onClick: () => resetSizeToDefault(key), title: "Reset", children: "\xD7" }) })
            ] }, key);
          })
        ] })
      ] }),
      /* @__PURE__ */ u4("div", { class: "prop-field", children: [
        /* @__PURE__ */ u4("label", { class: "prop-label", children: "Heading Sizes (em)" }),
        /* @__PURE__ */ u4("div", { class: "settings-size-table", children: [
          /* @__PURE__ */ u4("div", { class: "settings-size-row settings-size-header", children: [
            /* @__PURE__ */ u4("span", { children: "Tag" }),
            /* @__PURE__ */ u4("span", { children: "em" }),
            /* @__PURE__ */ u4("span", { children: "px" }),
            /* @__PURE__ */ u4("span", {})
          ] }),
          Object.entries(HEADING_LABELS).map(([key, label]) => {
            const em = effective.headingSizes?.[key] ?? DEFAULT_HEADING_SIZES[key];
            const px = Math.round(effective.base * em * 100) / 100;
            return /* @__PURE__ */ u4("div", { class: "settings-size-row", children: [
              /* @__PURE__ */ u4("span", { class: "settings-size-label", children: label }),
              /* @__PURE__ */ u4(
                "input",
                {
                  type: "number",
                  class: `settings-size-input ${showHeadingSizeReset(key) ? "overridden" : ""}`,
                  value: em,
                  step: 0.125,
                  min: 0.5,
                  max: 8,
                  onInput: (e4) => updateHeadingSize(key, parseFloat(e4.target.value) || DEFAULT_HEADING_SIZES[key])
                }
              ),
              /* @__PURE__ */ u4("span", { class: "settings-size-px", children: [
                px,
                "px"
              ] }),
              /* @__PURE__ */ u4("span", { class: "settings-size-actions", children: showHeadingSizeReset(key) && /* @__PURE__ */ u4("button", { class: "settings-reset", onClick: () => clearHeadingSizeOverride(key), title: "Reset", children: "\xD7" }) })
            ] }, key);
          })
        ] })
      ] }),
      /* @__PURE__ */ u4("div", { class: "prop-field", children: [
        /* @__PURE__ */ u4("label", { class: "prop-label", children: [
          "Font Family",
          showReset("fontFamily") && /* @__PURE__ */ u4("button", { class: "settings-reset", onClick: () => clearOverride("fontFamily"), title: "Reset", children: "\xD7" })
        ] }),
        /* @__PURE__ */ u4(
          FontPicker,
          {
            value: effective.fontFamily,
            onChange: (val) => update("fontFamily", val),
            className: showReset("fontFamily") ? "overridden" : ""
          }
        )
      ] }),
      /* @__PURE__ */ u4("div", { class: "prop-field", children: [
        /* @__PURE__ */ u4("label", { class: "prop-label", children: "Form Validation Messages" }),
        ["required", "email", "phone", "number"].map((key) => {
          const defaults = { required: "This field is required", email: "Invalid email address", phone: "Invalid phone number", number: "Must be a number" };
          const msgKey = "validationMsg_" + key;
          const val = isGlobal ? raw?.[msgKey] ?? "" : raw?.[msgKey] ?? "";
          const effectiveVal = isGlobal ? val || defaults[key] : val || globalVal?.[msgKey] || defaults[key];
          return /* @__PURE__ */ u4("div", { style: { marginBottom: "4px" }, children: [
            /* @__PURE__ */ u4("label", { style: { fontSize: "10px", color: "#999", textTransform: "capitalize" }, children: key }),
            /* @__PURE__ */ u4(
              "input",
              {
                type: "text",
                class: "prop-input",
                value: effectiveVal,
                placeholder: defaults[key],
                onInput: (e4) => {
                  if (isGlobal) saveGlobalSettings({ ...globalSettings.value, [msgKey]: e4.target.value });
                  else savePageSettings({ ...pageSettings.value || {}, [msgKey]: e4.target.value });
                },
                style: { fontSize: "11px" }
              }
            )
          ] }, key);
        })
      ] }),
      /* @__PURE__ */ u4("div", { class: "prop-field", children: [
        /* @__PURE__ */ u4("label", { class: "prop-label", children: [
          "Page Direction",
          !isGlobal && raw?.direction && /* @__PURE__ */ u4("button", { class: "settings-reset", onClick: () => {
            const c4 = { ...pageSettings.value || {} };
            delete c4.direction;
            savePageSettings(Object.keys(c4).length ? c4 : null);
          }, title: "Reset", children: "\xD7" })
        ] }),
        /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: ["rtl", "ltr"].map((d5) => /* @__PURE__ */ u4(
          "button",
          {
            class: `prop-btn ${(isGlobal ? raw?.direction : raw?.direction || globalVal?.direction) === d5 ? "active" : ""}`,
            onClick: () => {
              if (isGlobal) saveGlobalSettings({ ...globalSettings.value, direction: d5 });
              else savePageSettings({ ...pageSettings.value || {}, direction: d5 });
            },
            children: d5.toUpperCase()
          },
          d5
        )) })
      ] }),
      /* @__PURE__ */ u4("div", { class: "settings-viewports-hint", children: "Switch viewport in the toolbar to set different values for tablet and mobile." }),
      !isGlobal && /* @__PURE__ */ u4("div", { class: "prop-field", children: [
        /* @__PURE__ */ u4("label", { class: "prop-label", children: "Scripts" }),
        /* @__PURE__ */ u4(
          ScriptsEditor,
          {
            scripts: raw?.scripts || [],
            onChange: (s4) => savePageSettings({ ...pageSettings.value || {}, scripts: s4 })
          }
        )
      ] }),
      /* @__PURE__ */ u4(ColorPaletteEditor, { isGlobal })
    ] })
  ] });
}
function ColorPaletteEditor({ isGlobal }) {
  const raw = isGlobal ? globalSettings.value : pageSettings.value;
  const colors = raw?.colors || [];
  const globalColors = globalSettings.value.colors || [];
  function saveColors(newColors) {
    if (isGlobal) {
      saveGlobalSettings({ ...globalSettings.value, colors: newColors });
    } else {
      savePageSettings({ ...pageSettings.value || {}, colors: newColors.length ? newColors : void 0 });
    }
  }
  function addColor() {
    saveColors([...colors, { name: "Color " + (colors.length + 1), value: "#4a90d9" }]);
  }
  function updateColor(idx, field, val) {
    const updated = colors.map((c4, i5) => i5 === idx ? { ...c4, [field]: val } : c4);
    saveColors(updated);
  }
  function removeColor(idx) {
    saveColors(colors.filter((_4, i5) => i5 !== idx));
  }
  function moveColor(idx, dir) {
    const list = [...colors];
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= list.length) return;
    [list[idx], list[swapIdx]] = [list[swapIdx], list[idx]];
    saveColors(list);
  }
  return /* @__PURE__ */ u4("div", { class: "prop-field", children: [
    /* @__PURE__ */ u4("label", { class: "prop-label", children: "Color Palette" }),
    !isGlobal && colors.length === 0 && globalColors.length > 0 && /* @__PURE__ */ u4("div", { class: "settings-inherit-note", style: { marginBottom: "8px" }, children: [
      "Using ",
      globalColors.length,
      " color",
      globalColors.length > 1 ? "s" : "",
      " from global. Add page-specific colors below."
    ] }),
    !isGlobal && globalColors.length > 0 && /* @__PURE__ */ u4("div", { class: "palette-inherited", children: globalColors.map((c4) => /* @__PURE__ */ u4("div", { class: "palette-color-row palette-color-inherited", children: [
      /* @__PURE__ */ u4("span", { class: "prop-color-swatch", style: { backgroundColor: c4.value } }),
      /* @__PURE__ */ u4("span", { class: "palette-color-name", children: c4.name }),
      /* @__PURE__ */ u4("span", { class: "palette-color-hex", children: c4.value })
    ] }, c4.name)) }),
    /* @__PURE__ */ u4("div", { class: "palette-list", children: colors.map((c4, i5) => /* @__PURE__ */ u4("div", { class: "palette-color-row", children: [
      /* @__PURE__ */ u4(
        "input",
        {
          type: "color",
          class: "prop-color",
          value: c4.value,
          onInput: (e4) => updateColor(i5, "value", e4.target.value)
        }
      ),
      /* @__PURE__ */ u4(
        "input",
        {
          type: "text",
          class: "palette-name-input",
          value: c4.name,
          onInput: (e4) => updateColor(i5, "name", e4.target.value),
          placeholder: "Name"
        }
      ),
      /* @__PURE__ */ u4(
        "input",
        {
          type: "text",
          class: "palette-hex-input",
          value: c4.value,
          onInput: (e4) => updateColor(i5, "value", e4.target.value)
        }
      ),
      /* @__PURE__ */ u4("button", { class: "form-field-action", onClick: () => moveColor(i5, -1), disabled: i5 === 0, title: "Move up", children: "\u2191" }),
      /* @__PURE__ */ u4("button", { class: "form-field-action", onClick: () => moveColor(i5, 1), disabled: i5 === colors.length - 1, title: "Move down", children: "\u2193" }),
      /* @__PURE__ */ u4("button", { class: "prop-btn-clear", onClick: () => removeColor(i5), title: "Remove", children: "\xD7" })
    ] }, i5)) }),
    /* @__PURE__ */ u4("button", { class: "palette-add-btn", onClick: addColor, children: "+ Add Color" })
  ] });
}
function ScriptsEditor({ scripts, onChange }) {
  const list = Array.isArray(scripts) ? scripts : typeof scripts === "string" && scripts ? scripts.split("\n").filter(Boolean).map((s4) => ({ url: s4.trim(), position: "body" })) : [];
  function update(newList) {
    onChange(newList.length ? newList : void 0);
  }
  function addScript() {
    update([...list, { url: "", position: "body" }]);
  }
  function updateScript(idx, patch) {
    update(list.map((s4, i5) => i5 === idx ? { ...s4, ...patch } : s4));
  }
  function removeScript(idx) {
    update(list.filter((_4, i5) => i5 !== idx));
  }
  return /* @__PURE__ */ u4("div", { class: "scripts-list", children: [
    list.map((s4, i5) => /* @__PURE__ */ u4("div", { class: "script-row", children: [
      /* @__PURE__ */ u4(
        "input",
        {
          type: "text",
          class: "prop-input prop-css",
          value: s4.url || "",
          placeholder: "/path/to/script.js",
          onInput: (e4) => updateScript(i5, { url: e4.target.value }),
          style: { flex: 1, fontSize: "11px" }
        }
      ),
      /* @__PURE__ */ u4("div", { class: "prop-btn-group", children: [
        /* @__PURE__ */ u4(
          "button",
          {
            class: `prop-btn ${(s4.position || "body") === "head" ? "active" : ""}`,
            onClick: () => updateScript(i5, { position: "head" }),
            style: { fontSize: "9px", padding: "2px 6px" },
            children: "Head"
          }
        ),
        /* @__PURE__ */ u4(
          "button",
          {
            class: `prop-btn ${(s4.position || "body") === "body" ? "active" : ""}`,
            onClick: () => updateScript(i5, { position: "body" }),
            style: { fontSize: "9px", padding: "2px 6px" },
            children: "Body"
          }
        )
      ] }),
      /* @__PURE__ */ u4("button", { class: "form-field-action form-field-remove", onClick: () => removeScript(i5), children: "\xD7" })
    ] }, i5)),
    /* @__PURE__ */ u4("button", { class: "palette-add-btn", onClick: addScript, children: "+ Add Script" })
  ] });
}

// src/utils.js
function resolveViewportProp(props, prop) {
  const vp = viewportMode.value;
  if (vp === "mobile") return props["mobile_" + prop] ?? props["tablet_" + prop] ?? props[prop];
  if (vp === "tablet") return props["tablet_" + prop] ?? props[prop];
  return props[prop];
}
function resolveBorder(props) {
  const b3 = resolveViewportProp(props, "border");
  if (!b3 || typeof b3 !== "object" || !b3.width || b3.style === "none") return null;
  return `${b3.width}px ${b3.style} ${b3.color || "#000"}`;
}
function resolveBorderRadius(props) {
  const r4 = resolveViewportProp(props, "borderRadius");
  if (!r4 || typeof r4 !== "object") return void 0;
  const { topLeft, topRight, bottomRight, bottomLeft } = r4;
  if (!topLeft && !topRight && !bottomRight && !bottomLeft) return void 0;
  return `${topLeft || 0}px ${topRight || 0}px ${bottomRight || 0}px ${bottomLeft || 0}px`;
}
function applyBorder(props, s4) {
  const border = resolveBorder(props);
  const radius = resolveBorderRadius(props);
  if (border) s4.border = border;
  if (radius) s4.borderRadius = radius;
  if (props.boxShadow) s4.boxShadow = shadowToCSS(props.boxShadow);
}
function resolveSpacing(props, prop) {
  const vp = viewportMode.value;
  let val;
  if (vp === "mobile") val = props["mobile_" + prop] || props["tablet_" + prop] || props[prop];
  else if (vp === "tablet") val = props["tablet_" + prop] || props[prop];
  else val = props[prop];
  if (!val || typeof val !== "object") return typeof val === "string" ? val : void 0;
  const { top, right, bottom, left } = val;
  if (!top && !right && !bottom && !left) return void 0;
  return `${top || 0}px ${right || 0}px ${bottom || 0}px ${left || 0}px`;
}
var ALIGN_MAP = {
  "top-left": { justifyContent: "flex-start", alignItems: "flex-start" },
  "top-center": { justifyContent: "flex-start", alignItems: "center" },
  "top-right": { justifyContent: "flex-start", alignItems: "flex-end" },
  "middle-left": { justifyContent: "center", alignItems: "flex-start" },
  "middle-center": { justifyContent: "center", alignItems: "center" },
  "middle-right": { justifyContent: "center", alignItems: "flex-end" },
  "bottom-left": { justifyContent: "flex-end", alignItems: "flex-start" },
  "bottom-center": { justifyContent: "flex-end", alignItems: "center" },
  "bottom-right": { justifyContent: "flex-end", alignItems: "flex-end" }
};
function parseCustomCss(css, s4) {
  if (!css) return;
  css.split(";").forEach((rule) => {
    const [key, ...rest] = rule.split(":");
    if (!key || !rest.length) return;
    const prop = key.trim();
    const val = rest.join(":").trim();
    if (!prop || !val) return;
    const camel = prop.replace(/-([a-z])/g, (_4, c4) => c4.toUpperCase());
    s4[camel] = val;
  });
}
function buildStyle(props) {
  const s4 = {};
  const viewport = viewportMode.value;
  const settings = getEffectiveSettings(viewport);
  if (settings.fontFamily) s4.fontFamily = settings.fontFamily;
  if (props.color) s4.color = props.color;
  if (props.fontSize) {
    const sizeMap = getSizeMap(viewport);
    if (sizeMap[props.fontSize]) s4.fontSize = sizeMap[props.fontSize];
  }
  if (props.textAlign) s4.textAlign = props.textAlign;
  if (props.direction) s4.direction = props.direction;
  applyBorder(props, s4);
  const pad2 = resolveSpacing(props, "padding");
  const mar = resolveSpacing(props, "margin");
  if (pad2) s4.padding = pad2;
  if (mar) s4.margin = mar;
  parseCustomCss(props.customCss, s4);
  return s4;
}
function buildFlexContainerStyle(props) {
  if (!props) return void 0;
  const s4 = { display: "flex", flexDirection: "column" };
  if (props.maxWidth) {
    s4.width = props.maxWidth;
    s4.maxWidth = "100%";
    s4.marginLeft = "auto";
    s4.marginRight = "auto";
  }
  const cPad = resolveSpacing(props, "padding");
  const cMar = resolveSpacing(props, "margin");
  if (cPad) s4.padding = cPad;
  if (cMar && !props.maxWidth) s4.margin = cMar;
  const rg = resolveViewportProp(props, "rowGap");
  const cg = resolveViewportProp(props, "colGap");
  if (rg) s4.rowGap = rg + "px";
  if (cg) s4.columnGap = cg + "px";
  if (props.bgColor) s4.backgroundColor = props.bgColor;
  applyBorder(props, s4);
  if (props.align && ALIGN_MAP[props.align]) {
    Object.assign(s4, ALIGN_MAP[props.align]);
  }
  if (props.direction) s4.direction = props.direction;
  parseCustomCss(props.customCss, s4);
  return s4;
}
function buildCellStyle(props) {
  if (!props) return void 0;
  const s4 = { display: "flex", flexDirection: "column" };
  const cellPad = resolveSpacing(props, "padding");
  const cellMar = resolveSpacing(props, "margin");
  if (cellPad) s4.padding = cellPad;
  if (cellMar) s4.margin = cellMar;
  const cellRg = resolveViewportProp(props, "rowGap");
  const cellCg = resolveViewportProp(props, "colGap");
  if (cellRg) s4.rowGap = cellRg + "px";
  if (cellCg) s4.columnGap = cellCg + "px";
  applyBorder(props, s4);
  if (props.align && ALIGN_MAP[props.align]) {
    Object.assign(s4, ALIGN_MAP[props.align]);
  }
  if (props.direction) s4.direction = props.direction;
  parseCustomCss(props.customCss, s4);
  return s4;
}

// src/components/rows/HeadingElement.jsx
function HeadingElement({ element }) {
  const Tag = element.props.level || "h2";
  const style = buildStyle(element.props);
  const headingSizes = getHeadingSizeMap(viewportMode.value);
  if (headingSizes[Tag]) style.fontSize = headingSizes[Tag];
  return /* @__PURE__ */ u4(Tag, { style, children: element.props.text });
}

// src/components/rows/TextElement.jsx
var TOOLBAR_BUTTONS = [
  { cmd: "bold", label: "B", style: "font-weight:bold" },
  { cmd: "italic", label: "I", style: "font-style:italic" },
  { cmd: "underline", label: "U", style: "text-decoration:underline" },
  { cmd: "strikeThrough", label: "S", style: "text-decoration:line-through" },
  { type: "sep" },
  { cmd: "insertUnorderedList", label: "\u2022 List", icon: "ul" },
  { cmd: "insertOrderedList", label: "1. List", icon: "ol" },
  { type: "sep" },
  { cmd: "fontSize", label: "A\u2212", icon: "font-down", action: "decrease" },
  { cmd: "fontSize", label: "A+", icon: "font-up", action: "increase" },
  { type: "sep" },
  { cmd: "createLink", label: "Link", icon: "link", prompt: true },
  { cmd: "unlink", label: "Unlink", icon: "unlink" }
];
function TextElement({ element }) {
  const ref = A2(null);
  const toolbarRef = A2(null);
  const [showToolbar, setShowToolbar] = d2(false);
  const [toolbarPos, setToolbarPos] = d2({ top: 0, left: 0, below: false });
  const [activeStates, setActiveStates] = d2({});
  const style = buildStyle(element.props);
  const TOOLBAR_H = 38;
  function saveContent() {
    if (!ref.current) return;
    const html = ref.current.innerHTML;
    if (html !== element.props.text) {
      updateElementProps(element.id, { text: html });
      commitChange("Edit text");
    }
  }
  function execCmd(btn) {
    if (btn.action === "increase" || btn.action === "decrease") {
      changeFontSize(btn.action === "increase" ? 1 : -1);
    } else if (btn.prompt) {
      const url = prompt("Enter URL:");
      if (url) document.execCommand(btn.cmd, false, url);
    } else {
      document.execCommand(btn.cmd, false, null);
    }
    ref.current?.focus();
    updateActiveStates();
  }
  function changeFontSize(delta) {
    const sel = window.getSelection();
    if (!sel || !ref.current?.contains(sel.anchorNode)) return;
    const SIZES = [10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 64];
    function getCurrentSize(node) {
      const el = node?.nodeType === 3 ? node.parentElement : node;
      if (!el) return 16;
      return parseFloat(getComputedStyle(el).fontSize) || 16;
    }
    function nextSize(current, d5) {
      if (d5 > 0) {
        for (const s4 of SIZES) {
          if (s4 > current) return s4;
        }
        return SIZES[SIZES.length - 1];
      } else {
        for (let i5 = SIZES.length - 1; i5 >= 0; i5--) {
          if (SIZES[i5] < current) return SIZES[i5];
        }
        return SIZES[0];
      }
    }
    if (sel.isCollapsed) {
      const current = getCurrentSize(ref.current);
      const size = nextSize(current, delta);
      ref.current.style.fontSize = size + "px";
    } else {
      const current = getCurrentSize(sel.anchorNode);
      const size = nextSize(current, delta);
      document.execCommand("fontSize", false, "7");
      const fonts = ref.current.querySelectorAll('font[size="7"]');
      const spans = [];
      fonts.forEach((f5) => {
        const span = document.createElement("span");
        span.style.fontSize = size + "px";
        span.innerHTML = f5.innerHTML;
        f5.replaceWith(span);
        spans.push(span);
      });
      if (spans.length) {
        const range = document.createRange();
        range.setStartBefore(spans[0].firstChild || spans[0]);
        const last = spans[spans.length - 1];
        range.setEndAfter(last.lastChild || last);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }
  function updateActiveStates() {
    const states = {};
    for (const btn of TOOLBAR_BUTTONS) {
      if (btn.cmd) {
        try {
          states[btn.cmd] = document.queryCommandState(btn.cmd);
        } catch {
        }
      }
    }
    setActiveStates(states);
  }
  function calcPosition(anchorRect) {
    const gap = 6;
    const below = anchorRect.top < TOOLBAR_H + gap + 60;
    return {
      top: below ? anchorRect.bottom + gap : anchorRect.top - TOOLBAR_H - gap,
      left: anchorRect.left + anchorRect.width / 2,
      below
    };
  }
  const positionToolbar = q2(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !ref.current?.contains(sel.anchorNode)) return;
    const rect = sel.getRangeAt(0).getBoundingClientRect();
    setToolbarPos(calcPosition(rect));
    setShowToolbar(true);
    updateActiveStates();
  }, []);
  function onFocus() {
    setTimeout(() => {
      if (ref.current) {
        setShowToolbar(true);
        setToolbarPos(calcPosition(ref.current.getBoundingClientRect()));
        updateActiveStates();
      }
    }, 0);
  }
  function onBlur(e4) {
    if (toolbarRef.current?.contains(e4.relatedTarget)) return;
    setTimeout(() => {
      if (!ref.current?.contains(document.activeElement) && !toolbarRef.current?.contains(document.activeElement)) {
        setShowToolbar(false);
        saveContent();
      }
    }, 150);
  }
  function onSelectionChange() {
    if (!ref.current?.contains(window.getSelection()?.anchorNode)) return;
    positionToolbar();
  }
  y2(() => {
    document.addEventListener("selectionchange", onSelectionChange);
    return () => document.removeEventListener("selectionchange", onSelectionChange);
  }, []);
  function onKeyDown(e4) {
    if (e4.key === "Tab") {
      e4.preventDefault();
    }
  }
  return /* @__PURE__ */ u4("div", { class: "text-element-wrap", children: [
    showToolbar && /* @__PURE__ */ u4(
      "div",
      {
        ref: toolbarRef,
        class: "rte-toolbar",
        style: { position: "fixed", top: toolbarPos.top, left: toolbarPos.left },
        onMouseDown: (e4) => e4.preventDefault(),
        children: TOOLBAR_BUTTONS.map((btn, i5) => {
          if (btn.type === "sep") return /* @__PURE__ */ u4("span", { class: "rte-sep" }, i5);
          return /* @__PURE__ */ u4(
            "button",
            {
              class: `rte-btn ${activeStates[btn.cmd] ? "active" : ""}`,
              onClick: () => execCmd(btn),
              title: btn.label,
              children: btn.icon ? /* @__PURE__ */ u4(RteIcon, { type: btn.icon }) : /* @__PURE__ */ u4("span", { style: btn.style, children: btn.label.charAt(0) })
            },
            btn.cmd
          );
        })
      }
    ),
    /* @__PURE__ */ u4(
      "div",
      {
        ref,
        class: "text-editable",
        contentEditable: true,
        style,
        onFocus,
        onBlur,
        onKeyDown,
        onInput: updateActiveStates,
        dangerouslySetInnerHTML: { __html: element.props.text }
      }
    )
  ] });
}
function RteIcon({ type }) {
  switch (type) {
    case "ul":
      return /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("line", { x1: "8", x2: "21", y1: "6", y2: "6" }),
        /* @__PURE__ */ u4("line", { x1: "8", x2: "21", y1: "12", y2: "12" }),
        /* @__PURE__ */ u4("line", { x1: "8", x2: "21", y1: "18", y2: "18" }),
        /* @__PURE__ */ u4("line", { x1: "3", x2: "3.01", y1: "6", y2: "6" }),
        /* @__PURE__ */ u4("line", { x1: "3", x2: "3.01", y1: "12", y2: "12" }),
        /* @__PURE__ */ u4("line", { x1: "3", x2: "3.01", y1: "18", y2: "18" })
      ] });
    case "ol":
      return /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("line", { x1: "10", x2: "21", y1: "6", y2: "6" }),
        /* @__PURE__ */ u4("line", { x1: "10", x2: "21", y1: "12", y2: "12" }),
        /* @__PURE__ */ u4("line", { x1: "10", x2: "21", y1: "18", y2: "18" }),
        /* @__PURE__ */ u4("path", { d: "M4 6h1v4" }),
        /* @__PURE__ */ u4("path", { d: "M4 10h2" }),
        /* @__PURE__ */ u4("path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" })
      ] });
    case "link":
      return /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
        /* @__PURE__ */ u4("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
      ] });
    case "unlink":
      return /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
        /* @__PURE__ */ u4("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
        /* @__PURE__ */ u4("line", { x1: "8", x2: "8", y1: "2", y2: "5" }),
        /* @__PURE__ */ u4("line", { x1: "2", x2: "5", y1: "8", y2: "8" }),
        /* @__PURE__ */ u4("line", { x1: "16", x2: "16", y1: "19", y2: "22" }),
        /* @__PURE__ */ u4("line", { x1: "19", x2: "22", y1: "16", y2: "16" })
      ] });
    case "font-down":
      return /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("path", { d: "M4 19 8.5 5h3L16 19" }),
        /* @__PURE__ */ u4("path", { d: "M5.5 14h9" }),
        /* @__PURE__ */ u4("path", { d: "M18 14h4" })
      ] });
    case "font-up":
      return /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("path", { d: "M4 19 8.5 5h3L16 19" }),
        /* @__PURE__ */ u4("path", { d: "M5.5 14h9" }),
        /* @__PURE__ */ u4("path", { d: "M18 12v4" }),
        /* @__PURE__ */ u4("path", { d: "M16 14h4" })
      ] });
    default:
      return null;
  }
}

// src/components/rows/ImageElement.jsx
function getImageDimensions(props) {
  const vp = viewportMode.value;
  let w5, h5;
  if (vp === "mobile") {
    w5 = props.mobileWidth ?? props.tabletWidth ?? props.width;
    h5 = props.mobileHeight ?? props.tabletHeight ?? props.height;
  } else if (vp === "tablet") {
    w5 = props.tabletWidth ?? props.width;
    h5 = props.tabletHeight ?? props.height;
  } else {
    w5 = props.width;
    h5 = props.height;
  }
  const s4 = {};
  if (w5) s4.width = w5;
  if (h5) s4.height = h5;
  return s4;
}
function ImageElement({ element }) {
  const style = buildStyle(element.props);
  const dims = getImageDimensions(element.props);
  if (element.props.src) {
    return /* @__PURE__ */ u4("div", { style, children: /* @__PURE__ */ u4(
      "img",
      {
        src: element.props.src,
        alt: element.props.alt,
        style: { display: "block", width: "auto", maxWidth: "100%", ...dims }
      }
    ) });
  }
  return /* @__PURE__ */ u4("div", { class: "image-placeholder", style, children: [
    /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
      /* @__PURE__ */ u4("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }),
      /* @__PURE__ */ u4("circle", { cx: "9", cy: "9", r: "2" }),
      /* @__PURE__ */ u4("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
    ] }),
    /* @__PURE__ */ u4("span", { children: "Select an image from the properties panel" })
  ] });
}

// src/components/rows/GridElement.jsx
function buildGridStyle(props, cols) {
  const s4 = { gridTemplateColumns: `repeat(${cols}, 1fr)` };
  if (props.maxWidth) {
    s4.width = props.maxWidth;
    s4.maxWidth = "100%";
    s4.marginLeft = "auto";
    s4.marginRight = "auto";
  }
  const vp = viewportMode.value;
  function resolve(prop) {
    if (vp === "mobile") return props["mobile_" + prop] ?? props["tablet_" + prop] ?? props[prop];
    if (vp === "tablet") return props["tablet_" + prop] ?? props[prop];
    return props[prop];
  }
  const rg = resolve("rowGap");
  const cg = resolve("colGap");
  if (rg) s4.rowGap = rg + "px";
  if (cg) s4.columnGap = cg + "px";
  return s4;
}
function GridElement({ element, gridDepth = 0 }) {
  const cols = element.props.columns || 2;
  function onCellDragOver(e4) {
    if (!dragging.value || dragging.value.source !== "toolbox") return;
    if (dragging.value.type === "grid" && gridDepth >= 1) return;
    e4.preventDefault();
    e4.dataTransfer.dropEffect = "copy";
    e4.currentTarget.classList.add("cell-drag-over");
  }
  function onCellDragLeave(e4) {
    e4.currentTarget.classList.remove("cell-drag-over");
  }
  function onCellDrop(e4, cellId) {
    e4.preventDefault();
    e4.stopPropagation();
    e4.currentTarget.classList.remove("cell-drag-over");
    if (!dragging.value) return;
    const type = dragging.value.type;
    if (type === "grid" && gridDepth >= 1) return;
    addElementToCell(cellId, type);
    dragging.value = null;
    commitChange("Add " + type + " to cell");
  }
  return /* @__PURE__ */ u4("div", { class: "grid-element", style: buildGridStyle(element.props, cols), children: element.children.map((cell) => {
    const isSelected = selectedId.value === cell.id;
    const cellHidden = !!cell.props?.hideOn?.[viewportMode.value];
    return /* @__PURE__ */ u4(
      "div",
      {
        class: `grid-cell ${isSelected ? "cell-selected" : ""} ${cellHidden ? "vp-hidden" : ""}`,
        style: buildCellStyle(cell.props),
        "data-element-id": cell.id,
        onClick: (e4) => {
          e4.stopPropagation();
          selectElement(cell.id);
        },
        onDragOver: onCellDragOver,
        onDragLeave: onCellDragLeave,
        onDrop: (e4) => onCellDrop(e4, cell.id),
        children: [
          cell.elements.length === 0 && /* @__PURE__ */ u4("div", { class: "cell-empty", children: "Drop here" }),
          cell.elements.map((el) => /* @__PURE__ */ u4(ElementRenderer, { element: el, gridDepth: gridDepth + 1 }, el.id))
        ]
      },
      cell.id
    );
  }) });
}

// src/components/rows/ButtonElement.jsx
function ButtonElement({ element }) {
  const { text, url, bgColor, color, borderRadius, fontSize, fullWidth, icon, iconPosition } = element.props;
  const viewport = viewportMode.value;
  const sizeMap = getSizeMap(viewport);
  const style = {
    display: fullWidth ? "flex" : "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4em",
    padding: "0.6em 1.5em",
    backgroundColor: bgColor || "#4a90d9",
    color: color || "#ffffff",
    borderRadius: (borderRadius || "6") + "px",
    cursor: "pointer",
    textDecoration: "none",
    fontFamily: "inherit",
    lineHeight: "1.4",
    textAlign: "center"
  };
  if (fontSize && sizeMap[fontSize]) style.fontSize = sizeMap[fontSize];
  if (fullWidth) style.width = "100%";
  const extraStyle = buildStyle(element.props);
  if (extraStyle.direction) style.direction = extraStyle.direction;
  if (extraStyle.padding) style.padding = extraStyle.padding;
  if (extraStyle.margin) style.margin = extraStyle.margin;
  if (extraStyle.border) style.border = extraStyle.border;
  if (extraStyle.borderRadius) style.borderRadius = extraStyle.borderRadius;
  if (element.props.customCss) {
    element.props.customCss.split(";").forEach((rule) => {
      const [key, ...rest] = rule.split(":");
      if (!key || !rest.length) return;
      const prop = key.trim().replace(/-([a-z])/g, (_4, c4) => c4.toUpperCase());
      const val = rest.join(":").trim();
      if (prop && val) style[prop] = val;
    });
  }
  const pos = iconPosition || "before";
  const iconHtml = icon ? renderIconSvg(icon, "1em") : "";
  const hasText = !!text;
  return /* @__PURE__ */ u4("a", { href: url || "#", style, onClick: (e4) => e4.preventDefault(), children: [
    icon && pos === "before" && /* @__PURE__ */ u4("span", { class: "btn-icon", dangerouslySetInnerHTML: { __html: iconHtml } }),
    hasText && /* @__PURE__ */ u4("span", { children: text }),
    icon && pos === "after" && /* @__PURE__ */ u4("span", { class: "btn-icon", dangerouslySetInnerHTML: { __html: iconHtml } }),
    !hasText && !icon && "Button"
  ] });
}

// src/components/rows/TimerElement.jsx
function calcTimeLeft(targetDate, timezone) {
  if (!targetDate) return null;
  try {
    const now = /* @__PURE__ */ new Date();
    const target = new Date(targetDate);
    const diff = target - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    return {
      days: Math.floor(diff / (1e3 * 60 * 60 * 24)),
      hours: Math.floor(diff / (1e3 * 60 * 60) % 24),
      minutes: Math.floor(diff / (1e3 * 60) % 60),
      seconds: Math.floor(diff / 1e3 % 60),
      expired: false
    };
  } catch {
    return null;
  }
}
function pad(n3) {
  return String(n3).padStart(2, "0");
}
function TimerElement({ element }) {
  const { targetDate, timezone, bgColor, color, labelDays, labelHours, labelMinutes, labelSeconds, expiredText, borderRadius } = element.props;
  const [time, setTime] = d2(() => calcTimeLeft(targetDate, timezone));
  const extraStyle = buildStyle(element.props);
  y2(() => {
    if (!targetDate) return;
    setTime(calcTimeLeft(targetDate, timezone));
    const id = setInterval(() => setTime(calcTimeLeft(targetDate, timezone)), 1e3);
    return () => clearInterval(id);
  }, [targetDate, timezone]);
  if (!targetDate) {
    return /* @__PURE__ */ u4("div", { class: "timer-placeholder", style: extraStyle, children: "Set a target date in the properties panel" });
  }
  if (time?.expired) {
    return /* @__PURE__ */ u4("div", { class: "timer-expired", style: { color: color || "#1a2744", ...extraStyle }, children: expiredText || "Time is up!" });
  }
  const bw = parseInt(element.props.boxWidth) || 20;
  const boxStyle = {
    backgroundColor: bgColor || "#eef2f7",
    color: color || "#1a2744",
    borderRadius: (borderRadius || "12") + "px",
    width: `calc(${bw}% - 9px)`,
    maxWidth: "calc(25% - 9px)",
    minWidth: "60px"
  };
  const units = [
    { value: time?.days ?? 0, label: labelDays || "Days" },
    { value: time?.hours ?? 0, label: labelHours || "Hours" },
    { value: time?.minutes ?? 0, label: labelMinutes || "Minutes" },
    { value: time?.seconds ?? 0, label: labelSeconds || "Seconds" }
  ];
  const wrapStyle = { display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", ...extraStyle };
  return /* @__PURE__ */ u4("div", { class: "timer-element", style: wrapStyle, children: units.map((u5) => /* @__PURE__ */ u4("div", { class: "timer-box", style: boxStyle, children: [
    /* @__PURE__ */ u4("span", { class: "timer-number", children: pad(u5.value) }),
    /* @__PURE__ */ u4("span", { class: "timer-label", children: u5.label })
  ] }, u5.label)) });
}

// src/components/rows/FormElement.jsx
function FormElement({ element, gridDepth = 0 }) {
  const { fields } = element.props;
  const style = buildStyle(element.props);
  if (!element.children || element.children.length < 2) {
    element.children = [
      { id: element.id + "-before", elements: [], slot: "before" },
      { id: element.id + "-after", elements: [], slot: "after" }
    ];
  }
  const beforeSlot = element.children.find((c4) => c4.slot === "before") || element.children[0];
  const afterSlot = element.children.find((c4) => c4.slot === "after") || element.children[1];
  return /* @__PURE__ */ u4("div", { class: "form-element", style, "data-form-id": element.id, children: [
    /* @__PURE__ */ u4(FormDropZone, { slot: beforeSlot, gridDepth, label: "Drop elements before fields" }),
    /* @__PURE__ */ u4("div", { class: "form-fields-block", children: [
      (fields || []).map((f5) => /* @__PURE__ */ u4(FormFieldPreview, { field: f5 }, f5.id)),
      (!fields || fields.length === 0) && /* @__PURE__ */ u4("div", { class: "form-placeholder", children: "Add fields in the properties panel" })
    ] }),
    /* @__PURE__ */ u4(FormDropZone, { slot: afterSlot, gridDepth, label: "Drop elements after fields (e.g. submit button)" })
  ] });
}
function FormDropZone({ slot, gridDepth, label }) {
  function onDragOver(e4) {
    if (!dragging.value || dragging.value.source !== "toolbox") return;
    if (dragging.value.type === "form") return;
    e4.preventDefault();
    e4.stopPropagation();
    e4.dataTransfer.dropEffect = "copy";
    e4.currentTarget.classList.add("form-body-drag-over");
  }
  function onDragLeave(e4) {
    e4.currentTarget.classList.remove("form-body-drag-over");
  }
  function onDrop(e4) {
    e4.preventDefault();
    e4.stopPropagation();
    e4.currentTarget.classList.remove("form-body-drag-over");
    if (!dragging.value) return;
    const type = dragging.value.type;
    if (type === "form") return;
    addElementToCell(slot.id, type);
    dragging.value = null;
    commitChange("Add " + type + " to form");
  }
  const hasElements = slot.elements.length > 0;
  return /* @__PURE__ */ u4(
    "div",
    {
      class: "form-slot",
      onDragOver,
      onDragLeave,
      onDrop,
      children: hasElements ? slot.elements.map((el) => /* @__PURE__ */ u4(ElementRenderer, { element: el, gridDepth: gridDepth + 1 }, el.id)) : /* @__PURE__ */ u4("div", { class: "form-slot-placeholder", children: label })
    }
  );
}
function getOptLabel(o4) {
  return typeof o4 === "string" ? o4 : o4.label || o4.value || "";
}
function FormFieldPreview({ field }) {
  const { type, label, placeholder, required, options } = field;
  return /* @__PURE__ */ u4("div", { class: "form-field-preview", children: [
    label && type !== "checkbox" && /* @__PURE__ */ u4("label", { class: "form-field-label", children: [
      label,
      required && /* @__PURE__ */ u4("span", { class: "form-required", children: " *" })
    ] }),
    (type === "text" || type === "email" || type === "phone" || type === "number") && /* @__PURE__ */ u4("input", { type: "text", class: "form-field-input", placeholder: placeholder || "", disabled: true }),
    type === "textarea" && /* @__PURE__ */ u4("textarea", { class: "form-field-input form-field-textarea", placeholder: placeholder || "", disabled: true, rows: 3 }),
    type === "select" && /* @__PURE__ */ u4("select", { class: "form-field-input", disabled: true, children: [
      /* @__PURE__ */ u4("option", { children: placeholder || "Select..." }),
      (options || []).map((o4, i5) => /* @__PURE__ */ u4("option", { children: getOptLabel(o4) }, i5))
    ] }),
    type === "radio" && /* @__PURE__ */ u4("div", { class: "form-field-options", children: (options || []).map((o4, i5) => /* @__PURE__ */ u4("label", { class: "form-field-option", children: [
      /* @__PURE__ */ u4("input", { type: "radio", disabled: true }),
      /* @__PURE__ */ u4("span", { children: getOptLabel(o4) })
    ] }, i5)) }),
    type === "checkbox" && /* @__PURE__ */ u4("label", { class: "form-field-option", children: [
      /* @__PURE__ */ u4("input", { type: "checkbox", disabled: true }),
      /* @__PURE__ */ u4("span", { children: [
        label,
        required && /* @__PURE__ */ u4("span", { class: "form-required", children: " *" })
      ] })
    ] })
  ] });
}

// src/components/rows/ListElement.jsx
function ListElement({ element }) {
  const { listType, items, icon, iconColor, fontSize, fontWeight, itemPadding, itemBgColor, itemRadius, itemGap } = element.props;
  const style = buildStyle(element.props);
  const sizeMap = getSizeMap(viewportMode.value);
  const wrapStyle = {
    ...style,
    listStyle: icon || listType === "ul" ? "none" : void 0,
    display: "flex",
    flexDirection: "column",
    gap: (itemGap || "4") + "px",
    padding: icon ? "0" : void 0,
    margin: style.margin || "0"
  };
  if (fontSize && sizeMap[fontSize]) wrapStyle.fontSize = sizeMap[fontSize];
  if (fontWeight) wrapStyle.fontWeight = fontWeight;
  const liStyle = {
    padding: itemPadding || "8px 12px",
    borderRadius: (itemRadius || "0") + "px"
  };
  if (itemBgColor) liStyle.backgroundColor = itemBgColor;
  if (element.props.itemShadow) liStyle.boxShadow = shadowToCSS(element.props.itemShadow);
  const Tag = listType === "ol" ? "ol" : "ul";
  return /* @__PURE__ */ u4(Tag, { style: wrapStyle, class: "list-element", children: (items || []).map((item, i5) => {
    const itemIcon = item.icon ?? icon;
    const perItemStyle = { ...liStyle };
    if (item.bgColor) perItemStyle.backgroundColor = item.bgColor;
    return /* @__PURE__ */ u4("li", { style: perItemStyle, class: "list-item", children: [
      itemIcon && /* @__PURE__ */ u4(
        "span",
        {
          class: "list-item-icon",
          style: { color: item.iconColor || iconColor || "currentColor" },
          dangerouslySetInnerHTML: { __html: renderIconSvg(itemIcon, "1em", element.props.iconWeight || 2) }
        }
      ),
      /* @__PURE__ */ u4("span", { class: "list-item-text", children: item.text })
    ] }, item.id || i5);
  }) });
}

// src/components/rows/ElementRenderer.jsx
var RENDERERS = {
  heading: HeadingElement,
  text: TextElement,
  image: ImageElement,
  grid: GridElement,
  button: ButtonElement,
  timer: TimerElement,
  form: FormElement,
  list: ListElement
};
function isHiddenOnViewport(props, viewport) {
  return !!props?.hideOn?.[viewport];
}
function ElementRenderer({ element, gridDepth = 0 }) {
  const Comp = RENDERERS[element.type];
  if (!Comp) return /* @__PURE__ */ u4("div", { children: [
    "Unknown: ",
    element.type
  ] });
  const isSelected = selectedId.value === element.id;
  const hidden = isHiddenOnViewport(element.props, viewportMode.value);
  return /* @__PURE__ */ u4(
    "div",
    {
      class: `element-wrapper ${isSelected ? "selected" : ""} ${hidden ? "vp-hidden" : ""}`,
      "data-element-id": element.id,
      onClick: (e4) => {
        e4.stopPropagation();
        selectElement(element.id);
      },
      children: [
        /* @__PURE__ */ u4("div", { class: "element-label", children: [
          element.type,
          hidden ? " (hidden)" : ""
        ] }),
        /* @__PURE__ */ u4(Comp, { element, gridDepth })
      ]
    }
  );
}

// src/components/Canvas.jsx
function isHiddenOnViewport2(props, viewport) {
  return !!props?.hideOn?.[viewport];
}
function Canvas() {
  const pageRef = A2(null);
  const getDropBeforeId = q2((y5) => {
    const rowEls = pageRef.current?.querySelectorAll(".canvas-row");
    if (!rowEls) return null;
    for (const el of rowEls) {
      const rect = el.getBoundingClientRect();
      if (y5 < rect.top + rect.height / 2) return el.dataset.rowId;
    }
    return null;
  }, []);
  function onDragOver(e4) {
    if (!dragging.value) return;
    e4.preventDefault();
    e4.dataTransfer.dropEffect = "copy";
    dropTargetId.value = getDropBeforeId(e4.clientY);
  }
  function onDragLeave(e4) {
    if (!pageRef.current?.contains(e4.relatedTarget)) {
      dropTargetId.value = null;
    }
  }
  function onDrop(e4) {
    if (!dragging.value) return;
    e4.preventDefault();
    const type = dragging.value.type;
    const beforeId = dropTargetId.value;
    dropOnCanvas(type, beforeId);
    dragging.value = null;
    dropTargetId.value = null;
  }
  y2(() => {
    function onKeyDown(e4) {
      if (e4.key !== "Delete" && e4.key !== "Backspace") return;
      const active = document.activeElement;
      if (active?.isContentEditable || active?.tagName === "INPUT" || active?.tagName === "TEXTAREA") return;
      const sel2 = selectedId.value;
      if (!sel2) return;
      const row = rows.value.find((r4) => r4.id === sel2);
      if (row) {
        removeRow(sel2);
        commitChange("Remove container");
        return;
      }
      removeElement(sel2);
      commitChange("Remove element");
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);
  const sel = selectedId.value;
  y2(() => {
    if (!sel) return;
    const el = pageRef.current?.querySelector(`[data-row-id="${sel}"], [data-element-id="${sel}"]`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [sel]);
  const rowList = rows.value;
  const isDragging = !!dragging.value;
  const viewport = viewportMode.value;
  return /* @__PURE__ */ u4("main", { class: "nomentor-canvas", children: /* @__PURE__ */ u4(
    "div",
    {
      ref: pageRef,
      class: `canvas-page ${isDragging ? "drag-over" : ""} viewport-${viewport}`,
      dir: getEffectiveDirection(),
      onDragOver,
      onDragLeave,
      onDrop,
      children: [
        rowList.length === 0 && /* @__PURE__ */ u4("div", { class: "canvas-empty", children: "Drag components here to start building" }),
        rowList.map((row) => /* @__PURE__ */ u4(CanvasRow, { row }, row.id)),
        isDragging && /* @__PURE__ */ u4("div", { class: "canvas-drop-end", onDragOver: (e4) => {
          e4.preventDefault();
          e4.stopPropagation();
        }, onDrop: (e4) => {
          e4.preventDefault();
          e4.stopPropagation();
          dropOnCanvas(dragging.value.type, null);
          dragging.value = null;
          dropTargetId.value = null;
        }, children: "+ New container" })
      ]
    }
  ) });
}
function CanvasRow({ row }) {
  const isSelected = selectedId.value === row.id;
  const isDropTarget = dropTargetId.value === row.id;
  function onRowDragOver(e4) {
    if (!dragging.value) return;
    e4.preventDefault();
    e4.stopPropagation();
    e4.dataTransfer.dropEffect = "copy";
  }
  function onRowDrop(e4) {
    if (!dragging.value) return;
    e4.preventDefault();
    e4.stopPropagation();
    dropOnContainer(dragging.value.type, row.id);
    dragging.value = null;
    dropTargetId.value = null;
  }
  return /* @__PURE__ */ u4(k, { children: [
    isDropTarget && /* @__PURE__ */ u4("div", { class: "drop-indicator" }),
    /* @__PURE__ */ u4(
      "div",
      {
        class: `canvas-row ${isSelected ? "selected" : ""} ${isHiddenOnViewport2(row.props, viewportMode.value) ? "vp-hidden" : ""}`,
        "data-row-id": row.id,
        style: buildFlexContainerStyle(row.props),
        onClick: (e4) => {
          e4.stopPropagation();
          selectElement(row.id);
        },
        onDragOver: onRowDragOver,
        onDrop: onRowDrop,
        children: [
          /* @__PURE__ */ u4("div", { class: "row-label", children: [
            "container",
            isHiddenOnViewport2(row.props, viewportMode.value) ? " (hidden)" : ""
          ] }),
          row.elements.length === 0 && /* @__PURE__ */ u4("div", { class: "row-empty", children: "Empty container \u2014 drag a component here" }),
          row.elements.map((el) => /* @__PURE__ */ u4(ElementRenderer, { element: el }, el.id))
        ]
      }
    )
  ] });
}

// src/components/Navigator.jsx
var contextMenu = y3(null);
var navDrag = y3(null);
var navDrop = y3(null);
var collapsed = y3({});
function toggleCollapse(id, e4) {
  e4.stopPropagation();
  collapsed.value = { ...collapsed.value, [id]: !collapsed.value[id] };
}
function isCollapsed(id) {
  return !!collapsed.value[id];
}
function NavIcon({ type }) {
  const s4 = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
  switch (type) {
    case "container":
      return /* @__PURE__ */ u4("svg", { ...s4, children: /* @__PURE__ */ u4("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }) });
    case "grid":
      return /* @__PURE__ */ u4("svg", { ...s4, children: [
        /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }),
        /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }),
        /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }),
        /* @__PURE__ */ u4("rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" })
      ] });
    case "cell":
      return /* @__PURE__ */ u4("svg", { ...s4, children: /* @__PURE__ */ u4("rect", { width: "14", height: "14", x: "5", y: "5", rx: "1", "stroke-dasharray": "3 2" }) });
    case "heading":
      return /* @__PURE__ */ u4("svg", { ...s4, children: [
        /* @__PURE__ */ u4("path", { d: "M4 12h8" }),
        /* @__PURE__ */ u4("path", { d: "M4 18V6" }),
        /* @__PURE__ */ u4("path", { d: "M12 18V6" }),
        /* @__PURE__ */ u4("path", { d: "M17 10l3-2v8" })
      ] });
    case "text":
      return /* @__PURE__ */ u4("svg", { ...s4, children: [
        /* @__PURE__ */ u4("path", { d: "M17 6.1H3" }),
        /* @__PURE__ */ u4("path", { d: "M21 12.1H3" }),
        /* @__PURE__ */ u4("path", { d: "M15.1 18H3" })
      ] });
    case "image":
      return /* @__PURE__ */ u4("svg", { ...s4, children: [
        /* @__PURE__ */ u4("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }),
        /* @__PURE__ */ u4("circle", { cx: "9", cy: "9", r: "2" }),
        /* @__PURE__ */ u4("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
      ] });
    case "button":
      return /* @__PURE__ */ u4("svg", { ...s4, children: [
        /* @__PURE__ */ u4("rect", { width: "18", height: "10", x: "3", y: "7", rx: "4" }),
        /* @__PURE__ */ u4("line", { x1: "8", x2: "16", y1: "12", y2: "12" })
      ] });
    case "timer":
      return /* @__PURE__ */ u4("svg", { ...s4, children: [
        /* @__PURE__ */ u4("line", { x1: "10", x2: "14", y1: "2", y2: "2" }),
        /* @__PURE__ */ u4("line", { x1: "12", x2: "15", y1: "14", y2: "11" }),
        /* @__PURE__ */ u4("circle", { cx: "12", cy: "14", r: "8" })
      ] });
    case "form":
      return /* @__PURE__ */ u4("svg", { ...s4, children: [
        /* @__PURE__ */ u4("rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }),
        /* @__PURE__ */ u4("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
        /* @__PURE__ */ u4("path", { d: "M12 11h4" }),
        /* @__PURE__ */ u4("path", { d: "M12 16h4" }),
        /* @__PURE__ */ u4("path", { d: "M8 11h.01" }),
        /* @__PURE__ */ u4("path", { d: "M8 16h.01" })
      ] });
    case "list":
      return /* @__PURE__ */ u4("svg", { ...s4, children: [
        /* @__PURE__ */ u4("line", { x1: "8", x2: "21", y1: "6", y2: "6" }),
        /* @__PURE__ */ u4("line", { x1: "8", x2: "21", y1: "12", y2: "12" }),
        /* @__PURE__ */ u4("line", { x1: "8", x2: "21", y1: "18", y2: "18" }),
        /* @__PURE__ */ u4("line", { x1: "3", x2: "3.01", y1: "6", y2: "6" }),
        /* @__PURE__ */ u4("line", { x1: "3", x2: "3.01", y1: "12", y2: "12" }),
        /* @__PURE__ */ u4("line", { x1: "3", x2: "3.01", y1: "18", y2: "18" })
      ] });
    default:
      return /* @__PURE__ */ u4("svg", { ...s4, children: /* @__PURE__ */ u4("circle", { cx: "12", cy: "12", r: "4" }) });
  }
}
function TriangleIcon({ expanded }) {
  return /* @__PURE__ */ u4("svg", { class: `nav-triangle ${expanded ? "expanded" : ""}`, width: "10", height: "10", viewBox: "0 0 10 10", children: /* @__PURE__ */ u4("path", { d: "M3 2l4 3-4 3z", fill: "currentColor" }) });
}
if (typeof document !== "undefined") {
  document.addEventListener("click", () => {
    contextMenu.value = null;
  });
  document.addEventListener("dragend", () => {
    navDrag.value = null;
    navDrop.value = null;
  });
}
function Navigator() {
  const rowList = rows.value;
  return /* @__PURE__ */ u4("aside", { class: "nomentor-sidebar-right", children: [
    /* @__PURE__ */ u4("div", { class: "sidebar-header", children: "Navigator" }),
    /* @__PURE__ */ u4("div", { class: "sidebar-content", children: !rowList.length ? /* @__PURE__ */ u4("div", { class: "nav-empty", children: "No elements yet" }) : /* @__PURE__ */ u4("ul", { class: "nav-tree", children: rowList.map((row) => /* @__PURE__ */ u4(NavRow, { row }, row.id)) }) }),
    contextMenu.value && /* @__PURE__ */ u4(ContextMenu, {})
  ] });
}
function ContextMenu() {
  const { x: x4, y: y5, id, kind, parentId } = contextMenu.value;
  function onRemove(e4) {
    e4.stopPropagation();
    if (kind === "container") {
      removeRow(id);
      commitChange("Remove container");
    } else if (kind === "cell") {
      removeGridCell(parentId, id);
      commitChange("Remove grid cell");
    } else {
      removeElement(id);
      commitChange("Remove " + kind);
    }
    contextMenu.value = null;
  }
  function onAddCell(e4) {
    e4.stopPropagation();
    addGridCell(id);
    commitChange("Add grid cell");
    contextMenu.value = null;
  }
  const isGrid = kind === "element" && findElementById(id)?.type === "grid";
  let canRemoveCell = true;
  if (kind === "cell") {
    const grid = findElementById(parentId);
    if (grid?.children) canRemoveCell = grid.children.length > 1;
  }
  return /* @__PURE__ */ u4("div", { class: "nav-context-menu", style: { top: y5, left: x4 }, onClick: (e4) => e4.stopPropagation(), children: kind === "cell" ? canRemoveCell && /* @__PURE__ */ u4("button", { onClick: onRemove, children: [
    /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
      /* @__PURE__ */ u4("path", { d: "M3 6h18" }),
      /* @__PURE__ */ u4("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
      /* @__PURE__ */ u4("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
    ] }),
    "Remove cell"
  ] }) : /* @__PURE__ */ u4(k, { children: [
    isGrid && /* @__PURE__ */ u4("button", { class: "context-action", onClick: onAddCell, children: [
      /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("path", { d: "M12 5v14" }),
        /* @__PURE__ */ u4("path", { d: "M5 12h14" })
      ] }),
      "Add cell"
    ] }),
    /* @__PURE__ */ u4("button", { onClick: onRemove, children: [
      /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u4("path", { d: "M3 6h18" }),
        /* @__PURE__ */ u4("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
        /* @__PURE__ */ u4("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
      ] }),
      "Remove ",
      kind
    ] })
  ] }) });
}
function openContextMenu(e4, id, kind, parentId = null) {
  e4.preventDefault();
  e4.stopPropagation();
  contextMenu.value = { x: e4.clientX, y: e4.clientY, id, kind, parentId };
}
function NavRow({ row }) {
  const isSelected = selectedId.value === row.id;
  const drop = navDrop.value;
  const isBefore = drop?.kind === "row" && drop?.id === row.id && drop?.position === "before";
  const isAfter = drop?.kind === "row" && drop?.id === row.id && drop?.position === "after";
  const isInto = drop?.kind === "row" && drop?.id === row.id && drop?.position === "into";
  function onDragStart(e4) {
    navDrag.value = { kind: "container", id: row.id };
    e4.dataTransfer.effectAllowed = "move";
    e4.dataTransfer.setData("text/plain", "");
  }
  function onDragOver(e4) {
    const drag = navDrag.value;
    if (!drag) return;
    e4.stopPropagation();
    if (drag.kind === "container") {
      if (drag.id === row.id) {
        navDrop.value = null;
        return;
      }
      const rect = e4.currentTarget.getBoundingClientRect();
      const y5 = e4.clientY - rect.top;
      const h5 = rect.height;
      if (y5 < h5 * 0.3) {
        e4.preventDefault();
        navDrop.value = { kind: "row", id: row.id, position: "before" };
      } else if (y5 > h5 * 0.7) {
        e4.preventDefault();
        navDrop.value = { kind: "row", id: row.id, position: "after" };
      } else {
        navDrop.value = null;
      }
    } else if (drag.kind === "element") {
      e4.preventDefault();
      const rect = e4.currentTarget.getBoundingClientRect();
      const y5 = e4.clientY - rect.top;
      const h5 = rect.height;
      if (y5 < h5 * 0.25) {
        navDrop.value = { kind: "row", id: row.id, position: "before" };
      } else if (y5 > h5 * 0.75) {
        navDrop.value = { kind: "row", id: row.id, position: "after" };
      } else {
        navDrop.value = { kind: "row", id: row.id, position: "into" };
      }
    }
  }
  function onDrop(e4) {
    e4.preventDefault();
    e4.stopPropagation();
    const drag = navDrag.value;
    const dt = navDrop.value;
    navDrag.value = null;
    navDrop.value = null;
    if (!drag || !dt) return;
    if (drag.kind === "container" && dt.kind === "row" && (dt.position === "before" || dt.position === "after")) {
      const list = rows.value;
      const targetIdx = list.findIndex((r4) => r4.id === dt.id);
      const beforeId = dt.position === "before" ? dt.id : targetIdx + 1 < list.length ? list[targetIdx + 1].id : null;
      reorderRow(drag.id, beforeId);
      commitChange("Reorder container");
    } else if (drag.kind === "element" && dt.kind === "row") {
      if (dt.position === "into") {
        moveElement(drag.id, { rowId: dt.id });
        commitChange("Move element");
      } else {
        const list = rows.value;
        const targetIdx = list.findIndex((r4) => r4.id === dt.id);
        const beforeRowId = dt.position === "before" ? dt.id : targetIdx + 1 < list.length ? list[targetIdx + 1].id : null;
        const newRowId = addRow(beforeRowId);
        moveElement(drag.id, { rowId: newRowId });
        commitChange("Move element to new container");
      }
    }
  }
  function onDragLeave() {
    if (navDrop.value?.id === row.id && navDrop.value?.kind === "row") navDrop.value = null;
  }
  const cls = [
    "nav-item",
    isSelected && "selected",
    isBefore && "nav-drop-before",
    isAfter && "nav-drop-after",
    isInto && "nav-drop-into"
  ].filter(Boolean).join(" ");
  const hasChildren = row.elements.length > 0;
  const expanded = hasChildren && !isCollapsed(row.id);
  return /* @__PURE__ */ u4("li", { class: "nav-container-li", children: [
    /* @__PURE__ */ u4(
      "div",
      {
        class: cls,
        draggable: true,
        onClick: () => selectElement(row.id),
        onContextMenu: (e4) => openContextMenu(e4, row.id, "container"),
        onDragStart,
        onDragOver,
        onDrop,
        onDragLeave,
        children: [
          hasChildren ? /* @__PURE__ */ u4("span", { class: "nav-toggle", onClick: (e4) => toggleCollapse(row.id, e4), children: /* @__PURE__ */ u4(TriangleIcon, { expanded }) }) : /* @__PURE__ */ u4("span", { class: "nav-toggle-spacer" }),
          /* @__PURE__ */ u4(NavIcon, { type: "container" }),
          /* @__PURE__ */ u4("span", { class: "nav-label", children: "container" })
        ]
      }
    ),
    expanded && /* @__PURE__ */ u4("ul", { class: "nav-children", children: row.elements.map((el) => /* @__PURE__ */ u4(NavElement, { element: el, parentContext: { rowId: row.id }, siblings: row.elements, gridDepth: 0 }, el.id)) })
  ] });
}
function NavElement({ element, parentContext, siblings, gridDepth }) {
  const isSelected = selectedId.value === element.id;
  const drop = navDrop.value;
  const isBefore = drop?.kind === "element" && drop?.id === element.id && drop?.position === "before";
  const isAfter = drop?.kind === "element" && drop?.id === element.id && drop?.position === "after";
  function onDragStart(e4) {
    e4.stopPropagation();
    navDrag.value = { kind: "element", id: element.id };
    e4.dataTransfer.effectAllowed = "move";
    e4.dataTransfer.setData("text/plain", "");
  }
  function onDragOver(e4) {
    const drag = navDrag.value;
    if (!drag || drag.kind !== "element" || drag.id === element.id) return;
    e4.preventDefault();
    e4.stopPropagation();
    const rect = e4.currentTarget.getBoundingClientRect();
    const pct = (e4.clientY - rect.top) / rect.height;
    navDrop.value = {
      kind: "element",
      id: element.id,
      position: pct < 0.5 ? "before" : "after",
      parentContext,
      siblings
    };
  }
  function onDrop(e4) {
    e4.preventDefault();
    e4.stopPropagation();
    const drag = navDrag.value;
    const dt = navDrop.value;
    if (!drag || !dt || drag.kind !== "element") return;
    const idx = dt.siblings.findIndex((s4) => s4.id === dt.id);
    const beforeId = dt.position === "before" ? dt.id : idx + 1 < dt.siblings.length ? dt.siblings[idx + 1].id : null;
    if (dt.parentContext.rowId) {
      moveElement(drag.id, { rowId: dt.parentContext.rowId, beforeElementId: beforeId });
    } else if (dt.parentContext.cellId) {
      moveElement(drag.id, { cellId: dt.parentContext.cellId, beforeElementId: beforeId });
    }
    commitChange("Move element");
    navDrag.value = null;
    navDrop.value = null;
  }
  function onDragLeave() {
    if (navDrop.value?.id === element.id && navDrop.value?.kind === "element") navDrop.value = null;
  }
  const cls = [
    "nav-item",
    isSelected && "selected",
    isBefore && "nav-drop-before",
    isAfter && "nav-drop-after"
  ].filter(Boolean).join(" ");
  const isForm = element.type === "form";
  const formBefore = isForm ? element.children?.find((c4) => c4.slot === "before") || element.children?.[0] : null;
  const formAfter = isForm ? element.children?.find((c4) => c4.slot === "after") || element.children?.[1] : null;
  const hasChildren = isForm ? (formBefore?.elements?.length || 0) + (formAfter?.elements?.length || 0) > 0 || (element.props?.fields?.length || 0) > 0 : element.children && element.children.length > 0;
  const expanded = hasChildren && !isCollapsed(element.id);
  return /* @__PURE__ */ u4("li", { children: [
    /* @__PURE__ */ u4(
      "div",
      {
        class: cls,
        draggable: true,
        onClick: (e4) => {
          e4.stopPropagation();
          selectElement(element.id);
        },
        onContextMenu: (e4) => openContextMenu(e4, element.id, "element"),
        onDragStart,
        onDragOver,
        onDrop,
        onDragLeave,
        children: [
          hasChildren ? /* @__PURE__ */ u4("span", { class: "nav-toggle", onClick: (e4) => toggleCollapse(element.id, e4), children: /* @__PURE__ */ u4(TriangleIcon, { expanded }) }) : /* @__PURE__ */ u4("span", { class: "nav-toggle-spacer" }),
          /* @__PURE__ */ u4(NavIcon, { type: element.type }),
          /* @__PURE__ */ u4("span", { class: "nav-label", children: element.type })
        ]
      }
    ),
    expanded && /* @__PURE__ */ u4("ul", { class: "nav-children", children: isForm ? /* @__PURE__ */ u4(k, { children: [
      formBefore?.elements?.map((el) => /* @__PURE__ */ u4(NavElement, { element: el, parentContext: { cellId: formBefore.id }, siblings: formBefore.elements, gridDepth: gridDepth + 1 }, el.id)),
      /* @__PURE__ */ u4(
        NavFormFields,
        {
          element,
          beforeSlot: formBefore,
          afterSlot: formAfter
        }
      ),
      formAfter?.elements?.map((el) => /* @__PURE__ */ u4(NavElement, { element: el, parentContext: { cellId: formAfter.id }, siblings: formAfter.elements, gridDepth: gridDepth + 1 }, el.id))
    ] }) : element.children.map((cell) => /* @__PURE__ */ u4(NavCell, { cell, gridId: element.id, gridDepth }, cell.id)) })
  ] });
}
function NavCell({ cell, gridId, gridDepth }) {
  const drop = navDrop.value;
  const isInto = drop?.kind === "cell" && drop?.id === cell.id;
  function onDragOver(e4) {
    const drag = navDrag.value;
    if (!drag || drag.kind !== "element") return;
    const draggedEl = findElementById(drag.id);
    if (draggedEl?.type === "grid" && gridDepth >= 1) return;
    e4.preventDefault();
    e4.stopPropagation();
    navDrop.value = { kind: "cell", id: cell.id, position: "into" };
  }
  function onDrop(e4) {
    e4.preventDefault();
    e4.stopPropagation();
    const drag = navDrag.value;
    if (!drag || drag.kind !== "element") return;
    moveElement(drag.id, { cellId: cell.id });
    commitChange("Move element to cell");
    navDrag.value = null;
    navDrop.value = null;
  }
  function onDragLeave() {
    if (navDrop.value?.id === cell.id && navDrop.value?.kind === "cell") navDrop.value = null;
  }
  const hasChildren = cell.elements.length > 0;
  const expanded = hasChildren && !isCollapsed(cell.id);
  return /* @__PURE__ */ u4("li", { children: [
    /* @__PURE__ */ u4(
      "div",
      {
        class: `nav-item nav-cell ${isInto ? "nav-drop-into" : ""} ${selectedId.value === cell.id ? "selected" : ""}`,
        onClick: (e4) => {
          e4.stopPropagation();
          selectElement(cell.id);
        },
        onContextMenu: (e4) => openContextMenu(e4, cell.id, "cell", gridId),
        onDragOver,
        onDrop,
        onDragLeave,
        children: [
          hasChildren ? /* @__PURE__ */ u4("span", { class: "nav-toggle", onClick: (e4) => toggleCollapse(cell.id, e4), children: /* @__PURE__ */ u4(TriangleIcon, { expanded }) }) : /* @__PURE__ */ u4("span", { class: "nav-toggle-spacer" }),
          /* @__PURE__ */ u4(NavIcon, { type: "cell" }),
          /* @__PURE__ */ u4("span", { class: "nav-label", children: "cell" })
        ]
      }
    ),
    expanded && /* @__PURE__ */ u4("ul", { class: "nav-children", children: cell.elements.map((el) => /* @__PURE__ */ u4(NavElement, { element: el, parentContext: { cellId: cell.id }, siblings: cell.elements, gridDepth: gridDepth + 1 }, el.id)) })
  ] });
}
function NavFormFields({ element, beforeSlot, afterSlot }) {
  const drop = navDrop.value;
  const isBefore = drop?.kind === "form-fields" && drop?.id === element.id && drop?.position === "before";
  const isAfter = drop?.kind === "form-fields" && drop?.id === element.id && drop?.position === "after";
  function onDragOver(e4) {
    const drag = navDrag.value;
    if (!drag || drag.kind !== "element") return;
    e4.preventDefault();
    e4.stopPropagation();
    const rect = e4.currentTarget.getBoundingClientRect();
    const pct = (e4.clientY - rect.top) / rect.height;
    navDrop.value = {
      kind: "form-fields",
      id: element.id,
      position: pct < 0.5 ? "before" : "after",
      beforeSlot,
      afterSlot
    };
  }
  function onDrop(e4) {
    e4.preventDefault();
    e4.stopPropagation();
    const drag = navDrag.value;
    const dt = navDrop.value;
    if (!drag || !dt || drag.kind !== "element") return;
    const targetCellId = dt.position === "before" ? beforeSlot.id : afterSlot.id;
    const beforeElementId = dt.position === "after" && afterSlot.elements.length > 0 ? afterSlot.elements[0].id : null;
    moveElement(drag.id, { cellId: targetCellId, beforeElementId });
    commitChange("Move element");
    navDrag.value = null;
    navDrop.value = null;
  }
  function onDragLeave() {
    if (navDrop.value?.kind === "form-fields" && navDrop.value?.id === element.id) navDrop.value = null;
  }
  return /* @__PURE__ */ u4("li", { children: /* @__PURE__ */ u4(
    "div",
    {
      class: `nav-item nav-form-fields ${isBefore ? "nav-drop-before" : ""} ${isAfter ? "nav-drop-after" : ""}`,
      onClick: () => selectElement(element.id),
      onDragOver,
      onDrop,
      onDragLeave,
      children: [
        /* @__PURE__ */ u4("span", { class: "nav-toggle-spacer" }),
        /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ u4("path", { d: "M12 11h4" }),
          /* @__PURE__ */ u4("path", { d: "M12 16h4" }),
          /* @__PURE__ */ u4("path", { d: "M8 11h.01" }),
          /* @__PURE__ */ u4("path", { d: "M8 16h.01" }),
          /* @__PURE__ */ u4("rect", { width: "16", height: "16", x: "4", y: "4", rx: "2" })
        ] }),
        /* @__PURE__ */ u4("span", { class: "nav-label", children: [
          "fields (",
          element.props?.fields?.length || 0,
          ")"
        ] })
      ]
    }
  ) });
}

// src/App.jsx
(async function loadLayout() {
  const { ajaxUrl, postId } = window.nomentor;
  try {
    const resp = await fetch(`${ajaxUrl}?action=nomentor_load&post_id=${postId}`);
    const data = await resp.json();
    if (data.success && data.data?.layoutB64) {
      try {
        const json = decodeURIComponent(escape(atob(data.data.layoutB64)));
        const layout = JSON.parse(json);
        if (Array.isArray(layout) && layout.length > 0) {
          rows.value = layout;
          syncIdCounter(layout);
        }
      } catch (le) {
        console.warn("Failed to parse layout, starting fresh:", le);
      }
    }
    if (data.success && data.data?.history && data.data.history.length > 2) {
      try {
        const decoded = decodeURIComponent(escape(atob(data.data.history)));
        const h5 = JSON.parse(decoded);
        if (Array.isArray(h5) && h5.length > 0) {
          console.log("Loaded history:", h5.length, "entries");
          loadHistory(h5);
        }
      } catch (he) {
      }
    }
    if (data.success && data.data?.pageSettings) {
      loadPageSettings(data.data.pageSettings);
    }
  } catch (e4) {
    console.warn("Failed to load layout:", e4);
  }
})();
function App() {
  const { title, backUrl, viewUrl } = window.nomentor;
  const mode = sidebarMode.value;
  const showLeft = leftSidebarOpen.value;
  const showRight = rightSidebarOpen.value;
  const editorClass = `nomentor-editor ${!showLeft ? "no-left" : ""} ${!showRight ? "no-right" : ""}`;
  return /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4(Toolbar, { backUrl, viewUrl }),
    /* @__PURE__ */ u4("div", { class: editorClass, children: [
      mode === "globalSettings" || mode === "pageSettings" ? /* @__PURE__ */ u4(Settings, { mode }) : mode === "properties" ? /* @__PURE__ */ u4(Properties, {}) : mode === "toolbox" ? /* @__PURE__ */ u4(Toolbox, {}) : /* @__PURE__ */ u4(History, {}),
      /* @__PURE__ */ u4(Canvas, {}),
      /* @__PURE__ */ u4(Navigator, {})
    ] }),
    /* @__PURE__ */ u4(MediaPicker, {})
  ] });
}

// src/index.jsx
try {
  const root = document.getElementById("nomentor-root");
  if (!root) {
    document.body.innerHTML = '<pre style="color:red;padding:20px">Error: #nomentor-root not found</pre>';
  } else {
    J(/* @__PURE__ */ u4(App, {}), root);
  }
} catch (e4) {
  document.body.innerHTML = '<pre style="color:red;padding:20px">Render error: ' + e4.message + "\n" + e4.stack + "</pre>";
  console.error("Nomentor render error:", e4);
}
