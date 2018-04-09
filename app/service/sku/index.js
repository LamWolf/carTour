// app/service/user.js
/*
  让Service正专注获取数据，db HttpClient
  页面展示相关应该在controller合并
 */

const Service = require('egg').Service;
class CityIndexService extends Service {
    async index(goodsNo) {
        const {
            ctx
        } = this;
        const client = ctx.userAgent;

        try {
            // const curlList = [ ctx.service.lib.ak.getAk.index(), ctx.service.lib.weChat.getWxData.index() ];
            let status = 500;
            const goodsDetail = await ctx.service.source.goodsDetail.index(goodsNo);
            const capacity = await ctx.service.source.carCapacity.index(goodsDetail.arrCityId);

            if (goodsDetail.arrCityId && capacity.cityId) {
                status = 200;
            }
            return {
                client,
                goodsDetail,
                capacity,
                status
            };
            // const curlList = [
            //     // ctx.service.source.cityBase.cityGoods(cityId),
            //
            // ];
            // return await Promise.all(curlList).then(results => {
            //
            //     return {
            //         client,
            //         // akString: results[1],
            //         // wxData: results[2]
            //     };
            // });
        } catch (error) {
            this.logger.error(error);
            // throw new Error('未知异常');
            return { status: 500, message: '服务器忙fan了' };
        }
    }
}
module.exports = CityIndexService;
