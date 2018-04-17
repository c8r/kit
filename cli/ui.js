'use strict'

const { h, Component, Text } = require('ink')
const PropTypes = require('prop-types')

class UI extends Component {
  render({ name }) {
    return <Text green>I love {name}</Text>
  }
}

UI.propTypes = {
  name: PropTypes.string
}

UI.defaultProps = {
  name: 'Ink'
}

module.exports = UI
