/**
 * Created by Gorden on 16/6/2.
 */


const css = require('./index.scss');
// var $ = require("zepto");
const $ = require('widgets/zepto/zepto');
module.exports = {
    init() {
        this.cacheDom();
        this.renderUI();
    },
    cacheDom() {
        this.dom = $('body');
    },
    renderUI() {
        this.loading = $('<div id="loading" class="loading J-loading"><div class="loading-content">loading...</div></div>');
        this.dom.append(this.loading);
    },
    hide() {
        this.loading.hide();
    },
    remove() {
        $('.J-loading').remove();
    // this.loading.remove();
    }
};

