import Vue from "vue";
import Vuex from "vuex";
import globalMixin from "./globalMixin";
import i18n from "./i18n";
import * as VueDeepSet from "vue-deepset";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: {
      removeBlackBlink: false,
      overlay: {
        filename: "borders.png",
        image: false
      }
    },
    editor: {
      cams: [],
      filename: "filename.mp4",
      image: false,
      ratio: 0.7
    },
    placer: {
      filename: "main_cam.mp4",
      canvWidth: 1920,
      canvHeight: 1080,
      canvasScale: 0.1,
      size: 400,
      padding: 60
    }
  },

  mutations: {
    VUEX_DEEP_SET: VueDeepSet.VUEX_DEEP_SET,
    addCam(state, { title = false, x = 0, y = 0, size = 400, color }) {
      state.editor.cams.push({
        title: title || `${i18n.t("editor.cam")}_${state.editor.cams.length}`,
        x,
        y,
        size,
        color: color || globalMixin.methods.getRandomColor(),
        listener: false
      });
    },
    rmCam(state, i) {
      state.editor.cams.splice(i, 1);
    },
    colorizeCam(state, i) {
      state.editor.cams[i].color = globalMixin.methods.getRandomColor();
    },
    importState(state, imported) {
      Object.keys(imported).forEach(k => {
        state[k] = imported[k];
      });
    }
  },

  actions: {},

  getters: {
    placedCams: state => {
      const lscc = Math.round(state.editor.cams.length / 2); // left side cams count
      const width = state.placer.size;
      const height = state.placer.size * state.editor.ratio;
      const innerPadding =
        (state.placer.canvHeight - lscc * height - 2 * state.placer.padding) /
        (lscc - 1);
      return state.editor.cams.map((c, i) => {
        c.t_width = `${width}px`;
        c.t_height = `${height}px`;
        c.t_x = `${
          i >= lscc
            ? state.placer.canvWidth - width - state.placer.padding
            : state.placer.padding
        }px`;
        c.t_y = `${
          i >= lscc
            ? (i - lscc) * height +
              innerPadding * (i - lscc) +
              state.placer.padding
            : i * height + innerPadding * i + state.placer.padding
        }px`;
        return c;
      });
    },
    exportState: state => {
      return JSON.stringify(state, null, 2);
    }
  }
});
