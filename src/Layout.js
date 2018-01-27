import React from 'react'

import Box from './Box'
import Flex from './Flex'
import Style from './Style'

import {
  layoutCss,
  editorCss
} from './constants'

export default ({ children, theme, styleguide, Nav }) =>
  <div>
    <Style>{layoutCss(theme)}</Style>
    <Flex flexDirection='row'>
      <Nav navGroups={styleguide.nav} />
      <Box flex='1 1 auto'>{children}</Box>
    </Flex>
    <Style>{editorCss}</Style>
  </div>
