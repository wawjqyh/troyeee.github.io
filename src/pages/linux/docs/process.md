# 进程管理

进程是正在执行的一个程序或命令，每一个进程都是一个运行的实体，都有自己的地址空间，并占用一定的系统资源

#### 进程管理

* 判断服务器的健康状态
* 查看系统中的所有进程
* 杀死进程

## 查看所有进程

### ps

```javascript
ps aux          // 查看系统中所有进程，使用BSD操作系统格式
ps -le          // 查看系统中所有进程，使用Linux标准命令格式
```

选项
* `a` 显示一个终端的所有进程，出来会话引线
* `u` 显示进程的归属用户及内存的使用情况
* `x` 显示没有控制终端的进程
* `-l` 长格式显示，显示更加详细的信息
* `-e` 显示所有进程，和-A作用一致

命令输出

* `USER` 该进程是由哪个用户产生的
* `PID` 进程的ID号
* `%CPU` 该进程占用CPU资源的百分比
* `%MEM` 该进程占用物理内存的百分比
* `VSZ` 该进程占用虚拟内存的大小，单位KB
* `RSS` 该进程占用实际物理内存的大小，单位KB
* `TTY` 该进程是在哪个终端中运行的。其中tty1-tty7代表本地控制台终端，tty1-tty6是本地的字符界面终端，tty7是图形终端。pts/0-255代表虚拟终端
* `STAT` 该程状态
    * `R` 运行
    * `S` 睡眠
    * `T` 停止状态
    * `s` 包含子进程
    * `+` 位于后台
* `START` 该进程的启动时间
* `TIME` 该进程占用CPU的运算时间，注意不是系统时间
* `COMMAND` 产生此进程的命令名

### pstree

查看进程树

```
pstree [选项]
```

选项
* `-p` 显示进程的PID
* `-u` 显示进程的所属用户

## 查看系统状态

实时查看系统状态，3秒刷新一次

```
top [选项]
```

选项

* `-d` 秒数，指定top命令每隔几秒更新。默认是3秒
* `-b` 使用批处理模式输出。一般和 "-n" 选项合用
* `-n` 次数，指定top命令执行的次数。一般和 "-b" 选项合用

在top命令的交互模式中可以执行的命令：

* `?或h` 显示交互模式的帮助
* `P` 以CPU使用率排序，默认就是此项
* `M` 以内存使用率排序
* `N` 以PID排序
* `q` 退出top

top命令显示内容

| <div style="width:187px">内容</div> | 说明                                                                                             |
| :---------------------------------- | :----------------------------------------------------------------------------------------------- |
| 12:23:46                            | 系统当前时间                                                                                     |
| up 1 day, 13:32                     | 系统的运行时间，本机已运行1天13小时32分钟                                                        |
| 2 users                             | 当前登录了两个用户                                                                               |
| load average: 0.00 0.00 0.00        | 系统在之前1分钟、5分钟、15分钟的平均负载。一般认为小于1时，负载较小。如果大于1，系统已经超出负荷 |
| Tasks: 95 total                     | 系统中的进程总数                                                                                 |
| 1 running                           | 正在运行的进程数                                                                                 |
| 94 sleeping                         | 睡眠的进程                                                                                       |
| 0 stopped                           | 正在停止的进程                                                                                   |
| 0 zombie                            | 僵尸进程，即卡死的进程                                                                           |
| Cpu(s): 0.1%us                      | 用户欧式占用的CPU百分比                                                                          |
| 0.1%sy                              | 系统模式占用的CPU百分比                                                                          |
| 0.0%ni                              | 改变过优先级的用户进程占用的CPU百分比                                                            |
| 99.7%id                             | 空闲CPU的百分比                                                                                  |
| 0.1%wa                              | 等待输入/输出的进程的占用CPU百分比                                                               |
| 0.0%hi                              | 硬中断请求服务占用的CPU百分比                                                                    |
| 0.1%si                              | 软中断请求服务占用的CPU百分比                                                                    |
| 0.0%st                              | st(steal time)虚拟时间百分比。就是当有虚拟机时，虚拟CPU等待实际CPU的时间百分比                   |
| Mem: 625344k total                  | 物理内存的总量，单位KB                                                                           |
| 57150k used                         | 已经使用的物理内存数量                                                                           |
| 53840k free                         | 空闲的物理内存数量                                                                               |
| 65800k buffers                      | 作为缓冲的内存数量                                                                               |
| Swap: 524280k total                 | 交换分区（虚拟内存）的总大小                                                                     |
| 0k used                             | 已经使用的交互分区的大小                                                                         |
| 524280k free                        | 空闲交换分区的大小                                                                               |
| 409280k cached                      | 作为缓存的交互分区的大小                                                                         |

## 杀死进程

注意：程序都有正常关闭的方式，只有无法正常关闭时才需要杀死进程

### 进程信号

常用进程信号

| 信号代号 | 信号名称 | 说明                                                                                            |
| :------- | :------- | :---------------------------------------------------------------------------------------------- |
| 1        | SIGHUP   | 该信号让进程立即关闭，然后重新读取配置文件后重启                                                |
| 2        | SIGINT   | 程序终止信号，用于终止前台进程。相当于输出 ctrl+c 快捷键                                        |
| 8        | SIGFPE   | 在发生致命的算术运算错误时发出，不仅包括浮点运算错误，还包括溢出及除数为0等其它所有的算术的错误 |
| 9        | SIGKILL  | 用来立即结束程序的运行，本信号不能被阻塞、处理和忽略。一般用于强制终止进程                      |
| 14       | SIGALRM  | 时钟定时信号，计算的是实际的时间或时钟时间，alarm函数使用该信号                                 |
| 15       | SIGTERM  | 正常结束进程的信号，kill 命令的默认信号                                                         |
| 18       | SIGCONT  | 该信号可以让暂停的进程恢复执行，本信号不能被阻断                                                |
| 19       | SIGSTOP  | 该信号可以暂停前台进程，相当于输入ctrl+z快捷键。本信号不能被阻断                                |

### kill

```javascript
kill -l         // 查看可用的进程信号
```

### pkill

按照进程名终止进程

```javascript
pkill [选项] [信号] 进程名
```

选项：

* `-t` 终端号：按照终端号踢出用户

### killall

按照进程名终止进程

```javascript
pkill [选项] [信号] 进程名
```

选项：

* `-i` 交互式，询问是否要杀死某个进程
* `-I` 忽略进程名的大小写

## 按终端号踢出用户

```bash
w
# 使用w命令查询本机已登录的用户

pkill -9 -t pts/1
# 强制杀死从 pts/1 虚拟终端登录的进程
```

## 工作管理

工作管理指的是在单个登录终端中（也就是登录的shell界面中）同时管理多个工作的行为

#### 注意事项

* 当前的登录终端，只能管理当前终端的工作，而不能管理其他登录终端的工作
* 放入后台的命令必须可以持续运行一段时间，这样我们才能捕捉和操作这个工作
* 放入后台执行的命令不能和前台用户有交互或需要前台输入，否则放入后台只能暂停，而不能执行

### 把进程放入后台

```bash
tar -zcf etx.tar.gz/etc &
# 在命令末尾加 `&` 符号，把命令放入后台，并在后台执行

ctrl+z
# 按下ctrl+z快捷键，进程会放在后台并且暂停
```

### 查看后台的进程

```bash
jobs [-l]
```

选项：

 * `-l` 显示工作的PID

 <p class="warning">注： `+` 号代表最近一个放入后台的工作，也是工作恢复是，默认恢复的工作。`-` 号代表倒数第二个放入后台的工作</p>

 ### 将后台暂停的工作恢复到前台

 ```bash
 fg %工作号
 ```

 参数：

 * `%工作号` %号可以省略，但是注意工作号和PID的区别

### 把后台暂停的工作恢复到后台执行

```bash
bg %工作号
```

<p class="warning">注：后台恢复执行的命令，是不能和前台有交互的，否则不能恢复到后台执行</p>