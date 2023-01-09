# RESTful API

Based on JSON Table Schema, `@easycrud/server` package is able to generate RESTful style APIs for performing CRUD (create, read, update, delete) operations on resources.

## Endpoints

Based on a JSON Table Schema, the generated resource endpoints are:

> `{resource}` is alias or name of the table.   

- `GET /all_{resource}`  
  Get all resources without pagination. Depends on size of the table, this endpoint may returns a large dataset.
- `GET /{resource}?[page=n&pageSize=m]`  
  Get a collection resource with pagination. The default value of `pageSize` is 20.
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

- fuzzy search: `field=value`
- range search: `field=value1,value2` (field > value1 and field < value2)

::: tip
More complicated operations will be supported in the future.
:::

## Response

All endpoints return the standard data format in JSON:

```json
{
    "code": 0,
    "msg": "success",
    "data": []
}
```