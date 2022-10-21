import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/LoginPage.vue";
import Register from "./components/RegisterPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Login,
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "hash",
});

// Vue.use(Router);

// export default new Router({
//   routes: [{ path: "/", component: Login }],
// });

export default router;
