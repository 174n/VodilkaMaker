<template>
  <div id="app">
    <section class="hero is-primary">
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
              <li
                v-for="(tab, i) in tabs"
                :key="i"
                :class="{ 'is-active': active === i }"
              >
                <a @click="changeTab(i)" v-smooth-scroll>{{ $t(tab.title) }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <section
      class="section"
      v-for="(tab, i) in tabs"
      :key="i"
      v-show="active === i"
    >
      <div class="container">
        <h1 class="title">{{ $t(tab.title) }}</h1>
        <h2 class="subtitle">{{ $t(tab.subtitle) }}</h2>
        <component v-if="tab.component" :is="tab.component" />
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
import { EventBus } from "@/event-bus.js";
import CameraEditor from "@/components/CameraEditor";
import CameraPlacer from "@/components/CameraPlacer";
import CodeGenerator from "@/components/CodeGenerator";
import "@/styles/flags.css";

export default {
  name: "app",
  components: {
    CameraEditor,
    CameraPlacer,
    CodeGenerator
  },
  data() {
    return {
      tabs: [
        {
          title: "editor.title",
          subtitle: "editor.subtitle",
          component: CameraEditor
        },
        {
          title: "placer.title",
          subtitle: "placer.subtitle",
          component: CameraPlacer
        },
        {
          title: "settings.title",
          subtitle: "settings.subtitle",
          component: false
        },
        {
          title: "code.title",
          subtitle: "code.subtitle",
          component: CodeGenerator
        }
      ],
      active: 0
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
    changeTab(i) {
      EventBus.$emit("tab-changed");
      this.active = i;
    }
  },
  created() {
    const lang = window.navigator.userLanguage || window.navigator.language;
    if (["ru", "en"].indexOf(lang) !== -1) this.changeLocale(lang);
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  padding-bottom: 200px;
  position: relative;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.navbar-dropdown .navbar-item {
  color: #333 !important;
  > span {
    margin-right: 10px;
  }
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
