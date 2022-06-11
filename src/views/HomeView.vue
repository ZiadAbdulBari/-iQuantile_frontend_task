<template>
<div>
  <Header/>
  
  <div id="controls-carousel" class="relative" data-carousel="slide">
    <div class="overflow-hidden relative h-[70vh] sm:h-64 xl:h-80 2xl:h-[70vh] z-0">
      <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="active">
      <img src="https://images.unsplash.com/photo-1502715837142-58627c477625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
      </div>

      <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
      <img src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
      </div>

      <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="active">
      <img src="https://images.unsplash.com/photo-1490247646175-cff5220d08b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
      </div>

      <!-- <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
      <img src="/docs/images/carousel/carousel-4.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
      </div>

      <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
      <img src="/docs/images/carousel/carousel-5.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
      </div> -->
    </div>
    <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
  </div>
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
