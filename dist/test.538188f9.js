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
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".container{\n  width: 384px;\n  height: 384px;\n  background: aquamarine;\n  border: 16px solid #b2ffe5;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  margin-left: -192px;\n  overflow: hidden;\n  z-index: 1;\n}\n.bodily {\n  background: #F2F2F2;\n  width: 224px;\n  height: 192px;\n  position: relative;\n  top: 192px;\n  margin: 0 auto;\n  border-radius: 104px 104px 80px 80px;\n  z-index: 3;\n}\n.eye{\n  width: 48px;\n  height: 48px;\n  background: #2E2E2E;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  margin-left: -24px;\n  top:64px;\n  z-index: 4;\n}\n.eye.right{\n  transform: translateX(40px);\n}\n.eye.left{\n  transform: translateX(-40px);\n}\n.eye::before{\n  content: '';\n  display: block;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  position: absolute;\n  top: 3.5px;\n  left: 3.5px;\n}\n.mouth{\n  width: 42px;\n  height: 32px;\n  background: #fff;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  margin-left: -21px;\n  top: 120px;\n  z-index: 5;\n}\n.mouth.right{\n  transform: translateX(14px);\n}\n.mouth.left{\n  transform: translateX(-14px);\n}\n.nose{\n  width: 32px;\n  height: 16px;\n  border-radius: 50% 50% 35% 35%;\n  background: pink;\n  margin: 0 auto;\n  position: relative;\n  top: 114px;\n  z-index: 6;\n}\n.tongue{\n  width: 36px;\n  height: 28px;\n  border-radius: 50%;\n  background: pink;\n  margin: 0 auto;\n  position: relative;\n  top: 98px;\n  z-index: 4;\n  transition: height 500ms ease-in-out;\n}\n.belly{\n  width: 112px;\n  height: 80px;\n  background: #fff;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  margin-left: -56px;\n  top: 178px;\n}\n.ear{\n  width: 64px;\n  height: 224px;\n  background: #F2F2F2;\n  border-radius: 50%;\n  position: absolute;\n  top: 32px;\n  left: 50%;\n  margin-left: -32px;\n}\n.ear.left{\n  transform: translateX(56px) rotate(10deg);\n  transform-origin: center bottom;\n  animation: waveLeft 2s infinite linear;\n}\n.ear.right{\n  transform: translateX(-56px) rotate(-10deg);\n  transform-origin: center bottom;\n  animation: waveRight 2s infinite linear;\n}\n.inner-ear-left{\n  width: 40px;\n  height: 160px;\n  background: #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 32px;\n  left: 50%;\n  margin-left: -20px;\n}\n.inner-ear-right{\n  width: 40px;\n  height: 160px;\n  background: #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 32px;\n  left: 50%;\n  margin-left: -20px;\n}\n@keyframes waveRight {\n  0%{\n    transform: translateX(-56px) rotate(-10deg);\n  }\n  50%{\n    transform: translateX(-56px) rotate(8deg);\n  }\n  100%{\n    transform: translateX(-56px) rotate(-10deg);\n  }\n}\n@keyframes waveLeft {\n  0%{\n    transform: translateX(56px) rotate(10deg);\n  }\n  50%{\n    transform: translateX(56px) rotate(-8deg);\n  }\n  100%{\n    transform: translateX(56px) rotate(10deg);\n  }\n}\n\n.container:hover .tongue{\n  height: 48px;\n}\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);
var time = 100;

var run = function run() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var playAgian = function playAgian() {
  return setInterval(run, time);
};

var id = playAgian();

var stop = function stop() {
  return window.clearInterval(id);
};

pause.onclick = function () {
  stop();
};

play.onclick = function () {
  id = playAgian();
};

slow.onclick = function () {
  stop();
  time = 300;
  id = playAgian();
};

normal.onclick = function () {
  stop();
  time = 50;
  id = playAgian();
};

fast.onclick = function () {
  stop();
  time = 0;
  id = playAgian();
};
},{"./css":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.538188f9.js.map