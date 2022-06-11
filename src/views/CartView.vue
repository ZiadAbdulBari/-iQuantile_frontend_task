<template>
<div>
    <Header/>
    <div class="container mx-auto relative">
        <div class="cart-product mt-5 w-[100%]">
            <div v-for="(data,i) in cartData" :key="i">
                <div class="flex items-center justify-between rounded bg-gray-50 px-5 py-5 mb-3">
                    <div class="cart-thumpnale">
                        <img :src="data.photoUrl" alt="" class="rounded">
                    </div>
                    <div class="product-name">
                        <h5>{{data.title}}</h5>
                    </div>
                    <div class="flex quantity">
                        <div>
                            <button @click.prevent="changeQuantity('increment',data.productId,data.quentity)">
                                +
                            </button>
                        </div>
                        <div>
                            <input type="text" :value="data.quentity" style="width:40px;text-align:center" class="rounded-md border focus:outline-none border-solid border-slate-300 mx-3" readonly>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="bg-[#D61C4E] mt-6 mb-6 h-[2px] w-[100%]"></div>
            <div class="total-price flex justify-end rounded bg-gray-50 px-5 py-5">
                <div class="text-2xl font-bold">Total Price : {{getTotalPrice}} BDT</div>
            </div>
        </div>
    </div>
    <div class="toast-wrapper" v-if="mgs!=''">
        <div class="toast-mgs" :class="{ 'success': type=='success','warning': type=='info'}">
            <p>{{mgs}}</p>
        </div>
  </div>
</div>
</template>

<script>
    import Header from '../components/Header.vue';
    import {onMounted, ref,reactive,toRefs, computed} from 'vue';
    import { useRouter } from 'vue-router';
    export default {
        components: { Header },
        setup(){
            const router = useRouter()
            let cartData = ref([]);
            let toast = reactive({
                mgs:'',
                type:'',
            })
            let totalPrice=ref(0)
            let isLoggedin = ref(JSON.parse(localStorage.getItem('isLoggedin')));
            cartData.value = JSON.parse(localStorage.getItem('cart'));

            const getTotalPrice = computed(()=>{
                totalPrice.value=0;
                for(let product of cartData.value){
                    totalPrice.value = product.totalPrice+totalPrice.value;
                }
                return totalPrice.value;
            })
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
                let data = cartData.value.filter(p=>p.productId!=productId);
                localStorage.setItem('cart',JSON.stringify(data));
                cartData.value = JSON.parse(localStorage.getItem('cart'));
                toastMgs('success');
            }
            const toastMgs = (mgsType)=>{
                if(mgsType=='info'){
                toast.mgs = "Already available"
                toast.type = mgsType
                }
                else if(mgsType=='success'){
                toast.mgs = "Successfully added"
                toast.type = mgsType
                }
                else if(mgsType=='error'){
                toast.mgs = "Error"
                toast.type = mgsType
                }
                setTimeout(()=>{
                toast.mgs = ""
                toast.type = ''
                },5000)
            }    
            onMounted(()=>{
               if(!isLoggedin.value){
                   router.push({
                       name:'home',
                   })
               } 
            });
            return{
                ...toRefs(toast),
                getTotalPrice,
                totalPrice,
                changeQuantity,
                deleteFromCart,
                cartData,
                isLoggedin
            }
        }
    }
</script>

<style>
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
    .toast-wrapper{
        width: 100%;
        height: auto;
        position: relative;
    }
    .toast-mgs{
        position: absolute;
        bottom: 20px;
        right: 20px;
        border-radius:5px 
    }
    .toast-mgs p{
        padding: 20px 20px;
        color: white;
        margin-bottom: 0;
    }
    .success{
        background-color: rgb(12, 139, 12);
    }
    
</style>