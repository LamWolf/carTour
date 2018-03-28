/**
 * Created by Raisun on 2016/11/15.
 * Animate Effect
 *
 * slideUp/slideDown/slideRight/slideLeft/fadeIn/fadeOut,持续更新...
 *
 * option{
 * dom:绑定动画的元素,
 * mask:遮罩层,
 * callback:回调
 * }
 */
const $ = require('widgets/zepto/zepto');

class Animate {
    constructor(opt) {
        this.opt = opt || {};
        this.cacheData();
    }
    cacheData() {
        const that = this;
        that.data = {};
        that.data.domH = $(that.opt.dom).height();
        that.data.domW = $(that.opt.dom).width();
        that.data.zIndex = $(that.opt.dom).parent().css('z-index');
    }

    slideUp(callback) {
        const that = this;
        that.opt.dom.parent().css({
            'z-index': that.data.zIndex
        });
        $(that.opt.dom).css({
            opacity: 0,
            bottom: -that.data.domH
        });
        that._mask(0.75, () => {
            that._Dom({
                opacity: 1,
                bottom: 0
            });
            callback && callback();
        });
        that._preventScroll();
        return that;
    }

    slideDown(callback) {
        const that = this;
        callback = callback || that._DomRemove.bind(that);
        that._Dom({
            opacity: 0,
            bottom: -that.data.domH,
            time: 'fast'
        }, () => {
            that._mask(0, () => {
                callback();
                that.opt.dom.parent().css({
                    'z-index': -999
                });
            });
        });
        that._initScroll();
        return that;
    }

    fadeIn() {
        const that = this;
        that.opt.dom.parent().css({
            'z-index': that.data.zIndex
        });
        $(that.opt.dom).css({
            opacity: 0
        });
        that._mask(0.75, () => {
            that._Dom({
                opacity: 1
            });
        });
        that._preventScroll();
        return that;
    }

    fadeOut() {
        const that = this;
        callback = callback || that._DomRemove.bind(that);
        that._Dom({
            opacity: 0,
            time: 'fast'
        }, () => {
            that._mask(0, () => {
                callback();
                that.opt.dom.parent().css({
                    'z-index': -999
                });
            });
        });
        that._initScroll();
        return that;
    }

    slideRight() {
        const that = this;
        that.opt.dom.parent().css({
            'z-index': that.data.zIndex
        });
        $(that.opt.dom).css({
            opacity: 0,
            left: -that.data.domW
        });
        that._mask(0.75, () => {
            that._Dom({
                opacity: 1,
                left: 0
            });
        });
        that._preventScroll();
        return that;
    }

    slideLeft(callback) {
        const that = this;
        callback = callback || that._DomRemove.bind(that);
        that._Dom({
            opacity: 0,
            left: -that.data.domW,
            time: 'fast'
        }, () => {
            that._mask(0, () => {
                callback();
                that.opt.dom.parent().css({
                    'z-index': -999
                });
            });
        });
        that._initScroll();
        return that;
    }

    _In(effect) {
        document.addEventListener('DOMContentLoaded', effect, false);
    }

    _mask(opacity, callback) {
        const that = this;
        $(that.opt.mask).fadeTo('fast', opacity, callback);
    }

    _Dom(prop, callback) {
        const that = this;
        const type = prop.type || 'ease';
        const time = prop.time || 200;
        const arg = {};
        for (const i in prop) {
            if (i == 'type' || i == 'time') {
                continue;
            }
            arg[i] = prop[i];
        }
        $(that.opt.dom).animate(arg, time, type, callback);
    }

    _DomRemove() {
        const that = this;
        $(that.opt.dom).parent().remove();
    }

    _preventScroll() {
        $('body').on('touchmove', function(e) {
            e.preventDefault();
        });
    }
    _initScroll() {
        $('body').off('touchmove');
    }
}
module.exports = Animate;
