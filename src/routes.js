import Landing from "./components/page/Landing.vue";
import App from "./App.vue";
import Code from "./components/page/Code.vue";
import Photo from "./components/page/Photo.vue";
import About from "./components/page/About.vue";

export default [
  { path: "/", redirect: "/#code-page", name: "App", component: App, props: true },
  { path: "/code", name: "Code", component: Code, props: true },
  { path: "/photo", name: "Photo", component: Photo, props: true },
  { path: "/about", name: "About", component: About, props: true }
];
