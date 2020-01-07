<template>
  <div id="app" class="relative w-full flex flex-col h-full bg-black">
    <transition name="fade">
      <ProjectDetail
        v-if="currentProject"
        :currentProject="currentProject"
        @close-project-detail="unsetCurrentProject"
      />
    </transition>
    <div class="flex flex-col w-full items-center z-10">
      <div class="w-full flex items-center my-auto">
        <div class="p-2">
          <h1
            id="landing-header"
            class="text-center text-white text-4xl font-body font-extrabold leading-none cursor-default"
          >JT</h1>
        </div>

        <div id="landing-buttons" class="flex text-xs font-body">
          <button
            @click="goCode"
            :class="$router.currentRoute.path == '/code' ? 'border-white' : 'border-black'"
            class="nav-link p-1 mx-2 text-white border-b-2 border-black"
          >CODE</button>
          <button
            @click="goPhoto"
            :class="$router.currentRoute.path == '/photo' ? 'border-white' : 'border-black'"
            class="nav-link p-1 mx-2 text-white border-b-2 border-black"
          >PHOTO</button>
          <button
            @click="goContact"
            :class="$router.currentRoute.path == '/contact' ? 'border-white' : 'border-black'"
            class="nav-link p-1 mx-2 text-white border-b-2 border-black"
          >CONTACT</button>
        </div>
      </div>
    </div>
    <div
      id="blur-filter"
      :class="currentProject ? 'w-screen overflow-hidden h-full blur' : 'w-screen'"
    >
      <!-- Route here -->
      <div id="content-container" class="relative w-full h-full p-4 bg-black">
        <transition name="fade" mode="out-in">
          <router-view
            @set-current-project="e => setCurrentProject(e)"
            @unset-current-project="unsetCurrentProject"
          ></router-view>
        </transition>
        <!--
            <Content
              v-show="!isLanding"
              :mode="currentView"
              @set-current-project="e => setCurrentProject(e)"
              @unset-current-project="unsetCurrentProject"
            />
        -->
      </div>
    </div>
  </div>
</template>

<script>
import Content from "./components/page/Content";
import ProjectDetail from "./components/detail/ProjectDetail.vue";

export default {
  name: "app",
  components: {
    Content,
    ProjectDetail
  },
  data() {
    return {
      currentProject: null
    };
  },
  computed: {},
  methods: {
    goCode() {
      this.$router.push({ path: "/code" });
    },
    goPhoto() {
      this.$router.push({ path: "/photo" });
    },
    goContact() {
      this.$router.push({ path: "/contact" });
    },
    goLanding() {
      this.$router.push({ path: "/" });
    },
    setCurrentProject(project) {
      this.currentProject = project;
    },
    unsetCurrentProject() {
      this.currentProject = null;
    }
  },
  mounted() {}
};
</script>

<style>
html,
body {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}

::-webkit-scrollbar {
  display: none;
}

button:focus {
  outline: none !important;
}
/* Transitions */
/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#app {
  transition: all 1s ease;
}

#landing-buttons {
  letter-spacing: 2px;
}

button {
  transition: all 0.5s ease;
}

.nav-link {
  letter-spacing: 5px;
}

#landing-header {
  letter-spacing: 0.1rem;
}
/* Animations */

.landing-heading-enter-active,
.landing-heading-leave-active {
  transition: all 1s;
}
.landing-heading-enter, .landing-heading-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(25px);
  opacity: 0;
  max-height: 0;
}

.landing-button-enter-active,
.landing-button-leave-active {
  transition: all 1.5s;
  transition-delay: 1s;
}
.landing-button-enter, .landing-button-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(25px);
  opacity: 0;
}

.blur {
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(12px);
  filter: blur(1px);
  backface-visibility: hidden;
}

#blur-filter {
  transition: all 1s ease;
  -webkit-filter: blur(0.001px);
  -moz-filter: blur(0.001px);
  -o-filter: blur(0.001px);
  -ms-filter: blur(0.001px);
  filter: blur(0.001px);
}

#trans {
  transition: 0.3s all ease;
}
</style>
