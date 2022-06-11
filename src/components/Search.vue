<template>
    <div class="container mx-auto">
        <div class="flex">
            <div class="category bg-light p-2">
                <div>
                    <input type="checkbox" id="cat-1" class="mr-2">
                    <label for="cat-1">Kids</label>
                </div>
                <div>
                    <input type="checkbox" id="cat-2" class="focus:outline-none focus:border-sky-500 mr-2">
                    <label for="cat-2">Women</label>
                </div>
                <div>
                    <input type="checkbox" id="cat-3" class="mr-2">
                    <label for="cat-3">Men</label>
                </div>
            </div>
            <ProductCard :products="searchProducts" />
        </div>
    </div>
</template>

<script>
    import {onMounted, ref,} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductCard from './ProductCard.vue';
    export default {
  components: { ProductCard },
        setup(){
            const router = useRouter()
            const route = useRoute()
            let searchkey = ref(route.params.slug);
            let product = ref(JSON.parse(localStorage.getItem('allProducts')))
            let searchProducts = ref([]);
            let cart = ref([]);
            let categories = ref([]);

            // const getCategory = ()=>{
            //     categories.value = searchProducts.value.filter(cat=>categories.value.includes(cat.category))
            // }

            const searchProduct = ()=>{
                searchProducts.value = product.value.filter(p=>p.title.toLowerCase().includes(searchkey.value.toLowerCase()))
            }
            const addToCart = (product)=>{
                cart.value =JSON.parse(localStorage.getItem('cart'))
                if(cart.value.length>0){
                const isAvailable = cart.value.find((p)=>p.productId==product.productId)
                if(isAvailable){
                    console.log("Already available");
                }
                else{
                    cart.value.push(product);
                    localStorage.setItem('cart',JSON.stringify(cart.value))
                }
                }
                else{
                cart.value.push(product);
                localStorage.setItem('cart',JSON.stringify(cart.value))
                }
            }
            onMounted(()=>{
                searchProduct();
                // getCategory();
            })
            return{
                addToCart,
                searchkey,
                product,
                searchProducts,
                categories,
            }
        }
    }
</script>

<style>
    .category{
        width: 20%;
    }
    .search-item{
        width: 75%;
    }
    .search-product{
        display: flex;
        row-gap:20px;
        column-gap:20px;
        margin-top: 20px;
        flex-wrap:wrap;
    }
</style>