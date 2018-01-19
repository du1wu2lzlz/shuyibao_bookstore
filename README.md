# 二手书交易系统前端

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

+ 引入jquery 
  首先在package.json里的dependencies加入"jquery" : "^2.2.3"，然后npm install或者用cnpm install --registry=http://registry.npm.taobao.org安装的会更快一点

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

+ 引入element-UI
[这里](https://jingyan.baidu.com/article/a17d5285c85acb8098c8f204.html)
