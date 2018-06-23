import React, { Fragment } from 'react'
import { cartesianProduct } from './util'

export default ({ component, container, ...props }) => {
  const combinations = cartesianProduct(props)
  const Component = component
  
  if (container) {
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
  
  return (
    <Fragment>
      {combinations.map((props, i) => <Component key={i} {...props} />)}
    </Fragment>
  )
}
