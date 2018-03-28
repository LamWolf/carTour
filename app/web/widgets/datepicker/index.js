/**
 * Created by Gorden on 16/9/26.
 */
const moment = require('moment');
require('widgets/moment-range/moment-range.js');
const tpl = require('./tpl/index.tpl');
const juicer = require('widgets/juicer/juicer');
const $ = require('widgets/zepto/zepto');
const Header = require('widgets/header/index.js');
require('widgets/csslib/base.css');
require('./index.scss');
const NOW = moment();
const FORMAT = 'YYYY-MM-DD';
/*
 @opt:
 @param
 wrap : wrap || body
 */

/*

 var range = new DataRange({
 wrap: '#page',
 isRange: true,
 tips: '请选择用车日期'
 }).show();

 setTimeout(function(){
 range.hide();
 },3000);
 setTimeout(function(){
 range.show();
 },6000)


 $("#page").on("selectData", function (e, from, to, days) {
 console.log(`${from}-${to || '空'}%%%%${days}天`);
 })

 */

class DataRange {
    constructor(opt) {
        this.opt = opt;
        this.getResData();
        this.cacheData();
        this.cacheDOM();

    }

    show() {
        if (!this.RENDER) {
            this.renderUI();
            this.bindEvent();
            this.RENDER = true;
            return this;
        }
        $('#J-DatePicker').show();
        return this;
    }

    hide() {
        $('#J-DatePicker').hide();
    }

    getResData() {
        const range = this._getAllCan();
        const arr = range.toArray('days');
        this.resData = this._splitArr(arr);
    }

    cacheData() {
        this.data = {
            clickNum: 0
        };
    }

    _oneClik(dom) {
        const that = this;
        dom.addClass('can-active');
        that.dom.active.removeClass('can-active').removeClass('can-today');
        that.dom.active = dom;
        that.data.clickNum = 1;
        const res = dom.attr('data-date');
        that._fireEvent(res);
    }

    _rangeClick(dom) {
        const that = this;
        if (that.data.clickNum == 0) {
            that._clearRange();
            that.dom.activeStart.removeClass('can-active-start').removeClass('can-today');
            that.dom.activeEnd.removeClass('can-active-end');
            dom.addClass('can-active-start');
            that.dom.activeStart = dom;
            that.data.clickNum = 1;
        } else {
            // click end
            if (that._checkDiff(moment(dom.attr('data-date'), FORMAT))) {
                // 如果end<start
                that._clearRange();
                that.dom.activeStart.removeClass('can-active-start').removeClass('can-today');
                that.dom.activeEnd.removeClass('can-active-end');
                dom.addClass('can-active-start');
                that.dom.activeStart = dom;
                that.data.clickNum = 1;
                return;
            }
            that.dom.activeEnd.removeClass('can-active-end');
            dom.addClass('can-active-end');
            that.dom.activeEnd = dom;
            that._renderRange(that.dom.activeStart, that.dom.activeEnd);
            that.data.clickNum = 0;
            that._fireEvent(that.dom.activeStart.attr('data-date'), that.dom.activeEnd.attr('data-date'));
        }
    }

    bindEvent() {
        const that = this;

        $('#J-DatePicker').on('click', '.can-day .can-item', function() {
            let dom = $(this),
                canClick = !($(dom).hasClass('can-invalid') || $(dom).hasClass('can-active'));


            if (canClick && that.opt.isRange == false) {
                that._oneClik(dom);
            } else if (canClick && that.opt.isRange == true) {
                that._rangeClick(dom);
            }
        });
    }

    _checkDiff(end) {
        const s = moment(this.dom.activeStart.attr('data-date'), FORMAT);
        if (s.diff(end, 'days') <= 0) {
            return false;
        }
        return true;
    }

    _fireEvent(from, to) {
        if (this.opt.isRange == true) {
            let f = moment(from, FORMAT),
                t = moment(to, FORMAT);
            const days = t.diff(f, 'days');
            $(document).trigger('selectData', [ from, to, days + 1 ]);
        } else {

            $(document).trigger('selectData', [ from, null, 1 ]);
        }

        this.hide();

    }


    _renderRange(start, end) {
        const that = this;
        const _s = that.dom.allLi.index(start);
        const _e = that.dom.allLi.index(end);

        const res = that.dom.allLi.slice(_s + 1, _e);
        res.addClass('can-range');

    }

    _clearRange() {

        $('.can-range').each(function(i, v) {
            $(this).removeClass('can-range');
        });
    }


    _getAllCan() {
    /*
     获取6个月的日期
     */
        const end = (now => {
            const temp = now.add(6, 'month');
            return moment(`${temp.year()}-${temp.month() + 1}-01`, FORMAT).add(-1, 'days');
        })(moment());
        const start = (now => {
            return moment(`${now.year()}-${now.month() + 1}-01`, FORMAT).add(1, 'month');
        })(moment());
        return moment.range(start, end);
    }

    _splitArr(dataArr) {
        const obj = {};
        let split = '',
            arr = [];
        dataArr.map(v => {
            if (v.format('YYYY年MM月') === split) {
                obj[split].push(v);
            } else {
                obj[v.format('YYYY年MM月')] = [ v ];
            }
            split = v.format('YYYY年MM月');
        });

        return obj;
    }

    cacheDOM() {
        this.dom = {
            wrap: $(this.opt.wrap)
        };
    }

    _renderActive() {
        if (this.opt.isRange == false) {
            this.dom.active = $('.can-today');
        } else {
            this.dom.activeStart = $('.can-today');
            this.dom.activeEnd = $('.can-today').next().addClass('can-active-end');
        }
    }

    renderUI() {
        const that = this;
        this._addJuicerHandler();
        $('body').append(juicer(tpl, { data: this.resData, opt: { tips: that.opt.tips, isRange: that.opt.isRange } }));

        that.dom.allLi = $('.can-days li');

        this._header = new Header({
            title: this.opt.title || '上车地址',
            pannel: '#J-DatePicker',
            isHidePannel: true,
            wrap: '#J-DatePicker .J-sp-fix'
        });

        // renderActive
        this._renderActive();


    }

    _addJuicerHandler() {
        const that = this;
        juicer.register('getLength', function(arr) {
            return arr.length;
        });

        juicer.register('getFistIndex', function(monent) {
            return monent.weekday() + 1;
        });
        juicer.register('getDate', function(moment) {
            return moment.date();
        });
        juicer.register('getFullDate', function(moment) {
            return moment.format(FORMAT);
        });
        juicer.register('getCellClass', function(moment) {
            const diff = NOW.diff(moment, 'days');
            let res = '';
            if (diff === 0 && moment.format(FORMAT) === NOW.format(FORMAT)) {
                if (that.opt.isRange == true) {
                    res = 'can-today can-active-start';
                } else {
                    res = 'can-today';
                }


            } else if (diff > 0) {
                res = 'can-invalid';
            } else {

            }
            return res;
        });
    }

}

module.exports = DataRange;

// var range = new DataRange({
//   wrap: '#page',
//   isRange: true,
//   tips: '请选择用车日期'
// }).show();
//
// setTimeout(function(){
//   range.hide();
// },3000);
// setTimeout(function(){
//   range.show();
// },6000)
//
//
// $("#page").on("selectData", function (e, from, to, days) {
//   console.log(`${from}-${to || '空'}%%%%${days}天`);
// })
