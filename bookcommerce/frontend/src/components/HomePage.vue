<template>
    <div>
        <h3 v-if="user">Hi, {{user.username}} Welcome to BookCommerce</h3>
        <h3 v-if="!user">Hello, you are not logged in to BookCommerce</h3>
    </div>
    
</template>

<script>
import {mapGetters} from 'vuex';


   export default {
    name: 'HomePage',
    computed: {
    ...mapGetters(['user'])
  }
   }
</script>