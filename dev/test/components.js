import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'

// components
import App from '../lib/App'
import DirectoryListing from '../lib/DirectoryListing'
import Library from '../lib/Library'
import Provider from '../lib/Provider'

const renderJSON = el => render(el).toJSON()

const routes = [
  {
    key: 'hello',
    name: 'hello',
    path: '/hello',
    component: () => false
  }
]

test('App renders', t => {
  const json = renderJSON(<App />)
  t.snapshot(json)
})

test('App renders with routes', t => {
  const json = renderJSON(<App routes={routes} pathname='/hello' />)
  t.snapshot(json)
})

test('DirectoryListing renders', t => {
  const json = renderJSON(<DirectoryListing />)
  t.snapshot(json)
})

test('DirectoryListing renders with routes', t => {
  const json = renderJSON(
    <StaticRouter context={{}} location='/'>
      <DirectoryListing routes={routes} />
    </StaticRouter>
  )
  t.snapshot(json)
})

test('Library renders', t => {
  const json = renderJSON(<Library />)
  t.snapshot(json)
})

test('Provider renders', t => {
  const json = renderJSON(<Provider />)
  t.snapshot(json)
})
