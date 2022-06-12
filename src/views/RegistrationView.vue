<template>
<div>
<!-- <Header/> -->
  <div class="container mx-auto">
    <div class="flex justify-center items-center h-screen">
      <div class="reg-wrapper bg-gray-100 p-8">
        <div class="mb-8">
          <img src="../assets/images/logo.png" alt="" style="max-width:150px;" class="mx-auto">
        </div>
        <form>
          <div class="">
            <label for="exampleInputEmail1" class="">Name</label>
            <input v-model="name" type="text" class="mt-3 mb-3 w-full rounded-md border focus:outline-none focus:ring-0 focus:border-[#D61C4E] border-solid border-slate-300 h-10 p-5" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="text-rose-500" v-if="nameError!=''">*{{nameError}}</div>
          </div>
          <div class="">
            <label for="exampleInputEmail1" class="">Email</label>
            <input  v-model="email" type="email" class="mt-3 mb-3 w-full rounded-md border focus:outline-none focus:ring-0 focus:border-[#D61C4E] border-solid border-slate-300 h-10 p-5" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="text-rose-500" v-if="emailError!=''">*{{emailError}}</div>
          </div>
          <div class="">
            <label for="exampleInputPassword1" class="">Password</label>
            <input v-model="password" type="password" class="mt-3 mb-3 w-full rounded-md border focus:outline-none focus:ring-0 focus:border-[#D61C4E] border-solid border-slate-300 h-10 p-5" id="exampleInputPassword1">
            <div id="emailHelp" class="text-rose-500" v-if="passwordError!=''">*{{passwordError}}</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="">Confirm Password</label>
            <input v-model="confirmPassword" type="password" class="mt-3 w-full rounded-md border focus:outline-none focus:ring-0 focus:border-[#D61C4E] border-solid border-slate-300 h-10 p-5" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="text-rose-500" v-if="confirmPasswordError!=''">*{{confirmPasswordError}}</div>
          </div>
          <div class="mt-8 text-center">
            <button @click.prevent="signup()" type="submit" class="bg-[#D61C4E] px-8 py-1 rounded text-white">Signup</button>
          </div>
          <p class="mt-4 font-semibold text-center">If you have already an account, please <router-link to="/login" class="text-[#D61C4E]">signin</router-link></p>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
  import {reactive,onMounted, toRefs,ref} from 'vue'
  import { useStore } from 'vuex';
  import { useRouter, useRoute } from 'vue-router'
// import Header from '../components/Header.vue';
    export default {
  // components: { Header },

        setup(){
          const store = useStore();
          const router = useRouter()
          const route = useRoute()
          let userSignup=reactive({
            id:'',
            name:'',
            email:'',
            address:'',
            password:'',
            confirmPassword:'',
            contactNumber:'',
          });
          let errorMgs=reactive({
            nameError:'',
            emailError:'',
            passwordError:'',
            confirmPasswordError:'',
          })
          const signupFormValidation = ()=>{
            if(userSignup.name.length<3){
              errorMgs.nameError = 'Name should be 3 charecters.';
              return false;

            }
            if(userSignup.email.length<3){
              errorMgs.emailError = 'Please provide a valid email.';
              return false;
            }
            if(!(/[a-z]/.test(userSignup.password) && /[A-Z]/.test(userSignup.password) && /[0-9]/.test(userSignup.password))){
              errorMgs.passwordError = 'Password should be contain atleast one uppercase,lowercase and number.';
              return false;
            }
            if(userSignup.password!=userSignup.confirmPassword){
              errorMgs.confirmPasswordError = 'Password did not matched';
              return false;
            }
            else{
              return true
            }
          }
          
          const signup = ()=>{
            if(!signupFormValidation()){
              return false
            }
            userSignup.id=1;
            store.commit('setProfileData');
            localStorage.setItem('userData',JSON.stringify(userSignup));
            localStorage.setItem('isLoggedin',JSON.stringify(true));
            const cart = ref([])
            localStorage.setItem('cart',JSON.stringify(cart.value));
            // store.dispatch('setProductData');
            router.push({
              name:'home'
              }); 
          }
          // onMounted(()=>{
          //   test()
          // })
          return{
            ...toRefs(userSignup),
            ...toRefs(errorMgs),
            signup,
          }
        }
    }
</script>

<style>
.reg-wrapper{
  max-width: 600px;
}
/* .btn-primary{
    background-color: #D61C4E !important;
    border: transparent;
}
.btn-primary:focus{
    box-shadow: none;
    border: transparent;
} */
</style>
