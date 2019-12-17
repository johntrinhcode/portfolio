<template>
  <div id="app" class="w-screen h-screen">
    <transition name="fade">
      <ProjectDetail v-if="currentProject" :currentProject="currentProject" @close-project-detail="unsetCurrentProject" />
    </transition>

    <div id="blur-filter" :class="currentProject ? 'fixed w-screen h-screen blur' : 'fixed w-screen h-screen'">
      <video muted autoplay loop class="fixed min-h-full object-cover opacity-75 z-0">
        <source src="./assets/video/city.mp4" type="video/mp4" />
      </video>

      <div class="fixed flex flex-col w-full h-full items-center z-10">
        <div class="w-full flex flex-col items-center my-auto">
          <div>
            <transition appear name="landing-heading">
              <h1 id="landing-header" @click="goLanding" class="text-center text-white text-4xl font-body font-bold cursor-pointer">JOHN TRINH</h1>
            </transition>
          </div>

          <div id="landing-buttons" class="flex text-xs font-body">
            <transition appear name="landing-button">
              <button @click="goCode" class="nav-link p-1 mx-4 text-white">CODE</button>
            </transition>
            <transition appear name="landing-button">
              <button @click="goPhoto" class="nav-link p-1 mx-4 text-white">PHOTO</button>
            </transition>
            <transition appear name="landing-button">
              <button @click="goContact" class="nav-link p-1 mx-4 text-white">CONTACT</button>
            </transition>
          </div>
        </div>
        <!-- Route here -->
        <div id="content-container" class="w-full h-auto">
          <transition name="grow">
            <Content
              v-show="!isLanding"
              :mode="currentView"
              @set-current-project="e => setCurrentProject(e)"
              @unset-current-project="unsetCurrentProject"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Content from "./components/page/Content";
import ProjectDetail from "./components/detail/ProjectDetail.vue";
import func from "../vue-temp/vue-editor-bridge";

export default {
  name: "app",
  components: {
    Content,
    ProjectDetail
  },
  data() {
    return {
      currentView: "landing",
      currentProject: null
    };
  },
  computed: {
    isLanding() {
      return this.currentView === "landing";
    }
  },
  methods: {
    goCode() {
      this.currentView = "code";
    },
    goPhoto() {
      this.currentView = "photo";
    },
    goContact() {
      this.currentView = "contact";
    },
    goLanding() {
      this.currentView = "landing";
    },
    setCurrentProject(project) {
      this.currentProject = project;
    },
    unsetCurrentProject() {
      this.currentProject = null;
    },
    setDocHeight() {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight / 100}px`);
    }
  },
  mounted() {
    setDocHeight();

    window.addEventListener("resize", function() {
      setDocHeight();
    });

    window.addEventListener("orientationchange", function() {
      setDocHeight();
    });

    setDocHeight();
  }
};
</script>

<style>
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

/* grow */
.grow-enter-active,
.grow-leave-active {
  transition: all 1s ease;
  max-height: calc(var(--vh, 1vh) * 85);
}

.grow-enter,
.grow-leave-to {
  max-height: 0;
}

#app {
  background-color: #19191a;

  transition: all 1s ease;
}

#landing-buttons {
  letter-spacing: 2px;
}

.nav-link {
  letter-spacing: 5px;
}

#landing-header {
  letter-spacing: 0.5rem;
}

#content-container {
  background-color: rgb(27, 27, 27);
}
/* Animations */

.landing-heading-enter-active,
.landing-heading-leave-active {
  transition: all 1s;
}
.landing-heading-enter, .landing-heading-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(25px);
  opacity: 0;
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
</style>
