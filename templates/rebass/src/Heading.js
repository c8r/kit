import styled from 'styled-components'
import { Heading as BaseHeading } from 'rebass'

const Heading = styled(BaseHeading)`
`

Heading.defaultProps = {
  fontSize: 6,
  lineHeight: 1.125
}

Heading.displayName = 'Heading'

export default Heading
