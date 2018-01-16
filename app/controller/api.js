
const { Controller } = require('egg');
// const { assign } = require('lodash');

class ApiController extends Controller {
    async data() {
        const { ctx } = this;
        const { service } = ctx;
        const query = ctx.query || {};
        const soltOffset = query.soltPage || 0,
            soltLimit = query.limit || global.DEF_LIMIT,
            campOffset = query.campPage || 0,
            campLimit = query.campLimit || global.DEF_LIMIT;
        const [
            ad_slots,
            camps,
        ] = [
            await service.solt.list(soltOffset, soltLimit),
            await service.campagin.list(campOffset, campLimit),
        ];
        this.ctx.body = {
            status: {
                code: 0,
                msg: 'OK',
            },
            result: {
                ad_slots: {
                    page: soltOffset,
                    limit: soltLimit,
                    data: ad_slots,
                },
                camps: {
                    page: campOffset,
                    limit: campLimit,
                    data: camps,
                },
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
