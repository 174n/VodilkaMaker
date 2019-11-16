import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from "./i18n";

import "bulma";

import vueSmoothScroll from "vue2-smooth-scroll";
import globalMixin from "./globalMixin";
Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;

Vue.mixin(globalMixin);

new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");

if (module.hot) {
  module.hot.accept(["./locales/ru", "./locales/en"], function() {
    i18n.setLocaleMessage("ru", require("./locales/ru").default);
    i18n.setLocaleMessage("en", require("./locales/en").default);
  });
}
