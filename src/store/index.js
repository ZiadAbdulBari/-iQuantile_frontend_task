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
                photoUrl:"https://images.unsplash.com/flagged/photo-1564468781192-f023d514222d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:100,
                productId:1,
                quentity:1,
                title:"Shirt",
                userId:1,
            },
            {
                category:"Women",
                photoUrl:"https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:150,
                productId:2,
                quentity:1,
                title:"T-shirt",
                userId:1,
            },
            {
                category:"Kid",
                photoUrl:"https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                productId:3,
                quentity:1,
                title:"Pant",
                userId:1,
            },
            {
                category:"Women",
                photoUrl:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:500,
                productId:3,
                quentity:1,
                title:"Cotton T-shirt",
                userId:1,
            },
            {
                category:"Toy",
                photoUrl:"https://images.unsplash.com/photo-1586458873452-7bdd7401eabd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                productId:3,
                quentity:1,
                title:"Toy Toyota car",
                userId:1,
            },
            {
                category:"Accesories",
                photoUrl:"https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                productId:3,
                quentity:1,
                title:"Men Watch",
                userId:1,
            },
            {
                category:"Accesories",
                photoUrl:"https://images.unsplash.com/photo-1625591340248-6d289000f96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                productId:3,
                quentity:1,
                title:"Sunglass",
                userId:1,
            },
            {
                category:"Accesories",
                photoUrl:"https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                productId:3,
                quentity:1,
                title:"Wallet",
                userId:1,
            },
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
        // setUpdatedProduct(state,value){
        //     let products = JSON.parse(localStorage.getItem('allProducts'));
        //     let data = products.findIndex((p)=>p.productId==value.productId);
        //     products[data]=value;
        //     localStorage.setItem('allProducts', JSON.stringify(products))
        // }
    }
})

export default store;