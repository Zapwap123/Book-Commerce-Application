<template>

<div class="card d-flex justify-content-around" style="width: 20rem; display:inline; margin:30px;" v-for="book in books" :key="book.id">
  <img class="card-img-top" :src="`http://localhost:6080/api/upload`+book.picture" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{book.title}}</h5>
    <p class="card-text">{{book.description}}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
 name: 'DisplayBooksPage',
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