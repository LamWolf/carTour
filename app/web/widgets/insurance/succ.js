/**
 * Created by Raisun on 2016/10/16.
 */
const juicer = require('widgets/juicer/juicer');
const Header = require('widgets/header/index');
require('widgets/sensors/index.js');
const tpl = require('./tpl/success.tpl');

require('widgets/csslib/base.css');
require('./sass/succ.scss');
new (require('widgets/changeSkin/index'))();

class Succ {
    constructor() {
        this.init();
    }

    init() {
        this.cacheData();
        this.cacheDOM();
        this.renderUI();
        this.bindEvent();
    }

    cacheData() {}

    cacheDOM() {
        this.dom = {};
        this.dom.wrap = document.querySelector('.wrap');
    }

    renderUI() {
        this.dom.wrap.innerHTML = juicer(tpl, {});

        // 引入头部
        new Header({
            title: '投保结果',
            backUrl: '',
            subShow: 'false',
            wrap: $('.wrap')
        });
    }

    bindEvent() {
        const that = this;
    }
}
new Succ();
