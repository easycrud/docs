# Integrate with Koa

## Quick Start

```TypeScript
import Koa from 'koa'; // npm i koa -S
import Router from 'koa-router'; // npm i koa-router -S
import Crud from '@easycrud/server/lib/koa/restful';

const app = new Koa();
const router = new Router;
const crud = new Crud({
  path: __dirname + '/schemas',
  dbConfig: {
    client: 'mysql', // npm i mysql -S
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '123456',
      database: 'localdb',
      timezone: '+08:00',
      dateStrings: true,
    },
  }
}, router);

async function start() {
  const router = await crud.create(app);
  app.use(router.routes()).use(router.allowedMethods());
  app.listen(3000, () => {
    console.log('server is running at localhost:3000');
  });
}

start();
```

## Congifuration

```TypeScript
export interface KoaOptions extends Options {
  routerConfig?: routerConfig;
  koaBodyOptions?: koaBody.IKoaBodyOptions;
}

export interface routerConfig {
  [tableName: string]: Partial<{
    /**
     * If true, the default router opreates will be overwritten by the property 'operates'.
     * Otherwise, the property 'operates' will be deeply merged with the default router opreates.
     */
    overwrite: boolean;

    operates: Record<ResourceOperate, Partial<OperateConfig>> | Record<string, OperateConfig>;
  }>;
}

export interface OperateConfig extends Omit<RESTfulOperateConfig, 'handler'> {
  middleware?: Router.IMiddleware | Array<Router.IMiddleware>;
  handler: (dao: Dao) => Router.IMiddleware;
}

export interface RESTfulOperateConfig {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  path: string;
  handler: RESTfulHandler;
}
```

For basic options, `path`, `dbConfig` and `getUserPermission`, please refer to [server](/guide/server-config).

### routerConfig

See more details in [Custom Router](#custom-router).

### koaBodyOptions

The package uses [`koa-body`](https://github.com/koajs/koa-body) to parse the request body. `koaBodyOptions` is used to specify the options for `koa-body`.

## Custom Router

The package use [`koa-router`](https://github.com/koajs/router) to create endpoints. You can customize the router by setting the property `routerConfig`.

### Example
    
```TypeScript
const routerConfig = {
  // customize the router for the table `user`
  'user': {
    'operates': {
      // Change the default router, 'all|paginate|show|store|edit|destory'
      'all': {
        // set the http method, 'get|post|put|delete|patch'
        'method': 'get',
        // change the default path
        'path': '/users',
        // add some middlewares before the handler
        'middlewares': [],
        // change the default handler
        'handler': (dao) => {
            // The parameter `dao` is a `Dao` instance. It provide some help functions to operate the database.
            return async (ctx, next) => {
                // do something
            }
        }
      },
      // Add a new router
      'auth': {
        'method': 'get',
        'path': 'auth',
        'middlewares': [],
        'handler': (dao) => {
            return async (ctx, next) => {
                // do something
            }
        }
      }
    }
  }
}

const crud = new Crud({ routerConfig });
```

### Request Handler

```TypeScript
(dao: Dao) => Router.IMiddleware;
```

The request handler is a router middleware function. The parameter `dao` is a `Dao` instance. See [Database](/guide/server-database#data-access-object) for more details.


### Overwrite router

If you want to overwrite the default router, you can set the property `overwrite` to `true`.

```TypeScript
const routerConfig = {
  // customize the router for the table `user`
  'user': {
    'overwrite': true,
    'operates': {
      // ...
    }
  }
}
```

## Extended context

For customize request handler and middleware with the benefits of the package, the package extends the router context with some properties.

### Dao

The `Dao` instance for each table can be accessed by `ctx.{name}Dao`, where `{name}` is alias or name of the table.

```TypeScript
app.use(async (ctx, next) => {
  const user = await ctx.userDao.db.raw('select * from user where id = ?', [1]);
  // ...
});
```

### Response 

To return [standard data format](/guide/restful-api#response), use `ctx.reply`.

```TypeScript
ctx.reply({ id: 1 });
ctx.reply({ err: { code: 404, message: 'not found' } });
```