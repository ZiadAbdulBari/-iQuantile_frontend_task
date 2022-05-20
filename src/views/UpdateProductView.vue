<template>
    <div class="container">
        <div class="wrapper m-auto">
            <form>
                <div class="d-flex justify-content-between ">
                    <div class="mb-3 product-id">
                        <label for="exampleInputEmail1" class="form-label">Product id</label>
                        <input v-model="productData.productId" type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3 category">
                        <label for="exampleInputPassword1" class="form-label">Category</label>
                        <input v-model="productData.category" type="text" class="form-control" id="exampleInputPassword1">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Title</label>
                    <input v-model="productData.title" type="text" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <textarea v-model="productData.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Quantity</label>
                        <input v-model="productData.quentity"  type="number" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Price</label>
                        <input v-model="productData.price" type="number" class="form-control" id="exampleInputPassword1">
                    </div>
                </div>
                <button type="submit" @click.prevent="updateProduct" class="btn btn-primary">Update Product</button>
            </form>
        </div>
        
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
  import { useStore } from 'vuex'
    import { useRouter, useRoute } from 'vue-router'
    export default {
        setup(){
            const store = useStore()
            const route = useRoute();
            const router = useRouter()
            let data=ref([]);
            let productData = ref({
                category:"",
                description:"",
                price:"",
                productId:"",
                quentity:"",
                title:"",
                userId:1,
            })
            const getProductData = ()=>{
                data.value = JSON.parse(localStorage.getItem('allProducts'));
                let product = data._rawValue.find((p)=>p.productId==route.params.id)
                
                productData._value.category=product.category
                productData._value.description=product.description
                productData._value.price=product.price
                productData._value.productId=product.productId
                productData._value.quentity=product.quentity
                productData._value.title=product.title
                productData._value.userId=1
                
            }
            const updateProduct = ()=>{
                // console.log(productData)
                // return
                store.commit('setUpdatedProduct',productData._rawValue);
                router.push({
                    name:'home'
                })

            }
            onMounted(()=>{
                store.dispatch('setProductData');
                getProductData();
            })
            return{
                productData,
                data,
                updateProduct
            }
        }
    }
</script>

<style>
.wrapper{
    max-width: 600px;
}
.product-id .category{
    width: 95%;
}
</style>