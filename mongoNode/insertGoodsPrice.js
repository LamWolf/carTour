const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/goods';
const goodsDetailObj = require('../mock/mockData/goodsPrice');

MongoClient.connect(url, function(err, db) {
    if (err) { throw err; }
    const dbase = db.db('goods');
    // dbase.createCollection('cityDetail', (err, res) => {
    //     console.log(res);
    //     console.log('创建合集成功');
    // });
    const Obj = goodsDetailObj;
    dbase.collection('goods_price').insertOne(Obj, (err, res) => {
        if (err) throw err;
        console.log('res', res);
        console.log('插入数据成功');
    });
    db.close();
});
