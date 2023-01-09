import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;

const userStore = defineStore("user_store", {
  state: () => ({
    current_user: null,
    basket_size:0,
    favorites_size:0,
    current_tab:0,
  }),
  getters: {
    GETCURRENTUSER:(state) => state.current_user,
    GETCURRENTTAB:(state) => state.current_tab,
    GETBASKETSIZE:(state) => {
      const user = JSON.parse(sessionStorage.getItem('user'));
      state.basket_size = user?.basket?.length;
      return state.basket_size;
    },
    GETFAVORITESSIZE:(state) => {
      const user = JSON.parse(sessionStorage.getItem('user'));
      state.favorites_size = user?.favorites?.length;
      return state.favorites_size;
    },
  },
  actions: {
    //Change User Login Register Tab
    CHANGETAB(){ this.current_tab = this.current_tab === 0 ? 1 : 0; },
    //Register User
    async REGISTERUSER(user_data) {
      axios
        .post("http://localhost:3000/user/signup", user_data)
        .then((respond) => {
          this.current_tab = 0;
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
          localStorage.setItem("token", respond.data.token);
          delete respond.data.user.password;
          delete respond.data.user.cards;
          this.current_user = respond.data.user;
          sessionStorage.setItem('user',JSON.stringify(this.current_user));
        })
        .catch((err) => {
          console.log("Login Error By Vue");
        });
    },
    //Adding Profile Image
    async addProfileImage(data){
      const token = localStorage.getItem("token");
      console.log('token ',token);
      axios.post('http://localhost:3000/user/settings/addprofileimage', data,
      {
        headers: { authorization: `Bearer ${token}` },
      }
      )
      .then((respond)=>{
        // this.current_user = respond.data;
        // sessionStorage.setItem('user',JSON.stringify(this.current_user));
        // console.log('image upload respond : ', respond);
      }).catch((err)=>{
        console.log('image upload error : ', err);
      })
    },
    //Call Refresh Token
    async refreshToken() {
      axios
        .get("http://localhost:3000/user/refresh")
        .then((respond) => {
          console.log("refresh respond is : ", respond);
          localStorage.setItem("token", respond.data.token);
        })
        .catch((err) => {
          console.log("wrong token");
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
          console.log("status : ", err.response.status);
          if (err.response.status === 401) {
            this.refreshToken();
          } else {
            console.log("none");
          }
          console.log("Token Error By Vue s: ", err);
        });
    },
    //Add Basket
    async addBasket(product) {
      console.log("adding product is : ", product);
      const token = localStorage.getItem("token");
      console.log("token is : ", token);
      axios
        .get("http://localhost:3000/user/addbasket/" + product._id, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((respond) => {
          console.log("vue side : ", respond);
          this.current_user = respond.data;
          sessionStorage.setItem('user',JSON.stringify(this.current_user));
          this.basket_size+=1;
        })
        .catch((err) => {
          console.log("axios error for addbasket product : ", err);
        });
    },
    //Add Basket
    async addFavorite(product) {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:3000/user/addfavorite/" + product._id, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((respond) => {
          this.current_user = respond.data;
          sessionStorage.setItem('user',JSON.stringify(this.current_user));
          this.favorites_size+=1;
        })
        .catch((err) => {
          console.log("axios error for addfavorite product : ", err);
        });
    },
  },
});

export default userStore;
