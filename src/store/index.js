import { createStore } from "vuex";

const store = createStore({
    state:{
        userSignup:{
            id:'',
            name:'',
            email:'',
            password:'',
            confirmPassword:''

        },
        allProducts:[
            {
                category:"Men",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:100,
                productId:1,
                quentity:1,
                title:"Shirt",
                userId:1,
            },
            {
                category:"Women",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:150,
                productId:2,
                quentity:1,
                title:"T-shirt",
                userId:1,
            },
            {
                category:"Kid",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                productId:3,
                quentity:1,
                title:"Pant",
                userId:1,
            }
        ],
        cartData:[],
    },
    actions:{
        setProductData({commit}){
            commit('setProductDataToLocalStorage');
        }
    },
    mutations: {
        setProductDataToLocalStorage(state){
            localStorage.setItem('allProducts',JSON.stringify(state.allProducts))
        },
        setUserInfo(state,payload) {
            let data = JSON.parse(localStorage.getItem('userData'));
            state.userSignup = data;
        },
        setUpdatedProduct(state,value){
            let products = JSON.parse(localStorage.getItem('allProducts'));
            let data = products.findIndex((p)=>p.productId==value.productId);
            products[data]=value;
            localStorage.setItem('allProducts', JSON.stringify(products))
        }
    }
})

export default store;