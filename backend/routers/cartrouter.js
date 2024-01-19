const express = require('express')

const {
    addToCart,
    getAllCart,
    getCartById,
    deleteCart
  } = require("../controllers/cartcontroller");
  

router.route("/add").post(addToCart);
router.route("/").get( getAllCart);
router.route("/:id").get(getCartById);
router.route("/delete/:id").delete(deleteCart);
module.exports = router;