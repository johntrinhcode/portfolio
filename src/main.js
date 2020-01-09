import Vue from "vue";
import VueRouter from "vue-router";
import VueLazyLoad from "vue-lazyload";
import { library } from "@fortawesome/fontawesome-svg-core";
import { VLazyImagePlugin } from "v-lazy-image";

import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import routes from "./routes";

import "@/assets/css/tailwind.css";

library.add(faInstagram);
library.add(faFacebook);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VLazyImagePlugin);
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  loading: "./assets/spinner.gif",
  attempt: 1
});

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      };
    }
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
