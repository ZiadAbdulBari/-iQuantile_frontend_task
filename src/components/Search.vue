<template>
    <div class="container mx-auto">
        <div class="flex">
            <div class="category bg-light p-2">
                <p class="text-[25px] mb-6">Filter Products</p>
                <div class="mb-2" v-for="(cat,i) in categories" :key="i">
                    <input type="checkbox" :id="cat" class="mr-2 rounded border focus:outline-none focus:ring-0 focus:border-[#D61C4E] checked:bg-[#D61C4E] border-solid border-slate-300" @click="searchProduct(cat)">
                    <label :for="cat">{{cat}}</label>
                </div>
                
            </div>
            <ProductCard :products="filteredProduct.length>0?filteredProduct:searchProducts" />
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
            let category=ref('');
            let selectedCategory = ref([]);
            let filteredProduct = ref([]);

            const getCategory = ()=>{
                for(let cat of searchProducts.value){
                    if( categories.value.indexOf(cat.category)==-1){
                        categories.value.push(cat.category);
                    }
                }
            }

            const searchProduct = (cat)=>{
                console.log(cat);
                filteredProduct.value=[];
                if(!cat){
                    searchProducts.value = product.value.filter(p=>p.title.toLowerCase().includes(searchkey.value.toLowerCase()))
                }
                if(cat){
                    if(selectedCategory.value.includes(cat)){
                        selectedCategory.value=selectedCategory.value.filter(c=>c!=cat);
                    }
                    else{
                        selectedCategory.value=[...selectedCategory.value,cat];
                    }
                    filteredProduct.value=[];
                    for(let selectedCat of selectedCategory.value){
                        let product;
                        product = searchProducts.value.filter(p=>p.category==selectedCat)
                        for(let p of product){
                            filteredProduct.value = [...filteredProduct.value,p];
                        }
                    }
                }
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
                getCategory();
            })
            return{
                addToCart,
                searchProducts,
                searchProduct,
                
                searchkey,
                product,
                categories,
                category,
                selectedCategory,
                filteredProduct,
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