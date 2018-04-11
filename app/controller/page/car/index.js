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
const filters = require('../../../util/filter/m/car/index');

class CarIndexController extends Controller {
    async index() {
        const {
            ctx, service/* ,logger */
        } = this;
        const {
            helper/* , query,queries,params,request,response,header,session,cookie */
        } = ctx;

        const query = ctx.query;
        if (!query || !query.param) {
            ctx.render('error/404.html', {});
        } else {
            const param = JSON.parse(query.param);
            if (!param.goodsNo) {
                ctx.render('error/404.html', {});
            } else {
                const data = await service.car.index.index(param.goodsNo);
                const { status, goodsDetail, goodsPrice, realCarList, csPrice } = data;
                let renderData = {};
                if (status === 200) {
                    const title = '皇包车_中文包车游世界_选择车型';
                    const tplData = helper.getTplInitData(title, null, ctx.userAgent.isweChat, false);
                    renderData = {
                        tplData,
                        param,
                        frHost: this.config.apis.frHost,
                        ...data,
                        ...filters,
                        goodsDetail,
                        goodsPrice,
                        realCarList,
                        csPrice
                        // iscbc: ctx.cookies.get('iscbc', {
                        //     signed: false,
                        // }) === '1',
                    };
                    await ctx.render('page/car/index.html', renderData);
                } else {
                    await ctx.render('error/500.html', {});
                }
            }
        }
    }

}


module.exports = CarIndexController;
