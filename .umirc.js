import hljs from 'highlight.js';

export default {
  treeShaking: true,
  disableCSSModules: true,

  antd: false,
  dva: false,
  dynamicImport: {},
  title: 'note',
  dll: false,

  copy: [
    {
      from: '404',
      to: ''
    }
  ],

  urlLoaderExcludes: [/\.md$/],
  chainWebpack(config) {
    config.output.chunkFilename('[name].js');

    config.optimization.runtimeChunk(false).splitChunks({
      chunks: 'async',
      cacheGroups: {
        vendors: false,
        default: false
      }
    });

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
