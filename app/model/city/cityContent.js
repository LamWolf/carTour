module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('city');

    const CityContentScheme = new Schema({
        cityDesc: { type: String },
        cityHeadPicture: { type: String },
        cityId: { type: Number },
        cityName: { type: String },
        cityNameEn: { type: String },
        cityPicture: { type: String }
    });

    return conn.model('CityContent', CityContentScheme, 'cityContent');
};
