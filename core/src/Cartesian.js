import React, { Fragment } from 'react'
import { cartesianProduct } from './util'

export default ({ component, container = Fragment, ...props }) => {
  const combinations = cartesianProduct(props)
  const Component = component
  const Container = container
  
  return (
    <Fragment>
      {combinations.map((props, i) => (
        <Container key={i} >
          <Component {...props} />
        </Container>
      ))}
    </Fragment>
  )
}
