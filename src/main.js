import Vue from "vue";
import App from "./App";
import router from "./router/index";
import axios from "axios";
import vuetify from "./plugins/vuetify";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
axios.defaults.baseURL = "https://rm-graphql-server.herokuapp.com";

new Vue({
	render: (h) => h(App),
	vuetify,
	router,
}).$mount("#app");
