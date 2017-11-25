import React from 'react'

import {
  Link
} from 'react-router-dom'

import {
  Container
} from '@compositor/mono'

import Box from './Box'
import Flex from './Flex'

export default ({ children }) =>
  <Flex flexDirection='row'>
    <Box w='400px'>
      <Box w={1}>
        <Link
          to='/'
          children='Home'
        />
      </Box>
      <Box w={1}>
        <Link
          to='/components'
          children='Components'
        />
      </Box>
    </Box>
    <Box flex='auto'>
      <Container
        children={children}
      />
    </Box>
  </Flex>
