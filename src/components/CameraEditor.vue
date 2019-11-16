<template>
  <div class="editor">
    <div class="columns">
      <div class="column is-two-thirds">
        <RegionCapturer
          :regions="cams"
          :filename="camsFilename"
          :ratio="camsRatio"
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
              <label class="label">{{ $t("editor.filename") }}</label>
              <div class="control inline">
                <input class="input" type="text" v-model="camsFilename" />
              </div>
            </div>

            <div class="field">
              <label class="label">{{ $t("editor.ratio") }}</label>
              <div class="control inline">
                <input
                  class="input"
                  type="number"
                  step="0.1"
                  v-model.number="camsRatio"
                />
              </div>
            </div>
            <div class="buttons">
              <a
                class="button is-primary is-fullwidth"
                v-if="allowAddCameras"
                @click="addCam({})"
              >
                <p>{{ $t("editor.addCamera") }}</p>
              </a>
            </div>
            <div class="cameras">
              <div class="camera" v-for="(cam, i) in cams" :key="i">
                <div class="inline">
                  <span
                    class="bd-color"
                    :style="{ background: cam.color }"
                    @click="colorizeCam(i)"
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
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import RegionCapturer from "@/components/RegionCapturer";

export default {
  components: {
    RegionCapturer
  },
  data() {
    return {
      activeCam: false
    };
  },
  methods: {
    ...mapMutations(["addCam", "rmCam", "colorizeCam"])
  },
  computed: {
    ...mapState(["cams", "allowAddCameras"]),
    camsFilename: {
      get() {
        return this.$store.state.camsFilename;
      },
      set(filename) {
        this.$store.commit("changeCamsFilename", filename);
      }
    },
    camsRatio: {
      get() {
        return this.$store.state.camsRatio;
      },
      set(filename) {
        this.$store.commit("changeCamsRatio", filename);
      }
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
    height: 24px;
    min-width: 24px;
  }
}
</style>
