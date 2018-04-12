module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('goods');

    const BookDetailSchema = new Schema({
        capOfPerson: { type: Number },
        carSeatNum: { type: Number },
        carDesc: { type: String },
        carModelId: { type: Number },
        carTypeId: { type: Number },
        serviceTag: { type: String },
        luggageNumber: { type: Number },
        priceMark: { type: String },
        totalPrice: { type: Number },
        adultNum: { type: Number },
        childNum: { type: Number },
        childSeat: { type: Number },
        serviceTimeL: { type: String },
        goodsNo: { type: String },
        isSpecialCar: { type: Number },
        hotelRoom: { type: Number },
        hotelDays: { type: Number },
        hotelPrice: { type: Number },
        nid: { type: Number }
    });
    return conn.model('BookDetail', BookDetailSchema, 'book_detail');
};
