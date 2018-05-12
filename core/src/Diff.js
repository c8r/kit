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

export default ({
  blendMode,
  children
}) => {
  const diffs = React.Children.toArray(children)
  return (
    <DiffBox>
      {diffs.map(el => (
        <ComponentBox
          key={el.key}
          blendMode={blendMode}>
          {el}
        </ComponentBox>
      ))}
    </DiffBox>
  )
}
