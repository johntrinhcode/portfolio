<template>
  <div id="app" class="relative w-full flex flex-col bg-black">
    <!-- Arrow Icons -->

    <transition name="fade">
      <div
        v-if="$route.hash != '#about-page'"
        id="cheverons"
        class="fixed bottom-0 left-0 m-4 md:m-12 flex z-50"
      >
        <LeftCheveron
          @click="goBackward"
          class="w-4 h-4 md:w-8 fill-current text-white cursor-pointer"
        />
        <RightCheveron
          @click="goForward"
          class="w-4 h-4 md:w-8 ml-8 fill-current text-white cursor-pointer"
        />
      </div>
    </transition>
    <!-- J title -->
    <div>
      <h1
        id="landing-header"
        class="fixed m-2 md:m-6 text-white font-body font-extrabold cursor-default leading-none z-50"
      >J.</h1>
    </div>
    <!-- NAV -->
    <div
      id="landing-buttons"
      class="fixed right-0 flex flex-col text-right h-full mr-6 text-xs md:text-xl font-body z-50"
    >
      <div class="h-16 md:h-full"></div>
      <div class="md:h-full md:flex md:justify-end">
        <button
          @click="
            () => {
              scrollNav('#code-page');
            }
          "
          class="nav-link font-body font-bold text-white"
        >CODE</button>
      </div>

      <div class="md:h-full md:flex md:justify-end">
        <button
          @click="
            () => {
              scrollNav('#photo-page');
            }
          "
          class="nav-link font-body font-bold text-white"
        >PHOTO</button>
      </div>

      <div class="h-full md:flex md:justify-end">
        <button
          @click="
            () => {
              scrollNav('#about-page');
            }
          "
          class="nav-link font-body font-bold text-white"
        >ABOUT</button>
      </div>
      <div class="h-full"></div>
    </div>

    <!-- Route here -->
    <!--
    <div id="content-container" class="relative bg-black w-full h-full">
      <transition name="fade" mode="out-in">
        <router-view ref="view"></router-view>
      </transition>
    </div>
    -->
    <div id="code-page" class="w-full">
      <Code ref="codeView" />
    </div>
    <div id="photo-page" class="w-full">
      <Photo ref="photoView" />
    </div>
    <div id="about-page" class="w-full">
      <About ref="aboutView" />
    </div>
  </div>
</template>

<script>
import ProjectDetail from "./components/detail/ProjectDetail.vue";
import LeftCheveron from "./assets/icons/left-cheveron.svg";
import RightCheveron from "./assets/icons/right-cheveron.svg";

import Code from "./components/page/Code";
import Photo from "./components/page/Photo";
import About from "./components/page/About";

export default {
  name: "app",
  components: {
    ProjectDetail,
    LeftCheveron,
    RightCheveron,
    Code,
    Photo,
    About
  },
  data() {
    return {
      currentProject: null
    };
  },
  computed: {},
  methods: {
    goForward: function() {
      if (
        this.$router.currentRoute.hash == "#code-page" ||
        this.$router.currentRoute.hash == ""
      ) {
        this.$refs.codeView.goForward();
      } else if (this.$router.currentRoute.hash == "#photo-page") {
        this.$refs.photoView.goForward();
      }
      //    this.$refs.view.goForward();
    },
    goBackward: function() {
      if (
        this.$router.currentRoute.hash == "#code-page" ||
        this.$router.currentRoute.hash == ""
      ) {
        this.$refs.codeView.goBackward();
      } else if (this.$router.currentRoute.hash == "#photo-page") {
        this.$refs.photoView.goBackward();
      }
      //      this.$refs.view.goBackward();
    },
    goLanding() {
      this.$router.push({ path: "/" });
    },
    setCurrentProject(project) {
      this.currentProject = project;
    },
    unsetCurrentProject() {
      this.currentProject = null;
    },
    scrollRefresh: function(hashbang) {
      location.href = hashbang;
    },
    scrollNav: function(hashtag) {
      if (this.$route.hash == hashtag) {
        window.scrollTo({
          top: document.querySelector(hashtag).offsetTop,
          behavior: "smooth"
        });
      } else {
        this.$router.push(hashtag);
      }
    }
  },
  mounted() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }
};
</script>

<style>
#app,
#code-page,
#photo-page,
#about-page {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}

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
  transition: opacity 0.5s ease;
}

.nav-link {
  letter-spacing: 5px;
}

#landing-header {
  font-size: 5rem;
  letter-spacing: 0.1rem;
}
</style>
