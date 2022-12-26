import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;

const userStore = defineStore("user_store", {
  state: () => ({
    current_user: {
      masin: "123",
    },
  }),
  getters: {},
  actions: {
    //Register User
    async REGISTERUSER(user_data) {
      console.log("register work");
      axios
        .post("http://localhost:3000/user/signup", user_data)
        .then((respond) => {
          console.log("user register By Vue : ", respond);
        })
        .catch((err) => {
          console.log("Register Error By Vue");
        });
    },
    //Login User
    async LOGINUSER(user_data) {
      axios
        .post("http://localhost:3000/user/login", user_data)
        .then((respond) => {
          // console.log('user login By Vue : ',respond);
          localStorage.setItem("token", respond.data.token);
          this.current_user = respond.data.user;
          console.log(this.current_user);
        })
        .catch((err) => {
          console.log("Login Error By Vue");
        });
    }, //Call Refresh Token
    async refreshToken() {
      axios.get("http://localhost:3000/user/refresh").then((respond)=>{
        console.log('refresh respond is : ',respond);
        localStorage.setItem("token", respond.data.token);
      }).catch((err)=>{
        console.log('wrong token');
      });
    },
    //Check Token
    async getUser() {
      const token = localStorage.getItem("token");
      console.log("token : ", token);
      axios
        .get("http://localhost:3000/user/", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((respond) => {
          console.log("get after token: ", respond);
        })
        .catch((err) => {
            console.log('status : ',err.response.status);
            if(err.response.status===401){
                this.refreshToken();
            }
            else{
                console.log('none');
            }  console.log("Token Error By Vue s: ", err);
        });
    },
  },
});

export default userStore;
