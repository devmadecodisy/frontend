const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Product description is required']
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: 0
    },
    countInStock: {
      type: Number,
      required: [true, 'Stock count is required'],
      min: 0,
      default: 0
    },
    category: {
      type: String,
      required: [true, 'Product category is required']
    },
    image: {
      type: String,
      required: false,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);
