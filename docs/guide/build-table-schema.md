---
outline: [2, 3]
---

# Build Table Schema

The toolkits package provides some helper functions to build and standardize the table schema.

```TypeScript
export declare function standardize(schema: UnstrictTableSchema, tableName?: string): TypeTableSchema;
export declare class TableSchema {
    fromPath(filePath: string): TypeTableSchema | TypeTableSchema[];
    fromFile(filePath: string): TypeTableSchema;
    from(opts: {
        content: UnstrictTableSchema;
        tableName?: string;
    }): TypeTableSchema;
}
```

## `standardize`

Function for standardizing the table schema. It can be used in both Node.js and browser.

## `TableSchema`

The `TableSchema` class provides some helper functions to build the table schema.

### `fromPath`

Read the table schema from a file or directory. If the path is a directory, it will read all the JSON files in the directory and return an array of standard table schemas.

### `fromFile`

Read the table schema from a file.

### `from`

Build the standard table schema from a unstrict schema.