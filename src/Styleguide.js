import React from 'react'

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

import getMetadata from './get-metadata'

const Router = typeof document === 'undefined' ? StaticRouter : BrowserRouter

const defaultScope = {
  Box,
  Flex,
  Layout,
  LiveEditor
}

const Styleguide = ({
  docsSrc = 'doc',
  componentsSrc = 'src',
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

          {Object.keys(props.styleguide).map(name => {
            const component = props.styleguide[name]

            return (
              <Route
                key={component.name}
                path={component.route}
                render={() =>
                  <Markdown
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

Styleguide.getInitialProps = async props => {
  const metadata = await getMetadata(props)

  return Object.assign({}, props, { styleguide: metadata })
}

export default Styleguide
