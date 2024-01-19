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
  const productId = req.params.id;
  try {
    const data = await productdata.findById(productId);
    console.log(data)
    if (!data) {
      return res.status(404).json({ error: "product not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
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
    console.log(category)
    const products = await productdata.find({ category });
    console.log(products)
    if (!products)
    {
      res.json('product not found')
      console.log('productnot found')
    }
    res.json({products:'helo',products});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const searchProduct= async(req,res)=>
{

  const  querydata  = req.body.query;
  console.log(querydata)
 try{ 
  const results = await productdata.find({
    $or: [
      { name: { $regex: querydata, $options: 'i' } },
      { category: { $regex: querydata, $options: 'i' } },
    ],
  });
  res.json(results)

}
 
  catch(err) {
       console.log(err);
       res.json({'error ':err})
  }


}

module.exports = {
  getAllproducts,
  createProduct,
  productUpdate,
  productDelete,
  getDetailproduct,
  getproductCategory,
  searchProduct

};
