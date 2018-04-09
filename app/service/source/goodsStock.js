

const Service = require('egg').Service;

class GoodsDetailService extends Service {

    async index(goodsNo, startServiceDate, endServiceDate) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const result = await ctx.model.GoodsDetail.Stock.find({ goodsNo, startServiceDate, endServiceDate });

            // return helper.handleServerData(result);
            return result[0];
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }

}
module.exports = GoodsDetailService;
