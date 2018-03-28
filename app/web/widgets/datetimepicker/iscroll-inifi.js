function t(t) {
    if (this.wrapper = typeof t.wrapper == 'string' ? $(t.wrapper) : t.wrapper,
        this.scroller = typeof t.scroller == 'string' ? $(t.scroller) : t.scroller,
        !t.wrapper[0] || !t.scroller[0]) { throw 'param error'; }
    this.swrapper = this.wrapper,
    this.wrapper = this.wrapper[0],
    this.scroller = this.scroller[0],
    this.scrollerStyle = this.scroller.style,
    this.options = {
        step: !1,
        scrollbars: !0,
        startY: 0,
        preventDefault: !1,
        scrollOffset: 0,
        scrollType: 'y',
        bounceTime: 400,
        bounceEasing: e.ease.circular,
        bounce: !0,
        momentum: !0,
        deceleration: 6e-4,
        bindToWrapper: !0,
        disablePointer: !e.hasPointer,
        resizePolling: 60,
        startX: 0,
        startY: 0,
        flipStep: null
    };
    for (const i in t) { this.options[i] = t[i]; }
    this.translateZ = ' translateZ(0)',
    this.x = 0,
    this.y = 0,
    this._events = {},
    this.dir = 'forward',
    this._init(),
    this.refresh(),
    this.scrollTo(this.options.startX, this.options.startY),
    this.enable();
}
function i(t) {
    let i = document.createElement('div'),
        s = document.createElement('div');
    return i.style.cssText = 'position:absolute;z-index:9999',
    s.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px',
    t == 'y' ? (i.style.cssText += ';height:7px;left:2px;right:2px;bottom:0',
        s.style.height = '100%') : (i.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px',
        s.style.width = '100%'),
    i.style.cssText += ';overflow:hidden',
    i.appendChild(s),
    i;
}
function s(t, i) {
    this.wrapper = typeof i.el == 'string' ? document.querySelector(i.el) : i.el,
    this.indicator = this.wrapper.children[0],
    this.scrollType = i.scrollType,
    this.wrapperStyle = this.wrapper.style,
    this.indicatorStyle = this.indicator.style,
    this.scroller = t,
    this.sizeRatioX = 1,
    this.sizeRatioY = 1,
    this.maxPosX = 0,
    this.maxPosY = 0,
    this.wrapperStyle[e.style.transform] = this.scroller.translateZ,
    this.wrapperStyle[e.style.transitionDuration] = '0ms',
    this.wrapperStyle.opacity = '0';
}
var e = function() {
    function t(t) {
        return e === !1 ? !1 : e === '' ? t : e + t.charAt(0).toUpperCase() + t.substr(1);
    }
    var i = {},
        s = document.createElement('div').style,
        e = function() {
            for (var t, i = [ 't', 'webkitT', 'MozT', 'msT', 'OT' ], e = 0, o = i.length; o > e; e++) {
                if (t = i[e] + 'ransform',
                    t in s) { return i[e].substr(0, i[e].length - 1); }
            }
            return !1;
        }();
    return i.getTime = Date.now || function() {
        return (new Date()).getTime();
    }
    ,
    i.addEvent = function(t, i, s, e) {
        t[0] && t != window.top && (t = t[0]),
        t.addEventListener(i, s, !!e);
    }
    ,
    i.removeEvent = function(t, i, s, e) {
        t[0] && t != window.top && (t = t[0]),
        t.removeEventListener(i, s, !!e);
    }
    ,
    i.momentum = function(t, i, s, e, o, n, r) {
        let h,
            a,
            l = t - i,
            c = Math.abs(l) / s;
        return r = void 0 === r ? 6e-4 : r,
        n = n || 0,
        h = t + c * c / (2 * r) * (l < 0 ? -1 : 1),
        a = c / r,
        e > h ? (h = o ? e - o / 2.5 * (c / 8) : e,
            l = Math.abs(h - t),
            a = l / c) : h > 0 + n && (h = o ? o / 2.5 * (c / 8) + n : 0,
            l = Math.abs(t) + h,
            a = l / c),
        {
            destination: Math.round(h),
            duration: a
        };
    }
    ,
    $.extend(i, {
        hasTouch: 'ontouchstart' in window,
        hasPointer: false && !(!window.PointerEvent && !window.MSPointerEvent)
    }),
    $.extend(i, {
        prefixPointerEvent(t) {
            return window.MSPointerEvent ? 'MSPointer' + t.charAt(7).toUpperCase() + t.substr(8) : t;
        }
    }),
    $.extend(i.style = {}, {
        transform: t('transform'),
        transitionTimingFunction: t('transitionTimingFunction'),
        transitionDuration: t('transitionDuration'),
        transitionDelay: t('transitionDelay'),
        transformOrigin: t('transformOrigin')
    }),
    $.extend(i.eventType = {}, {
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
    }),
    $.extend(i.ease = {}, {
        quadratic: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn(t) {
                return t * (2 - t);
            }
        },
        circular: {
            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
            fn(t) {
                return Math.sqrt(1 - --t * t);
            }
        },
        back: {
            style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fn(t) {
                const i = 4;
                return (t -= 1) * t * ((i + 1) * t + i) + 1;
            }
        },
        bounce: {
            style: '',
            fn(t) {
                return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }
        },
        elastic: {
            style: '',
            fn(t) {
                let i = 0.22,
                    s = 0.4;
                return t === 0 ? 0 : t == 1 ? 1 : s * Math.pow(2, -10 * t) * Math.sin(2 * (t - i / 4) * Math.PI / i) + 1;
            }
        }
    }),
    i;
}();
t.prototype = {
    _init() {
        this._initEvents(),
        this.options.scrollbars && this._initIndicator();
    },
    refresh() {
        this.wrapper.offsetHeight,
        this.wrapperWidth = this.wrapper.clientWidth,
        this.scrollerWidth = this.scroller.offsetWidth,
        this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
        this.wrapperHeight = this.wrapper.clientHeight,
        this.scrollerHeight = this.scroller.offsetHeight,
        this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
        this.maxScrollX = this.maxScrollX - this.options.scrollOffset,
        this.maxScrollY = this.maxScrollY - this.options.scrollOffset,
        this.options.scrollType == 'y' ? (this.maxScrollX = 0,
            this.options.scrollOffset === 0 && (this.maxScrollY = Math.min(this.maxScrollY, 0))) : (this.maxScrollY = 0,
            this.options.scrollOffset === 0 && (this.maxScrollX = Math.min(this.maxScrollX, 0))),
        this.endTime = 0,
        this._execEvent('refresh'),
        this.resetPosition();
    },
    _initEvents(t) {
        let i = t ? e.removeEvent : e.addEvent,
            s = this.options.bindToWrapper ? this.wrapper : window;
        i(window, 'orientationchange', this),
        i(window, 'resize', this),
        e.hasTouch ? (i(this.wrapper, 'touchstart', this),
            i(s, 'touchmove', this),
            i(s, 'touchcancel', this),
            i(s, 'touchend', this)) : e.hasPointer && !this.options.disablePointer ? (i(this.wrapper, e.prefixPointerEvent('pointerdown'), this),
            i(s, e.prefixPointerEvent('pointermove'), this),
            i(s, e.prefixPointerEvent('pointercancel'), this),
            i(s, e.prefixPointerEvent('pointerup'), this)) : (i(this.wrapper, 'mousedown', this),
            i(s, 'mousemove', this),
            i(s, 'mousecancel', this),
            i(s, 'mouseup', this)),
        i(this.scroller, 'transitionend', this),
        i(this.scroller, 'webkitTransitionEnd', this),
        i(this.scroller, 'oTransitionEnd', this),
        i(this.scroller, 'MSTransitionEnd', this);
    },
    _start(t) {
        if (this.enabled && (!this.initiated || e.eventType[t.type] === this.initiated)) {
            let i,
                s = t.touches ? t.touches[0] : t;
            if (this.initiated = e.eventType[t.type],
                this.moved = !1,
                this.distY = 0,
                this._transitionTime(),
                this.startTime = e.getTime(),
                this.isInTransition) {
                this.isInTransition = !1,
                i = this.getComputedPosition();
                let o = Math.round(i.x),
                    n = Math.round(i.y);
                this._translate(o, n),
                this._execEvent('scrollEnd');
            }
            this.startX = this.x,
            this.startY = this.y,
            this.absStartX = this.x,
            this.absStartY = this.y,
            this.pointX = s.pageX,
            this.pointY = s.pageY,
            this._execEvent('beforeScrollStart'),
            this.options.preventDefault && t.preventDefault();
        }
    },
    _move(t) {
        if (this.enabled && e.eventType[t.type] === this.initiated) {
            let i,
                s,
                o,
                n,
                r = t.touches ? t.touches[0] : t,
                h = r.pageX - this.pointX,
                a = r.pageY - this.pointY,
                l = e.getTime();
            if (!(this.options.scrollType === 'x' && Math.abs(a) > Math.abs(h))) {
                let c = this.x,
                    p = this.y,
                    d = this.x + h,
                    u = this.y + a,
                    f = Math.abs(h) >= Math.abs(a) ? c - d > 0 ? 'left' : 'right' : p - u > 0 ? 'up' : 'down';
                if (this.pointX = r.pageX,
                    this.pointY = r.pageY,
                    this.distX += h,
                    this.distY += a,
                    o = Math.abs(this.distX),
                    n = Math.abs(this.distY),
                    !(l - this.endTime > 300 && o < 10 && n < 10)) {
                    this.options.scrollType == 'y' ? h = 0 : a = 0,
                    this.flipDir = f,
                    i = this.x + h,
                    s = this.y + a,
                    (i > this.options.scrollOffset || i < this.maxScrollX) && (i = this.options.bounce ? this.x + h / 3 : i > this.options.scrollOffset ? this.options.scrollOffset : this.maxScrollX),
                    (s > this.options.scrollOffset || s < this.maxScrollY) && (s = this.options.bounce ? this.y + a / 3 : s > this.options.scrollOffset ? this.options.scrollOffset : this.maxScrollY),
                    this.moved || this._execEvent('scrollStart'),
                    this.moved = !0;
                    const m = document.activeElement;
                    if (m.nodeName.toLowerCase() == 'input') {
                        return m.blur(),
                        this.disable(),
                        void setTimeout($.proxy(function() {
                            this.enable();
                        }, this), 250);
                    }
                    this.dir = i > this.x || s > this.y ? 'forward' : 'back',
                    this._translate(i, s, !0),
                    t.preventDefault();
                }
            }
        }
    },
    _end(t) {
        let i = !1;
        if (this.initiated == 1 && t.type && t.type.indexOf('pointercancel') != -1 && (i = !0),
            this.enabled && (e.eventType[t.type] === this.initiated || i)) {
            let s,
                o,
                n = (t.changedTouches ? t.changedTouches[0] : t,
                    e.getTime() - this.startTime),
                r = Math.round(this.x),
                h = Math.round(this.y),
                a = (Math.abs(r - this.startX),
                    Math.abs(h - this.startY),
                    Math.abs(r - this.startX)),
                l = Math.abs(h - this.startY),
                c = 0,
                p = '';
            if (this.isInTransition = 0,
                this.initiated = 0,
                this.endTime = e.getTime(),
                !this.resetPosition(this.options.bounceTime)) {
                if (this.scrollTo(r, h),
                    !this.moved) { return void this._execEvent('scrollCancel'); }
                if (this.options.momentum && n < 300 && (s = e.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.scrollOffset, this.options.deceleration),
                    o = e.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.scrollOffset, this.options.deceleration),
                    r = s.destination,
                    h = o.destination,
                    c = this.options.scrollType == 'y' ? Math.max(0, o.duration) : Math.max(s.duration, 0),
                    this.isInTransition = 1),
                    a = Math.abs(r - this.startX),
                    l = Math.abs(h - this.startY),
                    this.options.step) {
                    let d = r,
                        u = h,
                        f = Math.abs(d),
                        m = Math.abs(u),
                        y = d > 0 ? 1 : -1,
                        x = u > 0 ? 1 : -1,
                        v = a % this.options.step,
                        T = l % this.options.step,
                        w = this.options.step - a % this.options.step,
                        b = this.options.step - l % this.options.step;
                    n > 300 && (w = v < (this.options.flipStep || this.options.step / 4) ? 0 : w,
                        b = T < (this.options.flipStep || this.options.step / 4) ? 0 : b),
                    this.dir == 'forward' ? (d = d > 0 ? f + w : f - w,
                        u = u > 0 ? m + b : m - b) : (d = d > 0 ? f - w : f + w,
                        u = u > 0 ? m - b : m + b),
                    d % this.options.step !== 0 && (d = Math.round(d / this.options.step) * this.options.step),
                    u % this.options.step !== 0 && (u = Math.round(u / this.options.step) * this.options.step),
                    d *= y,
                    u *= x,
                    c = this.options.stepTime || 200,
                    (this.options.scrollType == 'x' && a < 50 || this.options.scrollType == 'y' && l < 50) && (c = 100),
                    r = d,
                    h = u,
                    p = this.options.bounceEasing;
                }
                return r != this.x || h != this.y ? ((r > this.options.scrollOffset || r < this.maxScrollX || h > this.options.scrollOffset || h < this.maxScrollY) && (p = e.ease.quadratic),
                    c == '0' && (c = 1),
                    void this.scrollTo(r, h, c, p)) : void this._execEvent('scrollEnd');
            }
        }
    },
    _resize() {
        const t = this;
        clearTimeout(this.resizeTimeout),
        this.resizeTimeout = setTimeout(function() {
            t.refresh();
        }, this.options.resizePolling);
    },
    _transitionTimingFunction(t) {
        this.scrollerStyle[e.style.transitionTimingFunction] = t,
        this.indicator && this.indicator.transitionTimingFunction(t);
    },
    _transitionTime(t) {
        t = t || 0,
        this.scrollerStyle[e.style.transitionDuration] = t + 'ms',
        this.indicator && this.indicator.transitionTime(t);
    },
    getComputedPosition() {
        let t,
            i,
            s = window.getComputedStyle(this.scroller, null);
        return s = s[e.style.transform].split(')')[0].split(', '),
        t = +(s[12] || s[4]),
        i = +(s[13] || s[5]),
        {
            x: t,
            y: i
        };
    },
    _initIndicator() {
        const t = i(this.options.scrollType == 'y' ? 'x' : 'y');
        this.wrapper.appendChild(t),
        this.indicator = new s(this, {
            el: t,
            scrollType: this.options.scrollType
        }),
        this.on('scrollEnd', function() {
            this.indicator.fade();
        });
        const e = this;
        this.on('scrollCancel', function() {
            e.indicator.fade();
        }),
        this.on('scrollStart', function() {
            e.indicator.fade(1);
        }),
        this.on('beforeScrollStart', function() {
            e.indicator.fade(1, !0);
        }),
        this.on('refresh', function() {
            e.indicator.refresh();
        });
    },
    _translate(t, i) {
        this.options.scrollType == 'y' ? t = 0 : i = 0,
        this.scrollerStyle[e.style.transform] = 'translate(' + t + 'px,' + i + 'px)' + this.translateZ,
        this.x = t,
        this.y = i,
        this.options.scrollbars && this.indicator.updatePosition();
    },
    resetPosition(t) {
        let i = this.x,
            s = this.y;
        return t = t || 0,
        this.options.scrollType == 'x' ? this.x >= this.options.scrollOffset ? i = this.options.scrollOffset : this.x < this.maxScrollX && (i = this.maxScrollX) : this.y >= this.options.scrollOffset ? s = this.options.scrollOffset : this.y < this.maxScrollY && (s = this.maxScrollY),
        this.options.scrollType == 'x' && i == this.x || this.options.scrollType == 'y' && s == this.y ? !1 : (this.scrollTo(i, s, t, this.options.bounceEasing),
            !0);
    },
    scrollTo(t, i, s, o) {
        o = o || e.ease.circular,
        this.isInTransition = s > 0,
        (!s || o.style) && (this._transitionTimingFunction(o.style),
            this._transitionTime(s),
            this._translate(t, i));
    },
    disable() {
        this.enabled = !1;
    },
    enable() {
        this.enabled = !0;
    },
    on(t, i) {
        this._events[t] || (this._events[t] = []),
        this._events[t].push(i);
    },
    off(t, i) {
        this._events[t] = _.isUndefined(i) ? [] : _.reject(this._events[t], function(t) {
            return t == i;
        });
    },
    _execEvent(t) {
        if (this._events[t]) {
            let i = 0,
                s = this._events[t].length;
            if (s) {
                for (; s > i; i++) { this._events[t][i].call(this); }
            }
        }
    },
    destroy() {
        this.TIMERRES && clearInterval(this.TIMERRES),
        this._initEvents(!0),
        this._execEvent('destroy'),
        this.indicator && this.indicator.destroy();
    },
    _transitionEnd(t) {
        t.target == this.scroller && this.isInTransition && (this._transitionTime(),
            this._execEvent('animatEnd'),
            this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
                this._execEvent('scrollEnd')));
    },
    handleEvent(t) {
        switch (t.type) {
        case 'touchstart':
        case 'pointerdown':
        case 'MSPointerDown':
        case 'mousedown':
            this._start(t);
            break;
        case 'touchmove':
        case 'pointermove':
        case 'MSPointerMove':
        case 'mousemove':
            this._move(t);
            break;
        case 'touchend':
        case 'pointerup':
        case 'MSPointerUp':
        case 'mouseup':
        case 'touchcancel':
        case 'pointercancel':
        case 'MSPointerCancel':
        case 'mousecancel':
            this._end(t);
            break;
        case 'orientationchange':
        case 'resize':
            this._resize();
            break;
        case 'transitionend':
        case 'webkitTransitionEnd':
        case 'oTransitionEnd':
        case 'MSTransitionEnd':
            this._transitionEnd(t);
        }
    }
},
s.prototype = {
    transitionTime(t) {
        t = t || 0,
        this.indicatorStyle[e.style.transitionDuration] = t + 'ms';
    },
    transitionTimingFunction(t) {
        this.indicatorStyle[e.style.transitionTimingFunction] = t;
    },
    refresh() {
        this.transitionTime(),
        this.wrapper.offsetHeight,
        this.scrollType == 'y' ? (this.wrapperHeight = this.wrapper.clientHeight,
            this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8),
            this.indicatorStyle.height = this.indicatorHeight + 'px',
            this.maxPosY = this.wrapperHeight - this.indicatorHeight,
            this.sizeRatioY = this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY) : (this.wrapperWidth = this.wrapper.clientWidth,
            this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8),
            this.indicatorStyle.width = this.indicatorWidth + 'px',
            this.maxPosX = this.wrapperWidth - this.indicatorWidth,
            this.sizeRatioX = this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
        this.updatePosition();
    },
    destroy() {
        $(this.wrapper).remove();
    },
    updatePosition() {
        let t = this.scrollType == 'x' && Math.round(this.sizeRatioX * this.scroller.x) || 0,
            i = this.scrollType == 'y' && Math.round(this.sizeRatioY * this.scroller.y) || 0;
        this.x = t,
        this.y = i,
        this.indicatorStyle[e.style.transform] = 'translate(' + t + 'px,' + i + 'px)' + this.scroller.translateZ;
    },
    fade(t, i) {
        if (!i || this.visible) {
            const s = this;
            clearTimeout(this.fadeTimeout),
            this.fadeTimeout = null;
            let o = t ? 250 : 500,
                n = t ? 0 : 300;
            t = t ? '1' : '0',
            this.wrapperStyle[e.style.transitionDuration] = o + 'ms',
            this.fadeTimeout = setTimeout(function(t) {
                s.wrapperStyle.opacity = t,
                s.visible = +t;
            }(t), n);
        }
    }
},
t.utils = e,
t;

module.exports = t;
