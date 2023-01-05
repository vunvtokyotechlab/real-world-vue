import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventListView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/event/:id",
      name: "event-detail",
      props: true,
      component: () => import("../views/EventDetailsView.vue"),
    },
  ],
});

export default router;
