import Vue from "vue";
import Vuex from "vuex";
import globalMixin from "./globalMixin";
import i18n from "./i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  // State
  state: {
    cams: [],
    camsFilename: "filename.mp4",
    camsRatio: 0.7,
    allowAddCameras: false,
    settings: {
      removeBlackBlink: false
    }
  },

  // Mutations
  mutations: {
    addCam(state, { title = false, x = 0, y = 0, size = 400, color }) {
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
    },
    changeCamsFilename(state, filename) {
      state.camsFilename = filename;
    },
    changeCamsRatio(state, ratio) {
      state.camsRatio = ratio;
    },
    allowAddCams(state) {
      state.allowAddCameras = true;
    }
  },

  // Actions
  actions: {}
});
