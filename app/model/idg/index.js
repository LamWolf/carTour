module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const conn = app.mongooseDB.get('goods');

    const IdSchema = new Schema({
        modelname: { type: String },
        nid: { type: Number, default: 0 }
    });
    return conn.model('Idg', IdSchema, 'id_generator');
}
