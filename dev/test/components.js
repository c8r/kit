import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'

// components
import Library from '../src/Library'

const renderJSON = el => render(el).toJSON()

const routes = [
  {
    key: 'hello',
    name: 'hello',
    path: '/hello',
    component: () => false
  }
]

test('Library renders', t => {
  const json = renderJSON(<Library />)
  t.snapshot(json)
})

