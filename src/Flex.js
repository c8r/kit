import styled from 'glamorous'

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

const Flex = styled('div')(
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
