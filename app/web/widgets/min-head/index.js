const $ = require('widgets/zepto/zepto.js');
const juicer = require('widgets/juicer/juicer.js');
const tpl = require('./index.tpl');

require('./index.scss');
/*
title
history
wrap
style
*/
class MinHead {
    constructor(opt) {
        this.cacheData(opt);
        this.init();
    }
    init() {
  	this.renderUI();
  	this.bindEvent();
    }
    cacheData(opt) {
  	opt = opt || {};
  	this.options = {};
  	this.options.title = opt.title || '';
  	this.options.style = opt.style || '1';
  	this.options.history = opt.history;
  	this.options.wrap = opt.wrap || document.querySelector('.J-page-hd');

    }
    renderUI() {
  	const html = juicer(tpl, this.options);
  	this.options.wrap.innerHTML = html;
    }
    bindEvent() {
  	const that = this;
  	that.options.wrap.querySelector('.J-history-back').addEventListener('click', function() {
  		const url = that.options.history || '';
  		if (!url) {
  			window.history.back();
  		} else {
  			window.location.href = url;
  		}
  	});
    }
}
module.exports = MinHead;
