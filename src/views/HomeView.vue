<template>
<div>
  <Header/>
  <div id="carouselExampleControls" class="carousel slide relative carousel-fade" data-bs-ride="carousel" data-carousel="slide">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        class="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        class="block w-full"
        alt="Camera"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        class="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
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
    <ProductCard :products="getProductData" />
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
import ProductCard from '../components/ProductCard.vue';

  export default {
  components: { Header, Footer, ProductCard, },
    setup(){
      const store = useStore()
      let toast = reactive({
        mgs:'',
        type:'',
      })
      const getProductData = computed(()=>{
        return store.state.allProducts;
      })
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
        getProductData,
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
