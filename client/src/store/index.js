import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authToken: '',
  },
  mutations: {
    inputToken(state, payload) {
      console.log('now calling from inputToken mutation');
      console.log(state.authToken);
      state.authToken = payload;
      console.log(state.authToken);
    },
    removeToken(state) {
      state.authToken = '';
    },
  },
  getters: {
    getToken(state) {
      return state.authToken;
    },
  },
  actions: {
  },
  modules: {
  },
});
