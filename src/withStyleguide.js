import React, { Component } from 'react'
import PropTypes from 'prop-types'

const wrapWithStyleguide = WantsStyleguide => {
  class WithStyleguide extends Component {
    render () {
      return (
        <WantsStyleguide
          {...this.props}
          styleguide={this.context.styleguide}
        />
      )
    }
  }

  WithStyleguide.contextTypes = {
    styleguide: PropTypes.object
  }

  return WithStyleguide
}

export default wrapWithStyleguide
