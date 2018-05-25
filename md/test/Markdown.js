import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import Markdown from '../src/Markdown'

test('renders', t => {
  const json = render(
    <Markdown
      src={`# Hello`}
    />
  ).toJSON()
  t.snapshot(json)
})

test('renders with scope', t => {
  const json = render(
    <Markdown
      src={`# Hello`}
      scope={{
        h1: props => <h1 {...props} style={{ color: 'tomato' }} />
      }}
    />
  ).toJSON()
  t.snapshot(json)
})
