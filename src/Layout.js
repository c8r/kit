import React from 'react'

import connect from 'refunk'
import { Link } from 'react-router-dom'
import { Container } from '@compositor/mono'

import { layoutCss } from './constants'

import Box from './Box'
import Flex from './Flex'
import Style from './Style'
import SideNav from './SideNav'

const Layout = ({
  children,
  sideNav,
  update,
  theme,
  config
}) =>
  <Flex flexDirection='row'>
    <Style>{layoutCss}</Style>

    <Box w={200}>
      <SideNav
        theme={theme}
        config={config}
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
