<template>
<div>
    <Header/>
    <div class="container">
        <div class="cart-product m-auto mt-2">
            <div v-for="(data,i) in cartData" :key="i">
                <div class="d-flex justify-content-between align-self-center ps-4 pe-4 pt-4 pb-4 bg-light mb-2 rounded">
                    <div>
                        <h5>{{data.title}}</h5>
                    </div>
                    <div class="d-flex">
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
                    <div>
                        <h5>{{data.price}}BDT</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from '../components/Header.vue';
    export default {
  components: { Header },
        setup(){
            let cartData = JSON.parse(localStorage.getItem('cart'));
            const changeQuantity=(status,productId,quantity)=>{
                let productQuantity = quantity;
                if(status=='increment'){
                    productQuantity++;
                }
                if(status=='decrement'){
                    if(productQuantity>0){
                        productQuantity--;
                    }
                }
                let index = cartData.findIndex((p)=>p.productId==productId);
                let data = cartData[index]
                data.quentity = productQuantity;
                data.price = data.price*productQuantity;
                cartData[index] = data;
                localStorage.setItem('cart',JSON.stringify(cartData));
                window.location.reload();
            }    

            return{
                changeQuantity,
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
</style>