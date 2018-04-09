module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('goods');

    const GoodsStockScheme = new Schema({
        goodsNo: { type: String },
        startServiceDate: { type: String },
        endServiceDate: { type: String },
        goodsStockList: { type: Array }
    });

    return conn.model('GoodsStock', GoodsStockScheme, 'goods_stock');
};
