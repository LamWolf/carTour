
// const userAgent = require('koa-useragent');
// module.exports = userAgent;
// todo uninstall koa-useragent

const Agent = require('../util/agent.js');

module.exports = () => {
    return async (ctx, next) => {
        const header = ctx.request.header;
        const source = header['user-agent'];
        ctx.userAgent = new Agent(source, header);
        await next();
    };

};
