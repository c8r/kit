'use strict'

const { h, Component, Text } = require('ink')
const importJsx = require('import-jsx')
const Header = importJsx('./Header')

class App extends Component {
  render() {
    return (
			<Header />
		)
  }
}

module.exports = App
