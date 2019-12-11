<template>
  <div id="links" class="fixed flex h-16 z-50 w-full shadow bg-white">
    <router-link to="/" id='home-link' >
                <img src="../assets/logo.jpg" class="w-16">
    </router-link>
    <div id="links-text" class="pt-6 pl-6">
      <div id="code-link" class="link inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':(this.$route.path === '/code') }">
      <router-link to="/code" id='code-link'>CODE</router-link>
      </div>
      <div id="photo-link" class="link inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':(this.$route.path === '/photo') }">
      <router-link to="/photo" id='photo-link'>PHOTOGRAPHY</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './page/Home.vue';

export default {
  name: 'app',
  data() {
    return {
      routeIsHome: this.$route.path === '/',
      routeIsCode: this.$route.path === '/code',
      routeIsPhoto: this.$route.path === '/photo',
    }
  },
  components: {
    Home,
  },
};
</script>

<style scoped>

</style>
