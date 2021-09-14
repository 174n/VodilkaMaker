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
          <div class="badges">
            <a v-for="badge in badges" :key="badge.link" :href="badge.link">
              <img :src="badge.img" :alt="badge.alt" />
            </a>
          </div>
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
          <a href="https://github.com/174n/VodilkaMaker">source code</a> is
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
import Settings from "@/components/Settings";
import CodeGenerator from "@/components/CodeGenerator";
import VideoTimeCalibration from "@/components/VideoTimeCalibration";
import "@/styles/flags.css";

export default {
  name: "app",
  components: {
    CameraEditor,
    CameraPlacer,
    CodeGenerator,
    Settings,
    VideoTimeCalibration
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
        // {
        //   title: "videoTime.title",
        //   subtitle: "videoTime.subtitle",
        //   component: VideoTimeCalibration
        // },
        {
          title: "settings.title",
          subtitle: "settings.subtitle",
          component: Settings
        },
        {
          title: "code.title",
          subtitle: "code.subtitle",
          component: CodeGenerator
        }
      ],
      active: 0,
      badges: [
        {
          img: "http://hits.dwyl.io/174n/VodilkaMaker.svg",
          link: "https://github.com/174n/VodilkaMaker",
          alt: "HitCount"
        },
        {
          img:
            "https://img.shields.io/github/stars/174n/VodilkaMaker.svg?style=flat-square",
          link: "https://github.com/174n/VodilkaMaker/stargazers",
          alt: "GitHub stargazers"
        },
        {
          img:
            "https://img.shields.io/github/issues/174n/VodilkaMaker.svg?style=flat-square",
          link: "https://github.com/174n/VodilkaMaker/issues",
          alt: "GitHub issues"
        },
        {
          img:
            "https://snyk.io/test/github/174n/VodilkaMaker/badge.svg?style=flat-square",
          link: "https://snyk.io/test/github/174n/VodilkaMaker",
          alt: "Known Vulnerabilities"
        },
        {
          img:
            "https://img.shields.io/david/174n/VodilkaMaker?style=flat-square",
          link:
            "https://github.com/174n/VodilkaMaker/blob/master/package.json",
          alt: "Dependencies"
        }
      ]
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

.badges a {
  margin-right: 5px;
  img {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }
  &:last-child {
    margin-right: 0;
  }
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
