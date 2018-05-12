import React from 'react'
import { Box, Button } from 'rebass'
import { PropsForm } from '../src'

export default props => (
  <Box p={3}>
    <PropsForm>
      <Button bg="tomato">Hello</Button>
      <PropsForm.Input name="children" />
      <PropsForm.Select name="bg">
        <option />
        <option>tomato</option>
        <option>magenta</option>
        <option>cyan</option>
      </PropsForm.Select>
    </PropsForm>
  </Box>
)
