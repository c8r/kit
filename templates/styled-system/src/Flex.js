import styled from 'styled-components'
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection
} from 'styled-system'
import Box from './Box'

const Flex = styled(Box)`
  display: flex;
`

Flex.defaultProps = {}

Flex.propTypes = {
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes
}

Flex.displayName = 'Flex'

export default Flex
