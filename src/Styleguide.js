import React from 'react'
import connect from 'refunk'

import {
  Route
} from 'react-router-dom'

import {
  Div
} from '@compositor/mono'

import Router from '@compositor/x0/lib/Router'

import Layout from './Layout'
import Index from './Index'
import MarkdownPage from './MarkdownPage'
import ComponentEditor from './ComponentEditor'

const Styleguide = props =>
  <Div>
    <Router>
      <Route
        exact
        path='/'
        render={() => <Index {...props} />}
      />

      <Route
        path='/overview/:page'
        component={MarkdownPage}
      />

      <Route
        path='/components'
        render={() =>
          <Layout>
            <Div
              children={props.components.map(c =>
                <ComponentEditor
                  key={c.name}
                  theme={props.theme}
                  component={c}
                  library={props.library}
                  editor={props.editors[c.name]}
                />
              )}
            />
          </Layout>
        }
      />
    </Router>
  </Div>

export default connect(Styleguide)
