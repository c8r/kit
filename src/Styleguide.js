import React from 'react'
import path from 'path'

import {
  BrowserRouter,
  StaticRouter,
  Route
} from 'react-router-dom'

import { Markdown } from '@compositor/markdown'

import Box from './Box'
import Flex from './Flex'
import Layout from './Layout'
import LiveEditor from './LiveEditor'

const Router = typeof document === 'undefined' ? StaticRouter : BrowserRouter

const defaultScope = {
  Box,
  Flex,
  Layout,
  LiveEditor
}

export default ({
  Components,
  ...props
}) => {
  const scope = Object.assign({}, defaultScope, Components)

  return (
    <Layout {...scope}>
      <Router>
        <div>
          <Route
            exact
            path='/'
            render={() => <h1>hi</h1>}
          />

          {Object.keys(props.styleguide.components).map(name => {
            const component = props.styleguide.components[name]

            return (
              <Route
                key={component.name}
                path={component.route}
                render={() =>
                  <Markdown
                    components={Components}
                    scope={Components}
                    text={component.content}
                  />
                }
              />
            )
          })}

          <pre>
            {JSON.stringify(props, null, 2)}
          </pre>
        </div>
      </Router>
    </Layout>
  )
}
