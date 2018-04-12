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
/******/ 		3: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

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
var Layer = __webpack_require__(10);
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
/* 10 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zepto = __webpack_require__(0);

var _zepto2 = _interopRequireDefault(_zepto);

var _juicer = __webpack_require__(1);

var _juicer2 = _interopRequireDefault(_juicer);

var _index = __webpack_require__(22);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(17);

__webpack_require__(7);

__webpack_require__(19);

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
            subBack: opt.subBack
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
            this.dom.box = (0, _zepto2.default)(this.data.wrap).find('.header'), this.dom.back = this.dom.box.find('.back'), this.dom.contactButton = this.dom.box.find('.contact-show'), this.dom.contactClose = this.dom.box.find('.contact .close'), this.dom.contactBox = this.dom.box.find('.contact-wapper');
        }
    }, {
        key: 'renderUI',
        value: function renderUI() {
            (0, _zepto2.default)(this.data.wrap).prepend((0, _juicer2.default)(_index2.default, this.data));
        }
    }, {
        key: '_setHash',
        value: function _setHash() {
            var that = this;
            if (that.data.hash) {
                location.hash = that.data.hash;
            }
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var that = this;
            that.cacheDom();
            // that._setHash();
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

                if (that.data.pannel && that.data.isHidePannel == false) {
                    (0, _zepto2.default)(that.data.pannel).remove();
                    return;
                }
                if (that.data.pannel && that.data.isHidePannel == true) {
                    (0, _zepto2.default)(that.data.pannel).hide();
                    return;
                }

                window.history.back();
            });
        }
    }]);

    return Header;
}();

module.exports = Header;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "  <header class=\"header hackmax\" id=\"header\">    <b class=\"icon-ioc47 back\">  </b>    <h2>${title}</h2>    <span class=\"contact-show icon-ioc111\"></span>    <div class=\"contact-wapper\" style=\"display:none\">      <div class=\"contact\">        <h3>联系客服</h3>        <b class=\"close\">&times;</b>        <ul>          <li>            <span>境内客服</span><a href=\"tel://4006100009\">400-610-0009</a>          </li>          <li>           <span>境外客服</span><a href=\"tel://861059715436\">+86 10-59715436</a>          </li>        </ul>      </div>    </div>  </header>"

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(0);

var adultTpl = __webpack_require__(50);
var childTpl = __webpack_require__(51);
var baggagesTpl = __webpack_require__(52);
var hotelTpl = __webpack_require__(53);

var juicer = __webpack_require__(1);
var Layer = __webpack_require__(10);
var Header = __webpack_require__(21);
var util = __webpack_require__(2);

var newCalendar = __webpack_require__(54);

__webpack_require__(58);
__webpack_require__(12);
__webpack_require__(7);

new (__webpack_require__(20))();

var Sku = function () {
    function Sku() {
        _classCallCheck(this, Sku);

        this._juicerHelper();
        this.cacheData();
        this.cacheDom();
        this.bindEvent();
    }

    _createClass(Sku, [{
        key: 'cacheData',
        value: function cacheData() {
            this.data = {
                info: {}, // 这是信息
                date: '',
                passenger: {
                    adultNo: 2,
                    childNo: 0,
                    childSeat: 0,
                    maxPerson: window.__capacity.numOfPerson || 12, // 最大人数（指定城市）
                    maxBagNo: window.__capacity.totalCap || 14, // 最大行李数（指定城市）
                    currentBagNo: '' // 可用的最大行李数
                },
                hotel: {
                    hotelCostPrice: window.__goodsDetail.hotelCostPrice,
                    hotelStatus: window.__goodsDetail.hotelStatus,
                    dateCount: window.__goodsDetail.daysCount,
                    roomNo: 1
                },
                param: this.getGoodsNo(),
                nextParam: {}
            };
        }
    }, {
        key: 'cacheDom',
        value: function cacheDom() {
            var that = this;
            that.dom = {
                wrap: $('#page'),
                infoWrap: $('.sku-info-wrap'),
                adultWrap: $('.people-adults'),
                childWrap: $('.people-children'),
                baggagesWrap: $('.people-baggages'),
                hotelWrap: $('.room-info-content'),
                adultsNum: $('.people-adults-num'),
                childrenNum: $('.people-children-num'),
                roomNum: $('.room-num')
            };
        }
    }, {
        key: '_renderAdult',
        value: function _renderAdult() {
            var that = this;
            that.dom.adultWrap.html(juicer(adultTpl, that.data.passenger));
            that.cacheDom();
        }
    }, {
        key: '_renderChild',
        value: function _renderChild() {
            var that = this;
            that.dom.childWrap.html(juicer(childTpl, that.data.passenger));
            that.cacheDom();
        }
    }, {
        key: '_renderHotel',
        value: function _renderHotel() {
            var that = this;
            that.dom.hotelWrap.html(juicer(hotelTpl, that.data.hotel));
            that.cacheDom();
        }
    }, {
        key: '_renderBaggages',
        value: function _renderBaggages() {
            var that = this;

            that.dom.baggagesWrap.html(juicer(baggagesTpl, that.data.passenger));
            that.cacheDom();
        }
    }, {
        key: '_juicerHelper',
        value: function _juicerHelper() {
            juicer.register('floor', function (data) {
                return Math.floor(data);
            });
        }
    }, {
        key: 'maxBaggages',
        value: function maxBaggages(adult, child, childSeat) {
            // 最大行李数&符合规定判定
            var that = this;
            var adultNum = (adult || 0) - 0;
            var childNum = (child || 0) - 0;
            var childSeatNum = ((childSeat || 0) - 0) * 0.5;
            var max = Math.floor(that.data.passenger.maxPerson - adultNum - childNum - childSeatNum);
            if (max >= 0 && max <= that.data.passenger.maxPerson) {
                that.data.passenger.currentBagNo = that.data.passenger.maxBagNo - 0 - adultNum - childNum - childSeatNum;
                return true;
            }

            return false;
        }
    }, {
        key: 'getGoodsNo',
        value: function getGoodsNo() {
            return util.getRequestParam('goodsNo') || location.href.match(/sku\/([^?]*)/)[1];
        }
    }, {
        key: 'maxNumber',
        value: function maxNumber(type) {
            var that = this;
            var adultNum = (that.data.passenger.adultNo || 0) - 0; // 保存成人人数
            var childNum = (that.data.passenger.childNo || 0) - 0; // 保存孩子人数
            var childSeatNum = (that.data.passenger.childSeat || 0) - 0; // 保存儿童座椅数
            // const baggagesNum = (that.data.passenger.baggagesNo || 0) - 0;// 保存行李数
            switch (type) {
                case 'adult-more':
                    adultNum++;
                    if (that.maxBaggages(adultNum, childNum, childSeatNum)) {
                        that.data.passenger.adultNo = adultNum;
                        that._renderAdult();
                        that._renderBaggages();
                    }
                    break;
                case 'adult-less':
                    adultNum--;
                    if (adultNum >= 1 && that.maxBaggages(adultNum, childNum, childSeatNum)) {
                        that.data.passenger.adultNo = adultNum;
                        that._renderAdult();
                        that._renderBaggages();
                    }
                    break;
                case 'child-more':
                    childNum++;
                    if (that.maxBaggages(adultNum, childNum, childSeatNum)) {
                        that.data.passenger.childNo = childNum;
                        that._renderChild();
                        that._renderBaggages();
                    }
                    break;
                case 'child-less':
                    if (childNum == childSeatNum) {
                        childNum--;
                        childSeatNum--;
                    } else {
                        childNum--;
                    }
                    if (childNum >= 0 && that.maxBaggages(adultNum, childNum, childSeatNum)) {
                        that.data.passenger.childNo = childNum;
                        that.data.passenger.childSeat = childSeatNum;
                        that._renderChild();
                        that._renderBaggages();
                    }
                    break;
                case 'childSeat-more':
                    childSeatNum++;
                    if (childSeatNum <= childNum && that.maxBaggages(adultNum, childNum, childSeatNum)) {
                        that.data.passenger.childSeat = childSeatNum;
                        that._renderChild();
                        that._renderBaggages();
                    }
                    break;
                case 'childSeat-less':
                    childSeatNum--;
                    if (childSeatNum >= 0 && that.maxBaggages(adultNum, childNum, childSeatNum)) {
                        that.data.passenger.childSeat = childSeatNum;
                        that._renderChild();
                        that._renderBaggages();
                    }
                    break;
                default:
                    return false;
            }
        }
    }, {
        key: 'msg',
        value: function msg(_msg) {
            new Layer({
                msg: _msg
            });
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var that = this;
            new Header({
                title: '行程安排',
                backUrl: '',
                subShow: true,
                subTitle: '联系客服'
            });

            new newCalendar({
                goodsNo: 'IC1180440001',
                wrap: $('.sku-date'),
                cbname: 'newCalendarSelected'
            });

            // 座椅行李数
            that.dom.wrap.on('click', '.sku-num-modi', function () {
                var type = $(this).attr('data-type');
                that.maxNumber(type);
            });

            // 房间数量
            that.dom.wrap.on('click', '.room-more', function () {
                if (that.data.hotel.roomNo < 100) {
                    that.data.hotel.roomNo++;
                    that._renderHotel();
                }
            });
            that.dom.wrap.on('click', '.room-less', function () {
                if (that.data.hotel.roomNo > 1) {
                    that.data.hotel.roomNo--;
                    that._renderHotel();
                }
            });

            // 行李标准说明
            that.dom.wrap.on('click', '.baggages-info', function () {
                $('.J-baggages-wrap').show();
            });
            that.dom.wrap.on('click', '.J-baggages-wrap', function () {
                $(this).hide();
            });

            // 下一步点击按钮
            that.dom.wrap.on('click', '.next-btn-content', function () {
                that.data.nextParam = {
                    goodsNo: that.data.param,
                    serviceDate: that.data.date,
                    // hotelStatus: that.data.hotel.hotelStatus,
                    hotelRoom: that.data.hotel.roomNo,
                    hotelDays: that.data.hotel.dateCount,
                    hotelCostPrice: that.data.hotel.hotelCostPrice,
                    adultNo: that.data.passenger.adultNo,
                    childNo: that.data.passenger.childNo,
                    childSeat: that.data.passenger.childSeat
                };
                if (that.data.date) {
                    window.location.href = '/car?param=' + JSON.stringify(that.data.nextParam);
                } else {
                    that.msg('请先选择日期');
                }
                // console.log(that.data.nextParam);
                // console.log(`总房间价格为${that.data.hotel.hotelCostPrice*that.data.hotel.hotelStatus}`);
            });

            // 监听选择时间
            $(document).off('newCalendarSelected').on('newCalendarSelected', function (e, data) {

                that.data.date = data;
                console.log(data);
            });
        }
    }]);

    return Sku;
}();

new Sku();

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<span>成人</span><div class=\"sku-people-nums people-adults-nums\">	<span class=\"sku-num-modi {@if adultNo == 1}sku-num-false{@/if}\" data-type=\"adult-less\">-</span>	<span class=\"sku-num\">${adultNo}</span>	<span class=\"sku-num-modi\" data-type=\"adult-more\">+</span></div>"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<div class=\"sku-child-num\">	<span>儿童</span>	<span class=\"children-limit\">（12岁以下）</span>	<div class=\"sku-people-nums people-children-nums\">		<span class=\"sku-num-modi {@if childNo == 0}sku-num-false{@/if}\" data-type=\"child-less\">-</span>		<span class=\"sku-num\">${childNo}</span>		<span class=\"sku-num-modi\" data-type=\"child-more\">+</span>	</div></div>{@if childNo > 0}<div class=\"sku-child-seat\">	<span>儿童座椅</span>	<div class=\"sku-people-nums people-child-seats\">		<span class=\"sku-num-modi {@if childSeat == 0}sku-num-false{@/if}\" data-type=\"childSeat-less\">-</span>		<span class=\"sku-num\">${childSeat}</span>		<span class=\"sku-num-modi\" data-type=\"childSeat-more\">+</span>	</div></div>{@/if}"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<span>可携带行李</span><span class=\"baggages-info\">行李标准说明</span><div class=\"people-baggages-nums\">	<span class=\"people-baggages-num\">${floor(currentBagNo)}</span>	<span class=\"people-baggages-unit\">件</span></div>"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<span class=\"room-date\">共${dateCount}晚&nbsp;|&nbsp;</span><span class=\"room-nums-title\">房间数</span><span class=\"room-prices\">（￥${hotelCostPrice * roomNo}）</span><div class=\"room-nums\">	<span class=\"room-less sku-num-modi {@if roomNo == 1}sku-num-false{@/if}\">-</span>	<span class=\"room-num\">${roomNo}</span>	<span class=\"room-more sku-num-modi {@if roomNo == 100}sku-num-flase{@/if}\">+</span></div>"

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INDEXTPL = __webpack_require__(55);
var INNERTPL = __webpack_require__(56);
var juicer = __webpack_require__(1);
var ajax = __webpack_require__(3);
// const Swiper = require('widgets/swiper/swiper.min.js');
var Swiper = window.Swiper;
var $ = __webpack_require__(0);
var apiConfig = __webpack_require__(6);
__webpack_require__(57);
// require('widgets/swiper/swiper.css');

var newCalendar = function () {
    function newCalendar(opt) {
        _classCallCheck(this, newCalendar);

        this.opt = opt;
        debugger;
        this.addJuicerHelper();
        this.cacheData();
        this.cacheDOM();
        this.renderUI();
        this.bindEvent();
        this.getRemoteCan(this.data.month);
    }

    _createClass(newCalendar, [{
        key: 'cacheData',
        value: function cacheData() {
            var now = this.opt.now || new Date();
            var month = now.getFullYear() + '-' + (now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1);
            var month6 = function (n) {
                var year = n.getFullYear();
                var month = n.getMonth() + 1;
                var yearres = year;
                var monthres = '';
                var res = [];
                for (var i = 0; i < 6; i++) {
                    if (month + i < 10) {
                        monthres = '0' + (month + i);
                    } else if (month + i > 12) {
                        yearres = year + 1;
                        monthres = month + i - 12 < 10 ? '0' + (month + i - 12) : month + i - 12;
                    } else {
                        monthres = month + i;
                    }
                    res.push(yearres + '-' + monthres);
                }
                return res;
            }(now);
            this.data = {
                now: now,
                month: month,
                month6: month6,
                select: this.opt.select || ''
            };
        }
    }, {
        key: 'cacheDOM',
        value: function cacheDOM() {
            this.dom = {
                wrap: this.opt.wrap
            };
        }
    }, {
        key: 'getRemoteCan',
        value: function getRemoteCan(date) {
            debugger;

            var that = this;
            if (that.data.date) {
                that.renderInner(that.data.date);
                return;
            }
            var startServiceDate = function (s) {

                var start = new Date(s);
                return start.getFullYear() + '-' + (start.getMonth() + 1 < 10 ? '0' + (start.getMonth() + 1) : start.getMonth() + 1) + '-01';
            }(date);
            var endServiceDate = function (e) {
                var end = new Date(e);
                var year = end.getFullYear();
                var month = end.getMonth() + 1;
                return end.getFullYear() + '-' + (end.getMonth() + 1 < 10 ? '0' + (end.getMonth() + 1) : end.getMonth() + 1) + '-' + new Date(year, month, 0).getDate();
            }(date);

            var param = {
                url: '/api/goods/goodsStock',
                method: 'GET',
                header: {},
                data: {
                    goodsNo: this.opt.goodsNo,
                    startServiceDate: startServiceDate,
                    endServiceDate: endServiceDate
                },
                success: function success(res) {
                    if (that.data.select == '') {
                        that.getSelectDay(res.data.goodsStockList);
                    }

                    var data = that.data[date] = that.getArrByobj(res.data.goodsStockList);
                    // 获取当前月的第一天的Index;
                    that.data[date].firstIndex = that.getIndexOfWeek(date);
                    that.data[date].endIndex = that.data[date].firstIndex + data.data.length;
                    var _day = that.data.now.getDate() < 10 ? '0' + that.data.now.getDate() : that.data.now.getDate();
                    that.data[date].today = that.data.month + '-' + _day;
                    console.log(that.data);
                    data.select = that.data.select;
                    that.renderInner(data);
                },
                error: function error(res) {}
            };
            debugger;
            ajax.sendRequest(param);
        }
    }, {
        key: 'getSelectDay',
        value: function getSelectDay(list) {
            var that = this;
            var select = '';
            for (var i = 0; i < list.length; i++) {
                if (list[i].stockStatus == '101') {
                    select = list[i].serviceDate;
                    break;
                } else {
                    continue;
                }
            }
            if (select) {
                that.data.select = select;
                $(document).trigger(that.opt.cbname || 'newCalendarSelect', [that.data.select]);
            }
        }
    }, {
        key: 'getArrByobj',
        value: function getArrByobj(res) {
            var arr = [];
            var key = void 0;
            for (key in res) {
                arr.push(res[key]);
            }
            return { data: arr };
        }
    }, {
        key: 'getIndexOfWeek',
        value: function getIndexOfWeek(res) {
            return new Date(res + '-01').getDay();
        }
    }, {
        key: 'addJuicerHelper',
        value: function addJuicerHelper() {
            var that = this;
            juicer.register('getDayOfString', function (str) {
                return new Date(str).getDate();
            });
            juicer.register('getClassOf', function (object) {
                var res = '';
                if (object.stockStatus == 201) {
                    res += ' can-invalid';
                    return res;
                } else if (object.stockStatus == 301) {
                    res += ' can-invalid';
                    return res;
                }
                res += ' can-ok';
                return res;
            });

            juicer.register('getClassOf2', function (object) {
                var res = '';
                if (object.past) {
                    res += ' can-invalid';
                    return res;
                }
                if (!object.past) {
                    res += ' can-notpast';
                }
                if (!object.serviceAble) {
                    res += ' can-hole';
                    return res;
                }
                if (object.daily) {
                    res += ' can-hole';
                    return res;
                }
                if (object.pickup) {
                    res += ' can-half';
                }
                return res;
            });
            juicer.register('getFuckFormat', function (str) {
                return that.fuckFormat(str);
            });
        }
    }, {
        key: 'fuckFormat',
        value: function fuckFormat(str) {
            var date = new Date(str);
            return date.getFullYear() + '年' + (date.getMonth() + 1) + '月';
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            // Add one more handler for this event
            var that = this;
            this.swiper.on('slideChangeEnd', function () {
                var date = $(that.swiper.container[0]).find('.swiper-slide-active').attr('data-date');
                console.log('slideEnd');
                console.log(date);
                that.getRemoteCan(date);
                that.dom.opTitle.html(that.fuckFormat(date));
            });
            this.swiper.on('slideChangeStart', function () {
                // this._ajax && this._ajax.abort();
            });
            this.dom.leftBtn.on('click', function () {
                that.swiper.slidePrev();
            });
            this.dom.rightBtn.on('click', function () {
                that.swiper.slideNext();
            });

            this.dom.wrap.on('click', '.can-ok', function () {
                var t = $(this);
                var val = t.attr('data-date');
                if (val) {
                    $('.W-Can-main-date-wrap li').removeClass('ui-select');
                    t.addClass('ui-select');
                    that.data.select = val;
                    // console.log(that.data.select);
                    $(document).trigger(that.opt.cbname || 'newCalendarSelect', [that.data.select]);
                }
            });
        }
    }, {
        key: 'renderUI',
        value: function renderUI() {
            debugger;
            this.dom.wrap.html(juicer(INDEXTPL, this.data));
            this.swiper = new Swiper('.W-Can-main-date .swiper-container', { autoHeight: true });
            // this.dom.innerDom = this.dom.wrap.find('.W-Can-main-date')
            this.dom.leftBtn = this.dom.wrap.find('.W-Can-op-left-btn');
            this.dom.rightBtn = this.dom.wrap.find('.W-Can-op-right-btn');
            this.dom.opTitle = this.dom.wrap.find('.W-Can-op-title');
        }
    }, {
        key: 'renderInner',
        value: function renderInner(res) {
            var activeSlide = $(this.swiper.container[0]).find('.swiper-slide-active');
            activeSlide.html(juicer(INNERTPL, res));
            this.swiper && this.swiper.update();
        }
    }]);

    return newCalendar;
}();

module.exports = newCalendar;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<div class=\"WG-Canlendar-wrap\">    <div class=\"W-Can-title\">        <h3>出行日期(当地时间)</h3>        <div class=\"W-Can-op\">            <div class=\"W-Can-op-left-btn\"><small class=\"icon-ioc91 op-left-btn\"></small></div>            <span class=\"W-Can-op-title\">${getFuckFormat(month6[0])}</span>            <div class=\"W-Can-op-right-btn\"><small class=\"icon-ioc93 op-right-btn\"></small></div>        </div>    </div>    <div class=\"W-Can-main\">        <div class=\"W-Can-main-week\">            <ul>                <li>日</li>                <li>一</li>                <li>二</li>                <li>三</li>                <li>四</li>                <li>五</li>                <li>六</li>            </ul>        </div>        <div class=\"W-Can-main-date\">            <div class=\"swiper-container\">              <div class=\"swiper-wrapper\">                {@each month6 as item}                    <div class=\"swiper-slide W-Can-main-dates\" data-date=${item}> <div class=\"swiper-lazy-preloader\"></div></div>                {@/each}              </div>            </div>        </div>    </div></div>"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"W-Can-main-date-wrap\">    {@each i in range(0,42)}        {@if i >= firstIndex && i < endIndex}            <li             class=\"${getClassOf(data[i-firstIndex])} {@if today == data[i-firstIndex].serviceDate}ui-today{@/if} {@if select == data[i-firstIndex].serviceDate}ui-select{@/if}\"             data-date=\"${data[i-firstIndex].serviceDate}\"            >                <em>{@if today == data[i-firstIndex].serviceDate}今天{@else}${getDayOfString(data[i-firstIndex].serviceDate)}{@/if}</em>                <i></i>            </li>        {@else if endIndex < 35 && i < 35}            <li class=\"can-item can-invalid\"></li>        {@else if i < firstIndex}            <li class=\"can-item can-invalid\"></li>        {@/if}    {@/each}</ul>"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);