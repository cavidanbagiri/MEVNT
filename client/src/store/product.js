import { defineStore } from "pinia";
import axios from "axios";

const productStore = defineStore("ProductStore", {
  //Creating States
  state: () => ({
    //Get Products For Catalog Page Main Side
    products: [],
    //Get Products Filter Item For Filter Side
    filters_key: {},
    //Get Category Name For Creating Filter Items
    category_name: null,
  }),

  //Creating Getters
  getters: {
    //Get All Products
    GETPRODUCTS: (state) => state.products,
    //Get All Filters
    GETFILTERS: (state) => {
      return state.filters_key;
    },
  },

  //Create Actions
  actions: {
    //Fetch All Products With Category Name
    async FETCHPRODUCTS(category_name) {
      category_name = category_name[0].toUpperCase() + category_name.slice(1);
      this.category_name = category_name;
      await axios
        .get(`/api/product/${category_name}`)
        .then(async (respond) => {
          //Take All Products
          this.products = await respond.data;
          await this.FETCHONEPRODUCTFORFILTERS(this.products[0].ProductId._id);
          for await (let i of this.products) {
            for await (let j of Object.keys(this.filters_key)) {
              if(j==='Colors'){
                //Colors in Array and foreach for colors array and add inside of colors section
                for(let e of i.ProductId[j]){
                  e = e[0].toLowerCase() + e.slice(1);
                  this.filters_key[j].add(e);
                }
                continue
              }
              else{
                this.filters_key[j].add(i.ProductId[j]);
              }
            }
          }
          let temp = [];
          for(let i of this.filters_key.Brand){
            temp.push(i);
          }
          this.filters_key.Brand = temp;
          console.log(this.filters_key);
          return this.products;
        })
        .catch((err) => {
          console.log("get Phone Marks Doesnt Work : ", err);
        });
    },
    //Fetch One Document And Populate It For Provide Filters
    async FETCHONEPRODUCTFORFILTERS(data_id) {
      await axios
        .get(`http://localhost:3000/product/${data_id}`)
        .then(async (respond) => {
          let temp = [...respond.data.ProductId.Filters];
          for await (let i of temp) {
            this.filters_key[i] = new Set();
          }
        })
        .catch((err) => {
          console.log("fetch One Product Id Return Back TO An Error : ", err);
        });
    },
    //Filter Product With Filtered Object
    async FETCHPRODUCTWITHFILTEROBJECT(filt_object){
      //Get All Url
      let url = `http://localhost:3000/product/${this.category_name}`;
      //Create Query
      if(filt_object.value.length > 0 ){
        url+='?';
        for(let i in filt_object.value){
          for (const [key, value] of Object.entries(filt_object.value[i])) {
            url += key+"="+value;
          }
          i++;
          if(i<filt_object.value.length){
            url+="&";
          }
        }
        console.log('url : ',url);
        await axios.get(url).then(async(respond)=>{
          this.products = await respond.data;
        }).catch((err)=>{
          console.log('Client Side Error filter : ',err);
        })
      }
      else{
        await this.FETCHPRODUCTS(this.category_name);
      }
      
    }
  },
});

export default productStore;
