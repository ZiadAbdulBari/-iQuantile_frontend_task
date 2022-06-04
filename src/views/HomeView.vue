<template>
<div>
  <Header/>
  
  <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
  </div> -->
  <div class="container mx-auto">
    <!-- <div class="category">
    </div> -->
    <div class="all-product">
      <div v-for="(product,i) in getProductData" :key="i">
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
  <div class="toast-wrapper" v-if="mgs!=''">
    <div class="toast-mgs" :class="{ 'success': type=='success','warning': type=='info','error': type=='error'}">
      <p>{{mgs}}</p>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
  import {ref,computed, onMounted, reactive, toRefs} from 'vue';
  import { useStore } from 'vuex'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
  export default {
  components: { Header, Footer },
    setup(){
      const store = useStore()
      let cart = ref([]);
      let toast = reactive({
        mgs:'',
        type:'',
      })
      let isLoggedin = ref(JSON.parse(localStorage.getItem('isLoggedin')));
      const getProductData = computed(()=>{
        return store.state.allProducts;
      })

      const addToCart = (product)=>{
        if(!isLoggedin.value){
          toastMgs('error');
          return;
        } 
        cart.value=JSON.parse(localStorage.getItem('cart'))
        if(cart.value.length>0){
          const isAvailable = cart.value.find((p)=>p.productId==product.productId)
          if(isAvailable){
            toastMgs('info');
          }
          else{
            cart.value.push(product);
            localStorage.setItem('cart',JSON.stringify(cart.value))
            toastMgs('success');
          }
        }
        else{
          cart.value.push(product);
          localStorage.setItem('cart',JSON.stringify(cart.value))
          toastMgs('success');
        }
      }
      const toastMgs = (mgsType)=>{
        if(mgsType=='info'){
          toast.mgs = "Already available"
          toast.type = mgsType
        }
        else if(mgsType=='success'){
          toast.mgs = "Successfully added"
          toast.type = mgsType
        }
        else if(mgsType=='error'){
          toast.mgs = "Please log in."
          toast.type = mgsType
        }
        setTimeout(()=>{
          toast.mgs = ""
          toast.type = ''
        },4000)
      }
      onMounted(()=>{
        store.dispatch('setProductData');
        store.dispatch('getProfileData');
        
        
      })
      return{
        ...toRefs(toast),
        addToCart,
        getProductData,
        isLoggedin
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
.toast-wrapper{
 width: 100%;
 height: auto;
 position: relative;
}
.toast-mgs{
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius:5px 
}
.toast-mgs p{
  padding: 20px 20px;
  color: white;
  margin-bottom: 0;
}
.success{
  background-color: rgb(12, 139, 12);
}
.warning{
  background-color: rgb(222, 145, 0);
}
.error{
  background-color: rgb(165, 29, 11);
}
</style>
