import React from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

export default class WrapRoutes extends React.Component {
  render () {
    const { Wrapper = 'div', render, routes } = this.props

    const responsiveRoutes = routes.map(({ Component, ...route }) => ({
      ...route,
      Component: props => (
        <Wrapper>
          <Component {...props} />
        </Wrapper>
      )
    }))

    return (
      <Switch>
        {responsiveRoutes.map(({ Component, ...route }) => (
          <Route
            {...route}
            render={props => (
              <Component
                {...props}
                {...route.props}
              />
            )}
          />
        ))}
        <Route
          render={() => (
            <React.Fragment>
              <pre>{DIRNAME}</pre>
              <ul>
                {routes.map(route => (
                  <li key={route.key}>
                    <Link to={route.path}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )}
        />
      </Switch>
    )

    // return render({ })
  }
}
