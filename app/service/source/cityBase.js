

const Service = require('egg').Service;
// const Http = require('../../../lib/httpReq');

class CityBaseService extends Service {

    async cityContent(cityId) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const result = await ctx.model.City.CityContent.find({ cityId });

            // return helper.handleServerData(result);
            return result[0];
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }

    async cityGuides(cityId) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const result = await ctx.model.City.CityGuides.find({ cityId });

            // return helper.handleServerData(result);
            return result[0];
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }

    async cityService(cityId) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const result = await ctx.model.City.CityService.find({ cityId });

            // return helper.handleServerData(result);
            return result[0];
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }

    async goodsCount(cityId) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const result = await ctx.model.City.GoodsCount.find({ cityId });

            // return helper.handleServerData(result);
            return result[0];
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }

    async goodses(cityId) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const result = await ctx.model.City.Goodses.find({ cityId });

            // return helper.handleServerData(result);
            return result[0];
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }

    async goodsThemes(cityId) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const result = await ctx.model.City.GoodsThemes.find({ cityId });

            // return helper.handleServerData(result);
            return result[0];
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }
}
module.exports = CityBaseService;
