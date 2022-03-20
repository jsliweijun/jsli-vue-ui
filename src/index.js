import Button from './packages/button/button.vue';
import Icon from './packages/icon/icon.vue';

function install(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
}

export default { install };
