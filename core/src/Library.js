import React from 'react'
import nano from 'nano-style'
import {
  BrowserRouter,
  HashRouter,
  StaticRouter,
  Route,
  NavLink
} from 'react-router-dom'
import { Grid } from './ui'

const Root = nano('div')({
  display: 'flex',
  alignItems: 'flex-start',
  height: '100vh'
})

const Main = nano('div')({
  flex: '1 1 auto',
  padding: '8px',
  height: '100vh',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch'
})

const SideBar = nano('div')({
  width: '192px',
  flex: 'none',
  // padding: '8px',
  height: '100vh',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch'
})

const NavItem = nano(NavLink)(
  {
    display: 'block',
    padding: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'inherit',
    // borderRadius: '4px',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    '&.active': {
      color: 'white',
      backgroundColor: 'black'
    }
  }
)

const Context = React.createContext({
})

const Router = typeof document !== 'undefined'
  ? BrowserRouter
  : StaticRouter

export class Library extends React.Component {
  render () {
    return (
      <Router context={{}}>
        <LibraryApp {...this.props} />
      </Router>
    )
  }
}

class LibraryApp extends React.Component {
  state = {}
  update = fn => this.setState(fn)

  getExampleChildren = ({ children }) => (
    React.Children.toArray(children)
      .filter(c => c.type === Example)
      .map(c => ({
        name: c.props.name,
        element: c.props.children
      }))
  )
      
  render() {
    const {
      renderSideNav,
    } = this.props

    const examples = this.props.examples || this.getExampleChildren(this.props)

    const sidenav = typeof renderSideNav === 'function'
      ? renderSideNav({ ...this.state, examples })
      : <SideNav examples={examples} />

    const context = {
      ...this.state,
      update: this.update
    }

    return (
      <Context.Provider value={context}>
        <Root>
          <SideBar>
            {sidenav}
          </SideBar>
          <Main>
            <Route
              exact
              path='/'
              render={() => (
                <Grid>
                  {examples.map(example => (
                    <div key={example.name}>
                      {example.element}
                    </div>
                  ))}
                </Grid>
              )}
            />
            {examples.map(example => (
              <Route
                key={example.name}
                path={'/' + example.name}
                render={() => example.element}
              />
            ))}
          </Main>
        </Root>
      </Context.Provider>
    )
  }
}

export class SideNav extends React.Component {
  render() {
    const { examples, update, component } = this.props

    return (
      <React.Fragment>
        <NavItem exact to='/'>
          Components
        </NavItem>
        {examples.map(example => (
          <NavItem
            key={example.name}
            to={'/' + example.name}>
            {example.name}
          </NavItem>
        ))}
      </React.Fragment>
    )
  }
}

export class Example extends React.Component {
  render () {
    return (
      <div {...this.props} />
    )
  }
}

export class Detail extends React.Component {
  render () {
    return (
      <div {...this.props} />
    )
  }
}


export default Library
