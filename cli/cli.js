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

const props = {
  cmd: cli.input[0],
  ...cli
}

render(h(App, props))
