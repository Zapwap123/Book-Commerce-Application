<template><div class="card" style="width: 40rem; margin:auto; margin-top: 5%;">
    <div class="card-body">
      <form @submit.prevent="handleSubmit">
        
        <error v-if="error" :error="error" />

        <h3 class="card-title">Register Admin User</h3>


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
      Register Admin
      </button>
      <!-- <h4>Already a user? <router-link to="/login">Login</router-link></h4> -->
      </form>
      
      
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
     </div>
  </div>
</template>

<script>
   import axios from 'axios';
   import Error from './ErrorPage.vue';

   export default {
    name: 'RegisterAdminPage',
    components:{
        Error
    },
    data() {
        return {
            username:"",
            password:"",
            password_confirm:"",
            role:"admin",
            error:"",
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

            if(response.data.status === "ok"){
                this.$router.push('/login')

            }else{
                this.error = response.data.error;
            }
        }
    }
   }
</script>