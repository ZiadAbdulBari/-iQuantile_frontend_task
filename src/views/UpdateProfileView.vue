<template>
    <Header/>
    <div class="container mx-auto">
        <div class="flex items-center justify-center h-screen gap-10">
            <div class="">
                <div class="bg-black h-40 w-40"></div>
            </div>
            <div class="">
                <form @submit="updateProfile()">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="block mb-3">Name</label>
                        <input type="text" v-model="name" class="rounded-md border focus:outline-none border-solid border-slate-300 h-10 w-[500px] p-5" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="block mb-3">Email</label>
                        <input type="email" v-model="email" class="rounded-md border focus:outline-none border-solid border-slate-300 h-10 w-[500px] p-5" id="exampleInputPassword1" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="block mb-3">Address</label>
                        <input type="text" v-model="address" class="rounded-md border focus:outline-none border-solid border-slate-300 h-10 w-[500px] p-5" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="block mb-3">Contact Number</label>
                        <input type="text" v-model="contactNumber" class="rounded-md border focus:outline-none border-solid border-slate-300 h-10 w-[500px] p-5" id="exampleInputPassword1">
                    </div>
                    <div class="mt-8 text-center">
                            <!-- <button type="submit" @click.prevent="login()" class="bg-[#D61C4E] px-8 py-1 rounded text-white">Submit</button> -->
                            <button type="submit" class="bg-[#D61C4E] px-8 py-1 rounded text-white" @click.prevent="updateProfile()">Update Product</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref,reactive, toRefs } from '@vue/runtime-core'
  import { useStore } from 'vuex'
    import { useRouter, useRoute } from 'vue-router'
import Header from '../components/Header.vue'
    export default {
  components: { Header },
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