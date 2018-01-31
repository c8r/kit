import styled from 'styled-components'

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
  [],
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
