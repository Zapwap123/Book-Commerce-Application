<template>
    <div>
        <h3 v-if="user">Hi, {{user.username}} Welcome to BookCommerce</h3>
        <h3 v-if="!user">Hello, you are not logged in to BookCommerce</h3>
    </div>
    
</template>

<script>
    import axios from 'axios';

   export default {
    name: 'HomePage',
    data(){
        return{
        user: null
    }},
    async created(){
        const response =await axios.get('user');

        console.log(response)
        this.user = response.data.user;
    }
   }
</script>