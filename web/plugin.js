/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
  gengerateRandomId: function gengerateRandomId(prefix) {
    return prefix + new Date().getTime().toString().substring(9, 3) + parseInt(Math.random() * 10000, 10);
  },
  setFirstLetterToUppercase: function setFirstLetterToUppercase(str) {
    return str.substr(0, 1).toUpperCase() + str.substring(1);
  },
  getObjectFirstVal: function getObjectFirstVal(obj) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
      return obj[Object.keys(obj)[0]];
    }
    return null;
  },

  // offset polyfill
  calcOffset: function calcOffset(x, y) {
    var halfY = y / 2;
    var newX = x - halfY;
    return [newX, y];
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mapManager = __webpack_require__(2);

var _mapManager2 = _interopRequireDefault(_mapManager);

var _vendor = __webpack_require__(0);

var _vendor2 = _interopRequireDefault(_vendor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// manage components

var components = {
  registerComponent: function registerComponent(componentName, options, id, callback) {
    var _this = this;

    var opts = options || {};
    if (!this._components) {
      this._components = {};
    }
    _mapManager2.default.addReadyCallback(function (mapIns) {
      opts.map = mapIns;
      // options.center = new AMap.LngLat(options.center[0],options.center[1]);
      var className = _vendor2.default.setFirstLetterToUppercase(componentName);
      if (opts.offset) {
        opts.offset = new AMap.Pixel(opts.offset[0], opts.offset[1]);
      } else {
        // this is a sdk bug polyfill
        opts.offset = new AMap.Pixel(0, 0);
      }
      _this._components[id] = new AMap[className](opts);
      if (typeof callback === 'function') {
        callback(_this._components[id], mapIns);
      }
    });
  },
  getComponent: function getComponent(id) {
    if (!this._components) {
      return null;
    }
    if (!id) {
      return _vendor2.default.getObjectFirstVal(this._components);
    }
    return this._components[id];
  },
  getComponentMap: function getComponentMap() {
    return _mapManager2.default.getMap();
  }
};

module.exports = components;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** map instance manager
* 20170204
**/
var callbackStack = [];
module.exports = {
  initMap: function initMap(id, map) {
    if (!this.__maps) {
      this.__maps = {};
    }
    this.__maps[id] = map;
    callbackStack.forEach(function (cb) {
      cb(map);
    });
    callbackStack = [];
  },
  getMap: function getMap(id) {
    if (!this.__maps) {
      return null;
    }
    if (!id) {
      id = Object.keys(this.__maps)[0];
    }
    return this.__maps[id];
  },
  addReadyCallback: function addReadyCallback(callback) {
    callbackStack.push(callback);
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // a lib to manage all marker


var _mapManager = __webpack_require__(2);

var _mapManager2 = _interopRequireDefault(_mapManager);

var _vendor = __webpack_require__(0);

var _vendor2 = _interopRequireDefault(_vendor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markers = {};
module.exports = {
  changeMarker: function changeMarker(arr, map) {
    for (var i = 0; i < arr.length; i++) {
      var data = arr[i];
      var marker = this.findMarker(data);
      if (!marker) {
        this.addMarker(data, map);
      } else {
        this.removeMarker(data);
      }
    }
  },
  addMarker: function addMarker(data) {
    var _this = this;

    var map = _mapManager2.default.getMap();
    if (!map) {
      return _mapManager2.default.addReadyCallback(function (mapIns) {
        _this.setMarker(data, mapIns);
      });
    }
    return this.setMarker(data, map);
  },
  setMarker: function setMarker(data, map) {
    var icon = null;
    if (data.icon) {
      icon = new AMap.Icon({
        image: data.icon,
        size: new AMap.Size(64, 64)
      });
    }
    var marker = new AMap.Marker({
      position: data.position,
      title: data.title,
      icon: icon,
      map: map
    });
    markers[this.__getMid(data)] = marker;
    this.registerEvents(data.events, marker);
  },
  removeMaker: function removeMaker(data) {
    var marker = this.findMarker(data);
    marker.setMap(null);
  },
  updateMarker: function updateMarker(data, attr, val) {
    var marker = this.findMarker(data);
    if (!marker) {
      return false;
    }
    var method = _vendor2.default.setFirstLetterToUppercase(attr);
    marker['set' + method](val);
  },
  registerEvents: function registerEvents(events, marker) {
    if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) === 'object') {
      for (var key in events) {
        AMap.event.addListener(marker, key, events[key]);
      }
    }
  },
  removeMarker: function removeMarker(data) {
    var marker = this.findMarker(data);
    if (marker) {
      marker.visible = true;
      marker = null;
    }
  },
  findMarker: function findMarker(data) {
    var mid = this.__getMid(data);
    return markers[mid];
  },
  __getMid: function __getMid(data) {
    return 'mid-' + data.ref || data.position.join('-');
  },
  __isMaker: function __isMaker(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.CLASS_NAME === 'AMap.Marker';
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _web = __webpack_require__(11);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.weex && window.weex.install(_web2.default);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(1);

var _components2 = _interopRequireDefault(_components);

var _vendor = __webpack_require__(0);

var _vendor2 = _interopRequireDefault(_vendor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentName = 'circle';
// prototype methods.
var proto = {
  create: function create() {
    var _this = this;

    var node = document.createElement('div');
    var data = this.data.attr;
    var comId = data.ref || _vendor2.default.gengerateRandomId(componentName);
    if (data.center && Array.isArray(data.center)) {
      _components2.default.registerComponent(componentName, {
        center: data.center,
        radius: data.radius,
        fillColor: data.fillColor,
        filOpacity: data.fillOpacity,
        strokeWeight: data.strokeWidth,
        strokeOpacity: data.strokeOpacity,
        strokeColor: data.strokeColor,
        strokeStyle: data.strokeStyle,
        events: {
          click: function click() {
            _this.dispatchEvent('click');
          }
        }
      }, comId);
    } else {
      console.warn('attribute center must be an array.');
    }
    this._comId = comId;
    return node;
  }
};

var attr = {
  center: function center(val) {
    var com = _components2.default.getComponent(this._comId);
    if (com) {
      com.setCenter(val);
    }
  }
};

var event = {
  click: {
    extra: function extra() {
      return { isSuccess: true };
    }
  }
};

function init(Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  function AmapCircle(data) {
    Component.call(this, data);
  }
  AmapCircle.prototype = Object.create(Component.prototype);
  extend(AmapCircle.prototype, proto);
  extend(AmapCircle.prototype, { attr: attr });
  extend(AmapCircle.prototype, { event: event });
  Weex.registerComponent('weex-amap-circle', AmapCircle);
}

exports.default = { init: init };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(1);

var _components2 = _interopRequireDefault(_components);

var _vendor = __webpack_require__(0);

var _vendor2 = _interopRequireDefault(_vendor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentName = 'InfoWindow';
// prototype methods.
var proto = {
  create: function create() {
    var _this = this;

    var node = document.createElement('div');
    node.style.opacity = 0;
    var data = this.data.attr;
    var comId = this.data.ref || _vendor2.default.gengerateRandomId(componentName);
    this.addAppendHandler(function () {
      if (data.position && Array.isArray(data.position)) {
        _components2.default.registerComponent(componentName, {
          position: data.position,
          offset: data.offset,
          isCustom: true
        }, comId, function (com, map) {
          var content = data.content;
          if (_this.node.innerHTML.length > 0) {
            content = _this.node.innerHTML;
          }
          if (content) {
            com.setContent(content);
          }
          if (data.open && content) {
            com.open(map, _this.data.attr.position);
          } else {
            com.close();
          }
        });
      } else {
        console.warn('attribute center must be an array.');
      }
    });
    this._comId = comId;
    return node;
  }
};

var attr = {
  open: function open(val) {
    var com = _components2.default.getComponent(this.data.ref);
    var map = _components2.default.getComponentMap();
    if (com) {
      if (val) {
        com.open(map, this.data.attr.position);
      } else {
        com.close();
      }
    }
  }
};

var event = {};

function init(Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  function AmapInfoWindow(data) {
    Component.call(this, data);
  }
  AmapInfoWindow.prototype = Object.create(Component.prototype);
  extend(AmapInfoWindow.prototype, proto);
  extend(AmapInfoWindow.prototype, { attr: attr });
  extend(AmapInfoWindow.prototype, { event: event });
  Weex.registerComponent('weex-amap-info-window', AmapInfoWindow);
}

exports.default = { init: init };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marker = __webpack_require__(3);

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var params = {
  poistion: [],
  title: '',
  icon: ''
};

// prototype methods.
var proto = {
  create: function create() {
    var _this = this;

    var node = document.createElement('div');
    var data = this.data.attr;
    _marker2.default.addMarker({
      position: data.position,
      icon: data.icon,
      title: data.title,
      ref: this.data.ref,
      events: {
        click: function click() {
          _this.dispatchEvent('click');
        }
      },
      map: window.Amap
    });
    return node;
  },
  updateAttrs: function updateAttrs(attrs) {
    var keys = Object.keys(attrs);
    var data = {
      ref: this.data.ref
    };
    keys.forEach(function (k) {
      _marker2.default.updateMarker(data, k, attrs[k]);
    });
  }
};

var attr = {
  position: function position(val) {
    console.log(val);
    console.log(this);
    if (Array.isArray(val) && val.length === 2) {
      params.position = val;
    }
  },
  icon: function icon(val) {
    params.icon = val;
  },
  title: function title(val) {
    params.title = val;
  }
};

var event = {
  click: {
    extra: function extra() {
      return { isSuccess: true };
    }
  }
};

function init(Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  function AmapMaker(data) {
    Component.call(this, data);
  }
  AmapMaker.prototype = Object.create(Component.prototype);
  extend(AmapMaker.prototype, proto);
  extend(AmapMaker.prototype, { attr: attr });
  extend(AmapMaker.prototype, { event: event });
  Weex.registerComponent('weex-amap-marker', AmapMaker);
}

exports.default = { init: init };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(1);

var _components2 = _interopRequireDefault(_components);

var _vendor = __webpack_require__(0);

var _vendor2 = _interopRequireDefault(_vendor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentName = 'polygon';
// prototype methods.
var proto = {
  create: function create() {
    var _this = this;

    var node = document.createElement('div');
    var data = this.data.attr;
    var comId = this.data.ref || _vendor2.default.gengerateRandomId(componentName);
    if (data.path && Array.isArray(data.path)) {
      _components2.default.registerComponent(componentName, {
        path: data.path,
        fillColor: data.fillColor,
        filOpacity: data.fillOpacity,
        strokeWeight: data.strokeWidth,
        strokeOpacity: data.strokeOpacity,
        strokeColor: data.strokeColor,
        strokeStyle: data.strokeStyle,
        events: {
          click: function click() {
            _this.dispatchEvent('click');
          }
        }
      }, comId);
    } else {
      console.warn('attribute path must be an array.');
    }
    this._comId = comId;
    return node;
  }
};

var attr = {};

var event = {
  click: {
    extra: function extra() {
      return { isSuccess: true };
    }
  }
};

function init(Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  function AmapPolygon(data) {
    Component.call(this, data);
  }
  AmapPolygon.prototype = Object.create(Component.prototype);
  extend(AmapPolygon.prototype, proto);
  extend(AmapPolygon.prototype, { attr: attr });
  extend(AmapPolygon.prototype, { event: event });
  Weex.registerComponent('weex-amap-polygon', AmapPolygon);
}

exports.default = { init: init };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(1);

var _components2 = _interopRequireDefault(_components);

var _vendor = __webpack_require__(0);

var _vendor2 = _interopRequireDefault(_vendor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentName = 'polyline';

var data = {};
// prototype methods.
var proto = {
  create: function create() {
    var _this = this;

    var node = document.createElement('div');
    data = this.data.attr;
    var comId = data.ref || _vendor2.default.gengerateRandomId(componentName);
    if (data.path && Array.isArray(data.path)) {
      _components2.default.registerComponent(componentName, {
        path: data.path,
        strokeWeight: data.strokeWidth,
        strokeOpacity: data.strokeOpacity,
        strokeColor: data.strokeColor,
        strokeStyle: data.strokeStyle,
        lineJoin: 'round',
        events: {
          click: function click() {
            _this.dispatchEvent('click');
          }
        }
      }, comId, function (com) {
        com.setPath(data.path);
      });
    } else {
      console.warn('attribute path must be an array.');
    }
    this._comId = comId;
    return node;
  }
};

var attr = {
  path: function path(val) {
    if (Array.isArray(val) && val.length >= 2) {
      data.path = val;
      var com = _components2.default.getComponent(this._comId);
      if (com) {
        com.setPath(val);
      }
    }
  }
};

var event = {
  click: {
    extra: function extra() {
      return { isSuccess: true };
    }
  }
};

function init(Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  function AmapPolygon(opts) {
    Component.call(this, opts);
  }
  AmapPolygon.prototype = Object.create(Component.prototype);
  extend(AmapPolygon.prototype, proto);
  extend(AmapPolygon.prototype, { attr: attr });
  extend(AmapPolygon.prototype, { event: event });
  Weex.registerComponent('weex-amap-polyline', AmapPolygon);
}

exports.default = { init: init };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marker = __webpack_require__(3);

var _marker2 = _interopRequireDefault(_marker);

var _mapLoader = __webpack_require__(13);

var _mapLoader2 = _interopRequireDefault(_mapLoader);

var _mapManager = __webpack_require__(2);

var _mapManager2 = _interopRequireDefault(_mapManager);

var _vendor = __webpack_require__(0);

var _vendor2 = _interopRequireDefault(_vendor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadingGif = 'http://img1.vued.vanthink.cn/vued2113eaa062abbaee0441d16a7848d23e.gif';
var params = {
  center: undefined,
  zoom: 11,
  toolbar: true,
  scale: false,
  geolocation: false,
  resizeEnable: true,
  search: false
};
var events = ['zoomchange', 'dragend'];
// prototype methods.
var proto = {
  create: function create() {
    this.mapwrap = document.createElement('div');
    this.mapwrap.id = _vendor2.default.gengerateRandomId('map');
    this.mapwrap.append(this.renderLoadingSpinner());
    return this.mapwrap;
  },
  renderLoadingSpinner: function renderLoadingSpinner() {
    var el = document.createElement('div');
    el.style.height = 60;
    el.style.margin = '20 auto';
    el.style.textAlign = 'center';
    var image = document.createElement('img');
    image.src = loadingGif;
    el.appendChild(image);
    var text = document.createElement('div');
    text.appendChild(document.createTextNode('高德地图加载中....'));
    el.appendChild(text);
    return el;
  },
  ready: function ready() {
    var _this = this;

    var self = this;
    if (window.AMap) {
      this.map = new AMap.Map(this.mapwrap.id, params);
      AMap.plugin(['AMap.ToolBar', 'AMap.Geolocation'], function () {
        if (params.scale) {
          self.map.addControl(new AMap.ToolBar());
        }
        if (params.geolocation) {
          self.map.addControl(new AMap.Geolocation());
        }
      });
      if (params.search) {
        AMap.service('AMap.PlaceSearch', function () {
          _this.placeSearch = new AMap.PlaceSearch();
        });
      }
      this.initEvents();
      _mapManager2.default.initMap(this.mapwrap.id, this.map);
    }
  },
  removeChild: function removeChild(child) {
    _marker2.default.removeMaker(child.data);
  },
  initEvents: function initEvents() {
    var _this2 = this;

    events.forEach(function (eventName) {
      AMap.event.addListener(_this2.map, eventName, function () {
        _this2.dispatchEvent(eventName);
      });
    });
  }
};

var attr = {
  center: function center(val) {
    if (Array.isArray(val) && val.length === 2) {
      params.center = val;
      if (window.AMap) {
        this.map.setCenter(params.center);
      }
    }
    if (typeof val === 'number') {
      var geo = new AMap.Geolocation({
        enableHighAccuracy: true
      });
      var self = this;
      geo.getCurrentPosition();
      AMap.event.AMap.event.addListener(geo, 'complete', function (data) {
        params.center = [data.position.getLng(), data.position.getLat()];
        self.map.setCenter(params.center);
      });
    }
  },
  zoom: function zoom(val) {
    if (/^[0-9]+$/.test(val)) {
      params.zoom = val;
    }
    if (window.AMap) {
      this.map.setZoom(params.zoom);
    }
  },
  scale: function scale(val) {
    params.scale = val;
  },
  geolocation: function geolocation(val) {
    params.geolocation = val;
  },
  sdkKey: function sdkKey(val) {
    var _this3 = this;

    var key = '';
    if (val) {
      key = val.h5;
    }
    _mapLoader2.default.load({
      key: key
    }, this.mapwrap, function () {
      return _this3.ready();
    });
  },
  search: function search(val) {
    params.search = val;
    if (window.AMap) {}
  }
};

var event = {
  zoomchange: {
    extra: function extra() {
      return { isSuccess: true };
    }
  },
  dragend: {
    extra: function extra() {
      return { isSuccess: true };
    }
  }
};

function init(Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  function Amap(data) {
    Component.call(this, data);
  }
  Amap.prototype = Object.create(Component.prototype);
  extend(Amap.prototype, proto);
  extend(Amap.prototype, { attr: attr });
  extend(Amap.prototype, {
    style: extend(Object.create(Component.prototype.style), {})
  });
  extend(Amap.prototype, { event: event });
  Weex.registerComponent('weex-amap', Amap);
}

exports.default = { init: init };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _amap = __webpack_require__(12);

var _amap2 = _interopRequireDefault(_amap);

var _amap3 = __webpack_require__(10);

var _amap4 = _interopRequireDefault(_amap3);

var _amapMarker = __webpack_require__(7);

var _amapMarker2 = _interopRequireDefault(_amapMarker);

var _amapCircle = __webpack_require__(5);

var _amapCircle2 = _interopRequireDefault(_amapCircle);

var _amapPolygon = __webpack_require__(8);

var _amapPolygon2 = _interopRequireDefault(_amapPolygon);

var _amapPolyline = __webpack_require__(9);

var _amapPolyline2 = _interopRequireDefault(_amapPolyline);

var _amapInfoWindow = __webpack_require__(6);

var _amapInfoWindow2 = _interopRequireDefault(_amapInfoWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import VueAmap from './vue-amap/index';
var components = [_amap4.default, _amapMarker2.default, _amapCircle2.default, _amapPolygon2.default, _amapPolyline2.default, _amapInfoWindow2.default];

function init(Weex) {
  components.forEach(function (comp) {
    comp.init(Weex);
  });
  (0, _amap2.default)(Weex);
}
module.exports = {
  init: init
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _components = __webpack_require__(1);

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// AMap module
var amap = {
  /** get user loaction by browser and IP
  * @param {function} callback
  * @param {function} errorCallback
  **/
  getUserLocation: function getUserLocation(mapRef, callback) {
    var self = this;
    var geo = new AMap.Geolocation({
      enableHighAccuracy: true,
      timeout: 10000
    });
    geo.getCurrentPosition(function (status, res) {
      if (status !== 'error') {
        self.sender.performCallback(callback, {
          data: {
            position: [res.position.getLng(), res.position.getLat()]
          },
          result: 'success'
        });
      } else {
        console.warn(res.message);
      }
    });
  },

  /** get distance between two position
  * @param coor1
  * @param corr2
  * @param callback
  **/
  getLineDistance: function getLineDistance(coor1, coor2, callback) {
    var lnglat = new AMap.LngLat(coor1[0], coor1[1]);
    var result = lnglat.distance(coor2);
    this.sender.performCallback(callback, {
      result: !result ? 'fail' : 'success',
      data: {
        distance: result
      }
    });
  },

  /** tell if the marker in a polygon
  * @param coor the marker position
  * @param polygonRef
  **/
  polygonContainsMarker: function polygonContainsMarker(coor, polygonRef, callback) {
    var polygonCom = _components2.default.getComponent(polygonRef);
    var result = polygonCom.contains(coor);
    this.sender.performCallback(callback, {
      result: !result ? 'fail' : 'success',
      data: result
    });
  }
};

var meta = {
  amap: [{
    name: 'getUserLocation',
    args: ['string', 'function']
  }, {
    name: 'getLineDistance',
    args: ['array', 'array', 'function']
  }, {
    name: 'polygonContainsMarker',
    args: ['array', 'string']
  }]
};

module.exports = function (Weex) {
  Weex.registerApiModule('amap', amap, meta);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// load map sdk
var DEFAULT_CONFIG = {
  key: '',
  v: '1.3',
  url: 'https://webapi.amap.com/maps',
  callback: 'amapInitComponent'
};
var gengerateScriptUrl = function gengerateScriptUrl(obj) {
  var paramArr = [];
  for (var key in obj) {
    if (key !== 'url') {
      paramArr.push(encodeURI(key + '=' + obj[key]));
    }
  }
  var url = obj.url += '?' + paramArr.join('&');
  return url;
};

module.exports = {
  load: function load(config, container, callback) {
    var newConfig = Object.assign({}, DEFAULT_CONFIG, config);
    var lib = document.createElement('script');
    lib.async = true;
    lib.defer = true;
    lib.src = gengerateScriptUrl(newConfig);
    console.log(lib.src);
    window.amapInitComponent = function () {
      window.maploaded = true;
      callback();
    };
    document.head.appendChild(lib);
    this.loadTimeout(container);
  },
  loadTimeout: function loadTimeout(wrap) {
    setTimeout(function () {
      if (!window.Amap) {
        var el = document.createElement('button');
        el.appendChild(document.createTextNode('重新加载'));
        el.addEventListener('click', function () {
          location.reload();
        });
        wrap.childNodes[0].remove();
        wrap.appendChild(el);
      }
    }, 10000);
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGM1MjdiMWU3YWZmNTk2MzY0NzkiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvdmVuZG9yLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFwLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFya2VyLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvcGx1Z2luX2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWluZm8td2luZG93LmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAtbWFya2VyLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAtcG9seWdvbi5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLXBvbHlsaW5lLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9tb2R1bGUvYW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXAtbG9hZGVyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJnZW5nZXJhdGVSYW5kb21JZCIsInByZWZpeCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJzZXRGaXJzdExldHRlclRvVXBwZXJjYXNlIiwic3RyIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJnZXRPYmplY3RGaXJzdFZhbCIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJjYWxjT2Zmc2V0IiwieCIsInkiLCJoYWxmWSIsIm5ld1giLCJjb21wb25lbnRzIiwicmVnaXN0ZXJDb21wb25lbnQiLCJjb21wb25lbnROYW1lIiwib3B0aW9ucyIsImlkIiwiY2FsbGJhY2siLCJvcHRzIiwiX2NvbXBvbmVudHMiLCJhZGRSZWFkeUNhbGxiYWNrIiwibWFwSW5zIiwibWFwIiwiY2xhc3NOYW1lIiwib2Zmc2V0IiwiQU1hcCIsIlBpeGVsIiwiZ2V0Q29tcG9uZW50IiwiZ2V0Q29tcG9uZW50TWFwIiwiZ2V0TWFwIiwiY2FsbGJhY2tTdGFjayIsImluaXRNYXAiLCJfX21hcHMiLCJmb3JFYWNoIiwiY2IiLCJwdXNoIiwibWFya2VycyIsImNoYW5nZU1hcmtlciIsImFyciIsImkiLCJsZW5ndGgiLCJkYXRhIiwibWFya2VyIiwiZmluZE1hcmtlciIsImFkZE1hcmtlciIsInJlbW92ZU1hcmtlciIsInNldE1hcmtlciIsImljb24iLCJJY29uIiwiaW1hZ2UiLCJzaXplIiwiU2l6ZSIsIk1hcmtlciIsInBvc2l0aW9uIiwidGl0bGUiLCJfX2dldE1pZCIsInJlZ2lzdGVyRXZlbnRzIiwiZXZlbnRzIiwicmVtb3ZlTWFrZXIiLCJzZXRNYXAiLCJ1cGRhdGVNYXJrZXIiLCJhdHRyIiwidmFsIiwibWV0aG9kIiwia2V5IiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsInZpc2libGUiLCJtaWQiLCJyZWYiLCJqb2luIiwiX19pc01ha2VyIiwiQ0xBU1NfTkFNRSIsIndpbmRvdyIsIndlZXgiLCJpbnN0YWxsIiwicHJvdG8iLCJjcmVhdGUiLCJub2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29tSWQiLCJjZW50ZXIiLCJBcnJheSIsImlzQXJyYXkiLCJyYWRpdXMiLCJmaWxsQ29sb3IiLCJmaWxPcGFjaXR5IiwiZmlsbE9wYWNpdHkiLCJzdHJva2VXZWlnaHQiLCJzdHJva2VXaWR0aCIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VDb2xvciIsInN0cm9rZVN0eWxlIiwiY2xpY2siLCJkaXNwYXRjaEV2ZW50IiwiY29uc29sZSIsIndhcm4iLCJfY29tSWQiLCJjb20iLCJzZXRDZW50ZXIiLCJleHRyYSIsImlzU3VjY2VzcyIsImluaXQiLCJXZWV4IiwiQ29tcG9uZW50IiwiZXh0ZW5kIiwidXRpbHMiLCJBbWFwQ2lyY2xlIiwiY2FsbCIsInByb3RvdHlwZSIsInN0eWxlIiwib3BhY2l0eSIsImFkZEFwcGVuZEhhbmRsZXIiLCJpc0N1c3RvbSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzZXRDb250ZW50Iiwib3BlbiIsImNsb3NlIiwiQW1hcEluZm9XaW5kb3ciLCJwYXJhbXMiLCJwb2lzdGlvbiIsIkFtYXAiLCJ1cGRhdGVBdHRycyIsImF0dHJzIiwiayIsImxvZyIsIkFtYXBNYWtlciIsInBhdGgiLCJBbWFwUG9seWdvbiIsImxpbmVKb2luIiwic2V0UGF0aCIsImxvYWRpbmdHaWYiLCJ1bmRlZmluZWQiLCJ6b29tIiwidG9vbGJhciIsInNjYWxlIiwiZ2VvbG9jYXRpb24iLCJyZXNpemVFbmFibGUiLCJzZWFyY2giLCJtYXB3cmFwIiwiYXBwZW5kIiwicmVuZGVyTG9hZGluZ1NwaW5uZXIiLCJlbCIsImhlaWdodCIsIm1hcmdpbiIsInRleHRBbGlnbiIsInNyYyIsImFwcGVuZENoaWxkIiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwicmVhZHkiLCJzZWxmIiwiTWFwIiwicGx1Z2luIiwiYWRkQ29udHJvbCIsIlRvb2xCYXIiLCJHZW9sb2NhdGlvbiIsInNlcnZpY2UiLCJwbGFjZVNlYXJjaCIsIlBsYWNlU2VhcmNoIiwiaW5pdEV2ZW50cyIsInJlbW92ZUNoaWxkIiwiY2hpbGQiLCJldmVudE5hbWUiLCJnZW8iLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJnZXRMbmciLCJnZXRMYXQiLCJ0ZXN0Iiwic2V0Wm9vbSIsInNka0tleSIsImg1IiwibG9hZCIsInpvb21jaGFuZ2UiLCJkcmFnZW5kIiwiY29tcCIsImFtYXAiLCJnZXRVc2VyTG9jYXRpb24iLCJtYXBSZWYiLCJ0aW1lb3V0Iiwic3RhdHVzIiwicmVzIiwic2VuZGVyIiwicGVyZm9ybUNhbGxiYWNrIiwicmVzdWx0IiwibWVzc2FnZSIsImdldExpbmVEaXN0YW5jZSIsImNvb3IxIiwiY29vcjIiLCJsbmdsYXQiLCJMbmdMYXQiLCJkaXN0YW5jZSIsInBvbHlnb25Db250YWluc01hcmtlciIsImNvb3IiLCJwb2x5Z29uUmVmIiwicG9seWdvbkNvbSIsImNvbnRhaW5zIiwibWV0YSIsIm5hbWUiLCJhcmdzIiwicmVnaXN0ZXJBcGlNb2R1bGUiLCJERUZBVUxUX0NPTkZJRyIsInYiLCJ1cmwiLCJnZW5nZXJhdGVTY3JpcHRVcmwiLCJwYXJhbUFyciIsImVuY29kZVVSSSIsImNvbmZpZyIsImNvbnRhaW5lciIsIm5ld0NvbmZpZyIsImFzc2lnbiIsImxpYiIsImFzeW5jIiwiZGVmZXIiLCJhbWFwSW5pdENvbXBvbmVudCIsIm1hcGxvYWRlZCIsImhlYWQiLCJsb2FkVGltZW91dCIsIndyYXAiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2hpbGROb2RlcyIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFF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QTJCLFlBQVk7QUFDckNoSixhQUFPaUosU0FBUCxHQUFtQixJQUFuQjtBQUNBek07QUFDRCxLQUhEO0FBSUE4RCxhQUFTNEksSUFBVCxDQUFjdEUsV0FBZCxDQUEwQmlFLEdBQTFCO0FBQ0EsU0FBS00sV0FBTCxDQUFpQlQsU0FBakI7QUFDRCxHQWRjO0FBZWZTLGFBZmUsdUJBZUhDLElBZkcsRUFlRztBQUNoQkMsZUFBVyxZQUFNO0FBQ2YsVUFBSSxDQUFDckosT0FBT2tELElBQVosRUFBa0I7QUFDaEIsWUFBTXFCLEtBQUtqRSxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQVg7QUFDQWdFLFdBQUdLLFdBQUgsQ0FBZXRFLFNBQVN3RSxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQVAsV0FBRytFLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDakNDLG1CQUFTQyxNQUFUO0FBQ0QsU0FGRDtBQUdBSixhQUFLSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CQyxNQUFuQjtBQUNBTixhQUFLeEUsV0FBTCxDQUFpQkwsRUFBakI7QUFDRDtBQUNGLEtBVkQsRUFVRyxLQVZIO0FBV0Q7QUEzQmMsQ0FBakIsQyIsImZpbGUiOiJwbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YzUyN2IxZTdhZmY1OTYzNjQ3OSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBnZW5nZXJhdGVSYW5kb21JZChwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoOSwgMykpICsgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMDAwLCAxMCk7XG4gIH0sXG4gIHNldEZpcnN0TGV0dGVyVG9VcHBlcmNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHJpbmcoMSk7XG4gIH0sXG4gIGdldE9iamVjdEZpcnN0VmFsKG9iaikge1xuICAgIGlmKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gb2JqW09iamVjdC5rZXlzKG9iailbMF1dXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICAvLyBvZmZzZXQgcG9seWZpbGxcbiAgY2FsY09mZnNldCh4LCB5KSB7XG4gICAgdmFyIGhhbGZZID0geSAvIDI7XG4gICAgdmFyIG5ld1ggPSB4IC0gaGFsZlk7XG4gICAgcmV0dXJuIFtuZXdYLCB5XTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL3ZlbmRvci5qcyIsIi8vIG1hbmFnZSBjb21wb25lbnRzXG5cbmltcG9ydCBhbWFwTWFuYWdlciBmcm9tICcuL21hcC1tYW5hZ2VyJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi92ZW5kb3InO1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICByZWdpc3RlckNvbXBvbmVudChjb21wb25lbnROYW1lLCBvcHRpb25zLCBpZCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSB7fTtcbiAgICB9XG4gICAgYW1hcE1hbmFnZXIuYWRkUmVhZHlDYWxsYmFjaygobWFwSW5zKSA9PiB7XG4gICAgICBvcHRzLm1hcCA9IG1hcElucztcbiAgICAgIC8vIG9wdGlvbnMuY2VudGVyID0gbmV3IEFNYXAuTG5nTGF0KG9wdGlvbnMuY2VudGVyWzBdLG9wdGlvbnMuY2VudGVyWzFdKTtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHZlbmRvci5zZXRGaXJzdExldHRlclRvVXBwZXJjYXNlKGNvbXBvbmVudE5hbWUpO1xuICAgICAgaWYgKG9wdHMub2Zmc2V0KSB7XG4gICAgICAgIG9wdHMub2Zmc2V0ID0gbmV3IEFNYXAuUGl4ZWwob3B0cy5vZmZzZXRbMF0sIG9wdHMub2Zmc2V0WzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYSBzZGsgYnVnIHBvbHlmaWxsXG4gICAgICAgIG9wdHMub2Zmc2V0ID0gbmV3IEFNYXAuUGl4ZWwoMCwgMCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb21wb25lbnRzW2lkXSA9IG5ldyBBTWFwW2NsYXNzTmFtZV0ob3B0cyk7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMuX2NvbXBvbmVudHNbaWRdLCBtYXBJbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBnZXRDb21wb25lbnQoaWQpIHtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gdmVuZG9yLmdldE9iamVjdEZpcnN0VmFsKHRoaXMuX2NvbXBvbmVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c1tpZF07XG4gIH0sXG4gIGdldENvbXBvbmVudE1hcCgpIHtcbiAgICByZXR1cm4gYW1hcE1hbmFnZXIuZ2V0TWFwKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcG9uZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL2NvbXBvbmVudHMuanMiLCIvKiogbWFwIGluc3RhbmNlIG1hbmFnZXJcbiogMjAxNzAyMDRcbioqL1xubGV0IGNhbGxiYWNrU3RhY2sgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0TWFwKGlkLCBtYXApIHtcbiAgICBpZiAoIXRoaXMuX19tYXBzKSB7XG4gICAgICB0aGlzLl9fbWFwcyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLl9fbWFwc1tpZF0gPSBtYXA7XG4gICAgY2FsbGJhY2tTdGFjay5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgY2IobWFwKTtcbiAgICB9KTtcbiAgICBjYWxsYmFja1N0YWNrID0gW107XG4gIH0sXG4gIGdldE1hcChpZCkge1xuICAgIGlmICghdGhpcy5fX21hcHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIWlkKSB7XG4gICAgICBpZCA9IE9iamVjdC5rZXlzKHRoaXMuX19tYXBzKVswXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX19tYXBzW2lkXTtcbiAgfSxcbiAgYWRkUmVhZHlDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrU3RhY2sucHVzaChjYWxsYmFjayk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXAtbWFuYWdlci5qcyIsIi8vIGEgbGliIHRvIG1hbmFnZSBhbGwgbWFya2VyXG5pbXBvcnQgYW1hcE1hbmFnZXIgZnJvbSAnLi9tYXAtbWFuYWdlcic7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4vdmVuZG9yJztcblxuY29uc3QgbWFya2VycyA9IHt9O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoYW5nZU1hcmtlcihhcnIsIG1hcCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXJyW2ldO1xuICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgICAgaWYgKCFtYXJrZXIpIHtcbiAgICAgICAgdGhpcy5hZGRNYXJrZXIoZGF0YSwgbWFwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTWFya2VyKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgYWRkTWFya2VyKGRhdGEpIHtcbiAgICBjb25zdCBtYXAgPSBhbWFwTWFuYWdlci5nZXRNYXAoKTtcbiAgICBpZiAoIW1hcCkge1xuICAgICAgcmV0dXJuIGFtYXBNYW5hZ2VyLmFkZFJlYWR5Q2FsbGJhY2soKG1hcElucykgPT4ge1xuICAgICAgICB0aGlzLnNldE1hcmtlcihkYXRhLCBtYXBJbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNldE1hcmtlcihkYXRhLCBtYXApO1xuICB9LFxuICBzZXRNYXJrZXIoZGF0YSwgbWFwKSB7XG4gICAgbGV0IGljb24gPSBudWxsO1xuICAgIGlmIChkYXRhLmljb24pIHtcbiAgICAgIGljb24gPSBuZXcgQU1hcC5JY29uKHtcbiAgICAgICAgaW1hZ2U6IGRhdGEuaWNvbixcbiAgICAgICAgc2l6ZTogbmV3IEFNYXAuU2l6ZSg2NCwgNjQpXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgbWFya2VyID0gbmV3IEFNYXAuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICBpY29uOiBpY29uLFxuICAgICAgbWFwOiBtYXAsXG4gICAgfSk7XG4gICAgbWFya2Vyc1t0aGlzLl9fZ2V0TWlkKGRhdGEpXSA9IG1hcmtlcjtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKGRhdGEuZXZlbnRzLCBtYXJrZXIpO1xuICB9LFxuICByZW1vdmVNYWtlcihkYXRhKSB7XG4gICAgY29uc3QgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XG4gIH0sXG4gIHVwZGF0ZU1hcmtlcihkYXRhLCBhdHRyLCB2YWwpIHtcbiAgICBjb25zdCBtYXJrZXIgPSB0aGlzLmZpbmRNYXJrZXIoZGF0YSk7XG4gICAgaWYgKCFtYXJrZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgbWV0aG9kID0gdmVuZG9yLnNldEZpcnN0TGV0dGVyVG9VcHBlcmNhc2UoYXR0cik7XG4gICAgbWFya2VyWydzZXQnICsgbWV0aG9kXSh2YWwpO1xuICB9LFxuICByZWdpc3RlckV2ZW50cyhldmVudHMsIG1hcmtlcikge1xuICAgIGlmICh0eXBlb2YgZXZlbnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXZlbnRzKSB7XG4gICAgICAgIEFNYXAuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCBrZXksIGV2ZW50c1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlbW92ZU1hcmtlcihkYXRhKSB7XG4gICAgbGV0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICBpZiAobWFya2VyKSB7XG4gICAgICBtYXJrZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICBtYXJrZXIgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgZmluZE1hcmtlcihkYXRhKSB7XG4gICAgY29uc3QgbWlkID0gdGhpcy5fX2dldE1pZChkYXRhKTtcbiAgICByZXR1cm4gbWFya2Vyc1ttaWRdO1xuICB9LFxuICBfX2dldE1pZChkYXRhKSB7XG4gICAgcmV0dXJuICdtaWQtJyArIGRhdGEucmVmIHx8IGRhdGEucG9zaXRpb24uam9pbignLScpO1xuICB9LFxuICBfX2lzTWFrZXIob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5DTEFTU19OQU1FID09PSAnQU1hcC5NYXJrZXInO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFya2VyLmpzIiwiaW1wb3J0IGFtYXAgZnJvbSBcIi9Vc2Vycy9qbHJhaW5pbmcvRGVza3RvcC9VbnRpdGxlZCBOb3RlL3dlZXhUZXN0L3dlZXhUZXN0L3BsdWdpbnMvd2VleC1hbWFwL3dlYlwiO1xyXG53aW5kb3cud2VleCAmJiB3aW5kb3cud2VleC5pbnN0YWxsKGFtYXApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvcGx1Z2luX2J1bmRsZS5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdjaXJjbGUnO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgY29uc3QgY29tSWQgPSBkYXRhLnJlZiB8fCB2ZW5kb3IuZ2VuZ2VyYXRlUmFuZG9tSWQoY29tcG9uZW50TmFtZSk7XG4gICAgaWYgKGRhdGEuY2VudGVyICYmIEFycmF5LmlzQXJyYXkoZGF0YS5jZW50ZXIpKSB7XG4gICAgICBjb21wb25lbnRzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgY2VudGVyOiBkYXRhLmNlbnRlcixcbiAgICAgICAgcmFkaXVzOiBkYXRhLnJhZGl1cyxcbiAgICAgICAgZmlsbENvbG9yOiBkYXRhLmZpbGxDb2xvcixcbiAgICAgICAgZmlsT3BhY2l0eTogZGF0YS5maWxsT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlV2VpZ2h0OiBkYXRhLnN0cm9rZVdpZHRoLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiBkYXRhLnN0cm9rZU9wYWNpdHksXG4gICAgICAgIHN0cm9rZUNvbG9yOiBkYXRhLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogZGF0YS5zdHJva2VTdHlsZSxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2xpY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LCBjb21JZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignYXR0cmlidXRlIGNlbnRlciBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgIH1cbiAgICB0aGlzLl9jb21JZCA9IGNvbUlkO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuICBjZW50ZXIodmFsKSB7XG4gICAgY29uc3QgY29tID0gY29tcG9uZW50cy5nZXRDb21wb25lbnQodGhpcy5fY29tSWQpO1xuICAgIGlmIChjb20pIHtcbiAgICAgIGNvbS5zZXRDZW50ZXIodmFsKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICBjbGljazoge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXBDaXJjbGUoZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBDaXJjbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXBDaXJjbGUucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwQ2lyY2xlLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcENpcmNsZS5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcC1jaXJjbGUnLCBBbWFwQ2lyY2xlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWNpcmNsZS5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdJbmZvV2luZG93Jztcbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgY29uc3QgY29tSWQgPSB0aGlzLmRhdGEucmVmIHx8IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZChjb21wb25lbnROYW1lKTtcbiAgICB0aGlzLmFkZEFwcGVuZEhhbmRsZXIoKCkgPT4ge1xuICAgICAgaWYgKGRhdGEucG9zaXRpb24gJiYgQXJyYXkuaXNBcnJheShkYXRhLnBvc2l0aW9uKSkge1xuICAgICAgICBjb21wb25lbnRzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgICAgICBvZmZzZXQ6IGRhdGEub2Zmc2V0LFxuICAgICAgICAgIGlzQ3VzdG9tOiB0cnVlLFxuICAgICAgICB9LCBjb21JZCwgKGNvbSwgbWFwKSA9PiB7XG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5pbm5lckhUTUwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMubm9kZS5pbm5lckhUTUw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb20uc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRhdGEub3BlbiAmJiBjb250ZW50KSB7XG4gICAgICAgICAgICBjb20ub3BlbihtYXAsIHRoaXMuZGF0YS5hdHRyLnBvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tLmNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignYXR0cmlidXRlIGNlbnRlciBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX2NvbUlkID0gY29tSWQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5cbmNvbnN0IGF0dHIgPSB7XG4gIG9wZW4odmFsKSB7XG4gICAgY29uc3QgY29tID0gY29tcG9uZW50cy5nZXRDb21wb25lbnQodGhpcy5kYXRhLnJlZik7XG4gICAgY29uc3QgbWFwID0gY29tcG9uZW50cy5nZXRDb21wb25lbnRNYXAoKTtcbiAgICBpZiAoY29tKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNvbS5vcGVuKG1hcCwgdGhpcy5kYXRhLmF0dHIucG9zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBldmVudCA9IHtcbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcEluZm9XaW5kb3coZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBJbmZvV2luZG93LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwSW5mb1dpbmRvdy5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBJbmZvV2luZG93LnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcEluZm9XaW5kb3cucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtaW5mby13aW5kb3cnLCBBbWFwSW5mb1dpbmRvdyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1pbmZvLXdpbmRvdy5qcyIsImltcG9ydCBtYXJrZXJNYW5hZ2VyIGZyb20gJy4uL3NlcnZpY2UvbWFya2VyJztcblxuY29uc3QgcGFyYW1zID0ge1xuICBwb2lzdGlvbjogW10sXG4gIHRpdGxlOiAnJyxcbiAgaWNvbjogJydcbn07XG5cbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5hdHRyO1xuICAgIG1hcmtlck1hbmFnZXIuYWRkTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxuICAgICAgaWNvbjogZGF0YS5pY29uLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICByZWY6IHRoaXMuZGF0YS5yZWYsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtYXA6IHdpbmRvdy5BbWFwXG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIHVwZGF0ZUF0dHJzKGF0dHJzKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcmVmOiB0aGlzLmRhdGEucmVmXG4gICAgfTtcbiAgICBrZXlzLmZvckVhY2goKGspID0+IHtcbiAgICAgIG1hcmtlck1hbmFnZXIudXBkYXRlTWFya2VyKGRhdGEsIGssIGF0dHJzW2tdKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgcG9zaXRpb24odmFsKSB7XG4gICAgY29uc29sZS5sb2codmFsKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHBhcmFtcy5wb3NpdGlvbiA9IHZhbDtcbiAgICB9XG4gIH0sXG4gIGljb24odmFsKSB7XG4gICAgcGFyYW1zLmljb24gPSB2YWw7XG4gIH0sXG4gIHRpdGxlKHZhbCkge1xuICAgIHBhcmFtcy50aXRsZSA9IHZhbDtcbiAgfVxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIGNsaWNrOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcE1ha2VyKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwTWFrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXBNYWtlci5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcC1tYXJrZXInLCBBbWFwTWFrZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9jb21wb25lbnRzL2FtYXAtbWFya2VyLmpzIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vc2VydmljZS9jb21wb25lbnRzJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi4vc2VydmljZS92ZW5kb3InO1xuXG5jb25zdCBjb21wb25lbnROYW1lID0gJ3BvbHlnb24nO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgY29uc3QgY29tSWQgPSB0aGlzLmRhdGEucmVmIHx8IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZChjb21wb25lbnROYW1lKTtcbiAgICBpZiAoZGF0YS5wYXRoICYmIEFycmF5LmlzQXJyYXkoZGF0YS5wYXRoKSkge1xuICAgICAgY29tcG9uZW50cy5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnROYW1lLCB7XG4gICAgICAgIHBhdGg6IGRhdGEucGF0aCxcbiAgICAgICAgZmlsbENvbG9yOiBkYXRhLmZpbGxDb2xvcixcbiAgICAgICAgZmlsT3BhY2l0eTogZGF0YS5maWxsT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlV2VpZ2h0OiBkYXRhLnN0cm9rZVdpZHRoLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiBkYXRhLnN0cm9rZU9wYWNpdHksXG4gICAgICAgIHN0cm9rZUNvbG9yOiBkYXRhLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogZGF0YS5zdHJva2VTdHlsZSxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2xpY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LCBjb21JZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignYXR0cmlidXRlIHBhdGggbXVzdCBiZSBhbiBhcnJheS4nKTtcbiAgICB9XG4gICAgdGhpcy5fY29tSWQgPSBjb21JZDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcblxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIGNsaWNrOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcFBvbHlnb24oZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBQb2x5Z29uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwUG9seWdvbi5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBQb2x5Z29uLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcFBvbHlnb24ucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtcG9seWdvbicsIEFtYXBQb2x5Z29uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLXBvbHlnb24uanMiLCJpbXBvcnQgY29tcG9uZW50cyBmcm9tICcuLi9zZXJ2aWNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuLi9zZXJ2aWNlL3ZlbmRvcic7XG5cbmNvbnN0IGNvbXBvbmVudE5hbWUgPSAncG9seWxpbmUnO1xuXG5sZXQgZGF0YSA9IHt9O1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgY29uc3QgY29tSWQgPSBkYXRhLnJlZiB8fCB2ZW5kb3IuZ2VuZ2VyYXRlUmFuZG9tSWQoY29tcG9uZW50TmFtZSk7XG4gICAgaWYgKGRhdGEucGF0aCAmJiBBcnJheS5pc0FycmF5KGRhdGEucGF0aCkpIHtcbiAgICAgIGNvbXBvbmVudHMucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50TmFtZSwge1xuICAgICAgICBwYXRoOiBkYXRhLnBhdGgsXG4gICAgICAgIHN0cm9rZVdlaWdodDogZGF0YS5zdHJva2VXaWR0aCxcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogZGF0YS5zdHJva2VPcGFjaXR5LFxuICAgICAgICBzdHJva2VDb2xvcjogZGF0YS5zdHJva2VDb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IGRhdGEuc3Ryb2tlU3R5bGUsXG4gICAgICAgIGxpbmVKb2luOiAncm91bmQnLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjbGljaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sIGNvbUlkLCAoY29tKSA9PiB7XG4gICAgICAgIGNvbS5zZXRQYXRoKGRhdGEucGF0aCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdhdHRyaWJ1dGUgcGF0aCBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgIH1cbiAgICB0aGlzLl9jb21JZCA9IGNvbUlkO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuICBwYXRoKHZhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA+PSAyKSB7XG4gICAgICBkYXRhLnBhdGggPSB2YWw7XG4gICAgICBjb25zdCBjb20gPSBjb21wb25lbnRzLmdldENvbXBvbmVudCh0aGlzLl9jb21JZCk7XG4gICAgICBpZiAoY29tKSB7XG4gICAgICAgIGNvbS5zZXRQYXRoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBldmVudCA9IHtcbiAgY2xpY2s6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7IGlzU3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBBbWFwUG9seWdvbihvcHRzKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgb3B0cyk7XG4gIH1cbiAgQW1hcFBvbHlnb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXBQb2x5Z29uLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoQW1hcFBvbHlnb24ucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChBbWFwUG9seWdvbi5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcC1wb2x5bGluZScsIEFtYXBQb2x5Z29uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLXBvbHlsaW5lLmpzIiwiaW1wb3J0IG1hcmtlck1hbmFnZSBmcm9tICcuLi9zZXJ2aWNlL21hcmtlcic7XG5pbXBvcnQgbWFwTG9hZGVyIGZyb20gJy4uL3NlcnZpY2UvbWFwLWxvYWRlcic7XG5pbXBvcnQgYW1hcE1hbmFnZXIgZnJvbSAnLi4vc2VydmljZS9tYXAtbWFuYWdlcic7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuXG5jb25zdCBsb2FkaW5nR2lmID0gJ2h0dHA6Ly9pbWcxLnZ1ZWQudmFudGhpbmsuY24vdnVlZDIxMTNlYWEwNjJhYmJhZWUwNDQxZDE2YTc4NDhkMjNlLmdpZic7XG5jb25zdCBwYXJhbXMgPSB7XG4gIGNlbnRlcjogdW5kZWZpbmVkLFxuICB6b29tOiAxMSxcbiAgdG9vbGJhcjogdHJ1ZSxcbiAgc2NhbGU6IGZhbHNlLFxuICBnZW9sb2NhdGlvbjogZmFsc2UsXG4gIHJlc2l6ZUVuYWJsZTogdHJ1ZSxcbiAgc2VhcmNoOiBmYWxzZVxufTtcbmNvbnN0IGV2ZW50cyA9IFtcbiAgJ3pvb21jaGFuZ2UnLFxuICAnZHJhZ2VuZCdcbl07XG4vLyBwcm90b3R5cGUgbWV0aG9kcy5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5tYXB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5tYXB3cmFwLmlkID0gdmVuZG9yLmdlbmdlcmF0ZVJhbmRvbUlkKCdtYXAnKTtcbiAgICB0aGlzLm1hcHdyYXAuYXBwZW5kKHRoaXMucmVuZGVyTG9hZGluZ1NwaW5uZXIoKSk7XG4gICAgcmV0dXJuIHRoaXMubWFwd3JhcDtcbiAgfSxcbiAgcmVuZGVyTG9hZGluZ1NwaW5uZXIoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSA2MDtcbiAgICBlbC5zdHlsZS5tYXJnaW4gPSAnMjAgYXV0byc7XG4gICAgZWwuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBsb2FkaW5nR2lmO1xuICAgIGVsLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn6auY5b635Zyw5Zu+5Yqg6L295LitLi4uLicpKTtcbiAgICBlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByZXR1cm4gZWw7XG4gIH0sXG4gIHJlYWR5KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgdGhpcy5tYXAgPSBuZXcgQU1hcC5NYXAodGhpcy5tYXB3cmFwLmlkLCBwYXJhbXMpO1xuICAgICAgQU1hcC5wbHVnaW4oWydBTWFwLlRvb2xCYXInLCAnQU1hcC5HZW9sb2NhdGlvbiddLCAoKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMuc2NhbGUpIHtcbiAgICAgICAgICBzZWxmLm1hcC5hZGRDb250cm9sKG5ldyBBTWFwLlRvb2xCYXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5nZW9sb2NhdGlvbikge1xuICAgICAgICAgIHNlbGYubWFwLmFkZENvbnRyb2wobmV3IEFNYXAuR2VvbG9jYXRpb24oKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBhcmFtcy5zZWFyY2gpIHtcbiAgICAgICAgQU1hcC5zZXJ2aWNlKCdBTWFwLlBsYWNlU2VhcmNoJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGxhY2VTZWFyY2ggPSBuZXcgQU1hcC5QbGFjZVNlYXJjaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgICAgYW1hcE1hbmFnZXIuaW5pdE1hcCh0aGlzLm1hcHdyYXAuaWQsIHRoaXMubWFwKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgbWFya2VyTWFuYWdlLnJlbW92ZU1ha2VyKGNoaWxkLmRhdGEpO1xuICB9LFxuICBpbml0RXZlbnRzKCkge1xuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudE5hbWUpID0+IHtcbiAgICAgIEFNYXAuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsIGV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuICBjZW50ZXIodmFsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSB7XG4gICAgICBwYXJhbXMuY2VudGVyID0gdmFsO1xuICAgICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICAgIHRoaXMubWFwLnNldENlbnRlcihwYXJhbXMuY2VudGVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25zdCBnZW8gPSBuZXcgQU1hcC5HZW9sb2NhdGlvbih7XG4gICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIGdlby5nZXRDdXJyZW50UG9zaXRpb24oKTtcbiAgICAgIEFNYXAuZXZlbnQuQU1hcC5ldmVudC5hZGRMaXN0ZW5lcihnZW8sICdjb21wbGV0ZScsIChkYXRhKSA9PiB7XG4gICAgICAgIHBhcmFtcy5jZW50ZXIgPSBbZGF0YS5wb3NpdGlvbi5nZXRMbmcoKSwgZGF0YS5wb3NpdGlvbi5nZXRMYXQoKV07XG4gICAgICAgIHNlbGYubWFwLnNldENlbnRlcihwYXJhbXMuY2VudGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgem9vbSh2YWwpIHtcbiAgICBpZiAoL15bMC05XSskLy50ZXN0KHZhbCkpIHtcbiAgICAgIHBhcmFtcy56b29tID0gdmFsO1xuICAgIH1cbiAgICBpZiAod2luZG93LkFNYXApIHtcbiAgICAgIHRoaXMubWFwLnNldFpvb20ocGFyYW1zLnpvb20pO1xuICAgIH1cbiAgfSxcbiAgc2NhbGUodmFsKSB7XG4gICAgcGFyYW1zLnNjYWxlID0gdmFsO1xuICB9LFxuICBnZW9sb2NhdGlvbih2YWwpIHtcbiAgICBwYXJhbXMuZ2VvbG9jYXRpb24gPSB2YWw7XG4gIH0sXG4gIHNka0tleSh2YWwpIHtcbiAgICBsZXQga2V5ID0gJyc7XG4gICAgaWYgKHZhbCkge1xuICAgICAga2V5ID0gdmFsLmg1O1xuICAgIH1cbiAgICBtYXBMb2FkZXIubG9hZCh7XG4gICAgICBrZXk6IGtleVxuICAgIH0sIHRoaXMubWFwd3JhcCwgKCkgPT4gdGhpcy5yZWFkeSgpKTtcbiAgfSxcbiAgc2VhcmNoKHZhbCkge1xuICAgIHBhcmFtcy5zZWFyY2ggPSB2YWw7XG4gICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICAgIFxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIHpvb21jaGFuZ2U6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7IGlzU3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgfSxcbiAgZHJhZ2VuZDoge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXAoZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHtcbiAgICBzdHlsZTogZXh0ZW5kKE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZS5zdHlsZSksIHt9KVxuICB9KTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAnLCBBbWFwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLmpzIiwiaW1wb3J0IGFtYXBNb2R1bGVSZWcgZnJvbSAnLi9tb2R1bGUvYW1hcCc7XG5pbXBvcnQgQW1hcCBmcm9tICcuL2NvbXBvbmVudHMvYW1hcCc7XG5pbXBvcnQgQW1hcE1hcmtlciBmcm9tICcuL2NvbXBvbmVudHMvYW1hcC1tYXJrZXInO1xuaW1wb3J0IEFtYXBDaXJjbGUgZnJvbSAnLi9jb21wb25lbnRzL2FtYXAtY2lyY2xlJztcbmltcG9ydCBBbWFwUG9seWdvbiBmcm9tICcuL2NvbXBvbmVudHMvYW1hcC1wb2x5Z29uJztcbmltcG9ydCBBbWFwUG9seWxpbmUgZnJvbSAnLi9jb21wb25lbnRzL2FtYXAtcG9seWxpbmUnO1xuaW1wb3J0IEFtYXBJbmZvV2luZG93IGZyb20gJy4vY29tcG9uZW50cy9hbWFwLWluZm8td2luZG93Jztcbi8vIGltcG9ydCBWdWVBbWFwIGZyb20gJy4vdnVlLWFtYXAvaW5kZXgnO1xuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgQW1hcCxcbiAgQW1hcE1hcmtlcixcbiAgQW1hcENpcmNsZSxcbiAgQW1hcFBvbHlnb24sXG4gIEFtYXBQb2x5bGluZSxcbiAgQW1hcEluZm9XaW5kb3dcbl07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb21wb25lbnRzLmZvckVhY2goKGNvbXApID0+IHtcbiAgICBjb21wLmluaXQoV2VleCk7XG4gIH0pO1xuICBhbWFwTW9kdWxlUmVnKFdlZXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9pbmRleC5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG4vLyBBTWFwIG1vZHVsZVxuY29uc3QgYW1hcCA9IHtcbiAgLyoqIGdldCB1c2VyIGxvYWN0aW9uIGJ5IGJyb3dzZXIgYW5kIElQXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvckNhbGxiYWNrXG4gICoqL1xuICBnZXRVc2VyTG9jYXRpb24obWFwUmVmLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGdlbyA9IG5ldyBBTWFwLkdlb2xvY2F0aW9uKHtcbiAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcbiAgICAgIHRpbWVvdXQ6IDEwMDAwXG4gICAgfSk7XG4gICAgZ2VvLmdldEN1cnJlbnRQb3NpdGlvbigoc3RhdHVzLCByZXMpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgIT09ICdlcnJvcicpIHtcbiAgICAgICAgc2VsZi5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrLCB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcG9zaXRpb246IFtyZXMucG9zaXRpb24uZ2V0TG5nKCksIHJlcy5wb3NpdGlvbi5nZXRMYXQoKV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3VsdDogJ3N1Y2Nlc3MnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKHJlcy5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgLyoqIGdldCBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb3NpdGlvblxuICAqIEBwYXJhbSBjb29yMVxuICAqIEBwYXJhbSBjb3JyMlxuICAqIEBwYXJhbSBjYWxsYmFja1xuICAqKi9cbiAgZ2V0TGluZURpc3RhbmNlKGNvb3IxLCBjb29yMiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBsbmdsYXQgPSBuZXcgQU1hcC5MbmdMYXQoY29vcjFbMF0sIGNvb3IxWzFdKTtcbiAgICBjb25zdCByZXN1bHQgPSBsbmdsYXQuZGlzdGFuY2UoY29vcjIpO1xuICAgIHRoaXMuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFjaywge1xuICAgICAgcmVzdWx0OiAhcmVzdWx0ID8gJ2ZhaWwnIDogJ3N1Y2Nlc3MnLFxuICAgICAgZGF0YToge1xuICAgICAgICBkaXN0YW5jZTogcmVzdWx0XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIC8qKiB0ZWxsIGlmIHRoZSBtYXJrZXIgaW4gYSBwb2x5Z29uXG4gICogQHBhcmFtIGNvb3IgdGhlIG1hcmtlciBwb3NpdGlvblxuICAqIEBwYXJhbSBwb2x5Z29uUmVmXG4gICoqL1xuICBwb2x5Z29uQ29udGFpbnNNYXJrZXIoY29vciwgcG9seWdvblJlZiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBwb2x5Z29uQ29tID0gY29tcG9uZW50cy5nZXRDb21wb25lbnQocG9seWdvblJlZik7XG4gICAgY29uc3QgcmVzdWx0ID0gcG9seWdvbkNvbS5jb250YWlucyhjb29yKTtcbiAgICB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2ssIHtcbiAgICAgIHJlc3VsdDogIXJlc3VsdCA/ICdmYWlsJyA6ICdzdWNjZXNzJyxcbiAgICAgIGRhdGE6IHJlc3VsdFxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBtZXRhID0ge1xuICBhbWFwOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2dldFVzZXJMb2NhdGlvbicsXG4gICAgICBhcmdzOiBbJ3N0cmluZycsICdmdW5jdGlvbiddLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2dldExpbmVEaXN0YW5jZScsXG4gICAgICBhcmdzOiBbJ2FycmF5JywgJ2FycmF5JywgJ2Z1bmN0aW9uJ11cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdwb2x5Z29uQ29udGFpbnNNYXJrZXInLFxuICAgICAgYXJnczogWydhcnJheScsICdzdHJpbmcnXVxuICAgIH1cbiAgXVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoV2VleCkge1xuICBXZWV4LnJlZ2lzdGVyQXBpTW9kdWxlKCdhbWFwJywgYW1hcCwgbWV0YSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL21vZHVsZS9hbWFwLmpzIiwiLy8gbG9hZCBtYXAgc2RrXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAga2V5OiAnJyxcbiAgdjogJzEuMycsXG4gIHVybDogJ2h0dHBzOi8vd2ViYXBpLmFtYXAuY29tL21hcHMnLFxuICBjYWxsYmFjazogJ2FtYXBJbml0Q29tcG9uZW50J1xufTtcbmNvbnN0IGdlbmdlcmF0ZVNjcmlwdFVybCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgcGFyYW1BcnIgPSBbXTtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGtleSAhPT0gJ3VybCcpIHtcbiAgICAgIHBhcmFtQXJyLnB1c2goZW5jb2RlVVJJKGtleSArICc9JyArIG9ialtrZXldKSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHVybCA9IG9iai51cmwgKz0gJz8nICsgcGFyYW1BcnIuam9pbignJicpO1xuICByZXR1cm4gdXJsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvYWQoY29uZmlnLCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZyk7XG4gICAgY29uc3QgbGliID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgbGliLmFzeW5jID0gdHJ1ZTtcbiAgICBsaWIuZGVmZXIgPSB0cnVlO1xuICAgIGxpYi5zcmMgPSBnZW5nZXJhdGVTY3JpcHRVcmwobmV3Q29uZmlnKTtcbiAgICBjb25zb2xlLmxvZyhsaWIuc3JjKTtcbiAgICB3aW5kb3cuYW1hcEluaXRDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cubWFwbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpYik7XG4gICAgdGhpcy5sb2FkVGltZW91dChjb250YWluZXIpO1xuICB9LFxuICBsb2FkVGltZW91dCh3cmFwKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXdpbmRvdy5BbWFwKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfph43mlrDliqDovb0nKSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgd3JhcC5jaGlsZE5vZGVzWzBdLnJlbW92ZSgpO1xuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwMCk7XG4gIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL21hcC1sb2FkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9