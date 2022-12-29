import { defineStore } from "pinia";
import axios from "axios";

const productStore = defineStore("ProductStore", {
  //Creating States
  state: () => ({
    //Get Products For Catalog Page Main Side
    products: [],
    //Get Products Filter Item For Filter Side
    filters: {},
  }),

  //Creating Getters
  getters: {
    //Get All Products
    GETPRODUCTS: (state) => state.products,
    //Get All Filters
    GETFILTERS: (state) => {
      // state.filters
      console.log(object);
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
            return this.products;
        })
        .catch((err) => {
          console.log("get Phone Marks Doesnt Work : ", err);
        });
    },
  },
});

export default productStore;
