
const { Controller } = require('egg');
// const { assign } = require('lodash');

class ApiController extends Controller {
    async data() {
        const { service } = this.ctx;
        const [
            ad_slots,
            camps,
        ] = [
            await service.solt.all(),
            await service.campagin.all(),
        ];
        this.ctx.body = {
            status: {
                code: 0,
                msg: 'OK',
            },
            result: {
                ad_slots,
                camps,
            },
        };
    }
    async soltCreate() {
        const { service } = this.ctx;
        const data = this.ctx.request.body;
        const result = await service.solt.create(data);
        if (result) {
            this.ctx.body = {
                status: {
                    code: 0,
                    msg: 'OK',
                },
                result: {
                    status: 0,
                    message: 'SUCCESS',
                },
            };
        } else {
            this.ctx.body = {
                status: {
                    code: 0,
                    msg: 'OK',
                },
                result: {
                    status: -1,
                    message: 'ERROR',
                },
            };
        }
    }
}

module.exports = ApiController;
