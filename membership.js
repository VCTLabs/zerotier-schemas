var Joi = require('joi')

module.exports = Joi.object().keys({
  allowDefault: Joi.boolean(),
  allowManaged: Joi.boolean(),
  allowGlobal: Joi.boolean()
})
