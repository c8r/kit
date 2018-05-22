#!/usr/bin/env node
'use strict'

const importJsx = require('import-jsx')
const { h, render } = require('ink')
const meow = require('meow')
const open = require('react-dev-utils/openBrowser')

const dev = require('@compositor/kit-dev')

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

require('update-notifier')({
  pkg: cli.pkg
}).notify()

const [cmd, input] = cli.input

const props = Object.assign({}, cli, {
  cmd,
  config,
  input
})

if (cmd === 'init') {
  render(h(App, props))
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
  dev(props)
    .then(() => open(`http://localhost:${props.port}`))
    .catch(err => {
      console.error(err)
      process.exit(0)
    })
}
