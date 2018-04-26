import test from 'ava'
import React from 'react'
import styled from 'styled-components'
import { create as render } from 'react-test-renderer'
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

const renderJSON = el => render(el).toJSON()

test('Cartesian renders all examples', t => {
  const result = renderJSON(<Cartesian {...buttonProps} component={Button} />)

  t.snapshot(result)
})
