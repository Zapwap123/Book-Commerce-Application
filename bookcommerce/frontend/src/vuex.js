import { createStore } from "vuex";
// Vue.use(Vuex);

const state = {
  user: null,
  books: [],
  cart: [],
};

// const store = new Vuex.Store({
const general = {
  state,
  getters: {
    user: (state) => {
      return state.user;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
  },
};

const generalBooks = {
  state,
  getters: {
    books: (state) => {
      return state.books;
    },
    cartBooks(state) {
      return state.cart.map((cartItem) => {
        const book = state.books.find((book) => book._id === cartItem.id);
        return {
          title: book.title,
          quantity: cartItem.quantity,
        };
      });
    },
  },
  actions: {
    books(context, books) {
      context.commit("books", books);
    },

    addBookToCart(context, book) {
      if (book.quantity > 0) {
        // find cartItems available
        const cartItem = context.state.cart.find(
          (item) => item.id === book._id
        );
        if (!cartItem) {
          // push book to cart
          context.commit("pushBookToCart", book._id);
        } else {
          // increase Item Quantity
          context.commit("incrementItemQuantity", cartItem);
        }
        // context.commit("decrementItemQuantity", cartItem);
      }
    },
  },
  mutations: {
    books(state, books) {
      state.books = books;
    },

    pushBookToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1,
      });
    },

    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
  },
};

const store = createStore({
  modules: {
    general,
    generalBooks,
  },
});

export default store;
