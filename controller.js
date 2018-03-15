var Joi = require('joi')

var nodeId = Joi.string()
  .hex()
  .length(10)

var networkId = Joi.string()
  .hex()
  .length(16)

var network = Joi.object().keys({
  authTokens: Joi.array(),
  capabilities: Joi.array(),
  creationTime: Joi.number(),
  enableBroadcast: Joi.boolean(),
  mtu: Joi.number(),
  multicastLimit: Joi.number(),
  nwid: Joi.any().strip(),
  objtype: Joi.any().strip(),
  remoteTraceLevel: Joi.number(),
  remoteTraceTarget: nodeId.allow(null),
  rules: Joi.array().items(Joi.object()),
  tags: Joi.array(),
  revision: 2,
  id: networkId,
  private: Joi.boolean().optional(),
  v4AssignMode: Joi.alternatives().try(
    Joi.any().valid('zt'),
    Joi.object().keys({ zt: Joi.boolean() })
  ),
  v6AssignMode: Joi.object().keys({
    '6plane': Joi.boolean(),
    rfc4193: Joi.boolean(),
    zt: Joi.boolean()
  }),
  ipAssignmentPools: Joi.array().items(
    Joi.object().keys({
      ipRangeStart: Joi.string().ip({
        cidr: 'forbidden'
      }),
      ipRangeEnd: Joi.string().ip({
        cidr: 'forbidden'
      })
    })
  ),
  routes: Joi.array().items(
    Joi.object().keys({
      target: Joi.string().ip({
        cidr: 'required'
      }),
      via: Joi.string()
        .ip({
          cidr: 'forbidden'
        })
        .allow(null)
    })
  ),
  name: Joi.string()
    .optional()
    .max(256)
    .valid('')
})

var member = Joi.object().keys({
  activeBridge: Joi.boolean(),
  address: nodeId,
  authorized: Joi.boolean(),
  capabilities: Joi.array(),
  creationTime: Joi.number(),
  id: nodeId,
  identity: Joi.string(),
  ipAssignments: Joi.array().items([
    Joi.string()
      .ip({
        cidr: 'forbidden'
      })
      .allow(null)
  ]),
  lastAuthorizedCredential: Joi.any(),
  lastAuthorizedCredentialType: Joi.string(),
  lastAuthorizedTime: Joi.number(),
  lastDeauthorizedTime: Joi.number(),
  noAutoAssignIps: Joi.boolean(),
  nwid: networkId,
  objtype: Joi.string().strip(),
  remoteTraceLevel: Joi.number(),
  remoteTraceTarget: nodeId.allow(null),
  revision: Joi.number(),
  tags: Joi.array(),
  vMajor: Joi.number(),
  vMinor: Joi.number(),
  vProto: Joi.number(),
  vRev: Joi.number()
})

module.exports = { network, member }
