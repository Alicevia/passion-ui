import { defineConfig } from 'vitepress'
import {demoBlockPlugin} from 'vitepress-theme-demoblock'
export default defineConfig({
  lang: 'zh-CN',
  base:'/',
  title: 'LemonUI',
  description: 'LemonUI是一个基于vue3开发的UI组件库,只尝试实现一些组件的功能,不推荐直接大范围应用在实际项目',
  themeConfig: {
    siteTitle: 'LemonUI',
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
})
