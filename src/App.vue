<template>
  <div id="app">
        <NavBar/>
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
