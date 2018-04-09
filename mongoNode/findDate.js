const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/goods';
const cityDetailObj = require('../mock/mockData/date');

MongoClient.connect(url, function(err, db) {
    if (err) { throw err; }
    const dbase = db.db('goods');
    // dbase.createCollection('cityDetail', (err, res) => {
    //     console.log(res);
    //     console.log('创建合集成功');
    // });
    const cityObj = cityDetailObj;
    dbase.collection('goods_stock').find({ goodsNo: 'IC1180440001' }, { goodsStockList: { $elemMatch: { serviceDate: {$gt: "2018-03-03"}}}});
    console.log(db);
    db.close();
});
