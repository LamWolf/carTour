/*
* newHeader - 0.0.1
*
* options [选填] js对象。
* {
***   back: history.back()
***   title: 标题 //和post不同存
***   channel : 取消
***   post: 异步请求
* }
*/
const [ _gol, _define, _exports ] = [ window || this, define, exports ];
const $ = require('widgets/zepto/zepto');
const jucer = require('widgets/juicer/juicer');

const tpl = require('./tpl/index.tpl');
const util = require('widgets/util');

require('widgets/csslib/base.css');
require('./scss/index.scss');

const _checkFunction = fn => typeof fn == 'function';

const _uukey = () => (new Date()).getTime();
const _uuid = () => 'G-header-warp' + _uukey();

class Header {
    constructor(options = {}) {
        this.wrap = options.wrap || $('#wrap') || $('body');
        this.uuid = _uuid();
        this.uukey = _uukey();
        this.data = {};
        this._init(options);
    }

    _init(options) {

        const defults = {
            back: '',
            title: '',
            channel() {},
            other: options.other ? {
                text: '取消',
                fn() {}
            } : null,
            post: options.post ? {
                holder: '',
                fn(data) {}
            } : null
        };

        util._extend(defults, options);

        if (this.wrap.length != 1) console.warn('wrap used one dom, but geted %s', this.wrap.length);

        util._extend(this.data, defults);
        util._extend(this.data, { uuid: this.uuid });

        // this._cacheDom();
        this._renderUI();

        util._extend(this, this._cacheApi());

    }

    _cacheDom() {
        const box = $('#' + this.uuid);
        this.demo = box;
        this.dom = {
            back: $('#back', box),
            placeholder: $('#placeholder', box),
            box: $('.header-box', box),
            search: $('#search', box),
            headerWarp: box,
            other: $('#other', box),
            channel: $('#channel', box),
            tabs: $('.J-header-tabs', box)
        };
    }

    _cacheApi() {
        return {
            show: this._show,
            hide: this._hide,
            delete: this._delete
        };
    }

    _renderUI() {
        const html = jucer(tpl, this.data);
        this.wrap.append(jucer(tpl, this.data));
        this._cacheEvent();
    }

    _show() {
        this.dom.headerWarp.show();
    }

    _hide() {
        this.dom.headerWarp.hide();
    }

    _delete() {
        this.dom.headerWarp.remove();
        try {
            delete this._cacheEvent;
        } catch (e) {}
    }

    _cacheEvent() {
        const that = this;
        this._cacheDom();

        this.dom.back.on('click', e => {
            if (!this.data.back) _gol.history.back();
            else if (typeof this.data.back == 'function') this.data.back.call(e, this.dom.back);
            else _gol.location.href = this.data.back;
        });

        this.dom.placeholder.on('click', e => {
            this.dom.box.addClass('focus');
            this.dom.placeholder.addClass('outholder');
            this.dom.search.trigger('focus');
        });

        this.dom.search.on('input', function(e) {
            const self = $(this);
            const val = self.val();

            _checkFunction(that.data.post.fn) ? that.data.post.fn.call(self, val) : that.data.post.fn = val;
        });

        this.dom.search.on('blur', e => {
            if (this.dom.search.val() == '' && this.dom.channel.isChannel) {
                this.dom.channel.trigger('click');
                // 	this.dom.placeholder.removeClass('outholder');
                // 	this.dom.box.removeClass('focus');
            }
            // this.dom.channel.trigger('click');

        });

        this.dom.channel.on('click', e => {
            this.dom.search.val('');
            this.dom.placeholder.removeClass('outholder');
            this.dom.box.removeClass('focus');

            this.data.channel && this.data.channel.call(this.dom.channel, this.dom.search);
        });

        this.dom.other.on('click', function(e) {
            const self = $(this);
            _checkFunction(that.data.other.fn) ? that.data.other.fn.call(self) : that.data.other.fn;
        });

        this.dom.tabs.on('click', 'span', e => {
            const ele = $(e.target);
            if (!ele.hasClass('active')) {
                // 点击当前未选中面板触发
                const indexNum = this.dom.tabs.find('span').index(ele);
                ele.addClass('active').siblings('span').removeClass('active');
                if (that.data.type == 'tabs' && that.data.cbname) {
                    $(document).trigger(that.data.cbname, that.data.tabs[indexNum].data);
                }
            }
        });
    }
}

if (typeof _define === 'function' && _define.amd) _define(function() { return Header; });
else if (typeof _exports === 'object') module.exports = Header;
else _gol.Header = Header;
