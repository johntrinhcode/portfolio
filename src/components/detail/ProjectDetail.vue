<template>
  <div
    id="project-detail"
    class="h-screen w-screen absolute z-50"
    @click="$emit('close-project-detail')"
  >
    <div id="project-detail-bg" class="h-screen w-screen bg-black opacity-75 absolute"></div>
    <div class="w-full h-full flex items-center opacity-100">
      <div
        @click.stop
        class="relative w-128 h-128 flex flex-col bg-gray-600 mx-auto opacity-100 rounded-lg overflow-hidden"
      >
        <button
          id="view-project-button"
          class="absolute right-0 bottom-0 p-4 m-4 text-white rounded-lg"
        >
          <a href="http://beediscovery.com" target="_blank" rel="noopener noreferrer">View</a>
        </button>

        <div id="project-image" class="w-full bg-red-700 overflow-hidden">
          <img src="../../assets/bud.jpg" class="w-full h-128 object-cover object-bottom" />
        </div>
        <div id="project-details" class="w-full flex flex-col p-4 text-white font-body">
          <div class="font-head font-bold text-4xl">Bud.</div>
          <div class="text-xs opacity-50">October 2019 - Present</div>
          <div
            class="mt-4"
          >A web application that allows users to create their own garden designs and share with others.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  props: {
    currentProject: {
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
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
</style>