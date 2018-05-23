#!/usr/bin/env node
const path = require('path')
const dev = require('./index')

// for testing only
const args = process.argv
const [ , , dir, ...flags ] = args

console.log(dir, flags)

const input = path.resolve(dir)
const dirname = input

console.log(dir, input, dirname)

const opts = Object.assign({}, {
  input,
  dirname,
  filename: null,
  // stats,
  outDir: 'dist',
  basename: '',
  scope: {},
  // pkg, // only needed for build
})

const promise = dev(opts)

const util = require('util')
console.log(
  util.inspect(promise)
)

promise
  .then((...args) => {
    // getting undefined here
    console.log(args)
    // const { port } = server.options
    console.log('dev server listening')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
