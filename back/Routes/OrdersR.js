const express = require('express');
const OrderC = require('../Controllers/OrdersC');
const router = express.Router();

router.get('/allorders' , OrderC.getAllOrders);
router.post('/payment' , OrderC.saveOrder);

module.exports = router;