import React from 'react'
import { XRay } from '@compositor/kit'
import WrapRoutes from './WrapRoutes'

export default class XRayMode extends React.Component {
  render () {
    return (
      <WrapRoutes
        {...this.props}
        Wrapper={XRay}
      />
    )
  }
}
