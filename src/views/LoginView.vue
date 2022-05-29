<template>
<div>
    <Header/>
    <div class="container">
        <div class="wrapper m-auto">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text text-danger" v-if="emailError!=''">{{emailError}}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
                    <div id="emailHelp" class="form-text text-danger" v-if="passwordError!=''">{{passwordError}}</div>
                </div>
                <button type="submit" @click.prevent="login()" class="btn btn-primary">Submit</button>
            </form>
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
            let userData = JSON.parse(localStorage.getItem('userData'));
            let errorMgs=reactive({
            emailError:'',
            passwordError:'',
          })
            const router = useRouter()
            const route = useRoute()
            const store = useStore()
            const signinFormValidation = ()=>{
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
.wrapper{
    max-width:600px;
}
</style>