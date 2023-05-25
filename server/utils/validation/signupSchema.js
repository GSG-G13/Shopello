import Joi from 'joi';

const signupSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
  }),
  username: Joi.string().min(4).required().messages({
    'string.min': 'Username must be at least 4 characters long',
    'string.empty': 'Username is required',
    'any.required': 'Username is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
  }),
});

export default signupSchema;
