const $ = require('widgets/zepto/zepto');
const juicer = require('widgets/juicer/juicer.js');
const loading = require('widgets/loading/index');
const Header = require('widgets/header/index.js');
const util = require('widgets/util');
const tpl = require('./tpl/index.tpl');
const Animate = require('widgets/animate/index');
require('widgets/csslib/reset.scss');
require('widgets/csslib/fonts/fonts.css');
require('./sass/index.scss');

class Passenger {
    constructor() {
        this.cacheData();
    }

    cacheData(data) {
        this.data = {
            adultNum: 1,
            childrenNum: 1,
            childSeat: 1
        };
    }

    cacheDOM() {
        this.dom = {
            passenger: $('.passenger'),
            mask: $('#passenger-wapper .mask'),
            adult: $('.J_adult'),
            child: $('.J_child'),
            seat: $('.J_seat'),
            confirm: $('.confirm'),
            cancel: $('.cancel')
        };
    }

    renderUI(data) {
        const that = this;
        if (data.adultNum) {
            that.data = data;
        }
        $('body').append(juicer(tpl, that.data));
        that.cacheDOM();
        that._slide = new Animate({
            dom: this.dom.passenger,
            mask: this.dom.mask
        }).slideUp();
        that.bindEvent();
    }

    show(data) {
        this.cacheData();
        this.renderUI(data);
    }

    hide() {
        this._slide.slideDown();
    }

    bindEvent() {
        const that = this;
        that.dom.confirm.on('click', function() {
            that.data.adultNum = that.dom.adult.text();
            that.data.childrenNum = that.dom.child.text();
            that.data.childSeat = that.dom.seat.text();
            $(document).trigger('selectPassenger', that.data);
            that._slide.slideDown();
            return false;
        });
        that.dom.mask.on('click', function() {
            that._slide.slideDown();
        });
        that.dom.cancel.on('click', function() {
            that._slide.slideDown();
        });
        $('.plus,.reduce').on('click', function() {
            const btn = $(this);
            const input = btn.parent().find('.num');
            let val = parseInt(input.text());
            const childrenNum = parseInt(that.dom.child.text());
            const childSeat = parseInt(that.dom.seat.text());
            if (val == '' || val <= 0) {
                input.text(0);
            }
            if (btn.hasClass('plus')) {
                if (input.hasClass('J_adult') && val >= 11) {
                    return false;
                } else if (input.hasClass('J_child') && val >= 11) {
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
    }
}
// new SelectPeople({}).show();
module.exports = Passenger;
