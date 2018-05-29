import React from 'react'
import styled from 'styled-components'
import { render } from 'react-testing-library'
import { color, space, fontSize } from 'styled-system'

import { Cartesian } from '../src'

const buttonProps = {
  children: 'Hello, world!',
  fontSize: [1, 2, 3],
  px: [2, 3],
  backgroundColor: ['pink', 'tomato', 'purple']
}

const Button = styled.a`
  ${color}
  ${fontSize}
  ${space}
`

test('Cartesian renders all examples', t => {
  const { container } = render(<Cartesian {...buttonProps} component={Button} />)

  expect(container).toMatchSnapshot()
})
