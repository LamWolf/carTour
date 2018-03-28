/**
 * Created by Gorden on 16/9/28.
 */
const Header = require('widgets/header/index.js');
const apiConfig = require('widgets/apiConfig/index.js');
import $ from 'widgets/zepto/zepto';
import juicer from 'widgets/juicer/juicer.js';
const TimeAjax = require('widgets/TimeAjax/index.js');
// const IScroll = require('iscroll');
const timeAjax = new TimeAjax({});
import tpl from './tpl/index.tpl';
import litpl from './tpl/li.tpl';
import './index.scss';
import 'widgets/csslib/base.css';

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

        $('body').append(juicer(tpl, {}));
        this._header = new Header({
            title: this.opt.title || '上车地址',
            pannel: '#J-SearchCity',
            wrap: '#J-SearchCity .J-sp-fix',
            hash: 'sinCity',
            subShow: this.opt.subShow || true
        });

    // this.ULSCROLL = new IScroll('#J-sp-ul')
    }

    getPlaceData() {
        const me = this;
        const loading = $('.sp-loading');

        loading.show();
        const param = {
            keyword: me.dom.ipt.val(),
            type: 3,
            offset: 0,
            limit: 2000
        };
        const url = apiConfig.apiHost + 'price/v1.0/p/serviceCities';

        timeAjax.makeRequest({
            url,
            data: param,
            success(data) {
                loading.hide();
                me.renderList.call(me, data);
                me.placeData = data.data.listData;
            }
        });
    }

    renderList(data) {
        const that = this;
        if (data.status == 200 && data.data.listData) {
            this.dom.ul.html(juicer(litpl, { data: data.data }));
        }

    }

    show() {
        this.renderUI();
        this.cacheDom();
        this.bindEvent();
        return this;
    }

    hide() {
        $('#J-SearchCity').remove();
    }

    bindEvent() {
        const that = this;
        $('#J-SearchCity').on('input', '#J-Sp-input', function() {
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

        $('#J-SearchCity').on('click', '#J-sp-ul li', function() {
            if ($(this).hasClass('disable')) {
                return;
            }
            const index = $(this).attr('data-index') - 0;
            that.hide();
            $(document).trigger(that.opt.cbname || 'citySelect', [ that.placeData[index] ]);
        });

    }
}

module.exports = SearchPlace;
//
// var a = new SearchPlace({
//   title : '出发城市', //headerTitle
//   cbname : 'citySelect', //callback name
// }).show();
//
// $(document).on('citySelect',function(e,a){
//   console.log(a);
// })

// setTimeout(function(){
//   a.show()
// },10000)
