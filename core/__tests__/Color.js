import React from 'react'
import { render } from 'react-testing-library'

import { Color } from '../src'

const colors = {
  red: 'red',
  gray: {
    light: ['#fafafa', '#f5f5f5'],
    dark: ['#555', '#111']
  },
  brand: {
    black: 'black',
    white: 'white',
    tomato: 'tomato'
  }
}

test('Color returns a color palette', () => {
  const { container } = render(
    <Color colors={colors} />
  )

  expect(container).toMatchSnapshot()
})
