

import ProductService from '../services/product.js';

class ProductController {

    //Insert Data
    static async insertProduct(req, res){
        try{
            ProductService.insertData();
            res.send('insert doc work');
        }
        catch(err){
            console.log('Insert Data Err: ',err);
        };
    }



}


export default ProductController