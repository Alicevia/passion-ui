import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import markdownItContainer from 'markdown-it-container'
let config =  defineConfig({
  lang: 'zh-CN',
  base:'/',
  title: 'Passion UI',
  description: 'Passion UI是一个基于vue3开发的UI组件库,只尝试实现一些组件的功能,不推荐直接大范围应用在实际项目',
  themeConfig: {
    siteTitle: 'Passion UI',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '组件', link: '/components/basic/button/' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],
    sidebar:{
      '/components/': [
        {
          text: 'basic',
          items: [
            { text: 'Button', link: '/components/basic/button/' },
            { text: 'Input', link:'/components/basic/input/' }
          ]
        },
        {
          text: 'dataDisplay',
          items: [
            { text: 'Button', link: '/components/basic/button/' },
            { text: 'Input', link:'/components/basic/input/' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: 'Passion UI', link: '/components/basic/button/' },
          ]
        },
        {
          text: '快速上手',
          items: [
            { text: '安装', link: '/components/basic/button/' },
            { text: '按需引入', link:'/components/basic/input/' }
          ]
        }
      ]
    },
    // sidebar:[
    //   {
    //     text: 'basic',
    //     items: [
    //       { text: 'Button', link: '/button/' },
    //       { text: 'Input', link:'/input/' }
    //     ]
    //   }
    // ]
  },
  markdown: {
    config: (md) => {
      md.use(markdownItContainer, 'demo', {
        validate: (params) => {
          console.log('cs',params)
          return params.trim().match(/^demo\s+(.*)$/);
        },
        render(tokens, idx) {
          let propsAry = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
          console.log('token',idx)
          if (tokens[idx].nesting === 1) {
            let component =propsAry && propsAry[1];
            let content = tokens[idx + 2].content;
            console.log(component,content);
            // opening tag
            return '<details>\n';
       
          } else {
            // closing tag
            return '</details>\n';
          }
        },
      })
    },
  },
  vite:{
    resolve:{
      alias:{
        'passion-ui': resolve('../packages/passion-ui/packages/components'),
        '@': resolve('./docs'),
      }
    }
  }
})

export default config