import hljs from 'highlight.js';

export default {
  treeShaking: true,
  disableCSSModules: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: { webpackChunkName: true },
        title: 'react',
        dll: false,

        routes: {
          exclude: [/components\//, /config\//, /docs\//]
        }
      }
    ]
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
