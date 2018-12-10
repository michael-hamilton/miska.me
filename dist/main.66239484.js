// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"projects/webvr-demo/hologram/build/main.js":[function(require,module,exports) {
window.__assets = {
  "wife": "IMG_2664.jpg",
  "campfire2": "campfire2/1224 Campfire.gltf",
  "cessna": "IMG_2701.jpg",
  "forest": "forest/PUSHILIN_forest.obj",
  "ground": "ground/model.obj",
  "moon": "moon/Moon_01.gltf",
  "mountain": "mountain/model.gltf"
};

(function (scope) {
  Hologram.cursor.color = "#ffffff";
  Hologram.cursor.enabled = true;
  Hologram.cursor.radiusInner = "0.001";
  Hologram.cursor.radiusOuter = "0.01";

  var __zxzgnpp7q = new Sky({
    color: "#4656ab",
    opacity: 1,
    radius: "100"
  });

  var __eya5793g9 = new Model({
    position: "-20.841 52.786 -76.096",
    rotation: "-1.088619810748564 -92.0743176775233 -27.330086827740267",
    scale: "1.5 1.5 1.5",
    src: "moon"
  });

  var __zbaruhwa3 = new Entity({});

  var __pubbmmksc = new Light({
    color: "#4d25d2",
    groundColor: "#e66e00",
    intensity: 0.24,
    type: "hemisphere",
    visible: true,
    parent: __zbaruhwa3
  });

  var __vr23nzjf8 = new Light({
    castShadow: true,
    color: "#f2d055",
    intensity: 0.29,
    position: "-25.315 57.244 -69.063",
    type: "directional",
    parent: __zbaruhwa3
  });

  var __h803yow30 = new Light({
    castShadow: false,
    color: "#ffa800",
    decay: "5",
    distance: "40",
    intensity: 1,
    position: "-6.907 0.099 -3.816",
    scale: "1.27 1.27 1.27",
    type: "point",
    parent: __zbaruhwa3
  });

  var __p00iyxcco = new Light({
    decay: "1",
    distance: "3000",
    position: "-25.371 56.748 -53.752",
    scale: "1.42 1.42 1.42",
    type: "point",
    visible: true,
    parent: __zbaruhwa3
  });

  var __cev2h60ii = new Entity({
    position: "0 -34.721 0"
  });

  var __tfk1b80pn = new Model({
    position: "-8.749 5.854 -8.844",
    rotation: "0.5156620156177408 -8.537071147449266 1.0313240312354817",
    scale: "19.32 19.32 19.32",
    src: "mountain",
    parent: __cev2h60ii
  });

  var __iiwriap9y = new Model({
    position: "9.951 5.854 -19.825",
    rotation: "0 -93.965078401455 0",
    scale: "19.32 19.32 19.32",
    src: "mountain",
    parent: __cev2h60ii
  });

  var __ysr5j0wx0 = new Model({
    position: "-1.621 5.854 18.141",
    rotation: "0 121.29516522919528 0",
    scale: "19.32 19.32 19.32",
    src: "mountain",
    parent: __cev2h60ii
  });

  var __sm3a3mgkz = new Model({
    position: "23.419 5.854 2.578",
    rotation: "0 -173.3770288065871 0",
    scale: "19.32 19.32 19.32",
    src: "mountain",
    parent: __cev2h60ii
  });

  var __jcee6lz9j = new Model({
    position: "-23.187 5.854 10.839",
    rotation: "0 43.65938398896873 0",
    scale: "19.32 19.32 19.32",
    src: "mountain",
    parent: __cev2h60ii
  });

  var __xzxjg0soo = new Entity({
    position: "0 10.382 -6.64",
    rotation: "0 0 0.6875493541569879",
    scale: "2 3 2"
  });

  var __q8479yg1w = new Model({
    position: "-4.018 -3.501 -2.671",
    rotation: "-9.854874076250159 -0.34377467707849396 2.0626480624709633",
    scale: "3.04 3.04 3.04",
    src: "forest",
    parent: __xzxjg0soo
  });

  var __q21hf48eq = new Model({
    position: "-8.711 -2.931 4.126",
    rotation: "-8.250592249883853 85.54259881303192 -2.177239621497128",
    scale: "3.04 3.04 3.04",
    src: "forest",
    parent: __xzxjg0soo
  });

  var __e2bxmk24x = new Model({
    position: "-2.897 -2.751 8.485",
    scale: "3.04 3.04 3.04",
    src: "forest",
    parent: __xzxjg0soo
  });

  var __vtnhf9d3m = new Model({
    position: "4.332 -2.971 5.026",
    rotation: "1.604281826366305 -98.8925154395801 -0.9167324722093172",
    scale: "3.04 3.04 3.04",
    src: "forest",
    parent: __xzxjg0soo
  });

  var __qc0lliyqh = new Model({
    position: "4.406 -3.315 -1.819",
    rotation: "-6.18794418741289 20.68377640422272 -3.552338329811104",
    scale: "3.04 3.04 3.04",
    src: "forest",
    parent: __xzxjg0soo
  });

  var Campfire = new Model({
    position: "-7.467 -0.847 -4.2",
    rotation: "-6.359831525952138 -117.85741845841034 0",
    scale: "0.02 0.02 0.02",
    src: "campfire2"
  });

  var __vbb986q18 = new Model({
    position: "0 -4.593 -1.555",
    scale: "110 110 110",
    shadow: false,
    src: "ground"
  });

  Object.assign(scope, {
    Campfire: Campfire
  });
})(window);
/******/


(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId])
      /******/
      return installedModules[moduleId].exports;
    /******/

    /******/
    // Create a new module (and put it into the cache)

    /******/

    var module = installedModules[moduleId] = {
      /******/
      exports: {},

      /******/
      id: moduleId,

      /******/
      loaded: false
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.loaded = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // __webpack_public_path__

  /******/

  __webpack_require__.p = "";
  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, exports) {
  Hologram.effect.fxaa = true;
  /***/
}]);
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59727" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","projects/webvr-demo/hologram/build/main.js"], null)
//# sourceMappingURL=/main.66239484.map