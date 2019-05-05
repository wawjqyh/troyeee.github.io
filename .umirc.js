import hljs from 'highlight.js';

export default {
  treeShaking: true,
  disableCSSModules: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: { webpackChunkName: true },
        title: 'note',
        dll: false,

        routes: {
          exclude: [/components\//, /config\//, /docs\//]
        }
      }
    ]
  ],

  copy: [
    {
      from: '404',
      to: ''
    }
  ],

  urlLoaderExcludes: [/\.md$/],
  chainWebpack(config) {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html')
      .loader('html-loader')
      .end()
      .use('markdown')
      .loader('markdown-loader')
      .options({
        highlight(code) {
          return hljs.highlightAuto(code).value;
        }
      });
  }
};
