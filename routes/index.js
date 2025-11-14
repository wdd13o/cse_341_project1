const express = require('express');
const router = express.Router();

// Serve Swagger UI from routes/swagger.js
try {
	const swaggerRouter = require('./swagger');
	router.use('/', swaggerRouter);
} catch (e) {
	// ignore if swagger router isn't present
}

const usersController = require('../controllers/users');

// Root route - do NOT return DB data here. Direct users to /project1 for data.
router.get('/', (req, res) => {
	res.send('Welcome — access data at /users');
});

// Single user route (kept specific to avoid conflicts)
router.get('/user/:id', usersController.getSingle);

// Legacy plural routes for compatibility: /users and /users/:id
router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getSingle);

module.exports = router;







//  "/api-docs": {
//       "get": {
//         "description": "",
//         "responses": {
//           "default": {
//             "description": ""
//           }
//         }
//       }
//     },