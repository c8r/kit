import styled from 'glamorous'

import {
  space,
  width,
  borderColor,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf
} from 'styled-system'

const Box = styled('div')(
  props => ({
    boxSizing: 'border-box'
  }),
  space,
  width,
  borderColor,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf
)

export default Box
