# 安装测试工具

```js
npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies
```

## 运行

"test": "parcel build test/* --no-cache --no-minify && karma start --single-run"

先parcel 打包编译到 dist文件夹中
再运行 karma ，它有相应的配置文件，指定对应的文件，和运行的浏览器。再执行测试文件

## 单元测试代码如何写

mocha : 提供描述行为格式的测试库 describe(it())
chai ： 提供断言语句语法,期待 expect().to.eq()
simon： 提供间谍库，返回监控函数 let cb = simon.fake()

## 使用 travis ci 平台自动运行测试

* 增加 .travis.yml 配置文件，
* 在 travis 平台绑定 github 账号，就可以持续集成测试项目了。
<https://travis-ci.org/github/jsliweijun/learn-vue-ui>

## 发布项目

* 修改 package.json 版本号 0.0.1
* 创建程序入口文件 index.js , 写要导出的组件
* 在 npmjs 注册账号
* 切换源  nrm use npm / nrm use taobao
* 登录用户 npm adduser  zhuanzhuyihao
* 发布项目 npm publish

## 发布的 0.0.1 版本有问题，index.js 是export语法，用户不能直接使用 learn-vue-ui 库

npx parcel build index.js --no-cache --no-minify 将文件重新编译一下  ,输出三个文件  dist/ xxxx.js xxx.css ,将 js文件 设置到 package.js 的main 中。
