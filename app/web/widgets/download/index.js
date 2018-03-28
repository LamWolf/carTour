/*
@author : aj
@usage : download
*/
const $ = require('widgets/zepto/zepto.js');
const UTIL = require('widgets/util/index');


require('./index.scss');


class Download {

    constructor() {
        this.img = require('./s-logo.png');
        this.link = '';
        if (UTIL.plateForm().os == 'android') {
            this.link = 'http://dl.huangbaoche.com/c-app/Huangbaoche.apk?v=V2.0';
        } else if (UTIL.plateForm().os == 'ios') {
            this.link = 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=999773808&mt=8';
        } else {
            this.link = 'http://scdata.huangbaoche.com/r/is';
        }
        this.link = 'http://scdata.huangbaoche.com/r/is';

        this.tpl = $(`
      <div class="widget-download">
        <var class="widget-download-close">+</var>
        <img src="${this.img}" alt="huangbaoche logo" />
        <p><strong>APP内下单更优惠</strong>10万华人司导开车带你玩</p>
        <a href="${this.link}" class="widget-download-link" data-sa-title="下载APP">下载APP</a>
      </div>
    `);
    }

    init(el) {
        this.render(el);
        this.listen();
    }

    render(tag) {
        const el = $(tag);
        el.append(this.tpl);
    }

    listen() {
        const eLink = $('.widget-download-close');
        eLink.on('click', event => $('.widget-download').hide('slow'));
    }

}

module.exports = new Download();
