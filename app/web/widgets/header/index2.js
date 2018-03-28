import $ from 'widgets/zepto/zepto';
const Hash = require('widgets/hash/index');
import juicer from 'widgets/juicer/juicer.js';
import tpl from './index2.tpl';
import './index.scss';
import 'widgets/csslib/fonts/fonts.css';

class Header {
    constructor(opt) {
    /**
     opt = {
            title : '标题',
            backUrl : '回退地址',
            subShow : '是否显示右侧字标题',
            subTitle : '右侧字标题',
            pannel : '#wrap' 是否是一个弹层,如果是,点击返回就关闭弹层,
            wrap : '包装期,如果有,就有,没有就是 body'
            hash:'#'
        }
     */
        this.data = {
            title: opt.title,
            back: opt.backUrl,
            pannel: opt.pannel || '',
            isHidePannel: opt.isHidePannel ? opt.isHidePannel : false,
            subShow: opt.subShow || 'true',
            subTitle: opt.subTitle || '联系客服',
            wrap: opt.wrap || 'body',
            hash: opt.hash,
            subBack: opt.subBack,
            sub: opt.sub,
            callback: opt.callback
        };
        this.init();
    }

    init() {
        this.cacheDom();
        this.renderUI();
        this.bindEvent();
    }

    cacheDom() {
        this.dom = {};

        this.dom.box = $(this.data.wrap).find('.J-header'),
        this.dom.back = this.dom.box.find('.back'),
        this.dom.contactButton = this.dom.box.find('.contact-show'),
        this.dom.contactClose = this.dom.box.find('.contact .close'),
        this.dom.contactBox = this.dom.box.find('.contact-wapper');
    }

    renderUI() {
        if ($(this.data.wrap).find('header.J-header')) {
            $(this.data.wrap).find('header.J-header').remove();
        }
        $(this.data.wrap).prepend(juicer(tpl, this.data));
    }

    _setHash() {
        const that = this;
        if (that.data.hash) {
            window.__hashs = (window.__hashs || []);
            window.__hashs.push(that.data.hash);
            location.hash = that.data.hash;
            setTimeout(function() {
                $(window).on('hashchange', function(obj) {
                    const newHash = obj.newURL.match(/#.+/) && obj.newURL.match(/#.+/)[0] || '';
                    const oldHash = obj.oldURL.match(/#.+/) && obj.oldURL.match(/#.+/)[0] || '';
                    // if(newHash == that.data.hash){
                    //   return;
                    // }
                    // debugger;
                    // if(oldHash == that.data.hash){
                    //   return;
                    // }
                    const isForword = (function() {
                        return window.__hashs.indexOf(newHash) > window.__hashs.indexOf(oldHash);
                    })();
                    if (isForword) return;
                    if (that.data.pannel && that.data.pannel.attr('id') === oldHash.replace(/#/, '') && that.data.isHidePannel == false) {
                        $(that.data.pannel).remove();
                        that.data.callback && that.data.callback();
                        return;
                    }
                    if (that.data.pannel && that.data.pannel.attr('id') === oldHash.replace(/#/, '') && that.data.isHidePannel == true) {
                        $(that.data.pannel).hide();
                        that.data.callback && that.data.callback();
                        return;
                    }
                });
                // window.onhashchange = function(){
                //   debugger;
                //
                // }
            }, 1);
        }
    }

    bindEvent() {
        const that = this;
        that.cacheDom();
        that._setHash();
        if (that.data.subShow == 'true') {
            that.dom.contactButton.show();
        }
        that.dom.contactButton.on('click', function() {
            if (that.data.subBack) that.data.subBack.call(that, this, that.dom);
            else that.dom.contactBox.show();
        });
        that.dom.contactClose.on('click', function() {
            that.dom.contactBox.hide();
        });


        that.dom.back.on('click', function() {
            // alert(123)
            // debugger;
            if (that.data.hash && location.hash != '') {
                // debugger
                that.data.callback && that.data.callback.call(that, that.data.hash);
                $(document).trigger('backHeader');
                window.history.back();
            }

            if (that.data.pannel && that.data.isHidePannel == false) {
                $(that.data.pannel).remove();
                return;
            }
            if (that.data.pannel && that.data.isHidePannel == true) {
                $(that.data.pannel).hide();
                return;
            }


        });
    }
}

module.exports = Header;
