// app/service/user.js
/*
  让Service正专注获取数据，db HttpClient
  页面展示相关应该在controller合并
 */

const Service = require('egg').Service;
class CityIndexService extends Service {
    async index(cityObj) {
        const {
            ctx
        } = this;
        const client = ctx.userAgent;

        try {
            // const curlList = [ ctx.service.lib.ak.getAk.index(), ctx.service.lib.weChat.getWxData.index() ];
            const curlList = [
                ctx.service.source.city.cityGoods(cityObj)
                // ctx.service.lib.ak.getAk.index(),
                // ctx.service.lib.weChat.getWxData.index()
            ];
            return await Promise.all(curlList).then(results => {
                return {
                    client,
                    cityDetail: results[0]
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
