

const Service = require('egg').Service;
const Http = require('../../../lib/httpReq');

class CityService extends Service {
    async cityGoods() {
        const { ctx } = this;
        const { helper } = ctx;
        // const { CITY_GOODS } = this.config.apis;

        // const { cityId, cityHeadPicSize = 201, themeId = 0, daysCountMin = 0, daysCountMax = 0, goodsClass = 0, channelId, offset = 0, limit = 10 } = cityObj;
        const http = new Http('city');
        try {
            const result = await http.curlRequest('/cityDetail');

            // return helper.handleServerData(result);
            return result;
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }
}
module.exports = CityService;
