import React from 'react'
import { render } from 'react-testing-library'
import { StaticRouter } from 'react-router-dom'
import { Library, Example, Detail } from '../src'

test('Library renders', t => {
  const json = renderJSON(<Library />)
  t.snapshot(json)
})

test('Example renders', t => {
  const { container } = render(
    <Example name="Hello">
      <h1>Hello</h1>
    </Example>
  )

  expect(container).toMatchSnapshot()
})

test('Detail renders', t => {
  const { container } = render(
    <StaticRouter context={{}}>
      <Detail />
    </StaticRouter>
  )

  expect(container).toMatchSnapshot()
})
