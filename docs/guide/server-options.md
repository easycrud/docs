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