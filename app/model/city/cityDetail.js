module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('city');

    const CityScheme = new Schema({
        id: { type: Number },
        data: { type: Object },
        status: { type: Number }
    });

    return conn.model('City', CityScheme, 'cityDetail');
};
