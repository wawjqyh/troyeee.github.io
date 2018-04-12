# 服务管理

## 运行级别

* `0` 关机
* `1` 单用户模式，可以想象为windows的安全模式，主要用于系统修复
* `2` 不完全的命令行模式，不含NFS服务
* `3` 完全的命令行模式，就是标准字符界面
* `4` 系统保留
* `5` 图形模式
* `6` 重启

```javascript
runlevel            // 查看当前运行级别

init [运行级别]     // 修改运行级别

/etc/inittab        // 修改默认运行级别配置文件
- id:3:initdefault:
```

## 服务分类

* RPM包默认安装的服务
    * 独立的服务（系统大多的服务都是独立服务）
    * 基于xinetd服务（超级守护进程，用于管理一些后台程序）（逐渐淘汰）
* 源码包安装的服务

linux服务分为以上两种服务，不同的安装方式服务管理不一样

## 服务管理

systemctl命令是系统服务管理器指令，它实际上将 service 和 chkconfig 这两个命令组合到一起

| 任务                 | 旧指令                        | 新指令                              |
|:---------------------|:------------------------------|:------------------------------------|
| 使某服务自动启动     | chkconfig --level 3 httpd on  | systemctl enable httpd.service      |
| 使某服务不自动启动   | chkconfig --level 3 httpd off | systemctl disable httpd.service     |
| 检查服务状态         | service httpd status          | systemctl status httpd.service      |
| 显示所有已启动的服务 | chkconfig --list              | systemctl list-units --type=service |
| 启动某服务           | service httpd start           | systemctl start httpd.service       |
| 停止某服务           | service httpd stop            | systemctl stop httpd.service        |
| 重启某服务           | service httpd restart         | systemctl restart httpd.service     |

## 通过端口查看服务

查看正在使用的端口，会列出系统中所有已启动的服务

```javascript
netstat -tlunp
```

* `-t` 列出tcp数据
* `-u` 列出udp数据
* `-l` 列出正在监听的网络服务（不包含已经连接的网络服务）
* `-n` 用端口号来显示服务，而不是用服务名
* `-p` 列出改服务的进程（PID）