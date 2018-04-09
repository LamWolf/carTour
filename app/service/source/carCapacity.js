

const Service = require('egg').Service;
// const Http = require('../../../lib/httpReq');

class CarCapacityService extends Service {

    async index(cityId) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const result = await ctx.model.City.CarCapacity.find({ cityId });

            // return helper.handleServerData(result);
            return result[0];
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }

}
module.exports = CarCapacityService;
