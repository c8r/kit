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
  Components,
  ...props
}) => {
  const scope = Object.assign({}, defaultScope, Components)

  return (
    <Layout {...scope}>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </Layout>
  )
}

Styleguide.getInitialProps = async props => {
  const metadata = await getMetadata(props)

  return Object.assign({}, props, { styleguide: metadata })
}

export default Styleguide
