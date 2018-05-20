import styled from 'styled-components'
import { Button as BaseButton } from 'rebass'

const Button = styled(BaseButton)`
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
  fontSize: 1,
  borderRadius: 2,
  color: 'white',
  bg: 'blue'
}

Button.displayName = 'Button'

export default Button
