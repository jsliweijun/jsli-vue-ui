const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在', () => {
    expect(Input).to.be.ok
  })

  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('支持 change 事件', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('change', callback)
      // 触发 input 的 change 事件
      let event = new Event('change')
      //
      // Object.defineProperty(event, 'target', {
      //   value: { value: 'hi' },
      //   enumerable: true,
      // })

      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
      // expect(callback).to.have.been.calledWith('hi')
    })
  })
})
