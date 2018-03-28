const $ = require('widgets/zepto/zepto');
const template = require('widgets/juicer/juicer.js');
const Animate = require('widgets/animate/index');
const util = require('widgets/util');
const  = require('widgets/util');

const tpl = require('./index.tpl');

require("widgets/csslib/base.css");
require("./index.scss");

class layerFrame {
  constructor(opt) {
    debugger;
    this.opt = opt || {};
    this.init();
  }
  init() {
    let defaults = {
      wrap: '#page',
      component: {
        js: '',
        // path: './widgets/',
        param: {},
        fn: null
      },
      title: '请选择',
      confirm: 0
    }
    this.opt = util.extend(defaults, this.opt);
    this.cacheData();
    this.cacheDom();
    this.renderUI();
    this.bindEvent();
  }
  cacheDom() {
    this.dom = {};
    this.dom.wrap = $(this.opt.wrap);
  }
  cacheData() {
    this._customJS = require(this.opt.component.js);
    // this._customJS = this.opt.component.js != '' ? require(this.opt.component.js) : null;
  }
  reCashDom() {
    this.dom.layerFrame = $('#J-layerFrame');
    this.dom.layerArea = this.dom.layerFrame.find('.layerArea');
    this.dom.title = this.dom.layerFrame.find('h2.title');
    this.dom.customCon = this.dom.layerFrame.find('.customCon');
    this.dom.mask = this.dom.layerFrame.find('.mask');
    this.opt.component.wrap = this.dom.customCon;
  }
  renderCustomUI() {
    if (this._customJS == null) return;
    let cmp = new this._customJS(this.opt.component.param);
    cmp = this.opt.component.fn ? cmp.this.opt.component.fn() : cmp;
    this.dom.customCon.html(cmp)
  }
  renderUI() {
    this.dom.wrap.append(template(tpl, this.opt));
    this.reCashDom();
    this.renderCustomUI();
    this._slide = new Animate({
      dom: this.dom.layerArea,
      mask: this.dom.mask
    }).slideUp();

  }
  bindEvent() {
    let that = this;

    // 关闭弹出层
    that.dom.mask.on('click', function() {
      that._slide.slideDown();
    })



    /*$(document).off('newSearchCity').on('newSearchCity', function(e, data) {
      util.extend(that.opt, JSON.parse(data))
      that.opt.title = that.opt.lasted == 0 ? `住在${that.opt.cityName}` : `在${that.opt.cityName}结束行程`;
      that._fireEvent(that.opt);
      that._slide.slideDown();
    })*/

    // 选择游玩范围
    /*that.dom.layerSelect.on('click', 'li', function() {
      let index = $(this).index();
      that.opt.type = index - 0 + 1;
      that.opt.title = that.dom.title.eq(index).text();
      if (index == 2) {
        if ($('#SearchCity').length <= 0) {
          $('<div id="SearchCity"></div>').appendTo($('#page'));
        }
        // 调用选择城市组件
        new SearchCity({
          wrap: '#SearchCity',
          cityId: that.opt.cityId
        })
      } else {
        that._fireEvent(that.opt);
        that._slide.slideDown();
      }
    })*/


  }

  /*_fireEvent(data) {
    $(document).trigger('placeSelected', data);
  }*/

}
module.exports = layerFrame;
