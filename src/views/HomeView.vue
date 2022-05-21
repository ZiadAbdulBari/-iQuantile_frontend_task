<template>
<div>
  <Header/>
  <div class="container">
    <div class="all-product">

    <div v-for="(product,i) in data" :key="i">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{product.title}}</h5>
          <p class="card-text">{{product.description}}</p>
          <p class="card-text">Category: {{product.category}}</p>
          <p class="card-text">Price: {{product.price}}</p>
          <button @click.prevent="addToCart(product)" class="btn btn-primary">Add to cart</button>
          <router-link :to="'/update/'+ product.productId" class="btn btn-primary">Update Product</router-link>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
  import {ref,computed, onMounted} from 'vue';
  import { useStore } from 'vuex'
import Header from '../components/Header.vue';
  export default {
  components: { Header },
    setup(){
      const store = useStore()
      let data=ref([]);
      let cart = ref([]);

      const getProductData = ()=>{
        data.value = JSON.parse(localStorage.getItem('allProducts'));
      }

      const addToCart = (product)=>{
        // cart.value = JSON.parse(localStorage.getItem('cart'));
        cart._rawValue=JSON.parse(localStorage.getItem('cart'))
        if(cart._rawValue.length>0){
          const isAvailable = cart._rawValue.find((p)=>p.productId==product.productId)
          if(isAvailable){
            console.log("Already available");
          }
          else{
            cart._rawValue.push(product);
            localStorage.setItem('cart',JSON.stringify(cart._rawValue))
          }
        }
        else{
          cart._rawValue.push(product);
          localStorage.setItem('cart',JSON.stringify(cart._rawValue))
        }
      }
      onMounted(()=>{
        getProductData();
        
      })
      return{
        data,
        addToCart,
      }
    }
  }
</script>

<style>
.all-product{
  display: flex;
  row-gap:10px;
  column-gap:10px;
  margin-top: 20px;
  flex-wrap:wrap;
}
</style>
