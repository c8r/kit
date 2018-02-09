import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class StyleguideProvider extends Component {
  getChildContext () {
    return {
      styleguide: this.props.styleguide
    }
  }

  render () {
    return <Fragment>{this.props.children}</Fragment>
  }
}

StyleguideProvider.childContextTypes = {
  styleguide: PropTypes.object.isRequired
}

export default StyleguideProvider
