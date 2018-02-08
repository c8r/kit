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

export default ({
  children,
  theme,
  styleguide,
  logoUrl,
  navLinkColor,
  title
}) =>
  <Flex
    wrap
    flex='column'
    style={{
      minHeight: '100vh'
    }}
  >
    <title>{title || 'Styleguide'}</title>
    <Style>{layoutCss(theme)}</Style>
    <Box w={1}>
      <NavBar
        navLinkColor={navLinkColor}
        logoUrl={logoUrl}
        title={title}
      />

      <Flex>
        <Nav navGroups={styleguide.nav} />
        <Box flex='1 1 auto'>{children}</Box>
      </Flex>
    </Box>
    <Style>{editorCss}</Style>
  </Flex>
