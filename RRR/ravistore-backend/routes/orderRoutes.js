const express = require('express');
const { createOrder, getMyOrders, getAllOrders } = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, admin, getAllOrders).post(protect, createOrder);
router.route('/myorders').get(protect, getMyOrders);

module.exports = router;
