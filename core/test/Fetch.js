import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { Fetch } from '../src'

let fetchFnCalls = 0
const RenderFn = ({ fetchState }) => {
  fetchFnCalls++

  return <h1>{fetchState}</h1>
}

test('Fetch calls render function', async t => {
  const dom = render(
    <Fetch
      url="compositor.io/foo"
      children={RenderFn}
    />
  )

  t.snapshot(dom)
  t.is(fetchFnCalls, 1)
})
