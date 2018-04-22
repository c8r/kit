#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const meow = require('meow')
const { pkg } = require('read-pkg-up').sync()
const open = require('react-dev-utils/openBrowser')
const ora = require('ora')
const chalk = require('chalk')
const find = require('find-up')
const dev = require('./lib')

require('update-notifier')({
  pkg: require('./package.json')
}).notify()

const log = (...msg) => {
  console.log(
    chalk.black.bgCyan(' kit '),
    chalk.cyan(...msg)
  )
}

const cli = meow(`
  Usage:

    $ kit dev hello.mdx

    $ kit dev components/

  Options:
    -o --open     Opens development server in default browser
    -p --port     Port for development server
    -c --config   Path to configuration file
    --webpack     Path to custom webpack.config.js
`, {
  flags: {
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
    // enable different modes/Apps for rendering components
    mode: {
      type: 'string',
      alias: 'm'
    }
  }
})

const [ input ] = cli.input
const opts = Object.assign({ input }, (pkg ? pkg.kit : null), cli.flags)

log(`starting dev server...`)

dev(opts)
  .then(res => {
    const { port } = res.options
    const url = `http://localhost:${port}`
    log(`dev server listening on ${url}`)
    if (opts.open) open(url)
  })
  .catch(err => {
    log(err)
    process.exit(1)
  })
