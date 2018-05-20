import React from 'react'
import classnames from 'classnames'

const Button = ({
  className,
  ...props
}) => (
  <button
    {...props}
    className={classnames(
      'f6 f5-ns fw6 dib',
      'ba b--black-20 bg-blue white',
      'ph3 ph4-ns pv2 pv3-ns br2',
      'grow no-underline',
      className
    )}
  />
)

Button.displayName = 'Button'

export default Button
