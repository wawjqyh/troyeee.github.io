export default [
  ['Function', 'Function', () => import('../docs/Function.md')],

  '属性',
  ['Function.length', 'length', () => import('../docs/length.md')],
  ['Function.prototype.constructor', '', ''],
  ['Function.arguments [已废弃]', '', ''],
  ['Function.arity [已删除]', '', () => ''],
  ['Function.caller [非标准]', '', () => ''],
  ['Function.name [非标准]', '', () => ''],
  ['Function.displayName [非标准]', '', ''],

  '方法',
  ['Function.prototype.call()', 'call', () => import('../docs/length.md')],
  ['Function.prototype.apply()', 'apply', () => import('../docs/length.md')],
  ['Function.prototype.bind()', 'bind', () => import('../docs/length.md')],
  ['Function.prototype.toString()', 'toString', () => import('../docs/length.md')],
  ['Function.prototype.isGenerator() [非标准]', '', () => import('../docs/length.md')],
  ['Function.prototype.toSource() [非标准]', '', () => import('../docs/length.md')]
];
