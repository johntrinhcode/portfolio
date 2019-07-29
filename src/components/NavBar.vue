<template>
    <div id="nav" class="bg-gray-800 h-32 w-full font-sans text-xl text-white font-medium flex" >
        <Home/>
        <Links/>
    </div>
</template>

<script>
import Home from './Home.vue';
import Links from './Links.vue';

export default {
  name: 'app',
  components: {
    Home,
    Links,
  },
};
</script>

<style scoped>

</style>
