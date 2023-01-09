# Example

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