
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const {
            ctx
            /* ,logger */
        } = this;
        await ctx.render('error/404.html', {});
        console.log(this.ctx);
    }
}

module.exports = HomeController;
