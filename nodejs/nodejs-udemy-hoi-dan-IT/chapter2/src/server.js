const express = require('express');
require('dotenv').config();
const configViewEngine = require('./configs/viewEngine');
const webRoutes = require('./routers/web');
const connection = require('./configs/database');

const app = express();
const port = process.env.PORT || 3000;

/* config template engine */
configViewEngine(app);

/* router */
app.use('/', webRoutes);

// simple query
connection.query('select * from Users', function (err, results, fields) {
	console.log('🚀 ~ file: server.js:27 ~ results:', results); // results contains rows returned by server
	// console.log('🚀 ~ file: server.js:27 ~ fields:', fields); // fields contains extra meta data about results, if available
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
