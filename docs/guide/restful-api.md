# RESTful API

Based on JSON Table Schema, `@easycrud/server` package is able to generate RESTful style APIs for performing CRUD (create, read, update, delete) operations on resources.

## Endpoints

Based on a JSON Table Schema, the generated resource endpoints are:

> `{resource}` is alias or name of the table.   

- `GET /all_{resource}`  

  Get all resources without pagination. Depends on size of the table, this endpoint may returns a large dataset.

- `GET /{resource}?[page=n&pageSize=m&orderBy=columnKey[,(asc|desc)]]`  

  Get a collection resource with pagination. The default value of `pageSize` is 20. If a column key is specified in `orderBy`, the result will be sorted by the column. The default sort order is `desc` if not specified.

- `GET /{resource}/:pk`  

  Get a singleton resource by primary key.
- `POST /{resource}`       

  Create a new resource.
- `PUT /{resource}/:pk`      

  Update a resource by primary key.
- `DELETE /{resource}/:pk`     

  Delete a resource by primary key.

## Primary Keys

For the table has multiple primary keys, a singleton resource can be accessed using `/{resource}/:pk1/:pk2/...`.

## Request

To create/update a resource, the `POST` and `PUT` methods send JSON data with header `Content-Type: application/json`. The request data is required to put into the field `data`.

```json
{
  "data": {
    "key": "value"
  }
}
```

## Search

The endpoint for retriving a collection resource can be appended query parameters to filter the result.

| Operator | Description | Usage | 
| -------- | ----------- | ----- |
| `=`     | Equal to    | `field:eq=value` or `field=value` |
| `<>` or `!=`  | Not equal to | `field:ne=value` |
| `>`     | Greater than | `field:gt=value` |
| `>=`    | Greater than or equal to | `field:gte=value` |
| `<`     | Less than | `field:lt=value` |
| `<=`    | Less than or equal to | `field:lte=value` |
| `IN`    | To specify multiple possible values for a column | `field:in=value1,value2,value3` |
| `LIKE`  | Search for "%value%" | `field:like=value` |
| `BETWEEN` | To specify a range of values for a column | `field:btw=value1,value2` |

## Response

All endpoints return the standard data format in JSON:

```json
{
    "code": 0,
    "msg": "success",
    "data": []
}
```

## Column Keys

When sending request data or receiving response data, the column keys follow the priority below:

- Use the alias of the column if it is set.
- Use the formatted name of the column. See [Column Formatter](/guide/json-table-schema#columnformatter) for details.
- Use the name of the column.

## Example

Suppose we have such a JSON Table Schema:

```json
{
  "columns": [
    {
      "name": "id",
      "type": "int",
      "length": 11,
      "primary": true,
      "autoIncrement": true
    },
    {
      "name": "username",
      "type": "varchar",
      "length": 256,
      "nullable": false,
      "comment": "username"
    },
    {
      "name": "password",
      "type": "varchar",
      "length": 512,
      "nullable": false,
      "comment": "password"
    }
  ],
  "indexes": {
    "idx_user": {
      "column": "username",
      "unique": true
    }
  }
}
```

The generated APIs will be:

- `GET /all_users[?username=xxx]` get all users without pagination.
- `GET /users?page=1&pageSize=10[&username=xxx]` get users with pagination.
- `GET /users/:id` get a user by id.
- `POST /users` create a user.
- `PUT /users/:id` update a user by id.
- `DELETE /users/:id` delete a user by id.