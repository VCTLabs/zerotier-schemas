#! /usr/bin/env node

var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2))
var concat = require('concat-stream')
var jsonlint = require('jsonlint')

var { network, member } = require('./').controller
var localconf = require('./local-conf')

var json

var [fn, file] = argv._

if (!fn) {
  console.log(usage())
  process.exit(1)
}

var readStream = file ? fs.createReadStream(file, 'utf8') : process.stdin

var schema = {
  network: network,
  member: member,
  localconf: localconf
}[fn]

if (!schema) {
  console.error(`'${fn}'`, 'is not supported.\n')
  console.error(usage())
  process.exit(1)
}

readStream.pipe(concat(gotStdin))
  .on('finish', validate)

function validate () {
  var { error } = schema.validate(json)
  if (error) {
    console.error(error.details)
  } else {
    console.log('valid')
  }
}

function gotStdin (data) {
  try {
    json = jsonlint.parse(data.toString())
  } catch (e) {
    console.error(e.message)
    process.exit(1)
  }
}

function usage () {
  return `usage:
zerotier-schemas [network|member|localconf] [file]
cat network.json | zerotier-schemas network
zerotier-schemas member member2.json
`
}
