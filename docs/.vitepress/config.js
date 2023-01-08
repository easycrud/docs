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
      items: [
        { text: 'What Is and Is Not?', link: '/guide/what-easycrud-is-and-is-not' },
        { text: 'JSON Table Schema', link: '/guide/json-table-schema' }
      ]
    },
    {
      text: 'Server',
      items: [
        { text: 'RESTful API', link: '/guide/restful-api' },
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
      text: 'Components',
      items: [
        { text: 'React', link: '/guide/components-react' }
      ]
    },
    {
      text: 'Toolkits',
      items: [
        { text: 'Build Table Schema', link: '/guide/build-table-schema' },
        { text: 'Converter', link: '/guide/converter' }
      ]
    }
  ]
}