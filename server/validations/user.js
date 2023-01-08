import Joi from 'joi';

const userValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8),
  confirm: Joi.ref('password')
});

export default userValidationSchema;
