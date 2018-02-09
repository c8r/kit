import React from 'react'
import PropTypes from 'prop-types'

import {
  DIR,
  LIBRARY
} from './constants'

const withMetadata = Component => props => <Component {...props} />

withMetadata.getInitialProps = async ({ dir, library }) => {
  const styleguide = await metadata({ dir, library })
  const env = {
    DEBUG: process.env.DEBUG,
  }

  return Object.assign({}, props, env, {
    styleguide,
    toc: true
  })
}

withMetadata.defaultProps = {
  dir: DIR,
  library: LIBRARY
}

withMetadata.propTypes = {
  dir: PropTypes.string,
  library: PropTypes.string
}

export default withMetadata
