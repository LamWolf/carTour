

const Service = require('egg').Service;
// const Http = require('../../../lib/httpReq');

class GoodsBookService extends Service {

    async index(bookObj) {
        const { ctx } = this;
        const { helper } = ctx;

        // const http = new Http('city');
        try {
            // const result = await http.curlRequest('/cityDetail');
            const doc = await ctx.model.Idg.Index.findOneAndUpdate({ moduleName: 'bookCounter' }, { $inc: { nid: 1 } }, { new: true });
            bookObj.nid = doc.nid;
            const result = await ctx.model.GoodsBook.Index.create(bookObj);

            // return helper.handleServerData(result);
            return result;
        } catch (error) {
            return helper.wrapErrorData(error);
        }
    }

}
module.exports = GoodsBookService;
