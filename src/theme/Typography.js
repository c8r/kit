import React from 'react'

import {
  Heading,
  Text
} from '@compositor/mono'

import Box from '../Box'
import Flex from '../Flex'

export default ({ theme }) =>
  <Box p={4}>
    <Heading mb={2}>Typography</Heading>
    <Text color='gray5'>
      Something about typography here.
      Something totally awesome.
    </Text>

    <Heading mt={4} f={2} py={2} children='Font families' />
    <Heading mt={4} f={2}>
      Type scale
    </Heading>

    <Heading mt={4} f={2}>
      Line heights
    </Heading>

    <Heading mt={4} mb={2} f={2}>
      Measures
    </Heading>
    <Text color='gray5'>
      45-65 characters is generally found to be an ideal line-length.
    </Text>
  </Box>
