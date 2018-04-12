/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "js/chunks/" + ({}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
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
/******/ 	__webpack_require__.p = "http://127.0.0.1:7001/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(13);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

(function () {
    var c = function c() {
        var e = [].slice.call(arguments);e.push(c.options);if (e[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)) {
            e[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm, function (h, i) {
                var f = document;var g = f && f.getElementById(i);e[0] = g ? g.value || g.innerHTML : h;
            });
        }if (arguments.length == 1) {
            return c.compile.apply(c, e);
        }if (arguments.length >= 2) {
            return c.to_html.apply(c, e);
        }
    };var d = { escapehash: { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', '\'': '&#x27;', '/': '&#x2f;' }, escapereplace: function escapereplace(e) {
            return d.escapehash[e];
        },
        escaping: function escaping(e) {
            return typeof e !== 'string' ? e : e.replace(/[&<>"]/igm, this.escapereplace);
        },
        detection: function detection(e) {
            return typeof e === 'undefined' ? '' : e;
        }
    };var b = function b(e) {
        if (typeof console !== 'undefined') {
            if (console.warn) {
                console.warn(e);return;
            }if (console.log) {
                console.log(e);return;
            }
        }throw e;
    };var a = function a(h, f) {
        h = h !== Object(h) ? {} : h;if (h.__proto__) {
            h.__proto__ = f;return h;
        }var g = function g() {};var j = Object.create ? Object.create(f) : new (g.prototype = f, g)();for (var e in h) {
            if (h.hasOwnProperty(e)) {
                j[e] = h[e];
            }
        }return j;
    };c.__cache = {};c.version = '0.6.5-stable';c.settings = {};c.tags = { operationOpen: '{@', operationClose: '}', interpolateOpen: '\\${', interpolateClose: '}', noneencodeOpen: '\\$\\${', noneencodeClose: '}', commentOpen: '\\{#', commentClose: '\\}' };c.options = { cache: true, strip: true, errorhandling: true, detection: true, _method: a({ __escapehtml: d, __throw: b, __juicer: c }, {}) };c.tagInit = function () {
        var f = c.tags.operationOpen + 'each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?' + c.tags.operationClose;var h = c.tags.operationOpen + '\\/each' + c.tags.operationClose;var i = c.tags.operationOpen + 'if\\s*([^}]*?)' + c.tags.operationClose;var j = c.tags.operationOpen + '\\/if' + c.tags.operationClose;var n = c.tags.operationOpen + 'else' + c.tags.operationClose;var o = c.tags.operationOpen + 'else if\\s*([^}]*?)' + c.tags.operationClose;var k = c.tags.interpolateOpen + '([\\s\\S]+?)' + c.tags.interpolateClose;var l = c.tags.noneencodeOpen + '([\\s\\S]+?)' + c.tags.noneencodeClose;var m = c.tags.commentOpen + '[^}]*?' + c.tags.commentClose;var g = c.tags.operationOpen + 'each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)' + c.tags.operationClose;var e = c.tags.operationOpen + 'include\\s*([^}]*?)\\s*,\\s*([^}]*?)' + c.tags.operationClose;c.settings.forstart = new RegExp(f, 'igm');c.settings.forend = new RegExp(h, 'igm');c.settings.ifstart = new RegExp(i, 'igm');c.settings.ifend = new RegExp(j, 'igm');c.settings.elsestart = new RegExp(n, 'igm');c.settings.elseifstart = new RegExp(o, 'igm');c.settings.interpolate = new RegExp(k, 'igm');c.settings.noneencode = new RegExp(l, 'igm');c.settings.inlinecomment = new RegExp(m, 'igm');c.settings.rangestart = new RegExp(g, 'igm');c.settings.include = new RegExp(e, 'igm');
    };c.tagInit();c.set = function (f, j) {
        var h = this;var e = function e(i) {
            return i.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm, function (l) {
                return '\\' + l;
            });
        };var k = function k(l, m) {
            var i = l.match(/^tag::(.*)$/i);if (i) {
                h.tags[i[1]] = e(m);h.tagInit();return;
            }h.options[l] = m;
        };if (arguments.length === 2) {
            k(f, j);return;
        }if (f === Object(f)) {
            for (var g in f) {
                if (f.hasOwnProperty(g)) {
                    k(g, f[g]);
                }
            }
        }
    };c.register = function (g, f) {
        var e = this.options._method;if (e.hasOwnProperty(g)) {
            return false;
        }return e[g] = f;
    };c.unregister = function (f) {
        var e = this.options._method;if (e.hasOwnProperty(f)) {
            return delete e[f];
        }
    };c.template = function (e) {
        var f = this;this.options = e;this.__interpolate = function (g, l, i) {
            var h = g.split('|'),
                k = h[0] || '',
                j = void 0;if (h.length > 1) {
                g = h.shift();j = h.shift().split(',');k = '_method.' + j.shift() + '.call({}, ' + [g].concat(j) + ')';
            }return '<%= ' + (l ? '_method.__escapehtml.escaping' : '') + '(' + (!i || i.detection !== false ? '_method.__escapehtml.detection' : '') + '(' + k + ')) %>';
        };this.__removeShell = function (h, g) {
            var i = 0;h = h.replace(c.settings.forstart, function (n, k, m, l) {
                var m = m || 'value',
                    l = l && l.substr(1);var j = 'i' + i++;return '<% ~function() {for(var ' + j + ' in ' + k + ') {if(' + k + '.hasOwnProperty(' + j + ')) {var ' + m + '=' + k + '[' + j + '];' + (l ? 'var ' + l + '=' + j + ';' : '') + ' %>';
            }).replace(c.settings.forend, '<% }}}(); %>').replace(c.settings.ifstart, function (j, k) {
                return '<% if(' + k + ') { %>';
            }).replace(c.settings.ifend, '<% } %>').replace(c.settings.elsestart, function (j) {
                return '<% } else { %>';
            }).replace(c.settings.elseifstart, function (j, k) {
                return '<% } else if(' + k + ') { %>';
            }).replace(c.settings.noneencode, function (k, j) {
                return f.__interpolate(j, false, g);
            }).replace(c.settings.interpolate, function (k, j) {
                return f.__interpolate(j, true, g);
            }).replace(c.settings.inlinecomment, '').replace(c.settings.rangestart, function (m, l, n, k) {
                var j = 'j' + i++;return '<% ~function() {for(var ' + j + '=' + n + ';' + j + '<' + k + ';' + j + '++) {{var ' + l + '=' + j + '; %>';
            }).replace(c.settings.include, function (l, j, k) {
                return '<%= _method.__juicer(' + j + ', ' + k + '); %>';
            });if (!g || g.errorhandling !== false) {
                h = '<% try { %>' + h;h += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';
            }return h;
        };this.__toNative = function (h, g) {
            return this.__convert(h, !g || g.strip);
        };this.__lexicalAnalyze = function (k) {
            var j = [];var o = [];var n = '';var g = ['if', 'each', '_', '_method', 'console', 'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do', 'finally', 'for', 'function', 'in', 'instanceof', 'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'null', 'typeof', 'class', 'enum', 'export', 'extends', 'import', 'super', 'implements', 'interface', 'let', 'package', 'private', 'protected', 'public', 'static', 'yield', 'const', 'arguments', 'true', 'false', 'undefined', 'NaN'];var m = function m(r, q) {
                if (Array.prototype.indexOf && r.indexOf === Array.prototype.indexOf) {
                    return r.indexOf(q);
                }for (var p = 0; p < r.length; p++) {
                    if (r[p] === q) {
                        return p;
                    }
                }return -1;
            };var h = function h(p, i) {
                i = i.match(/\w+/igm)[0];if (m(j, i) === -1 && m(g, i) === -1 && m(o, i) === -1) {
                    if (typeof window !== 'undefined' && typeof window[i] === 'function' && window[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
                        return p;
                    }if (typeof global !== 'undefined' && typeof global[i] === 'function' && global[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
                        return p;
                    }if (typeof c.options._method[i] === 'function' || c.options._method.hasOwnProperty(i)) {
                        o.push(i);return p;
                    }j.push(i);
                }return p;
            };k.replace(c.settings.forstart, h).replace(c.settings.interpolate, h).replace(c.settings.ifstart, h).replace(c.settings.elseifstart, h).replace(c.settings.include, h).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/igm, h);for (var l = 0; l < j.length; l++) {
                n += 'var ' + j[l] + '=_.' + j[l] + ';';
            }for (var l = 0; l < o.length; l++) {
                n += 'var ' + o[l] + '=_method.' + o[l] + ';';
            }return '<% ' + n + ' %>';
        };this.__convert = function (h, i) {
            var g = [].join('');g += '\'use strict\';';g += 'var _=_||{};';g += 'var _out=\'\';_out+=\'';if (i !== false) {
                g += h.replace(/\\/g, '\\\\').replace(/[\r\t\n]/g, ' ').replace(/'(?=[^%]*%>)/g, '\t').split('\'').join('\\\'').split('\t').join('\'').replace(/<%=(.+?)%>/g, '\';_out+=$1;_out+=\'').split('<%').join('\';').split('%>').join('_out+=\'') + '\';return _out;';return g;
            }g += h.replace(/\\/g, '\\\\').replace(/[\r]/g, '\\r').replace(/[\t]/g, '\\t').replace(/[\n]/g, '\\n').replace(/'(?=[^%]*%>)/g, '\t').split('\'').join('\\\'').split('\t').join('\'').replace(/<%=(.+?)%>/g, '\';_out+=$1;_out+=\'').split('<%').join('\';').split('%>').join('_out+=\'') + '\';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, \'\\r\\n\');';return g;
        };this.parse = function (h, g) {
            var i = this;if (!g || g.loose !== false) {
                h = this.__lexicalAnalyze(h) + h;
            }h = this.__removeShell(h, g);h = this.__toNative(h, g);this._render = new Function('_, _method', h);this.render = function (k, j) {
                if (!j || j !== f.options._method) {
                    j = a(j, f.options._method);
                }return i._render.call(this, k, j);
            };return this;
        };
    };c.compile = function (g, f) {
        if (!f || f !== this.options) {
            f = a(f, this.options);
        }try {
            var h = this.__cache[g] ? this.__cache[g] : new this.template(this.options).parse(g, f);if (!f || f.cache !== false) {
                this.__cache[g] = h;
            }return h;
        } catch (i) {
            b('Juicer Compile Exception: ' + i.message);return {
                render: function render() {}
            };
        }
    };c.to_html = function (f, g, e) {
        if (!e || e !== this.options) {
            e = a(e, this.options);
        }return this.compile(f, e).render(g, e._method);
    };typeof module !== 'undefined' && module.exports ? module.exports = c : this.juicer = c;
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Gorden on 16/6/2.
 */
var $ = __webpack_require__(0);
var apiConfig = __webpack_require__(6);
var ajax = __webpack_require__(3);
var loading = __webpack_require__(8);
var cookie = __webpack_require__(4);
var Layer = __webpack_require__(9);
var _extend = __webpack_require__(16);
module.exports = _defineProperty({
    replaceUrl: function replaceUrl(url) {
        if (history.replaceState) {
            history.replaceState(null, document.title, url);
            history.go(0);
        } else {
            location.replace(url);
        }
    },

    /*
    获取指定uri的指定参数
    */
    getRequestParam: function getRequestParam(param, uri) {
        var value = void 0;
        uri = uri || window.location.href;
        value = uri.match(new RegExp('[\?\&]' + param + '=([^\&\#]*)([\&\#]?)', 'i'));
        return value ? decodeURIComponent(value[1]) : value;
    },

    /*
    * 混合对象
    */
    extend: function extend() {
        var arg = [true];
        for (var i = 0; i < arguments.length; i++) {
            arg.push(arguments[i]);
        }
        return _extend.apply(null, arg);
    },
    _extend: function _extend() {
        var y = 1,
            len = arguments.length,
            deepCopy = function deepCopy(sub, base) {
            var i = void 0;
            for (i in base) {
                if (base.hasOwnProperty(i)) sub[i] = base[i];
            }
        };
        if (arguments[0].extend) return arguments[0].extend(arguments.slice(1));
        for (; y < len; y++) {
            deepCopy(arguments[0], arguments[y]);
        }return arguments[0];
    },
    _contains: function _contains(root, node) {
        root = root.length > 0 ? root[0] : root;
        node = node.length > 0 ? node[0] : node;
        if (root.contains) return root != node && root.contains(node);else if (root.compareDocumentPosition) return !!(root.compareDocumentPosition(node) & 16);else if (node) {
            while (node = node.parentNode) {
                if (node === root) return true;
            }
        }
        return false;
    },
    _setParam: function _setParam(obj) {
        var arr = [];
        for (var name in obj) {
            arr.push(name + '=' + JSON.stringify(obj[name]));
        }
        return arr.join('&');
    },

    /*
    * 序列参数
    */

    setParam: function setParam(obj) {
        var arr = [];
        for (var name in obj) {
            arr.push(name + '=' + JSON.stringify(obj[name]));
        }
        return arr.join('&');
    },


    /*
    获取url参数,JSON格式
    */
    getQueryJson: function getQueryJson() {
        var ret = {}; // 定义数组
        window.location.search.substr(1).replace(/(\w+)=(\w+)/ig, function (a, b, c) {
            ret[b] = unescape(c);
        });
        return ret;
    },

    /*
    获取url参数,JSON格式
    */
    getQueryObjJson: function getQueryObjJson(u) {
        var obj = {};
        var keyvalue = [];
        var key = '',
            value = '';
        var url = u || window.location.href;
        var paraString = url.substring(url.indexOf('?') + 1, url.length).replace(/#.+/, '').split('&');
        for (var i in paraString) {
            keyvalue = paraString[i].split('=');
            key = keyvalue[0];
            value = keyvalue[1];
            obj[key] = decodeURIComponent(value);
        }
        return obj;
    },

    /*
    @author : songshijie
    判断是否为微信
    */
    isWX: function isWX() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        }
        return false;
    },

    /*
    @author : songshijie
    判断是否是IOS
    */
    isIOS: function isIOS() {
        var ua = navigator.userAgent;
        return ua.match(/(iPhone\sOS)\s([\d_]+)/);
    },
    plateForm: function plateForm() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
        var app = function (ua) {
            if (/HbcC/.test(ua)) {
                return 'hbcc';
            }
            if (/HbcG/.test(ua)) {
                return 'hbcg';
            }
            return '';
        }(u);
        var version = function (ua) {
            if (app === 'hbcg') {
                return ua.split('HbcG/')[1];
            }
            if (app === 'hbcc') {
                return ua.split('HbcC/')[1];
            }
            return '';
        }(u);
        return {
            os: isIOS ? 'ios' : isAndroid ? 'android' : 'pc',
            app: app,
            version: version
        };
    },

    /*
    @autohor :songshijie
    设置微信头
    */
    setWeixinTitle: function setWeixinTitle(title) {
        document.title = title;
        // hack在微信IOS webview中无法修改document.title的情况
        if (this.isWX() && this.isIOS()) {
            var body = document.getElementsByTagName('body')[0];
            document.title = title;
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', '/favicon.ico');
            iframe.addEventListener('load', function () {
                setTimeout(function () {
                    try {
                        iframe.removeEventListener('load', null, false);
                    } catch (e) {
                        body.removeChild(iframe);
                    }

                    body.removeChild(iframe);
                }, 0);
            }, false);
            body.appendChild(iframe);
        }
    },
    _bindLazyLoad: function _bindLazyLoad() {
        var imgCons = $('.lazy-image');

        function interval() {
            setTimeout(function () {
                check();
            }, 30);
        }

        function detach() {
            window.removeEventListener('scroll', interval, false);
            window.removeEventListener('resize', interval, false);
        }

        function check() {
            var winHeight = window.innerHeight,
                scrollTop = window.pageYOffset,
                i = 0,
                con = void 0,
                img = void 0,
                offset = void 0;

            while (i < imgCons.length) {
                con = $(imgCons[i]);
                offset = con.offset();
                if (scrollTop + winHeight + 20 >= offset.top && offset.width > 0) {
                    img = $(con);
                    $(img[0]).attr('src', img.attr('lazy-image'));
                    $(img[0]).removeClass('lazy-image');
                    [].splice.call(imgCons, i, 1);
                    i--;
                    if (!imgCons.length) {
                        detach();
                    }
                }
                i++;
            }
        }

        window.addEventListener('scroll', interval, false);
        window.addEventListener('resize', interval, false);

        check();
    },
    _bindLazyLoadBg: function _bindLazyLoadBg() {
        var imgCons = $('.lazy-bg');
        function interval() {
            setTimeout(function () {
                check();
            }, 30);
        }

        function detach() {
            window.removeEventListener('scroll', interval, false);
            window.removeEventListener('resize', interval, false);
        }

        function check() {
            var winHeight = window.innerHeight,
                scrollTop = window.pageYOffset,
                i = 0,
                con = void 0,
                img = void 0,
                offset = void 0;

            while (i < imgCons.length) {
                con = $(imgCons[i]);
                // offset = con.offset();
                // if (scrollTop + winHeight + 20 >= offset.top) {
                var top = con[0].getBoundingClientRect().top; // 元素顶端到可见区域顶端的距离
                var se = document.documentElement.clientHeight; // 浏览器可见区域高度。
                if (top <= se) {
                    img = $(con);
                    $(img[0]).css({ backgroundImage: 'url(' + img.attr('lazy-bg') + ')' });
                    $(img[0]).removeClass('lazy-bg');
                    [].splice.call(imgCons, i, 1);
                    i--;
                    if (!imgCons.length) {
                        detach();
                    }
                }
                i++;
            }
        }

        window.addEventListener('scroll', interval, false);
        window.addEventListener('resize', interval, false);

        check();
    },
    _bindScrollTobottom: function _bindScrollTobottom(callback, tag) {

        function interval() {
            // setTimeout(function() {
            check();
            // }, 1);
        }

        function detach() {
            window.removeEventListener('scroll', interval, false);
            window.removeEventListener('resize', interval, false);
        }

        function check() {
            var winHeight = window.innerHeight,
                scrollTop = window.pageYOffset,
                i = 0,
                con = void 0,
                img = void 0,
                offset = void 0;

            offset = $('body').height();
            if (scrollTop + winHeight + 50 >= offset) {
                detach();
                callback && tag && callback();
            }
        }

        window.addEventListener('scroll', interval, false);
        window.addEventListener('resize', interval, false);

        check();

        // console.log(this)
        //     this.removeEventListener = function(){
        //       detach();
        //     }
        return detach;
    },


    // 根据url,app环境,获取channelId
    getRightChannelId: function getRightChannelId() {
        var channelId = apiConfig.channelId;
        if (this.getRequestParam('channelId')) {
            return this.getRequestParam('channelId');
        }
        if (cookie.get('iscbc')) {
            return apiConfig.cbcChannelId;
        }
        if (cookie.get('ismaster')) {
            return apiConfig.masterChannelId;
        }
        var plateform = this.plateForm().app;
        if (plateform == 'hbcc') {
            return apiConfig.cChannelId;
        }
        if (plateform == 'hbcg') {
            return apiConfig.gChannelId;
        }
        return channelId;
    },
    goToAppGoodsDetail: function goToAppGoodsDetail(cityid, goodsNo) {
        var plateForm = this.plateForm();
        var obj = {
            t: '2',
            v: '5',
            d: {
                gn: goodsNo,
                ci: cityid || '',
                u: apiConfig.domainHost + 'app/detail.html?goodsNo=' + goodsNo
            }
        };
        switch (plateForm.app) {
            case 'hbcc':
                try {
                    window.javaObj.doAction(JSON.stringify(obj));
                } catch (e) {
                    window.location.href = obj.d.u;
                }
                break;
            default:
                window.location.href = obj.d.u;
        }
    },

    // 获取微信配置
    getWxData: function getWxData(scb, ecb) {
        loading.init();
        var curUrl = encodeURIComponent(location.href.split('#')[0]);
        var param = {
            url: apiConfig.getWxData + '?url=' + curUrl,
            type: 'GET',
            success: function success(res) {
                loading.remove();
                if (res.status == 200) {
                    scb && scb(res);
                } else {
                    new Layer({
                        msg: res.message
                    });
                }
            },
            error: function error() {
                loading.remove();
                new Layer({
                    msg: '微信配置获取失败，请稍后重试'
                });
                ecb && ecb();
            }
        };
        ajax.sendRequest(param);
    },

    // 微信分享
    WxShare: function WxShare(shareData, cb) {
        var that = this;
        that.getWxData(function (res) {
            var wxData = res.data;
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: wxData.appId, // 必填，公众号的唯一标识
                timestamp: wxData.timestamp, // 必填，生成签名的时间戳
                nonceStr: wxData.noncestr, // 必填，生成签名的随机串
                signature: wxData.signature, // 必填，签名，见附录1
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function () {
                wx.onMenuShareTimeline(shareData); // 朋友圈

                wx.onMenuShareAppMessage(shareData); // 好友

                wx.onMenuShareQQ(shareData); // qq

                wx.onMenuShareWeibo(shareData); // 微博

                wx.onMenuShareQZone(shareData); // qq空间
            });
            cb && cb();
        });
    },
    _getUCA: function _getUCA(ucakey) {
        var key = '';
        var value = '';
        key = apiConfig.ENV + '_' + 'uca_' + ucakey;
        value = Date.parse(new Date()) + '';
        return {
            key: key,
            value: value
        };
    },
    versionCompare: function versionCompare(a, b) {
        var i = void 0;
        var len = void 0;

        if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) + (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'stringstring') {
            return false;
        }

        a = a.split('.');
        b = b.split('.');
        len = Math.max(a.length, b.length);

        for (i = 0; i < len; i++) {
            if (a[i] && !b[i] && parseInt(a[i]) > 0 || parseInt(a[i]) > parseInt(b[i])) {
                return 1;
            } else if (b[i] && !a[i] && parseInt(b[i]) > 0 || parseInt(a[i]) < parseInt(b[i])) {
                return -1;
            }
        }

        return 0;
    }
}, '_bindScrollTobottom', function _bindScrollTobottom(callback, tag) {
    function interval() {
        // setTimeout(function() {
        check();
        // }, 1);
    }

    function detach() {
        window.removeEventListener('scroll', interval, false);
        window.removeEventListener('resize', interval, false);
    }

    function check() {
        var winHeight = window.innerHeight,
            scrollTop = window.pageYOffset,
            i = 0,
            con = void 0,
            img = void 0,
            offset = void 0;

        offset = $('body').height();
        if (scrollTop + winHeight + 50 >= offset) {
            detach();
            callback && tag && callback();
        }
    }

    window.addEventListener('scroll', interval, false);
    window.addEventListener('resize', interval, false);

    check();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Gorden on 16/6/2.
 */

// var $ = require('zepto');
var $ = __webpack_require__(0);
/*
 pre ie9 use babel-polyfill
 */
// var poly = require('babel-polyfill');
module.exports = {
    sendRequest: function sendRequest(opt) {
        var _$$ajax;

        /*
         url , data , method, header, success,error
         */
        var that = this;
        // var promise = new Promise(function (resolve, inject) {
        //
        // });
        /*
        为了保险，去掉promise
        */

        var header = {
            distinctId: sa && sa.store && sa.store.getDistinctId() || ''

        };
        if (opt.header) {
            for (var key in opt.header) {
                header[key] = opt.header[key];
            }
        }

        return $.ajax((_$$ajax = {
            url: opt.url,
            data: opt.data || {},
            type: opt.method || 'GET',
            headers: header,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: 'JSON'
        }, _defineProperty(_$$ajax, 'xhrFields', {
            withCredentials: true
        }), _defineProperty(_$$ajax, 'crossDomain', true), _defineProperty(_$$ajax, 'success', function success(ret) {
            if (typeof ret === 'string') {
                opt.success && opt.success(JSON.parse(ret));
            }
            if ((typeof ret === 'undefined' ? 'undefined' : _typeof(ret)) === 'object') {
                opt.success && opt.success(ret);
            }

            // resolve(ret);
        }), _defineProperty(_$$ajax, 'error', function error(err, a, b) {
            opt.error && opt.error(err);
            // inject(err);
        }), _$$ajax));

        // return promise;
    },
    sendAppRequest: function sendAppRequest(opt) {
        if (!window.javaObj) {
            return;
        }

        var funName = function (time) {
            return {
                succ: callback + '_' + time,
                err: callback + '_' + 'error_' + time
            };
        }(new Date().getTime());
        var data = '';
        if (opt.success) window[funName.succ] = opt.success;
        if (opt.error) window[funName.err] = opt.error;
        if (opt.data) {
            var arr = [];
            for (var key in opt.data) {
                arr.push(key + '=' + encodeURIComponent(opt.data.key));
            }
            data = arr.join('&');
        }
        window.javaObj.requestUrl(opt.type, opt.url, data || '', funName.succ, funName.err);
    },
    _reportInfo: function _reportInfo(project, page, api, info) {
        window.img = document.createElement('img');
        window.img.src = 'http://collect.huangbaoche.com/' + project + '?page=' + page + '&api=' + api + '&info=' + info;
    },

    GL_STATUS: {}
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Cookie
// -------------
// Thanks to:
//  - http://www.nczonline.net/blog/2009/05/05/http-cookies-explained/
//  - http://developer.yahoo.com/yui/3/cookie/


var Cookie = exports;

var decode = decodeURIComponent;
var encode = encodeURIComponent;

/**
 * Returns the cookie value for the given name.
 *
 * @param {String} name The name of the cookie to retrieve.
 *
 * @param {Function|Object} options (Optional) An object containing one or
 *     more cookie options: raw (true/false) and converter (a function).
 *     The converter function is run on the value before returning it. The
 *     function is not used if the cookie doesn't exist. The function can be
 *     passed instead of the options object for conveniently. When raw is
 *     set to true, the cookie value is not URI decoded.
 *
 * @return {*} If no converter is specified, returns a string or undefined
 *     if the cookie doesn't exist. If the converter is specified, returns
 *     the value returned from the converter.
 */
Cookie.get = function (name, options) {
    validateCookieName(name);

    if (typeof options === 'function') {
        options = {
            converter: options
        };
    } else {
        options = options || {};
    }

    var cookies = parseCookieString(document.cookie, !options.raw);
    return (options.converter || same)(cookies[name]);
};

/**
 * Sets a cookie with a given name and value.
 *
 * @param {string} name The name of the cookie to set.
 *
 * @param {*} value The value to set for the cookie.
 *
 * @param {Object} options (Optional) An object containing one or more
 *     cookie options: path (a string), domain (a string),
 *     expires (number or a Date object), secure (true/false),
 *     and raw (true/false). Setting raw to true indicates that the cookie
 *     should not be URI encoded before being set.
 *
 * @return {string} The created cookie string.
 */
Cookie.set = function (name, value, options) {
    validateCookieName(name);

    options = options || {};
    var expires = options.expires;
    var domain = options.domain;
    var path = options.path;

    if (!options.raw) {
        value = encode(String(value));
    }

    var text = name + '=' + value;

    // expires
    var date = expires;
    if (typeof date === 'number') {
        date = new Date();
        date.setDate(date.getDate() + expires);
    }
    if (date instanceof Date) {
        text += '; expires=' + date.toUTCString();
    }

    // domain
    if (isNonEmptyString(domain)) {
        text += '; domain=' + domain;
    }

    // path
    if (isNonEmptyString(path)) {
        text += '; path=' + path;
    }

    // secure
    if (options.secure) {
        text += '; secure';
    }

    document.cookie = text;
    return text;
};

/**
 * Removes a cookie from the machine by setting its expiration date to
 * sometime in the past.
 *
 * @param {string} name The name of the cookie to remove.
 *
 * @param {Object} options (Optional) An object containing one or more
 *     cookie options: path (a string), domain (a string),
 *     and secure (true/false). The expires option will be overwritten
 *     by the method.
 *
 * @return {string} The created cookie string.
 */
Cookie.remove = function (name, options) {
    options = options || {};
    options.expires = new Date(0);
    if (isObject(name)) {
        for (var i in name) {
            remove.call(this, name[i], options);
        }
    } else {
        remove.call(this, name, options);
    }
};

function parseCookieString(text, shouldDecode) {
    var cookies = {};

    if (isString(text) && text.length > 0) {

        var decodeValue = shouldDecode ? decode : same;
        var cookieParts = text.split(/;\s/g);
        var cookieName = void 0;
        var cookieValue = void 0;
        var cookieNameValue = void 0;

        for (var i = 0, len = cookieParts.length; i < len; i++) {

            // Check for normally-formatted cookie (name-value)
            cookieNameValue = cookieParts[i].match(/([^=]+)=/i);
            if (cookieNameValue instanceof Array) {
                try {
                    cookieName = decode(cookieNameValue[1]);
                    cookieValue = decodeValue(cookieParts[i].substring(cookieNameValue[1].length + 1));
                } catch (ex) {
                    // Intentionally ignore the cookie -
                    // the encoding is wrong
                }
            } else {
                // Means the cookie does not have an "=", so treat it as
                // a boolean flag
                cookieName = decode(cookieParts[i]);
                cookieValue = '';
            }

            if (cookieName) {
                cookies[cookieName] = cookieValue;
            }
        }
    }

    return cookies;
}

// Helpers

function remove(name, options) {
    return this.set(name, '', options);
}

function isString(o) {
    return typeof o === 'string';
}

function isObject(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
}

function isNonEmptyString(s) {
    return isString(s) && s !== '';
}

function validateCookieName(name) {
    if (!isNonEmptyString(name)) {
        throw new TypeError('Cookie name must be a non-empty string');
    }
}

function same(s) {
    return s;
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Gorden on 16/6/2.
 */
module.exports = {
    domainHost: 'https://m.huangbaoche.com/',
    goodsHost: 'https://goods.huangbaoche.com',
    gappHost: 'https://g.huangbaoche.com/',
    apiHost: 'https://api7.huangbaoche.com/',
    wxApiHost: 'https://api7.huangbaoche.com/',
    sApiHost: 'https://api7.huangbaoche.com/',
    resHost: '',
    frHost: 'https://hbcdn.huangbaoche.com/',
    actHost: 'https://act.huangbaoche.com/',
    api3: '',
    infoHost: 'https://info.huangbaoche.com/',
    getAK: 'https://api7.huangbaoche.com/passport/v1.0/c/getWebAccessKey',
    openApiHost: 'https://api7.huangbaoche.com/',
    openApiHost2: 'https://api7.huangbaoche.com/',
    payHost: '',

    logout: 'https://api7.huangbaoche.com/ucenter/v1.0/c/user/h5logout', // 用户注销接口地址

    toPay: 'https://op.huangbaoche.com/app/index.html', // 支付

    sendCode: 'https://api7.huangbaoche.com/ucenter/v1.0/c/user/captcha', // 发送验证码
    codeLogin: 'https://api7.huangbaoche.com/ucenter/v1.0/c/user/h5login/bycaptcha', // 验证码登录
    getPackW: 'https://api7.huangbaoche.com//marketing/v1.0/e/openapi/coupon/packet/webkit', // 券批次
    'queryGoodsStock': 'https://api6.huangbaoche.com/goods/v1.0/p/queryGoodsStock', // 查询商品库存日历
    cdnHost: '',
    packNo: '20161222114936',
    channelId: '1108019942',
    gChannelId: '1901198716', // G端channelId
    cChannelId: '18',
    cbcChannelId: '1145431513', // 建行channelId
    masterChannelId: '1106049142',
    cbcPackNo: '20170705141911',
    masterPackNo: '20170711153750',
    ENV: 'pub',

    guideInfo: 'https://api7.huangbaoche.com/supplier/v2.0/e/open/personalinfo' // 司导个人页，司导信息


};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Gorden on 16/6/2.
 */

var css = __webpack_require__(14);
// var $ = require("zepto");
var $ = __webpack_require__(0);
module.exports = {
    init: function init() {
        this.cacheDom();
        this.renderUI();
    },
    cacheDom: function cacheDom() {
        this.dom = $('body');
    },
    renderUI: function renderUI() {
        this.loading = $('<div id="loading" class="loading J-loading"><div class="loading-content">loading...</div></div>');
        this.dom.append(this.loading);
    },
    hide: function hide() {
        this.loading.hide();
    },
    remove: function remove() {
        $('.J-loading').remove();
        // this.loading.remove();
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created By Raisun on 2016/9/15.
 * Layer msg
 * new Layer({
 *   msg:opt.msg
 * })
 */
var tpl = __webpack_require__(15);
__webpack_require__(11);
var template = __webpack_require__(1);

var Layer = function () {
    function Layer(opt) {
        _classCallCheck(this, Layer);

        this.opt = opt;
        this.cacheData();
        this.cacheDom();
        this.renderUI();
        this.bindEvent();
    }

    _createClass(Layer, [{
        key: 'cacheDom',
        value: function cacheDom() {
            var that = this;
            that.dom = {};
            that.dom.wrap = document.querySelector('body');
            that.dom.layerWrap = document.querySelector('.J-layer-wrap');
        }
    }, {
        key: 'cacheData',
        value: function cacheData() {
            var that = this;
            that.data = {
                msg: that.opt.msg ? that.opt.msg : '信息不正确'
            };
        }
    }, {
        key: 'renderUI',
        value: function renderUI() {
            var that = this;
            if (!that.dom.wrap) {
                return;
            }
            that.dom.wrap.insertAdjacentHTML('beforeend', template(tpl, this.data));
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var that = this;
            setTimeout(function () {
                that.dom.wrap.removeChild(document.querySelector('.J-layer-wrap'));
            }, 2000);
        }
    }]);

    return Layer;
}();

module.exports = Layer;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var a = factory();
    for (var i in a) {
      ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
    }
  }
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId])
          /******/return installedModules[moduleId].exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // identity function for calling harmony imports with the correct context
      /******/__webpack_require__.i = function (value) {
        return value;
      };
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "/";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var __WEBPACK_AMD_DEFINE_RESULT__; /*
                                         * Zepto - 1.0.0
                                         * 功能：dom操作
                                         * 说明：自主zepto
                                         * 参数： {
                                         **
                                         * }
                                         */

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      var _gol = window || undefined;
      var Zepto = function () {
        var undefined,
            key,
            $,
            classList,
            emptyArray = [],
            _slice = emptyArray.slice,
            _filter = emptyArray.filter,
            document = window.document,
            elementDisplay = {},
            classCache = {},
            cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1 },
            fragmentRE = /^\s*<(\w+|!)[^>]*>/,
            singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
            rootNodeRE = /^(?:body|html)$/i,
            capitalRE = /([A-Z])/g,


        // special attributes that should be get/set via method calls
        methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
            adjacencyOperators = ['after', 'prepend', 'before', 'append'],
            table = document.createElement('table'),
            tableRow = document.createElement('tr'),
            containers = {
          'tr': document.createElement('tbody'),
          'tbody': table, 'thead': table, 'tfoot': table,
          'td': tableRow, 'th': tableRow,
          '*': document.createElement('div')
        },
            readyRE = /complete|loaded|interactive/,
            simpleSelectorRE = /^[\w-]*$/,
            class2type = {},
            toString = class2type.toString,
            zepto = {},
            camelize,
            uniq,
            tempParent = document.createElement('div'),
            propMap = {
          'tabindex': 'tabIndex',
          'readonly': 'readOnly',
          'for': 'htmlFor',
          'class': 'className',
          'maxlength': 'maxLength',
          'cellspacing': 'cellSpacing',
          'cellpadding': 'cellPadding',
          'rowspan': 'rowSpan',
          'colspan': 'colSpan',
          'usemap': 'useMap',
          'frameborder': 'frameBorder',
          'contenteditable': 'contentEditable'
        },
            isArray = Array.isArray || function (object) {
          return object instanceof Array;
        };

        zepto.matches = function (element, selector) {
          if (!selector || !element || element.nodeType !== 1) return false;
          var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
          if (matchesSelector) return matchesSelector.call(element, selector);
          // fall back to performing a selector:
          var match,
              parent = element.parentNode,
              temp = !parent;
          if (temp) (parent = tempParent).appendChild(element);
          match = ~zepto.qsa(parent, selector).indexOf(element);
          temp && tempParent.removeChild(element);
          return match;
        };

        function type(obj) {
          return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
        }

        function isFunction(value) {
          return type(value) == "function";
        }
        function isWindow(obj) {
          return obj != null && obj == obj.window;
        }
        function isDocument(obj) {
          return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
        }
        function isObject(obj) {
          return type(obj) == "object";
        }
        function isPlainObject(obj) {
          return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
        }
        function likeArray(obj) {
          return typeof obj.length == 'number';
        }

        function compact(array) {
          return _filter.call(array, function (item) {
            return item != null;
          });
        }
        function flatten(array) {
          return array.length > 0 ? $.fn.concat.apply([], array) : array;
        }
        camelize = function camelize(str) {
          return str.replace(/-+(.)?/g, function (match, chr) {
            return chr ? chr.toUpperCase() : '';
          });
        };
        function dasherize(str) {
          return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
        }
        uniq = function uniq(array) {
          return _filter.call(array, function (item, idx) {
            return array.indexOf(item) == idx;
          });
        };

        function classRE(name) {
          return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)');
        }

        function maybeAddPx(name, value) {
          return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
        }

        function defaultDisplay(nodeName) {
          var element, display;
          if (!elementDisplay[nodeName]) {
            element = document.createElement(nodeName);
            document.body.appendChild(element);
            display = getComputedStyle(element, '').getPropertyValue("display");
            element.parentNode.removeChild(element);
            display == "none" && (display = "block");
            elementDisplay[nodeName] = display;
          }
          return elementDisplay[nodeName];
        }

        function _children(element) {
          return 'children' in element ? _slice.call(element.children) : $.map(element.childNodes, function (node) {
            if (node.nodeType == 1) return node;
          });
        }

        // `$.zepto.fragment` takes a html string and an optional tag name
        // to generate DOM nodes nodes from the given html string.
        // The generated DOM nodes are returned as an array.
        // This function can be overriden in plugins for example to make
        // it compatible with browsers that don't support the DOM fully.
        zepto.fragment = function (html, name, properties) {
          var dom, nodes, container;

          // A special case optimization for a single tag
          if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

          if (!dom) {
            if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
            if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
            if (!(name in containers)) name = '*';

            container = containers[name];
            container.innerHTML = '' + html;
            dom = $.each(_slice.call(container.childNodes), function () {
              container.removeChild(this);
            });
          }

          if (isPlainObject(properties)) {
            nodes = $(dom);
            $.each(properties, function (key, value) {
              if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
            });
          }

          return dom;
        };

        // `$.zepto.Z` swaps out the prototype of the given `dom` array
        // of nodes with `$.fn` and thus supplying all the Zepto functions
        // to the array. Note that `__proto__` is not supported on Internet
        // Explorer. This method can be overriden in plugins.
        zepto.Z = function (dom, selector) {
          dom = dom || [];
          dom.__proto__ = $.fn;
          dom.selector = selector || '';
          return dom;
        };

        // `$.zepto.isZ` should return `true` if the given object is a Zepto
        // collection. This method can be overriden in plugins.
        zepto.isZ = function (object) {
          return object instanceof zepto.Z;
        };

        // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
        // takes a CSS selector and an optional context (and handles various
        // special cases).
        // This method can be overriden in plugins.
        zepto.init = function (selector, context) {
          var dom;
          // If nothing given, return an empty Zepto collection
          if (!selector) return zepto.Z();
          // Optimize for string selectors
          else if (typeof selector == 'string') {
              selector = selector.trim();
              // If it's a html fragment, create nodes from it
              // Note: In both Chrome 21 and Firefox 15, DOM error 12
              // is thrown if the fragment doesn't begin with <
              if (selector[0] == '<' && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), selector = null;
              // If there's a context, create a collection on that context first, and select
              // nodes from there
              else if (context !== undefined) return $(context).find(selector);
                // If it's a CSS selector, use it to select nodes.
                else dom = zepto.qsa(document, selector);
            }
            // If a function is given, call it when the DOM is ready
            else if (isFunction(selector)) return $(document).ready(selector);
              // If a Zepto collection is given, just return it
              else if (zepto.isZ(selector)) return selector;else {
                  // normalize array if an array of nodes is given
                  if (isArray(selector)) dom = compact(selector);
                  // Wrap DOM nodes.
                  else if (isObject(selector)) dom = [selector], selector = null;
                    // If it's a html fragment, create nodes from it
                    else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;
                      // If there's a context, create a collection on that context first, and select
                      // nodes from there
                      else if (context !== undefined) return $(context).find(selector);
                        // And last but no least, if it's a CSS selector, use it to select nodes.
                        else dom = zepto.qsa(document, selector);
                }
          // create a new Zepto collection from the nodes found
          return zepto.Z(dom, selector);
        };

        // `$` will be the base `Zepto` object. When calling this
        // function just call `$.zepto.init, which makes the implementation
        // details of selecting nodes and creating Zepto collections
        // patchable in plugins.
        $ = function $(selector, context) {
          return zepto.init(selector, context);
        };

        function extend(target, source, deep) {
          for (key in source) {
            if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
              if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
              if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
              extend(target[key], source[key], deep);
            } else if (source[key] !== undefined) target[key] = source[key];
          }
        }

        // Copy all but undefined properties from one or more
        // objects to the `target` object.
        $.extend = function (target) {
          var deep,
              args = _slice.call(arguments, 1);
          if (typeof target == 'boolean') {
            deep = target;
            target = args.shift();
          }
          args.forEach(function (arg) {
            extend(target, arg, deep);
          });
          return target;
        };

        // `$.zepto.qsa` is Zepto's CSS selector implementation which
        // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
        // This method can be overriden in plugins.
        zepto.qsa = function (element, selector) {
          var found,
              maybeID = selector[0] == '#',
              maybeClass = !maybeID && selector[0] == '.',
              nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,

          // Ensure that a 1 char tag name still gets checked
          isSimple = simpleSelectorRE.test(nameOnly);
          return isDocument(element) && isSimple && maybeID ? (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 ? [] : _slice.call(isSimple && !maybeID ? maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
          element.getElementsByTagName(selector) : // Or a tag
          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
          );
        };

        function filtered(nodes, selector) {
          return selector == null ? $(nodes) : $(nodes).filter(selector);
        }

        $.contains = document.documentElement.contains ? function (parent, node) {
          return parent !== node && parent.contains(node);
        } : function (parent, node) {
          while (node && (node = node.parentNode)) {
            if (node === parent) return true;
          }return false;
        };

        function funcArg(context, arg, idx, payload) {
          return isFunction(arg) ? arg.call(context, idx, payload) : arg;
        }

        function setAttribute(node, name, value) {
          value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
        }

        // access className property while respecting SVGAnimatedString
        function className(node, value) {
          var klass = node.className || '',
              svg = klass && klass.baseVal !== undefined;

          if (value === undefined) return svg ? klass.baseVal : klass;
          svg ? klass.baseVal = value : node.className = value;
        }

        // "true"  => true
        // "false" => false
        // "null"  => null
        // "42"    => 42
        // "42.5"  => 42.5
        // "08"    => "08"
        // JSON    => parse if valid
        // String  => self
        function deserializeValue(value) {
          try {
            return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
          } catch (e) {
            return value;
          }
        }

        $.type = type;
        $.isFunction = isFunction;
        $.isWindow = isWindow;
        $.isArray = isArray;
        $.isPlainObject = isPlainObject;

        $.isEmptyObject = function (obj) {
          var name;
          for (name in obj) {
            return false;
          }return true;
        };

        $.inArray = function (elem, array, i) {
          return emptyArray.indexOf.call(array, elem, i);
        };

        $.camelCase = camelize;
        $.trim = function (str) {
          return str == null ? "" : String.prototype.trim.call(str);
        };

        // plugin compatibility
        $.uuid = 0;
        $.support = {};
        $.expr = {};

        $.map = function (elements, callback) {
          var value,
              values = [],
              i,
              key;
          if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
            value = callback(elements[i], i);
            if (value != null) values.push(value);
          } else for (key in elements) {
            value = callback(elements[key], key);
            if (value != null) values.push(value);
          }
          return flatten(values);
        };

        $.each = function (elements, callback) {
          var i, key;
          if (likeArray(elements)) {
            for (i = 0; i < elements.length; i++) {
              if (callback.call(elements[i], i, elements[i]) === false) return elements;
            }
          } else {
            for (key in elements) {
              if (callback.call(elements[key], key, elements[key]) === false) return elements;
            }
          }

          return elements;
        };

        $.grep = function (elements, callback) {
          return _filter.call(elements, callback);
        };

        if (window.JSON) $.parseJSON = JSON.parse;

        // Populate the class2type map
        $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        });

        // Define methods that will be available on all
        // Zepto collections
        $.fn = {
          // Because a collection acts like an array
          // copy over these useful array functions.
          forEach: emptyArray.forEach,
          reduce: emptyArray.reduce,
          push: emptyArray.push,
          sort: emptyArray.sort,
          indexOf: emptyArray.indexOf,
          concat: emptyArray.concat,

          // `map` and `slice` in the jQuery API work differently
          // from their array counterparts
          map: function map(fn) {
            return $($.map(this, function (el, i) {
              return fn.call(el, i, el);
            }));
          },
          slice: function slice() {
            return $(_slice.apply(this, arguments));
          },

          ready: function ready(callback) {
            // need to check if document.body exists for IE as that browser reports
            // document ready when it hasn't yet created the body element
            if (readyRE.test(document.readyState) && document.body) callback($);else document.addEventListener('DOMContentLoaded', function () {
              callback($);
            }, false);
            return this;
          },
          get: function get(idx) {
            return idx === undefined ? _slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
          },
          toArray: function toArray() {
            return this.get();
          },
          size: function size() {
            return this.length;
          },
          remove: function remove() {
            return this.each(function () {
              if (this.parentNode != null) this.parentNode.removeChild(this);
            });
          },
          each: function each(callback) {
            emptyArray.every.call(this, function (el, idx) {
              return callback.call(el, idx, el) !== false;
            });
            return this;
          },
          filter: function filter(selector) {
            if (isFunction(selector)) return this.not(this.not(selector));
            return $(_filter.call(this, function (element) {
              return zepto.matches(element, selector);
            }));
          },
          add: function add(selector, context) {
            return $(uniq(this.concat($(selector, context))));
          },
          is: function is(selector) {
            return this.length > 0 && zepto.matches(this[0], selector);
          },
          not: function not(selector) {
            var nodes = [];
            if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
              if (!selector.call(this, idx)) nodes.push(this);
            });else {
              var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? _slice.call(selector) : $(selector);
              this.forEach(function (el) {
                if (excludes.indexOf(el) < 0) nodes.push(el);
              });
            }
            return $(nodes);
          },
          has: function has(selector) {
            return this.filter(function () {
              return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
            });
          },
          eq: function eq(idx) {
            return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
          },
          first: function first() {
            var el = this[0];
            return el && !isObject(el) ? el : $(el);
          },
          last: function last() {
            var el = this[this.length - 1];
            return el && !isObject(el) ? el : $(el);
          },
          find: function find(selector) {
            var result,
                $this = this;
            if (!selector) result = $();else if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') result = $(selector).filter(function () {
              var node = this;
              return emptyArray.some.call($this, function (parent) {
                return $.contains(parent, node);
              });
            });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {
              return zepto.qsa(this, selector);
            });
            return result;
          },
          closest: function closest(selector, context) {
            var node = this[0],
                collection = false;
            if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') collection = $(selector);
            while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) {
              node = node !== context && !isDocument(node) && node.parentNode;
            }return $(node);
          },
          parents: function parents(selector) {
            var ancestors = [],
                nodes = this;
            while (nodes.length > 0) {
              nodes = $.map(nodes, function (node) {
                if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
                  ancestors.push(node);
                  return node;
                }
              });
            }return filtered(ancestors, selector);
          },
          parent: function parent(selector) {
            return filtered(uniq(this.pluck('parentNode')), selector);
          },
          children: function children(selector) {
            return filtered(this.map(function () {
              return _children(this);
            }), selector);
          },
          contents: function contents() {
            return this.map(function () {
              return _slice.call(this.childNodes);
            });
          },
          siblings: function siblings(selector) {
            return filtered(this.map(function (i, el) {
              return _filter.call(_children(el.parentNode), function (child) {
                return child !== el;
              });
            }), selector);
          },
          empty: function empty() {
            return this.each(function () {
              this.innerHTML = '';
            });
          },
          // `pluck` is borrowed from Prototype.js
          pluck: function pluck(property) {
            return $.map(this, function (el) {
              return el[property];
            });
          },
          show: function show() {
            return this.each(function () {
              this.style.display == "none" && (this.style.display = '');
              if (getComputedStyle(this, '').getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
            });
          },
          replaceWith: function replaceWith(newContent) {
            return this.before(newContent).remove();
          },
          wrap: function wrap(structure) {
            var func = isFunction(structure);
            if (this[0] && !func) var dom = $(structure).get(0),
                clone = dom.parentNode || this.length > 1;

            return this.each(function (index) {
              $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
            });
          },
          wrapAll: function wrapAll(structure) {
            if (this[0]) {
              $(this[0]).before(structure = $(structure));
              var children;
              // drill down to the inmost element
              while ((children = structure.children()).length) {
                structure = children.first();
              }$(structure).append(this);
            }
            return this;
          },
          wrapInner: function wrapInner(structure) {
            var func = isFunction(structure);
            return this.each(function (index) {
              var self = $(this),
                  contents = self.contents(),
                  dom = func ? structure.call(this, index) : structure;
              contents.length ? contents.wrapAll(dom) : self.append(dom);
            });
          },
          unwrap: function unwrap() {
            this.parent().each(function () {
              $(this).replaceWith($(this).children());
            });
            return this;
          },
          clone: function clone() {
            return this.map(function () {
              return this.cloneNode(true);
            });
          },
          hide: function hide() {
            return this.css("display", "none");
          },
          toggle: function toggle(setting) {
            return this.each(function () {
              var el = $(this);(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
            });
          },
          prev: function prev(selector) {
            return $(this.pluck('previousElementSibling')).filter(selector || '*');
          },
          next: function next(selector) {
            return $(this.pluck('nextElementSibling')).filter(selector || '*');
          },
          html: function html(_html) {
            return 0 in arguments ? this.each(function (idx) {
              var originHtml = this.innerHTML;
              $(this).empty().append(funcArg(this, _html, idx, originHtml));
            }) : 0 in this ? this[0].innerHTML : null;
          },
          text: function text(_text) {
            return 0 in arguments ? this.each(function (idx) {
              var newText = funcArg(this, _text, idx, this.textContent);
              this.textContent = newText == null ? '' : '' + newText;
            }) : 0 in this ? this[0].textContent : null;
          },
          attr: function attr(name, value) {
            var result;
            return typeof name == 'string' && !(1 in arguments) ? !this.length || this[0].nodeType !== 1 ? undefined : !(result = this[0].getAttribute(name)) && name in this[0] ? this[0][name] : result : this.each(function (idx) {
              if (this.nodeType !== 1) return;
              if (isObject(name)) for (key in name) {
                setAttribute(this, key, name[key]);
              } else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
            });
          },
          removeAttr: function removeAttr(name) {
            return this.each(function () {
              this.nodeType === 1 && name.split(' ').forEach(function (attribute) {
                setAttribute(this, attribute);
              }, this);
            });
          },
          prop: function prop(name, value) {
            name = propMap[name] || name;
            return 1 in arguments ? this.each(function (idx) {
              this[name] = funcArg(this, value, idx, this[name]);
            }) : this[0] && this[0][name];
          },
          data: function data(name, value) {
            var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();

            var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);

            return data !== null ? deserializeValue(data) : undefined;
          },
          val: function val(value) {
            return 0 in arguments ? this.each(function (idx) {
              this.value = funcArg(this, value, idx, this.value);
            }) : this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function () {
              return this.selected;
            }).pluck('value') : this[0].value);
          },
          offset: function offset(coordinates) {
            if (coordinates) return this.each(function (index) {
              var $this = $(this),
                  coords = funcArg(this, coordinates, index, $this.offset()),
                  parentOffset = $this.offsetParent().offset(),
                  props = {
                top: coords.top - parentOffset.top,
                left: coords.left - parentOffset.left
              };

              if ($this.css('position') == 'static') props['position'] = 'relative';
              $this.css(props);
            });
            if (!this.length) return null;
            var obj = this[0].getBoundingClientRect();
            return {
              left: obj.left + window.pageXOffset,
              top: obj.top + window.pageYOffset,
              width: Math.round(obj.width),
              height: Math.round(obj.height)
            };
          },
          css: function css(property, value) {
            if (arguments.length < 2) {
              var computedStyle,
                  element = this[0];
              if (!element) return;
              computedStyle = getComputedStyle(element, '');
              if (typeof property == 'string') return element.style[camelize(property)] || computedStyle.getPropertyValue(property);else if (isArray(property)) {
                var props = {};
                $.each(property, function (_, prop) {
                  props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
                });
                return props;
              }
            }

            var css = '';
            if (type(property) == 'string') {
              if (!value && value !== 0) this.each(function () {
                this.style.removeProperty(dasherize(property));
              });else css = dasherize(property) + ":" + maybeAddPx(property, value);
            } else {
              for (key in property) {
                if (!property[key] && property[key] !== 0) this.each(function () {
                  this.style.removeProperty(dasherize(key));
                });else css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
              }
            }

            return this.each(function () {
              this.style.cssText += ';' + css;
            });
          },
          index: function index(element) {
            return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
          },
          hasClass: function hasClass(name) {
            if (!name) return false;
            return emptyArray.some.call(this, function (el) {
              return this.test(className(el));
            }, classRE(name));
          },
          addClass: function addClass(name) {
            if (!name) return this;
            return this.each(function (idx) {
              if (!('className' in this)) return;
              classList = [];
              var cls = className(this),
                  newName = funcArg(this, name, idx, cls);
              newName.split(/\s+/g).forEach(function (klass) {
                if (!$(this).hasClass(klass)) classList.push(klass);
              }, this);
              classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
            });
          },
          removeClass: function removeClass(name) {
            return this.each(function (idx) {
              if (!('className' in this)) return;
              if (name === undefined) return className(this, '');
              classList = className(this);
              funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
                classList = classList.replace(classRE(klass), " ");
              });
              className(this, classList.trim());
            });
          },
          toggleClass: function toggleClass(name, when) {
            if (!name) return this;
            return this.each(function (idx) {
              var $this = $(this),
                  names = funcArg(this, name, idx, className(this));
              names.split(/\s+/g).forEach(function (klass) {
                (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
              });
            });
          },
          scrollTop: function scrollTop(value) {
            if (!this.length) return;
            var hasScrollTop = 'scrollTop' in this[0];
            if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
            return this.each(hasScrollTop ? function () {
              this.scrollTop = value;
            } : function () {
              this.scrollTo(this.scrollX, value);
            });
          },
          scrollLeft: function scrollLeft(value) {
            if (!this.length) return;
            var hasScrollLeft = 'scrollLeft' in this[0];
            if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
            return this.each(hasScrollLeft ? function () {
              this.scrollLeft = value;
            } : function () {
              this.scrollTo(value, this.scrollY);
            });
          },
          position: function position() {
            if (!this.length) return;

            var elem = this[0],


            // Get *real* offsetParent
            offsetParent = this.offsetParent(),


            // Get correct offsets
            offset = this.offset(),
                parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

            // Subtract element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            offset.top -= parseFloat($(elem).css('margin-top')) || 0;
            offset.left -= parseFloat($(elem).css('margin-left')) || 0;

            // Add offsetParent borders
            parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
            parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;

            // Subtract the two offsets
            return {
              top: offset.top - parentOffset.top,
              left: offset.left - parentOffset.left
            };
          },
          offsetParent: function offsetParent() {
            return this.map(function () {
              var parent = this.offsetParent || document.body;
              while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") {
                parent = parent.offsetParent;
              }return parent;
            });
          }
        };

        // for now
        $.fn.detach = $.fn.remove

        // Generate the `width` and `height` functions
        ;['width', 'height'].forEach(function (dimension) {
          var dimensionProperty = dimension.replace(/./, function (m) {
            return m[0].toUpperCase();
          });

          $.fn[dimension] = function (value) {
            var offset,
                el = this[0];
            if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
              el = $(this);
              el.css(dimension, funcArg(this, value, idx, el[dimension]()));
            });
          };
        });

        function traverseNode(node, fun) {
          fun(node);
          for (var i = 0, len = node.childNodes.length; i < len; i++) {
            traverseNode(node.childNodes[i], fun);
          }
        }

        // Generate the `after`, `prepend`, `before`, `append`,
        // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
        adjacencyOperators.forEach(function (operator, operatorIndex) {
          var inside = operatorIndex % 2; //=> prepend, append

          $.fn[operator] = function () {
            // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
            var argType,
                nodes = $.map(arguments, function (arg) {
              argType = type(arg);
              return argType == "object" || argType == "array" || arg == null ? arg : zepto.fragment(arg);
            }),
                parent,
                copyByClone = this.length > 1;
            if (nodes.length < 1) return this;

            return this.each(function (_, target) {
              parent = inside ? target : target.parentNode;

              // convert all methods to a "before" operation
              target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;

              var parentInDocument = $.contains(document.documentElement, parent);

              nodes.forEach(function (node) {
                if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();

                parent.insertBefore(node, target);
                if (parentInDocument) traverseNode(node, function (el) {
                  if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src) window['eval'].call(window, el.innerHTML);
                });
              });
            });
          };

          // after    => insertAfter
          // prepend  => prependTo
          // before   => insertBefore
          // append   => appendTo
          $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
            $(html)[operator](this);
            return this;
          };
        });

        zepto.Z.prototype = $.fn;

        // Export internal API functions in the `$.zepto` namespace
        zepto.uniq = uniq;
        zepto.deserializeValue = deserializeValue;
        $.zepto = zepto;

        return $;
      }();(function ($) {
        var _zid = 1,
            undefined,
            slice = Array.prototype.slice,
            isFunction = $.isFunction,
            isString = function isString(obj) {
          return typeof obj == 'string';
        },
            handlers = {},
            specialEvents = {},
            focusinSupported = 'onfocusin' in window,
            focus = { focus: 'focusin', blur: 'focusout' },
            hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' };

        specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

        function zid(element) {
          return element._zid || (element._zid = _zid++);
        }
        function findHandlers(element, event, fn, selector) {
          event = parse(event);
          if (event.ns) var matcher = matcherFor(event.ns);
          return (handlers[zid(element)] || []).filter(function (handler) {
            return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
          });
        }
        function parse(event) {
          var parts = ('' + event).split('.');
          return { e: parts[0], ns: parts.slice(1).sort().join(' ') };
        }
        function matcherFor(ns) {
          return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
        }

        function eventCapture(handler, captureSetting) {
          return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;
        }

        function realEvent(type) {
          return hover[type] || focusinSupported && focus[type] || type;
        }

        function add(element, events, fn, customData, selector, delegator, capture) {
          var id = zid(element),
              set = handlers[id] || (handlers[id] = []);
          events.split(/\s/).forEach(function (event) {
            if (event == 'ready') return $(document).ready(fn);
            var handler = parse(event);
            handler.fn = fn;
            handler.sel = selector;
            // emulate mouseenter, mouseleave
            if (handler.e in hover) fn = function fn(e) {
              var related = e.relatedTarget;
              if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
            };
            handler.del = delegator;
            var callback = delegator || fn;
            handler.proxy = function (e) {
              e = compatible(e);
              if (e.isImmediatePropagationStopped()) return;
              e.customData = customData;
              var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
              if (result === false) e.preventDefault(), e.stopPropagation();
              return result;
            };
            handler.i = set.length;
            set.push(handler);
            if ('addEventListener' in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
          });
        }
        function remove(element, events, fn, selector, capture) {
          var id = zid(element);(events || '').split(/\s/).forEach(function (event) {
            findHandlers(element, event, fn, selector).forEach(function (handler) {
              delete handlers[id][handler.i];
              if ('removeEventListener' in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
            });
          });
        }

        $.event = { add: add, remove: remove };

        $.proxy = function (fn, context) {
          var args = 2 in arguments && slice.call(arguments, 2);
          if (isFunction(fn)) {
            var proxyFn = function proxyFn() {
              return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
            };
            proxyFn._zid = zid(fn);
            return proxyFn;
          } else if (isString(context)) {
            if (args) {
              args.unshift(fn[context], fn);
              return $.proxy.apply(null, args);
            } else {
              return $.proxy(fn[context], fn);
            }
          } else {
            throw new TypeError("expected function");
          }
        };

        $.fn.bind = function (event, data, callback) {
          return this.on(event, data, callback);
        };
        $.fn.unbind = function (event, callback) {
          return this.off(event, callback);
        };
        $.fn.one = function (event, selector, data, callback) {
          return this.on(event, selector, data, callback, 1);
        };

        var returnTrue = function returnTrue() {
          return true;
        },
            returnFalse = function returnFalse() {
          return false;
        },
            ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
            eventMethods = {
          preventDefault: 'isDefaultPrevented',
          stopImmediatePropagation: 'isImmediatePropagationStopped',
          stopPropagation: 'isPropagationStopped'
        };

        function compatible(event, source) {
          if (source || !event.isDefaultPrevented) {
            source || (source = event);

            $.each(eventMethods, function (name, predicate) {
              var sourceMethod = source[name];
              event[name] = function () {
                this[predicate] = returnTrue;
                return sourceMethod && sourceMethod.apply(source, arguments);
              };
              event[predicate] = returnFalse;
            });

            if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
          }
          return event;
        }

        function createProxy(event) {
          var key,
              proxy = { originalEvent: event };
          for (key in event) {
            if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];
          }return compatible(proxy, event);
        }

        $.fn.delegate = function (selector, event, callback) {
          return this.on(event, selector, callback);
        };
        $.fn.undelegate = function (selector, event, callback) {
          return this.off(event, selector, callback);
        };

        $.fn.live = function (event, callback) {
          $(document.body).delegate(this.selector, event, callback);
          return this;
        };
        $.fn.die = function (event, callback) {
          $(document.body).undelegate(this.selector, event, callback);
          return this;
        };

        $.fn.on = function (event, selector, data, callback, one) {
          var autoRemove,
              delegator,
              $this = this;
          if (event && !isString(event)) {
            $.each(event, function (type, fn) {
              $this.on(type, selector, data, fn, one);
            });
            return $this;
          }

          if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;
          if (isFunction(data) || data === false) callback = data, data = undefined;

          if (callback === false) callback = returnFalse;

          return $this.each(function (_, element) {
            if (one) autoRemove = function autoRemove(e) {
              remove(element, e.type, callback);
              return callback.apply(this, arguments);
            };

            if (selector) delegator = function delegator(e) {
              var evt,
                  match = $(e.target).closest(selector, element).get(0);
              if (match && match !== element) {
                evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element });
                return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
              }
            };

            add(element, event, callback, data, selector, delegator || autoRemove);
          });
        };
        $.fn.off = function (event, selector, callback) {
          var $this = this;
          if (event && !isString(event)) {
            $.each(event, function (type, fn) {
              $this.off(type, selector, fn);
            });
            return $this;
          }

          if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;

          if (callback === false) callback = returnFalse;

          return $this.each(function () {
            remove(this, event, callback, selector);
          });
        };

        $.fn.trigger = function (event, args) {
          event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
          event._args = args;
          return this.each(function () {
            // handle focus(), blur() by calling them directly
            if (event.type in focus && typeof this[event.type] == "function") this[event.type]();
            // items in the collection might not be DOM elements
            else if ('dispatchEvent' in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);
          });
        };

        // triggers event handlers on current element just as if an event occurred,
        // doesn't trigger an actual event, doesn't bubble
        $.fn.triggerHandler = function (event, args) {
          var e, result;
          this.each(function (i, element) {
            e = createProxy(isString(event) ? $.Event(event) : event);
            e._args = args;
            e.target = element;
            $.each(findHandlers(element, event.type || event), function (i, handler) {
              result = handler.proxy(e);
              if (e.isImmediatePropagationStopped()) return false;
            });
          });
          return result;
        }

        // shortcut methods for `.bind(event, fn)` for each event type
        ;('focusin focusout focus blur load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
          $.fn[event] = function (callback) {
            return 0 in arguments ? this.bind(event, callback) : this.trigger(event);
          };
        });

        $.Event = function (type, props) {
          if (!isString(type)) props = type, type = props.type;
          var event = document.createEvent(specialEvents[type] || 'Events'),
              bubbles = true;
          if (props) for (var name in props) {
            name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
          }event.initEvent(type, bubbles, true);
          return compatible(event);
        };
      })(Zepto);(function ($) {
        var jsonpID = 0,
            document = window.document,
            key,
            name,
            rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            scriptTypeRE = /^(?:text|application)\/javascript/i,
            xmlTypeRE = /^(?:text|application)\/xml/i,
            jsonType = 'application/json',
            htmlType = 'text/html',
            blankRE = /^\s*$/,
            originAnchor = document.createElement('a');

        originAnchor.href = window.location.href;

        // trigger a custom event and return false if it was cancelled
        function triggerAndReturn(context, eventName, data) {
          var event = $.Event(eventName);
          $(context).trigger(event, data);
          return !event.isDefaultPrevented();
        }

        // trigger an Ajax "global" event
        function triggerGlobal(settings, context, eventName, data) {
          if (settings.global) return triggerAndReturn(context || document, eventName, data);
        }

        // Number of active Ajax requests
        $.active = 0;

        function ajaxStart(settings) {
          if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
        }
        function ajaxStop(settings) {
          if (settings.global && ! --$.active) triggerGlobal(settings, null, 'ajaxStop');
        }

        // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
        function ajaxBeforeSend(xhr, settings) {
          var context = settings.context;
          if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;

          triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
        }
        function ajaxSuccess(data, xhr, settings, deferred) {
          var context = settings.context,
              status = 'success';
          settings.success.call(context, data, status, xhr);
          if (deferred) deferred.resolveWith(context, [data, status, xhr]);
          triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
          ajaxComplete(status, xhr, settings);
        }
        // type: "timeout", "error", "abort", "parsererror"
        function ajaxError(error, type, xhr, settings, deferred) {
          var context = settings.context;
          settings.error.call(context, xhr, type, error);
          if (deferred) deferred.rejectWith(context, [xhr, type, error]);
          triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
          ajaxComplete(type, xhr, settings);
        }
        // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
        function ajaxComplete(status, xhr, settings) {
          var context = settings.context;
          settings.complete.call(context, xhr, status);
          triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
          ajaxStop(settings);
        }

        // Empty function, used as default callback
        function empty() {}

        $.ajaxJSONP = function (options, deferred) {
          if (!('type' in options)) return $.ajax(options);

          var _callbackName = options.jsonpCallback,
              callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'jsonp' + ++jsonpID,
              script = document.createElement('script'),
              originalCallback = window[callbackName],
              responseData,
              abort = function abort(errorType) {
            $(script).triggerHandler('error', errorType || 'abort');
          },
              xhr = { abort: abort },
              abortTimeout;

          if (deferred) deferred.promise(xhr);

          $(script).on('load error', function (e, errorType) {
            clearTimeout(abortTimeout);
            $(script).off().remove();

            if (e.type == 'error' || !responseData) {
              ajaxError(null, errorType || 'error', xhr, options, deferred);
            } else {
              ajaxSuccess(responseData[0], xhr, options, deferred);
            }

            window[callbackName] = originalCallback;
            if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);

            originalCallback = responseData = undefined;
          });

          if (ajaxBeforeSend(xhr, options) === false) {
            abort('abort');
            return xhr;
          }

          window[callbackName] = function () {
            responseData = arguments;
          };

          script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
          document.head.appendChild(script);

          if (options.timeout > 0) abortTimeout = setTimeout(function () {
            abort('timeout');
          }, options.timeout);

          return xhr;
        };

        $.ajaxSettings = {
          // Default type of request
          type: 'GET',
          // Callback that is executed before request
          beforeSend: empty,
          // Callback that is executed if the request succeeds
          success: empty,
          // Callback that is executed the the server drops error
          error: empty,
          // Callback that is executed on request complete (both: error and success)
          complete: empty,
          // The context for the callbacks
          context: null,
          // Whether to trigger "global" Ajax events
          global: true,
          // Transport
          xhr: function xhr() {
            return new window.XMLHttpRequest();
          },
          // MIME types mapping
          // IIS returns Javascript as "application/x-javascript"
          accepts: {
            script: 'text/javascript, application/javascript, application/x-javascript',
            json: jsonType,
            xml: 'application/xml, text/xml',
            html: htmlType,
            text: 'text/plain'
          },
          // Whether the request is to another domain
          crossDomain: false,
          // Default timeout
          timeout: 0,
          // Whether data should be serialized to string
          processData: true,
          // Whether the browser should be allowed to cache GET responses
          cache: true
        };

        function mimeToDataType(mime) {
          if (mime) mime = mime.split(';', 2)[0];
          return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
        }

        function appendQuery(url, query) {
          if (query == '') return url;
          return (url + '&' + query).replace(/[&?]{1,2}/, '?');
        }

        // serialize payload and append it to the URL for GET requests
        function serializeData(options) {
          if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
          if (options.data && (!options.type || options.type.toUpperCase() == 'GET')) options.url = appendQuery(options.url, options.data), options.data = undefined;
        }

        $.ajax = function (options) {
          var settings = $.extend({}, options || {}),
              deferred = $.Deferred && $.Deferred(),
              urlAnchor;
          for (key in $.ajaxSettings) {
            if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];
          }ajaxStart(settings);

          if (!settings.crossDomain) {
            urlAnchor = document.createElement('a');
            urlAnchor.href = settings.url;
            urlAnchor.href = urlAnchor.href;
            settings.crossDomain = originAnchor.protocol + '//' + originAnchor.host !== urlAnchor.protocol + '//' + urlAnchor.host;
          }

          if (!settings.url) settings.url = window.location.toString();
          serializeData(settings);

          var dataType = settings.dataType,
              hasPlaceholder = /\?.+=\?/.test(settings.url);
          if (hasPlaceholder) dataType = 'jsonp';

          if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)) settings.url = appendQuery(settings.url, '_=' + Date.now());

          if ('jsonp' == dataType) {
            if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');
            return $.ajaxJSONP(settings, deferred);
          }

          var mime = settings.accepts[dataType],
              headers = {},
              setHeader = function setHeader(name, value) {
            headers[name.toLowerCase()] = [name, value];
          },
              protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
              xhr = settings.xhr(),
              nativeSetHeader = xhr.setRequestHeader,
              abortTimeout;

          if (deferred) deferred.promise(xhr);

          if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');
          setHeader('Accept', mime || '*/*');
          if (mime = settings.mimeType || mime) {
            if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
            xhr.overrideMimeType && xhr.overrideMimeType(mime);
          }
          if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');

          if (settings.headers) for (name in settings.headers) {
            setHeader(name, settings.headers[name]);
          }xhr.setRequestHeader = setHeader;

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              xhr.onreadystatechange = empty;
              clearTimeout(abortTimeout);
              var result,
                  error = false;
              if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
                dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));
                result = xhr.responseText;

                try {
                  // http://perfectionkills.com/global-eval-what-are-the-options/
                  if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result);
                } catch (e) {
                  error = e;
                }

                if (error) ajaxError(error, 'parsererror', xhr, settings, deferred);else ajaxSuccess(result, xhr, settings, deferred);
              } else {
                ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);
              }
            }
          };

          if (ajaxBeforeSend(xhr, settings) === false) {
            xhr.abort();
            ajaxError(null, 'abort', xhr, settings, deferred);
            return xhr;
          }

          if (settings.xhrFields) for (name in settings.xhrFields) {
            xhr[name] = settings.xhrFields[name];
          }var async = 'async' in settings ? settings.async : true;
          xhr.open(settings.type, settings.url, async, settings.username, settings.password);

          for (name in headers) {
            nativeSetHeader.apply(xhr, headers[name]);
          }if (settings.timeout > 0) abortTimeout = setTimeout(function () {
            xhr.onreadystatechange = empty;
            xhr.abort();
            ajaxError(null, 'timeout', xhr, settings, deferred);
          }, settings.timeout);

          // avoid sending empty string (#319)
          xhr.send(settings.data ? settings.data : null);
          return xhr;
        };

        // handle optional data/success arguments
        function parseArguments(url, data, success, dataType) {
          if ($.isFunction(data)) dataType = success, success = data, data = undefined;
          if (!$.isFunction(success)) dataType = success, success = undefined;
          return {
            url: url,
            data: data,
            success: success,
            dataType: dataType
          };
        }

        $.get = function () /* url, data, success, dataType */{
          return $.ajax(parseArguments.apply(null, arguments));
        };

        $.post = function () /* url, data, success, dataType */{
          var options = parseArguments.apply(null, arguments);
          options.type = 'POST';
          return $.ajax(options);
        };

        $.getJSON = function () /* url, data, success */{
          var options = parseArguments.apply(null, arguments);
          options.dataType = 'json';
          return $.ajax(options);
        };

        $.fn.load = function (url, data, success) {
          if (!this.length) return this;
          var self = this,
              parts = url.split(/\s/),
              selector,
              options = parseArguments(url, data, success),
              callback = options.success;
          if (parts.length > 1) options.url = parts[0], selector = parts[1];
          options.success = function (response) {
            self.html(selector ? $('<div>').html(response.replace(rscript, "")).find(selector) : response);
            callback && callback.apply(self, arguments);
          };
          $.ajax(options);
          return this;
        };

        var escape = encodeURIComponent;

        function serialize(params, obj, traditional, scope) {
          var type,
              array = $.isArray(obj),
              hash = $.isPlainObject(obj);
          $.each(obj, function (key, value) {
            type = $.type(value);
            if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
            // handle data in serializeArray() format
            if (!scope && array) params.add(value.name, value.value);
            // recurse into nested objects
            else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);else params.add(key, value);
          });
        }

        $.param = function (obj, traditional) {
          var params = [];
          params.add = function (key, value) {
            if ($.isFunction(value)) value = value();
            if (value == null) value = "";
            this.push(escape(key) + '=' + escape(value));
          };
          serialize(params, obj, traditional);
          return params.join('&').replace(/%20/g, '+');
        };
      })(Zepto);(function ($) {
        $.fn.serializeArray = function () {
          var name,
              type,
              result = [],
              add = function add(value) {
            if (value.forEach) return value.forEach(add);
            result.push({ name: name, value: value });
          };
          if (this[0]) $.each(this[0].elements, function (_, field) {
            type = field.type, name = field.name;
            if (name && field.nodeName.toLowerCase() != 'fieldset' && !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' && (type != 'radio' && type != 'checkbox' || field.checked)) add($(field).val());
          });
          return result;
        };

        $.fn.serialize = function () {
          var result = [];
          this.serializeArray().forEach(function (elm) {
            result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
          });
          return result.join('&');
        };

        $.fn.submit = function (callback) {
          if (0 in arguments) this.bind('submit', callback);else if (this.length) {
            var event = $.Event('submit');
            this.eq(0).trigger(event);
            if (!event.isDefaultPrevented()) this.get(0).submit();
          }
          return this;
        };
      })(Zepto);(function ($) {
        // __proto__ doesn't exist on IE<11, so redefine
        // the Z function to use object extension instead
        if (!('__proto__' in {})) {
          $.extend($.zepto, {
            Z: function Z(dom, selector) {
              dom = dom || [];
              $.extend(dom, $.fn);
              dom.selector = selector || '';
              dom.__Z = true;
              return dom;
            },
            // this is a kludge but works
            isZ: function isZ(object) {
              return $.type(object) === 'array' && '__Z' in object;
            }
          });
        }

        // getComputedStyle shouldn't freak out when called
        // without a valid element as argument
        try {
          getComputedStyle(undefined);
        } catch (e) {
          var nativeGetComputedStyle = getComputedStyle;
          window.getComputedStyle = function (element) {
            try {
              return nativeGetComputedStyle(element);
            } catch (e) {
              return null;
            }
          };
        }
      })(Zepto);
      //scrollToTop
      ;(function ($) {
        // only allow one scroll to top operation to be in progress at a time,
        // which is probably what you want
        var scrollToTopInProgress = false;

        $.fn.scrollToTop = function (position, onEndCallback) {
          var $this = this,
              targetY = position || 0,
              initialY = $this.scrollTop(),
              lastY = initialY,
              delta = targetY - initialY,


          // duration in ms, make it a bit shorter for short distances
          // this is not scientific and you might want to adjust this for
          // your preferences
          speed = Math.min(750, Math.min(1500, Math.abs(initialY - targetY))),


          // temp variables (t will be a position between 0 and 1, y is the calculated scrollTop)
          start,
              t,
              y,


          // use requestAnimationFrame or polyfill
          frame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
            // make a timeStamp to callback,otherwise the arguments(now) will be undefined in ios4,5
            var currTime = new Date().getTime(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                timeOutId = setTimeout(function () {
              callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return timeOutId;
          },
              cancelScroll = function cancelScroll() {
            abort();
          };

          // abort if already in progress or nothing to scroll
          if (scrollToTopInProgress) return;
          if (delta == 0) return;

          // quint ease-in-out smoothing, from
          // https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js#L127-L136
          function smooth(pos) {
            if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 5);
            return 0.5 * (Math.pow(pos - 2, 5) + 2);
          }

          function abort() {
            $this.off('touchstart', cancelScroll);
            scrollToTopInProgress = false;
            if (typeof onEndCallback == 'function') onEndCallback.call(this, targetY);
          }

          // when there's a touch detected while scrolling is in progress, abort
          // the scrolling (emulates native scrolling behavior)
          $this.on('touchstart', cancelScroll);
          scrollToTopInProgress = true;

          // start rendering away! note the function given to frame
          // is named "render" so we can reference it again further down
          frame(function render(now) {
            if (!scrollToTopInProgress) return;
            if (!start) start = now;
            // calculate t, position of animation in [0..1]
            t = Math.min(1, Math.max((now - start) / speed, 0));
            // calculate the new scrollTop position (don't forget to smooth)
            y = Math.round(initialY + delta * smooth(t));
            // bracket scrollTop so we're never over-scrolling
            if (delta > 0 && y > targetY) y = targetY;
            if (delta < 0 && y < targetY) y = targetY;
            // only actually set scrollTop if there was a change fromt he last frame
            if (lastY != y) $this.scrollTop(y);
            lastY = y;
            // if we're not done yet, queue up an other frame to render,
            // or clean up
            if (y !== targetY) frame(render);else abort();
          });
        };
      })(Zepto);

      // animate
      ;(function ($, undefined) {
        var prefix = '',
            eventPrefix,
            vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
            testEl = document.createElement('div'),
            supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            transform,
            transitionProperty,
            transitionDuration,
            transitionTiming,
            transitionDelay,
            animationName,
            animationDuration,
            animationTiming,
            animationDelay,
            cssReset = {};

        function dasherize(str) {
          return str.replace(/([A-Z])/g, '-$1').toLowerCase();
        }
        function normalizeEvent(name) {
          return eventPrefix ? eventPrefix + name : name.toLowerCase();
        }

        if (testEl.style.transform === undefined) $.each(vendors, function (vendor, event) {
          if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
            prefix = '-' + vendor.toLowerCase() + '-';
            eventPrefix = event;
            return false;
          }
        });

        transform = prefix + 'transform';
        cssReset[transitionProperty = prefix + 'transition-property'] = cssReset[transitionDuration = prefix + 'transition-duration'] = cssReset[transitionDelay = prefix + 'transition-delay'] = cssReset[transitionTiming = prefix + 'transition-timing-function'] = cssReset[animationName = prefix + 'animation-name'] = cssReset[animationDuration = prefix + 'animation-duration'] = cssReset[animationDelay = prefix + 'animation-delay'] = cssReset[animationTiming = prefix + 'animation-timing-function'] = '';

        $.fx = {
          off: eventPrefix === undefined && testEl.style.transitionProperty === undefined,
          speeds: { _default: 400, fast: 200, slow: 600 },
          cssPrefix: prefix,
          transitionEnd: normalizeEvent('TransitionEnd'),
          animationEnd: normalizeEvent('AnimationEnd')
        };

        $.fn.animate = function (properties, duration, ease, callback, delay) {
          if ($.isFunction(duration)) callback = duration, ease = undefined, duration = undefined;
          if ($.isFunction(ease)) callback = ease, ease = undefined;
          if ($.isPlainObject(duration)) ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration;
          if (duration) duration = (typeof duration == 'number' ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1000;
          if (delay) delay = parseFloat(delay) / 1000;
          return this.anim(properties, duration, ease, callback, delay);
        };

        $.fn.anim = function (properties, duration, ease, callback, delay) {
          var key,
              cssValues = {},
              cssProperties,
              transforms = '',
              that = this,
              _wrappedCallback,
              endEvent = $.fx.transitionEnd,
              fired = false;

          if (duration === undefined) duration = $.fx.speeds._default / 1000;
          if (delay === undefined) delay = 0;
          if ($.fx.off) duration = 0;

          if (typeof properties == 'string') {
            // keyframe animation
            cssValues[animationName] = properties;
            cssValues[animationDuration] = duration + 's';
            cssValues[animationDelay] = delay + 's';
            cssValues[animationTiming] = ease || 'linear';
            endEvent = $.fx.animationEnd;
          } else {
            cssProperties = [];
            // CSS transitions
            for (key in properties) {
              if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') ';else cssValues[key] = properties[key], cssProperties.push(dasherize(key));
            }if (transforms) cssValues[transform] = transforms, cssProperties.push(transform);
            if (duration > 0 && (typeof properties === 'undefined' ? 'undefined' : _typeof(properties)) === 'object') {
              cssValues[transitionProperty] = cssProperties.join(', ');
              cssValues[transitionDuration] = duration + 's';
              cssValues[transitionDelay] = delay + 's';
              cssValues[transitionTiming] = ease || 'linear';
            }
          }

          _wrappedCallback = function wrappedCallback(event) {
            if (typeof event !== 'undefined') {
              if (event.target !== event.currentTarget) return; // makes sure the event didn't bubble from "below"
              $(event.target).unbind(endEvent, _wrappedCallback);
            } else $(this).unbind(endEvent, _wrappedCallback); // triggered by setTimeout

            fired = true;
            $(this).css(cssReset);
            callback && callback.call(this);
          };
          if (duration > 0) {
            this.bind(endEvent, _wrappedCallback);
            // transitionEnd is not always firing on older Android phones
            // so make sure it gets fired
            setTimeout(function () {
              if (fired) return;
              _wrappedCallback.call(that);
            }, (duration + delay) * 1000 + 25);
          }

          // trigger page reflow so new elements can animate
          this.size() && this.get(0).clientLeft;

          this.css(cssValues);

          if (duration <= 0) setTimeout(function () {
            that.each(function () {
              _wrappedCallback.call(this);
            });
          }, 0);

          return this;
        };

        testEl = null;
      })(Zepto);

      // show/hide/toggle/fadeIn/fadeOut/fadeTo/fadeToggle
      ;(function ($, undefined) {
        var document = window.document,
            docElem = document.documentElement,
            origShow = $.fn.show,
            origHide = $.fn.hide,
            origToggle = $.fn.toggle;

        function anim(el, speed, opacity, scale, callback) {
          if (typeof speed == 'function' && !callback) callback = speed, speed = undefined;
          var props = { opacity: opacity };
          if (scale) {
            props.scale = scale;
            el.css($.fx.cssPrefix + 'transform-origin', '0 0');
          }
          return el.animate(props, speed, null, callback);
        }

        function hide(el, speed, scale, callback) {
          return anim(el, speed, 0, scale, function () {
            origHide.call($(this));
            callback && callback.call(this);
          });
        }

        $.fn.show = function (speed, callback) {
          origShow.call(this);
          if (speed === undefined) speed = 0;else this.css('opacity', 0);
          return anim(this, speed, 1, '1,1', callback);
        };

        $.fn.hide = function (speed, callback) {
          if (speed === undefined) return origHide.call(this);else return hide(this, speed, '0,0', callback);
        };

        $.fn.toggle = function (speed, callback) {
          if (speed === undefined || typeof speed == 'boolean') return origToggle.call(this, speed);else return this.each(function () {
            var el = $(this);
            el[el.css('display') == 'none' ? 'show' : 'hide'](speed, callback);
          });
        };

        $.fn.fadeTo = function (speed, opacity, callback) {
          return anim(this, speed, opacity, null, callback);
        };

        $.fn.fadeIn = function (speed, callback) {
          var target = this.css('opacity');
          if (target > 0) this.css('opacity', 0);else target = 1;
          return origShow.call(this).fadeTo(speed, target, callback);
        };

        $.fn.fadeOut = function (speed, callback) {
          return hide(this, speed, null, callback);
        };

        $.fn.fadeToggle = function (speed, callback) {
          return this.each(function () {
            var el = $(this);
            el[el.css('opacity') == 0 || el.css('display') == 'none' ? 'fadeIn' : 'fadeOut'](speed, callback);
          });
        };
      })(Zepto);

      if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return Zepto;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') module.exports = Zepto;else _gol.Zepto = Zepto;

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=main.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div class=\"J-layer-wrap\">	<div class=\"layer\">${msg}</div></div>"

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(arr);
    }

    return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
    if (!obj || toStr.call(obj) !== '[object Object]') {
        return false;
    }

    var hasOwnConstructor = hasOwn.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key = void 0;
    for (key in obj) {/**/}

    return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
    var options = void 0,
        name = void 0,
        src = void 0,
        copy = void 0,
        copyIsArray = void 0,
        clone = void 0;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    } else if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && typeof target !== 'function' || target == null) {
        target = {};
    }

    for (; i < length; ++i) {
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) {
            // Extend the base object
            for (name in options) {
                src = target[name];
                copy = options[name];

                // Prevent never-ending loop
                if (target !== copy) {
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (typeof copy !== 'undefined') {
                        target[name] = copy;
                    }
                }
            }
        }
    }

    // Return the modified object
    return target;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(2);

var Global = window || undefined;

var Hash = function () {
  function Hash() {
    _classCallCheck(this, Hash);

    this.catchHash = '';
  }

  _createClass(Hash, [{
    key: 'init',
    value: function init(fn) {
      var that = this;
      Global.setTimeout(function () {
        Global.onhashchange = function (evn) {
          if (evn.newURL === evn.oldURL && evn.newURL === '') return;
          fn && fn.call(that, evn);
        };
      }, 1);
    }
  }, {
    key: '_check',
    value: function _check() {
      return Global.location.hash.charAt(0) == '#';
    }
  }, {
    key: '_Uuid',
    value: function _Uuid() {
      return new Date().getTime();
    }
  }, {
    key: 'del',
    value: function del() {
      var that = this;
      Global.history.replaceState(null, '', Global.location.href.replace(that.catchHash, ''));
      Global.onhashchange = null;
    }
  }, {
    key: '_get',
    value: function _get() {
      return Global.location.hash || location.hash;
    }
  }, {
    key: 'get',
    value: function get() {
      var that = this;
      if (that._check()) return Global.location.hash.replace(/^[^#]*#/, '').replace(/^#+|#+$/, '');
      return that._get();
    }
  }, {
    key: 'set',
    value: function set(hash) {
      var that = this;
      var old = that.get();
      if (hash == 'auto' || !hash) hash = '#' + that._Uuid();
      if (hash.charAt(0) != '#') hash = '#' + hash;
      if (old.indexOf(hash) > -1) return;
      that.catchHash = hash;
      Global.location.hash = old + hash;
      return that;
    }
  }]);

  return Hash;
}();

module.exports = new Hash();

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * ChangeSkin
 * 功能：网页换肤；
 * 说明：
 *
 * cookieName --------- 传入需要换肤的cookie名称
 * 传入新的cookieName，需要新建对应的css文件
 *
 */
var util = __webpack_require__(2);
var Cookie = __webpack_require__(4);
var _glo = window || undefined;
var CHANGE_NAME = ['iscbc', 'ismaster'];

var ChangeSkin = function () {
    function ChangeSkin(opt) {
        _classCallCheck(this, ChangeSkin);

        this.opt = {
            cookieName: 'iscbc'
        };
        if (Object.prototype.toString.call(opt) === '[object Object]' && JSON.stringify(opt) !== '{}') {
            util._extend(this.opt, opt);
        }
        this.init();
    }

    _createClass(ChangeSkin, [{
        key: 'init',
        value: function init() {
            this.cacheData();
            this.cacheDOM();
            if (this.data.cookie) {
                if (!this.dom.wrap.classList.contains(this.data.cookie)) {
                    this.dom.wrap.classList.add('J-' + this.data.cookie, 'J-P-' + util.plateForm().os);
                }
                this.getConfig(this.data.cookie);
            }
        }
    }, {
        key: 'cacheData',
        value: function cacheData() {
            this.data = {};
            // this.data.cookie = this.opt.cookieName && Cookie.get(this.opt.cookieName);
            this.data.cookie = function (arr) {
                var res = '';
                for (var index = 0, length = arr.length; index < length; index++) {
                    Cookie.get(arr[index]) == 1 && (res = arr[index]);
                }
                return res;
            }(CHANGE_NAME);
        }
    }, {
        key: 'cacheDOM',
        value: function cacheDOM() {
            this.dom = {
                wrap: document.querySelector('body')
            };
        }
    }, {
        key: 'getConfig',
        value: function getConfig(css) {
            switch (css) {
                case 'iscbc':
                    __webpack_require__.e/* require */(1).then(function() {[__webpack_require__(24)];}).catch(__webpack_require__.oe);
                    break;
                case 'ismaster':
                    __webpack_require__.e/* require */(0).then(function() {[__webpack_require__(25)];}).catch(__webpack_require__.oe);
            }
        }
    }]);

    return ChangeSkin;
}();

if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return ChangeSkin;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') module.exports = ChangeSkin;else _glo.ChangeSkin = ChangeSkin;

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
        var a = factory();
        for (var i in a) {
            ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
        }
    }
})(undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId])
                    /******/return installedModules[moduleId].exports;
                /******/
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // identity function for calling harmony imports with the correct context
            /******/__webpack_require__.i = function (value) {
                return value;
            };
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "/";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 0);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var __WEBPACK_AMD_DEFINE_RESULT__; /*
                                               * Utils - 1.0.0
                                               * 功能：公共方法
                                               * 说明：***
                                               * 参数： {
                                               **
                                               * }
                                               */

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            var _gol = window || undefined;

            var Utils = {
                _getRequestParam: function _getRequestParam(param, uri) {
                    var value = void 0;
                    uri = uri || window.location.href;
                    value = uri.match(new RegExp('[\?\&]' + param + '=([^\&\#]*)([\&\#]?)', 'i'));
                    return value ? decodeURIComponent(value[1]) : value;
                },
                _getQueryJson: function _getQueryJson() {
                    // let ret = {}; //定义数组
                    // window.location.search.substr(1).replace(/(\w+)=(\w+)/ig, function (a, b, c) {
                    //     ret[b] = unescape(c);
                    // });
                    // return ret;
                    return Utils._getQueryObjJson();
                },
                _getQueryObjJson: function _getQueryObjJson(u) {
                    var obj = {};
                    var keyvalue = [];
                    var key = '',
                        value = '';
                    var url = u || window.location.href;
                    var paraString = url.substring(url.indexOf('?') + 1, url.length).replace(/#.+/, '').split('&');
                    for (var i in paraString) {
                        keyvalue = paraString[i].split('=');
                        key = keyvalue[0];
                        value = keyvalue[1];
                        obj[key] = decodeURIComponent(value);
                    }
                    return obj;
                },
                _symbol: function _symbol(n) {
                    return (n + '').replace(/(?=(?!\b)(\d{3})+$)/g, ',');
                },
                _isWX: function _isWX() {
                    var plateForm = this._plateForm();
                    return plateForm.app == 'micromessenger';
                },
                _isIOS: function _isIOS() {
                    var plateForm = this._plateForm();
                    return plateForm.os == 'iphone' || plateForm.os == 'cpu';
                },
                _isAndroid: function _isAndroid() {
                    var plateForm = this._plateForm();
                    return plateForm.os == 'android' || plateForm.os == 'linux';
                },
                _plateForm: function _plateForm() {
                    var that = this;
                    var UA = navigator.userAgent.toLowerCase();
                    var res = {};
                    var OS = [/(cpu|iphone)\sos\s([\d]+)/, /(linux|android)\s([\d]+)/],
                        APP = [/(micromessenger)\/([\d.]+)?/, /(hbcc|hbcg)\/([\d.]+)/],
                        PC = [/(chrome)\/([\d.]+)/, /(safari)\/([\d.]+)/, /(firefox)\/([\d.]+)/, /(msie)\/([\d.]+)/];

                    OS.forEach(function (v, i) {
                        var ma = UA.match(v);
                        if (ma) {
                            that._extend(res, {
                                os: ma[1],
                                version: ma[2]
                            });
                        }
                    });
                    if (res.os) {
                        APP.forEach(function (a, j) {
                            var tch = UA.match(a);
                            if (tch) {
                                that._extend(res, {
                                    app: tch[1],
                                    edition: tch[2]
                                });
                            }
                        });
                    } else {
                        PC.forEach(function (v, i) {
                            var ma = UA.match(v);
                            if (ma) {
                                that._extend(res, {
                                    os: ma[1],
                                    version: ma[2]
                                });
                            }
                        });
                    }
                    return res;
                },
                _bindScrollToWrapBtm: function _bindScrollToWrapBtm(callback, wrap, tag) {
                    var timeout = null;

                    function interval(callback, tag) {
                        // timeout = setTimeout(function() {
                        check();
                        // }, 0);
                    }

                    function detach() {
                        if (!wrap[0]) {
                            return;
                        }
                        wrap[0].removeEventListener('scroll', interval, false);
                        wrap[0].removeEventListener('resize', interval, false);
                    }

                    function check() {
                        interval && clearTimeout(timeout);
                        if (!wrap[0]) {
                            return;
                        }
                        var winHeight = window.innerHeight,
                            scrollTop = wrap[0].scrollTop,
                            i = 0,
                            offset;

                        offset = wrap ? wrap[0].scrollHeight : document.body.scrollHeight;

                        if (scrollTop + winHeight + 350 >= offset) {
                            detach();
                            callback && tag && callback();
                        }
                    }

                    if (!wrap[0]) {
                        return;
                    }
                    // detach();
                    wrap[0].addEventListener('scroll', interval, false);
                    wrap[0].addEventListener('resize', interval, false);
                },
                _bindScrollTobottom: function _bindScrollTobottom(callback, tag) {
                    function interval() {
                        setTimeout(function () {
                            check();
                        }, 3);
                    }

                    function detach() {
                        window.removeEventListener('scroll', interval, false);
                        window.removeEventListener('resize', interval, false);
                    }

                    function check() {
                        var winHeight = window.innerHeight,
                            scrollTop = window.pageYOffset,
                            i = 0,
                            offset = void 0;

                        offset = document.body.scrollHeight;

                        if (scrollTop + winHeight + 50 >= offset) {
                            detach();
                            callback && tag && callback();
                        }
                    }

                    window.addEventListener('scroll', interval, false);
                    window.addEventListener('resize', interval, false);
                },
                _extend: function _extend() {
                    var y = 1,
                        len = arguments.length,
                        deepCopy = function deepCopy(sub, base) {
                        var i = void 0;
                        for (i in base) {
                            if (base === undefined || base === null) continue;
                            if (base.hasOwnProperty(i)) sub[i] = base[i];
                        }
                    };
                    if (Object.assign) return Object.assign.apply(Object, arguments);
                    if (arguments[0].extend) return arguments[0].extend(arguments.slice(1));
                    for (; y < len; y++) {
                        deepCopy(arguments[0], arguments[y]);
                    }return arguments[0];
                },
                _lazyLoad: function _lazyLoad($, cls, attr) {
                    var _$ = _gol.$ || _gol.Zepto || $;
                    var $el = _$(cls || '.lazy-image');
                    var attr = attr || 'lazy-url';

                    function interval() {
                        setTimeout(function () {
                            check();
                        }, 30);
                    }

                    function detach() {
                        window.removeEventListener('scroll', interval, false);
                        window.removeEventListener('resize', interval, false);
                    }

                    function check() {
                        var winHeight = window.innerHeight,
                            scrollTop = window.pageYOffset,
                            i = 0,
                            con,
                            img,
                            offset;

                        while (i < $el.length) {
                            con = _$($el[i]);
                            offset = con.offset();
                            if (scrollTop + winHeight + 20 >= offset.top) {
                                con.css({
                                    'backgroundImage': 'url(' + con.attr(attr) + ')'
                                });
                                con.removeClass(cls || 'lazy-image');
                                [].splice.call($el, i, 1);
                                i--;
                                if (!$el.length) {
                                    detach();
                                }
                            }
                            i++;
                        }
                    }
                    window.addEventListener('scroll', interval, false);
                    window.addEventListener('resize', interval, false);

                    check();
                },

                _contains: function _contains(root, node) {
                    root = root.length > 0 ? root[0] : root;
                    node = node.length > 0 ? node[0] : node;
                    if (root.contains) return root != node && root.contains(node);else if (root.compareDocumentPosition) return !!(root.compareDocumentPosition(node) & 16);else if (node) {
                        while (node = node.parentNode) {
                            if (node === root) return true;
                        }
                    }
                    return false;
                },
                _setParam: function _setParam(obj) {
                    var arr = [];
                    for (var name in obj) {
                        arr.push(name + '=' + JSON.stringify(obj[name]));
                    }
                    return arr.join('&');
                },
                _nl2br: function _nl2br(str) {
                    var regRN = /\r\n/g;
                    str = str || '';
                    return str.replace(regRN, '<br />');
                },
                _ellipsis: function _ellipsis(text) {
                    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 22;

                    var reg = /[^\x00-\xff]/g;
                    var length = text.replace(reg, 'aa').length;
                    var realLen = function realLen(str, len) {
                        var _str = str.split(''),
                            _len = 0,
                            _res = 0;
                        for (var i = 0, lens = _str.length; i < lens; i++) {
                            if (_len >= len) break;
                            if (reg.test(_str[i])) _len += 2;else _len += 1;
                            _res = i;
                        };
                        return _res || 1;
                    };
                    if (length > len) return text.slice(0, realLen(text, len)) + '...';
                    return text;
                }
            };

            if (true) {
                !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return Utils;
                }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') module.exports = Utils;else _gol.Utils = Utils;

            /***/
        }]
        /******/)
    );
});
//# sourceMappingURL=main.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(0);
var apiConfig = __webpack_require__(6);
var loading = __webpack_require__(8);
var ajax = __webpack_require__(3);
var tplItem = __webpack_require__(27);
var juicer = __webpack_require__(1);
var util = __webpack_require__(2);
var IScroll = __webpack_require__(28);
var PopCoupon = __webpack_require__(29);
var ComImg = __webpack_require__(46);
var LazyLoad = __webpack_require__(47);
__webpack_require__(12);
__webpack_require__(7);
__webpack_require__(48);
__webpack_require__(19);
new (__webpack_require__(20))();

var City = function () {
    function City() {
        _classCallCheck(this, City);

        this.cacheData();
        this.cacheDom();
        this.lazyload = new LazyLoad({ elements_selector: '.lazy' });
        this.bindEvent();
        if ($('.scroll').length > 0) {
            this.renderIsroll();
        }
        this.addJuicerHelper();
        if (this.param.offset == this.param.limit) {
            this.bindNext();
        }
    }

    _createClass(City, [{
        key: 'cacheData',
        value: function cacheData() {
            var that = this;
            that.data = {};
            that.data.img = {
                guide: 'https://fr-static.huangbaoche.com/20180313/guide.0ca8d80948c9964b.png',
                errorGood: 'https://fr-static.huangbaoche.com/20180313/item-pic.5892363124cb5877.png',
                errorGuide: 'https://fr-static.huangbaoche.com/20180313/error-guide.9a12fc16b757cd33.png'
            };
            that.param = {
                // cityId: util.getRequestParam('cityId'),
                cityHeadPicSize: 750, // 城市头图图片大小（默认201）
                themeId: 0, // 主题ID 多选逗号分隔，不限传0
                daysCountMin: 0, // 包车天数最小值（1天时传1，多天时传2，不限传0）
                daysCountMax: 0, // 包车天数最大值（1天时传1，多天时传0，不限传0）
                goodsClass: 0, // 商品类型：1，超省心（固定线路）；2，超自由（推荐线路）；不限传0
                channelId: util.getRightChannelId(),
                offset: $('.item').length,
                limit: 10
            };
            // 获取城市id
            that.param.cityId = that.getCityId();

            that._scroll = '';
            that.__iscroll = null; // IScroll
        }
    }, {
        key: 'cacheDom',
        value: function cacheDom() {
            var that = this;
            that.dom = {
                wrap: $('#page'),
                back: $('.back'),
                search: $('.search'),
                navCar: $('.nav-car'),
                navPlane: $('.nav-plane'),
                navSingle: $('.nav-single'),
                menu: $('.menu'),
                menuB: $('.menu-bg'),
                list: $('.list'),
                listCount: $('.line-count'),
                items: $('.list .item'),
                empty: $('.empty'),
                menuItem: $('.menu-item'),
                menuTypes: $('#menu-type li'),
                menuDays: $('#menu-day li'),
                menuThemes: $('#menu-theme li'),
                menuTypeReset: $('#menu-type-reset'),
                menuTypeConfirm: $('#menu-type-confirm'),
                menuDayReset: $('#menu-day-reset'),
                menuDayConfirm: $('#menu-day-confirm'),
                menuThemeReset: $('#menu-theme-reset'),
                menuThemeConfirm: $('#menu-theme-confirm'),
                emptyLine: $('.empty-line')
            };
        }
    }, {
        key: 'renderIsroll',
        value: function renderIsroll() {
            var that = this;
            that.__iscroll = new IScroll('.scroll', {
                click: true,
                mouseWheel: true
            });
        }
    }, {
        key: 'getList',
        value: function getList(type) {
            var that = this;
            loading.init();
            var url = '/api/goods/1.4/cityDetail';
            var opt = {
                url: url,
                method: 'GET',
                header: {},
                data: that.param,
                success: function success(ret) {
                    if (ret.status === 200 && ret.data.goodses.length) {

                        if (ret.data.goodses.length == that.param.limit) {

                            that.param.offset = that.param.offset + that.param.limit;
                            that.renderList(ret.data);
                            that.bindNext();
                        } else {
                            that.renderList(ret.data);
                        }
                        this.lazyload = new LazyLoad({ elements_selector: '.lazy' });
                    }
                    if (type == 'reset' && ret.data.goodses.length > 0) {
                        $('.empty-menu').hide();
                    } else if (type == 'reset' && ret.data.goodses.length == 0) {
                        $('.empty-menu').show();
                    }
                    loading.remove();
                }
            };
            ajax.sendRequest(opt);
        }
    }, {
        key: 'getCityId',
        value: function getCityId() {
            return util.getRequestParam('cityId') || location.href.match(/city\/([^?]*)/)[1];
        }
    }, {
        key: 'resetList',
        value: function resetList() {
            var that = this;
            // util.removeEventListener();
            that._scroll && that._scroll();
            that.dom.list.html('');
            that.param.offset = 0;
            that.param.limit = 10;

            that.getList('reset');
        }
    }, {
        key: 'renderList',
        value: function renderList(data) {
            var that = this;
            that.cacheDom();
            data.img = that.data.img;
            that.dom.list.append(juicer(tplItem, data));
        }
    }, {
        key: 'bindNext',
        value: function bindNext() {
            var that = this;
            that._scroll = util._bindScrollTobottom(function () {
                that.getList();
            }, true);
        }
    }, {
        key: 'addJuicerHelper',
        value: function addJuicerHelper() {
            juicer.register('priceInfo', function (price) {
                if (!price) {
                    return '';
                }
                var infoleft = price.replace(/起\/人/, '<span>起/人');
                var infoRight = infoleft + '</span>';
                return infoRight.replace(/¥/, '<small>¥</small>');
            });
            juicer.register('handleImg', function (str, w, h) {
                var imgRule = 'x-oss-process=image/resize,m_fill,limit_0,w_' + (w ? w : 660) + ',h_' + (h ? h : 355) + '/format,jpg/interlace,1/quality,q_85';
                return str ? new ComImg({
                    url: str,
                    param: imgRule
                }).getUrl() : '';
            });
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var that = this;
            that.cacheDom();

            function finish() {
                var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hide';

                if (tag == 'hide') {
                    that.dom.menuB.hide();
                    $('body').off('touchmove');
                } else {
                    that.dom.menuB.show();
                    // 添加滚动到360
                    $('body').on('touchmove', function (e) {
                        e.preventDefault();
                    });
                }
            }

            function selected() {
                var items = $('.menu-select ul li');
                var itemsType = $('#menu-type li');
                var itemsDay = $('#menu-day li');
                var itemsTheme = $('#menu-theme li');
                items.removeClass('selected');
                if (that.param.goodsClass) {
                    for (var i = 0; i < itemsType.length; i++) {
                        if (that.param.goodsClass == $(itemsType[i]).attr('data-id')) {
                            $(itemsType[i]).addClass('selected');
                            break;
                        }
                    }
                }
                if (that.param.goodsClass) {
                    for (var _i = 0; _i < itemsType.length; _i++) {
                        if (that.param.goodsClass == $(itemsType[_i]).attr('data-id')) {
                            $(itemsType[_i]).addClass('selected');
                            break;
                        }
                    }
                }
                if (that.param.daysCountMin || that.param.daysCountMax) {
                    for (var _i2 = 0; _i2 < itemsDay.length; _i2++) {
                        if (that.param.daysCountMin == $(itemsDay[_i2]).attr('data-min') && that.param.daysCountMax == $(itemsDay[_i2]).attr('data-max')) {
                            $(itemsDay[_i2]).addClass('selected');
                            break;
                        }
                    }
                }
                if (that.param.themeId) {
                    var themes = that.param.themeId.split(',');
                    for (var _i3 = 0; _i3 < themes.length; _i3++) {
                        for (var j = 0; j < itemsTheme.length; j++) {
                            if (themes[_i3] == $(itemsTheme[j]).attr('data-id')) {
                                $(itemsTheme[j]).addClass('selected');
                                break;
                            }
                        }
                    }
                }
            }

            $(window).off('scroll').on('scroll', function () {
                var t = $(window).scrollTop();
                if (t > 350) {
                    that.dom.menu.addClass('menuFix');
                } else {
                    that.dom.menu.removeClass('menuFix');
                }
            });
            $(window).on('touchstart', function () {
                var t = $(window).scrollTop();
                if (t > 350) {
                    that.dom.menu.addClass('menuFix');
                } else {
                    that.dom.menu.removeClass('menuFix');
                }
            });
            $(window).on('touchmove', function () {
                var t = $(window).scrollTop();
                if (t > 350) {
                    that.dom.menu.addClass('menuFix');
                } else {
                    that.dom.menu.removeClass('menuFix');
                }
            });
            $(window).on('touchend', function () {
                var t = $(window).scrollTop();
                if (t > 350) {
                    that.dom.menu.addClass('menuFix');
                } else {
                    that.dom.menu.removeClass('menuFix');
                }
            });

            that.dom.menuB.on('click', function () {
                that.dom.menuItem.removeClass('menu-item-check');
                selected();
                finish('hide');
            });
            $('.menu-select').on('click', function (e) {
                e.stopPropagation();
            });

            that.dom.back.on('click', function () {
                history.back();
                return false;
            });

            that.dom.search.on('click', function () {
                window.location.href = apiConfig.domainHost + 'app/searchCity.html';
                return false;
            });

            that.dom.navCar.on('click', function () {
                window.location.href = apiConfig.domainHost + 'app/daily.html?cityId=' + that.param.cityId;
                return false;
            });
            that.dom.navPlane.on('click', function () {
                window.location.href = apiConfig.domainHost + 'app/pickup.html';
                // window.location.href = '/transfer';
                return false;
            });
            that.dom.navSingle.on('click', function () {
                var cityName = $('.hackmaxAuto h1').text();
                window.location.href = apiConfig.domainHost + 'app/single.html?cityId=' + that.param.cityId + '&cityName=' + cityName;
                return false;
            });

            $('body').on('click', '.item', function (e) {
                var tag = $(e.currentTarget);
                window.location.href = '/goods/detail/' + tag.attr('data-goodsNo');
            });

            that.dom.menuItem.on('click', function (e) {
                var tag = $(e.currentTarget);
                var t = $(window).scrollTop();

                if (t < 350) {
                    $(window).scrollTop(360);
                }
                if (tag.hasClass('menu-item-check')) {
                    tag.removeClass('menu-item-check');
                    finish('hide');
                } else {
                    that.dom.menuItem.removeClass('menu-item-check');
                    tag.addClass('menu-item-check');
                    finish('show');
                    that.__iscroll.refresh();
                }
                selected();
                return false;
            });

            that.dom.menuTypes.on('click', function (e) {
                var tag = $(e.currentTarget);
                if (tag.hasClass('selected')) {
                    tag.removeClass('selected');
                } else {
                    that.dom.menuTypes.removeClass('selected');
                    tag.addClass('selected');
                }
                return false;
            });
            that.dom.menuTypeReset.on('click', function () {
                that.dom.menuTypes.removeClass('selected');
                return false;
            });
            that.dom.menuTypeConfirm.on('click', function () {
                var tag = $('#menu-type').find('.selected');
                var id = tag.attr('data-id');
                var text = tag.attr('data-text');
                if (id) {
                    that.param.goodsClass = id;
                    $('#menu-type-text').text(text);
                } else {
                    that.param.goodsClass = '0';
                    $('#menu-type-text').text('类型');
                }
                console.log(that.param.goodsClass);
                finish('hide');
                that.dom.menuItem.removeClass('menu-item-check');
                that.resetList();
                selected();
                return false;
            });

            that.dom.menuDays.on('click', function (e) {
                var tag = $(e.currentTarget);
                if (tag.hasClass('selected')) {
                    tag.removeClass('selected');
                } else {
                    that.dom.menuDays.removeClass('selected');
                    tag.addClass('selected');
                }
                return false;
            });
            that.dom.menuDayReset.on('click', function () {
                that.dom.menuDays.removeClass('selected');
                return false;
            });
            that.dom.menuDayConfirm.on('click', function () {

                var tag = $('#menu-day').find('.selected');
                var min = tag.attr('data-min');
                var max = tag.attr('data-max');
                var text = tag.attr('data-text');
                if (min || max) {
                    that.param.daysCountMin = tag.attr('data-min');
                    that.param.daysCountMax = tag.attr('data-max');
                    $('#menu-day-text').text(text);
                } else {
                    that.param.daysCountMin = '0';
                    that.param.daysCountMax = '0';
                    $('#menu-day-text').text('天数');
                }
                finish('hide');
                that.dom.menuItem.removeClass('menu-item-check');
                that.resetList();
                selected();
                return false;
            });

            that.dom.menuThemes.on('click', function (e) {
                var tag = $(e.currentTarget);
                if (tag.hasClass('selected')) {
                    tag.removeClass('selected');
                } else {
                    tag.addClass('selected');
                }
                return false;
            });

            that.dom.menuThemeReset.on('click', function () {
                that.dom.menuThemes.removeClass('selected');
                return false;
            });
            that.dom.menuThemeConfirm.on('click', function () {
                var theme = '';
                var text = '';
                var tags = $('#menu-theme').find('li.selected');
                for (var i = 0; i < tags.length; i++) {
                    var id = $(tags[i]).attr('data-id');
                    var str = $(tags[i]).attr('data-text');

                    if (theme) {
                        theme = theme + ',' + id;
                    } else {
                        theme = id;
                    }
                    if (text == '' && str) {
                        text = str;
                    } else {
                        text = text + str;
                    }
                    if (text.length > 4) {
                        text = text.substr(0, 4);
                        text = text + '...';
                    }
                }
                that.param.themeId = theme ? theme : 0;
                if (text == '') {
                    text = '主题';
                }
                $('#menu-theme-text').text(text);
                finish('hide');
                that.dom.menuItem.removeClass('menu-item-check');
                that.resetList();
                selected();
                return false;
            });

            new PopCoupon();
        }
    }]);

    return City;
}();

new City();

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "  {@each goodses as good}    {@if good.headLable == \'超省心\'}    <div class=\"item item-economize\" data-goodsNo=${good.goodsNo}>      <div class=\"item-pic\">        <em>超省心</em>        <span class=\"item-guide\">${good.guideAmount} 位当地中文司导 <b></b></span>        {@if good.goodsPicture}        <div class=\"item-img lazy\" data-src=\"${handleImg(good.goodsPicture)}\"></div>        {@else}        <div class=\"item-img lazy\" data-src=\"${img.errorGood}\"></div>        {@/if}      </div>      <p class=\"item-title\">${good.goodsName}</p>      <div class=\"item-price\">        <strong><small>¥ </small>${good.perPrice}</strong>        <span>起/人·${good.daysCount}日{@if good.hotelStatus}·含酒店{@/if}</span>      </div>    </div>    {@else}    <div class=\"item item-free\" data-goodsNo=${good.goodsNo}>      <h2>${good.depCityName}${good.daysCount}日玩法推荐</h2>      <span class=\"item-guide\">${good.guideAmount} 位当地中文司导 <b></b></span>      <div class=\"item-pic\">        <em>超自由</em>        {@if good.goodsPics[0]}        <div class=\"item-img lazy\" data-src=\"${handleImg(good.goodsPics[0],330,235)}\"></div>        {@else}        <div class=\"item-img lazy\" data-src=\"${img.errorGood}\"></div>        {@/if}        {@if good.goodsPics[1]}        <div class=\"item-img lazy\" data-src=\"${handleImg(good.goodsPics[1],330,235)}\"></div>        {@else}        <div class=\"item-img lazy\" data-src=\"${img.errorGood}\"></div>        {@/if}      </div>      <p class=\"item-title\">${good.goodsName}</p>    </div>    {@/if}  {@/each}"

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* ! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

    var utils = function () {
        var me = {};

        var _elementStyle = document.createElement('div').style;
        var _vendor = function () {
            var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                transform = void 0,
                i = 0,
                l = vendors.length;

            for (; i < l; i++) {
                transform = vendors[i] + 'ransform';
                if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
            }

            return false;
        }();

        function _prefixStyle(style) {
            if (_vendor === false) return false;
            if (_vendor === '') return style;
            return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
        }

        me.getTime = Date.now || function getTime() {
            return new Date().getTime();
        };

        me.extend = function (target, obj) {
            for (var i in obj) {
                target[i] = obj[i];
            }
        };

        me.addEvent = function (el, type, fn, capture) {
            el.addEventListener(type, fn, !!capture);
        };

        me.removeEvent = function (el, type, fn, capture) {
            el.removeEventListener(type, fn, !!capture);
        };

        me.prefixPointerEvent = function (pointerEvent) {
            return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
        };

        me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
            var distance = current - start,
                speed = Math.abs(distance) / time,
                destination = void 0,
                duration = void 0;

            deceleration = deceleration === undefined ? 0.0006 : deceleration;

            destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
            duration = speed / deceleration;

            if (destination < lowerMargin) {
                destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
                distance = Math.abs(destination - current);
                duration = distance / speed;
            } else if (destination > 0) {
                destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
                distance = Math.abs(current) + destination;
                duration = distance / speed;
            }

            return {
                destination: Math.round(destination),
                duration: duration
            };
        };

        var _transform = _prefixStyle('transform');

        me.extend(me, {
            hasTransform: _transform !== false,
            hasPerspective: _prefixStyle('perspective') in _elementStyle,
            hasTouch: 'ontouchstart' in window,
            hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
            hasTransition: _prefixStyle('transition') in _elementStyle
        });

        /*
        This should find all Android browsers lower than build 535.19 (both stock browser and webview)
        - galaxy S2 is ok
        - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
        - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
        - galaxy S3 is badAndroid (stock brower, webview)
        `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
        - galaxy S4 is badAndroid (stock brower, webview)
        `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
        - galaxy S5 is OK
        `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
        - galaxy S6 is OK
        `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
        */
        me.isBadAndroid = function () {
            var appVersion = window.navigator.appVersion;
            // Android browser is not a chrome browser.
            if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
                var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
                if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : _typeof(safariVersion)) === 'object' && safariVersion.length >= 2) {
                    return parseFloat(safariVersion[1]) < 535.19;
                }
                return true;
            }
            return false;
        }();

        me.extend(me.style = {}, {
            transform: _transform,
            transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
            transitionDuration: _prefixStyle('transitionDuration'),
            transitionDelay: _prefixStyle('transitionDelay'),
            transformOrigin: _prefixStyle('transformOrigin')
        });

        me.hasClass = function (e, c) {
            var re = new RegExp('(^|\\s)' + c + '(\\s|$)');
            return re.test(e.className);
        };

        me.addClass = function (e, c) {
            if (me.hasClass(e, c)) {
                return;
            }

            var newclass = e.className.split(' ');
            newclass.push(c);
            e.className = newclass.join(' ');
        };

        me.removeClass = function (e, c) {
            if (!me.hasClass(e, c)) {
                return;
            }

            var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
            e.className = e.className.replace(re, ' ');
        };

        me.offset = function (el) {
            var left = -el.offsetLeft,
                top = -el.offsetTop;

            // jshint -W084
            while (el = el.offsetParent) {
                left -= el.offsetLeft;
                top -= el.offsetTop;
            }
            // jshint +W084

            return {
                left: left,
                top: top
            };
        };

        me.preventDefaultException = function (el, exceptions) {
            for (var i in exceptions) {
                if (exceptions[i].test(el[i])) {
                    return true;
                }
            }

            return false;
        };

        me.extend(me.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,

            mousedown: 2,
            mousemove: 2,
            mouseup: 2,

            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,

            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        });

        me.extend(me.ease = {}, {
            quadratic: {
                style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fn: function fn(k) {
                    return k * (2 - k);
                }
            },
            circular: {
                style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
                fn: function fn(k) {
                    return Math.sqrt(1 - --k * k);
                }
            },
            back: {
                style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                fn: function fn(k) {
                    var b = 4;
                    return (k = k - 1) * k * ((b + 1) * k + b) + 1;
                }
            },
            bounce: {
                style: '',
                fn: function fn(k) {
                    if ((k /= 1) < 1 / 2.75) {
                        return 7.5625 * k * k;
                    } else if (k < 2 / 2.75) {
                        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
                    } else if (k < 2.5 / 2.75) {
                        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
                    }
                    return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
                }
            },
            elastic: {
                style: '',
                fn: function fn(k) {
                    var f = 0.22,
                        e = 0.4;

                    if (k === 0) {
                        return 0;
                    }
                    if (k == 1) {
                        return 1;
                    }

                    return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
                }
            }
        });

        me.tap = function (e, eventName) {
            var ev = document.createEvent('Event');
            ev.initEvent(eventName, true, true);
            ev.pageX = e.pageX;
            ev.pageY = e.pageY;
            e.target.dispatchEvent(ev);
        };

        me.click = function (e) {
            var target = e.target,
                ev = void 0;

            if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
                ev = document.createEvent('MouseEvents');
                ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);

                ev._constructed = true;
                target.dispatchEvent(ev);
            }
        };

        return me;
    }();
    function IScroll(el, options) {
        this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style; // cache style for better performance

        this.options = {

            // INSERT POINT: OPTIONS
            disablePointer: !utils.hasPointer,
            disableTouch: utils.hasPointer || !utils.hasTouch,
            disableMouse: utils.hasPointer || utils.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: true,
            directionLockThreshold: 5,
            momentum: true,

            bounce: true,
            bounceTime: 600,
            bounceEasing: '',

            preventDefault: true,
            preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

            HWCompositing: true,
            useTransition: true,
            useTransform: true,
            bindToWrapper: typeof window.onmousedown === 'undefined'
        };

        for (var i in options) {
            this.options[i] = options[i];
        }

        // Normalize options
        this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

        this.options.useTransition = utils.hasTransition && this.options.useTransition;
        this.options.useTransform = utils.hasTransform && this.options.useTransform;

        this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

        // If you want eventPassthrough I have to lock one of the axes
        this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
        this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

        // With eventPassthrough we also need lockDirection mechanism
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

        this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

        if (this.options.tap === true) {
            this.options.tap = 'tap';
        }

        // INSERT POINT: NORMALIZATION

        // Some defaults
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this._events = {};

        // INSERT POINT: DEFAULTS

        this._init();
        this.refresh();

        this.scrollTo(this.options.startX, this.options.startY);
        this.enable();
    }

    IScroll.prototype = {
        version: '5.2.0',

        _init: function _init() {
            this._initEvents();

            // INSERT POINT: _init
        },
        destroy: function destroy() {
            this._initEvents(true);
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = null;
            this._execEvent('destroy');
        },
        _transitionEnd: function _transitionEnd(e) {
            if (e.target != this.scroller || !this.isInTransition) {
                return;
            }

            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                this._execEvent('scrollEnd');
            }
        },
        _start: function _start(e) {
            // React to left mouse button only
            if (utils.eventType[e.type] != 1) {
                // for button property
                // http://unixpapa.com/js/mouse.html
                var button = void 0;
                if (!e.which) {
                    /* IE case */
                    button = e.button < 2 ? 0 : e.button == 4 ? 1 : 2;
                } else {
                    /* All others */
                    button = e.button;
                }
                if (button !== 0) {
                    return;
                }
            }

            if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
                return;
            }

            if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                e.preventDefault();
            }

            var point = e.touches ? e.touches[0] : e,
                pos = void 0;

            this.initiated = utils.eventType[e.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;

            this.startTime = utils.getTime();

            if (this.options.useTransition && this.isInTransition) {
                this._transitionTime();
                this.isInTransition = false;
                pos = this.getComputedPosition();
                this._translate(Math.round(pos.x), Math.round(pos.y));
                this._execEvent('scrollEnd');
            } else if (!this.options.useTransition && this.isAnimating) {
                this.isAnimating = false;
                this._execEvent('scrollEnd');
            }

            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = point.pageX;
            this.pointY = point.pageY;

            this._execEvent('beforeScrollStart');
        },
        _move: function _move(e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                return;
            }

            if (this.options.preventDefault) {
                // increases performance on Android? TODO: check!
                e.preventDefault();
            }

            var point = e.touches ? e.touches[0] : e,
                deltaX = point.pageX - this.pointX,
                deltaY = point.pageY - this.pointY,
                timestamp = utils.getTime(),
                newX = void 0,
                newY = void 0,
                absDistX = void 0,
                absDistY = void 0;

            this.pointX = point.pageX;
            this.pointY = point.pageY;

            this.distX += deltaX;
            this.distY += deltaY;
            absDistX = Math.abs(this.distX);
            absDistY = Math.abs(this.distY);

            // We need to move at least 10 pixels for the scrolling to initiate
            if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
                return;
            }

            // If you are scrolling in one direction lock the other
            if (!this.directionLocked && !this.options.freeScroll) {
                if (absDistX > absDistY + this.options.directionLockThreshold) {
                    this.directionLocked = 'h'; // lock horizontally
                } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
                    this.directionLocked = 'v'; // lock vertically
                } else {
                    this.directionLocked = 'n'; // no lock
                }
            }

            if (this.directionLocked == 'h') {
                if (this.options.eventPassthrough == 'vertical') {
                    e.preventDefault();
                } else if (this.options.eventPassthrough == 'horizontal') {
                    this.initiated = false;
                    return;
                }

                deltaY = 0;
            } else if (this.directionLocked == 'v') {
                if (this.options.eventPassthrough == 'horizontal') {
                    e.preventDefault();
                } else if (this.options.eventPassthrough == 'vertical') {
                    this.initiated = false;
                    return;
                }

                deltaX = 0;
            }

            deltaX = this.hasHorizontalScroll ? deltaX : 0;
            deltaY = this.hasVerticalScroll ? deltaY : 0;

            newX = this.x + deltaX;
            newY = this.y + deltaY;

            // Slow down if outside of the boundaries
            if (newX > 0 || newX < this.maxScrollX) {
                newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
            }
            if (newY > 0 || newY < this.maxScrollY) {
                newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
            }

            this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
            this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

            if (!this.moved) {
                this._execEvent('scrollStart');
            }

            this.moved = true;

            this._translate(newX, newY);

            /* REPLACE START: _move */

            if (timestamp - this.startTime > 300) {
                this.startTime = timestamp;
                this.startX = this.x;
                this.startY = this.y;
            }

            /* REPLACE END: _move */
        },
        _end: function _end(e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                return;
            }

            if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                e.preventDefault();
            }

            var point = e.changedTouches ? e.changedTouches[0] : e,
                momentumX = void 0,
                momentumY = void 0,
                duration = utils.getTime() - this.startTime,
                newX = Math.round(this.x),
                newY = Math.round(this.y),
                distanceX = Math.abs(newX - this.startX),
                distanceY = Math.abs(newY - this.startY),
                time = 0,
                easing = '';

            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = utils.getTime();

            // reset if we are outside of the boundaries
            if (this.resetPosition(this.options.bounceTime)) {
                return;
            }

            this.scrollTo(newX, newY); // ensures that the last position is rounded

            // we scrolled less than 10 pixels
            if (!this.moved) {
                if (this.options.tap) {
                    utils.tap(e, this.options.tap);
                }

                if (this.options.click) {
                    utils.click(e);
                }

                this._execEvent('scrollCancel');
                return;
            }

            if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
                this._execEvent('flick');
                return;
            }

            // start momentum animation if needed
            if (this.options.momentum && duration < 300) {
                momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
                momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
                newX = momentumX.destination;
                newY = momentumY.destination;
                time = Math.max(momentumX.duration, momentumY.duration);
                this.isInTransition = 1;
            }

            // INSERT POINT: _end

            if (newX != this.x || newY != this.y) {
                // change easing function when scroller goes out of the boundaries
                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                    easing = utils.ease.quadratic;
                }

                this.scrollTo(newX, newY, time, easing);
                return;
            }

            this._execEvent('scrollEnd');
        },
        _resize: function _resize() {
            var that = this;

            clearTimeout(this.resizeTimeout);

            this.resizeTimeout = setTimeout(function () {
                that.refresh();
            }, this.options.resizePolling);
        },
        resetPosition: function resetPosition(time) {
            var x = this.x,
                y = this.y;

            time = time || 0;

            if (!this.hasHorizontalScroll || this.x > 0) {
                x = 0;
            } else if (this.x < this.maxScrollX) {
                x = this.maxScrollX;
            }

            if (!this.hasVerticalScroll || this.y > 0) {
                y = 0;
            } else if (this.y < this.maxScrollY) {
                y = this.maxScrollY;
            }

            if (x == this.x && y == this.y) {
                return false;
            }

            this.scrollTo(x, y, time, this.options.bounceEasing);

            return true;
        },
        disable: function disable() {
            this.enabled = false;
        },
        enable: function enable() {
            this.enabled = true;
        },
        refresh: function refresh() {
            var rf = this.wrapper.offsetHeight; // Force reflow

            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;

            /* REPLACE START: refresh */

            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;

            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

            /* REPLACE END: refresh */

            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth;
            }

            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight;
            }

            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;

            this.wrapperOffset = utils.offset(this.wrapper);

            this._execEvent('refresh');

            this.resetPosition();

            // INSERT POINT: _refresh
        },
        on: function on(type, fn) {
            if (!this._events[type]) {
                this._events[type] = [];
            }

            this._events[type].push(fn);
        },
        off: function off(type, fn) {
            if (!this._events[type]) {
                return;
            }

            var index = this._events[type].indexOf(fn);

            if (index > -1) {
                this._events[type].splice(index, 1);
            }
        },
        _execEvent: function _execEvent(type) {
            if (!this._events[type]) {
                return;
            }

            var i = 0,
                l = this._events[type].length;

            if (!l) {
                return;
            }

            for (; i < l; i++) {
                this._events[type][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        scrollBy: function scrollBy(x, y, time, easing) {
            x = this.x + x;
            y = this.y + y;
            time = time || 0;

            this.scrollTo(x, y, time, easing);
        },
        scrollTo: function scrollTo(x, y, time, easing) {
            easing = easing || utils.ease.circular;

            this.isInTransition = this.options.useTransition && time > 0;
            var transitionType = this.options.useTransition && easing.style;
            if (!time || transitionType) {
                if (transitionType) {
                    this._transitionTimingFunction(easing.style);
                    this._transitionTime(time);
                }
                this._translate(x, y);
            } else {
                this._animate(x, y, time, easing.fn);
            }
        },
        scrollToElement: function scrollToElement(el, time, offsetX, offsetY, easing) {
            el = el.nodeType ? el : this.scroller.querySelector(el);

            if (!el) {
                return;
            }

            var pos = utils.offset(el);

            pos.left -= this.wrapperOffset.left;
            pos.top -= this.wrapperOffset.top;

            // if offsetX/Y are true we center the element to the screen
            if (offsetX === true) {
                offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
            }
            if (offsetY === true) {
                offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
            }

            pos.left -= offsetX || 0;
            pos.top -= offsetY || 0;

            pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
            pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

            time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

            this.scrollTo(pos.left, pos.top, time, easing);
        },
        _transitionTime: function _transitionTime(time) {
            time = time || 0;

            var durationProp = utils.style.transitionDuration;
            this.scrollerStyle[durationProp] = time + 'ms';

            if (!time && utils.isBadAndroid) {
                this.scrollerStyle[durationProp] = '0.0001ms';
                // remove 0.0001ms
                var self = this;
                rAF(function () {
                    if (self.scrollerStyle[durationProp] === '0.0001ms') {
                        self.scrollerStyle[durationProp] = '0s';
                    }
                });
            }

            // INSERT POINT: _transitionTime
        },
        _transitionTimingFunction: function _transitionTimingFunction(easing) {
            this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

            // INSERT POINT: _transitionTimingFunction
        },
        _translate: function _translate(x, y) {
            if (this.options.useTransform) {

                /* REPLACE START: _translate */

                this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

                /* REPLACE END: _translate */
            } else {
                x = Math.round(x);
                y = Math.round(y);
                this.scrollerStyle.left = x + 'px';
                this.scrollerStyle.top = y + 'px';
            }

            this.x = x;
            this.y = y;

            // INSERT POINT: _translate
        },
        _initEvents: function _initEvents(remove) {
            var eventType = remove ? utils.removeEvent : utils.addEvent,
                target = this.options.bindToWrapper ? this.wrapper : window;

            eventType(window, 'orientationchange', this);
            eventType(window, 'resize', this);

            if (this.options.click) {
                eventType(this.wrapper, 'click', this, true);
            }

            if (!this.options.disableMouse) {
                eventType(this.wrapper, 'mousedown', this);
                eventType(target, 'mousemove', this);
                eventType(target, 'mousecancel', this);
                eventType(target, 'mouseup', this);
            }

            if (utils.hasPointer && !this.options.disablePointer) {
                eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
                eventType(target, utils.prefixPointerEvent('pointermove'), this);
                eventType(target, utils.prefixPointerEvent('pointercancel'), this);
                eventType(target, utils.prefixPointerEvent('pointerup'), this);
            }

            if (utils.hasTouch && !this.options.disableTouch) {
                eventType(this.wrapper, 'touchstart', this);
                eventType(target, 'touchmove', this);
                eventType(target, 'touchcancel', this);
                eventType(target, 'touchend', this);
            }

            eventType(this.scroller, 'transitionend', this);
            eventType(this.scroller, 'webkitTransitionEnd', this);
            eventType(this.scroller, 'oTransitionEnd', this);
            eventType(this.scroller, 'MSTransitionEnd', this);
        },
        getComputedPosition: function getComputedPosition() {
            var matrix = window.getComputedStyle(this.scroller, null),
                x = void 0,
                y = void 0;

            if (this.options.useTransform) {
                matrix = matrix[utils.style.transform].split(')')[0].split(', ');
                x = +(matrix[12] || matrix[4]);
                y = +(matrix[13] || matrix[5]);
            } else {
                x = +matrix.left.replace(/[^-\d.]/g, '');
                y = +matrix.top.replace(/[^-\d.]/g, '');
            }

            return { x: x, y: y };
        },
        _animate: function _animate(destX, destY, duration, easingFn) {
            var that = this,
                startX = this.x,
                startY = this.y,
                startTime = utils.getTime(),
                destTime = startTime + duration;

            function step() {
                var now = utils.getTime(),
                    newX = void 0,
                    newY = void 0,
                    easing = void 0;

                if (now >= destTime) {
                    that.isAnimating = false;
                    that._translate(destX, destY);

                    if (!that.resetPosition(that.options.bounceTime)) {
                        that._execEvent('scrollEnd');
                    }

                    return;
                }

                now = (now - startTime) / duration;
                easing = easingFn(now);
                newX = (destX - startX) * easing + startX;
                newY = (destY - startY) * easing + startY;
                that._translate(newX, newY);

                if (that.isAnimating) {
                    rAF(step);
                }
            }

            this.isAnimating = true;
            step();
        },
        handleEvent: function handleEvent(e) {
            switch (e.type) {
                case 'touchstart':
                case 'pointerdown':
                case 'MSPointerDown':
                case 'mousedown':
                    this._start(e);
                    break;
                case 'touchmove':
                case 'pointermove':
                case 'MSPointerMove':
                case 'mousemove':
                    this._move(e);
                    break;
                case 'touchend':
                case 'pointerup':
                case 'MSPointerUp':
                case 'mouseup':
                case 'touchcancel':
                case 'pointercancel':
                case 'MSPointerCancel':
                case 'mousecancel':
                    this._end(e);
                    break;
                case 'orientationchange':
                case 'resize':
                    this._resize();
                    break;
                case 'transitionend':
                case 'webkitTransitionEnd':
                case 'oTransitionEnd':
                case 'MSTransitionEnd':
                    this._transitionEnd(e);
                    break;
                case 'wheel':
                case 'DOMMouseScroll':
                case 'mousewheel':
                    this._wheel(e);
                    break;
                case 'keydown':
                    this._key(e);
                    break;
                case 'click':
                    if (this.enabled && !e._constructed) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
            }
        }
    };
    IScroll.utils = utils;

    if (typeof module != 'undefined' && module.exports) {
        module.exports = IScroll;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return IScroll;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        window.IScroll = IScroll;
    }
})(window, document, Math);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(0);
var util = __webpack_require__(2);
var Storage = __webpack_require__(30);
var apiConfig = __webpack_require__(6);
var ajax = __webpack_require__(3);
var juicer = __webpack_require__(1);
var Ak = __webpack_require__(34);
var loading = __webpack_require__(8);
var SearchAreaCode = __webpack_require__(35);
var Scheme = __webpack_require__(43);
var tpl = __webpack_require__(44);
var Cookie = __webpack_require__(4);
// const sensors = require("widgets/sensors/index");
__webpack_require__(45);

var myStorage = new Storage();

var PopCoupon = function () {
    function PopCoupon() {
        _classCallCheck(this, PopCoupon);

        var that = this;
        // 获取AK
        Ak.getAk(function (res) {
            that._AK = res;
            that.init();
        });
    }

    _createClass(PopCoupon, [{
        key: 'init',
        value: function init() {
            this.cacheData();
            this.cacheDom();
            this.renderMain();
        }
    }, {
        key: 'cacheData',
        value: function cacheData() {
            var that = this;
            that.data = {};
            that.data.ak = that._AK;
            that.data.userInfo = JSON.parse(myStorage._getCookie('userInfo')) || myStorage.get('userInfo');
            that.data.isCAPP = util.plateForm().app == 'hbcc';
            that.data.did = util.getRequestParam('did') || '10042';
        }
    }, {
        key: 'cacheDom',
        value: function cacheDom() {
            var that = this;
            that.dom = {
                wrap: $('.give-coupon'),
                area: $('#coupon-area'),
                phone: $('#coupon-phone'),
                code: $('#coupon-code'),
                send: $('.coupon-send'),
                close: $('.coupon-box-close'),
                formButton: $('.coupon-form-button'),
                finishButton: $('.coupon-finish-button'),
                error: $('.coupon-error')
            };
        }
    }, {
        key: 'renderMain',
        value: function renderMain() {
            var that = this;
            if (util.plateForm().app === 'hbcg') {
                return;
            }
            that.sendSa('$view_index_pop');
            if (that.data.userInfo && that.data.userInfo.userId) {
                return false;
            }
            if (myStorage.get('giveCoupon') && myStorage.get('giveCoupon') == 1) {
                return false;
            }
            that.dom.wrap.html(juicer(tpl, that.data));
            that.dom.wrap.bind('touchmove', function (e) {
                e.preventDefault();
            });
            that.cacheDom();
            that.bindEvent();
            if (!that.data.isCAPP) {
                setTimeout(function () {
                    that.dom.wrap.show();
                }, 5000);
            }
        }
    }, {
        key: 'obtainCoupon',
        value: function obtainCoupon(param, userInfo) {
            var that = this;
            var url = apiConfig.getPackW;
            loading.init();
            var opt = {
                url: url,
                method: 'POST',
                header: {
                    ak: that.data.ak || '',
                    ut: userInfo.userToken,
                    'X-Requested-With': 'XMLHttpRequest'
                },
                data: param,
                success: function success(ret) {
                    loading.hide();
                    if (ret.status === 200) {
                        if (ret.data && ret.data.isDraw == 1) {
                            $('.coupon-finish h3').text('您已领取过啦');
                        }
                        myStorage.set('giveCoupon', '1');
                        $('.coupon-code').css('borderColor', '#bdbdbd');
                        $('.coupon-data').hide();
                        $('.coupon-finish').show();
                    } else {
                        $('.coupon-error').show();
                    }
                },
                error: function error() {
                    loading.hide();
                }
            };
            ajax.sendRequest(opt);
        }
    }, {
        key: 'sendCode',
        value: function sendCode(phone) {
            var that = this;
            that.data.timeNum = 60;
            that.data.timer && clearInterval(that.data.timer);
            that.data.timer = setInterval(function () {
                if (that.data.timeNum == 0) {
                    clearInterval(that.data.timer);
                    $('.coupon-send').find('span').hide();
                    $('.coupon-send').find('em').show();
                    $('.coupon-send').removeClass('ready');
                } else {
                    $('.coupon-time').text(that.data.timeNum);
                    $('.coupon-send').find('em').hide();
                    $('.coupon-send').find('span').show();
                    that.data.timeNum--;
                }
            }, 1000);
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var that = this;
            that.dom.area.on('click', function () {
                var name = 'indexGetCode'; /*  */
                that.searchAreaCode = new SearchAreaCode({
                    title: '选择区号',
                    cbname: name,
                    callback: function callback() {
                        that.dom.wrap.css('display', 'block');
                    }
                }).show();
                that.dom.wrap.css('display', 'none');
                $(document).off(name).on(name, function (e, data) {
                    that.dom.wrap.css('display', 'block');
                    that.dom.area.text('+' + data.areaCode);
                });
            });

            that.dom.phone.on('input', function () {
                var phone = that.dom.phone.val();
                var code = that.dom.code.val();
                if (phone && code) {
                    that.dom.formButton.removeClass('disabled');
                } else {
                    that.dom.formButton.addClass('disabled');
                }
            });

            that.dom.code.on('input', function () {
                var code = that.dom.code.val();
                var phone = that.dom.phone.val();
                if (phone && code) {
                    that.dom.formButton.removeClass('disabled');
                } else {
                    that.dom.formButton.addClass('disabled');
                }
            });

            that.dom.send.on('click', function (e) {
                var self = $(this);
                var phone = that.dom.phone.val();
                var areaCode = that.dom.area.text();
                if (self.hasClass('ready')) {
                    return false;
                }
                if (!phone || !/^\d+$/.test(phone)) {
                    $('.coupon-tel').css('borderColor', '#ff4311');
                    that.dom.error.text('请填写正确的手机号');
                    that.dom.error.show();
                    return false;
                } else if (areaCode == '+86' && phone.length != 11) {
                    $('.coupon-tel').css('borderColor', '#ff4311');
                    that.dom.error.text('国内手机号，请输入11位数字');
                    that.dom.error.show();
                    return false;
                }
                var url = apiConfig.sendCode;
                var param = {
                    areaCode: areaCode.substr(1),
                    mobile: phone,
                    captchaType: 4 // 通用注册
                };
                loading.init();
                var opt = {
                    url: url,
                    method: 'POST',
                    header: {
                        ak: that.data.ak,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: param,
                    success: function success(res) {
                        loading.hide();
                        if (res.status == 200) {
                            that.sendCode(phone);
                            $('.coupon-tel').css('borderColor', '#bdbdbd');
                            self.addClass('ready');
                            that.dom.error.hide();
                        } else {
                            $('.coupon-tel').css('borderColor', '#ff4311');
                            that.dom.error.show();
                        }
                    },
                    error: function error() {
                        loading.hide();
                    }
                };
                ajax.sendRequest(opt);
            });

            that.dom.formButton.on('click', function (e) {
                var self = $(this);
                var code = that.dom.code.val();
                var phone = that.dom.phone.val();
                var areaCode = $('#coupon-area').text();
                if (self.hasClass('disabled')) {
                    return false;
                }
                if (!phone || !/^\d+$/.test(phone)) {
                    $('.coupon-tel').css('borderColor', '#ff4311');
                    that.dom.error.text('请填写正确的手机号');
                    that.dom.error.show();
                    return false;
                } else if (areaCode == '+86' && phone.length != 11) {
                    $('.coupon-tel').css('borderColor', '#ff4311');
                    that.dom.error.text('国内手机号，请输入11位数字');
                    that.dom.error.show();
                } else {
                    $('.coupon-tel').css('borderColor', '#bdbdbd');
                }
                if (code == '') {
                    $('.coupon-code').css('borderColor', '#ff4311');
                    that.dom.error.text('验证码错误，请重新输入');
                    that.dom.error.show();
                    return false;
                }
                $('.coupon-code').css('borderColor', '#bdbdbd');

                var url = apiConfig.codeLogin;
                var param = {
                    areaCode: areaCode.substr(1),
                    mobile: phone,
                    captcha: code,
                    sourceType: 2, // 活动来源
                    source: 80005, // 活动id
                    fromChannel: 20127, // 推广id
                    distinctId: sa && sa.store && sa.store.getDistinctId() || '', // 神策ID
                    loginChannel: 2 // 登录渠道 1:capp, 2:m, 3:pc
                };
                var opt = {
                    url: url,
                    method: 'POST',
                    header: {
                        ak: that.data.ak,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: param,
                    success: function success(res) {
                        if (res.status == 200) {
                            var userInfo = {
                                userToken: res.data.userToken,
                                userId: res.data.userId,
                                mobile: res.data.mobile,
                                areaCode: res.data.areaCode,
                                nname: res.data.nickName || res.data.mobile,
                                uname: res.data.nickName || res.data.mobile,
                                nickName: res.data.nickName || res.data.mobile,
                                avatar: res.data.avatar,
                                accessKey: that.data.ak
                            };
                            var param2 = {
                                mobile: param.mobile,
                                areaCode: param.areaCode,
                                source: param.source,
                                packNo: apiConfig.packNo,
                                uca: '',
                                fromChannel: param.fromChannel
                            };
                            myStorage.set('userInfo', userInfo);
                            Cookie.set('ut', userInfo.userToken, {
                                domain: 'huangbaoche.com',
                                path: '/'
                            });
                            Cookie.set('uid', userInfo.userId, {
                                domain: 'huangbaoche.com',
                                path: '/'
                            });
                            Cookie.set('userInfo', JSON.stringify(userInfo), {
                                domain: 'huangbaoche.com',
                                path: '/'
                            });
                            that.obtainCoupon(param2, userInfo);
                        } else if (res.status == 40070002) {
                            $('.coupon-code').css('borderColor', '#ff4311');
                            that.dom.error.text('验证码错误，请重新输入');
                            that.dom.error.show();
                        } else {
                            that.dom.error.show();
                        }
                    }
                };
                ajax.sendRequest(opt);
            });

            that.dom.finishButton.on('click', function (e) {

                that.dom.wrap.unbind('touchmove');
                that.dom.wrap.hide();

                var url = 'http://scdata.huangbaoche.com/r/Ls';
                var action = {
                    t: '2',
                    v: '2'
                };
                var goUrl = apiConfig.actHost + 'h5/cactivity/capp/applinks.html?action=' + encodeURIComponent(JSON.stringify(action)) + '&backurl=' + encodeURIComponent(url);
                if (util.isIOS()) {
                    window.location.href = goUrl;
                } else {
                    var scheme = new Scheme({
                        io: 'hbcc://?{"t":"2","v":"2"}',
                        did: that.data.did,
                        auto: true
                    });
                }
                // window.location.href = "midpage.html"
            });

            that.dom.close.on('click', function (e) {
                that.dom.wrap.unbind('touchmove');
                that.dom.wrap.hide();
            });
        }
    }, {
        key: 'sendSa',
        value: function sendSa(type, data) {
            /* let arr = ['useOrderPrice', 'urgentFlag', 'priceActual', 'travelFund', 'capOfPerson', 'distance', 'capOfLuggage', 'user_id', 'orderType', 'expectedCompTime', 'destCityId']*/
            for (var key in data) {
                if (typeof data[key] == 'number') {
                    data[key] += '';
                }
                /* for (let i = 0; i < arr.length; i++) {
                if (key == arr[i]) {
                data[key] -= 0;
                }
                }*/
            }
            // window.sa.track(type, data)
        }
    }]);

    return PopCoupon;
}();

module.exports = PopCoupon;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* storage - 0.0.1
*
* key [必填] 必须要为String类型。
* value [必填] 支持所以可以JSON.parse 的类型。注：当为undefined的时候会执行 delete(key)操作。
* options [选填] js对象。
* {
***   exp: 100,类型Number。超时时间，秒。默认无限大。
***   force: true,可删除
***   sign : Storage_,标示可自定义
* }
*/
__webpack_require__(31).polyfill();

var _gol = window || undefined,
    _define = __webpack_require__(33),
    _exports = exports;

var _ref = [_gol.localStorage, _gol.document],
    _storage = _ref[0],
    _doc = _ref[1];

var _maxExpireDate = new Date('Fri, 31 Dec 9999 23:59:59 UTC');
var _defaultExpire = _maxExpireDate;
var _defaultSerializer = {
    serialize: function serialize(item) {
        return JSON.stringify(item);
    },
    deserialize: function deserialize(data) {
        return data && JSON.parse(data);
    },
    deepParse: function deepParse(obj) {
        obj = JSON.parse(obj);
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && obj.map) {
            return obj.map(function (v, k) {
                return JSON.parse(v);
            });
        }
        return [].concat(JSON.parse(obj));
    }
};

var _extend = function _extend(obj, props) {
    for (var key in props) {
        obj[key] = props[key];
    }return obj;
};

var _isValidDate = function _isValidDate(date) {
    return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
};
var _getExpiresDate = function _getExpiresDate(expires, now) {
    now = now || new Date();
    if (typeof expires === 'number') {
        expires = expires === Infinity ? _maxExpireDate : new Date(now.getTime() + expires * 1000);
    } else if (typeof expires === 'string') {
        expires = new Date(expires);
    }
    if (expires && !_isValidDate(expires)) {
        throw new Error('`expires` parameter cannot be converted to a valid Date instance');
    }

    return expires;
};

var _removeItem = function _removeItem(item, key, val) {
    var newItem = [].concat(item);
    var dx = newItem.indexOf(key);

    if (dx > -1) {
        if (val) newItem.splice(dx, 1).splice(dx, 0, val);else newItem.splice(dx, 1);
        return newItem;
    }return newItem;
};

var _isQuotaExceeded = function _isQuotaExceeded(e) {
    var quotaExceeded = false;
    if (e) {
        if (e.code) {
            switch (e.code) {
                case 22:
                    quotaExceeded = true;
                    break;
                case 1014:
                    if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') quotaExceeded = true;
                    break;
            }
        } else if (e.number === -2147024882) {
            quotaExceeded = true;
        }
    }
    return quotaExceeded;
};
var _isCacheItem = function _isCacheItem(item) {
    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') return false;
    if (item) if ('c' in item && 'e' in item && 'v' in item) return true;
    return false;
};

var _checkCacheItemIfEffective = function _checkCacheItemIfEffective(cacheItem) {
    return new Date().getTime() < cacheItem.e;
};

var _checkAndWrapKeyAsString = function _checkAndWrapKeyAsString(key) {
    if (typeof key !== 'string') {
        console.warn('key used as a key, but get `${key}`');
        key = String(key);
    }
    return key;
};

var _checkIndexOf = function _checkIndexOf(checks, val, key) {
    var result = false;

    var arr = [].concat(checks);

    for (var i = 0, len = arr.length; i < len; i++) {
        if (key) {
            if (JSON.parse(arr[i])[key] == JSON.parse(val)[key]) {
                result = i;
                break;
            } else result = -1;
        } else {
            if (arr[i] == val) {
                result = i;
                break;
            } else result = -1;
        }
    }
    return result;
};

var _checkCacheName = function _checkCacheName(name, sign) {
    return name.indexOf(sign) > -1;
};
var _getRealName = function _getRealName(key, sign) {
    return _checkCacheName(key, sign) ? key : sign + key;
};

var CacheItemConstructor = function CacheItemConstructor(value, ops) {
    _classCallCheck(this, CacheItemConstructor);

    this.c = new Date().getTime();
    var exp = ops.exp || _defaultExpire;
    var expires = _getExpiresDate(exp);
    this.e = expires.getTime();
    this.v = value;
    this.p = ops.path || '/';
    this.d = ops.domain;
};

var Storage = function () {
    function Storage(options) {
        _classCallCheck(this, Storage);

        this.isSupported = _storage;
        this._init(options);
    }

    _createClass(Storage, [{
        key: '_init',
        value: function _init(options) {
            var defaults = {
                storage: 'localStorage',
                exp: Infinity,
                sign: 'Storage_'
            };

            var opt = _extend(defaults, options);
            var expires = opt.exp;
            if (expires && typeof expires !== 'number' && !_isValidDate(expires)) {
                throw new Error('exp used a Date or number but get `${expires}`');
            } else _defaultExpire = expires;
            this._sign = opt.sign;

            if (this.isSupported) this._checkList(_storage);
            if (!this.isSupported && !_doc.cookie) {
                _extend(this, this._cacheApi());
                console.error('need open locationStorage or cookie, please check your browser');
            }
        }
    }, {
        key: '_checkList',
        value: function _checkList(item) {
            if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') return false;
            for (var name in item) {
                if (_checkCacheName(name, this._sign)) {
                    var cacheItem = _checkCacheItemIfEffective(_defaultSerializer.deserialize(item[name]));
                    if (!cacheItem) this.delete(name);
                }
            }
        }
    }, {
        key: '_quotaExceedHandler',
        value: function _quotaExceedHandler(key, val, options, e) {
            if (options && options.force === true) {
                var deleteKeys = this.deleteAll();
                console.warn('delete all expires CacheItem : [`${deleteKeys}`] and try execute `set` method again!');
                try {
                    options.force = false;
                    this.set(key, val, options);
                } catch (err) {
                    console.warn(err);
                }
            }
        }
    }, {
        key: '_cacheApi',
        value: function _cacheApi() {
            return {
                set: function set(key, value, options) {},
                get: function get(key, deep) {},
                delete: function _delete(key) {},
                deleteAll: function deleteAll() {},
                add: function add(key, options) {},
                replace: function replace(key, value, options) {},
                clear: function clear() {}
            };
        }
    }, {
        key: '_setCookie',
        value: function _setCookie(key, val, item) {
            var cookieStr = '';
            if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object') {
                cookieStr += key + '=' + encodeURIComponent(val);
                item.e && (cookieStr += '; expires=' + item.e);
                item.p && (cookieStr += '; path=' + item.p);
                item.d && (cookieStr += '; domain=' + item.d);
                _doc.cookie = cookieStr;
            }
            return cookieStr;
        }
    }, {
        key: '_getCookie',
        value: function _getCookie(key) {
            var arr = [],
                reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
            arr = _doc.cookie.match(reg);
            return arr ? decodeURIComponent(arr[2]) : null;
        }
    }, {
        key: '_delCookie',
        value: function _delCookie(key, item) {
            if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object') this.setCookie(key, '', -1);else this.setCookie(key, '', -1, item.p, item.d);
            return key;
        }
    }, {
        key: 'set',
        value: function set() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _checkAndWrapKeyAsString(key);
            var val = arguments[1];
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


            options = _extend({ force: true }, options);
            key = _getRealName(key, this._sign);
            if (val === undefined) return this.delete(key);
            var value = _defaultSerializer.serialize(val);
            var cacheItem = new CacheItemConstructor(value, options);
            if (this.isSupported) {
                try {
                    _storage.setItem(key, _defaultSerializer.serialize(cacheItem));
                } catch (e) {
                    if (_isQuotaExceeded(e)) this._quotaExceedHandler(key, value, options, e);
                }
            } else this._setCookie(key, val, cacheItem);
            return val;
        }
    }, {
        key: 'get',
        value: function get() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _checkAndWrapKeyAsString(key);
            var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var cacheItem = null;
            key = _getRealName(key, this._sign);
            if (this.isSupported) {
                try {
                    cacheItem = _defaultSerializer.deserialize(_storage.getItem(key));
                    if (_isCacheItem(cacheItem)) {
                        if (_checkCacheItemIfEffective(cacheItem)) {
                            var value = cacheItem.v;
                            return deep ? _defaultSerializer.deepParse(value) : _defaultSerializer.deserialize(value);
                        }this.delete(key);
                    } else return null;
                } catch (e) {
                    return null;
                }
            } else return this._getCookie(key);
        }
    }, {
        key: 'delete',
        value: function _delete() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _checkAndWrapKeyAsString(key);

            key = _getRealName(key, this._sign);
            if (this.isSupported) _storage.removeItem(key);else this._delCookie(key);
            return key;
        }
    }, {
        key: 'deleteAll',
        value: function deleteAll() {
            var length = _storage.length;
            var deleteKeys = [];
            var _this = this;
            for (var i = 0; i < length; i++) {
                var key = _storage.key(i);
                var cacheItem = null;
                try {
                    cacheItem = _defaultSerializer.deserialize(_storage.getItem(key));
                } catch (e) {}

                if (cacheItem !== null && cacheItem.e !== undefined) {
                    var timeNow = new Date().getTime();
                    if (timeNow >= cacheItem.e) {
                        deleteKeys.push(key);
                    }
                }
            }
            deleteKeys.forEach(function (key) {
                _this.delete(key);
            });
            return deleteKeys;
        }
    }, {
        key: 'add',
        value: function add() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _checkAndWrapKeyAsString(key);
            var value = arguments[1];
            var options = arguments[2];

            key = _getRealName(key, this._sign);
            options = _extend({ force: true }, options);
            if (this.isSupported) {

                try {
                    var cacheItem = _defaultSerializer.deserialize(_storage.getItem(key));
                    if (!_isCacheItem(cacheItem) || !_checkCacheItemIfEffective(cacheItem)) {
                        this.set(key, value, options);
                        return value;
                    }
                    var oldValue = this.get(key);
                    var index = _checkIndexOf(oldValue, value, options.key);

                    if (index == -1) {
                        var newValue = [].concat(value).concat(oldValue);
                        this.set(key, newValue, options);
                        return newValue;
                    }
                    var newValues = [].concat(value);
                    var resultValue = void 0;
                    oldValue.splice(index, 1);
                    resultValue = newValues.concat(oldValue);
                    this.set(key, resultValue, options);
                    return resultValue;

                    return oldValue;
                } catch (e) {
                    this.set(key, value, options);
                    return value;
                }
            } else {
                var old = this._getCookie(key);
                if (old.indexOf(value) == -1) {
                    var _newValue = [].concat(value).concat(old);
                    this.set(key, _newValue, options);
                    return _newValue;
                }
                return old;
            }
            return false;
        }

        /* add(key = _checkAndWrapKeyAsString(key), value, options) {
            key = _getRealName(key, this._sign);
            options = _extend({force: true}, options);
            if(this.isSupported){
                 try {
                    let cacheItem = _defaultSerializer.deserialize(_storage.getItem(key));
                    if (!_isCacheItem(cacheItem) || !_checkCacheItemIfEffective(cacheItem)) {
                        this.set(key, value, options);
                        return value;
                    }else{
                        let oldValue = this.get(key);
                        let index =  oldValue.indexOf(value);
                        if(index == -1){
                            let newValue = [].concat(value).concat(oldValue);
                            this.set(key, newValue, options);
                            return newValue;
                        }else if(index > -1){
                            let newValue = [].concat(value);
                            let resultValue;
                            oldValue.splice(index, 1);
                            resultValue = newValue.concat(oldValue);
                            this.set(key, resultValue, options);
                            return resultValue;
                        }
                        return oldValue;
                    }
                } catch (e) {
                    this.set(key, value, options);
                    return value;
                }
            } else{
                let old = this._getCookie(key);
                if(old.indexOf(value) == -1){
                    let newValue = [].concat(value).concat(old);
                    this.set(key, newValue, options);
                    return newValue;
                }
                return old;
            }
            return false;
        }*/

    }, {
        key: 'replace',
        value: function replace() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _checkAndWrapKeyAsString(key);
            var ikey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var value = arguments[2];
            var options = arguments[3];

            key = _getRealName(key, this._sign);
            var item = this.get(key);
            var newItem = _removeItem(item, ikey, value);

            this.set(key, newItem, options);
        }
    }, {
        key: 'search',
        value: function search() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _checkAndWrapKeyAsString(key);
            var ikey = arguments[1];

            key = _getRealName(key, this._sign), result = [];
            var list = this.get(key);
            list.forEach(function (v, i) {
                if (v.indexOf(ikey) > -1) result.push(v);
            });
            return result;
        }
    }, {
        key: 'clear',
        value: function clear() {
            _storage.clear();
        }
    }]);

    return Storage;
}();

if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return Storage;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof _exports === 'undefined' ? 'undefined' : _typeof(_exports)) === 'object') module.exports = Storage;else _gol.Storage = Storage;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    return promise.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32), __webpack_require__(10)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Gorden on 16/6/8.
 */

// let MD5 = require('./blueimp-md5.js');

var getAK = function () {
    function getAK() {
        _classCallCheck(this, getAK);
    }

    _createClass(getAK, [{
        key: "constuctor",
        value: function constuctor() {}
    }, {
        key: "getAk",
        value: function getAk(success) {
            return success && success(window.__ACC_KEY);
        }
    }]);

    return getAK;
}();

module.exports = new getAK();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zepto = __webpack_require__(0);

var _zepto2 = _interopRequireDefault(_zepto);

var _data = __webpack_require__(36);

var _data2 = _interopRequireDefault(_data);

var _juicer = __webpack_require__(1);

var _juicer2 = _interopRequireDefault(_juicer);

var _index = __webpack_require__(37);

var _index2 = _interopRequireDefault(_index);

var _li = __webpack_require__(38);

var _li2 = _interopRequireDefault(_li);

__webpack_require__(12);

__webpack_require__(39);

var _iscroll = __webpack_require__(40);

var _iscroll2 = _interopRequireDefault(_iscroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Gorden on 16/9/28.
 */
var Header = __webpack_require__(41);

var res = _data2.default.sort(function (item1, item2) {
    // 不要使用 localCompare
    return item1.spell > item2.spell ? 1 : -1;
});

var SearchAreaCode = function () {
    function SearchAreaCode(opt) {
        _classCallCheck(this, SearchAreaCode);

        this.opt = opt;
    }

    _createClass(SearchAreaCode, [{
        key: 'cacheDom',
        value: function cacheDom() {
            this.dom = {
                ipt: (0, _zepto2.default)('#J-Sp-input'),
                ul: (0, _zepto2.default)('.sp-res-wrap ul')
            };
        }
    }, {
        key: 'cacheData',
        value: function cacheData() {
            this.data = {
                area: res
            };
        }
    }, {
        key: 'renderUI',
        value: function renderUI() {

            (0, _zepto2.default)('body').append((0, _juicer2.default)(_index2.default, this.data));

            if (!this.opt.callback) {
                (0, _zepto2.default)('#J-SearchAreaCode').css({ top: (0, _zepto2.default)('body').scrollTop() + 'px', height: (0, _zepto2.default)(window).height() + 'px' });
            }
            this._header = new Header({

                title: this.opt.title || '选择区号',
                pannel: (0, _zepto2.default)('#J-SearchAreaCode'),
                wrap: (0, _zepto2.default)('#J-SearchAreaCode .J-sp-fix'),
                hash: '#J-SearchAreaCode',
                callback: this.opt.callback
            });

            this.ULSCROLL = new _iscroll2.default('.sp-res-wrap', {
                click: true,
                mouseWheel: true
            });
        }
    }, {
        key: 'show',
        value: function show() {
            this.cacheData();
            this.renderUI();
            this.cacheDom();
            this.bindEvent();
            return this;
        }
    }, {
        key: 'hide',
        value: function hide() {
            (0, _zepto2.default)('#J-SearchAreaCode').remove();
        }
    }, {
        key: 'getArea',
        value: function getArea(val) {
            var that = this;
            if (val == '') {
                that.data.area = res;
            } else {
                var arr = res.filter(function (elem) {
                    return that._queryData(val, elem);
                });
                that.data.area = arr;
            }
            that._renderLI();
        }
    }, {
        key: '_queryData',
        value: function _queryData(val, obj) {
            var string = function (res) {
                var s = '';
                for (var key in res) {
                    if (key != 'countryId' && key != 'placeCategoryId') {
                        s += res[key];
                    }
                }
                return s;
            }(obj);
            var reg = new RegExp(val, 'g');
            return reg.test(string);
        }
    }, {
        key: '_renderLI',
        value: function _renderLI() {
            this.dom.ul.html((0, _juicer2.default)(_li2.default, this.data));
            // this.bindLiEvent();
            this.ULSCROLL.refresh();
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var that = this;
            (0, _zepto2.default)('#J-SearchAreaCode').on('input', '#J-Sp-input', function () {
                if ((0, _zepto2.default)(this).val() !== '') {
                    (0, _zepto2.default)('.sp-clear-icon').show();
                }
                that.getArea(_zepto2.default.trim((0, _zepto2.default)(this).val()));
                // that.getPlaceData();
            }).on('blur', '#J-Sp-input', function () {
                setTimeout(function () {
                    that.ULSCROLL.refresh();
                }, 1000);
            }).on('focus', '#J-Sp-input', function () {
                setTimeout(function () {
                    (0, _zepto2.default)('#J-SearchAreaCode').css({
                        top: (0, _zepto2.default)('body').scrollTop() + 'px'
                    });
                    that.ULSCROLL.refresh();
                }, 300);
            });

            (0, _zepto2.default)('.sp-clear-icon').on('click', function () {
                (0, _zepto2.default)('#J-Sp-input').val('');
                // $("#J-sp-ul").empty();
                that.getArea(_zepto2.default.trim((0, _zepto2.default)(this).val()));
                (0, _zepto2.default)(this).hide();
            });

            (0, _zepto2.default)('#J-SearchAreaCode').on('click', '#J-sp-ul li', function () {
                (0, _zepto2.default)('#J-Sp-input').blur();
                var index = (0, _zepto2.default)(this).attr('data-index') - 0;
                setTimeout(function () {
                    that.hide();
                    history.back();
                }, 0);

                (0, _zepto2.default)(document).trigger(that.opt.cbname || 'areacodeSelect', [that.data.area[index]]);
            });

            (0, _zepto2.default)('#J-SearchAreaCode').on('touchmove', function () {
                event.preventDefault();
            });
        }
    }]);

    return SearchAreaCode;
}();

module.exports = SearchAreaCode;

// var a = new SearchAreaCode({
//   cityId: 217,
//   serviceType : '4',
//   // title : '下车地址', //headerTitle
//   cbname : 'areacodeSelect', //callback name
// }).show();
//
// $(document).on('areacodeSelect',function(e,a){
//   console.log(a);
// })

// setTimeout(function(){
//   a.show()
// },10000)

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var STATIC_AREACODE = [{
    areaCode: '61',
    code: 'AU',
    countryId: 1,
    countryName: '澳大利亚',
    enName: 'Australia',
    name: '澳大利亚',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'ao da li ya'
}, {
    areaCode: '1',
    code: 'CA',
    countryId: 3,
    countryName: '加拿大',
    enName: 'Canada',
    name: '加拿大',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'jia na da'
}, {
    areaCode: '52',
    code: 'MX',
    countryId: 5,
    countryName: '墨西哥',
    enName: 'Mexico',
    name: '墨西哥',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'mo xi ge'
}, {
    areaCode: '27',
    code: 'ZA',
    countryId: 6,
    countryName: '南非',
    enName: 'South Africa',
    name: '南非',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'nan fei'
}, {
    areaCode: '213',
    code: 'DZ',
    countryId: 7,
    countryName: '阿尔及利亚',
    enName: 'Algeria',
    name: '阿尔及利亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'a er ji li ya'
}, {
    areaCode: '20',
    code: 'EG',
    countryId: 8,
    countryName: '埃及',
    enName: 'Egypt',
    name: '埃及',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ai ji'
}, {
    areaCode: '251',
    code: 'ET',
    countryId: 9,
    countryName: '埃塞俄比亚',
    enName: 'Ethiopia',
    name: '埃塞俄比亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ai sai e bi ya'
}, {
    areaCode: '244',
    code: 'AO',
    countryId: 10,
    countryName: '安哥拉',
    enName: 'Angola',
    name: '安哥拉',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'an ge la'
}, {
    areaCode: '267',
    code: 'BW',
    countryId: 11,
    countryName: '博茨瓦纳',
    enName: 'Botswana',
    name: '博茨瓦纳',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'bo ci wa na'
}, {
    areaCode: '242',
    code: 'CG',
    countryId: 12,
    countryName: '刚果（布）',
    enName: 'Congo',
    name: '刚果（布）',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'gang guo'
}, {
    areaCode: '233',
    code: 'GH',
    countryId: 13,
    countryName: '加纳',
    enName: 'Ghana',
    name: '加纳',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'jia na'
}, {
    areaCode: '263',
    code: 'ZW',
    countryId: 14,
    countryName: '津巴布韦',
    enName: 'Zimbabwe',
    name: '津巴布韦',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'jin ba bu wei'
}, {
    areaCode: '237',
    code: 'CM',
    countryId: 15,
    countryName: '喀麦隆',
    enName: 'Cameroon',
    name: '喀麦隆',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ka mai long'
}, {
    areaCode: '225',
    code: 'CI',
    countryId: 16,
    countryName: '科特迪瓦',
    enName: 'Côte d\'Ivoire',
    name: '科特迪瓦',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ke te di wa'
}, {
    areaCode: '254',
    code: 'KE',
    countryId: 17,
    countryName: '肯尼亚',
    enName: 'Kenya',
    name: '肯尼亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ken ni ya'
}, {
    areaCode: '230',
    code: 'MU',
    countryId: 18,
    countryName: '毛里求斯',
    enName: 'Mauritius',
    name: '毛里求斯',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'mao li qiu si'
}, {
    areaCode: '210',
    code: 'MA',
    countryId: 19,
    countryName: '摩洛哥',
    enName: 'Morocco',
    name: '摩洛哥',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'mo luo ge'
}, {
    areaCode: '258',
    code: 'MZ',
    countryId: 20,
    countryName: '莫桑比克',
    enName: 'Mozambique',
    name: '莫桑比克',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'mo sang bi ke'
}, {
    areaCode: '234',
    code: 'NG',
    countryId: 21,
    countryName: '尼日利亚',
    enName: 'Nigeria',
    name: '尼日利亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ni ri li ya'
}, {
    areaCode: '232',
    code: 'SL',
    countryId: 22,
    countryName: '塞拉利昂',
    enName: 'Sierra Leone',
    name: '塞拉利昂',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'sai la li ang'
}, {
    areaCode: '255',
    code: 'TZ',
    countryId: 23,
    countryName: '坦桑尼亚',
    enName: 'Tanzania',
    name: '坦桑尼亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'tan sang ni ya'
}, {
    areaCode: '216',
    code: 'TN',
    countryId: 24,
    countryName: '突尼斯',
    enName: 'Tunisia',
    name: '突尼斯',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'tu ni si'
}, {
    areaCode: '260',
    code: 'ZM',
    countryId: 25,
    countryName: '赞比亚',
    enName: 'Zambia',
    name: '赞比亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'zan bi ya'
}, {
    areaCode: '54',
    code: 'AR',
    countryId: 26,
    countryName: '阿根廷',
    enName: 'Argentina',
    name: '阿根廷',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'a gen ting'
}, {
    areaCode: '55',
    code: 'BR',
    countryId: 27,
    countryName: '巴西',
    enName: 'Brazil',
    name: '巴西',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ba xi'
}, {
    areaCode: '353',
    code: 'IE',
    countryId: 28,
    countryName: '爱尔兰',
    enName: 'Ireland',
    name: '爱尔兰',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'ai er lan'
}, {
    areaCode: '43',
    code: 'AT',
    countryId: 29,
    countryName: '奥地利',
    enName: 'Austria',
    name: '奥地利',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'ao di li'
}, {
    areaCode: '359',
    code: 'BG',
    countryId: 30,
    countryName: '保加利亚',
    enName: 'Bulgaria',
    name: '保加利亚',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'bao jia li ya'
}, {
    areaCode: '32',
    code: 'BE',
    countryId: 31,
    countryName: '比利时',
    enName: 'Belgium',
    name: '比利时',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'bi li shi'
}, {
    areaCode: '354',
    code: 'IS',
    countryId: 32,
    countryName: '冰岛',
    enName: 'Iceland',
    name: '冰岛',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'bing dao'
}, {
    areaCode: '45',
    code: 'DK',
    countryId: 33,
    countryName: '丹麦',
    enName: 'Denmark',
    name: '丹麦',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'dan mai'
}, {
    areaCode: '49',
    code: 'DE',
    countryId: 34,
    countryName: '德国',
    enName: 'German',
    name: '德国',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'de guo'
}, {
    areaCode: '7',
    code: 'RU',
    countryId: 35,
    countryName: '俄罗斯',
    enName: 'Russia',
    name: '俄罗斯',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'e luo si'
}, {
    areaCode: '33',
    code: 'FR',
    countryId: 36,
    countryName: '法国',
    enName: 'France',
    name: '法国',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'fa guo'
}, {
    areaCode: '358',
    code: 'FI',
    countryId: 37,
    countryName: '芬兰',
    enName: 'Finland',
    name: '芬兰',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'fen lan'
}, {
    areaCode: '31',
    code: 'NL',
    countryId: 38,
    countryName: '荷兰',
    enName: 'Netherlands',
    name: '荷兰',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'he lan'
}, {
    areaCode: '420',
    code: 'CZ',
    countryId: 39,
    countryName: '捷克',
    enName: 'Czech',
    name: '捷克',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'jie ke'
}, {
    areaCode: '47',
    code: 'NO',
    countryId: 40,
    countryName: '挪威',
    enName: 'Norway',
    name: '挪威',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'nuo wei'
}, {
    areaCode: '351',
    code: 'PT',
    countryId: 41,
    countryName: '葡萄牙',
    enName: 'Portugal',
    name: '葡萄牙',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'pu tao ya'
}, {
    areaCode: '46',
    code: 'SE',
    countryId: 42,
    countryName: '瑞典',
    enName: 'Sweden',
    name: '瑞典',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'rui dian'
}, {
    areaCode: '41',
    code: 'CH',
    countryId: 43,
    countryName: '瑞士',
    enName: 'Switzerland',
    name: '瑞士',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'rui shi'
}, {
    areaCode: '90',
    code: 'TR',
    countryId: 44,
    countryName: '土耳其',
    enName: 'Turkey',
    name: '土耳其',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'tu er qi'
}, {
    areaCode: '380',
    code: 'UA',
    countryId: 45,
    countryName: '乌克兰',
    enName: 'Ukraine',
    name: '乌克兰',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'wu ke lan'
}, {
    areaCode: '34',
    code: 'ES',
    countryId: 46,
    countryName: '西班牙',
    enName: 'Spain',
    name: '西班牙',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'xi ban ya'
}, {
    areaCode: '30',
    code: 'GR',
    countryId: 47,
    countryName: '希腊',
    enName: 'Greece',
    name: '希腊',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'xi la'
}, {
    areaCode: '36',
    code: 'HU',
    countryId: 48,
    countryName: '匈牙利',
    enName: 'Hungary',
    name: '匈牙利',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'xiong ya li'
}, {
    areaCode: '39',
    code: 'IT',
    countryId: 49,
    countryName: '意大利',
    enName: 'Italy',
    name: '意大利',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'yi da li'
}, {
    areaCode: '44',
    code: 'GB',
    countryId: 50,
    countryName: '英国',
    enName: 'United Kingdom',
    name: '英国',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'ying guo'
}, {
    areaCode: '971',
    code: 'AE',
    countryId: 51,
    countryName: '阿联酋',
    enName: 'United Arab Emirates',
    name: '阿联酋',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'a lian qiu'
}, {
    areaCode: '850',
    code: 'KP',
    countryId: 52,
    countryName: '朝鲜',
    enName: 'North Korea',
    name: '朝鲜',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'chao xian'
}, {
    areaCode: '63',
    code: 'PH',
    countryId: 53,
    countryName: '菲律宾',
    enName: 'Philippines',
    name: '菲律宾',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'fei lv bin'
}, {
    areaCode: '82',
    code: 'KR',
    countryId: 54,
    countryName: '韩国',
    enName: 'South Korea',
    name: '韩国',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'han guo'
}, {
    areaCode: '855',
    code: 'KH',
    countryId: 55,
    countryName: '柬埔寨',
    enName: 'Cambodia',
    name: '柬埔寨',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'jian pu zhai'
}, {
    areaCode: '960',
    code: 'MV',
    countryId: 56,
    countryName: '马尔代夫',
    enName: 'Maldives',
    name: '马尔代夫',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ma er dai fu'
}, {
    areaCode: '60',
    code: 'MY',
    countryId: 57,
    countryName: '马来西亚',
    enName: 'Malaysia',
    name: '马来西亚',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ma lai xi ya'
}, {
    areaCode: '976',
    code: 'MN',
    countryId: 58,
    countryName: '蒙古',
    enName: 'Mongolia',
    name: '蒙古',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'meng gu'
}, {
    areaCode: '977',
    code: 'NP',
    countryId: 59,
    countryName: '尼泊尔',
    enName: 'Nepal',
    name: '尼泊尔',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ni bo er'
}, {
    areaCode: '81',
    code: 'JP',
    countryId: 60,
    countryName: '日本',
    enName: 'Japan',
    name: '日本',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ri ben'
}, {
    areaCode: '66',
    code: 'TH',
    countryId: 61,
    countryName: '泰国',
    enName: 'Thailand',
    name: '泰国',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'tai guo'
}, {
    areaCode: '993',
    code: 'TM',
    countryId: 62,
    countryName: '土库曼斯坦',
    enName: 'Turkmenistan',
    name: '土库曼斯坦',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'tu ku man si tan'
}, {
    areaCode: '65',
    code: 'SG',
    countryId: 63,
    countryName: '新加坡',
    enName: 'Singapore',
    name: '新加坡',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'xin jia po'
}, {
    areaCode: '98',
    code: 'IR',
    countryId: 64,
    countryName: '伊朗',
    enName: 'Iran',
    name: '伊朗',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'yi lang'
}, {
    areaCode: '91',
    code: 'IN',
    countryId: 65,
    countryName: '印度',
    enName: 'India',
    name: '印度',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'yin du'
}, {
    areaCode: '62',
    code: 'ID',
    countryId: 66,
    countryName: '印度尼西亚',
    enName: 'Indonesia',
    name: '印度尼西亚',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'yin du ni xi ya'
}, {
    areaCode: '84',
    code: 'VN',
    countryId: 67,
    countryName: '越南',
    enName: 'Vietnam',
    name: '越南',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'yue nan'
}, {
    areaCode: '86',
    code: 'CN',
    countryId: 68,
    countryName: '中国',
    enName: 'China',
    name: '中国',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'zhong guo'
}, {
    areaCode: '679',
    code: 'FJ',
    countryId: 69,
    countryName: '斐济',
    enName: 'Fiji',
    name: '斐济',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'fei ji'
}, {
    areaCode: '886',
    code: 'TW',
    countryId: 70,
    countryName: '台湾地区',
    enName: 'Taiwan',
    name: '台湾地区',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'tai wan'
}, {
    areaCode: '40',
    code: 'RO',
    countryId: 71,
    countryName: '罗马尼亚',
    enName: 'Romania',
    name: '罗马尼亚',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'luo ma ni ya'
}, {
    areaCode: '48',
    code: 'PL',
    countryId: 72,
    countryName: '波兰',
    enName: 'Poland',
    name: '波兰',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'bo lan'
}, {
    areaCode: '377',
    code: 'MC',
    countryId: 73,
    countryName: '摩纳哥',
    enName: 'Monaco',
    name: '摩纳哥',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'mo na ge'
}, {
    areaCode: '680',
    countryId: 75,
    countryName: '帕劳',
    enName: 'Palau',
    name: '帕劳',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'pa lao'
}, {
    areaCode: '56',
    countryId: 76,
    countryName: '智利',
    enName: 'Chile',
    name: '智利',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'zhi li'
}, {
    areaCode: '852',
    countryId: 77,
    countryName: '香港',
    enName: 'Hong Kong',
    name: '香港',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'xiang gang'
}, {
    areaCode: '853',
    countryId: 78,
    countryName: '澳门',
    enName: 'Macau',
    name: '澳门',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ao men'
}, {
    areaCode: '856',
    countryId: 79,
    countryName: '老挝',
    enName: 'Laos',
    name: '老挝',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'lao wo'
}, {
    areaCode: '974',
    countryId: 80,
    countryName: '卡塔尔',
    enName: 'Qatar',
    name: '卡塔尔',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ka ta er'
}, {
    areaCode: '94',
    countryId: 81,
    countryName: '斯里兰卡',
    enName: 'Sri Lanka',
    name: '斯里兰卡',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'si li lan ka'
}, {
    areaCode: '95',
    countryId: 82,
    countryName: '缅甸',
    enName: 'Myanmar',
    name: '缅甸',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'mian dian'
}, {
    areaCode: '7',
    countryId: 83,
    countryName: '哈萨克斯坦',
    enName: 'Kazakhstan',
    name: '哈萨克斯坦',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ha sa ke si tan'
}, {
    areaCode: '243',
    countryId: 84,
    countryName: '刚果（金）',
    enName: 'Congo',
    name: '刚果（金）',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'gang guo'
}, {
    areaCode: '248',
    countryId: 85,
    countryName: '塞舌尔',
    enName: 'Seychelles',
    name: '塞舌尔',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'sai she er'
}, {
    areaCode: '375',
    countryId: 87,
    countryName: '白俄罗斯',
    enName: 'Belarus',
    name: '白俄罗斯',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'bai e luo si'
}, {
    areaCode: '423',
    countryId: 89,
    countryName: '列支敦士登',
    enName: 'Liechtenstein',
    name: '列支敦士登',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'lie zhi dun shi deng'
}, {
    areaCode: '421',
    countryId: 91,
    countryName: '斯洛伐克',
    enName: 'Slovak',
    name: '斯洛伐克',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'si luo fa ke'
}, {
    areaCode: '973',
    countryId: 93,
    countryName: '巴林',
    enName: 'bahrain',
    name: '巴林',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ba lin'
}, {
    areaCode: '92',
    countryId: 95,
    countryName: '巴基斯坦',
    enName: 'Pakistan',
    name: '巴基斯坦',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ba ji si tan'
}, {
    areaCode: '965',
    countryId: 97,
    countryName: '科威特',
    enName: 'Kuwait',
    name: '科威特',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ke wei te'
}, {
    areaCode: '972',
    countryId: 99,
    countryName: '以色列',
    enName: 'Israel',
    name: '以色列',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'yi se lie'
}, {
    areaCode: '381',
    countryId: 101,
    countryName: '塞尔维亚',
    enName: 'Serbia',
    name: '塞尔维亚',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'sai er wei ya'
}, {
    areaCode: '673',
    countryId: 103,
    countryName: '文莱',
    enName: 'Brunei',
    name: '文莱',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'wen lai'
}, {
    areaCode: '994',
    countryId: 105,
    countryName: '阿塞拜疆',
    enName: 'Azerbaijan',
    name: '阿塞拜疆',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'a sai bai jiang'
}, {
    areaCode: '352',
    countryId: 107,
    countryName: '卢森堡',
    enName: 'Luxembourg',
    name: '卢森堡',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'lu sen bao'
}, {
    areaCode: '53',
    countryId: 109,
    countryName: '古巴',
    enName: 'Cuba',
    name: '古巴',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'gu ba'
}, {
    areaCode: '880',
    countryId: 111,
    countryName: '孟加拉',
    enName: 'Bangladesh',
    name: '孟加拉',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'meng jia la'
}, {
    areaCode: '372',
    countryId: 113,
    countryName: '爱沙尼亚',
    enName: 'Estonia',
    name: '爱沙尼亚',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'ai sha ni ya'
}, {
    areaCode: '968',
    countryId: 115,
    countryName: '阿曼',
    enName: 'muscat',
    name: '阿曼',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'a man'
}, {
    areaCode: '962',
    countryId: 117,
    countryName: '约旦',
    enName: 'Jordan',
    name: '约旦',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'yue dan'
}, {
    areaCode: '386',
    countryId: 119,
    countryName: '斯洛文尼亚',
    enName: 'Slovenia',
    name: '斯洛文尼亚',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'si luo wen ni ya'
}, {
    areaCode: '385',
    countryId: 121,
    countryName: '克罗地亚',
    enName: 'Croatia',
    name: '克罗地亚',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'ke luo di ya'
}, {
    areaCode: '374',
    countryId: 123,
    countryName: '亚美尼亚',
    enName: 'Armenia',
    name: '亚美尼亚',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ya mei ni ya'
}, {
    areaCode: '595',
    countryId: 125,
    countryName: '巴拉圭',
    enName: 'Paraguay',
    name: '巴拉圭',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ba la gui'
}, {
    areaCode: '257',
    countryId: 127,
    countryName: '布隆迪',
    enName: 'Burundi',
    name: '布隆迪',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'bu long di'
}, {
    areaCode: '1',
    countryId: 129,
    countryName: '多米尼加共和国',
    enName: 'Dominican Republic',
    name: '多米尼加共和国',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'duo mi ni jia gong he guo'
}, {
    areaCode: '593',
    countryId: 131,
    countryName: '厄瓜多尔',
    enName: 'Ecuador',
    name: '厄瓜多尔',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'e gua duo er'
}, {
    areaCode: '57',
    countryId: 133,
    countryName: '哥伦比亚',
    enName: 'Colombia',
    name: '哥伦比亚',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ge lun bi ya'
}, {
    areaCode: '506',
    countryId: 135,
    countryName: '哥斯达黎加',
    enName: 'Costa Rica',
    name: '哥斯达黎加',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ge si da li jia'
}, {
    areaCode: '995',
    countryId: 137,
    countryName: '格鲁吉亚',
    enName: 'Georgia',
    name: '格鲁吉亚',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ge lu ji ya'
}, {
    areaCode: '371',
    countryId: 139,
    countryName: '拉脱维亚',
    enName: 'Latvia',
    name: '拉脱维亚',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'la tuo wei ya'
}, {
    areaCode: '961',
    countryId: 141,
    countryName: '黎巴嫩',
    enName: 'Lebanon ',
    name: '黎巴嫩',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'li ba nen'
}, {
    areaCode: '370',
    countryId: 143,
    countryName: '立陶宛',
    enName: 'Lithuania',
    name: '立陶宛',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'li tao wan'
}, {
    areaCode: '250',
    countryId: 145,
    countryName: '卢旺达',
    enName: 'Rwanda',
    name: '卢旺达',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'lu wang da'
}, {
    areaCode: '389',
    countryId: 147,
    countryName: '马其顿共和国',
    enName: 'Macedonia',
    name: '马其顿共和国',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'ma qi dun'
}, {
    areaCode: '264',
    countryId: 149,
    countryName: '纳米比亚',
    enName: 'Namibia',
    name: '纳米比亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'na mi bi ya'
}, {
    areaCode: '221',
    countryId: 151,
    countryName: '塞内加尔',
    enName: 'Senegal',
    name: '塞内加尔',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'sai nei jia er'
}, {
    areaCode: '357',
    countryId: 153,
    countryName: '塞浦路斯',
    enName: 'Cyprus',
    name: '塞浦路斯',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'sai pu lu si'
}, {
    areaCode: '966',
    countryId: 155,
    countryName: '沙特阿拉伯',
    enName: 'Saudi Arabia',
    name: '沙特阿拉伯',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'sha te a la bo'
}, {
    areaCode: '256',
    countryId: 157,
    countryName: '乌干达',
    enName: 'Uganda',
    name: '乌干达',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'wu gan da'
}, {
    areaCode: '598',
    countryId: 159,
    countryName: '乌拉圭',
    enName: 'Uruguay',
    name: '乌拉圭',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'wu la gui'
}, {
    areaCode: '1',
    countryId: 161,
    countryName: '牙买加',
    enName: 'Jamaica',
    name: '牙买加',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ya mai jia'
}, {
    areaCode: 'PEN',
    countryId: 163,
    countryName: '秘鲁',
    enName: 'Peru',
    name: '秘鲁',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'bi lu'
}, {
    areaCode: '675',
    countryId: 165,
    countryName: '巴布亚新几内亚',
    enName: 'Papua New Guinea',
    name: '巴布亚新几内亚',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'ba bu ya xin ji nei ya'
}, {
    areaCode: '504',
    countryId: 167,
    countryName: '洪都拉斯',
    enName: 'Tegucigalpa',
    name: '洪都拉斯',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'hong du la si'
}, {
    areaCode: '591',
    countryId: 169,
    countryName: '玻利维亚',
    enName: 'Bolivia',
    name: '玻利维亚',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'bo li wei ya'
}, {
    areaCode: '1',
    countryId: 171,
    countryName: '特立尼达和多巴哥',
    enName: 'Trinidad and Tobago',
    name: '特立尼达和多巴哥',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'te la ni da he duo ba ge'
}, {
    areaCode: '297',
    countryId: 173,
    countryName: '阿鲁巴',
    enName: 'Aruba',
    name: '阿鲁巴',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'a lu ba'
}, {
    areaCode: '382',
    countryId: 175,
    countryName: '黑山共和国',
    enName: 'Montenegro',
    name: '黑山共和国',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'hei shan gong he guo'
}, {
    areaCode: '1',
    countryId: 177,
    countryName: '巴哈马',
    enName: 'Bahamas',
    name: '巴哈马',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ba ha ma'
}, {
    areaCode: '1',
    countryId: 179,
    countryName: '百慕大',
    enName: 'Bermuda',
    name: '百慕大',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'bai mu da'
}, {
    areaCode: '1',
    countryId: 181,
    countryName: '圣卢西亚',
    enName: 'Saint Lucia',
    name: '圣卢西亚',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'sheng lu xi ya'
}, {
    areaCode: '1',
    countryId: 183,
    countryName: '安提瓜和巴布达',
    enName: 'Antigua and Barbuda',
    name: '安提瓜和巴布达',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'an ti gua he ba bu da'
}, {
    areaCode: '685',
    countryId: 185,
    countryName: '萨摩亚',
    enName: 'Samoa',
    name: '萨摩亚',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'sa mo ya'
}, {
    areaCode: '1',
    countryId: 187,
    countryName: '巴巴多斯',
    enName: 'Barbados',
    name: '巴巴多斯',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ba ba duo si'
}, {
    areaCode: '220',
    countryId: 189,
    countryName: '冈比亚',
    enName: 'Gambia ',
    name: '冈比亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'gang bi ya'
}, {
    areaCode: '238',
    countryId: 191,
    countryName: '佛得角',
    enName: 'Cabo Verde',
    name: '佛得角',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'fu de jiao'
}, {
    areaCode: '682',
    countryId: 193,
    countryName: '库克群岛',
    enName: 'Cook Islands',
    name: '库克群岛',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'ku ke qun dao'
}, {
    areaCode: '262',
    countryId: 195,
    countryName: '法属留尼旺',
    enName: 'Reunion',
    name: '法属留尼旺',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'fa shu liu ni wang'
}, {
    areaCode: '503',
    countryId: 197,
    countryName: '萨尔瓦多',
    enName: 'El Salvador',
    name: '萨尔瓦多',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'sa er wa duo'
}, {
    areaCode: '1',
    countryId: 201,
    countryName: '圣基茨和尼维斯',
    enName: 'Saint Kitts and Nevis',
    name: '圣基茨和尼维斯',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'sheng ji ci he ni wei si'
}, {
    areaCode: '1',
    countryId: 203,
    countryName: '开曼群岛',
    enName: 'Cayman Islands',
    name: '开曼群岛',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'kai man qun dao'
}, {
    areaCode: '350',
    countryId: 205,
    countryName: '直布罗陀',
    enName: 'Gibraltar',
    name: '直布罗陀',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'zhi bu luo tuo'
}, {
    areaCode: '1',
    countryId: 207,
    countryName: '格拉纳达',
    enName: 'Grenada',
    name: '格拉纳达',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ge lin na da'
}, {
    areaCode: '505',
    countryId: 209,
    countryName: '尼加拉瓜',
    enName: 'Nicaragua',
    name: '尼加拉瓜',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ni jia la gua'
}, {
    areaCode: '507',
    countryId: 211,
    countryName: '巴拿马',
    enName: 'panama',
    name: '巴拿马',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ba na ma'
}, {
    areaCode: '975',
    countryId: 213,
    countryName: '不丹',
    enName: 'bhutan',
    name: '不丹',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'bu dan'
}, {
    areaCode: '670',
    countryId: 215,
    countryName: '东帝汶',
    enName: 'Timor-Leste',
    name: '东帝汶',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'dong di wen'
}, {
    areaCode: '970',
    countryId: 217,
    countryName: '巴勒斯坦',
    enName: 'Palestine',
    name: '巴勒斯坦',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ba le si tan'
}, {
    areaCode: '963',
    countryId: 219,
    countryName: '叙利亚',
    enName: 'Syria',
    name: '叙利亚',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'xu li ya'
}, {
    areaCode: '996',
    countryId: 221,
    countryName: '吉尔吉斯斯坦',
    enName: 'Kyrgyzstan',
    name: '吉尔吉斯斯坦',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ji er ji si si tan'
}, {
    areaCode: '93',
    countryId: 223,
    countryName: '阿富汗',
    enName: 'Afghanistan',
    name: '阿富汗',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'a fu han'
}, {
    areaCode: '992',
    countryId: 225,
    countryName: '塔吉克斯坦',
    enName: 'Tajikistan',
    name: '塔吉克斯坦',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ta ji ke si tan'
}, {
    areaCode: '998',
    countryId: 227,
    countryName: '乌兹别克斯坦',
    enName: 'Uzbekistan',
    name: '乌兹别克斯坦',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'wu zi bie ke si tan'
}, {
    areaCode: '964',
    countryId: 229,
    countryName: '伊拉克',
    enName: 'Iraq ',
    name: '伊拉克',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'yi la ke'
}, {
    areaCode: '967',
    countryId: 231,
    countryName: '也门',
    enName: 'Yemen',
    name: '也门',
    orderId: 0,
    placeCategoryId: 6,
    spell: 'ye men'
}, {
    areaCode: '229',
    countryId: 233,
    countryName: '贝宁',
    enName: 'Benin',
    name: '贝宁',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'bei ning'
}, {
    areaCode: '226',
    countryId: 235,
    countryName: '布基纳法索',
    enName: 'Burkina Faso',
    name: '布基纳法索',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'bu ji na fa suo'
}, {
    areaCode: '240',
    countryId: 237,
    countryName: '赤道几内亚',
    enName: 'Equatorial Guinea',
    name: '赤道几内亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'chi dao ji nei ya'
}, {
    areaCode: '228',
    countryId: 239,
    countryName: '多哥',
    enName: 'Togo',
    name: '多哥',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'duo ge'
}, {
    areaCode: '253',
    countryId: 241,
    countryName: '吉布提',
    enName: 'Djibouti',
    name: '吉布提',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ji bu ti'
}, {
    areaCode: '224',
    countryId: 243,
    countryName: '几内亚',
    enName: 'Guinea',
    name: '几内亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ji nei ya'
}, {
    areaCode: '241',
    countryId: 245,
    countryName: '加蓬',
    enName: 'Gabon',
    name: '加蓬',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'jia peng'
}, {
    areaCode: '265',
    countryId: 247,
    countryName: '马拉维',
    enName: 'Malawi',
    name: '马拉维',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ma la wei'
}, {
    areaCode: '261',
    countryId: 249,
    countryName: '马达加斯加',
    enName: 'Madagascar',
    name: '马达加斯加',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ma da jia si jia'
}, {
    areaCode: '509',
    countryId: 251,
    countryName: '海地',
    enName: 'Haiti',
    name: '海地',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'hai di'
}, {
    areaCode: '502',
    countryId: 253,
    countryName: '危地马拉',
    enName: 'Guatemala',
    name: '危地马拉',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'wei di ma la'
}, {
    areaCode: '596',
    countryId: 255,
    countryName: '马提尼克',
    enName: 'Martinique',
    name: '马提尼克',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'ma ti ni ke'
}, {
    areaCode: '592',
    countryId: 257,
    countryName: '圭亚那',
    enName: 'Guyana',
    name: '圭亚那',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'gui ya na'
}, {
    areaCode: '597',
    countryId: 259,
    countryName: '苏里南',
    enName: 'Suriname ',
    name: '苏里南',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'su li nan'
}, {
    areaCode: '58',
    countryId: 261,
    countryName: '委内瑞拉',
    enName: 'Venezuela',
    name: '委内瑞拉',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'wei nei rui la'
}, {
    areaCode: '223',
    countryId: 263,
    countryName: '马里',
    enName: 'Mali',
    name: '马里',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ma li'
}, {
    areaCode: '222',
    countryId: 265,
    countryName: '毛里塔尼亚',
    enName: 'Mauritania ',
    name: '毛里塔尼亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'mao li ta ni ya'
}, {
    areaCode: '231',
    countryId: 267,
    countryName: '利比里亚',
    enName: 'Liberia',
    name: '利比里亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'li bi li ya'
}, {
    areaCode: '218',
    countryId: 269,
    countryName: '利比亚',
    enName: 'Libya',
    name: '利比亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'li bi ya'
}, {
    areaCode: '227',
    countryId: 271,
    countryName: '尼日尔',
    enName: 'Niger',
    name: '尼日尔',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ni ri er'
}, {
    areaCode: '249',
    countryId: 273,
    countryName: '苏丹',
    enName: 'Sudan',
    name: '苏丹',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'su dan'
}, {
    areaCode: '235',
    countryId: 275,
    countryName: '乍得',
    enName: 'Chad',
    name: '乍得',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'zha de'
}, {
    areaCode: '236',
    countryId: 277,
    countryName: '中非共和国',
    enName: 'Central African Republic',
    name: '中非共和国',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'zhong fei'
}, {
    areaCode: '266',
    countryId: 279,
    countryName: '莱索托',
    enName: 'Lesotho',
    name: '莱索托',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'suo lai tuo'
}, {
    areaCode: '689',
    countryId: 281,
    countryName: '塔希提',
    enName: 'Tahiti',
    name: '塔希提',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'ta xi ti'
}, {
    areaCode: '678',
    countryId: 283,
    countryName: '瓦努阿图',
    enName: 'Vanuatu',
    name: '瓦努阿图',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'wa tu a tu'
}, {
    areaCode: '355',
    countryId: 285,
    countryName: '阿尔巴尼亚',
    enName: 'Albania',
    name: '阿尔巴尼亚',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'a er ba ni ya'
}, {
    areaCode: '376',
    countryId: 287,
    countryName: '安道尔',
    enName: 'Andorra',
    name: '安道尔',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'an dao er'
}, {
    areaCode: '387',
    countryId: 289,
    countryName: '波斯尼亚和黑塞哥维那',
    enName: 'Bosnia-Herzegovina',
    name: '波斯尼亚和黑塞哥维那',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'bo si ni ya he hei sai ge wei na'
}, {
    areaCode: '501',
    countryId: 291,
    countryName: '伯利兹',
    enName: 'Belize',
    name: '伯利兹',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'bo li zi'
}, {
    areaCode: '1',
    countryId: 293,
    countryName: '多米尼克',
    enName: 'Dominican Republic',
    name: '多米尼克',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'duo mi ni ke'
}, {
    areaCode: '291',
    countryId: 295,
    countryName: '厄立特里亚',
    enName: 'Eritrea',
    name: '厄立特里亚',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'e li te li ya'
}, {
    areaCode: '594',
    countryId: 297,
    countryName: '法属圭亚那',
    enName: 'French Guiana',
    name: '法属圭亚那',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'fa shu gui ya na'
}, {
    areaCode: '590',
    countryId: 299,
    countryName: '瓜德罗普岛',
    enName: 'Guadeloupe',
    name: '瓜德罗普岛',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'gua de luo pu dao'
}, {
    areaCode: '686',
    countryId: 301,
    countryName: '基里巴斯',
    enName: 'Kiribati',
    name: '基里巴斯',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'ji li ba si'
}, {
    areaCode: '245',
    countryId: 303,
    countryName: '几内亚比绍',
    enName: 'Guinea-Bissau',
    name: '几内亚比绍',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ji nei ya bi shao'
}, {
    areaCode: '269',
    countryId: 305,
    countryName: '科摩罗',
    enName: 'Comoros',
    name: '科摩罗',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ke mo luo'
}, {
    areaCode: '689',
    countryId: 307,
    countryName: '法属波利尼西亚',
    enName: 'French Polynesia',
    name: '法属波利尼西亚',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'fa shu bo li ni xi ya'
}, {
    areaCode: '692',
    countryId: 309,
    countryName: '马绍尔群岛',
    enName: 'Marshall Islands',
    name: '马绍尔群岛',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'ma shao er qun dao'
}, {
    areaCode: '1',
    countryId: 311,
    countryName: '美属萨摩亚',
    enName: 'American Samoa',
    name: '美属萨摩亚',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'mei shu sa mo ya'
}, {
    areaCode: '373',
    countryId: 313,
    countryName: '摩尔多瓦',
    enName: 'Moldova',
    name: '摩尔多瓦',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'mo er duo wa'
}, {
    areaCode: '674',
    countryId: 315,
    countryName: '瑙鲁',
    enName: 'Nauru',
    name: '瑙鲁',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'nao lu'
}, {
    areaCode: '239',
    countryId: 317,
    countryName: '圣多美和普林西比',
    enName: 'Sao Tome and Principe',
    name: '圣多美和普林西比',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'sheng duo mei he pu lin xi bi'
}, {
    areaCode: '268',
    countryId: 319,
    countryName: '斯威士兰',
    enName: 'Swaziland',
    name: '斯威士兰',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'si wei shi lan'
}, {
    areaCode: '677',
    countryId: 321,
    countryName: '所罗门群岛',
    enName: 'Solomon Islands',
    name: '所罗门群岛',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'suo luo men qun dao'
}, {
    areaCode: '252',
    countryId: 323,
    countryName: '索马里',
    enName: 'Somalia',
    name: '索马里',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'suo ma li'
}, {
    areaCode: '676',
    countryId: 325,
    countryName: '汤加',
    enName: 'Tonga',
    name: '汤加',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'tang jia'
}, {
    areaCode: '688',
    countryId: 327,
    countryName: '图瓦卢',
    enName: 'Tuvalu',
    name: '图瓦卢',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'tu wa lu'
}, {
    areaCode: '687',
    countryId: 329,
    countryName: '新喀里多尼亚',
    enName: 'New Caledonia',
    name: '新喀里多尼亚',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'xin ka li duo ni ya'
}, {
    areaCode: '379',
    code: 'VA',
    countryId: 331,
    countryName: '梵蒂冈',
    enName: 'vatican',
    name: '梵蒂冈',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'fan di gang'
}, {
    areaCode: '298',
    code: 'FO',
    countryId: 333,
    countryName: '法罗群岛',
    enName: 'faroe islands',
    name: '法罗群岛',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'fa luo qun dao'
}, {
    areaCode: '299',
    code: 'GL',
    countryId: 335,
    countryName: '格陵兰',
    enName: 'greenland',
    name: '格陵兰',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'ge lin lan'
}, {
    areaCode: '383',
    code: 'XK',
    countryId: 337,
    countryName: '科索沃',
    enName: 'kosovo',
    name: '科索沃',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'ke suo wo'
}, {
    areaCode: '356',
    code: 'MT',
    countryId: 339,
    countryName: '马耳他',
    enName: 'malta',
    name: '马耳他',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'ma qi ta'
}, {
    areaCode: '378',
    code: 'SM',
    countryId: 341,
    countryName: '圣马力诺',
    enName: 'san marino',
    name: '圣马力诺',
    orderId: 0,
    placeCategoryId: 5,
    spell: 'sheng ma li nuo'
}, {
    areaCode: '247',
    code: 'SH-AC',
    countryId: 343,
    countryName: '阿森松',
    enName: 'ascension',
    name: '阿森松',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'a sen song'
}, {
    areaCode: '262',
    code: 'YT',
    countryId: 345,
    countryName: '马约特岛',
    enName: 'mayotte',
    name: '马约特岛',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'ma yue te dao'
}, {
    areaCode: '211',
    code: 'SS',
    countryId: 347,
    countryName: '南苏丹',
    enName: 'south sudan',
    name: '南苏丹',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'nan su dan'
}, {
    areaCode: '290',
    code: 'SH-HL',
    countryId: 349,
    countryName: '圣赫勒拿岛',
    enName: 'saint helena',
    name: '圣赫勒拿岛',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'sheng he le na dao'
}, {
    areaCode: '290',
    code: 'SH-TA',
    countryId: 351,
    countryName: '特里斯坦-达库尼亚群岛',
    enName: 'tristan da cunha',
    name: '特里斯坦-达库尼亚群岛',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'te li si tan da ku ni ya qun dao'
}, {
    areaCode: '212',
    code: 'EH',
    countryId: 353,
    countryName: '西撒哈拉',
    enName: 'western sahara',
    name: '西撒哈拉',
    orderId: 0,
    placeCategoryId: 3,
    spell: 'xi sa ha la'
}, {
    areaCode: '1',
    code: 'AI',
    countryId: 355,
    countryName: '安圭拉',
    enName: 'anguilla',
    name: '安圭拉',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'an gui la'
}, {
    areaCode: '1',
    code: 'PR',
    countryId: 357,
    countryName: '波多黎各',
    enName: 'Puerto Rico',
    name: '波多黎各',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'bo duo li ge'
}, {
    areaCode: '599',
    code: 'BQ-BO',
    countryId: 359,
    countryName: '波内赫',
    enName: 'bonaire',
    name: '波内赫',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'bo nei he'
}, {
    areaCode: '590',
    code: 'MF',
    countryId: 361,
    countryName: '法属圣马丁',
    enName: 'saint martin',
    name: '法属圣马丁',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'fa shu sheng ma ding'
}, {
    areaCode: '1',
    code: 'VG',
    countryId: 363,
    countryName: '英属维尔京群岛',
    enName: 'british virgin islands',
    name: '英属维尔京群岛',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'ying shu wei er jing qun dao'
}, {
    areaCode: '1',
    code: 'TC',
    countryId: 365,
    countryName: '特克斯和凯科斯群岛',
    enName: 'turks and caicos islands',
    name: '特克斯和凯科斯群岛',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'te ke si he kai ke si qun dao'
}, {
    areaCode: '599',
    code: 'BQ-SE',
    countryId: 367,
    countryName: '圣尤斯特歇斯',
    enName: 'sint eustatius',
    name: '圣尤斯特歇斯',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'sheng you si te xie si'
}, {
    areaCode: '1',
    code: 'VC',
    countryId: 369,
    countryName: '圣文森特和格林纳丁斯',
    enName: 'st vincent and the grenadines',
    name: '圣文森特和格林纳丁斯',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'sheng wen sen te he ge lin na ding si'
}, {
    areaCode: '508',
    code: 'PM',
    countryId: 371,
    countryName: '圣皮埃尔和密克隆群岛',
    enName: 'saint pierre et miquelon',
    name: '圣皮埃尔和密克隆群岛',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'sheng pi ai er he mi ke long qun dao'
}, {
    areaCode: '590',
    code: 'BL',
    countryId: 373,
    countryName: '圣巴泰勒米岛',
    enName: 'saint barthelemy',
    name: '圣巴泰勒米岛',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'sheng ba tai le mi dao'
}, {
    areaCode: '599',
    code: 'BQ-SA',
    countryId: 375,
    countryName: '萨巴岛',
    enName: 'saba',
    name: '萨巴岛',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'sa ba dao'
}, {
    areaCode: '1',
    code: 'MS',
    countryId: 377,
    countryName: '蒙塞拉特',
    enName: 'montserrat',
    name: '蒙塞拉特',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'meng sai la te'
}, {
    areaCode: '1',
    code: 'VI',
    countryId: 379,
    countryName: '美属维尔京群岛',
    enName: 'us virgin islands',
    name: '美属维尔京群岛',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'mei shu wei er jing qun dao'
}, {
    areaCode: '599',
    code: 'CW',
    countryId: 381,
    countryName: '库拉索',
    enName: 'curacao',
    name: '库拉索',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'ku la suo'
}, {
    areaCode: '1',
    code: 'SX',
    countryId: 383,
    countryName: '荷属圣马丁',
    enName: 'sint maarten',
    name: '荷属圣马丁',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'he shu sheng ma ding'
}, {
    areaCode: '500',
    code: 'FK',
    countryId: 385,
    countryName: '福克兰群岛（马尔维纳斯群岛）',
    enName: 'falkland islands',
    name: '福克兰群岛（马尔维纳斯群岛）',
    orderId: 0,
    placeCategoryId: 4,
    spell: 'fu ke lan qun dao'
}, {
    areaCode: '1',
    code: 'MP',
    countryId: 387,
    countryName: '北马里亚纳群岛',
    enName: 'northern mariana islands',
    name: '北马里亚纳群岛',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'bei ma li ya na qun dao'
}, {
    areaCode: '1',
    code: 'GU',
    countryId: 389,
    countryName: '关岛',
    enName: 'guam',
    name: '关岛',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'guan dao'
}, {
    areaCode: '691',
    code: 'FM',
    countryId: 391,
    countryName: '密克罗尼西亚联邦',
    enName: 'federated states of micronesia',
    name: '密克罗尼西亚联邦',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'mi ke luo ni xi ya lian bang'
}, {
    areaCode: '683',
    code: 'NU',
    countryId: 393,
    countryName: '纽埃',
    enName: 'niue',
    name: '纽埃',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'niu ai'
}, {
    areaCode: '64',
    code: 'PN',
    countryId: 395,
    countryName: '皮特凯恩群岛',
    enName: 'pitcairn islands',
    name: '皮特凯恩群岛',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'pi te kai en qun dao'
}, {
    areaCode: '690',
    code: 'TK',
    countryId: 397,
    countryName: '托克劳',
    enName: 'tokelau',
    name: '托克劳',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'tuo ke lao'
}, {
    areaCode: '681',
    code: 'WF',
    countryId: 399,
    countryName: '瓦利斯群岛和富图纳群岛',
    enName: 'wallis and futuna',
    name: '瓦利斯群岛和富图纳群岛',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'wa li si qun dao he fu tu na qun dao'
}, {
    areaCode: '64',
    code: 'NZ',
    countryId: 2,
    countryName: '新西兰',
    enName: 'New Zealand',
    name: '新西兰',
    orderId: 0,
    placeCategoryId: 1,
    spell: 'xin xi lan'
}, {
    areaCode: '1',
    code: 'US',
    countryId: 4,
    countryName: '美国',
    enName: 'United States',
    name: '美国',
    orderId: 0,
    placeCategoryId: 2,
    spell: 'mei guo'
}];

module.exports = STATIC_AREACODE;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<div id=\'J-SearchAreaCode\' class=\'sp-wrap hackmax\'>  <div class=\'J-sp-fix\'>    <div class=\'sp-input-wrap\'>          <span class=\'sp-search-icon\'></span><input placeholder=\'请选择区号\' id=\'J-Sp-input\'><span class=\'sp-clear-icon\'></span>     </div>  </div>  <div class=\'sp-res-wrap\'>    <ul  id=\'J-sp-ul\'>      {@each area as item,index}      <li data-index=${index}><a onclick=\"javascript:void(0)\">${item.countryName}(${item.areaCode})</a></li>      {@/each}    </ul>  </div>  <div class=\'sp-loading\'> </div></div>"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "{@each area as item,index}<li data-index=${index}><a onclick=\"javascript:void(0)\">${item.countryName}(${item.areaCode})</a></li>{@/each}"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ?
			'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	/*
	This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	- galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
	me.isBadAndroid = (function() {
		var appVersion = window.navigator.appVersion;
		// Android browser is not a chrome browser.
		if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
			var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
			if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
				return parseFloat(safariVersion[1]) < 535.19;
			} else {
				return true;
			}
		} else {
			return false;
		}
	})();

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();
function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS
		disablePointer : !utils.hasPointer,
		disableTouch : utils.hasPointer || !utils.hasTouch,
		disableMouse : utils.hasPointer || utils.hasTouch,
		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true,
		bindToWrapper: typeof window.onmousedown === "undefined"
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

	// Some defaults
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.2.0',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);
		clearTimeout(this.resizeTimeout);
 		this.resizeTimeout = null;
		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
		  // for button property
		  // http://unixpapa.com/js/mouse.html
		  var button;
	    if (!e.which) {
	      /* IE case */
	      button = (e.button < 2) ? 0 :
	               ((e.button == 4) ? 1 : 2);
	    } else {
	      /* All others */
	      button = e.button;
	    }
			if ( button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this._transitionTime();
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
		}

/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;
		var transitionType = this.options.useTransition && easing.style;
		if ( !time || transitionType ) {
				if(transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;

		var durationProp = utils.style.transitionDuration;
		this.scrollerStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.scrollerStyle[durationProp] === '0.0001ms') {
					self.scrollerStyle[durationProp] = '0s';
				}
			});
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},
	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			if (that.indicators) {
				for ( var i = that.indicators.length; i--; ) {
					fn.call(that.indicators[i]);
				}
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = null;
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			if(!that.options.snap) {
				that._execEvent('scrollEnd');
			}
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
		this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this.maxScrollX);
					y = Math.max(-el[i].offsetTop, this.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( this.enabled && !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		var durationProp = utils.style.transitionDuration;
		this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
		// remove 0.0001ms
		var self = this;
		if(utils.isBadAndroid) {
			rAF(function() {
				if(self.wrapperStyle[durationProp] === '0.0001ms') {
					self.wrapperStyle[durationProp] = '0s';
				}
			});
		}
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.fadeScrollbars ) {
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
		}
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		this.indicatorStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.indicatorStyle[durationProp] === '0.0001ms') {
					self.indicatorStyle[durationProp] = '0s';
				}
			});
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else if ( true ) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return IScroll; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zepto = __webpack_require__(0);

var _zepto2 = _interopRequireDefault(_zepto);

var _juicer = __webpack_require__(1);

var _juicer2 = _interopRequireDefault(_juicer);

var _index = __webpack_require__(42);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(17);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hash = __webpack_require__(18);

var Header = function () {
    function Header(opt) {
        _classCallCheck(this, Header);

        /**
         opt = {
                title : '标题',
                backUrl : '回退地址',
                subShow : '是否显示右侧字标题',
                subTitle : '右侧字标题',
                pannel : '#wrap' 是否是一个弹层,如果是,点击返回就关闭弹层,
                wrap : '包装期,如果有,就有,没有就是 body'
                hash:'#'
            }
         */
        this.data = {
            title: opt.title,
            back: opt.backUrl,
            pannel: opt.pannel || '',
            isHidePannel: opt.isHidePannel ? opt.isHidePannel : false,
            subShow: opt.subShow || 'true',
            subTitle: opt.subTitle || '联系客服',
            wrap: opt.wrap || 'body',
            hash: opt.hash,
            subBack: opt.subBack,
            sub: opt.sub,
            callback: opt.callback
        };
        this.init();
    }

    _createClass(Header, [{
        key: 'init',
        value: function init() {
            this.cacheDom();
            this.renderUI();
            this.bindEvent();
        }
    }, {
        key: 'cacheDom',
        value: function cacheDom() {
            this.dom = {};

            this.dom.box = (0, _zepto2.default)(this.data.wrap).find('.J-header'), this.dom.back = this.dom.box.find('.back'), this.dom.contactButton = this.dom.box.find('.contact-show'), this.dom.contactClose = this.dom.box.find('.contact .close'), this.dom.contactBox = this.dom.box.find('.contact-wapper');
        }
    }, {
        key: 'renderUI',
        value: function renderUI() {
            if ((0, _zepto2.default)(this.data.wrap).find('header.J-header')) {
                (0, _zepto2.default)(this.data.wrap).find('header.J-header').remove();
            }
            (0, _zepto2.default)(this.data.wrap).prepend((0, _juicer2.default)(_index2.default, this.data));
        }
    }, {
        key: '_setHash',
        value: function _setHash() {
            var that = this;
            if (that.data.hash) {
                window.__hashs = window.__hashs || [];
                window.__hashs.push(that.data.hash);
                location.hash = that.data.hash;
                setTimeout(function () {
                    (0, _zepto2.default)(window).on('hashchange', function (obj) {
                        var newHash = obj.newURL.match(/#.+/) && obj.newURL.match(/#.+/)[0] || '';
                        var oldHash = obj.oldURL.match(/#.+/) && obj.oldURL.match(/#.+/)[0] || '';
                        // if(newHash == that.data.hash){
                        //   return;
                        // }
                        // debugger;
                        // if(oldHash == that.data.hash){
                        //   return;
                        // }
                        var isForword = function () {
                            return window.__hashs.indexOf(newHash) > window.__hashs.indexOf(oldHash);
                        }();
                        if (isForword) return;
                        if (that.data.pannel && that.data.pannel.attr('id') === oldHash.replace(/#/, '') && that.data.isHidePannel == false) {
                            (0, _zepto2.default)(that.data.pannel).remove();
                            that.data.callback && that.data.callback();
                            return;
                        }
                        if (that.data.pannel && that.data.pannel.attr('id') === oldHash.replace(/#/, '') && that.data.isHidePannel == true) {
                            (0, _zepto2.default)(that.data.pannel).hide();
                            that.data.callback && that.data.callback();
                            return;
                        }
                    });
                    // window.onhashchange = function(){
                    //   debugger;
                    //
                    // }
                }, 1);
            }
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var that = this;
            that.cacheDom();
            that._setHash();
            if (that.data.subShow == 'true') {
                that.dom.contactButton.show();
            }
            that.dom.contactButton.on('click', function () {
                if (that.data.subBack) that.data.subBack.call(that, this, that.dom);else that.dom.contactBox.show();
            });
            that.dom.contactClose.on('click', function () {
                that.dom.contactBox.hide();
            });

            that.dom.back.on('click', function () {
                // alert(123)
                // debugger;
                if (that.data.hash && location.hash != '') {
                    // debugger
                    that.data.callback && that.data.callback.call(that, that.data.hash);
                    (0, _zepto2.default)(document).trigger('backHeader');
                    window.history.back();
                }

                if (that.data.pannel && that.data.isHidePannel == false) {
                    (0, _zepto2.default)(that.data.pannel).remove();
                    return;
                }
                if (that.data.pannel && that.data.isHidePannel == true) {
                    (0, _zepto2.default)(that.data.pannel).hide();
                    return;
                }
            });
        }
    }]);

    return Header;
}();

module.exports = Header;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "  <header class=\"header J-header hackmaxAuto\" id=\"J-header\">    <b class=\"icon-ioc47 back\">  </b>    {@if sub}    <h2 class=\"mult\">${title}<span>${sub}</span></h2>    {@else}    <h2>${title}</h2>    {@/if}    <span class=\"contact-show\"></span>    <div class=\"contact-wapper\" style=\"display:none\">      <div class=\"contact\">        <h3>联系客服</h3>        <b class=\"close\">&times;</b>        <ul>          <li>            <span>境内客服</span><a href=\"tel://4006100009\">400-610-0009</a>          </li>          <li>           <span>境外客服</span><a href=\"tel://861059715436\">+86 10-59715436</a>          </li>        </ul>      </div>    </div>  </header>"

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(23));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(23)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
		var a = (typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? factory(require("local-Utils")) : factory(root["local-Utils"]);
		for (var i in a) {
			((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
		}
	}
})(undefined, function (__WEBPACK_EXTERNAL_MODULE_1__) {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/i: moduleId,
					/******/l: false,
					/******/exports: {}
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.l = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // identity function for calling harmony imports with the correct context
			/******/__webpack_require__.i = function (value) {
				return value;
			};
			/******/
			/******/ // define getter function for harmony exports
			/******/__webpack_require__.d = function (exports, name, getter) {
				/******/if (!__webpack_require__.o(exports, name)) {
					/******/Object.defineProperty(exports, name, {
						/******/configurable: false,
						/******/enumerable: true,
						/******/get: getter
						/******/ });
					/******/
				}
				/******/
			};
			/******/
			/******/ // getDefaultExport function for compatibility with non-harmony modules
			/******/__webpack_require__.n = function (module) {
				/******/var getter = module && module.__esModule ?
				/******/function getDefault() {
					return module['default'];
				} :
				/******/function getModuleExports() {
					return module;
				};
				/******/__webpack_require__.d(getter, 'a', getter);
				/******/return getter;
				/******/
			};
			/******/
			/******/ // Object.prototype.hasOwnProperty.call
			/******/__webpack_require__.o = function (object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "/";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(__webpack_require__.s = 2);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports) {

			// removed by extract-text-webpack-plugin

			/***/},
		/* 1 */
		/***/function (module, exports) {

			module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __WEBPACK_AMD_DEFINE_RESULT__; /*
                                      * Scheme - $1.1.8
                                      * 功能：拉起，下载app
                                      * 说明：***
                                      * 参数： {
                                      **
                                      * }
                                      */

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}();

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var _gol = window || undefined;
			var utils = __webpack_require__(1);

			var _iosStore_c = //更换地址还没有上
			'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=999773808&mt=8',
			    _iosStore_g = 'https://itunes.apple.com/cn/app/id1041889164?mt=8',
			    _androidStore_c = 'http://download.huangbaoche.com/capp/official',
			    _androidStore_g = 'http://download.huangbaoche.com/gapp/official',
			    _qqStore_c = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.hugboga.custom&g_f=991653',
			    _qqStore_g = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.hugboga.guide&g_f=991653';

			__webpack_require__(0);

			var _extend = function _extend(obj, props) {
				for (var key in props) {
					obj[key] = props[key];
				}return obj;
			};
			var _uuid = function _uuid() {
				return 'WG_Scheme' + new Date().getTime();
			};

			var Scheme = function () {
				function Scheme(option) {
					_classCallCheck(this, Scheme);

					this.name = 'Scheme';
					this.version = '$1.1.4';
					this.plateForm = utils._plateForm();
					this.option = {
						hint: true,
						auto: false,
						io: 'hbcc://?{“t”:”3”,”f”:”1”}'
					};
					this.data = {
						name: this.name,
						uuid: _uuid(),
						isPull: false,
						isDown: false

					};
					this.dom = {};
					this._option = option;

					this.init();
				}

				_createClass(Scheme, [{
					key: 'init',
					value: function init() {
						if (this._auto) this._init();
					}
				}, {
					key: '_init',
					value: function _init() {
						var that = this;
						if (this.timer) clearTimeout(this.timer);
						this.pull();
						this.timer = setTimeout(function () {
							if (_gol.document.hidden || _gol.document.webkitHidden || _gol.document.mozHidden || _gol.document.msHidden) {
								this.data.isPull = true;
								clearTimeout(that.timer);
								return;
							}
							that.down();
						}, 2500);
					}
				}, {
					key: 'upDown',
					value: function upDown() {
						this.init();
					}
				}, {
					key: 'pull',
					value: function pull() {
						if (this.data.isPull) return;
						if (this._isWx) {
							this._href = this._io;
						} else {
							if (this._ios) {
								this._href = this._io;
							} else {
								if (this._ioEdition) this._href = this._io;else this._iframe = this._io;
							}
						}
					}
				}, {
					key: 'down',
					value: function down() {
						if (this.data.isDown) return;
						if (this._isWx) {
							this._href = this._isQqStore;
						} else {
							if (this._ios) {
								this._href = this._iosStore;
							} else {
								try {
									this._iframe = this._androidStore;
								} catch (e) {
									this._href = this._androidStore;
								}
							}
						}
						if (this.timer) clearTimeout(this.timer);
					}
				}, {
					key: '_name',
					get: function get() {
						return this.name;
					}
				}, {
					key: '_version',
					get: function get() {
						return this.version;
					}
				}, {
					key: '_option',
					set: function set(option) {
						_extend(this.option, option);
					},
					get: function get() {
						return this.option;
					}
				}, {
					key: '_data',
					set: function set(data) {
						_extend(this.data, data);
					},
					get: function get() {
						return this.data;
					}
				}, {
					key: '_auto',
					get: function get() {
						return this.option.auto;
					}
				}, {
					key: '_hint',
					get: function get() {
						return this.option.hint;
					}
				}, {
					key: '_androidStore',
					get: function get() {
						return this.plateForm.app == 'hbcg' || this._ioIshbcg ? _androidStore_g : _androidStore_c;
					}
				}, {
					key: '_iosStore',
					get: function get() {
						return this.plateForm.app == 'hbcg' || this._ioIshbcg ? _iosStore_g : _iosStore_c;
					}
				}, {
					key: '_io',
					get: function get() {
						return this.option.io;
					}
				}, {
					key: '_ioIshbcg',
					get: function get() {
						return (/hbcg:\/\//.test(this._io)
						);
					}
				}, {
					key: '_android',
					get: function get() {
						return 'android' == this.plateForm.os || 'linux' == this.plateForm.os;
					}
				}, {
					key: '_isWx',
					get: function get() {
						return 'micromessenger' == this.plateForm.app;
					}
				}, {
					key: '_ioVersion',
					get: function get() {
						return this.plateForm.version;
					}
				}, {
					key: '_ioEdition',
					get: function get() {
						var edition = navigator.userAgent.toLowerCase().match(/(chrome)\/([\d.]+)/);
						return edition && edition[2];
					}
				}, {
					key: '_ios',
					get: function get() {
						return 'iphone' == this.plateForm.os || 'cpu' == this.plateForm.os;
					}
				}, {
					key: '_letios8',
					get: function get() {
						return this._ios && this.plateForm.version < 9;
					}
				}, {
					key: '_href',
					set: function set(src) {
						if (_gol.parent) _gol.parent.location.href = src;else _gol.location.href = src;
					}
				}, {
					key: '_isQqStore',
					get: function get() {
						return this.plateForm.app == 'hbcg' || this._ioIshbcg ? _qqStore_g : _qqStore_c;
					}
				}, {
					key: '_iframe',
					set: function set(src) {
						var iframe = _gol.document.createElement('iframe');
						var body = _gol.document.body;
						iframe.src = src;
						iframe.style.display = 'none';
						body.appendChild(iframe);

						iframe.timer = setTimeout(function () {
							body.removeChild(iframe);
							clearTimeout(iframe.timer);
						}, 500);
					}
				}]);

				return Scheme;
			}();

			if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return Scheme;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') module.exports = Scheme;else _gol.Scheme = Scheme;

			/***/
		}]
		/******/)
	);
});
//# sourceMappingURL=main.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "	<div class=\"coupon-box\">      <div class=\"coupon-box-top\"></div>      <div class=\"coupon-data\">        <h3>送你<em>300元</em>大礼包</h3>        <p>现在领取，即可在下单时使用</p>        <div class=\"coupon-form\">          <div class=\"coupon-input coupon-tel\">            <div class=\"coupon-area\">							<span id=\"coupon-area\">+86</span>							<b></b>						</div>						<input type=\"tel\" class=\"coupon-phone\" id=\"coupon-phone\" placeholder=\"输入手机号\" value=\"\">          </div>          <div class=\"coupon-input coupon-code\">            <input type=\"tel\" id=\"coupon-code\" placeholder=\"输入验证码\" maxlength=\"4\" value=\"\">          </div>          <div class=\"coupon-send\">            <em>发送验证码</em>            <span>再次发送<var class=\"coupon-time\">60</var></span>          </div>          <div class=\"coupon-error\">请填写正确的手机号/验证码无效</div>          <button id=\"J-Sa-pop-btn\" class=\"coupon-form-button disabled J-sa\" data-sa-title=\"pop,领取\">领取</button>        </div>      </div>      <div class=\"coupon-finish\">        <h3>已领取</h3>        <p>可在“我的优惠券”中查看礼包</p>        <button class=\"coupon-finish-button J-sa\" data-sa-title=\"pop,下载\">下载APP</button>				<p>APP内下单更优惠，还能挑选司导哦</p>      </div>      <div class=\"coupon-box-bottom\"></div>      <div class=\"coupon-box-close J-sa\" data-sa-title=\"pop,关闭\"><b class=\"icon-ioc56\"></b></div>    </div>"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var a = factory();
    for (var i in a) {
      ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
    }
  }
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // identity function for calling harmony imports with the correct context
      /******/__webpack_require__.i = function (value) {
        return value;
      };
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "/";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /*
      * ComImg - $1.0.5
      * 功能：***
      * 说明：***
      * 参数： {
      **  url ： required
      *   param : required
      * }
      */
      function isArray(object) {
        return object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && Array == object.constructor;
      }
      var _uuid = function _uuid() {
        return 'WG_ComImg' + new Date().getTime();
      };

      var ComImg = function () {
        function ComImg(option) {
          _classCallCheck(this, ComImg);

          this.name = 'ComImg';
          this.version = '$1.0.5';
          this.option = option;
          this.data = {
            name: this.name,
            uuid: _uuid()
          };
          this.init();
        }

        _createClass(ComImg, [{
          key: 'init',
          value: function init() {
            if (!this.option.url) {
              throw new Error('url 必传');
              return;
            }
            if (!this.option.param) {
              throw new Error('param 必传');
              return;
            }
          }
        }, {
          key: 'getUrl',
          value: function getUrl() {
            return this._getTrueUrl();
          }
        }, {
          key: '_string2Url',
          value: function _string2Url() {
            /**
             * 把String转换成URL
             * @url [Url]
             */
            if (!this.option.url) {
              throw new Error('Shit');
              return;
            }
            var urlObj = {};
            var url = document.createElement('a');
            url.href = this.option.url;
            for (var key in window.location) {
              urlObj[key] = url[key];
            }
            return urlObj;
          }
        }, {
          key: '_getTrueUrl',
          value: function _getTrueUrl() {
            /**
             * 获取转换后的url
             *
             */
            var url = this._string2Url();
            if (!url.pathname) {
              throw new Error('Shit');
              return;
            }
            var pathArray = url.pathname.match(/\/[\/]?([^\/]*)\/([^!|?]*)[!]?([\S]*)/);
            if (isArray(pathArray) && pathArray.length >= 2) {
              var domain = pathArray[1];
              var path = pathArray[2];
              var query = this._getTrueParam(pathArray[3]);
              if (domain.indexOf('fr-') > -1) {
                return 'https://' + domain + '.huangbaoche.com/' + path + query;
              } else {
                // 另外一种规则..
                var res = this._anotherRule(url.hostname);
                return 'https://' + res + '.huangbaoche.com/' + domain + '/' + path + query;
              }
            } else {
              /**
               * 如查Array 的length 小于1 那么直接return 之前的url
               * @type {[type]}
               */
              return url.href;
            }
          }
        }, {
          key: '_anotherRule',
          value: function _anotherRule(dd) {
            /**
             * [domain 返回值]
             * @dd {String} : domain
             */
            var domain = '';
            var env = function (host) {
              if (/hbcdn-dev/.test(host)) {
                return 'dev';
              }
              if (/hbcdn-test/.test(host)) {
                return 'test';
              }
              if (/hbcdn\./.test(host)) {
                return 'pub';
              }
            }(dd);
            switch (env) {
              case 'dev':
                domain = 'fr-hd-dev';
                break;
              case 'test':
                domain = 'fr-hb-t';
                break;
              case 'pub':
                domain = 'fr-static';
                break;
              default:
                domain = 'fr-static';
            }

            return domain;
          }
        }, {
          key: '_getTrueParam',
          value: function _getTrueParam(par) {
            /**
             * 获取转换后的param
             * par 这个是从URL中分析出来的，只可能是m,l,...
             * 传入的param优先级最高，传入的param会覆盖par
             */
            if (this.option.param) {
              return '?' + this.option.param;
            } else {
              return par ? '!' + par : '';
            }
          }
        }]);

        return ComImg;
      }();

      module.exports = ComImg;

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=main.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===( false?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e.LazyLoad=t()}(this,function(){"use strict";var e=function(){return{elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null,callback_enter:null}},t=!("onscroll"in window)||/glebot/.test(navigator.userAgent),n=function(e,t){e&&e(t)},o=function(e){return e.getBoundingClientRect().top+window.pageYOffset-e.ownerDocument.documentElement.clientTop},i=function(e,t,n){return(t===window?window.innerHeight+window.pageYOffset:o(t)+t.offsetHeight)<=o(e)-n},s=function(e){return e.getBoundingClientRect().left+window.pageXOffset-e.ownerDocument.documentElement.clientLeft},r=function(e,t,n){var o=window.innerWidth;return(t===window?o+window.pageXOffset:s(t)+o)<=s(e)-n},l=function(e,t,n){return(t===window?window.pageYOffset:o(t))>=o(e)+n+e.offsetHeight},a=function(e,t,n){return(t===window?window.pageXOffset:s(t))>=s(e)+n+e.offsetWidth},c=function(e,t,n){return!(i(e,t,n)||l(e,t,n)||r(e,t,n)||a(e,t,n))},u=function(e,t){var n,o=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)},d=function(e,t){return e.getAttribute("data-"+t)},h=function(e,t,n){return e.setAttribute("data-"+t,n)},f=function(e,t){var n=e.parentNode;if("PICTURE"===n.tagName)for(var o=0;o<n.children.length;o++){var i=n.children[o];if("SOURCE"===i.tagName){var s=d(i,t);s&&i.setAttribute("srcset",s)}}},_=function(e,t,n){var o=e.tagName,i=d(e,n);if("IMG"===o){f(e,t);var s=d(e,t);return s&&e.setAttribute("srcset",s),void(i&&e.setAttribute("src",i))}"IFRAME"!==o?i&&(e.style.backgroundImage='url("'+i+'")'):i&&e.setAttribute("src",i)},p="undefined"!=typeof window,m=p&&"classList"in document.createElement("p"),g=function(e,t){m?e.classList.add(t):e.className+=(e.className?" ":"")+t},v=function(e,t){m?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},w=function(t){this._settings=_extends({},e(),t),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};w.prototype={_reveal:function(e){var t=this._settings,o=function o(){t&&(e.removeEventListener("load",i),e.removeEventListener("error",o),v(e,t.class_loading),g(e,t.class_error),n(t.callback_error,e))},i=function i(){t&&(v(e,t.class_loading),g(e,t.class_loaded),e.removeEventListener("load",i),e.removeEventListener("error",o),n(t.callback_load,e))};n(t.callback_enter,e),"IMG"!==e.tagName&&"IFRAME"!==e.tagName||(e.addEventListener("load",i),e.addEventListener("error",o),g(e,t.class_loading)),_(e,t.data_srcset,t.data_src),n(t.callback_set,e)},_loopThroughElements:function(){var e=this._settings,o=this._elements,i=o?o.length:0,s=void 0,r=[],l=this._isFirstLoop;for(s=0;s<i;s++){var a=o[s];e.skip_invisible&&null===a.offsetParent||(t||c(a,e.container,e.threshold))&&(l&&g(a,e.class_initial),this._reveal(a),r.push(s),h(a,"was-processed",!0))}for(;r.length;)o.splice(r.pop(),1),n(e.callback_processed,o.length);0===i&&this._stopScrollHandler(),l&&(this._isFirstLoop=!1)},_purgeElements:function(){var e=this._elements,t=e.length,n=void 0,o=[];for(n=0;n<t;n++){var i=e[n];d(i,"was-processed")&&o.push(n)}for(;o.length>0;)e.splice(o.pop(),1)},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},handleScroll:function(){var e=this._settings.throttle;if(0!==e){var t=Date.now(),n=e-(t-this._previousLoopTime);n<=0||n>e?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=t,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),n))}else this._loopThroughElements()},update:function(){this._elements=Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null}};var b=window.lazyLoadOptions;return p&&b&&function(e,t){var n=t.length;if(n)for(var o=0;o<n;o++)u(e,t[o]);else u(e,t)}(w,b),w});

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);