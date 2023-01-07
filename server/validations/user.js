import Joi from "joi";

const user_validation_schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8),
    confirm: Joi.ref("password"),
});

export default user_validation_schema;
