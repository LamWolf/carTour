module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('city');

    const CarCapacityScheme = new Schema({
        cityId: { type: Number },
        childSeatSwitch: { type: Number },
        numOfLuggage: { type: Number },
        numOfPerson: { type: Number },
        totalCap: { type: Number }
    });

    return conn.model('CarCapacity', CarCapacityScheme, 'car_capacity');
};
