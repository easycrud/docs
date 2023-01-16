---
outline: [2, 3]
---

# Database

The package construct database connections and perform operations on tables with the help of [Knex](https://knexjs.org/). 

::: info Why use Knex?
Knex is a SQL query builder for Node.js. It is a great tool for building database operations. It is enough for this package rather than using a full ORM, like Sequelize, Prisma. However, we still leave possiblity for integrating with ORM in the future.
:::

## Data Access Object

The package encpasulates a data access object and export as a class `Dao` for each table schema, providing a set of methods in common usage for operating tables.

```TypeScript
export default class Dao {
    db: Knex;
    table: string;
    alias: Record<string, string>;
    constructor({ db, table, alias }: Options);
    transform(data: Record<string, any>): Record<string, any>;
    buildWhereClause(query: Knex.QueryBuilder, conditions: Record<string, any>): Knex.QueryBuilder<any, any>;
    all(params: Record<string, any>): Promise<any[] | {
        err: unknown;
    }>;
    paginate(params: Record<string, any>): Promise<import("knex-paginate").IWithPagination<{}, {
        perPage: number;
        currentPage: number;
        isLengthAware: true;
    }> | {
        err: unknown;
    }>;
    getByFields(fields: Record<string, any>): Promise<any>;
    delByFields(fields: Record<string, any>): Promise<number | {
        err: unknown;
    }>;
    create(data: Record<string, any>): Promise<number[] | {
        err: unknown;
    }>;
    updateByFields(fields: Record<string, any>, data: Record<string, any>): Promise<number | {
        err: unknown;
    }>;
}
```

### `db` 

Type: `Knex`

The database connection client of the data access object.

### `table`

Type: `string`

The name of the table of the data access object.

### `alias`

Type: `Record<string, string>`

The map of the [column keys](/guide/restful-api#column-keys) and the original column names. This map is constructed automatically while parsing the table schema. It is used for `select`, `insert`, `update`, etc. See also [Knex Identifier Syntax](https://knexjs.org/guide/query-builder#identifier-syntax). For example: 

```json
{
  "userId": "user_id",
  "username": "username",
  "createdAt": "created_at",
  "updatedAt": "updated_at"
}
```

### `transform`

Type: `(data: Record<string, any>): Record<string, any>;`

The `transform` function used `alias` to transform the map of column keys and values into the map of the original column names and values. It is used for constructing the query while applying `insert`, `update` and `where` clauses. For example:

Request data:

```json
{
  "userId": 1,
  "username": "admin",
  "createdAt": "2023-01-01 00:00:00",
  "updatedAt": "2023-01-01 00:00:00"
}
```

Transformed data for query:

```json
{
  "user_id": 1,
  "username": "admin",
  "created_at": "2023-01-01 00:00:00",
  "updated_at": "2023-01-01 00:00:00"
}
```

### `buildWhereClause`

Type: 

```TypeScript
(query: Knex.QueryBuilder, conditions: Record<string, any>): Knex.QueryBuilder<any, any>;
```

The `buildWhereClause` function is used to construct the `where` clause for the query from request parameters. See also [Search](/guide/restful-api#search). Basic usage:

```TypeScript
buildWhereClause(baseQuery, transform(requestParmas))
```

### `all`

Type:

```TypeScript
(params: Record<string, any>): Promise<any[] | { err: unknown; }>;
```

The `all` function is used to query all records from the table.

### `paginate`

Type:

```TypeScript
(params: Record<string, any>): Promise<import("knex-paginate").IWithPagination<{}, { perPage: number; currentPage: number; isLengthAware: true; }> | { err: unknown; }>;
```

The `paginate` function is used to query records from the table with pagination. It is implemented with the help of [knex-paginate](https://github.com/felixmosh/knex-paginate).

### `getByFields`

Type:

```TypeScript
(fields: Record<string, any>): Promise<any>;
```

The `getByFields` function is used to query a record by fields from the table.

### `delByFields`

Type:

```TypeScript
(fields: Record<string, any>): Promise<number | { err: unknown; }>;
```

The `delByFields` function is used to delete a record by fields from the table.

### `create`

Type:

```TypeScript
(data: Record<string, any>): Promise<number[] | { err: unknown; }>;
```

The `create` function is used to create a record in the table.


### `updateByFields`

Type:

```TypeScript
(fields: Record<string, any>, data: Record<string, any>): Promise<number | { err: unknown; }>;
```

The `updateByFields` function is used to update a record by fields in the table.

## Usage

See how to use database connection clients and data access objects: [Usage](/guide/integrate-with-koa).