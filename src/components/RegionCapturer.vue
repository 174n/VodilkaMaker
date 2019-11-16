<template>
  <div class="canvas" ref="canvas">
    <img ref="image" :src="editor.image" v-if="editor.image" />
    <div class="select-file" v-else>
      <div class="field">
        <div class="control">
          <input type="file" ref="imagefile" />
        </div>
      </div>
      {{ fileInstructions }}
      <code>ffmpeg -i "{{ filename }}" -ss 00:00:10 -vframes 1 out.png</code>
    </div>
    <div
      :class="['region', { grabbing: parseInt(activeRegion) === i }]"
      v-for="(reg, i) in regions"
      :key="i"
      ref="regions"
      :data-id="i"
      :style="{
        width: `${reg.size}px`,
        height: `${reg.size * ratio}px`,
        top: `${reg.y}px`,
        left: `${reg.x}px`,
        backgroundColor: reg.color
      }"
    >
      {{ reg.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    regions: Array,
    ratio: Number,
    filename: String,
    fileInstructions: String
  },
  computed: {
    editor() {
      return this.$deepModel("editor");
    }
  },
  data() {
    return {
      activeRegion: false
    };
  },
  mounted() {
    this.$refs.imagefile.addEventListener("change", async () => {
      const file = this.$refs.imagefile.files[0];
      this.editor.image = await this.toBase64(file);
    });

    this.$refs.canvas.addEventListener("mouseup", () => {
      this.activeRegion = false;
    });
    this.$refs.canvas.addEventListener(
      "mousemove",
      this.throttle(e => {
        if (!this.activeRegion) return;

        e.preventDefault();
        const reg = this.regions[this.activeRegion];
        reg.x = e.clientX - reg.initialX;
        reg.y = e.clientY - reg.initialY;
        const image = this.$refs.image;
        reg.x =
          reg.x >= 0
            ? reg.x
            : reg.x - reg.size >= image.width
            ? image.width
            : 0;
        reg.y = reg.y >= 0 ? reg.y : 0;
      }, 30)
    );
  },
  watch: {
    regions() {
      this.$nextTick(() => {
        const elem = this.$refs.regions.slice(-1)[0];
        if (elem) {
          elem.addEventListener("mousedown", e => {
            const reg = this.regions[e.target.getAttribute("data-id")];
            reg.initialX = e.clientX - reg.x;
            reg.initialY = e.clientY - reg.y;
            this.activeRegion = e.target.getAttribute("data-id");
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.canvas {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: auto;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.5);
  img {
    width: initial;
    max-width: initial;
    height: initial;
    pointer-events: none;
  }
}

.select-file {
  padding: 20px;
}

.region {
  position: absolute;
  transition: none;
  z-index: 9999;
  opacity: 0.5;
  font-size: 3em;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: grab;
  &.grabbing {
    cursor: grabbing;
  }
}
</style>
