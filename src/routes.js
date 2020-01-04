import Landing from "./components/page/Landing.vue";
import About from "./components/page/About.vue";
import Code from "./components/page/Code.vue";
import Photo from "./components/page/Photo.vue";

export default [
  { path: "/", name: "Landing", component: Landing, props: true },
  { path: "/about", name: "About", component: About, props: true },
  { path: "/code", name: "Code", component: Code, props: true },
  { path: "/photo", name: "Photo", component: Photo, props: true }
];
