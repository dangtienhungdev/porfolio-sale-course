const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

/* config template engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* config static files */
app.use(express.static(path.join(__dirname, 'public')));

/* router */
app.get('/', (req, res) => {
	res.send('Hello đặng tiến hưng!');
});

app.get('/courses', (req, res) => {
	res.render('sample.ejs');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
