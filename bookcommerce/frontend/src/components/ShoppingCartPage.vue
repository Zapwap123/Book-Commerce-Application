<template>
        <h1>Shopping Cart</h1>

<table class="table" style="width: 90%; margin:40px">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Book Title</th>
        <th scope="col">quantity</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr li v-for="book in cartBooks" :key="book.id">
        <td>{{book.title}}</td>
        <td>{{book.quantity}}</td>

      </tr>    
    </tbody>
  </table>
    <!-- <ul>
        <li v-for="book in cartBooks" :key="book.id">
        {{book.title}} - {{book.quantity}}
        </li>
    </ul> -->

</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'ShoppingCartPage',
    computed: {
    ...mapGetters(['cartBooks'])
  },
}

</script>