import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";

import "bulma";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    getRandomColor() {
      const letters = "0123456789abcdef";
      let color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    throttle(func, limit) {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
  }
});

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");

if (module.hot) {
  module.hot.accept(["./locales/ru", "./locales/en"], function() {
    i18n.setLocaleMessage("ru", require("./locales/ru").default);
    i18n.setLocaleMessage("en", require("./locales/en").default);
  });
}
