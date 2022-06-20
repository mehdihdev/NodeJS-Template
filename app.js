const express = require('express');
const path = require("path");
require('dotenv').config();
const port = process.env.PORT || 3000;
const routes = require('./routes/routes.js');
const app = express();

app.set('view engine', 'ejs');
app.use('/', routes);
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/pages'));

app.listen(port, function () {
    console.info('App is listening on port ' + port + "!");
});