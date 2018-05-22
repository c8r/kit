import React from 'react'

export default ({ size = 32, color = 'black' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M2 2 L30 2 L2 30z" />
    <path d="M2 2 L2 30 L30 30z" />
  </svg>
)
