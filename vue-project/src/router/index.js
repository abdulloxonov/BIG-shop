import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/views/Homepage.vue";
import AboutUs from "@/views/AboutUs.vue";
import Okompon from "@/views/Okompon.vue"

const routes = [
  {
    path: "/", 
    name: "Home",
    component: Homepage,
  },
  {
    path: "/about", 
    name: "About",
    component: AboutUs,
  },
  {
    path: "/okompon", 
    name: "Okompon",
    component: Okompon,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
