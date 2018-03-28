const $ = require('widgets/zepto/zepto');

class Tags {
    constructor(opt) {
        const tag = opt.tag;
        const tog = opt.tog;
        if (!tag) console.error('需要一个触发元素，现在是（%s）', tag);
        if (!tog) console.error('需要一个切换样式，现在是（%s）', tog);
        this.dom = {
            tag: $(tag),
            con: opt.con ? $(opt.con) : $(tag + '_con')
        };
        this.ui = {
            tagTog: tog,
            only: opt.only
        };
        this.auto = opt.auto || false;

        this._init();
    }

    _init() {
        this._bindEvent();
    }

    _bindEvent() {
        const that = this;
        const old = that.dom.tag.attr('class');
        if (that.auto) {
            that.dom.con.css({ display: 'none' });
            that.dom.tag.isLock = true;
        }
        that.dom.tag.on('click', e => {
            if (!that.dom.tag.isLock) {
                that.dom.tag.isLock = true;
                that.dom.con.css({ display: 'none' });
            } else {
                that.dom.tag.isLock = false;
                that.dom.con.css({ display: 'block' });
            }
            if (that.ui.only) that.dom.tag.toggleClass(old);
            that.dom.tag.toggleClass(that.ui.tagTog);
        });
    }

}

module.exports = Tags;
