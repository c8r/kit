import React from 'react'

import { Box, Flex } from './ui'
import Style from './Style'

import {
  Logo,
  NavLink
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
  navLinkColor = 'midgray',
  Nav,
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
      <Flex>
        <Box
          w={[0, 200, 250]}
          flex='none'
          p={4}
        >
          <Box align='center' w={1} pb={4}>
            <NavLink w={1} borderBottom href='/'>
              <Logo m='auto' src={logoUrl} />
            </NavLink>
          </Box>
          <Nav
            navGroups={styleguide.nav}
            navLinkColor={navLinkColor}
          />
        </Box>
        <Box
          flex='1 1 auto'
          pt={3}
          children={children}
        />
      </Flex>
    </Box>
    <Style>{editorCss}</Style>
  </Flex>
