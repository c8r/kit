import React from 'react'
import PropTypes from 'prop-types'
import Colorable from 'colorable'

import { Box, Flex } from './ui'
import { Text, Code } from '../library'

const Swatch = ({ color, value }) =>
  <Box w={[1/2, 1/3, 1/5]} pb={4}>
    <Box bg={color} py={4} />
    <Text m={0}>
      {color}
      <Code
        p={0}
        f={0}
        color='muted'
        bg='transparent'
      >
        {value}
      </Code>
    </Text>
  </Box>

const ColorPalette = ({ colors, colorable }) =>
  <Box w={1}>
    <Flex
      wrap={true}
      children={Object.keys(colors).map(color =>
        <Swatch
          key={color}
          color={color}
          value={colors[color]}
        />
      )}
    />

    <Flex
      wrap={true}
      children={colorable && Colorable(colors, { compact: true, threshold: 5 })
        .reduce((acc, color) =>
          acc.concat(color.combinations.map(combo => Object.assign({}, { base: color.name }, combo)))
        , [])
        .map(combo =>
          <Box
            key={`${combo.base}-${combo.name}`}
            p={3}
            w={[1, 1/3, 1/4]}
            bg={combo.name}
            color={combo.base}
          >
            <Text fontWeight={800} f={5}>Aa</Text>
            <Code bg='transparent'>{combo.base}</Code>
            <Code bg='transparent'>{combo.name}</Code>
          </Box>
        )
      }
    />
  </Box>

ColorPalette.defaultProps = {
  colorable: false
}

ColorPalette.propTypes = {
  /**
   * Object of color name to color value mapping
   */
  colors: PropTypes.object.isRequired,
  /**
   * Include all accessible color combinations
   */
  colorable: PropTypes.boolean
}

export default ColorPalette
