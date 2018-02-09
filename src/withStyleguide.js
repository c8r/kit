import React, { Component } from 'react'
import PropTypes from 'prop-types'

import metadata from './metadata'

const wrapWithStyleguide = WantsStyleguide => {
  class WithStyleguide extends Component {
    render () {
      const {
        styleguide,
        componentName
      } = this.context

      return (
        <WantsStyleguide
          {...this.props}
          styleguide={styleguide}
          componentName={componentName}
        />
      )
    }
  }

  WithStyleguide.contextTypes = {
    componentName: PropTypes.string,
    styleguide: PropTypes.object.isRequired
  }

  return WithStyleguide
}

export default wrapWithStyleguide
