const express = require('express');

const router = express.Router();

/* router */
router.get('/', (req, res) => {
	res.send('Hello đặng tiến hưng!');
});

router.get('/courses', (req, res) => {
	res.render('sample.ejs');
});

module.exports = router;
