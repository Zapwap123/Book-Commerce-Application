import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/LoginPage.vue";
import Register from "./components/RegisterPage.vue";
import Home from "./components/HomePage.vue";
import AddBook from "./components/AddBookPage.vue";
import DisplayBooks from "./components/DisplayBooksPage.vue";
import AdminBooks from "./components/AdminBookList.vue";
import ViewBook from "./components/ViewBook.vue";
import RegisterAdmin from "./components/RegisterAdminPage.vue";
import ShoppingCart from "./components/ShoppingCartPage.vue";

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
  {
    path: "/books",
    name: "DisplayBooks",
    component: DisplayBooks,
  },
  {
    path: "/adminbooks",
    name: "AdminBooks",
    component: AdminBooks,
  },
  {
    path: "/viewbook/:id",
    name: "ViewBook",
    component: ViewBook,
  },
  {
    path: "/registeradmin",
    name: "RegisterAdmin",
    component: RegisterAdmin,
  },
  {
    path: "/cart",
    name: "ShoppingCart",
    component: ShoppingCart,
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
