import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import {
  Library,
  Example,
  Detail
} from '../src'

const renderJSON = el => render(el).toJSON()

test('Library renders', t => {
  const json = renderJSON(<Library />)
  t.snapshot(json)
})

test('Example renders', t => {
  const json = renderJSON(
    <Example name='Hello'>
      <h1>Hello</h1>
    </Example>
  )
  t.snapshot(json)
})

test('Detail renders', t => {
  const json = renderJSON(
    <StaticRouter context={{}}>
      <Detail />
    </StaticRouter>
  )
  t.snapshot(json)
})
