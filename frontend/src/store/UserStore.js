import api from "../services/api";
export default {
  namespaced: true,
  state: {
    access: localStorage.getItem("access") || null,
    refresh: localStorage.getItem("refresh") || null,
    username: "",
    authenticated: false,
  },
  actions: {
    login({ commit, dispatch }, { phone, password }) {
      return api
        .post("/token/", { phone: phone, password: password })
        .then((res) => {
          const { access, refresh } = res.data;
          commit("loadTokens", { access, refresh });
        })
        .then(() => dispatch("validate"))
        .catch((err) => alert(err));
      // .then(() => {
      //     const { access, refresh } = this.state;
      //     localStorage.setItem("auth", JSON.stringify({ access, refresh }));
      // })
      // .catch((err) => ;
    },

    validate({ state, commit, dispatch }) {
      return api
        .post("users/verify/", null, {
          headers: { Authorization: `Bearer ${state.access}` },
        })
        .then((res) => commit("loadUser", { username: res.data.username }))
        .then(() => (api.defaults.headers["Authorization"] = `Bearer ${state.access}`))
        .then(() => {
          dispatch("assignments/get", null, { root: true });
          dispatch("exams/get", null, { root: true });
          dispatch("notes/get", null, { root: true });
          dispatch("classes/get", null, { root: true });
          dispatch("meetings/get", null, { root: true });
        })
        .catch(() => {
          alert("Could not Login");
          return dispatch("user/logout");
        });
    },
    logout({ commit }) {
      commit("clear");
    },
  },
  mutations: {
    loadTokens(state, { access, refresh }) {
      state.access = access;
      state.refresh = refresh;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
    },
    loadUser(state, { username }) {
      state.username = username;
      state.authenticated = true;
    },
    clear(state) {
      state.username = "";
      state.access = "";
      state.refresh = "";
      state.authenticated = false;
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      api.defaults.headers["Authorization"] = "";
    },
  },
  getters: {
    getAccessToken: (state) => state.access,
    getRefreshToken: (state) => state.refresh,
    getUsername: (state) => state.username,
    userIsAuthenticated: (state) => state.authenticated,
  },
};
