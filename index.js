const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const Cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('./BD/conecction');
const Routes = require('./routes');

Routes.map((route) => require(`./models${route}`)(mysql, app));

app.use(Cors());
app.use(compression);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(port, () => console.log('Listening in port '+port));
