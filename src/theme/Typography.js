import React from 'react'

import {
  Heading,
  Text
} from '@compositor/mono'

import Box from '../Box'
import Flex from '../Flex'

export default ({ theme }) =>
  <Box py={4}>
    <Heading>Typography</Heading>
    <Text color='gray5'>
      Something about typography here.
      Something totally awesome.
    </Text>

    <Heading f={2}>
      Font families
    </Heading>

    <Heading f={2}>
      Type scale
    </Heading>

    <Heading f={2}>
      Line heights
    </Heading>

    <Heading f={2}>
      Measures
    </Heading>
  </Box>
