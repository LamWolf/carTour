const Service = require('egg').Service;

class GoodsService extends Service {
    async goodsStock(goodsObj) {
        // TODO get userId
        const { ctx } = this;
        const { goodsNo, startServiceDate, endServiceDate } = goodsObj;
        try {
            let status = 500;
            const goodsStockData = await ctx.service.source.goodsStock.index(goodsNo, startServiceDate, endServiceDate);
            if (goodsStockData.goodsNo) {
                status = 200;
            }
            const data = {
                goodsStockList: goodsStockData.goodsStockList,
                status
            };
            return {
                data
            };

        } catch (error) {
            this.logger.error(error);
            // throw new Error('未知异常');
            return { status: 500, message: '服务器忙fan了' };
        }
    }

    async book(bookObj) {
        const { ctx } = this;
        try {
            let status = 500;
            const bookResult = await ctx.service.source.goodsBook.index(bookObj);
            status = 200;
            return {
                bookResult,
                status
            };
        } catch (error) {
            this.logger.error(error);
            // throw new Error('未知异常');
            return { status: 500, message: '服务器忙fan了' };
        }
    }

}

module.exports = GoodsService;
