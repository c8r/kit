import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import CodeBlock from '../src/CodeBlock'

test('renders', t => {
  const json = render(
    <CodeBlock
      lang='js'
      children='console.log("hi")'
    />
  ).toJSON()
  t.snapshot(json)
})

test.skip('renders with live editor', t => {
  const json = render(
    <CodeBlock
      scope={{}}
      lang='.jsx'
      children='<div />'
    />
  ).toJSON()
  t.snapshot(json)
})
