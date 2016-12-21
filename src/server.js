import koa from 'koa';
import koaRouter from 'koa-router';

const app = new koa();
const router = new koaRouter();

router.get('/', (ctx, next) => {
  console.log('//');
  return next();
});

router.get('/search/:id/:name', (ctx, next) => {
  console.log('/search');
  console.log('ctx.params.id', ctx.params.id);
  console.log('ctx.params.name', ctx.params.name);
  let context = ctx;
  context.status = 200;
  context.body = `${ctx.params.name}\nHello world!\n${ctx.params.id}`;
  return next();
});

app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
