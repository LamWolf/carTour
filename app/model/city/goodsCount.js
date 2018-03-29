module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('city');

    const GoodsCountScheme = new Schema({
        goodsCount: { type: Number },
        cityId: { type: Number }
    });

    return conn.model('GoodsCount', GoodsCountScheme, 'goodsCount');
};
