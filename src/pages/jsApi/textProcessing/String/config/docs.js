export default [
  ['String', 'String', () => import('../docs/String.md')],

  '属性',
  ['String.prototype', 'prototype', () => import('../docs/prototype.md')],

  '方法',
  ['String.fromCharCode()', 'fromCharCode', () => import('../docs/fromCharCode.md')],
  ['String.fromCodePoint() [es6]', 'fromCodePoint', () => import('../docs/fromCodePoint.md')],
  ['String.raw() [es6]', 'raw', () => import('../docs/raw.md')],

  '实例属性',
  ['String.prototype.constructor', 'constructor', () => import('../docs/constructor.md')],
  ['String.prototype.length', 'length', () => import('../docs/length.md')],

  '实例方法',
  ['charAt()', 'charAt', () => import('../docs/charAt.md')],
  ['charCodeAt()', 'charCodeAt', () => import('../docs/charCodeAt.md')],
  ['codePointAt() [es6]', 'codePointAt', () => import('../docs/codePointAt.md')],
  ['concat()', 'concat', () => import('../docs/concat.md')],
  ['includes() [es6]', 'includes', () => import('../docs/includes.md')],
  ['endsWith() [es6]', 'endsWith', () => import('../docs/endsWith.md')],
  ['indexOf()', 'indexOf', () => import('../docs/indexOf.md')],
  ['lastIndexOf()', 'lastIndexOf', () => import('../docs/lastIndexOf.md')],
  ['localeCompare()', 'localeCompare', () => import('../docs/localeCompare.md')],
  ['match()', 'match', () => import('../docs/match.md')],
  ['normalize() [es6]', 'normalize', () => import('../docs/normalize.md')],
  ['repeat() [es6]', 'repeat', () => import('../docs/repeat.md')],
  ['replace()', 'replace', () => import('../docs/replace.md')],
  ['search()', 'search', () => import('../docs/search.md')],
  ['slice()', 'slice', () => import('../docs/slice.md')],
  ['split()', 'split', () => import('../docs/split.md')],
  ['startsWith() [es6]', 'startsWith', () => import('../docs/startsWith.md')],
  ['substr()', 'substr', () => import('../docs/substr.md')],
  ['substring()', 'substring', () => import('../docs/substring.md')],
  ['toLocaleLowerCase()', 'toLocaleLowerCase', () => import('../docs/toLocaleLowerCase.md')],
  ['toLocaleUpperCase()', 'toLocaleUpperCase', () => import('../docs/toLocaleUpperCase.md')],
  ['toLowerCase()', 'toLowerCase', () => import('../docs/toLowerCase.md')],
  ['toString()', 'toString', () => import('../docs/toString.md')],
  ['toUpperCase()', 'toUpperCase', () => import('../docs/toUpperCase.md')],
  ['trim()', 'trim', () => import('../docs/trim.md')],
  ['valueOf()', 'valueOf', () => import('../docs/valueOf.md')],
  ['toSource() [非标准]', 'toSource', () => import('../docs/toSource.md')],
  ['quote() [非标准]', 'quote', () => import('../docs/quote.md')],
  ['trimLeft() [非标准]', 'trimLeft', () => import('../docs/trimLeft.md')],
  ['trimRight() [非标准]', 'trimRight', () => import('../docs/trimRight.md')]
];
