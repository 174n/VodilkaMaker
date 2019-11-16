<template>
  <div id="app">
    <section class="hero is-primary is-medium">
      <div class="hero-head">
        <nav class="navbar is-primary">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <strong>{{ $t("title") }}</strong>
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div class="navbar-menu">
              <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">{{ $t("lang") }}</a>

                  <div class="navbar-dropdown is-right">
                    <a class="navbar-item" @click="changeLocale('ru')">
                      <span class="flag flag-ru"></span> Русский
                    </a>
                    <a class="navbar-item" @click="changeLocale('en')">
                      <span class="flag flag-us"></span> English
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">{{ $t("title") }}</h1>
          <h2 class="subtitle">{{ $t("subtitle") }}</h2>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <li v-for="header in headers" :key="header.slug">
                <a :href="`#${header.slug}`" v-smooth-scroll>{{
                  header.title
                }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title" id="crop-out-cameras">{{ $t("editor.title") }}</h1>
        <h2 class="subtitle">{{ $t("editor.subtitle") }}</h2>
        <CameraEditor />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title" id="place-cameras">{{ $t("placer.title") }}</h1>
        <h2 class="subtitle">{{ $t("placer.subtitle") }}</h2>
        <CameraPlacer />
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>{{ $t("title") }}</strong
          >. The
          <a href="https://github.com/Rundik/VodilkaMaker">source code</a> is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import CameraEditor from "@/components/CameraEditor";
import CameraPlacer from "@/components/CameraPlacer";
import "@/styles/flags.css";

export default {
  name: "app",
  components: {
    CameraEditor,
    CameraPlacer
  },
  data() {
    return {
      headers: []
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.initHeaders();
    },
    initHeaders() {
      this.$nextTick(() => {
        this.headers = [...document.querySelectorAll(".section h1")].map(h => ({
          title: h.innerText,
          slug: h.getAttribute("id")
        }));
      });
    }
  },
  created() {
    this.initHeaders();
  }
};
</script>

<style lang="scss">
.navbar-dropdown .navbar-item {
  color: #333 !important;
  > span {
    margin-right: 10px;
  }
}

.footer {
  margin-top: 4rem;
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
</style>
