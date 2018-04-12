const $ = require('widgets/zepto/zepto');

const adultTpl = require('./tpl/passengerAdult.tpl');
const childTpl = require('./tpl/passengerChild.tpl');
const baggagesTpl = require('./tpl/passengerBaggages.tpl');
const hotelTpl = require('./tpl/hotel.tpl');

const juicer = require('widgets/juicer/juicer.js');
const Layer = require('widgets/layer/index');
const Header = require('widgets/header/index.js');
const util = require('widgets/util/index');

const newCalendar = require('widgets/newCalendar/index.js');

require('./scss/index.scss');
require('widgets/csslib/base.css');
require('widgets/csslib/fonts/fonts.css');

new (require('widgets/changeSkin/index'))();

class Sku {
    constructor() {
        this._juicerHelper();
        this.cacheData();
        this.cacheDom();
        this.bindEvent();
    }

    cacheData() {
        this.data = {
            info: {}, // 这是信息
            date: '',
            passenger: {
                adultNo: 2,
                childNo: 0,
                childSeat: 0,
                maxPerson: window.__capacity.numOfPerson || 12, // 最大人数（指定城市）
                maxBagNo: window.__capacity.totalCap || 14, // 最大行李数（指定城市）
                currentBagNo: '' // 可用的最大行李数
            },
            hotel: {
                hotelCostPrice: window.__goodsDetail.hotelCostPrice,
                hotelStatus: window.__goodsDetail.hotelStatus,
                dateCount: window.__goodsDetail.daysCount,
                roomNo: 1
            },
            param: this.getGoodsNo(),
            nextParam: {}
        };

    }

    cacheDom() {
        const that = this;
        that.dom = {
            wrap: $('#page'),
            infoWrap: $('.sku-info-wrap'),
            adultWrap: $('.people-adults'),
            childWrap: $('.people-children'),
            baggagesWrap: $('.people-baggages'),
            hotelWrap: $('.room-info-content'),
            adultsNum: $('.people-adults-num'),
            childrenNum: $('.people-children-num'),
            roomNum: $('.room-num')
        };
    }

    _renderAdult() {
        const that = this;
        that.dom.adultWrap.html(juicer(adultTpl, that.data.passenger));
        that.cacheDom();
    }
    _renderChild() {
        const that = this;
        that.dom.childWrap.html(juicer(childTpl, that.data.passenger));
        that.cacheDom();
    }
    _renderHotel() {
        const that = this;
        that.dom.hotelWrap.html(juicer(hotelTpl, that.data.hotel));
        that.cacheDom();
    }
    _renderBaggages() {
        const that = this;

        that.dom.baggagesWrap.html(juicer(baggagesTpl, that.data.passenger));
        that.cacheDom();
    }

    _juicerHelper() {
        juicer.register('floor', function(data) {
            return Math.floor(data);
        });
    }

    maxBaggages(adult, child, childSeat) { // 最大行李数&符合规定判定
        const that = this;
        const adultNum = (adult || 0) - 0;
        const childNum = (child || 0) - 0;
        const childSeatNum = ((childSeat || 0) - 0) * 0.5;
        const max = Math.floor(that.data.passenger.maxPerson - adultNum - childNum - childSeatNum);
        if (max >= 0 && max <= that.data.passenger.maxPerson) {
            that.data.passenger.currentBagNo = that.data.passenger.maxBagNo - 0 - adultNum - childNum - childSeatNum;
            return true;
        }

        return false;

    }

    getGoodsNo() {
        return util.getRequestParam('goodsNo') || location.href.match(/sku\/([^?]*)/)[1];
    }

    maxNumber(type) {
        const that = this;
        let adultNum = (that.data.passenger.adultNo || 0) - 0; // 保存成人人数
        let childNum = (that.data.passenger.childNo || 0) - 0;		// 保存孩子人数
        let childSeatNum = (that.data.passenger.childSeat || 0) - 0;// 保存儿童座椅数
        // const baggagesNum = (that.data.passenger.baggagesNo || 0) - 0;// 保存行李数
        switch (type) {
        case 'adult-more':
            adultNum++;
            if (that.maxBaggages(adultNum, childNum, childSeatNum)) {
                that.data.passenger.adultNo = adultNum;
                that._renderAdult();
                that._renderBaggages();
            }
            break;
        case 'adult-less':
            adultNum--;
            if (adultNum >= 1 && that.maxBaggages(adultNum, childNum, childSeatNum)) {
                that.data.passenger.adultNo = adultNum;
                that._renderAdult();
                that._renderBaggages();
            }
            break;
        case 'child-more':
            childNum++;
            if (that.maxBaggages(adultNum, childNum, childSeatNum)) {
                that.data.passenger.childNo = childNum;
                that._renderChild();
                that._renderBaggages();
            }
            break;
        case 'child-less':
            if (childNum == childSeatNum) {
                childNum--;
                childSeatNum--;
            } else {
                childNum--;
            }
            if (childNum >= 0 && that.maxBaggages(adultNum, childNum, childSeatNum)) {
                that.data.passenger.childNo = childNum;
                that.data.passenger.childSeat = childSeatNum;
                that._renderChild();
                that._renderBaggages();
            }
            break;
        case 'childSeat-more':
            childSeatNum++;
            if (childSeatNum <= childNum && that.maxBaggages(adultNum, childNum, childSeatNum)) {
                that.data.passenger.childSeat = childSeatNum;
                that._renderChild();
                that._renderBaggages();
            }
            break;
        case 'childSeat-less':
            childSeatNum--;
            if (childSeatNum >= 0 && that.maxBaggages(adultNum, childNum, childSeatNum)) {
                that.data.passenger.childSeat = childSeatNum;
                that._renderChild();
                that._renderBaggages();
            }
            break;
        default:
            return false;
        }
    }

    msg(msg) {
        new Layer({
            msg
        });
    }

    bindEvent() {
        const that = this;
        new Header({
            title: '行程安排',
            backUrl: '',
            subShow: true,
            subTitle: '联系客服'
        });

        new newCalendar({
            goodsNo: 'IC1180440001',
            wrap: $('.sku-date'),
            cbname: 'newCalendarSelected'
        });

        // 座椅行李数
        that.dom.wrap.on('click', '.sku-num-modi', function() {
            const type = $(this).attr('data-type');
            that.maxNumber(type);
        });

        // 房间数量
        that.dom.wrap.on('click', '.room-more', function() {
            if (that.data.hotel.roomNo < 100) {
                that.data.hotel.roomNo++;
                that._renderHotel();
            }
        });
        that.dom.wrap.on('click', '.room-less', function() {
            if (that.data.hotel.roomNo > 1) {
                that.data.hotel.roomNo--;
                that._renderHotel();
            }

        });

        // 行李标准说明
        that.dom.wrap.on('click', '.baggages-info', function() {
            $('.J-baggages-wrap').show();
        });
        that.dom.wrap.on('click', '.J-baggages-wrap', function() {
            $(this).hide();
        });

        // 下一步点击按钮
        that.dom.wrap.on('click', '.next-btn-content', function() {
            that.data.nextParam = {
                goodsNo: that.data.param,
                serviceDate: that.data.date,
                // hotelStatus: that.data.hotel.hotelStatus,
                hotelRoom: that.data.hotel.roomNo,
                hotelDays: that.data.hotel.dateCount,
                hotelCostPrice: that.data.hotel.hotelCostPrice,
                adultNo: that.data.passenger.adultNo,
                childNo: that.data.passenger.childNo,
                childSeat: that.data.passenger.childSeat
            };
            if (that.data.date) {
                window.location.href = '/car?param=' + JSON.stringify(that.data.nextParam);
            } else {
                that.msg('请先选择日期');
            }
            // console.log(that.data.nextParam);
            // console.log(`总房间价格为${that.data.hotel.hotelCostPrice*that.data.hotel.hotelStatus}`);
        });

        // 监听选择时间
        $(document).off('newCalendarSelected').on('newCalendarSelected', function(e, data) {

            that.data.date = data;
            console.log(data);
        });
    }
}
new Sku();
