/**
 * @param {Egg.Application} app - egg application
 * api 相关路由，统一以api开头，做数据聚合用。
 */
module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get('/api/goods/goodsStock', controller.api.goods.goodsStock);


};
