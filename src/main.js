import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import UI from './packages';

Vue.use(UI);

new Vue({
    render: (h) => h(App)
}).$mount('#app');
