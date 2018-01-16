const { Service } = require('egg');

class CampaginService extends Service {
    async find(id = '') {
        const camps = await this.app.mysql.get('ad_campagin', (id ? {
            id_ad_campagin: id,
        } : null));
        return camps;
    }
    async all() {
        return await this.app.mysql.select('ad_campagin');
    }
}

module.exports = CampaginService;
