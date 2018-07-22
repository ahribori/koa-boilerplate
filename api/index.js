const Router = require('koa-router');
const common = require('./common');

const api = new Router();

api.use('/common', common.routes(), common.allowedMethods());

module.exports = api;