#!/usr/bin/env node
'use strict'

const importJsx = require('import-jsx')
const { h, render } = require('ink')
const meow = require('meow')

const config = require('pkg-conf').sync('kit')

const App = importJsx('./src/App')
const pkg = require('./package.json')

const cli = meow(
  `
  Usage
    $ kit <command> [options]

  Examples
    $ kit examples/
    $ kit dev examples/
    $ kit Demo.js
    $ kit init

  Dev Options:
    -o --open     Opens development server in default browser
    -p --port     Port for development server
    -c --config   Path to configuration file
    --webpack     Path to custom webpack.config.js
    -m --mode     Enable different modes for server UI

`, {
  version: pkg.version,
  flags: {
    version: {
      type: 'boolean',
      alias: 'v'
    },
    help: {
      type: 'boolean',
      alias: 'h'
    },
    open: {
      type: 'boolean',
      alias: 'o'
    },
    port: {
      type: 'string',
      alias: 'p'
    },
    webpack: {
      type: 'string'
    },
    config: {
      type: 'string',
      alias: 'c'
    },
    mode: {
      type: 'string',
      alias: 'm'
    }
  }
})

const [cmd, input] = cli.input

const props = Object.assign({}, cli, {
  cmd,
  config,
  input
})

render(h(App, props))

require('update-notifier')({
  pkg: require('./package.json')
}).notify()
