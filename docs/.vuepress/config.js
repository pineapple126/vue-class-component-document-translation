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
            'guide/class-component',
            'guide/additional-hooks',
            'guide/custom-decorators',
            'guide/extend-and-mixins',
            'guide/caveats'
          ]
        },
        {
          title: '',
          collapsable: false,
          children: [
            'guide/props-definition',
            'guide/property-type-declaration',
            'guide/refs-type-extension',
            'guide/hooks-auto-complete',
            'guide/annotate-component-type-in-decorator'
          ]
        }
      ],

      '/api': ['']
    }
  }
};
