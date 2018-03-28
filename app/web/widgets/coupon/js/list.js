const $ = require('widgets/zepto/zepto');
const apiConfig = require('widgets/apiConfig/index.js');
const loading = require('widgets/loading/index');
const ajax = require('widgets/ajax/index');
const tplList = require('../tpl/list.tpl');
const tplChoose = require('../tpl/choose.tpl');
const tplUser = require('../tpl/user.tpl');
const tplFit = require('../tpl/fit.tpl');
const tplDetail = require('../tpl/detail.tpl');
const juicer = require('widgets/juicer/juicer.js');
const util = require('widgets/util/index.js');
const Header = require('widgets/header/index2.js');
import IScroll from 'iscroll';
require('widgets/csslib/base.css');
require('../index.scss');

class couponList {
    constructor(opt) {
        this.cacheData(opt);
        this.fixCall = opt.fixCall || '';
        this.addJuicerHelper();
        this.renderUI();
        this.cacheDom();
        this.bindEvent();
        this.getItem();

    }
    cacheData(opt) {
        this.data = {};
        this.data.userInfo = opt.userInfo;
        this.data.type = opt.type;
        this.data.param = opt.param;
        this.data.fit = opt.fit || {};
        this.data.cancel = opt.cancel;
        this.data.list = [];
        this.data.listCount = '';
        this.data.ak = opt.ak;

        console.log(opt.ak);
    }

    cacheDom() {
        const that = this;
        that.dom = {
            wrap: $('#coupon-list'),
            list: $('.coupon-list'),
            empty: $('.coupon-list-empty'),
            items: $('.coupon-item'),
            cancel: $('.coupon-item-cancel'),
            input: $('.coupon-from input'),
            confirm: $('.coupon-from button'),
            detail: $('.show-detail')
        };
    }

    renderUI() {
        const that = this;
        // 移除列表，避免new第二次时出错
        $('#coupon-list').remove();
        $('body').append(juicer(tplList, this.data));
        // that.resetPosition();
        new Header({
            title: '我的优惠券',
            backUrl: '',
            subShow: 'true',
            subTitle: '联系客服',
            wrap: $('#coupon-list'),
            pannel: $('#coupon-list'),
            hash: '#coupon-list',
            callback: () => {
                that.fixCall && that.fixCall.triggerShowEvent();
            }
        });
        this.cacheDom();
        this.dom.wrap.show();
        this.iscroll = new IScroll('.J-coupon-list', {
            click: true
        });
        this.iscroll.on('scrollStart', function() {
            that.iscroll.refresh();
        });
        this.iscroll.on('scrollEnd', function(obj) {
            if (-this.maxScrollY + this.absStartY > 50 && that.__canNext && !that.__isPennding) {
                that.getList();
            }
        });
        that.fixCall && that.fixCall.triggerHideEvent();
    }

    resetPosition() {
        const that = this;
        $('#coupon-list').css({
            top: $('body').scrollTop() + 'px',
            height: $(window).height() + 'px'
        });
    }


    getItem(cb) {
        const that = this;
        if (!that.data.type) {
            that.getList();
            return false;
        }
        if (that.data.fit.couponId) {
            // that.data.list.push(that.data.fit);
            that.renderFit();
            that.getList();
            return false;
        }
        $('.coupon-item-cancel').addClass('check');


        if (that.data.cancel) {
            $('.coupon-item-cancel').addClass('check');
            that.getList();
            return false;
        }
        /*
    if(that.data.queryParam.couponCancel == 'cancel') {
      that.getList();
      return false;
    }
    */
        const url = apiConfig.mostFitCoupon;
        const opt = {
            url,
            method: 'GET',
            header: {
                ak: that.data.ak || '',
                ut: that.data.userInfo.userToken,
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: that.data.param,
            success(ret) {
                if (ret.status === 200 && ret.data) {
                    that.data.fit = ret.data;
                    // that.data.list.push(ret.data);
                    that.renderFit();
                    that.getList();
                    cb && cb();
                }
            }
        };
        ajax.sendRequest(opt);
    }

    getList() {
        const that = this;
        that.__isPennding = true;
        const url = that.data.type ? apiConfig.availableCoupon : apiConfig.userCoupon;
        const opt = {
            url,
            method: 'GET',
            header: {
                ak: that.data.ak,
                ut: that.data.userInfo.userToken,
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: that.data.param,
            success(ret) {
                if (ret.status === 200 && ret.data.listData.length > 0) {
                    // that.data.list.push(ret.data.listData);
                    that.data.list = that.data.list.concat(ret.data.listData);
                    if (that.data.fit.couponId) {
                        for (let i = 0; i < ret.data.listData.length; i++) {
                            if (ret.data.listData[i].couponId == that.data.fit.couponId) {
                                ret.data.listData[i] = {};
                                break;
                            }
                        }
                    }

                    if (ret.data.listData.length == that.data.param.limit) {
                        that.data.param.offset = that.data.param.offset + that.data.param.limit;
                        that.renderList(ret.data);
                        // that.bindNext();
                        that.__canNext = true;
                        that.__isPennding = false;
                    } else {
                        that.renderList(ret.data);
                        that.__canNext = false;
                        that.__isPennding = false;
                    }

                }
                if (ret.data.listCount == 0) {
                    $('.coupon-item').remove();
                    $('.coupon-item-cancel').hide();
                    $('.coupon-list-empty').show();
                } else {
                    that.data.listCount = ret.data.listCount;
                    !!(that.data.type) && $('.coupon em').html(that.data.listCount + '张可用');
                }
            }
        };
        ajax.sendRequest(opt);
    }

    bindNext() {
        const that = this;
    // util._bindScrollTobottom(function(){
    //   that.getList();
    // },true);
    }

    renderList(data) {
        const that = this;
        that.cacheDom();

        if (that.data.type) {
            that.dom.cancel.show();
        }

        /*
    if(that.data.queryParam.couponId){
      data.couponId = that.data.queryParam.couponId
    }
    if(that.data.queryParam.orderType) {
      data.type = that.data.queryParam.orderType;
    }
    */

        if (that.data.type) {
            $('.coupon-list').append(juicer(tplChoose, data));
        } else {
            $('.coupon-list').append(juicer(tplUser, data));
        }


        /*
    if(that.data.list.length == 0){
      that.dom.list.hide();
      that.dom.empty.show();
    }
    */
        this.iscroll.refresh();
    }

    renderFit() {
        const that = this;
        that.cacheDom();

        // if (that.data.type) {
        //   that.dom.cancel.show();
        // }
        $('.coupon-list-fit').html(juicer(tplFit, that.data));

        /*
    if(that.data.list.length == 0){
      that.dom.list.hide();
      that.dom.empty.show();
    }
    */
        this.iscroll.refresh();
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

    bindEvent() {
        const that = this;
        that.cacheDom();

        $('body').on('touchmove', '#coupon-list', function(e) {
            e.preventDefault();
        });

        $('body').off('click', '.coupon-item').on('click', '.coupon-item', function(e) {
            const self = $(this);
            const param = '';
            if (that.data.type) {
                if (self.hasClass('check')) {
                    self.removeClass('check');
                } else {
                    $('#page').find('.coupon-item').removeClass('check');
                    self.addClass('check');
                }
                $('.coupon-item-cancel').removeClass('check');
                const couponId = self.attr('data-couponId');
                for (let i = 0; i < that.data.list.length; i++) {
                    if (that.data.list[i].couponId == couponId) {
                        that.data.fit = that.data.list[i];
                        that.data.cancel = 0;
                        that.dom.wrap.remove();
                        that.data.param.offset = 0;
                        break;
                    }
                }
                $(document).trigger('sureCoupon', [ that.data ]);
                that.fixCall && that.fixCall.triggerShowEvent();
            } else {
                const chooseId = self.attr('data-couponId');
                const showData = {};
                for (let i = 0; i < that.data.list.length; i++) {
                    if (that.data.list[i].couponId == chooseId) {
                        const currentData = {
                            item: that.data.list[i]
                        };
                        that.dom.detail.html(juicer(tplDetail, currentData));
                        that._detailIscroll = new IScroll('#J-show-detail', {
                            click: true,
                            mouseWheel: true
                        });
                        new Header({
                            title: '优惠券详情',
                            backUrl: '',
                            subShow: 'false',
                            subTitle: '',
                            isHidePannel: true,
                            wrap: $('#J-show-detail'),
                            pannel: $('#J-show-detail')
                            // hash:'#J-show-detail',

                        });
                        that._detailIscroll.on('scrollStart', function() {
                            console.log(123);
                            that._detailIscroll.refresh();
                        });
                        // $('body,html').scrollTop(0);
                        that.data.param.offset = 0;
                        that.dom.detail.show();
                        console.log(that.data.list[i]);
                        break;
                    }
                }
            }


        });

        $('body').off('click', '.coupon-item-cancel').on('click', '.coupon-item-cancel', function() {
            $('body').find('.coupon-item').removeClass('check');
            $(this).addClass('check');
            that.data.fit = {};
            that.data.cancel = 1;
            $(document).trigger('sureCoupon', [ that.data ]);

            that.dom.wrap.remove();
            setTimeout(function() {
                that.fixCall && that.fixCall.triggerShowEvent();
            }, 0);
        });

        that.dom.confirm.off('click').on('click', function() {
            const val = that.dom.input.val();
            const l = $('.coupon-item').length;
            if (val) {
                const param = {
                    couponCode: val,
                    userId: that.data.userInfo.userId
                };
                const opt = {
                    url: apiConfig.bindCoupon,
                    method: 'POST',
                    header: {
                        ak: that.data.ak || '',
                        ut: that.data.userInfo.userToken,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    data: param,
                    success(ret) {
                        if (ret.status === 200) {
                            setTimeout(function() {
                                alert('兑换成功');
                            }, 500);
                            $('.coupon-item ').remove();
                            that.data.param.offset = 0;
                            that.getItem(function() {
                                if (l == 0) {
                                    $('.coupon em').removeClass('empty');
                                    $('.coupon-item-cancel').removeClass('check');
                                    $('.coupon-list-empty').hide();
                                    $(document).trigger('addCoupon', [ that.data ]);
                                }
                            });
                            $('.coupon em').removeClass('empty');
                            $('.coupon-list-empty').hide();
                        } else {
                            setTimeout(function() {
                                alert(ret.message);
                            }, 500);
                        }
                    }
                };
                ajax.sendRequest(opt);

            }
        });

        $('.coupon-from input').on('focus', function(e) {
            $('#coupon-list').css('position', 'absolute');

        });
        that.dom.input.on('blur', function(e) {
            $('#coupon-list').css('position', 'fixed');
        });

    }

    show() {
        const that = this;
        that.cacheDom();
        $('body').append(that.dom.wrap);
    }


}


module.exports = couponList;
