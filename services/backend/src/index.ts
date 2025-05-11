import Router from '@koa/router';
import Koa from 'koa';
import KoaLogger from 'koa-logger';
import { createKoaMiddleware } from 'trpc-koa-adapter';
import appRouter from './trpc/appRouter';

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



  const adapter = createKoaMiddleware({ router: appRouter, prefix: "/trpc" });
  app.use(adapter);

  const PORT = 3000;
  app.listen(PORT, async () => {
    console.info(`Server is listening on port ${PORT}`);
  });
}

main();
