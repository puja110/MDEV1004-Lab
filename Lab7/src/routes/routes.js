const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../model/user');
const Movie = require('../model/movies'); 

const movieController = require('../controllers/controller.js');
const middleware = require('../middleware/middleware.js');
const authController = require('../controllers/authcontroller.js');

// router.get('/login', function (req, res) {
//     res.render('login', { error: req.flash('error') });  
// });

// router.get('/register', (req, res) => {
//     res.render('register');
// });
// Register a new user
router.post('/register', authController.registerUser);

// Log in a user
router.post('/login', authController.loginUser);

// Log out a user
router.get('/logout', authController.logoutUser);

// Example protected route that requires authentication
router.post('/protected', middleware.isAuthenticated, authController.protectedRoute);

router.post('/movies', middleware.logCreateRequest, movieController.createMovie);
router.get('/movies', middleware.logReadRequest, movieController.getAllMovies);
router.put('/movies/:id', middleware.logUpdateRequest, movieController.updateMovie);
router.delete('/movies/:id', middleware.logDeleteRequest, movieController.deleteMovie);

module.exports = router;
