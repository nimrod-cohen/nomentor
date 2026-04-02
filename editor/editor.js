(() => {
  // node_modules/preact/dist/preact.module.js
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
    var a4, h4, y5, d4, w5, g4, _4, m4 = t4 && t4.__k || v, b3 = l5.length;
    for (f5 = A(u5, l5, m4, f5, b3), a4 = 0; a4 < b3; a4++) null != (y5 = u5.__k[a4]) && (h4 = -1 != y5.__i && m4[y5.__i] || p, y5.__i = a4, g4 = z(n3, y5, h4, i5, r4, o4, e4, f5, c4, s4), d4 = y5.__e, y5.ref && h4.ref != y5.ref && (h4.ref && D(h4.ref, null, y5), s4.push(y5.ref, y5.__c || d4, y5)), null == w5 && null != d4 && (w5 = d4), (_4 = !!(4 & y5.__u)) || h4.__k === y5.__k ? f5 = H(y5, f5, n3, _4) : "function" == typeof y5.type && void 0 !== g4 ? f5 = g4 : d4 && (f5 = d4.nextSibling), y5.__u &= -7);
    return u5.__e = w5, f5;
  }
  function A(n3, l5, u5, t4, i5) {
    var r4, o4, e4, f5, c4, s4 = u5.length, a4 = s4, h4 = 0;
    for (n3.__k = new Array(i5), r4 = 0; r4 < i5; r4++) null != (o4 = l5[r4]) && "boolean" != typeof o4 && "function" != typeof o4 ? ("string" == typeof o4 || "number" == typeof o4 || "bigint" == typeof o4 || o4.constructor == String ? o4 = n3.__k[r4] = m(null, o4, null, null, null) : d(o4) ? o4 = n3.__k[r4] = m(k, { children: o4 }, null, null, null) : void 0 === o4.constructor && o4.__b > 0 ? o4 = n3.__k[r4] = m(o4.type, o4.props, o4.key, o4.ref ? o4.ref : null, o4.__v) : n3.__k[r4] = o4, f5 = r4 + h4, o4.__ = n3, o4.__b = n3.__b + 1, e4 = null, -1 != (c4 = o4.__i = T(o4, u5, f5, a4)) && (a4--, (e4 = u5[c4]) && (e4.__u |= 2)), null == e4 || null == e4.__v ? (-1 == c4 && (i5 > s4 ? h4-- : i5 < s4 && h4++), "function" != typeof o4.type && (o4.__u |= 4)) : c4 != f5 && (c4 == f5 - 1 ? h4-- : c4 == f5 + 1 ? h4++ : (c4 > f5 ? h4-- : h4++, o4.__u |= 4))) : n3.__k[r4] = null;
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
    var a4, h4, p5, y5, _4, m4, b3, S3, C4, M2, $2, I3, A3, H2, L, T4 = u5.type;
    if (void 0 !== u5.constructor) return null;
    128 & t4.__u && (c4 = !!(32 & t4.__u), o4 = [f5 = u5.__e = t4.__e]), (a4 = l.__b) && a4(u5);
    n: if ("function" == typeof T4) try {
      if (S3 = u5.props, C4 = T4.prototype && T4.prototype.render, M2 = (a4 = T4.contextType) && i5[a4.__c], $2 = a4 ? M2 ? M2.props.value : a4.__ : i5, t4.__c ? b3 = (h4 = u5.__c = t4.__c).__ = h4.__E : (C4 ? u5.__c = h4 = new T4(S3, $2) : (u5.__c = h4 = new x(S3, $2), h4.constructor = T4, h4.render = G), M2 && M2.sub(h4), h4.state || (h4.state = {}), h4.__n = i5, p5 = h4.__d = true, h4.__h = [], h4._sb = []), C4 && null == h4.__s && (h4.__s = h4.state), C4 && null != T4.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = w({}, h4.__s)), w(h4.__s, T4.getDerivedStateFromProps(S3, h4.__s))), y5 = h4.props, _4 = h4.state, h4.__v = u5, p5) C4 && null == T4.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), C4 && null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
      else {
        if (C4 && null == T4.getDerivedStateFromProps && S3 !== y5 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(S3, $2), u5.__v == t4.__v || !h4.__e && null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(S3, h4.__s, $2)) {
          u5.__v != t4.__v && (h4.props = S3, h4.state = h4.__s, h4.__d = false), u5.__e = t4.__e, u5.__k = t4.__k, u5.__k.some(function(n4) {
            n4 && (n4.__ = u5);
          }), v.push.apply(h4.__h, h4._sb), h4._sb = [], h4.__h.length && e4.push(h4);
          break n;
        }
        null != h4.componentWillUpdate && h4.componentWillUpdate(S3, h4.__s, $2), C4 && null != h4.componentDidUpdate && h4.__h.push(function() {
          h4.componentDidUpdate(y5, _4, m4);
        });
      }
      if (h4.context = $2, h4.props = S3, h4.__P = n3, h4.__e = false, I3 = l.__r, A3 = 0, C4) h4.state = h4.__s, h4.__d = false, I3 && I3(u5), a4 = h4.render(h4.props, h4.state, h4.context), v.push.apply(h4.__h, h4._sb), h4._sb = [];
      else do {
        h4.__d = false, I3 && I3(u5), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
      } while (h4.__d && ++A3 < 25);
      h4.state = h4.__s, null != h4.getChildContext && (i5 = w(w({}, i5), h4.getChildContext())), C4 && !p5 && null != h4.getSnapshotBeforeUpdate && (m4 = h4.getSnapshotBeforeUpdate(y5, _4)), H2 = null != a4 && a4.type === k && null == a4.key ? q(a4.props.children) : a4, f5 = P(n3, d(H2) ? H2 : [H2], u5, t4, i5, r4, o4, e4, f5, c4, s4), h4.base = u5.__e, u5.__u &= -161, h4.__h.length && e4.push(h4), b3 && (h4.__E = h4.__ = null);
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
    var a4, h4, v4, y5, w5, _4, m4, b3 = i5.props || p, k3 = t4.props, x4 = t4.type;
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
      for (a4 in k3) w5 = k3[a4], "children" == a4 ? y5 = w5 : "dangerouslySetInnerHTML" == a4 ? h4 = w5 : "value" == a4 ? _4 = w5 : "checked" == a4 ? m4 = w5 : c4 && "function" != typeof w5 || b3[a4] === w5 || F(u5, a4, w5, b3[a4], o4);
      if (h4) c4 || v4 && (h4.__html == v4.__html || h4.__html == u5.innerHTML) || (u5.innerHTML = h4.__html), t4.__k = [];
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

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f2 = 0;
  var i2 = Array.isArray;
  function u2(e4, t4, n3, o4, i5, u5) {
    t4 || (t4 = {});
    var a4, c4, p5 = t4;
    if ("ref" in p5) for (c4 in p5 = {}, t4) "ref" == c4 ? a4 = t4[c4] : p5[c4] = t4[c4];
    var l5 = { type: e4, props: p5, key: n3, ref: a4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i5, __self: u5 };
    if ("function" == typeof e4 && (a4 = e4.defaultProps)) for (c4 in a4) void 0 === p5[c4] && (p5[c4] = a4[c4]);
    return l.vnode && l.vnode(l5), l5;
  }

  // editor/src/icons.jsx
  var I2 = (props, paths) => /* @__PURE__ */ u2(
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
  var ArrowLeft = (p5) => I2(p5, /* @__PURE__ */ u2(k, { children: [
    /* @__PURE__ */ u2("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ u2("path", { d: "M19 12H5" })
  ] }));
  var Eye = (p5) => I2(p5, /* @__PURE__ */ u2(k, { children: [
    /* @__PURE__ */ u2("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }),
    /* @__PURE__ */ u2("circle", { cx: "12", cy: "12", r: "3" })
  ] }));
  var Grid = (p5) => I2(p5, /* @__PURE__ */ u2(k, { children: [
    /* @__PURE__ */ u2("rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }),
    /* @__PURE__ */ u2("rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }),
    /* @__PURE__ */ u2("rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }),
    /* @__PURE__ */ u2("rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" })
  ] }));
  var Heading = (p5) => I2(p5, /* @__PURE__ */ u2(k, { children: [
    /* @__PURE__ */ u2("path", { d: "M6 12h12" }),
    /* @__PURE__ */ u2("path", { d: "M6 20V4" }),
    /* @__PURE__ */ u2("path", { d: "M18 20V4" })
  ] }));
  var AlignLeft = (p5) => I2(p5, /* @__PURE__ */ u2(k, { children: [
    /* @__PURE__ */ u2("path", { d: "M17 6.1H3" }),
    /* @__PURE__ */ u2("path", { d: "M21 12.1H3" }),
    /* @__PURE__ */ u2("path", { d: "M15.1 18H3" })
  ] }));
  var Image = (p5) => I2(p5, /* @__PURE__ */ u2(k, { children: [
    /* @__PURE__ */ u2("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }),
    /* @__PURE__ */ u2("circle", { cx: "9", cy: "9", r: "2" }),
    /* @__PURE__ */ u2("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
  ] }));

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u3;
  var i3;
  var o2 = 0;
  var f3 = [];
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
    for (var n3; n3 = f3.shift(); ) {
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
    i5 && (u3 === r2 ? (i5.__h = [], r2.__h = [], i5.__.some(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.u = n4.__N = void 0;
    })) : (i5.__h.some(z2), i5.__h.some(B2), i5.__h = [], t2 = 0)), u3 = r2;
  }, c2.diffed = function(n3) {
    v2 && v2(n3);
    var t4 = n3.__c;
    t4 && t4.__H && (t4.__H.__h.length && (1 !== f3.push(t4) && i3 === c2.requestAnimationFrame || ((i3 = c2.requestAnimationFrame) || w2)(j2)), t4.__H.__.some(function(n4) {
      n4.u && (n4.__H = n4.u), n4.u = void 0;
    })), u3 = r2 = null;
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

  // node_modules/@preact/signals-core/dist/signals-core.module.js
  var i4 = Symbol.for("preact-signals");
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
      while (void 0 !== h2) {
        var n3 = h2;
        h2 = void 0;
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
    e3 = ++u4;
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
  var f4;
  var h2 = void 0;
  var s3 = 0;
  var v3 = 0;
  var u4 = 0;
  var e3 = 0;
  var c3 = void 0;
  var d2 = 0;
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
  l3.prototype.brand = i4;
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
      d2++;
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
    this.g = d2 - 1;
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
    if (this.g === d2) return true;
    this.g = d2;
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
    if (f4) f4.push(this);
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
      this.u = h2;
      h2 = this;
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

  // node_modules/@preact/signals/dist/signals.module.js
  var l4;
  var d3;
  var h3;
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
    if (h3) {
      var n3 = h3;
      h3 = void 0;
      n3();
    }
    h3 = i5 && i5.S();
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
      d3 = o4;
      b2(r4);
    }
  });
  g3("__e", function(i5, n3, r4, t4) {
    b2();
    d3 = void 0;
    i5(n3, r4, t4);
  });
  g3("diffed", function(i5, n3) {
    b2();
    d3 = void 0;
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

  // editor/src/state.js
  var saveStatus = y3("saved");
  var history = y3([]);
  var MAX_HISTORY = 50;
  function pushHistory() {
    const snapshot = JSON.stringify(rows.value);
    const list = [...history.value];
    list.push({ timestamp: Date.now(), snapshot });
    if (list.length > MAX_HISTORY) list.shift();
    history.value = list;
  }
  function autoSave() {
    const { ajaxUrl, nonce, postId } = window.nomentor;
    const data = JSON.stringify(rows.value);
    const historyData = JSON.stringify(history.value);
    saveStatus.value = "saving";
    fetch(ajaxUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `action=nomentor_save&nonce=${encodeURIComponent(nonce)}&post_id=${postId}&data=${encodeURIComponent(data)}&history=${encodeURIComponent(historyData)}`
    }).then((r4) => r4.json()).then((r4) => {
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
    pushHistory();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(autoSave, 800);
  }
  var previewIndex = y3(null);
  var _liveSnapshot = null;
  function previewVersion(index) {
    const entry = history.value[index];
    if (!entry) {
      console.warn("No history entry at index", index);
      return;
    }
    try {
      if (previewIndex.value === null) {
        _liveSnapshot = JSON.stringify(rows.value);
      }
      const parsed = JSON.parse(entry.snapshot);
      console.log("Preview version", index, "- rows:", parsed.length);
      rows.value = parsed;
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
      const reverted = JSON.parse(entry.snapshot);
      rows.value = reverted;
      _liveSnapshot = null;
      previewIndex.value = null;
      pushHistory();
      autoSave();
    } catch {
    }
  }
  var sidebarMode = y3("toolbox");
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
    return el;
  }
  function addRow(beforeRowId = null) {
    const row = { id: nextId("row"), elements: [] };
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
      elements: row.elements.map((element) => {
        if (!element.children) return element;
        return {
          ...element,
          children: element.children.map((cell) => {
            if (cell.id !== cellId) return cell;
            return { ...cell, elements: [...cell.elements, el] };
          })
        };
      })
    }));
    selectedId.value = el.id;
    return el.id;
  }
  function addGridCell(elementId) {
    rows.value = rows.value.map((row) => ({
      ...row,
      elements: row.elements.map((el) => {
        if (el.id !== elementId || !el.children) return el;
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
      elements: row.elements.map((el) => {
        if (el.id !== elementId || !el.children || el.children.length <= 1) return el;
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
      elements: row.elements.filter((el) => el.id !== elementId).map((el) => {
        if (!el.children) return el;
        return {
          ...el,
          children: el.children.map((cell) => ({
            ...cell,
            elements: cell.elements.filter((e4) => e4.id !== elementId)
          }))
        };
      })
    }));
    if (selectedId.value === elementId) selectedId.value = null;
  }
  function updateElementProps(elementId, props) {
    rows.value = rows.value.map((row) => ({
      ...row,
      elements: row.elements.map((el) => {
        if (el.id === elementId) return { ...el, props: { ...el.props, ...props } };
        if (!el.children) return el;
        return {
          ...el,
          children: el.children.map((cell) => ({
            ...cell,
            elements: cell.elements.map(
              (e4) => e4.id === elementId ? { ...e4, props: { ...e4.props, ...props } } : e4
            )
          }))
        };
      })
    }));
  }
  function dropOnCanvas(type, beforeRowId = null) {
    const rowId = addRow(beforeRowId);
    addElementToRow(rowId, type);
    commitChange();
  }
  function dropOnContainer(type, rowId) {
    addElementToRow(rowId, type);
    commitChange();
  }
  function commitChange() {
    pushHistory();
    debouncedSave();
  }
  var dragging = y3(null);
  var dropTargetId = y3(null);

  // editor/src/components/Toolbar.jsx
  function Toolbar({ title, backUrl, viewUrl }) {
    const status = saveStatus.value;
    const mode = sidebarMode.value;
    return /* @__PURE__ */ u2("div", { class: "nomentor-toolbar", children: [
      /* @__PURE__ */ u2("a", { href: backUrl, children: [
        /* @__PURE__ */ u2(ArrowLeft, { size: 16 }),
        "Back"
      ] }),
      /* @__PURE__ */ u2("span", { class: "separator" }),
      /* @__PURE__ */ u2("span", { class: "page-title", children: title }),
      /* @__PURE__ */ u2("span", { class: "separator" }),
      /* @__PURE__ */ u2("div", { class: "toolbar-toggle", children: [
        /* @__PURE__ */ u2(
          "button",
          {
            class: mode === "toolbox" ? "active" : "",
            onClick: () => {
              sidebarMode.value = "toolbox";
              if (previewIndex.value !== null) exitPreview();
            },
            title: "Toolbox",
            children: /* @__PURE__ */ u2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ u2("rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }),
              /* @__PURE__ */ u2("rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }),
              /* @__PURE__ */ u2("rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }),
              /* @__PURE__ */ u2("rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" })
            ] })
          }
        ),
        /* @__PURE__ */ u2(
          "button",
          {
            class: mode === "history" ? "active" : "",
            onClick: () => sidebarMode.value = "history",
            title: "History",
            children: /* @__PURE__ */ u2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ u2("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
              /* @__PURE__ */ u2("path", { d: "M3 3v5h5" }),
              /* @__PURE__ */ u2("path", { d: "M12 7v5l4 2" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ u2("span", { class: "spacer" }),
      /* @__PURE__ */ u2("span", { class: `save-status ${status}`, children: status === "saving" ? "Saving..." : status === "error" ? "Save failed" : "Saved" }),
      /* @__PURE__ */ u2("a", { href: viewUrl || "#", target: "_blank", class: viewUrl ? "" : "disabled", title: "View page", children: /* @__PURE__ */ u2(Eye, { size: 16 }) })
    ] });
  }

  // editor/src/components/Toolbox.jsx
  var COMPONENTS = [
    { type: "grid", label: "Grid", icon: Grid },
    { type: "heading", label: "Heading", icon: Heading },
    { type: "text", label: "Text", icon: AlignLeft },
    { type: "image", label: "Image", icon: Image }
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
    return /* @__PURE__ */ u2("aside", { class: "nomentor-sidebar-left", children: [
      /* @__PURE__ */ u2("div", { class: "sidebar-header", children: "Toolbox" }),
      /* @__PURE__ */ u2("div", { class: "sidebar-content", children: /* @__PURE__ */ u2("div", { class: "toolbox-grid", children: COMPONENTS.map((c4) => /* @__PURE__ */ u2(
        "div",
        {
          class: "toolbox-item",
          draggable: true,
          onDragStart: (e4) => onDragStart(e4, c4.type),
          onDragEnd,
          children: [
            /* @__PURE__ */ u2(c4.icon, {}),
            /* @__PURE__ */ u2("span", { children: c4.label })
          ]
        },
        c4.type
      )) }) })
    ] });
  }

  // editor/src/components/History.jsx
  function History() {
    const entries = history.value;
    const previewing = previewIndex.value;
    return /* @__PURE__ */ u2("aside", { class: "nomentor-sidebar-left", children: [
      /* @__PURE__ */ u2("div", { class: "sidebar-header", children: [
        "History",
        previewing !== null && /* @__PURE__ */ u2("button", { class: "history-exit-btn", onClick: exitPreview, children: "Back to live" })
      ] }),
      /* @__PURE__ */ u2("div", { class: "sidebar-content", children: entries.length === 0 ? /* @__PURE__ */ u2("div", { class: "history-empty", children: "No changes yet" }) : /* @__PURE__ */ u2("ul", { class: "history-list", children: [...entries].reverse().map((entry, ri) => {
        const i5 = entries.length - 1 - ri;
        const isActive = previewing === i5;
        return /* @__PURE__ */ u2("li", { class: `history-item ${isActive ? "active" : ""}`, onClick: () => previewVersion(i5), children: [
          /* @__PURE__ */ u2("span", { class: "history-time", children: formatTime(entry.timestamp) }),
          /* @__PURE__ */ u2("span", { class: "history-action", children: [
            "Version ",
            i5 + 1
          ] }),
          isActive && /* @__PURE__ */ u2("button", { class: "history-revert-btn", onClick: (e4) => {
            e4.stopPropagation();
            revertToVersion(i5);
          }, title: "Revert to this version", children: /* @__PURE__ */ u2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ u2("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
            /* @__PURE__ */ u2("path", { d: "M3 3v5h5" })
          ] }) })
        ] }, i5);
      }) }) })
    ] });
  }
  function formatTime(ts) {
    const d4 = new Date(ts);
    return d4.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }

  // editor/src/components/rows/HeadingElement.jsx
  function HeadingElement({ element }) {
    const Tag = element.props.level || "h2";
    return /* @__PURE__ */ u2(
      Tag,
      {
        contentEditable: true,
        suppressContentEditableWarning: true,
        style: { outline: "none" },
        onBlur: (e4) => {
          updateElementProps(element.id, { text: e4.target.textContent });
          commitChange();
        },
        children: element.props.text
      }
    );
  }

  // editor/src/components/rows/TextElement.jsx
  function TextElement({ element }) {
    return /* @__PURE__ */ u2(
      "p",
      {
        contentEditable: true,
        suppressContentEditableWarning: true,
        style: { outline: "none" },
        onBlur: (e4) => {
          updateElementProps(element.id, { text: e4.target.textContent });
          commitChange();
        },
        children: element.props.text
      }
    );
  }

  // editor/src/components/rows/ImageElement.jsx
  function ImageElement({ element }) {
    if (element.props.src) {
      return /* @__PURE__ */ u2("img", { src: element.props.src, alt: element.props.alt, style: { maxWidth: "100%" } });
    }
    return /* @__PURE__ */ u2("div", { style: {
      background: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "120px",
      borderRadius: "4px",
      color: "#999",
      fontSize: "13px"
    }, children: "Click to set image" });
  }

  // editor/src/components/rows/GridElement.jsx
  function GridElement({ element }) {
    const cols = element.props.columns || 2;
    function onCellDragOver(e4) {
      if (!dragging.value || dragging.value.source !== "toolbox") return;
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
      if (type === "grid") return;
      addElementToCell(cellId, type);
      dragging.value = null;
      commitChange();
    }
    return /* @__PURE__ */ u2("div", { class: "grid-element", style: { gridTemplateColumns: `repeat(${cols}, 1fr)` }, children: element.children.map((cell) => /* @__PURE__ */ u2(
      "div",
      {
        class: "grid-cell",
        onDragOver: onCellDragOver,
        onDragLeave: onCellDragLeave,
        onDrop: (e4) => onCellDrop(e4, cell.id),
        children: [
          cell.elements.length === 0 && /* @__PURE__ */ u2("div", { class: "cell-empty", children: "Drop here" }),
          cell.elements.map((el) => /* @__PURE__ */ u2(ElementRenderer, { element: el }, el.id))
        ]
      },
      cell.id
    )) });
  }

  // editor/src/components/rows/ElementRenderer.jsx
  var RENDERERS = {
    heading: HeadingElement,
    text: TextElement,
    image: ImageElement,
    grid: GridElement
  };
  function ElementRenderer({ element }) {
    const Comp = RENDERERS[element.type];
    if (!Comp) return /* @__PURE__ */ u2("div", { children: [
      "Unknown: ",
      element.type
    ] });
    const isSelected = selectedId.value === element.id;
    return /* @__PURE__ */ u2(
      "div",
      {
        class: `element-wrapper ${isSelected ? "selected" : ""}`,
        onClick: (e4) => {
          e4.stopPropagation();
          selectedId.value = element.id;
        },
        children: [
          /* @__PURE__ */ u2("div", { class: "element-label", children: element.type }),
          /* @__PURE__ */ u2(Comp, { element })
        ]
      }
    );
  }

  // editor/src/components/Canvas.jsx
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
        const sel = selectedId.value;
        if (!sel) return;
        const row = rows.value.find((r4) => r4.id === sel);
        if (row) {
          removeRow(sel);
          commitChange();
          return;
        }
        removeElement(sel);
        commitChange();
      }
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }, []);
    const rowList = rows.value;
    const isDragging = !!dragging.value;
    return /* @__PURE__ */ u2("main", { class: "nomentor-canvas", children: /* @__PURE__ */ u2(
      "div",
      {
        ref: pageRef,
        class: `canvas-page ${isDragging ? "drag-over" : ""}`,
        onDragOver,
        onDragLeave,
        onDrop,
        children: [
          rowList.length === 0 && /* @__PURE__ */ u2("div", { class: "canvas-empty", children: "Drag components here to start building" }),
          rowList.map((row) => /* @__PURE__ */ u2(CanvasRow, { row }, row.id))
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
    return /* @__PURE__ */ u2(k, { children: [
      isDropTarget && /* @__PURE__ */ u2("div", { class: "drop-indicator" }),
      /* @__PURE__ */ u2(
        "div",
        {
          class: `canvas-row ${isSelected ? "selected" : ""}`,
          "data-row-id": row.id,
          onClick: (e4) => {
            e4.stopPropagation();
            selectedId.value = row.id;
          },
          onDragOver: onRowDragOver,
          onDrop: onRowDrop,
          children: [
            /* @__PURE__ */ u2("div", { class: "row-label", children: "container" }),
            row.elements.length === 0 && /* @__PURE__ */ u2("div", { class: "row-empty", children: "Empty container \u2014 drag a component here" }),
            row.elements.map((el) => /* @__PURE__ */ u2(ElementRenderer, { element: el }, el.id))
          ]
        }
      )
    ] });
  }

  // editor/src/components/Navigator.jsx
  var contextMenu = y3(null);
  if (typeof document !== "undefined") {
    document.addEventListener("click", () => {
      contextMenu.value = null;
    });
  }
  function Navigator() {
    const rowList = rows.value;
    return /* @__PURE__ */ u2("aside", { class: "nomentor-sidebar-right", children: [
      /* @__PURE__ */ u2("div", { class: "sidebar-header", children: "Navigator" }),
      /* @__PURE__ */ u2("div", { class: "sidebar-content", children: !rowList.length ? /* @__PURE__ */ u2("div", { class: "nav-empty", children: "No elements yet" }) : /* @__PURE__ */ u2("ul", { class: "nav-tree", children: rowList.map((row) => /* @__PURE__ */ u2(NavRow, { row }, row.id)) }) }),
      contextMenu.value && /* @__PURE__ */ u2(ContextMenu, {})
    ] });
  }
  function ContextMenu() {
    const { x: x4, y: y5, id, kind, parentId } = contextMenu.value;
    function onRemove(e4) {
      e4.stopPropagation();
      if (kind === "container") removeRow(id);
      else if (kind === "cell") removeGridCell(parentId, id);
      else removeElement(id);
      commitChange();
      contextMenu.value = null;
    }
    function onAddCell(e4) {
      e4.stopPropagation();
      addGridCell(id);
      commitChange();
      contextMenu.value = null;
    }
    const isGrid = kind === "element" && rows.value.some(
      (r4) => r4.elements.some((el) => el.id === id && el.type === "grid")
    );
    let canRemoveCell = true;
    if (kind === "cell") {
      for (const r4 of rows.value) {
        for (const el of r4.elements) {
          if (el.id === parentId && el.children) {
            canRemoveCell = el.children.length > 1;
          }
        }
      }
    }
    return /* @__PURE__ */ u2("div", { class: "nav-context-menu", style: { top: y5, left: x4 }, onClick: (e4) => e4.stopPropagation(), children: kind === "cell" ? canRemoveCell && /* @__PURE__ */ u2("button", { onClick: onRemove, children: [
      /* @__PURE__ */ u2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ u2("path", { d: "M3 6h18" }),
        /* @__PURE__ */ u2("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
        /* @__PURE__ */ u2("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
      ] }),
      "Remove cell"
    ] }) : /* @__PURE__ */ u2(k, { children: [
      isGrid && /* @__PURE__ */ u2("button", { class: "context-action", onClick: onAddCell, children: [
        /* @__PURE__ */ u2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ u2("path", { d: "M12 5v14" }),
          /* @__PURE__ */ u2("path", { d: "M5 12h14" })
        ] }),
        "Add cell"
      ] }),
      /* @__PURE__ */ u2("button", { onClick: onRemove, children: [
        /* @__PURE__ */ u2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ u2("path", { d: "M3 6h18" }),
          /* @__PURE__ */ u2("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
          /* @__PURE__ */ u2("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
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
    return /* @__PURE__ */ u2("li", { children: [
      /* @__PURE__ */ u2(
        "div",
        {
          class: `nav-item ${isSelected ? "selected" : ""}`,
          onClick: () => selectedId.value = row.id,
          onContextMenu: (e4) => openContextMenu(e4, row.id, "container"),
          children: "container"
        }
      ),
      row.elements.length > 0 && /* @__PURE__ */ u2("ul", { class: "nav-children", children: row.elements.map((el) => /* @__PURE__ */ u2(NavElement, { element: el }, el.id)) })
    ] });
  }
  function NavElement({ element }) {
    const isSelected = selectedId.value === element.id;
    return /* @__PURE__ */ u2("li", { children: [
      /* @__PURE__ */ u2(
        "div",
        {
          class: `nav-item ${isSelected ? "selected" : ""}`,
          onClick: (e4) => {
            e4.stopPropagation();
            selectedId.value = element.id;
          },
          onContextMenu: (e4) => openContextMenu(e4, element.id, "element"),
          children: element.type
        }
      ),
      element.children && /* @__PURE__ */ u2("ul", { class: "nav-children", children: element.children.map((cell) => /* @__PURE__ */ u2(NavCell, { cell, gridId: element.id }, cell.id)) })
    ] });
  }
  function NavCell({ cell, gridId }) {
    return /* @__PURE__ */ u2("li", { children: [
      /* @__PURE__ */ u2(
        "div",
        {
          class: "nav-item nav-cell",
          onContextMenu: (e4) => openContextMenu(e4, cell.id, "cell", gridId),
          children: "cell"
        }
      ),
      cell.elements.length > 0 && /* @__PURE__ */ u2("ul", { class: "nav-children", children: cell.elements.map((el) => /* @__PURE__ */ u2(NavElement, { element: el }, el.id)) })
    ] });
  }

  // editor/src/App.jsx
  (async function loadLayout() {
    const { ajaxUrl, postId } = window.nomentor;
    try {
      const resp = await fetch(`${ajaxUrl}?action=nomentor_load&post_id=${postId}`);
      const data = await resp.json();
      if (data.success && data.data?.layout) {
        const layout = JSON.parse(data.data.layout);
        if (Array.isArray(layout) && layout.length > 0) {
          rows.value = layout;
          syncIdCounter(layout);
        }
      }
      if (data.success && data.data?.history) {
        try {
          const h4 = JSON.parse(data.data.history);
          loadHistory(h4);
        } catch {
        }
      }
    } catch (e4) {
      console.warn("Failed to load layout:", e4);
    }
  })();
  function App() {
    const { title, backUrl, viewUrl } = window.nomentor;
    const mode = sidebarMode.value;
    return /* @__PURE__ */ u2(k, { children: [
      /* @__PURE__ */ u2(Toolbar, { title, backUrl, viewUrl }),
      /* @__PURE__ */ u2("div", { class: "nomentor-editor", children: [
        mode === "toolbox" ? /* @__PURE__ */ u2(Toolbox, {}) : /* @__PURE__ */ u2(History, {}),
        /* @__PURE__ */ u2(Canvas, {}),
        /* @__PURE__ */ u2(Navigator, {})
      ] })
    ] });
  }

  // editor/src/index.jsx
  try {
    const root = document.getElementById("nomentor-root");
    if (!root) {
      document.body.innerHTML = '<pre style="color:red;padding:20px">Error: #nomentor-root not found</pre>';
    } else {
      J(/* @__PURE__ */ u2(App, {}), root);
    }
  } catch (e4) {
    document.body.innerHTML = '<pre style="color:red;padding:20px">Render error: ' + e4.message + "\n" + e4.stack + "</pre>";
    console.error("Nomentor render error:", e4);
  }
})();
//# sourceMappingURL=editor.js.map
