// default App
import path from 'path'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import DefaultProvider from './Provider'
import DirectoryListing from './DirectoryListing'

class App extends React.Component {
  static defaultProps = {
    routes: [],
    components: {},
    theme: {}
  }

  state = this.props

  render () {
    const {
      routes,
      Provider = DefaultProvider,
    } = this.state

    return (
      <React.Fragment>
        <BrowserRouter
          context={{}}
          location={this.props.pathname}>
          <Provider {...this.state}>
            <Switch>
              {routes.map(route => (
                <Route
                  {...route}
                  component={undefined}
                  render={routeProps => (
                    React.createElement(route.component, {
                      ...this.props,
                      ...routeProps
                    })
                  )}
                />
              ))}
              <Route render={() => <DirectoryListing {...this.state} />} />
            </Switch>
          </Provider>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App
