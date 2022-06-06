<template>
<div>
    <Header/>
    <div class="container mx-auto">
        <div class="flex justify-center items-center h-screen">
            <div class="wrapper bg-gray-100 p-8">
                <div class="alert alert-danger" role="alert" v-if="isUserDataFound===false">
                    {{mgs}}
                </div>
                <div class="login-form">
                    <form @submit="login">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="">Email address</label>
                            <input v-model="email" type="email" class="mt-3 w-full rounded-md border focus:outline-none border-solid border-slate-300 h-10 p-5" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <div id="emailHelp" class="" v-if="emailError!=''">{{emailError}}</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="">Password</label>
                            <input v-model="password" type="password" class="mt-3 w-full rounded-md border focus:outline-none border-solid border-slate-300 h-10 p-5" id="exampleInputPassword1">
                            <div id="emailHelp" class="" v-if="passwordError!=''">{{passwordError}}</div>
                        </div>
                        <div class="mt-8 text-center">
                            <button type="submit" @click.prevent="login()" class="bg-[#D61C4E] px-8 py-1 rounded text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import { ref,reactive,toRefs } from '@vue/reactivity'
    import { useRouter, useRoute } from 'vue-router'
    import { useStore } from 'vuex';
    import Header from '../components/Header.vue';
    export default {
  components: { Header },
        setup(){
            let email = ref('');
            let password = ref('');
            let mgs = ref('');
            let userData = JSON.parse(localStorage.getItem('userData'));
            let isUserDataFound = ref(true);
            let errorMgs=reactive({
                emailError:'',
                passwordError:'',
            })
            const router = useRouter()
            const route = useRoute()
            const store = useStore()
            const signinFormValidation = ()=>{
                if(userData!=null){
                    isUserDataFound.value = true;
                    if(userData.email!=email.value){
                        errorMgs.emailError = 'Invalid email.';
                        return false;
                    }
                    if(userData.password!=password.value){
                        errorMgs.passwordError = 'Invalid password.';
                        return false;
                    }
                    else{
                        return true
                    }
                }
                else{
                    console.log("Wrong credincial")
                    isUserDataFound.value = false;
                    mgs.value = "Wrong credincial";

                    return;
                }
            }
            const login = ()=>{
                if(!signinFormValidation()){
                    return false;
                }
                
                localStorage.setItem('isLoggedin',JSON.stringify(true));
                store.dispatch('setProductData');
                const cart = ref([])
                localStorage.setItem('cart',JSON.stringify(cart.value));
                router.push({
                    name:'home'
                })
                
            }
            return{
                ...toRefs(errorMgs),
                userData,
                email,
                password,
                login
            }
        }
    }
</script>

<style>
/* .login-form{
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%,-50%);
    width:500px;
} */
.wrapper{
    /* position: relative; */
    width:400px;
    /* width: 100%;
    height: 100vh; */
}
/* .btn-primary{
    background-color: #D61C4E !important;
    border: transparent;
} */
/* .btn-primary:focus{
    box-shadow: none;
    border: transparent;
} */
</style>