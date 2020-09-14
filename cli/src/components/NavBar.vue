<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
     <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo.png" width="100px" height="50px" alt="" loading="lazy">
     </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{name:'item-list'}" class="nav-link">Items</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'cart'}" class="nav-link">Cart
              <span v-if="cartCount > 0" class="badge badge-pill badge-danger">
                {{ cartCount }}
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'order'}" class="nav-link">Orders
              <span v-if="orderCount > 0" class="badge badge-pill badge-danger">
                {{ orderCount }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script type="text/javascript">
  export default{
    computed: {
      cartCount() {
        this.$store.dispatch('getData')
        return this.$store.state.cart.length
      }
     
    }
  }
</script>
<style type="text/css">
  
</style>