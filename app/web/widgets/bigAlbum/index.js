const $ = require('widgets/zepto/zepto.js');
const juicer = require('widgets/juicer/juicer');
const tpl = require('./tpl/index.tpl');
// const swiper = require('widgets/swiper/swiper.min.js');
const loading = require('widgets/loading/index');
const swiper = window.Swiper;
// require('widgets/swiper/swiper.min.css');
const util = require('widgets/util/index');

require('./scss/index.scss');
require('./scss/font.scss');

class bigAblum {
    constructor(opts) {
        const that = this;
        this.opts = opts || {};
        this.init();
    }
    cacheData() {
        const width = document.documentElement.clientWidth;
        const fontSize = width && (50 * (width / 375) > 100 ? 100 : 50 * (width / 375));
        const top = fontSize ? 0.88 * fontSize : 88;
        this.data = {
            wrap: '#page',
            selector: '.J-big-album',
            title: '我的相册',
            top,
            index: 0,
            photos: [],
            maxHeight: $(window).height() - top,
            showTitle: true,
            closeBtn: true
        };
        $.extend(this.data, this.opts);
        this.data.photesInfo = this.data.photos;
    }
    cacheDom() {
        const that = this;
        that.dom = {
            wrap: $(that.data.wrap) || $('#wrap')
        };
    }
    renderUI() {
        const that = this;
        that.data.fixLayer && this.data.fixLayer.triggerHideEvent();
        that.dom.wrap.find(that.data.selector).remove();
        that.dom.wrap.append(juicer(tpl, this.data));
        that.dom.block = that.dom.wrap.find(that.data.selector);
        loading.remove();
        that.dom.block.removeClass('hide');
        if (util.plateForm().app == 'hbcc' && util.plateForm().os == 'ios') {
            that.dom.block.addClass('iosBarHeight');
        }
        const swiperActivity = new swiper('.ablum-swiper-container', {
            slidesPerView: 1,
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            lazyLoading: true,
            lazyLoadingInPrevNext: true,
            lazyLoadingInPrevNextAmount: 3
        });
        swiperActivity.slideTo(that.data.index, 0, false);
        if (!that.opts.hideObj) {
            that.opts.hideObj = $('.guide-comments');
        }
        that.opts.hideObj && that.opts.hideObj.hide && that.opts.hideObj.hide();
    }
    bindEvent() {
        const that = this;
        that.dom.block.on('click', '.J-close,.J-cont', function() {
            // if (util.plateForm().app == "hbcc") {
            //     try {
            //         window.javaObj.showGuideDetailTopBottomBar(1);
            //     } catch ( e ) {}
            // }
            that.opts.hideObj && that.opts.hideObj.hide && that.opts.hideObj.show();
            that.data.fixLayer && that.data.fixLayer.triggerShowEvent();
            $(document).trigger('albumHide');
            that.dom.block && that.dom.block.addClass('hide');
        })
            .on('touchmove', function(e) {
                e.preventDefault();
            });
    }
    init() {
        const that = this;
        this.cacheData();
        if (!this.data.photos.length) {
            loading.remove();
            return;
        }
        loading.init();
        this.cacheDom();

        that.renderUI();
        that.bindEvent();
    }

}
module.exports = bigAblum;
