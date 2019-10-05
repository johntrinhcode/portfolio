<template>
  <div id="app">
    <div class="flex flex-wrap w-full h-screen font-head text-xs">
      <div class="w-3/5 h-screen p-12">
        <div id="links">  
          <div id="link" class="inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsHome }" v-on:click="updateCurrentRoute">
          <router-link to="/" id='home-link' >HOME</router-link>
          </div>
          <div id="link" class="inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsCode }" v-on:click="updateCurrentRoute">
          <router-link to="/code" id='code-link'>CODE</router-link>
          </div>
          <div id="link" class="inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsPhoto }" v-on:click="updateCurrentRoute">
          <router-link to="/photo" id='photo-link'>PHOTO</router-link>
          </div>
          <div id="link" class="inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsAbout }" v-on:click="updateCurrentRoute">
          <router-link to="/about" id='about-link'>ABOUT</router-link>
          </div>
        </div>
      <router-view></router-view>

      </div>


      <div class="w-2/5 h-screen">
          <div id="bg-image" style="background-image: url(bg_image.jpg);" class="bg-no-repeat bg-cover w-full h-full"></div>
      </div>
    </div>

      <!-- route outlet -->
      <!-- component matched by the route will render here -->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data: function () {
    return {
      routeIsHome: true,
      routeIsCode: false,
      routeIsPhoto: false,
      routeIsAbout: false,
    }
  },
  methods: {
    checkHome: function () {
      return this.$route.path == "/"
    },
    checkCode: function () {
      return this.$route.path == "/code"
    },
    checkPhoto: function () {
      console.log()
      return this.$route.path == "/photo"
    },
    checkAbout: function () {
      return this.$route.path == "/about"
    },
    updateCurrentRoute: function () {
      this.routeIsHome = this.checkHome()
      this.routeIsCode = this.checkCode()
      this.routeIsPhoto = this.checkPhoto()
      this.routeIsAbout = this.checkAbout()
    }
  }
};
</script>

<style>
* {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
  }
</style>
