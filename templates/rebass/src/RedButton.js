import styled from 'styled-components'
import Button from './Button'

const RedButton = styled(Button)`
`

RedButton.defaultProps = {
  bg: 'red'
}

RedButton.displayName = 'RedButton'

export default RedButton
