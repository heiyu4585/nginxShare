'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/list', controller.list.getListData);
  router.get('/list', controller.list.getListData);

};
