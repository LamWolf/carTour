/**
 * Created by liu kepeng on 2016/12/9.
 */
/**
   new SharePopup({
       pic : {        //图片地址
           wxPic : 'url',   //微信里显示 （不传使用默认图片）
           browserPic: 'url' // 浏览器显示 （不传使用默认图片）
       }
       opacity: num,   //(0-1数字，设置背景透明度，默认0.3)


   })
*/
const util = require('widgets/util/index');
const tpl = require('./tpl/index.tpl');
const template = require('micro-template').extended;
const $ = require('widgets/zepto/zepto');
const sharePic = {
    pic1: 'https://fr-static.huangbaoche.com/20180305/share1.388a5acd7a497cf3.png',
    pic2: 'https://fr-static.huangbaoche.com/20180305/share2.3ce7126dcecf9ef8.png'
};
// require('widgets/sensors/index');
require('./sass/index.scss');

class SharePopup {
    constructor(opt = {}) {
        this.opt = opt;
        this.init();
    }

    init() {
        this.cacheDom();
        this.cacheData();
        this.renderUI();
    }
    cacheData() {
        this.data = {
            isWX: util.isWX(),
            pic: {
                wxPic: (this.opt.pic && this.opt.pic.wxPic) || sharePic.pic1,
                browserPic: (this.opt.pic && this.opt.pic.browserPic) || sharePic.pic2
            },
            opacity: this.opt.opacity || 0.3
        };

        this.data.sharePic = this.data.isWX ? this.data.pic.wxPic : this.data.pic.browserPic;
    }
    cacheDom() {
        this.dom = {
            wrap: $('body')
        };
    }
    renderUI() {
        this.dom.wrap.append(template(tpl, this.data));
        this.recacheDom();
        this.hide();
    }
    recacheDom() {
        this.dom1 = {
            wrapper: $('#shareWrapper')
        };
    }
    show() {
        this.dom1.wrapper.show();
    }
    hide() {
        this.dom1.wrapper.on('click', event => {
            event.stopPropagation();
            this.dom1.wrapper.hide();
        });
    }

}

// new SharePopup({
// pic: {
//     wxPic: 'http://pc.zx98.com/article/uploadfiles/201502/20150202133711103.jpg',
//     browserPic: 'http://www.anyv.net/datafile/2015/05/1_2015050518331230fub.png'
// },
// opacity: 0.8
// });
module.exports = SharePopup;
