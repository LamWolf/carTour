// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');
const getPublibPath = function() {
    let res;
    switch (process.env.NODE_ENV) {
    case 'dev':
        res = '/';
        break;
    case 'test':
        res = '/';
        break;
    case 'production':
        res = 'https://fr-static.huangbaoche.com/hbc-cm/';
        break;
    default:
        res = '/';
    }
    console.log(res);
    return res;
};
module.exports = {
    build: {
        index: path.resolve(__dirname, 'dist/index.html'),
        assetsRoot: path.resolve(__dirname, 'dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: getPublibPath(),
        productionSourceMap: false
    },
    host: {
        dev: {
            // @TODO : 上线前修改回来apiHost
            apiHost: 'https://api7-dev.huangbaoche.com/',
            openApiHost: 'https://openapi-dev.huangbaoche.com/',
            wxApiHost: 'https://api7-dev.huangbaoche.com/',
            sApiHost: 'https://api7.huangbaoche.com/',
            resHost: 'https://m-dev.huangbaoche.com/',
            frHost: 'https://fr-dev.huangbaoche.com/',
            opHost: 'https://op-dev.huangbaoche.com/',
            domain: 'huangbaoche.com',
            pay: 'https://op-dev.huangbaoche.com/app/index.html'
        },
        test: {
            apiHost: 'https://api7-test.huangbaoche.com/',
            openApiHost: 'https://openapi-test.huangbaoche.com/',
            wxApiHost: 'https://api7-test.huangbaoche.com/',
            sApiHost: 'https://api7.huangbaoche.com/',
            resHost: 'https://m-test.huangbaoche.com/',
            frHost: 'https://fr-test.huangbaoche.com/',
            opHost: 'https://op-test.huangbaoche.com/',
            domain: 'huangbaoche.com',
            pay: 'https://op-test.huangbaoche.com/app/index.html'
        },
        production: {
            apiHost: 'https://api7.huangbaoche.com/',
            openApiHost: 'https://openapi.huangbaoche.com/',
            wxApiHost: 'https://api7.huangbaoche.com/',
            sApiHost: 'https://api7.huangbaoche.com/',
            resHost: 'https://m2.huangbaoche.com/',
            frHost: 'https://hbcdn.huangbaoche.com/',
            opHost: 'https://op.huangbaoche.com/',
            domain: 'huangbaoche.com',
            pay: 'https://op.huangbaoche.com/app/index.html'
        }
    },
    dev: {
        httpPort: 8080,
        httpsPort: 443,
        proxyTable: {}
    }
};
