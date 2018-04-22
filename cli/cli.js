#!/usr/bin/env node
'use strict'

const importJsx = require('import-jsx')
const { h, render } = require('ink')
const meow = require('meow')

const App = importJsx('./src/App')

const cli = meow(
  `
  Usage
    $ kit <command> [options]

  Examples
    $ kit init
    $ kit dev
`,
  {
    alias: {
      h: 'help',
      v: 'version'
    }
  }
)

const [cmd, input] = cli.input

const props = Object.assign({}, cli, {
  cmd,
  input
})

render(h(App, props))
