<template>
    <div class="container">
        <div class="d-flex">
            <div class="category bg-light p-2">
                <div>
                    <input type="checkbox" id="cat-1" class="me-2">
                    <label for="cat-1">Kids</label>
                </div>
                <div>
                    <input type="checkbox" id="cat-2" class="me-2">
                    <label for="cat-2">Women</label>
                </div>
                <div>
                    <input type="checkbox" id="cat-3" class="me-2">
                    <label for="cat-3">Men</label>
                </div>
            </div>
            <div class="search-item">
                <div class="search-product">
                    <div class="card" style="width: 18rem;" v-for="(product,i) in searchProducts" :key="i">
                        <img class="card-img-top" :src="product.photoUrl" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{product.title}}</h5>
                            <p class="card-text">Category: {{product.category}}</p>
                            <p class="card-text">Price: {{product.price}}</p>
                            <button @click.prevent="addToCart(product)" class="btn border border-dark">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {onMounted, ref,} from 'vue';
import { useRoute, useRouter } from 'vue-router';
    export default {
        setup(){
            const router = useRouter()
            const route = useRoute()
            let searchkey = ref(route.params.slug);
            let product = ref(JSON.parse(localStorage.getItem('allProducts')))
            let searchProducts = ref([]);
            let cart = ref([]);

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
            })
            return{
                addToCart,
                searchkey,
                product,
                searchProducts,
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