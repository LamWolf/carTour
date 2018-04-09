/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // 路由
    //
    // router.get('/goods/detail/:goodsNo', controller.page.detail.index.index);
    // router.get('/goods/map/:goodsNo', controller.page.detail.index.map);
    // router.get('/goods/poi/:poiId', controller.page.poi.index.index);
    // router.get('/city/:cityId', controller.page.city.index.index);
    //
    // router.get('/cdn/m/app/detail.html', controller.page.detail.index.index);
    router.get('/', controller.page.home.index);
    router.get('/error/404.html', controller.error.notfound);
    router.get('/error/500.html', controller.error.error);

    router.get('/city/:cityId', controller.page.city.index.index);
    router.get('/sku/:goodsNo', controller.page.sku.index.index);
};
