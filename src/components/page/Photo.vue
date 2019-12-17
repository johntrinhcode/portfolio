<template>
  <div id="photo" class="content-center w-full h-full overflow-scroll">
    <div class="flex w-full">
      <div v-for="image in row1" v-bind:key="image" class="bg-grey-300 w-full overflow-hidden relative container cursor-pointer">
        <v-lazy-image :src="image" class="photo-object block w-full h-full object-cover" />
        <div v-on:click="changeImage(image)" class="overlay bg-black"></div>
      </div>
    </div>
    <div class="flex w-full">
      <div v-for="image in row2" v-bind:key="image" class="bg-grey-300 w-full overflow-hidden relative container cursor-pointer">
        <v-lazy-image :src="image" class="photo-object block w-full h-full object-cover" />
        <div v-on:click="changeImage(image)" class="overlay bg-black"></div>
      </div>
    </div>
    <div class="flex w-full">
      <div v-for="image in row3" v-bind:key="image" class="bg-grey-300 w-full overflow-hidden relative container cursor-pointer">
        <v-lazy-image :src="image" class="photo-object block w-full h-full object-cover" />
        <div v-on:click="changeImage(image)" class="overlay bg-black"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      row1: [require("@/assets/photography/r1-1.jpg"), require("@/assets/photography/r1-2.jpg"), require("@/assets/photography/r1-3.jpg")],
      row2: [require("@/assets/photography/r2-1.jpg"), require("@/assets/photography/r2-2.jpg"), require("@/assets/photography/r2-3.jpg")],
      row3: [require("@/assets/photography/r3-1.jpg"), require("@/assets/photography/r3-2.jpg"), require("@/assets/photography/r3-3.jpg")]
    };
  },
  props: {
    changeImage: Function
  },
  methods: {}
};
</script>

<style scoped>
/* make scrollbar transparent */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.container:hover .overlay {
  opacity: 0.25;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  opacity: 0;

  height: 100%;
  width: 100%;

  transition: 0.5s ease;
}

.v-lazy-image {
  opacity: 0;
  transition: all 0.7s;
}
.v-lazy-image-loaded {
  opacity: 1;
}

.photo-object {
  height: 500px;
}
</style>
