import express from 'express';
import cors from 'cors';
import connection from './database/config/connection.js';

// import { getProductsQuery } from './database/queries/index.js';

import router from './routes/router.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

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
