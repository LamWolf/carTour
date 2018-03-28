/**
 * Created by Gorden on 16/9/26.
 */
const moment = require('moment');
require('widgets/moment-range/moment-range.js');
const tpl = require('./tpl/index.tpl');
const juicer = require('widgets/juicer/juicer.js');
const $ = require('widgets/zepto/zepto');
const util = require('widgets/util/index');
const Animate = require('widgets/animate/index');
const IScroll = require('widgets/iscroll/iscroll-all');
require('widgets/csslib/base.css');
require('./index.scss');
const now = moment();
// const NOW = moment(now.toObject.years+''+now.toObject.months+1+''+now.toObject.date);
const FORMAT = 'YYYY-MM-DD';
const NOW = moment(now, FORMAT);
console.log(NOW.toObject());
/*
 @opt:
 @param
 wrap : wrap || body,-----------------(宿主对象)
 isRange: true,-----------------------(是否连续选择)
 id: 'J-DatePicker',------------------(用于同个页面引用多个日历的情况)
 mask: 'mask',------------------------(遮罩层)
 index: 1,----------------------------(用于同个页面引用多个日历的情况)
 title:'请选择用车日期',
 tips: '请选择用车日期',
 endtips: '请选择结束日期',--------------(一般和'tips'参数配合使用)
 defaultDate: '2017-01-01',------------(默认选中的日期)
 tomorrow: false,----------------------(默认是否选中当前日期的后一天)
 endDate: [1,'month']/'2017-01-01',----(1、数组形式：以当前日期为基准，加[1,'month/days/year)']作为结束日期；2、日期字符串/日期对象/时间戳/日期数组)
 cbname:'canSelect',-------------------(自定义事件名称，获取返回的日期)
 isHidePannel:false,-------------------(隐藏/删除 日历组件)
 */

/*

 var range = new DataRange({
 wrap: '#page',
 isRange: true,
 isHidePannel:true,
 tips: '请选择用车日期',
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
    constructor(opt = {}) {
        this.opt = {
            wrap: '#page',
            id: 'J-DatePicker',
            index: 1,
            mask: 'mask',
            title: '请选择用车日期',
            tips: '请选择日期',
            endDate: [ 6, 'month' ],
            cbname: 'canSelect'
        };
        util.extend(this.opt, opt);
        this._addJuicerHandler();
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

        // 清空时间后重置
        if (this.rerander == true) {
            this.renderUI();
            this.bindEvent();
            this.RENDER = true;
            this.rerander == false;
        }
        $('#' + this.opt.id).show();
        if (this._animate) {
            this._animate.slideUp();
        }
        return this;
    }

    hide() {
        $('#' + this.opt.id).hide();
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

    cacheDOM() {
        this.dom = {
            wrap: $(this.opt.wrap)
        };
    }

    renderUI() {
        const data = {
            data: this.resData,
            opt: this.opt
        };
        if ($('#' + this.opt.id).length) {
            $('#' + this.opt.id).replaceWith(juicer(tpl, data));
        } else {
            this.dom.wrap.append(juicer(tpl, data));
        }
        this._reCacheDOM();
        this.dom.today.find('em').text('今天');
        // renderActive
        this._renderActive();
        this._animate = new Animate({
            dom: $('#' + this.opt.id),
            mask: this.dom.mask
        }).slideUp(() => {
            new IScroll(`.scroll-${this.opt.index}`, {
                click: true,
                mouseWheel: true
            });
        });

    }

    _reCacheDOM() {
        this.dom.allLi = $('#' + this.opt.id).find('.can-days li');
        this.dom.mask = $('#' + this.opt.id).next('.mask');
        this.dom.canItem = $('#' + this.opt.id).find('.can-item');
        this.dom.today = $('#' + this.opt.id).find('.can-today');
        this.dom.canTips = $('#' + this.opt.id).find('.can-tips');
    }

    _renderActive() {
        if (this.opt.isRange == false) {
            this.dom.active = $('#' + this.opt.id).find('.can-active');
        } else {
            this.dom.activeStart = $('#' + this.opt.id).find('.can-active-start');
            const startIndex = this.dom.canItem.index(this.dom.activeStart);
            this.__start = this.dom.activeStart;

            if (this.opt.diff) {
                let rangeEle = this.dom.canItem.eq(startIndex);
                let range = this.opt.diff - 1;
                let rangeDesc = 0;
                // let rangeDesc = 1;
                while (range > 0) {

                    rangeEle = this.dom.canItem.eq(startIndex + rangeDesc);
                    rangeDesc++;
                    if (!rangeEle.hasClass('can-invalid')) {
                        rangeEle.addClass('can-range');
                        range--;
                    }
                }
                this.dom.activeEnd = this.dom.canItem.eq(startIndex + rangeDesc).addClass('can-active-end');
                rangeEle = null;

            } else {
                this.dom.activeEnd = this.dom.activeStart.addClass('can-active-end');
            }

        }
    }

    bindEvent() {
        const that = this;
        $('#' + that.opt.id).on('click', '.can-day .can-item', function() {
            let dom = $(this),
                canClick = !$(dom).hasClass('can-invalid');
            if (canClick && that.opt.isRange == false) {
                that._oneClik(dom);
            } else if (canClick && that.opt.isRange == true) {
                that._rangeClick(dom);
            }
        });

        // 关闭弹出层

        setTimeout(function() {
            that.dom.mask.on('click', function() {
                that._closeCan();
            });
        }, 50);

        setTimeout(function() {
            $(window).on('hashchange', function() {
                that._closeCan();
            });
        }, 1);

    }

    _closeCan() {
        if (this.opt.isHidePannel) {
            this._animate.slideDown(() => {
                this._recoveryRange();
            });
            return;
        }
        this._animate.slideDown();
    }

    _oneClik(dom) {
        this.dom.active.removeClass('can-active');
        dom.addClass('can-active');
        this.dom.active = dom;
        this.data.clickNum = 1;
        const res = dom.attr('data-date');
        this._fireEvent(res);
    }

    _rangeClick(dom) {
        if (this.data.clickNum == 0) {
            this._clearRange();
            this.dom.activeStart.removeClass('can-active-start');
            this.dom.activeEnd.removeClass('can-active-end');
            dom.addClass('can-active-start can-only-start');
            this.dom.activeStart = dom;
            this.data.clickNum = 1;
            this.dom.canTips.text(this.opt.endtips);
        } else {
            // click end
            if (this._checkDiff(moment(dom.attr('data-date'), FORMAT))) {
                // 如果end<start
                this._clearRange();
                this.dom.activeStart.removeClass('can-active-start can-only-start');
                this.dom.activeEnd.removeClass('can-active-end');
                dom.addClass('can-active-start can-only-start');
                this.dom.activeStart = dom;
                this.data.clickNum = 1;
                return;
            }
            this.dom.activeEnd.removeClass('can-active-end');
            dom.addClass('can-active-end');
            this.dom.activeStart.removeClass('can-only-start');
            this.dom.activeEnd = dom;
            this._renderRange(this.dom.activeStart, this.dom.activeEnd);
            this.data.clickNum = 0;
            this.__start = this.dom.activeStart;
            this._fireEvent(this.dom.activeStart.attr('data-date'), this.dom.activeEnd.attr('data-date'));
            this.dom.canTips.text(this.opt.tips);
        }
    }

    reset() {
        this.rerander = true;
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
            $(document).trigger(this.opt.cbname || 'selectData', [ from, to, days + 1 ]);
        } else {
            $(document).trigger(this.opt.cbname || 'selectData', [ from, null, 1 ]);
        }
        if (this.opt.isHidePannel) {
            this._animate.slideDown(() => {
                return false;
            });
            return;
        }
        this._animate.slideDown();
    }

    _renderRange(start, end) {
        const _s = this.dom.allLi.index(start);
        const _e = this.dom.allLi.index(end);
        const res = this.dom.allLi.slice(_s + 1, _e);
        res.addClass('can-range');
    }

    _clearRange() {
        $('.can-range').each(function(i, v) {
            $(this).removeClass('can-range');
        });
    }

    _getAvalLenth() {
        return moment.range(moment(), moment().add(6, 'month')).toArray('days').length - 2;
    }

    _getAllCan() {
    // 获取总的日期（默认6个月）
        const end = (now => {
            if (typeof this.opt.endDate == 'object') {
                const temp = now.add(this.opt.endDate[0], this.opt.endDate[1]);
                if (now.date() == '1') {
                    return moment(`${temp.year()}-${temp.month() + 1}-01`, FORMAT).add(-1, 'days');
                }
                return moment(`${temp.year()}-${temp.month() + 1}-01`, FORMAT).add(1, 'month').add(-1, 'days');

            }
            return moment(this.opt.endDate, FORMAT);

        })(moment());
        const start = (now => {
            return now.startOf('month');
            // return moment(`${now.year()}-${now.month() + 1}-01`, FORMAT);
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

    _recoveryRange() {
        if (this.opt.isRange) {
            this.dom.activeStart.removeClass('can-active-start can-only-start');
            this.dom.activeStart = this.__start.addClass('can-active-start');
            this.dom.activeEnd.addClass('can-active-end');
            this._renderRange(this.dom.activeStart, this.dom.activeEnd);
            this.data.clickNum = 0;
            this.dom.canTips.text(this.opt.tips);
        }
    }

    _addJuicerHandler() {
        const avalLen = this._getAvalLenth();
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
        juicer.register('getCellClass', function(moment, defaultDate, tomorrow, isRange) {
            const diff = NOW.diff(moment, 'days', true); // 今天之前，diff>1;今天之后，diff<0
            let res = '';
            if (diff > 0 && diff < 1) {
                if ((!(defaultDate || tomorrow)) || (defaultDate && tomorrow)) {
                    if (isRange == true) {
                        res = 'can-today can-active-start';
                    } else {
                        res = 'can-today can-active';
                    }
                } else {
                    res = 'can-today';
                }
            } else if (diff > 0) {
                res = 'can-invalid';
            } else if (diff < 0 - avalLen) {
                res = 'can-invalid';
            }

            if (defaultDate && !tomorrow) {
                const DefaultDiff = moment.diff(defaultDate, 'days');
                if (DefaultDiff === 0) {
                    if (isRange == true) {
                        res = 'can-active-start';
                    } else {
                        res = 'can-active';
                    }
                }
            } else if (tomorrow && !defaultDate) {
                if (diff > -1 && diff < 0) {
                    if (isRange == true) {
                        res = 'can-active-start';
                    } else {
                        res = 'can-active';
                    }
                }
            }
            return res;
        });
    }

}

module.exports = DataRange;

// var range = new DataRange({
//   wrap: '#page',
//   isRange: true,
//   isHidePannel:true,
//   tips: '请选择用车日期'
// }).show();
//
// setTimeout(function(){
//   range.remove();
// },3000);
// setTimeout(function(){
//   range.show();
// },6000)
//
//
// $("#page").on("selectData", function (e, from, to, days) {
//   console.log(`${from}-${to || '空'}%%%%${days}天`);
// })
