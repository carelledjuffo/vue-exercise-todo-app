import Vue from 'vue'
import App from './App.vue'
//import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue, {IconsPlugin} from "bootstrap-vue";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
