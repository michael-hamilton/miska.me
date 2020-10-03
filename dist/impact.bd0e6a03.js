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
})({"projects/smb/lib/impact/impact.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// -----------------------------------------------------------------------------
// Impact Game Engine 1.22
// http://impactjs.com/
// -----------------------------------------------------------------------------
(function (window) {
  "use strict"; // -----------------------------------------------------------------------------
  // Native Object extensions

  Number.prototype.map = function (istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((this - istart) / (istop - istart));
  };

  Number.prototype.limit = function (min, max) {
    return Math.min(max, Math.max(min, this));
  };

  Number.prototype.round = function (precision) {
    precision = Math.pow(10, precision || 0);
    return Math.round(this * precision) / precision;
  };

  Number.prototype.floor = function () {
    return Math.floor(this);
  };

  Number.prototype.ceil = function () {
    return Math.ceil(this);
  };

  Number.prototype.toInt = function () {
    return this | 0;
  };

  Number.prototype.toRad = function () {
    return this / 180 * Math.PI;
  };

  Number.prototype.toDeg = function () {
    return this * 180 / Math.PI;
  };

  Array.prototype.erase = function (item) {
    for (var i = this.length; i--;) {
      if (this[i] === item) {
        this.splice(i, 1);
      }
    }

    return this;
  };

  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  Function.prototype.bind = Function.prototype.bind || function (oThis) {
    if (typeof this !== "function") {
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function fNOP() {},
        fBound = function fBound() {
      return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
  }; // -----------------------------------------------------------------------------
  // ig Namespace


  window.ig = {
    game: null,
    debug: null,
    version: '1.22',
    global: window,
    modules: {},
    resources: [],
    ready: false,
    baked: false,
    nocache: '',
    ua: {},
    prefix: window.ImpactPrefix || '',
    lib: 'lib/',
    _current: null,
    _loadQueue: [],
    _waitForOnload: 0,
    $: function $(selector) {
      return selector.charAt(0) == '#' ? document.getElementById(selector.substr(1)) : document.getElementsByTagName(selector);
    },
    $new: function $new(name) {
      return document.createElement(name);
    },
    copy: function copy(object) {
      if (!object || _typeof(object) != 'object' || object instanceof HTMLElement || object instanceof ig.Class) {
        return object;
      } else if (object instanceof Array) {
        var c = [];

        for (var i = 0, l = object.length; i < l; i++) {
          c[i] = ig.copy(object[i]);
        }

        return c;
      } else {
        var c = {};

        for (var i in object) {
          c[i] = ig.copy(object[i]);
        }

        return c;
      }
    },
    merge: function merge(original, extended) {
      for (var key in extended) {
        var ext = extended[key];

        if (_typeof(ext) != 'object' || ext instanceof HTMLElement || ext instanceof ig.Class) {
          original[key] = ext;
        } else {
          if (!original[key] || _typeof(original[key]) != 'object') {
            original[key] = ext instanceof Array ? [] : {};
          }

          ig.merge(original[key], ext);
        }
      }

      return original;
    },
    ksort: function ksort(obj) {
      if (!obj || _typeof(obj) != 'object') {
        return [];
      }

      var keys = [],
          values = [];

      for (var i in obj) {
        keys.push(i);
      }

      keys.sort();

      for (var i = 0; i < keys.length; i++) {
        values.push(obj[keys[i]]);
      }

      return values;
    },
    // Ah, yes. I love vendor prefixes. So much fun!
    setVendorAttribute: function setVendorAttribute(el, attr, val) {
      var uc = attr.charAt(0).toUpperCase() + attr.substr(1);
      el[attr] = el['ms' + uc] = el['moz' + uc] = el['webkit' + uc] = el['o' + uc] = val;
    },
    getVendorAttribute: function getVendorAttribute(el, attr) {
      var uc = attr.charAt(0).toUpperCase() + attr.substr(1);
      return el[attr] || el['ms' + uc] || el['moz' + uc] || el['webkit' + uc] || el['o' + uc];
    },
    normalizeVendorAttribute: function normalizeVendorAttribute(el, attr) {
      var prefixedVal = ig.getVendorAttribute(el, attr);

      if (!el[attr] && prefixedVal) {
        el[attr] = prefixedVal;
      }
    },
    // This function normalizes getImageData to extract the real, actual
    // pixels from an image. The naive method recently failed on retina
    // devices with a backgingStoreRatio != 1
    getImagePixels: function getImagePixels(image, x, y, width, height) {
      var canvas = ig.$new('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      var ctx = canvas.getContext('2d'); // Try to draw pixels as accurately as possible

      ig.System.SCALE.CRISP(canvas, ctx);
      var ratio = ig.getVendorAttribute(ctx, 'backingStorePixelRatio') || 1;
      ig.normalizeVendorAttribute(ctx, 'getImageDataHD');
      var realWidth = image.width / ratio,
          realHeight = image.height / ratio;
      canvas.width = Math.ceil(realWidth);
      canvas.height = Math.ceil(realHeight);
      ctx.drawImage(image, 0, 0, realWidth, realHeight);
      return ratio === 1 ? ctx.getImageData(x, y, width, height) : ctx.getImageDataHD(x, y, width, height);
    },
    module: function module(name) {
      if (ig._current) {
        throw "Module '" + ig._current.name + "' defines nothing";
      }

      if (ig.modules[name] && ig.modules[name].body) {
        throw "Module '" + name + "' is already defined";
      }

      ig._current = {
        name: name,
        requires: [],
        loaded: false,
        body: null
      };
      ig.modules[name] = ig._current;

      ig._loadQueue.push(ig._current);

      return ig;
    },
    requires: function requires() {
      ig._current.requires = Array.prototype.slice.call(arguments);
      return ig;
    },
    defines: function defines(body) {
      ig._current.body = body;
      ig._current = null;

      ig._initDOMReady();
    },
    addResource: function addResource(resource) {
      ig.resources.push(resource);
    },
    setNocache: function setNocache(set) {
      ig.nocache = set ? '?' + Date.now() : '';
    },
    // Stubs for ig.Debug
    log: function log() {},
    assert: function assert(condition, msg) {},
    show: function show(name, number) {},
    mark: function mark(msg, color) {},
    _loadScript: function _loadScript(name, requiredFrom) {
      ig.modules[name] = {
        name: name,
        requires: [],
        loaded: false,
        body: null
      };
      ig._waitForOnload++;
      var path = ig.prefix + ig.lib + name.replace(/\./g, '/') + '.js' + ig.nocache;
      var script = ig.$new('script');
      script.type = 'text/javascript';
      script.src = path;

      script.onload = function () {
        ig._waitForOnload--;

        ig._execModules();
      };

      script.onerror = function () {
        throw 'Failed to load module ' + name + ' at ' + path + ' ' + 'required from ' + requiredFrom;
      };

      ig.$('head')[0].appendChild(script);
    },
    _execModules: function _execModules() {
      var modulesLoaded = false;

      for (var i = 0; i < ig._loadQueue.length; i++) {
        var m = ig._loadQueue[i];
        var dependenciesLoaded = true;

        for (var j = 0; j < m.requires.length; j++) {
          var name = m.requires[j];

          if (!ig.modules[name]) {
            dependenciesLoaded = false;

            ig._loadScript(name, m.name);
          } else if (!ig.modules[name].loaded) {
            dependenciesLoaded = false;
          }
        }

        if (dependenciesLoaded && m.body) {
          ig._loadQueue.splice(i, 1);

          m.loaded = true;
          m.body();
          modulesLoaded = true;
          i--;
        }
      }

      if (modulesLoaded) {
        ig._execModules();
      } // No modules executed, no more files to load but loadQueue not empty?
      // Must be some unresolved dependencies!
      else if (!ig.baked && ig._waitForOnload == 0 && ig._loadQueue.length != 0) {
          var unresolved = [];

          for (var i = 0; i < ig._loadQueue.length; i++) {
            // Which dependencies aren't loaded?
            var unloaded = [];
            var requires = ig._loadQueue[i].requires;

            for (var j = 0; j < requires.length; j++) {
              var m = ig.modules[requires[j]];

              if (!m || !m.loaded) {
                unloaded.push(requires[j]);
              }
            }

            unresolved.push(ig._loadQueue[i].name + ' (requires: ' + unloaded.join(', ') + ')');
          }

          throw 'Unresolved (circular?) dependencies. ' + "Most likely there's a name/path mismatch for one of the listed modules:\n" + unresolved.join('\n');
        }
    },
    _DOMReady: function _DOMReady() {
      if (!ig.modules['dom.ready'].loaded) {
        if (!document.body) {
          return setTimeout(ig._DOMReady, 13);
        }

        ig.modules['dom.ready'].loaded = true;
        ig._waitForOnload--;

        ig._execModules();
      }

      return 0;
    },
    _boot: function _boot() {
      if (document.location.href.match(/\?nocache/)) {
        ig.setNocache(true);
      } // Probe user agent string


      ig.ua.pixelRatio = window.devicePixelRatio || 1;
      ig.ua.viewport = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      ig.ua.screen = {
        width: window.screen.availWidth * ig.ua.pixelRatio,
        height: window.screen.availHeight * ig.ua.pixelRatio
      };
      ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
      ig.ua.iPhone4 = ig.ua.iPhone && ig.ua.pixelRatio == 2;
      ig.ua.iPad = /iPad/i.test(navigator.userAgent);
      ig.ua.android = /android/i.test(navigator.userAgent);
      ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
      ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
      ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.winPhone;
      ig.ua.touchDevice = 'ontouchstart' in window || window.navigator.msMaxTouchPoints;
    },
    _initDOMReady: function _initDOMReady() {
      if (ig.modules['dom.ready']) {
        ig._execModules();

        return;
      }

      ig._boot();

      ig.modules['dom.ready'] = {
        requires: [],
        loaded: false,
        body: null
      };
      ig._waitForOnload++;

      if (document.readyState === 'complete') {
        ig._DOMReady();
      } else {
        document.addEventListener('DOMContentLoaded', ig._DOMReady, false);
        window.addEventListener('load', ig._DOMReady, false);
      }
    }
  }; // -----------------------------------------------------------------------------
  // Provide ig.setAnimation and ig.clearAnimation as a compatible way to use
  // requestAnimationFrame if available or setInterval otherwise
  // Use requestAnimationFrame if available

  ig.normalizeVendorAttribute(window, 'requestAnimationFrame');

  if (window.requestAnimationFrame) {
    var next = 1,
        anims = {};

    window.ig.setAnimation = function (callback, element) {
      var current = next++;
      anims[current] = true;

      var animate = function animate() {
        if (!anims[current]) {
          return;
        } // deleted?


        window.requestAnimationFrame(animate, element);
        callback();
      };

      window.requestAnimationFrame(animate, element);
      return current;
    };

    window.ig.clearAnimation = function (id) {
      delete anims[id];
    };
  } // [set/clear]Interval fallback
  else {
      window.ig.setAnimation = function (callback, element) {
        return window.setInterval(callback, 1000 / 60);
      };

      window.ig.clearAnimation = function (id) {
        window.clearInterval(id);
      };
    } // -----------------------------------------------------------------------------
  // Class object based on John Resigs code; inspired by base2 and Prototype
  // http://ejohn.org/blog/simple-javascript-inheritance/


  var initializing = false,
      fnTest = /xyz/.test(function () {
    xyz;
  }) ? /\bparent\b/ : /.*/;

  window.ig.Class = function () {};

  var inject = function inject(prop) {
    var proto = this.prototype;
    var parent = {};

    for (var name in prop) {
      if (typeof prop[name] == "function" && typeof proto[name] == "function" && fnTest.test(prop[name])) {
        parent[name] = proto[name]; // save original function

        proto[name] = function (name, fn) {
          return function () {
            var tmp = this.parent;
            this.parent = parent[name];
            var ret = fn.apply(this, arguments);
            this.parent = tmp;
            return ret;
          };
        }(name, prop[name]);
      } else {
        proto[name] = prop[name];
      }
    }
  };

  window.ig.Class.extend = function (prop) {
    var parent = this.prototype;
    initializing = true;
    var prototype = new this();
    initializing = false;

    for (var name in prop) {
      if (typeof prop[name] == "function" && typeof parent[name] == "function" && fnTest.test(prop[name])) {
        prototype[name] = function (name, fn) {
          return function () {
            var tmp = this.parent;
            this.parent = parent[name];
            var ret = fn.apply(this, arguments);
            this.parent = tmp;
            return ret;
          };
        }(name, prop[name]);
      } else {
        prototype[name] = prop[name];
      }
    }

    function Class() {
      if (!initializing) {
        // If this class has a staticInstantiate method, invoke it
        // and check if we got something back. If not, the normal
        // constructor (init) is called.
        if (this.staticInstantiate) {
          var obj = this.staticInstantiate.apply(this, arguments);

          if (obj) {
            return obj;
          }
        }

        for (var p in this) {
          if (_typeof(this[p]) == 'object') {
            this[p] = ig.copy(this[p]); // deep copy!
          }
        }

        if (this.init) {
          this.init.apply(this, arguments);
        }
      }

      return this;
    }

    Class.prototype = prototype;
    Class.prototype.constructor = Class;
    Class.extend = window.ig.Class.extend;
    Class.inject = inject;
    return Class;
  }; // Merge the ImpactMixin - if present - into the 'ig' namespace. This gives other
  // code the chance to modify 'ig' before it's doing any work.


  if (window.ImpactMixin) {
    ig.merge(ig, window.ImpactMixin);
  }
})(window); // -----------------------------------------------------------------------------
// The main() function creates the system, input, sound and game objects,
// creates a preloader and starts the run loop


ig.module('impact.impact').requires('dom.ready', 'impact.loader', 'impact.system', 'impact.input', 'impact.sound').defines(function () {
  "use strict";

  ig.main = function (canvasId, gameClass, fps, width, height, scale, loaderClass) {
    ig.system = new ig.System(canvasId, fps, width, height, scale || 1);
    ig.input = new ig.Input();
    ig.soundManager = new ig.SoundManager();
    ig.music = new ig.Music();
    ig.ready = true;
    var loader = new (loaderClass || ig.Loader)(gameClass, ig.resources);
    loader.load();
  };
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59269" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","projects/smb/lib/impact/impact.js"], null)
//# sourceMappingURL=/impact.bd0e6a03.js.map