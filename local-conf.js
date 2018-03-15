var Joi = require('joi')

var nodeId = Joi.string()
  .hex()
  .length(10)

module.exports = Joi.object().keys({
  physical: Joi.object().pattern(
    Joi.string().ip({ cidr: 'required' }),
    Joi.object().keys({
      blacklist: Joi.boolean(),
      trustedPathId: Joi.number(),
      mtu: Joi.number().min(1)
    })
  ),
  virtual: Joi.object().pattern(
    nodeId,
    Joi.object().keys({
      role: Joi.string().valid(['LEAF', 'UPSTREAM', 'ROOT', 'PLANET']),
      try: Joi.array().items(Joi.string()),
      blacklist: Joi.array().items(Joi.string().ip({ cidr: 'required' }))
    })
  ),
  settings: Joi.object().keys({
    primaryPort: Joi.number().port(),
    portMappingEnabled: Joi.boolean(),
    softwareUpdate: Joi.valid(['apply', 'download', 'disable']),
    softwareUpdateChannel: Joi.valid(['release', 'beta']),
    softwareUpdateDist: Joi.boolean(),
    interfacePrefixBlacklist: Joi.array().items(Joi.string()),
    allowManagementFrom: Joi.array()
      .items(Joi.string().ip({ cidr: 'required' }))
      .allow(null),
    bind: Joi.array().items(Joi.string().ip()).allow(null),
    allowTcpFallbackRelay: Joi.boolean()
  })
})
