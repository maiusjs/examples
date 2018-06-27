const staticDir = {};
const views = {
  extension: 'ejs',
  viewsDir: 'views',
  engine: 'ejs',
};
const logger = {
  directory: __dirname + '/logs',
  level: 'DEBUG',
};

export {
  staticDir as static,
  views,
  logger,
}