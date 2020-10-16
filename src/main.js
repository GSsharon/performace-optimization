import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
require("./utils/rem")
import { isSupportWebp } from "./utils/tools"

Vue.config.productionTip = false
isSupportWebp();
Vue.prototype.isWebp = document.documentElement.dataset.webp ? true : false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
