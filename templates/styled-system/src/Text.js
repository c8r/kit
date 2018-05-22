import styled from 'styled-components'
import {
  color,
  space,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  letterSpacing
} from 'styled-system'

const Text = styled.div`
  ${color}
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${textAlign}
  ${letterSpacing}
`

Text.defaultProps = {}

Text.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...textAlign.propTypes,
  ...letterSpacing.propTypes
}

Text.displayName = 'Text'

export default Text
