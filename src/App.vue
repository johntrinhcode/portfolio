<template>
  <div id="app">
    <div class="flex flex-wrap w-full h-screen font-head text-xs">
      <div class="w-3/5 h-screen p-12">
        <div id="links">
          <transition name="fade" mode="out-in">
            <div id="home-link" class="link inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsHome }" v-on:click="updateCurrentRoute">
              <router-link to="/" id='home-link' >HOME</router-link>
            </div>
          </transition>
          <div id="code-link" class="link inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsCode }" v-on:click="updateCurrentRoute">
          <router-link to="/code" id='code-link'>CODE</router-link>
          </div>
          <div id="photo-link" class="link inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsPhoto }" v-on:click="updateCurrentRoute">
          <router-link to="/photo" id='photo-link'>PHOTO</router-link>
          </div>
          <div id="about-link" class="link inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsAbout }" v-on:click="updateCurrentRoute">
          <router-link to="/about" id='about-link'>ABOUT</router-link>
          </div>
      </div>

      <transition name="fade" mode="out-in">
      <router-view/>
      </transition>

      </div>


      <div class="w-2/5 h-screen">
          <div id="bg-image" style="background-image: url(bg_image.jpg);" class="bg-no-repeat bg-cover w-full h-full"></div>
      </div>
    </div>

      <!-- route outlet -->
      <!-- component matched by the route will render here -->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      routeIsHome: true,
      routeIsCode: false,
      routeIsPhoto: false,
      routeIsAbout: false,
    };
  },
  methods: {
    checkHome() {
      return this.$route.path == '/';
    },
    checkCode() {
      return this.$route.path == '/code';
    },
    checkPhoto() {
      console.log();
      return this.$route.path == '/photo';
    },
    checkAbout() {
      return this.$route.path == '/about';
    },
    updateCurrentRoute() {
      this.routeIsHome = this.checkHome();
      this.routeIsCode = this.checkCode();
      this.routeIsPhoto = this.checkPhoto();
      this.routeIsAbout = this.checkAbout();
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
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
  }

.link {
  transition: .5s;
}

.fade-enter-active {
  opacity: 0%;
  -webkit-animation: fade-in .5s;
  -moz-animation: fade-in .5s;
  -o-animation: fade-in .5s;
  animation: fade-in .5s;
}

.fade-leave-active {
  animation: fade-out .5s;
}


@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateX(50px)
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateX(50px)
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateX(50px);
  }
}


@-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateX(50px);
  }
}
</style>
