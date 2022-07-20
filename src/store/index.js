import Vue from "vue";
import Vuex from "vuex";
import Home from "./modules/home";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    Home
  }
});

export default store;
