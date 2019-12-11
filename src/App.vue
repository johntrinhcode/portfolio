<template>
  <div id="app" class="w-screen h-screen">
    <transition name="fade" appear>
      <video muted autoplay loop class="fixed opacity-75">
          <source src="./assets/video/city.mp4" type="video/mp4">
      </video>
    </transition>





    <div  class="fixed flex w-full h-full items-center z-10">
        <div class="w-full flex flex-col items-center my-auto">
            <div>
                <transition appear name='landing-heading'>
                    <h1 id="landing-header" @click="goLanding" class="text-center text-white text-4xl font-body font-bold cursor-pointer">JOHN TRINH</h1>
                </transition>
            </div>

            <div id="landing-buttons" class="flex text-xs font-body">

                <transition appear name='landing-button'>
                    <button @click="goCode" class="nav-link p-1 mx-4 text-white">CODE</button>       
                </transition>
                <transition appear name='landing-button'>
                    <button @click="goPhoto" class="nav-link p-1 mx-4 text-white">PHOTO</button>
                </transition>
                <transition appear name='landing-button'>
                    <button @click="goContact" class="nav-link p-1 mx-4 text-white">CONTACT</button>
                </transition>
            </div>

        </div>
        <!-- Route here -->
        <div class="w-auto h-full bg-gray-900">
          <transition name="grow">
            <Content
              v-show="!isLanding" />
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
import Content from './components/page/Content';

export default {
  name: 'app',
  components: {
    Content
  },
  data() {
    return {
      currentView: "landing"
    }
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
     isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log('not mobile!')
        return true
      } else {
        return false
      }
    },
  },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

/* Transitions */
/* fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* grow */
.grow-enter-active, .grow-leave-active {
  transition: all 1s ease;
  max-width: 1000px;
}

.grow-enter, .grow-leave-to {
  max-width: 0;
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
    letter-spacing: .5rem;
}

/* Animations */

.landing-heading-enter-active, .landing-heading-leave-active {
    transition: all 1s;
}
.landing-heading-enter, .landing-heading-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(25px);
    opacity: 0;
}

.landing-button-enter-active, .landing-button-leave-active {
    transition: all 1.5s;
    transition-delay: 1s;
}
.landing-button-enter, .landing-button-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(25px);
    opacity: 0;
}
</style>
