import Vue from "vue";
import App from "./App";
import router from "./router/index";
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  apolloProvider: createProvider(),
  router
}).$mount("#app");
