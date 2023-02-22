const express = require('express');
const router = express.Router();
const { getHomePage, getCourses } = require('../controllers/home.controller');

/* router */
router.get('/', getHomePage);

router.get('/courses', getCourses);

module.exports = router;
