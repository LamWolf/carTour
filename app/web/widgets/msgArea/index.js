const $ = require('widgets/zepto/zepto');

class msgArea {
    constructor(opt) {
        this.opt = opt || {};

        this.cacheData();
        this.cacheDom();
    }

    cacheData() {
        this.data = $.extend({
            selector: '.J-msg-area',
            time: 60
        }, this.opt);
    }

    cacheDom() {
        this.data.selector && (this.ele = $(this.data.selector));
    }
    show(txt, classes) {
        const that = this;
        const classStr = classes || '';
        const txtStr = txt || '';
        this.ele.addClass(classes).html(`<span class="${classStr}">${txtStr}</span>`);
        return this;
    }
    clear() {
        const that = this;
        this.ele.html('');
        return this;
    }
}
module.exports = msgArea;
