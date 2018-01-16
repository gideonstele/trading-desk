
const { Controller } = require('egg');

class HomeController extends Controller {
    async index() {
        await this.ctx.render('home.nj');
    }
}

module.exports = HomeController;
