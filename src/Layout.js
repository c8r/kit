import React from 'react'

import Box from './Box'
import Flex from './Flex'
import Style from './Style'

import {
  layoutCss,
  editorCss
} from './constants'

export default ({ children }) =>
  <Flex flexDirection='row'>
    <Style>{layoutCss}</Style>
    <Box w={200}></Box>
    <Box flex='auto'>{children}</Box>
    <Style>{editorCss}</Style>
  </Flex>
