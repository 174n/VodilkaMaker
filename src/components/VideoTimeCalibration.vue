<template>
  <div class="video-calibration">
    <div class="file">
      <label class="file-label">
        <input class="file-input" type="file" accept="video/*" ref="videfile" />
        <span class="file-cta">
          <span class="file-icon">
            📁
          </span>
          <span class="file-label">
            {{ $t("chooseFile") }}
          </span>
        </span>
      </label>
    </div>
    <video
      class="video"
      controls
      ref="videoElem"
      :src="videoDataURL"
      v-show="videoDataURL"
    ></video>
    <input type="number" :value="currentTime" step="0.1" @input="setTime" />

    {{ percentPlayed }}
  </div>
</template>
<script>
import { throttle } from "@/globalMixin";

export default {
  data() {
    return {
      videoDataURL: false,
      currentTime: 0,
      duration: 0
    };
  },
  computed: {
    percentPlayed() {
      return (
        Math.round((100 / this.duration) * this.currentTime * 100) / 100 || 0
      );
    }
  },
  methods: {
    async videoInputChanged() {
      const file = this.$refs.videfile.files[0];
      this.videoDataURL = await URL.createObjectURL(file);
    },
    updateTime: throttle(function() {
      this.currentTime =
        Math.round(this.$refs.videoElem.currentTime * 100) / 100;
    }, 200),
    setDuration() {
      this.duration = this.$refs.videoElem.duration;
    },
    setTime(e) {
      this.$refs.videoElem.currentTime = e.target.value;
    }
  },
  mounted() {
    this.$refs.videoElem.addEventListener("timeupdate", this.updateTime);
    this.$refs.videoElem.addEventListener("durationchange", this.setDuration);
    this.$refs.videfile.addEventListener("change", this.videoInputChanged);
  },
  beforeDestroy() {
    this.$refs.videoElem.removeEventListener("timeupdate", this.updateTime);
    this.$refs.videoElem.removeEventListener(
      "durationchange",
      this.setDuration
    );
    this.$refs.videfile.removeEventListener("change", this.videoInputChanged);
  }
};
</script>
<style scoped lang="scss">
.video {
  margin: 15px auto;
  width: 70%;
  display: block;
}
</style>
