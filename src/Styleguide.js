import React from 'react'

import Box from './Box'
import Flex from './Flex'
import Layout from './Layout'

import getMetadata from './get-metadata'

const defaultScope = {
  Box,
  Flex,
  Layout
}

const Styleguide = ({
  docsSrc = 'doc',
  componentsSrc = 'src',
  Components
}) => {
  const scope = Object.assign({}, defaultScope, Components)

  return (
    <DefaultLayout>
      <Content
        Component={Component}
        scope={fullScope}
        {...props}
      />
    </DefaultLayout>
  )
}

Styleguide.getInitialProps = async props => {
  console.log(props)
  const metadata = {}

  return props
}

export default Styleguide
