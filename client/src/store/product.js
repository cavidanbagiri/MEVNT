import { defineStore } from "pinia";
import axios from "axios";

const productStore = defineStore("ProductStore", {
  //Creating States
  state: () => ({
    //Get Products For Catalog Page Main Side
    products: [],
    //Get Products Filter Item For Filter Side
    filters: {},
    //Get Category Name For Creating Filter Items
    category_name:null,
  }),

  //Creating Getters
  getters: {
    //Get All Products
    GETPRODUCTS: (state) => state.products,
    //Get All Filters
    GETFILTERS: (state) => {
      // state.filters
      console.log(state.products[0]);
    },
  },

  //Create Actions
  actions: {
    async FETCHPRODUCTS(category_name) {
      category_name = category_name[0].toUpperCase()+category_name.slice(1);
      await axios
        .get(`http://localhost:3000/product/${category_name}`)
        .then(async(respond) => {
            this.products = await respond.data;
            this.category_name = category_name;
            return this.products;
        })
        .catch((err) => {
          console.log("get Phone Marks Doesnt Work : ", err);
        });
    },
  },
});

export default productStore;
