import ProductService from "../services/product.js";

class ProductController {
  
    //Fetch Documents According to Catalog Name
  static async fetchAllDocument(req, res) {
    try{
        let catalog_name = req.params.catalog_name;
        console.log('cat name : ',catalog_name);
        ProductService.fetchAllDocument(catalog_name).then((respond)=>{
            console.log('Fetch respond is : ', respond);
            res.send(respond);
        }).catch((err)=>{
            console.log('Fetch Documents Error : ',err);
            res.json({"Fetch Error ":err});
        })
    }
    catch(err){
        console.log("Insert Data Err: ", err);
    }
  }

  //Insert Data
  static async insertProduct(req, res) {
    try {
      ProductService.insertData();
      res.send("insert doc work");
    } catch (err) {
      console.log("Insert Data Err: ", err);
    }
  }
}

export default ProductController;
