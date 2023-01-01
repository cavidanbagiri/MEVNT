import fs from "fs";

import ProductSchema from "../models/products.js";
import CategorySchema from "../models/categories.js";
import PhoneSchema from "../models/phones_sub_document.js";

class ProductService {

  //Fetch Documents According to Catalog Name 
  static async fetchAllDocument(catalog_name, query){  
    //Find Catalog Id From Category Collection
    const catalog = await this.findCatalogId(catalog_name);
    let products = null;
    //If is there  Query , find method work else all product return back
    if(Object.keys(query).length){
      products = await ProductSchema.find(query)
      .populate('ProductId')
    }
    else{
      products = await ProductSchema.find({
        CategoryId:catalog
      })
      .populate('ProductId')
    }
    return products;
  }


  //Find Category Id For Catalog Name
  static async findCatalogId(catalog_name){
    const category = await CategorySchema.findOne({
      category_name : catalog_name
    });
    return category;
  }

  //Find Product With Id
  static async fetchById(data_id){
    const product = await ProductSchema.findOne({
      ProductId:data_id
    }).populate('ProductId');
    return product; 
  }

  //Insert Document To Collection
  static async insertData() {
    fs.readFile("./mobile_data1.json", "utf8", async (err, data) => {
      if (err) {
        console.log("Err : ", err);
        return;
      }
      //Add Phones To Collection
      this.addSubDocument(data);
    });
  }


  //Insert Data To Phones Sub Document
  static async addSubDocument(data) {
    let total = 0;
    const products = JSON.parse(data);
    for await (let i of products.results) {
      total++;
      // if(total===1 || total===2){
      //   continue
      // }
      delete i["objectId"];
      delete i["Cell_Phone_Brands"];
      delete i["Cell_Phone_Models"];

      let colors = []; //Create Colors For Phones
      let somes = i["Colors"]?.split("|"); //Split Colors
      i["Price"] = 120
      i["Discount"] = 5
      i["Point"] = 3
      await somes?.filter((item) => colors.push(item.trim())); //Add Colors in Colors Array
      i["Colors"] = colors;
        //Create One Phone Document
        const new_Phone = await new PhoneSchema(i);
        new_Phone.save();
        //Find Category From Category Schema
        const category_doc = await CategorySchema.findOne({
            category_name:"Phones"
        });
        console.log('Category Name : ',category_doc);
        //Add PhoneDoc to Product Schema
        const newItem = await new ProductSchema({
            CategoryId:category_doc,
            ProductId:new_Phone,
            Model:i["Model"],
            Brand:i["Brand"],
            Thumbnail:i["Thumbnail"],
            Price:120,
            Discount:5,
            Point:3,
            Colors:colors
        })
      newItem.save();
      if (total === 13) return;
    }
  }

}

export default ProductService;
