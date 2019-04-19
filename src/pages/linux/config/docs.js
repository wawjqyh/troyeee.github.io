export default [
  ['基础知识', 'base', () => import('../docs/base.md')],
  ['目录结构', 'catalog', () => import('../docs/catalog.md')],
  ['文件和目录', 'file', () => import('../docs/file.md')],
  ['文件搜索', 'find', () => import('../docs/find.md')],
  ['关机与重启', 'poweroff', () => import('../docs/poweroff.md')],
  ['挂载', 'mount', () => import('../docs/mount.md')],
  ['帮助命令', 'help', () => import('../docs/help.md')],
  ['vi编辑器', 'vim', () => import('../docs/vim.md')],
  ['用户管理', 'user', () => import('../docs/user.md')],
  ['软件管理', 'software', () => import('../docs/software.md')],
  ['远程登录', 'telnet', () => import('../docs/telnet.md')],
  ['网络配置', 'netConf', () => import('../docs/netConf.md')],
  ['firewall', 'firewall', () => import('../docs/firewall.md')],
  ['shell', 'shell', () => import('../docs/shell.md')],
  ['服务管理', 'service', () => import('../docs/service.md')],
  ['进程管理', 'process', () => import('../docs/process.md')],
  ['mariaDB安装', 'mariadb', () => import('../docs/mariadb.md')]
];
