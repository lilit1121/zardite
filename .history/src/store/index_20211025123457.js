import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

ex new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})