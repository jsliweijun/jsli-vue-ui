import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGrounp from './button-group'

Vue.component('g-button', Button) // 注册为一个组件
Vue.component('g-icon', Icon) // 注册为一个组件
Vue.component('g-button-group', ButtonGrounp) // 注册为一个组件

new Vue({
  el: '#app',
  data: {
    loading1: false,
  },
})

// 单元测试
import chai from 'chai'
import chaiSpies from 'chai-spies'
chai.use(chaiSpies)
const expect = chai.expect
{
  // 测试 icon 参数
  // console.log(Button) // 是一个对象
  // const buttonConstructor = Vue.extend(Button) // 转换成一个构造函数
  // const button = new buttonConstructor({
  //   propsData: {
  //     icon: 'loading',
  //   },
  // })
  // button.$mount('#test')
  // let useElement = button.$el.querySelector('use')
  // let href = useElement.getAttribute('xlink:href')
  // console.log(useElement)
  // expect(href).to.eq('loading') // 报错，我的期望与实际代码不同
  // expect(href).to.eq('#i-loading') // 不报错
}

{
  // 测试 loading 参数
  // console.log(Button) // 是一个对象
  // const buttonConstructor = Vue.extend(Button) // 转换成一个构造函数
  // const button = new buttonConstructor({
  //   propsData: {
  //     icon: 'shezhe',
  //     loading: true,
  //   },
  // })
  // button.$mount('#test1')
  // let useElement = button.$el.querySelector('use')
  // let href = useElement.getAttribute('xlink:href')
  // console.log(useElement)
  //  expect(href).to.eq('loading') // 报错，我的期望与实际代码不同
  //  expect(href).to.eq('#i-loading') // 不报错
}

{
  // 测试 iconPosition 参数
  const div = document.createElement('div')
  document.body.appendChild(div)
  const buttonConstructor = Vue.extend(Button) // 转换成一个构造函数
  const button = new buttonConstructor({
    propsData: {
      icon: 'shezhe',
      iconPosition: 'right',
    },
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  //  console.log(order)
  expect(order).to.eq('2')
  button.$el.remove() // 元素删掉
  button.$destroy() // 对象删掉
}

{
  // 测试 click 事件,使用 mock
  const buttonConstructor = Vue.extend(Button) // 转换成一个构造函数
  const gbutton = new buttonConstructor({
    propsData: {
      icon: 'shezhi',
    },
  })
  gbutton.$mount()
  // gbutton.$on('click', function() {
  //   console.log(1)
  //   // 断言
  //   expect(1).to.eq(2) // 这种测试方式是错误的。
  // })

  let spy = chai.spy(function() {})
  gbutton.$on('click', spy)

  // 执行这个按钮,点击了
  let button = gbutton.$el
  button.click()
  // 监听回调函数
  expect(spy).to.have.been.called()
}
