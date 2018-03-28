/**
 * Created by Raisun on 2017/8/25.
 *
 * new ScrollTo({
 *  navBar:'ul',
 *  tabCon:'.tab-con',
 *  tabIndex:'2',
 * })
 *
 */
const $ = require('local-Zepto');
const util = require('widgets/util/index');

class ScrollTo {
    constructor(opt = {}) {
        this.opt = {
            speed: 100,
            tabIndex: 0,
            activeClass: 'active'
        };
        util.extend(this.opt, opt);
        if (!this.opt.navBar) {
            throw 'navBar必传';
        }
        if (!this.opt.tabCon) {
            throw 'tabCon必传';
        }
        this.init();
    }

    init() {
        const that = this;
        this._scrollWay(true);
        $(this.opt.navBar).children().on('click', function() {
            that.opt.tabIndex = $(this).index();
            that._scrollWay(true);
        });
        $(window).scroll(function() {
            that._scrollWay();
        });
    }

    _scrollWay(flag) {
        const that = this;
        const offsetArr = [];
        const doHeight = $(document).height();
        const viewH = $(window).height();
        const navHeight = that.opt.navHeight ? that.opt.navHeight : $(this.opt.navBar).height();
        $(this.opt.tabCon).each(function() {
            offsetArr.push(Math.trunc($(this).offset().top));
        });
        const scrollTop = $(window).scrollTop();
        if (flag) {
            that._click = 1;
            that._addClass(that.opt.tabIndex);
            that._navSwiper(that.opt.tabIndex);
            if (this.opt.tabIndex == 0) {
                this._scrTo(0);
                return;
            }
            this._scrTo(offsetArr[this.opt.tabIndex] - navHeight);
            return;
        }
        $(that.opt.tabCon).each(function(i) {
            const totalTop = i === 0 ? 0 : offsetArr[i] - navHeight;
            if (scrollTop >= totalTop) {
                if (that._click === 1) {
                    setTimeout(() => {
                        that._click = 0;
                    }, that.opt.speed - 0 + 100);
                    return false;
                }
                that._addClass(i);
                that._navSwiper(i);
            }
        });
    }

    _scrTo(pos) {
        $('html,body').scrollTop(pos);
    }

    _addClass(i) {
        $(this.opt.navBar).children().eq(i)
            .addClass(this.opt.activeClass)
            .siblings()
            .removeClass(this.opt.activeClass);
    }

    _navSwiper(i) {
        this.opt.navSwiper && this.opt.navSwiper.slideTo(i, this.opt.speed, false);
    }

}

module.exports = ScrollTo;
