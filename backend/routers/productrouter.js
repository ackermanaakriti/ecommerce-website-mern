const express = require('express');
const formidable = require('express-formidable')
const { getAllproducts, searchProduct, createProduct, productUpdate, productDelete,getDetailproduct,getproductCategory} = require('../controllers/productcontroller');

const router = express.Router();
const multer = require('multer')
const path = require('path');
const { authenticateToken } = require('../middleware/requireSignin');






router.route('/products').get(getAllproducts)

// router.route('/forimg').post(upload.single('image'),displayImage)
router.route('/createproduct').post(  createProduct)
router.route('/product/:category').get(getproductCategory)
router.route('/productt').post(searchProduct)
router.route('/products/:id').put(productUpdate).delete(productDelete).get(getDetailproduct)


module.exports=router;