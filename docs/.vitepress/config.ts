import { defineConfig } from 'vitepress'

export default defineConfig({
   lang: 'zh-CN',
   title: 'nooo-ui-component',

   description:
      'An easy-to-use headless-ui component distribution center, designed to provide dynamic access to nooo-ui',

   lastUpdated: true,
   cleanUrls: true,

   head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

   markdown: {
      headers: {
         level: [0, 0],
      },
   },

   themeConfig: {
      nav: nav(),
      sidebar: {
         '/': sidebar(),
      },

      editLink: {
         pattern:
            'https://github.com/tolerance-go/nooo-ui-component/edit/main/docs/:path',
         text: 'Edit this page on GitHub',
      },

      socialLinks: [
         {
            icon: 'github',
            link: 'https://github.com/tolerance-go/nooo-ui-component',
         },
      ],

      footer: {
         message: 'Released under the MIT License.',
         copyright: 'Copyright © 2022-present Yarnb',
      },

      // algolia: {
      //    appId: '8J64VVRP8K',
      //    apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      //    indexName: 'vitepress',
      // },
   },
})

function nav() {
   return [
      {
         text: 'NOOO-UI',
         link: 'https://www.noooui.com',
      },
   ]
}

function sidebar() {
   return [
      {
         text: 'react-components',
         collapsed: false,
         items: [{ text: 'picker', link: '/components/picker' }],
      },
   ]
}
