import { createStore } from "vuex";
// Vue.use(Vuex);

const state = {
  user: null,
};

// const store = new Vuex.Store({
const general = {
  state,
  getters: {
    user: (state) => {
      return state.user;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
  },
};

const store = createStore({
  modules: {
    general,
  },
});

export default store;
