<template>
    <div id="nav" class="bg-black h-16 w-full flex" >
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
