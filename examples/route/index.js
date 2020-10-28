import Vue from 'vue'
import VueRouter from 'vue-router'
import testIcon from '../view/testIcon.vue'
import TestButton from '../view/testButton.vue'
import TestGrid from '../view/testGrid.vue'
import TestInput from '../view/testInput.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/testButton',
      component: TestButton,
    },
    {
      path: '/testButton',
      component: TestButton,
    },
    {
      path: '/testInput',
      component: TestInput,
    },
    {
      path: '/testGrid',
      component: TestGrid,
    },
  ],
})
