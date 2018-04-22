import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
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
  const json = renderJSON(<Example />)
  t.snapshot(json)
})

test('Detail renders', t => {
  const json = renderJSON(<Detail />)
  t.snapshot(json)
})
