import "core-js/stable";
import Vue from "vue";
import "./plugins/axios";
import App from "./App";
import router from "./router";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { store } from "@/store/index";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import api from "@/services/api";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib";

Vue.use(VueTelInputVuetify, {
  vuetify,
});

//Vue.prototype.$http = api;

// const access_token = localStorage.getItem("access_token");

// if (access_token) {
//   Vue.prototype.$http.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
// }

//Vue.prototype.$apiAddress = "http://127.0.0.1:8000";
// Vue.use(store);
(Vue.prototype.$requiredRules = [(v) => !!v || "This Field is Required"]),
  (Vue.config.performance = true);
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  vuetify,
  store,
  components: {
    App,
  },
  created() {
    this.$store.dispatch("user/validate");
  },
});
