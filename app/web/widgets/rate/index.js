/**
 * Created by gorden on 15/5/6.
 */

const $ = require('widgets/zepto/zepto');
const juicer = require('widgets/juicer/juicer');
require('./index.scss');
//  require('./star-act.png');
function Rate(opt) {
    // @author : gorden
    // @depend : index.scss zepto
    // @param :
    // var opt = {
    //    rate: '4.5',
    //    activeImg : '../../images/rate.png',
    //    defaultImg : '../../images/unde.png',
    //    halfImg : '../../images/half.png',
    //    wrapper : '#test',
    //    isHalf : true
    // };

    this.opt = {
        rate: opt.rate && String(opt.rate) || '0.0',
        activeImg: opt.activeImg || require('./star-act.png'),
        defaultImg: opt.defaultImg || require('./star.png'),
        halfImg: opt.halfImg || '../detail/images/halfstar.png',
        wrapper: opt.wrapper || '',
        starCount: opt.statCount || 5,
        isHalf: opt.isHalf || true,
        descObj: {
            lev5: opt.descObj && opt.descObj.lev5 || '非常棒',
            lev4: opt.descObj && opt.descObj.lev4 || '满意',
            lev3: opt.descObj && opt.descObj.lev3 || '一般',
            lev2: opt.descObj && opt.descObj.lev2 || '不满意',
            lev1: opt.descObj && opt.descObj.lev1 || '很差'
        },
        descWrapper: opt.descWrapper || '.rate-desc'
    };

    this.opt.rate.length == 1 && (this.opt.rate = this.opt.rate + '.0');


}

Rate.prototype = {
    init() {
        const that = this;
        if (that.opt.wrapper) {
            $(that.opt.wrapper).append(that._renderUI());
        } else {
            return that._renderUI();
        }
    },
    _getRate() {
        const that = this;
        return that.opt.isHalf ? that.opt.rate : String(Math.round(that.opt.rate));
    },
    _getStar() {
        let that = this,
            r = that._getRate(),
            arr = r.split('.');
        return {
            one: Number(arr[0]),
            half: Math.round(parseInt(arr[1].slice(0, 1)) / 10)
        };
    },
    _renderUI() {
        let that = this,
            starObj = that._getStar(),
            starDom = '',
            sel = starObj.one + starObj.half;
        for (var i = 0; i < starObj.one; i++) {
            starDom += '<i><img src=\'' + that.opt.activeImg + '\'></i>';
        }
        !!starObj.half && (starDom += '<i><img src="' + that.opt.halfImg + '"></i>');

        for (var i = sel; i < that.opt.starCount; i++) {
            starDom += '<i><img src=\'' + that.opt.defaultImg + '\'></i>';
        }

        return '<span class=\'rate-eles\'>' + starDom + '</span>';
    },
    lazyRender(rate) {
        const that = this;
        that.opt.rate = rate;
        return that._renderUI();
    },
    makeRate() {

    },
    bindEvent(wrapper) {
        const that = this;
        const w = that.opt.wrapper || wrapper || 'body';
        $(w).find('i').each(function(i, v) {
            $(this).on('click', function() {
                const dom = that.lazyRender(_getSelectTag(this));
                $(w).empty();
                $(w).append(dom);
                that.bindEvent(wrapper);
            });
        });


        function _getSelectTag(obj) {
            var i = 0,
                obj = obj;
            while ($(obj).prev().length > 0) {
                ++i;
                obj = $(obj).prev();
            }
            that.rate = i + 1;
            _refreshDom(that.opt.descWrapper, i + 1);
            return parseInt(i + 1) + '.0';
        }

        function _refreshDom(wrapper, rate) {
            const desc = that.opt.descObj['lev' + rate];
            $(wrapper).html(desc);

        }
    }
};

module.exports = Rate;
