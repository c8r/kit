import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class StyleguideProvider extends Component {
  getChildContext () {
    return {
      styleguide: this.props.styleguide,
      componentName: this.props.componentName
    }
  }

  render () {
    return <Fragment>{this.props.children}</Fragment>
  }
}

StyleguideProvider.childContextTypes = {
  styleguide: PropTypes.object.isRequired,
  componentName: PropTypes.string
}

export default StyleguideProvider
