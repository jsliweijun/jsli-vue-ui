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

* 添加按钮文字，使用slot，放在button中
* 添加icon， 使用iconfont网站的，下载下来，或者用网上的，symbol类型的，生成url，网页引用即可  `<script src="//at.alicdn.com/t/font_2021584_g2avp8xlmzb.js"></script>`
* 用户传 icon 参数,显示图标， 用户传iconPostion,设置icon的左右位置。使用flex布局，可以用到 order排序。
* validator 进行设置 props 的参数校验。
* 优化代码

```js
  if (value !== "left" && value !== "right") {
            return false;
          } else {
            return true;
          }
  简化上面的 4 行代码
  return value === 'left' || value === 'right'
```

* 新建 icon 组件
* 增加 loading 效果，解决 loading 图标与 其他图标同时存在的问题。传递事件，设置loading状态值。
* 开发 g-button-group ,解决按钮之间边框问题，2条边框合并成1条，使用margin-left：-1，再hover状态设置z-index。
  * 解决 g-button-group 使用时，如果没按要求书写里面的元素标签，会出现样式问题，使用组件的声明周期钩子 mounted(){} 进行检查它的子元素 this.$el.children ,给警告。

* 单元测试
  * 使用 chai 库， 使用方式：应该，期望，断言 . `npm i -D chai`
  * BDD 行为驱动开发
  * TDD 测试驱动开发
  * Assert 断言， 主观认为，如果对了，就不报错。如果错了，就断言失败。
