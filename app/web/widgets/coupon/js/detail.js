
const Header = require('widgets/header/index2.js');
const apiConfig = require('widgets/apiConfig/index.js');
const $ = require('widgets/zepto/zepto');
const juicer = require('widgets/juicer/juicer.js');
const util = require('widgets/util/index');
const ajax = require('widgets/ajax/index');
const tpl = require('./tpl/index.tpl');
require('./index.scss');

class Coupon {
    constructor(opt) {
        this.opt = {
            userInfo: opt.userInfo || '',
            useOrderPrice: opt.useOrderPrice || '', // 订单金额 可选
            priceChannel: opt.priceChannel || '', // 渠道价格 可选
            orderType: opt.orderType || '', // 订单类型 决定跳转结果 可选
            couponId: opt.couponId || '', // 优惠券id 表示订单页当前选中 默认从接口拿 可选
            tag: opt.tag || 'body', // 显示文档位置 默认body
            param: opt.param || {}
        };

        this.cacheData();
        this.renderUI();
        this.bindEvent();
        this.getCoupon();
    }

    cacheDom() {
        this.dom = {
            coupon: $('.coupon'),
            couponName: $('.coupon a'),
            couponLength: $('.coupon em'),
            couponPrice: $('.coupon strong'),
            couponStatus: $('.coupon span')
        };
    }

    cacheData() {
        this.data = {
            listCount: 0,
            listData: []
        };
        this.data.fit = {};
        this.data.query = JSON.parse(util.getQueryObjJson().param || '{}'); // url参数
        // 默认查券参数 全部
        this.data.paramDefault = {
            userId: this.opt.userInfo.userId || ''
        };
        // 接机查券参数
        this.data.paramPickup = {
            userId: this.opt.userInfo.userId,
            useOrderPrice: this.opt.useOrderPrice,
            priceChannel: this.opt.priceChannel,

            serviceTime: this.opt.param.serviceTime || this.data.query.serviceTime || '',
            carTypeId: this.opt.param.carTypeId || this.data.query.carTypeId || '',
            carModelId: this.opt.param.carModelId || this.data.query.carModelId || '',
            carSeatNum: this.opt.param.carSeatNum || this.data.query.carSeatNum || '',
            serviceCityId: this.opt.param.serviceCityId || this.data.query.serviceCityId || '',
            distance: this.opt.param.distance || this.data.query.distance || 0,
            expectedCompTime: this.opt.param.expectedCompTime || this.data.query.expectedCompTime || '',

            orderType: this.opt.orderType
        };
        // 送机查券参数
        this.data.paramTransfer = {
            userId: this.opt.userInfo.userId,
            useOrderPrice: this.opt.useOrderPrice,
            priceChannel: this.opt.priceChannel,

            serviceTime: this.opt.param.serviceTime || this.data.query.serviceTime || '',
            carTypeId: this.opt.param.carTypeId || this.data.query.carTypeId || '',
            carModelId: this.opt.param.carModelId || '',
            carSeatNum: this.opt.param.carSeatNum || '',
            serviceCityId: this.opt.param.serviceCityId || '',
            distance: this.opt.param.distance || 0,
            expectedCompTime: this.opt.param.expectedCompTime || '',

            orderType: this.opt.orderType
        };
        // 日租查券参数
        this.data.paramDaily = {
            userId: this.opt.userInfo.userId,
            useOrderPrice: this.opt.useOrderPrice,
            priceChannel: this.opt.priceChannel,

            serviceTime: this.opt.param.serviceTime || '',
            carTypeId: this.opt.param.carTypeId || '',
            carModelId: this.opt.param.carModelId || '',
            carSeatNum: this.opt.param.carSeatNum || '',
            serviceCityId: this.opt.param.serviceCityId || '',
            totalDays: this.opt.param.totalDays || 1,
            serviceLocalDays: this.opt.param.serviceLocalDays || 0,
            serviceNonlocalDays: this.opt.param.serviceNonlocalDays || 0,

            orderType: this.opt.orderType
        };
        // 单次查券参数
        this.data.paramSingle = {
            userId: this.opt.userInfo.userId,
            useOrderPrice: this.opt.useOrderPrice,
            priceChannel: this.opt.priceChannel,
            serviceTime: this.data.query.serviceTimeL || '',
            carTypeId: this.data.query.carTypeId || '',
            carSeatNum: this.data.query.carSeatNum || '',
            serviceCityId: this.data.query.serviceCityId || '',
            serviceCountryId: this.data.query.serviceCountryId || '',
            distance: this.data.query.distance || '',
            expectedCompTime: this.data.query.expectedCompTime || '',
            carModelId: this.data.query.carModelId || '',
            orderType: this.opt.orderType
        };
        // SKU查券参数
        this.data.paramSKU = {
            userId: this.opt.userInfo.userId,
            useOrderPrice: this.opt.useOrderPrice,
            priceChannel: this.opt.priceChannel,
            serviceTime: this.opt.param.serviceTimeL || this.data.query.serviceTimeL || '',
            carTypeId: this.opt.param.carTypeId || this.data.query.carTypeId || '',
            carSeatNum: this.opt.param.carSeatNum || this.data.query.carSeatNum || '',
            serviceCityId: this.opt.param.serviceCityId || this.data.query.serviceCityId || '',
            serviceCountryId: this.opt.param.serviceCountryId || this.data.query.serviceCountryId || '',
            totalDays: this.opt.param.totalDays || this.data.query.totalDays || '',
            carModelId: this.data.query.carModelId || '',
            orderType: this.opt.orderType
        };
    }
    getCoupon() {
        const that = this;
        that.cacheDom();
        let param = '';
        let opt = {};
        const apiAvailable = apiConfig.availableCoupon;
        const apiFit = apiConfig.mostFitCoupon;
        const apiUser = apiConfig.userCoupon;
        const header = {
            ak: '',
            ut: that.opt.userInfo.userToken,
            'X-Requested-With': 'XMLHttpRequest'
        };
        switch (that.opt.orderType - 0) {
        // 1接机,2送机,3日租,4单次接送,5超省心,6超自由
        case 1:
            param = that.data.paramPickup;
            break;
        case 2:
            param = that.data.paramTransfer;
            break;
        case 3:
            param = that.data.paramDaily;
            break;
        case 4:
            param = that.data.paramSingle;
            break;
        case 5:
            param = that.data.paramSKU;
            break;
        default:
            param = that.data.paramDefault;
        }
        if (that.opt.orderType) {
            // 有orderType：获取订单可用券数量
            opt = {
                url: apiAvailable,
                method: 'GET',
                header,
                data: param,
                success(ret) {
                    if (ret.status == 200 && ret.data.listCount) {
                        that.data.listCount = ret.data.listCount;
                        that.data.listData = ret.data.listData;
                        that.dom.couponLength.removeClass('empty');
                        that.dom.couponLength.html(that.data.listCount + '张可用<b></b>');
                        getFit();
                    }
                }
            };
        } else {
            // 没有orderType：获取全部券数量 用户中心进入
            opt = {
                url: apiUser,
                method: 'GET',
                header,
                data: param,
                success(ret) {
                    if (ret.status == 200 && ret.data.listCount) {
                        that.data.listCount = ret.data.listCount;
                        that.data.listData = ret.data.listData;
                        that.dom.couponLength.removeClass('empty');
                        that.dom.couponLength.html(ret.data.listCount + '张可用<b></b>');
                        that.dom.coupon.show();
                    }
                }
            };
        }
        ajax.sendRequest(opt);
        function getFit() {
            let text = '未使用';
            if (!that.opt.couponId) {
                if (that.data.query.couponCancel == 'cancel') {
                    that.opt.couponId = '';
                    that.dom.couponStatus.show();
                    that.dom.couponPrice.html('');
                    that.dom.coupon.attr('data-coupId', '');
                    that.dom.coupon.attr('data-coupPriceInfo', '');
                    that.dom.coupon.attr('data-actualPrice', '');
                    that.dom.coupon.show();
                    return false;
                }
                // 默认获取最优的
                const opt = {
                    url: apiFit,
                    method: 'GET',
                    header,
                    data: param,
                    success(ret) {
                        if (ret.status == 200 && ret.data) {
                            that.opt.couponId = ret.data.couponId; // 保存couponId 跳转追加用
                            that.data.fit = ret.data;
                            if (ret.data.couponType == 1) {
                                text = '－￥' + ret.data.priceInfo.replace('元', '');
                            } else {
                                text = ret.data.priceInfo;
                            }
                            that.dom.couponStatus.hide();
                            that.dom.couponPrice.html(text);
                            that.dom.couponPrice.show();
                            that.dom.coupon.attr('data-coupId', ret.data.couponId);
                            that.dom.coupon.attr('data-coupPriceInfo', ret.data.priceInfo);
                            that.dom.coupon.attr('data-actualPrice', ret.data.actualPrice);
                            that.dom.coupon.show();
                        }
                    }
                };
                ajax.sendRequest(opt);
            } else {
                // 如果有couponId获取选中的
                for (let i = 0; i < that.data.listData.length; i++) {
                    if (that.data.listData[i].couponId == that.opt.couponId) {
                        that.data.fit = that.data.listData[i];
                        if (that.data.listData[i].couponType == 1) {
                            text = '－￥' + that.data.listData[i].priceInfo.replace('元', '');
                        } else {
                            text = that.data.listData[i].priceInfo;
                        }
                        that.dom.couponStatus.hide();
                        that.dom.couponPrice.html(text);
                        that.dom.couponPrice.show();
                        that.dom.coupon.attr('data-coupId', that.data.listData[i].couponId);
                        that.dom.coupon.attr('data-coupPriceInfo', that.data.listData[i].priceInfo);
                        that.dom.coupon.attr('data-actualPrice', that.data.listData[i].actualPrice);
                        that.dom.coupon.show();
                        break;
                    }
                }
            }
        }
    }

    renderUI() {
        const wrap = this.opt.tag ? this.opt.tag : 'body';
        $(wrap).append(juicer(tpl, this.data));
    }

    show() {
        this.renderUI();
        this.cacheDom();
        this.bindEvent();
        return this;
    }

    bindEvent() {
        const that = this;
        that.cacheDom();
        $(that.opt.tag).on('click', '.coupon', function() {
            const param = that.data.query;
            param.userId = that.opt.userInfo.userId;
            param.useOrderPrice = that.opt.useOrderPrice;
            param.priceChannel = that.opt.priceChannel;
            param.orderType = that.opt.orderType;
            param.couponId = that.opt.couponId;
            param.couponInfo = that.data.fit;

            if (that.opt.orderType == 5) {
                param.serviceCityId = that.opt.param.serviceCityId;
                param.serviceCountryId = that.opt.param.serviceCountryId;
                param.totalDays = that.opt.param.totalDays;
                if (param.serviceTimeL.indexOf(':') == -1) {
                    param.serviceTimeL = that.data.query.serviceTimeL + ' 09:00:00';
                }
            }

            // console.log(param);return false;
            window.location.href = 'couponList.html?param=' + JSON.stringify(param);
        });
    }
}

module.exports = Coupon;
