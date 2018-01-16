
const { Controller } = require('egg');

class HomeController extends Controller {
    async index() {
        const { ctx, service } = this;
        const [
            count,
            ad_slots
        ] = [
            await service.solt.size(),
            await service.solt.list()
        ];
        await ctx.render('home.nj', {
            solts: ad_slots,
            pageNum: 0,
            pageTotal: Math.ceil(count / global.DEF_LIMIT),
        });
    }
}

module.exports = HomeController;
