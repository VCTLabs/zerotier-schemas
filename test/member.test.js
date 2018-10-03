var test = require('tape')

test('member - valid', function (t) {
  var schema = require('../member.js')

  var input = {
    activeBridge: false,
    address: '7e2d4b9975',
    authorized: true,
    capabilities: [],
    creationTime: 1537309146363,
    id: '7e2d4b9975',
    identity:
    '7e2d4b9975:0:fc4988d42759035d7cafe89374ff58812d48b96afe89d162dd08ef2dac18297a0c52d6d9647b3737c8ffdb3daec4430e6c25cfbb334255951c4d977967930f94',
    ipAssignments: [],
    lastAuthorizedCredential: null,
    lastAuthorizedCredentialType: 'api',
    lastAuthorizedTime: 1537309495749,
    lastDeauthorizedTime: 0,
    noAutoAssignIps: false,
    nwid: '9935981b1e1c6697',
    objtype: 'member',
    remoteTraceLevel: 0,
    remoteTraceTarget: null,
    revision: 2,
    tags: [],
    vMajor: -1,
    vMinor: -1,
    vProto: -1,
    vRev: -1
  }

  var { value, error } = schema.validate(input)
  t.ok(value)
  t.notOk(error)

  t.end()
})