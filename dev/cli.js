#!/usr/bin/env node
const path = require('path')
const dev = require('./index')

// FOR TESTING ONLY
const args = process.argv
const [ , , dir, ...flags ] = args

console.log('FOR TESTING ONLY')
console.log('install @compositor/kit-cli to use the kit dev server')

const input = path.resolve(dir)
const dirname = input

const opts = Object.assign({}, {
  input,
  dirname,
  filename: null,
  outDir: 'dist',
  basename: '',
  scope: {},

  // modes
  // mode: 'library',
  // mode: 'sandbox', // (.jsx files only for now)
  mode: 'responsive', // needs render prop or other solution for css
  // mode: 'xray'
})

dev(opts)
  .then(server => {
    const { port } = server.options
    console.log('dev server listening', port)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
