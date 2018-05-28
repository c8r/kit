import React from 'react'
import styled from 'styled-components'
import { Logo, Kit } from '@compositor/logo'
import {
  Provider,
  Box,
  Flex,
  Container,
  Heading,
  Caps,
  Text,
  Button,
  BlockLink,
  Image,
} from 'rebass'
import {
  NavBar,
  NavLink
} from '@compositor/mono'

const Video = styled.video([], {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '16px',
})

export default props => (
  <Provider>
    <NavBar>
      <NavLink href='/'>Kit</NavLink>
      <NavLink href='https://github.com/c8r/kit'>GitHub</NavLink>
    </NavBar>
    <Box color="black" bg="white" px={[3, 4 ]} py={4}>
      <Container maxWidth={1024}>
        <Video
          autoPlay
          loop
          muted
          playsInline
          poster='demo.gif'
          src='demo-small.mp4'
        />
        <Heading mt={3} fontSize={[5, 6, 7, 8]}>Kit</Heading>
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
          bg="black"
        >
          GitHub
        </Button>
        <Flex py={4}>
          <Box mx='auto' />
          <Kit size={128} />
          <Box mx='auto' />
        </Flex>
      </Container>
    </Box>
  </Provider>
)
