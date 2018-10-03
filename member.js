var Joi = require('joi')

module.exports = Joi.object().keys({
  // writeable
  activeBridge: Joi.boolean(),
  authorized: Joi.boolean(),
  ipAssignments: Joi.array()
    .items([
      Joi.string().ip({
        cidr: 'forbidden'
      })
    ])
    .allow(null)
})
