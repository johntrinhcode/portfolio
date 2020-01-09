<template>
  <div id="app" class="relative w-screen h-screen flex flex-col bg-black">
    <!--
    <transition name="fade">
      <ProjectDetail
        v-if="currentProject"
        :currentProject="currentProject"
        @close-project-detail="unsetCurrentProject"
      />
    </transition>
    -->
    <!-- Arrow Icons -->
    <div id="cheverons" class="fixed bottom-0 left-0 m-4 md:m-12 flex z-50">
      <LeftCheveron @click="goBackward" class="w-4 md:w-8 fill-current text-white cursor-pointer" />
      <RightCheveron @click="goForward" class="w-4 md:w-8 ml-8 fill-current text-white cursor-pointer" />
    </div>
    <!-- J title -->
    <div>
      <h1 id="landing-header" class="fixed m-2 md:m-6 text-white font-body font-extrabold cursor-default leading-none z-50">J.</h1>
    </div>
    <!-- NAV -->
    <div id="landing-buttons" class="fixed right-0 flex flex-col text-right h-full mr-6 text-xs md:text-xl font-body z-50">
      <div class="h-16 md:h-full"></div>
      <div class="md:h-full md:flex md:justify-end">
        <button @click="goCode" class="nav-link font-body font-bold text-white">CODE</button>
      </div>

      <div class="md:h-full md:flex md:justify-end">
        <button @click="goPhoto" class="nav-link font-body font-bold text-white">PHOTO</button>
      </div>

      <div class="h-full md:flex md:justify-end">
        <button @click="goContact" class="nav-link font-body font-bold text-white">CONTACT</button>
      </div>
      <div class="h-full"></div>
    </div>

    <!-- Route here -->
    <div id="content-container" class="relative bg-black">
      <transition name="fade" mode="out-in">
        <router-view ref="view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import ProjectDetail from "./components/detail/ProjectDetail.vue";
import LeftCheveron from "./assets/icons/left-cheveron.svg";
import RightCheveron from "./assets/icons/right-cheveron.svg";

export default {
  name: "app",
  components: {
    ProjectDetail,
    LeftCheveron,
    RightCheveron
  },
  data() {
    return {
      currentProject: null
    };
  },
  computed: {},
  methods: {
    goForward: function() {
      this.$refs.view.goForward();
    },
    goBackward: function() {
      this.$refs.view.goBackward();
    },
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
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.trans {
  transition: opacity 0.5s ease-in-out;
}

#landing-buttons {
  letter-spacing: 2px;
}

.nav-link {
  letter-spacing: 5px;
}

#landing-header {
  font-size: 5rem;
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
</style>
