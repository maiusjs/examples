const { Controller } = require('maius');

module.exports = class NewsController extends Controller {
  constructor(app) {
    super(app);
    this.index = this.index.bind(this);
    this.user = this.user.bind(this);
    this.detail = this.detail.bind(this);
  }

  async index(ctx, next) {
    const pageSize = 30;
    const page = parseInt(ctx.query.page) || 1;
    const idList = await this.service.news.getTopStories(page, pageSize);
    const newsList = await Promise.all(idList.map(id => this.service.news.getItem(id)));
    await ctx.render('news/index', {
      list: newsList,
      page,
      pageSize,
    });
  }
  async user(ctx, next) {
    const id = ctx.params.id;
    const userInfo = await this.service.news.getUser(id);
    await ctx.render('news/user', { user: userInfo });
  }

  async detail(ctx, next) {
    const id = ctx.params.id;
    let newsInfo = await this.service.news.getItem(id);
    let commentList = null;
    if(Array.isArray(newsInfo.kids)) {
      commentList = await Promise.all(newsInfo.kids.map(id => this.service.news.getItem(id)));
    } else {
      commentList = [newsInfo];
    }

    await ctx.render('news/detail', { index: id, item: newsInfo, comments: commentList });
  }
};
