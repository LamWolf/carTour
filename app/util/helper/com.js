

// const ASSET_JSON = require('../../../config/g.manifest.json');
// const API_JSON = require('../config/api.config.js');

module.exports = {
    // getAsset(url) {
    //   /**
    //    * getAsset 获取资源地址,webpack打包后会将资源地址放到config/manifest.json中
    //    * @param {string} url 获取资源的url，详情查看ASSET_JSON
    //    * @return {string} 真正的url
    //    */
    //   return ASSET_JSON[url];
    // },
    getTplInitData(title = '皇包车旅行', desc = '皇包车旅行', isInjectWX = false, isInjectSwiper = false) {
    /**
     * 获取Tpl出事信息
     * @param  {String}  [title='皇包车旅行']        页面title
     * @param  {String}  [desc='皇包车旅行']         页面desc
     * @param  {Boolean} [isInjectWX=false]     是否注入微信JS
     * @param  {Boolean} [isInjectSwiper=false] 是否注入Swiper
     * @return {[object]}                         返回数据
     */
        return { title, desc, isInjectWX, isInjectSwiper, ENV: this.config.apis.ENV, client: this.ctx.userAgent };
    },
    handleServerData(result) {
    /**
     * api服务器异常处理
     * @param  {object} result HttpClient的返回值
     * @return {Object}        HttpClient中解出来的业务数据
     */
        if (result.status !== 200) throw new Error(result.status, 'HTTP返回头异常\n' + result.res.requestUrls);
        return result.data;
    },
    wrapErrorData(error) {
        if (!error) {
            return {
                status: 500,
                message: '服务器忙翻了~',
            };
        }
        this.ctx.app.logger.error(error);
        return {
            status: 500,
            message: `服务端异常,${error.path}  ${error.status}`,
        };
    },
};
