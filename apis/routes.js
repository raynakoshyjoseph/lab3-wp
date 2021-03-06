const express = require('express');
const productController = require('../controllers/productController');
const clientController = require('../controllers/clientController');

//define a router and create routes
const router = express.Router();
const app= express();

//routes for dynamic processing of products
//-----------------------------------------------
//route for listing all products
router.get('/api/catalog', productController.getCatalog);
router.get('/api/article/:id', productController.getProductByID);

//export router
module.exports = router;

//routes for dynamic processing of clients
//-----------------------------------------------
//route for registration
router.post('/api/register', clientController.registerControl);
//route for login
router.post('/api/login', clientController.loginControl);
module.exports = router;