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
      let crops = this.placedCams.map(
        (c, i) =>
          `[0:v]crop=${c.size}:${Math.floor(c.size * this.editor.ratio)}:${
            c.x
          }:${c.y},scale=${Math.floor(c.t_width.slice(0, -2))}x${Math.floor(
            c.t_height.slice(0, -2)
          )}[out${i + 1}]`
      );
      let placements = this.placedCams.map(
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
      return `ffmpeg -i "${this.editor.filename}" -i "${
        this.placer.filename
      }" -i "${this.settings.overlay.filename}"
          -filter_complex "${crops.join(";")};${placements.join(";")};[tmp${
        this.placedCams.length
      }][2:v]overlay=0:0" ${outs.join(" ")}`;
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
