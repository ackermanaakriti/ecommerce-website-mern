const productdata = require("../models/productmodel");

// create product
const createProduct = async (req, res, next) => {
  const pdata = req.body;
  console.log( "its create product comin data",pdata);
    const createdData=await productdata.create(pdata);
  res.status(202).json({msg:"product addes succesfully",createdData });
};

const getDetailproduct = async (req,res)=>
{
     let productid = await productdata.findById(req.params.id);
    //  if (!productid) {
    //     return res.status(502).json("product not found to delete");
    //   }
      res.status(200).json({msg:"got product detial",productid} );

}

// get all product
const getAllproducts = async (req, res) => {
  const allproducts = await productdata.find();
  res.status(200).json({ mgs: "this is controller", allproducts });
};



// update product

const productUpdate = async (req, res) => {
  let idproduct = await productdata.findById(req.params.id);
  if (!idproduct) {
    return res.status(502).json("product not found to update");
  }
  const updatedproduct = await productdata.findByIdAndUpdate(
    idproduct,
    req.body,
    { new: true }
  );
  res.status(200).json({ msg: "product has been updated", updatedproduct });
};

// delete product
const productDelete = async (req, res) => {
  let idproduct = await productdata.findById(req.params.id);
  if (!idproduct) {
    return res.status(502).json("product not found to delete");
  }
  const removedproduct = await productdata.findByIdAndDelete(idproduct);
  res.status(502).json("produce deleted successfully");
};

// get products by category
const getproductCategory= async (req, res) => {
  try {
    const category = req.params.category;
    const products = await productdata.find({ category: category });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  getAllproducts,
  createProduct,
  productUpdate,
  productDelete,
  getDetailproduct,
  getproductCategory
};
