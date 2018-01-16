
const { Controller } = require('egg');

class SoltController extends Controller {
    async create() {
        const { ctx, service } = this;
        const frms = ctx.request.body;
        await service.solt.create({
            name : frms.solt_name, 
            price, 
            camount, 
            impl, 
            payouts
        })
    }
}

module.exports = SoltController;
