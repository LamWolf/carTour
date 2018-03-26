class Apis {
    constructor(target) {
        this.apiTarget = target === 'demo' ? 'test' : target;
        const ISDEMO = target === 'demo';
        const object = {
            ...this.apis,
            ISDEMO
        };
        return object;
    }

    get initData() {
        return {
            dev: {
                apiHost: 'http://api6-dev.huangbaoche.com',
                channelId: '1108019942',
                gChannelId: '1901198716', // G端channelId
                cChannelId: '18',
                cbcChannelId: '1145431513', // 建行channelId
                masterChannelId: '1106049142',
                frHost: 'https://hbcdn-dev.huangbaoche.com/',
                env: 'dev'
            },
            test: {
                apiHost: 'http://api6-test.huangbaoche.com',
                channelId: '1108019942',
                gChannelId: '1901198716', // G端channelId
                cChannelId: '18',
                cbcChannelId: '1145431513', // 建行channelId
                masterChannelId: '1106049142',
                frHost: 'https://hbcdn-test.huangbaoche.com/',
                env: 'test'
            },
            production: {
                apiHost: 'http://api6.huangbaoche.com',
                channelId: '1108019942',
                gChannelId: '1901198716', // G端channelId
                cChannelId: '18',
                cbcChannelId: '1145431513', // 建行channelId
                masterChannelId: '1106049142',
                frHost: 'https://hbcdn.huangbaoche.com/',
                env: 'prod'
            }
        }[this.apiTarget];
    }
    get apis() {
        const {
            apiHost,
            channelId,
            gChannelId,
            cbcChannelId,
            cChannelId,
            masterChannelId,
            frHost
        } = this.initData;
        return {
            apiHost,
            channelId,
            gChannelId,
            cChannelId,
            cbcChannelId,
            masterChannelId,
            frHost,
            GETAK_URL: `${apiHost}/passport/v1.0/c/getWebAccessKey`,
            WX_DATA_URL: `${apiHost}/marketing/v1.0/e/openapi/shares/conf`,
            GWX_DATA_URL: `${apiHost}/trade/v1.0/p/wechat/conf`,
            GOODS_DETAIL_1_5_URL: `${apiHost}/goods/v1.5/p/home/goodsDetail`,
            HOME_GOODS: `${apiHost}/resale/v1.0/g/journey/homeGoods`,
            GOODS_DETAIL_URL: `${apiHost}/goods/v1.5/p/home/goodsDetail`,
            GOODS_GUIDE_INFOLIST_URL: `${apiHost}/goods/v1.1/c/goodsguideinfolist`,
            POI_URL: `${apiHost}/search/v1.0/p/placebase`,
            PERSIONALINFO: `${apiHost}/supplier/v2.0/e/open/personalinfo`,
            GUIDECOMMENTS: `${apiHost}/supplier/v1.1/e/open/comments`,
            ASSOCIATEDGOODSFORCAPP: `${apiHost}/goods/v1.1/c/associatedgoodsforcapp`,
            ASSOCIATEDGOODSFORCAPPOLD: `${apiHost}/goods/v1.0/c/associatedgoodsforcapp`,
            COUNTRY_GOODS: `${apiHost}/goods/v1.4/p/home/countryGoods`,
            LINE_GOODS: `${apiHost}/goods/v1.4/p/home/lineGroupGoods`,
            CITY_GOODS: `${apiHost}/goods/v1.4/p/home/cityGoods`,
            AUTHENTICATION: `${apiHost}/supplier/v1.0/p/guide/authentication/info`,
            HOMEPAGE_URL: `${apiHost}/goods/v1.1/c/home/album/goodsDetail`
        };
    }
}
module.exports = Apis;
