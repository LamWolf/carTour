
const INDEXTPL = require('./index.tpl');
const INNERTPL = require('./inner.tpl');
const juicer = require('widgets/juicer/juicer.js');
const ajax = require('widgets/ajax/index');
// const Swiper = require('widgets/swiper/swiper.min.js');
const Swiper = window.Swiper;
const $ = require('widgets/zepto/zepto.js');
const apiConfig = require('widgets/apiConfig/index.js');
require('./index.scss');
// require('widgets/swiper/swiper.css');
class newCalendar {
    constructor(opt) {
        this.opt = opt;
        debugger
        this.addJuicerHelper();
        this.cacheData();
        this.cacheDOM();
        this.renderUI();
        this.bindEvent();
        this.getRemoteCan(this.data.month);
    }
    cacheData() {
        const now = this.opt.now || new Date();
        const month = `${now.getFullYear()}-${now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1}`;
        const month6 = (n => {
            const year = n.getFullYear();
            const month = n.getMonth() + 1;
            let yearres = year;
            let monthres = '';
            const res = [];
            for (let i = 0; i < 6; i++) {
                if (month + i < 10) {
                    monthres = '0' + (month + i);
                } else if (month + i > 12) {
                    yearres = year + 1;
                    monthres = (month + i - 12) < 10 ? '0' + (month + i - 12) : (month + i - 12);
                } else {
                    monthres = month + i;
                }
                res.push(`${yearres}-${monthres}`);
            }
            return res;
        })(now);
        this.data = {
            now,
            month,
            month6,
            select: this.opt.select || ''
        };
    }
    cacheDOM() {
        this.dom = {
            wrap: this.opt.wrap
        };
    }
    getRemoteCan(date) {
        debugger

        const that = this;
        if (that.data.date) {
            that.renderInner(that.data.date);
            return;
        }
        const startServiceDate = (s => {

            const start = new Date(s);
            return `${start.getFullYear()}-${start.getMonth() + 1 < 10 ? '0' + (start.getMonth() + 1) : start.getMonth() + 1}-01`;
        })(date);
        const endServiceDate = (e => {
            const end = new Date(e);
            const year = end.getFullYear();
            const month = end.getMonth() + 1;
            return `${end.getFullYear()}-${end.getMonth() + 1 < 10 ? '0' + (end.getMonth() + 1) : end.getMonth() + 1}-${new Date(year, month, 0).getDate()}`;
        })(date);

        const param = {
            url: '/api/goods/goodsStock',
            method: 'GET',
            header: {},
            data: {
                goodsNo: this.opt.goodsNo,
                startServiceDate: startServiceDate,
                endServiceDate: endServiceDate
            },
            success: res => {
                if (that.data.select == '') {
                    that.getSelectDay(res.data.goodsStockList);
                }

                const data = that.data[date] = that.getArrByobj(res.data.goodsStockList);
                // 获取当前月的第一天的Index;
                that.data[date].firstIndex = that.getIndexOfWeek(date);
                that.data[date].endIndex = that.data[date].firstIndex + data.data.length;
                const _day = that.data.now.getDate() < 10 ? '0' + that.data.now.getDate() : that.data.now.getDate();
                that.data[date].today = `${that.data.month}-${_day}`;
                console.log(that.data);
                data.select = that.data.select;
                that.renderInner(data);
            },
            error: res => {

            }
        };
        debugger
        ajax.sendRequest(param);
    }

    getSelectDay(list) {
        const that = this;
        let select = '';
        for (let i = 0; i < list.length; i++) {
            if (list[i].stockStatus == '101') {
                select = list[i].serviceDate;
                break;
            } else {
                continue;
            }
        }
        if (select) {
            that.data.select = select;
            $(document).trigger(that.opt.cbname || 'newCalendarSelect', [ that.data.select ]);
        }

    }

    getArrByobj(res) {
        const arr = [];
        let key;
        for (key in res) {
            arr.push(res[key]);
        }
        return { data: arr };
    }
    getIndexOfWeek(res) {
        return new Date(`${res}-01`).getDay();
    }
    addJuicerHelper() {
        const that = this;
        juicer.register('getDayOfString', str => {
            return new Date(str).getDate();
        });
        juicer.register('getClassOf', object => {
            let res = '';
            if (object.stockStatus == 201) {
                res += ' can-invalid';
                return res;
            } else if (object.stockStatus == 301) {
                res += ' can-invalid';
                return res;
            }
            res += ' can-ok';
            return res;

        });

        juicer.register('getClassOf2', object => {
            let res = '';
            if (object.past) {
                res += ' can-invalid';
                return res;
            }
            if (!object.past) {
                res += ' can-notpast';
            }
            if (!object.serviceAble) {
                res += ' can-hole';
                return res;
            }
            if (object.daily) {
                res += ' can-hole';
                return res;
            }
            if (object.pickup) {
                res += ' can-half';
            }
            return res;

        });
        juicer.register('getFuckFormat', str => {
            return that.fuckFormat(str);
        });
    }
    fuckFormat(str) {
        const date = new Date(str);
        return date.getFullYear() + '年' + (date.getMonth() + 1) + '月';
    }
    bindEvent() {
        // Add one more handler for this event
        const that = this;
        this.swiper.on('slideChangeEnd', function() {
            const date = $(that.swiper.container[0]).find('.swiper-slide-active').attr('data-date');
            console.log('slideEnd');
            console.log(date);
            that.getRemoteCan(date);
            that.dom.opTitle.html(that.fuckFormat(date));
        });
        this.swiper.on('slideChangeStart', function() {
            // this._ajax && this._ajax.abort();
        });
        this.dom.leftBtn.on('click', function() {
            that.swiper.slidePrev();
        });
        this.dom.rightBtn.on('click', function() {
            that.swiper.slideNext();
        });

        this.dom.wrap.on('click', '.can-ok', function() {
            const t = $(this);
            const val = t.attr('data-date');
            if (val) {
                $('.W-Can-main-date-wrap li').removeClass('ui-select');
                t.addClass('ui-select');
                that.data.select = val;
                // console.log(that.data.select);
                $(document).trigger(that.opt.cbname || 'newCalendarSelect', [ that.data.select ]);
            }

        });


    }
    renderUI() {
        debugger
        this.dom.wrap.html(juicer(INDEXTPL, this.data));
        this.swiper = new Swiper('.W-Can-main-date .swiper-container', { autoHeight: true });
        // this.dom.innerDom = this.dom.wrap.find('.W-Can-main-date')
        this.dom.leftBtn = this.dom.wrap.find('.W-Can-op-left-btn');
        this.dom.rightBtn = this.dom.wrap.find('.W-Can-op-right-btn');
        this.dom.opTitle = this.dom.wrap.find('.W-Can-op-title');
    }
    renderInner(res) {
        const activeSlide = $(this.swiper.container[0]).find('.swiper-slide-active');
        activeSlide.html(juicer(INNERTPL, res));
        this.swiper && this.swiper.update();
    }
}
module.exports = newCalendar;
