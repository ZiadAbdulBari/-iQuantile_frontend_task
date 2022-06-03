<template>
    <div class="sticky-top">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img src="../assets/images/logo.png" alt="" style="max-width:120px;">
                </router-link>
                <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> -->
                <div class="input-group mb-3 m-auto">
                    <input v-model="searchKey" type="text" class="form-control" placeholder="Find your product" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button @click.prevent="searchProduct" class="btn btn-secondary search-btn" type="button" id="button-addon2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item me-3 ms-3">
                            <router-link to="/cart" class="nav-link text-dark position-relative" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>
                            <span class="position-absolute top-1 start-70 translate-middle badge cart-count p-0">
                                <p class="mb-0">0</p>
                                <!-- <span class="visually-hidden">unread messages</span> -->
                            </span>
                            </router-link>
                        </li>
                        <li class="nav-item me-3 ms-3" v-if="!isLoggedin">
                            <router-link to="/registration" class="nav-link text-dark" aria-current="page">Signup</router-link>
                        </li>
                        <li class="nav-item me-3 ms-3" v-if="!isLoggedin">
                            <router-link to="/login" class="nav-link text-dark" aria-current="page">Signin</router-link>
                        </li>
                    </ul>
                    <div class="dropdown me-3 ms-3" v-if="isLoggedin">
                        <div class="avater">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </div>
                        <div class="dropdown-content">
                            <router-link to="/update" class="nav-link text-dark" aria-current="page">Update Profile</router-link>
                            <a class="nav-link text-dark" href="#" aria-current="page" @click.prevent="signout()">Signout</a>
                        </div>
                    </div>
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
            const searchKey = ref('');
            isLoggedin.value = JSON.parse(localStorage.getItem('isLoggedin'));
            const searchProduct=()=>{
                if(searchKey!=''){
                    router.push({
                        path:'/search/'+searchKey.value
                    })
                }
                else{
                    console.log('invalid search key')
                }
            }
            const signout = ()=>{
                localStorage.setItem('isLoggedin',JSON.stringify(false));
                isLoggedin.value = false;
                router.push({
                    name:'home',
                })
            }
            return{
                searchKey,
                isLoggedin,
                searchProduct,
                signout,
            }
        }
    }
</script>

<style>
    .navbar-collapse {
        flex-grow: 0;
    }
    .input-group{
        width: 600px;
    }
    .cart-count{
        padding: 5px!important;
        border-radius: 50%;
        background-color: #D61C4E;
    }
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .avater{
        background-color: white;
        height: 40px;
        width: 40px;
        border-radius: 100%;
        text-align: center;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .search-btn, .search-btn:hover{
        background-color: #D61C4E;
        border: transparent;
    }
    .navbar-nav .nav-item{
        font-weight:500;
    }
    .form-control:focus{
        border-color: rgb(209, 209, 209);
        box-shadow: none!important;;
    }
</style>