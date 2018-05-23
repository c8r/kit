import React from 'react'
import PropTypes from 'prop-types'
import createElement from './createElement'

class Markdown extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    scope: PropTypes.object,
  }

  static defaultProps = {
    src: '',
    scope: {},
  }

  render() {
    const element = createElement(this.props)
    return element
  }
}

export default Markdown
