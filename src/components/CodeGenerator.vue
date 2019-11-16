<template>
  <div class="content">
    <code v-if="cams.length > 0">{{ code }}</code>
    <div class="notification is-warning" v-else>{{ $t("code.noCode") }}</div>
    <pre><code>{{ info || "" }}</code></pre>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {
      info: {}
    };
  },
  computed: {
    ...mapState(["cams", "camsFilename", "camsRatio", "settings"]),
    code() {
      if (!this.info.adjustedCams) return false;
      let crops = this.info.adjustedCams.map(
        (c, i) =>
          `[0:v]crop=${c.size}:${Math.floor(c.size * this.camsRatio)}:${c.x}:${
            c.y
          },scale=${Math.floor(c.t_width.slice(0, -2))}x${Math.floor(
            c.t_height.slice(0, -2)
          )}[out${i + 1}]`
      );
      let placements = this.info.adjustedCams.map(
        (c, i) =>
          `[${i === 0 ? "1:v" : "tmp" + i}][out${i +
            1}] overlay=shortest=1:x=${c.t_x.slice(0, -2)}:y=${c.t_y.slice(
            0,
            -2
          )}[tmp${i + 1}]`
      );
      // let removeBlink = this.settings.removeBlackBlink
      //   ? " -vf blackframe=0,metadata=select:key=lavfi.blackframe.pblack:value=50:function=less -vsync cfr"
      //   : "";
      // let outs = this.cams.map(
      //   (cam, i) =>
      //     `-map [out${i + 1}]${removeBlink} -map 0:a "${cam.title}.mp4"`
      // );
      let outs = ["-c:v libx264 output.mp4"];
      return `
        ffmpeg -i "${this.camsFilename}" -i "${
        this.info.filename
      }" -i "borders.png"
          -filter_complex "${crops.join(";")};${placements.join(";")};[tmp${
        this.info.adjustedCams.length
      }][2:v]overlay=0:0" ${outs.join(" ")}`;
    }
  },
  methods: {
    tabChanged() {
      EventBus.$emit("need-info-from-camera-placer");
    },
    getPlacerInfo(info) {
      this.info = info;
    }
  },
  mounted() {
    EventBus.$on("tab-changed", this.tabChanged);
    EventBus.$on("camera-placer-answers", this.getPlacerInfo);
  },
  beforeDestroy() {
    EventBus.$off("tab-changed", this.tabChanged);
    EventBus.$off("camera-placer-answers", this.getPlacerInfo);
  }
};
</script>

<style scoped lang="scss"></style>
