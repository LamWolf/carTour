const tpl = require('./alert.tpl');
require('./alert.scss');
const template = require('micro-template').extended;
const $ = require('widgets/zepto/zepto');
/*
*  传入参数：
*  cancel: [Boolean], true为有取消按钮，false为无取消按钮，true情况下按钮text暂不可更改
*  msg: [String], 对话框内主要文本信息，默认为“未知错误”
*  btn: [String], 无取消按钮情况下，按钮文本，默认为 “知道啦”
*  isShowBtn: [Boolean], 设置是否显示按钮
*  fn: [Function], 确认按钮的回调函数
*  cancel_cb: [Function], 取消按钮的回调函数（仅在cancel为true的情况下才能执行）
*/
class Alert {
    constructor(opt = {}) {
    // debugger
        this.opt = {
            align: 'center'
        };
        Object.assign(this.opt, opt);
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
            cancel: that.opt.cancel ? that.opt.cancel : false,
            isShowBtn: this.opt.isShow != false,
            align: that.opt.align
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
        $('body').on('touchmove', function(e) {
            e.preventDefault();
        });
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
        try {
            that.dom.wrap.querySelector('.cancel_btn').addEventListener('click', function(event) {
                document.querySelector('body').removeChild(that.dom.wrap);
                document.querySelector('body').removeChild(that.dom.mask);
                document.querySelector('body').classList.remove('forbiden-scroll');
                that.opt.cancel_cb && that.opt.cancel_cb();
                $('body').off('touchmove');
            });
        } catch (e) { }
    }
}
module.exports = Alert;
