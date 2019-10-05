import Vue from 'vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue';
import routes from './routes';

import '@/assets/css/tailwind.css';


library.add(faInstagram);
library.add(faFacebook);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
