import React from 'react'
import connect from 'refunk'

import {
  Route,
  StaticRouter,
  BrowserRouter
} from 'react-router-dom'

import Layout from './Layout'
import ComponentPage from './ComponentPage'

const Router = typeof document === 'undefined' ? StaticRouter : BrowserRouter

const Styleguide = props =>
  <Layout {...props}>
    <Router>
      <Route
        path='/components/:component'
        component={ComponentPage}
      />
    </Router>
  </Layout>

export default connect(Styleguide)
