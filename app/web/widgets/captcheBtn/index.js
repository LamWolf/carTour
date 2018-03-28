const $ = require('widgets/zepto/zepto');

class captcheBtn {
    constructor(opt) {
        this.opt = opt || {};

        this.cacheData();
        this.cacheDom();
    }

    cacheData() {
        this.data = $.extend({
            selector: '.J-captche-btn',
            time: 60
        }, this.opt);
    }

    cacheDom() {
        this.data.selector && (this.ele = $(this.data.selector));
    }
    disabled(flag) {
        if (flag === true) {
            this.ele.addClass('disabled');
        } else {
            this.ele.removeClass('disabled');
        }
        return this;
    }
    sending(time) {
        const that = this;
        this.ele.addClass('sending disabled');
        if (that.timer) {
            clearInterval(that.timer);
        }
        that.left = time || that.time;
        that.timer = setInterval(() => {

            if (that.left > 1) {
                that.left--;
                that.ele.text(`重新发送(${that.left})`);
            } else {
                clearInterval(that.timer);
                that.ele.text('重新发送');
                that.ele.removeClass('sending disabled');
            }
        }, 1000);
        return this;
    }
    off(eventStrs) {
        this.ele.off(eventStrs);
        return this;
    }
    on(eventStrs, callBack) {
        this.ele.on(eventStrs, () => {
            if (this.ele.hasClass('disabled')) {
                return;
            }
            callBack && callBack();
        });
        return this;
    }
}
module.exports = captcheBtn;
