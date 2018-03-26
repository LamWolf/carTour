const $ = require('widgets/zepto/zepto');
const apiConfig = require('widgets/apiConfig/index.js');
const loading = require('widgets/loading/index');
const ajax = require('widgets/ajax/index');
const tplItem = require('./tpl/item.tpl');
const juicer = require('widgets/juicer/juicer.js');
const util = require('widgets/util/index');
const IScroll = require('widgets/iscroll/iscroll-lite');
const PopCoupon = require('widgets/popCoupon/index.js');
const ComImg = require('local-ComImg');
const LazyLoad = require('vanilla-lazyload');
require('widgets/csslib/base.css');
require('widgets/csslib/fonts/fonts.css');
require('./scss/index.scss');
require('widgets/sensors/index.js');
require('widgets/csslib/hack.scss');
new (require('widgets/changeSkin/index'))();

class City {
    constructor() {
        this.cacheData();
        this.cacheDom();
        this.lazyload = new LazyLoad({ elements_selector: '.lazy' });
        this.bindEvent();
        if ($('.scroll').length > 0) {
            this.renderIsroll();
        }
        this.addJuicerHelper();
        if (this.param.offset == this.param.limit) {
            this.bindNext();
        }
    }

    cacheData() {
        const that = this;
        that.data = {};
        that.data.img = {
            guide: 'https://fr-static.huangbaoche.com/20180313/guide.0ca8d80948c9964b.png',
            errorGood: 'https://fr-static.huangbaoche.com/20180313/item-pic.5892363124cb5877.png',
            errorGuide: 'https://fr-static.huangbaoche.com/20180313/error-guide.9a12fc16b757cd33.png'
        };
        that.param = {
            // cityId: util.getRequestParam('cityId'),
            cityHeadPicSize: 750, // 城市头图图片大小（默认201）
            themeId: 0, // 主题ID 多选逗号分隔，不限传0
            daysCountMin: 0, // 包车天数最小值（1天时传1，多天时传2，不限传0）
            daysCountMax: 0, // 包车天数最大值（1天时传1，多天时传0，不限传0）
            goodsClass: 0, // 商品类型：1，超省心（固定线路）；2，超自由（推荐线路）；不限传0
            channelId: util.getRightChannelId(),
            offset: $('.item').length,
            limit: 10
        };
        // 获取城市id
        that.param.cityId = that.getCityId();

        that._scroll = '';
        that.__iscroll = null; // IScroll
    }

    cacheDom() {
        const that = this;
        that.dom = {
            wrap: $('#page'),
            back: $('.back'),
            search: $('.search'),
            navCar: $('.nav-car'),
            navPlane: $('.nav-plane'),
            navSingle: $('.nav-single'),
            menu: $('.menu'),
            menuB: $('.menu-bg'),
            list: $('.list'),
            listCount: $('.line-count'),
            items: $('.list .item'),
            empty: $('.empty'),
            menuItem: $('.menu-item'),
            menuTypes: $('#menu-type li'),
            menuDays: $('#menu-day li'),
            menuThemes: $('#menu-theme li'),
            menuTypeReset: $('#menu-type-reset'),
            menuTypeConfirm: $('#menu-type-confirm'),
            menuDayReset: $('#menu-day-reset'),
            menuDayConfirm: $('#menu-day-confirm'),
            menuThemeReset: $('#menu-theme-reset'),
            menuThemeConfirm: $('#menu-theme-confirm'),
            emptyLine: $('.empty-line')
        };
    }

    renderIsroll() {
        const that = this;
        that.__iscroll = new IScroll('.scroll', {
            click: true,
            mouseWheel: true
        });
    }

    getList(type) {
        const that = this;
        loading.init();
        const url = '/api/goods/1.4/cityDetail';
        const opt = {
            url,
            method: 'GET',
            header: {},
            data: that.param,
            success(ret) {
                if (ret.status === 200 && ret.data.goodses.length) {

                    if (ret.data.goodses.length == that.param.limit) {

                        that.param.offset = that.param.offset + that.param.limit;
                        that.renderList(ret.data);
                        that.bindNext();
                    } else {
                        that.renderList(ret.data);
                    }
                    this.lazyload = new LazyLoad({ elements_selector: '.lazy' });
                }
                if (type == 'reset' && ret.data.goodses.length > 0) {
                    $('.empty-menu').hide();
                } else if (type == 'reset' && ret.data.goodses.length == 0) {
                    $('.empty-menu').show();
                }
                loading.remove();
            }
        };
        ajax.sendRequest(opt);
    }

    getCityId() {
        return util.getRequestParam('cityId') || location.href.match(/city\/([^?]*)/)[1];
    }

    resetList() {
        const that = this;
        // util.removeEventListener();
        that._scroll && that._scroll();
        that.dom.list.html('');
        that.param.offset = 0;
        that.param.limit = 10;

        that.getList('reset');
    }

    renderList(data) {
        const that = this;
        that.cacheDom();
        data.img = that.data.img;
        that.dom.list.append(juicer(tplItem, data));
    }

    bindNext() {
        const that = this;
        that._scroll = util._bindScrollTobottom(function() {
            that.getList();
        }, true);
    }

    addJuicerHelper() {
        juicer.register('priceInfo', price => {
            if (!price) {
                return '';
            }
            const infoleft = price.replace(/起\/人/, '<span>起/人');
            const infoRight = infoleft + '</span>';
            return infoRight.replace(/¥/, '<small>¥</small>');
        });
        juicer.register('handleImg', (str, w, h) => {
            const imgRule = `x-oss-process=image/resize,m_fill,limit_0,w_${w ? w : 660},h_${h ? h : 355}/format,jpg/interlace,1/quality,q_85`;
            return str ? new ComImg({
                url: str,
                param: imgRule
            }).getUrl() : '';
        });
    }

    bindEvent() {
        const that = this;
        that.cacheDom();

        function finish(tag = 'hide') {
            if (tag == 'hide') {
                that.dom.menuB.hide();
                $('body').off('touchmove');
            } else {
                that.dom.menuB.show();
                // 添加滚动到360
                $('body').on('touchmove', function(e) {
                    e.preventDefault();
                });
            }
        }

        function selected() {
            const items = $('.menu-select ul li');
            const itemsType = $('#menu-type li');
            const itemsDay = $('#menu-day li');
            const itemsTheme = $('#menu-theme li');
            items.removeClass('selected');
            if (that.param.goodsClass) {
                for (let i = 0; i < itemsType.length; i++) {
                    if (that.param.goodsClass == $(itemsType[i]).attr('data-id')) {
                        $(itemsType[i]).addClass('selected');
                        break;
                    }
                }
            }
            if (that.param.goodsClass) {
                for (let i = 0; i < itemsType.length; i++) {
                    if (that.param.goodsClass == $(itemsType[i]).attr('data-id')) {
                        $(itemsType[i]).addClass('selected');
                        break;
                    }
                }
            }
            if (that.param.daysCountMin || that.param.daysCountMax) {
                for (let i = 0; i < itemsDay.length; i++) {
                    if (that.param.daysCountMin == $(itemsDay[i]).attr('data-min') && that.param.daysCountMax == $(itemsDay[i]).attr('data-max')) {
                        $(itemsDay[i]).addClass('selected');
                        break;
                    }
                }
            }
            if (that.param.themeId) {
                const themes = that.param.themeId.split(',');
                for (let i = 0; i < themes.length; i++) {
                    for (let j = 0; j < itemsTheme.length; j++) {
                        if (themes[i] == $(itemsTheme[j]).attr('data-id')) {
                            $(itemsTheme[j]).addClass('selected');
                            break;
                        }
                    }
                }

            }
        }

        $(window).off('scroll').on('scroll', function() {
            const t = $(window).scrollTop();
            if (t > 350) {
                that.dom.menu.addClass('menuFix');
            } else {
                that.dom.menu.removeClass('menuFix');
            }
        });
        $(window).on('touchstart', function() {
            const t = $(window).scrollTop();
            if (t > 350) {
                that.dom.menu.addClass('menuFix');
            } else {
                that.dom.menu.removeClass('menuFix');
            }
        });
        $(window).on('touchmove', function() {
            const t = $(window).scrollTop();
            if (t > 350) {
                that.dom.menu.addClass('menuFix');
            } else {
                that.dom.menu.removeClass('menuFix');
            }
        });
        $(window).on('touchend', function() {
            const t = $(window).scrollTop();
            if (t > 350) {
                that.dom.menu.addClass('menuFix');
            } else {
                that.dom.menu.removeClass('menuFix');
            }
        });

        that.dom.menuB.on('click', function() {
            that.dom.menuItem.removeClass('menu-item-check');
            selected();
            finish('hide');
        });
        $('.menu-select').on('click', function(e) {
            e.stopPropagation();
        });

        that.dom.back.on('click', () => {
            history.back();
            return false;
        });

        that.dom.search.on('click', () => {
            window.location.href = apiConfig.domainHost + 'app/searchCity.html';
            return false;
        });

        that.dom.navCar.on('click', () => {
            window.location.href = apiConfig.domainHost + 'app/daily.html?cityId=' + that.param.cityId;
            return false;
        });
        that.dom.navPlane.on('click', () => {
            window.location.href = apiConfig.domainHost + 'app/pickup.html';
            // window.location.href = '/transfer';
            return false;
        });
        that.dom.navSingle.on('click', () => {
            const cityName = $('.hackmaxAuto h1').text();
            window.location.href = apiConfig.domainHost + 'app/single.html?cityId=' + that.param.cityId + '&cityName=' + cityName;
            return false;
        });

        $('body').on('click', '.item', e => {
            const tag = $(e.currentTarget);
            window.location.href = '/goods/detail/' + tag.attr('data-goodsNo');
        });

        that.dom.menuItem.on('click', e => {
            const tag = $(e.currentTarget);
            const t = $(window).scrollTop();

            if (t < 350) {
                $(window).scrollTop(360);
            }
            if (tag.hasClass('menu-item-check')) {
                tag.removeClass('menu-item-check');
                finish('hide');
            } else {
                that.dom.menuItem.removeClass('menu-item-check');
                tag.addClass('menu-item-check');
                finish('show');
                that.__iscroll.refresh();
            }
            selected();
            return false;
        });

        that.dom.menuTypes.on('click', e => {
            const tag = $(e.currentTarget);
            if (tag.hasClass('selected')) {
                tag.removeClass('selected');
            } else {
                that.dom.menuTypes.removeClass('selected');
                tag.addClass('selected');
            }
            return false;
        });
        that.dom.menuTypeReset.on('click', () => {
            that.dom.menuTypes.removeClass('selected');
            return false;
        });
        that.dom.menuTypeConfirm.on('click', () => {
            const tag = $('#menu-type').find('.selected');
            const id = tag.attr('data-id');
            const text = tag.attr('data-text');
            if (id) {
                that.param.goodsClass = id;
                $('#menu-type-text').text(text);
            } else {
                that.param.goodsClass = '0';
                $('#menu-type-text').text('类型');
            }
            console.log(that.param.goodsClass);
            finish('hide');
            that.dom.menuItem.removeClass('menu-item-check');
            that.resetList();
            selected();
            return false;
        });

        that.dom.menuDays.on('click', e => {
            const tag = $(e.currentTarget);
            if (tag.hasClass('selected')) {
                tag.removeClass('selected');
            } else {
                that.dom.menuDays.removeClass('selected');
                tag.addClass('selected');
            }
            return false;
        });
        that.dom.menuDayReset.on('click', () => {
            that.dom.menuDays.removeClass('selected');
            return false;
        });
        that.dom.menuDayConfirm.on('click', () => {

            const tag = $('#menu-day').find('.selected');
            const min = tag.attr('data-min');
            const max = tag.attr('data-max');
            const text = tag.attr('data-text');
            if (min || max) {
                that.param.daysCountMin = tag.attr('data-min');
                that.param.daysCountMax = tag.attr('data-max');
                $('#menu-day-text').text(text);
            } else {
                that.param.daysCountMin = '0';
                that.param.daysCountMax = '0';
                $('#menu-day-text').text('天数');
            }
            finish('hide');
            that.dom.menuItem.removeClass('menu-item-check');
            that.resetList();
            selected();
            return false;
        });

        that.dom.menuThemes.on('click', e => {
            const tag = $(e.currentTarget);
            if (tag.hasClass('selected')) {
                tag.removeClass('selected');
            } else {
                tag.addClass('selected');
            }
            return false;
        });

        that.dom.menuThemeReset.on('click', () => {
            that.dom.menuThemes.removeClass('selected');
            return false;
        });
        that.dom.menuThemeConfirm.on('click', () => {
            let theme = '';
            let text = '';
            const tags = $('#menu-theme').find('li.selected');
            for (let i = 0; i < tags.length; i++) {
                const id = $(tags[i]).attr('data-id');
                const str = $(tags[i]).attr('data-text');

                if (theme) {
                    theme = theme + ',' + id;
                } else {
                    theme = id;
                }
                if (text == '' && str) {
                    text = str;
                } else {
                    text = text + str;
                }
                if (text.length > 4) {
                    text = text.substr(0, 4);
                    text = text + '...';
                }
            }
            that.param.themeId = theme
                ? theme
                : 0;
            if (text == '') {
                text = '主题';
            }
            $('#menu-theme-text').text(text);
            finish('hide');
            that.dom.menuItem.removeClass('menu-item-check');
            that.resetList();
            selected();
            return false;
        });

        new PopCoupon();

    }
}
new City();
