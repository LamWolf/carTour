

const Service = require('egg').Service;
// const Http = require('../../../lib/httpReq');

class GoodsDetailService extends Service {

    async index(goodsNo) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const result = await ctx.model.GoodsDetail.Index.find({ goodsNo });

            // return helper.handleServerData(result);
            return result[0];
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }

}
module.exports = GoodsDetailService;
