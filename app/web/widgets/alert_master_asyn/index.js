const tpl = require('./index.tpl');
require('./index.scss');
const template = require('widgets/juicer/juicer.js');

class Alert {
    constructor(opt) {
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
    }

    cacheData() {
        const that = this;
        that.data = {
            msg: that.opt.msg ? that.opt.msg : '未知错误',
            btn: that.opt.btn ? that.opt.btn : '知道啦',
            subTitle: that.opt.subTitle || '验证成功',
            isSucc: that.opt.isSucc
        };
    }
    renderUI() {
        const wrap = document.querySelector('body');
        if (!wrap) {
            return;
        }
        if (document.querySelector('.J-alert-wrap')) {
            document.querySelector('body').removeChild(document.querySelector('.J-alert-wrap'));
        }
        wrap.insertAdjacentHTML('beforeend', template(tpl, this.data));
    }
    bindEvent() {
        const that = this;
        that.dom.wrap.querySelector('.msg_btn').addEventListener('click', function(event) {
            that.opt.callback ? (() => {
                that.opt.callback();
                document.querySelector('body').removeChild(that.dom.wrap);
            })() : document.querySelector('body').removeChild(that.dom.wrap);

        });
        that.dom.wrap.querySelector('.pop_close_btn').addEventListener('click', function(event) {
            document.querySelector('body').removeChild(that.dom.wrap);
        });
    }
}
module.exports = Alert;
