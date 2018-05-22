import styled from 'styled-components'
import { color, space, width, flex, order } from 'styled-system'

const Box = styled.div`
  ${color}
  ${space}
  ${width}
  ${flex}
  ${order}
`

Box.defaultProps = {}

Box.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...flex.propTypes,
  ...order.propTypes
}

Box.displayName = 'Box'

export default Box
