import Maius from 'maius';
import { NewsService } from '../service/news';


export default class HomeController extends Maius.Controller {
  constructor(app) {
    super(app);
    this.newsService = new NewsService(app);
  }
  private readonly newsService: NewsService;

  async index() {
    const ctx = this.app.ctx;
    const pageSize = 30;
    const page = parseInt(ctx.query.page) || 1;
    const idList = await this.newsService.getTopStories(page, pageSize);
    const newsList = await Promise.all(idList.map(id => this.newsService.getItem(id)));
    await ctx.render('news/index', {
      list: newsList,
      page,
      pageSize,
    });
  }
  async user() {
    const ctx = this.app.ctx;
    const id = ctx.params.id;
    const userInfo = await this.newsService.getUser(id);
    await ctx.render('news/user', { user: userInfo });
  }
  async detail() {
    const ctx = this.app.ctx;
    const id = ctx.params.id;
    let newsInfo = await this.newsService.getItem(id);
    let commentList = null;
    if(Array.isArray(newsInfo.kids)) {
      commentList = await Promise.all(newsInfo.kids.map(id => this.newsService.getItem(id)));
    } else {
      commentList = [newsInfo];
    }

    await ctx.render('news/detail', { index: id, item: newsInfo, comments: commentList });
  }
}
