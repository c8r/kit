import nano from 'nano-style'

import {
  color,
  space,
  width,
  borderColor,
  borderWidth,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf
} from 'styled-system'

const Box = nano('div')(
  color,
  space,
  width,
  borderColor,
  borderWidth,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf
)

export default Box
