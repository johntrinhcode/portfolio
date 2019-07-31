<template>
  <div id="app">
        <NavBar id='nav'/>
        <p class="font-head text-6xl">Title</p>
        <p class="font-body">Testing, testing, 1 2 3 ... Whoa</p>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
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
