<template> 
    <table class="table" style="width: 90%; margin:40px">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Title</th>
      <th scope="col">quantity</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="book in books" :key="book.id">
      <td>{{book.title}}</td>
      <td>{{book.quantity}}</td>
      <td>
      <router-link :to="`/viewbook/`+ book.id" class="btn btn-primary">View</router-link>
      <a href="#" class="btn btn-primary">Delete</a>
      </td>
    </tr>    
  </tbody>
</table>
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
     name: 'AdminBookList',
     data(){
            return {
                books: []
            }
        },
     methods: {
        async loadBooks(){
            await axios.get('allbooks')
                .then(function( response ){
                    this.books = response.data.data;
                }.bind(this));
    
                console.log(this.books);
        }
    },
    created(){
        this.loadBooks()
     },
    }
    </script>