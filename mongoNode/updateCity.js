const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/carTour';
// const cityDetailObj = require('../mock/mockData/cityDetail');

MongoClient.connect(url, function(err, db) {
    if (err) { throw err; }
    const dbase = db.db('carTour');
    // dbase.createCollection('cityDetail', (err, res) => {
    //     console.log(res);
    //     console.log('创建合集成功');
    // });
    const cityObj = [
        {
            arrCityId: 131,
            arrCityName: '柏林',
            characteristicLables: [
                {
                    lableName: '每日10小时300公里畅游',
                    lableType: 4
                }, {
                    lableName: '推荐行程可与司导协商修改',
                    lableType: 3
                }
            ],
            daysCount: 2,
            depCityId: 131,
            depCityName: '柏林',
            goodsClass: 2,
            goodsName: '德意志心脏 | 柏林市内经典 中文包车2日游',
            goodsNo: 'IC1180440001',
            goodsPics: [
                'https://hbcdn.huangbaoche.com/fr-hd/DmExXJY9dg0!m', 'https://hbcdn.huangbaoche.com/fr-hd/DmExXJY9dg0!m'
            ],
            goodsPicture: 'https://hbcdn.huangbaoche.com/fr-hd/DmExXJY9dg0!m',
            goodsType: 3,
            goodsVersion: 1,
            guideAmount: 89,
            headLable: '超自由',
            hotelCostAmount: 0,
            hotelCostPrice: 0,
            hotelStatus: 0,
            passbyCitys: [
                {
                    passbyId: 131,
                    passbyName: '柏林'
                }, {
                    passbyId: 131,
                    passbyName: '柏林'
                }
            ],
            perPrice: 1157,
            places: '柏林-柏林',
            publishStatus: 0,
            salePoints: '更多人记住柏林，大概是这座城市曾经因为战争千疮百孔，但如今，这里正在焕发着它新的魅力，它很好地保留了战时记忆，柏林墙，欧洲被害犹太人纪念碑，对历史的尊重也让柏林赢得了世界的尊重。',
            shareURL: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1180440001',
            skuDetailUrl: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1180440001',
            transactionVolumes: 0
        }, {
            arrCityId: 131,
            arrCityName: '柏林',
            characteristicLables: [
                {
                    lableName: '按固定线路游玩',
                    lableType: 3
                }
            ],
            daysCount: 1,
            depCityId: 131,
            depCityName: '柏林',
            goodsClass: 1,
            goodsName: '普鲁士王宫 | 无忧宫→塞西琳霍夫宫→橘园宫 中文包车1日游，柏林往返',
            goodsNo: 'IC1161340003',
            goodsPics: [ 'https://hbcdn.huangbaoche.com/default/20160810/201608101525332044.png!m' ],
            goodsPicture: 'https://hbcdn.huangbaoche.com/default/20160810/201608101525332044.png!m',
            goodsType: 3,
            goodsVersion: 24,
            guideAmount: 88,
            headLable: '超省心',
            hotelCostAmount: 0,
            hotelCostPrice: 0,
            hotelStatus: 0,
            passbyCitys: [
                {
                    passbyId: 131,
                    passbyName: '柏林'
                }
            ],
            perPrice: 458,
            places: '柏林-柏林',
            publishStatus: 0,
            salePoints: '',
            shareURL: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1161340003',
            skuDetailUrl: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1161340003',
            transactionVolumes: 77
        }, {
            arrCityId: 131,
            arrCityName: '柏林',
            characteristicLables: [
                {
                    lableName: '每日10小时300公里畅游',
                    lableType: 4
                }, {
                    lableName: '推荐行程可与司导协商修改',
                    lableType: 3
                }
            ],
            daysCount: 1,
            depCityId: 131,
            depCityName: '柏林',
            goodsClass: 2,
            goodsName: '柏林印象 | 奥伯鲍姆桥+柏林墙+菩提树下大街+勃兰登堡门+国会大厦 中文包车1日游，柏林往返',
            goodsNo: 'IC1161950030',
            goodsPics: [
                'https://hbcdn.huangbaoche.com/fr-hd/C2oTFRDJDg0!m', 'https://hbcdn.huangbaoche.com/fr-hd/C2oTFRDJDg0!m'
            ],
            goodsPicture: 'https://hbcdn.huangbaoche.com/fr-hd/C2oTFRDJDg0!m',
            goodsType: 3,
            goodsVersion: 5,
            guideAmount: 88,
            headLable: '超自由',
            hotelCostAmount: 0,
            hotelCostPrice: 0,
            hotelStatus: 0,
            passbyCitys: [
                {
                    passbyId: 131,
                    passbyName: '柏林'
                }
            ],
            perPrice: 579,
            places: '柏林-柏林',
            publishStatus: 0,
            salePoints: '',
            shareURL: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1161950030',
            skuDetailUrl: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1161950030',
            transactionVolumes: 7
        }, {
            arrCityId: 131,
            arrCityName: '柏林',
            characteristicLables: [
                {
                    lableName: '按固定线路游玩',
                    lableType: 3
                }
            ],
            daysCount: 1,
            depCityId: 131,
            depCityName: '柏林',
            goodsClass: 1,
            goodsName: '易北翡冷翠 | 德累斯顿茨温格宫+珍宝馆+森珀歌剧院+王侯队列图 中文包车1日游，柏林往返',
            goodsNo: 'IC1161340004',
            goodsPics: [ 'https://hbcdn.huangbaoche.com/fr-hd/DTaXSPIn-w0!m' ],
            goodsPicture: 'https://hbcdn.huangbaoche.com/fr-hd/DTaXSPIn-w0!m',
            goodsType: 3,
            goodsVersion: 23,
            guideAmount: 87,
            headLable: '超省心',
            hotelCostAmount: 0,
            hotelCostPrice: 0,
            hotelStatus: 0,
            passbyCitys: [
                {
                    passbyId: 131,
                    passbyName: '柏林'
                }
            ],
            perPrice: 900,
            places: '柏林-柏林',
            publishStatus: 0,
            salePoints: '',
            shareURL: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1161340004',
            skuDetailUrl: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1161340004',
            transactionVolumes: 72
        }, {
            arrCityId: 131,
            arrCityName: '柏林',
            characteristicLables: [
                {
                    lableName: '每日10小时300公里畅游',
                    lableType: 4
                }, {
                    lableName: '推荐行程可与司导协商修改',
                    lableType: 3
                }
            ],
            daysCount: 1,
            depCityId: 131,
            depCityName: '柏林',
            goodsClass: 2,
            goodsName: '音乐之城 | 莱比锡中央火车站+巴赫博物馆+格万特豪斯音乐厅+莱比锡大学 中文包车1日游，柏林往返',
            goodsNo: 'IC1180440008',
            goodsPics: [
                'https://hbcdn.huangbaoche.com/fr-hd/He4_QmrT-Q0!m', 'https://hbcdn.huangbaoche.com/fr-hd/He4_QmrT-Q0!m'
            ],
            goodsPicture: 'https://hbcdn.huangbaoche.com/fr-hd/He4_QmrT-Q0!m',
            goodsType: 3,
            goodsVersion: 2,
            guideAmount: 84,
            headLable: '超自由',
            hotelCostAmount: 0,
            hotelCostPrice: 0,
            hotelStatus: 0,
            passbyCitys: [
                {
                    passbyId: 131,
                    passbyName: '柏林'
                }
            ],
            perPrice: 695,
            places: '柏林-柏林',
            publishStatus: 0,
            salePoints: '',
            shareURL: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1180440008',
            skuDetailUrl: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1180440008',
            transactionVolumes: 0
        }, {
            arrCityId: 131,
            arrCityName: '柏林',
            characteristicLables: [
                {
                    lableName: '按固定线路游玩',
                    lableType: 3
                }
            ],
            daysCount: 1,
            depCityId: 131,
            depCityName: '柏林',
            goodsClass: 1,
            goodsName: '【艺术购物】柏林-弗里德里希大街→杜斯曼文化百货商店→哈克庭院中文包车一日游',
            goodsNo: 'IC1161340005',
            goodsPics: [ 'https://hbcdn.huangbaoche.com/default/20160810/201608101526227919.png!m' ],
            goodsPicture: 'https://hbcdn.huangbaoche.com/default/20160810/201608101526227919.png!m',
            goodsType: 3,
            goodsVersion: 14,
            guideAmount: 78,
            headLable: '超省心',
            hotelCostAmount: 0,
            hotelCostPrice: 0,
            hotelStatus: 0,
            passbyCitys: [
                {
                    passbyId: 131,
                    passbyName: '柏林'
                }
            ],
            perPrice: 458,
            places: '柏林-柏林',
            publishStatus: 0,
            salePoints: '1.不拼团：专车、专导，专属您的服务\n2.不购物：不强行推荐购物，除非您有购物需要\n3.酒店走：无需排队集合，酒店大堂接您上车\n4.我做主：在景点想待多久待多久，完全自我做主\n5.有助手：全程管家服务，体验当地土著生活',
            shareURL: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1161340005',
            skuDetailUrl: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1161340005',
            transactionVolumes: 68
        }, {
            arrCityId: 131,
            arrCityName: '柏林',
            characteristicLables: [
                {
                    lableName: '按固定线路游玩',
                    lableType: 3
                }
            ],
            daysCount: 1,
            depCityId: 131,
            depCityName: '柏林',
            goodsClass: 1,
            goodsName: '【涂鸦之城】柏林-波茨坦广场→柏林墙纪念馆→库达姆大街→夏洛滕堡宫→东部画廊中文包车一日游',
            goodsNo: 'IC1161340002',
            goodsPics: [ 'https://hbcdn.huangbaoche.com/default/20160810/201608101520488561.png!m' ],
            goodsPicture: 'https://hbcdn.huangbaoche.com/default/20160810/201608101520488561.png!m',
            goodsType: 3,
            goodsVersion: 13,
            guideAmount: 78,
            headLable: '超省心',
            hotelCostAmount: 0,
            hotelCostPrice: 0,
            hotelStatus: 0,
            passbyCitys: [
                {
                    passbyId: 131,
                    passbyName: '柏林'
                }
            ],
            perPrice: 458,
            places: '柏林-柏林',
            publishStatus: 0,
            salePoints: '1.不拼团：专车、专导，专属您的服务\n2.不购物：不强行推荐购物，除非您有购物需要\n3.酒店走：无需排队集合，酒店大堂接您上车\n4.我做主：在景点想待多久待多久，完全自我做主\n5.有助手：全程管家服务，体验当地土著生活',
            shareURL: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1161340002',
            skuDetailUrl: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1161340002',
            transactionVolumes: 71
        }, {
            arrCityId: 131,
            arrCityName: '柏林',
            characteristicLables: [
                {
                    lableName: '按固定线路游玩',
                    lableType: 3
                }
            ],
            daysCount: 1,
            depCityId: 131,
            depCityName: '柏林',
            goodsClass: 1,
            goodsName: '【随心畅游】莱比锡10小时畅游包车一日游，柏林往返',
            goodsNo: 'IC1170790010',
            goodsPics: [ 'https://hbcdn.huangbaoche.com/fr-hd/FP0bDRoqRg0!m' ],
            goodsPicture: 'https://hbcdn.huangbaoche.com/fr-hd/FP0bDRoqRg0!m',
            goodsType: 3,
            goodsVersion: 5,
            guideAmount: 76,
            headLable: '超省心',
            hotelCostAmount: 0,
            hotelCostPrice: 0,
            hotelStatus: 0,
            passbyCitys: [
                {
                    passbyId: 131,
                    passbyName: '柏林'
                }
            ],
            perPrice: 674,
            places: '柏林-柏林',
            publishStatus: 0,
            salePoints: '*  专车随心选择，专车畅游世界，100%自由 \n*  五星司导，专业陪同，贴心安心\n*  私人定制，贴心管家服务，海外无忧 ',
            shareURL: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1170790010',
            skuDetailUrl: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1170790010',
            transactionVolumes: 32
        }, {
            arrCityId: 131,
            arrCityName: '柏林',
            characteristicLables: [
                {
                    lableName: '按固定线路游玩',
                    lableType: 3
                }
            ],
            daysCount: 1,
            depCityId: 131,
            depCityName: '柏林',
            goodsClass: 1,
            goodsName: '【随心畅游】德雷斯顿10小时畅游包车一日游，柏林往返',
            goodsNo: 'IC1170790014',
            goodsPics: [ 'https://hbcdn.huangbaoche.com/fr-hd/DIQ5netaNA0!m' ],
            goodsPicture: 'https://hbcdn.huangbaoche.com/fr-hd/DIQ5netaNA0!m',
            goodsType: 3,
            goodsVersion: 4,
            guideAmount: 76,
            headLable: '超省心',
            hotelCostAmount: 0,
            hotelCostPrice: 0,
            hotelStatus: 0,
            passbyCitys: [
                {
                    passbyId: 131,
                    passbyName: '柏林'
                }
            ],
            perPrice: 674,
            places: '柏林-柏林',
            publishStatus: 0,
            salePoints: '*  专车随心选择，专车畅游世界，100%自由 \n*  五星司导，专业陪同，贴心安心\n*  私人定制，贴心管家服务，海外无忧 ',
            shareURL: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1170790014',
            skuDetailUrl: 'https://m.huangbaoche.com/app/detail.html?t=1521706529630&goodsNo=IC1170790014',
            transactionVolumes: 32
        }
    ];
    const whereStr = { cityId: 131 };
    const updateStr = { $set: { goodses: cityObj } };
    dbase.collection('goodses').updateOne(whereStr, updateStr, (err, res) => {
        if (err) throw err;
        console.log('res', res);
        console.log('更新数据成功');
    });
    console.log(db);
    db.close();
});
