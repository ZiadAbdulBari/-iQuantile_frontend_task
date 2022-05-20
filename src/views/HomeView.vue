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
      const data = computed(() => store.state.allProducts)

      const addToCart = (product)=>{
        let cart = JSON.parse(localStorage.getItem('cart'));
        console.log("==",cart)
        cart.push(product);
        if(cart.lenght>0){
          const isAvailable = cart.find((p)=>p.productId==product.productId)
          if(isAvailable){
            console.log("already ase");
          }
          else{
            cart.push(product);
            localStorage.setItem('cart',JSON.stringify(cart))
          }
        }
        else{
          cart.push(product);
          localStorage.setItem('cart',JSON.stringify(cart))
        }
      }
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
}
</style>
