/**
 * Created by Gorden on 16/9/27.
 */
const $ = require('widgets/zepto/zepto');
// const IScroll = require('widgets/iscroll/iscroll-all');
const IScroll = require('./iscroll-inifi.js');
const juicer = require('widgets/juicer/juicer');
const moment = require('moment');
require('widgets/moment-range/moment-range.js');
// const Animate = require('widgets/animate/index');
const tpl = require('./tpl/index.tpl');
const NOW = moment();
const FORMAT = 'YYYY-MM-DD';
require('widgets/csslib/base.css');
require('./index.scss');

moment.locale('zh-cn');
class DateTimePicker {
    constructor(opt = {}) {
        this.opt = opt;
        this.getResData();

    }

    renderUI() {
        const that = this;
        const wrap = $('<div id="J-DateTimePicker" class="hackmax"></div>');
        this.resData._dTime = this._getNextTime();
        console.log(this.resData);
        $('body').append(wrap.html(juicer(tpl, {
            data: this.resData,
            opt: this.opt
        })));
        // this.dom.wrap = $('#J-DateTimePicker');
        /* that._animate = new Animate({
      dom: $("#J-DateTimePicker .da-wrap"),
      mask: $(".J-da-mask")
    }).slideUp(() => {
      that._renderIscroll();
    });*/
        that._renderIscroll();

    }

    _renderIscroll() {
        const that = this;
        // let mdIsl = new IScroll('#J-MD', {
        //   click: true,
        //   snap: 'li',
        //   snapSpeed: 400,
        //   // mouseWheel: true
        // });
        // let mmIsl = new IScroll('#J-MM', {
        //   click: true,
        //   snap: 'li',
        //   snapSpeed: 400,
        //   mouseWheel: true
        // });
        // let hhIsl = new IScroll('#J-HH', {
        //   click: true,
        //   snap: 'li',
        //   snapSpeed: 400,
        //   mouseWheel: true
        // });
        //
        let hhSel = $('#J-HH li.selected').index() - 2,
            mdSel = $('#J-MD li.selected').index() - 2,
            mmSel = $('#J-MM li.selected').index() - 2;
        const mdIsl = new IScroll({
            bounceTime: 200,
            step: 44,
            wrapper: $('#J-MD'),
            scroller: $('#J-MD').find('ul'),
            scrollbars: false,
            startY: -44 * mdSel,
            deceleration: 0.006
        });
        const mmIsl = new IScroll({
            bounceTime: 200,
            step: 44,
            wrapper: $('#J-MM'),
            scroller: $('#J-MM').find('ul'),
            scrollbars: false,
            startY: -44 * mmSel,
            deceleration: 0.006
        });
        const hhIsl = new IScroll({
            bounceTime: 200,
            step: 44,
            wrapper: $('#J-HH'),
            scroller: $('#J-HH').find('ul'),
            scrollbars: false,
            startY: -44 * hhSel,
            deceleration: 0.006
        });

        mdIsl.on('scrollEnd', scrollEnd.bind(null, $('#J-MD li'), mdIsl));
        hhIsl.on('scrollEnd', scrollEnd.bind(null, $('#J-HH li'), hhIsl));
        mmIsl.on('scrollEnd', scrollEnd.bind(null, $('#J-MM li'), mmIsl));


        function scrollEnd(dom, target) {
            const index = that.getIndexByPosition.call(target);
            dom.removeClass('selected');
            dom.eq(index + 2).addClass('selected');

        }

        // setTimeout(function(){
        //     let hhSel = $("#J-HH li.selected").index()-2,
        //         mdSel = $("#J-MD li.selected").index()-2,
        //         mmSel = $("#J-MM li.selected").index()-2;
        //     hhIsl.scrollTo(0,`${-hhSel*44}`,1000);
        //     mdIsl.scrollTo(0,`${-mdSel*44}`,1000);
        //     mmIsl.scrollTo(0,`${-mmSel*44}`,1000);
        //   //   hhIsl.refresh();
        //   // mdIsl.refresh();
        //   // mmIsl.refresh();
        // },10000)

    // let hhSel = $("#J-HH li.selected").index() - 1,
    //   mdSel = $("#J-MD li.selected").index() - 1,
    //   mmSel = $("#J-MM li.selected").index() - 1;
    // hhIsl.scrollToElement(`li:nth-child(${hhSel})`, 0);
    // mdIsl.scrollToElement(`li:nth-child(${mdSel})`, 0);
    // mmIsl.scrollToElement(`li:nth-child(${mmSel})`, 0);

    // hhIsl.on('scrollEnd', scrollEnd);
    // mdIsl.on('scrollEnd', scrollEnd);
    // mmIsl.on('scrollEnd', scrollEnd);


    // function scrollEnd(data) {
    //   let lis = $(this.wrapper).find('li');
    //   lis.siblings().removeClass('selected');
    //   lis.eq(this.currentPage.pageY + 2).addClass('selected');
    // }
    }

    getIndexByPosition() {
        let t = this.y,
            e = Math.abs(t) / 44;
        return Math.round(e);
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
        $('#J-DateTimePicker').on('touchmove', '.da-mask', function(e) {
            e.preventDefault();
        });
        $('#J-DateTimePicker').on('click', '#J-DaConfirm', function(e) {
            const time = $('.data-time.selected').attr('data-time');
            const hour = $('.data-hour.selected').text() - 0;
            const min = $('.data-min.selected').text();
            const res = time + ' ' + (hour < 10 ? ('0' + hour) : hour) + ':' + min;
            if (that.opt.flag || moment().diff(moment(res), 'minutes') <= 0) {
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
            /* if (this._animate) {
        this._animate.slideUp();
      }*/
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
            return moment(`${temp.year()}-${temp.month() + 1}-01`, FORMAT).add(1, 'month').add(-1, 'days');
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
