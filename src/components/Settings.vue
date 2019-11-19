<template>
  <div class="settings">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical is-3">
        <article class="tile is-child box">
          <p class="title">{{ $t("settings.importExport.title") }}</p>
          <p class="subtitle">{{ $t("settings.importExport.subtitle") }}</p>
          <div class="content">
            <nav class="level">
              <div class="level-item">
                <div class="file">
                  <label class="file-label">
                    <input
                      class="file-input"
                      ref="importFile"
                      type="file"
                      accept=".json,application/json"
                    />
                    <span class="file-cta">
                      <span class="file-label">{{
                        $t("settings.importExport.importBtn")
                      }}</span>
                    </span>
                  </label>
                </div>
              </div>
              <div class="level-item">
                <button class="button is-primary" @click="exportSettings">
                  {{ $t("settings.importExport.exportBtn") }}
                </button>
              </div>
            </nav>
          </div>
        </article>
        <article class="tile is-child box">
          <p class="title">{{ $t("settings.filenames.title") }}</p>
          <p class="subtitle">{{ $t("settings.filenames.subtitle") }}</p>
          <div class="content">
            <div class="field">
              <label class="label">{{ $t("editor.filename") }}</label>
              <div class="control inline">
                <input class="input" type="text" v-model="editor.filename" />
              </div>
            </div>
            <div class="field">
              <label class="label">{{ $t("placer.filename") }}</label>
              <div class="control inline">
                <input class="input" type="text" v-model="placer.filename" />
              </div>
            </div>
            <div class="field">
              <label class="label">{{ $t("settings.overlay.filename") }}</label>
              <div class="control inline">
                <input
                  class="input"
                  type="text"
                  v-model="settings.overlay.filename"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child box">
          <p class="title">{{ $t("settings.overlay.title") }}</p>
          <p class="subtitle">{{ $t("settings.overlay.subtitle") }}</p>
          <div class="content">
            <div class="field">
              <label class="label">{{ $t("settings.overlay.file") }}</label>
              <label class="file-label">
                <input class="file-input" type="file" ref="overlayImage" />
                <span class="file-cta">
                  <span class="file-icon">
                    📁
                  </span>
                  <span class="file-label">
                    {{ $t("chooseFile") }}
                  </span>
                </span>
              </label>
              <img
                class="overlay"
                :src="settings.overlay.image"
                alt="overlay"
                v-if="settings.overlay.image"
              />
            </div>
          </div>
        </article>
        <article class="tile is-child">
          <p class="title">{{ $t("settings.intro.title") }}</p>
          <p class="subtitle">{{ $t("settings.intro.subtitle") }}</p>
          <div class="field">
            <label class="checkbox">
              <input type="checkbox" v-model="settings.into.enable" />
              {{ $t("settings.intro.enable") }}
            </label>
          </div>
          <div class="field" v-if="settings.intro.enable">
            <label class="label">{{ $t("settings.intro.filename") }}</label>
            <div class="control inline">
              <input
                class="input"
                type="text"
                v-model="settings.intro.filename"
              />
            </div>
          </div>
        </article>
        <article class="tile is-child"></article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child box">
          <p class="title">{{ $t("settings.cut.title") }}</p>
          <p class="subtitle">{{ $t("settings.cut.subtitle") }}</p>
          <div class="content">
            <div class="field">
              <label class="label">{{ $t("settings.cut.main") }}</label>
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    v-model="settings.cut.main.start"
                    :placeholder="$t('settings.cut.startTime')"
                  />
                </p>
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    v-model="settings.cut.main.end"
                    :placeholder="$t('settings.cut.endTime')"
                  />
                </p>
              </div>
            </div>
            <div class="field">
              <label class="label">{{ $t("settings.cut.cams") }}</label>
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    v-model="settings.cut.cams.start"
                    :placeholder="$t('settings.cut.startTime')"
                  />
                </p>
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    v-model="settings.cut.cams.end"
                    :placeholder="$t('settings.cut.endTime')"
                  />
                </p>
              </div>
            </div>
          </div>
        </article>
        <article class="tile is-child"></article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    settings() {
      return this.$deepModel("settings");
    },
    exportState() {
      return this.$store.getters.exportState;
    },
    editor() {
      return this.$deepModel("editor");
    },
    placer() {
      return this.$deepModel("placer");
    }
  },
  methods: {
    exportSettings() {
      this.downloadFile(
        `vodilka_maker-${new Date().getTime()}.json`,
        this.exportState
      );
    },
    async importSettings() {
      let settings;
      try {
        const file = this.$refs.importFile.files[0];
        const json = await this.readFileAsync(file);
        settings = JSON.parse(json);
      } catch (err) {
        throw err;
      }
      if (settings) {
        this.$store.commit("importState", settings);
      }
    },
    async addOverlayImage() {
      this.settings.overlay.image = null;
      const file = this.$refs.overlayImage.files[0];
      this.settings.overlay.image = await this.toBase64(file);
    }
  },
  mounted() {
    this.$refs.overlayImage.addEventListener("change", this.addOverlayImage);
    this.$refs.importFile.addEventListener("change", this.importSettings);
  },
  beforeDestroy() {
    this.$refs.overlayImage.removeEventListener("change", this.addOverlayImage);
    this.$refs.importFile.removeEventListener("change", this.importSettings);
  }
};
</script>
<style scoped lang="scss">
.overlay {
  max-width: 100%;
  margin-top: 5px;
}
</style>
