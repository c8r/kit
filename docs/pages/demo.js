import React from 'react'
import { Box, Button } from 'rebass'
import { Library, Detail, Example, XRay } from '@compositor/kit'
import withLayout from '../components/withLayout'

import { XRayDocs } from '../../core/docs'

const Demo = ({ buttonProps, ...props}) => (
  <Box p={3} {...props}>
    <Button {...buttonProps}>Beep</Button>
  </Box>
)

export default withLayout(props => (
  <Box px={[3, 4, 5]}>
    <Library basename="demo">
      <Example name="XRay">
        <XRay>
          <Demo />
        </XRay>
        <Detail>
          <XRayDocs />
        </Detail>
      </Example>
    </Library>
  </Box>
))
