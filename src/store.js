import Vue from "vue";
import Vuex from "vuex";
import globalMixin from "./globalMixin";
import i18n from "./i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  // State
  state: {
    cams: []
  },

  // Mutations
  mutations: {
    addCam(state, { title, x = 0, y = 0, size = 400, color }) {
      state.cams.push({
        title: title || `${i18n.t("editor.cam")}_${state.cams.length}`,
        x,
        y,
        size,
        color: color || globalMixin.methods.getRandomColor(),
        listener: false
      });
    },
    rmCam(state, i) {
      state.cams.splice(i, 1);
    },
    colorizeCam(state, i) {
      state.cams[i].color = globalMixin.methods.getRandomColor();
    }
  },

  // Actions
  actions: {}
});
