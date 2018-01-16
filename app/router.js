
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/api/data', controller.api.data);
    router.post('/api/solt/create', controller.api.soltCreate);
};
