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
  Nav,
  logoUrl,
  title
}) =>
  <Flex
    wrap
    flex='column'
    style={{
      minHeight: '100vh'
    }}
  >
    <Style>{layoutCss(theme)}</Style>
    <Box w={1}>
      <NavBar logoUrl={logoUrl} companyName={title}>
        <Link
          color='black'
          href='https://github.com/c8r/styleguide'
        >
          <Caps>Github</Caps>
        </Link>
      </NavBar>

      <Flex>
        <Nav navGroups={styleguide.nav} />
        <Box flex='1 1 auto'>{children}</Box>
      </Flex>
    </Box>
    <Style>{editorCss}</Style>
    <Box flex={1} alignSelf='flex-end' w={1}>
      <MegaFooter />
    </Box>
  </Flex>
