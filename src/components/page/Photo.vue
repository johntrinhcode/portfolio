<template>
  <div class="w-full h-full bg-black">
    <transition name="fade" mode="out-in" id="photo" class="w-full h-full">
      <div v-if="currentItem == 0" :key="0" class="md:flex md:flex-row w-full h-full">
        <v-lazy-image :src="rows[currentItem][0]" class="h-screen md:w-1/3 object-cover"></v-lazy-image>
        <v-lazy-image :src="rows[currentItem][1]" class="h-screen md:w-1/3 object-cover"></v-lazy-image>
        <v-lazy-image :src="rows[currentItem][2]" class="h-screen md:w-1/3 object-cover"></v-lazy-image>
      </div>
      <div v-else-if="currentItem == 1" :key="1" class="md:flex md:flex-row w-full h-full">
        <v-lazy-image :src="rows[currentItem][0]" class="h-screen md:w-1/3 object-cover"></v-lazy-image>
        <v-lazy-image :src="rows[currentItem][1]" class="h-screen md:w-1/3 object-cover"></v-lazy-image>
        <v-lazy-image :src="rows[currentItem][2]" class="h-screen md:w-1/3 object-cover"></v-lazy-image>
      </div>
      <div v-else :key="2" class="md:flex md:flex-row w-full h-full">
        <v-lazy-image :src="rows[currentItem][0]" class="h-screen md:w-1/3 object-cover"></v-lazy-image>
        <v-lazy-image :src="rows[currentItem][1]" class="h-screen md:w-1/3 object-cover"></v-lazy-image>
        <v-lazy-image :src="rows[currentItem][2]" class="h-screen md:w-1/3 object-cover"></v-lazy-image>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentItem: 0,
      rows: [
        [require("@/assets/photography/r1-1.jpg"), require("@/assets/photography/r1-2.jpg"), require("@/assets/photography/r1-3.jpg")],
        [require("@/assets/photography/r2-1.jpg"), require("@/assets/photography/r2-2.jpg"), require("@/assets/photography/r2-3.jpg")],
        [require("@/assets/photography/r3-1.jpg"), require("@/assets/photography/r3-2.jpg"), require("@/assets/photography/r3-3.jpg")]
      ]
    };
  },
  props: {},
  methods: {
    goForward: function() {
      if (this.currentItem == this.rows.length - 1) {
        this.currentItem = 0;
      } else {
        this.currentItem += 1;
      }
    },
    goBackward: function() {
      if (this.currentItem == 0) {
        this.currentItem = this.rows.length - 1;
      } else {
        this.currentItem -= 1;
      }
    }
  }
};
</script>

<style scoped>
/* make scrollbar transparent */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.v-lazy-image {
  opacity: 0;
  transition: all 0.7s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>
