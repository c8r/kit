import React from 'react'
import { render } from 'react-testing-library'
import { StaticRouter } from 'react-router-dom'
import { Library, Example, Detail } from '../src'

test('Library renders', () => {
  const { container } = render(<Library />)

  expect(container).toMatchSnapshot()
})

test('Example renders', () => {
  const { container } = render(
    <Example name="Hello">
      <h1>Hello</h1>
    </Example>
  )

  expect(container).toMatchSnapshot()
})

test('Detail renders', () => {
  const { container } = render(
    <StaticRouter context={{}}>
      <Detail />
    </StaticRouter>
  )

  expect(container).toMatchSnapshot()
})
