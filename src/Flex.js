import nano from 'nano-style'

import {
  space,
  width,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf
} from 'styled-system'

const Flex = nano('div')(
  props => ({
    display: 'flex'
  }),
  space,
  width,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf
)

Flex.defaultProps = {
  align: 'initial'
}

export default Flex
