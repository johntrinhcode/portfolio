<template>
  <div id="app">
    <div class="flex flex-wrap w-full h-full font-head text-xs">
      <div class="w-3/6 h-screen overflow-scroll">
        <div id="links" class="h-16 fixed pt-6 z-50 bg-white w-3/6 p-12">
          <transition name="fade" mode="out-in">
            <div id="home-link" class="link inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsHome }" v-on:click="clickHome">
              <router-link to="/" id='home-link' >HOME</router-link>
            </div>
          </transition>
          <div id="code-link" class="link inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsCode }" v-on:click="clickCode">
          <router-link to="/code" id='code-link'>CODE</router-link>
          </div>
          <div id="photo-link" class="link inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsPhoto }" v-on:click="clickPhoto">
          <router-link to="/photo" id='photo-link'>PHOTO</router-link>
          </div>
          <div id="about-link" class="link inline p-2 hover:text-red-700" v-bind:class="{ 'text-red-700':routeIsAbout }" v-on:click="clickAbout">
          <router-link to="/about" id='about-link'>ABOUT</router-link>
          </div>
      </div>

      <!-- route outlet -->
      <!-- component matched by the route will render here -->

      <div class="pt-16 p-12">
        <transition name="fade" mode="out-in">
          <router-view :changeImage="updateImage"/>
        </transition>
      </div>

      </div>

      <div class="w-3/6 h-screen">
        <!-- cache components that have already been loaded at least once -->
        <keep-alive>
          <transition name="fade-image" mode="out-in">
            <div id="bg-image" v-bind:style="{backgroundImage: 'url(' +this.currentImageUrl +')'}" :key="this.currentImageUrl" class="bg-no-repeat bg-cover w-full h-full"></div>
          </transition>
        </keep-alive>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      routeIsHome: this.$route.path === '/',
      routeIsCode: this.$route.path === '/code',
      routeIsPhoto: this.$route.path === '/photo',
      routeIsAbout: this.$route.path === '/about',

      currentImageUrl: 'bg_image.jpg',
      homeImageUrl: 'bg_image.jpg',
      codeImageUrl: 'bg_image.jpg',
      photoImageUrl: 'bg_image.jpg',
      aboutImageUrl: 'bg_image.jpg',

      loaded: false,
    };
  },
  methods: {
    clickHome() {
      this.updateCurrentRoute()
      this.updateImage(this.homeImageUrl)
    },
    clickCode() {
      this.updateCurrentRoute()
      this.updateImage(this.codeImageUrl)
    },
    clickPhoto() {
      this.updateCurrentRoute()
      this.updateImage(this.photoImageUrl)
    },
    clickAbout() {
      this.updateCurrentRoute()
      this.updateImage(this.aboutImageUrl)
    },
    updateCurrentRoute() {
      this.routeIsHome = this.$route.path === '/'
      this.routeIsCode = this.$route.path === '/code'
      this.routeIsPhoto = this.$route.path === '/photo'
      this.routeIsAbout = this.$route.path === '/about'
    },
    updateImage(url) {
      this.currentImageUrl = url
    },
    onLoaded() {
      this.loaded = true
      console.log('ok')
    }
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

.fade-image-enter-active {
  opacity: 0%;
  -webkit-animation: fade-image-in .5s;
  -moz-animation: fade-image-in .5s;
  -o-animation: fade-image-in .5s;
  animation: fade-image-in .5s;
}

.fade-image-leave-active {
  animation: fade-image-out .5s;
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

/*---*/
@keyframes fade-image-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fade-image-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-image-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}


@-webkit-keyframes fade-image-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}


/* make scrollbar transparent */
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
</style>
