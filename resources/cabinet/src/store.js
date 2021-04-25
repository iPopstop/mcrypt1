import Vue from 'vue'
import Vuex from 'vuex'
import modules from './store/'

Vue.use(Vuex)


const store = new Vuex.Store({
  modules,
})

window.store = store
export default store