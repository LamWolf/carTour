const $ = require('widgets/zepto/zepto');
const Juicer = require('widgets/juicer/juicer.js');
const Header = require('widgets/header/index2.js');
const Iscroll = require('widgets/iscroll/iscroll-all.js');

require('./scss/index.scss');

class Cinfos {
    constructor(opt) {
        const opts = opt || {};
        const cinfos = opts.tpl || 'agreement';
        this.wrap = opts.wrap || 'body';
        this.tpl = require('./tpl/' + cinfos + '.tpl');
        this.data = {
            title: opts.title || '皇包车协议和条款',
            back: opts.backUrl || ''
        };
        this.init();
    }

    init() {
        this.cacheDom();
        this.renderUI();
        this.bindEvent();
    }

    cacheDom() {
        const that = this;
        that.dom = {
            wrap: document.querySelector(that.wrap)
        };
    }

    renderUI() {

        $(this.dom.wrap).append(Juicer(this.tpl, this.data));
        new Iscroll('.cinfos-scroll', {
            click: true,
            mouseWheel: true
        });
    }

    bindEvent() {
        const that = this;
        that._header = new Header({
            title: that.data.title,
            backUrl: that.data.back,
            pannel: $('#J-Cinfos-Agreement'),
            subTitle: '联系客服',
            subShow: 'true',
            wrap: $('#J-Cinfos-Agreement'),
            hash: '#J-Cinfos-Agreement'
        });
    }
}
// new Cinfos();
module.exports = Cinfos;
