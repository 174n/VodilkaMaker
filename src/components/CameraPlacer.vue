<template>
  <div class="placer">
    <div class="columns" v-if="cams && cams.length > 0">
      <div class="column is-two-thirds" ref="wrapper">
        <div
          class="canvas-wrapper"
          :style="{ height: `${canvasScale * canvHeight}px` }"
        >
          <div
            class="canvas"
            :style="{
              width: `${canvWidth}px`,
              height: `${canvHeight}px`,
              transform: `scale(${canvasScale})`
            }"
          >
            <div
              class="cam"
              v-for="(cam, i) in adjustedCams"
              :key="i"
              :style="{
                width: cam.t_width,
                height: cam.t_height,
                left: cam.t_x,
                top: cam.t_y
              }"
            ></div>
          </div>
        </div>
      </div>
      <div class="column">
        <article class="message">
          <div class="message-header">
            <p>{{ $t("placer.settings") }}</p>
          </div>
          <div class="message-body">
            <div class="field">
              <label class="label">{{ $t("placer.filename") }}</label>
              <div class="control inline">
                <input class="input" type="text" v-model="filename" />
              </div>
            </div>
            <div class="field">
              <label class="label">{{ $t("placer.canvWidth") }}</label>
              <div class="control inline">
                <input
                  class="input"
                  type="number"
                  step="10"
                  v-model.number="canvWidth"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">{{ $t("placer.canvHeight") }}</label>
              <div class="control inline">
                <input
                  class="input"
                  type="number"
                  step="10"
                  v-model.number="canvHeight"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">{{ $t("placer.camSize") }}</label>
              <div class="control inline">
                <input
                  class="input"
                  type="number"
                  step="10"
                  v-model.number="size"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">{{ $t("placer.padding") }}</label>
              <div class="control inline">
                <input class="input" type="number" v-model.number="padding" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="notification is-warning" v-else>
      {{ $t("placer.noCams") }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {
      filename: "main_cam.mp4",
      canvWidth: 1920,
      canvHeight: 1080,
      canvasScale: 0.1,
      size: 400,
      padding: 60
    };
  },
  computed: {
    ...mapState(["cams", "camsRatio", "settings"]),
    adjustedCams() {
      const cams = this.cams;
      const lscc = Math.round(cams.length / 2); // left side cams count
      const width = this.size;
      const height = this.size * this.camsRatio;
      const innerPadding =
        (this.canvHeight - lscc * height - 2 * this.padding) / (lscc - 1);
      return cams.map((c, i) => {
        c.t_width = `${width}px`;
        c.t_height = `${height}px`;
        c.t_x = `${
          i >= lscc ? this.canvWidth - width - this.padding : this.padding
        }px`;
        c.t_y = `${
          i >= lscc
            ? (i - lscc) * height + innerPadding * (i - lscc) + this.padding
            : i * height + innerPadding * i + this.padding
        }px`;
        return c;
      });
    }
  },
  methods: {
    async setCanvasScale() {
      await this.$nextTick();
      if (!this.$refs.wrapper) return;
      let width = this.$refs.wrapper.getBoundingClientRect().width - 24;
      this.canvasScale = width / this.canvWidth;
    },
    answerInformationRequest() {
      EventBus.$emit("camera-placer-answers", {
        adjustedCams: this.adjustedCams,
        size: this.size,
        padding: this.padding,
        filename: this.filename
      });
    }
  },
  mounted() {
    this.setCanvasScale();
    EventBus.$on("tab-changed", this.setCanvasScale);
    EventBus.$on("need-info-from-camera-placer", this.answerInformationRequest);
    window.addEventListener("resize", this.setCanvasScale);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setCanvasScale);
    EventBus.$off("tab-changed", this.setCanvasScale);
    EventBus.$off(
      "need-info-from-camera-placer",
      this.answerInformationRequest
    );
  }
};
</script>

<style scoped lang="scss">
.canvas-wrapper {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}
.canvas {
  background-color: #333;
  position: relative;
  overflow: hidden;
  transform-origin: top left;

  flex: 1;
  .cam {
    background-color: #ccc;
    position: absolute;
  }
}
</style>
