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
