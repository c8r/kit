import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'
import Flex from './Flex'
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

const ColorPalette = ({ colors }) =>
  <Flex
    wrap
    children={Object.keys(colors).map(color =>
      <Swatch
        key={color}
        color={color}
        value={colors[color]}
      />
    )}
  />

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
