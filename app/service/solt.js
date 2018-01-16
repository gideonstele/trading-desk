const { Service } = require('egg');
const { assign } = require('lodash');

class SoltService extends Service {
    async find(id = '') {
        const solts = await this.app.mysql.get('ad_solt', (id ? {
            id_ad_solt: id,
        } : null));
        return solts;
    }
    async size() {
        const { app } = this;
        return await app.mysql.select('ad_solt', {
            count: 'id_ad_solt',
        });
    }
    async list(offset = 0, limit = global.DEF_LIMIT) {
        return await this.app.mysql.select('ad_solt', {
            limit,
            offset,
        });
    }
    async create({ name, price, camount, impl, payouts }) {
        const result = await this.app.mysql.insert('ad_solt', {
            ad_solt_name: name,
            ad_solt_price: price,
            ad_solt_camount: camount,
            ad_solt_impl: impl,
            ad_solt_payouts: payouts,
            ad_solt_clicks: 0,
        });
        return result.affectedRows === 1;
    }
    async update(id, data) {

        if (id === undefined) {
            return false;
        }

        const result = await this.app.mysql.update(assign(data, {
            id_ad_solt: id,
        }));
        return result.affectedRows === 1;
    }
}

module.exports = SoltService;
