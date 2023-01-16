import{_ as e,c as a,o as t,b as i}from"./app.245a5328.js";const o="/diagramwithbg.png",w=JSON.parse('{"title":"What EASYCRUD Is and Is Not","description":"","frontmatter":{},"headers":[{"level":2,"title":"What Is","slug":"what-is","link":"#what-is","children":[]},{"level":2,"title":"Motivation","slug":"motivation","link":"#motivation","children":[]},{"level":2,"title":"Drafting","slug":"drafting","link":"#drafting","children":[]},{"level":2,"title":"What Is Not","slug":"what-is-not","link":"#what-is-not","children":[]}],"relativePath":"guide/what-easycrud-is-and-is-not.md","lastUpdated":1673518888000}'),n={name:"guide/what-easycrud-is-and-is-not.md"},s=i('<h1 id="what-easycrud-is-and-is-not" tabindex="-1">What EASYCRUD Is and Is Not <a class="header-anchor" href="#what-easycrud-is-and-is-not" aria-hidden="true">#</a></h1><h2 id="what-is" tabindex="-1">What Is <a class="header-anchor" href="#what-is" aria-hidden="true">#</a></h2><p>EASYCRUD is aimed at providing a series of handy packages that work around <a href="/guide/json-table-schema.html">JSON Table Schema</a> to faster development of typical CRUD web applications.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>EASYCRUD is currently in <code>Pre-alpha</code> status. It is not ready for production, the JSON Table Schema definition and API usage may still change between minor releases.</p></div><ul><li>🛠️ <a href="/guide/build-table-schema.html">toolkits</a><br> A Set of Utilities for JSON Table Schema.</li><li>🖥️ <a href="/guide/server-intro.html">server</a><br> Create RESTful or GraphQL API server based on JSON Table Schema.</li><li>📱 <a href="/guide/client.html">client</a><br> Create API client based on JSON Table Schema.</li><li>👨‍💻 <a href="/guide/components-react.html">components</a><br> Data Table and Form Components for User Interface based on JSON Table Schema.</li></ul><h2 id="motivation" tabindex="-1">Motivation <a class="header-anchor" href="#motivation" aria-hidden="true">#</a></h2><p>We usually want to develop CRUD web applications such as blog, internal management, etc. The typical steps are like:</p><ul><li>Design the data models and APIs.</li><li>Write SQL statements for creating tables. (we usually choose a relational database)</li><li>Develop CRUD API server.</li><li>Develop frontend, including data list tables and create/edit forms to retrive and update data via API.</li></ul><p>In this process, we have to write a lot of repetitive code, for example, we keep writing down the table column names, the data types across from SQL statements, frontend components, to API server. As data models are changed, we have to update the code in multiple places. When we have a new project with new data models, we have to repeat the same steps.</p><p>However, we don&#39;t want to use a full featured framework because many frameworks are too heavy and hard to customize. We&#39;d like to stay lean and flexible to develop our own business logic, but reduce the repetitive work.</p><p>Since data models are involved heavily during the development, we want focus on designing data models, leaving the repetitive work to tools. The tools are expected to help us generate the code for SQL statements, basic CRUD APIs, client and frontend components.</p><h2 id="drafting" tabindex="-1">Drafting <a class="header-anchor" href="#drafting" aria-hidden="true">#</a></h2><p><img src="'+o+'" alt="diagram"></p><h2 id="what-is-not" tabindex="-1">What Is Not <a class="header-anchor" href="#what-is-not" aria-hidden="true">#</a></h2><ul><li>Web Framework</li><li>No Code/Low Code Platform</li></ul><p>The main target of EASYCRUD is to make a set of utilities for faster development of CRUD web applications. We do concern about flexibility and extensibility, we don&#39;t want to be a heavy framework and provide out-of-the box features. The users of EASYCRUD are expected to have a basic understanding of web development and enjoy using the utilities to simplify their work.</p>',16),r=[s];function l(d,h,c,p,m,u){return t(),a("div",null,r)}const b=e(n,[["render",l]]);export{w as __pageData,b as default};
