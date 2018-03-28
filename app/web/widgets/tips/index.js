/*
@author : wangshiqing
@usage : showTips
*/
const $ = require('widgets/zepto/zepto.js');
const juicer = require('widgets/juicer/juicer.js');
require('./index.scss');
class Tips {
    constructor() {
        this.alertTpl = '<div id="J-Tips" class="J-Fixed alertfadeIn alertanimated">' +
    '<p class="J-Tips-title">${msg}</p>' +
    '<div class="J-Tips-btn">${btn}</div>' +
    '</div>';
    }
    showTips(msg) {
        const that = this;
        that.getTips() && that.getTips().remove();
        that._appendTips(msg);
        that.removeTips();
    }
    getTips() {
        const that = this;
        return that.tips || $('#J-Tips');

    }
    removeTips() {
        const that = this;
        setTimeout(function() {
            that.getTips() && that.getTips().remove();
        }, 1500);
    }
    _appendTips(msg) {
        const that = this;
        const body = $('body');
        that.tips = $('<div id="J-Tips" class="J-Fixed tipsfadeIn tipsanimated">' + msg + '</div>');
        body.append(that.tips);
    }
    showAlert(msg, btn, callback) {
        const that = this;
        that.getTips() && that.getTips().remove();
        that._appendAlert(msg, btn, callback);
    }
    _appendAlert(msg, btn, callback) {
        const that = this;
        const body = $('body');
        const alertString = juicer(that.alertTpl, { msg, btn });
        that.tips = $(alertString);
        body.append(that.tips);
        const btnDom = that.tips.find('.J-Tips-btn');

        btnDom.on('click', function() {
            if (!callback) {
                tips.remove();
            } else {
                callback();
            }
        });
    }
    removeAlert() {
        const that = this;
        that.getTips() && that.getTips().remove();
    }
}

module.exports = new Tips();
