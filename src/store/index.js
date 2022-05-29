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
                totalPrice:100,
                productId:1,
                quentity:1,
                title:"Shirt",
                userId:1,
                stock:6
            },
            {
                category:"Women",
                photoUrl:"https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:150,
                totalPrice:150,
                productId:2,
                quentity:1,
                title:"T-shirt",
                userId:1,
                stock:10
            },
            {
                category:"Kid",
                photoUrl:"https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                totalPrice:250,
                productId:3,
                quentity:1,
                title:"Pant",
                userId:1,
                stock:2
            },
            {
                category:"Women",
                photoUrl:"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:500,
                totalPrice:500,
                productId:4,
                quentity:1,
                title:"Cotton T-shirt",
                userId:1,
                stock:15
            },
            {
                category:"Toy",
                photoUrl:"https://images.unsplash.com/photo-1586458873452-7bdd7401eabd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                totalPrice:250,
                productId:5,
                quentity:1,
                title:"Toy Toyota car",
                userId:1,
                stock:7
            },
            {
                category:"Accesories",
                photoUrl:"https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                totalPrice:250,
                productId:6,
                quentity:1,
                title:"Men Watch",
                userId:1,
                stock:13
            },
            {
                category:"Accesories",
                photoUrl:"https://images.unsplash.com/photo-1625591340248-6d289000f96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                totalPrice:250,
                productId:7,
                quentity:1,
                title:"Sunglass",
                userId:1,
                stock:30
            },
            {
                category:"Accesories",
                photoUrl:"https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.",
                price:250,
                totalPrice:250,
                productId:8,
                quentity:1,
                title:"Wallet",
                userId:1,
                stock:2
            },
        ],
        cartData:[],
    },
    actions:{
        setProductData({commit}){
            commit('setProductDataToLocalStorage');
        },

    },
    mutations: {
        setProductDataToLocalStorage(state){
            localStorage.setItem('allProducts',JSON.stringify(state.allProducts))
        },
        setUserInfo(state) {
            let data = JSON.parse(localStorage.getItem('userData'));
            state.userSignup = data;
        },
    }
})

export default store;