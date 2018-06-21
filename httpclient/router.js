module.exports = ({ router, controller }) => {
  router.get('/', controller.httpclient.index);
  router.get('/post', controller.httpclient.post);

};
