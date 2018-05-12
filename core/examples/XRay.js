import React from 'react'
import { XRay } from '../src'
import { Box, Button } from 'rebass'

export default props => (
  <Box p={3}>
    <XRay>
      <Button m={2}>Hello</Button>
    </XRay>
  </Box>
)
