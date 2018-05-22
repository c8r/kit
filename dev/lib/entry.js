import React from 'react'
import { render } from 'react-dom'
import modes from './modes'
import getRoutes from './getRoutes'

const div =
  window.root || document.body.appendChild(document.createElement('div'))

const config = CONFIG ? require(CONFIG).default || require(CONFIG) : {}
const req = require.context(DIRNAME, false, /\.(js|jsx|md|mdx)$/)
const routes = getRoutes(req)
const App = modes[OPTIONS.mode] || modes.App

const app = render(<App {...config} routes={routes} />, div)

if (module.hot) {
  module.hot.accept(req.id, () => {
    const next = require.context(DIRNAME, false, /\.(js|jsx|md|mdx)$/)
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
