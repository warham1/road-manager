import Vue from "vue";
import App from "./App";
import router from "./router/index";
import axios from "axios";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
}).$mount("#app");
