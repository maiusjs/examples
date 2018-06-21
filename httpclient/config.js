module.exports = {
  static: { },
  views: {
    engine: 'nunjucks',
    extension: 'html',
    dir: '',
  },

};
module.exports.logger = {
  directory: __dirname + '/logs',
  level: 'DEBUG',
};