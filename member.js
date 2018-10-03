var Joi = require('joi')

var nodeId = Joi.string()
  .hex()
  .length(10)

var networkId = Joi.string()
  .hex()
  .length(16)

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
    .allow(null),

  // readonly
  address: nodeId.strip(),
  capabilities: Joi.array().strip(),
  creationTime: Joi.number().strip(),
  id: nodeId.strip(),
  identity: Joi.string().strip(),
  lastAuthorizedCredential: Joi.any().strip(),
  lastAuthorizedCredentialType: Joi.string().strip(),
  lastAuthorizedTime: Joi.number().strip(),
  lastDeauthorizedTime: Joi.number().strip(),
  noAutoAssignIps: Joi.boolean().strip(),
  nwid: networkId.strip(),
  objtype: Joi.string().strip(),
  remoteTraceLevel: Joi.number().strip(),
  remoteTraceTarget: nodeId.allow(null).strip(),
  revision: Joi.number().strip(),
  tags: Joi.array().strip(),
  vMajor: Joi.number().strip(),
  vMinor: Joi.number().strip(),
  vProto: Joi.number().strip(),
  vRev: Joi.number().strip()
})
