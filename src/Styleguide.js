import React from 'react'

import connect from 'refunk'

import { Route } from 'react-router-dom'
import { Div } from '@compositor/mono'

import Router from '@compositor/x0/lib/Router'

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
        path='/components/:component/styled-api'
        component={StyledApiPage}
      />
    </Router>
  </Div>

export default connect(Styleguide)
