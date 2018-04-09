const Controller = require('egg').Controller;

class GoodsApiController extends Controller {
    async goodsStock() {
        const {
            ctx,
            service
            /* ,logger*/
        } = this;
        const result = await service.api.goods.goodsStock(ctx.query);
        ctx.body = result;
    }
}

module.exports = GoodsApiController;
