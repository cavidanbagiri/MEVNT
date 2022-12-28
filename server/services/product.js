

import { json } from 'express';
import fs from 'fs';
import Product from '../models/products.js'; 

class ProductService{

    //Insert Document To Collection
    static async insertData(){

        fs.readFile('./mobile_data1.json','utf8',async(err, data)=>{
            if(err){
                console.log('Err : ',err);
                return
            }
            let total = 0;
            const products = JSON.parse(data);
            for await(let i of products.results){
                total++;
                delete i['objectId'];
                delete i['Cell_Phone_Brands'];
                delete i['Cell_Phone_Models'];
                let colors = []; 
                let somes =  i['Colors'].split('|');
                await somes.filter((item)=>colors.push(item.trim()));
                i['Colors'] = colors;
                const temp = await new Product(i);
                temp.save();
                if(total===1) 
                    return
                }
        })

    }


}


export default ProductService;