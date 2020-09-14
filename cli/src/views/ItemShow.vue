<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12">
        <h2>Item Detail / Show</h2>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-3" v-if="item">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img :src="item.item_photo" class="img-fluid">
            </div>
            <div class="col-md-8">
              <div class="card-body text-left">
                <p class="card-title"><strong>Name: </strong>{{item.item_name}}</p>
                <p class="card-text"><strong>Description: </strong>{{ item.item_desc }} This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>
                  <span class="mr-2"> <b-icon icon="tag-fill" variant="info"></b-icon> <strong>Brand: </strong>{{item.brand.brand_name}}</span>
                  <span> <b-icon icon="tag-fill" variant="dark"></b-icon> <strong>Subcategory: </strong>{{item.subcategory.subcategory_name}}</span>
                </p>

                <p><strong>Price: </strong><strong class="text-danger">{{item.item_price}} MMK</strong></p>
                
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                <p><strong>Choose Quantity: </strong>
                <input type="number" name="qty" v-model="qty" class="form-control w-25 d-inline-block" min="1">
                </p>
                <button class="ml-3 btn btn-outline-warning text-success" @click="addToCart()">Add To Cart</button>
                <button class="ml-3 btn btn-outline-warning text-success" @click="goBack()">Continue Shopping</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'
  export default{
    data(){
      return{
        qty: 1,
        item : {}
      }
    },
    created(){
      let id = this.$route.params.id;
      ItemService.getItem(id)
        .then(response => {
          this.item = response.data.item
        })
        .catch(error => {
          console.log('There was an error:',error.response)
        })
    },
    methods: {
      addToCart() {
        let item = {id:this.item.item_id,name:this.item.item_name,price:this.item.item_price,qty:this.qty};
        this.$store.dispatch('addToCart', item)
      },
      goBack(){
        window.history.length>1?this.$router.go(-1):this.$router.push('/')
      }
    }
  }
</script>

<style type="text/css">
  
</style>