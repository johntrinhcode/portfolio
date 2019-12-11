<template>
  <div id="desktop" class="relative flex flex-col w-screen h-screen bg-white">
    <div id="nav" class="w-full text-xs">
      <NavBar />
    </div>
    <div id="main-content" class=" flex w-full text-xs pt-16 overflow-scroll bg-white">
      <div class="w-3/6">

        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <div id="route-view" class="pl-16">
          <transition name="fade" mode="out-in">
            <router-view :changeImage="updateImage"/>
          </transition>
        </div>
      </div>

      <div class="w-3/6">
        <!-- cache components that have already been loaded at least once -->
        <keep-alive>
          <transition name="fade-image" mode="out-in">
            <img :src='this.currentImageUrl' class="h-full fixed right-0">
          </transition>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
    name: 'desktop',
    components: {
        NavBar
    },
    data() {
        return {
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
        this.updateImage(this.homeImageUrl)
        },
        clickCode() {
        this.updateImage(this.codeImageUrl)
        },
        clickPhoto() {
        this.updateImage(this.photoImageUrl)
        },
        clickAbout() {
        this.updateImage(this.aboutImageUrl)
        },
        updateImage(url) {
        this.currentImageUrl = url
        },
        onLoaded() {
        this.loaded = true
        console.log('ok')
        }
    }
}
</script>

<style>
.right-image {
  float: right;
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