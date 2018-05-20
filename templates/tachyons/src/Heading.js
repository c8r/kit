import React from 'react'
import classnames from 'classnames'

const Heading = ({
  className,
  ...props
}) => (
  <h2
    {...props}
    className={classnames(
      'f2 mt2 mb0',
      className
    )}
  />
)

Heading.displayName = 'Heading'

export default Heading
