import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/LoginPage.vue";
import Register from "./components/RegisterPage.vue";
import Home from "./components/HomePage.vue";
import AddBook from "./components/AddBookPage.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Home,
    redirect: "/home",
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
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/additem",
    name: "AddToItems",
    component: AddBook,
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
