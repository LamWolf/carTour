
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
class ErrorController extends Controller {
    async notfound() {
        const { ctx/* ,logger*/ } = this;
        await ctx.render('error/404.html', {});
    }
    async error() {
        const { ctx/* ,logger*/ } = this;
        await ctx.render('error/500.html', {});
    }
}

module.exports = ErrorController;
