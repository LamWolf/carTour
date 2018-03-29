module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('city');

    const GoodsThemesScheme = new Schema({
        goodsThemes: { type: Array },
        cityId: { type: Number }
    });

    return conn.model('GoodsThemes', GoodsThemesScheme, 'goodsThemes');
};
