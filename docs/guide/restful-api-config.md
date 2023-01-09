# Configuration

While setuping the server, the following options are provided as parameters for customizing APIs.

## path 

Type: `string`

Generally there are multiple table schemas for an application. You can separate them into multiple JSON files and place into a directory. The `path` option is used to specify the directory path. A single file path is also accepted. The package will parse each files and generate APIs for operating each resources based on the table schemas.

## dbConfig

Type: `DBConfig | DBConfig[]`

```Typescript
export interface DBConfig extends Knex.Config {
  /*
   * The name of the database. 
   * It is required if there are more than one database configurations.
   */
  database?: string;
};
```

The `dbConfig` option is used to specify the database configuration for establishing connections before the application start. It is an object or an array of config objects. The package operates the databases with the help of [Knex](https://knexjs.org/). See more details in [Database](/guide/restful-api-database) and [Knex configuration options](http://knexjs.org/guide/#configuration-options).

If there are more than one database configurations provided, the `database` property is required. The value of it must be equal to `options.database` of the table schema.


