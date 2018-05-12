import React from 'react'
import { Box, Button } from 'rebass'
import { LiveEditor } from '../src'

export default props => (
  <Box p={3}>
    <LiveEditor
      scope={{ Button }}
      code={`<Button bg='tomato'>Hello</Button>`}
    />
  </Box>
)
