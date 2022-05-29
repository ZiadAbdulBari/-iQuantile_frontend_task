<template>
<div>
<Header/>
  <div class="container">
    <div class="wrapper m-auto">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text text-danger" v-if="nameError!=''">{{nameError}}</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input  v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text text-danger" v-if="emailError!=''">{{emailError}}</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
          <div id="emailHelp" class="form-text text-danger" v-if="passwordError!=''">{{passwordError}}</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
          <input v-model="confirmPassword" type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text text-danger" v-if="confirmPasswordError!=''">{{confirmPasswordError}}</div>
        </div>
        <div class="text-center">
          <button @click.prevent="signup()" type="submit" class="btn border-dark">Signup</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
  import {reactive,onMounted, toRefs,ref} from 'vue'
  import { useStore } from 'vuex';
  import { useRouter, useRoute } from 'vue-router'
import Header from '../components/Header.vue';
    export default {
  components: { Header },

        setup(){
          const store = useStore();
          const router = useRouter()
          const route = useRoute()
          let userSignup=reactive({
              id:'',
              name:'',
              email:'',
              password:'',
              confirmPassword:''
            
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
            console.log(userSignup);
            localStorage.setItem('userData',JSON.stringify(userSignup));
            localStorage.setItem('isLoggedin',JSON.stringify(true));
            const cart = ref([])
            localStorage.setItem('cart',JSON.stringify(cart.value));
            store.dispatch('setProductData');
            router.push({
              name:'home'
              }); 
          }
          // onMounted(()=>{
          //   test()
          //   })
          return{
            ...toRefs(userSignup),
            ...toRefs(errorMgs),
            signup,
          }
        }
    }
</script>

<style>

</style>
