import React from 'react'
import { render, Simulate, wait } from 'react-testing-library'
import { Fetch } from '../src'

const RenderFn = ({ fetchState }) => <h1>{fetchState}</h1>

test('Fetch calls render function and performs fetch', async () => {
  const { getByText } = render(
    <Fetch
      url="compositor.io/foo"
      children={RenderFn}
    />
  )

  expect(getByText('loading')).not.toBeNull()

  await wait(() => getByText('fetched'))

  expect(getByText('fetched')).not.toBeNull()
})
