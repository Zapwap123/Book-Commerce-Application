<template>
<div class="card" style="width: 40rem; margin:auto; margin-top: 5%;">
  <div class="card-body">
    <h3 class="card-title">Login</h3>
    <form @submit.prevent="handleSubmit">
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

    <button class="btn btn-primary btn-block">Login</button>
    
    </form>
    
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
   </div>
</div>
    
</template>

<script>
   import axios from 'axios';

   export default {
    name: 'LoginPage',
    data() {
        return {
            username:"",
            password:"",
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
            localStorage.setItem('token', response.data.data);
            // this.$router.push('/login')
        }
    }
   }
</script>