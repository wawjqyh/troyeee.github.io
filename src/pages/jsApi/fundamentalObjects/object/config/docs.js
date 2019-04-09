export default [
  '属性',
  ['Object.length', 'length', () => import('../docs/length.md')],
  '方法',
  ['Object.assign()', 'assign', () => import('../docs/assign.md')],
  ['Object.create()', 'create', () => import('../docs/create.md')],
  ['Object.defineProperty()', 'defineProperty', () => import('../docs/defineProperty.md')],
  ['Object.defineProperties()', 'defineProperties', () => import('../docs/defineProperties.md')],
  [
    'Object.getOwnPropertyDescriptor()',
    'getOwnPropertyDescriptor',
    () => import('../docs/getOwnPropertyDescriptor.md')
  ],
  [
    'Object.getOwnPropertyNames()',
    'getOwnPropertyNames',
    () => import('../docs/getOwnPropertyNames.md')
  ],
  [
    'Object.getOwnPropertySymbols()',
    'getOwnPropertySymbols',
    () => import('../docs/getOwnPropertySymbols.md')
  ],
  ['Object.getPrototypeOf()', 'getPrototypeOf', () => import('../docs/getPrototypeOf.md')],
  ['Object.setPrototypeOf()', 'setPrototypeOf', () => import('../docs/setPrototypeOf.md')],
  ['Object.is()', 'is', () => import('../docs/is.md')],
  ['Object.isExtensible()', 'isExtensible', () => import('../docs/isExtensible.md')],
  ['Object.freeze()', 'freeze', () => import('../docs/freeze.md')],
  ['Object.isFrozen()', 'isFrozen', () => import('../docs/isFrozen.md')],
  ['Object.seal()', 'seal', () => import('../docs/seal.md')],
  ['Object.isSealed()', 'isSealed', () => import('../docs/isSealed.md')],
  ['Object.keys()', 'keys', () => import('../docs/keys.md')],
  ['Object.preventExtensions()', 'preventExtensions', () => import('../docs/preventExtensions.md')],
  ['Object.entries() [草案]', 'entries', ''],
  ['Object.values() [草案]', 'values', ''],
  '实例属性',
  ['Object.prototype.constructor', 'constructor', () => import('../docs/constructor.md')],
  ['Object.prototype.__proto__ [非标准]', '', ''],
  ['Object.prototype.__noSuchMethod__ [非标准]', '', ''],
  ['Object.prototype.__count__ [已废弃]', '', ''],
  ['Object.prototype.__parent__ [已废弃]', '', ''],
  '实例方法',
  [
    'Object.prototype.hasOwnProperty()',
    'hasOwnProperty',
    () => import('../docs/hasOwnProperty.md')
  ],
  ['Object.prototype.isPrototypeOf()', 'isPrototypeOf', () => import('../docs/isPrototypeOf.md')],
  [
    'Object.prototype.propertyIsEnumerable()',
    'propertyIsEnumerable',
    () => import('../docs/propertyIsEnumerable.md')
  ],
  [
    'Object.prototype.toLocaleString()',
    'toLocaleString',
    () => import('../docs/toLocaleString.md')
  ],
  ['Object.prototype.toString()', 'toString', () => import('../docs/toString.md')],
  ['Object.prototype.valueOf()', 'valueOf', () => import('../docs/valueOf.md')],
  ['Object.prototype.toSource() [非标准]', '', ''],
  ['Object.prototype.unwatch() [非标准]', '', ''],
  ['Object.prototype.watch() [非标准]', '', ''],
  ['Object.prototype.__defineGetter__() [已废弃]', '', ''],
  ['Object.prototype.__defineSetter__() [已废弃]', '', ''],
  ['Object.prototype.__lookupGetter__() [已废弃]', '', ''],
  ['Object.prototype.__lookupSetter__() [已废弃]', '', ''],
  ['Object.prototype.eval() [已废弃]', '', '']
];
