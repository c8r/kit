import React from 'react'
import PropTypes from 'prop-types'
import metadata from './metadata'

import {
  DIR,
  LIBRARY
} from './constants'

export const getInitialProps = async ({ dir, library, ...props }) => {
  const styleguide = await metadata({ dir, library })
  const env = {
    DEBUG: process.env.DEBUG,
  }

  return Object.assign({}, props, env, {
    DEBUG: process.env.DEBUG,
    toc: true,
    styleguide,
    library,
    dir
  })
}

const withMetadata = Component => {
  Component.getInitialProps = getInitialProps
  return Component
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
