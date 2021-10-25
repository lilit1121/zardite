import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    horizonPositionScroll: "0",
  },
  getters: {
    GET_HORIZON_POSITION_SCROLL: (state) => state.horizonPositionScroll,
  },
  mutations: {
    changeHorizonPositionScroll(state, data) {
      state.horizonPositionScroll = data;
    },
  },
});