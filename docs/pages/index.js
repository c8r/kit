import React from 'react'
import withLayout from '../components/withLayout'
import { Logo, Kit } from '@compositor/logo'
import {
  Box,
  Flex,
  Heading,
  Caps,
  Text,
  Button,
  BlockLink
} from 'rebass'

export default withLayout(props => (
  <React.Fragment>
    <BlockLink mt={3} mb={3} href="https://compositor.io">
      <Flex px={[3, 4, 5]} alignItems="center">
        <Logo size={32} />
        <Heading>
          <Caps fontSize={10}>Compositor</Caps>
        </Heading>
      </Flex>
    </BlockLink>
    <Box color="white" bg="black" px={[3, 4, 5]} py={[4, 5]}>
      <Kit size={256} />
      <Heading fontSize={[5, 6, 7, 8]}>Kit</Heading>
      <Text fontSize={[3, 4]} fontWeight="bold" mb={4}>
        Tools for developing, documenting, and testing React component
        libraries
      </Text>
      <Button
        is="a"
        href="https://github.com/c8r/kit"
        fontSize={2}
        px={4}
        py={3}
        color="black"
        bg="white"
      >
        GitHub
      </Button>
      <Button
        is="a"
        href="/demo"
        fontSize={2}
        ml={1}
        px={4}
        py={3}
        color="white"
        bg="black"
      >
        Demo
      </Button>
    </Box>
  </React.Fragment>
))
