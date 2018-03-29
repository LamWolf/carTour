module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('city');

    const CityGuidesScheme = new Schema({
        guideAmount: { type: Number },
        guideAvatars: { type: Array },
        cityId: { type: Number }
    });

    return conn.model('CityGuides', CityGuidesScheme, 'cityGuides');
};
