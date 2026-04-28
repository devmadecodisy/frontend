const mongoose = require('mongoose');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const bcrypt = require('bcryptjs');

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@ravistore.com',
      password: adminPassword,
      role: 'admin'
    });

    // Create regular user
    const userPassword = await bcrypt.hash('user123', 10);
    const user = await User.create({
      name: 'Regular User',
      email: 'user@ravistore.com',
      password: userPassword,
      role: 'user'
    });

    // Create sample products
    const products = await Product.insertMany([
      {
        name: 'Laptop',
        description: 'High-performance laptop for work and gaming',
        price: 999.99,
        category: 'Electronics',
        countInStock: 50,
        image: '/images/laptop.jpg'
      },
      {
        name: 'Smartphone',
        description: 'Latest smartphone with advanced features',
        price: 699.99,
        category: 'Electronics',
        countInStock: 100,
        image: '/images/smartphone.jpg'
      },
      {
        name: 'Headphones',
        description: 'Noise-cancelling wireless headphones',
        price: 199.99,
        category: 'Electronics',
        countInStock: 75,
        image: '/images/headphones.jpg'
      },
      {
        name: 'Book',
        description: 'Bestselling novel',
        price: 19.99,
        category: 'Books',
        countInStock: 200,
        image: '/images/book.jpg'
      }
    ]);

    // Create sample order
    await Order.create({
      user: user._id,
      orderItems: [
        { product: products[0]._id, quantity: 1 },
        { product: products[1]._id, quantity: 2 }
      ],
      totalPrice: 999.99 + (699.99 * 2)
    });

    console.log('Data seeded successfully');
    console.log('Admin login: admin@ravistore.com / admin123');
    console.log('User login: user@ravistore.com / user123');
  } catch (error) {
    console.error('Seeding error:', error);
  }
};

module.exports = seedData;
