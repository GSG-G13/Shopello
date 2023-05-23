import bcrypt from 'bcrypt';
import customError from '../../utils/helper';
import { signToken } from '../../utils/jwt';
import { signupSchema } from '../../utils/validation';
import getUserByEmailQuery from '../../database/queries/users/getUserByEmailQuery';
import addUserQuery from '../../database/queries/users/addUserQuery';

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
    .then((user) => {
      addUserQuery(user);
    })
    .then((data) => {
      req.user = data;
      return signToken(data);
    })
    .then((token) => {
      res
        .cookies('token', token)
        .json({
          message: 'User Created Successfully',
          user: req.user,
        });
    })
    .catch((err) => next(customError(500, err)));
};

export default signupController;
