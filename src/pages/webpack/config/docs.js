export default [
  ['历史', 'preface', () => import('../docs/preface.md')],
  ['模块化', 'modulesDesc', () => import('../docs/modulesDesc.md')],
  ['简介', 'synopsis', () => import('../docs/synopsis.md')],
  ['核心概念', 'concept', () => import('../docs/concept.md')],
  ['打包 js', 'js', () => import('../docs/js.md')],
  ['提取公共代码', 'common', () => import('../docs/common.md')],
  ['代码分割和懒加载', 'split', () => import('../docs/split.md')],
  ['处理 CSS', 'css', () => import('../docs/css.md')],
  ['处理 html', 'html', () => import('../docs/html.md')],
  ['搭建本地开发环境', 'devEnv', () => import('../docs/devEnv.md')]
];
