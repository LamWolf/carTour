/**
 * Created by Gorden on 16/9/27.
 */
const $ = require('widgets/zepto/zepto');
const IScroll = require('widgets/iscroll/iscroll-all');
const juicer = require('widgets/juicer/juicer');
const moment = require('moment');
require('widgets/moment-range/moment-range.js');
const tpl = require('./tpl/index.tpl');
const NOW = moment();
const FORMAT = 'YYYY-MM-DD';
require('widgets/csslib/base.css');
require('./index.scss');

moment.locale('zh-cn');
class DateTimePicker {
    constructor(opt) {
        this.opt = opt;
        this.getResData();

    }

    renderUI() {
        const wrap = $('<div id="J-DateTimePicker" class="hackmax"></div>');
        this.resData._dTime = this._getNextTime();
        console.log(this.resData);
        $('body').append(wrap.html(juicer(tpl, { data: this.resData })));
        this._renderIscroll();
    }

    _renderIscroll() {
        const that = this;
        const mdIsl = new IScroll('#J-MD', {
            click: true,
            snap: 'li',
            snapSpeed: 400,
            mouseWheel: true
        });
        const mmIsl = new IScroll('#J-MM', {
            click: true,
            snap: 'li',
            snapSpeed: 400,
            mouseWheel: true
        });
        const hhIsl = new IScroll('#J-HH', {
            click: true,
            snap: 'li',
            snapSpeed: 400,
            mouseWheel: true
        });


        let hhSel = $('#J-HH li.selected').index() - 1,
            mdSel = $('#J-MD li.selected').index() - 1,
            mmSel = $('#J-MM li.selected').index() - 1;
        hhIsl.scrollToElement(`li:nth-child(${hhSel})`, 0);
        mdIsl.scrollToElement(`li:nth-child(${mdSel})`, 0);
        mmIsl.scrollToElement(`li:nth-child(${mmSel})`, 0);

        hhIsl.on('scrollEnd', scrollEnd);
        mdIsl.on('scrollEnd', scrollEnd);
        mmIsl.on('scrollEnd', scrollEnd);


        function scrollEnd(data) {
            const lis = $(this.wrapper).find('li');
            lis.siblings().removeClass('selected');
            lis.eq(this.currentPage.pageY + 2).addClass('selected');
        }
    }

    _getNextTime() {
        let minute = NOW.minute(),
            mInt = parseInt(minute / 10);

        const mon = NOW.minute((mInt + 1) * 10);
        return ({
            time: mon.format('YYYY-MM-DD'),
            HH: mon.hour(),
            mm: mon.minute()
        });
    }

    _getSelectIndex(sel) {
        return $(sel).index() + 2;
    }

    bindEvent() {
        const that = this;
        $('#J-DateTimePicker').on('click', '#J-DaConfirm', function() {
            const time = $('.data-time.selected').attr('data-time');
            const hour = $('.data-hour.selected').text() - 0;
            const min = $('.data-min.selected').text();
            const res = time + ' ' + (hour < 10 ? ('0' + hour) : hour) + ':' + min;
            if (moment().diff(moment(res), 'minutes') <= 0) {
                that._fireEvent(res);
                that.hide();
            } else {
                alert('所选时间无效');
            }
        });
        $('#J-DateTimePicker').on('click', '#J-DaCanl', function() {
            that.hide();
        });
    }

    _fireEvent(time) {
        $(document).trigger('selectDataTime', [ time ]);
    }

    show() {
        if (this.hasRendered) {
            $('#J-DateTimePicker').show();
        } else {
            this.renderUI();
            this.bindEvent();
            this.hasRendered = true;
        }
        $('.J-da-mask').show();
        return this;
    }

    hide() {
        $('#J-DateTimePicker').hide();
        $('.J-da-mask').hide();
    }

    getResData() {
        const range = this._getAllCan();
        const arr = range.toArray('days');
        this.resData = this._splitArr(arr);
    }

    _getAllCan() {
    /*
     获取6个月的日期
     */
        const end = (now => {
            const temp = now.add(6, 'month');
            return moment(`${temp.year()}-${temp.month() + 1}`, FORMAT).add(1, 'month').add(-1, 'days');
        })(moment());
        const start = (now => {
            return now;
        })(moment());
        return moment.range(start, end);
    }

    _splitArr(dataArr) {
        return dataArr.map(item => {
            return {
                time: item.format('YYYY-MM-DD'),
                display: `${item.month() + 1}月${item.date()}日 ${moment.weekdaysShort(item.days())}`
            };
        });
    }
}

module.exports = DateTimePicker;

// new DateTimePicker().show();
