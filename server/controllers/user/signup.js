const bcrypt = require('bcrypt');
const customError = require('../../utils/helper/index.js');
const { signToken } = require('../../utils/jwt/index.js');
const { signupSchema } = require('../../utils/validation/index.js');
const getUserByEmailQuery = require('../../database/queries/users/getUserByEmailQuery.js');
const addUserQuery = require('../../database/queries/users/addUserQuery.js');

const signupController = (req, res, next) => {
  const { email, username, password } = req.body;

  signupSchema.validateAsync({ email, username, password })
    .then(() => {
      getUserByEmailQuery(email);
    })
    .then((user) => {
      if (user) {
        throw customError(401, 'Email is already exist');
      }
    })
    .then(() => bcrypt.hash(password, 10))
    .then((hashedPass) => ({ email, password: hashedPass, username }))
    .then((user) => addUserQuery(user))
    .then((data) => {
      // eslint-disable-next-line prefer-destructuring
      req.user = data.rows[0];
      return signToken(data.rows[0]);
    })
    .then((token) => {
      res
        .cookie('token', token)
        .json({
          message: 'User Created Successfully',
          user: req.user,
        });
    })
    .catch((err) => {
      next(customError(500, err));
    });
};

module.exports = signupController;
