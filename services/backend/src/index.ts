import Router from '@koa/router';
import Koa from 'koa';
import KoaLogger from 'koa-logger';

async function main(): Promise<void> {
  const app = new Koa();
  app.use(KoaLogger());

  const router = new Router();
  router.get('/ping', async ctx => {
    console.log('Ping route accessed');
    ctx.body = 'pong';
  });
  router.get('/', async ctx => (ctx.body = 'Hello, World!'));

  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen(3001, async () => {
    console.info('server is Listening very clear!');
  });
}

main();
