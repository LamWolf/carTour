

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    require('./router/page')(app);
    require('./router/api')(app);
};
