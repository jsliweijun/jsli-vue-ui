import Button from './button/button.vue';
import Icom from './icon/icon.vue';

function install(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Icom.name, Icom);
}

export default { install };
