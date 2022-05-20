<template>
<div>
<Header/>
  <div class="container">
    <div class="wrapper m-auto">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input v-model="userSignup.name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input  v-model="userSignup.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input v-model="userSignup.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
          <input v-model="userSignup.confirmPassword" type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        
        <button @click="signup()" type="submit" class="btn btn-primary">Signup</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
  import {ref,onMounted} from 'vue'
  import { useStore } from 'vuex';
  import { useRouter, useRoute } from 'vue-router'
import Header from '../components/Header.vue';
    export default {
  components: { Header },

        setup(){
          const store = useStore();
          const router = useRouter()
          const route = useRoute()
          let userSignup=ref({
            id:'',
            name:'',
            email:'',
            password:'',
            confirmPassword:''
          });
          const signupFormValidation = ()=>{
            if(userSignup._rawValue.name.length<3){
              console.log("Write valid name");
              return false;
            }
            if(userSignup._rawValue.email.length<3){
              console.log("Write valid email");
              return false;
            }
            if(!(/[a-z]/.test(userSignup._rawValue.password) && /[A-Z]/.test(userSignup._rawValue.password) && /[0-9]/.test(userSignup._rawValue.password))){
              console.log("Write valid password");
              return false;
            }
            if(userSignup._rawValue.password!=userSignup._rawValue.confirmPassword){
              console.log("Write valid confirm password");
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
            userSignup._rawValue.id=1;
            console.log(userSignup._rawValue);
            // let allProduct = ref([])
            localStorage.setItem('userData',JSON.stringify(userSignup._rawValue));
            const cart = ref([])
            localStorage.setItem('cart',JSON.stringify(cart._rawValue))
            // localStorage.setItem('allProduct',JSON.stringify(allProduct._rawValue));
            // store.commit('setUserInfo');
            router.push({
              name:'login'
              }); 
          }
          // onMounted(()=>{
          //   test()
          //   })
          return{
            userSignup,
            signup,
          }
        }
    }
</script>

<style>

</style>
