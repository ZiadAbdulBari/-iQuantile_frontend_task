<template>
<div>
    <Header/>
    <div class="container">
        <div class="cart-product m-auto mt-2">
            <div v-for="(data,i) in cartData" :key="i">
                <div class="d-flex justify-content-between align-self-center ps-4 pe-4 pt-4 pb-4 bg-light mb-2 rounded">
                    <div class="cart-thumpnale">
                        <img :src="data.photoUrl" alt="" class="rounded">
                    </div>
                    <div class="product-name">
                        <h5>{{data.title}}</h5>
                    </div>
                    <div class="d-flex quantity">
                        <div>
                            <button @click.prevent="changeQuantity('increment',data.productId,data.quentity)">
                                +
                            </button>
                        </div>
                        <div>
                            <input type="text" :value="data.quentity" style="width:40px;text-align:center">
                        </div>
                        <div>
                            <button @click.prevent="changeQuantity('decrement',data.productId,data.quentity)">
                                -
                            </button>
                        </div>
                    </div>
                    <div class="price">
                        <h5>{{data.totalPrice}}BDT</h5>
                    </div>
                    <div @click.prevent="deleteFromCart(data.productId)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import Header from '../components/Header.vue';
    import {onMounted, ref} from 'vue';
    export default {
        components: { Header },
        setup(){
            let cartData = ref([]);
            cartData.value = JSON.parse(localStorage.getItem('cart'));
            
            const changeQuantity=(status,productId,quantity)=>{
                let productQuantity = quantity;
                if(status=='increment'){
                    productQuantity++;
                }
                if(status=='decrement'){
                    if(productQuantity>1){
                        productQuantity--;
                    }
                }
                
                let index = cartData.value.findIndex((p)=>p.productId==productId);
                let data = cartData.value[index]
                data.quentity = productQuantity;
                data.totalPrice = data.price*productQuantity;
                cartData.value[index] = data;
                localStorage.setItem('cart',JSON.stringify(cartData.value));
            }
            const deleteFromCart=(productId)=>{
                console.log(productId);
                let data = cartData.value.filter(p=>p.productId!=productId);
                localStorage.setItem('cart',JSON.stringify(data));
                cartData.value = JSON.parse(localStorage.getItem('cart'));
            }    
            // onMounted(()=>{
            //     cartData
            // });
            return{
                changeQuantity,
                deleteFromCart,
                cartData
            }
        }
    }
</script>

<style>
    .cart-product{
        max-width: 800px;
        /* display: flex;
        flex-wrap:wrap;
        row-gap:10px;
        column-gap:10px;
        margin-top: 20px; */
    }
    .cart-thumpnale{
        width: 100px;
    }
    .cart-thumpnale img{
        width: 100%;
    }
    .product-name{
        width: 250px;
    }
    .quantity{
        width: 150px;
    }
</style>