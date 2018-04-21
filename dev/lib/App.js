// default App
import path from 'path'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
  StaticRouter,
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import DefaultProvider from './Provider'
import DirectoryListing from './DirectoryListing'

const IS_BROWSER = typeof document !== 'undefined'
const Router = IS_BROWSER ? BrowserRouter : StaticRouter

class App extends React.Component {
  static defaultProps = {
    routes: [],
    components: {},
    theme: {}
  }

  state = this.props

  render () {
    const { routes, ...config } = this.state
    const Provider = config.Provider || DefaultProvider

    return (
      <React.Fragment>
        <Router
          context={{}}
          location={this.props.pathname}>
          <Provider {...config}>
            <Switch>
              {routes.map(route => (
                <Route
                  {...route}
                  component={undefined}
                  render={routeProps => (
                    React.createElement(route.component, {
                      ...this.props,
                      ...config,
                      ...routeProps
                    })
                  )}
                />
              ))}
              <Route render={() => <DirectoryListing {...this.state} />} />
            </Switch>
          </Provider>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
