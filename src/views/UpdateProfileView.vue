<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <div class="profile-info">
                <p><span>Name: </span>{{profileData.name}}</p>
                <p><span>Email: </span>{{profileData.email}}</p>
                <p><span>Address: </span>{{profileData.address}}</p>
                <p><span>Contact: </span>{{profileData.contactNumber}}</p>
            </div>
            <div class="profile-update">
                <form @submit="updateProfile()">
                    <div class="d-flex justify-content-between ">
                        <div class="mb-3 product-id">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3 category">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="email" v-model="email" class="form-control" id="exampleInputPassword1" readonly>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" v-model="address" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contact Number</label>
                        <input type="text" v-model="contactNumber" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="updateProfile()">Update Product</button>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref,reactive, toRefs } from '@vue/runtime-core'
  import { useStore } from 'vuex'
    import { useRouter, useRoute } from 'vue-router'
    export default {
        setup(){
            const store = useStore()
            const route = useRoute();
            const router = useRouter()
            const profileData = computed(()=>{
                return store.state.userSignup;
            })
            const userData = reactive(JSON.parse(localStorage.getItem('userData')));
            const updateProfile = ()=>{
                localStorage.setItem('userData',JSON.stringify(userData));
                store.dispatch('getProfileData');
            }
            onMounted(()=>{
                store.dispatch('getProfileData');
            })
            return{
                updateProfile,
                profileData,
                ...toRefs(userData)
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
.profile-info .profile-update{
    width: 49%;
}
</style>