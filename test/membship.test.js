var test = require('tape')

test('membership - valid', function (t) {
  var schema = require('../membership')

  var input = {
    allowDefault: false,
    allowGlobal: false,
    allowManaged: true
  }

  var { value, error } = schema.validate(input, {
    allowUnknown: true,
    stripUnknown: true
  })

  t.ok(value)
  t.notOk(error)

  t.end()
})

test('membership - invalid', function (t) {
  var schema = require('../membership')

  var input = {
    allowDefault: 13
  }

  var { value, error } = schema.validate(input, {
    allowUnknown: true,
    stripUnknown: true
  })

  t.ok(value)
  t.ok(error)

  t.end()
})

test('membership - wrong fields', function (t) {
  var schema = require('../membership')

  var input = {
    nwid: 'abcd'
  }

  var { value, error } = schema.validate(input, {
    allowUnknown: true,
    stripUnknown: true
  })

  t.ok(value)
  t.notOk(error)

  t.end()
})
