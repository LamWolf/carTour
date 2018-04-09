const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/carTour';
const cityDetailObj = require('../mock/mockData/carCapacity');

MongoClient.connect(url, function(err, db) {
    if (err) { throw err; }
    const dbase = db.db('carTour');
    // dbase.createCollection('cityDetail', (err, res) => {
    //     console.log(res);
    //     console.log('创建合集成功');
    // });
    const cityObj = cityDetailObj.data;
    dbase.collection('car_capacity').insertOne(cityObj, (err, res) => {
        if (err) throw err;
        console.log('res', res);
        console.log('插入数据成功');
    });
    console.log(db);
    db.close();
});
