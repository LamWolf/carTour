/*
 * plane - 0.0.1
 * api *init,set*
 * warp || .search-box
 *{
 * decorate,
 * filter
 *}
 */
const [ _gol, _define, _exports ] = [ window || this, define, exports ];
const $ = require('widgets/zepto/zepto');
const juicer = require('widgets/juicer/juicer.js');
const IScroll = require('widgets/iscroll/iscroll-all');
const util = require('widgets/util');

const tpl = require('./tpl/index.tpl');

const _getWarp = name => $(name);

const _RegHtml = (html, key) => {
    const reg = new RegExp(key, 'gi');

    return key != '' ? html.replace(/^[^<]*/, function(a) {
        return a.replace(reg, `<em>${key}</em>`);
    }) : html;

};

require('./scss/index.scss');

class Search {
    constructor(ops = {}) {
        this.warp = $(ops.warp) || $('.search-box');
        this.data = {};
        this.ops = {
            event: 'searchData'
        };

        this.set(ops);
    }

    init(result, key) {
        const fixed = {
            count: result.count || result.length,
            listData: result.listData || result
        };
        util._extend(this.data, fixed);
        util._extend(this.data, {
            keyWords: key,
            opt: this.ops
        });
        this._addJuicerHelp();
        this._runderUI();
    }

    set(ops) {
        util._extend(this.ops, ops);
    }

    _cacheDome() {
        this.dom = {
            list: $('.search-con ul')
        };
    }

    _fireEvent(data) {
        $(document).trigger(this.ops.event, data);
    }

    _addJuicerHelp() {
        juicer.register('setInfo', (obj, formatData) => {
            return formatData ? formatData(obj) : JSON.stringify(obj);
        });

        // juicer.register('help', (obj) => {
        // 	console.log(obj);
        // });

        juicer.register('ikey', (key, obj, formatData) => {
            key = $.trim(key);
            const words = formatData ? formatData(obj) : JSON.stringify(obj);
            return _RegHtml(words, key);
        });
    }

    _runderUI() {
        if (this.warp.length <= 0) this.warp = _getWarp(this.ops.warp);
        this.warp.html(juicer(tpl, this.data));

        this._bindEvent();

    }

    _bindEvent() {
        const that = this;

        this._cacheDome();
        window.__searchResult = new IScroll('.search-con', {
            click: true,
            mouseWheel: true
        });
        this.dom.list.on('click', 'li a', function(e) {
            const self = $(this);
            const info = self.attr('data-info');
            that._fireEvent(info);
        });
    }

}

if (typeof _define === 'function' && _define.amd) {
    _define(function() {
        return Search;
    });
} else if (typeof _exports === 'object') module.exports = Search;
else _gol.Search = Search;
