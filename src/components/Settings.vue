<template>
  <div class="settings">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-3">
        <article class="tile is-child box">
          <p class="title">{{ $t("settings.importExport.title") }}</p>
          <p class="subtitle">{{ $t("settings.importExport.subtitle") }}</p>
          <div class="content">
            <nav class="level">
              <div class="level-item">
                <div class="file">
                  <label class="file-label">
                    <input class="file-input" ref="importFile" type="file" />
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
      </div>
      <div class="tile is-parent is-5">
        <article class="tile is-child box">
          <p class="title">{{ $t("settings.overlay.title") }}</p>
          <p class="subtitle">{{ $t("settings.overlay.subtitle") }}</p>
          <div class="content">
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
            <div class="field">
              <label class="label">{{ $t("settings.overlay.file") }}</label>
              <label class="file-label" v-if="!settings.overlay.image">
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
                v-else
              />
            </div>
          </div>
        </article>
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
}
</style>
