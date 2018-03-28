const $ = require('widgets/zepto/zepto');
const template = require('widgets/juicer/juicer.js');
const Animate = require('widgets/animate/index');
const SearchCity = require('widgets/newSearchCity/index');
const util = require('widgets/util');

const tpl = require('./index.tpl');

require('widgets/csslib/base.css');
require('./index.scss');

class cityTips {
    constructor(opt) {
        this.opt = opt || {};
        this.cacheData();
        this.cacheDom();
        this.renderUI();
        this.bindEvent();
    }
    cacheDom() {
        this.dom = {};
        this.dom.wrap = $('#page');
    }
    cacheData() {
        this.data = {};
        this.data.conAreaH = '';
    }
    reCashDom() {
        this.dom.layerSelect = $('#J-cityTips');
        this.dom.conArea = this.dom.layerSelect.find('.conArea');
        this.dom.mask = this.dom.layerSelect.find('.mask');
        this.dom.title = this.dom.layerSelect.find('h3');
    }
    renderUI() {
        this.dom.wrap.append(template(tpl, this.opt));
        this.reCashDom();
        this._slide = new Animate({
            dom: this.dom.conArea,
            mask: this.dom.mask
        }).slideUp();

    }
    bindEvent() {
        const that = this;

        $(document).off('newSearchCity').on('newSearchCity', function(e, data) {
            util.extend(that.opt, JSON.parse(data));
            that.opt.title = that.opt.lasted == 0 ? `住在${that.opt.cityName}` : `在${that.opt.cityName}结束行程`;
            that._fireEvent(that.opt);
            that._slide.slideDown();
        });

        // 选择游玩范围
        that.dom.layerSelect.on('click', 'li', function() {
            const index = $(this).index();
            that.opt.type = index - 0 + 1;
            that.opt.title = that.dom.title.eq(index).text();
            if (index == 2) {
                if ($('#SearchCity').length <= 0) {
                    $('<div id="SearchCity"></div>').appendTo($('#page'));
                }
                // 调用选择城市组件
                new SearchCity({
                    wrap: '#SearchCity',
                    cityId: that.opt.cityId,
                    hotCities: that.opt.groupHotCitys,
                    groupCity: {
                        groupCities: that.opt.groupCitys
                        // location:true,
                        // history:true
                    },
                    fireEvent: 'newSearchCity'
                });
            } else {
                that._fireEvent(that.opt);
                that._slide.slideDown();
            }
        });

        // 关闭弹出层
        that.dom.mask.on('click', function() {
            that._slide.slideDown();
        });
    }

    _fireEvent(data) {
        $(document).trigger('placeSelected', data);
    }

}
module.exports = cityTips;
