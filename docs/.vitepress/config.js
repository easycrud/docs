import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'EASYCRUD',
  description: 'Faster the Development of CRUD Web Applications.',
  head: [
    ['link', { rel: "shortcut icon", href: "/logo.png"}],
  ],
  themeConfig: {
    logo: '/logo.png',
  }
})