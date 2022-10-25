<template>
<div class="card" style="width: 40rem; margin:auto; margin-top: 5%;">
  <div class="card-body">
    <form @submit.prevent="handleSubmit">

        <error v-if="error" :error="error" />

        <h3 class="card-title" 
        style="display: flex; align-items: center; justify-content: center;">
        Login
        </h3>

        <div class="form-group">
        <label>Username</label>
        <input 
        type="text" 
        class="form-control" 
        placeholder ="Username"
        v-model="username" />        
    </div>

    <div class="form-group">
        <label>Password</label>
        <input 
        type="password" 
        class="form-control" 
        placeholder ="password" 
        v-model="password" />        
    </div>
    <br />

    <button class="btn btn-primary btn-block">Login</button>
    <h4>Not registed? <router-link to="/register">Sign Up</router-link></h4>
    
    </form>
    
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
   </div>
</div>
    
</template>

<script>
   import axios from 'axios';
   import Error from './ErrorPage.vue';

   export default {
    name: 'LoginPage',
    components:{
        Error
    },
    data() {
        return {
            username:"",
            password:"",
            error:"",
        }
    },
    methods: {
        async handleSubmit(){
                const data= {
                username: this.username,
                password: this.password,
            };
            
            const response = await axios.post('login', data)
            
            console.log(response);

            if(response.data.status === "ok"){
                localStorage.setItem('token', response.data.data);
            this.$store.dispatch('user', response.data.user);
            this.$router.push('/');
            }else{
                this.error = response.data.error;
            }
            
                
            
        }
    }
   }
</script>