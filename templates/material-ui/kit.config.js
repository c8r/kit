import React from 'react'
import { theme } from './src'

const Provider = props => (
  <React.Fragment>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    {props.children}
  </React.Fragment>
)

export default {
  Provider
  // theme
}
