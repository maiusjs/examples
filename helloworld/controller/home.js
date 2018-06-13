const { Controller } = require('maius');

module.exports = class HomeController extends Controller {
  constructor() {
    super();
    this.index = this.index.bind(this);
  }

  async index(ctx, next) {
    const str = await this.service.home.say('coolboy');
    ctx.body = str;
  }
};
