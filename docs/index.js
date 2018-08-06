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

const features = [
  'Zero-config isolated development modes',
  'Maximize code reuse for development, documentation, and testing',
  'Components over configuration',
  'No custom API code',
  'Debugging and utility components',
  'Works with virtually any React setup'
]

const Home = props => (
  <Provider>
    <NavBar>
      <NavLink href='/'>Kit</NavLink>
      <NavLink href='https://github.com/c8r/kit'>GitHub</NavLink>
    </NavBar>
    <Container maxWidth={1024} py={4}>
      <Video
        autoPlay
        loop
        muted
        playsInline
        poster='images/demo.gif'
        src='images/demo-small.mp4'
      />
      <Flex alignItems='center' py={4}>
        <Box>
          <Heading fontSize={[5, 6, 7, 8]}>Kit</Heading>
          <Text fontSize={[3, 4]} fontWeight="bold" mb={3}>
            Tools for developing, documenting, and testing React component
            libraries
          </Text>
          <Button
            is="a"
            href="introduction"
            fontSize={2}
            px={4}
            py={3}
            bg="black"
          >
            Documentation
          </Button>
          <Button
            is="a"
            href="https://github.com/c8r/kit"
            fontSize={2}
            px={4}
            py={3}
            ml={2}
            bg="white"
            color="black"
          >
            GitHub
          </Button>
        </Box>
        <Box mx={3} />
        <Kit size={128} />
      </Flex>
      <Flex flexWrap='wrap' mx={-3} py={4}>
        {features.map(feat => (
          <Box
            key={feat}
            width={[ 1, 1/2, 1/3 ]}
            p={3}>
            <Text fontWeight='bold'>
              {feat}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex py={5} mx={-2}>
        <NavLink href='/'>Kit</NavLink>
        <NavLink href='https://github.com/c8r/kit'>GitHub</NavLink>
        <Box mx='auto' />
        <Text px={2} fontSize={0}>
          © 2018 Compositor, Inc.
        </Text>
      </Flex>
    </Container>
  </Provider>
)

Home.defaultProps = {
  layout: false
}

export default Home
