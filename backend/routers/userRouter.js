const express = require('express');
const {RegisterUser,logIn, testcontroller} = require('../controllers/userController');
const { isAdmin } = require('../middleware/requireSignin');
const {authenticateToken} = require('../middleware/requireSignin');

const router= express.Router();

router.route('/register').post(RegisterUser);
router.route('/login').post(logIn);
router.route('/protectedroute').get(authenticateToken,   testcontroller);


module.exports = router;
