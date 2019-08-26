<template>
  <div id="app">
    <!-- nav bar -->
    <!-- <NavBar id='nav'/> -->

    <!-- extra stuff -->
    <!--
    <p class="font-head text-6xl">Title</p>
    <p class="font-body">big boi test</p>
        -->

    <!-- router links -->
    <router-link to="/" id='home-link'>HOME</router-link>
    <router-link to="/code" id='code-link'>CODE</router-link>
    <router-link to="/photo" id='photo-link'>PHOTO</router-link>
    <router-link to="/about" id='about-link'>ABOUT</router-link>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
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
