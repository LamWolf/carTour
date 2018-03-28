/**
 * Created by Gorden on 16/9/28.
 */
const Header = require('widgets/header/index.js');
const apiConfig = require('widgets/apiConfig/index.js');
const $ = require('widgets/zepto/zepto');
const juicer = require('widgets/juicer/juicer.js');
const TimeAjax = require('widgets/TimeAjax/index.js');

const timeAjax = new TimeAjax({});
const tpl = require('./tpl/index.tpl');
const litpl = require('./tpl/li.tpl');
// require('widgets/csslib/base.css');
require('./index.scss');
const IScroll = require('iscroll');


class SearchPlace {
    constructor(opt) {
        this.opt = opt;
    }

    cacheDom() {
        this.dom = {
            ipt: $('#J-Sp-input'),
            ul: $('.sp-res-wrap ul')
        };
    }

    cacheData() {

    }

    renderUI() {
        const that = this;
        $('body').append(juicer(tpl, { placeHolder: this.opt.placeHolder || '您在哪儿上车' }));
        this._header = new Header({
            title: this.opt.title || '上车地址',
            pannel: '#J-SearchPlace',
            wrap: '#J-SearchPlace .J-sp-fix',
            subShow: this.opt.subShow || true
        });

        this.ULSCROLL = new IScroll('#J-SearchPlace .sp-res-wrap', {
            click: true,
            mouseWheel: true
        });
        this.ULSCROLL.on('scrollStart', function() {
            that.ULSCROLL.refresh();
        });
    }

    getPlaceData() {
        const me = this;
        const loading = $('.sp-loading');
        loading.show();
        const param = {
            keyword: me.dom.ipt.val(),
            offset: 0,
            limit: 20,
            cityId: me.opt.cityId,
            // serviceType: me.opt.serviceType,
            location: me.opt.cityLocation
        };
        // let url = apiConfig.apiHost + 'poi/v1.1/p/places'
        const url = apiConfig.searchPlaces;
        timeAjax.makeRequest({
            url,
            data: param,
            success(data) {
                loading.hide();
                me.renderList.call(me, data);
                me.placeData = data.data.places;

            }
        });
    }

    renderList(data) {
        const that = this;
        if (data.status == 200 && data.data.places) {
            this.dom.ul.html(juicer(litpl, { data: data.data }));
            that.ULSCROLL.refresh();
            // console.log(12345)
            // me.ULSCROLL.refresh();
            // setTimeout(function(){
            //
            //   that.ULSCROLL.refresh();
            //   console.log(+new Date)
            // },500)

        }

    }

    show() {
        this.renderUI();
        this.cacheDom();
        this.bindEvent();
        return this;
    }

    hide() {
        $('#J-SearchPlace').remove();
    }

    bindEvent() {
        const that = this;
        $('#J-SearchPlace').on('input', '#J-Sp-input', function() {
            if ($(this).val() !== '') {
                $('.sp-clear-icon').show();
            } else {
                $('.sp-clear-icon').hide();
            }
            that.getPlaceData();
        });

        $('.sp-clear-icon').on('click', function() {
            $('#J-Sp-input').val('');
            $('#J-sp-ul').empty();
            $(this).hide();
        });

        $('#J-SearchPlace').on('click', '#J-sp-ul li', function() {
            const index = $(this).attr('data-index') - 0;
            $('#J-Sp-input').blur();
            setTimeout(function() {
                that.hide();
            }, 500);

            $(document).trigger(that.opt.cbname || 'placeSelect', [ that.placeData[index] ]);
        });

    }
}

module.exports = SearchPlace;

// var a = new SearchPlace({
//   cityId: 217,
//   serviceType : '4',
//   title : '下车地址', //headerTitle
//   cbname : 'placeSelect', //callback name
// }).show();
//
// $(document).on('placeSelect',function(e,a){
//   console.log(a);
// })

// setTimeout(function(){
//   a.show()
// },10000)
