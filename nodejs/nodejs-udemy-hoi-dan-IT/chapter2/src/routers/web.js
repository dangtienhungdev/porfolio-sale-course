const express = require('express');
const router = express.Router();
const {
	getHomePage,
	getCourses,
	postCreateUser,
} = require('../controllers/home.controller');

/* router */
router.get('/', getHomePage);
router.post('/create-user', postCreateUser);
router.get('/courses', getCourses);

module.exports = router;
