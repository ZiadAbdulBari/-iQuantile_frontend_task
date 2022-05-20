<template>
    <div class="container">
        <div class="wrapper">

        </div>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <!-- <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> -->
            <button type="submit" @click="login()" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    import { ref } from '@vue/reactivity'
    import { useRouter, useRoute } from 'vue-router'
    export default {
        setup(){
            let email = ref('');
            let password = ref('');
            const router = useRouter()
            const route = useRoute()
            let userData = JSON.parse(localStorage.getItem('userData'));
            
            const login = ()=>{
                if(userData.email==email._value && userData.password==password._value){
                    localStorage.setItem('isLoggedin',JSON.stringify(true));
                    router.push({
                        name:'home'
                    })
                }
                else{
                    console.log(userData.email, email)
                    console.log(userData.password, password)
                    console.log('pls provite valid credincial')
                }
                return false
            }
            return{
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