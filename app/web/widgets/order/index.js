const $ = require('widgets/zepto/zepto');
const Util = require('widgets/util/index.js');
const Tpl = require('./index.tpl');
const Juicer = require('widgets/juicer/juicer.js');
const apiConfig = require('widgets/apiConfig/index');

const Mmqrcode = 'https://fr-static.huangbaoche.com/20180305/mmqrcode.ba150e762658f7b4.png';
require('./index.scss');

class Order {
    constructor(opt) {
        const opts = opt || {};
        this.wrap = opts.wrap || 'body';
        this.from = opts.from || 'detail';
        this.params = Util.getQueryJson() || {};
        this.params.depCityLocaltion = opt.depCityLocaltion;
        this.tpl = Tpl;


        this.data = {
            os: Util.plateForm().os,
            iswx: Util.isWX(),
            app: Util.plateForm().app,
            Mm: Mmqrcode,
            source: this.params.source || null,
            undercarriage: opts.undercarriage
        };
        this.plateForm = {
            isApp: this.data.app == 'hbcc' || this.data.app == 'hbcg',
            isWx: this.data.iswx,
            isOs: this.data.os == 'ios',
            isAndroid: this.data.os == 'android'
        };

        this._init();
    }

    _init() {
        this._cacheDom();
        this._bindEvent();
    }

    _cacheDom() {
        const that = this;
        that.dom = {
            wrap: $(that.wrap),
            wx: $('#wechat'),
            order: $('#jOrder'),
            help: $('.help-weixin'),
            close: $('.weixin-close')
        };
    }

    renderUI(data = {}) {
        Util.extend(this.params, data);
        this.dom.wrap.append(Juicer(this.tpl, this.data));
        this._init();
    }

    _bindEvent() {
        const that = this;

        that.dom.close.on('click', e => {
            that.dom.help.css('display', 'none');
        });
        that.dom.wx.on('click', e => {
    	that.dom.help.css('display', 'block');

        });

        that.dom.order.on('click', e => {
            if (this.data.app == 'hbcg' || this.data.source == 'hbcg') {
                window.location.href = apiConfig.gappHost + 'app/sku.html?param=' + JSON.stringify(this.params);
            } else {
                try {
                    if (that.from == 'detail') window.javaObj.customLineOrder();
                    else window.javaObj.pushToDailyOrder();
                } catch (ex) {
                    window.location.href = that.from == 'detail' ? './sku.html?goodsNo=' + this.params.goodsNo : 'daily.html';
                }
            }
        });

        // 商品下架 按钮置灰
        if (that.data.undercarriage == 1) {
            try {
                window.javaObj.goodsHadOutOfStock();
            } catch (e) {
                $('button#jOrder').css({
                    backgroundColor: '#e5e5e5',
                    color: '#ffffff'
                });
                that.dom.order.off('click');
            }
        }


    }
}

module.exports = Order;
