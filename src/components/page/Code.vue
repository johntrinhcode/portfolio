<template>
  <div id="code">
    <!-- Projects -->
    <div id="projects" class="w-full h-full flex flex-col border-gray-600 rounded-lg">
      <div class="detail relative h-64 w-full flex items-center rounded-sm overflow-hidden">
        <img src="../../assets/jurnul.png" class="absolute h-full w-full object-cover" />
        <div class="absolute h-32 right-0 card project-card text-sm text-left p-4">
          <p class="text-white text-4xl font-bold font-head">Jurnul</p>
          <p class="text-xs text-gray-500">December 2019 - January 2019</p>
          <p class="absolute text-white text-sm bottom-0 right-0 pr-4 pb-4">
            <a
              @click="
                    () => {
                      setProjectDetail('jurnul');
                    }
                  "
              class="cursor-pointer"
            >Explore</a>
          </p>
        </div>
      </div>
      <div class="detail relative h-64 w-full flex items-center rounded-sm overflow-hidden">
        <img src="../../assets/bud.jpg" class="absolute h-full w-full object-cover" />
        <div class="absolute h-32 right-0 card project-card text-sm text-left p-4">
          <p class="text-white text-4xl font-bold font-head">Bud</p>
          <p class="text-xs text-gray-500">October 2019 - Present</p>
          <p class="absolute text-white text-sm bottom-0 right-0 pr-4 pb-4">
            <a
              @click="
                    () => {
                      setProjectDetail('bud');
                    }
                  "
              class="cursor-pointer"
            >Explore</a>
          </p>
        </div>
      </div>
      <div class="detail relative h-64 w-full flex items-center rounded-sm overflow-hidden">
        <img src="../../assets/portfolio.jpg" class="absolute h-full w-full object-cover" />
        <div class="absolute h-32 right-0 card project-card text-sm text-left p-4">
          <p class="text-white text-4xl font-bold font-head">Portfolio</p>
          <p class="text-xs text-gray-500">December 2019</p>
          <p class="absolute text-white text-sm bottom-0 right-0 pr-4 pb-4">
            <a
              @click="
                    () => {
                      setProjectDetail('portfolio');
                    }
                  "
              class="cursor-pointer"
            >Explore</a>
          </p>
        </div>
      </div>
      <div class="detail relative h-64 w-full flex items-center rounded-sm overflow-hidden">
        <img src="../../assets/gem.jpg" class="absolute h-full w-full object-cover" />
        <div class="absolute h-32 right-0 card project-card text-sm text-left p-4">
          <p class="text-white text-4xl font-bold font-head">Gem</p>
          <p class="text-xs text-gray-500">May 2019 - August 2019</p>
          <p class="absolute text-white text-sm bottom-0 right-0 pr-4 pb-4">
            <a
              @click="
                    () => {
                      setProjectDetail('gem');
                    }
                  "
              class="cursor-pointer"
            >Explore</a>
          </p>
        </div>
      </div>
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
  background-color: rgb(27, 27, 27);
}

.code-header {
  letter-spacing: 0.5rem;
}
</style>
