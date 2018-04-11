module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('goods');

    const GoodsPriceSchema = new Schema({
        additionalServicePrice: { type: Object },
        cars: { type: Array },
        intownKms: { type: Number },
        noneCarsParam: { type: Object },
        noneCarsReason: { type: String },
        noneCarsState: { type: Number },
        outtownKms: { type: Number },
        overChargePerKm: { type: Number },
        serviceHours: { type: Number },
        serviceWay: { type: Number },
        stayCharge: { type: Number },
        supportChildseat: { type: Boolean }
    });

    return conn.model('GoodsPrice', GoodsPriceSchema, 'goods_price');
};
