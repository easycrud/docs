import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'EASYCRUD',
  description: 'Faster the Development of CRUD Web Applications.',
  lastUpdated: true,
  head: [
    ['link', { rel: "shortcut icon", href: "/logo.png"}],
  ],
  themeConfig: {
    logo: '/logo.png',

    sidebar: {
      '/guide/': sidebarGuide(),
    },

    editLink: {
      pattern: 'https://github.com/easycrud/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/easycrud' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2013 QIA YANG'
    },
  },
})

function sidebarGuide() {
  return [
    {
      text: 'Basic',
      items: [
        { text: 'What Is and Is Not?', link: '/guide/what-easycrud-is-and-is-not' },
        { text: 'JSON Table Schema', link: '/guide/json-table-schema' }
      ]
    },
    {
      text: 'Server',
      items: [
        { text: 'Integrate with Koa', link: '/guide/integrate-with-koa' }
      ]
    },
    {
      text: 'Client',
      items: [
        { text: 'Client', link: '/guide/client' }
      ]
    },
    {
      text: 'Toolkits',
      items: [
        { text: 'SQL Statement', link: '/guide/sql-statement' },
        { text: 'JSON Schema', link: '/guide/json-schema' },
        { text: 'GraphQL Object', link: '/guide/graphql-object' }
      ]
    }
  ]
}