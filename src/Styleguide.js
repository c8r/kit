import React from 'react'
import path from 'path'

import {
  BrowserRouter,
  StaticRouter,
  Route
} from 'react-router-dom'

import { ThemeProvider } from 'glamorous'
import { Markdown } from '@compositor/markdown'

import Box from './Box'
import Nav from './Nav'
import Flex from './Flex'
import Debug from './Debug'
import Layout from './Layout'
import LiveEditor from './LiveEditor'

import { layoutCss } from './constants'

const Router = typeof document === 'undefined' ? StaticRouter : BrowserRouter

const defaultScope = {
  Box,
  Flex,
  Nav,
  Layout,
  LiveEditor
}

export default ({
  Components,
  ...props
}) => {
  const scope = Object.assign({}, defaultScope, Components)

  return (
    <ThemeProvider theme={scope.theme}>
      <Router
        basename={props.basename}
        location={props.pathname || '/'}
      >
        <Layout {...props} {...scope}>
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
                render={props =>
                  <Markdown
                    components={Components}
                    scope={Components}
                    text={component.content}
                    {...props}
                  />
                }
              />
            )
          })}

          <Debug>{props}</Debug>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
