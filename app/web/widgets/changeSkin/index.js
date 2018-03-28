/*
 * ChangeSkin
 * 功能：网页换肤；
 * 说明：
 *
 * cookieName --------- 传入需要换肤的cookie名称
 * 传入新的cookieName，需要新建对应的css文件
 *
 */
const util = require('widgets/util');
const Cookie = require('widgets/cookie');
const _glo = window || this;
const CHANGE_NAME = [
    'iscbc',
    'ismaster'
];
class ChangeSkin {

    constructor(opt) {
        this.opt = {
            cookieName: 'iscbc'
        };
        if (Object.prototype.toString.call(opt) === '[object Object]' && JSON.stringify(opt) !== '{}') {
            util._extend(this.opt, opt);
        }
        this.init();
    }

    init() {
        this.cacheData();
        this.cacheDOM();
        if (this.data.cookie) {
            if (!this.dom.wrap.classList.contains(this.data.cookie)) {
                this.dom.wrap.classList.add(`J-${this.data.cookie}`, `J-P-${util.plateForm().os}`);
            }
            this.getConfig(this.data.cookie);
        }
    }

    cacheData() {
        this.data = {};
        // this.data.cookie = this.opt.cookieName && Cookie.get(this.opt.cookieName);
        this.data.cookie = (arr => {
            let res = '';
            for (let index = 0, length = arr.length; index < length; index++) {
                Cookie.get(arr[index]) == 1 && (res = arr[index]);
            }
            return res;
        })(CHANGE_NAME);
    }

    cacheDOM() {
        this.dom = {
            wrap: document.querySelector('body')
        };
    }

    getConfig(css) {
        switch (css) {
        case 'iscbc':
            require([ './scss/cbc.scss' ]);
            break;
        case 'ismaster':
            require([ './scss/master.scss' ]);
        }
    }

}

if (typeof define === 'function' && define.amd) define(() => ChangeSkin);
else if (typeof exports === 'object') module.exports = ChangeSkin;
else _glo.ChangeSkin = ChangeSkin;
