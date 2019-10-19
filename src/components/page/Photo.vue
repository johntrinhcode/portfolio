<template>
    <div id="photo" class="content-center w-full h-full overflow-scroll" >
        <div class="flex">
            <div v-for="image in row1" v-bind:key="image" class="bg-grey-300 w-1/4 overflow-hidden image-container">
                <img :src="image" class="image">
            </div>
        </div>
        <div class="flex">
            <div v-for="image in row2" v-bind:key="image" class="bg-grey-300 w-1/4 overflow-hidden image-container">
                <img :src="image">
            </div>
        </div>
        <div class="flex">
            <div v-for="image in row3" v-bind:key="image" class="bg-grey-300 w-1/4 overflow-hidden image-container">
                <img :src="image">
            </div>

        </div>

    </div>

</template>

<script>
/*
There might be a better implementation of this grid using a for loop that extracts image locations from an array.
*/
export default {
  data() {
    return {
      row1: [
        require('@/assets/photography/r1-1.jpg'),
        require('@/assets/photography/r1-2.jpg'),
        require('@/assets/photography/r1-3.jpg')],
      row2: [
        require('@/assets/photography/r2-1.jpg'),
        require('@/assets/photography/r2-2.jpg'),
        require('@/assets/photography/r2-3.jpg')],
      row3: [
        require('@/assets/photography/r3-1.jpg'),
        require('@/assets/photography/r3-2.jpg'),
        require('@/assets/photography/r3-3.jpg')],
    };
  },
};
</script>

<style scoped>

/* make scrollbar transparent */
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

</style>
