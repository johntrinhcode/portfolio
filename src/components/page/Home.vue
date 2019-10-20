<template>
    <div id="home" class="flex content-center flex-wrap w-full" >
        <p class="font-head text-6xl text-black font-medium">HOME</p>
    </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    changeImage: Function
  },
};
</script>

<style scoped>
.font-body {
  font-family: "Object Sans";
}
</style>
