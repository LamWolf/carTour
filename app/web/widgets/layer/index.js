/**
 * Created By Raisun on 2016/9/15.
 * Layer msg
 * new Layer({
 *   msg:opt.msg
 * })
 */
const tpl = require('./index.tpl');
require('./index.scss');
const template = require('widgets/juicer/juicer.js');

class Layer {
    constructor(opt) {
        this.opt = opt;
        this.cacheData();
        this.cacheDom();
        this.renderUI();
        this.bindEvent();
    }
    cacheDom() {
        const that = this;
        that.dom = {};
        that.dom.wrap = document.querySelector('body');
        that.dom.layerWrap = document.querySelector('.J-layer-wrap');
    }
    cacheData() {
        const that = this;
        that.data = {
            msg: that.opt.msg ? that.opt.msg : '信息不正确'
        };
    }
    renderUI() {
        const that = this;
        if (!that.dom.wrap) {
            return;
        }
        that.dom.wrap.insertAdjacentHTML('beforeend', template(tpl, this.data));
    }
    bindEvent() {
        const that = this;
        setTimeout(function() {
            that.dom.wrap.removeChild(document.querySelector('.J-layer-wrap'));
        }, 2000);
    }
}
module.exports = Layer;
