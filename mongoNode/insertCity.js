const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/carTour';
const cityDetailObj = require('../mock/mockData/cityDetail');

MongoClient.connect(url, function(err, db) {
    if (err)
        throw err;
    const dbase = db.db('carTour');
    // dbase.createCollection('cityDetail', (err, res) => {
    //     console.log(res);
    //     console.log('创建合集成功');
    // });
    let cityObj = {
        id: 131,
        data: cityDetailObj.data,
        status: 200
    }
    dbase.collection('cityDetail').insertOne(cityObj, (err, res) => {
        if(err) throw err;
        console.log('res', res);
        console.log('插入数据成功');
    });
    console.log(db);
    db.close();
});
