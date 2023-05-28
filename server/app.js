const express = require('express');
const cors = require('cors');
const connection = require('./database/config/connection.js');

/*
  CURD operations are here
*/

const { getProductsQuery } = require('./database/queries/index.js');

const router = require('./routes/router.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  getProductsQuery()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
/*
  CURD operations are here
*/

app.use(router);

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to the db');
  }
});

module.exports = app;
