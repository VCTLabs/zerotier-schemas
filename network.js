var Joi = require('joi')

var nodeId = Joi.string()
  .hex()
  .length(10)

var networkId = Joi.string()
  .hex()
  .length(16)

module.exports = Joi.object().keys({
  authTokens: Joi.array(),
  capabilities: Joi.array(),
  enableBroadcast: Joi.boolean(),
  id: networkId,
  ipAssignmentPools: Joi.array().items(
    Joi.object().keys({
      ipRangeStart: Joi.string().ip({ cidr: 'forbidden' }),
      ipRangeEnd: Joi.string().ip({ cidr: 'forbidden' })
    })
  ),
  mtu: Joi.number(),
  multicastLimit: Joi.number(),
  name: Joi.string()
    .optional()
    .max(256)
    .allow(''),
  private: Joi.boolean().optional(),
  remoteTraceLevel: Joi.number(),
  remoteTraceTarget: nodeId.allow(null),
  routes: Joi.array().items(
    Joi.object().keys({
      target: Joi.string().ip({ cidr: 'required' }),
      via: Joi.string()
        .ip({ cidr: 'forbidden' })
        .allow(null)
    })
  ),
  rules: Joi.array().items(Joi.object()),
  tags: Joi.array(),
  v4AssignMode: Joi.alternatives().try(
    Joi.string().valid('zt'),
    Joi.object().keys({ zt: Joi.boolean() })
  ),
  v6AssignMode: Joi.object().keys({
    '6plane': Joi.boolean(),
    rfc4193: Joi.boolean(),
    zt: Joi.boolean()

  })
})
