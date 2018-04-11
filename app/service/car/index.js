// app/service/user.js
/*
  让Service正专注获取数据，db HttpClient
  页面展示相关应该在controller合并
 */

const Service = require('egg').Service;
class CarIndexService extends Service {
    async index(goodsNo) {
        const {
            ctx
        } = this;
        const client = ctx.userAgent;
        const query = ctx.query;

        try {
            // const curlList = [ ctx.service.lib.ak.getAk.index(), ctx.service.lib.weChat.getWxData.index() ];
            let status = 500;
            const curlList = [
                ctx.service.source.goodsDetail.index(goodsNo),
                ctx.service.source.goodsPrice.index(goodsNo)
            ];
            return await Promise.all(curlList).then(results => {
                status = 200;
                const param = JSON.parse(query.param);
                const goodsDetail = results[0];
                const goodsPrice = results[1];
                // 过滤出可用车列表
                const p_no = ((an, cn, csn) => {
                    if (cn == csn) {
                        return Math.ceil(an + cn * 1.5);
                    }
                    return Math.ceil(an + csn * 1.5 + cn - csn);

                })(param.adultNo - 0, param.childNo - 0, param.childSeat);
                const res = goodsPrice.cars.filter(item => {
                    if (p_no <= item.capOfPerson) {
                        return true;
                    }
                    return false;
                });
                const realCarList = res;

                // 初步计算所需价格
                const csn = param.childSeat - 0;
                const priceObj = goodsPrice.additionalServicePrice;
                const csPrice = ((no, obj) => {
                    const p1 = obj.childSeatPrice1 || 0;
                    const p2 = obj.childSeatPrice2 || 0;
                    if (no <= 1) {
                        return p1 * no;
                    }
                    if (no > 1) {
                        return p1 + (no - 1) * p2;
                    }
                })(csn, priceObj);

                return {
                    client,
                    status,
                    goodsDetail,
                    goodsPrice,
                    realCarList,
                    csPrice
                };
            }, () => {
                return status;
            });

        } catch (error) {
            this.logger.error(error);
            // throw new Error('未知异常');
            return { status: 500, message: '服务器忙fan了' };
        }
    }
}
module.exports = CarIndexService;
