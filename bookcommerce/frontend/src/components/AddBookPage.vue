<template>
        <!-- <h3 v-if="user">Hi, {{user.username}} Welcome to BookCommerce</h3>
        <h3 v-if="!user">Hello, you are not logged in to BookCommerce</h3> -->


    <div class="card" style="width: 40rem; margin:auto; margin-top: 5%;">
        <div class="card-body">
            <form enctype="multipart/form-data" @submit.prevent="handleSubmit">

                <error v-if="error" :error="error" />

                <h3 class="card-title" 
                style="display: flex; align-items: center; justify-content: center;">
                New Book
                </h3>

                <div class="form-group">
                <label>Book Image</label>
                <input
                type="file" 
                id="file" 
                ref="file" 
                v-on:change="onChangeFileUpload()" 
                class="form-control" 
                placeholder ="image" />        
                </div>

                <div class="form-group">
                <label>Title</label>
                <input 
                type="text" 
                class="form-control" 
                placeholder ="Title"
                v-model="title" />        
                </div>
        

                <div class="form-group">
                <label>Description</label>
                <input 
                type="text" 
                class="form-control" 
                placeholder ="Description"
                v-model="description" />        
                </div>

                <div class="form-group">
                <label>Quantity</label>
                <input 
                type="number" 
                class="form-control" 
                placeholder ="quantity" 
                v-model="quantity" />        
                </div>

                <button class="btn btn-primary btn-block">Add Book</button>    
            </form>
    
        </div>
    </div>
    
</template>

<script>
// import {mapGetters} from 'vuex';
import axios from 'axios';
   import Error from './ErrorPage.vue';



   export default {
    name: 'AddBookPage',
    components:{
        Error
    },
    data() {
        return {
            title:"",
            description:"", 
            quantity:"",            
            file:"",
            // token: "",
            error:"",
        }
    },
    methods: {
        async handleSubmit(){
                // const data= {
                //     title:this.title,
                //     description:this.description, 
                //     quantity:this.quantity,            
                //     file:this.file,
                //     // token: localStorage.getItem("token"),
                // };

            let formData = new FormData();
            formData.append('title',this.title);
            formData.append('description', this.description);
            formData.append('quantity',this.quantity);
            formData.append('file', this.file);

            const response = await axios.post('addbook', formData)
            
            console.log(response);

            if(response.data.status === "ok"){
            this.$router.push('/');
            }else{
                this.error = response.data.error;
            }

        },
        onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
}
</script>