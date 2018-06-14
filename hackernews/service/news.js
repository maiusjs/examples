const { Service } = require('maius');

module.exports = class HomeService extends Service {

  constructor(app) {
    super(app);
    this.serverUrl = 'https://hacker-news.firebaseio.com/v0';

  }
  async getTopStories(page, pageSize) {
    const serverUrl = this.serverUrl;
    const httpClient = this.app.httpClient;
    const urlFullPath = `${serverUrl}/topstories.json?`
    const params = [
      `orderBy="$key"`,
      `startAt="${pageSize * (page - 1)}"`,
      `endAt="${pageSize * page - 1}"`
    ].join('&');
    const result = await httpClient.get(urlFullPath + params);
    return Object.keys(result.data).map(key => result.data[key]);
  }
  async getItem(id) {
    const res = await this.app.httpClient.get(`${this.serverUrl}/item/${id}.json`);
    // res.data.domain = this.getDomain(res.data.url);
    return res.data;
  }
  async getUser(id) {
    const res = await this.app.httpClient.get(`${this.serverUrl}/user/${id}.json`);
    return res.data;
  }
};
