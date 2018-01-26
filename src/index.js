import React from 'react'
import getMetadata from './get-metadata'

import theme from '../theme.json'
import Box from './Box'
import Flex from './Flex'

import Styleguide from './Styleguide'

const Example = props =>
  <Styleguide
    Components={{ Box, Flex, props, theme }}
    {...props}
  />

Example.getInitialProps = async props => {
  const metadata = await getMetadata(props)
  return Object.assign({}, props, { styleguide: metadata })
}

export default Example
