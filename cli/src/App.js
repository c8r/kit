'use strict'

const { h, Component, Text } = require('ink')
const importJsx = require('import-jsx')
const Init = importJsx('./Init')

class App extends Component {
  render() {
    return <Init />
  }
}

module.exports = App
