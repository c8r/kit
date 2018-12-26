#!/usr/bin/env node
'use strict'

const fs= require('fs')
const path = require('path')
const importJsx = require('import-jsx')
const { h, render } = require('ink')
const meow = require('meow')
const open = require('react-dev-utils/openBrowser')
const log = require('@compositor/log')
const chalk = require('chalk')
const clipboard = require('clipboardy')
const findup = require('find-up')
const config = require('pkg-conf').sync('kit')

const Init = importJsx('./src/Init')
const parseArgs = require('./lib/parse-args')

const cli = meow(`
  Usage

    $ kit <command> [options]

  Examples
    $ kit examples
    $ kit dev examples
    $ kit init

  Options

    Dev Server

      -o --open     Opens development server in default browser
      -p --port     Port for development server (default: 8080)
      -m --mode     Enable different modes for server UI
      --webpack     Path to custom webpack.config.js

`,
  {
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

log.name = 'kit'

log(chalk.cyan('@compositor/kit-cli'))

const { cmd, input } = parseArgs(cli.input)

// normalize options
let stats, dirname, filename = null

if (cmd !== 'init') {
  stats = fs.statSync(input)
  dirname = stats.isDirectory() ? input : path.dirname(input)
  filename = stats.isDirectory() ? null : input
}

const opts = Object.assign({
  cmd,
  input,
  dirname,
  filename
}, config, cli.flags)

if (opts.webpack) {
  opts.webpack = require(path.resolve(process.cwd(), opts.webpack))
}

switch (cmd) {
  case 'init':
  case null:
    render(h(Init, opts))
    break
  case 'dev':
  default:
    if (opts.app) {
      opts.app = path.resolve(opts.app)
    } else {
      const app = findup.sync('_app.js', { cwd: dirname })
      if (app) opts.app = app
    }

    log.start('starting dev server...')
    const dev = require('./lib/dev')
    dev(opts)
      .then(({ server }) => {
        const { port } = server.options
        const url = `http://localhost:${port}`
        log.stop(
          'dev server listening on',
          chalk.green(url),
          chalk.gray('(copied to clipboard)')
        )
        clipboard.write(url)

        if (opts.open) {
          open(url)
        }
      })
      .catch(err => {
        log.error(err)
        process.exit(1)
      })
    break
}

require('update-notifier')({
  pkg: cli.pkg
}).notify()
