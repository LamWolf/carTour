const $ = require('widgets/zepto/zepto');
const juicer = require('widgets/juicer/juicer.js');
const loading = require('widgets/loading/index');
const Header = require('widgets/header/index.js');
const Animate = require('widgets/animate/index');
const tpl = require('./tpl/index.tpl');

require('widgets/csslib/reset.scss');
require('widgets/csslib/fonts/fonts.css');
require('./sass/index.scss');

class SelectPeople {
    constructor(opt) {
        this.opt = opt || {};
        this.opt.event = opt.event || 'selectPeople';
        this._addJuicerHelper();
    }

    cacheData(data) {
        if (data && data.adultNo) {
            this.data = {
                adultNo: data.adultNo,
                childNo: data.childNo,
                childSeat: data.childSeat,
                max: data.max || 11
            };
        } else {
            this.data = {
                adultNo: 1,
                childNo: 0,
                childSeat: 0,
                max: 11
            };
        }
        this.opt.data = this.data;
    }

    cacheDOM() {
        this.dom = {
            passenger: $('.passenger'),
            mask: $('#passenger-wapper .mask'),
            adult: $('.J_adult'),
            child: $('.J_child'),
            seat: $('.J_seat'),
            info: $('#select_info')
        };
    }

    renderUI() {
        const that = this;
        $('body').append(juicer(tpl, this.opt));
        that.cacheDOM();
        that._slide = new Animate({
            dom: that.dom.passenger,
            mask: that.dom.mask
        }).slideUp();
        that.bindEvent();
    /*
    new Header({
      title: '选择出行人数',
      backUrl: '',
      subShow: this.opt.subShow || 'true',
      subTitle: '联系客服',
      isHidePannel : true,
      wrap: $('#J-SelectPeople'),
      pannel: '#J-SelectPeople',
    });
    */
    }

    show(data) {
        this.cacheData(data);
        this.renderUI();
    }

    hide() {
        const that = this;
        this._slide.slideDown();
    }

    _addJuicerHelper() {
        juicer.register('hackCSPDisplay', function(obj) {
            return `首个:￥${obj.childSeatPrice1}/次;其他:￥${obj.childSeatPrice2}/次`;
        });
        juicer.register('checkIsValid', function(obj) {
            if (!obj || typeof obj.childSeatPrice1 == 'undefined') {
                return false;
            }
            return JSON.stringify(obj) !== '{}';
        });
    }

    _setInfo(val, obj) {
    // debugger;
        let info = [];
        const isVal = val > 1 ? '首个' : '';
        for (const name in obj) {
            if (obj[name] && name == 'childSeatPrice1') info.push(`${isVal}:&yen;${obj[name]}/次&times;1`);
            if (obj[name] && name == 'childSeatPrice2' && isVal) info.push(`其他:&yen;${obj.childSeatPrice2}/次&times;${val - 1}`);
        }
        info = info.join('；');
        if (val && info) {
            const message = `含收费儿童座椅${info}`;
            this.dom.info.removeClass('hide').html(message);
            this.data.message = message;
        } else {
            this.dom.info.addClass('hide').html('');
            this.data.message = '';
        }
    }

    bindEvent() {
        const that = this;

        // 加减判断

        $('.plus,.reduce').on('click', function() {
            const btn = $(this);
            const input = btn.parent().find('.num');
            let val = parseInt(input.text());
            const adultNum = parseInt(that.dom.adult.text());
            const childrenNum = parseInt(that.dom.child.text());
            const childSeat = that.dom.seat.text() ? parseInt(that.dom.seat.text()) : 0;
            if (val == '' || val <= 0) {
                input.text(0);
            }

            if (btn.hasClass('plus')) {
                // debugger
                if (input.hasClass('J_adult') && Math.ceil(val + childrenNum + 0.5 * childSeat) >= that.data.max) {
                    return false;
                } else if (input.hasClass('J_child') && Math.ceil(adultNum + val + 0.5 * childSeat) >= that.data.max) {
                    return false;
                } else if (input.hasClass('J_seat') && adultNum + childrenNum + 0.5 * val >= that.data.max) {
                    return false;
                } else if (input.hasClass('J_seat') && val >= childrenNum) {
                    return false;
                }
                val++;

            } else if (btn.hasClass('reduce')) {
                if (input.hasClass('J_adult') && val == 1) {
                    return false;
                }
                if (val > 0) val--;
                if (input.hasClass('J_child') && val <= childSeat) {
                    that.dom.seat.text(val);
                }
            }
            input.text(val);
        });


        /*
        $('.plus,.reduce').on('click', function () {
          let adultNum = parseInt(that.dom.adult.text());
          let childrenNum = parseInt(that.dom.child.text());
          let childSeat = parseInt(that.dom.seat.text());
          let btn = $(this);
          let input = btn.parent().find('.num');
          let val = parseInt(input.text());


          if (btn.hasClass('plus')){
            if(adultNum+childrenNum+1.5*childSeat >= that.data.max){
              return false;
            }
            if(childrenNum != 0 && childSeat > childrenNum){
              return false;
            }
            val++;
          }
          else if(btn.hasClass('reduce')){
            if(adultNum <= 1){
              return false;
            }
            if(childrenNum <= 0){
              return false;
            }
            if(childSeat <= 0){
              return false;
            }
            val--;
          }

          input.text(val);


        });

    */

        // 手动输入时判断
        /* $('input[type="number"]').on('input', function () {
      if (/^\d+$/.test($(this).val())) {
        let childSeat = parseInt(that.dom.seat.val());
        let childNo = parseInt(that.dom.child.val());
        if (childSeat >= childNo) {
          that.dom.seat.val(childNo);
        }
      }
    })*/

        // 点击确定按钮关闭
        $('#ok').on('click', function() {
            that.data.adultNo = that.dom.adult.text();
            that.data.childNo = that.dom.child.text();
            that.data.childSeat = that.dom.seat.text();
            $(document).trigger(that.opt.event, that.data);
            that.hide();
            return false;
        });

        $('#cancel').on('click', function() {
            that.hide();
            return false;
        });
        $('.mask').on('click', function() {
            that.hide();
            return false;
        });

    }
}
// new SelectPeople({}).show();
module.exports = SelectPeople;
