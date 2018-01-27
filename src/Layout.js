import React from 'react'

import Box from './Box'
import Flex from './Flex'
import Style from './Style'

import {
  NavBar,
  MegaFooter,
  Link,
  Caps
} from '../library'

import {
  layoutCss,
  editorCss
} from './constants'

export default ({ children, theme, styleguide, Nav }) =>
  <div>
    <NavBar>
      <Link
        mr={3}
        color='black'
        href='https://compositor.io'
      >
        <Caps>Website</Caps>
      </Link>
      <Link
        color='black'
        href='https://github.com/c8r/styleguide'
      >
        <Caps>Github</Caps>
      </Link>
    </NavBar>

    <Style>{layoutCss(theme)}</Style>
    <Flex flexDirection='row'>
      <Nav navGroups={styleguide.nav} />
      <Box flex='1 1 auto'>{children}</Box>
    </Flex>
    <Style>{editorCss}</Style>
    <MegaFooter />
  </div>
