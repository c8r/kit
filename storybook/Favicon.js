import React from 'react'

export default ({
  size = 32,
  color = 'tomato'
}) => (
  <svg
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill={color}
  >
    <path
      d='M16 2 L0 30 L32 30z'
    />
  </svg>
)
