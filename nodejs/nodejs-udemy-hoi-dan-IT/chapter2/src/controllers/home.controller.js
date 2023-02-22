const getHomePage = (req, res) => {
	res.send('home page');
};

const getCourses = (req, res) => {
	res.render('sample.ejs');
};

module.exports = { getHomePage, getCourses };
