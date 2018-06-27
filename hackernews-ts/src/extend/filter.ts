
import * as moment from 'moment';

const relativeTime = time => moment(new Date(time * 1000)).fromNow();

const domain = (url) => {
  return url && url.split('/')[2];
}
const stringLength = (str) => str.length;

export {
  relativeTime,
  domain,
  stringLength,
}