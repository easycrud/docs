# RESTful API

Based on JSON Table Schema, `@easycrud/server` package is able to generate RESTful style APIs for performing CRUD (create, read, update, delete) operations on resources.

For example, suppose we have such a JSON Table Schema:

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

The first two routers can be appended query parameters to filter the result.
- fuzzy search: `column=value`
- range search: `column=value1,value2` (column>=value1 and column<=value2)