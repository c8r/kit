import React from 'react'
import { Box, Button } from 'rebass'
import { Diff } from '../src'

export default props => (
  <Box p={3}>
    <Diff>
      <Button>Hello</Button>
      <Button bg='red' px={2}>Hello</Button>
    </Diff>
  </Box>
)
