<template>
  <div id="projects" class="h-full w-full trans">
    <div class="detail relative h-full w-full flex items-center overflow-hidden">
      <div class="gradient absolute w-full h-full z-10"></div>
      <div class="filter absolute w-full h-full z-10"></div>
      <v-lazy-image :src="image" class="h-full w-full object-cover z-0" />
      <div
        class="absolute flex flex-col w-64 md:w-128 mx-auto right-0 left-0 card text-sm text-left"
      >
        <div class="z-10">
          <p class="text-center text-white text-6xl font-bold font-head leading-none">{{ title }}</p>
          <p class="text-center text-xs text-white leading-none">{{ date }}</p>
          <p class="text-center text-white">{{ description }}</p>
        </div>

        <div class="flex mx-auto mt-2 z-10">
          <a v-if="link != ''" :href="link" target="_blank" rel="noopener noreferrer" class="mx-1">
            <Globe class="w-6 h-6 fill-current text-white" />
          </a>

          <a
            v-if="gitlink != ''"
            :href="gitlink"
            target="_blank"
            rel="noopener noreferrer"
            class="mx-1"
          >
            <Git class="w-6 h-6 fill-current text-white" />
          </a>
        </div>
        <div class="flex mx-auto z-10 border border-white p-1 mt-4">
          <div v-for="tech in technologies" :key="tech" class="h-full">
            <a :title="tech">
              <component :is="icons[tech]" class="w-4 h-4 fill-current text-white mx-1"></component>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Globe from "../../assets/icons/globe.svg";
import Git from "../../assets/icons/github.svg";

import FigmaIcon from "../../assets/icons/figma.svg";
import MongoIcon from "../../assets/icons/mongodb.svg";
import NodeIcon from "../../assets/icons/node.svg";
import PostgresIcon from "../../assets/icons/postgresql.svg";
import VueIcon from "../../assets/icons/vue.svg";
import FlutterIcon from "../../assets/icons/flutter.svg";

export default {
  name: "ProjectDetail",
  components: {
    Globe,
    Git,
    FigmaIcon,
    MongoIcon,
    NodeIcon,
    PostgresIcon,
    VueIcon,
    FlutterIcon
  },
  props: {
    title: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    date: {
      required: true
    },
    image: {
      required: true,
      type: String
    },
    link: {
      required: true
    },
    gitlink: {
      required: false,
      type: String
    },
    technologies: {
      required: true,
      type: Array
    }
  },
  mounted() {},
  data() {
    return {
      icons: {
        "Vue.js": VueIcon,
        "Node.js": NodeIcon,
        MongoDB: MongoIcon,
        PostgreSQL: PostgresIcon,
        Figma: FigmaIcon,
        Flutter: FlutterIcon
      }
    };
  },
  computed: {}
};
</script>

<style>
.v-lazy-image {
  opacity: 0;
  transition: all 0.7s;
}
.v-lazy-image-loaded {
  opacity: 1;
}

.gradient {
  transition: all 0.5s ease;
  opacity: 0.5;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(9, 9, 121, 0) 74%
  );
}

.filter {
  opacity: 0.1;
  background: black;
}
</style>
