import express from 'express';
import cors from 'cors';
// eslint-disable-next-line import/extensions
import connection from './database/config/connection.js';

/*
  CURD operations are here
*/

import { getProductsQuery } from './database/queries/index.js';

import router from './routes/router.js';

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
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    // eslint-disable-next-line no-console
    console.log('connected to the db');
  }
});

export default app;
