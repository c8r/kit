#! /usr/bin/env node

import path from 'path'
import meow from 'meow'
import chalk from 'chalk'
import dot from 'dot-prop'
import readPkgUp from 'read-pkg-up'

import styleguide from './'

const log = (...msgs) => {
  console.log(
    chalk.black.bgCyan(' styleguide '),
    chalk.cyan(...msgs)
  )
}

const cli = meow(`
  Usage:
    $ styleguide .

    Options:
      --out-dir, -d   Output directory (default ./dist)
      --library, -l   Location of component library (default ./library)
      --dev, -D       Start development server
`, {
  flags: {
    outDir: {
      type: 'string',
      alias: 'd'
    },
    dev: {
      type: 'boolean',
      alias: 'D'
    }
  }
})

const [
  dirname = process.cwd()
] = cli.input
const userPkg = readPkgUp.sync(dirname) || {}
const opts = Object.assign({}, dot.get(userPkg, 'pkg.styleguide'), cli.flags, {
  outDir: path.join(process.cwd(), cli.flags.outDir || 'dist'),
  library: path.join(process.cwd(), cli.flags.library || 'library')
})

log('@compositor/styleguide')

styleguide(dirname, opts)
  .then(() => console.log('done'))
  .catch(e => console.log(e))
