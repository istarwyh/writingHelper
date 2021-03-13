
官方入门[^Seleminm中文文档] + 其他 [^其他入门]

[^其他入门]:[其他入门](https://www.jianshu.com/p/3829a9cc2d93)

[^Seleminm中文文档]:[Seleminm中文文档](https://wizardforcel.gitbooks.io/selenium-doc/content/official-site/selenium-web-driver.html)

### 1. 用Java还是python?

[孤独的Coder](https://www.zhihu.com/question/273732815/answer/1118828684):
爬虫就是去访问互联网数据并且收集好的一个过程:

- 底层无外乎就是利用http/https请求+解析html页面,传输层提供的tcp套接字
- Java也有socket编程，但是java没有封装各种解析http协议的工具，就算有也很原始比如`httpclient`还是其他公司二次封装的不是oracle的jdk自带，这就导致了爬回来的数据有大量解析和筛选工作要做
- python是因为自带了很多优秀的解析类库而已，程序少编码
### WebDriver和Jsoup都要用
尤其要懂JavaScript操纵`DOM`树的一些知识
#### 1.1. WebDriver原理
1. 对于每一条Selenium脚本，一个http请求会被创建并且发送给浏览器的驱动
2. 浏览器驱动中包含了一个HTTP Server，用来接收这些http请求
3. HTTP Server接收到请求后根据请求来具体操控对应的浏览器
4. 浏览器执行具体的测试步骤
5. 浏览器将步骤执行结果返回给HTTP Server
6. HTTP Server又将结果返回给Selenium的脚本，如果是错误的http代码我们就会在控制台看到对应的报错信息。

**注意**

As defined in [WebDriver spec](https://www.w3.org/TR/webdriver/#dfn-interactable-element), Selenium WebDriver will only interact with **visible** elements.
#### 1.2. 问题
从WebDriver的定位也可以看出,页面上看不见的元素也是没办法读取或操作那个的,因此也就会有很多其他的问题要解决,简而言之,如果是异步回调要等待,或者是要点击,或者新手便于调试,可尝试WebDriver;

- 如果是要更改DOM属性或webDriver无效,可使用((`JavascriptExecutor`)webDriver)执行js操纵DOM树;
- 如果页面内容必须要交互才能展示,如果是单页应用的(就是内容已经拿过来了),就用`Jsoup`直接扒;
- 如果能找到后端返回json的接口,可以使用`httpClient`直接对接口请求.

**一些问题的链接**

- [选中隐藏的元素](https://www.cnblogs.com/simran/p/9260392.html)
- [selenium模糊匹配控件](https://www.cnblogs.com/chongyou/p/6411231.html)
- [click方法点击无效](https://www.cnblogs.com/mini-monkey/p/12169030.html)
    - the [diffrence](https://stackoverflow.com/questions/49509439/onclick-vs-onfocus-on-input-element/49512400) of them:
    - onClick: This event is fired whenever the user clicks in an object, like a button, an image, an input... After the click, then comes the bubbling.
    - onFocus: This event is fired when an element is selected, it doesn't need to be clicked, it can be done programmatically, calling `.focus()` or using the Tab key, for example. Also, using onfocus instead of onclick, can help to avoid bubbling.
- 怎么去display:none的元素:
    - [selenium：解决页面元素display:none的方法](https://www.cnblogs.com/imyalost/p/8948458.html)
    - [Selenium WebDriver - hidden select and anchor](https://stackoverflow.com/questions/12371228/selenium-webdriver-hidden-select-and-anchor)
    - [Selenium: The element could not be scrolled into view](https://stackoverflow.com/questions/49045221/selenium-the-element-could-not-be-scrolled-into-view)
- [怎么解决javascript(0)](https://www.jianshu.com/p/101c409e228b)
    - 然而如果js不是发请求,直接用Jsoup拿到整个页面就好了!

### 其他

- Controller层一个解析爬好后的贫困县数据聊胜于无:
![](https://gitee.com/istarwyh/images/raw/master/1606473682_20201127181455992_8284.png)
- 看看爬虫真正需要达到的生产力水平(来源HelloGitHub)

>如果给你一台 2C2G 2M 的机器，用来爬 GitHub 的数据。你会爬那些信息，如何设计最大程度的提高数据丰富度和数量，还有服务的稳定性？
>你了解哪些 Python 异步非阻塞的 Web 框架，里面你最喜欢哪个？这个框架遇到频繁的数据库操作，如何保证并发？如果用它实现一个数据可视化的接口（比如某一期月刊中每个项目的点击数）你会怎么设计？
>我们有三台服务器，分别部署了：Web、爬虫、数据库服务，这个时候还有多出一台 1C1G 的内网机器，你会用它来做什么？并说明你的理由。
