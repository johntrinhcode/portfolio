import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import '@/assets/css/tailwind.css';

// 1. Define route components.
import Home from './components/page/Home.vue';
import Code from './components/page/Code.vue';
import Photo from './components/page/Photo.vue';
import About from './components/page/About.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
const routes = [
  { path: '/home', component: Home },
  { path: '/code', component: Code },
  { path: '/photo', component: Photo },
  { path: '/about', component: About },
];

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
