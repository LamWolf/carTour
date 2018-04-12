const $ = require('widgets/zepto/zepto');
const util = require('widgets/util');
const Storage = require('widgets/storage/index');
const apiConfig = require('widgets/apiConfig/index.js');
const ajax = require('widgets/ajax/index');
const juicer = require('widgets/juicer/juicer.js');
const Ak = require('widgets/getAK/index.js');
const loading = require('widgets/loading/index');
const SearchAreaCode = require('widgets/searchAreaCode/index.js');
const Scheme = require('local-Scheme');
const tpl = require('./tpl/index.tpl');
const Cookie = require('widgets/cookie/index.js');
// const sensors = require("widgets/sensors/index");
require('./scss/index.scss');

const myStorage = new Storage();
class PopCoupon {
    constructor() {
        const that = this;
        // 获取AK
        Ak.getAk(res => {
            that._AK = res;
            that.init();
        });
    }

    init() {
        this.cacheData();
        this.cacheDom();
        this.renderMain();
    }

    cacheData() {
        const that = this;
        that.data = {};
        that.data.ak = that._AK;
        that.data.userInfo = JSON.parse(myStorage._getCookie('userInfo')) || myStorage.get('userInfo');
        that.data.isCAPP = util.plateForm().app == 'hbcc';
        that.data.did = util.getRequestParam('did') || '10042';
    }

    cacheDom() {
        const that = this;
        that.dom = {
            wrap: $('.give-coupon'),
            area: $('#coupon-area'),
            phone: $('#coupon-phone'),
            code: $('#coupon-code'),
            send: $('.coupon-send'),
            close: $('.coupon-box-close'),
            formButton: $('.coupon-form-button'),
            finishButton: $('.coupon-finish-button'),
            error: $('.coupon-error')
        };
    }

    renderMain() {
        const that = this;
        if (util.plateForm().app === 'hbcg') {
            return;
        }
        that.sendSa('$view_index_pop');
        if (that.data.userInfo && that.data.userInfo.userId) {
            return false;
        }
        if (myStorage.get('giveCoupon') && myStorage.get('giveCoupon') == 1) {
            return false;
        }
        that.dom.wrap.html(juicer(tpl, that.data));
        that.dom.wrap.bind('touchmove', function(e) {
            e.preventDefault();
        });
        that.cacheDom();
        that.bindEvent();
        if (!that.data.isCAPP) {
            setTimeout(function() {
                that.dom.wrap.show();
            }, 5000);
        }

    }

    obtainCoupon(param, userInfo) {
        const that = this;
        const url = apiConfig.getPackW;
        loading.init();
        const opt = {
            url,
            method: 'POST',
            header: {
                ak: that.data.ak || '',
                ut: userInfo.userToken,
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: param,
            success(ret) {
                loading.hide();
                if (ret.status === 200) {
                    if (ret.data && ret.data.isDraw == 1) {
                        $('.coupon-finish h3').text('您已领取过啦');
                    }
                    myStorage.set('giveCoupon', '1');
                    $('.coupon-code').css('borderColor', '#bdbdbd');
                    $('.coupon-data').hide();
                    $('.coupon-finish').show();
                } else {
                    $('.coupon-error').show();
                }
            },
            error() {
                loading.hide();
            }
        };
        ajax.sendRequest(opt);
    }

    sendCode(phone) {
        const that = this;
        that.data.timeNum = 60;
        that.data.timer && clearInterval(that.data.timer);
        that.data.timer = setInterval(function() {
            if (that.data.timeNum == 0) {
                clearInterval(that.data.timer);
                $('.coupon-send').find('span').hide();
                $('.coupon-send').find('em').show();
                $('.coupon-send').removeClass('ready');
            } else {
                $('.coupon-time').text(that.data.timeNum);
                $('.coupon-send').find('em').hide();
                $('.coupon-send').find('span').show();
                that.data.timeNum--;
            }
        }, 1000);
    }

    bindEvent() {
        const that = this;
        that.dom.area.on('click', function() {
            const name = 'indexGetCode'; /*  */
            that.searchAreaCode = new SearchAreaCode({
                title: '选择区号',
                cbname: name,
                callback() {
                    that.dom.wrap.css('display', 'block');
                }
            }).show();
            that.dom.wrap.css('display', 'none');
            $(document).off(name).on(name, function(e, data) {
                that.dom.wrap.css('display', 'block');
                that.dom.area.text('+' + data.areaCode);
            });

        });

        that.dom.phone.on('input', function() {
            const phone = that.dom.phone.val();
            const code = that.dom.code.val();
            if (phone && code) {
                that.dom.formButton.removeClass('disabled');
            } else {
                that.dom.formButton.addClass('disabled');
            }
        });

        that.dom.code.on('input', function() {
            const code = that.dom.code.val();
            const phone = that.dom.phone.val();
            if (phone && code) {
                that.dom.formButton.removeClass('disabled');
            } else {
                that.dom.formButton.addClass('disabled');
            }
        });

        that.dom.finishButton.on('click', function(e) {

            that.dom.wrap.unbind('touchmove');
            that.dom.wrap.hide();

            const url = 'http://scdata.huangbaoche.com/r/Ls';
            const action = {
                t: '2',
                v: '2'
            };
            const goUrl = `${apiConfig.actHost}h5/cactivity/capp/applinks.html?action=${encodeURIComponent(JSON.stringify(action))}&backurl=${encodeURIComponent(url)}`;
            if (util.isIOS()) {
                window.location.href = goUrl;
            } else {
                const scheme = new Scheme({
                    io: 'hbcc://?{"t":"2","v":"2"}',
                    did: that.data.did,
                    auto: true
                });
            }
            // window.location.href = "midpage.html"
        });

        that.dom.close.on('click', function(e) {
            that.dom.wrap.unbind('touchmove');
            that.dom.wrap.hide();
        });

    }

    sendSa(type, data) {
    /* let arr = ['useOrderPrice', 'urgentFlag', 'priceActual', 'travelFund', 'capOfPerson', 'distance', 'capOfLuggage', 'user_id', 'orderType', 'expectedCompTime', 'destCityId']*/
        for (const key in data) {
            if (typeof data[key] == 'number') {
                data[key] += '';
            }
            /* for (let i = 0; i < arr.length; i++) {
        if (key == arr[i]) {
          data[key] -= 0;
        }
      }*/

        }
    // window.sa.track(type, data)
    }


}

module.exports = PopCoupon;
