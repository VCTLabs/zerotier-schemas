var test = require('tape')

test('network - valid', function (t) {
  var schema = require('../network')

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

  var { error, value } = schema.validate(input, {
    allowUnknown: true,
    stripUnknown: true
  })

  t.ok(value)
  t.notOk(error)

  t.end()
})

test('network - something wrong', function (t) {
  var schema = require('../network')

  var input = {
    id: 'asdfz'
  }

  var { error } = schema.validate(input, {
    allowUnknown: true,
    stripUnknown: true
  })

  t.ok(error)

  t.end()
})
