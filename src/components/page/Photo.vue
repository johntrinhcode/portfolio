<template>
  <div id="photo">
    <div class="flex flex-col md:flex-row h-screen">
      <div v-for="image in rows[currentItem]" v-bind:key="image" class="bg-grey-300 w-full h-screen">
        <v-lazy-image :src="image" class="photo-object block w-full h-full object-cover" />
      </div>
    </div>
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
