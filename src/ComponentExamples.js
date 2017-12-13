import React from 'react'

import {
  H4,
  LinkBox
} from '@compositor/mono'

import Box from './Box'

export default ({
  examples = [],
  currentExample,
  onSelect
}) => {
  if (examples.length === 0) {
    return null
  }

  const color = ex => ex === currentExample ? 'white' : 'black'
  const bg = ex => ex === currentExample ? 'black' : 'white'

  return (
    <Box>
      <H4
        mt={0}
        fontSize={1}
        children='Examples'
      />

      {examples.length > 1 && (
        <LinkBox
          href='#!'
          mr={2}
          bg={bg('all')}
          color={color('all')}
          children='All'
          onClick={() => onSelect('all')}
        />
      )}

      {examples.map((_, i) =>
        <LinkBox
          href='#!'
          key={i}
          mr={2}
          bg={bg(i)}
          color={color(i)}
          children={i}
          onClick={() => onSelect(i)}
        />
      )}
    </Box>
  )
}
