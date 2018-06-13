module.exports = {
  middleware: [

    // koa-middleware example with complex args
    {
      name: 'koa-morgan',
      args: [
        'combined',
        {
          skip: function (req, res) {
            return false;
          }
        }
      ],
    },
  ],
  static: { },
};
