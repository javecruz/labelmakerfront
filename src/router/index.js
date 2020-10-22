import { createWebHistory, createRouter } from "vue-router";
import WelcomeView from '../views/WelcomeView.vue';
import CreateLabelView from '../views/CreateLabelView.vue';
import DetailView from '../views/DetailView.vue';

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: WelcomeView,
  },
  {
    path: "/create",
    name: "Create label",
    component: CreateLabelView,
  },
  {
    path: "/detail/:labelId",
    name: "Label Details",
    component: DetailView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;