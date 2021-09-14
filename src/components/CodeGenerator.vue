<template>
  <div class="content">
    <div class="code" v-if="editor.cams.length > 0">
      <div class="code-block">
        <code>{{ code }}</code>
      </div>
      <button class="button is-primary" @click="codeToClipboard">
        {{ $t("copyToClipboard") }}
      </button>
    </div>
    <div class="notification is-warning" v-else>{{ $t("code.noCode") }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["editor", "placer", "settings"]),
    placedCams() {
      return this.$store.getters.placedCams;
    },
    code() {
      if (!this.placedCams) return false;
      const introIn = this.settings.intro.enable
        ? `-i "${this.settings.intro.filename}"`
        : "";
      const introOut = this.settings.intro.enable
        ? `[pre];[3:v][pre]concat=n=2:v=1`
        : "";
      const crops = this.placedCams.map(
        (c, i) =>
          `[0:v]crop=${c.size}:${Math.floor(c.size * this.editor.ratio)}:${
            c.x
          }:${c.y},scale=${Math.floor(c.t_width.slice(0, -2))}x${Math.floor(
            c.t_height.slice(0, -2)
          )}[out${i + 1}]`
      );
      const placements = this.placedCams.map(
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
      const outs = ["-c:v libx264 output.mp4"];
      const cutMain = this.settings.cut.main;
      const cutCams = this.settings.cut.cams;
      const mainTimes =
        (cutMain.start ? `-ss ${cutMain.start}` : "") +
        (cutMain.end ? ` -to ${cutMain.end}` : "");
      const camsTimes =
        (cutCams.start ? `-ss ${cutCams.start}` : "") +
        (cutCams.end ? ` -to ${cutCams.end}` : "");
      const inputs = `${camsTimes} -i "${this.editor.filename}" ${mainTimes} -i "${this.placer.filename}" -i "${this.settings.overlay.filename}" ${introIn}`;
      return `ffmpeg ${inputs}
          -filter_complex "${crops.join(";")};${placements.join(";")};[tmp${
        this.placedCams.length
      }][2:v]overlay=0:0${introOut}" ${outs.join(" ")}`;
    }
  },
  methods: {
    codeToClipboard() {
      this.copyToClipboard(this.code);
    }
  }
};
</script>

<style scoped lang="scss">
.code-block {
  margin-bottom: 15px;
}
</style>
