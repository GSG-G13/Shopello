const express = require('express');
const db = require('./database/config/connection');
const { User, CartItems } = require('./database/models/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .get('/Users', (req, res) => {
    User.findAll()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        res.json(err);
      });
  })
  .get('/CartItems', (req, res) => {
    CartItems.findAll()
      .then((cartItems) => {
        res.json(cartItems);
      })
      .catch((err) => {
        res.json(err);
      });
  });
//   .post('/Users', (req, res) => {
//     User.create(req.body)
//       .then((user) => {
//         res.json(user);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   })
//   .get('/Users/:id', (req, res) => {
//     User.findByPk(req.params.id)
//       .then((user) => {
//         res.json(user);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   })
//   .put('/Users/:id', (req, res) => {
//     User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     })
//       .then((user) => {
//         res.json(user);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   })
//   .delete('/Users/:id', (req, res) => {
//     User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     })
//       .then((user) => {
//         res.json(user);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(3000, () => {
  console.log('Server is running on http://127.0.0.1:3000');
});
