/**
 * Created by Gorden on 16/10/2.
 */
const $ = require('widgets/zepto/zepto');
const carTpl = require('./tpl/carList.tpl');
const priceTpl = require('./tpl/countPrice.tpl');

const juicer = require('widgets/juicer/juicer.js');
const util = require('widgets/util/index.js');
const Header = require('widgets/header/index.js');
require('widgets/csslib/base.css');
require('widgets/csslib/fonts/fonts.css');
require('./scss/index.scss');
require('widgets/layer/index.scss');
class Car {
    constructor(opt) {
        this.data = opt;
        this.cacheData();
        this.cacheDom();
        this.addJuicerHelper();
        this._checkCar();
        this._renderCarList();
        this._renderPrice();
        this.bindEvent();
    }

    cacheData() {
        this.data = {
            carList: window.__goodsPrice, // 可选车列表
            realCarList: window.__realCarList, // 符合条件车列表
            currentIndex: 1, // 当前选择车默认为第一个
            param: JSON.parse(util.getRequestParam('param')),
            personLuggage: 14, // 当前行李最大值
            csPrice: window.__csPrice,
            nextParam: {

            }
        };
        this.data.param5 = {
            goodsNo: this.data.param.goodsNo,
            serviceDate: this.data.param.serviceDate + ' 00:00:00',
            channelId: util.getRightChannelId(),
            specialCarsIncluded: 1
        };
    }

    cacheDom() {
        const that = this;
        that.dom = {
            wrap: $('#page'),
            tpl: $('#tpl'),
            info: $('#info'),
            list: $('#list'),
            empty: $('#list-empty'),
            orderButton: $('.list-item-order button'),
            price: $('.sku-price-confirm')
        };
    }

    _renderCarList() {
        const that = this;
        that.dom.list.html(juicer(carTpl, that.data));
        that.cacheDom();
    }

    _renderPrice() {
        const that = this;
        that.dom.price.html(juicer(priceTpl, that.data));
        that.cacheDom();
    }

    addJuicerHelper() {
        const that = this;
        juicer.register('add', function() {
            let sum = 0;
            for (let i = 0; i < arguments.length; i++) {
                sum = sum + parseInt(arguments[i]);
            }
            return sum;
        });
        juicer.register('maxLuggage', function(cap, adultNo, childNo, childSeat) {
            const p_no = (function(an, cn, csn) {
                if (cn == csn) {
                    return (an + cn * 1.5);
                }
                return (an + csn * 1.5 + cn - csn);

            })(adultNo - 0, childNo - 0, childSeat);
            const rs = Math.floor(cap - 0 - p_no);
            return rs;
        });
        juicer.register('carImg', function(carType, seatType) {
            let name = '';
            if (carType == 1) {
                name = 'jincou';
            } else if (carType == 2) {
                name = 'shushi';
            } else if (carType == 3) {
                name = 'haohua';
            } else if (carType == 4) {
                name = 'shehua';
            }
            return that.data.imgs[name + '' + seatType];
        });
        juicer.register('getCsPrice', function() {
            const csn = that.data.param.childSeat - 0;
            const priceObj = that.data.carList.additionalServicePrice;
            return ((no, obj) => {
                const p1 = obj.childSeatPrice1 || 0;
                const p2 = obj.childSeatPrice2 || 0;
                if (no <= 1) {
                    return p1 * no;
                }
                if (no > 1) {
                    return p1 + (no - 1) * p2;
                }
            })(csn, priceObj);
        });
        juicer.register('formatMoney', function(str) {
            str += '';
            return str.split('').reverse().join('')
                .replace(/(\d{3}(?=\d)(?!\d+\.|$))/g, '$1,')
                .split('')
                .reverse()
                .join('');
        });
        juicer.register('getWeek', function(str) {
            return ('周' + [ '日', '一', '二', '三', '四', '五', '六' ][new Date(str.substr(0, 10)).getDay()]);
        });
        juicer.register('getResPrice', function(price) {
            return (price - 0) + (that.data.csPrice - 0);
        });
        juicer.register('getModel', function(str) {
            let model = '';
            const arr = str.split(',');
            if (arr[0]) {
                model = model + arr[0];
            }
            if (arr[1]) {
                model = model + ',' + arr[1];
            }
            if (arr[2]) {
                model = model + ',' + arr[2];
            }
            return model;
        });
    }

    // 获取选定车信息
    _checkCar(index) {

        const that = this;
        let tempCar = {}; // 选定的车
        const hotelPrice = that.data.param.hotelCostPrice * that.data.param.hotelRoom; // 酒店房间价格（房间价格会因接口传入新数据而更新）
        const childSeatPrice = that.data.csPrice - 0; // 儿童座椅价格
        if (index) {
            that.data.currentIndex = index;
        }
        if (that.data.realCarList.length == 0) {
            return;
        }
        tempCar = that.data.realCarList[that.data.currentIndex - 1];
        const countPrice = hotelPrice + (tempCar.price - 0) + childSeatPrice; // 总价格
        that.data.personLuggage = (tempCar.capOfLuggage - 0) + (tempCar.capOfPerson - 0);
        that.data.nextParam = {
            capOfPerson: tempCar.capOfPerson,
            carSeatNum: tempCar.capOfPerson,
            carDesc: tempCar.carDesc,
            carModelId: tempCar.carId,
            carTypeId: tempCar.carType,
            serviceTag: encodeURIComponent(tempCar.serviceTags[0]),
            luggageNumber: tempCar.capOfLuggage,
            priceMark: tempCar.pricemark,
            totalPrice: countPrice,
            adultNum: that.data.param.adultNo,
            childNum: that.data.param.childNo,
            childSeat: that.data.param.childSeat,
            serviceTimeL: that.data.param.serviceDate,
            goodsNo: that.data.param.goodsNo,
            orderType: util.getRequestParam('type'),
            isSpecialCar: 1,
            hotelRoom: that.data.param.hotelRoom,
            hotelDays: that.data.param.hotelDays,
            hotelPrice: that.data.param.hotelCostPrice
        };
    }

    bindEvent() {
        const that = this;
        that.cacheDom();

        new Header({
            title: '选择车型',
            backUrl: '',
            subShow: 'true',
            subTitle: '联系客服'
        });

        // 行李标准说明
        that.dom.wrap.on('click', '.baggages-info', function() {
            $('.J-baggages-wrap').show();
        });
        that.dom.wrap.on('click', '.J-baggages-wrap', function() {
            $(this).hide();
        });

        // 选车
        that.dom.wrap.on('click', '.list-item', function() {
            const index = $(this).attr('data-index');
            console.log(`this is index${index}`);
            if (that.data.currentIndex != index) {
                that._checkCar(index);
                that._renderCarList();
                that._renderPrice();
            }
        });

        that.dom.wrap.on('click', '.skucar-next-btn', function() {
            if (that.data.nextParam.carModelId && that.data.nextParam.priceMark) {
                window.location.href = '/app/orderForm.html?param=' + JSON.stringify(that.data.nextParam);
            }

        });

    }
}
new Car();
