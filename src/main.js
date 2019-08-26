import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);

// 2. Define some routes

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes,
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
