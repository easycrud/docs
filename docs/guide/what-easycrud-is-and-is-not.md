# What EASYCRUD Is and Is Not

## What Is

EASYCRUD is aimed at providing a series of handy packages that work around [JSON Table Schema](/guide/json-table-schema) to faster development of typical CRUD web applications.

::: warning
EASYCRUD is currently in `Pre-alpha` status. It is not ready for production, the JSON Table Schema definition and API usage may still change between minor releases.
:::

- 🛠️ [toolkits](/guide/build-table-schema)   
  A Set of Utilities for JSON Table Schema.  
- 🖥️ [server](/guide/integrate-with-koa)   
  Create RESTful or GraphQL API server based on JSON Table Schema.  
- 📱 [client](/guide/client)   
  Create API client based on JSON Table Schema.  
- 👨‍💻 [components](/guide/components-react)    
  Data Table and Form Components for User Interface based on JSON Table Schema.

## Motivation

We usually want to develop CRUD web applications such as blog, internal management, etc. The typical steps are like:

- Design the data models and APIs. 
- Write SQL statements for creating tables. (we usually choose a relational database)
- Develop CRUD API server.
- Develop frontend, including data list tables and create/edit forms to retrive and update data via API.

In this process, we have to write a lot of repetitive code, for example, we keep writing down the table column names, the data types across from SQL statements, frontend components, to API server. As data models are changed, we have to update the code in multiple places. When we have a new project with new data models, we have to repeat the same steps.

However, we don't want to use a full featured framework because many frameworks are too heavy and hard to customize. We'd like to stay lean and flexible to develop our own business logic, but reduce the repetitive work. 

Since data models are involved heavily during the development, we want focus on designing data models, leaving the repetitive work to tools. The tools are expected to help us generate the code for SQL statements, basic CRUD APIs, client and frontend components.

## Drafting

![diagram](/diagramwithbg.png)

## What Is Not

- Web Framework
- No Code/Low Code Platform

The main target of EASYCRUD is to make a set of utilities for faster development of CRUD web applications. We do concern about flexibility and extensibility, we don't want to be a heavy framework and provide out-of-the box features. The users of EASYCRUD are expected to have a basic understanding of web development and enjoy using the utilities to simplify their work.