import React from 'react'
import styled from 'nano-style'
import { render } from 'react-testing-library'
import { color } from 'styled-system'

import { Colorable } from '../src'

const colors = ['black', 'white', 'pink', 'tomato', 'purple']

const Button = styled('a')(color)

test('Colorable returns all possible colors', () => {
  const { container } = render(
    <Colorable
      colors={colors}
      children={combos => combos.map(combo =>
        <div
          key={combo.hex}
          children={combo.combinations.map(c =>
            <Button key={c.hex} bg={c.hex} color={combo.hex}>Beep</Button>
          )}
        />
      )}
    />
  )

  expect(container).toMatchSnapshot()
})
