import test from 'ava'
import React from 'react'
import styled from 'styled-components'
import { create as render } from 'react-test-renderer'
import { color } from 'styled-system'

import { Colorable } from '../src'

const colors = ['black', 'white', 'pink', 'tomato', 'purple']

const Button = styled.a`
  ${color}
`

const renderJSON = el => render(el).toJSON()

test('Colorable returns all possible colors', t => {
  const result = renderJSON(
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

  t.snapshot(result)
})
