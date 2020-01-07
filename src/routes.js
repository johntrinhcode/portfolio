import Landing from "./components/page/Landing.vue";
import Code from "./components/page/Code.vue";
import Photo from "./components/page/Photo.vue";
import Contact from "./components/page/Contact.vue";

export default [
  { path: "/", redirect: "/code" },
  { path: "/code", name: "Code", component: Code, props: true },
  { path: "/photo", name: "Photo", component: Photo, props: true },
  { path: "/contact", name: "Contact", component: Contact, props: true }
];
