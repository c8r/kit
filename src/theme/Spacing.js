import React from 'react'

import { space } from 'styled-system'

import {
  Heading,
  Text,
  Div
} from '@compositor/mono'

import Box from '../Box'
import Flex from '../Flex'

export default ({
  config,
  theme,
  ...props
}) =>
  <Box>
    <Box ml={3} py={4}>
      <Heading mt={4} mb={2}>Spacing</Heading>
      <Text color='gray5'>
        A spacing scale provides values for margin and padding
      </Text>
    </Box>

    <Div
      py={4}
      px={5}
      style={{
        display: 'inline-block',
        position: 'relative',
        backgroundColor: '#fafafa',
        border: 'thin solid black'
      }}
    >
      <Div
        style={{
          position: 'absolute',
          left: '0',
          top: '50%',
          marginTop: '-8px',
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          height: '16px',
          fontSize: '12px'
        }}
        w={space({ p: 5, theme }).padding}
        children={space({ p: 5, theme }).padding}
      />

      <Div
        style={{
          position: 'absolute',
          left: '50%',
          marginLeft: '-16px',
          top: '8px',
          backgroundColor: 'black',
          color: 'white',
          transform: 'rotate(-90deg)',
          textAlign: 'center',
          height: '16px',
          fontSize: '12px'
        }}
        w={space({ p: 4, theme }).padding}
        children={space({ p: 4, theme }).padding}
      />

      <Div
        p={3}
        style={{
          backgroundColor: 'tomato',
          color: 'black'
        }}
        children='px={5} py={4}'
      />

    </Div>

    {theme.space.map((s, i) =>
      <Flex
        key={s}
        my={4}
        wrap
      >
        <Div
          w={[1, 1/2, 1/2]}
          children={space({ p: i, theme }).padding}
        />

        <Div
          px={3}
          py={i}
          style={{
            display: 'inline',
            backgroundColor: '#fafafa',
            border: 'thin solid black'
          }}
          children={i}
        />
      </Flex>
    )}

  </Box>
