<template>
  <div class="placer">
    <div class="columns" v-if="editor.cams && editor.cams.length > 0">
      <div class="column is-two-thirds" ref="wrapper">
        <div
          class="canvas-wrapper"
          :style="{ height: `${placer.canvasScale * placer.canvHeight}px` }"
        >
          <div
            class="canvas"
            :style="{
              width: `${placer.canvWidth}px`,
              height: `${placer.canvHeight}px`,
              transform: `scale(${placer.canvasScale})`
            }"
          >
            <div
              class="overlay"
              :style="{
                backgroundImage: settings.overlay.image
                  ? `url(${settings.overlay.image})`
                  : ''
              }"
            ></div>
            <div
              class="cam"
              v-for="(cam, i) in placedCams"
              :key="i"
              :style="{
                width: cam.t_width,
                height: cam.t_height,
                left: cam.t_x,
                top: cam.t_y
              }"
            >
              {{ cam.title }}
            </div>
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
              <label class="label">{{ $t("placer.canvWidth") }}</label>
              <div class="control inline">
                <input
                  class="input"
                  type="number"
                  step="10"
                  v-model.number="placer.canvWidth"
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
                  v-model.number="placer.canvHeight"
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
                  v-model.number="placer.size"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">{{ $t("placer.padding") }}</label>
              <div class="control inline">
                <input
                  class="input"
                  type="number"
                  v-model.number="placer.padding"
                />
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
import { EventBus } from "@/event-bus";

export default {
  computed: {
    editor() {
      return this.$store.state.editor;
    },
    settings() {
      return this.$store.state.settings;
    },
    placedCams() {
      return this.$store.getters.placedCams;
    },
    placer() {
      return this.$deepModel("placer");
    },
    adjustedCams() {
      const cams = this.editor.cams;
      const lscc = Math.round(cams.length / 2); // left side cams count
      const width = this.placer.size;
      const height = this.placer.size * this.editor.ratio;
      const innerPadding =
        (this.placer.canvHeight - lscc * height - 2 * this.placer.padding) /
        (lscc - 1);
      return cams.map((c, i) => {
        c.t_width = `${width}px`;
        c.t_height = `${height}px`;
        c.t_x = `${
          i >= lscc
            ? this.placer.canvWidth - width - this.placer.padding
            : this.placer.padding
        }px`;
        c.t_y = `${
          i >= lscc
            ? (i - lscc) * height +
              innerPadding * (i - lscc) +
              this.placer.padding
            : i * height + innerPadding * i + this.placer.padding
        }px`;
        return c;
      });
    }
  },
  methods: {
    async setCanvasScale() {
      await this.$nextTick();
      if (!this.$refs.wrapper) return;
      let width = this.$refs.wrapper.getBoundingClientRect().width - 24; // 24 = 12 * 2  (padding)
      this.placer.canvasScale = width / this.placer.canvWidth;
    }
  },
  mounted() {
    this.setCanvasScale();
    EventBus.$on("tab-changed", this.setCanvasScale);
    window.addEventListener("resize", this.setCanvasScale);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setCanvasScale);
    EventBus.$off("tab-changed", this.setCanvasScale);
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
  .cam {
    background-color: #ccc;
    position: absolute;
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
}
</style>
