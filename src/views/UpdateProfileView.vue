<template>
    <div class="container">
        <div class="wrapper m-auto">
            <form>
                <div class="d-flex justify-content-between ">
                    <div class="mb-3 product-id">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3 category">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="text" class="form-control" id="exampleInputPassword1">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input type="text" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contact Number</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">Update Product</button>
            </form>
        </div>
        
    </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
  import { useStore } from 'vuex'
    import { useRouter, useRoute } from 'vue-router'
    export default {
        setup(){
            const store = useStore()
            const route = useRoute();
            const router = useRouter()
            const userData = ref({});
            const getProfileData = computed(()=>{
                return store.state.userSignup;
            })
            userData.value = getProfileData
            onMounted(()=>{
                // getProfileData;
            })
            return{
                getProfileData,
                userData
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