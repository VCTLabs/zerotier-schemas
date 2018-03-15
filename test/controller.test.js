var test = require('tape')

test('network - valid', function (t) {
  var schema = require('../controller').network

  var input = {
    authTokens: [{}],
    capabilities: [],
    creationTime: 1537309027277,
    enableBroadcast: true,
    id: '9935981b1e1c6697',
    ipAssignmentPools: [
      {
        ipRangeEnd: '192.168.192.254',
        ipRangeStart: '192.168.192.1'
      }
    ],
    mtu: 2800,
    multicastLimit: 32,
    name: '',
    nwid: '9935981b1e1c6697',
    objtype: 'network',
    private: true,
    remoteTraceLevel: 0,
    remoteTraceTarget: null,
    revision: 2,
    routes: [
      {
        target: '192.168.192.0/24',
        via: null
      }
    ],
    rules: [
      {
        not: false,
        or: false,
        type: 'ACTION_ACCEPT'
      }
    ],
    tags: [],
    v4AssignMode: {
      zt: true
    },
    v6AssignMode: {
      '6plane': false,
      rfc4193: false,
      zt: false
    }
  }

  var { error, value } = schema.validate(input)

  t.ok(value)
  t.notOk(error)

  t.end()
})

test('network - something wrong', function (t) {
  var schema = require('../controller').network

  var input = {
    id: 'asdfz'
  }

  var { error } = schema.validate(input)

  t.ok(error)

  t.end()
})

test('member - valid', function (t) {
  var schema = require('../controller').member

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
