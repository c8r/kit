import React from 'react'
import { ThemeProvider, Box } from '../src'

export default () => (
  <ThemeProvider>
    <Box p={3} bg="blue">
      ThemeProvider
    </Box>
  </ThemeProvider>
)
