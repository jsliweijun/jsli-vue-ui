import Vue from 'vue'
import App from './App.vue'
import router from './route'
// import Button from '../src/button.vue'
// import Icon from '../src/icon.vue'
// import ButtonGroup from '../src/button-group.vue'
// import Input from '../src/input.vue'
// import Row from '../src/row.vue'
// import Col from '../src/col.vue'
import { Button, Icon, ButtonGroup, Input, Row, Col } from '../index'
import ToastPlugin from '../src/plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
//Vue.component('g-toast', Toast)
Vue.use(ToastPlugin)

new Vue({
  el: '#app',
  router,
  render: (h) => h(App), // 使用 运行时挂载 APP
})
