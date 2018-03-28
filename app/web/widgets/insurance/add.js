const $ = require('widgets/zepto/zepto');
const juicer = require('widgets/juicer/juicer.js');
const util = require('widgets/util/index.js');

require('widgets/csslib/base.css');
require('widgets/csslib/fonts/fonts.css');
require('./sass/add.scss');
const tpl = require('./tpl/add.tpl');

class AddInsuranceBar {
    constructor(opt) {
        this.opt = {
            isOpen: false,
            defaultVal: '',
            wrap: $('body')
        };
        util.extend(this.opt, opt);
        this.init();
    }

    init() {
        this.cacheDOM();
        this.renderUI();
        this.bindEvent();
    }

    cacheDOM() {
        this.dom = {
            wrap: this.opt.wrap
        };
    }

    _reCacheDOM() {
        this.dom.pannel = $('#insurance');
        this.dom.infoArea = $('.infoArea', this.dom.pannel);
    }

    renderUI() {
    /* if (this.dom.pannel) {
      this.dom.wrap.replaceWith(juicer(tpl, this.opt));
      return;
    }*/
        this.dom.wrap.append(juicer(tpl, this.opt));
        this._reCacheDOM();
    }

    bindEvent() {
        const that = this;

        // 开关
        that.dom.pannel.on('click', '.turnBtn', function() {
            that.opt.open = !that.opt.open;
            $(this).toggleClass('open');
            that.dom.pannel.find('.insuranceInfo').toggleClass('show');
            $(document).trigger('turnOnOff', that.opt.open);
        });
    }
}

module.exports = AddInsuranceBar;
