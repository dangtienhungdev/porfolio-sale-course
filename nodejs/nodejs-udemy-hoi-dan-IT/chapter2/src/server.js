const express = require('express');
require('dotenv').config();
const configViewEngine = require('./configs/viewEngine');
const webRoutes = require('./routers/web');

const app = express();
const port = process.env.PORT || 3000;

/* config template engine */
configViewEngine(app);

/* router */
app.use('/', webRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
