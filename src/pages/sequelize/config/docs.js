export default [
  ['Getting started - 入门', 'getting-started', () => import('../docs/getting-started.md')],
  [
    'Model definition - 模型定义',
    'models-definition',
    () => import('../docs/models-definition.md')
  ],
  ['Model usage - 模型使用', 'models-usage', () => import('../docs/models-usage.md')],
  ['Querying - 查询', 'querying', () => import('../docs/querying.md')],
  ['Instances - 实例', 'instances', () => import('../docs/instances.md')],
  ['Associations - 关联', 'associations', () => import('../docs/associations.md')],
  ['Transactions - 事务', 'transactions', () => import('../docs/transactions.md')],
  ['Scopes - 作用域', 'scopes', () => import('../docs/scopes.md')],
  ['Hooks - 钩子', 'hooks', () => import('../docs/hooks.md')],
  ['Raw queries - 原始查询', 'raw-queries', () => import('../docs/raw-queries.md')],
  ['Migrations - 迁移', 'migrations', () => import('../docs/migrations.md')],
  ['Upgrade to V4 - 升级到 V4', 'upgrade-to-v4', () => import('../docs/upgrade-to-v4.md')],
  ['legacy tables - 使用遗留表', 'legacy', () => import('../docs/legacy.md')]
];
