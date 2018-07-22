const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = 'ok';
});

router.get('/user/:id', async (ctx, next) => {
    ctx.body = `/user/${ctx.params.id}`;
});

module.exports = router;