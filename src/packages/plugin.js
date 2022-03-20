import Toast from './toast.vue'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOption) {
      if (currentToast) {
        currentToast.close()
        // 当手动关闭时，没将 currentToast设置为 null
      }
      currentToast = createdToast({
        Vue,
        message,
        propsData: toastOption,
        onClose: () => {
          currentToast = null
        },
      })
    }
  },
}

function createdToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}

// 重构下面代码，抽取一个方法。
// export default {
//   install(Vue, options) {
//     Vue.prototype.$toast = function(message, toastOption) {
//       console.log(message)
//       // 方式1
//       // alert(message) 控制不了样式

//       // 方式2
//       // 用js 创建div 加入到页面中，没用到 vue组件，不可取。

//       // 方式3 引入 toast，Vue.extend() 返回组件实例，可以调用
//       let Constructor = Vue.extend(Toast)
//       // 构造器传参
//       let toast = new Constructor({
//         propsData: toastOption,
//       })
//       // 先将信息放入 插槽中
//       toast.$slots.default = [message]
//       // 挂载
//       toast.$mount()
//       document.body.appendChild(toast.$el)
//     }
//   },
// }
