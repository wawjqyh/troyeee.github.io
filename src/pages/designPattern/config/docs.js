export default [
  [
    'js面向对象',
    'objectOriented',
    () => import(/* webpackChunkName: "articles/designPattern.1" */ '../docs/objectOriented.md')
  ],
  [
    '工厂模式',
    'factory',
    () => import(/* webpackChunkName: "articles/designPattern.2" */ '../docs/factory.md')
  ],
  [
    '单例模式',
    'singleton',
    () => import(/* webpackChunkName: "articles/designPattern.3" */ '../docs/singleton.md')
  ],
  [
    '适配器模式',
    'adapter',
    () => import(/* webpackChunkName: "articles/designPattern.4" */ '../docs/adapter.md')
  ],
  [
    '装饰器模式',
    'xxx',
    () => import(/* webpackChunkName: "articles/designPattern.5" */ '../docs/decorator.md')
  ]
];
