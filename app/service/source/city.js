

const Service = require('egg').Service;
// const Http = require('../../../lib/httpReq');

class CityService extends Service {
    async cityGoods(cityId) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const result = await ctx.model.City.find({ id: cityId });

            // return helper.handleServerData(result);
            return result[0];
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }
}
module.exports = CityService;
