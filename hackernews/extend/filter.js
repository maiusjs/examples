const moment = require('moment');

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

exports.domain = (url) => {
  return url && url.split('/')[2];
}
exports.stringLength = (str) => str.length;