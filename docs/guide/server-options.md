# Server Options

Options available within `@easycrud/server` for JSON Table Schema:

```TypeScript
export type TableOperate = 'read' | 'create' | 'update' | 'delete';

interface Permission {
  /**
   * The name of the columns where values are used for permission check.
   */
  column: string | string[];
  /**
   * Operations that require permission check.
   */
  operates: TableOperate[];
  /**
   * The method of the permission check.
   */ 
  method?: 'equal' | 'include'
}

export interface TableOptions extends BaseTableOptions {
  /**
   * The options for configuring table-level permissions.
   */
  tablePermission?: Permission;
  /**
   * The options for configuring row-level permissions.
   */
  rowPermission?: Permission;
}
```

## Permissions

### Table Permission

### Row Permission

Row Permission means that users can only operate the records of the table that they have permission to. This feature configured by `rowPermission` option of the table schemas.

```json
// Example of a table schema
{
  // ...
  "options": {
    "rowPermission": {
      "column": "username",
      "operates": ["read", "update", "delete"]
    }
  }
}
```

- `column: string | string[]`

  The name of the columns where values are used for permission check. It can be a string or an array of strings. The program retrives the value of the column(s) from rows to compare with the return value of `getUserPermission` function. See also [getUserPermission](/guide/server-config#getuserpermission).

- `operates: TableOperate[]`

  Operations that require permission check. It can be `read`, `update` or `delete`. For each opeartion, the program will use the return value of `getUserPermission` and build where clauses to filter the records.   

  For `read` operation, the result will only contain the records that the user has permission to. For `update` and `delete` operations, the count of affected row is expected to be zero if the user has no permission to operate the record.   

  If `read` is not included in `operates`, but `update` or `delete` requires permission check. The records of response data of `read` operation like `all`, `paginate`, `show` will be appended with a property `forbid` to indicate whether the user has permission to operate the record.

  ```json
  {
    "forbid": {
      "update": false,
      "delete": true
    }
  }
  ```

- `method?: 'equal' | 'include'`

  The method of the permission check. Default is `equal`. It can be `equal` or `include`.   

  - `equal`: The return value of `getUserPermission` function should be equal to the value of the column(s).

  - `include`: The return value of `getUserPermission` function should be included in the value of the column(s).   

  For example, if the return value of `getUserPermission` is `{username: 'admin', status: 1}`, the value of the column `username` is `admin;super;` and the value of the column `status` is `1`, the permission check will be failed if `method` is `equal`. But it will be passed if `method` is `include`.