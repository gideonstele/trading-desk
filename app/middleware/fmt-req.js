const isJSON = require('koa-is-json');

module.exports = () => {
    return async function fmtReq(ctx, next) {
        await next();

        let body = ctx.body;
        if (!body) return;
        if (isJSON(body)) {
            body = {
                status: {
                    code: 0,
                    msg: 'OK',
                },
                result: body,
            };
        }
    };
};
