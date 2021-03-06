import { defineConfig, } from 'vitepress'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import markdownItContainer from 'markdown-it-container'
import { MarkDownTransform } from './plugins/markdownTransform'
import prism from 'prismjs'
import postcss from '../../../packages/passion-ui/postcss.config'

let config =  defineConfig({
  lang: 'zh-CN',
  base:'/passion-ui',
  title: 'Passion UI',
  description: 'Passion UI是一个基于vue3开发的UI组件库,只尝试实现一些组件的功能,不推荐直接大范围应用在实际项目',
  themeConfig: {
    siteTitle: 'Passion UI',
    socialLinks:[
      { icon: 'github', link: 'https://github.com/Alicevia/passion-ui' },
    ],
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '组件', link: '/components/basic/button/' },
    ],
    sidebar:{
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button', link: '/components/basic/button/' },
          ]
        },
        {
          text: '数据录入',
          items: [
            { text: 'Input', link: '/components/dataInput/input/' },
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Message', link: '/components/feedback/message/' },
          ]
        },
        {
          text: '配置组件',
          items: [
            { text: 'ConfigProvider', link: '/components/configure/configProvider/' },
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
          return !!params.trim().match(/^demo\s*(.*)$/);
        },
        render(tokens, idx) {
          let propsAry = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          if (tokens[idx].nesting === 1) {
            let title =propsAry && propsAry[1];
            let componentAddress = tokens[idx + 2]?.content||'';
            let code=''
            if (tokens[idx + 2].type === 'inline') {
             code= readFileSync(
                resolve('./docs/components',`./${componentAddress}.vue`),'utf-8'
              )
            }
            return  `<Demo :demos='demos'
            code="${encodeURIComponent(prism.highlight(code,prism.languages.html, 'html'))}"
          componentAddress="${componentAddress}" >`

          }
          return  `</Demo>`;
        },
      })
    },
  },
  vite:{
    plugins:[MarkDownTransform()],
    resolve:{
      alias:{
        '@': resolve('./docs'),
      }
    },
    css:{
      postcss
    },
    server:{
      fs:{
        allow:['../../../']
      }
    }
  }
})


export default config
