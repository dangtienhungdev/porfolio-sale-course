const connection = require('../configs/database');

const getHomePage = (req, res) => {
	return res.render('homepage.ejs');
};

const getCourses = (req, res) => {
	res.render('sample.ejs');
};

const postCreateUser = (req, res) => {
	console.log(
		'🚀 ~ file: home.controller.js:13 ~ postCreateUser ~ req.body:',
		req.body
	);
	const { email, username, city } = req.body;
	connection.query(
		`insert into Users(email, name, city) values (?, ?, ?)`,
		[email, username, city],
		function (err, results) {
			console.log(
				'🚀 ~ file: home.controller.js:25 ~ postCreateUser ~ results:',
				results
			);
			res.send('Created user success!');
		}
	);
};

module.exports = { getHomePage, getCourses, postCreateUser };
