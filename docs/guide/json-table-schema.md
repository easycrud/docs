# JSON Table Schema

> JSON Table Schema is a JSON-based format for describing database table structure. You can check out the full types definition [here](https://github.com/easycrud/toolkits/blob/master/src/table-schema/types.ts).

## Properties

### tableName

- Type: `string`

The name of the table.

### alias

- Type: `string | undefined`

The alias of a table. If provided, it will be used for describing the data object in the code.

### columns

- Type: `ColumnDefinition[]`

`columns` is a core part of JSON Table Schema. It describes the columns of the table. Each item in `columns` is a [`ColumnDefinition`](#columndefinition) object.

### indexes

- Type: `IndexDefinition[] | undefined`

`indexes` describes the indexes of the table. Each item in `indexes` is a [`IndexDefinition`](#indexdefinition) object.

### options

- Type: `TableOptions | undefined`

`options` describes the extra options of the table. It is a [`TableOptions`](#tableoptions) object.

### pk

- Type: `string[]`

`pk` is a getter property. Users don't need to provide it, it will be generated automatically after [standardize()](/guide/build-table-schema). It returns the primary key(s) of the table. If the table has no primary key, it returns an empty array. Actualy, we do require a primary key for a table, it is important for the CRUD operations.


## ColumnDefinition

### name

- Type: `string`

The name of the column.

### alias

- Type: `string | undefined`

The alias of a column. If provided, it will be used for describing the data object in the code.

### type

- Type: `string`

The type of the column. The available types are the same as the types of the database you are using. For example, if you are using MySQL, the available types are `int`, `varchar`, `text`, etc.   
A type includes the length or range of the column is accepted, like `varchar(255)`, `int(11)`, `decimal(10,2)`.

::: info
We do consider about defining a set of basic types, but we plan to support multiple databases, currently including MySQL/MariaDB, PostgreSQL. Each database has its own types, we don't want to limit the types to a subset of the database types in this period. We may change the idea if it make things weird in practice. In nutshell, we still think about how to make it easier to use and keep the flexibility. If you have some good ideas, please let us know.
:::

### length

- Type: `number | undefined`

The length of the column. It is used for the types that don't include the length in the `type` property, like `varchar`, `decimal`.

### primary

- Type: `boolean`

Whether the column is a primary key. Default is `false`.

### autoIncrement

- Type: `boolean`

Whether the column is set to auto increment. Default is `false`.

### nullable

- Type: `boolean`

Whether the column is nullable. Default is `false`.

### default

- Type: `string | number`

The default value of the column. Can be `CURRENT_TIMESTAMP`.

### comment

- Type: `string | undefined`

The comment of the column.

### onUpdate

- Type: `string | undefined`

The `ON UPDATE` clause of the column. Usually be `CURRENT_TIMESTAMP`.

## IndexDefinition

## TableOptions

## Example

```json
// for PostgreSQL
{
  "columns": [
    {
      "name": "id",
      "type": "serial",
      "primary": true
    },
    {
      "name": "title",
      "type": "character varying",
      "length": 512,
      "nullable": false,
      "default": "",
      "comment": "标题"
    },
    {
      "name": "description",
      "type": "character varying",
      "nullable": false,
      "default": "",
      "comment": "描述"
    },
    {
      "name": "content",
      "type": "character varying",
      "nullable": false,
      "default": "",
      "comment": "内容"
    },
    {
      "name": "author",
      "type": "character varying",
      "length": 256,
      "nullable": false,
      "default": "system",
      "comment": "作者"
    },
    {
      "name": "create_time",
      "type": "timestamp without time zone",
      "default": "current_timestamp",
      "comment": "创建时间"
    },
    {
      "name": "update_time",
      "type": "timestamp without time zone",
      "default": "current_timestamp",
      "comment": "更新时间"
    }
  ],
  "indexes": {
    "idx_create_time": {
      "column": "create_time"
    },
    "idx_update_time": {
      "column": "update_time"
    }
  },
  "options": {
    "dropIfExists": true
  }
}
```

## Unstrict Format