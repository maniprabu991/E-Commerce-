// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
// Change from '/'
router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get a specific product
router.get('/:id', getProduct, (req, res) => {
  res.json(res.product);
});

// Middleware to get a specific product by ID
async function getProduct(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.product = product;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = router;
