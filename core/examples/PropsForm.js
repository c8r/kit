import React from 'react'
import { Box, Button } from 'rebass'
import { PropsForm } from '../src'

const CustomButton = ({ red, ...props }) => (
  <Button color={red ? 'red' : 'white'} {...props} />
)

export default props => (
  <Box p={3}>
    <PropsForm>
      <CustomButton bg="tomato">Hello</CustomButton>
      <PropsForm.Input name="children" />
      <PropsForm.Select name="bg">
        <option />
        <option>tomato</option>
        <option>magenta</option>
        <option>cyan</option>
      </PropsForm.Select>
      <PropsForm.Checkbox name="red" />
    </PropsForm>
  </Box>
)
