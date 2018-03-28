/*
** abck - version1.0.0
*
* bar* 索引list
* con*   请求体h3[data-abcd]
* ops :{
*	height,//索引的高度
*	deviation,//偏移
*   sign	//提示信息
* }
*/
const [ _gol, _define, _exports ] = [ window || this, define, exports ];
const $ = require('webpack-zepto');
const util = require('widgets/util');

const timeStamp = () => (new Date()).getTime();

class Abcd {
 	constructor(bar, con, ops) {
 		this.gol = $(_gol);
 		this.bar = $(bar || '.abcd');
 		this.con = con ? $(con) : this.gol;
 		this.title = $((ops.title || '.abcd-title'));
 		this.warp = this.bar.parent();
 		this.sign = $((ops.sign || '.abcd-sign'));
 		this.data = {
 			option: 0,
 			offset: {},
 			diffSet: 0
 		};
 		this._init(ops);
 	}

 	_init(ops) {

 		const defaults = {};

 		util._extend(defaults, ops);

 		if (defaults.deviation) this.data.diffSet = parseInt(defaults.deviation);
 		if (defaults.height) this.data.height = defaults.height;
 		else this.data.height = this.gol.height() - this.title.height();

 		this._setSize();
 		this._getOffset();
 		this._bindEvent();
 	}

 	_catchList() {
 		const list = $('h3[data-abcd]', this.con);
 		return list;
 	}

 	_setSize() {
 		const height = this.data.height / this.bar.length;
 		this.bar.css({ height: parseInt(height) });
 	}

 	_getOffset() {
        const that = this;
        this._catchList();
        this._catchList().each(function() {
            const self = $(this);
            const name = self.attr('data-name') || self.html();
            that.data.offset[name] = self.offset().top;
        });
    }

    _setOffset($el) {
        const name = $el.attr('data-abcd-name') || $el.html();
        const top = this.data.offset[name];

        top && this.con.scrollTop(top - this.data.diffSet);

    }

    _showInfo($el) {
        let	top = $el.position().top,
            name = $el.attr('data-abcd-name') || $el.text();
        if (top) {
            this.sign.css({ display: 'inline-block', top: top - 20 + 'px' });
            this.sign.html(name);
        }
    }
    _hideInfo() {
        this.sign.css({ display: 'none' });
    }

 	_bindEvent() {
        const that = this;

        this.title.on('click', e => {
            this.con.scrollTop(0);
        });

 		this.bar.on('click', function(e) {
            const self = $(this);
            that._setOffset(self);
        });

        this.bar.on('touchstart', function(e) {
            const self = $(this);
            that._showInfo(self);

        });

        this.bar.on('touchend', function(e) {
            that._hideInfo();
        });

        this.warp.on('touchmove', function(e) {
            const point	= e.touches ? e.touches[0] : e;
            const pageX = point.clientX || point.pageX;
            const pageY = point.clientY || point.pageY;

        	const target = document.elementFromPoint(pageX, pageY);
        	const self = $(target);

        	if (self.length > 0 && util._contains(that.warp, self)) {
        		that._showInfo(self);
        		that._setOffset(self);
        	}
        	e.preventDefault();
        });
 	}

}

if (typeof _define === 'function' && _define.amd) _define(function() { return Abcd; });
else if (typeof _exports === 'object') module.exports = Abcd;
else _gol.Abcd = Abcd;
