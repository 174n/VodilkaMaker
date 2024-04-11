<template>
  <div class="editor">
    <div v-if="editor.image" class="columns">
      <div class="column is-two-thirds">
        <RegionCapturer
          :regions="editor.cams"
          :filename="editor.filename"
          :ratio="editor.ratio"
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
              <label class="label">{{ $t("editor.ratio") }}</label>
              <div class="control inline">
                <input
                  class="input"
                  type="number"
                  step="0.1"
                  v-model.number="editor.ratio"
                />
              </div>
            </div>
            <div class="buttons">
              <a
                class="button is-primary is-fullwidth"
                v-if="editor.image"
                @click="addCam({})"
              >
                <p>{{ $t("editor.addCamera") }}</p>
              </a>
            </div>
            <div class="cameras">
              <div class="camera" v-for="(cam, i) in editor.cams" :key="i">
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
                  <!-- <span class="order">{{ i }}</span> -->
                  <input
                    class="setting-input input"
                    type="number"
                    v-model="cam.order"
                  />
                  <input
                    class="setting-input input"
                    type="number"
                    v-model="cam.x"
                  />
                  <input
                    class="setting-input input"
                    type="number"
                    v-model="cam.y"
                  />
                  <input
                    class="setting-input input"
                    type="number"
                    v-model="cam.size"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article class="message" v-if="false">
          <div class="message-header">
            <p>{{ $t("editor.main.title") }}</p>
          </div>
          <div class="message-body">
            <div class="field">
              <label class="label">{{ $t("editor.main.title") }}</label>
              <div class="control inline">
                <label class="checkbox">
                  <input type="checkbox" v-model="editor.main.enable" />
                  {{ $t("editor.main.enable") }}
                </label>
              </div>
            </div>
            <div class="field" v-if="editor.main.enable">
              <label class="label">{{ $t("editor.main.width") }}</label>
              <div class="control inline">
                <input
                  class="input"
                  type="number"
                  step="0.1"
                  v-model.number="editor.main.width"
                />
              </div>
            </div>
            <div class="field" v-if="editor.main.enable">
              <label class="label">{{ $t("editor.main.height") }}</label>
              <div class="control inline">
                <input
                  class="input"
                  type="number"
                  step="0.1"
                  v-model.number="editor.main.height"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div v-else class="notification is-warning">{{ $t("editor.noImage") }}</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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
    editor() {
      return this.$deepModel("editor");
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
.setting-input {
  width: 32%;
}

.order {
  border-radius: 2px;
  min-width: 35px;
  text-align: center;
  background-color: #ccc;
  border-radius: 3px;
  padding: 5px;
  font-size: 1.1em;
  font-weight: 600;
}
</style>
