// { "framework": "Weex" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(186)
	var __weex_style__ = __webpack_require__(187)
	var __weex_script__ = __webpack_require__(188)

	__weex_define__('@weex-component/33d213ae1c7dedf0e9fbbab44c74105d', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/33d213ae1c7dedf0e9fbbab44c74105d',undefined,undefined)

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(9);
	__webpack_require__(13);
	__webpack_require__(17);
	__webpack_require__(21);
	__webpack_require__(25);
	__webpack_require__(66);
	__webpack_require__(70);
	__webpack_require__(74);
	__webpack_require__(78);
	__webpack_require__(79);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(6)
	var __weex_style__ = __webpack_require__(7)
	var __weex_script__ = __webpack_require__(8)

	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    size: 'large',
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(10)
	var __weex_style__ = __webpack_require__(11)
	var __weex_script__ = __webpack_require__(12)

	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    level: 1,
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(14)
	var __weex_style__ = __webpack_require__(15)
	var __weex_script__ = __webpack_require__(16)

	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    bgColor: '#ffffff'
	  }},
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};}
	/* generated by weex-loader */


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(18)
	var __weex_style__ = __webpack_require__(19)
	var __weex_script__ = __webpack_require__(20)

	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    title: '',
	    paddingBody: 20,
	    paddingHead: 20,
	    dataClass: '',
	    border: 0
	  }},
	  ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(22)
	var __weex_style__ = __webpack_require__(23)
	var __weex_script__ = __webpack_require__(24)

	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'success',
	    value: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(26)
	var __weex_style__ = __webpack_require__(27)
	var __weex_script__ = __webpack_require__(28)

	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _assign = __webpack_require__(29);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.remain <= 0) {
	            return;
	        }

	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function nextTick() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', (0, _assign2.default)({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', (0, _assign2.default)({}, this.time));
	                }
	                this._app.updateActions();
	            }
	        },
	        format: function format(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function calc() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);

	            return remain > 0;
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	module.exports = __webpack_require__(34).Object.assign;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(32);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(47)});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(33)
	  , core      = __webpack_require__(34)
	  , ctx       = __webpack_require__(35)
	  , hide      = __webpack_require__(37)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(36);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(38)
	  , createDesc = __webpack_require__(46);
	module.exports = __webpack_require__(42) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(39)
	  , IE8_DOM_DEFINE = __webpack_require__(41)
	  , toPrimitive    = __webpack_require__(45)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(42) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(42) && !__webpack_require__(43)(function(){
	  return Object.defineProperty(__webpack_require__(44)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(43)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40)
	  , document = __webpack_require__(33).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(40);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(48)
	  , gOPS     = __webpack_require__(63)
	  , pIE      = __webpack_require__(64)
	  , toObject = __webpack_require__(65)
	  , IObject  = __webpack_require__(52)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(43)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(49)
	  , enumBugKeys = __webpack_require__(62);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(50)
	  , toIObject    = __webpack_require__(51)
	  , arrayIndexOf = __webpack_require__(55)(false)
	  , IE_PROTO     = __webpack_require__(59)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(52)
	  , defined = __webpack_require__(54);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(53);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(51)
	  , toLength  = __webpack_require__(56)
	  , toIndex   = __webpack_require__(58);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(57)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(57)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(60)('keys')
	  , uid    = __webpack_require__(61);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(33)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(54);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(67)
	var __weex_style__ = __webpack_require__(68)
	var __weex_script__ = __webpack_require__(69)

	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	            this.nextTick();
	        }
	    },
	    methods: {
	        nextTick: function nextTick() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function () {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function animation(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	                styles: {
	                    transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	                },
	                timingFunction: 'ease',
	                duration: self.duration
	            }, function () {
	                self.index = (self.index + 1) % self.count;
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(71)
	var __weex_style__ = __webpack_require__(72)
	var __weex_script__ = __webpack_require__(73)

	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',

	    backgroundColor: 'black',

	    height: 88,

	    title: "",

	    titleColor: 'black',

	    rightItemSrc: '',

	    rightItemTitle: '',

	    rightItemColor: 'black',

	    leftItemSrc: '',

	    leftItemTitle: '',

	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(70)
	var __weex_template__ = __webpack_require__(75)
	var __weex_style__ = __webpack_require__(76)
	var __weex_script__ = __webpack_require__(77)

	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	    backgroundColor: 'black',
	    height: 88,
	    title: "",
	    titleColor: 'black',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'black',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'black'
	  }}
	};}
	/* generated by weex-loader */


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(79)
	var __weex_template__ = __webpack_require__(83)
	var __weex_style__ = __webpack_require__(84)
	var __weex_script__ = __webpack_require__(85)

	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(80)
	var __weex_style__ = __webpack_require__(81)
	var __weex_script__ = __webpack_require__(82)

	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 80 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  }},
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  }},
	  created: function created() {
	    this.selected(this.selectedIndex);

	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);

	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(95)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(96)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(57)
	  , defined   = __webpack_require__(54);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(97)
	  , $export        = __webpack_require__(32)
	  , redefine       = __webpack_require__(98)
	  , hide           = __webpack_require__(37)
	  , has            = __webpack_require__(50)
	  , Iterators      = __webpack_require__(99)
	  , $iterCreate    = __webpack_require__(100)
	  , setToStringTag = __webpack_require__(104)
	  , getPrototypeOf = __webpack_require__(106)
	  , ITERATOR       = __webpack_require__(105)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(101)
	  , descriptor     = __webpack_require__(46)
	  , setToStringTag = __webpack_require__(104)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(37)(IteratorPrototype, __webpack_require__(105)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(39)
	  , dPs         = __webpack_require__(102)
	  , enumBugKeys = __webpack_require__(62)
	  , IE_PROTO    = __webpack_require__(59)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(44)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(103).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(38)
	  , anObject = __webpack_require__(39)
	  , getKeys  = __webpack_require__(48);

	module.exports = __webpack_require__(42) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(33).document && document.documentElement;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(38).f
	  , has = __webpack_require__(50)
	  , TAG = __webpack_require__(105)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(60)('wks')
	  , uid        = __webpack_require__(61)
	  , Symbol     = __webpack_require__(33).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(50)
	  , toObject    = __webpack_require__(65)
	  , IE_PROTO    = __webpack_require__(59)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(134)
	var __weex_style__ = __webpack_require__(135)
	var __weex_script__ = __webpack_require__(136)

	__weex_define__('@weex-component/unit', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 134 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "unit-box"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "unit-number"
	      ],
	      "style": {
	        "fontSize": function () {return this.numberSize}
	      },
	      "attr": {
	        "value": function () {return this.number}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "unit-text"
	      ],
	      "attr": {
	        "value": function () {return this.label}
	      }
	    }
	  ]
	}

/***/ }),
/* 135 */
/***/ (function(module, exports) {

	module.exports = {
	  "unit-box": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "unit-number": {
	    "display": "inline-block",
	    "fontSize": 50,
	    "color": "#111111"
	  },
	  "unit-text": {
	    "fontSize": 22,
	    "color": "#333333",
	    "paddingLeft": 20,
	    "justifyContent": "flex-end",
	    "alignItems": "flex-end"
	  }
	}

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};}
	/* generated by weex-loader */


/***/ }),
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "message"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "shown": function () {return this.loading},
	      "classList": [
	        "loading-gif"
	      ],
	      "attr": {
	        "src": "http://img1.vued.vanthink.cn/vuedf072471d0b97d612282d1ce010cb1de1.gif"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "message-text"
	      ],
	      "attr": {
	        "value": function () {return this.message}
	      }
	    }
	  ]
	}

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	module.exports = {
	  "message": {
	    "zIndex": 2001,
	    "position": "absolute",
	    "left": 30,
	    "top": 30,
	    "height": 60,
	    "borderRadius": 30,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "message-text": {
	    "fontSize": 20
	  },
	  "loading-gif": {
	    "width": 30,
	    "height": 30
	  }
	}

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};}
	/* generated by weex-loader */


/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "success"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "success-data"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "distance-wrap"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "distance"
	              ],
	              "attr": {
	                "value": function () {return this.data.miles}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "unit"
	              ],
	              "attr": {
	                "value": "公里"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "dashboard"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "dashboard-item"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "time-wrap"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "dashboard-title"
	                      ],
	                      "attr": {
	                        "value": "运动时间"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "number-lg"
	                      ],
	                      "attr": {
	                        "value": function () {return this.data.time}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dashboard-item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dashboard-title"
	                  ],
	                  "attr": {
	                    "value": "热量"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "number-lg"
	                  ],
	                  "attr": {
	                    "value": function () {return this.data.calories}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "alignItems": "center"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "btn-leave"
	          ],
	          "events": {
	            "click": "pop"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "btn-leave-text"
	              ],
	              "attr": {
	                "value": "确认完成"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ }),
/* 147 */
/***/ (function(module, exports) {

	module.exports = {
	  "success": {
	    "zIndex": 10002,
	    "position": "absolute",
	    "top": 0,
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "backgroundColor": "rgba(0,0,0,0.85)",
	    "justifyContent": "center"
	  },
	  "distance-wrap": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "distance": {
	    "display": "inline-block",
	    "fontSize": 220,
	    "color": "#ffffff"
	  },
	  "unit": {
	    "fontSize": 22,
	    "color": "#cccccc",
	    "paddingTop": 30,
	    "paddingLeft": 20
	  },
	  "dashboard": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "dashboard-title": {
	    "color": "#999999",
	    "fontSize": 25,
	    "marginBottom": 20
	  },
	  "dashboard-item": {
	    "flex": 1,
	    "paddingLeft": 40,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "number-lg": {
	    "fontSize": 50,
	    "color": "#ffffff"
	  },
	  "btn-leave": {
	    "width": 400,
	    "padding": 20,
	    "marginTop": 60,
	    "borderWidth": 4,
	    "borderColor": "#ffffff",
	    "alignItems": "center",
	    "borderRadius": 10
	  },
	  "btn-leave-text": {
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	__webpack_require__(133);
	var navigator = __weex_require__('@weex-module/navigator');
	exports.default = {
	  methods: {
	    pop: function pop() {

	      navigator.pop();
	    }
	  }

	};}
	/* generated by weex-loader */


/***/ }),
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  calcTotal: function calcTotal(arr, k) {
	    var sum = 0;
	    arr.forEach(function (item) {
	      if (k) {
	        sum += 1 * item[k];
	      } else {
	        sum += item;
	      }
	    });
	    return sum;
	  },
	  setTimeFormat: function setTimeFormat(time) {
	    var h = this.setZero(Math.floor(time / 3600));
	    var i = this.setZero(Math.floor(time % 3600 / 60));
	    var s = this.setZero(time % 60);
	    return h + ':' + i + ':' + s;
	  },
	  kmtom: function kmtom(miles) {
	    return (miles / 1000).toFixed(2);
	  },
	  getDate: function getDate() {
	    var d = new Date();
	    var datestring = d.getFullYear() + '-' + ('0' + (1 + d.getMonth())).slice('-2') + '-' + ('0' + d.getDate()).slice(-2) + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
	    return datestring;
	  },
	  setZero: function setZero(number) {
	    return number < 10 ? '0' + number : number;
	  },
	  calcSpeed: function calcSpeed(distance, time) {
	    return (distance / time * 3.6).toFixed(2);
	  },
	  setPosition: function setPosition(path) {
	    var l = path.length;
	    var longitudes = 0;
	    var latitudes = 0;
	    path.forEach(function (item) {
	      longitudes += item[1];
	      latitudes += item[0];
	    });
	    return [(latitudes / l).toFixed(6), (longitudes / l).toFixed(6)];
	  },
	  extend: function extend(obj1, obj2) {
	    for (var p in obj2) {
	      try {
	        if (obj2[p].constructor === Object) {
	          obj1[p] = this.extend(obj1[p], obj2[p]);
	        } else {
	          obj1[p] = obj2[p];
	        }
	      } catch (e) {
	        obj1[p] = obj2[p];
	      }
	    }
	    return obj1;
	  },
	  setBundleUrl: function setBundleUrl(url, jsFile) {
	    var bundleUrl = url;
	    var host = '';
	    var path = '';
	    var nativeBase = void 0;
	    var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	      nativeBase = 'file://assets/dist';
	    } else if (isiOSAssets) {
	      // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	      // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    } else {
	      var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	      var matchFirstPath = /\/\/.+\/([^\/]+?)\//.exec(bundleUrl);
	      if (matches && matches.length >= 2) {
	        host = matches[1];
	      }
	      if (matchFirstPath && matchFirstPath.length >= 2) {
	        path = matchFirstPath[1];
	      }
	      nativeBase = 'http://' + host + '/';
	    }
	    var h5Base = './index.html?page=';
	    // in Native
	    var base = nativeBase;
	    if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
	      // check if in weexpack project
	      if (path === 'web' || path === 'dist') {
	        base = h5Base + '/dist/';
	      } else {
	        base = h5Base + '';
	      }
	    } else {
	      base = nativeBase + path + '/';
	    }

	    var newUrl = base + jsFile;
	    return newUrl;
	  },
	  getUrlParam: function getUrlParam(url, key) {
	    var reg = new RegExp('[?|&]' + key + '=([^&]+)');
	    var match = url.match(reg);
	    return match && match[1];
	  }
	};

/***/ }),
/* 186 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "weex-amap",
	      "id": "map2017",
	      "attr": {
	        "geolocation": "true",
	        "center": function () {return this.pos},
	        "sdkKey": function () {return this.keys},
	        "zoom": function () {return this.zoom}
	      },
	      "classList": [
	        "map"
	      ],
	      "children": [
	        {
	          "type": "weex-amap-polyline",
	          "attr": {
	            "path": function () {return this.polylinePath},
	            "strokeOpacity": "0.9",
	            "strokeStyle": "solid",
	            "strokeWidth": "8",
	            "strokeColor": "#1ba1e2"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "map-controller"
	      ],
	      "shown": function () {return this.status!=4},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "dashboard"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "dashboard-item"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "time-wrap"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "dashboard-title"
	                      ],
	                      "attr": {
	                        "value": "运动时间"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "number-lg"
	                      ],
	                      "attr": {
	                        "value": function () {return this.runningData.time}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dashboard-item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dashboard-title"
	                  ],
	                  "attr": {
	                    "value": "速度"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "number-lg"
	                  ],
	                  "attr": {
	                    "value": function () {return this.runningData.speed}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dashboard-item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dashboard-title"
	                  ],
	                  "attr": {
	                    "value": "距离"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "number-lg"
	                  ],
	                  "attr": {
	                    "value": function () {return this.runningData.miles}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "btn-wrap"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "btn-circle",
	                "btn-green"
	              ],
	              "shown": function () {return this.status==1},
	              "events": {
	                "click": "start"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "btn-icon"
	                  ],
	                  "attr": {
	                    "src": "https://gw.alicdn.com/tfs/TB1sGrEQXXXXXc4XVXXXXXXXXXX-60-60.png"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "btn-circle",
	                "btn-midnight"
	              ],
	              "shown": function () {return this.status==2||this.status==3},
	              "events": {
	                "click": "end"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "btn-icon"
	                  ],
	                  "attr": {
	                    "src": "https://gw.alicdn.com/tfs/TB1uEnqQXXXXXcdapXXXXXXXXXX-60-60.png"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "btn-circle",
	                "btn-green"
	              ],
	              "shown": function () {return this.status==3},
	              "events": {
	                "click": "continue"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "btn-icon"
	                  ],
	                  "attr": {
	                    "src": "https://gw.alicdn.com/tfs/TB1sGrEQXXXXXc4XVXXXXXXXXXX-60-60.png"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "btn-circle",
	                "btn-red"
	              ],
	              "shown": function () {return this.status==2},
	              "events": {
	                "click": "stop"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "btn-icon"
	                  ],
	                  "attr": {
	                    "src": "https://gw.alicdn.com/tfs/TB1A6vJQXXXXXa0XVXXXXXXXXXX-60-60.png"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "btn-circle",
	                "btn-red"
	              ],
	              "shown": function () {return this.status==5},
	              "events": {
	                "click": "backHome"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "btn-text"
	                  ],
	                  "attr": {
	                    "value": "返回"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "countdown-view"
	      ],
	      "shown": function () {return this.countdown.show},
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "countdown-text"
	          ],
	          "attr": {
	            "value": function () {return this.countdown.text}
	          }
	        }
	      ]
	    },
	    {
	      "type": "success",
	      "shown": function () {return this.status==4},
	      "attr": {
	        "data": function () {return this.runningData}
	      }
	    }
	  ]
	}

/***/ }),
/* 187 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "relative",
	    "flex": 1,
	    "minHeight": 600,
	    "backgroundColor": "#eeeeee"
	  },
	  "countdown-view": {
	    "zIndex": 10001,
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "top": 0,
	    "bottom": 0,
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "countdown-text": {
	    "color": "#ff656d",
	    "fontSize": 120
	  },
	  "map": {
	    "flex": 1,
	    "minHeight": 600
	  },
	  "map-controller": {
	    "zIndex": 10000,
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "height": 320,
	    "backgroundColor": "rgba(255,255,255,1)",
	    "borderTopWidth": 2,
	    "borderTopColor": "rgba(0,0,0,0.25)"
	  },
	  "distance-wrap": {
	    "flex": 1,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "distance": {
	    "display": "inline-block",
	    "fontSize": 90,
	    "color": "#111111"
	  },
	  "unit": {
	    "fontSize": 22,
	    "color": "#333333",
	    "paddingTop": 30,
	    "paddingLeft": 20
	  },
	  "dashboard": {
	    "flex": 1,
	    "flexDirection": "row"
	  },
	  "dashboard-title": {
	    "color": "#999999",
	    "fontSize": 25,
	    "marginBottom": 20
	  },
	  "dashboard-item": {
	    "flex": 1,
	    "paddingLeft": 40,
	    "justifyContent": "center"
	  },
	  "number-lg": {
	    "fontSize": 42,
	    "color": "#222222"
	  },
	  "btn-wrap": {
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "btn-circle": {
	    "width": 140,
	    "height": 140,
	    "marginLeft": 40,
	    "marginRight": 40,
	    "borderRadius": 120,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "backgroundColor": "#eeeeee"
	  },
	  "btn-text": {
	    "fontSize": 30,
	    "color": "#ffffff"
	  },
	  "btn-icon": {
	    "width": 60,
	    "height": 60
	  },
	  "btn-red": {
	    "backgroundColor": "#ff626d"
	  },
	  "btn-green": {
	    "backgroundColor": "#21d45f"
	  },
	  "btn-midnight": {
	    "backgroundColor": "#34495e"
	  }
	}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _from = __webpack_require__(189);

	var _from2 = _interopRequireDefault(_from);

	var _stringify = __webpack_require__(198);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);
	__webpack_require__(200);
	__webpack_require__(133);
	__webpack_require__(201);

	var utils = __webpack_require__(185);
	var status = __webpack_require__(202);

	var storage = __weex_require__('@weex-module/storage');
	var Amap = __weex_require__('@weex-module/amap');
	var navigator = __weex_require__('@weex-module/navigator');

	module.exports = {
	  data: function () {return {
	    keys: {
	      h5: 'f4b99dcd51752142ec0f1bdcb9a8ec02',
	      ios: 'c551f83e1e5b19af89c74096f1c0f007',
	      android: 'db6a973159cb0c2639ad02c617a786ae'
	    },
	    zoom: 16,
	    pos: [116.48635, 40.00079],
	    status: status['RUNNING_READY'],
	    runningData: {
	      distance: 0,
	      miles: 0,
	      path: [],
	      time: '00:00:00',
	      seconds: 0,
	      speed: 0,
	      calories: 0
	    },
	    polylinePath: [],
	    message: '正在运行',
	    countdown: {
	      text: '3',
	      show: false
	    },

	    timeRecorder: null,
	    amapRecorder: null,

	    test: false,
	    color: '#1ba1e2'

	  }},

	  methods: {
	    start: function start() {
	      this.status = status.RUNNING_DOING;
	      this.countdown.show = true;
	      this.countDownTime();
	      this.runningAmapGeolocation();
	    },
	    backHome: function backHome() {
	      navigator.pop();
	    },
	    stop: function stop() {
	      this.status = status.RUNNING_PAUSE;
	      clearInterval(this.timeRecorder);
	      clearInterval(this.amapRecorder);
	    },
	    continue: function _continue() {
	      this.countDownTime();
	      this.runningAmapGeolocation();
	      this.status = status.RUNNING_DOING;
	    },
	    end: function end() {
	      clearInterval(this.timeRecorder);
	      clearInterval(this.amapRecorder);
	      var self = this;
	      storage.getItem('runningData', function (res) {
	        var data = [];
	        if (res.result == 'success') {
	          data = res.data;
	        }
	        if (typeof data === 'string') {
	          data = JSON.parse(data);
	        }
	        data.unshift(utils.extend({
	          date: utils.getDate().replace(/\s.+/, ''),
	          standrandDate: utils.getDate()
	        }, self.runningData));
	        storage.setItem('runningData', (0, _stringify2.default)(data), function (res) {
	          if (res.result == 'success') {
	            self.status = status.RUNNING_END;
	          };
	        });
	      });
	    },
	    setUserLocation: function setUserLocation(callback) {
	      console.log(Amap);
	      Amap.getUserLocation(this.$el('map2017').ref, callback);
	    },
	    countDownTime: function countDownTime() {
	      var _this = this;

	      if (this.status == status.RUNNING_DOING) {
	        this.countdown.show = true;
	      }
	      this.timeRecorder = setInterval(function () {
	        _this.runningData.seconds++;
	        var a = ['#000000', '#2980b9', '#34495e'];
	        _this.color = a[_this.runningData.seconds % 3];
	        if (_this.runningData.seconds <= 4) {
	          if (_this.runningData.seconds == 3) {
	            _this.countdown.text = 'GO!';
	          } else if (_this.runningData.seconds == 4) {
	            _this.countdown.show = false;
	          } else {
	            _this.countdown.text = 3 - _this.runningData.seconds;
	          }
	        }
	        _this.runningData.time = utils.setTimeFormat(_this.runningData.seconds);
	      }, 1000);
	    },
	    runningAmapGeolocation: function runningAmapGeolocation() {
	      var _this2 = this;

	      this.setUserLocation(function (res) {
	        if (res.result == 'success') {
	          _this2.pos = res.data.position;
	          _this2.runningData.path.push(res.data.position);
	        }
	      });
	      this.amapRecorder = setInterval(function () {
	        _this2.setUserLocation(function (res) {
	          if (res.result == 'success') {
	            if (_this2.test) {
	              var len = _this2.runningData.path.length;
	              _this2.runningData.path.push([_this2.runningData.path[len - 1][0] + 0.0011, _this2.runningData.path[len - 1][1] + 0.0011]);
	            } else {
	              _this2.runningData.path.push(res.data.position);
	            }
	            _this2.polylinePath = (0, _from2.default)(_this2.runningData.path);
	            _this2.pos = utils.setPosition(_this2.runningData.path);
	            _this2.calcDistanceAndSpeed();
	          }
	        });
	      }, 10000);
	    },
	    calcDistanceAndSpeed: function calcDistanceAndSpeed() {
	      var _this3 = this;

	      var len = this.runningData.path.length;
	      if (len > 1) {
	        Amap.getLineDistance(this.runningData.path[len - 1], this.runningData.path[len - 2], function (res) {
	          if (res.result == 'success') {
	            console.log(res.data.distance);
	            _this3.runningData.distance += res.data.distance;
	          }
	          _this3.runningData.miles = utils.kmtom(_this3.runningData.distance);
	          _this3.runningData.calories = (_this3.runningData.distance / 1000).toFixed(2);
	          _this3.runningData.speed = utils.calcSpeed(_this3.runningData.distance, _this3.runningData.seconds);
	        });
	      }
	    }
	  },

	  created: function created() {
	    var _this4 = this;

	    var url = this.$getConfig().bundleUrl;
	    var index = utils.getUrlParam(url, 'index');
	    storage.getItem('runningData', function (res) {
	      var data = [];
	      if (res.result == 'success') {
	        data = res.data;
	      }
	      if (typeof data === 'string') {
	        data = JSON.parse(data);
	      }
	      if (data[index]) {
	        _this4.status = 5;
	        _this4.runningData = data[index];
	        _this4.polylinePath = _this4.runningData.path;
	        _this4.pos = utils.setPosition(_this4.runningData.path);
	        console.log(_this4.runningData);
	      }
	    });
	  }
	};}
	/* generated by weex-loader */


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	__webpack_require__(191);
	module.exports = __webpack_require__(34).Array.from;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(35)
	  , $export        = __webpack_require__(32)
	  , toObject       = __webpack_require__(65)
	  , call           = __webpack_require__(192)
	  , isArrayIter    = __webpack_require__(193)
	  , toLength       = __webpack_require__(56)
	  , createProperty = __webpack_require__(194)
	  , getIterFn      = __webpack_require__(195);

	$export($export.S + $export.F * !__webpack_require__(197)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(39);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(99)
	  , ITERATOR   = __webpack_require__(105)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(38)
	  , createDesc      = __webpack_require__(46);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(196)
	  , ITERATOR  = __webpack_require__(105)('iterator')
	  , Iterators = __webpack_require__(99);
	module.exports = __webpack_require__(34).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(53)
	  , TAG = __webpack_require__(105)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(105)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(199), __esModule: true };

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(34)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(140)
	var __weex_style__ = __webpack_require__(141)
	var __weex_script__ = __webpack_require__(142)

	__weex_define__('@weex-component/message', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(146)
	var __weex_style__ = __webpack_require__(147)
	var __weex_script__ = __webpack_require__(148)

	__weex_define__('@weex-component/success', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ }),
/* 202 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = {
	  RUNNING_READY: 1,
	  RUNNING_DOING: 2,
	  RUNNING_PAUSE: 3,
	  RUNNING_END: 4
	};

/***/ })
/******/ ]);