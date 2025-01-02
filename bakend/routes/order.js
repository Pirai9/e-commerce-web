const express=require('express');
const { createOrder } = require('../controllers/order_controller');
const router=express.Router();

router.route('/order').post(createOrder);

module.exports=router;