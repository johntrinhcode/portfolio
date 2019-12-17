<template>
  <div
    id="project-detail"
    class="h-screen w-screen absolute z-50"
    @click="$emit('close-project-detail')"
  >
    <div id="project-detail-bg" class="h-screen w-screen bg-black opacity-75 absolute"></div>
    <div class="w-full h-full flex items-center opacity-100">
      <div
        @click.stop
        class="relative w-64 md:w-128 h-128 flex flex-col bg-gray-600 mx-auto opacity-100 rounded-sm overflow-hidden"
      >
        <button
          id="view-project-button"
          class="absolute right-0 bottom-0 px-4 py-2 m-4 text-white rounded-sm"
        >
          <a :href="link" target="_blank" rel="noopener noreferrer">View</a>
        </button>

        <div id="project-image" class="w-full bg-red-700 overflow-hidden">
          <img :src="image" class="w-full h-full object-cover" />
        </div>
        <div id="project-details" class="w-full flex flex-col p-4 text-white font-body">
          <div class="font-head font-bold text-4xl">{{title}}</div>
          <div class="text-xs opacity-50">{{date}}</div>
          <div
            class="mt-4"
          >{{description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  props: {
    currentProject: {
      required: true
    }
  },
  data() {
    return {
      info: {
        bud: {
          title: "Bud.",
          description: "A web application that allows users to create their own garden designs and share with others.",
          image: require("../../assets/bud.jpg"),
          date: "October 2019 - Present",
          link: "https://www.beediscovery.com"
        },
        portfolio: {
          title: "Portfolio",
          description: "A static website built to showcase the work that I do.",
          date: "December 2019",
          image: require("../../assets/portfolio.jpg"),
          link: "https://www.johntrinh.com"
        },
        gem: {
          title: "Gem",
          description: "A modular web widget built during my time as an intern at IBM. It is showcased on IBM's About Us page to deliver interesting historical information about the company.",
          image: require("../../assets/gem.jpg"),
          date: "May 2019 - August 2019",
          link: "https://www.ibm.com/ibm/us/en/"
        }
      }
    };
  },
  computed: {
    title() {
      return this.info[this.currentProject].title;
    },
    description() {
      return this.info[this.currentProject].description;

    },
    link() {
      return this.info[this.currentProject].link;
    },
    date() {
      return this.info[this.currentProject].date;
    },
    image() {
      return this.info[this.currentProject].image;
    }
  }
};
</script>

<style>
#project-image {
  height: 33%;
}
#project-details {
  height: 67%;
  line-height: 1;
  background-color: rgb(49, 49, 49);
}
#view-project-button {
  background-color: rgb(75, 75, 75);
}
</style>