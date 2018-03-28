const tpl = require('./index-remhalf.tpl');
require('./index-remhalf.scss');
const template = require('micro-template').extended;
const $ = require('widgets/zepto/zepto');
class Alert {
    constructor(opt) {
        // debugger
        this.opt = opt;
        this.cacheData();
        this.renderUI();
        this.cacheDom();
        this.bindEvent();
    }
    cacheDom() {
        const that = this;
        that.dom = {};
        that.dom.wrap = document.querySelector('.J-alert-wrap');
        that.dom.mask = document.querySelector('.pop_mask[data-for=\'.J-alert-wrap\']');
    }

    cacheData() {
        const that = this;
        that.data = {
            msg: that.opt.msg ? that.opt.msg : '未知错误',
            btn: that.opt.btn ? that.opt.btn : '知道啦',
            isShowBtn: this.opt.isShow != false
        };
    }
    renderUI() {
        const that = this;
        const wrap = document.querySelector('body');
        if (!wrap) {
            return;
        }

        if (document.querySelector('.J-alert-wrap')) {
            document.querySelector('body').removeChild(document.querySelector('.J-alert-wrap'));
            document.querySelector('body').removeChild(document.querySelector('.pop_mask[data-for=\'.J-alert-wrap\']'));
        }

        wrap.insertAdjacentHTML('beforeend', template(tpl, this.data));
        document.querySelector('body').classList.add('forbiden-scroll');
        $('body').on('touchmove', function() { return false; });
    }
    bindEvent() {
        const that = this;
        that.dom.wrap.querySelector('.msg_btn').addEventListener('click', function(event) {
            document.querySelector('body').removeChild(that.dom.wrap);
            document.querySelector('body').removeChild(that.dom.mask);
            document.querySelector('body').classList.remove('forbiden-scroll');
            that.opt.fn && that.opt.fn();
            $('body').off('touchmove');
        });
    }
}
module.exports = Alert;
