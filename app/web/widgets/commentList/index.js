/**
 * Created by kepeng on 2017/06/21.
 * CAPP v4.2.0 司导个人页评价列表
 * @param {
 *		guideId: **,	//司导id
 *	}
 */

const $ = require('widgets/zepto/zepto');
const ajax = require('widgets/ajax/index');
const Alert = require('widgets/layer/index');
const juicer = require('widgets/juicer/juicer');
const loading = require('widgets/loading/index');
const util = require('widgets/util/index');
const BigAblum = require('widgets/bigAlbum/index');// 相册
const apiConfig = require('widgets/apiConfig/index');
const header = require('widgets/header/index.js');
const LazyLoad = require('vanilla-lazyload');
const swiper = window.Swiper;
const ComImg = require('local-ComImg');
const sensors = require('widgets/sensors/index');

const tpl = require('./tpl/index.tpl');

require('./scss/font.scss');
require('./scss/index.scss');
const EVALUATEIMGPARAM = 'x-oss-process=image/resize,limit_0,w_750/format,jpg/interlace,1/quality,q_85';

class CommentList {
    constructor() {
        this._addJuicerHelper();
        this.cacheData(() => {
            this._getComment(rs => {
                this.cacheDom();
                this.renderUI(rs);
                this.bindEvent();
            });
        });
    }

    cacheData(cb) {
        if (!util.getRequestParam('goodsNo')) {
            new Alert({ msg: 'url错误，goodsNo不存在' });
            return;
        }
        this.data = {
            comments: [],
            goodsNo: util.getRequestParam('goodsNo'),
            app: util.plateForm().app
        };
        cb && cb();
    }

    cacheDom() {
        this.dom = {
            wrap: $('#page')
        };
    }

    renderUI(rs) {
        const that = this;
        if (rs.listData.length) {
            rs.default_avatar = require('./img/user_avatar.png');
            const commentStr = juicer(tpl, rs);
            (that.data.app == 'hbcc' || that.data.app == 'hbcg') ? that.dom.wrap.find('.J-comments').addClass('app') : '';
            that.dom.wrap.find('.J-comments .no-more').css('display', 'none');
            that.dom.wrap.find('.J-comments').append(commentStr).css('display', 'block');

            if (this.data.app != 'hbcc' && this.data.app != 'hbcg') {
                if (!this._header) {
                    this._header = new header({
                        title: '全部评价',
                        wrap: that.dom.wrap.find('.J-comments'),
                        subShow: 'false'
                        // hash: '.J-comments',
                    });
                }

            }
            new LazyLoad({
                elements_selector: '.lazy'
            });
            const swiperActivity = new swiper('.renderMe', {
                slidesPerView: 'auto'
                // spaceBetween: 10,
                // onlyExternal: false,
                // lazyLoading : true,
                // lazyLoadingInPrevNext : true,
                // lazyLoadingInPrevNextAmount : 5,
            });
            // util._bindLazyLoadBg();
            that._bindNext();
        } else {
            that.dom.wrap.find('.J-comments .no-more').css('display', 'block');
        }
    }

    _getComment(suc) {
        loading.init();
        const that = this;
        const defText = [ '非常不满', '不满意', '一般', '满意', '非常满意' ];
        that.data.commentShowNum = that.data.commentShowNum || 0;
        const _data = {
            goodsNo: that.data.goodsNo,
            offset: that.data.commentShowNum,
            limit: 10
            // picSize:201
        };
        const param = {
            url: apiConfig.comments,
            data: _data,
            method: 'GET',
            header: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success(res) {
                loading.remove();
                if (res.status == 200) {
                    res.data.listData.forEach(function(comment, key) {
                        comment.totalScore = Math.floor(comment.totalScore);
                        comment.content = comment.content ? comment.content : (defText[comment.totalScore - 1] || '');
                    });
                    const _index = res.data._index = that.data.commentShowNum == 0 ? 1 : (that.data.commentShowNum / 10) + 1;
                    that.data.comments[_index] = res.data.listData;
                    // that.data.commentsLength =
                    that.data.commentShowNum = that.data.commentShowNum + res.data.listData.length;
                    console.log(that.data);
                    suc && suc(res.data);
                } else {
                    const params = {
                        msg: res.message
                    };
                    const alert = new Alert(params);
                }
            },
            error() {
                loading.remove();
                const params = {
                    msg: '网络原因请求发送失败'
                };
                const alert = new Alert(params);
            }
        };
        ajax.sendRequest(param);
    }

    _bindNext() {
        const that = this;
        // (that.bindCount && that.bindCount++) || (that.bindCount = 0);
        util._bindScrollTobottom(() => {
            that._getComment(function(rs) {
                that.renderUI(rs);
            });
        }, true);

    }

    bindEvent() {
        const that = this;
        that.dom.wrap.on('click', '.J-ablum-btn', function() {
            if (that.data.app == 'hbcc' || that.data.app == 'hbcg') {
                try {
                    window.javaObj.hideNavigationBar(1);

                } catch (e) {
                }
            }
            const picIndex = $(this).attr('data-index');// 图片索引
            const commentIndex = $(this).parents('.ol-wrap').attr('data-index');// 第几次请求索引
            const dataIndex = $(this).parents('.comment-item').attr('data-index');// 第几条评论
            const picArr = (imgUrlArr => {
                if (!imgUrlArr.length) return [];
                const arr = [];
                imgUrlArr.forEach(url => {
                    url = new ComImg({
                        url,
                        param: EVALUATEIMGPARAM
                    }).getUrl();
                    arr.push(url);
                });
                return arr;
            })(that.data.comments[commentIndex][dataIndex].commentPicL);
            console.log(commentIndex, dataIndex);
            console.log(that.data.comments[commentIndex][dataIndex]);
            const ablumInfo = {
                title: '评价图片',
                photos: picArr || [],
                index: picIndex,
                hideObj: $('.guide-comments')
                // showTitle: that.data.app == 'hbcc' ? false : true
            };
            const bigAblum = new BigAblum(ablumInfo);
        });
        // 相册关闭，显示APP导航栏
        $(document).on('albumHide', function() {
            if (that.data.app == 'hbcc' || that.data.app == 'hbcg') {
                try {
                    window.javaObj.hideNavigationBar(0);
                } catch (e) { }
            }
        });
    }
    _addJuicerHelper() {
        juicer.register('handleImg', (str, w, h) => {
            const imgRule = `x-oss-process=image/resize,m_fill,limit_0,w_${w},h_${h}/format,jpg/interlace,1/quality,q_85`;
            return str ? new ComImg({
                url: str,
                param: imgRule
            }).getUrl() : '';
        });
    }

}
new CommentList();
