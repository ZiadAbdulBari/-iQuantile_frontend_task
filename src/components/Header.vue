<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img src="../assets/images/logo.png" alt="" style="max-width:120px;">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="input-group mb-3 m-auto">
                    <input type="text" class="form-control" placeholder="Find your product" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/cart" class="nav-link text-dark" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="!isLoggedin">
                            <router-link to="/registration" class="nav-link text-dark" aria-current="page">Signup</router-link>
                        </li>
                        <li class="nav-item" v-if="!isLoggedin">
                            <router-link to="/login" class="nav-link text-dark" aria-current="page">Signin</router-link>
                        </li>
                        <li class="nav-item" v-if="isLoggedin">
                            <a class="nav-link text-dark" href="#" aria-current="page" @click.prevent="signout()">Signout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import {ref} from 'vue';
import { useRouter } from 'vue-router';
    export default {
        setup(){
            const router = useRouter()
            const isLoggedin = ref(false);
            isLoggedin.value = JSON.parse(localStorage.getItem('isLoggedin'));
            const signout = ()=>{
                localStorage.setItem('isLoggedin',JSON.stringify(false));
                isLoggedin.value = false;
                router.push({
                    name:'home',
                })
            }
            return{
                isLoggedin,
                signout,
            }
        }
    }
</script>

<style>
    .input-group{
        width: 600px;
    }
</style>