module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('city');

    const GoodsesScheme = new Schema({
        goodses: { type: Array },
        cityId: { type: Number }
    });

    return conn.model('Goodses', GoodsesScheme, 'goodses');
};
