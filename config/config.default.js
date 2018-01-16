const path = require('path');

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1515936046582_3815';

    // add your config here
    config.middleware = [ 'gzip' ];

    // 配置 gzip 中间件的配置
    config.gzip = {
        threshold: 1024, // 小于 1k 的响应体不压缩
    };

    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: '127.0.0.1',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: 'root',
            // 数据库名
            database: 'trading_desk',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    config.logger = {
        dir: '/home/admin/logger',
    };

    config.view = {
        defaultViewEngine: 'nunjucks',
        defaultExtension: '.nj',
        root: path.join(appInfo.baseDir, 'app/view'),
    };

    config.passportGithub = {
        key: 'your_clientID',
        secret: 'your_clientSecret',
    };

    config.static = {
        prefix: '/public/',
        dir: path.join(appInfo.baseDir, 'app/public'),
    };

    return config;
};
