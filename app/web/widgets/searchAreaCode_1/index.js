/**
* Created by Gorden on 16/9/28.
*/
const Header = require('widgets/header/index2.js');
import $ from 'widgets/zepto/zepto';
import STATIC_AREACODE from './data.js';
import juicer from 'local-Juicer';
import tpl from './tpl/index.tpl';
import litpl from './tpl/li.tpl';
import 'widgets/csslib/base.css';
import './index.scss';
import IScroll from 'widgets/iscroll/iscroll-all';
const res = STATIC_AREACODE.sort((item1, item2) => {
    // 不要使用 localCompare
    return item1.spell > item2.spell ? 1 : -1;
});
class SearchAreaCode {
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
        this.data = {
            area: res
        };
    }

    renderUI() {

        $('body').css({ overflowY: 'hidden' }).append(juicer(tpl, this.data));

        if (!this.opt.callback) {
            $('#J-SearchAreaCode').css({ top: $('body').scrollTop() + 'px', height: $(window).height() + 'px' });
        }
        this._header = new Header({

            title: this.opt.title || '选择区号',
            pannel: $('#J-SearchAreaCode'),
            wrap: $('#J-SearchAreaCode .J-sp-fix'),
            hash: '#J-SearchAreaCode',
            callback: this.opt.callback
        });

        this.ULSCROLL = new IScroll('.sp-res-wrap', {
            click: true,
            mouseWheel: true
        });
    }


    show() {
        this.cacheData();
        this.renderUI();
        this.cacheDom();
        this.bindEvent();
        return this;
    }

    hide() {
        $('#J-SearchAreaCode').remove();
    }

    getArea(val) {
        const that = this;
        if (val == '') {
            that.data.area = res;
        } else {
            const arr = res.filter(elem => {
                return that._queryData(val, elem);
            });
            that.data.area = arr;
        }
        that._renderLI();
    }
    _queryData(val, obj) {
        const string = (function(res) {
            let s = '';
            for (const key in res) {
                if (key != 'countryId' && key != 'placeCategoryId') {
                    s += res[key];
                }
            }
            return s;
        })(obj);
        const reg = new RegExp(val, 'g');
        return reg.test(string);
    }

    _renderLI() {
        this.dom.ul.html(juicer(litpl, this.data));
        // this.bindLiEvent();
        this.ULSCROLL.refresh();
    }

    bindEvent() {
        const that = this;
        $(document).on('backHeader', function() {
            $('body').css({ overflowY: 'auto' });
        });
        $('#J-SearchAreaCode').on('input', '#J-Sp-input', function() {
            if ($(this).val() !== '') {
                $('.sp-clear-icon').show();
            }
            that.getArea($.trim($(this).val()));
            // that.getPlaceData();
        }).on('blur', '#J-Sp-input', function() {
            setTimeout(function() {
                that.ULSCROLL.refresh();
            }, 1000);

        })
            .on('focus', '#J-Sp-input', function() {
                setTimeout(function() {
                    $('#J-SearchAreaCode').css({
                        top: $('body').scrollTop() + 'px'
                    });
                    that.ULSCROLL.refresh();
                }, 300);
            });

        $('.sp-clear-icon').on('click', function() {
            $('#J-Sp-input').val('');
            // $("#J-sp-ul").empty();
            that.getArea($.trim($(this).val()));
            $('body').css({ overflowY: 'auto' });
            $(this).hide();
        });

        $('#J-SearchAreaCode').on('click', '#J-sp-ul li', function() {
            $('#J-Sp-input').blur();
            const index = $(this).attr('data-index') - 0;
            $('body').css({ overflowY: 'auto' });

            $(document).trigger(that.opt.cbname || 'areacodeSelect', [ that.data.area[index] ]);
            setTimeout(() => {
                that.hide();
                history.back();
            }, 0);

        });

        $('#J-SearchAreaCode').on('touchmove', function() {
            event.preventDefault();
        });


    }
}

module.exports = SearchAreaCode;

// var a = new SearchAreaCode({
//   cityId: 217,
//   serviceType : '4',
//   // title : '下车地址', //headerTitle
//   cbname : 'areacodeSelect', //callback name
// }).show();
//
// $(document).on('areacodeSelect',function(e,a){
//   console.log(a);
// })

// setTimeout(function(){
//   a.show()
// },10000)
