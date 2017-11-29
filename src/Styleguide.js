import React from 'react'

import connect from 'refunk'
import Router from '@compositor/x0/lib/Router'

import { Route } from 'react-router-dom'
import { Div } from '@compositor/mono'

import Layout from './Layout'
import Index from './Index'
import ThemePage from './ThemePage'
import MarkdownPage from './MarkdownPage'
import ComponentPage from './ComponentPage'
import StyledApiPage from './StyledApiPage'

const Styleguide = props =>
  <Div>
    <Router>
      <Route
        exact
        path='/'
        render={() => <Index {...props} />}
      />
      <Route
        path='/theme/:theme'
        component={ThemePage}
      />
      <Route
        path='/overview/:page'
        component={MarkdownPage}
      />
      <Route
        path='/components/:component'
        component={ComponentPage}
      />
      <Route
        path='/styled-api/:component'
        component={StyledApiPage}
      />
    </Router>
  </Div>

export default connect(Styleguide)
