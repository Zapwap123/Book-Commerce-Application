<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">BookCommerce</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mr-auto" v-if="!user">
        <li class="nav-item active">
          <router-link class="nav-link" to="/home"
            >Home </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Sign Up</router-link>
        </li>
      </ul>

      <ul class="navbar-nav mr-auto" v-if="user">
        <li class="nav-item active">
          <router-link class="nav-link" to="/home"
            >Home </router-link>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0)" class="nav-link" 
          @click="handlClick"
          >Logout</a>
        </li>

      </ul>
      
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "AppNav",
  methods:{
    handlClick(){
      localStorage.removeItem('token');
      this.$store.dispatch('user', null)
      this.$router.push('/');
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
};
</script>
