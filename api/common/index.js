const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx, next) => {
    const { request: req } = ctx;

    if (req.header.authorization !== 'token') {
        ctx.status = 403;
        ctx.body = 'forbidden!';
        return;
    }

    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok!');
        }, 1000);
    });

    ctx.body = {
        result,
    };
});

router.get('/user/:id', async (ctx, next) => {
    ctx.body = `/user/${ctx.params.id}`;
});

module.exports = router;