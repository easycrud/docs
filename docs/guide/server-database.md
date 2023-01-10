# Database

The package construct database connections and perform operations on tables with the help of [Knex](https://knexjs.org/). 

::: info Why use Knex?
Knex is a SQL query builder for Node.js. It is a great tool for building database operations. It is enough for this package rather than using a full ORM, like Sequelize, Prisma. However, we still leave possiblity for integrating with ORM in the future.
:::

The package encpasulates a data access object and export as a class `Dao`, providing a set of methods in common usage for operating tables.

```TypeScript
export default class Dao {
    db: Knex;
    table: string;
    alias: Record<string, string>;
    constructor({ db, table, alias }: Options);

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
    getByPk(pk: Record<string, any>, permit: Record<string, any>): Promise<any>;
    delByPk(pk: Record<string, any>, permit: Record<string, any>): Promise<number | {
        err: unknown;
    }>;
    create(data: Record<string, any>): Promise<number[] | {
        err: unknown;
    }>;
    updateByPk(pk: Record<string, any>, permit: Record<string, any>, data: Record<string, any>): Promise<number | {
        err: unknown;
    }>;
}
```