# Converter

## SQL statements

Convert JSON Table Schema to `CREATE TABLE` SQL statements. Currently only supports MySQL and PostgreSQL.

### Usage

```TypeScript
export declare function schemaToMySQL(schema: UnstrictTableSchema): string;
export declare function schemaToPostgreSQL(schema: UnstrictTableSchema): string;
```

CLI

```bash
# -p, --path <path>  Path to JSON Table Schema file or directory
# -o, --out <path>   Output path, default to stdout
# -t, --type <type>  Database type, mysql or pg

npx schema2sql -t pg -s schema.json
```

### Example

The examples on this page are all based on this [schema](/guide/json-table-schema.html#example).

Convert to PostgreSQL statements:

```sql
CREATE TABLE IF NOT EXISTS users(
id INT(11) SERIAL NOT NULL,
username VARCHAR(256) NOT NULL DEFAULT '',
email VARCHAR(512) NOT NULL,
password VARCHAR(512) NOT NULL,
update_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
CONSTRAINT users_pk PRIMARY KEY (id)
);
CREATE UNIQUE INDEX users_idx_user ON users (username,email);
CREATE INDEX users_idx_email ON users (email);
COMMENT ON COLUMN users.username IS '用户名';
COMMENT ON COLUMN users.email IS '邮箱';
COMMENT ON COLUMN users.password IS '密码';
COMMENT ON COLUMN users.update_time IS '更新时间';
```

## JSON Schema

Convert JSON Table Schema to [JSON Schema](http://json-schema.org/) or [Formily ISchema](https://react.formilyjs.org/api/shared/schema#ischema).

### Example

JSON Schema

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number",
      "title": "id",
    },
    "username": {
      "type": "string",
      "title": "用户名",
    },
    "email": {
      "type": "string",
      "title": "邮箱",
    },
    "password": {
      "type": "string",
      "title": "密码",
    },
    "updateTime": {
      "type": "string",
      "title": "更新时间",
    }
  }
}
```

Formily ISchema

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number",
      "title": "id",
      "x-decorator": "FormItem",
      "x-component": "InputNumber",
    },
    "username": {
      "type": "string",
      "title": "用户名",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    "email": {
      "type": "string",
      "title": "邮箱",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    "password": {
      "type": "string",
      "title": "密码",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    "updateTime": {
      "type": "string",
      "title": "更新时间",
      "x-decorator": "FormItem",
      "x-component": "DatePicker",
      "x-component-props": {"showTime": true},
    }
  }
}
```


## GraphQL Object

TODO