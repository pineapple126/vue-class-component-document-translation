module.exports = {
  title: 'Vue Class Component 文档翻译',
  description: 'Vue Class Component 的个人学习与记录',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    repo: 'pineapple126/vue-class-component',
    nav: [
      { text: '教程', link: '/' },
      { text: 'API', link: '/api/' },
      {
        text: 'GitHub',
        link: 'https://github.com/pineapple126/vue-class-component-document-translation'
      }
    ],
    sidebar: {
      '/': [
        '',
        'guide/installation',
        {
          title: '综合指南',
          collapsable: false,
          children: [
            'guild/class-component',
            'guild/additional-hooks',
            'guild/custom-decorators',
            'guild/extend-and-mixins',
            'guild/caveats'
          ]
        },
        {
          title: '',
          collapsable: false,
          children: [
            'guild/props-definition',
            'guild/property-type-declaration',
            'guild/refs-type-extension',
            'guild/hooks-auto-complete',
            'guild/annotate-component-type-in-decorator'
          ]
        }
      ],

      '/api': ['']
    }
  }
};
