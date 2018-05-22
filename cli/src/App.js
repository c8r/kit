'use strict'

const { h, Component, Text } = require('ink')
const importJsx = require('import-jsx')
const Init = importJsx('./Init')

class App extends Component {
  render() {
    const { cmd, ...props } = this.props

    switch (cmd) {
      case 'init':
        return <Init {...props} />
    }
  }
}

module.exports = App
