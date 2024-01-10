const express = require('express');
const formidable = require('express-formidable')
const { getAllproducts, createProduct, productUpdate, productDelete,getDetailproduct,displayImage, getproductCategory} = require('../controllers/productcontroller');

const router = express.Router();
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname);
    }
}); 

const upload = multer({ storage: storage });


router.route('/products').get(getAllproducts)

// router.route('/forimg').post(upload.single('image'),displayImage)
router.route('/createproduct').post(  createProduct)
router.route('/products/:category').get(getproductCategory)
router.route('/products/:id').put(productUpdate).delete(productDelete).get(getDetailproduct)


module.exports=router;