import ProductController from '../controllers/product.js';
import express from 'express';
const router = express.Router();

router.post('/insert', ProductController.insertProduct);
router.get('/:catalog_name', ProductController.fetchAllDocument);

export default router;

// import fs from 'fs';
// import fetch from 'node-fetch';
// Get Mobile Data
// router.get("/", async (req, res) => {
// (async () => {
//     const response = await fetch(
//         'https://parseapi.back4app.com/classes/Dataset_Cell_Phones_Model_Brand?skip=15&limit=200',
//       {
//         headers: {
//           'X-Parse-Application-Id': 'MEqvn3N742oOXsF33z6BFeezRkW8zXXh4nIwOQUT', // This is the fake app's application id
//           'X-Parse-Master-Key': 'uZ1r1iHnOQr5K4WggIibVczBZSPpWfYbSRpD6INw', // This is the fake app's readonly master key
//         }
//       }
//     );
//     const data = await response.json(); // Here you have the data that you need

//       fs.writeFile('./mobile_data3.json',JSON.stringify(data, null, 2),err=>{
//         if(err)console.log('Error Happen : ',err);
//         console.log('file write');
//       })

//   })();
// });
