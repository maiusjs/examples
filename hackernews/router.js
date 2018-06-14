module.exports = ({ router, controller }) => {
  router.get('/', controller.news.index);
  router.get('/news', controller.news.index);
  router.get('/news/user/:id', controller.news.user);
  router.get('/news/item/:id', controller.news.detail);
};
