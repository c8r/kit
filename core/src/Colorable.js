import React from 'react'
import colorable from 'colorable'

export default ({ colors, children, ...opts }) => children(colorable(colors, opts))
