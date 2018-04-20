'use strict'

const { h, Component, Text } = require('ink')
const importJsx = require('import-jsx')
const Init = importJsx('./Init')

class App extends Component {
  render() {
    const { cmd, help } = this.props

    if (cmd === 'init') {
      return <Init />
    } else {
      console.log(help)
      process.exit(1)
    }
  }
}

module.exports = App
