// app/service/user.js
/*
  让Service正专注获取数据，db HttpClient
  页面展示相关应该在controller合并
 */

const Service = require('egg').Service;
class CityIndexService extends Service {
    async index(cityId) {
        const {
            ctx
        } = this;
        const client = ctx.userAgent;

        try {
            // const curlList = [ ctx.service.lib.ak.getAk.index(), ctx.service.lib.weChat.getWxData.index() ];
            const curlList = [
                // ctx.service.source.cityBase.cityGoods(cityId),
                ctx.service.source.cityBase.cityContent(cityId),
                ctx.service.source.cityBase.cityGuides(cityId),
                ctx.service.source.cityBase.goodsCount(cityId),
                ctx.service.source.cityBase.goodsThemes(cityId),
                ctx.service.source.cityBase.goodses(cityId)
                // ctx.service.lib.ak.getAk.index(),
                // ctx.service.lib.weChat.getWxData.index()
            ];
            return await Promise.all(curlList).then(results => {
                let status = 500;
                const cityContent = results[0];
                const cityGuides = results[1];
                const goodsCount = results[2];
                const goodsThemes = results[3];
                const goodses = results[4];
                if (cityContent.cityId && cityGuides.cityId && goodsCount.cityId && goodsThemes.cityId && goodses.cityId) {
                    status = 200;
                }
                const cityDetail = {
                    data: {
                        cityContent: {
                            cityDesc: cityContent.cityDesc,
                            cityHeadPicture: cityContent.cityHeadPicture,
                            cityId: cityContent.cityId,
                            cityName: cityContent.cityName,
                            cityNameEn: cityContent.cityNameEn,
                            cityPicture: cityContent.cityPicture
                        },
                        cityGuides: {
                            guideAmount: cityGuides.guideAmount,
                            guideAvatars: cityGuides.guideAvatars
                        },
                        goodsCount: goodsCount.goodsCount,
                        goodsThemes: goodsThemes.goodsThemes,
                        goodses: goodses.goodses
                    },
                    status
                };
                return {
                    client,
                    cityDetail
                    // akString: results[1],
                    // wxData: results[2]
                };
            });
        } catch (error) {
            this.logger.error(error);
            // throw new Error('未知异常');
            return { status: 500, message: '服务器忙fan了' };
        }
    }
}
module.exports = CityIndexService;
