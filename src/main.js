import Vue from "vue";
import App from "./App.vue";
import "@/assets/tailwind.css";

import router from "@/route";
import { dollarFilter, percentFilter } from '@/filter'

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
