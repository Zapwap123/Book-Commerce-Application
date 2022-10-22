<template>
  <div id="app">
    <Nav  />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Nav  from "./components/AppNav.vue";


export default {
  name: "App",
  components:{
    Nav,
  },

  data(){
        return{
        user: null
    }},
    async created(){
        const response =await axios.get('user');

        console.log(response)
        // this.user = response.data.user;
        this.$store.dispatch('user', response.data.user )
    }
};
</script>

<style></style>
