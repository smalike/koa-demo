import 'babel-polyfill';
import fs from 'fs';
import koa from 'koa';
import koaRouter from 'koa-router';

const app = new koa();
const router = new koaRouter();

router.get('/', (ctx, next) => {
  console.log('//');
  let context = ctx;
  context.status = 200;
  context.body = 'success!';
  return next();
});

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stat) => {
      if (err || !stat || !stat.isFile()) {
        return reject(err);
      }
      fs.readFile(filePath, (err1, content) => {
        if (err) {
          return reject(err);
        }
        resolve(content);
      });
    });
  });
}

router.get('/contact/*', async (ctx, next) => {
  console.log('/contact');
  let filePath = ctx.params['0'];
  console.log('filePath', filePath);
  let content = await readFile(filePath);
  console.log('content', content);
  let context = ctx;
  context.status = 200;
  context.body = content;
  context.type = 'text/html';
  return next();
});

app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
