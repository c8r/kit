import React, { Fragment } from 'react'
import nano from 'nano-style'
import { Box } from './ui'

const DiffBox = nano(Box)(({ blendMode }) => ({
  position: 'relative',
  mixBlendMode: blendMode || 'multiply'
}))

const ComponentBox = nano(Box)(({ blendMode }) => ({
  position: 'absolute',
  mixBlendMode: blendMode || 'multiply'
}))

export default ({ blendMode, a, b }) => (
  <DiffBox>
    <ComponentBox blendMode={blendMode}>{a}</ComponentBox>
    <ComponentBox blendMode={blendMode}>{b}</ComponentBox>
  </DiffBox>
)
