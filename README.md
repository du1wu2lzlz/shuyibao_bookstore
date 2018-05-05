##  项目地址
    www.atschool.com.cn
    
## 二手书交易系统前端

> 二手书交易系统前端

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
## 二手书交易系统后台

#### 环境配置

1. 安装JDK8（推荐8u111及以上），环境变量配置

2. 安装Tomcat（7.0.53），用exe安装则不需要进行环境变量配置

3. 安装maven（3.3.9），环境变量配置。从coding网站下载配置文件，修改本地库路径

4. 项目导入eclipse，导入安装的JRE系统库以及Tomcat库

5.
    修改tomcat的配置文件：server.xml，修改段应该位于该文件的最下方，
    
    修改前：
    ```
        <Context docBase="reusebook" path="/reusebook" reloadable="true" source="org.eclipse.jst.j2ee.server:reusebook"/>
    ```
    修改后：    
    ```
        <Context docBase="reusebook" debug="0" path="" reloadable="true" source="org.eclipse.jst.j2ee.server:reusebook"/>
    ```

    需要注意的是，修改的属性只有docBase，path，之后增加debug属性，别的属性维持原状，比如source以各自的为准
 6. 数据库配置
    reusebook/Java Resources/src/main/resources/conf/constant.properties


## 前端引入jquery 
```
首先在package.json里的dependencies加入"jquery" : "^2.2.3"，
然后npm install或者用cnpm install --registry=http://registry.npm.taobao.org安装的会更快一点  

在webpack.base.conf.js里加入   

var webpack = require("webpack")  

在module.exports的最后加入

plugins: [
            new webpack.optimize.CommonsChunkPlugin('common.js'),
            new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
            })
          ]

然后一定要重新npm  run dev  

在main.js 引入就ok了import $ from 'jquery'  
```
+ 引入element-UI
[这里](https://jingyan.baidu.com/article/a17d5285c85acb8098c8f204.html)

## 更新记录
```js
+ 18/5/5 更新
  本次更新:  
    1. 首页布局UI优化 间距问题 双滚动条等问题修复
    2. 登录页面修改 引入element-UI 新增登录提示信息
    3. 注册页面修改 验证加入 提示信息增加
    4. 验证码点击刷新 
    5. 新增 jQuery 库 和 element-UI 库 支持全局使用 
```
## 说明
   上线时候记得更改url路径  
   预览账号(买家): 
   du1wu2lzlz   
   602602  
   超级管理员和卖家账号就不公布了  
   
   
