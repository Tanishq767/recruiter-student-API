const Joi = require('joi');

function validateStudent(req, res, next){
    const schema = Joi.object({
        name: Joi.string().required(),
        birthdate: Joi.date().required(),
        PhoneNo: Joi.string().required(),
        Branch: Joi.string().required(),
        USN: Joi.string().required()
    })

    const { error } = schema.validate(req.body); //schema.validate(req.body) returns an object, usually stuff like value, error, etc enclosed inside a {}

    if(error){
        return res.status(400).send(err.details[0].message) //details is an error and usually has multiple error but joi validation stops at 1st error again usually, so we return only the first error be it password/email whatever
    }

    next();
}

module.exports = validateStudent;