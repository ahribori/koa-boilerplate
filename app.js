const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

const api = require('./api');

app.use(bodyParser());

const router = new Router();

router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080);