const Apis = require('../lib/apis');
const Http = require('../lib/httpReq');

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1520651248505_291';

    // add your config here
    config.middleware = [ 'useragent' ];

    config.view = {
        mapping: {
            '.html': 'nunjucks',
            '.njk': 'nunjucks'
        }
    };

    config.notfound = {
        pageUrl: '/error/404.html'
    };

    config.onerror = {
        // 线上页面发生异常时，重定向到这个页面上
        errorPageUrl: '/error/500.html'
    };

    config.security = {
        csrf: {
            headerName: 'x-csrf-token' // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
        }
    };

    exports.mongoose = {
        clients: {
            // clientId, access the client instance by app.mongooseDB.get('clientId')
            city: {
                url: 'mongodb://localhost:27017/carTour',
                options: {}
            }
        }
    };

    config.apis = new Apis('test');
    config.http = new Http();
    return config;
};
