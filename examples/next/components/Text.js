import styled from 'styled-components'
import { fontSize, space, color, propTypes } from 'styled-system'

const Text = styled('p')([fontSize, space, color])
Text.displayName = 'Text'
Text.defaultProps = {
  fontSize: 3
}
Text.propTypes = {
  ...propTypes.fontSize,
  ...propTypes.space,
  ...propTypes.color
}

export default Text
