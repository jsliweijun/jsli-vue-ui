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
