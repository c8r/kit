import nano from 'nano-style'
import {
  color,
  space,
  width,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf
} from 'styled-system'

export const Box = nano('div')(
  color,
  space,
  width,
  flex,
  alignSelf
)
Box.displayName = 'Box'

export const Flex = nano(Box)({
    display: 'flex'
  },
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
)
Flex.displayName = 'Flex'

export default {
  Box,
  Flex,
}

