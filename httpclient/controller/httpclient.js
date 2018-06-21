const { Controller } = require('maius');

module.exports = class httpClient extends Controller {
  constructor(app) {
    super(app);
    this.index = this.index.bind(this);
    this.post = this.post.bind(this);
  }
  async index(ctx) {
    const url = 'https://registry.npmjs.com/maius/latest';

    const res = await this.app.httpClient.get(url);
    const data = res.data;
    await ctx.render('index', { version: data.version });
  }
  async post(ctx) {
    const url = 'https://httpbin.org/post';
    const res = await this.app.httpClient.post(url, {
      msg: 'hello maius'
    });
    const data = JSON.parse(res.data.data);
    await ctx.render('post', {
      msg: data.msg,
    });
  }
};
