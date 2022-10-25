<template>
<img style="margin-left: 50%;  margin-top: 20%;" v-if="loading"
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEX////0/P/e9f+z6P/I7v+e4v+J2/9z1f9JyP5ezv4eu/40wf4Ktf5Axv4As/686f+O1P6g3v7t+f/T8f/m9/8AuP6s5f+F1v5myv5Qwv4kvv6Y3f+R3v/O7f+P2f5z0P5VYQbhAAAEuElEQVR4nO2a6XajIBiGAy6gNqUB1Nam7f3f5RgjKJsDBmtOj++vOXbQJ98OejodOnTo0KFDf1UMlyVmexKk9evLy2ud7ohQ9QQ9Q7UfARsIeob9XNEIhGY3hItAuPzK4wAwr70JhDfjfyeo/YpOAEwIJwLAdV2X3/EJDAYXAsV12auOyQCAlcGF0A4EZXmmeyGQkaDs+AYIKoMdAeCRYBsr+CBchBHqn3gELgYrAu2EEWqyDcKcwYogYrEsI7cObwRWbmMEhxlsCHiKBEs9jcSwiCATsqyjt0+bGUwEcJYEbWwCK4OJ8DnFYsSytIBgNGs+JeQmI4TJkAiEZLywWUKaDOMFfXDjMiHLyAlpIggGbXzNl0oz5UEdg0IIuZnWBgJ5GYZ48ZMrYYMXIxZJiyscMD/cCG7SIcyAZO8fH++iAHCBYMwqKe66qqo670QFUEi3hKU8zf4NRT5UqskZuj1/EPREoHCS5j9rz5Z6H2NB2V3x70oSdL6umCNo3lgkOLGuZ6hrZaRvsAToEXJPBKAgaN5YIOjhf6rqfW6DdA7QI3jvPjnUIHwX9vEwtxpvK0VdQPPUGfSQ8BL9LDuVoAhp31Rn8A3lSVD1wS0WwwYIYBgicADJdIAi/BTCMETQaqb54NysmqE0iJABABRzhK76XDvEad4IWMnx3AZFeCQ5INYhdPjRxg1WOeLUdiIILhEGaVffXBQfGkNXfccZIYFjfFgUK6ozjgQwYoQvWVHODh16OgGq9UhOH6gtkJCLIkL+lyeApRaxlcdWX+hs0c/irh/YAG5aZQiIz9iiM14yBHQhrDquaK0EPQNaWOQiWIUAfuwEGBfPjfAEjniCcHyCpDzFL02JWpqS9Gjhh/6AFo41nOIx30wxQhISWBsgKgqUxXk5BVhyV5AhaHHXJQIETISC+kQ2IhQoDN0UJ5IgIQH3oqiQQo+8G6FpkjyOUBT56qLMEkVBBzVtoWjd9hommoICCxaaQmx4F091gkBjEp0hDwsJwBoNYMWP0HxR4CzkHkQDaEKP/G4CjW4I5H8X3QlsvnR5gqHzoxCaaQy+p+AnrvmAK39rGrdTQJa3SgYypDL4ZpWSjOoekGWDHMkB0SDlOUSB8H11yFw+OPE7QeY4xrveEZBCrXjDF4FO1Uj9uaAZEexmoCMBylVP8atE8O7fqSUIhuuCQB4o0x6qETygFQyJtlCEROZL0C8hhKQGMbhKhPEKzAcJw+cCoTCslH6ifnzwJxhe/5gXiSDIRMBldwRx60Qg2B5G6eOjA5QEoszRfNR4cxkM6KEG7VZjGIEJBPHARiJ4F6EQMcMIJgKYzLDBl6BTQmbSyEQgyDpBJjNE/KxqlEzIbCovJgKQSYGif0NBJzdMtc9E6CuAVOwvSaaEnJUdC4Is0tbEfESzhJz52IYAt0pMMyFdCFslplmV3AhgGzPISLgqd7UizBIzYjRMNUHdndkRgIzIPMLLOXFTS0K6EWaJGa88gcQ+LTkQZERGtIIojfqrbxeCqJH65PI4g1FyXQjj8BK5RPOUmNsZiWC0xX471vzKGafRrH9fT4CgD257SBtf9xC/3giuG3xj6i/aXK/Njm44dOjQoUOHNtY/3nJeFLXqs0gAAAAASUVORK5CYII=" 
/>
<div class="card" style="width: 20rem; display: inline-block; margin:30px;" v-for="book in books" :key="book.id">
  <img class="card-img-top" :src="`http://localhost:6080/api/upload`+book.picture" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{book.title}}</h5>
    <p class="card-text">{{book.description}}</p>
    <button @click="addBookToCart(book)" class="btn btn-primary">Add to cart</button>
  </div>
</div>

</template>

<script>
import axios from 'axios';
import {mapGetters} from 'vuex';

export default {
 name: 'DisplayBooksPage',
 data(){
        return {
            // books: [],
            loading: false
        }
    },   
 methods: {
    async loadBooks(){
        this.loading =true
        await axios.get('allbooks')
            .then(function( response ){
                this.loading = false
                this.$store.dispatch('books', response.data.data )
                // this.books = response.data.data;
            }.bind(this));
            console.log(this.books);
    },

    addBookToCart(book){
        this.$store.dispatch('addBookToCart', book)
    },

},  
computed: {
    ...mapGetters(['books'])
  },
created(){
    this.loadBooks()
 },
}
</script>