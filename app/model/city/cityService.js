module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('city');

    const CityServiceScheme = new Schema({
        hasAirporService: { type: Number },
        hasDailyservice: { type: Number },
        hasSingleService: { type: Number },
        cityId: { type: Number }
    });

    return conn.model('CityService', CityServiceScheme, 'cityService');
};
