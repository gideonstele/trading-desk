
// had enabled by egg
// exports.static = true;

module.exports = {
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks',
    },
    mysql: {
        enable: true,
        package: 'egg-mysql',
    },
    passport: {
        enable: true,
        package: 'egg-passport',
    },
    passportGithub: {
        enable: true,
        package: 'egg-passport-github',
    },
};
