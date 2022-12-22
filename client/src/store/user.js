
import {defineStore} from 'pinia';
import axios from 'axios';

const userStore = defineStore('user_store',{
    state:()=>({
        current_user : {
            "masin":'123'
        },
    }),
    getters:{

    },
    actions: {
        async REGISTERUSER(user_data){
            console.log('register work');
            axios.post('http://localhost:3000/user/signup',user_data).then((respond)=>{
                console.log('user register By Vue : ',respond);
            }).catch(err=>{
                console.log('Register Error By Vue');
            })
        }
    }
})

export default userStore
