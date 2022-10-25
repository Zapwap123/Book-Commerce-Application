<template> 
       <div class="card" style="width: 40rem; margin:auto; margin-top: 5%;">
        <div class="card-body">
            <form enctype="multipart/form-data" @submit.prevent="handleSubmit">

                <error v-if="error" :error="error" />

                <h3 class="card-title" 
                style="display: flex; align-items: center; justify-content: center;">
                Book Information
                </h3>

                <!-- <div class="form-group">
                <label>Book Image</label>
                <input
                type="file" 
                id="file" 
                ref="file" 
                v-on:change="onChangeFileUpload()" 
                class="form-control" 
                placeholder ="image" />        
                </div> -->

                <div class="form-group">
                <label>Title</label>
                <input 
                type="text"
                class="form-control" 
                placeholder ="Title"
                v-model="title" />        
                </div>
        
                <!-- :value="book.description"  -->

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
                </div><br />

                <button class="btn btn-primary btn-block">Edit Book</button>    
            </form>
    
        </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
     name: 'ViewBook',
     data(){
            return {
                title:"",
                description:"", 
                quantity:"",            
                file:"",
                book_id: this.$route.params.id,
                book: ""
            }
        },
     methods: {
        async loadBooks(){
            console.log(this.book_id);

            await axios.get(`book/${this.book_id}`)
                .then(function( response ){
                    this.book = response.data.data;
                }.bind(this));
    
                console.log(this.books);
        }
    },
    created(){
        this.loadBooks()
     },
     async handleSubmit(){

            let formData = new FormData();
            formData.append('book_id',this.book_id);
            formData.append('title',this.title);
            formData.append('description', this.description);
            formData.append('quantity',this.quantity);
           // formData.append('file', this.file);

            const response = await axios.post('bookupdate', formData)
            
            console.log(response);

            if(response.data.status === "ok"){
            this.$router.push('/');
            }else{
                this.error = response.data.error;
            }

        },
        //onChangeFileUpload(){
       // this.file = this.$refs.file.files[0];
      //}
    }
    </script>