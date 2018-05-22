import React from 'react'
import { Logo, Kit } from '@compositor/logo'
import {
  Provider,
  Box,
  Flex,
  Heading,
  Caps,
  Text,
  Button,
  BlockLink
} from 'rebass'

const CSS = ({ css }) => <style dangerouslySetInnerHTML={{ __html: css }} />

CSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

export default props => (
  <React.Fragment>
    <head>
      <meta charSet="utf-8" />
      <title>Compositor Kit</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <CSS />
      <meta
        name="description"
        content="Tools for developing, documenting, and testing React component libraries"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@getcompositor" />
      <meta name="twitter:title" content="Compositor Kit" />
      <meta
        name="twitter:description"
        content="Tools for developing, documenting, and testing React component libraries"
      />
      <meta
        name="twitter:image"
        content="https://compositor.io/logo/dist/kit.png"
      />
    </head>
    <Provider>
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
      </Box>
    </Provider>
  </React.Fragment>
)
