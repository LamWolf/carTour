module.exports = appInfo => {
    const config = exports = {};

    // // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1520651248505_291';
    //
    // // add your config here
    config.middleware = [ 'useragent' ];
    config.development = {
        watchDirs: [ 'app', 'lib' ],
        ignoreDirs: [ 'app/web', 'app/public' ]
    };
    return config;
};
