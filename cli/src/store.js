import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addToCart (state, payload) {
      let item = state.cart.find(item => item.id == payload.id);
      if (item) {
        item.qty += Number(payload.qty);
      } else {
        state.cart.push(payload);
      }
    }, 
    removeFromCart (state, payload) {
      let indexToDelete = state.cart.find(item => item.id == payload)
      state.cart.splice(indexToDelete, 1)
    },
    saveCart(state) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    getData(state){
      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'));
      }else{
        state.cart = [];
      }
    }
  },
  actions:{
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
      commit('saveCart')
    },
    plusBtn({ commit }, payload) {
      commit('plusBtn', payload)
      commit('saveCart')
    },
    minusBtn({ commit }, payload) {
      commit('minusBtn', payload)
      commit('saveCart')
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
      commit('saveCart')
    },
    getData({ commit }){
      commit('getData')
    }
  }
})

export default store