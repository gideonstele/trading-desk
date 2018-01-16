const path = require('path');

module.exports = appInfo => {

    const config = exports = {};

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
            password: 'www',
            // 数据库名
            database: 'trading_desk',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    config.logger = {
        dir: path.join(appInfo.baseDir, 'logs'),
    };

    config.passportGithub = {
        key: 'your_clientID',
        secret: 'your_clientSecret',
    };

    return config;
};
