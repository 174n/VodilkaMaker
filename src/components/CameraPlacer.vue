<template>
  <div class="editor">
    <div class="columns">
      <div class="column is-two-thirds">
        <RegionCapturer
          :regions="cams"
          :filename="filename"
          :ratio="ratio"
          placer
          ref="capturer"
        />
      </div>
      <div class="column">
        <article class="message">
          <div class="message-header">
            <p>{{ $t("editor.cameras") }}</p>
          </div>
          <div class="message-body">
            <div class="field">
              <div class="control inline">
                <input class="input" type="text" v-model="filename" />
                <input
                  class="input"
                  type="number"
                  step="0.1"
                  v-model.number="size"
                />
              </div>
            </div>
            <div class="cameras">
              <div class="camera" v-for="(cam, i) in cams" :key="i">
                <div class="inline">
                  <span
                    class="bd-color"
                    :style="{ background: cam.color }"
                    @click="changeColor(i)"
                  ></span>
                  <input class="input" type="text" v-model="cam.title" />
                </div>
                <div class="inline">
                  <input class="input" type="number" v-model="cam.x" />
                  <input class="input" type="number" v-model="cam.y" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <code v-if="cams.length > 0">
      {{ code }}
    </code>
  </div>
</template>

<script>
import RegionCapturer from "@/components/RegionCapturer";

export default {
  components: {
    RegionCapturer
  },
  data() {
    return {
      filename: "filename.mp4",
      activeCam: false,
      size: 400,
      ratio: 0.7
    };
  },
  methods: {
    changeColor(i) {
      this.cams[i].color = this.getRandomColor();
    }
  },
  computed: {
    cams() {
      return this.$store.state.cams;
    },
    code() {
      let crops = this.cams.map(
        (cam, i) =>
          `[0:v]crop=${this.size}:${Math.floor(this.size * this.ratio)}:${
            cam.x
          }:${cam.y}[out${i + 1}]`
      );
      let outs = this.cams.map(
        (cam, i) => `-map [out${i + 1}] -map 0:a "${cam.title}.mp4"`
      );
      return `ffmpeg -i "${this.filename}" -filter_complex "${crops.join(
        ";"
      )}" ${outs.join(" ")}`;
    }
  }
};
</script>

<style scoped lang="scss">
.editor {
  padding: 1rem 0;
}

.camera {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;

  .bd-color {
    cursor: pointer;
    border-radius: 2px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    display: inline-block;
    float: left;
    height: 24px;
    min-width: 24px;
  }
}
</style>
