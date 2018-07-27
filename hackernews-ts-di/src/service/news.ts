import Maius from 'maius';
import { Service } from 'maius-di';

@Service
export  class NewsService extends Maius.Service {
  private serverUrl: string = 'https://hacker-news.firebaseio.com/v0';
  // constructor(app) {
  //   super(app);
  //   this.serverUrl = ;
  // }
  async getTopStories(page, pageSize) {
    const serverUrl = this.serverUrl;
    const httpClient = this.app.httpClient;
    // console.log(this.app.ctx);
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
    return res.data;
  }
  async getUser(id) {
    const res = await this.app.httpClient.get(`${this.serverUrl}/user/${id}.json`);
    return res.data;
  }
}
