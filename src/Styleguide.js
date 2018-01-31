import React from 'react'
import path from 'path'

import {
  BrowserRouter,
  StaticRouter,
  Route
} from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { Markdown } from '@compositor/markdown'

import Box from './Box'
import Nav from './Nav'
import Flex from './Flex'
import Debug from './Debug'
import Layout from './Layout'
import Docgen from './Docgen'
import LiveEditor from './LiveEditor'
import StyledSystem from './StyledSystem'

import { layoutCss } from './constants'

const Router = typeof document === 'undefined' ? StaticRouter : BrowserRouter

const defaultScope = {
  Box,
  Flex,
  Nav,
  Debug,
  Layout,
  Docgen,
  LiveEditor,
  StyledSystem
}

const Styleguide = ({
  Components,
  ...props
}) => {
  const scope = Object.assign({}, defaultScope, Components, { props })

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
            render={routeProps => {
              const intro = props.styleguide.components.introduction

              return (
                <Markdown
                  components={Components}
                  LiveEditor={LiveEditor}
                  scope={scope}
                  text={intro.content}
                  {...routeProps}
                  {...props}
                />
              )
            }}
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
                    LiveEditor={LiveEditor}
                    scope={scope}
                    text={component.content}
                    {...props}
                  />
                }
              />
            )
          })}
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default Styleguide
