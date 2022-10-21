<template><div class="card" style="width: 40rem; margin:auto; margin-top: 5%;">
    <div class="card-body">
      <h3 class="card-title">Sign Up</h3>
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
          placeholder ="Password" 
          v-model="password" />        
      </div>
      <div class="form-group">
          <label>Confirm Password</label>
          <input 
          type="password" 
          class="form-control" 
          placeholder =" Confirm Password"
          v-model="password_confirm" />        
      </div>
  
      <button 
      class="btn btn-primary btn-block"
      >
      Sign Up
      </button>
      </form>
      
      
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
     </div>
  </div>
</template>

<script>
   import axios from 'axios';

   export default {
    name: 'RegisterPage',
    data() {
        return {
            username:"",
            password:"",
            password_confirm:"",
            role:"user",
        }
    },
    methods: {
        async handleSubmit(){
            const data= {
                username: this.username,
                password: this.password,
                password_confirm: this.password_confirm,
                role: this.role,
            };
            
            const response = await axios.post('register', data)
            
            console.log(response);
            this.$router.push('/login')
        }
    }
   }
</script>