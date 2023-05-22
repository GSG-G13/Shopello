import express from 'express';
import db from './database/config/connection.js';

import router from './routes/router.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
  CURD operations are here
*/

// app.post('/api/user/login', ()=>{});
// app.post('/api/user/singup', ()=>{});

// const { User, CartItems } = require('./database/models/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
  CURD operations are here
*/

app.use(router);

db.authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', err);
  });

export default app;
