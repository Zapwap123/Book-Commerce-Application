<template>
  <div id="app">
    <Nav />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav  from "./components/AppNav.vue";
// import Login from "./components/LoginPage.vue";
export default {
  name: "App",
  components:{
    Nav,
    // Login
  }
};
</script>

<style></style>
