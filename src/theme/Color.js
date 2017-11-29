import React from 'react'

import colorable from 'colorable'

import {
  Heading,
  Text,
  Div
} from '@compositor/mono'

import Box from '../Box'
import Flex from '../Flex'

export default ({
  config,
  theme: {
    colors
  },
  ...props
}) =>
  <Box>
    <Box ml={3} py={4}>
      <Heading mt={4} mb={2}>Color</Heading>
      <Text color='gray5'>
        The following colors are part of the palette.
      </Text>
    </Box>

    <Flex
      wrap
      children={Object.keys(colors).map(color =>
        <Box
          key={color}
          py={2}
          px={3}
          w={[1, 1/3, 1/4]}
        >
          <Div
            bg={color}
            style={{
              height: '8vh'
            }}
          />

          <Flex
            align='center'
            justify='space-between'
          >
            <Text f={1}>{color}</Text>
            <code>{colors[color]}</code>
          </Flex>
        </Box>
      )}
    />

    <Box ml={3} py={4} mt={4}>
      <Heading mb={2}>Accessible Combinations</Heading>
      <Text color='gray5'>
        The following colors are all a11y color combinations.
      </Text>
    </Box>

    <Flex
      wrap
      children={
        colorable(colors, { compact: true, threshold: 4.5 })
          .reduce((acc, color) =>
            acc.concat(color.combinations.map(combo => Object.assign({}, { base: color.name }, combo)))
          , [])
          .map(combo =>
            <Box
              key={`${combo.base}-${combo.name}`}
              p={3}
              w={[1, 1/3, 1/4]}
            >
              <Div
                p={3}
                f={4}
                color={combo.base}
                bg={combo.name}
                style={{fontWeight: 700}}
                children='Aa'
              />

              <Flex
                style={{ display: 'none' }}
                align='center'
                justify='space-between'
              >
                <code>{combo.base}</code>
                <code>{combo.name}</code>
              </Flex>
            </Box>
        )}
      />
  </Box>
