/**
 * Created by Gorden on 2017/6/24.
 */
const INDEXTPL = require('./index.tpl');
const INNERTPL = require('./inner.tpl');
const juicer = require('widgets/juicer/juicer.js');
const ajax = require('widgets/ajax/index');
const Swiper = window.Swiper;
const $ = require('widgets/zepto/zepto.js');
require('./index.scss');
const now = new Date();
const THISMONTH = `${now.getUTCFullYear()}-${now.getUTCMonth() + 1 < 10 ? '0' + (now.getUTCMonth() + 1) : now.getUTCMonth() + 1}`;
// const THISMONTH = '2017-06';
const Next6Month = (n => {
    // 此方法仅支持加1年~~
    const year = n.getUTCFullYear();
    const month = n.getUTCMonth() + 1;
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
class GuideCalendar {
    constructor(opt) {
        this.opt = opt;
        this.addJuicerHelper();
        this.cacheData();
        this.cacheDOM();
        this.renderUI();
        this.bindEvent();
        this.getRemoteCan(THISMONTH);
    }
    cacheData() {
        this.data = {
            next6Month: Next6Month
        };
    }
    cacheDOM() {
        this.dom = {
            wrap: this.opt.wrap
        };
    }
    getRemoteCan(date) {
        if (this.data[date]) {
            this.renderInner(this.data[date]);
            return;
        }
        const da = new Date(date + '-01');
        const start = date + '-01';
        const last = (() => {
            const day = new Date(date.split('-')[0], date.split('-')[1], 0);
            return date + '-' + day.getDate();
        })();
        console.log(start, last);
        const param = {
            url: this.opt.url || '',
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: {
                guideId: this.opt.guideId,
                guideMonth: date,
                startServiceDate: start,
                endServiceDate: last
            },
            success: res => {
                const data = this.data[date] = this.getArrByobj(res.data.guideStockList);
                // 获取当前月的第一天的Index;
                this.data[date].firstIndex = this.getIndexOfWeek(date);
                this.data[date].endIndex = this.data[date].firstIndex + data.data.length;
                const _day = now.getUTCDate() < 10 ? '0' + now.getUTCDate() : now.getUTCDate();
                this.data[date].today = `${THISMONTH}-${_day}`;
                console.log(this.data);
                this.renderInner(data);
            },
            error: res => {

            }
        };
        this._ajax = ajax.sendRequest(param);
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
        return new Date(`${res}-01`).getUTCDay();
    }
    addJuicerHelper() {
        const that = this;
        const _day = now.getUTCDate() < 10 ? '0' + now.getUTCDate() : now.getUTCDate();
        juicer.register('getDayOfString', str => {
            // debugger;
            // return str;
            return str.split('-')[2].replace(/^0/, '');
            // return new Date(str).getDate()
            // new Date(str).getDate();
        });
        juicer.register('getClassOf', object => {
            let res = '';
            new Date(object.serviceDate).getTime() - new Date(`${THISMONTH}-${_day}`).getTime() >= 0 ? (res = 'can-notpast') : (res = ' can-invalid ');
            if (object.stockStatus == 201 || object.stockStatus == 301 || object.stockStatus == 302) {
                res += ' can-hole';
                return res;
            } else if (object.stockStatus == 102) {
                res += ' can-half';
                return res;
            }

        });
        juicer.register('getFuckFormat', str => {
            return that.fuckFormat(str);
        });
    }
    fuckFormat(str) {
        const y = str.split('-')[0];
        const m = str.split('-')[1].replace(/^0/, '');
        return `${y}年${m}月`;
        /* let date = new Date(str);
        return date.getUTCFullYear() + '年' + (date.getUTCMonth() + 1) + '月'; */
        // return date.getFullYear() + '年' + (date.getMonth() + 1) + '月';
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

    }
    renderUI() {
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
module.exports = GuideCalendar;
