import { createWebHistory, createRouter } from "vue-router";
import WelcomeView from '../views/WelcomeView.vue';
import CreateLabelView from '../views/CreateLabelView.vue';
import DoneView from '../views/DoneView.vue';

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
    path: "/done",
    name: "Done",
    component: DoneView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;