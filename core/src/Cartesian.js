import React, { Fragment } from 'react'
import { cartesianProduct } from './util'

export default ({ component, ...props }) => {
  const combinations = cartesianProduct(props)
  const Component = component

  return (
    <Fragment>
      {combinations.map((props, i) => <Component key={i} {...props} />)}
    </Fragment>
  )
}
