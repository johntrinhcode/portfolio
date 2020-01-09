<template>
  <div id="projects" class="h-full w-full trans">
    <div class="detail relative h-full w-full flex items-center overflow-hidden">
      <div class="gradient absolute w-full h-full z-10"></div>
      <div class="filter absolute w-full h-full z-10"></div>
      <v-lazy-image :src="image" class="h-full w-full object-cover z-0" />
      <div class="absolute flex flex-col h-32 w-64 mx-auto right-0 left-0 card text-sm text-left">
        <p class="text-center text-white text-6xl font-bold font-head leading-none z-10">{{ title }}</p>
        <p class="text-center text-xs text-white z-10">{{ date }}</p>
        <button id="explore-button" class="mx-auto text-white text-sm mt-4 border-white border p-2 z-10">
          <a :href="link" target="_blank" rel="noopener noreferrer">EXPLORE</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  props: {
    title: {
      required: true
    },
    date: {
      required: true
    },
    image: {
      required: true,
      type: String
    },
    link: {
      required: true
    }
  },
  mounted() {},
  data() {
    return {};
  },
  computed: {}
};
</script>

<style>
.v-lazy-image {
  opacity: 0;
  transition: all 0.7s;
}
.v-lazy-image-loaded {
  opacity: 1;
}

.gradient {
  transition: all 0.5s ease;
  opacity: 0.5;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(9, 9, 121, 0) 74%);
}

.filter {
  opacity: 0.1;
  background: black;
}

#project-image {
  height: 33%;
}
#project-details {
  height: 67%;
  line-height: 1;
  background-color: rgb(49, 49, 49);
}
#view-project-button {
  background-color: rgb(75, 75, 75);
}
#implementation-detail {
  background-color: #3f3f3f;
}
</style>
