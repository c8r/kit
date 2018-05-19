'use strict'

const { h, Component, Text } = require('ink')
const importJsx = require('import-jsx')
const Init = importJsx('./Init')
const DevServer = require('./DevServer')

class App extends Component {
  render() {
    const { cmd, input, flags, help } = this.props

    if (!cmd && !input) return <Init />

    switch (cmd) {
      case 'init':
        return <Init />
      case 'dev':
      default:
        return <DevServer input={input || cmd} {...flags} />
    }
  }
}

module.exports = App
