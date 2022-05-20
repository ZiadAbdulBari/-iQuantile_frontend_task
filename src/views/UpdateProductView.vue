<template>
    <div class="container">
        <div class="wrapper m-auto">
            <form>
                <div class="d-flex justify-content-between ">
                    <div class="mb-3 product-id">
                        <label for="exampleInputEmail1" class="form-label">Product id</label>
                        <input v-model="data.productId" type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3 category">
                        <label for="exampleInputPassword1" class="form-label">Category</label>
                        <input v-model="data.category" type="text" class="form-control" id="exampleInputPassword1">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Title</label>
                    <input v-model="data.title" type="text" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <textarea v-model="data.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Quantity</label>
                        <input v-model="data.quentity"  type="number" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Price</label>
                        <input v-model="data.price" type="number" class="form-control" id="exampleInputPassword1">
                    </div>
                </div>
                <button type="submit" @click.prevent="updateProduct" class="btn btn-primary">Update Product</button>
            </form>
        </div>
        
    </div>
</template>

<script>
import { onMounted,computed, ref } from '@vue/runtime-core'
  import { useStore } from 'vuex'
    import { useRouter, useRoute } from 'vue-router'
    export default {
        setup(){
            const store = useStore()
            const route = useRoute();
            const router = useRouter()
            let productData = ref({
                category:"",
                description:"",
                price:"",
                productId:"",
                quentity:"",
                title:"",
                userId:1,
            })
            const data = computed(() => {
                let allproduct = store.state.allProducts
                let product = allproduct.find((p)=>p.productId==route.params.id)
                productData = {
                    category:product.category,
                    description:product.description,
                    price:product.price,
                    productId:product.productId,
                    quentity:product.quentity,
                    title:product.title,
                    userId:1,
                }
                return productData;

            })
            const updateProduct = ()=>{
                store.commit('setUpdatedProduct',data._value);
                router.push({
                    name:'home'
                })

            }
            return{
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