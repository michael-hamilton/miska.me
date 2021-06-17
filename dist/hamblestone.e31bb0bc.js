// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = N;
exports.hydrate = O;
exports.h = exports.createElement = a;
exports.Fragment = y;
exports.createRef = h;
exports.Component = p;
exports.cloneElement = S;
exports.createContext = q;
exports.toChildArray = w;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    r = {},
    f = [],
    e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = l;
exports.options = n;

function c(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function s(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function a(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = {};

  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
  return v(n, f, i, t, null);
}

function v(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++n.__v : o
  };
  return null != n.vnode && n.vnode(r), r;
}

function h() {
  return {
    current: null
  };
}

function y(n) {
  return n.children;
}

function p(n, l) {
  this.props = n, this.context = l;
}

function d(n, l) {
  if (null == l) return n.__ ? d(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? d(n) : null;
}

function _(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return _(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !b.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(b);
}

function b() {
  for (var n; b.__r = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, o, r;
    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = c({}, t)).__v = t.__v + 1, I(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? d(t) : o, t.__h), T(u, t), t.__e != o && _(t)));
  });
}

function m(n, l, u, i, t, o, e, c, s, a) {
  var h,
      p,
      _,
      k,
      b,
      m,
      w,
      A = i && i.__k || f,
      P = A.length;

  for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(y, {
    children: k
  }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (_ = A[h]) || _ && k.key == _.key && k.type === _.type) A[h] = void 0;else for (p = 0; p < P; p++) {
      if ((_ = A[p]) && k.key == _.key && k.type === _.type) {
        A[p] = void 0;
        break;
      }

      _ = null;
    }
    I(n, k, _ = _ || r, t, o, e, c, s, a), b = k.__e, (p = k.ref) && _.ref != p && (w || (w = []), _.ref && w.push(_.ref, null, k), w.push(p, k.__c || b, k)), null != b ? (null == m && (m = b), "function" == typeof k.type && null != k.__k && k.__k === _.__k ? k.__d = s = g(k, s, n) : s = x(n, k, _, A, b, s), a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && _.__e == s && s.parentNode != n && (s = d(_));
  }

  for (u.__e = m, h = P; h--;) null != A[h] && ("function" == typeof u.type && null != A[h].__e && A[h].__e == u.__d && (u.__d = d(i, h + 1)), L(A[h], A[h]));

  if (w) for (h = 0; h < w.length; h++) z(w[h], w[++h], w[++h]);
}

function g(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? g(t, l, u) : x(u, t, t, n.__k, t.__e, l));

  return l;
}

function w(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    w(n, l);
  }) : l.push(n)), l;
}

function x(n, l, u, i, t, o) {
  var r, f, e;
  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

    n.insertBefore(t, o), r = o;
  }
  return void 0 !== r ? r : t.nextSibling;
}

function A(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || e.test(l) ? u : u + "px";
}

function C(n, l, u, i, t) {
  var o;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? H : $, o) : n.removeEventListener(l, o ? H : $, o);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
  }
}

function $(l) {
  this.l[l.type + !1](n.event ? n.event(l) : l);
}

function H(l) {
  this.l[l.type + !0](n.event ? n.event(l) : l);
}

function I(l, u, i, t, o, r, f, e, s) {
  var a,
      v,
      h,
      d,
      _,
      k,
      b,
      g,
      w,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  null != i.__h && (s = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, w = (a = P.contextType) && t[a.__c], x = a ? w ? w.props.value : a.__ : t, i.__c ? b = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new p(g, x), v.constructor = P, v.render = M), w && w.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = c({}, v.__s)), c(v.__s, P.getDerivedStateFromProps(g, v.__s))), d = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== d && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
          v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), v.__h.length && f.push(v);
          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(d, _, k);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = c(c({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(d, _)), A = null != a && a.type === y && null == a.key ? a.props.children : a, m(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, s), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), b && (v.__E = v.__ = null), v.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = j(i.__e, u, i, t, o, r, f, s);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, (s || null != r) && (u.__e = e, u.__h = !!s, r[r.indexOf(e)] = null), n.__e(l, u, i);
  }
}

function T(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function j(n, l, u, i, t, o, e, c) {
  var a,
      v,
      h,
      y,
      p = u.props,
      d = l.props,
      _ = l.type,
      k = 0;
  if ("svg" === _ && (t = !0), null != o) for (; k < o.length; k++) if ((a = o[k]) && (a === n || (_ ? a.localName == _ : 3 == a.nodeType))) {
    n = a, o[k] = null;
    break;
  }

  if (null == n) {
    if (null === _) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, d.is && d), o = null, c = !1;
  }

  if (null === _) p === d || c && n.data === d || (n.data = d);else {
    if (o = o && f.slice.call(n.childNodes), v = (p = u.props || r).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }

    if (A(n, d, p, t, c), h) l.__k = [];else if (k = l.props.children, m(n, Array.isArray(k) ? k : [k], l, u, i, t && "foreignObject" !== _, o, e, n.firstChild, c), null != o) for (k = o.length; k--;) null != o[k] && s(o[k]);
    c || ("value" in d && void 0 !== (k = d.value) && (k !== n.value || "progress" === _ && !k) && C(n, "value", k, p.value, !1), "checked" in d && void 0 !== (k = d.checked) && k !== n.checked && C(n, "checked", k, p.checked, !1));
  }
  return n;
}

function z(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function L(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || z(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && L(t[r], u, i);
  null != o && s(o);
}

function M(n, l, u) {
  return this.constructor(n, u);
}

function N(l, u, i) {
  var t, o, e;
  n.__ && n.__(l, u), o = (t = "function" == typeof i) ? null : i && i.__k || u.__k, e = [], I(u, l = (!t && i || u).__k = a(y, null, [l]), o || r, r, void 0 !== u.ownerSVGElement, !t && i ? [i] : o ? null : u.firstChild ? f.slice.call(u.childNodes) : null, e, !t && i ? i : o ? o.__e : u.firstChild, t), T(e, l);
}

function O(n, l) {
  N(n, l, O);
}

function S(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = c({}, n.props);

  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  return null != u && (f.children = u), v(n.type, f, i || n.key, t || n.ref, null);
}

function q(n, l) {
  var u = {
    __c: l = "__cC" + o++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(k);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  },
  __v: 0
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, p.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), "function" == typeof n && (n = n(c({}, u), this.props)), n && c(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, p.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, p.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b.__r = 0, o = 0;
},{}],"node_modules/preact-router/dist/preact-router.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentUrl = getCurrentUrl;
exports.route = route;
exports.exec = exec;
exports.default = exports.Link = exports.Route = exports.Router = exports.subscribers = void 0;

var _preact = require("preact");

var EMPTY$1 = {};

function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
      c = url.match(reg),
      matches = {},
      ret;

  if (c && c[1]) {
    var p = c[1].split('&');

    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }

  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);

  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
          flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
          plus = ~flags.indexOf('+'),
          star = ~flags.indexOf('*'),
          val = url[i$1] || '';

      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }

      matches[param] = decodeURIComponent(val);

      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }

  if (opts.default !== true && ret === false) {
    return false;
  }

  return matches;
}

function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
} // filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.


function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}

function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}

var customHistory = null;
var ROUTERS = [];
var subscribers = [];
exports.subscribers = subscribers;
var EMPTY = {};

function setUrl(url, type) {
  if (type === void 0) type = 'push';

  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}

function getCurrentUrl() {
  var url;

  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }

  return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
  if (replace === void 0) replace = false;

  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  } // only push URL into history if we can handle it


  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }

  return routeTo(url);
}
/** Check if the given URL can be handled by any router instances. */


function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }

  return false;
}
/** Tell all router instances to handle the given URL.  */


function routeTo(url) {
  var didRoute = false;

  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }

  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }

  return didRoute;
}

function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }

  var href = node.getAttribute('href'),
      target = node.getAttribute('target'); // ignore links with targets and non-path URLs

  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  } // attempt to route, if no match simply cede control to browser


  return route(href);
}

function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }

  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}

function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }

    if (e.stopPropagation) {
      e.stopPropagation();
    }

    e.preventDefault();
  }

  return false;
}

function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }

  var t = e.target;

  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      } // if link is handled by the router, prevent browser defaults


      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }

  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }

    addEventListener('click', delegateLinkHandler);
  }

  eventListenersInitialized = true;
}

var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);

    if (props.history) {
      customHistory = props.history;
    }

    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }

  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;

  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }

    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };
  /** Check if the given URL can be matched against any children */


  Router.prototype.canRoute = function canRoute(url) {
    var children = (0, _preact.toChildArray)(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };
  /** Re-render children with a new URL to match against. */


  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url); // trigger a manual re-route if we're not in the middle of an update:

    if (!this.updating) {
      this.forceUpdate();
    }

    return didRoute;
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };

  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;

    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }

    this.updating = false;
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }

    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };

  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };

  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };

  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);

      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return (0, _preact.cloneElement)(vnode, newProps);
        }

        return vnode;
      }
    }).filter(Boolean);
  };

  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren((0, _preact.toChildArray)(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;

    if (url !== previous) {
      this.previousUrl = url;

      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }

    return current;
  };

  return Router;
}(_preact.Component);

exports.Router = Router;

var Link = function (props) {
  return (0, _preact.createElement)('a', assign({
    onClick: handleLinkClick
  }, props));
};

exports.Link = Link;

var Route = function (props) {
  return (0, _preact.createElement)(props.component, props);
};

exports.Route = Route;
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;
var _default = Router;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"node_modules/preact-router/match.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Link = exports.Match = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _preactRouter = require('preact-router');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Match = exports.Match = function (_Component) {
	_inherits(Match, _Component);

	function Match() {
		var _temp, _this, _ret;

		_classCallCheck(this, Match);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
			_this.nextUrl = url;
			_this.setState({});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Match.prototype.componentDidMount = function componentDidMount() {
		_preactRouter.subscribers.push(this.update);
	};

	Match.prototype.componentWillUnmount = function componentWillUnmount() {
		_preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
	};

	Match.prototype.render = function render(props) {
		var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
		    path = url.replace(/\?.+$/, '');
		this.nextUrl = null;
		return props.children({
			url: url,
			path: path,
			matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
		});
	};

	return Match;
}(_preact.Component);

var Link = function Link(_ref) {
	var activeClassName = _ref.activeClassName,
	    path = _ref.path,
	    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);

	return (0, _preact.h)(
		Match,
		{ path: path || props.href },
		function (_ref2) {
			var matches = _ref2.matches;
			return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { 'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ') }));
		}
	);
};

exports.Link = Link;
exports.default = Match;

Match.Link = Link;

},{"preact":"node_modules/preact/dist/preact.module.js","preact-router":"node_modules/preact-router/dist/preact-router.es.js"}],"pages/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

class Home extends _preact.Component {
  render() {
    return (0, _preact.h)("div", {
      className: 'container text-center'
    }, (0, _preact.h)("h1", {
      className: 'display-4'
    }, "Hey!"), (0, _preact.h)("hr", null), (0, _preact.h)("p", {
      className: 'text-muted'
    }, "I'm Mike, a software engineer based in Baltimore, MD, USA."), (0, _preact.h)("p", {
      className: 'text-muted'
    }, "I'm a blank slate maker; I love bringing ideas to life."), (0, _preact.h)("p", {
      className: 'text-muted'
    }, "I'm much more than an engineer though, and I'd love if you got to know me."), (0, _preact.h)("p", {
      className: 'text-muted'
    }, "If you'd like to speak to me about software, music, computers, or something else, ", (0, _preact.h)("a", {
      href: "mailto:michaelhamilton626+hamblestone@gmail.com",
      className: "text-surf"
    }, "drop me a line"), "!"));
  }

}

var _default = Home;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"pages/projects/projects.json":[function(require,module,exports) {
module.exports = {
  "professional": [{
    "name": "MindPod Dashboard",
    "description": "A digital therapy platform built using Electron and Node.js.",
    "image": "./projects/mindpod-dashboard/card-img.png"
  }, {
    "name": "Maestro",
    "description": "A React Native companion application for the MindPod digital therapeutic platform.",
    "image": "./projects/maestro/card-img.png",
    "buttons": [{
      "title": "View Maestro (App Store)",
      "url": "https://apps.apple.com/us/app/mindpod-mobile/id1486862186",
      "type": "secondary"
    }]
  }, {
    "name": "Stepwise",
    "description": "A React Native MVP app for providing post-stroke patients with personalized resources and exercises.",
    "notes": "Developed for Johns Hopkins Medical Institue.",
    "image": "./projects/stepwise/card-img.png"
  }, {
    "name": "churchnativity.com",
    "description": "An (award winning) Wordpress site, designed and developed by yours truly.",
    "image": "./projects/churchnativity/card-img.png",
    "buttons": [{
      "title": "View Site",
      "url": "https://www.churchnativity.com/",
      "type": "secondary"
    }]
  }, {
    "name": "Clipboard",
    "description": "An internal project management tool written entirely in vanilla js. One of my first forays into JS!",
    "image": "./projects/clipboard/card-img.png"
  }, {}],
  "playground": [{
    "name": "dmxus",
    "description": "A node package for controlling DMX lighting fixtures with Javascript.",
    "image": "./projects/dmxus/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/dmxus",
      "type": "info"
    }]
  }, {
    "name": "OhEssNine",
    "description": "A Mac OS9 clone made with React. (WIP for my new personal website)",
    "image": "./projects/ohessnine/card-img.png",
    "buttons": [{
      "title": "Start Mike OS 9",
      "url": "/projects/ohessnine/dist/index.html",
      "type": "secondary"
    }, {
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/OhEssNine",
      "type": "info"
    }]
  }, {
    "name": "LiveSlide",
    "description": "A prototype of a realtime presentation application. Field tested this for about a year at small scale with past colleagues. An MVP is in the works!",
    "image": "./projects/liveslide/card-img.png",
    "buttons": [{
      "title": "Start Mike OS 9",
      "url": "http://www.liveslide.xyz/",
      "type": "secondary"
    }]
  }, {
    "name": "klav",
    "description": "Playing around with tone.js",
    "image": "./projects/klav/card-img.png",
    "buttons": [{
      "title": "Play klav",
      "url": "/projects/klav/klav.html",
      "type": "secondary"
    }, {
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/klav",
      "type": "info"
    }]
  }, {
    "name": "JS z80 Emulator",
    "description": "An early WIP JS emulator to make some use of the z80 knowledge in my head.",
    "image": "./projects/z80/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/z80",
      "type": "info"
    }]
  }, {
    "name": "color-ML",
    "description": "Playing around with brain.js - a color guesser.",
    "image": "./projects/color-ml/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/color-ML",
      "type": "info"
    }]
  }, {
    "name": "mDraw",
    "description": "Experimenting with Apple Pencil support in Javascript.",
    "image": "./projects/mdraw/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/mDraw",
      "type": "info"
    }]
  }, {
    "name": "vidserve",
    "description": "A server and companion PWA to serve personal media over the web.",
    "image": "./projects/vidserve/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/vidserve",
      "type": "info"
    }]
  }, {
    "name": "Gameboy",
    "description": "Working on Gameboy emulation in JS. Currently an early WIP.",
    "image": "./projects/gameboy/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/gameboy",
      "type": "info"
    }]
  }, {
    "name": "Hue Local",
    "description": "A basic Node.js utility to control Hue lights over a local network.",
    "image": "./projects/hue/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/hue_local",
      "type": "info"
    }]
  }, {
    "name": "Game Engine",
    "description": "A start at a Javascript game engine with Electron.",
    "image": "./projects/engine/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/Engine",
      "type": "info"
    }]
  }, {
    "name": "technical difficulties",
    "description": "~=+.*/?`%.#^]!-}=!=)?+@_?;;:%:~`?]`'=,-\"*,(/|$-~\\?[_`||@`'~)]-::..\"[1\\.]=+@*!!",
    "image": null
  }, {
    "name": "Quartz",
    "description": "A super simple library for responsive, front-end development. It's a little outdated.",
    "image": "./projects/quartz/card-img.png",
    "buttons": [{
      "title": "View Site",
      "url": "http://michael-hamilton.github.io/Quartz/",
      "type": "secondary"
    }, {
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/Quartz",
      "type": "info"
    }]
  }, {
    "name": "SMB 1-1",
    "description": "An accurate (albeit kinda wonky) recreation of SMB 1-1 using impactJS. I was new to JS...",
    "image": "./projects/smb/card-img.png",
    "buttons": [{
      "title": "Play Mario",
      "url": "/projects/smb/index.html",
      "type": "secondary"
    }, {
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/smb1",
      "type": "info"
    }]
  }, {
    "name": "Portfolio Template",
    "description": "You're looking at it! The code for my site is open source, feel free to use it! Just don't pretend to be me...",
    "image": "./projects/portfolio-template/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/miska.me",
      "type": "info"
    }]
  }, {
    "name": "Canvas Gravity Demo",
    "description": "A simple interactive canvas experiment implementing gravity.",
    "image": "./projects/canvas-gravity-demo/card-img.png",
    "buttons": [{
      "title": "View Demo",
      "url": "/projects/canvas-gravity-demo/gravity.html",
      "type": "secondary"
    }, {
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/canvas-gravity-demo",
      "type": "info"
    }]
  }, {
    "name": "WebVR Interaction Demo",
    "description": "A simple experiment with gaze interactions in WebVR.",
    "image": "./projects/webvr-interaction-demo/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/WebVR-Interaction-Demo",
      "type": "info"
    }]
  }, {
    "name": "Conway's Game of Life",
    "description": "An interactive canvas experiment implementing Conway's Game of Life.",
    "image": "./projects/life/card-img.png",
    "buttons": [{
      "title": "View Demo",
      "url": "/projects/life/life.html",
      "type": "secondary"
    }, {
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/life",
      "type": "info"
    }]
  }, {
    "name": "socket.io Presenter Demo",
    "description": "Proof of concept for a presentation interface that can update a client in realtime.",
    "image": "./projects/socketio-presenter-demo/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/socket.io-Presenter-Demo",
      "type": "info"
    }]
  }, {
    "name": "WebVR Demo",
    "description": "Baby's first WebVR experience.",
    "image": "./projects/webvr-demo/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/webvrdemo",
      "type": "info"
    }]
  }, {
    "name": "Homebrew Z80 Computer",
    "description": "A passion project I've been working on here and there over the course of the past decade. Lots of notes that I am compiling and will share!",
    "image": "./projects/homebrew-z80/card-img.png",
    "buttons": [{
      "title": "View Repo",
      "url": "https://github.com/michael-hamilton/webvrdemo",
      "type": "info"
    }]
  }]
};
},{}],"pages/projects/churchnativity/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.292ca587.png";
},{}],"pages/projects/clipboard/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.718f4863.png";
},{}],"pages/projects/canvas-gravity-demo/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.855ecceb.png";
},{}],"pages/projects/color-ml/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.6f8912ec.png";
},{}],"pages/projects/dmxus/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.bd6d6992.png";
},{}],"pages/projects/engine/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.5acd0153.png";
},{}],"pages/projects/gameboy/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.f928c921.png";
},{}],"pages/projects/homebrew-z80/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.10079324.png";
},{}],"pages/projects/hue/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.89e9bc10.png";
},{}],"pages/projects/klav/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.0b635a91.png";
},{}],"pages/projects/life/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.56c460c4.png";
},{}],"pages/projects/liveslide/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.193ed097.png";
},{}],"pages/projects/maestro/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.a5ef6b4c.png";
},{}],"pages/projects/mdraw/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.3e4848ac.png";
},{}],"pages/projects/ohessnine/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.ca993bb4.png";
},{}],"pages/projects/mindpod-dashboard/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.d11d2f30.png";
},{}],"pages/projects/portfolio-template/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.3ab375ef.png";
},{}],"pages/projects/quartz/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.fc0ae657.png";
},{}],"pages/projects/smb/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.16be2ba0.png";
},{}],"pages/projects/socketio-presenter-demo/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.64625e9f.png";
},{}],"pages/projects/stepwise/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.a54f3ad9.png";
},{}],"pages/projects/vidserve/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.eb54b3d0.png";
},{}],"pages/projects/webvr-demo/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.21aadd99.png";
},{}],"pages/projects/z80/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.4a553d2f.png";
},{}],"pages/projects/webvr-interaction-demo/card-img.png":[function(require,module,exports) {
module.exports = "/card-img.b4e94c91.png";
},{}],"pages/projects/*/card-img.png":[function(require,module,exports) {
module.exports = {
  "churchnativity": require("./../churchnativity/card-img.png"),
  "clipboard": require("./../clipboard/card-img.png"),
  "canvas-gravity-demo": require("./../canvas-gravity-demo/card-img.png"),
  "color-ml": require("./../color-ml/card-img.png"),
  "dmxus": require("./../dmxus/card-img.png"),
  "engine": require("./../engine/card-img.png"),
  "gameboy": require("./../gameboy/card-img.png"),
  "homebrew-z80": require("./../homebrew-z80/card-img.png"),
  "hue": require("./../hue/card-img.png"),
  "klav": require("./../klav/card-img.png"),
  "life": require("./../life/card-img.png"),
  "liveslide": require("./../liveslide/card-img.png"),
  "maestro": require("./../maestro/card-img.png"),
  "mdraw": require("./../mdraw/card-img.png"),
  "ohessnine": require("./../ohessnine/card-img.png"),
  "mindpod-dashboard": require("./../mindpod-dashboard/card-img.png"),
  "portfolio-template": require("./../portfolio-template/card-img.png"),
  "quartz": require("./../quartz/card-img.png"),
  "smb": require("./../smb/card-img.png"),
  "socketio-presenter-demo": require("./../socketio-presenter-demo/card-img.png"),
  "stepwise": require("./../stepwise/card-img.png"),
  "vidserve": require("./../vidserve/card-img.png"),
  "webvr-demo": require("./../webvr-demo/card-img.png"),
  "z80": require("./../z80/card-img.png"),
  "webvr-interaction-demo": require("./../webvr-interaction-demo/card-img.png")
};
},{"./../churchnativity/card-img.png":"pages/projects/churchnativity/card-img.png","./../clipboard/card-img.png":"pages/projects/clipboard/card-img.png","./../canvas-gravity-demo/card-img.png":"pages/projects/canvas-gravity-demo/card-img.png","./../color-ml/card-img.png":"pages/projects/color-ml/card-img.png","./../dmxus/card-img.png":"pages/projects/dmxus/card-img.png","./../engine/card-img.png":"pages/projects/engine/card-img.png","./../gameboy/card-img.png":"pages/projects/gameboy/card-img.png","./../homebrew-z80/card-img.png":"pages/projects/homebrew-z80/card-img.png","./../hue/card-img.png":"pages/projects/hue/card-img.png","./../klav/card-img.png":"pages/projects/klav/card-img.png","./../life/card-img.png":"pages/projects/life/card-img.png","./../liveslide/card-img.png":"pages/projects/liveslide/card-img.png","./../maestro/card-img.png":"pages/projects/maestro/card-img.png","./../mdraw/card-img.png":"pages/projects/mdraw/card-img.png","./../ohessnine/card-img.png":"pages/projects/ohessnine/card-img.png","./../mindpod-dashboard/card-img.png":"pages/projects/mindpod-dashboard/card-img.png","./../portfolio-template/card-img.png":"pages/projects/portfolio-template/card-img.png","./../quartz/card-img.png":"pages/projects/quartz/card-img.png","./../smb/card-img.png":"pages/projects/smb/card-img.png","./../socketio-presenter-demo/card-img.png":"pages/projects/socketio-presenter-demo/card-img.png","./../stepwise/card-img.png":"pages/projects/stepwise/card-img.png","./../vidserve/card-img.png":"pages/projects/vidserve/card-img.png","./../webvr-demo/card-img.png":"pages/projects/webvr-demo/card-img.png","./../z80/card-img.png":"pages/projects/z80/card-img.png","./../webvr-interaction-demo/card-img.png":"pages/projects/webvr-interaction-demo/card-img.png"}],"pages/work.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var projects = _interopRequireWildcard(require("./projects/projects.json"));

var _cardImg = _interopRequireDefault(require("./projects/*/card-img.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Card = props => (0, _preact.h)("div", {
  className: "card"
}, (0, _preact.h)("div", {
  className: "card-body"
}, (0, _preact.h)("img", {
  className: "card-img-top",
  src: props.image,
  alt: props.title
}), (0, _preact.h)("h5", {
  className: "card-title"
}, props.name), (0, _preact.h)("p", {
  className: "card-text"
}, props.description), (0, _preact.h)("div", {
  className: "btn-group",
  role: "group",
  "aria-label": "Actions"
}, props.buttons ? props.buttons.map(button => (0, _preact.h)("a", {
  className: "btn btn-".concat(button.type),
  href: button.url
}, button.title)) : null)));

class Home extends _preact.Component {
  render() {
    // const c = document.getElementById("static-anim-canvas"),
    //   ctx = c.getContext("2d");
    //
    // function draw() {
    //   for (ctx.clearRect(0, 0, c.width, c.height), ctx.fillStyle = "#000", i = 0; i < 3e4; i++) ctx.fillRect(Math.random() * c.height, Math.random() * c.width, 3, 3);
    //   setTimeout(() => requestAnimationFrame(draw), 30)
    // }
    // draw();
    return (0, _preact.h)("div", null, (0, _preact.h)("div", {
      className: "container text-center content-section"
    }, (0, _preact.h)("h1", {
      className: "display-4"
    }, "Work"), (0, _preact.h)("hr", null), (0, _preact.h)("p", {
      className: "text-muted"
    }, "I have worked in some professional capacity as a programmer since 2010. While I've touched many sorts of tech during my career, my interest and focus has been with web technologies. Presently, I am a software engineer at ", (0, _preact.h)("a", {
      href: "https://msquarehealthcare.com/",
      className: "text-surf"
    }, "MSquare Healthcare"), " in Baltimore, MD (USA) where we develop a world class digital therapy video game. My specific focus here is on engineering tools which enable effective delivery of this novel therapy using both hardware and software to encourage patients and therapists alike to make the most of the platform. I am also a collaborator with the ", (0, _preact.h)("a", {
      href: "https://www.hopkinsmedicine.org/neurology_neurosurgery/research/labs/kata_studio/team.html",
      className: "text-surf"
    }, "Kata Design Studio"), " at Johns Hopkins Medical Institue where a diverse team from many disciplines designs innovative ways to improve patient care and therapist experiences."), (0, _preact.h)("p", {
      className: "text-muted"
    }, "My career history is diverse working with both commercial and non-profit organizations, and also independently as a freelancer. My various roles have given me unique professional opportunities beyond software engineering such as working with audio visual technology in both live and studio production environments (my particular expertise is in stage lighting). I've also some professional experience working in music, IT, large event coordination, and building design/construction projects."), (0, _preact.h)("p", {
      className: "text-muted"
    }, "I'm a 90's kid - I'm thankful to have been around for the advent of the web as we know it. My passion for the web and it's tech can without a doubt can be attributed to growing up on dial-up, writing CSS for my Myspace page, and finding new ways to connect online. When it comes to software engineering I'm relatively technology agnostic, though most of my expertise is related to web technologies. I have extensive Javascript experience and especially enjoy working with React, React Native, Electron, and Node. Of course, I've also got strong web fundamentals with HTML, and CSS."), (0, _preact.h)("p", {
      className: "text-muted"
    }, "See my ", (0, _preact.h)("a", {
      href: "../files/resume.pdf",
      className: "text-surf",
      native: true
    }, "resum\xE9"), " if you want to know more.")), (0, _preact.h)("div", {
      className: "container text-center content-section"
    }, (0, _preact.h)("h1", {
      className: "display-4"
    }, "Professional Projects"), (0, _preact.h)("hr", null), (0, _preact.h)("p", {
      className: "text-muted"
    }, "I've worked on a number of projects over my career, here are just a few."), (0, _preact.h)("br", null), (0, _preact.h)("div", {
      className: "card-group"
    }, (0, _preact.h)(Card, {
      name: projects.professional[0].name,
      description: projects.professional[0].description,
      image: projects.professional[0].image,
      buttons: projects.professional[0].buttons
    }), (0, _preact.h)(Card, {
      name: projects.professional[1].name,
      description: projects.professional[1].description,
      image: projects.professional[1].image,
      buttons: projects.professional[1].buttons
    }), (0, _preact.h)(Card, {
      name: projects.professional[2].name,
      description: projects.professional[2].description,
      image: projects.professional[2].image,
      buttons: projects.professional[2].buttons
    }))), (0, _preact.h)("div", {
      className: "container text-center content-section"
    }, (0, _preact.h)("h1", {
      className: "display-4"
    }, "Playground"), (0, _preact.h)("hr", null), (0, _preact.h)("p", {
      className: "text-muted"
    }, "Here are some misc hobby projects of mine. These projects are in various states - some are ready to be used by you, some are abandoned, and some I revisit to make progress with here and there."), (0, _preact.h)("br", null), (0, _preact.h)("div", {
      className: "card-group"
    }, (0, _preact.h)("div", {
      className: "card"
    }, (0, _preact.h)("div", {
      className: "card-body"
    }, (0, _preact.h)("img", {
      className: "card-img-top",
      src: "./projects/dmxus/card-img.png",
      alt: "dmxus"
    }), (0, _preact.h)("h5", {
      className: "card-title"
    }, "dmxus"), (0, _preact.h)("p", {
      className: "card-text"
    }, "A node package for controlling DMX lighting fixtures with Javascript."), (0, _preact.h)("div", {
      className: "btn-group",
      role: "group",
      "aria-label": "Actions"
    }, (0, _preact.h)("a", {
      className: "btn btn-info",
      href: "https://github.com/michael-hamilton/dmxus"
    }, "View Repo")))), (0, _preact.h)("div", {
      className: "card"
    }, (0, _preact.h)("div", {
      className: "card-body"
    }, (0, _preact.h)("img", {
      className: "card-img-top",
      src: "./projects/ohessnine/card-img.png",
      alt: "OhEssNine"
    }), (0, _preact.h)("h5", {
      className: "card-title"
    }, "OhEssNine"), (0, _preact.h)("p", {
      className: "card-text"
    }, "A Mac OS9 clone made with React. (WIP for my new personal website)"), (0, _preact.h)("div", {
      className: "btn-group",
      role: "group",
      "aria-label": "Actions"
    }, (0, _preact.h)("a", {
      className: "btn btn-secondary",
      href: "/projects/ohessnine/dist/index.html"
    }, "Start Mike OS 9"), (0, _preact.h)("a", {
      className: "btn btn-info",
      href: "https://github.com/michael-hamilton/OhEssNine"
    }, "View Repo")))), (0, _preact.h)("div", {
      className: "card"
    }, (0, _preact.h)("div", {
      className: "card-body"
    }, (0, _preact.h)("img", {
      className: "card-img-top",
      src: "./projects/liveslide/card-img.png",
      alt: "LiveSlide"
    }), (0, _preact.h)("h5", {
      className: "card-title"
    }, "LiveSlide"), (0, _preact.h)("p", {
      className: "card-text"
    }, "A prototype of a realtime presentation application. Field tested this for about a year at small scale with past colleagues. An MVP is in the works!"), (0, _preact.h)("div", {
      className: "btn-group",
      role: "group",
      "aria-label": "Actions"
    }, (0, _preact.h)("a", {
      className: "btn btn-secondary",
      href: "http://www.liveslide.xyz/"
    }, "Go to LiveSlide")))))));
  }

}

var _default = Home;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","./projects/projects.json":"pages/projects/projects.json","./projects/*/card-img.png":"pages/projects/*/card-img.png"}],"images/profile.jpg":[function(require,module,exports) {
module.exports = "/profile.84faa513.jpg";
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _preactRouter = _interopRequireDefault(require("preact-router"));

var _match = require("preact-router/match");

var _home = _interopRequireDefault(require("./pages/home"));

var _work = _interopRequireDefault(require("./pages/work"));

var _profile = _interopRequireDefault(require("./images/profile.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _preact.Component {
  render() {
    return (0, _preact.h)("div", {
      className: 'content'
    }, (0, _preact.h)("div", {
      className: 'jumbotron header rounded-0'
    }, (0, _preact.h)("h1", {
      className: 'display-1 text-center text-white header-title'
    }, "Mike Hamilton"), (0, _preact.h)("h2", {
      className: 'lead text-center text-white header-sub-title software engineer'
    })), (0, _preact.h)("nav", {
      className: "navbar navbar-light navbar-expand-lg justify-content-space-between main-navigation"
    }, (0, _preact.h)("div", {
      className: "col-4"
    }, (0, _preact.h)("ul", {
      className: "navbar-nav d-flex justify-content-around"
    }, (0, _preact.h)("li", {
      className: "nav-item"
    }, (0, _preact.h)(_match.Link, {
      className: "nav-link text-center",
      href: "/",
      activeClassName: 'active'
    }, "About")))), (0, _preact.h)("div", {
      className: "col-4"
    }, (0, _preact.h)("p", {
      className: "d-flex justify-content-center"
    }, (0, _preact.h)("img", {
      className: "rounded-circle shadow profile-image",
      src: _profile.default
    }))), (0, _preact.h)("div", {
      className: "col-4"
    }, (0, _preact.h)("ul", {
      className: "navbar-nav d-flex justify-content-around"
    }, (0, _preact.h)("li", {
      className: "nav-item"
    }, (0, _preact.h)(_match.Link, {
      className: "nav-link text-center",
      href: "/work",
      activeClassName: 'active'
    }, "Work"))))), (0, _preact.h)("div", {
      className: 'main-content-wrapper'
    }, (0, _preact.h)(_preactRouter.default, null, (0, _preact.h)(_home.default, {
      path: '/'
    }), (0, _preact.h)(_work.default, {
      path: '/work'
    }))), (0, _preact.h)("div", {
      className: "footer container border-top mt-5"
    }, (0, _preact.h)("div", {
      className: "row"
    }, (0, _preact.h)("div", {
      className: "col-md-6"
    }, (0, _preact.h)("div", {
      className: "float-sm-left text-center"
    }, (0, _preact.h)("p", {
      className: "text-muted text-sm-left"
    }, "\xA9 2021\xA0", (0, _preact.h)("a", {
      className: "rainbow-hover text-surf",
      href: "https://open.spotify.com/artist/2GCXWNGHFLHXrnR6CTa2fL?si=qmgBdyiORhm4Li_6vLwcnw"
    }, "Michael Hamilton")))), (0, _preact.h)("div", {
      className: "col-md-6"
    }, (0, _preact.h)("div", {
      className: "float-sm-right"
    }, (0, _preact.h)("ul", {
      className: "list-unstyled list-inline text-muted text-sm-right text-center"
    }, (0, _preact.h)("li", {
      className: "list-inline-item"
    }, (0, _preact.h)("a", {
      className: "footer-link-item",
      href: "https://github.com/michael-hamilton"
    }, "GitHub")), (0, _preact.h)("li", {
      className: "list-inline-item"
    }, "\xB7"), (0, _preact.h)("li", {
      className: "list-inline-item"
    }, (0, _preact.h)("a", {
      className: "footer-link-item",
      href: "https://linkedin.com/in/michaelhamilton626"
    }, "LinkedIn")), (0, _preact.h)("li", {
      className: "list-inline-item"
    }, "\xB7"), (0, _preact.h)("li", {
      className: "list-inline-item"
    }, (0, _preact.h)("a", {
      className: "footer-link-item",
      href: "https://twitter.com/miskahamilton"
    }, "Twitter"))))))));
  }

}

(0, _preact.render)((0, _preact.h)(App, null), document.body);
},{"preact":"node_modules/preact/dist/preact.module.js","preact-router":"node_modules/preact-router/dist/preact-router.es.js","preact-router/match":"node_modules/preact-router/match.js","./pages/home":"pages/home.js","./pages/work":"pages/work.js","./images/profile.jpg":"images/profile.jpg"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50148" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/hamblestone.e31bb0bc.js.map