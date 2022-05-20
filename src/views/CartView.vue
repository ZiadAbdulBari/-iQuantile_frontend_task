<template>
    <div class="container">
        <div class="cart-product">
            <div v-for="(data,i) in cartData" :key="i">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">{{data.title}}</h5>
                    <p class="card-text">{{data.description}}</p>
                    <p class="card-text">Category: {{data.category}}</p>
                    <p class="card-text">Parice: {{data.price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup(){
            const cartData = JSON.parse(localStorage.getItem('cart'));
            return{
                cartData
            }
        }
    }
</script>

<style>
    .cart-product{
        display: flex;
        flex-wrap:wrap;
        row-gap:10px;
        column-gap:10px;
        margin-top: 20px;
    }
</style>