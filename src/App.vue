<template>
  <div id="app">
    <!-- nav bar -->
    <!-- <NavBar id='nav'/> -->

    <!-- extra stuff -->
    <!--
    <p class="font-head text-6xl">Title</p>
    <p class="font-body">big boi test</p>
        -->
    <div class="flex flex-wrap w-full h-screen font-head text-xs">
      <div class="w-3/5 h-screen p-12">
        <div id="links">
          <div id="link" class="inline p-2">
          <router-link to="/" id='home-link' >HOME</router-link>
          </div>
          <div id="link" class="inline p-2">
          <router-link to="/code" id='code-link'>CODE</router-link>
          </div>
          <div id="link" class="inline p-2">
          <router-link to="/photo" id='photo-link'>PHOTO</router-link>
          </div>
          <div id="link" class="inline p-2">
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
