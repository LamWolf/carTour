// app/extend/helper.js
// Helper 的处理应该是context相关，也就是说请求相关的操作。
// 公共操作相关的东西应该抽离出去当成一个Util来搞。
// @TODO：刚公共的Util挂到全局的App上应该可行

const utils = require('../util/helper/com');
const ComImg = require('../util/comImg');
const DEFIMG = 'https://fr-static.huangbaoche.com/20180305/hold.b0c069d05eb92706.png';
module.exports = {
    ...utils,
    getComImg(param, def = DEFIMG) {
        if (!param) return '';
        param.url = param.url || def;
        return new ComImg(param).getUrl();
    }
};
