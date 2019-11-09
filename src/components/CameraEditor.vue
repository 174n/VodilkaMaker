<template>
  <div class="editor">
    <div class="columns">
      <div class="column is-two-thirds">
        <RegionCapturer
          :regions="cams"
          :filename="filename"
          :ratio="ratio"
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
                  v-model.number="ratio"
                />
              </div>
            </div>
            <div class="buttons">
              <a class="button is-primary is-fullwidth" @click="addCam"
                ><p>{{ $t("editor.addCamera") }}</p></a
              >
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
                  <button class="button" @click="rmCam(i)">✖️</button>
                </div>
                <div class="inline">
                  <input class="input" type="number" v-model="cam.x" />
                  <input class="input" type="number" v-model="cam.y" />
                  <input class="input" type="number" v-model="cam.size" />
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
      ratio: 0.7,
      cams: [],
      activeCam: false
    };
  },
  methods: {
    addCam() {
      if (!this.$refs.capturer || !this.$refs.capturer.image) return;

      this.cams.push({
        title: `${this.$t("editor.cam")}_${this.cams.length}`,
        x: 0,
        y: 0,
        size: 400,
        color: this.getRandomColor()
      });
    },
    rmCam(i) {
      this.cams.splice(i, 1);
    },
    changeColor(i) {
      this.cams[i].color = this.getRandomColor();
    }
  },
  computed: {
    code() {
      let crops = this.cams.map(
        (cam, i) =>
          `[0:v]crop=${cam.size}:${Math.floor(cam.size * this.ratio)}:${
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

.inline {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  > * {
    margin-right: 8px;
  }
  > :last-child {
    margin-right: 0;
  }
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
