import React from 'react'
import { render, hydrate } from 'react-dom'
import modes from './modes'
import getRoutes from './getRoutes'

const div = window.root || document.body.appendChild(
  document.createElement('div')
)

const mount = window.root ? hydrate : render
const config = CONFIG ? require(CONFIG).default || require(CONFIG) : {}
const req = require.context(DIRNAME, true, /\.(js|jsx|md|mdx)$/)
const routes = getRoutes(req)

// require App based on mode option
const App = modes[OPTIONS.mode] || modes.App

const app = mount(
  <App
    {...config}
    routes={routes}
  />,
  div
)

if (module.hot) {
  module.hot.accept(req.id, () => {
    const next = require.context(DIRNAME, true, /\.(js|jsx|md|mdx)$/)
    const routes = getRoutes(next)
    app.setState({ routes })
  })

  if (CONFIG) {
    module.hot.accept(require.resolve(CONFIG), () => {
      const config = require(CONFIG).default || require(CONFIG)
      app.setState(config)
    })
  }
}
