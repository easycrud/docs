# @easycrud/toolkits

`@easycrud/toolkits` is a set of tools for JSON Table Schema. It includes:

- [`table-schema`](/guide/build-table-schema)

  Provide the definition of JSON Table Schema and the functions for parsing and standardizing the schema.

- [`converter`](/guide/converter)

  Convert the JSON Table Schema to other formats.

  - `schemaToSQL`: convert the JSON Table Schema to `CREATE TABLE` SQL statements.

  - `schemaToJSONSchema`: convert the JSON Table Schema to [JSON Schema](https://json-schema.org/).

  - `schemaToGraphQL`: convert the JSON Table Schema to [GraphQL Object](https://graphql.org/learn/schema/#object-types-and-fields).