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
      copyright: 'Copyright © 2023 QIA YANG'
    },
  },
})

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What Is and Is Not?', link: '/guide/what-easycrud-is-and-is-not' },
        { text: 'JSON Table Schema', link: '/guide/json-table-schema' }
      ]
    },
    {
      text: 'Server',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/server-intro' },
        { text: 'Database', link: '/guide/server-database' },
        { text: 'Configuration', link: '/guide/server-config' },
        { text: 'Schema Options', link: '/guide/server-options' },
        { text: 'RESTful API', link: '/guide/restful-api', 
          items: [
            { text: 'Integrate with Koa', link: '/guide/integrate-with-koa' }
          ]
        },
        { text: 'GraphQL API', link: '/guide/graphql' }
      ]
    },
    {
      text: 'Client',
      collapsible: true,
      items: [
        { text: 'Client', link: '/guide/client' }
      ]
    },
    {
      text: 'Components',
      collapsible: true,
      items: [
        { text: 'React', link: '/guide/components-react' }
      ]
    },
    {
      text: 'Toolkits',
      collapsible: true,
      items: [
        { text: 'Build Table Schema', link: '/guide/build-table-schema' },
        { text: 'Converter', link: '/guide/converter' }
      ]
    }
  ]
}