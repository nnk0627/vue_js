<template>

       <div class="container shadow mt-5 bg-white rounded text-center">
        
          <div  class="row col-md-12 my-3">
            <div class="row">
            <div>
            <h4 class="col-md-12 my-3">Your Orders List</h4>
            </div>
          </div>
          
            <table class="table table-bordered ">
              <thead class="thead-dark">
                <tr>
                  <th>No</th>
                  <th>VoucherNo</th>
                  <th>Action</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(orders,index) in orders" :key="index">
                  <td>{{++index}}</td>
                  <td>{{orders.order_voucherno}}</td>
                  <td>{{orders.order_total}} MMK</td>
                  <td><button class="btn btn-outline-info btn-sm">Detail
                  </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
     
    </template>

        

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'
  
  export default{
    services:{
      ItemService
    },
    data(){
      return{
      
      orders:Object
        
    }
  },
  mounted(){
    ItemService.getOrders().then(res=> {
            this.orders= res.data.orders
          }).catch(err=> {
            console.log('There is an error:',err.response)
          })
  }
      
     
  }
</script>

<style type="text/css">
  
</style>