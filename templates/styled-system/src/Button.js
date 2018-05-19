import styled from 'styled-components'
import {
  color,
  space,
  fontSize,
  borderRadius
} from 'styled-system'

const Button = styled.button`
  font-family: inherit;
  font-weight: bold;
  line-height: ${16/14};
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  border: 0;
  appearance: none;
  ${color}
  ${space}
  ${fontSize}
  ${borderRadius}

  &:hover {
  }
  &:focus {
  }
  &:active {
  }
  &:disabled {
  }
`

Button.defaultProps = {
  m: 0,
  px: 3,
  py: 2,
  fontSize: 1,
  borderRadius: 2,
  color: 'white',
  bg: 'blue'
}

Button.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...borderRadius.propTypes
}

Button.displayName = 'Button'

export default Button
