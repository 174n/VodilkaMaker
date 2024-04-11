import Vue from "vue";
import Vuex from "vuex";
import globalMixin from "./globalMixin";
import i18n from "./i18n";
import * as VueDeepSet from "vue-deepset";
import { mergeDeep } from "@/globalMixin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: {
      removeBlackBlink: false,
      overlay: {
        filename: "borders.png",
        image: false
      },
      cut: {
        main: {
          start: "",
          to: ""
        },
        cams: {
          start: "",
          to: ""
        },
        concat: {
          main: [],
          cams: []
        }
      },
      intro: {
        enable: false,
        filename: ""
      }
    },
    editor: {
      cams: [],
      main: {
        enable: false,
        width: 1280,
        height: 720,
        x: 0,
        y: 0
      },
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
      paddingX: 60,
      paddingY: 60
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
        order: state.editor.cams.length,
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
      mergeDeep(state, imported);
    }
  },

  actions: {},

  getters: {
    placedCams: state => {
      const lscc = Math.round(state.editor.cams.length / 2); // left side cams count
      const width = state.placer.size;
      const height = state.placer.size * state.editor.ratio;
      const innerPadding =
        (state.placer.canvHeight - lscc * height - 2 * state.placer.paddingY) /
        ((lscc === 1 ? 2 : lscc) - 1);
      return state.editor.cams
        .sort((a, b) => a.order - b.order)
        .map((c, i) => {
          c.t_width = `${width}px`;
          c.t_height = `${height}px`;
          c.t_x = `${
            i >= lscc
              ? state.placer.canvWidth - width - state.placer.paddingX
              : state.placer.paddingX
          }px`;
          c.t_y = `${
            i >= lscc
              ? (i - lscc) * height +
                innerPadding * (i - lscc) +
                state.placer.paddingY
              : i * height + innerPadding * i + state.placer.paddingY
          }px`;
          return c;
        });
    },
    exportState: state => {
      return JSON.stringify(state, null, 2);
    }
  }
});
