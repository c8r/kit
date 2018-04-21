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

const [ fileOrDir ] = cli.input
const opts = Object.assign({}, (pkg ? pkg.kit : null), cli.flags)

log(`starting dev server... (${fileOrDir})`)

const fileOrDirPath = path.isAbsolute(fileOrDir) ? fileOrDir : path.join(process.cwd(), fileOrDir)
const stats = fs.statSync(fileOrDirPath)

opts.dirname = stats.isDirectory() ? fileOrDirPath : path.dirname(fileOrDirPath)
opts.filename = stats.isDirectory() ? null : fileOrDirPath

const getAbsolutePath = filename => filename
  ? path.isAbsolute(filename)
    ? filename : path.join(process.cwd(), filename)
  : null

if (!opts.config) {
  opts.config = find.sync('kit.config.js', { cwd: opts.dirname })
}
opts.config = getAbsolutePath(opts.config)

if (!opts.webpack) {
  opts.webpack = find.sync('webpack.config.js', { cwd: opts.dirname })
}
opts.webpack = getAbsolutePath(opts.webpack)

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
