import Vue from "vue";
import Vuex from "vuex";
import Home from "./modules/home";
import Mine from './modules/mine'

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    Home,
    Mine
  }
});

export default store;
