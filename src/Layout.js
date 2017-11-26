import React from 'react'

import {
  Link
} from 'react-router-dom'

import {
  Container
} from '@compositor/mono'

import connect from 'refunk'

import Box from './Box'
import Flex from './Flex'
import SideNav from './SideNav'

const Layout = ({
  children,
  sideNav,
  update
}) =>
  <Flex flexDirection='row'>
    <Box w='400px'>
      <SideNav
        update={update}
        {...sideNav}
      />
    </Box>
    <Box flex='auto'>
      <Container
        children={children}
      />
    </Box>
  </Flex>

export default connect(Layout)
