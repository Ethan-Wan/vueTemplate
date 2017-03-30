# singlePage
> 这是一个基于vue.js的单页面模版 [vue.js官网](https://cn.vuejs.org)

## 安装
将项目工程以zip的形式下载到本地目录下，进入该文件夹

``` c
cd 项目文件夹
```
安装相应的依赖文件

``` c
npm install 或 cnpm install
```
如果你还没安装npm或cnpm，请先去自行安装。 这里提供[淘宝镜像](http://npm.taobao.org/)

## 运行
由于我们是通过vue-cli搭建的项目 所以运行起来很简单，在终端中敲入如下命令，然后你就能在浏览器中查看运行效果了
``` c
cnpm run dev
```
需要注意的是，webpack搭建的服务器端口是8080，有些同学为了在本地测试接口，但是tomcat的默认端口也是8080，所以需要在config文件夹下面的index.js中修改下端口。如下图:

![image](http://note.youdao.com/favicon.ico)

既然讲到了接口测试，那顺便提一下在项目中接口是如何测试的吧。正如上图所示，通过proxyTable的设置，可以很方便的进行代理服务器的配置，即使跨域也能通过设置changeOrigin: true很方便的解决，这一切都是因为在项目中默认安装了[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)这个插件实现的

```
# 打个比方：我有一个接口 http://localhost:8080/getList/123

# 通过上面的配置 实际我们在请求的时候路径只需要写成 /api/getList/123

```

## 工程说明
当你打开工程的时候会看到src中如下目录，没错，项目中功能开发都在src文件夹下进行

![image](http://note.youdao.com/favicon.ico)

1. assets: 资源文件夹，由于是单页应用，所以所有的项目资源都可以放在该文件夹下
2. common：用来放一些通用的东西，比如样式或者一些全局js等
3. filters：用来放通用的过滤器
4. framework：放第三方库的各种资源，现在暂时放了avenxo这个ui模版的资源
5. components：这边主要是项目组件，比如项目的总体模版，header，footer等。
6. pages：主要是根据项目业务划分的组件。
7. router：对路由跳转进行配置

## 打包
打包过程相当简单，只需要敲入如下命令
``` c
cnpm run build
```
然后将生成的dist文件夹扔到服务器中即可
