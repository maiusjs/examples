module.exports = {
  static: { },
  views: {
    extension: 'ejs',
    viewsDir: 'views',
    engine: 'ejs',
  },
};
module.exports.logger = {
  directory: __dirname + '/logs',
  level: 'DEBUG',
};
