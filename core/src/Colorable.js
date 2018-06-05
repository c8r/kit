import React from 'react'
import colorable from 'colorable'
import { flatten } from './util'

export default ({ colors, children, ...opts }) => {
  const allColors = Array.isArray(colors) ? colors : flatten(colors)

  return children(colorable(allColors, opts))
}
