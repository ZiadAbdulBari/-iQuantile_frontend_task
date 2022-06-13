<template>
    <div class="sticky z-10 top-0 bg-gray-50 pt-3 pb-3 z-10">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <router-link to="/">
                    <img src="../assets/images/logo.png" alt="" style="max-width:120px;">
                </router-link>
                <div class="w-3/5 relative">
                <form @submit="searchProduct">
                    <input v-model="searchKey" type="text" class="w-full rounded-md border focus:outline-none focus:ring-0 focus:border-[#D61C4E] border-solid border-slate-300 h-11 pl-5 pr-9 pt-2 pb-2 relative" placeholder="Find your product">
                    <button @click.prevent="searchProduct" class="search absolute bottom-0 right-0 bg-[#D61C4E] rounded-r-md" type="button" id="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </form>
                </div>
                <div class="flex gap-x-10" id="">
                    <ul class="flex gap-x-10">
                        <li class="">
                            <router-link to="/cart" class="" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>
                            <!-- <span class="">
                                <p class="">0</p>
                                <span class="visually-hidden">unread messages</span>
                            </span> -->
                            </router-link>
                        </li>
                        <li class="" v-if="!isLoggedin">
                            <router-link to="/registration" class="" aria-current="page">Signup</router-link>
                        </li>
                        <li class="" v-if="!isLoggedin">
                            <router-link to="/login" class="" aria-current="page">Signin</router-link>
                        </li>
                    </ul>
                    <div class="dropdown" v-if="isLoggedin">
                        <div class="avater">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#D61C4E" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </div>
                        <div class="dropdown-content leading-9">
                            <router-link to="/update" class="block" aria-current="page">Update Profile</router-link>
                            <a class="block" href="#" aria-current="page" @click.prevent="signout()">Signout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        border-radius: 100%;
        text-align: center;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 200px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .search{
        padding: 14px 11px;
    }
    
</style>