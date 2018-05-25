import React from 'react'
import { Responsive } from '@compositor/kit'
import WrapRoutes from './WrapRoutes'

export default class ResponsiveMode extends React.Component {
  render () {
    return (
      <WrapRoutes
        {...this.props}
        Wrapper={Responsive}
      />
    )
  }
}
