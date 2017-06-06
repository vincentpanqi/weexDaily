// { "framework": "Vue" }
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

/***/ })
/******/ ]);