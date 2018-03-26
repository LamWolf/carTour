const Controller = require('egg').Controller;
/*
Controller 中应该是合并数据，渲染模板，重定向什么的。
与render有关的数据可以在这里拿。
controller 中的数据应该包括
  tplData : title desc isInjectWX isInjectSwiper
  IMGS : 模板中引用的图片地址【css js由webpack自动引入】
  data : 首屏接口数据{ak,wxData}
解析构出来的变量应该保留到内部变量，如
  const { ctx, service  ,logger } = this;
  const { helper , query,queries,params,request,response,header,session,cookie } = ctx;
  因为内置变量有些this的动态绑定。
 */
const filters = require('../../../util/filter/m/city/index');

class CityIndexController extends Controller {
    async index() {
        const {
            ctx, service/* ,logger */
        } = this;
        const {
            helper/* , query,queries,params,request,response,header,session,cookie */
        } = ctx;

        // const query = ctx.query;
        const cityId = ctx.params.cityId;

        if (!cityId) {
            await ctx.render('error/404.html', {});
            return;
        }

        const cityObj = {
            cityId: 101,
            cityHeadPicSize: 750, // 城市头图图片大小（默认201）
            themeId: 0, // 主题ID 多选逗号分隔，不限传0
            daysCountMin: 0, // 包车天数最小值（1天时传1，多天时传2，不限传0）
            daysCountMax: 0, // 包车天数最大值（1天时传1，多天时传0，不限传0）
            goodsClass: 0, // 商品类型：1，超省心（固定线路）；2，超自由（推荐线路）；不限传0
            offset: 0,
            limit: 10
        };
        const data = await service.city.index.index(cityObj);
        const { status, data: cityData } = data.cityDetail;
        let renderData = {};
        if (status === 200) {
            const {
                cityContent,
                cityGuides,
                cityService,
                goodsCount,
                goodsThemes,
                goodses
            } = cityData;
            const title = `皇包车_中文包车游世界_${cityContent.cityName}`;
            const tplData = helper.getTplInitData(title, null, ctx.userAgent.isweChat, false);
            renderData = {
                tplData,
                // query,
                frHost: this.config.apis.frHost,
                ...data,
                ...filters,
                cityContent,
                cityGuides,
                cityService,
                goodsCount,
                goodsThemes,
                goodses
                // iscbc: ctx.cookies.get('iscbc', {
                //     signed: false,
                // }) === '1',
            };
            console.log('cityData', cityData);
            await ctx.render('page/city/index.html', renderData);
        } else {
            await ctx.render('error/500.html', {});
        }
    }

}


module.exports = CityIndexController;
