<template>
<div>
  <Header/>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/images/banner2.avif" class="d-block" alt="..." style="width:100vw;height:95vh">
      </div>
      <div class="carousel-item">
        <img src="../assets/images/banner.avif" class="d-block" alt="..." style="width:100vw;height:95vh">
      </div>
      <div class="carousel-item">
        <img src="../assets/images/banner3.avif" class="d-block" alt="..." style="width:100vw;height:95vh">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container">
    <div class="category">

    </div>
    <div class="all-product">

    <div v-for="(product,i) in data" :key="i">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="product.photoUrl" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{product.title}}</h5>
          <!-- <p class="card-text">{{product.description}}</p> -->
          <p class="card-text">Category: {{product.category}}</p>
          <p class="card-text">Price: {{product.price}}</p>
          <button @click.prevent="addToCart(product)" class="btn border border-dark">Add to cart</button>
        </div>
      </div>
    </div>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
  import {ref,computed, onMounted} from 'vue';
  import { useStore } from 'vuex'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
  export default {
  components: { Header, Footer },
    setup(){
      const store = useStore()
      let data=ref([]);
      let cart = ref([]);

      const getProductData = ()=>{
        store.dispatch('setProductData');
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
  row-gap:20px;
  column-gap:20px;
  margin-top: 20px;
  flex-wrap:wrap;
}
.card-img-top{
  width:286px;
  height: 191px;
}
</style>
