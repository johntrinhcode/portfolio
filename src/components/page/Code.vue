<template>
  <div id="code" class="pt-4 mx-4 md:mx-24 lg:mx-24">
    <div id="resume" class="w-full h-full mt-12 text-white text-left">
      <div
        id="experience"
        class="flex flex-col border-gray-600 border-b-2 border-l-2 p-4 rounded-lg"
      >
        <h1 class="code-header w-full font-body font-thin text-3xl mb-6">EXPERIENCE</h1>
        <div
          class="detail card flex items-center h-full cursor-pointer p-2 rounded-sm border-white border-l-4"
        >
          <img src="../../assets/ibm-logo.png" class="h-12" />
          <div class="text-sm text-left ml-4">
            <p>Full Stack Developer Intern</p>
            <p class="text-xs text-gray-500">May 2019 - August 2019</p>
          </div>
        </div>
      </div>

      <!-- School -->
      <div id="education" class="mt-12 border-gray-600 border-b-2 border-l-2 p-4 rounded-lg">
        <h1 class="code-header w-full font-body font-thin text-3xl mb-6">EDUCATION</h1>
        <div class="border-white border-l-4 p-2 rounded-sm">
          <p class="w-full text-xs">University of Maryland - College Park</p>
        </div>
      </div>

      <!-- Projects -->
      <div
        id="projects"
        class="w-full h-full flex flex-col mt-12 border-gray-600 border-b-2 border-l-2 p-4 rounded-lg"
      >
        <h1 class="code-header w-full font-body font-thin text-3xl mb-6">PROJECTS</h1>
        <div id="project-row" class="flex flex-col md:flex-row w-full">
          <div
            class="detail relative h-64 w-full flex items-center rounded-sm overflow-hidden md:ml-2 mx-auto m-2"
          >
            <img src="../../assets/bud.jpg" class="absolute" />
            <div class="absolute h-32 right-0 card project-card text-sm text-left opacity-75 p-4">
              <p class="text-4xl font-bold font-head">Bud</p>
              <p class="text-xs text-gray-500">October 2019 - Present</p>
              <p class="absolute text-sm bottom-0 right-0 pr-4 pb-4">
                <a @click="() => {setProjectDetail('bud')}" class="cursor-pointer">Explore</a>
              </p>
            </div>
          </div>
          <div
            class="detail relative h-64 w-full flex items-center rounded-sm overflow-hidden md:ml-2 mx-auto m-2"
          >
            <img src="../../assets/bud.jpg" class="absolute" />
            <div class="absolute h-32 right-0 project-card text-sm text-left opacity-75 p-4">
              <p class="text-4xl font-bold font-head">Portfolio</p>
              <p class="text-xs text-gray-500">You're looking at it!</p>
            </div>
          </div>
          <div
            class="detail relative h-64 w-full flex items-center rounded-sm overflow-hidden md:ml-2 mx-auto m-2"
          >
            <img src="../../assets/bud.jpg" class="absolute" />
            <div class="absolute h-32 right-0 project-card text-sm text-left opacity-75 p-4">
              <p class="text-4xl font-bold font-head">Gem</p>
              <p class="text-xs text-gray-500">May 2019 - August 2019</p>
              <p class="absolute text-sm bottom-0 right-0 pr-4 pb-4">
                <a href="www.beediscovery.com" target="_blank">Explore</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div id="skills" class="mt-12">
        <div id="languages_frameworks">
          <h1 class="code-header w-full font-body font-thin text-3xl mb-6">LANGUAGES & FRAMEWORKS</h1>
        </div>
        <div id="tools">
          <h1 class="code-header w-full font-body font-thin text-3xl mb-6">TOOLS</h1>
        </div>
      </div>
      <p class="w-full">Bud.</p>
    </div>
  </div>
</template>

<script>
import ProjectDetail from "../detail/ProjectDetail.vue";

export default {
  name: "Code",
  props: {
    changeImage: Function
  },
  components: {
    ProjectDetail
  },
  data() {
    return {
      currentProject: null
    };
  },
  methods: {
    closeProjectDetail() {
      this.$emit("unset-current-project");
    },
    setProjectDetail(project) {
      this.$emit("set-current-project", project);
    }
  }
};
</script>

<style scoped>
.detail {
  line-height: 1;
}

.card:hover {
  background-color: rgb(49, 49, 49);
}

.project-card {
  background-color: rgb(49, 49, 49);
}

.code-header {
  letter-spacing: 0.5rem;
}
</style>
