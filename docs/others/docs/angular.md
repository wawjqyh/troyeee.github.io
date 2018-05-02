# angular

## mvc

![](images/1_1.png)

### controller

controller使用过程中的注意点

* 不要试图复用controller,一个控制器一般只负责一小快视图
* 不要在controller中操作DOM，这个不是控制器的职责
* 不要在controller中里面做数据格式化，ng有很好用的表单控件
* 不要在controller里面做数据过滤操作，ng有$filter服务
* 一般来说，controller是不会互相调用的，控制器之间的交互会通过事件进行