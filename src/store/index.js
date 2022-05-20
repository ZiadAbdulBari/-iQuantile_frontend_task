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
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat",
                price:100,
                productId:1,
                quentity:10,
                title:"Shirt",
                userId:1,
            },
            {
                category:"Women",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat",
                price:150,
                productId:2,
                quentity:5,
                title:"T-shirt",
                userId:1,
            },
            {
                category:"Kid",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat",
                price:250,
                productId:3,
                quentity:20,
                title:"Pant",
                userId:1,
            }
        ],
        cartData:[],
    },
    mutations: {
        setUserInfo(state,payload) {
            let data = JSON.parse(localStorage.getItem('userData'));
            state.userSignup = data;
        },
        setUpdatedProduct(state,value){
            let data = state.allProducts.findIndex((p)=>p.productId==value.productId);
            state.allProducts[data]=value;
            localStorage.setItem('productData', JSON.stringify(state.allProducts))
        }
    }
})

export default store;