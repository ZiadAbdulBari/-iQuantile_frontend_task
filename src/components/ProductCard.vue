<template>
    <div>
        <div class="all-product flex flex-wrap justify-start">
            <div v-for="(product,i) in products" :key="i" class="bg-zinc-100 rounded-md overflow-hidden">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="product.photoUrl" alt="Card image cap">
                <div class="card-body px-3 py-6 leading-9">
                    <p class="font-medium text-lg">{{product.title}}</p>
                    <p class="card-text">Category: {{product.category}}</p>
                    <p class="font-medium">Price: {{product.price}} BDT</p>
                    <div class="flex">
                    <button @click.prevent="addToCart(product)" class="px-3 py-0 bg-[#D61C4E] rounded text-white mt-5">Add to cart</button>
                    <!-- <button @click.prevent="addToCart(product)" class="px-3 py-0 bg-[#D61C4E] rounded text-white mt-5">Add to cart</button> -->
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref,computed, onMounted, reactive, toRefs} from 'vue';
    export default {
        props:{
            products:{
                requied:true,
                type:Object
            }
        },
        setup(){
            let cart = ref([]);
            let isLoggedin = ref(JSON.parse(localStorage.getItem('isLoggedin')));
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
            return{
                isLoggedin,
                addToCart,
            }
        }
    }
</script>

<style>
.all-product{
  /* display: flex;
  row-gap:20px;
  column-gap:20px; */
  margin-top: 20px;
  /* flex-wrap:wrap; */
}
.card-img-top{
  width:286px;
  height: 191px;
}
</style>