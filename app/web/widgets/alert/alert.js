const tpl = require('./alert.tpl');
require("./alert.scss");
const template = require('micro-template').extended;
const $ = require('widgets/zepto/zepto');
/* *  传入参数：
*  cancel: [Boolean], true为有取消按钮，false为无取消按钮
*  cancelText: [String], 取消按钮的文本信息，默认为“取消”，该字段只有在有取消按钮时才生效
*  msg: [String], 对话框内主要文本信息，默认为“未知错误”
*  btn: [String], 无取消按钮情况下，按钮文本，默认为 “知道啦”
*  isShowBtn: [Boolean], 设置是否显示按钮
*  fn: [Function], 确认按钮的回调函数
*  cancelCb: [Function], 取消按钮的回调函数（仅在cancel为true的情况下才能执行）
*  align: [String], 对话框内文本信息的对齐方式
*  closeAble: [Boolean], 是否显示右上角关闭按钮, 默认为 true
*  title: [String], 对话框内标题内容，暂定有该字段则必定有按钮（取消按钮可选），即isShowBtn字段失效
*  ifSa: [Boolean], 是否启用埋点，默认为 true 启用
*  saTitle: [Object], 埋点title配置对象，只有当ifSa为true时才生效
**   close: [String], 关闭按钮，默认为“关闭”
**   btn: [String], 确认按钮，默认为确认按钮的文本
**   cancel: [String], 取消按钮，默认为取消按钮的文本，当cancel为true时才生效 */
class Alert {
    constructor(opt = {}) {
        // debugger
        this.opt = {
            align: 'center'
        }
        $.extend(this.opt, opt);
        this.cacheData();
        this.renderUI();
        this.cacheDom();
        this.bindEvent();
    }
    cacheDom() {
        let that = this;
        that.dom = {};
        that.dom.wrap = document.querySelector('.J-alert-wrap');
        that.dom.mask = document.querySelector(".pop_mask[data-for='.J-alert-wrap']");
    }

    cacheData() {
        let that = this;
        that.data = {
            msg: that.opt.msg || '未知错误',
            btn: that.opt.btn || '确定',
            cancel: that.opt.cancel || false,
            cancelText: that.opt.cancelText || '取消',
            isShowBtn: that.opt.isShowBtn == false
                ? false
                : true,
            align: that.opt.align,
            closeAble: that.opt.closeAble == false
                ? false
                : true,
            title: that.opt.title,
            ifSa: that.opt.ifSa == false
                ? false
                : true,
            saTitle: {
                close: (this.opt.saTitle && this.opt.saTitle.close)
                    ? this.opt.saTitle.close
                    : '关闭',
                btn: (this.opt.saTitle && this.opt.saTitle.btn)
                    ? this.opt.saTitle.btn
                    : this.opt.btn,
                cancel: (this.opt.saTitle && this.opt.saTitle.cancel)
                    ? this.opt.saTitle.cancel
                    : this.opt.cancelText

            }
        }
    }
    renderUI() {
        let that = this;
        let wrap = document.querySelector("body");
        if (!wrap) {
            return;
        }

        if (document.querySelector('.J-alert-wrap')) {
            document.querySelector("body").removeChild(document.querySelector('.J-alert-wrap'));
            document.querySelector("body").removeChild(document.querySelector(".pop_mask[data-for='.J-alert-wrap']"));
        }

        wrap.insertAdjacentHTML('beforeend', template(tpl, this.data));
        document.querySelector('body').classList.add('forbiden-scroll');
        $('body').on('touchmove', function(e) {
            e.preventDefault();
        });
    }
    bindEvent() {
        let that = this;
        try {
            that.dom.wrap.querySelector('.close').addEventListener('click', function(event) {
                document.querySelector("body").removeChild(that.dom.wrap);
                document.querySelector("body").removeChild(that.dom.mask);
                document.querySelector('body').classList.remove('forbiden-scroll');
                that.opt.cancelCb && that.opt.cancelCb();
                $('body').off('touchmove');
            });
        } catch (e) {}
        try {
            that.dom.wrap.querySelector('.msg_btn').addEventListener('click', function(event) {
                document.querySelector("body").removeChild(that.dom.wrap);
                document.querySelector("body").removeChild(that.dom.mask);
                document.querySelector('body').classList.remove('forbiden-scroll');
                that.opt.fn && that.opt.fn();
                $('body').off('touchmove');
            });
        } catch (e) {}
        try {
            that.dom.wrap.querySelector('.cancel_btn').addEventListener('click', function(event) {
                document.querySelector("body").removeChild(that.dom.wrap);
                document.querySelector("body").removeChild(that.dom.mask);
                document.querySelector('body').classList.remove('forbiden-scroll');
                that.opt.cancelCb && that.opt.cancelCb();
                $('body').off('touchmove');
            })
        } catch (e) {}
    }
}
module.exports = Alert;
