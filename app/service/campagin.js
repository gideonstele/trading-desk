const { Service } = require('egg');

class CampaginService extends Service {
    async find(id = '') {
        const camps = await this.app.mysql.get('ad_campagin', (id ? {
            id_ad_campagin: id,
        } : null));
        return camps;
    }
    async size() {
        const { app } = this;
        return await app.mysql.select('ad_campagin', {
            count: 'id_ad_campagin'
        });
    }
    async list(offset = 0, limit = global.DEF_LIMIT) {
        return await this.app.mysql.select('ad_campagin', {
            limit,
            offset,
        });
    }
}

module.exports = CampaginService;
