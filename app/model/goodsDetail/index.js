module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('goods');

    const GoodsDetailScheme = new Schema({
        arrCityId: { type: Number },
        arrCityLocaltion: { type: String },
        arrCityName: { type: String },
        arrCountryId: { type: Number },
        arrCountryName: { type: String },
        attentions: { type: String },
        bookNotes: { type: String },
        changeRules: { type: String },
        characteristicLables: { type: Array },
        cityCount: { type: Number },
        commentCount: { type: Number },
        comments: { type: Array },
        costDescription: { type: String },
        daysCount: { type: Number },
        depCityId: { type: Number },
        depCityLocaltion: { type: String },
        depCityName: { type: String },
        goodsClass: { type: Number },
        goodsDesc: { type: String },
        goodsName: { type: String },
        goodsNo: { type: String },
        goodsPictures: { type: Array },
        goodsType: { type: Number },
        guideAmount: { type: Number },
        headLable: { type: String },
        hotelCostAmount: { type: Number },
        hotelCostPrice: { type: Number },
        hotelStatus: { type: Number },
        perPrice: { type: Number },
        poiCount: { type: Number },
        publishStatus: { type: Number },
        routes: { type: Array },
        salePoints: { type: String },
        transactionVolumes: { type: Number },
        usingMethod: { type: String }
    });

    return conn.model('GoodsDetail', GoodsDetailScheme, 'goods_detail');
};
