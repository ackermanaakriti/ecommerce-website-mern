const  express = require( "express");

const {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} = require ('../controllers/categorycontrollers') ;

const router = express.Router();

//routes
// create category

router.route('/createcategory').post(createCategoryController)

//update category

router.route('/updatecategory/:id').put(updateCategoryController)


//getALl category

router.route('/getcategory').get(categoryControlller)


//single category
router.route('/singlecategory/:id').get(singleCategoryController)

//delete category

router.route('/deletecategory/:id').get(deleteCategoryCOntroller)


module.exports= router;