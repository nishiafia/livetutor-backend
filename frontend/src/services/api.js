import Axios from "axios";
import Vue from "vue";

const access_token = localStorage.getItem("access");

const base_url = "http://localhost:8000/api/";
let config = {
  baseURL: base_url,
};

if (access_token) {
  config.headers = {
    Authorization: `Bearer ${access_token}`,
  };
}

const api = Axios.create(config);
api.defaults.xsrfHeaderName = "X-CSRFTOKEN";
api.defaults.xsrfCookieName = "csrftoken";
Vue.prototype.$api = api;
export default api;
