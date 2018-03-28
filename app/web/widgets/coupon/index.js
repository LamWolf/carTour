const Header = require('widgets/header/index.js');
const apiConfig = require('widgets/apiConfig/index.js');
const $ = require('widgets/zepto/zepto');
const juicer = require('widgets/juicer/juicer.js');
const myStorage = new (require('widgets/storage/index.js'))();
const util = require('widgets/util/index');
const ajax = require('widgets/ajax/index');
const alert = require('widgets/alert/index');
const Ak = require('widgets/getAK/index.js');
const tpl = require('./tpl/index.tpl');
const CheckLogin = require('widgets/checkLogin/index');
require('./index.scss');
const CouponList = require('./js/list.js');
const fixCallUI = require('widgets/fixCallUI/index.js');
const cookie = require('widgets/cookie/index');
class Coupon {
    constructor(opt) {
        const that = this;
        this.opt = {
            userInfo: opt.userInfo || '',
            useOrderPrice: opt.useOrderPrice || '', // 订单金额 可选
            priceChannel: opt.priceChannel || '', // 渠道价格 可选
            orderType: opt.orderType || '', // 订单类型 决定跳转结果 可选
            couponId: opt.couponId || '', // 优惠券id 表示订单页当前选中 默认从接口拿 可选
            tag: opt.tag || 'body', // 显示文档位置 默认body
            param: opt.param || {},
            dom: opt.dom
        };
        // 获取AK
        Ak.getAk(res => {
            window._AK = res;
            this.cacheData();
            this.addJuicerHelper();
            this.getCoupon();
            this.bindEvent();
        });
    }

    addJuicerHelper() {
        juicer.register('replaceYuan', function(str) {
            return str.replace('元', '');
        });
        juicer.register('replaceZhe', function(str) {
            return str.replace('折', '');
        });
        juicer.register('replace', function(str) {
            return str.replace('|', '，');
        });
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
            type: this.opt.orderType || 0, // 订单类型 券页展示方式 0为用户中心进入获取全部券
            count: 0, // 总数
            fit: {}, // 当前券
            cancel: 0 // 是否取消当前券 默认不取消 获取最合适的优惠券
        };
        this.data.query = JSON.parse(util.getQueryObjJson().param || '{}'); // url参数
        this.data.text = '不使用优惠券';
        this.data.param = {}; // 请求参数 根据订单类型获取
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
            carModelId: this.opt.param.carModelId || this.data.query.carModelId || '',
            carSeatNum: this.opt.param.carSeatNum || this.data.query.carSeatNum || '',
            serviceCityId: this.opt.param.serviceCityId || this.data.query.serviceCityId || '',
            distance: this.opt.param.distance || this.data.query.distance || 0,
            expectedCompTime: this.opt.param.expectedCompTime || this.data.query.expectedCompTime || '',

            orderType: this.opt.orderType
        };
        // 日租查券参数
        this.data.paramDaily = {
            userId: this.opt.userInfo.userId,
            useOrderPrice: this.opt.useOrderPrice,
            priceChannel: this.opt.priceChannel,

            serviceTime: this.opt.param.serviceTime || this.data.query.serviceTime || '',
            carTypeId: this.opt.param.carTypeId || this.data.query.carTypeId || '',
            carModelId: this.opt.param.carModelId || this.data.query.carModelId || '',
            carSeatNum: this.opt.param.carSeatNum || this.data.query.carSeatNum || '',
            serviceCityId: this.opt.param.serviceCityId || this.data.query.serviceCityId || '',
            totalDays: this.opt.param.totalDays || this.data.query.totalDays || 1,
            serviceLocalDays: this.opt.param.serviceLocalDays || this.data.query.serviceLocalDays || 0,
            serviceNonlocalDays: this.opt.param.serviceNonlocalDays || this.data.query.serviceNonlocalDays || 0,

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
        switch (this.data.type - 0) {
        // 1接机,2送机,3日租,4单次接送,5超省心,6超自由
        case 1:
            this.data.param = this.data.paramPickup;
            break;
        case 2:
            this.data.param = this.data.paramTransfer;
            break;
        case 3:
            this.data.param = this.data.paramDaily;
            break;
        case 4:
            this.data.param = this.data.paramSingle;
            break;
        case 5:
            this.data.param = this.data.paramSKU;
            break;
        case 6:
            this.data.param = this.data.paramSKU;
            break;
        default:
            this.data.text = '';
            this.data.param = this.data.paramDefault;
        }
        this.data.param.limit = 10;
        this.data.param.offset = 0;
        this.data.param.channelId = util.getRightChannelId();
        if (cookie.get('iscbc')) {
            this.data.param.couponPackageNo = apiConfig.cbcPackNo;
            //  this.data.param.onlyUse = 1;//返回传入的券,多次使用
        }
        if (cookie.get('ismaster')) {
            let masterInfo = null;
            try {
                masterInfo = JSON.parse(cookie.get('masterInfo'));
            } catch (e) {
                alert('数据异常');
                window.location.href = '/';
            }
            if (masterInfo.activityNo == 201) {
                this.data.param.couponPackageNo = apiConfig.masterPackNo;
                this.data.param.onlyUse = 1;// 返回传入的券,多次使用
            } else {
                this.data.isRightMaster = false;
            }
        }

        // delete this.data.param.carModelId;
        this.wapperList = ''; // 弹出列表
    }

    getAvilable() {
        const that = this;
        let opt = {};
        const apiAvailable = apiConfig.getAvailableNum;
        const apiFit = apiConfig.mostFitCoupon;
        const apiUser = apiConfig.userCoupon;
        const header = {
            ak: window._AK,
            // 'ak': that.opt.userInfo.accessKey,
            ut: that.opt.userInfo.userToken,
            'X-Requested-With': 'XMLHttpRequest'
        };
        if (that.data.type) {
            // 有orderType：获取订单可用券数量
            opt = {
                url: apiConfig.availableCoupon,
                method: 'GET',
                header,
                data: that.data.param,
                success(ret) {

                    if (ret.status == 200) {
                        that.data.count = ret.data.listCount;
                        that.renderUI();
                    } else if (ret.status == 10011 || ret.status == 10012) {
                        myStorage.set('login-suc', window.location.href);
                        window.location.href = 'login.html';
                    }
                }
            };
        } else {
            // 没有orderType：获取全部券数量 用户中心进入
            opt = {
                url: apiAvailable,
                method: 'GET',
                header,
                data: that.data.param,
                success(ret) {
                    if (ret.status == 200) {
                        that.data.count = ret.data.listSize;
                        that.dom.coupon.show();
                        that.renderUI();
                    }
                }
            };
        }
        ajax.sendRequest(opt);
    }


    getCoupon() {
        const that = this;
        that.cacheDom();
        let opt = {};
        const apiAvailable = apiConfig.getAvailableNum;
        const apiFit = apiConfig.mostFitCoupon;
        const apiUser = apiConfig.userCoupon;
        // 如果是master,并且不合规,直接退出了。
        if (cookie.get('ismaster')) {
            if (this.data.isRightMaster === false) {
                $(document).trigger('fitCoupSuccess', {});
                this.renderMasterUI();
                return;
            }
        }
        const header = {
            ak: window._AK,
            // 'ak': that.opt.userInfo.accessKey,
            ut: that.opt.userInfo.userToken,
            'X-Requested-With': 'XMLHttpRequest'
        };
        if (that.data.type) {
            this.getFit();
        } else {
            opt = {
                url: apiAvailable,
                method: 'GET',
                header,
                data: that.data.param,
                success(ret) {
                    if (ret.status == 200) {
                        that.data.count = ret.data.listSize;
                        that.dom.coupon.show();
                        that.renderUI();
                    }
                }
            };
            ajax.sendRequest(opt);
        }

    }


    getFit() {
        const that = this;
        const text = that.data.text;
        if (that.data.cancel > 0) {
            that.data.fit = {};
            $(document).trigger('fitCoupSuccess', {});
            that.renderUI();
            return false;
        }
        if (!that.data.fit.couponId) {
            // 默认获取最优的
            const _url = cookie.get('iscbc') ? apiConfig.thirdBlankFit : apiConfig.mostFitCoupon;
            const opt = {
                url: _url,
                method: 'GET',
                header: {
                    ak: window._AK,
                    // 'ak': that.opt.userInfo.accessKey,
                    ut: that.opt.userInfo.userToken,
                    'X-Requested-With': 'XMLHttpRequest'
                },
                data: that.data.param,
                success(ret) {
                    if (ret.status == 200 && ret.data) {
                        console.log(ret);
                        that.data.fit = ret.data;
                        $(document).trigger('fitCoupSuccess', {
                            coupId: ret.data.couponId,
                            coupPriceInfo: ret.data.priceInfo,
                            actualPrice: ret.data.actualPrice
                        });
                        // that.renderUI();
                        if (cookie.get('iscbc')) {
                            // 是建行就不用请求getAvilable了
                            that.renderCbc(ret.data);
                            return;
                        }
                        that.getAvilable();
                    }
                }
            };
            ajax.sendRequest(opt);
        } else {
            $(document).trigger('fitCoupSuccess', {
                coupId: that.data.fit.couponId,
                coupPriceInfo: that.data.fit.priceInfo,
                actualPrice: that.data.fit.actualPrice
            });
            that.renderUI();
        }
    }

    renderUI() {

        const wrap = this.opt.tag ? this.opt.tag : 'body';
        $(wrap).html(juicer(tpl, this.data));
        cookie.get('ismaster') == 1 && $(document).trigger('fitCoupSuccessMasterAfterRender', {});
        cookie.get('iscbc') == 1 && $(document).trigger('fitCoupSuccessCbcAfterRender', {});
    }
    renderMasterUI() {

        const wrap = this.opt.tag ? this.opt.tag : 'body';
        require([ './tpl/master.tpl' ], function(tpl) {
            $(wrap).html(juicer(tpl, {}));
            cookie.get('ismaster') == 1 && $(document).trigger('fitCoupSuccessMasterAfterRender', {});
        });
    }
    renderCbc(data) {

        const wrap = this.opt.tag ? this.opt.tag : 'body';
        require([ './tpl/cbc.tpl' ], function(tpl) {
            console.log(data);
            $(wrap).html(juicer(tpl, data));
            cookie.get('iscbc') == 1 && $(document).trigger('fitCoupSuccessCbcAfterRender', {});
        });
    }

    resetUI() {
        const that = this;
        let text = that.data.text;

        if (that.data.listCount) {
            that.dom.couponLength.html(that.data.listCount + '张可用<b></b>');
        }
        if (!that.data.fit.couponType) {
            that.dom.couponStatus.html(text);
            that.dom.couponStatus.show();
            that.dom.couponPrice.html('');
            that.dom.coupon.attr('data-coupId', '');
            that.dom.coupon.attr('data-coupPriceInfo', '');
            that.dom.coupon.attr('data-actualPrice', '');
            that.dom.coupon.show();
            $(document).trigger('fitCoupSuccess', {});

            return false;
        }

        if (that.data.fit && that.data.fit.couponType == 1) {
            text = '－￥' + that.data.fit.priceInfo.replace('元', '');
        } else {
            text = that.data.fit.priceInfo;
        }
        that.dom.couponStatus.hide();
        that.dom.couponPrice.html(text);
        that.dom.couponPrice.show();
        that.dom.coupon.attr('data-coupId', that.data.fit.couponId);
        that.dom.coupon.attr('data-coupPriceInfo', that.data.fit.priceInfo);
        that.dom.coupon.attr('data-actualPrice', that.data.fit.actualPrice);
        that.dom.coupon.show();
        $(document).trigger('fitCoupSuccess', {
            coupId: that.data.fit.couponId,
            coupPriceInfo: that.data.fit.priceInfo,
            actualPrice: that.data.fit.actualPrice
        });

    }

    bindEvent() {
        const that = this;
        that.cacheDom();
        $(document).off('sureCoupon').on('sureCoupon', function(e, data) {
            that.data.cancel = data.cancel;
            if (data.fit.couponId) {
                that.data.fit = data.fit;
            }
            if (data.listCount) {
                that.data.count = data.listCount;
            }
            that.getCoupon();
            $(document).trigger('userCoupon');
        });

        $(document).off('addCoupon').on('addCoupon', function(e, data) {
            that.getCoupon();
        });

        $('body').off('click', '.coupon').on('click', '.coupon', function() {

            // console.log(that.opt.userInfo);return false;

            if (cookie.get('ismaster') == 1 || cookie.get('iscbc') == 1) {
                return;
            }
            const checkLogin = new CheckLogin({
                type: 2,
                falseType: 1, // 登录验证失败
                trueType: 2,
                back: show,
                that
            });


            function show() {
                if (!arguments[0]) {
                    window.location.href = 'login.html';
                    return false;
                }
                that.opt.userInfo = arguments[0];

                const opt = {
                    userInfo: that.opt.userInfo,
                    type: that.data.type,
                    param: that.data.param,
                    fit: that.data.fit,
                    cancel: that.data.cancel,
                    ak: window._AK
                };

                const fixCall = new fixCallUI({
                    dom: that.opt.dom,
                    callbackName: 'fixCallCoupon'
                });
                opt.param.offset = 0;

                opt.fixCall = fixCall;
                that.wapperList = new CouponList(opt);
            }


        });
    }
}

module.exports = Coupon;
