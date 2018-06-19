import React from 'react'
import { render } from 'react-testing-library'
import styled from 'nano-style'
import { Matrix } from '../src'

const Donut = styled('progress')(props => ({ color: props.color }))

test('Matrix renders all examples', () => {
  const { container } = render(
    <Matrix
      x={[
        { color: 'blue ' },
        { color: 'pink' },
        { color: 'tomato' },
        { color: 'purple' }
      ]}
      y={[
        { value: 1 / 5 },
        { value: 1 / 4 },
        { value: 1 / 3 },
        { value: 3 / 4 }
      ]}
      component={Donut}
    />
  )

  expect(container).toMatchSnapshot()
})
