# RaviStore Backend

A complete e-commerce backend for `RaviStore` built with Node.js, Express, MongoDB, and JWT authentication.

## Features
- User registration and login with JWT
- Password hashing with bcrypt
- Product CRUD APIs
- Order creation and user/admin order retrieval
- Authentication middleware
- Error handling middleware
- MVC folder structure
- Role-based access control (admin/user)
- API testing with Postman collection

## Role-Based Access Control

### User Roles
- **User**: Can register, login, view products, create orders, view their own orders
- **Admin**: All user permissions + create/update/delete products, view all orders

### Protected Routes
- Product CRUD operations require admin role
- Order creation requires user authentication
- Viewing all orders requires admin role

## Folder structure
```
ravistore-backend/
  config/
    db.js
    seed.js
  controllers/
    authController.js
    orderController.js
    productController.js
  middleware/
    authMiddleware.js
    errorMiddleware.js
  models/
    Order.js
    Product.js
    User.js
  routes/
    authRoutes.js
    orderRoutes.js
    productRoutes.js
  .env.example
  package.json
  README.md
  RaviStore.postman_collection.json
  server.js
```

## Setup
1. Copy `.env.example` to `.env`
2. Update `MONGO_URI` and `JWT_SECRET`
3. Install dependencies:
   ```bash
   npm install
   ```
4. Seed the database with sample data:
   ```bash
   npm run seed
   ```
5. Start the server:
   ```bash
   npm run dev
   ```

## Sample Data (after seeding)
- **Admin**: admin@ravistore.com / admin123
- **User**: user@ravistore.com / user123
- Sample products and orders

## Available API routes

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products (public)
- `GET /api/products/:id` - Get single product (public)
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Orders
- `POST /api/orders` - Create order (authenticated user)
- `GET /api/orders/myorders` - Get user's orders (authenticated user)
- `GET /api/orders` - Get all orders (admin only)

### Status
- `GET /api/status` - Health check

## API Testing with Postman

1. Import `RaviStore.postman_collection.json` into Postman
2. Set the `base_url` variable to your server URL (default: `http://localhost:5000`)
3. Test the following flow:

### Testing Flow
1. **Login as User**: Use "Login User" request to get JWT token
2. **Login as Admin**: Use "Login Admin" request to get admin JWT token
3. **Get Products**: Test public product access
4. **Create Order**: Use user token to create an order
5. **Get My Orders**: View user's orders
6. **Admin Operations**: Use admin token for product CRUD and viewing all orders

### Authentication
Include `Authorization: Bearer <token>` header for protected routes.

## Notes
- Use `Authorization: Bearer <token>` for protected routes.
- Orders require valid `product` IDs and quantities.
- Admin role is required for product management and viewing all orders.
