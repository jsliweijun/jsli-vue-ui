# 搭建项目，开发 button 组件

初始化仓库

* 声明仓库版权 MIT（最宽松，最友好的）
* 安装 vue
* 新建 .gitignore 文件
* 开发 button 组件
  * 使用css变量让用户可以自定义组件样式
  * 使用Vue.componment() 定义一个组件
* 开发 button.js 组件的问题，js，css，template 书写的位置很乱，需要像vue一样单文件管理。
  * 安装 parcel 后重新处理文件，构建工具
  * button 组件的设计搞 <https://www.yuque.com/u29422/gulu/197281?artboard_type=artboard&from=&view>=

```js
npm i -D parcel-bundler  // 当一个包是给开发者使用时，就加 -D
```

* 重新组织项目结构 src 文件夹， app.js 为项目入口。
  * 新建 button.vue ,抽取成单文件组件方式。使用 parcel 编译

运行parcel

```js
./node_modules/.bin/parcel index.html  --no-cache
npx parcel index.html  // 在当前目录下找 parcel 运行
```
