#!/usr/bin/env node
'use strict'

const fs= require('fs')
const path = require('path')
const importJsx = require('import-jsx')
const { h, render } = require('ink')
const meow = require('meow')
const open = require('react-dev-utils/openBrowser')

const dev = require('@compositor/kit-dev')

const config = require('pkg-conf').sync('kit')

const App = importJsx('./src/App')
const pkg = require('./package.json')
const parseArgs = require('./lib/parse-args')

const cli = meow(
  `
  Usage

    $ kit <command> [options]

  Examples
    $ kit examples
    $ kit dev examples
    $ kit Demo.js
    $ kit init

  Options

    -o --open     Opens development server in default browser
    -p --port     Port for development server (default: 8080)
    -c --config   Path to configuration file
    -m --mode     Enable different modes for server UI
    --webpack     Path to custom webpack.config.js

`,
  {
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
        alias: 'p',
        default: 8080
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
  }
)

const { cmd, input } = parseArgs(cli.input)

console.log(cmd, input)

// normalize options
const stats = fs.statSync(input)
const dirname = stats.isDirectory() ? input : path.dirname(input)
const filename = stats.isDirectory() ? null : input

const opts = Object.assign({
  cmd,
  input,
  dirname,
  filename
}, config, cli.flags)

console.log(
  'cmd:', cmd,
  'input:', input
)
console.log('opts:', opts)

switch (cmd) {
  case 'init':
  case null:
    console.log('init')
    break
  case 'docs':
    console.log('docs')
    break
  case 'dev':
  default:
    console.log('dev')
    break
}

process.exit(0)

/*
if (cmd && !file) {
  // dev shorthand
} else if (cmd === 'init' || (!cmd && !input)) {
  render(h(App, opts))
} else if (cmd === 'docs') {
  console.log(`
  Compositor Kit Docs

    Site:         https://compositor.io/kit
    Repo:         https://github.com/c8r/kit
    Components:   https://github.com/c8r/kit/tree/master/core
    Dev Server:   https://github.com/c8r/kit/tree/master/dev
    CLI:          https://github.com/c8r/kit/tree/master/cli
  `)

  process.exit(1)
} else {
  dev(opts)
    .then(() => open(`http://localhost:${opts.port}`))
    .catch(err => {
      console.error(err)
      process.exit(0)
    })
}
*/

require('update-notifier')({
  pkg: cli.pkg
}).notify()

